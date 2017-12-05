/**
 * @ngdoc object
 * @name Abs
 * @description
 *
 * This is the base module. It defines the base configuration and appcontroller and run function etc.,
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 *
 * @param {!string} Abs name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *        [
 *            'Abs.Constant',
 *            'Abs.home',
 *            'Abs.Constant',
 *            'Abs.user',
 *            'templates-app'
 *            'ui.router.state',
 *            'ui.router',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel',
 *            'slugifier'
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs module with the angular.Module api.
 **/
(function (app) {

    app.config(function ($stateProvider, $urlRouterProvider, $authProvider, $translateProvider, $analyticsProvider) {
        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/js/l10n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useLocalStorage(); // saves selected language to localStorage
        // Enable escaping of HTML
        $translateProvider.useSanitizeValueStrategy('escape');
        $urlRouterProvider.otherwise('/');
    });
    /**
     * @ngdoc controller
     * @name Abs.controller:AppController
     * @module Abs
     * @description
     *
     * This is AppController which is the base controller for all the controllers
     **/
    app.controller('AppController', function ($scope, $auth, $location, $anchorScroll, $timeout) {
        // Search block close
        $scope.scrollMoveTop = function () {
            $('html, body').stop(true, true).animate({
                scrollTop: 0
            }, 600);
        };

		 $scope.gotoDiv = function (divelement) {
            var topvalue = $('#'+divelement).position().top;
			$('html, body').animate({
				'scrollTop': parseFloat(topvalue-30),
			});
        };
		
		
	});
    app.run(function ($rootScope, $state, $location, $http, $auth) {
        $rootScope.is_fresh_call = 1;
		var url_array = ['/users/register', '/users/login'];
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if ($.inArray(toState.url, url_array) !== -1) {
                if ($auth.isAuthenticated()) {
                    $location.path('/');
                }
            }
            if (toState.authenticate && !$auth.isAuthenticated()) {
                $rootScope.returnToState = toState.url;
                $rootScope.returnToStateParams = toParams.Id;
                $location.path('/users/login');
            }
        });
        $rootScope.$on('$viewContentLoaded', function () {
            if (!$('#preloader').hasClass('loadAG')) {
                $('#status').fadeOut(600);
                $('#preloader').delay(600).fadeOut(600 / 2);
            }
        });
        $rootScope.$on('$stateChangeSuccess', function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
			var booking_menu = [
				'AppointmentBooking',
				'AppointmentBookingStep2',
				'AppointmentBookingStep3',
				'AppointmentBookingStep4',
				'search',
				'UserView',
				'list_your_practice',
				'MySpecialties',
				'MyLanguages',
				'UserBadges',
				'UserWorkPlace',
				'UserWorkPlaceAdd',
				'UserWorkPlaceEdit',
				'UserAppoinmentSettings',
				'UserAppoinmentModification',
				'UserPhotos',
				'UserPhotosAdd',
				'AnswerQuestion',
				'AnswersList',
				'UserEducations',
				'AppointmentDetail',
			];
			var user_menu = [
				'MedicalTeam',
				'UserProfile',
				'MyInsurances',
				'MyCalender',
				'MySettings',
				'Notifications',
				'FamilyFriends',
				'DemographicInformation',
				'Authorization',
				'MedicalTeamList',
				'MyAppointments',
				'AppointmentDetail',
				'ChangePassword',
				'Appointments',
				'Message',
				'SentMessage',
				'ComposeMessage',
				
			];
			var current_state = $state.current.name;
			$rootScope.menu_show = true;
			if(booking_menu.indexOf(current_state) !== -1) {
			   $rootScope.menu_show = false;
			}
			$rootScope.menu_dropdown = true;
			if(user_menu.indexOf(current_state) !== -1) {
			   $rootScope.menu_dropdown = false;
			}
			$rootScope.$broadcast('menu_show', $rootScope.menu_show);
			$rootScope.$broadcast('menu_dropdown', $rootScope.menu_dropdown);
			
	  });
    });
    // Flash message set & get
    /**
     * @ngdoc service
     * @name Abs.Flash
     * @module Abs
     * @description
     * Flash is a factory service used to set and get the flash messages
     * @param {string} Flash The name of the factory service
     *
     */
    app.factory('Flash', ['$rootScope', 'growl', function ($rootScope, growl) {
        return {
            set: function (message, type, isStateChange) {
                if (type === 'success') {
                    growl.success(message);
                } else if (type === 'error') {
                    if (isStateChange === true) {
                        growl.error(message, {
                            ttl: -1
                        });
                    } else {
                        growl.error(message);
                    }
                } else if (type === 'info') {
                    growl.info(message);
                } else if (type === 'Warning') {
                    growl.warning(message);
                }
            }
        };
    }]);
    //Header
    /**
     * @ngdoc directive
     * @name Abs.directive:header
     * @module Abs
     * @scope
     * @restrict A
     *
     * @description
     * This directive used to define the header section.
     *
     * @param {string}  header  directive name
     *
     */
    app.directive('header', function () {
        /** @type {function} */
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation hereafter
        };
        return {
            restrict: 'A',
            templateUrl: 'Common/header.tpl.html',
            link: linker,
            controller: 'HeaderController as model',
            scope: {
                header: '='
            }
        };
    });
    // Footer
    /**
     * @ngdoc directive
     * @name Abs.directive:footer
     * @module Abs
     * @scope
     * @restrict A
     *
     * @description
     * This directive used to define the footer section.
     *
     * @param {string}  footer  directive name
     *
     */
    app.directive('footer', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation hereafter	
        };
        return {
            restrict: 'A',
            templateUrl: 'Common/footer.tpl.html',
            link: linker,
            controller: 'FooterController as model',
            scope: {
                footer: '='
            }
        };
    });

    app.directive("scroll", function ($window) {
        return function (scope) {
            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 100) {
                    scope.boolChangeClass = true;
                } else {
                    scope.boolChangeClass = false;
                }
                scope.$apply();
            });
        };
    });
	
	app.directive("mapscroll", function ($window) {
        return function (scope) {
            angular.element($window).bind("posfixed", function () {
				console.log(this.pageYOffset);												
                if (this.pageYOffset >= 400) {
                    scope.boolChangeClass = true;
                } else {
                    scope.boolChangeClass = false;
                }
                scope.$apply();
            });
        };
    });


    /**
     * @ngdoc filter
     * @name Abs.filter:html
     * @description
     * It returns the filtered html data.
     */
    app.filter('html', function ($sce) {
        return function (val) {
            return $sce.trustAsHtml(val);
        };
    });
    app.filter('pricedisplay', function ($rootScope) {
        return function (val) {
            var price = "Nil";
            if (angular.isDefined(val)) {
                var valFormatted = (val.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                price = $rootScope.settings['site.currency']+" "+valFormatted;
            }
            return price;
        };
    }).filter('capitalize', function() {
        return function(input) {
            return (!!input) ? input.charAt(0)
                .toUpperCase() + input.substr(1)
                .toLowerCase() : '';
        };
    }).filter('array_to_string',function(){
        return function (values) {
            var displayStr = "Nil";
            if (angular.isDefined(values)) {
                var buildArr = [];
                angular.forEach(values,function(value,key) {
                    buildArr.push(value.name);
                });
                displayStr = buildArr.toString();
            }
            return displayStr;
        };
    });
    /**
     * @ngdoc filter
     * @name Abs.filter:html
     * @description
     * It returns the filtered html data.
     */
    app.filter('dateFormat', function ($filter) {
        return function (val) {
            if (val == null) {
                return "";
            }
            var dateTime = val.replace(/(.+) (.+)/, "$1T$2Z");
            var formatedDate = $filter('date')(new Date(dateTime), 'dd-MM-yyyy HH:mm:ss');
            return formatedDate;
        };
    });
	
	/**
     * @ngdoc filter
     * @name Abs.filter:html
     * @description
     * It returns the filtered html data.
     */
    app.filter('appointmentDate', function ($filter) {
        return function (val) {
            if (val == null) {
                return "";
            }
            var dateTime = val.replace(/(.+) (.+)/, "$1T$2Z");
            var formatedDate = $filter('date')(new Date(dateTime), 'dd-MM-yyyy');
            return formatedDate;
        };
    });


    app.filter('splitedShow', function ($filter) {
        return function (passValue) {
            if (passValue != null) {
                var splitedValues = passValue.split(',');
                var ulBuild = "";
                $.each(splitedValues, function (i, value) {
                    ulBuild = ulBuild + '<li>' + value + '</li>';
                });
                return ulBuild;
            } else {
                return "";
            }
        };
    });
    /**
     * @ngdoc service
     * @name Abs.service.ResolveService
     * @module Abs
     * @function
     * @description
     * It maintains the authentication services.
     */
    app.service('ResolveService', function ($auth, $rootScope, GENERAL_CONFIG, AuthFactory, $q, $location, $state) {
        var promiseSettings;
        var promiseAuth;
        var deferred = $q.defer();
        if ($auth.isAuthenticated() && $rootScope.auth === undefined) {
            promiseAuth = AuthFactory.fetch().$promise.then(function (user) {
                $rootScope.auth = user;
            });
        } else {
            promiseAuth = true;
        }
        if ($rootScope.is_fresh_call) {
            if (angular.isUndefined($rootScope.settings)) {
                $rootScope.settings = {};
            }
            promiseSettings = $.get(GENERAL_CONFIG.api_url + '/settings?type=public_settings', function (response) {
                if (response.data) {
                    $.each(response.data, function (i, settingData) {
                        $rootScope.settings[settingData.name] = settingData.value;
                    });
                }
            });
        } else {
            promiseSettings = true;
        }
        return {
            promiseAuth: promiseAuth,
            promiseSettings: promiseSettings
        };
    });
    /**
     * @ngdoc directive
     * @name Abs.directive:dashboardSettings
     * @module Abs
     * @scope
     * @restrict E
     *
     * @description
     * This directive used to maintain the dashboard settings.
     *
     * @param {string}  dashboardSettings  directive name
     *
     */
    app.directive('dashboardSettings', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'User/dashboard_settings.tpl.html',
            link: function (scope, E, A) {
                scope.currentDate = $filter('date')(new Date(), 'yyyy-MM-dd');
                if (localStorage.zone === undefined) {
                    localStorage.zone = moment(new Date()).format('Z');
                }
            },
            scope: true
        };
    });
	
	app.directive('userSettings', function ($filter) {
        return {
            restrict: 'E',
            templateUrl: 'User/user_settings.tpl.html',
            link: function (scope, E, A) {
                scope.currentDate = $filter('date')(new Date(), 'yyyy-MM-dd');
                if (localStorage.zone === undefined) {
                    localStorage.zone = moment(new Date()).format('Z');
                }
            },
            scope: true,
			controller: function ($scope, $state, $auth, $http, AuthFactory, $rootScope, $filter, $location, Flash, GENERAL_CONFIG) {
				$scope.dashboardlogout = function () {
					$http.get(GENERAL_CONFIG.api_url + '/users/logout', {
						 headers: {'Authorization': 'Bearer '+localStorage.userToken}
					});
					$rootScope.auth = {};
					$auth.logout();
        		};
			}
        };
    });
    /**
     * @ngdoc function
     * @name $growlProvider
     * @function
     *
     * @description
     * Automatic closing of notifications (timeout, ttl)
     *
     */
    app.config(['growlProvider', function (growlProvider) {
        growlProvider.onlyUniqueMessages(true);
        growlProvider.globalTimeToLive(5000);
        growlProvider.globalPosition('top-center');
        growlProvider.globalDisableCountDown(true);
        //growlProvider.globalEnableHtml(true);
    }]);
}(angular.module("Abs", [
    'Abs.home',
    'Abs.Constant',
    'Abs.user',
    'Abs.search',
    'Abs.userworkplace',
	'Abs.usermessage',
    'Abs.userbadges',
    'templates-app',
    'ui.router.state',
    'ui.router',
    'ui.bootstrap',
    'ngSanitize',
    'ngAnimate',
    'angular-growl',
    'pascalprecht.translate',
    'ngCookies',
    'Abs.common',
    'Abs.appointments',
    'ngMap'
])));