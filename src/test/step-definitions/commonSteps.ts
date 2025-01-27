import { Given, Then } from '@cucumber/cucumber';
import { CommonPage } from '../pages/commonPage';

const commonPage = new CommonPage();

Given('I visit {string}', async (url: string) => {
  await commonPage.visitLink(url);
});

Given('The {string} is visible', async (element: string) => {
  await commonPage.isElementVisible(element); //find container
});

Then('I click on the {string}', async (elementToClick: string) => {
  await commonPage.clickOnElement(elementToClick);
});
