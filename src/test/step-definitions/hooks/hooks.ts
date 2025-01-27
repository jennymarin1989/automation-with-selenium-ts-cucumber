import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Builder, WebDriver } from 'selenium-webdriver';

let driver: WebDriver;

const TEN_SECONDS = 10 * 1000;
setDefaultTimeout(TEN_SECONDS);

Before(async () => {
  driver = new Builder().forBrowser('chrome').build(); //create a builder instance for chrome browser
  global.myDriver = await driver;
});

After(async () => {
  await global.myDriver.quit();
});
