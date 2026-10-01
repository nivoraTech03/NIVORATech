import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    const body = await req.json();
    const { name, phone, email, type, query, message } = body;

    // Server-side validation
    if (!name || !phone || !query) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    // Extract metadata (IP and Device)
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'Unknown IP';
    const userAgent = req.headers.get('user-agent') || 'Unknown Device';
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
      service: 'gmail',
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const safeName = escapeHtml(name);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email || 'Not provided');
    const safeType = escapeHtml(type || 'Not specified');
    const safeQuery = escapeHtml(query);
    const safeMessage = escapeHtml(message || 'No additional message.');

    // -----------------------------------------------------
    // 1. ADMIN NOTIFICATION EMAIL TEMPLATE (Sleek & Clean)
    // -----------------------------------------------------
    const adminHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
          <div style="background-color: #000000; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">NEW LEAD RECEIVED</h1>
          </div>
          <div style="padding: 40px 30px;">
            <p style="color: #52525b; font-size: 16px; margin-bottom: 30px;">You have a new project enquiry from your website.</p>
            
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; width: 120px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${safeName}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${safePhone}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Project Category</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${safeType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Enquiry Subject</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${safeQuery}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Device Type</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${deviceType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">User IP Address</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${ip}</td>
                </tr>
              </table>
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
                <p style="color: #64748b; font-size: 14px; margin: 0 0 8px 0;">Additional Requirements / Message</p>
                <p style="color: #0f172a; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // -----------------------------------------------------
    // 2. CUSTOMER AUTO-REPLY EMAIL TEMPLATE (Restored Original Dark Theme)
    // -----------------------------------------------------
    const customerHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You For Reaching Out - Nivora</title>
      </head>
      <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #030712; margin: 0; padding: 0; -webkit-font-smoothing: antialiased;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #030712; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #111827; border-radius: 24px; overflow: hidden; border: 1px solid #1f2937; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
                
                <!-- Banner & Logo -->
                <tr>
                  <td style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 40px 30px; text-align: center;">
                    <table cellpadding="0" cellspacing="0" style="margin: 0 auto; display: inline-block;">
                      <tr>
                        <td valign="middle">
                          <div style="width: 32px; height: 32px; border-radius: 8px; background: linear-gradient(to top right, #4f46e5, #6366f1, #38bdf8); text-align: center; line-height: 32px; color: #ffffff; font-family: sans-serif; font-weight: bold; font-size: 18px; margin-right: 12px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                            N
                          </div>
                        </td>
                        <td valign="middle" style="text-align: left;">
                          <h1 style="color: #ffffff; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.5px; line-height: 1;">NIVORA</h1>
                          <p style="color: #e0e7ff; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 4px 0 0 0;">Digital Studio</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                
                <!-- Body -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="color: #f9fafb; font-size: 24px; font-weight: 700; margin: 0 0 20px 0;">Hi ${safeName.split(' ')[0]},</h2>
                    <p style="color: #9ca3af; font-size: 16px; line-height: 1.6; margin: 0 0 25px 0;">
                      Thank you for reaching out to us! We have received your enquiry regarding <strong>${safeType}</strong> and our team is already reviewing your requirements.
                    </p>
                    <p style="color: #9ca3af; font-size: 16px; line-height: 1.6; margin: 0 0 35px 0;">
                      We aim to respond to all enquiries within 24 hours. In the meantime, feel free to browse our recent work or reply directly to this email if you have any immediate questions.
                    </p>
                    
                    <!-- Next Steps -->
                    <div style="background: linear-gradient(to right, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1)); border: 1px solid rgba(124, 58, 237, 0.3); border-radius: 16px; padding: 25px; margin-bottom: 30px;">
                      <h3 style="color: #f9fafb; font-size: 16px; font-weight: 700; margin: 0 0 15px 0; text-transform: uppercase; letter-spacing: 1px;">What happens next?</h3>
                      <ul style="color: #d1d5db; font-size: 15px; line-height: 1.6; margin: 0; padding-left: 20px;">
                        <li style="margin-bottom: 10px;">Our lead developer will review your request.</li>
                        <li style="margin-bottom: 10px;">We'll reach out to schedule a quick discovery call.</li>
                        <li>We'll provide a tailored proposal for your project.</li>
                      </ul>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #0f172a; padding: 30px; text-align: center; border-top: 1px solid #1f2937;">
                    <div style="margin-bottom: 15px;">
                      <a href="https://www.instagram.com/nivorat.ech/" style="text-decoration: none; display: inline-block; margin: 0 10px;">
                        <img src="https://img.icons8.com/ios-filled/24/64748b/instagram-new.png" alt="Instagram" style="vertical-align: middle; width: 24px; height: 24px;" />
                      </a>
                    </div>
                    <a href="https://nivora-tech.vercel.app" style="display: inline-block; background-color: #ffffff; color: #111827; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-bottom: 20px;">Visit Our Website</a>
                    <p style="color: #64748b; font-size: 13px; margin: 0;">
                      &copy; ${new Date().getFullYear()} Nivora Tech. All rights reserved.
                    </p>
                    <p style="color: #475569; font-size: 11px; margin: 15px 0 0 0;">
                      This is an automated message. Please do not reply to this email.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // 1. Send notification to admin
    await transporter.sendMail({
      from: `"Nivora Website" <${SMTP_EMAIL}>`,
      to: SMTP_EMAIL,
      subject: `New Lead: ${safeType} from ${safeName}`,
      html: adminHtmlTemplate,
    });

    // 2. Send Auto-Reply to the customer (if they provided an email)
    if (email) {
      await transporter.sendMail({
        from: '"Nivora (No-Reply)" <' + SMTP_EMAIL + '>',
        to: safeEmail,
        subject: `We've received your enquiry, ${safeName.split(' ')[0]}!`,
        html: customerHtmlTemplate,
      });
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
