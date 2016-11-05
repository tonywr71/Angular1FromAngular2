// Start Angular 2 component - no longer a need to for the angular line that adds it to the module either!
import { Component } from '@angular/core';
import { Phone, PhoneData } from '../core/phone/phone.service';

@Component({
  moduleId: module.id,
  selector: 'phone-list',
  templateUrl: 'phone-list.template.html'
})
export class PhoneListComponent {
  phones: PhoneData[];
  query: string;
  orderProp: string;
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

  getPhones(): PhoneData[] {
    return this.sortPhones(this.filterPhones(this.phones));
  }

  private filterPhones(phones: PhoneData[])
  {
    if (phones && this.query)
    {
      return phones.filter(phone => {
        let name = phone.name.toLowerCase();
        let snippet = phone.snippet.toLowerCase();
        return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
      });
    }
    return phones;
  }

  private sortPhones(phones: PhoneData[]) {
    if (phones && this.orderProp) {
      return phones
        .slice(0) //this makes a copy
        .sort((a, b) => {
          if (a[this.orderProp] < b[this.orderProp])
          {
            return -1;
          }
          else if (b[this.orderProp] < a[this.orderProp])
          {
            return 1;
          }
          else
          {
            return 0;
          }
        });
    }
    return phones; // no sort order selected
  }

}
// End Angular 2 component

//Start Angular 1 component
//import { Phone, PhoneData } from '../core/phone/phone.service';but T
//declare var angular: any;
//'use strict';

//class PhoneListController {
////S1
//  phones: PhoneData[];
//  //phones: any[];
////E1
//  orderProp: string;
////S1
////  query: string;
////E1

//  static $inject = ['phone'];
//  //S1 - convert to Angular 2 injection
//  constructor(phone: Phone) {
//    phone.query().subscribe(phones => {
//      this.phones = phones;
//    });
//    this.orderProp = 'age';
//  }
//  //constructor(Phone: any) {
//  //  this.phones = Phone.query();
//  //  this.orderProp = 'age';
//  //}
//  //E1

//}

//// Register `phoneList` component, along with its associated controller and template
//angular.
//  module('phoneList').
//  component('phoneList', {
//    templateUrl: '/app/phone-list/phone-list.template.html',
//    controller: PhoneListController
//  });
//End Angular 1 component

