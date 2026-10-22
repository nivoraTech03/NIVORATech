import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { checkRateLimit, sanitizeSingleLine, getClientIp } from '@/lib/rateLimit';

// Helper to escape HTML to prevent XSS in the email body
function escapeHtml(unsafe: string) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);

    // 1. Sliding Window Rate Limiting (Defense against DoS and SMTP flooding)
    const rateLimit = checkRateLimit(`contact:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a few minutes before submitting again.' },
        {
          status: 429,
          headers: {
            'Retry-After': String(Math.ceil(rateLimit.resetInMs / 1000)),
          },
        }
      );
    }

    const body = await req.json();

    // 2. Honeypot check for automated bot scrapers
    if (body.website_hp || body.hp_field || body.company_url_hp) {
      return NextResponse.json(
        { success: true, message: 'Message sent successfully!' },
        { status: 200 }
      );
    }

    const { name, phone, email, type, query, message } = body;

    // Server-side validation with constraints
    if (!name || typeof name !== 'string' || name.length > 100) {
      return NextResponse.json({ error: 'Invalid or missing name' }, { status: 400 });
    }
    if (!phone || typeof phone !== 'string' || phone.length > 20) {
      return NextResponse.json({ error: 'Invalid or missing phone' }, { status: 400 });
    }
    if (email && (typeof email !== 'string' || email.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    if (type && (typeof type !== 'string' || type.length > 100)) {
      return NextResponse.json({ error: 'Invalid project type' }, { status: 400 });
    }
    if (!query || typeof query !== 'string' || query.length > 500) {
      return NextResponse.json({ error: 'Invalid or missing query' }, { status: 400 });
    }
    if (message && (typeof message !== 'string' || message.length > 5000)) {
      return NextResponse.json({ error: 'Message is too long (max 5000 chars)' }, { status: 400 });
    }

    // 3. CRLF / Header Injection prevention
    const cleanName = sanitizeSingleLine(name);
    const cleanPhone = sanitizeSingleLine(phone);
    const cleanEmail = email ? sanitizeSingleLine(email) : '';
    const cleanType = sanitizeSingleLine(type || 'General Inquiry');
    const cleanQuery = sanitizeSingleLine(query);

    // Extract device metadata
    const userAgent = sanitizeSingleLine(req.headers.get('user-agent') || 'Unknown Device');
    const isMobile = /mobile/i.test(userAgent);
    const deviceType = isMobile ? 'Mobile' : 'Desktop/Tablet';

    const SMTP_EMAIL = process.env.SMTP_EMAIL;
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      console.error('SMTP credentials not configured in environment.');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const safeName = escapeHtml(cleanName);
    const safePhone = escapeHtml(cleanPhone);
    const safeEmail = escapeHtml(cleanEmail || 'Not provided');
    const safeType = escapeHtml(cleanType);
    const safeQuery = escapeHtml(cleanQuery);
    const safeMessage = escapeHtml(message || 'No additional message.');


    // -----------------------------------------------------
    // 1. ADMIN NOTIFICATION EMAIL TEMPLATE (Normal Clean UI)
    // -----------------------------------------------------
    const adminHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Lead Received</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 32px 16px; color: #1e293b;">
        <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="padding: 24px 28px; border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">
            <h2 style="margin: 0; font-size: 18px; font-weight: 700; color: #0f172a; letter-spacing: -0.2px;">Nexnify <span style="font-weight: 400; color: #64748b; font-size: 14px;">| Website Inquiry</span></h2>
          </div>
          <div style="padding: 28px;">
            <p style="margin: 0 0 20px 0; font-size: 15px; color: #475569; line-height: 1.5;">You received a new project enquiry from <strong>${safeName}</strong>.</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 130px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;"><a href="mailto:${safeEmail}" style="color: #4f46e5; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Phone</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;"><a href="tel:${safePhone}" style="color: #4f46e5; text-decoration: none;">${safePhone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Project Category</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${safeType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Enquiry Subject</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${safeQuery}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Device / IP</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">${deviceType} (${ip})</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px;">
              <div style="font-size: 12px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 6px;">Message / Requirements</div>
              <div style="font-size: 14px; color: #0f172a; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</div>
            </div>
          </div>
          <div style="padding: 16px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
            Nexnify Website Lead System &bull; <a href="https://nexnify.in" style="color: #64748b; text-decoration: underline;">nexnify.in</a>
          </div>
        </div>
      </body>
      </html>
    `;

    // -----------------------------------------------------
    // 2. CUSTOMER AUTO-REPLY EMAIL TEMPLATE (Normal Clean UI)
    // -----------------------------------------------------
    const customerHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>We've received your inquiry - Nexnify</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 32px 16px; color: #1e293b;">
        <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="padding: 24px 28px; border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px;">Nexnify</h2>
            <p style="margin: 4px 0 0 0; font-size: 12px; font-weight: 600; color: #6366f1; text-transform: uppercase; letter-spacing: 0.8px;">Digital Studio</p>
          </div>
          
          <div style="padding: 28px;">
            <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700; color: #0f172a;">Hi ${safeName.split(' ')[0]},</h3>
            <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155; line-height: 1.6;">
              Thank you for reaching out to Nexnify. We have received your inquiry regarding <strong>${safeType}</strong> and our team is already reviewing your details.
            </p>
            <p style="margin: 0 0 24px 0; font-size: 15px; color: #334155; line-height: 1.6;">
              We respond to all inquiries within <strong>24 hours</strong> with initial thoughts and project estimates.
            </p>
            
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; margin-bottom: 24px;">
              <h4 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">What happens next?</h4>
              <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #334155; line-height: 1.6;">
                <li style="margin-bottom: 6px;">Our technical lead will review your project scope and reference links.</li>
                <li style="margin-bottom: 6px;">We'll connect with you on WhatsApp or email to discuss timeline & deliverables.</li>
                <li>We'll provide a transparent, milestone-based proposal.</li>
              </ul>
            </div>

            <div style="margin: 24px 0; text-align: center;">
              <a href="https://nexnify.in/work" style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                View Recent Client Projects &rarr;
              </a>
            </div>

            <p style="margin: 24px 0 0 0; font-size: 14px; color: #64748b; line-height: 1.6;">
              Need to share more references or have an urgent query? Feel free to reply directly to this email or message us on WhatsApp at <strong>+91 95754 50177</strong>.
            </p>
          </div>

          <div style="padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; line-height: 1.5;">
            <p style="margin: 0 0 6px 0;"><strong>Nexnify</strong> &bull; Delhi NCR, India &bull; <a href="https://nexnify.in" style="color: #4f46e5; text-decoration: none;">nexnify.in</a></p>
            <p style="margin: 0; color: #94a3b8;">You received this email because you submitted an inquiry on nexnify.in.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text alternative for admin email (essential to pass spam filters)
    const adminTextTemplate = `NEW LEAD RECEIVED - Nexnify Website\n\n` +
      `Name: ${cleanName}\n` +
      `Email: ${cleanEmail || 'Not provided'}\n` +
      `Phone: ${cleanPhone}\n` +
      `Project Category: ${cleanType}\n` +
      `Enquiry Subject: ${cleanQuery}\n` +
      `Device Type: ${deviceType}\n` +
      `User IP: ${ip}\n\n` +
      `Message / Requirements:\n${message || 'No additional message.'}`;

    // Plain text alternative for customer auto-reply
    const customerTextTemplate = `Hi ${cleanName.split(' ')[0]},\n\n` +
      `Thank you for reaching out to Nexnify! We have received your inquiry regarding "${cleanType}" and our engineering team is reviewing your requirements.\n\n` +
      `We aim to respond to all inquiries within 24 hours. In the meantime, feel free to reply directly to this email or connect with us on WhatsApp at +91 95754 50177.\n\n` +
      `Best regards,\n` +
      `The Nexnify Team\n` +
      `https://nexnify.in`;

    // 1. Send notification to admin
    await transporter.sendMail({
      from: `"Nexnify Website" <${SMTP_EMAIL}>`,
      to: SMTP_EMAIL,
      replyTo: cleanEmail && cleanEmail !== 'Not provided' ? cleanEmail : undefined,
      subject: `New Lead: ${cleanType} from ${cleanName}`,
      text: adminTextTemplate,
      html: adminHtmlTemplate,
    });

    // 2. Send Auto-Reply to the customer (if they provided an email)
    if (cleanEmail) {
      await transporter.sendMail({
        from: `"Nexnify" <${SMTP_EMAIL}>`,
        to: cleanEmail,
        replyTo: SMTP_EMAIL,
        subject: `We've received your inquiry, ${safeName.split(' ')[0]} - Nexnify`,
        text: customerTextTemplate,
        html: customerHtmlTemplate,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
