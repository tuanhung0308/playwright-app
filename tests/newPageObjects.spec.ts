import {test, expect} from '@playwright/test';
import { NavigationPage } from '../page-objects/navigationPage';
import { FormLayoutsPage } from '../page-objects/formLayoutsPage';
import { DatepickerPage } from '../page-objects/datepickerPage';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/')
})

test('navigation to form page', async ({ page }) => {
    const pm = new NavigationPage(page)
    
    const navigateTo = new NavigationPage(page)
    await navigateTo.formLayoutsPage()
    await navigateTo.datepickerPage()
    await navigateTo.smartTablePage()
    await navigateTo.toastrPage()
    await navigateTo.tooltipPage()
})

test('parameterized methods', async ({ page }) => {
    const navigateTo = new NavigationPage(page)
    const onFormLayoutsPage = new FormLayoutsPage(page)
    const onDatepickerPage = new DatepickerPage(page)   

    await navigateTo.formLayoutsPage()
    await onFormLayoutsPage.submitUsingTheGridFormWithCredentialsAndSelectOption('testdt@test.com', 'Welcome1', 'Option 2')
    await onFormLayoutsPage.submitInlineFormWithNameEmailAndCheckBox('John Smith', 'John@example.com', true)
    await page.screenshot({path: 'screenshots/formLayouts.png'})
    const buffer = await page.screenshot()
    console.log(buffer.toString('base64'))

    await navigateTo.datepickerPage()
    await onDatepickerPage.selectCommonDatePickerDateFromToday(10)
    await onDatepickerPage.selectDatepickerWithRangeFromToday(5, 15)    
})

