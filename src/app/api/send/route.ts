import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    try {
      const { data, error } = await resend.emails.send({
        from: 'Automatic Zach <hello@zprong.com>',
        to: ['prongzachary@gmail.com'],
        subject: 'Message from your website',
        react: EmailTemplate({
          firstName: name,
          senderEmail: email,
          message: message
        }) as React.ReactNode,
      });

      if (error) {
        return NextResponse.json(
          { error: `Email service error: ${error.message}` },
          { status: 500 }
        );
      }

      return NextResponse.json(
        { message: 'Email sent successfully', data },
        { status: 200 }
      );
    } catch (resendError) {
      return NextResponse.json(
        { error: `Email service error: ${resendError}` },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: `Request processing error: ${error}` },
      { status: 500 }
    );
  }
}