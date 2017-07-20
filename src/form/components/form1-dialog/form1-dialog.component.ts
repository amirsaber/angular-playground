import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl, NgForm, FormGroupDirective } from '@angular/forms';

import { FormService } from '../../services/form/form.service';

import { IForm } from '../../models/form/form.interface';

@Component({
  templateUrl: './form1-dialog.component.html',
  styleUrls: ['./form1-dialog.component.scss']
})
export class Form1DialogComponent implements OnInit {
  public fooArray: FormArray;
  public fooFormGroup: FormGroup;
  public busy: boolean;
  public loadingData: boolean;
  private currentData: IForm[];
  private markedForDelete: IForm[];
  private markedForUpdate: IForm[];
  private markedForCreate: IForm[];
  private errors = {
    firstName: {
      required: 'First Name is required',
      minlength: 'First Name can not be one character'
    },
    lastName: {
      required: 'Last Name is required',
      minlength: 'Last Name minimum length is 3'
    },
    email: {
      required: 'Last Name is required',
      email: 'Should be a valid email'
    }
  };

  constructor(
    private formBuilder: FormBuilder,
    private formService: FormService,
    private mdDialogRef: MdDialogRef<Form1DialogComponent>
  ) { }

  ngOnInit() {
    this.init();
    this.buildFooForm();
    this.fetchData();
  }

  public add(data?: IForm) {
    this.fooArray.push(this.buildFormArrayElement(data));
  }

  public async submit() {
    if (!this.busy) {
      this.busy = true;
      this.prepareChanges();
      const allPromises: Promise<IForm>[] = [];
      for (const data of this.markedForCreate) {
        const promise = this.formService.createData(data);
        allPromises.push(promise);
      }
      for (const data of this.markedForDelete) {
        const promise = this.formService.deleteData(data);
        allPromises.push(promise);
      }
      for (const data of this.markedForUpdate) {
        const promise = this.formService.updateData(data);
        allPromises.push(promise);
      }
      await Promise.all(allPromises);
      this.close();
    }
  }

  public remove(i: number) {
    this.addToDelete(i);
    this.fooArray.removeAt(i);
  }

  public isFormComplete() {
    let disabled = false;
    for (let i = 0; i < this.fooArray.controls.length; i++) {
      const formGroup = this.fooArray.at(i) as FormGroup;
      if (formGroup.invalid && formGroup.dirty) {
        disabled = true;
        break;
      }
    }
    return disabled;
  }

  public close() {
    this.mdDialogRef.close();
  }

  public formErrorStateMatcher(control: FormControl, form: FormGroupDirective | NgForm): boolean {
    return control.invalid && control.dirty && control.touched;
  }

  public getError(controlName: string, formGroup: FormGroup) {
    const errors = formGroup.controls[controlName].errors;
    let error = '';
    if (errors) {
      Object.keys(errors).forEach((value) => {
        error = this.errors[controlName][value];
      })
    }
    return error;
  }

  private prepareChanges() {
    for (let i = 0; i < this.fooArray.controls.length; i++) {
      const formGroup = this.fooArray.at(i) as FormGroup;
      const data = formGroup.value as IForm;
      if (formGroup.valid && formGroup.dirty) {
        if (data.id) {
          this.addToUpdate(data);
        } else {
          this.addToCreate(data);
        }
      }
    }
  }

  private init() {
    this.loadingData = true;
    this.currentData = [];
    this.markedForDelete = [];
    this.markedForCreate = [];
    this.markedForUpdate = [];
  }

  private addToUpdate(data: IForm) {
    this.markedForUpdate.push(data);
  }

  private addToCreate(data: IForm) {
    this.markedForCreate.push(data);
  }

  private addToDelete(i: number) {
    const formGroup = this.fooArray.at(i) as FormGroup;
    const data = {
      id: formGroup.value.id,
      firstName: formGroup.value.firstName,
      lastName: formGroup.value.lastName,
      email: formGroup.value.email
    }
    if (data.id) {
      this.markedForDelete.push(data);
    }
  }

  private buildFooForm() {
    this.fooArray = this.formBuilder.array([]);
    this.fooFormGroup = this.formBuilder.group({
      FooFormArray: this.fooArray
    });
  }

  private buildFormArrayElement(data?: IForm) {
    return this.formBuilder.group({
      id: [data ? data.id : ''],
      firstName: [data ? data.firstName : '', [Validators.required, Validators.minLength(2)]],
      lastName: [data ? data.lastName : '', [Validators.required, Validators.minLength(3)]],
      email: [data ? data.email : '', [Validators.required, Validators.email]]
    });
  }

  private fetchData() {
    this.formService.FormData.subscribe((data) => {
      this.currentData = data;
      if (this.loadingData) {
        this.addData();
      }
      this.loadingData = false;
    });
  }

  private addData() {
    for (const data of this.currentData) {
      this.add(data);
    }
  }
}
