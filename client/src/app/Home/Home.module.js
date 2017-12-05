/**
 * @ngdoc object
 * @name home
 * @description
 *
 * This is the home module. It provides the service for the home controller and it's methods
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} Abs.home name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *        [
 *            'ui.router',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel'
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.home module with the angular.Module api.
 **/
(function (module) {
    module.filter('starRate', function () {
        return function (input, max) {
            var val = 0;
            if (!isNaN(input) && input > 1 && max !== '') {
                val = input * 20;
                if (max == 10) {
                    val = input * 10;
                }
            }
            return val;
        };
    });
    module.directive("featuredSpecialistDoctor", function () {
        return {
            restrict: 'E',
            templateUrl: 'Home/featured_specialist_doctor.tpl.html',
            controller: function ($scope, $filter, $state, $timeout, featuredDoctors) {
                $scope.featuredDoctorsLength = false;
                $scope.responsiveSlick = [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            infinite: true,
                            arrows: true
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ];
                featuredDoctors.getDoctors({ limit: '20' }).$promise.then(function (response) {
                    $scope.featuredDoctorsLength = (response.data.length > 0) ? true : false;
                    $scope.featuredDoctors = response.data;
                });
                $timeout(function () {
                    $('body').on('click', '.js-share-open', function (e) {
                         $('.js-social-share').removeClass('share-open');
                         $('#js-social-share'+$(this).attr('data-index')).addClass('share-open');
                    });
                    $('body').on('blur', '.js-share-open', function (e) {
                        $('.js-social-share').removeClass('share-open');
                    });
                }, 2000);
            }
        };
    });
    module.config(function ($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('home', {
            url: '/',
            authenticate: false,
            views: {
                "main": {
                    controller: 'HomeController as model',
                    templateUrl: 'Home/home.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: { pageTitle: 'Home' }
        });
    });

} (angular.module("Abs.home", [
    'ui.router',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.facebook.pixel',
    'angular-input-stars',
    'slick',
    'ngTouch',
    'angucomplete-abs',
])));
