(function(moduel){
	moduel.directive('onlyDigits', function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function (scope, element, attr, ctrl) {
        function inputValue(val) {
          if (val) {
            var digits = val.replace(/[^0-9]/g, '');

            if (digits !== val) {
              ctrl.$setViewValue(digits);
              ctrl.$render();
            }
            return parseInt(digits,10);
          }
          return undefined;
        }            
        ctrl.$parsers.push(inputValue);
      }
    };
});
moduel.directive('geoLocation', ['$location', function($location) {
    return {
        restrict: 'E',
        scope: true,
        controller : function($scope) {
            var autocompleteFrom = new google.maps.places.Autocomplete(document.getElementById('geo-location'));
            google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
                var place = autocompleteFrom.getPlace();
                $scope.profileLatitude = place.geometry.location.lat();
                $scope.profileLongitude = place.geometry.location.lng();
                $scope.model.workplace.address1 = place.formatted_address;
                var k = 0;
                angular.forEach(place.address_components, function(value, key) {
                    if (value.types[0] === 'locality' || value.types[0] === 'administrative_area_level_2') {
                        if (k === 0) {
                            $scope.cityName = value.long_name;
                        }
                        if (value.types[0] === 'locality') {
                            k = 1;
                        }
                    }
                    if (value.types[0] === 'administrative_area_level_1') {
                        $scope.stateName = value.long_name;
                    }
                    if (value.types[0] === 'country') {
                         $scope.countryName = value.long_name;
                    }
                    if (value.types[0] === 'sublocality_level_1' || value.types[0] === 'sublocality_level_2') {
                        if ($scope.profileAddress !== '') {
                            $scope.profileAddress = $scope.profileAddress + ', ' + value.long_name;
                        } else {
                            $scope.profileAddress = value.long_name;
                        }
                    }        
                    if (value.types[0] === 'postal_code') {
                        $scope.postalCode = parseInt(value.long_name);
                    }
                });
            });
        },
        template: '<input ng-required="true" name="address1" class="form-control" id="geo-location" ng-model="model.workplace.address1" ng-blur="model.manualAddress()">'
    };
}]);
    moduel.controller('UserWorkPlacesController', function($state, $rootScope, $scope, $filter, $location, $timeout, Flash, SweetAlert, WorkLocationService,ConstantWorkPlaces,$stateParams,AppoinmentModificationService,AppoinmentSettingsService,CountriesService,StatesService,CitiesService,splitedTimeSlot,AuthDetails){
        var model = this;
        model.dataLength = model.dataModificationLength = model.dataAppoinmentsLength = false;
        model.settingValue = null;   
        /* [ Page Title ] */ 
        function pageTitle(title){
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")(title);
        }
        /* [ Flash Message ] */
        function flashMessage(message,classname){
            Flash.set($filter("translate")(message), classname, true);
        }
		/*  [Date Filter] */
		function dateFilter(value)
		{
			return $filter('date')(value, "yyyy-MM-dd");
		}
        /* [ GET - Countries ] */
        function getCountries(){
            CountriesService.getall().$promise.then(function (response) {
                if(angular.isDefined(response)){
                    model.countries = response.data;
                    model.countriesLength = (response.data.length > 0) ? true : false;                      
                }                              
            }); 
        }
        /* [ GET - States ] */
        function getStates(){
            StatesService.getall().$promise.then(function (response) {
                if(angular.isDefined(response)){
                    model.states = response.data;
                    model.statesLength = (response.data.length > 0) ? true : false;                      
                }                              
            }); 
        }
        /* [ GET - Cities ] */
        function getCities(){
            CitiesService.getall().$promise.then(function (response) {
                if(angular.isDefined(response)){
                    model.cities = response.data;
                    model.citiesLength = (response.data.length > 0) ? true : false;                      
                }                              
            }); 
        }
		/* [ GET - Splited Time Slot ] */
        function getTimeSlot(){
            splitedTimeSlot.get().$promise.then(function (response) {
                if(angular.isDefined(response)){
                    model.timeSlot = response.data;
                    model.timeSlotLength = (response.data.length > 0) ? true : false;                      
                }                              
            }); 
        }
        /* [ GET - work place ] */
        function getWorkLocation(){
            WorkLocationService.getall().$promise.then(function (response) {
                if(angular.isDefined(response)){
                    model.worklocation = response;
                    model.siteCurrency = $rootScope.settings['site.currency'];
                    model.dataLength = (response.data.length > 0) ? true : false;
                    AuthDetails.get().$promise.then(function (response) {
                        if(angular.isDefined(response)){
                            if (response.users.length == 1) {
                                if (response.users[0].subscription_id !== 0) {
                                    model.premiumUser = true;
                                } else {
                                    model.premiumUser = false;
                                }                                    
                            } else {
                                model.premiumUser = false;
                            }   
                        }                              
                    });                      
                }                              
            }); 
        }
        /* [ GET - work place by Id ] */  
        function getWorkLocationById(id){
            WorkLocationService.getbyid({id : id}).$promise.then(function (response) {
                if(angular.isDefined(response)){
                    if (response.Failed) {
                        flashMessage(response.Failed,'error');
                    } else {
                        model.workplace = response; 
                    }                                                            
                }                              
            });
        }      
        /* [ PUT - work place ] */  
        function updateWorkLocationById(id,data){
            WorkLocationService.put({id : id},data).$promise.then(function (response) {
                if(angular.isDefined(response)){
                    /* [ Success Response ] */
                    if(response.Success){
                        $timeout(function(){
                            $state.go(ConstantWorkPlaces.state_WorkPlace,{},{reload:true});  
                        },500);                        
                        flashMessage("Workplace updated successfully",'success');   
                    } else {
                        flashMessage("Please try again",'error');   
                    }                                
                }                              
            });
        }
        /* [ POST - work place ] */
        function addWorkLocation(data){
            WorkLocationService.post(data).$promise.then(function (response) {
                if(angular.isDefined(response)){
                    /* [ Success Response ] */
                    if(response.Success){
                        $timeout(function(){
                            $state.go(ConstantWorkPlaces.state_WorkPlace,{},{reload:true});  
                        },500);                                           
                        flashMessage("Workplace added successfully",'success');   
                    } else if(response.message) {
                        flashMessage(response.message,'error');   
                    }
					else {
						flashMessage("Please try again",'error');
					}                                         
                }                              
            });
        }
        /* [ GET - Appoinment Modification ] */
        function getAppoinmentModification(id){ 
            AppoinmentModificationService.getall({id : id}).$promise.then(function (response) {
                if(angular.isDefined(response)){
                    model.appoinmentModification = response.data;
					model.dataModificationLength = (response.data.length > 0) ? true : false;                      
                }                              
            }); 
        }
        /* [ GET - Appoinment Modification By Id ] */
        function getAppoinmentModificationById(id){            
            AppoinmentModificationService.getbyid({id : id}).$promise.then(function (response) {
                if(angular.isDefined(response)){
					model.appoinmentmodification_update = response;
					model.appoinmentmodification_update.type = parseInt(response.type);
					if(response.practice_open !==''){
						var practiceOpen = response.practice_open;
						model.appoinmentmodification_update.appt_time = practiceOpen.split(',');

					}else{
						model.appoinmentmodification_update.appt_time = '';
					}
                    model.dataModificationLength = (response.length > 0) ? true : false;                      
                }                              
            }); 
        }
        /* [ PUT - Appoinment Modification ] */  
        function updateAppoinmentModification(id,data){
			AppoinmentModificationService.put({id:id},data).$promise.then(function (response) {
                if(angular.isDefined(response)){
                    /* [ Success Response ] */
                    if(response.Success){
                        $timeout(function(){
                            $state.go(ConstantWorkPlaces.state_AppoinmentModification,{'locationid':$state.params.locationid},{reload:true});  
                        },500);                        
                        flashMessage("Appoinment modification updated successfully",'success');   
                    } else {
                        flashMessage("Please try again",'error');   
                    }
                }                              
            });
        }
        /* [ POST - Appoinment Modification ] */
        function addAppoinmentModification(data){			
            AppoinmentModificationService.post(data).$promise.then(function (response) {
				if(angular.isDefined(response)){
                    /* [ Success Response ] */
                    if(response.Success){
                        $timeout(function(){
                            $state.go(ConstantWorkPlaces.state_AppoinmentModification,{'locationid':$state.params.locationid},{reload:true});  
                        },500);                                           
                        flashMessage("Appoinment modification added successfully",'success');   
                    } else if(response.Failed) {
                        flashMessage(response.Failed,'error');   
                    } else {
						flashMessage("Please try again",'error');
					}
						
                }                              
            });
        }        
        /* [ DELETE { Workplace, Appoinments, Appoinment modification } ] */
        function fnDeleteWorkPlace(id){
            SweetAlert.swal({
                title: "Are you sure to Delete?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                /* [ Delete the work Location Data ] */
                if (isConfirm && $state.current.name === ConstantWorkPlaces.state_WorkPlace) {
                    WorkLocationService.delete({id: id}).$promise.then(function (response) {
                        flashMessage("Workplace deleted successfully",'success');                      
                        $timeout(function(){
                            $state.reload();
                        },500);
                    }, function (error) {
                        flashMessage("Worklocation could not be deleted",'error');                        
                    });                
                /* [ Delete the Appoinment Modification Data ] */
                } else if(isConfirm && $state.current.name === ConstantWorkPlaces.state_AppoinmentModification){
                    AppoinmentModificationService.delete({id: id}).$promise.then(function (response) {
                        flashMessage("Appoinment modification deleted successfully",'success');
                        $timeout(function(){
                            $state.reload();
                        },500);
                    }, function (error) {
                        flashMessage("Appoinment modification could not be deleted, Please try again",'error');     
                    });
                }
            });
        }
        /* [ Appoinment Settings ] */           
        function calendarSlots(){
            $scope.calendarSlots = [];
            $scope.calendarSlots.push({'id': 5, 'name': ('5 minutes')},{'id': 10, 'name':('10 minutes')},{'id': 15, 'name':('15 minutes')},{'id': 20, 'name':('20  minutes')},{'id': 25, 'name':('25 minutes')},{'id': 30, 'name':('30 minutes')},{'id': 35, 'name':('35 minutes')},{'id': 40, 'name':('40 minutes')},{'id': 45, 'name':('45 minutes')},{'id': 50, 'name':('50 minutes')},{'id': 55, 'name':('55 minutes')},{'id': 60, 'name':('60 minutes')}
            );
        }
        /* [ Appointment Settings Response Check for Day ] */
        function checkASettingsResponse(value){
            return (parseInt(value) === 1) ? true : false;
        }
        /* [ Get Appoinenement Settings Data by location id ] */
        function getAppointmentSettingsData(locationid){
            AppoinmentSettingsService.getbyworkplace({work_place_id : locationid}).$promise.then(function (response) {
                if(angular.isDefined(response)){                    
                    model.settingValue = response.appointmentResponse;
                    model.settingValue.calendar_slot_id = parseInt(response.appointmentResponse.calendar_slot_id);
                    model.settingValue.is_today_first_day = checkASettingsResponse(response.appointmentResponse.is_today_first_day);
                    model.settingValue.is_two_session = checkASettingsResponse(response.appointmentResponse.is_two_session);
                    model.settingValue.type = checkASettingsResponse(response.appointmentResponse.type);
                    model.settingValue.is_sunday_open = checkASettingsResponse(response.appointmentResponse.is_sunday_open);
                    model.settingValue.sunday_two_session = checkASettingsResponse(response.appointmentResponse.sunday_two_session);
                    model.settingValue.is_monday_open = checkASettingsResponse(response.appointmentResponse.is_monday_open);
                    model.settingValue.monday_two_session = checkASettingsResponse(response.appointmentResponse.monday_two_session);
                    model.settingValue.is_tuesday_open = checkASettingsResponse(response.appointmentResponse.is_tuesday_open);
                    model.settingValue.tuesday_two_session = checkASettingsResponse(response.appointmentResponse.tuesday_two_session);
                    model.settingValue.is_wednesday_open = checkASettingsResponse(response.appointmentResponse.is_wednesday_open);
                    model.settingValue.wednesday_two_session = checkASettingsResponse(response.appointmentResponse.wednesday_two_session);
                    model.settingValue.is_thrusday_open = checkASettingsResponse(response.appointmentResponse.is_thrusday_open);
                    model.settingValue.thrusday_two_session = checkASettingsResponse(response.appointmentResponse.thrusday_two_session);
                    model.settingValue.is_friday_open = checkASettingsResponse(response.appointmentResponse.is_friday_open);
                    model.settingValue.friday_two_session = checkASettingsResponse(response.appointmentResponse.friday_two_session);
                    model.settingValue.is_saturday_open = checkASettingsResponse(response.appointmentResponse.is_saturday_open);
                    model.settingValue.saturday_two_session = checkASettingsResponse(response.appointmentResponse.saturday_two_session);
                    model.settingValue.is_active  = checkASettingsResponse(response.appointmentResponse.is_active); 
                }
            });
        }
        /* [ Appointment Settings Save ] */
        function updateAppointmnetSettings(data){            
            AppoinmentSettingsService.save(data).$promise.then(function (response) {
                if (angular.isDefined(response.error)) {
                    if (model.settingValue.type === true) {
                        /* [ Sunday ] */
                        if (model.settingValue.is_sunday_open === true) {
                            if (model.settingValue.sunday_two_session === true) {
                                model.sunday_open_lunch = model.sunday_lunch_resume = model.sunday_resume_close = false;                                 
                                if (response.error.sunday_open_lunch !== undefined) {
                                    model.sunday_open_lunch = $filter("translate")(response.error.sunday_open_lunch);
                                } 
                                if (response.error.sunday_lunch_resume !== undefined) {
                                    model.sunday_lunch_resume = $filter("translate")(response.error.sunday_lunch_resume);
                                } 
                                if (response.error.sunday_resume_close !== undefined) {
                                    model.sunday_resume_close = $filter("translate")(response.error.sunday_resume_close);
                                } 
                            } else {
                                model.sunday_resume_close = false;
                                if (response.error.sunday_open_close !== undefined) {
                                    model.sunday_open_close = $filter("translate")(response.error.sunday_open_close);
                                } else {
                                    model.sunday_open_close = false;
                                }
                            }
                        }
                        /* [ Monday ] */
                        if (model.settingValue.is_monday_open === true) {
                            if (model.settingValue.monday_two_session === true) {
                                model.monday_open_lunch = model.monday_lunch_resume = model.monday_resume_close = false;                                 
                                if (response.error.monday_open_lunch !== undefined) {
                                    model.monday_open_lunch = $filter("translate")(response.error.monday_open_lunch);
                                } 
                                if (response.error.monday_lunch_resume !== undefined) {
                                    model.monday_lunch_resume = $filter("translate")(response.error.monday_lunch_resume);
                                } 
                                if (response.error.monday_resume_close !== undefined) {
                                    model.monday_resume_close = $filter("translate")(response.error.monday_resume_close);
                                } 
                            } else {
                                model.monday_resume_close = model.monday_open_close = false;                                 
                                if (response.error.monday_open_close !== undefined) {
                                    model.monday_open_close = $filter("translate")(response.error.monday_open_close);
                                } 
                            }
                        }
                        /* [ Tuesday ] */
                        if (model.settingValue.is_tuesday_open === true) {
                            if (model.settingValue.tuesday_two_session === true) {
                                model.tuesday_open_lunch = model.tuesday_lunch_resume = model.tuesday_resume_close = false;                                 
                                if (response.error.tuesday_open_lunch !== undefined) {
                                    model.tuesday_open_lunch = $filter("translate")(response.error.tuesday_open_lunch);
                                } 
                                if (response.error.tuesday_lunch_resume !== undefined) {
                                    model.tuesday_lunch_resume = $filter("translate")(response.error.tuesday_lunch_resume);
                                } 
                                if (response.error.tuesday_resume_close !== undefined) {
                                    model.tuesday_resume_close = $filter("translate")(response.error.tuesday_resume_close);
                                } 
                            } else {
                                model.tuesday_resume_close = model.tuesday_open_close = false;                                
                                if (response.error.tuesday_open_close !== undefined) {
                                    model.tuesday_open_close = $filter("translate")(response.error.tuesday_open_close);
                                } 
                            }
                        }
                        /* [ Wednesday ] */
                        if (model.settingValue.is_wednesday_open === true) {
                            if (model.settingValue.wednesday_two_session === true) {
                                model.wednesday_open_lunch = model.wednesday_lunch_resume = model.wednesday_resume_close = false;                                 
                                if (response.error.wednesday_open_lunch !== undefined) {
                                    model.wednesday_open_lunch = $filter("translate")(response.error.wednesday_open_lunch);
                                }
                                if (response.error.wednesday_lunch_resume !== undefined) {
                                    model.wednesday_lunch_resume = $filter("translate")(response.error.wednesday_lunch_resume);
                                } 
                                if (response.error.wednesday_resume_close !== undefined) {
                                    model.wednesday_resume_close = $filter("translate")(response.error.wednesday_resume_close);
                                } 
                            } else {
                                model.wednesday_resume_close = model.wednesday_open_close = false;
                                if (response.error.wednesday_open_close !== undefined) {
                                    model.wednesday_open_close = $filter("translate")(response.error.wednesday_open_close);
                                } 
                            }
                        }
                        /* [ Thrusday ] */
                        if (model.settingValue.is_thrusday_open === true) {
                            if (model.settingValue.thrusday_two_session === true) {
                                model.thrusday_open_lunch = model.thrusday_lunch_resume = model.thrusday_resume_close = false;                                 
                                if (response.error.thrusday_open_lunch !== undefined) {
                                    model.thrusday_open_lunch = $filter("translate")(response.error.thrusday_open_lunch);
                                } 
                                if (response.error.thrusday_lunch_resume !== undefined) {
                                    model.thrusday_lunch_resume = $filter("translate")(response.error.thrusday_lunch_resume);
                                } 
                                if (response.error.thrusday_resume_close !== undefined) {
                                    model.thrusday_resume_close = $filter("translate")(response.error.thrusday_resume_close);
                                } 
                            } else {
                                model.thrusday_resume_close = model.thrusday_open_close = false;
                                if (response.error.thrusday_open_close !== undefined) {
                                    model.thrusday_open_close = $filter("translate")(response.error.thrusday_open_close);
                                } 
                            }
                        }
                        /* [ Friday ] */
                        if (model.settingValue.is_friday_open === true) {
                            if (model.settingValue.friday_two_session === true) {
                                model.friday_open_lunch = model.friday_lunch_resume = model.friday_resume_close = false;                                
                                if (response.error.friday_open_lunch !== undefined) {
                                    model.friday_open_lunch = $filter("translate")(response.error.friday_open_lunch);
                                } 
                                if (response.error.friday_lunch_resume !== undefined) {
                                    model.friday_lunch_resume = $filter("translate")(response.error.friday_lunch_resume);
                                } 
                                if (response.error.friday_resume_close !== undefined) {
                                    model.friday_resume_close = $filter("translate")(response.error.friday_resume_close);
                                } 
                            } else {
                                model.friday_resume_close = model.friday_open_close = false;
                                if (response.error.friday_open_close !== undefined) {
                                    model.friday_open_close = $filter("translate")(response.error.friday_open_close);
                                } 
                            }
                        }
                        /* [ Saturday ] */
                        if (model.settingValue.is_saturday_open === true) {
                            if (model.settingValue.saturday_two_session === true) {
                                model.saturday_open_lunch = model.saturday_lunch_resume = model.saturday_resume_close = false;                                
                                if (response.error.saturday_open_lunch !== undefined) {
                                    model.saturday_open_lunch = $filter("translate")(response.error.saturday_open_lunch);
                                } 
                                if (response.error.saturday_lunch_resume !== undefined) {
                                    model.saturday_lunch_resume = $filter("translate")(response.error.saturday_lunch_resume);
                                } 
                                if (response.error.saturday_resume_close !== undefined) {
                                    model.saturday_resume_close = $filter("translate")(response.error.saturday_resume_close);
                                } 
                            } else {
                                model.saturday_resume_close = model.saturday_open_close = false;
                                if (response.error.saturday_open_close !== undefined) {
                                    model.saturday_open_close = $filter("translate")(response.error.saturday_open_close);
                                } 
                            }
                        }
                    } else {
                        if (model.settingValue.is_two_session === true) {
                            model.open_lunch = model.lunch_resume = model.resume_close = false;                             
                            if (response.error.open_lunch !== undefined) {
                                model.open_lunch = $filter("translate")(response.error.open_lunch);
                            } 
                            if (response.error.lunch_resume !== undefined) {
                                model.lunch_resume = $filter("translate")(response.error.lunch_resume);
                            } 
                            if (response.error.resume_close !== undefined) {
                                model.resume_close = $filter("translate")(response.error.resume_close);
                            } 
                        } else {
                            model.resume_close = model.open_close = false;
                            if (response.error.open_close !== undefined) {
                                model.open_close = $filter("translate")(response.error.open_close);
                            } 
                        }
                    }
                } else {                    
                    model.open_lunch = model.resume_close = model.lunch_resume = model.open_close = model.sunday_open_lunch = model.sunday_resume_close = model.sunday_lunch_resume = model.sunday_open_close = model.monday_open_lunch = model.monday_resume_close = model.monday_lunch_resume = model.monday_open_close = model.tuesday_open_lunch = model.tuesday_resume_close = model.tuesday_lunch_resume = model.tuesday_open_close = model.wednesday_open_lunch = model.wednesday_resume_close = model.wednesday_lunch_resume = model.wednesday_open_close = model.thrusday_open_lunch = model.thrusday_resume_close = model.thrusday_lunch_resume = model.thrusday_open_close = model.friday_open_lunch = model.friday_resume_close = model.friday_lunch_resume = model.friday_open_close = model.saturday_open_lunch = model.saturday_resume_close = model.saturday_lunch_resume = model.saturday_open_close = false;                   
                    if (angular.isDefined(response.Success)) {                        
                        $state.go(ConstantWorkPlaces.state_WorkPlace);                        
                        flashMessage(response.Success,'success');
                    }                    
                }
                $scope.is_disable = false;
            });
        } 
        /* [ State {{UserWorkPlace}} ] */
        if($state.current.name === ConstantWorkPlaces.state_WorkPlace){
            pageTitle('List Workplaces ');            
            getWorkLocation();
            /* [ Delete ] */
            $scope.deleteWorkPlace = function(id){
                if(angular.isDefined(id)){
                    fnDeleteWorkPlace(id);
                    //flashMessage("Workplace deleted successfully",'success');
                }
            };
            /* [ Set Preferred Location ] */
            $scope.setPreferLocation = function(locationid){
               if(angular.isDefined(locationid)){

               } else {
                   $state.reload();
                   flashMessage("Preferred location could not be changed, Please try again",'error'); 
               }
            };
            /*isChecked [ Set Active/Inactive Status ] */
            $scope.setStatus = function(locationid){
                if(angular.isDefined(locationid)){

               } else {
                   $state.reload();
                   flashMessage("Status could not be changed, Please try again",'error'); 
               }
            };
        /* [ State {{UserWorkPlaceAdd}} ] */ 
        } else if($state.current.name === ConstantWorkPlaces.state_WorkPlaceAdd){               
            pageTitle('Add Workplaces');
            getCountries();
            getStates();
            getCities();
            /* [ Save the new work places ] */
            $scope.new_workplace = function(is_valid){
                if(is_valid === true){
					model.workplace.doctor_id = $rootScope.auth.id;
					if(angular.isUndefined(model.workplace.is_active)){
						model.workplace.is_active = false;
					}
					if(angular.isUndefined(model.workplace.is_preferred_location)){
						model.workplace.is_preferred_location = false;
					}
					addWorkLocation(model.workplace);                    
                }
            }; 
        /* [ State {{UserWorkPlaceEdit}} ] */       
        } else if($state.current.name === ConstantWorkPlaces.state_WorkPlaceEdit){          
            if(angular.isDefined($stateParams.id)){
                pageTitle('Edit Workplaces');
				getCountries();
            	getStates();
            	getCities();
                getWorkLocationById($stateParams.id);
                /* [ Save the new work places ] */
                $scope.update_workplace = function(is_valid){
                    if(is_valid === true){
                        model.workplace.doctor_id = $rootScope.auth.id;
						if(angular.isUndefined(model.workplace.is_active)){
							model.workplace.is_active = false;
						}
						if(angular.isUndefined(model.workplace.is_preferred_location)){
							model.workplace.is_preferred_location = false;
						}	
                        updateWorkLocationById($stateParams.id,model.workplace);
                    }
                };  
            } else {
                $state.go(ConstantWorkPlaces.state_WorkPlace);
            }
        /* [ State {{UserAppoinmentSettings}} ] */    
        } else if($state.current.name === ConstantWorkPlaces.state_AppoinmentSettings){
            pageTitle('List Appoinment Settings ');  
            if(angular.isDefined($state.params.locationid)){
                pageTitle('List My Appoinment Modifications');
                model.locationid = $state.params.locationid;             
                getWorkLocationById(model.locationid);
                //getAppoinments();

                /* [ Appoinment Settings - List ] */  
                calendarSlots();
                getAppointmentSettingsData(model.locationid);
                /* [ Appoinment Settings - Update  ] */
                model.settingUpdate = function($valid) {
                    if ($valid) {
                        $scope.is_disable = true;
                        model.settingValue.work_place_id = model.locationid;
                        model.settingValue.nowtimezone = moment(new Date()).format('Z');
                        updateAppointmnetSettings(model.settingValue);                        
                    }
                };                
                /* [ Delete ] */
                $scope.deleteWorkPlace = function(id){
                    if(angular.isDefined(id)){
                        fnDeleteWorkPlace(id);
                    }
                };
            } else {
               $state.go(ConstantWorkPlaces.state_WorkPlace);  
            }
        /* [ State {{UserAppoinmentModification}} ] */    
        } else if($state.current.name === ConstantWorkPlaces.state_AppoinmentModification){
            if(angular.isDefined($state.params.locationid)){
                pageTitle('List Appoinment Modifications');
                model.locationid = $state.params.locationid;             
                getWorkLocationById(model.locationid);
                getAppoinmentModification(model.locationid);
                /* [ Delete ] */
                $scope.deleteWorkPlace = function(id){
                    if(angular.isDefined(id)){
						fnDeleteWorkPlace(id);
                    }
                };
            } else {
               $state.go(ConstantWorkPlaces.state_WorkPlace);  
            }            
        /* [ State {{UserAppoinmentModificationCreate}} ] */       
        } else if($state.current.name === ConstantWorkPlaces.state_AppoinmentModificationCreate){
            pageTitle('Create Appoinment Modifications');
            if(angular.isDefined($state.params.locationid)){
				getTimeSlot();
				model.locationid = $state.params.locationid; 
                getWorkLocationById(model.locationid);
                /* [ Save Appoinment Settings ] */
                $scope.saveAppoinmentModification = function(is_valid){
                    if(is_valid === true){
						model.appoinmentmodification_add.appoint_date = dateFilter(model.appoinmentmodification_add.appoint_date);
						model.appoinmentmodification_add.work_place_id = model.locationid;
						addAppoinmentModification(model.appoinmentmodification_add);
                    }
                };
            } else {
                $state.go(ConstantWorkPlaces.state_WorkPlace); 
            }
        /* [ State {{UserAppoinmentModificationUpdate}} ] */       
        } else if($state.current.name === ConstantWorkPlaces.state_AppoinmentModificationUpdate){
            pageTitle('Update Appoinment Modifications');
            if(angular.isDefined($state.params.locationid) && angular.isDefined($state.params.id)){
                model.locationid = $state.params.locationid;
				getTimeSlot();
                model.id = $state.params.id;
                getWorkLocationById(model.locationid);
                getAppoinmentModificationById(model.id);  
				
				/* [ update Appoinment Settings ] */
                $scope.updateAppoinmentModification = function(is_valid){
                    if(is_valid === true){      
                        model.appoinmentmodification_update.work_place_id = model.locationid;                  
                        updateAppoinmentModification(model.id,model.appoinmentmodification_update);
                    }
                };
            } else {
                $state.go(ConstantWorkPlaces.state_WorkPlace); 
            }
        /* [ State {{UserWorkPlace}} ] */                                 
        } else {
           $state.go(ConstantWorkPlaces.state_WorkPlace); 
        }
        model.manualAddress = function () {
            var addr = {};
			var geocoder = new google.maps.Geocoder();
			geocoder.geocode({
				'address': model.workplace.address1
			}, function (results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					if (results.length >= 1) {
                        var fullAddress = "";
						for (var ii = 0; ii < results[0].address_components.length; ii++) {
							var street_number, route, street, city, state, zipcode, country, formatted_address, latitude, longitude = '';
							model.workplace.latitude = results[0].geometry.location.lat();
							model.workplace.longitude = results[0].geometry.location.lng();
							var types = results[0].address_components[ii].types.join(",");
							if (types == "street_number") {
								fullAddress+= addr.street_number = results[0].address_components[ii].long_name;
							}
							if (types == "route" || types == "point_of_interest,establishment") {
								addr.route = results[0].address_components[ii].long_name;
							}
							if (types == "sublocality,political" || types == "locality,political" || types == "neighborhood,political" || types == "administrative_area_level_3,political") {
								fullAddress+= addr.city = (city === '' || types == "locality,political") ? results[0].address_components[ii].long_name : city;
							}
							if (types == "administrative_area_level_1,political") {
								fullAddress+= addr.state = results[0].address_components[ii].short_name;
							}
							if (types == "postal_code" || types == "postal_code_prefix,postal_code") {
								addr.zipcode = results[0].address_components[ii].long_name;
							}
							if (types == "country,political") {
								fullAddress+= addr.country = results[0].address_components[ii].long_name;
							}
						}
                        //model.workplace.postal_code = addr.zipcode;
                        //model.workplace.address1 = fullAddress;
					} else {
						Flash.set($filter("translate")("Could not be found your address. Please, try again."), 'error', false);
					}
				} else {
                    Flash.set($filter("translate")("Could not be found your address. Please, try again."), 'error', false);
				}
			});
        };
    });
}(angular.module("Abs.userworkplace")));