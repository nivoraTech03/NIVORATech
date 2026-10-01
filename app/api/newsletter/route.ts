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

    // Premium Offer / Welcome Template (Restored Original Dark Theme)
    const userHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Nivora - Exclusive Offer Inside</title>
      </head>
      <body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #030712; margin: 0; padding: 0; -webkit-font-smoothing: antialiased;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #030712; padding: 40px 20px;">
          <tr>
            <td align="center">
              <table width="100%" max-width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #111827; border-radius: 24px; overflow: hidden; border: 1px solid #1f2937; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
                
                <!-- Header with Gradient & Logo -->
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

                <!-- Content Area -->
                <tr>
                  <td style="padding: 40px 30px;">
                    <h2 style="color: #f9fafb; font-size: 24px; font-weight: 700; margin: 0 0 20px 0;">Welcome to the Inner Circle! 🚀</h2>
                    <p style="color: #9ca3af; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                      Thank you for joining our newsletter. You're now on the list to receive our best web design insights, tech updates, and exclusive client offers before anyone else.
                    </p>

                    <!-- Offer Card -->
                    <div style="background: linear-gradient(to right, rgba(79, 70, 229, 0.1), rgba(124, 58, 237, 0.1)); border: 1px solid rgba(124, 58, 237, 0.3); border-radius: 16px; padding: 25px; margin: 30px 0; text-align: center;">
                      <span style="background-color: #4f46e5; color: #ffffff; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Special Welcome Offer</span>
                      <h3 style="color: #f9fafb; font-size: 22px; font-weight: 700; margin: 20px 0 10px 0;">Get 15% Off Your First Project</h3>
                      <p style="color: #d1d5db; font-size: 15px; line-height: 1.5; margin: 0 0 20px 0;">
                        Ready to build something amazing? Reply to this email or use the code below to claim your exclusive discount on any web development or design service.
                      </p>
                      
                      <!-- Coupon Code -->
                      <div style="background-color: #030712; border: 2px dashed #4f46e5; border-radius: 12px; padding: 15px; margin-bottom: 20px;">
                        <span style="color: #818cf8; font-family: monospace; font-size: 24px; font-weight: 800; letter-spacing: 2px;">NIVORA-WELCOME</span>
                      </div>

                      <a href="https://nivora.in" style="display: inline-block; background-color: #ffffff; color: #111827; font-weight: 700; font-size: 16px; text-decoration: none; padding: 14px 30px; border-radius: 12px; transition: all 0.3s ease;">
                        Start Your Project Today
                      </a>
                    </div>

                    <!-- Freebie Section -->
                    <div style="border-top: 1px solid #1f2937; padding-top: 30px; margin-top: 30px;">
                      <h4 style="color: #e5e7eb; font-size: 18px; font-weight: 600; margin: 0 0 10px 0;">🎁 Bonus: Free Consultation</h4>
                      <p style="color: #9ca3af; font-size: 15px; line-height: 1.6; margin: 0;">
                        Not sure where to start? We're offering a complimentary 30-minute strategy call to discuss your business goals and how we can elevate your digital presence.
                      </p>
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
                    <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">
                      You received this email because you subscribed to updates from Nivora.
                    </p>
                    <p style="color: #475569; font-size: 13px; margin: 0;">
                      &copy; ${new Date().getFullYear()} Nivora Inc. All rights reserved.
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

    const adminHtmlTemplate = `
      <!DOCTYPE html>
      <html>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
          <div style="background-color: #4f46e5; padding: 30px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: 1px;">NEW SUBSCRIBER</h1>
          </div>
          <div style="padding: 40px 30px;">
            <p style="color: #52525b; font-size: 16px; margin-bottom: 30px;">You have a new subscriber for the Nivora Studio Newsletter.</p>
            
            <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px; width: 120px;">Email Address</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${safeEmail}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Status</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #10b981; font-weight: 600;">Active</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">Device Type</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #0f172a; font-weight: 600;">${deviceType}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #64748b; font-size: 14px;">User IP Address</td>
                  <td style="padding: 12px 0; color: #0f172a; font-weight: 600;">${ip}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;

    // 1. Send beautiful welcome/offer email to the subscriber
    await transporter.sendMail({
      from: '"Nivora (No-Reply)" <' + SMTP_EMAIL + '>',
      to: safeEmail,
      replyTo: SMTP_EMAIL,
      subject: `Welcome to Nivora! Here's your exclusive offer 🎁`,
      html: userHtmlTemplate,
    });

    // 2. Send notification to admin (you)
    await transporter.sendMail({
      from: `"Nivora System" <${SMTP_EMAIL}>`,
      to: SMTP_EMAIL,
      replyTo: safeEmail,
      subject: `New Newsletter Subscription: ${safeEmail}`,
      html: adminHtmlTemplate,
    });

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed!' },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Newsletter error:', error);
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    );
  }
}
