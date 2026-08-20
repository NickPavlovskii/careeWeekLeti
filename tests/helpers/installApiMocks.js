/**
 * Моки только явных backend-путей /api/* (localhost:8081).
 * Не используем catch-all вроде **\/api\/**.
 */
export async function installApiMocks(page, options = {}) {
  const {
    participantsStatus = 200,
    participantsBody = { ok: true },
    companyStatus = 200,
    companyBody = { ok: true },
  } = options;

  await page.route('http://localhost:8081/api/participants', async (route) => {
    if (route.request().method() !== 'POST') {
      await route.fallback();
      return;
    }

    await route.fulfill({
      status: participantsStatus,
      contentType: 'application/json',
      body: JSON.stringify(participantsBody),
    });
  });

  await page.route(
    'http://localhost:8081/api/company-participants',
    async (route) => {
      if (route.request().method() !== 'POST') {
        await route.fallback();
        return;
      }

      await route.fulfill({
        status: companyStatus,
        contentType: 'application/json',
        body: JSON.stringify(companyBody),
      });
    },
  );
}
