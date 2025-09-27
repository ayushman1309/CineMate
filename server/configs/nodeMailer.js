import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";
configDotenv();

// Create a transporter for SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async ({ to, subject, body }) => {
  const response = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject,
    html: body,
  });
  return response;
};

export default sendEmail;
