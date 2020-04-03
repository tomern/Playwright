const {chromium, chromium2} = require('playwright');

(async function () {
  console.log("Starting both browsers")
  await Promise.all([
    test(chromium),
    test(chromium2)
  ])
})();

async function test(launcher){
  const browser = await launcher.launch({
      headless: false
    });
  const context = await browser.newContext();
  const page = await context.newPage(); 
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `${Date.now.toString()}.png` });
  await browser.close();
}