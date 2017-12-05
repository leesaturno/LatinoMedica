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
    /**
     * @ngdoc service
     * @name user.UserProfilesFactory
     * @description
     * UserProfilesFactory is a factory service which updates and displays the user profile.
     * @param {string} UserProfilesFactory The name of the factory
     * @param {function()} function It uses get method for get the user profile, uses post method for update the user
     profile and defines the url
     */
    module.factory('UserProfilesFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user_profiles', {}, {
            update: {
                method: 'POST'
            },
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('UserProfilesImageFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user_profiles/update_photo', {}, {
            update: {
                method: 'POST'
            }
        });
    });
    /**
     * @ngdoc service
     * @name user.UsersFactory
     * @description
     * UsersFactory is a factory servce which is used to get the users list.
     * @param {string} UsersFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */

   /* module.factory('UsersFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user', {}, {
            get: {
                method: 'GET'
            }
        });
    });*/
    /**
     * @ngdoc service
     * @name user.UsersFactory
     * @description
     * UsersFactory is a factory servce which is used to get the users list.
     * @param {string} UsersFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */
    module.factory('UsersFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/doctor/:username', {
             username: '@username'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    /**
     * @ngdoc service
     * @name user.UserActivateFactory
     * @description
     * UserActivateFactory is a factory service which is used for activating the user.
     * @param {string} UserActivateFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */

    module.factory('UserActivateFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/:id/activate/:hash', {
                id: '@id',
                hash: '@hash'
            }, {
                'activate': {
                    method: 'PUT'
                }
            }
        );
    });
    /**
     * @ngdoc service
     * @name user.ForgotPasswordFactory
     * @description
     * ForgotPasswordFactory is a factory service which will be used in resetting the password if the user forgot his password.
     * @param {string} ForgotPasswordFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */

    module.factory('ForgotPasswordFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/forgot_password', {}, {
            forgot_password: {
                method: 'PUT'
            }
        });
    });

    /**
     * @ngdoc service
     * @name user.ChangePWd
     * @description
     * ChangePWd is a factory service which is used to change password.
     * @param {string} ChangePWd The name of the factory
     * @param {function()} function It uses put method, and defines the url
     */

    module.factory('ChangePWd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/:id/change_password', {
                id: '@id'
            }, {
                'put': {
                    method: 'PUT'
                }
            }
        );
    });
     
    /**
     * @ngdoc service
     * @name user.UserAttachmentFactory
     * @description
     * UserAttachmentFactory is a factory service which is used for getting user upload image detail.
     * @param {string} UserAttachmentFactory The name of the factory
     * @param {function()} function It uses get method, and defines the url
     */

    module.factory('UserAttachmentFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/users/:id/attachment', {
                id: '@id'
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
	module.factory('Specialties', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialties', {
        }, {
            'specialtyliList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Genders', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/genders', {
        }, {
            'genderList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Language', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/languages', {
        }, {
            'languageList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('City', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/cities', {
        }, {
            'cityList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('States', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/states', {
        }, {
            'stateList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Country', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/countries', {
        }, {
            'countryList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('Specialties', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialties', {
        }, {
            'specialtyliList': {
                method: 'GET'
            }
        }
        );
    });
    module.factory('MySpecialties', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/specialties', {}, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('GetSpecialty', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/specialties/:id', {
            id: '@id'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('Notifications', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/notifications', { }, {            
            get: {
                method: 'GET'
            },
            add:{
                method: 'POST'
            }
        });
    });
	module.factory('FamilyFriends', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/family_friends/:id', {
                id: '@id'
            }, {
            put: {
                method: 'PUT',
				id: '@id'
            },
            get: {
                method: 'GET'
            },
			getbyid:{
				method: 'GET',
				id: '@id'
			},
            add:{
                method: 'POST'
            },
			delete: {
				method: 'DELETE',
				id: '@id'
			}
        });
    });
	module.factory('MedicalTeam', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/find_doctors/:id', {
                id: '@id'
            }, {
            put: {
                method: 'PUT',
				id: '@id'
            },
            get: {
                method: 'GET'
            },
			getbyid:{
				method: 'GET',
				id: '@id'
			},
            post:{
                method: 'POST'
            },
			delete: {
				method: 'DELETE',
				id: '@id'
			}
        });
    });
	module.factory('DemographicInformation', function ($resource, GENERAL_CONFIG) {
		return $resource (GENERAL_CONFIG.api_url + '/user/demographic', {}, {
			post: {
				method: 'POST'
			}
		});
	});
    module.factory('MyInsurances', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/insurances', {}, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET'
            }
        });
    });
	module.factory('UserInsurances', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/insurance_plans/:id', {}, {
            get: {
                method: 'GET'
            },
			post: {
				method: 'POST'
			},
			put: {
				method: 'PUT',
				id: '@id'
			}
		}
        );
    });
	module.factory('DoctorInsurances', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/insured_patients/:id', {}, {
            get: {
                method: 'GET'
            },
			post: {
				method: 'POST'
			},
			put: {
				method: 'PUT',
				id: '@id'
			},
			delete: {
				method: 'DELETE',
				id: '@id'
			}
		}
        );
    });
	module.factory('Authorization', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/authorized_doctors/:id', {}, {
            post: {
                method: 'POST'
            },
            get: {
                method: 'GET'
            },
			delete: {
				method : 'DELETE',
				id: '@id'
			}
        });
    });
    module.factory('MyLanguages', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/languages', {}, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('ProfileSearchList', function ($resource, GENERAL_CONFIG) {
       return $resource(GENERAL_CONFIG.api_url + '/search/getdoctorweeklist/:userids/:viewslot/:workplaceid', {
            userids:'@userids',
            viewslot:'@viewslot',
		    workplaceid:'@workplaceid'
        }, {
            get: {
                method: 'GET'
            }
        }
        );
    });
    module.factory('AppointmentWeekList', function ($resource, GENERAL_CONFIG) {
       return $resource(GENERAL_CONFIG.api_url + '/search/getdoctorweeklist/:userids/:viewslot/:workplaceid', {
                userids:'@userids',
                viewslot:'@viewslot',
                workplaceid:'@workplaceid'
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('calenderEvents', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/calender/events/:month', {
                param1:'@param1',
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
     module.factory('calenderEventsDoctor', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/calender/eventsdoctor?appointment_date=:date', {
                param1:'@param1',
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('UserReviews', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/reviews/:doctor_id/:user_id', {
                doctor_id:'@doctor_id',
                user_id:'@user_id',
            }, {
                get: {
                    method: 'GET'
                },
                add:{
                    method: 'POST',
                }
            }
        );
    });
    module.factory('UserAppointment', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/bookings/:doctor_id/:user_id', {
                doctor_id:'@doctor_id',
                user_id:'@user_id',
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('ReviewAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/reviews/add', {}, {
                add: {
                    method: 'POST'
                }
            }
        );
    });
	/*
	*Question Add for doctor profile page
	*/
	module.factory('DoctorQuestionAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/add', {}, {
            post:{
                method: 'POST'
            }
        });
    });
	/*
	*Question List for doctor profile page
	*/
	module.factory('DoctorQuestionList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/answer/:id',{
				id:'@id'
		}, {
            get: {
                method: 'GET'
			}
        });
    });
	/*
	*Question List for doctor profile page
	*/
	module.factory('UserQuestionList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/user/:id',{
				id:'@id'
		}, {
            get: {
                method: 'GET'
			}
        });
    });
	/*
	*Answer Add for doctor profile page
	*/
    module.factory('DoctorAnswerAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/add/:id', {id:'@id'}, {
            get:{
                method:'GET'
            },
            post:{
                method: 'POST'
            }
        });
    });
    module.factory('UserDeactivate', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/deactivate', {}, {
            post: {
                method: 'POST'
            }
        });
    });
	module.factory('BestanswerUpdate', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/update/:id', {}, {
            put: {
                method: 'PUT',
				params: {
					id:'@id',
				}
            }
        });
    });
    module.factory('DoctorReviewCheck', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/patient_reviews/:id', {
                id:'@id',
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
	module.factory('appointmentchangeStatus', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointment/:id/:apt_status', {
            id: '@id',
            apt_status: '@apt_status'
        }, {
            get: {
                method: 'GET'
            }
        });
    });
	module.factory('calenderCancelToday', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/calender/canceltoday?appointment_date=:date', {
                param1:'@param1',
            }, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
	module.factory('patientNote', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/appointment/patientnote', {
            }, {
                post: {
                    method: 'POST'
                }
            }
        );
    });
    module.factory('ActivityCount', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/activities?is_read=1', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('ActivityFactory', function($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/activities', {}, {
            get: {
                method: 'GET'
            }
        });
    });
    /*module.factory('MyDocotors', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorites', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('FavoriteAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/add', {}, {
                post: {
                    method: 'POST'
                }
            }
        );
    });
    module.factory('FavoriteDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/delete/:id', {id:'@id'}, {
                delete: {
                    method: 'delete'
                }
            }
        );
    });*/
})(angular.module("Abs.user"));
