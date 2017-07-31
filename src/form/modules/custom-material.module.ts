import { NgModule } from '@angular/core';
import {
  MdButtonModule,
  MdTabsModule,
  MdInputModule,
  MdIconModule,
  MdProgressSpinnerModule,
  MdDialogModule,
  MdAutocompleteModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  exports: [
    FlexLayoutModule,
    MdButtonModule,
    MdTabsModule,
    MdInputModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdDialogModule,
    MdAutocompleteModule
  ]
})
export class CustomMaterialModule { }
