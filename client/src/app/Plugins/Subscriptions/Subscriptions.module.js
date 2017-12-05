(function (module) {
    module.config(function ($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('SubscriptionsPlans', {
            url: '/subscribe/plans',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SubscriptionsController as model',
                    templateUrl: 'Plugins/Subscriptions/subscriptionsPlans.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('SubscriptionPlan', {
                url: '/subscribe/payment/:id',
                authenticate: true,
                views: {
                    'main': {
                        controller: 'SubscriptionsController as model',
                        templateUrl: 'Plugins/Subscriptions/subscriptionsPayment.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
        }).state('success', {
            url: '/payment/success',
            authenticate: true,
            views: {
                'main': {
                    controller: 'SubscriptionsController as model',
                    templateUrl: 'Plugins/Subscriptions/subscriptionsSuccess.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('cancel', {
            url: '/subscribe/payment/cancel',
            authenticate: true,
            views: {
                'main': {
                    controller: 'SubscriptionsController as model',
                    templateUrl: 'Plugins/Subscriptions/subscriptionsCancel.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('Subscribe', {
            url: '/subscribe/list',
            authenticate: true,
            views: {
                'main': {
                    controller: 'SubscriptionsController as model',
                    templateUrl: 'Plugins/Subscriptions/subscribe_list.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });
// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.Subscriptions", [
    'ui.router',
    'ngResource',
    'mgcrea.ngStrap',
    'oitozero.ngSweetAlert'
])));