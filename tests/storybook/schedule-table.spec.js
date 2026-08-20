import { test, expect } from '@playwright/test';
import { gotoStory } from '../helpers/index.js';

test.describe('Storybook: ScheduleTable', () => {
  test('отображает программу первого дня', async ({ page }) => {
    await gotoStory(page, 'lecture-scheduletable--day-one');

    await expect(
      page.getByRole('heading', { name: 'Программа мероприятий' }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'День 1' })).toBeVisible();
    await expect(
      page.getByRole('table').getByText('Торжественное открытие'),
    ).toBeVisible();
    await expect(
      page.getByRole('table').getByText('10:30–11:00'),
    ).toBeVisible();
  });

  test('отображает программу второго дня', async ({ page }) => {
    await gotoStory(page, 'lecture-scheduletable--day-two');

    await expect(page.getByRole('heading', { name: 'День 2' })).toBeVisible();
    await expect(
      page.getByRole('table').getByText('Лекции (выступление спикеров)'),
    ).toBeVisible();
  });
});
