import { Before, Given, Then, After, AfterAll } from '@cucumber/cucumber';
import { Builder, WebDriver } from 'selenium-webdriver';

let driver: WebDriver;

Before(async () => {
  driver = await new Builder().forBrowser('chrome').build();
});

Given('I visit {string}', { timeout: 25000 }, async (homepage: string) => {
  await driver.get(homepage);
});

Given('The LoginPage is visible', { timeout: 15000 }, async () => {
  await driver.get('https://saucedemo.com');
  await driver.findElement({ css: '[data-test="login-container"]' }); //find container
  await driver.sleep(5000);
});

Then('I click on the {string}', { timeout: 15000 }, async (buttonElement: string) => {
  await driver.get('https://saucedemo.com');

  const element = await driver.findElement({ css: `[data-test=${buttonElement}]` }); //find button element and click
  await element.click();
  await driver.sleep(5000);
});

AfterAll(async () => await driver.quit());
