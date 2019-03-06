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

Send a mail to the specified email address 📮 with the link of the instagram image. It will send you back the image which you can easily download by right-clicking and Save As in your browser 🎉

The most basic way would be to use the share button on instagram and then share using email rather than copying the link and then sending the mail ⏰

**Note**: If using a Gmail account 📧, you will need to do two things:

- [x] Enable IMAP in your Gmail account settings, which is detailed [here](https://support.google.com/mail/answer/7126229?hl=en).
- [x] Authorize "less secure apps", which you is laid out in "Option 2" [here](https://support.google.com/accounts/answer/6010255?hl=en).

## My Server 🔥

I run this bot as well. Feel free to send an email to `halalezpzgg@gmail.com` to try it out. Expect the requested image within 12 seconds.

## ⚠️ Warning ⚠️

You will need to Turn Less Secure Apps on so I really dont recommend you to do it with your mail account. This is why I made a maiden email ID to host my bot.
