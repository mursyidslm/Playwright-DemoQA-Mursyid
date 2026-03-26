import { test, expect } from "@playwright/test";
import { loginpage } from "../../../pages/loginpage.js";
import { validLoginData } from "../../../utils/datalogin.js";

test.describe("Positive Case Login", () => {
  test("Login with valid data", async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.visit();
    await loginPage.fillUserName(validLoginData.username);
    await loginPage.fillPassword(validLoginData.password);
    await loginPage.clickLogin();
    await loginPage.verifyloginSuccess();
  });
  test("Validate button New User is functional", async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.visit();
    await loginPage.validatebuttonNewUser();
  });
  test("Validate button logout is functional", async ({ page }) => {
    const loginPage = new loginpage(page);
    await loginPage.visit();
    await loginPage.fillUserName(validLoginData.username);
    await loginPage.fillPassword(validLoginData.password);
    await loginPage.clickLogin();
    await loginPage.verifyloginSuccess();
    await expect(loginPage.loginButton).toBeVisible();
    await loginPage.logoutButton.click();
    await expect(this.page).toHaveURL("https://demoqa.com/login");
  });
});
