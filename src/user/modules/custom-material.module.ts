import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdIconModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    FlexLayoutModule,
    MdButtonModule,
    MdIconModule,
  ]
})
export class CustomMaterialModule { }
