//const chai = require('chai')
//const expect = chai.expect
//var Promise  = require('bluebird');
const BASE_URL = 'https://www.jamesallen.com'
const HomePage = require('../PageObjects/HomePage');
const playwright = require('playwright')

var page, browser, context

describe('Playwright Tests', () => {

    beforeEach(async () => {
        browser = await playwright['chromium'].launch({ headless: false })
        context = await browser.newContext({ignoreHTTPSErrors: true});
        page = await context.newPage(BASE_URL)
    })

    afterEach(async function() {
        //await page.screenshot({ path: `${this.currentTest.title.replace(/\s+/g, '_')}.png` })
        await browser.close()
    })

    it('James Allen 1', async() => {
        var homePage =  new HomePage(page);
        var loginPage = await homePage.clickLogin();
        var memberPage = await loginPage.login('tomernoy1@gmail.com', '123456');
        await memberPage.verifyLogin();
    })

    it('James Allen 2', async() => {
        var homePage =  new HomePage(page);
        var loginPage = await homePage.clickLogin();
        var memberPage = await loginPage.login('tomernoy1@gmail.com', '123456');
        await memberPage.verifyLogin();
    })

    it('James Allen 3', async() => {
        var homePage =  new HomePage(page);
        var loginPage = await homePage.clickLogin();
        var memberPage = await loginPage.login('tomernoy1@gmail.com', '123456');
        await memberPage.verifyLogin();
    })
})