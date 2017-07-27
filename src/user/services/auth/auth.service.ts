import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';

@Injectable()
export class AuthService {

  private auth0 = new auth0.WebAuth({
    clientID: 'DMu83OQWKI7cGNLZiiGNVmOQb9vAzzhX',
    domain: 'amirsaber.auth0.com',
    responseType: 'token id_token',
    audience: 'https://amirsaber.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200/user/callback',
    scope: 'openid profile email'
  });

  constructor(public router: Router) { }

  public login(): void {
    this.auth0.authorize();
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.router.navigate(['/user']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      console.log(authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.setSession(authResult);
      } else if (err) {
        console.error(err);
      }
      this.router.navigate(['/user']);
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

}
