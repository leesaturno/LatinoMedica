/**
 * @ngdoc object
 * @name Abs.myEvents
 * @description
 *
 * this is the module for contactUs
 * @param {string=} Abs.contactUs name of the module
 * @param {!Array.<string>=} [
 *            'ui.router',
 *            'ngResource',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel',
 *            'vcRecaptcha'
 *        ]
 * @returns {angular.Module} new Abs.contactUs module with the {@link angular.Module} api.
 **/
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
        $stateProvider
            .state('MyEvents', {
                url: '/users/my_events',
                authenticate: false,
                views: {
                    'main': {
                        controller: 'MyEventsController as model',
                        templateUrl: 'Plugins/MyEvents/my_events.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
            });

    });

}(angular.module('Abs.myEvents', [
    'ui.router',
    'ui.calendar'
])));
