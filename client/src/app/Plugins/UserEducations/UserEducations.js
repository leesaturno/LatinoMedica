(function(moduel){
    moduel.controller('UserEducationsController', function($state, $rootScope, $scope, $filter, $location, $timeout, Flash, SweetAlert, EducationList, EducationAdd, EducationEdit, EducationDelete){
        $scope.pageTitle = 'Doctor Education';
        var model = this;
        model.setMetaData = function () {
            var pageTitle = $filter("translate")($scope.pageTitle);
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter: title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function () {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Photos");
        };
        model.init();
        if($state.current.name === 'UserEducations'){
            $scope.pageTitle = 'Doctor Education';
            EducationList.get().$promise.then(function (response) {
                $scope.userEducations = response.user_educations;
                $scope.noEducationDiv = ($scope.userEducations.length > 0)?false:true;
            });
        }else if($state.current.name === 'UserEducationAdd'){
            $scope.pageTitle = 'Add Doctor Education';
        }else if($state.current.name === 'UserEducationEdit'){
            $scope.pageTitle = 'Edit Doctor Education';
            EducationEdit.get({id: $state.params.id}).$promise.then(function (response) {
                model.user_education = response;
            });
        }

        $scope.userEducation = function () {
            EducationAdd.post(model.user_education).$promise.then(function (response) {
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $timeout(function(){
                        $state.go('UserEducations');
                    },500);
                } else {
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };

        model.userEducationEdit = function ($valid) {
            if($valid){
                EducationEdit.put({id: $state.params.id}, model.user_education).$promise.then(function (response) {
                    if(response.Success){
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $timeout(function(){
                            $state.go('UserEducations');
                        },500);
                    } else {
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            }
        };

        $scope.UserEducationDelete = function (id) {
             SweetAlert.swal({
                title: "Are you sure to Delete?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                if (isConfirm) {
                    EducationDelete.delete({id: id}).$promise.then(function (response) {
                        Flash.set($filter("translate")("User Education deleted successfully"), 'success', true);
                        $timeout(function(){
                            $state.reload();
                        },500);
                    }, function (error) {
                        Flash.set($filter("translate")("User Education could not be deleted"), 'error', false);
                    });
                }
            });
        };
    });
}(angular.module("Abs.UserEducations")));