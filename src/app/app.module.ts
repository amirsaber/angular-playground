import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutesModule } from './modules/app-routes.module';
import { CustomMaterialModule } from './modules/custom-material.module';

import { FormService } from './services/form/form.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { Form1DialogComponent } from './components/form/form1-dialog/form1-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    Form1DialogComponent
  ],
  entryComponents: [
    Form1DialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutesModule,
    CustomMaterialModule
  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
