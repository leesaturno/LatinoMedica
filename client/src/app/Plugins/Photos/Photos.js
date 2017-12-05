(function (module) {
    module.directive('clinicPhotos', function () {
        var linker = function (scope, element, attrs) {

        };
        return {
            restrict: 'E',
            templateUrl: 'Plugins/Photos/clinic_photos.tpl.html',
            link: linker,
            controller: 'PhotosController as model',
            bindToController: true
        };
    });

    module.controller('PhotosController', function ($state, $scope, Flash, $filter, $rootScope, $location, Upload, GENERAL_CONFIG, PhotosFactory, PhotoDeleteFactory, SweetAlert, $window, $timeout) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:UserProfileController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element function.
         **/
        model.setMetaData = function () {
            var pageTitle = $filter("translate")("My Photos");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter: title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf user.controller:UserProfileController
         * @description
         * This method will initialze the page. It returns the page title
         *
         **/
        model.init = function () {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Photos");
        };
        model.init();
        if($state.current.name !== 'UserPhotosAdd'){
            var splitedUrl = $location.url().split('/');
            $scope.images = [];
            PhotosFactory.get({ 'username': splitedUrl[2] }).$promise.then(function (response) {
                $scope.photos = response.data;
                $scope.isShown = ($scope.photos.length > 0) ? false:true;
                angular.forEach($scope.photos, function (value, key) {
                    $scope.images.push({
                        thumb: value.attachmentable.data.thumb.small,
                        img: value.attachmentable.data.thumb.medium,
                        description: 'Clinic Photo'
                    });
                });
                $scope.hospitalphotos = $scope.images;
            });
        }
        $scope.uploadFiles = function (files) {
            $scope.files = files;
            if (files && files.length) {
                Upload.upload({
                    url: GENERAL_CONFIG.api_url + '/photos',
                    data: {
                        files: files
                    }
                }).then(function (response) {
                    Flash.set($filter("translate")("Clinic Photos has been added"), 'success', true);
                    $state.go('UserPhotos');        
                    $timeout(function (){
                        $window.location.reload();
                    },3000);
                }, function (response) {
                    Flash.set($filter("translate")("Clinic Photos could not be added. Please, try again."), 'error', false);
                }, function (evt) {
                    $scope.progress =
                        Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
        };

        $scope.photoDelete = function (id) {
            SweetAlert.swal({
                title: "Are you sure to remove this clinic photo?",
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
                        PhotoDeleteFactory.delete({ id: id }).$promise.then(function (response) {
                            if (response.Success) {
                                Flash.set($filter("translate")(response.Success), 'success', true);
                            } else {
                                Flash.set($filter("translate")(response.Failed), 'error', false);
                            }
                            PhotosFactory.get().$promise.then(function (response) {
                                $scope.photos = response.data;
                                $scope.isShown = ($scope.photos.length > 0) ? false : true;
                            });
                        });
                    }
                });

        };

        $scope.allPhotos = function () {
            $scope.showPhoto = true;
        };
    });
}(angular.module("Abs.Photos")));
