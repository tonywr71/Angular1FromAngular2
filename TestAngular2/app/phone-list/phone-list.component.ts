import { Phone, PhoneData } from '../core/phone/phone.service';
declare var angular: any;
'use strict';

class PhoneListController {
//S1
  phones: PhoneData[];
  //phones: any[];
//E1
  orderProp: string;
//S1
//  query: string;
//E1

  static $inject = ['phone'];
  //S1 - convert to Angular 2 injection
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
  //constructor(Phone: any) {
  //  this.phones = Phone.query();
  //  this.orderProp = 'age';
  //}
  //E1

}

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: '/app/phone-list/phone-list.template.html',
    controller: PhoneListController
  });

