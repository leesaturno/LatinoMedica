(function(module) {
    module.factory('Planslist', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscriptions', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
	module.factory('UserPlanslist', function ($resource, GENERAL_CONFIG) {         
		return $resource(GENERAL_CONFIG.api_url + '/subscribe/plancheck/:id', {             
			id: '@id',         
		}, {             
			'get': {                
				method: 'GET'             
			}         
		});     
	});
    module.factory('GetSubscriptionDetail', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscriptions/:id', {
            id: '@id',
        }, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('PaymentGateway', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscription/subscribe', {}, {
            'post': {
                method: 'POST'
            }
        });
    });
    module.factory('PaymentSuccessApprove', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscription/approve/:tokenid/:payerid', {
            tokenid: '@tokenid',
            payerid: '@payerid'
        }, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('Subscribe', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscribe/list', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('PlanAction', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscription/:par', {
            par:'@par'
        }, {
            'get': {
                method: 'GET'
            }
        });
    });
	 module.factory('ManualPayDetails', function ($resource, GENERAL_CONFIG) {         
		 return $resource(GENERAL_CONFIG.api_url + '/settings/category/:id', { id: '@id' }, {             
			 'get': {                 
				 method: 'GET'             
			 }         
		 });     
	 });
})(angular.module('Abs.Subscriptions'));
