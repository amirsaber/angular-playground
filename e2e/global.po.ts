import { browser, by, element } from 'protractor';

export class GlobalPage {
  navigateTo(address: string) {
    return browser.get(address);
  }

  async goToFormPage() {
    return element(by.css('app-root nav a[href="/form"]')).click();
  }

  async goToHomePage() {
    return element(by.css('app-root nav a[href="/home"]')).click();
  }

  getPageHeader() {
    return element(by.css('app-root ng-component h1')).getText();
  }
}
