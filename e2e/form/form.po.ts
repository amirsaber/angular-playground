import { by, element } from 'protractor';

export class FormPage {
  async openForm1Dialog() {
    return element(by.css('app-root button#form1-button')).click();
  }
  getForm1() {
    return element(by.css('md-dialog-container ng-component div h3'));
  }
}
