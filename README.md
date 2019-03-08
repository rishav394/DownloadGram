# DownloadGram

Download **Instagram** Images via email 📫

## Process

Make a new `credentials.js` file and export email and password so that you can use it in `index.js` and `mailSender.js`.

`credentials.js` should look something like this:

```js
const email = 'fakeemail@gmail.com';
const password = 'fakepassword';

module.exports = {
    email,
    password,
};
```

and then import `email` and `password` in `index.js` and `mailSender.js`

```js
const { email, password } = require('./credentials');
```

If you prefer 💪 *ES6* instead use this:

```js
const email = 'fakeemail@gmail.com';
const password = 'fakepassword';

export default {
    email,
    password,
};
```

and then import `email` and `password` in `index.js` and `mailSender.js`

```js
const { email, password } = require('./credentials').default;
```

Keep in mind that your environment (e.g. node.js) must support ES6 Module syntax in order to use the ES6 syntax. NodeJS uses CommonJS Module syntax (module.exports) not ES6 module syntax (export keyword). So refer to [this](https://stackoverflow.com/questions/38296667/getting-unexpected-token-export) page to get more details and solve the `undefined token export` error, if you encounter it. The solution to this problem is to use *babel npm package* to transpile your ES6 to a commonjs target.

Send a mail to the specified email address 📮 with the link of the instagram image. It will send you back the image which you can easily download by right-clicking and Save As in your browser 🎉

The most basic way would be to use the share button on instagram and then share using email rather than copying the link and then sending the mail ⏰

**Note**: If using a Gmail account 📧, you will need to do two things:

- [x] Enable IMAP in your Gmail account settings, which is detailed [here](https://support.google.com/mail/answer/7126229?hl=en).
- [x] Authorize "less secure apps", which you is laid out in "Option 2" [here](https://support.google.com/accounts/answer/6010255?hl=en).

## My Server 🔥

I run this bot as well. Feel free to send an email to `halalezpzgg@gmail.com` to try it out. Expect the requested image within 12 seconds.

## ⚠️ Warning ⚠️

You will need to Turn Less Secure Apps on so I really dont recommend you to do it with your mail account. This is why I made a maiden email ID to host my bot.
