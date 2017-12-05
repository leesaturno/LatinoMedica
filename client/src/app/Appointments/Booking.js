(function (module) {
    module.controller('BookingController', function ($scope, $http, $state, $filter, $auth, $rootScope, $location, AuthFactory, Flash, SweetAlert, BookingAppointment, ConstUserType, AppointmentBookingAdd, Gender, DoctorInsuranceList, FamilyFriendsList, FamilyFriendsSingle) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Booking");
            model.ConstUserType = ConstUserType;
            if (!$auth.isAuthenticated()) {
                //Flash.set($filter("translate")('Login and Continue to Booking the doctor'), 'error', false);
                localStorage.bookingUrl = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time + '/' + $state.params.workplaceid;
                //$location.path('/users/login');
                $state.go('AppointmentBooking', { doctorid: $state.params.doctorid, apt_date: $state.params.apt_date, apt_time: $state.params.apt_time, workplaceid: $state.params.workplaceid });
            }
            $scope.appt_time = $state.params.apt_time;
            $scope.appt_date = $state.params.apt_date;
            $scope.dobDateLimit = $filter('date')(new Date(), "yyyy-MM-dd");
        };
        model.init();
        Gender.genderList({}).$promise.then(function (genderResponse) {
            model.genderList = genderResponse.data;
        });
        BookingAppointment.get({
            doctorid: $state.params.doctorid,
            apt_date: $state.params.apt_date,
            apt_time: $state.params.apt_time,
            workplaceid: $state.params.workplaceid
        }).$promise.then(function (response) {
            $scope.doctorProfile = response.doctor_profile.data;
            $scope.doctorSpecialtyDiseases = response.doctor_specialty_diseas;
            if ($state.current.name == 'AppointmentBooking') {
                $scope.stepStatus = 1;
                model.diseasList = response.doctor_specialty_diseas;
                $rootScope.reasonToVisit = "";
                model.formFields = {
                    is_seen_before: 1
                };
            }
            if ($state.current.name == 'AppointmentBookingStep2') {
                $scope.stepStatus = 2;
                Gender.genderList({}).$promise.then(function (genderResponse) {
                    model.genderList = genderResponse.data;
                });
                FamilyFriendsList.get({ user_id: $rootScope.auth.user_id }).$promise.then(function (response) {
                    model.friendsLists = response.data;
                });
                model.formValue = {
                    is_guest_appointment: 1,
                    first_name: $rootScope.auth.user_profile.first_name,
                    last_name: $rootScope.auth.user_profile.last_name,
                    postal_code: $rootScope.auth.user_profile.postal_code,
                    phone: $rootScope.auth.user_profile.phone,
                    gender_id: parseInt($rootScope.auth.user_profile.gender_id)
                };
            }
            if ($state.current.name == 'AppointmentBookingStep3') {
                $scope.stepStatus = 3;
                model.formValue = {
                    phone: $rootScope.auth.user_profile.phone
                };
            }
            if ($state.current.name == 'AppointmentBookingStep4') {
                $scope.stepStatus = 4;
                /* For Get all the Values and Covert to Objects */
                var step1Val = JSON.parse(window.atob(localStorage.bookingValueS1)),
                    step2Val = JSON.parse(window.atob(localStorage.bookingValueS2));
                /* var step3Val = JSON.parse(window.atob(localStorage.bookingValueS3)); */
                if (parseInt(step2Val.is_guest_appointment) === 1) {
                    $scope.name = step2Val.first_name + ' ' + step2Val.last_name;
                    $scope.mobile = step2Val.phone;
                    $scope.email = $rootScope.auth.email;
                    $scope.dob = $rootScope.auth.user_profile.dob;
                    if (step2Val.gender_id === 1) {
                        $scope.gender = 'Male';
                    } else {
                        $scope.gender = 'Female';
                    }
                } else if (angular.isDefined(step2Val.family_friend_id)) {
                    FamilyFriendsSingle.get({
                        id: step2Val.family_friend_id
                    })
                        .$promise.then(function (response) {
                            if (angular.isDefined(response.id)) {
                                $scope.name = response.first_name;
                                if (response.mobile !== null) {
                                    $scope.mobile = response.mobile;
                                } else {
                                    $scope.mobile = "No Data";
                                }
                                $scope.email = $rootScope.auth.email;
                                if (parseInt(response.gender_id) === 1) {
                                    $scope.gender = 'Male';
                                } else {
                                    $scope.gender = 'Female';
                                }
                            } else {
                                $scope.name = "No Data";
                                $scope.mobile = "No Data";
                                $scope.email = "No Data";
                                $scope.gender = "No Data";
                            }
                        });

                } else {
                    $scope.name = step2Val.guest_first_name + ' ' + step2Val.guest_last_name;
                    $scope.mobile = step2Val.phone;
                    $scope.email = step2Val.guest_email;
                    $scope.dob = step2Val.guest_dob;
                    if (step2Val.guest_gender_id === 1) {
                        $scope.gender = 'Male';
                    } else {
                        $scope.gender = 'Female';
                    }
                }
                $scope.dob = (angular.isDefined($scope.dob) && $scope.dob !== '0000-00-00') ? $filter('date')(new Date($scope.dob), 'MMM dd, yyyy') : '--';
            }
        });
		/**
         * @ngdoc method
         * @name login
         * @methodOf user.controller:UserLoginController
         * @description
         * This method will validate the credentials and log in the user at the time of appointment booking.
         *
         * @param {Boolean} isvalid Boolean flag to indicate whether the function call is valid or not
         **/
        model.login = function (isvalid) {
            if (isvalid) {
                var credentials = {
                    email: model.email,
                    password: model.password
                };
                // Use Satellizer's $auth service to login
                /**
                 * @ngdoc service
                 * @name user.login
                 * @kind function
                 * @description
                 * The auth service get the credentials from the user and validate it.
                 * @params {string=} credentials login credentials provided by the user
                 **/
                $auth.login(credentials).then(function (response) {
                    // If login is successful, redirect to the home page
                    if (response.data.userToken) {
                        $translate = $filter("translate")("Login successfully");
                        Flash.set($translate, 'success', true);
                        AuthFactory.fetch().$promise.then(function (user) {
                            $rootScope.auth = user;
                            /* For Redirect when the patient booking docotor*/
                            if (localStorage.bookingUrl) {
                                $state.reload();
                            } else {
                                $state.go('MyAppointments');
                            }

                        });
                    }
                }).catch(function (error) {
                    Flash.set($filter("translate")("Sorry, login failed. Your email or password are incorrect."), 'error', false);
                });
            }
        };

        /**
        * @ngdoc method
        * @name signup
        * @methodOf user.controller:UserRegisterController
        * @description
        * This method will validate the credentials and signup the user at the time of appointment booking.
        *
        * @param {Boolean} isvalid Boolean flag to indicate whether the function call is valid or not
        **/
        model.signup = function (isvalid) {
            if (isvalid && model.password == model.confirm_password) {
                var credentials = {
                    first_name: model.first_name,
                    last_name: model.last_name,
                    username: model.username,
                    email: model.email,
                    password: model.password,
                    confirm_password: model.confirm_password,
                    dob: model.year + '-' + model.month + '-' + model.date,
                    phone: model.phone,
                    gender_id: model.gender_id,
                    is_agree_terms_conditions: model.terms_conditions
                };
                /**
                 * @ngdoc service
                 * @name user.signup
                 * @kind function
                 * @description
                 * The auth service get the credentials from the user and validate it.
                 * @params {string} credentials login credentials provided by the user
                 **/
                $auth.signup(credentials).then(function (response) {
                    if (response.data.token) {
                        $auth.setToken(response.data.token);
                        AuthFactory.fetch().$promise.then(function (user) {
                            $rootScope.auth = user;
                            /* For Redirect when the patient booking docotor*/
                            if (localStorage.bookingUrl) {
                                $state.reload();
                            } else {
                                $state.go('MyAppointments');
                            }
                        });
                    } else {
                        $state.go('login');
                    }
                    Flash.set($filter("translate")(response.data.Success), 'success', true);

                }).catch(function (error) {
                    model.emailErr = '';
                    model.nameErr = '';
                    model.passwordErr = '';
                    model.confirmPasswordErr = '';
                    var errorResponse = error.data.errors;
                    if (angular.isDefined(errorResponse)) {
                        if (errorResponse.email) {
                            model.emailErr = $filter("translate")(errorResponse.email[0]);
                        }
                        if (errorResponse.username) {
                            model.nameErr = $filter("translate")(errorResponse.username[0]);
                        }
                        if (errorResponse.password) {
                            model.passwordErr = $filter("translate")(errorResponse.password[0]);
                        }
                        Flash.set($filter("translate")(error.data.message), 'error', false);
                    } else {
                        Flash.set($filter("translate")(error.data.message), 'error', false);
                    }
                });
            }
        };
        model.step1 = function (isvalidate) {
            if (isvalidate) {
                model.formFields.doctor_user_id = $state.params.doctorid;
                model.formFields.appointment_date = $state.params.apt_date;
                model.formFields.appointment_time = $state.params.apt_time;
                model.formFields.work_place_id = $state.params.workplaceid;
                if (model.formFields.checkInsurance === "Yes") {
                    model.formFields.checkInsurance = "Yes";
                    localStorage.bookingValueS1 = window.btoa(JSON.stringify(model.formFields));
                    /**CallBack Function**/
                    $scope.insuranceCheckSubmit($state.params.doctorid, $state.params.apt_date, model.formFields.insurance_id, function (insurance) {
                        if (parseInt(insurance[0].response.status) == 1) {
                            var reDirectPath = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time + '/' + $state.params.workplaceid + '/step2';
                            $location.path(reDirectPath);
                        } else {
                            Flash.set($filter("translate")(insurance[0].response.message), 'error', false);
                            $scope.insuranceCheck("Yes");
                        }
                    });
                } else {
                    model.formFields.checkInsurance = "No";
                    model.formFields.insurance_id = "";
                    localStorage.bookingValueS1 = window.btoa(JSON.stringify(model.formFields));
                    var reDirectPath = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time + '/' + $state.params.workplaceid + '/step2';
                    $location.path(reDirectPath);
                }
            }
        };
        model.step2 = function (isvalidate) {
            if (isvalidate) {
                /* For Add Required Fields */
                if (parseInt(model.formValue.is_guest_appointment) === 1) {
                    storedValues = {
                        first_name: model.formValue.first_name,
                        last_name: model.formValue.last_name,
                        gender_id: model.formValue.gender_id,
                        is_guest_appointment: model.formValue.is_guest_appointment,
                        postal_code: model.formValue.postal_code,
                        phone: model.formValue.phone,
                        notes: model.formValue.notes
                    };
                    model.step2sub(storedValues);
                } else if (parseInt(model.formValue.is_guest_appointment) === 3) {
                    storedValues = {
                        guest_first_name: model.formValue.guest_first_name,
                        guest_last_name: model.formValue.guest_last_name,
                        guest_email: model.formValue.guest_email,
                        guest_gender_id: model.formValue.gender_id,
                        is_guest_appointment: model.formValue.is_guest_appointment,
                        guest_postal_code: model.formValue.postal_code,
                        guest_dob: model.formValue.guest_dob,
                        phone: model.formValue.phone,
                        notes: model.formValue.notes
                    };
                    model.step2sub(storedValues);
					/* 
					-For check famiy member details
					-If family member is not selected from dropdown list then we call service for add new data
					-After adding the new data get response of family friend id, assign in to strored values and redirect to third step
					*/
                } else if (parseInt(model.formValue.is_guest_appointment) === 2) {
                    if (model.formValue.family_member == null) {
                        var family_data = {
                            first_name: model.formValue.name_member,
                            relationship: model.formValue.relation,
                            age: model.formValue.age,
                            gender_id: model.formValue.realtion_gender_id
                        };
                        FamilyFriendsList.post(family_data).$promise.then(function (response) {
                            if (angular.isDefined(response.id)) {
                                model.familyfriendid = response.id;
                                if (angular.isDefined(response.id)) {
                                    storedValues = {
                                        family_friend_id: model.familyfriendid,
                                        first_name: model.formValue.name_member,
                                        last_name: model.formValue.last_name,
                                        gender_id: model.formValue.realtion_gender_id
                                    };
                                    model.step2sub(storedValues);
                                }
                            }
                        });
                    } else {
                        storedValues = {
                            family_friend_id: model.formValue.family_member
                        };
                        model.step2sub(storedValues);
                    }
                }
            }
        };
        model.step2sub = function (storedValues) {
            localStorage.bookingValueS2 = window.btoa(JSON.stringify(storedValues));
            var reDirectPath = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time + '/' + $state.params.workplaceid + '/final';
            $location.path(reDirectPath);
        };
        model.step3 = function () {
            localStorage.bookingValueS3 = window.btoa(JSON.stringify(model.formValue));
            var reDirectPath = '/appointments/booking/' + $state.params.doctorid + '/' + $state.params.apt_date + '/' + $state.params.apt_time + '/' + $state.params.workplaceid + '/final';
            $location.path(reDirectPath);
        };
        function ShowHide(shownDivModal) {
            shownDivModal = shownDivModal;
        }
        $scope.finalConfirm = function () {
            var postValue = {
                step1value: localStorage.bookingValueS1,
                step2value: localStorage.bookingValueS2
                /* step3value: localStorage.bookingValueS3 */
            };
            AppointmentBookingAdd.add(postValue).$promise.then(function (response) {
                if (response.Success) {
                    if (!localStorage.widgetUser) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        localStorage.removeItem('bookingValueS1');
                        localStorage.removeItem('bookingValueS2');
                        /* localStorage.removeItem('bookingValueS3'); */
                        $location.path('/appointments/all');
                    } else {
                        Flash.set($filter("translate")('Booked Successfully. Go to Main Web for Other Details'), 'success', true);
                        $rootScope.auth = {};
                        $auth.logout();
                        $location.path("/doctor/" + localStorage.widgetUser);
                    }
                } else {
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };

		/* 
		-Cancel appoinment function
		-Before complete final step user can cancel appoinment
		-Remove local storage value and redirect to dashboard page
		*/
        $scope.cancelAppoinment = function () {
            if (angular.isDefined(localStorage)) {
                localStorage.removeItem('bookingValueS1');
                localStorage.removeItem('bookingValueS2');
                $state.go('MyAppointments', {}, { reload: true });
            }
        };
		/*
		-reason for visit onchange get value and assig in scope
		-retive the scope value and view in appointment booking
		*/
        $scope.reasonValue = function (diseas) {
            var reasonId = model.formFields.specialty_disease_id,
                reasonName = $.grep(model.diseasList, function (diseas) {
                    return diseas.id == reasonId;
                })[0].name;
            $rootScope.reasonToVisit = reasonName;
        };
		/*
		-Get doctor insurance list based on the booking date and time
		-will call this method when user choose yes
		*/
        $scope.insuranceCheck = function (value) {
            if (value === 'Yes') {
                var insurance_date = $filter('date')($state.params.apt_date, "yyyy-MM-dd");
                var dt = $filter('date')(new Date(insurance_date.split('-').join('/')), "yyyy-MM-dd");
                DoctorInsuranceList.get({
                    doctor_id: $state.params.doctorid,
                    date: dt
                }).$promise.then(function (response) {
                    $scope.response_code = response.code;
                    if (response.code === 1) {
                        $scope.activeInsurance = response.data.active;
                        $scope.expiredInsurance = response.data.expired;
                    } else if (response.code === 0) {
                        $scope.noInsurance = response.message;
                    }
                });
            }
        };
        $scope.insuranceCheckSubmit = function (doctor_id_insurance, apt_date_insurance, insurance_id, callback) {
            var insuranceCheck = [];
            insuranceCheck[0] = {
                response: {
                    status: 0,
                    message: "Please try another insurance"
                }
            };
            if (doctor_id_insurance !== undefined && apt_date_insurance !== undefined && doctor_id_insurance !== null && apt_date_insurance !== null && doctor_id_insurance !== '' && apt_date_insurance !== '') {
                var insurance_date = $filter('date')(apt_date_insurance, "yyyy-MM-dd"),
                    dt = $filter('date')(new Date(insurance_date.split('-').join('/')), "yyyy-MM-dd");
                DoctorInsuranceList.get({
                    doctor_id: doctor_id_insurance,
                    date: dt
                }).$promise.then(function (response) {
                    $scope.response_code = response.code;
                    if (response.code === 1) {
                        angular.forEach(response.data.active, function (value, key) {
                            if (parseInt(value.id) == parseInt(model.formFields.insurance_id)) {
                                insuranceCheck[0] = {
                                    response: {
                                        status: 1
                                    }
                                };
                            }
                        });
                    }
                    callback(insuranceCheck);
                });
            }
        };
        $scope.bookingCancel = function () {
            SweetAlert.swal({
                title: "Are you sure to Cancel the Booking?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
                function (isConfirm) {
                    if (isConfirm) {
                        localStorage.removeItem('bookingValueS1');
                        localStorage.removeItem('bookingValueS2');
                        /*localStorage.removeItem(bookingValueS3);*/
                        $location.path('/appointments/all');
                    }
                });
        };
    }).directive('bookingBreadCrum', function () {
        return {
            restrict: 'E',
            templateUrl: 'Appointments/booking_breadcrum.tpl.html',
            link: function (scope, element, attr) {
                scope.stepStatus = parseInt(attr.datastep);
            }
        };
    });
}(angular.module("Abs.appointments")));