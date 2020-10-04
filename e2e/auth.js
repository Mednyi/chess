const errMails = [
    '11112qq',
    '@fhdssdjh.ru',
    'wqrqwwe@.ru',
    '@.ru',
    '(asdfasdf@asdd.ru',
    'asdaaad@dfsdf.com.',
    'com'
];
const goodMails = [
    'qwerty@me.ru',
    'sdfsdf.sss@dfsd.com'
];
module.exports = {
/*    'Landing test' : function(browser) {
        browser
            .url('http://localhost:63342/chess/#/')
            .waitForElementVisible('body')
            .assert.visible('.button')
            .click('.button')
            .assert.containsText('.mainline-results', 'Nightwatch.js')
    },*/
    'Auth email verification' : function (browser) {
        browser
            .url('http://localhost:5500/#/auth')
            .pause(10000)
            .waitForElementVisible('main')
            .assert.visible('input[type=text]');
        for(email of errMails) {
            console.log(email)
            browser
                .setValue('input[type=text]', email)
                .click('input[type=password]')
                .pause(1000)
                .assert.cssClassPresent('input[type=text]', 'error')
                .pause(1000)
                .clearValue('input[type=text]')
        }
        for(email of goodMails) {
            console.log(email)
            browser
                .setValue('input[type=text]', email)
                .click('input[type=password]')
                .pause(1000)
                .assert.not.cssClassPresent('input[type=text]', 'error')
                .assert.cssClassPresent('input[type=text]', 'success')
                .pause(1000)
                .clearValue('input[type=text]')
        }
        browser.end()
    }
};
