import { element, by, ElementFinder } from 'protractor';

export class {{ capitalize labels.singular }}ComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-{{ labels.singular }} div table .btn-danger'));
  title = element.all(by.css('jhi-{{ labels.singular }} div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class {{ capitalize labels.singular }}UpdatePage {
  pageTitle = element(by.id('jhi-{{ labels.singular }}-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  {{ element-field-id properties }}

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  {{ getter-and-set-entity-po properties }}

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class {{ capitalize labels.singular }}DeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-{{ labels.singular }}-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-{{ labels.singular }}'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
