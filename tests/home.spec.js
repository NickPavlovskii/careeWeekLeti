import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers/index.js';

test.describe('Главная страница', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page, '/', { mockApi: false });
  });

  test('отображает бренд и ключевые блоки мероприятия', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Студенческая карьерная неделя' }),
    ).toBeVisible();
    await expect(page.getByText('Начать карьеру легко.')).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Почему стоит принять участие?' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Программа мероприятий' }).first(),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Как нас найти' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Схема зала' }),
    ).toBeVisible();
  });

  test('показывает программу на два дня', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'День 1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'День 2' })).toBeVisible();
    await expect(
      page.getByText('Торжественное открытие').first(),
    ).toBeVisible();
    await expect(
      page.getByText('Лекции (выступление спикеров)').first(),
    ).toBeVisible();
  });

  test('показывает партнёров на главной', async ({ page }) => {
    const partners = page.locator('#partners');
    await expect(partners.getByAltText('ПРОСТО')).toBeVisible();
    await expect(partners.getByAltText('СОКТ')).toBeVisible();
  });
});
