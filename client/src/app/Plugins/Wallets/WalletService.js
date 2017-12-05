(function (module) {
    /**
     * @ngdoc service
     * @name wallets.WalletsFactory
     * @description
     * WalletsFactory is used in wallets
     * @param {string} WalletsFactory The name of the factory
     * @param {function()} function It uses post method for save and returns the url
     */
    module.factory('WalletsFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/wallets', {}, {
                'save': {
                    method: 'POST'
                }
            }
        );
    });

})(angular.module('Abs.Wallets'));
