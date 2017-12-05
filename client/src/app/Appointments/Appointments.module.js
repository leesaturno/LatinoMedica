/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */ 
(function(module) {
    module.directive('uibgroupExport',['$state','Flash','AppointmentExport', function ($state, Flash, AppointmentExport) {
        return {
            restrict: 'E',
            scope :{
                islength : '='
            },            
            controller: function($rootScope,$scope,ConstUserType,$sce,$timeout, Flash) {
                var model = this;                             
                $timeout(function(){
					model.name = "Export";					
					model.isLengthTrue = true;                    
					$scope.items = ['The first choice!', 'And another choice for you.', 'but wait! A third!'];
					$scope.status = {
						isopen: false
					};                
					$scope.toggleDropdown = function($event) {
						$event.preventDefault();
						$event.stopPropagation();
						$scope.status.isopen = !$scope.status.isopen;
					};
					$scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));  
					if($rootScope.auth.role_id === ConstUserType.Doctor){                  
					   model.htmlcontent = $sce.trustAsHtml('<li role="menuitem"><a href="javascript:void(0)" ng-click="exportService(all, excel)> <i title="Excel" class="fa fa-file-excel-o text-success" aria-hidden="true"></i> XLS</a></li><li><a href="javascript:void(0)" ng-click="exportService(all, pdf)" target="_blank"> <i title="Pdf" class="fa fa-file-pdf-o text-danger" aria-hidden="true"></i> PDF</a></li>');                    
					} else if($rootScope.auth.role_id === ConstUserType.User){
					   model.htmlcontent = $sce.trustAsHtml('<li role="menuitem"><a href="javascript:void(0)" ng-click="exportService(\'all\', \'excel\')"><i title="Excel" class="fa fa-file-excel-o text-success" aria-hidden="true"></i> XLS</a></li><li role="menuitem"><a href="javascript:void(0)" ng-click="exportService(\'all\', \'pdf\')"><i title="Pdf" class="fa fa-file-pdf-o text-danger" aria-hidden="true"></i> PDF</a></li>');  
					}
					
					
                },1000);
            },
			link: function (scope, elem, attr) {
				scope.exportService = function (type, format) {
						AppointmentExport.export({type:type, format:format}).$promise.then(function (response) {
							if (angular.isDefined(response)) {
								$state.go('Appointments', {}, { reload:true });
								Flash.set("Success", 'success');
							} else {
								$state.go('Appointments', {}, { reload:true });
								Flash.set("Error occured. please try again later", 'error');
							}

						});
					};
				
			},
			controllerAs: "model",            
            template: '<div ng-show="model.isLengthTrue === true" class="btn-group" uib-dropdown is-open="status.isopen"><button id="single-button" type="button" class="btn btn-primary" uib-dropdown-toggle ng-disabled="disabled"> {{model.name}} <span class="caret"></span></button><ul class="dropdown-menu" uib-dropdown-menu role="menu" aria-labelledby="single-button"><li role="menuitem"><a href="/api/appointments/export/all/excel?token='+localStorage.userToken+'" target="_blank"><i title="Excel" class="fa fa-file-excel-o text-success" aria-hidden="true"></i> XLS</a></li><li role="menuitem"><a href="/api/appointments/export/all/pdf?token='+localStorage.userToken+'" target="_blank"><i title="Pdf" class="fa fa-file-pdf-o text-danger" aria-hidden="true"></i> PDF</a></li></ul></div>',
        };
    }]);
    module.config(function ($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('AppointmentSetting', {
            url: '/appointments/settings',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AppointmentsSettingController as model',
                    templateUrl: 'Appointments/appointment_setting.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('appointmentModification',{
            url:'/appointments/modifications',
            authenticate: true,
            views:{
                "main":{
                    controller: 'AppointmentsModificationController as model',
                    templateUrl: 'Appointments/appointment_modifications.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('appointmentModificationAdd',{
            url:'/appointments/modifications/add',
            authenticate:true,
            views:{
                "main":{
                    controller:'AppointmentsModificationController as model',
                    templateUrl: 'Appointments/appointment_modifications_add.tpl.html',
                    resolve: ResolveServiceData
                }
            }
            
        }).state('appointmentModificationDelete',{
            url:'/appointments/modifications/delete/{id}',
            authenticate:true,
            views:{
                "main":{
                    controller:'AppointmentsModificationController as model',
                    resolve: ResolveServiceData
                }
            }
            
        }).state('appointmentModificationEdit',{
            url:'/appointments/modifications/edit/{id}',
            authenticate:true,
            views:{
                "main":{
                    controller:'AppointmentsModificationController as model',
                    templateUrl: 'Appointments/appointment_modifications_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('Appointments', {
            url: '/appointments/{type}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AppointmentsController as model',
                    templateUrl: 'Appointments/appointment_index.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('MyAppointments', {
            url: '/appointments/all',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AppointmentsController as model',
                    templateUrl: 'Appointments/appointment_index.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('AppointmentDetail', {
            url: '/appointment/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AppointmentsController as model',
                    templateUrl: 'Appointments/appointment_view.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('AppointmentBooking', {
            url: '/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}',
            authenticate: false,
            views: {
                "main": {
                    controller: 'BookingController as model',
                    templateUrl: 'Appointments/appointment_booking_appt_info.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('AppointmentBookingStep2', {
            url: '/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}/step2',
            authenticate: true,
            views: {
                "main": {
                    controller: 'BookingController as model',
                    templateUrl: 'Appointments/appointment_booking_patient_info.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('AppointmentBookingStep3', {
            url: '/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}/step3',
            authenticate: true,
            views: {
                "main": {
                    controller: 'BookingController as model',
                    templateUrl: 'Appointments/appointment_booking_details.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        }).state('AppointmentBookingStep4', {
            url: '/appointments/booking/{doctorid}/{apt_date}/{apt_time}/{workplaceid}/final',
            authenticate: true,
            views: {
                "main": {
                    controller: 'BookingController as model',
                    templateUrl: 'Appointments/appointment_booking_confirm.tpl.html',
                    resolve: ResolveServiceData
                }
            } 
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.appointments", [
    'ui.router',
    'ngResource',
    'mgcrea.ngStrap',
    'uiSwitch',
    'oitozero.ngSweetAlert',
    'ui.bootstrap',
    'localytics.directives'
])));
