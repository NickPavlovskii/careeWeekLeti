import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers/index.js';

test.describe('Регистрация работодателя', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page, '/registration/employer');
  });

  test('отображает первый шаг формы', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Работодатели' }),
    ).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'Базовая информация' }),
    ).toBeVisible();
    await expect(page.getByLabel(/ФИО контактного лица/)).toBeVisible();
    await expect(page.getByLabel(/Название компании/)).toBeVisible();
    await expect(
      page.getByRole('button', { name: 'Далее' }),
    ).toBeDisabled();
  });

  test('проходит оба шага и успешно регистрирует компанию', async ({
    page,
  }) => {
    await page.getByLabel(/ФИО контактного лица/).fill('Петров Пётр Петрович');
    await page.getByLabel(/Название компании/).fill('ООО «ТехноПро»');
    await page
      .getByLabel(/Краткое описание организации/)
      .fill('IT-компания, стажировки для студентов');
    await page.getByRole('button', { name: 'Далее' }).click();

    await expect(
      page.getByRole('heading', { name: 'Контактная информация' }),
    ).toBeVisible();

    await page.getByLabel(/Номер телефона/).fill('(999) 555-44-33');
    await page.getByLabel(/E-mail/).fill('hr@technopro.ru');
    await page.getByLabel(/Сайт организации/).fill('https://technopro.ru');
    await page
      .getByText(/согласие на обработку и передачу своих данных/)
      .click();

    await page.getByRole('button', { name: 'Зарегистрироваться' }).click();

    await expect(
      page.getByText('Компания успешно зарегистрирована!'),
    ).toBeVisible();
    await expect(page).toHaveURL('/');
  });

  test('без согласия на обработку данных кнопка неактивна', async ({
    page,
  }) => {
    await page.getByLabel(/ФИО контактного лица/).fill('Петров Пётр Петрович');
    await page.getByLabel(/Название компании/).fill('ООО «ТехноПро»');
    await page
      .getByLabel(/Краткое описание организации/)
      .fill('IT-компания');
    await page.getByRole('button', { name: 'Далее' }).click();

    await page.getByLabel(/Номер телефона/).fill('(999) 555-44-33');
    await page.getByLabel(/E-mail/).fill('hr@technopro.ru');
    await page.getByLabel(/Сайт организации/).fill('https://technopro.ru');

    await expect(
      page.getByRole('button', { name: 'Зарегистрироваться' }),
    ).toBeDisabled();
  });

  test('показывает ошибку при существующем телефоне', async ({ page }) => {
    await gotoApp(page, '/registration/employer', {
      mockOptions: {
        companyStatus: 400,
        companyBody: {
          code: 'PHONE_EXISTS',
          message: 'Phone already exists',
        },
      },
    });

    await page.getByLabel(/ФИО контактного лица/).fill('Петров Пётр Петрович');
    await page.getByLabel(/Название компании/).fill('ООО «ТехноПро»');
    await page
      .getByLabel(/Краткое описание организации/)
      .fill('IT-компания');
    await page.getByRole('button', { name: 'Далее' }).click();

    await page.getByLabel(/Номер телефона/).fill('(999) 000-00-00');
    await page.getByLabel(/E-mail/).fill('hr@technopro.ru');
    await page.getByLabel(/Сайт организации/).fill('https://technopro.ru');
    await page
      .getByText(/согласие на обработку и передачу своих данных/)
      .click();
    await page.getByRole('button', { name: 'Зарегистрироваться' }).click();

    await expect(
      page.getByText('Этот номер телефона уже зарегистрирован!'),
    ).toBeVisible();
    await expect(page).toHaveURL(/\/registration\/employer/);
  });

  test('закрытие формы возвращает на главную', async ({ page }) => {
    await page.getByRole('button', { name: 'Закрыть' }).click();
    await expect(page).toHaveURL('/');
  });
});
