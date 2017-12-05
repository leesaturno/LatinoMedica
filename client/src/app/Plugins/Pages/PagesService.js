(function (module) {
    /**
     * @ngdoc service
     * @name Pages.PageFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} PageFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('PageFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/page/:slug/:iso2', {
                slug: '@slug',
                iso2: '@iso2'
            }, {
                'get': {
                    method: 'GET'
                }
            }
        );
    });
})(angular.module("Abs.Pages"));
