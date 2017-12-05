(function (module) {
    module.directive('ratingButton', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here

        };
        return {
            restrict: 'AE',
            templateUrl: "Plugins/UserReviews/ratingButton.tpl.html",
            link: linker,
            controller: 'ratingButtonController as model',
            bindToController: true,
            scope: {
            }
        };
    });
    module.controller('UserReviewsController', function ($scope, $rootScope,$filter) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Patient Review");
            $scope.rate = 0;
            $scope.overStar = 0;
            $scope.max = 5;
            $scope.isReadonly = false;
            $scope.hoveringOver = function (value) {
                $scope.overStar = value;
                $scope.percent = 100 * (value / $scope.max);
            };
        };
        model.init();     
         
    });
})(angular.module('Abs.UserReviews'));
