import { expect } from "@playwright/test";

export class textboxpages {
  constructor(page) {
    this.page = page;
    this.fieldfullname = page.getByPlaceholder("Full Name");
    this.fieldEmail = page.locator("#userEmail");
    this.fieldcurrentAddress = page.getByPlaceholder("Current Address");
    this.fieldpermanentAddress = page.locator("#permanentAddress");
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.outputName = page.locator("#name");
    this.outputEmail = page.locator("#email");
    this.outputCurrentAddress = page.locator("#output #currentAddress");
    this.outputPermanentAddress = page.locator("#output #permanentAddress");
    this.heading = page.getByRole('heading', { name: 'Text Box' });
  }
  async visit() {
    await this.page.goto("https://demoqa.com/text-box");
    await expect(this.heading).toBeVisible();
  }
    async fillFieldFullName(fullname) {
        await expect(this.fieldfullname).toBeVisible();
    await this.fieldfullname.fill(fullname);
  }
    async fillFieldEmail(email) {
        await expect(this.fieldEmail).toBeVisible();      
        await this.fieldEmail.fill(email);
    }
    async fillFieldCurrentAddress(currentAddress) {
        await expect(this.fieldcurrentAddress).toBeVisible();
        await this.fieldcurrentAddress.fill(currentAddress);
    }
    async fillFieldPermanentAddress(permanentAddress) {
        await expect(this.fieldpermanentAddress).toBeVisible();
        await this.fieldpermanentAddress.fill(permanentAddress);
    }
    async clickSubmit() {
        await expect(this.submitButton).toBeVisible();
        await this.submitButton.click();
    }
    async verifyOutputName(fullname) {
        await expect(this.outputName).toBeVisible();
        await expect(this.outputName).toHaveText(`Name:${fullname}`);
    }
    async verifyOutputEmail(email) {
        await expect(this.outputEmail).toBeVisible();
        await expect(this.outputEmail).toHaveText(`Email:${email}`);
    }
    async verifyOutputCurrentAddress(currentAddress) {
        await expect(this.outputCurrentAddress).toBeVisible();
        await expect(this.outputCurrentAddress).toHaveText(`Current Address :${currentAddress}`);
    }
    async verifyOutputPermanentAddress(permanentAddress) {
        await expect(this.outputPermanentAddress).toBeVisible();
        await expect(this.outputPermanentAddress).toHaveText(`Permananet Address :${permanentAddress}`);
        // ini permananet emang salah di webnya
    }
    async scrollDown() {
        await this.page.mouse.wheel(0, 300);
        await this.page.waitForTimeout(300);
        await this.page.mouse.wheel(0, 300);
        await this.page.waitForTimeout(300);
    }
    async verifyfieldEmailInvalidError() {
        await expect(this.fieldEmail).toBeVisible();
        await expect(this.fieldEmail).toHaveClass(/field-error/);
    }

}
