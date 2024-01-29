import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('https://www.stessa.com/');
  await page.goto('https://app.stessa.com/web/auth0/signin');
  await page.goto('https://auth.roofstock.com/u/login?state=hKFo2SB1V1IxNWFwWTJrM2V1OW9hd2lnSXE3WklGamV4TnpudaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIE1kVkFOeEZoNTRkTE1OSThxMzdLWWhGZmpyUzUxdldRo2NpZNkgbHBYcFIwdlVURnNJMHV4VGZOZTZtME1vVGNLbmY2ZW0');
  await page.getByLabel('Your email').fill('bn.siri@gmail.com');
  await page.getByLabel('Your email').press('Tab');
  await page.getByLabel('Password').fill('Rspwd#21');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.goto('https://app.stessa.com/web/onboarding/roofstock-login-success?code=oMJm2-2fRDFJ9Ap4d9DosmP65Fb-GTdiViviWarS7g3Vp&state=WThGRkVlVmZVQ19xSVltbTVhTHdSdHUtanVFRHZPTXRyU2RrODhQVnoxMA%3D%3D');
  await page.goto('https://app.stessa.com/web/inbox');
});