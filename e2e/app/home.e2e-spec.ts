import { GlobalPage } from '../global.po';
import { HomePage } from './home.po';

describe('Home Module', () => {
  let page: HomePage;
  let global: GlobalPage;

  beforeEach(() => {
    global = new GlobalPage();
    page = new HomePage();
  });

  it('should display Home', async () => {
    global.navigateTo('/');
    await global.goToHomePage();
    expect(global.getPageHeader()).toEqual('Angular Playground Home Page');
  });

  it('should navigate to Form', async () => {
    await global.goToFormPage();
    expect(global.getPageHeader()).toEqual('Forms');
  });

  it('should navigate back to Home', async () => {
    await global.goToHomePage();
    expect(global.getPageHeader()).toEqual('Angular Playground Home Page');
  });
});
