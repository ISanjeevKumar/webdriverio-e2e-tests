const LoginPage = require('../../page-objects/login.page');

describe('e2e test - user should be able to purchase item', function () {

    it('e2e journey', async function () {
        await browser.url('https://www.saucedemo.com/');
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await LoginPage.login("standard_user", "secret_sauce");
    })

})