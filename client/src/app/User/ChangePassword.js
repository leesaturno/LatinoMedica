(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:ChangePasswordController
     * @description
     *
     * 1.This is change password controller having the methods setmMetaData, init and change_password.
     *
     * 2.It is used to change the password of the user.
     **/
    module.controller('ChangePasswordController', function ($state, $auth, $scope, Flash, $http, $filter, $rootScope, $location, ConstUserType, ChangePWd) {
		var model = this;
        $scope.user = {};
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:ChangePasswordController
         * @description
         * This method is used to set the meta data dynamically by using the angular.element
         *
         */
        $scope.setMetaData = function () {
            var pageTitle = $filter("translate")("Change Password");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf user.controller:ChangePasswordController
         * @description
         * This method is used to initialize the meta data that is already set by setmetadata() method.
         *
         */
        $scope.init = function () {
            $scope.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Change Password");
        };
        $scope.init();
		model.ConstUserType = ConstUserType;
        /**
         * @ngdoc method
         * @name change_password
         * @methodOf user.controller:ChangePasswordController
         * @description
         * This method used for changing the password by the user.
         * @param {!Array.<string>} changePasswordForm The form contains the array of string that holds the [old_password, new_password]
         */
        $scope.change_password = function (changePasswordForm, user) {
            $scope.disableButton = true;
            if (changePasswordForm) {
                ChangePWd.put({id: $rootScope.auth.id}, user, function (response) {
                    $translate = $filter("translate")("Password changed successfully");
                    Flash.set($translate, 'success', true);
                    /* For Logout and Redirect to login page */
                    $rootScope.auth = {};
                    $auth.logout();
                    $state.go('login');
                }, function (error) {
                    Flash.set($filter("translate")(error.data.message), 'error', false);
                });
            }
        };
    });
}(angular.module("Abs.user")));
