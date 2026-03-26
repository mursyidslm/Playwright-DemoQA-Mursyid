import { expect } from "@playwright/test";
import { validLoginData } from "../../test-data/bookstoreapp/datalogin.js";

export class loginpage {
  constructor(page) {
    this.page = page;
    this.userName = page.getByPlaceholder("UserName");
    this.password = page.getByPlaceholder("Password");
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.newUserButton = page.getByRole("button", { name: "New User" });
    this.name = page.locator('#userName-value');
    this.logoutButton = page.getByRole("button", { name: "Logout" });
    this.newUserButton = page.getByRole("button", { name: "New User" });
    this.errorMsg = this.page.locator("#name");
  }

  async visit() {
    await this.page.goto("https://demoqa.com/login");
  }

  async fillUserName(username) {
    await expect(this.userName).toBeVisible();
    await this.userName.fill(username);
  }

  async fillPassword(password) {
    await expect(this.password).toBeVisible();
    await this.password.fill(password);
  }

  async clickLogin() {
    await expect(this.loginButton).toBeVisible();
    await this.loginButton.click();
  }
  async verifyloginSuccess() {
    await expect(this.page).toHaveURL("https://demoqa.com/profile");
    await expect(this.name).toBeVisible ();
    await expect(this.name).toHaveText(validLoginData.username);
    await expect(this.logoutButton).toBeVisible();

  }
  async verifyfieldusernameEmptyError() {
    await expect(this.userName).toBeVisible();
    await expect(this.userName).toHaveClass(/is-invalid/);
  }
  async verifyfieldpasswordEmptyError() {
    await expect(this.password).toBeVisible();
    await expect(this.password).toHaveClass(/is-invalid/);
  } 
  async verifyfieldpasswordInvalidError() {
    await expect(this.errorMsg).toHaveText(/Invalid username or password/, { timeout: 10000 });
  }
  async validatebuttonNewUser() {
    await expect(this.newUserButton).toBeVisible();
    await this.newUserButton.click();
    await expect(this.page).toHaveURL("https://demoqa.com/register");
  }
}
