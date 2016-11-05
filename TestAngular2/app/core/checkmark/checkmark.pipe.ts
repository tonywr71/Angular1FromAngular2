//Start Angular 2
import { Pipe, PipeTransform } from '@angular/core';
'use strict';

@Pipe({ name: "checkmark" })
export class CheckmarkPipe implements PipeTransform {
  transform(input: boolean) {
    return input ? "\u2713" : "\u2718";
  }
}

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
