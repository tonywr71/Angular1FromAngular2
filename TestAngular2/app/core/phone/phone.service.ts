import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone
{
  constructor(private http: Http) {
  }

  query(): Observable<PhoneData[]> {
    return this.http.get(`app/phones/phones.json`)
      .map((res: Response) => res.json());
  }

  get(id: string): Observable<PhoneData> {
    return this.http.get(`app/phones/${id}.json`)
      .map((res: Response) => res.json());
  }
}


//angular.
//    module('core.phone').
//    factory('Phone', ['$resource',
//      function ($resource: angular.resource.IResourceService) {
//        return $resource('/app/phones/:phoneId.json', {}, {
//          query: {
//            method: 'GET',
//            params: { phoneId: 'phones' },
//            isArray: true
//          }
//        });
//      }
//    ]);


