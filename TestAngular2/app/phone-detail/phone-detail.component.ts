// Start Angular 2 component - no longer a need to for the angular line that adds it to the module either!
import { Component, Inject } from '@angular/core';
import { Phone, PhoneData } from "../core/phone/phone.service";

@Component({
  moduleId: module.id,
  selector: "phone-detail",
  templateUrl: "phone-detail.template.html"
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;
  // angular2: no longer have $static inject. here we use a decorator to inject the parameter
  // I assume that by sticking it directly next to the parameter, it reduces the odds of making an ordering error.
  // Phone doesn't need to be Injected, because the phone class is already existing within the application.
  constructor( @Inject("$routeParams") $routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams["phoneId"];
    phone.get(phoneId).subscribe((data: any) => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }
  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
 
}

// End Angular 2 component


//Start Angular 1
//import { Phone, PhoneData } from "../core/phone/phone.service";
//declare var angular: any;
//'use strict';

//class PhoneDetailController {
////S1
//  phone: PhoneData;
////  phone: any;
////E1
//  mainImageUrl: string;

//  static $inject = ["$routeParams", "phone"];
//  //S1 - Convert from Angular 1 injection to Angular 2 injection
//  constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
//    let phoneId = $routeParams["phoneId"];
//    phone.get(phoneId).subscribe( (data: any) => {
//      this.phone = data;
//      this.setImage(data.images[0]);
//    });
//  }
//  //constructor($routeParams: angular.route.IRouteParamsService, Phone: any) {
//  //  let phoneId = $routeParams['phoneId'];
//  //  this.phone = Phone.get({ phoneId }, (phone: any) => {
//  //    this.setImage(phone.images[0]);
//  //  });
//  //}
//  //E1

//  setImage(imageUrl: string) {
//    this.mainImageUrl = imageUrl;
//  }
//}

//// Register `phoneDetail` component, along with its associated controller and template
//angular.
//  module('phoneDetail').
//  component('phoneDetail', {
//    templateUrl: 'phone-detail/phone-detail.template.html',
//    controller: PhoneDetailController
//  });
//End Angular 1