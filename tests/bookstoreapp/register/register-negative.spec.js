import { test, expect } from '@playwright/test';
import { RegisterPage } from '../../../pages/RegisterPage.js';
import { DataValid, passwordNegativeCases } from '../../../utils/DataRegister.js';

test.describe('Negative Case Register', () => {
    test('Register with First Name Kosong', async ({ page }) => {
        
        const registerPage = new RegisterPage(page);
        await registerPage.visit();
        await registerPage.fillFirstName("");
        await registerPage.fillLastName(DataValid.lastname);
        await registerPage.fillUserName(DataValid.username);
        await registerPage.fillPassword(DataValid.password);
        await registerPage.clickRegister();
        await registerPage.verifyfieldfirstnameEmptyError();
    });
    test('Register with Last Name Kosong', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.visit();
        await registerPage.fillFirstName(DataValid.firstname);
        await registerPage.fillLastName("");
        await registerPage.fillUserName(DataValid.username);
        await registerPage.fillPassword(DataValid.password);
        await registerPage.clickRegister();
        await registerPage.verifyfieldlastnameEmptyError();
    });
    test('Register with Username Kosong', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.visit();
        await registerPage.fillFirstName(DataValid.firstname);
        await registerPage.fillLastName(DataValid.lastname);
        await registerPage.fillUserName("");
        await registerPage.fillPassword(DataValid.password);
        await registerPage.clickRegister();
        await registerPage.verifyfieldusernameEmptyError();
    });
    test('Register with Password Kosong', async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.visit();
        await registerPage.fillFirstName(DataValid.firstname);
        await registerPage.fillLastName(DataValid.lastname);
        await registerPage.fillUserName(DataValid.username);
        await registerPage.fillPassword("");
        await registerPage.clickRegister();
        await registerPage.verifyfieldpasswordEmptyError();
    });
    passwordNegativeCases.forEach((testData) => {
    test(testData.name, async ({ page }) => {
        const registerPage = new RegisterPage(page);
        await registerPage.visit();
        await registerPage.fillFirstName(DataValid.firstname);
        await registerPage.fillLastName(DataValid.lastname);
        await registerPage.fillUserName(DataValid.username);
        await registerPage.fillPassword(testData.password);
        await registerPage.clickRegister();
        await registerPage.verifyfieldpasswordInvalidError();
    //  INI GABISA KARENA DIA KENA CAPCTHA, JADI GABISA DI VALIDASI BAHWA ALERTNYA MUNCUL
    });
});
});