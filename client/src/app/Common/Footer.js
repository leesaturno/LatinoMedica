(function (module) {
    /**
     * @ngdoc controller
     * @name common.controller:FooterController
     * @description
     *
     * This is Footer Controller which defines the footer section of all pages.
     *
     * Footer section contains the static pages and copyrights information.
     **/
    module.controller('FooterController', function ($scope) {
        $scope.currentYear = new Date().getFullYear();
    });
}(angular.module("Abs.common", ['ngSanitize', 'ui.select', 'ngScrollbars'])));