const LoginPage = require('../../page-objects/login.page');

describe('e2e test -login functionality', function () {

    it('should be able to login', async function () {
        await browser.url('https://www.saucedemo.com/')
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(browser).toHaveTitleContaining('Swag Labs');
    })
})