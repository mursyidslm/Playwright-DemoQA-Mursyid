import {test, expect} from "@playwright/test";
import { textboxpages } from "../../pages/textboxpage.js";
import { validDataTextBox, negativeDataEmailTextBox  } from "../../utils/datatextbox.js";

test.describe("Text Box Element", () => {
  test("Input all fields with valid data and submit", async ({ page }) => {
    const textboxPage = new textboxpages(page);
    await textboxPage.visit();
    await textboxPage.fillFieldFullName(validDataTextBox.fullname);
    await textboxPage.fillFieldEmail(validDataTextBox.email);
    await textboxPage.fillFieldCurrentAddress(validDataTextBox.currentAddress);
    await textboxPage.fillFieldPermanentAddress(validDataTextBox.permanentAddress);
    await textboxPage.clickSubmit();
    await textboxPage.verifyOutputName(validDataTextBox.fullname);
    await textboxPage.verifyOutputEmail(validDataTextBox.email);
    await textboxPage.verifyOutputCurrentAddress(validDataTextBox.currentAddress);
    await textboxPage.verifyOutputPermanentAddress(validDataTextBox.permanentAddress);
    await textboxPage.scrollDown(); // ini buat scroll ke bawah biar bisa liat outputnya, karena kalo gak scroll dia gak muncul di viewport jadi gak bisa di validasi
  });
});