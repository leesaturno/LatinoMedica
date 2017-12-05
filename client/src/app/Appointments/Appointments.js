(function (module) {
    module.controller('AppointmentsController', function ($scope, $state, $filter, $rootScope, $location, Flash, ConstUserType, ConstAppointmentStatus, SweetAlert, AppointmentFactory, appointmentView, changeStatus, AppointmentExport, $uibModal, $uibModalStack, RemainderService, DoctorAppointment, patientReviewAdd, ActivityCount) {
        var model = this;
        $scope.maxSize = 5;
        var params = {};
        /* [ POST - remainder ] */
        function addRemainder(data) {
            RemainderService.post(data).$promise.then(function (response) {
                if (angular.isDefined(response)) {
                    /* [ Success Response ] */
                    if (response.Success) {
                        $rootScope.closeModal();
                        $state.go('AppointmentDetail', { id: $state.params.id }, { reload:true });
                        Flash.set("Remainder added successfully", 'success');
                    } else if (response.message) {
						$state.go('AppointmentDetail', { id: $state.params.id }, { reload:true });
                        Flash.set(response.message, 'error');
                    }
                    else {
						$state.go('AppointmentDetail', { id: $state.params.id }, { reload:true });
                        Flash.set("Please try again", 'error');
                    }
                }
            });
        }
        
		function getAppoinmentListYear (param) {
			$scope.appointmentsLength = false;
            $scope.appointment_formatteds = [];
			$scope.appointment_formatteds_year = [];
            param = { 'type': $state.params.type, 'page': $scope.currentPage };
            AppointmentFactory.get(param).$promise.then(function (response) {
				$scope.appointments = response.data;
                angular.forEach($scope.appointments, function (value, key) {
					var appDate = new Date(value.appointment_date);
					if (typeof($scope.appointment_formatteds[appDate.getFullYear()]) === 'undefined' ) {
						$scope.appointment_formatteds[appDate.getFullYear()] = [];
						$scope.appointment_formatteds_year.push(appDate.getFullYear());
						$scope.appointment_formatteds[appDate.getFullYear()].push({id: value.id, value:value});
					} else {
						$scope.appointment_formatteds[appDate.getFullYear()].push({id: value.id, value:value});
					}
                    
                });
                $scope.appointment_formatteds = $scope.appointment_formatteds.reverse();
                $scope._metadata = response.meta.pagination;               
            });
		}
        $scope.patientReviewAdd = function (userID,AppointID) {
            SweetAlert.swal({
                    title: "Are you sure to rating for this appointment ?",
                    text: "",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Confirm",
                    cancelButtonText: "No",
                    closeOnConfirm: true,
                    closeOnCancel: true
                },
                    function (isConfirm) {
                        if (isConfirm) {
                            model.reviewRate.patient_id = userID;
                            model.reviewRate.appointment_id = AppointID;
                            model.reviewRate.rating_option_id = 1;
                            patientReviewAdd.post(model.reviewRate).$promise.then(function (response) {
                                if (response.Success) {
									$state.go('AppointmentDetail', { id: $state.params.id }, { reload:true });
                                    Flash.set(response.Success, 'success');
                                } else {
									$state.go('AppointmentDetail', { id: $state.params.id }, { reload:true });
                                    Flash.set(response.Failed, 'error');
                                }
                            });
                        }
                    });
            
        };
        model.init = function () {
            model.ConstUserType = ConstUserType;
            model.ConstAppointmentStatus = ConstAppointmentStatus;
            ActivityCount.get().$promise.then(function (response) {
                $rootScope.activityCount = response.data.total_count;

            });
            $scope.currentPage = ($scope.currentPage !== undefined) ? parseInt($scope.currentPage) : 1;
            $state.params.type = ($state.params.type !== undefined) ? $state.params.type : 'all';
            if ($state.current.name == 'Appointments') {
                $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Appointments Details");
                $scope.getAppointmentListYear();
            } else if (($state.current.name == 'AppointmentDetail')) {
                $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Appointment Details");
                appointmentView.get({ id: $state.params.id }).$promise.then(function (response) {
                    $scope.todayDateTime = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');
                    $scope.appointmentDateTime = response.appointment_date + ' ' + response.appointment_time;
                    $scope.appointment = response;
                    $scope.appointment.doctor_note = (response.doctor_note === null) ? '--' : response.doctor_note;
                    $scope.appointment.patient_note = (response.patient_note === null) ? '--' : response.patient_note;
                    if ($rootScope.auth.role_id == ConstUserType.Doctor) {
                        $scope.appointmentUser = response.user;
                        model.patientId = response.user.id;
                        model.appointmentId = response.id;
                        DoctorAppointment.get({
                            id: model.patientId,
                            appointment_id : model.appointmentId
                        }).$promise.then(function (Appointmentresponse) { 
                            if (Appointmentresponse.data) {
                                model.doctorReview = Appointmentresponse.data[0];
                                model.reviewRate = model.doctorReview;
                                model.reviewRate.isvisited = true;                                
                            } else {
                                model.reviewRate.isvisited = false;
                            }
                        });
                    } else {
                        $scope.appointmentUser = response.user;
                        $scope.appointmentUser = response.doctor_user;
                        $scope.appointmentUser.user_profile.dr_title = ($scope.appointmentUser.user_profile.dr_title === null) ? '' : $scope.appointmentUser.user_profile.dr_title;
                    }
                });
            }

            $scope.changeappointstatus = function (status) {
                if (status == 'confirm') {
                    titleText = "Are you sure to Confirm this Appointment?";
                } else if (status == 'decline') {
                    titleText = "Are you sure to Decline this Appointment?";
                } else if (status == 'cancel') {
                    titleText = "Are you sure to Cancel this Appointment?";
                }
                SweetAlert.swal({
                    title: titleText,
                    text: "",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Confirm",
                    cancelButtonText: "No",
                    closeOnConfirm: true,
                    closeOnCancel: true
                },
                    function (isConfirm) {
                        if (isConfirm) {
                            changeStatus.get({ id: $state.params.id, apt_status: status }).$promise.then(function (response) {
                                Flash.set($filter("translate")(response.Success), 'success', true);
                                $location.path('/appointments/all');
                            });
                        }
                    });
            };
       
		$scope.appointstatuschange = function (status, id) {
                if (status == 'confirm') {
                    titleText = "Are you sure to Confirm this Appointment?";
                } else if (status == 'decline') {
                    titleText = "Are you sure to Decline this Appointment?";
                } else if (status == 'cancel') {
                    titleText = "Are you sure to Cancel this Appointment?";
                }
                SweetAlert.swal({
                    title: titleText,
                    text: "",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Confirm",
                    cancelButtonText: "No",
                    closeOnConfirm: true,
                    closeOnCancel: true
                },
                    function (isConfirm) {
                        if (isConfirm) {
                            changeStatus.get({ id: id, apt_status: status }).$promise.then(function (response) {
                                Flash.set($filter("translate")(response.Success), 'success', true);
                                $location.path('/appointments/all');
                            });
                        }
                    });
            };
        };
        $scope.showModal = function () {
            $scope.modalInstance = $uibModal.open({
                templateUrl: 'Appointments/appointment_remainder.tpl.html',
                animation: true,
                controller: function ($scope, $rootScope, $stateParams, $filter, $state, $uibModal, patientId) {
                    var model = this;
					/**
					 * @ngdoc method
					 * @name AppointmentsController.remainder.submit
					 * @methodOf module.AppointmentsController
					 * @description
					 * This method is post the remainder data.
					 */
                    $scope.remainder_add = function ($valid) {
                        if ($valid) {
                            model.remainder.doctor_id = $rootScope.auth.id;
                            model.remainder.patient_id = patientId;
                            addRemainder(model.remainder);
                        }
                    };
                },
                controllerAs: 'model',
                resolve: {
                    patientId: function () {
                        return model.patientId;
                    }

                },
                size: 'lg'
            });
        };
		/*
		--Popup close
		*/
        $rootScope.closeModal = function () {
            $uibModalStack.dismissAll();
        };
        $scope.getAppointmentList = function () {
            $scope.appointmentsLength = false;
            param = { 'type': $state.params.type, 'page': $scope.currentPage };
            AppointmentFactory.get(param).$promise.then(function (response) {
                $scope.appointments = response.data;
                if (Object.keys(response.data).length > 0) {
                    $scope.appointmentsLength = (Object.keys(response.data).length > 0) ? true : false;
                }
                $scope._metadata = response.meta.pagination;
            });
        };
        $scope.getAppointmentListYear = function () {
            $scope.appointmentsLength = false;
            $scope.appointment_formatteds = [];
			$scope.appointment_formatteds_year = [];
            param = { 'type': $state.params.type, 'page': $scope.currentPage };
            AppointmentFactory.get(param).$promise.then(function (response) {
				$scope.appointments = response.data;
				if (Object.keys(response.data).length > 0) {
                    $scope.appointmentsLength = (Object.keys(response.data).length > 0) ? true : false;
                }
                angular.forEach($scope.appointments, function (value, key) {
					var appDate = new Date(value.appointment_date);
					var toDate = new Date();
					$scope.year_condition = toDate.getFullYear();
					var upComing = '';
					if (appDate > toDate) {
						upComing = '1';
					} else {
						upComing = '0';
					}
					if (typeof($scope.appointment_formatteds[appDate.getFullYear()]) === 'undefined' ) {
						$scope.appointment_formatteds[appDate.getFullYear()] = [];
						$scope.appointment_formatteds_year.push(appDate.getFullYear());
						$scope.appointment_formatteds[appDate.getFullYear()].push({id: value.id, value:value, appdate:appDate, upComing:upComing});
					} else {
						$scope.appointment_formatteds[appDate.getFullYear()].push({id: value.id, value:value, appdate:appDate, upComing:upComing});
					}
                    
                });
                $scope.appointment_formatteds = $scope.appointment_formatteds.reverse();
				$scope._metadata = response.meta.pagination;
            });
        };
		
		
        /**
         * @ngdoc method
         * @name paginate
         * @methodOf appointments.controller:AppointmentsController
         * @description
         *
         * This method will be load pagination the pages.
         **/
        $scope.paginate = function (pageno) {
            $scope.currentPage = parseInt($scope.currentPage);
            $scope.getAppointmentListYear();
        };
        model.init();
    });
}(angular.module("Abs.appointments")));