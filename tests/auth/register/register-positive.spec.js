import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../../pages/RegisterPage.js';
import { DataValid, passwordNegativeCases } from '../../../utils/DataRegister.js';

test.describe('Positive Case Register', () => {
    test('Register with valid data', async ({ page }) => {
        await page.goto('https://demoqa.com/register');
        const registerPage = new RegisterPage(page);
        await registerPage.fillFirstName(DataValid.firstname);
        await registerPage.fillLastName(DataValid.lastname);
        await registerPage.fillUserName(DataValid.username);
        await registerPage.fillPassword(DataValid.password);
        await registerPage.verifyAlertSuccess();
    });
    // ini ketahan sama capctha jadi gabisa lanjut
    test('Validate button back to login is functional', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.visit();
        await registerPage.validatebuttonbacktologin();
    });
});