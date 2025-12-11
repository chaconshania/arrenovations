import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Skip email sending if SKIP_EMAIL is set (for testing)
    if (process.env.SKIP_EMAIL === 'true') {
      console.log('Email sending skipped (SKIP_EMAIL=true)');
      return NextResponse.json(
        { message: 'Contact form submitted successfully (email skipped for testing)' },
        { status: 200 }
      );
    }

    const recipientEmail = process.env.RECIPIENT_EMAIL || 'arrenovations.mc@gmail.com';

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'A&R Renovations Website <onboarding@resend.dev>',
      to: [recipientEmail],
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6900; border-bottom: 2px solid #FF6900; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0; padding: 20px; background-color: #f5f5f5; border-radius: 8px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            ${service ? `<p style="margin: 10px 0;"><strong>Service Needed:</strong> ${service}</p>` : ''}
            <p style="margin: 10px 0;"><strong>Submitted:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })}</p>
          </div>

          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
            <p style="padding: 15px; background-color: #fff; border-left: 4px solid #FF6900; margin: 0;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This email was sent from the A&R Renovations contact form.</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully!', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
