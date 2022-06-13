// global-setup.js
const { chromium } = require('@playwright/test');

module.exports = async config => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://appmood.herokuapp.com/login');
  await page.fill('input[name="email"]', 'Matthew5@');
  await page.fill('input[name="password"]', 'Matthew5');
  await page.click('text=Login');
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'mood.json' });
  await browser.close();
};
