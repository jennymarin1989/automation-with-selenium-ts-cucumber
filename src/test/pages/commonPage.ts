// import { expect } from 'chai';

export class CommonPage {
  visitLink = async (url: string) => {
    await global.myDriver.get(url);
    await global.myDriver.sleep(5000); //to be removed - only for testing purposes
  };

  isElementVisible = async (element: string) => {
    const visibleElement = await global.myDriver.findElement({ css: `[data-test=${element}]` }); //find container
    await global.myDriver.sleep(5000); //to be removed - only for testing purposes
    // expect(visibleElement).to.exist;
  };

  clickOnElement = async (elementToClick: string) => {
    const element = await global.myDriver.findElement({ css: `[data-test=${elementToClick}]` }); //find button element and click
    await element.click();
    await global.myDriver.sleep(5000); //to be removed - only for testing purposes
  };
}
