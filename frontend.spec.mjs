// Import necessary modules
import { Builder, By, until } from 'selenium-webdriver';
import { expect } from 'chai';

// Describe your test suite
describe('Web Frontend Testing', function () {
  let driver;

  // Setup before running tests
  before(async function () {
    // Initialize the WebDriver instance
    driver = await new Builder().forBrowser('chrome').build();
  });

  // Cleanup after running tests
  after(async function () {
    if (driver) {
      await driver.quit();
      console.log('Tests completed successfully');
    }
  });

  // Test case 1
  it('should load the homepage', async function () {
    await driver.get('https://www.wikipedia.org/');
    const title = await driver.getTitle();
    expect(title).to.equal('Wikipedia');
  });

  // Test case 2

  it('should search for ifixit', async function () {
    await driver.get('https://www.wikipedia.org/');
    await searchIfixit();
    const title = await driver.getTitle();
    expect(title).to.equal('iFixit - Wikipedia');
  });

  // Test case 3

  it('should have "San Luis Obispo, California" listed as the headquarters', async function() {
    const headQuartersText = await getHeadQuarters();
    expect(headQuartersText).to.equal("San Luis Obispo, California");
  });

  it('should have the url "https://de.wikipedia.org/wiki/IFixit" after switching the language to German', async function() {
    await switchToGerman();
    const url = await driver.getCurrentUrl();
    expect(url).to.equal('https://de.wikipedia.org/wiki/IFixit');
  });

  // Add more test cases as needed

  // Functions to be coded

  async function searchIfixit() {
    await driver.findElement(By.id('searchInput')).sendKeys('iFixit');
    await driver.findElement(By.css('button[type="submit"]')).click();
  }

  async function getHeadQuarters() {
    const headQuarters = await driver.findElement(By.css('.infobox-data.label a')).getText();
    return headQuarters;
  }

  async function switchToGerman() {
    await driver.findElement(By.id('p-lang-btn-checkbox')).click();

    // Wait for the element to be present and clickable
    const germanLanguageLink = await driver.wait(until.elementLocated(By.css('li[title="Deutsch"]')), 5000);

    // Wait for the element to be visible and clickable
    await driver.wait(until.elementIsVisible(germanLanguageLink), 5000);
    await driver.wait(until.elementIsEnabled(germanLanguageLink), 5000);
    await germanLanguageLink.click();
  }
});
