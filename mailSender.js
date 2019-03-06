const { email, password } = require('./credentials').default;
const nodemailer = require('nodemailer');

function send(from, to, subject, text, callback) {
	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: email, // Imported from credentials.js
			pass: password, // Imported from credentials.js
		},
	});

	// setup email data with unicode symbols
	let mailOptions = {
		from: '"' + from + '"' + ' halalezpzgg@gmail.com', // sender address
		to: to, // list of receivers
		subject: subject, // Subject line
		text: text,
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			callback(error.message, 417);
		} else {
			callback('Email sent: ' + info.response, 200);
		}
	});
}

module.exports = {
	send,
};
