module app.directives {

  class ng1componentController {
  }

  class ng1component implements ng.IComponentOptions {

    public controller: any;
    public templateUrl: string;

    constructor() {
      this.controller = ng1componentController;
      this.templateUrl = 'app/ng1component.html';
    }

  }

  angular.module('phonecatApp').component('ng1component', new ng1component());
}