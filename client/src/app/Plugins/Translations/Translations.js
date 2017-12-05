/**
 * agriyabase - v0.0.1 - 2016-04-22
 *
 * Copyright (c) 2016 Agriya
 */
/**
 * @ngdoc object
 * @name translations
 * @description
 *
 * This is the module for translations
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} translations name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *         [
 *            'ngResource',
 *            'pascalprecht.translate',
 *            'tmh.dynamicLocale',
 *            'ngSanitize',
 *            'ngCookies',
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.socialLogin module with the {@link angular.Module} api.
 **/
(function (module) {
}(angular.module('Abs.Translations', [
    'ngResource',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'ngSanitize',
    'ngCookies'
])));
(function (module) {
    module.config(function (tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('assets/js/angular-i18n/angular-locale_{{locale}}.js');
    });
    /**
     * @ngdoc service
     * @name translations.LanguageList
     * @function
     * @description
     * It is used to list the languages.
     * @param {string}  LanguageList  service name
     */
    module.service('LanguageList', function ($sce, $rootScope, $q, GENERAL_CONFIG) {
        promise = $.get(GENERAL_CONFIG.api_url + '/languages?filter=active&sort=name&sortby=asc', function (response) {
        });
        return {
            promise: promise
        };
    });
	module.service('LanguageListActive', function ($sce, $rootScope, $q, GENERAL_CONFIG) {
        promise = $.get(GENERAL_CONFIG.api_url + '/languages/active', function (response) {
        });
        return {
            promise: promise
        };
    });
    /**
     * @ngdoc service
     * @name translations.LocaleService
     * @function
     * @description
     * It maintains the locale service of the languages.
     * @param {string}  LocaleService  service name
     */
    module.service('LocaleService', function ($translate, $rootScope, tmhDynamicLocale, GENERAL_CONFIG, LanguageListActive, ResolveService, $translateLocalStorage) {
        'use strict';
        var localesObj;
        var loadedlocalesObj = {};
        var _LOCALES_DISPLAY_NAMES = [];
        var _LOCALES;
        var promiseLanguages = LanguageListActive.promise;
        promiseLanguages.then(function (response) {
            $.each(response.data, function (i, data) {
                loadedlocalesObj[data.iso2] = data.name;
            });
            localesObj = loadedlocalesObj;
            // locales and locales display names
            _LOCALES = Object.keys(localesObj);
            if (!_LOCALES || _LOCALES.length === 0) {
                console.error('There are no _LOCALES provided');
            }
            _LOCALES.forEach(function (locale) {
                _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
            });
        });
        // STORING CURRENT LOCALE
        var currentLocale = $translate.preferredLanguage();
        if ($translate.use() !== undefined) {
            currentLocale = $translate.use();
        } else if ($translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== undefined && $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== null) {
            currentLocale = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY');
        }
        // METHODS
        var checkLocaleIsValid = function (locale) {
            return _LOCALES.indexOf(locale) !== -1;
        };
        var setLocale = function (locale) {
            if (!checkLocaleIsValid(locale)) {
                console.error('Locale name "' + locale + '" is invalid');
                return;
            }
            // updating current locale
            currentLocale = locale;
            // asking angular-translate to load and apply proper translations
            $translate.use(locale);
        };
        // EVENTS
        // on successful applying translations by angular-translate
        $rootScope.$on('$translateChangeSuccess', function (event, data) {
            document.documentElement.setAttribute('lang', data.language); // sets "lang" attribute to html
            // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
            tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
        });
        return {
            getLocaleDisplayName: function () {
                return localesObj[currentLocale];
            },
            setLocaleByDisplayName: function (localeDisplayName) {
                setLocale(
                    _LOCALES[
                        _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName) // get locale index
                        ]
                );
            },
            getLocalesDisplayNames: function () {
                return _LOCALES_DISPLAY_NAMES;
            }
        };
    });
    /**
     * @ngdoc directive
     * @name translations:ngTranslateLanguageSelect
     * @scope
     * @restrict A
     *
     * @description
     * ngTranslateLanguageSelect directive creates a ngTranslateLanguageSelect tag. We can usae this as an attribute.
     *
     * @param {string}  footer  directive name
     *
     */
    module.directive('ngTranslateLanguageSelect', function (LocaleService, LanguageListActive) {
        'use strict';
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/Translations/language_translate.tpl.html',
            controller: function ($scope, $rootScope, $timeout, LanguageListActive) {
				var promiseSettings = LanguageListActive.promise;
                promiseSettings.then(function (response) {
                    $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                    $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                    $scope.visible = $scope.localesDisplayNames && $scope.localesDisplayNames.length > 1;
                });
                $scope.changeLanguage = function (locale) {
                    LocaleService.setLocaleByDisplayName(locale);
                };
				$timeout(function() {
					$scope.changeLanguage('Spanish'); // set primary language as Spanish
				},2000);				
            }
        };
    });
}(angular.module("Abs.Translations")));