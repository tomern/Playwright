//const chai = require('chai')
//const expect = chai.expect
//var Promise  = require('bluebird');
const BASE_URL = 'https://www.jamesallen.com'
const HomePage = require('../PageObjects/HomePage');
const playwright = require('playwright')

let page, browser, context

describe('Playwright Tests', () => {

    beforeEach(async () => {
        jest.setTimeout(30000);
        browser = await playwright['chromium'].launch({ headless: false })
        context = await browser.newContext({ignoreHTTPSErrors: true});
        page = await context.newPage(BASE_URL)
    })

    afterEach(async function() {
        jest.setTimeout(30000);
        //await page.screenshot({ path: `${this.currentTest.title.replace(/\s+/g, '_')}.png` })
        //await browser.close()
    })

    it('James Allen 1', async() => {
        jest.setTimeout(30000);
        var homePage =  new HomePage(page);
        var loginPage = await homePage.clickLogin();
        var memberPage = await loginPage.login('tomernoy1@gmail.com', '123456');
        await memberPage.verifyLogin();
    })

    it('James Allen 2', async() => {
        jest.setTimeout(30000);
        var homePage =  new HomePage(page);
        var loginPage = await homePage.clickLogin();
        var memberPage = await loginPage.login('tomernoy1@gmail.com', '123456');
        await memberPage.verifyLogin();
    })
})