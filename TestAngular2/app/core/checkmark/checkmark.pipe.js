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
//Start Angular 2
var core_1 = require('@angular/core');
'use strict';
var CheckmarkPipe = (function () {
    function CheckmarkPipe() {
    }
    CheckmarkPipe.prototype.transform = function (input) {
        return input ? "\u2713" : "\u2718";
    };
    CheckmarkPipe = __decorate([
        core_1.Pipe({ name: "checkmark" }), 
        __metadata('design:paramtypes', [])
    ], CheckmarkPipe);
    return CheckmarkPipe;
}());
exports.CheckmarkPipe = CheckmarkPipe;
//End Angular 2
// Start Angular 1
//'use strict';
//angular.
//  module('core').
//  filter('checkmark', function() {
//    return function(input: boolean) {
//      return input ? '\u2713' : '\u2718';
//    };
//  });
// End Angular 1
//# sourceMappingURL=checkmark.pipe.js.map