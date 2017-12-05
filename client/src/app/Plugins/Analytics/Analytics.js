/**
 * Abs - v0.0.1 - 2016-04-13
 *
 * Copyright (c) 2016 Agriya
 */
/**
 * @ngdoc object
 * @name analytics
 * @description
 *
 * This is the module for analytics
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} analytics name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *        [
 *            'ui.router',
 *            'ngResource',
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.Analytics module with the angular.Module api.
 **/
(function (module) {
    module.config(function () {

    });

}(angular.module('Abs.Analytics', [
    'ui.router',
    'ngResource',
])));

(function (module) {
    /**
     * @ngdoc directive
     * @name analytics.directive:facebookPixel
     * @scope
     * @restrict AE
     *
     * @description
     * Facebook pixel directive creates a facebook pixel tag. We can use this as a element and attribute.
     *
     * @param {string} facebookPixel Name of the directive
     *
     **/
    module.directive('facebookPixel', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'AE',
            link: linker,
            controller: function ($rootScope, ResolveService) {
                var promise = ResolveService.promise;
                var promiseSettings = ResolveService.promiseSettings;
                promiseSettings.then(function (data) {
                    if ($rootScope.settings) {
                        !function (f, b, e, v, n, t, s) {
                            if (f.fbq)return;
                            n = f.fbq = function () {
                                n.callMethod ?
                                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                            };
                            if (!f._fbq)f._fbq = n;
                            n.push = n;
                            n.loaded = !0;
                            n.version = '2.0';
                            n.queue = [];
                            t = b.createElement(e);
                            t.async = !0;
                            t.src = v;
                            s = b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t, s)
                        }(window,
                            document, 'script', '//connect.facebook.net/en_US/fbevents.js');
                        fbq('init', $rootScope.settings['analytics.facebook_analytics.pixel']);
                    }
                });

            },
            scope: {}
        };
    });


})(angular.module('Abs.Analytics'));

(function (module) {
    /**
     * @ngdoc directive
     * @name analytics.directive:googleAnalytics
     * @scope
     * @restrict AE
     *
     * @description
     * GoogleAnalytics directive creates a googleAnalytics tag. We can use this as a element and attribute.
     *
     * @param {string} googleAnalytics Name of the directive
     *
     **/
    module.directive('googleAnalytics', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'AE',
            link: linker,
            controller: function ($rootScope, ResolveService) {
                var promise = ResolveService.promise;
                var promiseSettings = ResolveService.promiseSettings;
                promiseSettings.then(function (data) {
                    if ($rootScope.settings) {
                        (function (i, s, o, g, r, a, m) {
                            i['GoogleAnalyticsObject'] = r;
                            i[r] = i[r] || function () {
                                    (i[r].q = i[r].q || []).push(arguments)
                                }, i[r].l = 1 * new Date();
                            a = s.createElement(o),
                                m = s.getElementsByTagName(o)[0];
                            a.async = 1;
                            a.src = g;
                            m.parentNode.insertBefore(a, m)
                        })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
                        ga('create', $rootScope.settings['analytics.google_analytics.profile_id'], 'auto');
                    }
                });

            },
            scope: {}
        };
    });


})(angular.module('Abs.Analytics'));
