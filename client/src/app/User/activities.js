(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:AcitivitiesController
     * @description
     *
     * This is user profile controller having the methods setmMetaData, init, upload and user_profile. It controld the user profile functions.
     **/ 
    module.controller('AcitivitiesController', function ($state, $scope, Flash, $filter, $rootScope, $location, ConstUserType, ActivityFactory,ConstAppointmentStatus) {
        var model = this;
        
        model.init = function () {
            
        };
        model.init();
		model.ConstUserType = ConstUserType;
        ActivityFactory.get().$promise.then(function (response) {
            $scope.activities = response.data;
            model.ConstAppointmentStatus = ConstAppointmentStatus;
        });
        
    });
}(angular.module("Abs.user")));