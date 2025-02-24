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

    const { data, error } = await resend.emails.send({
      from: 'Automated Zach <automatedzach@gmail.com>',
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
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: `Internal server error: ${error}}` },
      { status: 500 }
    );
  }
}