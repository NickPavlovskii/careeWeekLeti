import { test, expect } from '@playwright/test';
import { gotoStory } from '../helpers/index.js';

test.describe('Storybook: NotificationMessage', () => {
  test('показывает успешное уведомление', async ({ page }) => {
    await gotoStory(page, 'shared-notificationmessage--success');

    await expect(
      page.getByText('Заявка успешно отправлена!'),
    ).toBeVisible();
  });

  test('показывает уведомление об ошибке', async ({ page }) => {
    await gotoStory(page, 'shared-notificationmessage--error');

    await expect(
      page.getByText('Этот email уже зарегистрирован!'),
    ).toBeVisible();
  });
});
