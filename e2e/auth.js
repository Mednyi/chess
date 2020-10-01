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
            .url('http://localhost:63342/chess/#/auth')
            .pause(10000)
            .waitForElementVisible('main')
            .assert.visible('input[type=text]');
        for(email of errMails) {
            browser
                .setValue('input[type=text]', email)
                .click('input[type=password]')
                .pause(5000)
                .assert.cssProperty('input[type=text]', 'border-bottom-color', 'red')
                .pause(5000)
        }
        browser.end()
    }
};
