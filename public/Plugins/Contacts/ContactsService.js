(function (module) {
    /**
     * @ngdoc service
     * @name contacts.ContactsFactory
     * @description
     * ContactsFactory is a factory service which is used in post a contact form.
     * @param {string} ContactsFactory The name of the factory
     * @param {function()} function It uses post method to save the data
     */
    module.factory('ContactsFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(
            GENERAL_CONFIG.api_url + '/contacts', {}, {
                'save': {
                    method: 'POST'
                }
            }
        );
    });

})(angular.module("Abs.Contacts"));
