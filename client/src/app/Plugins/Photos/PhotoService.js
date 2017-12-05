(function(module) {
    module.factory('PhotosFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos/:username', {username: '@username'}, {
            'get': {
                method: 'GET'
            }
        });
    });
    
    module.factory('PhotosAddFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos', {}, {
            'save': {
                method: 'POST'
            }
        });
    });
    
    module.factory('PhotoDeleteFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos/:id', {
                id: '@id'
            }, {
                'delete': {
                    method: 'DELETE'
                }
            }
        );
    });
   
    
})(angular.module("Abs.Photos"));
