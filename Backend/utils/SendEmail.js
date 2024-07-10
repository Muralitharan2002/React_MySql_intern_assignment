require('dotenv').config()
const nodemailer = require('nodemailer');
const { google } = require('googleapis');

// These id's and secrets should come from .env file.
const CLIENT_ID = process.env.CLIENT_ID;
const CLEINT_SECRET = process.env.CLEINT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMail = async (refereeEmail, refereeName, courseName, referrerName) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: process.env.USER_EMAIL,
                clientId: CLIENT_ID,
                clientSecret: CLEINT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken,
            },
        });

        const mailOptions = {
            from: `Muralitharan S <${process.env.USER_EMAIL}>`,
            to: refereeEmail,
            subject: `You've been referred to ${courseName}!`,
            text: `Hi ${refereeName},
            You have been referred by ${referrerName} to enroll in our ${courseName}!
            We are excited to have you on board. Please visit our website for more details and to complete your registration.
            Best regards, Refer&Earn Course Team`,
        };

        const result = await transport.sendMail(mailOptions);
        console.log(result)
        return result;
    } catch (error) {
        return error;
    }
}


module.exports = sendMail