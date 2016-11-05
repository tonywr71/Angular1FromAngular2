import { Phone, PhoneData } from "../core/phone/phone.service";
declare var angular: any;
'use strict';

class PhoneDetailController {
//S1
  phone: PhoneData;
//  phone: any;
//E1
  mainImageUrl: string;

  static $inject = ["$routeParams", "phone"];
  //S1 - Convert from Angular 1 injection to Angular 2 injection
  constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams["phoneId"];
    phone.get(phoneId).subscribe( (data: any) => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }
  //constructor($routeParams: angular.route.IRouteParamsService, Phone: any) {
  //  let phoneId = $routeParams['phoneId'];
  //  this.phone = Phone.get({ phoneId }, (phone: any) => {
  //    this.setImage(phone.images[0]);
  //  });
  //}
  //E1

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
  });
