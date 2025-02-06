//import { expect } from 'chai';

import { By } from 'selenium-webdriver';

export class CommonPage {
  chai: any;

  constructor() {
    import('chai').then((chaiImported) => (this.chai = chaiImported));
  }

  visitLink = async (url: string) => {
    await global.myDriver.get(url);
    await global.myDriver.sleep(5000); //to be removed - only for testing purposes
  };

  checkUrlContent = async (url: string) => {
    const currentURL = await global.myDriver.getCurrentUrl();
    this.chai.expect(currentURL).to.include(url);
  };

  isElementDisplayed = async (element: string) => {
    const visibleElement = await global.myDriver.findElement({ css: `[data-test=${element}]` }); //find container
    this.chai.expect(visibleElement).to.exist;
    await global.myDriver.sleep(5000); //to be removed - only for testing purposes
  };

  isTextDisplayed = async (element: string, text: string) => {
    const findTextElement = global.myDriver.findElement({ css: `[class=${element}]` }); //find container
    const textFromElement = await findTextElement.getText();
    this.chai.expect(textFromElement).to.equal(text);
    await global.myDriver.sleep(5000);
  };

  clickOnElement = async (elementToClick: string) => {
    const element = global.myDriver.findElement({ css: `[data-test=${elementToClick}]` }); //find button element and click
    await element.click();
    await global.myDriver.sleep(5000); //to be removed - only for testing purposes
  };
}
