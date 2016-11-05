//Start Angular 1 working with Angular 2 components
import { upgradeAdapter } from './upgradeAdapter';
////import components that need to be downgraded
import { AppComponent } from './app.component';
import { Phone } from "./core/phone/phone.service";
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
declare var angular: any;
//downgrade any angular 2 components so they can be used in angular 1
//upgrade any angular 1 components so they can be used in angular 2
//upgraded components don't get registered in the module. They are registered here.
angular.module("phonecatApp").directive("myApp", upgradeAdapter.downgradeNg2Component(AppComponent) as angular.IDirectiveFactory);
angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));
upgradeAdapter.upgradeNg1Provider('$routeParams');
angular.module("phoneList").directive('phoneList', upgradeAdapter.downgradeNg2Component(PhoneListComponent) as angular.IDirectiveFactory);
angular.module("phoneDetail").directive('phoneDetail', upgradeAdapter.downgradeNg2Component(PhoneDetailComponent) as angular.IDirectiveFactory);

upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//End Angular 1 working with Angular 2 components


//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { upgradeAdapter } from './upgradeAdapter';
//import { AppModule } from './app.module';
//platformBrowserDynamic().bootstrapModule(AppModule);
