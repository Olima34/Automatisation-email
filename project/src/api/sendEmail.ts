import { EmailTemplate, Recipient } from '../types';

export async function sendEmail(recipient: Recipient, template: EmailTemplate): Promise<void> {
  const apiKey = import.meta.env.VITE_SENDGRID_API_KEY;
  if (!apiKey) {
    throw new Error('SendGrid API key is missing');
  }

  const content = template.body.replace(/{{firstName}}/g, recipient.firstName);

  const payload = {
    personalizations: [
      {
        to: [{ email: recipient.email }],
        subject: template.subject
      }
    ],
    from: {
      email: 'no-reply@example.com',
      name: 'EmailPro'
    },
    content: [
      {
        type: 'text/plain',
        value: content
      }
    ]
  };

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || 'Failed to send email');
  }
}
