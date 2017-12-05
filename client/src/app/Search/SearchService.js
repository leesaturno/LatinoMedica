(function (module) {
    module.factory('Languages', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/languages', {
        }, {
            'languageList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('SearchAll', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/searchall', {
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Cities', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/cities', {
        }, {
            'citiesliList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Specialties', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialties', {
        }, {
            'specialtyliList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('SpecialtyDiseas', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialty_diseases', {
        }, {
            'specialtyDiseasliList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Gender', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/genders', {
        }, {
            'genderList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Insurances', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/insurances', {
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('SearchList', function ($resource, GENERAL_CONFIG, $location) {
        return $resource(GENERAL_CONFIG.api_url + '/search', {
        }, {
            'searchList': {
                method: 'GET'
            }
        }
        );       
    });
    module.factory('WeekList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/search/weeklist/:userids/:viewslot', {
            userids:'@userids',
            viewslot:'@viewslot'
        }, {
            'get': {
                method: 'GET'
            }
        }
        );
    });
})(angular.module("Abs.search"));