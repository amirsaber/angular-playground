import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

declare var google: any;

@Injectable()
export class AddressService {
  private googleMapClient;
  constructor() {
    this.googleMapClient = new google.maps.places.AutocompleteService();
  }

  public getAutoComplete(input: string) {
    const resultObservable = new Subject<any[]>();
    this.googleMapClient.getPlacePredictions({
      input: input,
    }, (response) => {
      resultObservable.next(response);
    });
    return resultObservable.map((responses) => {
      const result: string[] = [];
      for (const response of responses) {
        result.push(response.description);
      }
      return result;
    });
  }
}
