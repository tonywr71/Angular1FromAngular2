"use strict";
'use strict';
var PhoneListController = (function () {
    //S1 - convert to Angular 2 injection
    function PhoneListController(phone) {
        var _this = this;
        phone.query().subscribe(function (phones) {
            _this.phones = phones;
        });
        this.orderProp = 'age';
    }
    //S1
    //  query: string;
    //E1
    PhoneListController.$inject = ['phone'];
    return PhoneListController;
}());
// Register `phoneList` component, along with its associated controller and template
angular.
    module('phoneList').
    component('phoneList', {
    templateUrl: '/app/phone-list/phone-list.template.html',
    controller: PhoneListController
});
//# sourceMappingURL=phone-list.component.js.map