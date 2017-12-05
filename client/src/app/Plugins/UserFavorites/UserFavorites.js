(function (module) {
    module.directive('favoriteAdd', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/UserFavorites/favorite_add.tpl.html',
            link: linker,
            controller: 'UserFavoriteController as model',
            bindToController: true
        };
    });

    module.controller('UserFavoriteController', function ($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, MyDocotors, FavoriteAdd, FavoriteDelete) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf pages.controller:PagesController
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
        model.init = function () { 
             
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Doctors");
 
            MyDocotors.get().$promise.then(function (response) {
                $scope.doctorDetails = response.data;
                $scope._metadata = response.meta.pagination;
            });
            $scope.add_favorite = function () {
                var splitedUrl = $location.url().split('/');
                FavoriteAdd.post({ 'username': splitedUrl[2] }).$promise.then(function (response) {
                     if(response.Success){
                            Flash.set($filter("translate")(response.Success), 'success', true);
                        }else{                        
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                });
            };
        };
        $scope.remove_favorite = function (favoriteId) {
             SweetAlert.swal({
                title: "Are you sure to remove this doctor in your favorite?",
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
                    FavoriteDelete.delete({ 'id': favoriteId }).$promise.then(function (response) {
                        if(response.Success){
                            Flash.set($filter("translate")(response.Success), 'success', true);
                        }else{                        
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                        MyDocotors.get().$promise.then(function (response) {
                            $scope.doctorDetails = response.data;
                            $scope._metadata = response.meta.pagination;
                        });
                    });
                }
            });

        };
        model.init();
    });
} (angular.module("Abs.UserFavorites")));
