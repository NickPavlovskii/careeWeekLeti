/**
 * Открывает Storybook-сторис во iframe (viewMode=story).
 * @param {import('@playwright/test').Page} page
 * @param {string} storyId — например `shared-sectionheading--default`
 */
export async function gotoStory(page, storyId) {
  const port = process.env.PLAYWRIGHT_STORYBOOK_PORT || '6006';
  const base =
    process.env.PLAYWRIGHT_STORYBOOK_URL || `http://127.0.0.1:${port}`;

  await page.goto(`${base}/iframe.html?id=${storyId}&viewMode=story`);
  await page.locator('#storybook-root').waitFor({ state: 'attached' });
}
