(function(module) {
    module.factory('UserReviewsFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/patient_reviews/:id', {id: '@id' }, {
            'get': {
                method: 'GET'
            }
        });
    });
    
    module.factory('ReviewPost', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/reviews/add', {}, {
            'post': {
                method: 'POST'
            }
        });
    });
   
    
})(angular.module("Abs.UserReviews"));
