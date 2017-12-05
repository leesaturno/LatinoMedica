(function (module) {
    module.factory('MessagesService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/messages/:id/:type', {}, {
            'getall': {
                method: 'GET'
            },
            'post': {
                method: 'POST'
            },
            'compose':{
                method: 'POST',
				params:{
					type: 'user'
				}
            },
			'reply':{
                method: 'POST',
				params:{
					id: '@message_id',
					type: 'reply'
				}
            },
            'getbyid' :{
                method: 'GET',
                id: '@id'
            },
            'delete': {
                method: 'DELETE',
            }
        });
    });
    module.factory('SentMessagesService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/sentMessages', {}, {
            'getall': {
                method: 'GET'
            }
        });
    });    
	module.factory('ItemMessagesService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/item_messages/:item_id', {}, {
            'get' :{
                method: 'GET',
                params:{
                    item_id : '@item_id'
                }
            }            
        });
    });
	module.factory('PrivateNoteService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/private_notes', {}, {
            'post' :{
                method: 'POST'
            }            
        });
    });
	module.factory('UserLists', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/messages', {}, {
            'get' :{
                method: 'GET'
            }            
        });
    });
	module.factory('MessageDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/messages', {}, {
            'delete' :{
                method: 'DELETE',
			}            
        });
    });
    
})(angular.module('Abs.usermessage'));
