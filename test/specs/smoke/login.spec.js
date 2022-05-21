import { LoginPage } from '../../page-objects/app'
const fs = require('fs-extra');
let userCreds = JSON.parse(fs.readFileSync('test/testdata/user-credentials.json'))

describe('e2e test -login functionality', function () {

    userCreds.forEach(({ username, password }) => {
        it('should be able to login', async function () {
            await browser.url('/');
            await expect(browser).toHaveTitleContaining('Swag Labs');
            await LoginPage.login(username, password);
        })
    })

})