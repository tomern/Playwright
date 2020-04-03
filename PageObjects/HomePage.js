const BasePage = require('./BasePage');
const LoginPage = require('./LoginPage');
const LoginBtn = '//span[contains(text(),"LOGIN")]';

class HomePage extends BasePage{
    constructor(page) {
      super(page);
    }

    async clickLogin() {
      console.log("Click login.");
      await this.checkElement(LoginBtn, 15);
      await this.page.click(LoginBtn);
      return new LoginPage(this.page);
  }
}
module.exports = HomePage;