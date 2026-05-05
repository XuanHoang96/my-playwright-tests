import { test, expect } from '@playwright/test';

test('Kiểm tra tiêu đề trang GitHub', async ({ page }) => {
    await page.goto('https://github.com/');
    await expect(page).toHaveTitle(/GitHub/);
});