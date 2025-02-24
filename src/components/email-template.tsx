import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  senderEmail: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  firstName,
  senderEmail,
  message,
}) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>From: {firstName}</p>
    <p>Email: {senderEmail}</p>
    <p>Message:</p>
    <p>{message}</p>
  </div>
);