import { installApiMocks } from './installApiMocks.js';

/**
 * Переход в приложение. API-моки включены по умолчанию.
 * Для страниц без запросов к API: `{ mockApi: false }`.
 */
export async function gotoApp(page, path = '/', options = {}) {
  const { mockApi = true, mockOptions } = options;

  if (mockApi) {
    await installApiMocks(page, mockOptions);
  }

  await page.goto(path);
}
