import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from '../user.component';
import { CallbackComponent } from '../components/callback/callback.component';

const appRoutes: Routes = [{
  path: '',
  component: UserComponent
}, {
  path: 'callback',
  component: CallbackComponent
}];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class UserRoutesModule { }
