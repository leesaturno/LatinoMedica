/**
 * @ngdoc object
 * @name withdrawals
 * @description
 *
 * This is the module for withdrawal
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} withdrawals name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *        [
 *            'ui.router',
 *            'ngResource',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel'
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.withdrawal module with the angular.Module api.
 **/
(function (module) {
    module.config(function ($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('user_cash_withdrawals', {
            url: '/user_cash_withdrawals',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserCashWithdrawalsController as model',
                    templateUrl: 'Plugins/Withdrawals/user_cashWithdrawals.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'User Cash Withdrawals'}
        });
        $stateProvider.state('money_transfer_account', {
            url: '/money_transfer_account',
            authenticate: true,
            views: {
                "main": {
                    controller: 'MoneyTransferAccountsController as model',
                    templateUrl: 'Plugins/Withdrawals/money_transfer_account.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Money Transfer Accounts'}
        });
    });
}(angular.module("Abs.Withdrawals", [
    'ui.router',
    'ngResource',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.facebook.pixel'
])));
