const { test, expect } = require('@playwright/test');

test('should display the correct Spanish translation', async ({ page }) => {
  await page.goto('file:///app/index.html');

  // Click the language selector to open the options
  await page.click('#current-lang');

  // Click the Spanish language option
  await page.click('.lang-options > .lang-icon:has-text("ES")');

  // Check that the title is in Spanish
  const title = await page.locator('#title');
  await expect(title).toHaveText('Descubrir Braga en 3 Días');
});
