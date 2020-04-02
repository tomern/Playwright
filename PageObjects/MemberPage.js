const BasePage = require('./BasePage');
const loggedIn = '//*[contains(@class,"logged-in-container")]';

class MemberPage extends BasePage{
    constructor(page) {
      super(page);
    }

    async verifyLogin() {
      await this.page.waitForSelector(loggedIn);
  }
}
module.exports = MemberPage;