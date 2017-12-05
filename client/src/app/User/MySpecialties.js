(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:SpecialtyController
     * @description
     *
     * This is dashboard controller. It contains all the details about the user. It fetches the data of the user by using AuthFactory.
     **/
    module.controller('SpecialtyController', function ($scope, $filter, $rootScope, $state, Flash, MySpecialties) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Specialties");
            $scope.aside = {
                "title": "Title",
                "content": "Hello Aside<br />This is a multiline message!"
            };
            MySpecialties.get({
            }).$promise.then(function (response) {
                $scope.specialties = response.specialties;
                var ids = response.user_specialty_id.split(',');
                for(var i=0; i<ids.length; i++) { ids[i] = parseInt(ids[i], 10); } 
                $scope.user = {
                    specialty_ids:  ids
                };
            });
        };
        model.init();
        $scope.check = function (value, checked) {
            var idx = $scope.user.specialty_ids.indexOf(value);
            if (idx >= 0 && !checked) {
                $scope.user.specialty_ids.splice(idx, 1);
            }
            if (idx < 0 && checked) {
                $scope.user.specialty_ids.push(value);
            }
        };
        model.mySpeciality = function () {
            $scope.specialties = {
                specialty: $scope.user.specialty_ids
            };
            MySpecialties.update($scope.specialties)
                    .$promise
                    .then(function (response) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.reload('MySpecialties');
                    });
        };
        /* var myOtherModal = $modal({scope: $scope, controller: 'SpecialtyController as model', templateUrl: GENERAL_CONFIG.api_url +'/User/updateDiseaseForm.tpl.html', show: false});
         // Show when some event occurs (use $promise property to ensure the template has been loaded)
         $scope.showModal = function (id) {
         myOtherModal.$promise.then(myOtherModal.show);
         };*/

    });

}(angular.module("Abs.user")));