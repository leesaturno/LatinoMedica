/**
 * Abs - v0.0.1 - 2016-04-13
 *
 * Copyright (c) 2016 Agriya
 */
/**
 * @ngdoc object
 * @name banner
 * @description
 *
 * this is the module for banner
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} banner name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *        [
 *            'ui.router',
 *            'ngResource',
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.Banner module with the {@link angular.Module} api.
 **/

(function (module) {
    /**
     * @ngdoc directive
     * @name banner.directive:banner
     * @scope
     * @restrict A
     *
     * @description
     * Banner directive creates a banner tag. We can use this only as an attribute.
     *
     * @param {string}  banner   Name of the directive
     *
     **/
    module.directive('banner', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'A',
            templateUrl: 'Plugins/Banner/banner.tpl.html',
            link: linker,
            controller: 'BannerController as model',
            bindToController: true,
            scope: {
                position: '@position'
            }
        };
    });
    module.controller('BannerController', function () {
        var model = this;
    });

}(angular.module("Abs.Banner", [
    'ui.router',
    'ngResource'
])));
