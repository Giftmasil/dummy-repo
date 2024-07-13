/* import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.goto('http://localhost:5173/login');
  await page.getByPlaceholder('angela@gmail.com').click();
  await page.getByPlaceholder('angela@gmail.com').fill('gift@gmail.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('muuo');
  await page.getByRole('button', { name: 'Login' }).click();
}); */

import { test } from '@playwright/test';

test.only('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.goto('http://localhost:5173/login');
  await page.getByPlaceholder('angela@gmail.com').click();
  await page.getByPlaceholder('angela@gmail.com').fill('gift@gmail.com');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('muuo');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'learn first aid' }).click();
  await page.getByLabel('Close').click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: ' Emergency' }).click();
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByRole('link', { name: 'Alerts' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('Emergency Details').click();
  await page.getByRole('link', { name: 'Records' }).click();
  /* await page.pause()
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('Close').click(); */
  await page.getByRole('link', { name: 'Alerts' }).click();
  await page.getByRole('button', { name: '' }).click();
  await page.getByText('User ID:').click();
  await page.getByRole('link').nth(3).click();
  await page.getByPlaceholder('enter image url here').click();
  await page.getByPlaceholder('20', { exact: true }).click();
  await page.getByPlaceholder('20', { exact: true }).fill('18');
  await page.getByPlaceholder('-02000').click();
  await page.getByPlaceholder('-02000').fill('5120-0000');
  await page.getByPlaceholder('hypertention, asthma').click();
  await page.getByPlaceholder('hypertention, asthma').fill('asthma');
  await page.getByPlaceholder('morphine').click();
  await page.getByPlaceholder('morphine').fill('morphine');
  await page.getByPlaceholder('BCG').click();
  await page.getByPlaceholder('BCG').press('CapsLock');
  await page.getByPlaceholder('BCG').fill('BCG');
  await page.getByPlaceholder('BCG').press('CapsLock');
  await page.getByLabel('Emergency Contact Name:').click();
  await page.getByLabel('Emergency Contact Name:').fill('Gift');
  await page.getByPlaceholder('brother').click();
  await page.getByPlaceholder('brother').fill('brother');
  await page.getByLabel('Emergency Contact Number:').click();
  await page.getByLabel('Emergency Contact Number:').fill('man');
  await page.getByLabel('Emergency Contact Number:').click();
  await page.getByLabel('Emergency Contact Number:').fill('10202020');
  await page.getByRole('button', { name: 'Save Changes' }).click();
  await page.getByRole('list').getByRole('textbox').click();
  await page.getByRole('list').getByRole('textbox').fill('gift');
  await page.getByRole('list').getByRole('textbox').press('Enter');
  await page.getByRole('button', { name: 'Logout' }).click();
});