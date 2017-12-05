(function (module) {
    module.controller('UserEducationsAddController', function ($state, $scope, Flash, $filter, UserEducationAddFactory) {
        var model = this;
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();
        $scope.open = function () {
            $scope.popup.opened = true;
        };
        $scope.popup = {
            opened: false
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.userEducation = function () {
            UserEducationAddFactory.save(model.user_education)
                    .$promise
                    .then(function (response) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('UserEducations', {});
                    });

        };
    });

}(angular.module("Abs.UserEducations")));