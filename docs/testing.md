# Playwright E2E (Карьерная неделя)

## Structure

- Tests in **JavaScript** under `tests/`
- Helpers in `tests/helpers/` — `gotoApp()`, `installApiMocks()`, `gotoStory()`
- Name files by **system area**: `home.spec.js`, `navigation.spec.js`, `registration.spec.js`, `participant.spec.js`, `employer.spec.js`, `not-found.spec.js`
- Storybook specs in `tests/storybook/`
- Group with `test.describe`; use descriptive Russian test names

## Auth

- Приложение без логина — не используем `storageState` / auth setup

## Locators

1. Prefer `getByRole`, then `getByLabel`, `getByPlaceholder`, `getByText`
2. Avoid CSS classes and test IDs unless no semantic alternative

## API

- Mock only explicit backend paths in `installApiMocks`:
  - `http://localhost:8081/api/participants`
  - `http://localhost:8081/api/company-participants`
- Never use catch-all like `**/api/**`
- Use `gotoApp(page, path)` — mocks enabled by default; `{ mockApi: false }` for static pages

## Writing tests

- Assert user-visible behavior; use web-first assertions (`toBeVisible`, `toHaveURL`)
- Shared setup in `beforeEach`; no shared mutable state between tests
- Use `gotoApp()` / `gotoStory()`; avoid `page.evaluate()` and explicit sleeps

## Projects

- `app` — Vue CLI dev server `:8080` (`PLAYWRIGHT_APP_PORT`)
- `storybook` — Storybook `:6006` (`PLAYWRIGHT_STORYBOOK_PORT`), iframe via `gotoStory(storyId)`

> На `:6010` у вас уже может крутиться другой Storybook — поэтому для этого проекта порт **6006**.

## Commands

```bash
# все тесты (поднимает app + storybook)
npm run test:e2e

# только приложение
npm run test:e2e:app

# только Storybook
npm run test:e2e:storybook

# UI-режим Playwright
npm run test:e2e:ui

# Storybook вручную
npm run storybook
```

## Example

```javascript
import { test, expect } from '@playwright/test';
import { gotoApp } from './helpers/index.js';

test.describe('Регистрация участника', () => {
  test.beforeEach(async ({ page }) => {
    await gotoApp(page, '/registration/participant');
  });

  test('отображает первый шаг формы', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Базовая информация' }),
    ).toBeVisible();
  });
});
```
