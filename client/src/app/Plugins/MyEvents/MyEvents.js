(function (module) {
    module.controller('MyEventsController', function ($scope, $filter, $rootScope) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Events");
        };
        model.init();
    });
}(angular.module("Abs.myEvents")));
