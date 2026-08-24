import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://www.uitestingplayground.com/ajax')
  await page.getByText('Button Triggering AJAX Request').click()
})

test('auto waiting', async ({page}) => {
    const successButton = page.locator('.bg-success')

    // // const text = await successButton.textContent() 
    // const text = await successButton.allTextContents()

    // expect(text).toEqual('Data loaded with AJAX get request.')

    await expect(successButton).toHaveText('Data loaded with AJAX get request.', { timeout: 20000 })
})

test('alternative waits', async ({ page }) => {
    const successButton = page.locator('.bg-success')

    //wait for the element
    // await page.waitForSelector('.bg-success')

    //wait for particular response
    await page.waitForResponse('http://www.uitestingplayground.com/ajaxdata')

    const text = await successButton.allTextContents()
    expect(text).toContain('Data loaded with AJAX get request.')
})

test('timeouts', async({ page }) => {
    // test.setTimeout(10000)
    test.slow()
    const successButton = page.locator('.bg-success')
    await successButton.click()
})


