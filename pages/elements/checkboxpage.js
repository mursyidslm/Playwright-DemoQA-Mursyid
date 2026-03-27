import { expect } from "@playwright/test";

export class checkboxpages {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: "Check Box" });
    this.result = page.locator("#result");
  }
  async visit() {
    await this.page.goto("https://demoqa.com/checkbox");
    await expect(this.heading).toBeVisible();
  }
  async checkDownloads() {
    await this.checkboxdownloads.check();
  }

  async verifyDownloadsChecked() {
    await expect(this.checkboxdownloads).toBeChecked();
  }
  async uncheckDownloads() {
    await this.checkboxdownloads.uncheck();
  }
}
export class ExpandableTree {
  constructor(page) {
    this.page = page;
    this.home = page.getByRole("treeitem", { name: /Home/ });
    this.desktop = page.getByRole("treeitem", { name: /Desktop/ });
    this.notes = page.getByRole("treeitem", { name: /Notes/ });
    this.commands = page.getByRole("treeitem", { name: /Commands/ });
    this.documents = page.getByRole("treeitem", { name: /Documents/ });
    this.workspace = page.getByRole("treeitem", { name: /Workspace/ });
    this.office = page.getByRole("treeitem", { name: /Office/ });
    this.downloads = page.getByRole("treeitem", { name: /Downloads/ });
    this.wordFile = page.getByRole("treeitem", { name: /Word File\.doc/ });
    this.excelFile = page.getByRole("treeitem", { name: /Excel File\.doc/ });
  }
}

export class CheckBox {
  constructor(page) {
    this.page = page;
    this.checkboxhome = page.getByRole("checkbox", { name: /Home/ });
    this.checkboxdesktop = page.getByRole("checkbox", { name: /Desktop/ });
    this.checkboxnotes = page.getByRole("checkbox", { name: /Notes/ });
    this.checkboxcommands = page.getByRole("checkbox", { name: /Commands/ });
    this.checkboxdocuments = page.getByRole("checkbox", { name: /Documents/ });
    this.checkboxworkspace = page.getByRole("checkbox", { name: /Workspace/ });
    this.checkboxreact = page.getByRole("checkbox", { name: /React/ });
    this.checkboxangular = page.getByRole("checkbox", { name: /Angular/ });
    this.checkboxveu = page.getByRole("checkbox", { name: /Vue/ });
    this.checkboxoffice = page.getByRole("checkbox", { name: /Office/ });
    this.checkboxpublic = page.getByRole("checkbox", { name: /Public/ });
    this.checkboxprivate = page.getByRole("checkbox", { name: /Private/ });
    this.checkboxclassified = page.getByRole("checkbox", { name: /Classified/ });
    this.checkboxgeneral = page.getByRole("checkbox", { name: /General/ });
    this.checkboxdownloads = page.getByRole("checkbox", { name: /Downloads/ });
    this.checkboxwordFile = page.getByRole("checkbox", {
      name: /Word File\.doc/,
    });
    this.checkboxexcelFile = page.getByRole("checkbox", {
      name: /Excel File\.doc/,
    });
  }
  async checkHome() {
    await this.checkboxhome.check();
    await expect(this.checkboxhome).toBeChecked();
    await expect(this.result).toHaveText(/home/i);
  }
}
