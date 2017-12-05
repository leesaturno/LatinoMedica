(function (module) {
    /**
     * @ngdoc service
     * @name Ical.IcalFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} IcalFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('IcalList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/ical/list', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });

    module.factory('IcalEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/ical/edit/:id', {id:'@id'}, {
                get: {
                    method: 'GET'
                },
                put:{
                    method: 'PUT'
                }
            }
        );
    });
    module.factory('IcalDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/ical/delete/:id', {id:'@id'}, {
                delete:{
                    method: 'DELETE'
                }
            }
        );
    });
    module.factory('IcalAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/ical/add', {}, {
                post: {
                    method: 'POST'
                }
            }
        );
    });
    module.factory('IcalShow', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/ical/show/:id', {id:'@id'}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('IcalUrl', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/ical/url', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });

})(angular.module("Abs.IcalCalendar"));
