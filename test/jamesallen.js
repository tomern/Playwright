const playwright = require('playwright');
const HomePage = require('../PageObjects/HomePage');
//var assert = require('assert');

var myUrl = 'https://www.jamesallen.com';

(async () => {
    const browserType = 'chromium'
    const browser = await playwright[browserType].launch({
        headless: false,
    });
    const context = await browser.newContext({ignoreHTTPSErrors: true});
    const page = await context.newPage();  
    await page.goto(myUrl);

    var homePage =  new HomePage(page);
    var loginPage = await homePage.clickLogin();
    var memberPage = await loginPage.login('tomernoy1@gmail.com', '123456');
    await memberPage.verifyLogin();

    await page.screenshot({ path: `${Date.now}.png` }); 
    await browser.close();
})();
