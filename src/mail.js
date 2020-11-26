var receiverEmailAddress = 'you.iwamoto918@gmail.com'
var senderEmailAddress = 'eatop.contact@gmail.com'
var senderEmailPassword = 'eatopContact'

var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: senderEmailAddress,
    pass: senderEmailPassword
  }
})

var mailOptions1 = {
  from: senderEmailAddress,
  to: receiverEmailAddress,
  subject: 'こんにちは',
  text: 'ようです'
}

transporter. sendMail(mailOptions1, function (error, info) {
  if (error) {
    console.log(error)
  } else {
    console.log('Email sent: ' + info.response)
  }
})