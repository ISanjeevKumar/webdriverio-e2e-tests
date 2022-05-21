const LoginPage = require('../../page-objects/login.page');

describe('e2e test -login functionality', function () {

    it('should be able to login', async function () {
        await browser.url('https://www.saucedemo.com/');
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await LoginPage.login('standard_user', 'secret_sauce!');
    })
})