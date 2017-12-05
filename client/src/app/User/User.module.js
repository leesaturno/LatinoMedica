/**
 * @ngdoc object
 * @name user
 * @description
 *
 * This is the module for user. It controls all user related functions.
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} user name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *        [
 *            'ui.router',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel',
 *            'satellizer',
 *            'ngFileUpload',
 *            'vcRecaptcha'
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.user module with the angular.Module api.
 **/
(function (module) {
    module.filter('trustedhtml', function ($sce) {
        return function (html) {
            return $sce.trustAsHtml(html);
        };
    });
    module.directive('onlyDigits', function () {
        return {
            require: 'ngModel',
            restrict: 'A',
            link: function (scope, element, attr, ctrl) {
                function inputValue(val) {
                    if (val) {
                        var digits = val.replace(/[^0-9]/g, '');

                        if (digits !== val) {
                            ctrl.$setViewValue(digits);
                            ctrl.$render();
                        }
                        return parseInt(digits, 10);
                    }
                    return undefined;
                }
                ctrl.$parsers.push(inputValue);
            }
        };
    }).directive('doctorProfileQuestions', function () {
        return {
            restrict: 'E',
            templateUrl: 'User/doctor_profile_question.tpl.html',
            controller: function ($scope, $filter, $state, $timeout, Flash, DoctorQuestionAdd, DoctorQuestionList) {
				/*
				*question list from doctor profile page
				*/

                $timeout(function () {
                    DoctorQuestionList.get({ id: $scope.userId }).$promise.then(function (response) {
                        $scope.questions = response.data;
                        $scope.paginates = response.meta.pagination;
                    });
                }, 3000);


				/*
				*Add question from doctor profile page
				*/
                $scope.questionAdd = function ($valid, data) {
                    if ($valid) {
						data.doctor_id = $scope.userId;
						data.specialty_id = $scope.specialtyId;
						data.is_active = 1;
                        DoctorQuestionAdd.post(data).$promise.then(function (response) {
                            if (response.Success) {
                                Flash.set($filter("translate")(response.Success), 'success', true);
                                $state.go('UserView', {}, { reload: true });
                            } else {
                                Flash.set($filter("translate")(response.Failed), 'error', false);
                            }
                        });
                    }
                };
            }
        };
    }).directive('headerMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'User/header.tpl.html',
            controller: function ($scope, $filter, $state, $timeout, Flash) {

            }
        };
    }).directive('navMenu', function () {
        return {
            restrict: 'E',
            templateUrl: 'User/navmenu.tpl.html',
            controller: function ($rootScope, $scope, $filter, $state, $timeout, Flash, ConstUserType) {
                if ($rootScope.auth.role_id == ConstUserType.Doctor) {
                    $scope.tabsMenus = [{
                        header_class: "tabs-equipa",
                        header_text: "Next appointments",
                        state: "MyAppointments"
                    },
                    {
                        header_class: "tabs-citas",
                        header_text: "My calendar",
                        state: "MyCalender"
                    },
                    {
                        header_class: "tabs-mensajes",
                        header_text: "Messages",
                        state: "Message"
                    },
                    {
                        header_class: "tabs-ajustes",
                        header_text: "Settings",
                        state: "UserProfile"
                    }];
                } else {
                    $scope.tabsMenus = [{
                        header_class: "tabs-equipa",
                        header_text: "Medical Team",
                        state: "MedicalTeamList"
                    },
                    {
                        header_class: "tabs-citas",
                        header_text: "Appointments and previous revisions",
                        state: "MyAppointments"
                    },
                    {
                        header_class: "tabs-mensajes",
                        header_text: "Messages",
                        state: "Message"
                    },
                    {
                        header_class: "tabs-ajustes",
                        header_text: "Settings",
                        state: "UserProfile"
                    }];
                }
               $scope.switchMenu = function(stateGo) {
                    $state.go(stateGo);
               };
            }
        };
    }).directive('starRating', function () {
        return {
            restrict: 'A',
            template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
            '\u2605' +
            '</li>' +
            '</ul>',
            scope: {
                ratingValue: '=',
                max: '=',
                onRatingSelected: '&'
            },
            link: function (scope, elem, attrs) {

                var updateStars = function () {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                };

                scope.toggle = function (index) {
                    scope.ratingValue = index + 1;
                    scope.onRatingSelected({
                        rating: index + 1
                    });
                };

                scope.$watch('ratingValue', function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        };
    }).directive('displayTemplate', function () {
        return {
            restrict: 'E',
            template: '<div ng-include="contentUrl"></div>',
            link: function (scope, element, attrs) {
                scope.contentUrl = attrs.name;
                attrs.$observe("name", function (v) {
                    scope.contentUrl = v;
                    $scope.state = 'UserProfile';
                });
            },
			controller: function ($scope, $state, ConstUserType) {
				$scope.ConstUserType = ConstUserType;
				$scope.currentState = $state.current.name;
			}
        };
    });
    module.config(function ($stateProvider, $authProvider, GENERAL_CONFIG, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $authProvider.tokenPrefix = "";
        $authProvider.tokenName = "userToken";
        $authProvider.loginUrl = GENERAL_CONFIG.api_url + '/users/login';
        $authProvider.signupUrl = GENERAL_CONFIG.api_url + '/users/register';
        $authProvider.bookingsignupUrl = GENERAL_CONFIG.api_url + '/users/booking_register';
        $stateProvider.state('login', {
            url: '/users/login',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserLoginController as model',
                    templateUrl: 'User/login.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('login_user', {
            url: '/users/login_user',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserRegisterController as model',
                    templateUrl: 'User/login_user.tpl.html'
                }
            }
        }).state('MedicalTeam', {
            url: '/user/medical_team',
            authenticate: false,
            views: {
                "main": {
                    controller: 'MedicalTeamController as model',
                    templateUrl: 'User/medical_team.tpl.html'
                }
            }
        }).state('register', {
            url: '/users/register/:user_type',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserRegisterController as model',
                    templateUrl: 'User/register.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('list_your_practice', {
            url: '/users/practice?signin',
            authenticate: false,
            views: {
                "main": {
                    controller: 'ListYourPracticeController as model',
                    templateUrl: 'User/list_your_practice.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('booking_register', {
            url: '/users/booking_register/',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserRegisterController as model',
                    templateUrl: 'User/booking_register.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('activate', {
            url: '/users/:id/activate/:hash',
            views: {
                "main": {
                    controller: 'UserActivateController as model',
                    resolve: ResolveServiceData
                }
            }
        }).state('ChangePassword', {
            url: '/users/change_password',
            authenticate: true,
            views: {
                "main": {
                    controller: 'ChangePasswordController as model',
                    templateUrl: 'User/change_password.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserProfile', {
            url: '/users/user_profile',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserProfileController as model',
                    templateUrl: 'User/user_profile.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserView', {
            url: '/doctor/:username',
            authenticate: false,
            views: {
                "main": {
                    controller: 'UserController as model',
                    templateUrl: 'User/user_view.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('Dashboard', {
            url: '/users/dashboard',
            authenticate: true,
            views: {
                "main": {
                    controller: 'DashboardController as model',
                    templateUrl: 'User/dashboard.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('ForgotPassword', {
            url: '/users/forgot_password',
            authenticate: false,
            views: {
                "main": {
                    controller: 'ForgotPasswordController as model',
                    templateUrl: 'User/forgot_password.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MySpecialties', {
            url: '/user/specialties',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SpecialtyController as model',
                    templateUrl: 'User/my_specialties.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MyInsurances', {
            url: '/user/insurances',
            authenticate: true,
            views: {
                "main": {
                    controller: 'InsuranceController as model',
                    templateUrl: 'User/my_insurances.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MyLanguages', {
            url: '/user/languages',
            authenticate: true,
            views: {
                "main": {
                    controller: 'LanguageController as model',
                    templateUrl: 'User/my_languages.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MyCalender', {
            url: '/user/calendar',
            authenticate: true,
            views: {
                "main": {
                    controller: 'CalenderController as model',
                    templateUrl: 'User/my_calender.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('MySettings', {
            url: '/user/settings',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserSettingsController as model',
                    templateUrl: 'User/settings.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        })/*.state('MyDocotors', {
            url: '/user/favorite ',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserController as model',
                    templateUrl: 'User/my_doctors.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        })*/.state('UpdateDiseases', {
                url: '/update_spectialty_diseases/:id',
                authenticate: true,
                views: {
                    "main": {
                        controller: 'SpecialtyController as model',
                        templateUrl: 'User/updateDiseaseForm.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
            }).state('Notifications', {
                url: '/notifications',
                authenticate: true,
                views: {
                    "main": {
                        controller: 'NotificationController as model',
                        templateUrl: 'User/notifications.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
            }).state('FamilyFriends', {
                url: '/familyfriends',
                authenticate: true,
                views: {
                    "main": {
                        controller: 'FamilyFriendController as model',
                        templateUrl: 'User/family_friends.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
           }).state('DemographicInformation', {
                url: '/user/demographic',
                authenticate: true,
                views: {
                    "main": {
                        controller: 'DemographicInformationController as model',
                        templateUrl: 'User/demographic.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
           }).state('Authorization', {
                url: '/authorization',
                authenticate: true,
                views: {
                    "main": {
                        controller: 'AuthorizationController as model',
                        templateUrl: 'User/authorization.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
           }).state('MedicalTeamList', {
                url: '/user/medicalteam',
                authenticate: true,
                views: {
                    "main": {
                        controller: 'MedicalTeamController as model',
                        templateUrl: 'User/medical_team.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
            }).state('Activities', {
                url: '/activities',
                authenticate: true,
                views: {
                    "main": {
                        controller: 'AcitivitiesController as model',
                        templateUrl: 'User/activities.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
            });
    });
}(angular.module("Abs.user", [
    'ui.router',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.facebook.pixel',
    'satellizer',
    'mwl.calendar',
    'ui.bootstrap',
    'ngFileUpload',
    'vcRecaptcha',
    'mgcrea.ngStrap',
    'ngMap',
    'hm.readmore',
    'checklist-model',
    'angular-input-stars',
    'ngResource',
    'textAngular',
    'djds4rce.angular-socialshare',
    'Abs.Maps'
])));

