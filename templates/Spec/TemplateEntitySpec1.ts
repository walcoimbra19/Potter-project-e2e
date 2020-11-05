import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/page-objects.spec'; //Isso vem do PO

import { {{ capitalize labels.singular }}ComponentsPage, {{ capitalize labels.singular }}DeleteDialog, {{ capitalize labels.singular }}UpdatePage } from './{{ labels.singular }}-po';
import * as path from 'path';

const expect = chai.expect;

describe('{{ capitalize labels.singular }} e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let {{ labels.singular }}ComponentsPage: {{ capitalize labels.singular }}ComponentsPage;
  let {{ labels.singular }}UpdatePage: {{ capitalize labels.singular }}UpdatePage;
  let {{ labels.singular }}DeleteDialog: {{ capitalize labels.singular }}DeleteDialog;
  const fileNameToUpload = 'logo-jhipster.png';
  const fileToUpload = '../../../../../../src/main/webapp/content/images/' + fileNameToUpload; // Definir diretório
  const absolutePath = path.resolve(__dirname, fileToUpload);

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load {{ capitalize labels.plural }}', async () => {
    await navBarPage.goToEntity('{{ labels.singular }}');
    {{ labels.singular }}ComponentsPage = new {{ capitalize labels.singular }}ComponentsPage();
    await browser.wait(ec.visibilityOf({{ labels.singular }}ComponentsPage.title), 5000);
    expect(await {{ labels.singular }}ComponentsPage.getTitle()).to.eq('jhipsterCrudTestApplicationApp.{{ labels.singular }}.home.title');
    await browser.wait(ec.or(ec.visibilityOf({{ labels.singular }}ComponentsPage.entities), ec.visibilityOf({{ labels.singular }}ComponentsPage.noResult)), 1000);
  });

  it('should load create {{ capitalize labels.singular }} page', async () => {
    await {{ labels.singular }}ComponentsPage.clickOnCreateButton();
    {{ labels.singular }}UpdatePage = new {{ capitalize labels.singular }}UpdatePage();
    expect(await {{ labels.singular }}UpdatePage.getPageTitle()).to.eq('jhipsterCrudTestApplicationApp.{{ labels.singular }}.home.createOrEditLabel');
    await {{ labels.singular }}UpdatePage.cancel();
  });

  it('should create and save {{ capitalize labels.plural }}', async () => {
    const nbButtonsBeforeCreate = await {{ labels.singular }}ComponentsPage.countDeleteButtons();
    await {{ labels.singular }}ComponentsPage.clickOnCreateButton();
    
    await promise.all([
      {{ set-input-form-property-e2e properties }}
    ]);

    
    {{ expect-input-form-property-e2e properties }}


    await {{ labels.singular }}UpdatePage.save();
    expect(await {{ labels.singular }}UpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;
    expect(await {{ labels.singular }}ComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last {{ capitalize labels.singular }}', async () => {
    const nbButtonsBeforeDelete = await {{ labels.singular }}ComponentsPage.countDeleteButtons();
    await {{ labels.singular }}ComponentsPage.clickOnLastDeleteButton();
    {{ labels.singular }}DeleteDialog = new {{ capitalize labels.singular }}DeleteDialog();
    expect(await {{ labels.singular }}DeleteDialog.getDialogTitle()).to.eq('jhipsterCrudTestApplicationApp.{{ labels.singular }}.delete.question');
    await {{ labels.singular }}DeleteDialog.clickOnConfirmButton();
    expect(await {{ labels.singular }}ComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
