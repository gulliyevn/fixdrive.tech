import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('return to home from inner page and reach features section', async ({ page }) => {
    await page.goto('/about')
    // go home via logo
    await page.locator('a[href="/"]').first().click()
    await expect(page).toHaveURL(/\/$/)
    // ensure features section is present and reachable
    const features = page.locator('#features')
    await features.scrollIntoViewIfNeeded()
    await expect(features).toBeVisible()
  })
})



test.describe('Navigation', () => {
  test('return to home from inner page and reach features section', async ({ page }) => {
    await page.goto('/about')
    // go home via logo
    await page.locator('a[href="/"]').first().click()
    await expect(page).toHaveURL(/\/$/)
    // ensure features section is present and reachable
    const features = page.locator('#features')
    await features.scrollIntoViewIfNeeded()
    await expect(features).toBeVisible()
  })
})



test.describe('Navigation', () => {
  test('return to home from inner page and reach features section', async ({ page }) => {
    await page.goto('/about')
    // go home via logo
    await page.locator('a[href="/"]').first().click()
    await expect(page).toHaveURL(/\/$/)
    // ensure features section is present and reachable
    const features = page.locator('#features')
    await features.scrollIntoViewIfNeeded()
    await expect(features).toBeVisible()
  })
})


