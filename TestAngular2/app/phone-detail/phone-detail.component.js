"use strict";
'use strict';
var PhoneDetailController = (function () {
    //S1 - Convert from Angular 1 injection to Angular 2 injection
    function PhoneDetailController($routeParams, phone) {
        var _this = this;
        var phoneId = $routeParams["phoneId"];
        phone.get(phoneId).subscribe(function (data) {
            _this.phone = data;
            _this.setImage(data.images[0]);
        });
    }
    //constructor($routeParams: angular.route.IRouteParamsService, Phone: any) {
    //  let phoneId = $routeParams['phoneId'];
    //  this.phone = Phone.get({ phoneId }, (phone: any) => {
    //    this.setImage(phone.images[0]);
    //  });
    //}
    //E1
    PhoneDetailController.prototype.setImage = function (imageUrl) {
        this.mainImageUrl = imageUrl;
    };
    PhoneDetailController.$inject = ["$routeParams", "phone"];
    return PhoneDetailController;
}());
// Register `phoneDetail` component, along with its associated controller and template
angular.
    module('phoneDetail').
    component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: PhoneDetailController
});
//# sourceMappingURL=phone-detail.component.js.map