(function (module) {
    /**
     * @ngdoc service
     * @name Pages.PageFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} PageFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('MailList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/mail/template/list', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('SmsList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/sms/template/list', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('SmsEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/sms/template/edit/:id', {id:'@id'}, {
                get: {
                    method: 'GET'
                },
                put:{
                    method: 'PUT'
                }
            }
        );
    });
    module.factory('MailEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/mail/template/edit/:id', {id:'@id'}, {
                get: {
                    method: 'GET'
                },
                put:{
                    method: 'PUT'
                }
            }
        );
    });
    module.factory('Preview', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/:type/edit/:id', {type:'@type',id:'@id'}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('Restore', function ($resource, GENERAL_CONFIG) {

        return $resource(GENERAL_CONFIG.api_url + '/:url_type/template/restore/:tmp_name', {url_type:'@url_type',tmp_name:'@tmp_name'}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });

})(angular.module("Abs.SMSMailContent"));
