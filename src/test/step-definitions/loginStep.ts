import { Before, Given } from '@cucumber/cucumber';
import { Builder, WebDriver } from 'selenium-webdriver';

let driver: WebDriver;

Before(async () => {
  driver = await new Builder().forBrowser('chrome').build(); //create a builder instance for chrome browser
});

Given('I visit the page {string}', async function (homepage: string) {
  console.log('user can navigate', homepage);
  await driver.get(homepage);
});
