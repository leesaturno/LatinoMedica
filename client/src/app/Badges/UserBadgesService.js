(function (module) {
    module.factory('BadgesService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/badges/:id', {}, {
            'getall': {
                method: 'GET'
            },
            'post': {
                method: 'POST'
            },            
            'delete': {
                method: 'DELETE',
                id: '@id'
            }
        });
    });    
})(angular.module('Abs.userbadges'));
