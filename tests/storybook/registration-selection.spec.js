import { test, expect } from '@playwright/test';
import { gotoStory } from '../helpers/index.js';

test.describe('Storybook: RegistrationSelection', () => {
  test('отображает выбор типа регистрации', async ({ page }) => {
    await gotoStory(page, 'pages-registrationselection--default');

    await expect(
      page.getByRole('heading', { name: 'Выберите, для кого регистрация' }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Регистрация участника' }),
    ).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Регистрация работодателя' }),
    ).toBeVisible();
  });
});
