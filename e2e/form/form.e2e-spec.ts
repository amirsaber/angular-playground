import { GlobalPage } from '../global.po';
import { FormPage } from './form.po';

describe('Form Module', () => {
  let page: FormPage;
  let global: GlobalPage;

  beforeEach(() => {
    global = new GlobalPage();
    page = new FormPage();
  });

  it('should navigate to Form', async () => {
    global.navigateTo('/');
    await global.goToFormPage();
    expect(global.getPageHeader()).toEqual('Forms');
  });

  it('should open Form1 Dialog', async () => {
    await page.openForm1Dialog();
    expect(await page.getForm1().isPresent()).toBeTruthy();
    expect(page.getForm1().getText()).toEqual('Form 1');
  });
});
