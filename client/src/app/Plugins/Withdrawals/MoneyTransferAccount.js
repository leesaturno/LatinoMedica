(function (module) {

    /**
     * @ngdoc controller
     * @name withdrawals.controller:MoneyTransferAccountsController
     * @requires $rootScope
     *
     * @description
     * Money Transfer accounts details and its listing functions developed here.
     *
     */
    module.controller('MoneyTransferAccountsController', function ($state, $scope, $http, Flash, $filter, MoneyTransferAccountsFactory, MoneyTransferAccountFactory, MoneyTransferAccountPrimaryFactory, $rootScope, $location) {
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf withdrawals.controller:MoneyTransferAccountsController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element.
         **/
        $scope.setMetaData = function () {
            var pageTitle = $filter("translate")("Money Transfer Accounts");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf withdrawals.controller:MoneyTransferAccountsController
         * @description
         *
         * This method will initialize the meta data and functionalities.
         **/
        $scope.init = function () {
            $scope.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Money Transfer Accounts");
            MoneyTransferAccountsFactory.list()
                .$promise
                .then(function (response) {
                    $scope.moneyTransferAccLists = response.data;
                });
        };
        /**
         * @ngdoc method
         * @name MoneyTransferAccSubmit
         * @methodOf withdrawals.controller:MoneyTransferAccountsController
         * @description
         * This method is used to submit the money transfer accounts.
         */
        $scope.MoneyTransferAccSubmit = function ($valid) {
            if($valid) {
                MoneyTransferAccountsFactory.save($scope.money_transfer_account, function (response) {
                    Flash.set($filter("translate")("Account Added successfully"), 'success', true);
                    $state.reload();
                }, function (error) {
                    Flash.set($filter("translate")("Account could not be added"), 'error', false);
                });
            }
        };
        /**
         * @ngdoc method
         * @name MoneyTransferAccDelete
         * @methodOf withdrawals.controller:MoneyTransferAccountsController
         * @description
         * This method is used to delete the money transfer accounts.
         */
        $scope.MoneyTransferAccDelete = function (id) {
            MoneyTransferAccountFactory.delete({
                id: id
            }).$promise.then(function (data) {
                Flash.set($filter("translate")("Account deleted successfully"), 'success', true);
                $state.reload();
            }, function (error) {
                errmsg = (error.data.message != undefined) ? error.data.message : "Account could not be deleted";
                Flash.set($filter("translate")(errmsg), 'error', false);
            });
        };
        $scope.init();
    });
}(angular.module("Abs.Withdrawals")));
