import {test, expect} from "@playwright/test";
import { textboxpages } from "../../pages/textboxpage.js";
import { validDataTextBox, negativeDataEmailTextBox } from "../../utils/datatextbox.js";

test.describe("Negative Case Text Box Element", () => {
  negativeDataEmailTextBox.forEach((invalidemail) => {
    test(invalidemail.name, async ({ page }) => {
        const textboxPage = new textboxpages(page);
        await textboxPage.visit();
        await textboxPage.fillFieldFullName(validDataTextBox.fullname);
        await textboxPage.fillFieldEmail(invalidemail.email);
        await textboxPage.fillFieldCurrentAddress(validDataTextBox.currentAddress);
        await textboxPage.fillFieldPermanentAddress(validDataTextBox.permanentAddress);
        await textboxPage.clickSubmit();
        await textboxPage.verifyfieldEmailInvalidError();
    });
  });
});