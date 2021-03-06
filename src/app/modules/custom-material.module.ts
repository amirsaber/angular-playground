import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdTabsModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdTabsModule,
  ]
})
export class CustomMaterialModule { }
