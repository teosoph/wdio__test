const MainPage = require("../pageobjects/main.page");

describe("My wdio test", () => {
  it("should test something", async () => {
    await MainPage.open();

    await MainPage.test();
  });
});
