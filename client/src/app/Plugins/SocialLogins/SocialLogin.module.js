/**
 * @ngdoc object
 * @name socialLogins
 * @description
 *
 * this is the module for socialLogin
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} socialLogins name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *         [
 *            'ui.router',
 *            'ngResource',
 *            ''satellizer'',
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.socialLogin module with the {@link angular.Module} api.
 **/
(function (module) {
    module.config(function ($stateProvider, $authProvider, GENERAL_CONFIG) {
        $authProvider.unlinkUrl = GENERAL_CONFIG.api_url + '/auth/unlink';
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('social', {
            url: '/social',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SocialConnectionController as model',
                    templateUrl: 'Plugins/SocialLogins/my_connection.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('profileImage', {
            url: '/profile_image',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SocialProfileController as model',
                    templateUrl: 'Plugins/SocialLogins/profile_image.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('socialLoginEmail', {
            url: '/social-login/email',
            authenticate: false,
            views: {
                "main": {
                    controller: 'SocialLoginEmailController as model',
                    templateUrl: 'Plugins/SocialLogins/get_email_from_user.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });
}(angular.module('Abs.SocialLogins', [
    'ui.router',
    'ngResource',
    'satellizer'
])));
