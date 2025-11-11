const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Language Detection', () => {
  const file = path.resolve(__dirname, '..', 'index.html');

  test('should display in Portuguese for "pt" locale', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'pt-PT' });
    const page = await context.newPage();
    await page.goto(`file://${file}`);
    await expect(page).toHaveTitle('Descobrir Braga em 3 Dias');
  });

  test('should display in Spanish for "es" locale', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'es-ES' });
    const page = await context.newPage();
    await page.goto(`file://${file}`);
    await expect(page).toHaveTitle('Descubrir Braga en 3 Días');
  });

  test('should display in French for "fr" locale', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'fr-FR' });
    const page = await context.newPage();
    await page.goto(`file://${file}`);
    await expect(page).toHaveTitle('Découvrir Braga en 3 Jours');
  });

  test('should default to English for unsupported locales', async ({ browser }) => {
    const context = await browser.newContext({ locale: 'de-DE' });
    const page = await context.newPage();
    await page.goto(`file://${file}`);
    await expect(page).toHaveTitle('Discover Braga in 3 Days');
  });
});
