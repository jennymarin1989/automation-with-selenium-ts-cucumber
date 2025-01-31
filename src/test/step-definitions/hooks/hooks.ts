import { Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { Builder, WebDriver } from 'selenium-webdriver';

let driver: WebDriver;

const TEN_SECONDS: number = 10 * 10000;
setDefaultTimeout(TEN_SECONDS);

Before(async () => {
  driver = new Builder().forBrowser('chrome').build(); //create a builder instance for chrome browser
  global.myDriver = driver;
});

After(async () => {
  await global.myDriver.quit();
});
