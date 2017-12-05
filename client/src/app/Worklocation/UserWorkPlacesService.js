(function (module) {
    module.factory('WorkLocationService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/workplaces/:id', {}, {
            'getall': {
                method: 'GET'
            },
            'post': {
                method: 'POST'
            },
            'put':{
                method: 'PUT'
            },
            'getbyid' :{
                method: 'GET',
                id: '@id'
            },
            'delete': {
                method: 'DELETE',
                id: '@id'
            }
        });
    });
    module.factory('AppoinmentModificationService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications/:urltype/:id', {}, {
            'getall': {
                method: 'GET',
				params:{
					urltype: 'show',
					id: '@id'
				},
            },
            'post': {
                method: 'POST',
				params:{
					urltype: 'add'
				},
			},
            'put':{
                method: 'POST',
				params:{
					urltype: 'edit',
					id: '@id'
				},
            },
            'getbyid' :{
                method: 'GET',
                params:{
					urltype: 'edit',
					id: '@id'
				},
            },
            'delete': {
                method: 'DELETE',
				params:{
					urltype: 'delete',
					id: '@id'
				},
                
            }
        });
    });    
	module.factory('AppoinmentSettingsService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/settings?zone=' + localStorage.zone + '&work_place_id=:work_place_id', {}, {
            'getbyworkplace' :{
                method: 'GET',
                params:{
                    work_place_id : '@work_place_id'
                }
            },
            'save': {
                method: 'POST',
                params:{
                    work_place_id : '@work_place_id'
                }
            },            
        });
    });
    module.factory('CountriesService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/countries/:id', {}, {
            'getall': {
                method: 'GET'
            },            
            'getbyid' :{
                method: 'GET',
                id: '@id'
            }            
        });
    }); 
    module.factory('StatesService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/states/:id', {}, {
            'getall': {
                method: 'GET'
            },            
            'getbyid' :{
                method: 'GET',
                id: '@id'
            }            
        });
    }); 
    module.factory('CitiesService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/cities/:id', {}, {
            'getall': {
                method: 'GET'
            },            
            'getbyid' :{
                method: 'GET',
                id: '@id'
            }            
        });
    });
	module.factory('splitedTimeSlot', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/search/timeslot', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('AuthDetails', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/auth_details', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
})(angular.module('Abs.userworkplace'));
