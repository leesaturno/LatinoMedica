(function (module) {
	
	/**
     * @ngdoc service
     * @name user.AuthFactory
     * @description
     * Authfactory is a factory service which is used to authenticate the user
     * @param {string} AuthFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */ 
    module.factory('AuthFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/auth', {}, {
            fetch: {
                method: 'GET'
            }
        });
    });
    module.factory('AppointmentFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/:type', {
            type: '@type'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('appointmentView', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointment/:id', {
            id: '@id'
        });
    });
    module.factory('appointmentSetting', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/settings?zone=' + localStorage.zone, {}, {
            update: {
                method: 'POST'
            },
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('appointmentModification', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('appointmentModificationDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications/delete/:id', {
            id: '@id'
        }, {
            delete: {
                method: 'delete'
            }
        });
    });
    module.factory('appointmentModificationAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications/add', {}, {
            add: {
                method: 'POST'
            }
        });
    });
    module.factory('appointmentModificationEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/modifications/edit/:id', {
            id: '@id'
        }, {
            get: {
                method: 'GET'
            },
            update: {
                method: 'POST'
            }
        });
    });
    module.factory('BookingAppointment', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/booking/:doctorid/:apt_date/:apt_time/:workplaceid', {
            doctorid: '@doctorid',
            apt_date: '@apt_date',
            apt_time: '@apt_time',
			workplaceid: '@workplaceid'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('Gender', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/genders', {}, {
            'genderList': {
                method: 'GET'
            }
        });
    });
    module.factory('AppointmentBookingAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/booking/add', {}, {
            add: {
                method: 'POST'
            }
        });
    });
    module.factory('changeStatus', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointment/:id/:apt_status', {
            id: '@id',
            apt_status: '@apt_status'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('splitedTimeSlot', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/search/timeslot', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('MyDocotors', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/favorite', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('AppointmentExport', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointments/export/:type/:format?token=' + localStorage.userToken, {}, {
            export: {
                method: 'GET',
                params:{
					type: '@type',
					format: '@format'
				},
            }
        });
    });
	module.factory('RemainderService', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/reminders/:id', {}, {
            'getall': {
                method: 'GET'
            },
            'post': {
                method: 'POST'
            },
            'put':{
                method: 'PUT',
				id: '@id'
            },
            'getbyid' :{
                method: 'GET',
                id: '@id'
            },
            'delete': {
                method: 'DELETE',
                id: '@id'
            }
        });
    });
	module.factory('DoctorInsuranceList',['$resource','GENERAL_CONFIG', function($resource, GENERAL_CONFIG){
		return $resource(GENERAL_CONFIG.api_url + '/insurances', {
				doctor_id:'@doctor_id',
				date:'@date'
		}, {
			'get':{
				method:'GET',
				
			},
		});
	}]);
	module.factory('FamilyFriendsList',['$resource','GENERAL_CONFIG', function($resource, GENERAL_CONFIG){
		return $resource(GENERAL_CONFIG.api_url + '/family_friends', {
				user_id:'@user_id'
		}, {
			'get':{
				method:'GET',
				
			},
			'post':{
				method:'POST'
			}
		});
	}]);
    module.factory('FamilyFriendsSingle',['$resource','GENERAL_CONFIG', function($resource, GENERAL_CONFIG){
		return $resource(GENERAL_CONFIG.api_url + '/family_friends/:id', {
				id:'@id'
		}, {
			'get':{
				method:'GET'
			}
		});
	}]);
})(angular.module("Abs.appointments"));