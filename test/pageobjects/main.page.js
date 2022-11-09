const Page = require("./page");

class MainPage extends Page {
  open() {
    return super.open("https://webdriver.io/docs/gettingstarted");
  }

  get locator__test() {
    return $("[id='run-test']");
  }

  async test() {
    await this.locator__test.waitForDisplayed();
  }
}

module.exports = new MainPage();
