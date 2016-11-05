var app;
(function (app) {
    var directives;
    (function (directives) {
        var ng1componentController = (function () {
            function ng1componentController() {
            }
            return ng1componentController;
        }());
        var ng1component = (function () {
            function ng1component() {
                this.controller = ng1componentController;
                this.templateUrl = 'app/ng1component.html';
            }
            return ng1component;
        }());
        angular.module('phonecatApp').component('ng1component', new ng1component());
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
//# sourceMappingURL=ng1component.js.map