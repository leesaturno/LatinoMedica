(function (module) {
    module.factory('EducationList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('EducationAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/add', {}, {
            'post': {
                method: 'POST'
            }
        });
    });
    module.factory('EducationEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/:id', {}, {
            'get': {
                method: 'GET'
            },
            'put':{
                method: 'PUT'
            }
        });  
    });
     module.factory('EducationDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/:id', {
                id: '@id'
            }, {
                'delete': {
                    method: 'DELETE'
                }
            }
        );
    });
})(angular.module('Abs.UserEducations'));
