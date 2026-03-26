import { test, expect } from '@playwright/test';
import { loginpage } from '../../../pages/bookstoreapp/loginpage.js';
import { validLoginData, passwordNegativeCases } from '../../../test-data/bookstoreapp/datalogin.js';

test.describe('Negative Case Login', () => {
    test('Login with Username Kosong', async ({ page }) => {
        const loginPage = new loginpage(page);
        await loginPage.visit();
        await loginPage.fillUserName('');
        await loginPage.fillPassword(validLoginData.password);
        await loginPage.clickLogin();
        await loginPage.verifyfieldusernameEmptyError();
    });
    test('Login with Password Kosong', async ({ page }) => {
        const loginPage = new loginpage(page);
        await loginPage.visit();
        await loginPage.fillUserName(validLoginData.username);
        await loginPage.fillPassword('');
        await loginPage.clickLogin();
        await loginPage.verifyfieldpasswordEmptyError();
    });
    passwordNegativeCases.forEach((testData) => {
        test(testData.name, async ({ page }) => {
            const loginPage = new loginpage(page);
            await loginPage.visit();
            await loginPage.fillUserName(validLoginData.username);
            await loginPage.fillPassword(testData.password);
            await loginPage.clickLogin();
            await loginPage.verifyfieldpasswordInvalidError();
        });
    });
});
