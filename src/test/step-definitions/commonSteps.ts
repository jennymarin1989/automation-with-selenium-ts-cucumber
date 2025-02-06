import { Given, Then } from '@cucumber/cucumber';
import { CommonPage } from '../pages/commonPage';

const commonPage = new CommonPage();

Given('I visit {string}', async (url: string) => {
  await commonPage.visitLink(url);
});

Then('I check that url includes the correct endpoint {string}', async (url: string) => {
  await commonPage.checkUrlContent(url);
});

Given('The {string} contains the text {string}', async (element: string, text: string) => {
  await commonPage.isTextDisplayed(element, text); //find container
});

Given('The {string} is displayed', async (element: string) => {
  await commonPage.isElementDisplayed(element); //find container
});

Then('I click on the {string}', async (elementToClick: string) => {
  await commonPage.clickOnElement(elementToClick);
});
