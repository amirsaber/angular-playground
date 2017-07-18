import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdTabsModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    MdButtonModule,
    MdTabsModule,
    FlexLayoutModule
  ]
})
export class CustomMaterialModule { }
