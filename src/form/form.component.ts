import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { Form1DialogComponent } from './components/form1-dialog/form1-dialog.component';
import { Form2DialogComponent } from './components/form2-dialog/form2-dialog.component';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private mdDialog: MdDialog
  ) { }

  ngOnInit() {
  }

  openForm1() {
    this.mdDialog.open(Form1DialogComponent);
  }

  openForm2() {
    this.mdDialog.open(Form2DialogComponent);
  }
}
