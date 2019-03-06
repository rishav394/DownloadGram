const { email, password } = require('./credentials');
const notifier = require('mail-notifier');
const request = require('request');
const jsdom = require('jsdom');
const { send } = require('./mailSender');

const imap = {
	user: email, // Imported from credentials.js
	password: password, // Imported from credentials.js
	host: 'imap.gmail.com',
	port: 993, // imap port
	tls: true, // use secure connection
	tlsOptions: { rejectUnauthorized: false },
};

const linkEtract = (x, cb) => {
	x = String(x).trim();
	x = String(x).split('?')[0];
	request(x, (error, response, body) => {
		if (error || !response) {
			console.log(error);
			console.log(response.statusCode);

			cb('Not a VALID URL');
		} else {
			var dom = new jsdom.JSDOM(body);
			var link = dom.window.document.querySelector(
				'[property~="og:image"]',
			).content;

			// Better way but aukad ni hai :P
			// var stream = request(link).pipe(fs.createWriteStream('doodle.png'));
			// stream.on('finish', () =>
			// {
			//     cb()
			// }

			cb(link);
		}
	});
};

// linkEtract(originUri, (link) => {
// 	console.log(link);
// });

const n = notifier(imap);
n.on('connected', () => {
	console.log('Connected');
});
n.on('error', (err) => {
	console.log(err);
	n.start();
});
n.on('mail', (mail) => {
	var from = mail.from[0].address;
	var text = mail.text;
	var ap = String(text)
		.trim()
		.split(/[\s\n]/);
	text = ap[ap.length - 1];
	console.log('Request for ' + text + ' from ' + from);
	linkEtract(text, (link) => {
		console.log(link);
		send(
			"Rishav's DownloadGram",
			from,
			'Your Instagram Image is here 🎉',
			link,
			(response, code) => {
				console.log(response);
			},
		);
	});
});
n.start();
