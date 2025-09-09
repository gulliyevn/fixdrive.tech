import { test, expect } from '@playwright/test'

test('Contact Sales modal opens from CTA', async ({ page }) => {
  await page.goto('/')
  const btn = page.getByRole('button', { name: /Contact Sales|Связаться с продажами|Contato de Vendas|Contact|İletişim|اتصال|联系销售/ })
  await btn.first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
})



test('Contact Sales modal opens from CTA', async ({ page }) => {
  await page.goto('/')
  const btn = page.getByRole('button', { name: /Contact Sales|Связаться с продажами|Contato de Vendas|Contact|İletişim|اتصال|联系销售/ })
  await btn.first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
})



test('Contact Sales modal opens from CTA', async ({ page }) => {
  await page.goto('/')
  const btn = page.getByRole('button', { name: /Contact Sales|Связаться с продажами|Contato de Vendas|Contact|İletişim|اتصال|联系销售/ })
  await btn.first().click()
  await expect(page.getByRole('dialog')).toBeVisible()
})


