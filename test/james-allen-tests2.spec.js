const BASE_URL = 'https://www.jamesallen.com'
const HomePage = require('../PageObjects/HomePage');
const playwright = require('playwright')

describe('Playwright Tests', () => {

    jest.setTimeout(50000);

    it('James Allen 2', async() => {
        var browser = await playwright['chromium'].launch({ headless: true })
        var context = await browser.newContext({ignoreHTTPSErrors: true});
        var page = await context.newPage(BASE_URL)
        var homePage =  new HomePage(page);
        var loginPage = await homePage.clickLogin();
        var memberPage = await loginPage.login('tomernoy1@gmail.com', '123456');
        await memberPage.verifyLogin();
        await browser.close()
    })
})