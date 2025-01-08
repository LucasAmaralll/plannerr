// src/config/nodemailer.js
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,  // Defina o e-mail no .env
    pass: process.env.EMAIL_PASS,  // Defina a senha do e-mail no .env
  },
});

module.exports = { transporter };
