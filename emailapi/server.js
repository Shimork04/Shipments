// const express = require("express");
// const nodemailer = require("nodemailer");
// const cron = require("node-cron");
// const bodyParser = require("body-parser");
// const { v4: uuidv4 } = require("uuid");

// const app = express();
// app.use(bodyParser.json());

// const PORT = process.env.PORT || 3000;

// const transporter = nodemailer.createTransport({
//   service: "hotmail",
//   auth: {
//     user: "orbixstudio@hotmail.com",
//     pass: "vickskigoli@04",
//   },
// });

// const scheduledEmails = [];


// // post api
// app.post("/schedule-email", (req, res) => {
//   const { to, subject, body, scheduleTime } = req.body;

//   // input validation
//   if (!to || !subject || !body || !scheduleTime) {
//     return res.status(400).json({ error: "Email incomplete." });
//   }

//   const task = cron.schedule(scheduleTime, () => {
//     const mailParticulars = {
//       from: "orbixstudio@hotmail.com",
//       to: to,
//       subject: subject,
//       body: body,
//     };
//   });

//   transporter.sendMail(mailParticulars, (error, info) => {
//     if (error) {
//       console.log("Error in sending the email", error);
//     } else {
//       console.log("Email Sent:", info.response);
//     }
//   });

//   scheduledEmails.push(task);
//   res.status(200).json({ message: "Email Scheduled successfully." });
// });


// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


const express = require('express');
const nodemailer = require('nodemailer');
const cron = require('node-cron');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: 'orbixstudio@hotmail.com',
        pass: 'vickskigoli@04',
    },
});

// Schedule an email
const scheduledEmails = [];

app.post('/schedule-email', (req, res) => {
    const { email, subject, message, scheduleTime } = req.body;

    // Validate input
    if (!email || !subject || !message || !scheduleTime) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Schedule the email
    const task = cron.schedule(scheduleTime, () => {
        const mailOptions = {
            from: 'orbixstudio@hotmail.com',
            to: email,
            subject: subject,
            text: message,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    });

    scheduledEmails.push(task);
    res.status(200).json({ message: 'Email scheduled successfully.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
