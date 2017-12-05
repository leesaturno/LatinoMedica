(function (module) {
    module.controller('WidgetController', function ($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, GENERAL_CONFIG, WidgetList, WidgetAdd, WidgetDelete, WidgetShow, $modal) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf widgets.controller:WidgetController
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
        if($state.current.name === 'WidgetList'){
            getWidgetList();
        }else if($state.current.name === 'WidgetEdit'){
            WidgetEdit.get({id:$state.params.id}).$promise.then(function (response){
                model.widgetform = response;
            });
        }else if($state.current.name === 'WidgetView'){
            WidgetView.get({id:$state.params.id}).$promise.then(function (response){
                model.widgetview = response;
            });
        }

        $scope.widgetDelete = function (id){
            SweetAlert.swal({
                title: "Are you sure to Delete this Widget?",
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
                    WidgetDelete.delete({'id':id}).$promise.then(function (response){
                        if(response.Success){
                            Flash.set($filter("translate")(response.Success), 'success', true);
                            getWidgetList();
                        }else{
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                    });
                }
            });
        };
        function getWidgetList(){
            WidgetList.get().$promise.then(function (response){
                $scope.widgets = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        model.widgetAdd = function ($valid){
            if ($valid) {
                WidgetAdd.post(model.formValue).$promise.then(function (response){
                    if(response.Success){
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('WidgetList');
                    }else{
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            }
        }
         var apiUrl = GENERAL_CONFIG.api_url;
         $scope.modelSiteUrl = apiUrl.replace('api','');
        $scope.modal = {
        };
        /*$scope.showCode = function(id) {
            WidgetShow.get({'id':id}).$promise.then(function(response){
                $scope.widgetModelData = response;

            },widgetModel.show);
        };*/
    });
} (angular.module("Abs.Widget")));