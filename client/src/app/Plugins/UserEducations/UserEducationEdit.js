(function (module) {
    module.controller('UserEducationsEditController', function ($state, $filter, $rootScope, Flash, UserEducationEditFactory, UserEducationDeleteFactory) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Edit Education");
        };
        UserEducationEditFactory.get({id: $state.params.id}).$promise.then(function (response) {
            model.user_education = response;
        });
        model.userEducationEdit = function ($valid) {
            if($valid){
                UserEducationEditFactory.update({id: $state.params.id}, model.user_education).$promise.then(function (response) {
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('UserEducations');
                });
            }
        };
        model.init();
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.UserEducations")));