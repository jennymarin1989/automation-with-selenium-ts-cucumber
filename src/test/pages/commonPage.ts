//import { expect } from 'chai';

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
    console.log('***>>> getCurrentUrl: ' + currentURL);
    this.chai.expect(currentURL).to.include(url);
  };

  isElementVisible = async (element: string) => {
    const visibleElement = global.myDriver.findElement({ css: `[data-test=${element}]` }); //find container
    await global.myDriver.sleep(5000); //to be removed - only for testing purposes

    this.chai.expect(visibleElement).to.exist;
  };

  clickOnElement = async (elementToClick: string) => {
    const element = global.myDriver.findElement({ css: `[data-test=${elementToClick}]` }); //find button element and click
    await element.click();
    await global.myDriver.sleep(5000); //to be removed - only for testing purposes
  };
}
