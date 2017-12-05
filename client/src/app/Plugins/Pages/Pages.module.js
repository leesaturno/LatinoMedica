/**
 * @ngdoc object
 * @name pages
 * @description
 *
 * this is the module for pages
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} pages name of the module
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
 * @returns {angular.Module} new Abs.Pages module with the {@link angular.Module} api.
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
        $stateProvider.state('pages', {
            url: '/page/{slug}',
            authenticate: false,
            views: {
                "main": {
                    controller: 'PagesController as model',
                    templateUrl: 'Plugins/Pages/pages.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Pages'}
        });
    });

}(angular.module("Abs.Pages", [
    'ui.router',
    'ngResource',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.facebook.pixel'
])));
