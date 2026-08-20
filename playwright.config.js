import { defineConfig, devices } from '@playwright/test';

const APP_PORT = process.env.PLAYWRIGHT_APP_PORT || '8080';
const STORYBOOK_PORT = process.env.PLAYWRIGHT_STORYBOOK_PORT || '6006';

const cli = process.argv.join(' ');
const appOnly =
  process.env.PLAYWRIGHT_APP_ONLY === '1' ||
  /--project(=|\s+)app\b/.test(cli);
const storybookOnly =
  process.env.PLAYWRIGHT_STORYBOOK_ONLY === '1' ||
  /--project(=|\s+)storybook\b/.test(cli);

const runApp = !storybookOnly;
const runStorybook = !appOnly;

/** @type {import('@playwright/test').PlaywrightTestConfig['webServer']} */
const webServer = [];

if (runApp) {
  webServer.push({
    command: `npx vue-cli-service serve --port ${APP_PORT}`,
    url: `http://127.0.0.1:${APP_PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  });
}

if (runStorybook) {
  webServer.push({
    command: `npx storybook dev -p ${STORYBOOK_PORT} --ci --no-open`,
    url: `http://127.0.0.1:${STORYBOOK_PORT}`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  });
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'list',
  use: {
    trace: 'on-first-retry',
    locale: 'ru-RU',
  },
  projects: [
    {
      name: 'app',
      testIgnore: /storybook\//,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: `http://127.0.0.1:${APP_PORT}`,
      },
    },
    {
      name: 'storybook',
      testMatch: /storybook\/.*\.spec\.js/,
      use: {
        ...devices['Desktop Chrome'],
        baseURL: `http://127.0.0.1:${STORYBOOK_PORT}`,
      },
    },
  ],
  webServer,
});
