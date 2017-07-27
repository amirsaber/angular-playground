import { Component } from '@angular/core';

import { AuthService } from './services/auth/auth.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private authService: AuthService) { }

  public login() {
    this.authService.login();
  }

  public logout() {
    this.authService.logout();
  }

  public isLogedIn() {
    return this.authService.isAuthenticated();
  }
}
