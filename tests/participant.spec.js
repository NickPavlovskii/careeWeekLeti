import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers/index.js';

test.describe('Регистрация участника', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page, '/registration/participant');
  });

  test('отображает первый шаг формы', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Участники' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Базовая информация' }),
    ).toBeVisible();
    await expect(page.getByLabel(/ФИО/)).toBeVisible();
    await expect(page.getByLabel(/ВУЗ/)).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Далее' }),
    ).toBeDisabled();
  });

  test('кнопка «Далее» активируется после обязательных полей', async ({
    page,
  }) => {
    await page.getByLabel(/ФИО/).fill('Иванов Иван Иванович');
    await page.getByLabel(/ВУЗ/).fill('СПбГЭТУ ЛЭТИ');
    await page.getByLabel(/Как узнали/).fill('От друзей');

    await expect(page.getByRole('button', { name: 'Далее' })).toBeEnabled();
  });

  test('проходит оба шага и успешно отправляет заявку', async ({ page }) => {
    await page.getByLabel(/ФИО/).fill('Иванов Иван Иванович');
    await page.getByLabel(/ВУЗ/).fill('СПбГЭТУ ЛЭТИ');
    await page.getByLabel(/Направление/).fill('Программная инженерия');
    await page.getByLabel(/Курс/).selectOption('3');
    await page.getByLabel(/Как узнали/).fill('В соцсетях');
    await page.getByRole('button', { name: 'Далее' }).click();

    await expect(
      page.getByRole('heading', { name: 'Контактная информация' }),
    ).toBeVisible();

    await page.getByLabel(/^Email/).fill('student@example.com');
    await page.getByLabel(/Телефон/).fill('+7 (999) 123-45-67');
    await page.getByLabel(/Telegram/).fill('@student');

    await page
      .getByRole('button', { name: 'Завершить регистрацию' })
      .click();

    await expect(
      page.getByText('Заявка успешно отправлена'),
    ).toBeVisible();
    await expect(page).toHaveURL('/');
  });

  test('возвращается на шаг 1 по кнопке «Назад»', async ({ page }) => {
    await page.getByLabel(/ФИО/).fill('Иванов Иван Иванович');
    await page.getByLabel(/ВУЗ/).fill('СПбГЭТУ ЛЭТИ');
    await page.getByLabel(/Как узнали/).fill('От друзей');
    await page.getByRole('button', { name: 'Далее' }).click();

    await page.getByRole('button', { name: 'Назад' }).click();
    await expect(
      page.getByRole('heading', { name: 'Базовая информация' }),
    ).toBeVisible();
    await expect(page.getByLabel(/ФИО/)).toHaveValue('Иванов Иван Иванович');
  });

  test('показывает ошибку при существующем email', async ({ page }) => {
    await gotoApp(page, '/registration/participant', {
      mockOptions: {
        participantsStatus: 400,
        participantsBody: {
          code: 'EMAIL_EXISTS',
          message: 'Email already exists',
        },
      },
    });

    await page.getByLabel(/ФИО/).fill('Иванов Иван Иванович');
    await page.getByLabel(/ВУЗ/).fill('СПбГЭТУ ЛЭТИ');
    await page.getByLabel(/Как узнали/).fill('От друзей');
    await page.getByRole('button', { name: 'Далее' }).click();

    await page.getByLabel(/^Email/).fill('taken@example.com');
    await page.getByLabel(/Телефон/).fill('+7 (999) 111-22-33');
    await page
      .getByRole('button', { name: 'Завершить регистрацию' })
      .click();

    await expect(
      page.getByText('Этот email уже зарегистрирован!'),
    ).toBeVisible();
    await expect(page).toHaveURL(/\/registration\/participant/);
  });

  test('закрытие формы возвращает на главную', async ({ page }) => {
    await page.getByRole('button', { name: 'Закрыть' }).click();
    await expect(page).toHaveURL('/');
  });
});
