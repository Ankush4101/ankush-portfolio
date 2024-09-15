import sendgrid from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();
const API_KEY = process.env.SENDGRID_API_KEY;
sendgrid.setApiKey(API_KEY);
async function sendEmail(req, res) {
  try {
    // console.log('Sending email with data:', req.body);
    await sendgrid.send({
      from: 'ankushgaming4101@gmail.com', // Ensure this is a verified sender
      to: 'ankushdesai40101.ca@gmail.com', // Ensure this is a valid recipient
      subject: `email de: ${req.body.name}`,
      text: `🙋/🙋‍♂️ Name: ${req.body.name}\n ✉️ 
      Email: ${req.body.email}\n 📝 Message: ${req.body.message}`,
    });
    // console.log('Email sent successfully:', response);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    // console.error('Error sending email:', error.response.body);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
}

export default sendEmail;
