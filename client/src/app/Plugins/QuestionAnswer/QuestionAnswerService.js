(function (module) {
    /**
     * @ngdoc service
     * @name Ical.IcalFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} IcalFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('QuestionList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions', {}, {
            get: {
                method: 'GET'
            }
        });
    });

    module.factory('AnswerList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers',{}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('QuestionAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/add', {}, {
            post:{
                method: 'POST'
            }
        });
    });
    module.factory('AnswerAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/add/:id', {id:'@id'}, {
            get:{
                method:'GET'
            },
            post:{
                method: 'POST'
            }
        });
    });
    module.factory('QuestionEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/edit/:id', {id:'@id'}, {
            get: {
                method: 'GET'
            },
            put:{
                method: 'PUT'
            }
        });
    });
    module.factory('AnswerEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/edit/:id', {id:'@id'}, {
            get: {
                method: 'GET'
            },
            put:{
                method:'PUT'
            }
        });
    });
    module.factory('QuestionDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/:id', {id:'@id'}, {
            delete: {
                method: 'DELETE'
            }
        });
    });
    module.factory('AnswerDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/:id', {id:'@id'}, {
            delete: {
                method: 'DELETE'
            }
        });
    });
    module.factory('SpecialtyList', function($resource, GENERAL_CONFIG){
       return $resource(GENERAL_CONFIG.api_url+'/specialties',{},{
            get:{
                method:'GET'
            }
       });
    });
    module.factory('QuestionView', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/questions/view/:slug',{slug:'@slug'},{
            get:{
                method:'GET'
            }
        });
    });
    module.factory('QuestionSlug', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/question/:slug',{slug:'@slug'},{
            get:{
                method:'GET'
            }
        });
    });
    module.factory('AnswerQuestion', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/answers/question',{},{
            get:{
                method:'GET'
            }
        });
    });
    module.factory('AnswersList', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/answers',{},{
            get:{
                method:'GET'
            }
        });
    });
    module.factory('AnswersList', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/answers',{},{
            get:{
                method:'GET'
            }
        });
    });
})(angular.module("Abs.QuestionAnswer"));
