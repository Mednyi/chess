const errMails = [
    'qwerty@me.ru',
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
const errPasswords = [
    '',
    '0',
    '01',
    '0234',
    '0123456',
    ' ',
    '   ',
    ' 01$%abCD',
    'мойпароль',
    '01234567"',
    'ABCdef01+',
    'BCdef01-',
    'BCdef01=',
    'BCdef01><',
    'BCdef01.',
    'BCdef01,',
    'BCdef01:',
    'BCdef01;',
    'BCdef01?',
    'BCdef01][',
    'BCdef01}{',
    'BCdef01)(',
    'BCdef01|',
    'BCdef01/',
    'BCdef01~',
    'BCdef01_',
    'BCdef01`',
    'BCdef01',
    '1!aLjMdEUlwBDNXqwksWpWtYLmnFXcvkMAVoGdeiywFzFKVljvuDirgwagIbxEJfNcNFtiNKiUAPouVolZfjbsfwzZtuSkgZROxNcplPMuCFnelBfQxALcVyuaqIHMeEakODvUZvwmIjaKThUBlRWYlYkIpcAGiZSPoUqxqqSkYlyghWfKgbdyGWsQopsAArgFyeznVVmTllpNqisXBYKzLAzSYnDqwGxCUdzDCkTNCVkFbaMgmSkwMkfdUSFvnWdALtlGbjJqwKijYeNJNeidkVJNdwlTMcDnLqlKICiRqQ',
];
const goodPasswords = [
    '0123456789',
    '!@#$%^&*',
    'abcdefgh',
    'ABCDEFGH',
    '01$%abCD',
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
        for(password of errPasswords) {
            console.log(password)
            browser
                .setValue('input[type=password]', password)
                .click('input[type=text]')
                .pause(1000)
                .assert.cssClassPresent('input[type=password]', 'error')
                .pause(1000)
                .clearValue('input[type=password]')
        }
        for(password of goodPasswords) {
            console.log(password)
            browser
                .setValue('input[type=password]', password)
                .click('input[type=text]')
                .pause(1000)
                .assert.not.cssClassPresent('input[type=password]', 'error')
                .assert.cssClassPresent('input[type=password]', 'success')
                .pause(1000)
                .clearValue('input[type=password]')
        }
        browser.end()
    }
};
