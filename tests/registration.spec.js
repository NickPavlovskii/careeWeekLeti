import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers/index.js';

test.describe('Выбор типа регистрации', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page, '/registration', { mockApi: false });
  });

  test('отображает выбор участника и работодателя', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Выберите, для кого регистрация' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Участники' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Работодатели' }),
    ).toBeVisible();
  });

  test('открывает форму регистрации участника', async ({ page }) => {
    await page.getByRole('button', { name: 'Регистрация участника' }).click();
    await expect(page).toHaveURL(/\/registration\/participant/);
    await expect(
      page.getByRole('heading', { name: 'Базовая информация' }),
    ).toBeVisible();
  });

  test('открывает форму регистрации работодателя', async ({ page }) => {
    await page
      .getByRole('button', { name: 'Регистрация работодателя' })
      .click();
    await expect(page).toHaveURL(/\/registration\/employer/);
    await expect(
      page.getByRole('heading', { name: 'Базовая информация' }),
    ).toBeVisible();
  });
});
