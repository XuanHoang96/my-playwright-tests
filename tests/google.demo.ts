import { test, expect } from '@playwright/test';

test('Tìm kiếm trên Google và kiểm tra kết quả', async ({ page }) => {
    // 1. Đi đến trang Google
    await page.goto('https://www.google.com');

    // 2. Xử lý nút "Chấp nhận" nếu có (tùy khu vực/trình duyệt)
    const acceptBtn = page.getByRole('button', { name: 'Accept all' });
    if (await acceptBtn.isVisible()) {
        await acceptBtn.click();
    }

    // 3. Tìm ô tìm kiếm, nhập chữ "Playwright" và nhấn Enter
    const searchBox = page.locator('textarea[name="q"]');
    await searchBox.fill('Playwright Automation');
    await searchBox.press('Enter');

    // 4. Kiểm tra xem danh sách kết quả có xuất hiện không
    const results = page.locator('#search');
    await expect(results).toBeVisible();

    // 5. Kiểm tra tiêu đề trang có chứa chữ "Playwright" không
    await expect(page).toHaveTitle(/Playwright/);
});