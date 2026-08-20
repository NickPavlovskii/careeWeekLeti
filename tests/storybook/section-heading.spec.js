import { test, expect } from '@playwright/test';
import { gotoStory } from '../helpers/index.js';

test.describe('Storybook: SectionHeading', () => {
  test('отображает заголовок секции', async ({ page }) => {
    await gotoStory(page, 'shared-sectionheading--default');

    await expect(
      page.getByRole('heading', { name: 'Почему стоит принять участие?' }),
    ).toBeVisible();
  });

  test('отображает заголовок карты', async ({ page }) => {
    await gotoStory(page, 'shared-sectionheading--map-title');

    await expect(
      page.getByRole('heading', { name: 'Как нас найти' }),
    ).toBeVisible();
  });
});
