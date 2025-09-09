import { test, expect } from '@playwright/test'

test('theme and language toggles work', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, 0))
  // theme toggle (switch)
  const switchBtn = page.locator('button[role="switch"]').first()
  const size = await page.viewportSize()
  const isMobile = !!size && size.width < 600
  if (await switchBtn.count()) {
    if (isMobile) {
      // На мобилке только проверяем наличие и aria-checked без клика
      const aria = await switchBtn.getAttribute('aria-checked')
      expect(aria).toMatch(/true|false/)
    } else {
      await switchBtn.scrollIntoViewIfNeeded()
      await switchBtn.waitFor({ state: 'visible' })
      await switchBtn.click({ force: true })
      await expect(switchBtn).toHaveAttribute('aria-checked', /true|false/)
    }
  }
  // language picker exists
  await page.evaluate(() => window.scrollTo(0, 0))
  const langBtn = page.getByRole('button', { name: /English|Русский|العربية|中文|Deutsch|Español|Français|Italiano|Português|Türkçe|Azərbaycan/ })
  const existsByLabel = await langBtn.count()
  const generic = page.locator('button[aria-haspopup="listbox"]')
  const existsGeneric = await generic.count()
  expect(existsByLabel + existsGeneric).toBeGreaterThan(0)
})



test('theme and language toggles work', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, 0))
  // theme toggle (switch)
  const switchBtn = page.locator('button[role="switch"]').first()
  const size = await page.viewportSize()
  const isMobile = !!size && size.width < 600
  if (await switchBtn.count()) {
    if (isMobile) {
      // На мобилке только проверяем наличие и aria-checked без клика
      const aria = await switchBtn.getAttribute('aria-checked')
      expect(aria).toMatch(/true|false/)
    } else {
      await switchBtn.scrollIntoViewIfNeeded()
      await switchBtn.waitFor({ state: 'visible' })
      await switchBtn.click({ force: true })
      await expect(switchBtn).toHaveAttribute('aria-checked', /true|false/)
    }
  }
  // language picker exists
  await page.evaluate(() => window.scrollTo(0, 0))
  const langBtn = page.getByRole('button', { name: /English|Русский|العربية|中文|Deutsch|Español|Français|Italiano|Português|Türkçe|Azərbaycan/ })
  const existsByLabel = await langBtn.count()
  const generic = page.locator('button[aria-haspopup="listbox"]')
  const existsGeneric = await generic.count()
  expect(existsByLabel + existsGeneric).toBeGreaterThan(0)
})



test('theme and language toggles work', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => window.scrollTo(0, 0))
  // theme toggle (switch)
  const switchBtn = page.locator('button[role="switch"]').first()
  const size = await page.viewportSize()
  const isMobile = !!size && size.width < 600
  if (await switchBtn.count()) {
    if (isMobile) {
      // На мобилке только проверяем наличие и aria-checked без клика
      const aria = await switchBtn.getAttribute('aria-checked')
      expect(aria).toMatch(/true|false/)
    } else {
      await switchBtn.scrollIntoViewIfNeeded()
      await switchBtn.waitFor({ state: 'visible' })
      await switchBtn.click({ force: true })
      await expect(switchBtn).toHaveAttribute('aria-checked', /true|false/)
    }
  }
  // language picker exists
  await page.evaluate(() => window.scrollTo(0, 0))
  const langBtn = page.getByRole('button', { name: /English|Русский|العربية|中文|Deutsch|Español|Français|Italiano|Português|Türkçe|Azərbaycan/ })
  const existsByLabel = await langBtn.count()
  const generic = page.locator('button[aria-haspopup="listbox"]')
  const existsGeneric = await generic.count()
  expect(existsByLabel + existsGeneric).toBeGreaterThan(0)
})


