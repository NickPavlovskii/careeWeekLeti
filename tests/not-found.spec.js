import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers/index.js';

test.describe('Страница 404', () => {
  test('показывает сообщение и возврат на главную', async ({ page }) => {
    await gotoApp(page, '/unknown-route-xyz', { mockApi: false });

    await expect(
      page.getByRole('heading', { name: 'Мы сожалеем.' }),
    ).toBeVisible();
    await expect(
      page.getByText('Страница, которую вы ищете, не найдена.'),
    ).toBeVisible();

    await page.getByRole('link', { name: 'Вернуться на главную' }).click();
    await expect(page).toHaveURL('/');
    await expect(
      page.getByRole('heading', { name: 'Студенческая карьерная неделя' }),
    ).toBeVisible();
  });
});
