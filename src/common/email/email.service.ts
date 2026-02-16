import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    });
  }

  async sendConfirmationEmail(email: string, code: string): Promise<void> {
    const html = `
<h1>Thank for your registration</h1>
<p>To finish registration please follow the link below:
    <a href='https://google.com?code=${code}'>complete registration</a>
</p>
`;
    await this.transporter.sendMail({
      from: 'Tarantino',
      to: email,
      subject: 'Email confirmation code',
      html,
    });
  }

  async sendPasswordRecoveryEmail(email: string, recoveryLink: string): Promise<void> {
    const html = `
<h1>Password recovery</h1>
<p>To finish password recovery please follow the link below:
    <a href='${recoveryLink}'>recovery password</a>
</p>
`;
    await this.transporter.sendMail({
      from: 'Tarantino',
      to: email,
      subject: 'Password recovery',
      html,
    });
  }
}
