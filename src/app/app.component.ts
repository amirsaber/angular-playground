import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navLinks = [{
    label: 'Home',
    link: 'home'
  }, {
    label: 'Form',
    link: 'form'
  }, {
    label: 'User',
    link: 'user'
  }]
}
