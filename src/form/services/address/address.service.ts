import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import * as GoogleMap from '@google/maps';

@Injectable()
export class AddressService {
  private googleMapClient;
  constructor() {
    this.googleMapClient = GoogleMap.createClient({
      key: 'AIzaSyDUKpmFw-tv25dcoqRhmn8194e9E2tZ6nc'
    });
  }

  public getAutoComplete(input: string) {
    const resultObservable = new Subject<any[]>();
    this.googleMapClient.placesAutoComplete({
      input: input,
    }, (err, response) => {
      if (!err) {
        resultObservable.next(response.json.predictions);
      }
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
