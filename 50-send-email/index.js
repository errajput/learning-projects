const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  secure: false, // `true` for port 465, `false` for all other ports
  auth: {
    user: 'alexzander.damore42@ethereal.email',
    pass: '1uscbPzh5Us9e1TsnT',
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(i) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" <alexzander.damore42@ethereal.email>', // sender address
    to: 'bar@example.com, baz@example.com', // list of receivers
    subject: `Hello from NodeJS - ${i}`, // Subject line
    text: 'Hello world?', // plain text body
    html: '<h1>Hello world of NodeJS. Mail Sent using nodeMailer</h1>', // html body
  });

  console.log(i, 'Message sent: %s', info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

for (let i = 1; i <= 10; i++) {
  sendMail(i).catch(console.error);
}
