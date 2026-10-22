import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper to escape HTML
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
    const body = await req.json();
    const { email } = body;

    // Validation with constraints
    if (!email || typeof email !== 'string' || email.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    const safeEmail = escapeHtml(email);

    // Extract metadata (IP and Device)
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown IP';
    const userAgent = req.headers.get('user-agent') || 'Unknown Device';
    const isMobile = /mobile/i.test(userAgent);
    const deviceType = isMobile ? 'Mobile' : 'Desktop/Tablet';
    const SMTP_EMAIL = process.env.SMTP_EMAIL;
    const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

    if (!SMTP_EMAIL || !SMTP_PASSWORD) {
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    // Normal Clean Welcome Email Template
    const userHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Nexnify</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 32px 16px; color: #1e293b;">
        <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="padding: 24px 28px; border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">
            <h2 style="margin: 0; font-size: 20px; font-weight: 800; color: #0f172a; letter-spacing: -0.3px;">Nexnify</h2>
            <p style="margin: 4px 0 0 0; font-size: 12px; font-weight: 600; color: #6366f1; text-transform: uppercase; letter-spacing: 0.8px;">Digital Studio</p>
          </div>
          
          <div style="padding: 28px;">
            <h3 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 700; color: #0f172a;">Welcome to Nexnify!</h3>
            <p style="margin: 0 0 16px 0; font-size: 15px; color: #334155; line-height: 1.6;">
              Thank you for subscribing. You will receive our practical insights on modern web development, performance optimization, and case studies.
            </p>

            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin: 24px 0; text-align: center;">
              <span style="display: inline-block; background-color: #e0e7ff; color: #4338ca; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 10px;">Welcome Offer</span>
              <h4 style="margin: 6px 0 8px 0; font-size: 18px; font-weight: 700; color: #0f172a;">15% Off Your First Website Project</h4>
              <p style="margin: 0 0 16px 0; font-size: 14px; color: #64748b; line-height: 1.5;">
                Quote this code when starting your project or simply reply to this email:
              </p>
              <div style="display: inline-block; background-color: #ffffff; border: 1px dashed #6366f1; border-radius: 6px; padding: 10px 18px; font-family: monospace; font-size: 18px; font-weight: 700; color: #4f46e5; letter-spacing: 1px;">
                NEXNIFY-WELCOME
              </div>
            </div>

            <div style="margin: 24px 0; text-align: center;">
              <a href="https://nexnify.in" style="display: inline-block; background-color: #4f46e5; color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Visit Our Website &rarr;
              </a>
            </div>

            <p style="margin: 24px 0 0 0; font-size: 14px; color: #64748b; line-height: 1.6;">
              Have a question or looking to build a new website? Reply directly to this email or message us on WhatsApp at <strong>+91 95754 50177</strong>.
            </p>
          </div>

          <div style="padding: 20px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; line-height: 1.5;">
            <p style="margin: 0 0 6px 0;"><strong>Nexnify</strong> &bull; Delhi NCR, India &bull; <a href="https://nexnify.in" style="color: #4f46e5; text-decoration: none;">nexnify.in</a></p>
            <p style="margin: 0; color: #94a3b8;">You received this email because you subscribed on nexnify.in.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Normal Clean Admin Notification Template
    const adminHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Newsletter Subscriber</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 32px 16px; color: #1e293b;">
        <div style="max-width: 580px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="padding: 24px 28px; border-bottom: 1px solid #e2e8f0; background-color: #ffffff;">
            <h2 style="margin: 0; font-size: 18px; font-weight: 700; color: #0f172a; letter-spacing: -0.2px;">Nexnify <span style="font-weight: 400; color: #64748b; font-size: 14px;">| Newsletter</span></h2>
          </div>
          <div style="padding: 28px;">
            <p style="margin: 0 0 20px 0; font-size: 15px; color: #475569; line-height: 1.5;">You have a new subscriber for the Nexnify Newsletter.</p>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 130px;">Subscriber Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;"><a href="mailto:${safeEmail}" style="color: #4f46e5; text-decoration: none;">${safeEmail}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Device Type</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 600;">${deviceType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748b; font-size: 14px;">User IP Address</td>
                <td style="padding: 10px 0; color: #64748b; font-size: 13px;">${ip}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 16px 28px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
            Nexnify Website Newsletter System &bull; <a href="https://nexnify.in" style="color: #64748b; text-decoration: underline;">nexnify.in</a>
          </div>
        </div>
      </body>
      </html>
    `;

    // Plain text alternative for subscriber welcome email
    const userTextTemplate = `Welcome to Nexnify!\n\n` +
      `Thank you for joining our newsletter list. You're now subscribed to receive our latest web design insights, tech updates, and exclusive client offers.\n\n` +
      `Special Welcome Offer: Get 15% Off Your First Project.\n` +
      `Whether you need a high-performance Next.js application, an institutional portal, or a sleek business website, we are here to help.\n\n` +
      `Explore our work: https://nexnify.in/work\n` +
      `Chat on WhatsApp: +91 95754 50177\n\n` +
      `Best regards,\n` +
      `The Nexnify Team\n` +
      `https://nexnify.in`;

    // Plain text alternative for admin notification email
    const adminTextTemplate = `NEW NEWSLETTER SUBSCRIBER\n\n` +
      `Subscriber Email: ${email}\n` +
      `Device Type: ${deviceType}\n` +
      `User IP: ${ip}\n` +
      `Date: ${new Date().toISOString()}`;

    // 1. Send beautiful welcome/offer email to the subscriber
    await transporter.sendMail({
      from: `"Nexnify" <${SMTP_EMAIL}>`,
      to: safeEmail,
      replyTo: SMTP_EMAIL,
      subject: `Welcome to Nexnify - Web Development Guide & Offer`,
      text: userTextTemplate,
      html: userHtmlTemplate,
    });

    // 2. Send notification to admin (you)
    await transporter.sendMail({
      from: `"Nexnify System" <${SMTP_EMAIL}>`,
      to: SMTP_EMAIL,
      replyTo: safeEmail,
      subject: `New Newsletter Subscription: ${safeEmail}`,
      text: adminTextTemplate,
      html: adminHtmlTemplate,
    });

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
