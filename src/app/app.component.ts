import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public navLinks = [{
    label: 'home',
    link: 'home'
  }, {
    label: 'form',
    link: 'form'
  }]
}
