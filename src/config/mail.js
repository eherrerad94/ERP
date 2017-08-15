
import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: 'outlook',
    secure: false,
    port: 25,
    auth: {
        user: 'itunesjc@hotmail.com',
        pass: '415688.Jc'
    },
    tls: {
        rejectUnauthorized: false
    }
});

const setMailOptions = (fromOne, to, subject, text, html) => {
    var mailOptions = {
        from: fromOne,
        to: to,
        subject: subject,
        text: text,
        html: html
    }
    return mailOptions;
}

const sendMail = (mailOptions) => {

    transporter.sendMail(mailOptions, (err, info) => {
        if (err)
            console.log(err);
        console.log("Mensaje enviado correctamente");
    });
}


module.exports = {
    sendMail,
    setMailOptions
}