import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutesModule } from './modules/form-routes.module';
import { CustomMaterialModule } from './modules/custom-material.module';

import { FormService } from './services/form/form.service';

import { FormComponent } from './form.component';
import { Form1DialogComponent } from './components/form1-dialog/form1-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormRoutesModule,
    CustomMaterialModule
  ],
  declarations: [
    FormComponent,
    Form1DialogComponent
  ],
  entryComponents: [
    Form1DialogComponent
  ],
  providers: [
    FormService
  ],
  exports: []
})
export class FormModule { }
