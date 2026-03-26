import { expect } from "@playwright/test";

export class RegisterPage {
  constructor(page) {
    this.page = page;

    this.firstName = page.getByRole("textbox", { name: "First Name" });
    this.lastName = page.getByRole("textbox", { name: "Last Name" });
    this.userName = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password" });
    this.registerButton = page.getByRole("button", { name: "Register" });
    this.errorMsg = this.page.locator("#name");
  }

  async visit() {
    await this.page.goto("https://demoqa.com/register");
  }

  async fillFirstName(firstname) {
    await expect(this.firstName).toBeVisible();
    await this.firstName.fill(firstname);
  }

  async fillLastName(lastname) {
    await expect(this.lastName).toBeVisible();
    await this.lastName.fill(lastname);
  }

  async fillUserName(username) {
    await expect(this.userName).toBeVisible();
    await this.userName.fill(username);
  }

  async fillPassword(password) {
    await expect(this.password).toBeVisible();
    await this.password.fill(password);
  }

  async clickRegister() {
    await expect(this.registerButton).toBeVisible();
    await this.registerButton.click();
  }
  async verifyAlertSuccess() {
    // Kita buat promise supaya Playwright nunggu sampai dialog beneran muncul
    const dialogPromise = this.page.waitForEvent("dialog");

    // Klik tombol pemicu
    await this.clickRegister();

    // Tangkap dialognya
    const dialog = await dialogPromise;

    // Validasi teks
    expect(dialog.message()).toBe("User Registered Successfully.");

    // Tutup dialog
    await dialog.accept();
  }
  async verifyfieldfirstnameEmptyError() {
    await expect(this.firstName).toBeVisible();
    await expect(this.firstName).toHaveClass(/is-invalid/);
  }
  async verifyfieldlastnameEmptyError() {
    await expect(this.lastName).toBeVisible();
    await expect(this.lastName).toHaveClass(/is-invalid/);
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
    await expect(this.errorMsg).toContainText(/Passwords must/, { timeout: 10000 });
    // ini gabisa karna dia kena capctha jadi errornya muncul di console bukan di UI, jadi gabisa di assert pake locator, jadi saya buat pause aja biar bisa diliat manualnya, kalo mau lanjut harus disable captcha nya dulu
  }
  async pause() {
    await this.page.pause();
  }
}
