"use strict";
//Start Angular 1 working with Angular 2 components
var upgradeAdapter_1 = require('./upgradeAdapter');
////import components that need to be downgraded
var app_component_1 = require('./app.component');
var phone_service_1 = require("./core/phone/phone.service");
var phone_list_component_1 = require('./phone-list/phone-list.component');
var phone_detail_component_1 = require('./phone-detail/phone-detail.component');
//downgrade any angular 2 components so they can be used in angular 1
//upgrade any angular 1 components so they can be used in angular 2
//upgraded components don't get registered in the module. They are registered here.
angular.module("phonecatApp").directive("myApp", upgradeAdapter_1.upgradeAdapter.downgradeNg2Component(app_component_1.AppComponent));
angular.module('core.phone').factory('phone', upgradeAdapter_1.upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
upgradeAdapter_1.upgradeAdapter.upgradeNg1Provider('$routeParams');
angular.module("phoneList").directive('phoneList', upgradeAdapter_1.upgradeAdapter.downgradeNg2Component(phone_list_component_1.PhoneListComponent));
angular.module("phoneDetail").directive('phoneDetail', upgradeAdapter_1.upgradeAdapter.downgradeNg2Component(phone_detail_component_1.PhoneDetailComponent));
upgradeAdapter_1.upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//End Angular 1 working with Angular 2 components
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { upgradeAdapter } from './upgradeAdapter';
//import { AppModule } from './app.module';
//platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map