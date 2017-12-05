(function (module) {
    module.controller('IcalController', function ($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, GENERAL_CONFIG, IcalList, IcalAdd, IcalEdit, IcalDelete, IcalShow, IcalUrl) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf icals.controller:IcalController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element
         **/
        model.setMetaData = function (title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        if($state.current.name === 'IcalList'){
            getIcalList();
            IcalUrl.get().$promise.then(function (response){
                $scope.userIcalUrl = GENERAL_CONFIG.api_url+'/ical/generate/'+response.link;
            })
        }else if($state.current.name === 'IcalEdit'){
            IcalEdit.get({id:$state.params.id}).$promise.then(function (response){
                model.formValue = response;
            });
        }else if($state.current.name === 'IcalView'){
            IcalView.get({id:$state.params.id}).$promise.then(function (response){
                model.icalview = response;
            });
        }

        $scope.icalDelete = function (id){
            SweetAlert.swal({
                title: "Are you sure to Delete this Ical?",
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
                    IcalDelete.delete({'id':id}).$promise.then(function (response){
                        if(response.Success){
                            Flash.set($filter("translate")(response.Success), 'success', true);
                            getIcalList();
                        }else{
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                    });
                }
            });
        };
        function getIcalList(){
            IcalList.get().$promise.then(function (response){
                $scope.icals = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        model.icalAdd = function ($valid){
            if ($valid) {
                IcalAdd.post(model.formValue).$promise.then(function (response){
                    if(response.Success){
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('IcalList');
                    }else{
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            }
        };
        model.icalUpdate = function ($valid){
            if ($valid) {
                IcalEdit.put(model.formValue).$promise.then(function (response){
                    if(response.Success){
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('IcalList');
                    }else{
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            }
        };
    });
} (angular.module("Abs.IcalCalendar")));