const BasePage = require('./BasePage');
const MemberPage = require('./MemberPage');
const Email = '[name="email"]';
const Password = '[name="password"]';
const SubmitBtn = '//*[contains(text(),"Sign In")]';

class LoginPage extends BasePage{
    constructor(page) {
      super(page);
    }

    async login(eml, pass) {
        await this.typeEmail(eml);
        await this.typePassword(pass);
        await this.clickSubmit();

        return new MemberPage(this.page);
    }

    async typeEmail(str) {
        await this.page.type(Email, str);
    }

    async typePassword(str) {
        await this.page.type(Password, str);
    }

    async clickSubmit() {
        await this.page.click(SubmitBtn);
    }
}
module.exports = LoginPage;