(function (module) {
    /**
     * @ngdoc service
     * @name socialLogins.ProvidersFactory
     * @description
     * ProvidersFactory is used in listing the providers.
     * @param {string} ProvidersFactory The name of the factory service
     * @param {function()} function returns the url
     */
    module.factory('ProvidersFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/providers', {}, {});
    });
    /**
     * @ngdoc service
     * @name socialLogins.ProviderUsersFactory
     * @description
     * ProviderUsersFactory is used in listing providers
     * @param {string} ProviderUsersFactory The name of the factory service
     * @param {function()} function It uses get method for get and returns the url
     */
    module.factory('ProviderUsersFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/provider_users', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    /**
     * @ngdoc service
     * @name socialLogins.UpdateProfileFactory
     * @description
     * UpdateProfileFactory is used in update the user's profile.
     * @param {string} UpdateProfileFactory The name of the factory service
     * @param {function()} function It uses get method for get and returns the url
     */
    module.factory('UpdateProfileFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/update_profile/', {}, {
            update: {
                method: 'POST'
            },
        });
    });
    /**
     * @ngdoc service
     * @name socialLogins.SocialLoginFactory
     * @description
     * SocialLoginFactory is used in sign in using the social websites.
     * @param {string} SocialLoginFactory The name of the factory sevice
     * @param {function()} function It uses post method for login and returns the url
     */
    module.factory('SocialLoginFactory', function ($resource) {
        return $resource('api/social_login', {}, {
            login: {
                method: 'POST'
            }
        });
    });
})(angular.module('Abs.SocialLogins'));
