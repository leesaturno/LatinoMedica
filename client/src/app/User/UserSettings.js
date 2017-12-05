(function (module) {
    module.controller('UserSettingsController', function ($scope, $state, $rootScope, $filter, $location, $auth, Flash) {
        var model = this;
        $scope.displayTemplate = "User/user_profile.tpl.html";
        $scope.getTemplate = function (displayTemplate) {
            $scope.displayTemplate = displayTemplate;
        };
    });
}(angular.module("Abs.user")));