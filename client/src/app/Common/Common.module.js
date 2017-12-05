/**
 * @ngdoc object
 * @name common
 * @description
 *
 * This is the common module.
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} common name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *         [
 *            'ui.router',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel',
 *            'slugifier'
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.home module with the angular.Module api.
 **/
(function (module) {

    module.config(function ($stateProvider, $analyticsProvider) {

    });


}(angular.module('Abs.common', [
    'ui.router',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.facebook.pixel',
    'slugifier'
])));
