import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdTabsModule,
  MdInputModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdDialogModule
  ]
})
export class CustomMaterialModule { }
