(function (module) {
    /**
     * @ngdoc service
     * @name Widget.WidgetFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} WidgetFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('WidgetList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/widget/list', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });

    module.factory('WidgetEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/widget/edit/:id', {id:'@id'}, {
                get: {
                    method: 'GET'
                },
                put:{
                    method: 'PUT'
                }
            }
        );
    });
    module.factory('WidgetDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/widget/delete/:id', {id:'@id'}, {
                delete:{
                    method: 'DELETE'
                }
            }
        );
    });
    module.factory('WidgetAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/widget/add', {}, {
                post: {
                    method: 'POST'
                }
            }
        );
    });
    module.factory('WidgetShow', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/widget/show/:id', {id:'@id'}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });

})(angular.module("Abs.Widget"));
