import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/of';

import { IForm } from '../../models/form/form.interface';

@Injectable()
export class FormService {
  private data: IForm[];
  private formDataObservable: BehaviorSubject<IForm[]>;
  private nextId = 5;

  constructor() {
    this.init();
  }

  public get FormData() {
    return this.formDataObservable.delay(500);
  }

  public async createData(data: IForm) {
    data.id = this.nextId;
    this.nextId++;
    this.data.push(data);
    this.formDataObservable.next(this.data);
    return Observable.of(data).delay(1000).toPromise();
  }

  public async deleteData(data: IForm) {
    const index = this.findDataIndex(data);
    if (index > -1) {
      this.data.splice(index, 1);
      this.formDataObservable.next(this.data);
    }
    return Observable.of(data).delay(100).toPromise();
  }

  public async updateData(data: IForm) {
    const index = this.findDataIndex(data);
    if (index > -1) {
      this.data[index] = data;
      this.formDataObservable.next(this.data);
    }
    return Observable.of(data).delay(500).toPromise();
  }

  private findDataIndex(data: IForm) {
    return this.data.findIndex((value) => {
      return data.id === value.id;
    });
  }

  private init() {
    this.data = [];
    this.data.push({
      id: 1,
      firstName: 'Amir',
      lastName: 'Sharifi',
      email: 'amir@gorealster.com'
    });
    this.data.push({
      id: 2,
      firstName: 'Jeff',
      lastName: 'Lee',
      email: 'jeff@gorealster.com'
    });
    this.data.push({
      id: 3,
      firstName: 'Keyvan',
      lastName: 'Chamani',
      email: 'keyvan@gorealster.com'
    });
    this.data.push({
      id: 4,
      firstName: 'Sangmin',
      lastName: 'Lee',
      email: 'sangmin@gorealster.com'
    });

    this.formDataObservable = new BehaviorSubject<IForm[]>(null);
    this.formDataObservable.next(this.data);
  }
}
