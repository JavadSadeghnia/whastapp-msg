const wbm = require('wbm');

wbm.start().then(async () => {
    const phones = ['989354527957'];
    const message = 'This is a test message using Javascript code.';
    await wbm.send(phones, message);
    await wbm.end();
}).catch(err => console.log(err));