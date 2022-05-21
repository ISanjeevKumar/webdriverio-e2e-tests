const LoginPage = require('../../page-objects/login.page');

describe('e2e test - user should be able to purchase item', function () {

    this.retries(2)

    beforeEach(async () => {
        await browser.url('/')
    })

    it('e2e journey', async function () {
        await expect(browser).toHaveTitleContaining('Swag Labs');
        await LoginPage.login("standard_user", "secret_sauce");
    })

})