import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from '../form.component';

const appRoutes: Routes = [{
  path: '',
  component: FormComponent
}];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class FormRoutesModule { }
