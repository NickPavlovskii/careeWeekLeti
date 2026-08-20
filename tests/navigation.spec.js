import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers/index.js';

test.describe('Навигация', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page, '/', { mockApi: false });
  });

  test('переходит к регистрации участника из шапки', async ({ page }) => {
    await page.getByRole('link', { name: 'Участвовать бесплатно' }).click();
    await expect(page).toHaveURL(/\/registration\/participant/);
    await expect(
      page.getByRole('heading', { name: 'Участники' }),
    ).toBeVisible();
  });

  test('переходит к регистрации работодателя из шапки', async ({ page }) => {
    await page
      .getByRole('navigation')
      .getByRole('link', { name: 'Работодателям' })
      .click();
    await expect(page).toHaveURL(/\/registration\/employer/);
    await expect(
      page.getByRole('heading', { name: 'Работодатели' }),
    ).toBeVisible();
  });

  test('якорная ссылка «Партнеры» ведёт к блоку партнёров', async ({ page }) => {
    await page.getByRole('link', { name: 'Партнеры' }).click();
    await expect(page.locator('#partners')).toBeInViewport();
  });

  test('якорная ссылка «Когда и где?» ведёт к info-секции', async ({ page }) => {
    await page.getByRole('link', { name: 'Когда и где?' }).click();
    await expect(page.locator('#location')).toBeInViewport();
  });
});
