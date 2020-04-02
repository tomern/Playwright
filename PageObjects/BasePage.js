
class BasePage{
    constructor(page) {
      this.page = page;
      this.timeOut = 10;
    }

    async checkElement(selector, sec = 10) {
      await this.page.waitForSelector(selector, {
        timeout: sec * 1000
      });
    }
}
module.exports = BasePage;