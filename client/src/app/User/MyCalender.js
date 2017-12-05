(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:CalenderController
     * @description
     *
     * This is dashboard controller. It contains all the details about the user. It fetches the data of the user by using AuthFactory.
     **/
    module.controller('CalenderController', function ($scope, $state, $filter, $rootScope, $location, $compile, $timeout, Flash, SweetAlert, $uibModal, $uibModalStack, calenderEvents, calenderEventsDoctor, DoctorReviewCheck, appointmentchangeStatus, calenderCancelToday, patientNote, changeStatus, RemainderService, ConstUserType) {
        var model = this;
        $scope.month = moment().format('MMM');
        model.calendarView = 'month';
        model.viewDate = new Date();
        model.isCellOpen = true;
        $scope.dt = new Date();
        $scope.options = {
            showWeeks: true
        };
        $scope.$watch("dt", function(newValue, oldValue) {
            $scope.getDateWiseAppointment();
        });
        $scope.$watch("model.calendarView", function (currentView) {
            $timeout(function () {
                if (currentView === 'day') {
                    classElement = document.getElementsByClassName("day-highlight");
                    if (classElement.length > 0) {
                        /* For Slot View Change */
                        angular.forEach(classElement, function (value, key) {
                            var spans = value.getElementsByTagName("span");
                            var span4th = spans[3].innerHTML;
                            var pixel = span4th.replace(':', '') + 'px';
                            value.style.top = pixel;
                        });
                    }
                }
            }, 1000);
        });
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Calender");
            model.ConstUserType = ConstUserType;
        };
        $scope.getDateWiseAppointment = function () {
            var params = {
                date:$filter('date')($scope.dt, "yyyy-MM-dd")
            };
            $scope.calendarDatas = "";
            $scope.dataLength = true;
            calenderEventsDoctor.get(params)
                .$promise.then(function (response) {
                    if (angular.isDefined(response.status) && response.status == 'success' && response.data.length > 0) {
                        $scope.calendarDatas = response.data;                        
                        $scope.workplaceChange = $scope.calendarDatas[0].workplace.id;
                       /* DoctorReviewCheck.get({
                            id: model.patientId
                        }).$promise.then(function (Appointmentresponse) { 
                            if (Appointmentresponse.data) {
                                model.doctorReview = Appointmentresponse.data[0];
                                model.reviewRate = model.doctorReview;
                                model.reviewRate.isvisited = true;                                
                            } else {
                                model.reviewRate.isvisited = false;
                            }
                        });*/
                    } else {
                        $scope.calendarEmpty = response.message;
                        $scope.dataLength = false;
                    }
                });
        };
		/*
		-Cancel today appointments
		*/
		$scope.cancelTodayAppointment = function (appointment_date) {
            var params = {
                date:appointment_date
            };
			SweetAlert.swal({
                    title: 'Are you sure to Cancel today Appointments?',
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
							calenderCancelToday.get(params)
								.$promise.then(function (response) {
									$state.go('MyCalender', {}, { reload:true });
									Flash.set($filter("translate")(response.Success), 'success', true);
							});
						}
				});
		};
		/*
		-DoctorNote Modal popup
		*/
		$scope.doctorNote = function (appointmentId) {
            $scope.modalInstance = $uibModal.open({
                templateUrl: 'User/doctor_note.tpl.html',
                animation: true,
                controller: function ($scope, $rootScope, $stateParams, $filter, $state, $uibModal) {
                    var model = this;
					/**
					 * @ngdoc method
					 * @name AppointmentsController.remainder.submit
					 * @methodOf module.AppointmentsController
					 * @description
					 * This method is post the remainder data.
					 */
					$scope.note_add = function ($valid) {
                        if ($valid) {
                            model.remainder.appointment_id = appointmentId;
							patientNote.post(model.remainder)
								.$promise.then(function (response) {
									$rootScope.notecloseModal();
									$state.go('MyCalender', {}, { reload:true });
									Flash.set($filter("translate")(response.Success), 'success', true);
							});
                        }
                    };
                },
                controllerAs: 'model',
                size: 'lg'
            });
        };
		$rootScope.notecloseModal = function () {
            $uibModalStack.dismissAll();
        };
        $scope.showAction = function (index) {
            var myEl = angular.element( document.querySelector( '#tgle-'+index ) );
            var multiRemove = angular.element(document.getElementsByClassName("js-action-remove"));           
            if (myEl.hasClass("disp-block")) {
                myEl.removeClass('disp-block');
            } else {
                multiRemove.removeClass('disp-block');
                myEl.addClass('disp-block');
            }
        };
        $scope.showNoteModal = function (appointmentId) {
            $scope.modalInstance = $uibModal.open({
                templateUrl: 'Appointments/appointment_note.tpl.html',
                animation: true,
                controller: function ($scope, $rootScope, $stateParams, $filter, $state, $uibModal) {
                    var model = this;
					/**
					 * @ngdoc method
					 * @name AppointmentsController.remainder.submit
					 * @methodOf module.AppointmentsController
					 * @description
					 * This method is post the remainder data.
					 */
                    $scope.remainder_note_add = function ($valid) {
                        if ($valid) {
                            model.remainder.doctor_note = model.remainder.reminder_text;
                            model.remainder.doctor_id = $rootScope.auth.id;
                            model.remainder.appointment_id = appointmentId;
                            patientNote.post(model.remainder).$promise.then(function (response) {
                                if (response.Success) {
                                    $rootScope.notecloseModal();                                    
									Flash.set($filter("translate")(response.Success), 'success', true);
                                    $state.go('MyCalender', {}, { reload:true });
                                } else {
                                    Flash.set($filter("translate")(response.Failed), 'error');
                                }
                            });

                        }
                    };
                },
                controllerAs: 'model',
                size: 'lg'
            });
        };
        $scope.deleteStatus = function (status) {
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
        $scope.getEvent = function (params) {
            calenderEvents.get(params).$promise.then(function (response) {
                model.events = eventBuild(response);
                $scope.prevMonth = response.prevMonth;
                $scope.nextMonth = response.nextMonth;
            });
        };
        $scope.prev = function () {
            $scope.getEvent({ month: $scope.prevMonth });
        };
        $scope.today = function () {
            $scope.getEvent({});
        };
        $scope.next = function () {
            $scope.getEvent({ month: $scope.nextMonth });
        };
        model.eventClicked = function (event) {
            $location.path('/appointment/' + event.id);
        };
        model.toggle = function ($event, field, event) {
            $event.preventDefault();
            $event.stopPropagation();
            event[field] = !event[field];
        };
        Date.prototype.subHours = function (h) {
            this.setHours(this.getHours() - h);
            return this;
        };
        $scope.setEvent = function (eventsLists, appointmentEvent) {
            $.each(appointmentEvent, function (index) {
                eventsList = {
                    title: appointmentEvent[index].first_name + ' ' + appointmentEvent[index].last_name,
                    type: 'info',
                    startsAt: moment(appointmentEvent[index].appointment_date + ' ' + appointmentEvent[index].appointment_time).toDate(),
                    draggable: false,
                    resizable: false,
                    editable: false,
                    deletable: false,
                    id: appointmentEvent[index].id
                };
                eventsLists.push(eventsList);
            });
            return eventsLists;
        };

        function eventBuild(response) {
            var eventsLists = [];
            if (response.appointmentEvent) {
                appointmentEvent = response.appointmentEvent;
                eventsLists = $scope.setEvent(eventsLists, appointmentEvent);
            }
            if (response.leaveEvent) {
                leaveEvent = response.leaveEvent;
                eventsLists = $scope.setEvent(eventsLists, leaveEvent);
            } else {
                eventsLists = '';
            }
            return eventsLists;
        }
		
		$scope.appointdelete = function (status, id) {
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
                            appointmentchangeStatus.get({ id: id, apt_status: status }).$promise.then(function (response) {
                                if (angular.isDefined(response)) {
                                	$state.go('MyCalender', {}, { reload:true });
									Flash.set($filter("translate")(response.Success), 'success', true);
								} else {
									$state.go('MyCalender', {}, { reload:true });
									Flash.set($filter("translate")(response.Success), 'error', true);
								}
                            });
                        }
                    });
            };
		
        model.init();
    })
    /* If  the Day View Time Format Need to 12 Hour Uncomment the below code mugundhan_352at15 */
    /* .config(function(calendarConfig) {
        calendarConfig.dateFormatter = 'moment';
        calendarConfig.allDateFormats.moment.date.hour = 'HH:mm';
    }) */;
}(angular.module("Abs.user")));