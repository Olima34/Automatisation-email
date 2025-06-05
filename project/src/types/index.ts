export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  body: string;
}

export interface Recipient {
  firstName: string;
  email: string;
}