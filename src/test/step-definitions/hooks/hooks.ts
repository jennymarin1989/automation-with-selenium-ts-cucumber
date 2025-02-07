import { Before, After, setDefaultTimeout, ITestCaseHookParameter } from '@cucumber/cucumber';
import { Builder, WebDriver } from 'selenium-webdriver';
import * as fs from 'fs';
// import { Options } from 'selenium-webdriver/chrome';

let driver: WebDriver;

const TEN_SECONDS: number = 10 * 10000;
setDefaultTimeout(TEN_SECONDS);

Before(async () => {
  // const driver = new Builder();
  // const browserOptions = new Options();
  // browserOptions.addArguments('--headless'),
  // (global.myDriver = driver.forBrowser('chrome').withCapabilities(browserOptions).build());  ------ this is to run in headless mode so the browser doesn´t pop

  driver = new Builder().forBrowser('chrome').build(); //create a builder instance for chrome browser
  global.myDriver = driver;
});

After(async (scenario: ITestCaseHookParameter) => {
  const scenarioStatus = scenario.result?.status;
  scenarioStatus === 'FAILED' &&
    global.myDriver.takeScreenshot().then((image) => {
      fs.writeFileSync(`./reports/screenshots/${scenario.pickle.name}.png`, image, 'base64');
    });
  // -------- this statement is to take a screenshot of a failed scenario in after hooks and save the file into a reports folder

  await global.myDriver.quit();
});
