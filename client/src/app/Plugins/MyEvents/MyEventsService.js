(function(module) {
    /**
	 * @ngdoc factory
	 * @name Abs.contactUs.factory:Contact
	 * @description
	 * Contact is used in post a contact form
	 * @param {string=} Contact The name of the factory
	 * @param {function()} function It uses post method to save the data
	 */
	module.factory('MyEvents', function($resource, GENERAL_CONFIG) {
        return $resource(
            GENERAL_CONFIG.api_url + '/my_events', {}, {
                'get': {
                    method: 'GET'
                }
            }
        );
    });

})(angular.module("Abs.myEvents"));
