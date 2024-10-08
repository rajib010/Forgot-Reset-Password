import nodeMailer from "nodemailer"
import crypto from "crypto"
import dotenv from 'dotenv'

dotenv.config();

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL,
        pass: process.env.APP_PASSWORD
    }
});

const generateResetToken = function () {
    return crypto.randomBytes(20).toString('hex');
}

const sendResetEmail = async function (userEmail, resetToken) {
    const resetLink = `${process.env.DOMAIN}/reset-password?token=${resetToken}`;
    const mailOptions = {
        from: process.env.GMAIL,
        to: userEmail,
        subject: 'password reset',
        text: `Please click on the link below to reset your password: ${resetLink}`
    }

    try {
        await transporter.sendMail(mailOptions);
        console.log('Password reset link sent.');
    } catch (error) {
        console.log('Error in sending mail', error);

    }
}

export { transporter, sendResetEmail, generateResetToken }