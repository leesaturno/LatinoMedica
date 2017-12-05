(function (module) {
    /**
     * @ngdoc service
     * @name Pages.PageFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} PageFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('MyDocotors', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorites', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('FavoriteAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/add', {}, {
                post: {
                    method: 'POST'
                }
            }
        );
    });
    module.factory('FavoriteDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/delete/:id', {id:'@id'}, {
                delete: {
                    method: 'delete'
                }
            }
        );
    });
})(angular.module("Abs.UserFavorites"));
