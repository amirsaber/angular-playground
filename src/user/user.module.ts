import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserRoutesModule } from './modules/user-routes.module';
import { CustomMaterialModule } from './modules/custom-material.module';

import { AuthService } from './services/auth/auth.service';

import { UserComponent } from './user.component';
import { CallbackComponent } from './components/callback/callback.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutesModule,
    CustomMaterialModule
  ],
  declarations: [
    UserComponent,
    CallbackComponent
  ],
  providers: [
    AuthService
  ]
})
export class UserModule { }
