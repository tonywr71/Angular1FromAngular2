//Start Angular 1 working with Angular 2 components
import { upgradeAdapter } from './upgradeAdapter';
////import components that need to be downgraded
import { AppComponent } from './app.component';
import { Phone } from "./core/phone/phone.service";
declare var angular: any;
//downgrade any angular 2 components so they can be used in angular 1
angular.module("phonecatApp").directive("myApp", <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(AppComponent));
angular.module('core.phone').factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

upgradeAdapter.bootstrap(document.body, ["phonecatApp"]);
//End Angular 1 working with Angular 2 components


//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { upgradeAdapter } from './upgradeAdapter';
//import { AppModule } from './app.module';
//platformBrowserDynamic().bootstrapModule(AppModule);
