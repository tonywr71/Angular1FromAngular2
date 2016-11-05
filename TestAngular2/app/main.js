"use strict";
//Start Angular 1 working with Angular 2 components
var upgradeAdapter_1 = require('./upgradeAdapter');
////import components that need to be downgraded
var app_component_1 = require('./app.component');
var phone_service_1 = require("./core/phone/phone.service");
//downgrade any angular 2 components so they can be used in angular 1
angular.module("phonecatApp").directive("myApp", upgradeAdapter_1.upgradeAdapter.downgradeNg2Component(app_component_1.AppComponent));
angular.module('core.phone').factory('phone', upgradeAdapter_1.upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
upgradeAdapter_1.upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//End Angular 1 working with Angular 2 components
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { upgradeAdapter } from './upgradeAdapter';
//import { AppModule } from './app.module';
//platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map