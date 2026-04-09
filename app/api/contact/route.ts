import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder');

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check honeypot field (silent reject if filled)
    if (body['bot-field']) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-GB', {
      dateStyle: 'full',
      timeStyle: 'long',
    });

    // Send email using Resend
    await resend.emails.send({
      from: 'The Strativa Website <no-reply@thestrativa.com>',
      to: ['hello@thestrativa.com'],
      reply_to: email,
      subject: `New enquiry from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #0F1113;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                border-bottom: 3px solid #2F5D62;
                padding-bottom: 20px;
                margin-bottom: 30px;
              }
              .header h1 {
                font-family: Georgia, serif;
                font-size: 24px;
                color: #0F1113;
                margin: 0;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: #A89F91;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #0F1113;
              }
              .message-box {
                background: #F7F6F3;
                border-left: 3px solid #2F5D62;
                padding: 20px;
                margin: 20px 0;
              }
              .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid #E8E6E1;
                font-size: 13px;
                color: #A89F91;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>New Enquiry from The Strativa Website</h1>
            </div>
            
            <div class="field">
              <div class="label">From</div>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <div class="label">Email</div>
              <div class="value"><a href="mailto:${email}" style="color: #2F5D62;">${email}</a></div>
            </div>
            
            <div class="message-box">
              <div class="label">Message</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
            
            <div class="footer">
              <p>Sent: ${timestamp}</p>
              <p>Reply directly to this email to respond to ${name}.</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
