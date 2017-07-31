import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';

import { AddressService } from '../../services/address/address.service';

@Component({
  templateUrl: './form2-dialog.component.html',
  styleUrls: ['./form2-dialog.component.scss']
})
export class Form2DialogComponent implements OnInit {
  public addressControl: FormControl;
  public options: Observable<string[]>;

  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit() {
    this.addressControl = new FormControl('');
    this.addressControl.valueChanges.debounceTime(200).subscribe((value) => {
      if (value !== null) {
        this.filter(value);
      }
    })
  }

  private filter(input: string) {
    this.options = this.addressService.getAutoComplete(input);
  }

}
