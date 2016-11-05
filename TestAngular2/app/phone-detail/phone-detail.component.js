"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Start Angular 2 component - no longer a need to for the angular line that adds it to the module either!
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var phone_service_1 = require("../core/phone/phone.service");
var PhoneDetailComponent = (function () {
    //Start V2
    ////Start V1
    //  // angular2: no longer have $static inject. here we use a decorator to inject the parameter
    //  // I assume that by sticking it directly next to the parameter, it reduces the odds of making an ordering error.
    //  // Phone doesn't need to be Injected, because the phone class is already existing within the application.
    //  constructor( @Inject("$routeParams") $routeParams: angular.route.IRouteParamsService, phone: Phone) {
    ////End V1
    function PhoneDetailComponent(activatedRoute, phone) {
        var _this = this;
        //    let phoneId = $routeParams["phoneId"];
        var phoneId = activatedRoute.snapshot.params['phoneId'];
        //End V2
        phone.get(phoneId).subscribe(function (data) {
            _this.phone = data;
            _this.setImage(data.images[0]);
        });
    }
    PhoneDetailComponent.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "phone-detail",
            templateUrl: "phone-detail.template.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, phone_service_1.Phone])
    ], PhoneDetailComponent);
    return PhoneDetailComponent;
}());
exports.PhoneDetailComponent = PhoneDetailComponent;
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
//# sourceMappingURL=phone-detail.component.js.map