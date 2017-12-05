(function (module) {
    /**
     * @ngdoc controller
     * @name wallets.controller:WalletsController
     * @description
     *
     * This is wallets controller having the methods init(), setMetaData(), WalletSubmit()
     **/
    module.controller('WalletsController', function ($state, $scope, $http, Flash, $filter, WalletsFactory, $rootScope, $location) {
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf wallets.controller:WalletsController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element.
         **/
        $scope.setMetaData = function () {
            var pageTitle = $filter("translate")("Add To Wallet");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf wallets.controller:WalletsController
         * @description
         *
         * This method will initialize the meta data and functionalities.
         **/
        $scope.init = function () {
            $scope.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Add To Wallet");
            $scope.min_wallet_amount = $rootScope.settings['wallet.min_wallet_amount'];
            $scope.max_wallet_amount = $rootScope.settings['wallet.max_wallet_amount'];
        };
        $scope.init();
        /**
         * @ngdoc method
         * @name WalletSubmit
         * @methodOf wallets.controller:WalletsController
         * @description
         *
         * This method will be used in submitting the wallet amount to the user's account.
         **/
        $scope.WalletSubmit = function ($valid) {
            if($valid) {
                WalletsFactory.save($scope.wallet, function (response) {
                    Flash.set($filter("translate")("Amount Added successfully"), 'success', true);
                    $state.reload();
                }, function (error) {
                    Flash.set($filter("translate")("Amount could not be added"), 'error', false);
                    $scope.amountErr = '';
                    var errorResponse = error.data.errors;
                    if (errorResponse.amount) {
                        $scope.amountErr = $filter("translate")(errorResponse.amount[0]);
                    }
                });
            }
        };
    });
}(angular.module("Abs.Wallets")));
