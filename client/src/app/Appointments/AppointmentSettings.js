(function (module) {
    module.controller('AppointmentsSettingController', function ($scope, $state, Flash, $filter, $rootScope,$timeout, appointmentSetting) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Appointment Settings");
            //Select List for notification types
            $scope.calendarSlots = [];
            $scope.calendarSlots.push(
                {'id': 5, 'name': ('5')},
                {'id': 10, 'name':('10')},
                {'id': 15, 'name':('15')},
                {'id': 20, 'name':('20')},
                {'id': 25, 'name':('25')},
                {'id': 30, 'name':('30')},
                {'id': 35, 'name':('35')},
                {'id': 40, 'name':('40')},
                {'id': 45, 'name':('45')},
                {'id': 50, 'name':('50')},
                {'id': 55, 'name':('55')},
                {'id': 60, 'name':('60')}
            );
        };
        model.init();
        appointmentSetting.get().$promise.then(function (response) {
            model.settingValue = response.appointmentResponse;
            model.settingValue.calendar_slot_id = parseInt(response.appointmentResponse.calendar_slot_id);
            model.settingValue.is_today_first_day = (parseInt(response.appointmentResponse.is_today_first_day) === 1)?true:false;
            model.settingValue.is_two_session = (parseInt(response.appointmentResponse.is_two_session) === 1)?true:false;
            model.settingValue.type = (parseInt(response.appointmentResponse.type) === 1)?true:false;
            model.settingValue.is_sunday_open = (parseInt(response.appointmentResponse.is_sunday_open) === 1)?true:false;
            model.settingValue.sunday_two_session = (parseInt(response.appointmentResponse.sunday_two_session) === 1)?true:false;
            model.settingValue.is_monday_open = (parseInt(response.appointmentResponse.is_monday_open) === 1)?true:false;
            model.settingValue.monday_two_session = (parseInt(response.appointmentResponse.monday_two_session) === 1)?true:false;
            model.settingValue.is_tuesday_open = (parseInt(response.appointmentResponse.is_tuesday_open)=== 1)?true:false;
            model.settingValue.tuesday_two_session = (parseInt(response.appointmentResponse.tuesday_two_session)=== 1)?true:false;
            model.settingValue.is_wednesday_open = (parseInt(response.appointmentResponse.is_wednesday_open)=== 1)?true:false;
            model.settingValue.wednesday_two_session = (parseInt(response.appointmentResponse.wednesday_two_session)=== 1)?true:false;
            model.settingValue.is_thrusday_open = (parseInt(response.appointmentResponse.is_thrusday_open)=== 1)?true:false;
            model.settingValue.thrusday_two_session = (parseInt(response.appointmentResponse.thrusday_two_session)=== 1)?true:false;
            model.settingValue.is_friday_open = (parseInt(response.appointmentResponse.is_friday_open)=== 1)?true:false;
            model.settingValue.friday_two_session = (parseInt(response.appointmentResponse.friday_two_session)=== 1)?true:false;
            model.settingValue.is_saturday_open = (parseInt(response.appointmentResponse.is_saturday_open)=== 1)?true:false;
            model.settingValue.saturday_two_session = (parseInt(response.appointmentResponse.saturday_two_session)=== 1)?true:false;
            model.settingValue.is_active  = (parseInt(response.appointmentResponse.is_active) === 1)?true:false;
        });
        model.settingUpdate = function($valid) {
            if ($valid) {
                $scope.is_disable = true;
                model.settingValue.nowtimezone = moment(new Date()).format('Z');
                appointmentSetting.update(model.settingValue).$promise.then(function (response) {
                    if (response.error !== undefined) {
                        if (model.settingValue.type === true) {
                            /* Sunday */
                            if (model.settingValue.is_sunday_open === true) {
                                if (model.settingValue.sunday_two_session === true) {
                                    if (response.error.sunday_open_lunch !== undefined) {
                                        model.sunday_open_lunch = $filter("translate")(response.error.sunday_open_lunch);
                                    } else {
                                        model.sunday_open_lunch = false;
                                    }
                                    if (response.error.sunday_lunch_resume !== undefined) {
                                        model.sunday_lunch_resume = $filter("translate")(response.error.sunday_lunch_resume);
                                    } else {
                                        model.sunday_lunch_resume = false;
                                    }
                                    if (response.error.sunday_resume_close !== undefined) {
                                        model.sunday_resume_close = $filter("translate")(response.error.sunday_resume_close);
                                    } else {
                                        model.sunday_resume_close = false;
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
                            /* Monday */
                            if (model.settingValue.is_monday_open === true) {
                                if (model.settingValue.monday_two_session === true) {
                                    if (response.error.monday_open_lunch !== undefined) {
                                        model.monday_open_lunch = $filter("translate")(response.error.monday_open_lunch);
                                    } else {
                                        model.monday_open_lunch = false;
                                    }
                                    if (response.error.monday_lunch_resume !== undefined) {
                                        model.monday_lunch_resume = $filter("translate")(response.error.monday_lunch_resume);
                                    } else {
                                        model.monday_lunch_resume = false;
                                    }
                                    if (response.error.monday_resume_close !== undefined) {
                                        model.monday_resume_close = $filter("translate")(response.error.monday_resume_close);
                                    } else {
                                        model.monday_resume_close = false;
                                    }
                                } else {
                                    model.monday_resume_close = false;
                                    if (response.error.monday_open_close !== undefined) {
                                        model.monday_open_close = $filter("translate")(response.error.monday_open_close);
                                    } else {
                                        model.monday_open_close = false;
                                    }
                                }
                            }
                            /* Tuesday */
                            if (model.settingValue.is_tuesday_open === true) {
                                if (model.settingValue.tuesday_two_session === true) {
                                    if (response.error.tuesday_open_lunch !== undefined) {
                                        model.tuesday_open_lunch = $filter("translate")(response.error.tuesday_open_lunch);
                                    } else {
                                        model.tuesday_open_lunch = false;
                                    }
                                    if (response.error.tuesday_lunch_resume !== undefined) {
                                        model.tuesday_lunch_resume = $filter("translate")(response.error.tuesday_lunch_resume);
                                    } else {
                                        model.tuesday_lunch_resume = false;
                                    }
                                    if (response.error.tuesday_resume_close !== undefined) {
                                        model.tuesday_resume_close = $filter("translate")(response.error.tuesday_resume_close);
                                    } else {
                                        model.tuesday_resume_close = false;
                                    }
                                } else {
                                    model.tuesday_resume_close = false;
                                    if (response.error.tuesday_open_close !== undefined) {
                                        model.tuesday_open_close = $filter("translate")(response.error.tuesday_open_close);
                                    } else {
                                        model.tuesday_open_close = false;
                                    }
                                }
                            }
                            /* Wednesday */
                            if (model.settingValue.is_wednesday_open === true) {
                                if (model.settingValue.wednesday_two_session === true) {
                                    if (response.error.wednesday_open_lunch !== undefined) {
                                        model.wednesday_open_lunch = $filter("translate")(response.error.wednesday_open_lunch);
                                    } else {
                                        model.wednesday_open_lunch = false;
                                    }
                                    if (response.error.wednesday_lunch_resume !== undefined) {
                                        model.wednesday_lunch_resume = $filter("translate")(response.error.wednesday_lunch_resume);
                                    } else {
                                        model.wednesday_lunch_resume = false;
                                    }
                                    if (response.error.wednesday_resume_close !== undefined) {
                                        model.wednesday_resume_close = $filter("translate")(response.error.wednesday_resume_close);
                                    } else {
                                        model.wednesday_resume_close = false;
                                    }
                                } else {
                                    model.wednesday_resume_close = false;
                                    if (response.error.wednesday_open_close !== undefined) {
                                        model.wednesday_open_close = $filter("translate")(response.error.wednesday_open_close);
                                    } else {
                                        model.wednesday_open_close = false;
                                    }
                                }
                            }
                            /* Thrusday */
                            if (model.settingValue.is_thrusday_open === true) {
                                if (model.settingValue.thrusday_two_session === true) {
                                    if (response.error.thrusday_open_lunch !== undefined) {
                                        model.thrusday_open_lunch = $filter("translate")(response.error.thrusday_open_lunch);
                                    } else {
                                        model.thrusday_open_lunch = false;
                                    }
                                    if (response.error.thrusday_lunch_resume !== undefined) {
                                        model.thrusday_lunch_resume = $filter("translate")(response.error.thrusday_lunch_resume);
                                    } else {
                                        model.thrusday_lunch_resume = false;
                                    }
                                    if (response.error.thrusday_resume_close !== undefined) {
                                        model.thrusday_resume_close = $filter("translate")(response.error.thrusday_resume_close);
                                    } else {
                                        model.thrusday_resume_close = false;
                                    }
                                } else {
                                    model.thrusday_resume_close = false;
                                    if (response.error.thrusday_open_close !== undefined) {
                                        model.thrusday_open_close = $filter("translate")(response.error.thrusday_open_close);
                                    } else {
                                        model.thrusday_open_close = false;
                                    }
                                }
                            }
                            /* Friday */
                            if (model.settingValue.is_friday_open === true) {
                                if (model.settingValue.friday_two_session === true) {
                                    if (response.error.friday_open_lunch !== undefined) {
                                        model.friday_open_lunch = $filter("translate")(response.error.friday_open_lunch);
                                    } else {
                                        model.friday_open_lunch = false;
                                    }
                                    if (response.error.friday_lunch_resume !== undefined) {
                                        model.friday_lunch_resume = $filter("translate")(response.error.friday_lunch_resume);
                                    } else {
                                        model.friday_lunch_resume = false;
                                    }
                                    if (response.error.friday_resume_close !== undefined) {
                                        model.friday_resume_close = $filter("translate")(response.error.friday_resume_close);
                                    } else {
                                        model.friday_resume_close = false;
                                    }
                                } else {
                                    model.friday_resume_close = false;
                                    if (response.error.friday_open_close !== undefined) {
                                        model.friday_open_close = $filter("translate")(response.error.friday_open_close);
                                    } else {
                                        model.friday_open_close = false;
                                    }
                                }
                            }
                            /* Saturday */
                            if (model.settingValue.is_saturday_open === true) {
                                if (model.settingValue.saturday_two_session === true) {
                                    if (response.error.saturday_open_lunch !== undefined) {
                                        model.saturday_open_lunch = $filter("translate")(response.error.saturday_open_lunch);
                                    } else {
                                        model.saturday_open_lunch = false;
                                    }
                                    if (response.error.saturday_lunch_resume !== undefined) {
                                        model.saturday_lunch_resume = $filter("translate")(response.error.saturday_lunch_resume);
                                    } else {
                                        model.saturday_lunch_resume = false;
                                    }
                                    if (response.error.saturday_resume_close !== undefined) {
                                        model.saturday_resume_close = $filter("translate")(response.error.saturday_resume_close);
                                    } else {
                                        model.saturday_resume_close = false;
                                    }
                                } else {
                                    model.saturday_resume_close = false;
                                    if (response.error.saturday_open_close !== undefined) {
                                        model.saturday_open_close = $filter("translate")(response.error.saturday_open_close);
                                    } else {
                                        model.saturday_open_close = false;
                                    }
                                }
                            }
                        } else {
                            if (model.settingValue.is_two_session === true) {
                                if (response.error.open_lunch !== undefined) {
                                    model.open_lunch = $filter("translate")(response.error.open_lunch);
                                } else {
                                    model.open_lunch = false;
                                }
                                if (response.error.lunch_resume !== undefined) {
                                    model.lunch_resume = $filter("translate")(response.error.lunch_resume);
                                } else {
                                    model.lunch_resume = false;
                                }
                                if (response.error.resume_close !== undefined) {
                                    model.resume_close = $filter("translate")(response.error.resume_close);
                                } else {
                                    model.resume_close = false;
                                }
                            } else {
                                model.resume_close = false;
                                if (response.error.open_close !== undefined) {
                                    model.open_close = $filter("translate")(response.error.open_close);
                                } else {
                                    model.open_close = false;
                                }
                            }
                        }
                    } else {
                        model.open_lunch = model.resume_close = model.lunch_resume = model.open_close = model.sunday_open_lunch = model.sunday_resume_close = model.sunday_lunch_resume = model.sunday_open_close = model.monday_open_lunch = model.monday_resume_close = model.monday_lunch_resume = model.monday_open_close = model.tuesday_open_lunch = model.tuesday_resume_close = model.tuesday_lunch_resume = model.tuesday_open_close = model.wednesday_open_lunch = model.wednesday_resume_close = model.wednesday_lunch_resume = model.wednesday_open_close = model.thrusday_open_lunch = model.thrusday_resume_close = model.thrusday_lunch_resume = model.thrusday_open_close = model.friday_open_lunch = model.friday_resume_close = model.friday_lunch_resume = model.friday_open_close = model.saturday_open_lunch = model.saturday_resume_close = model.saturday_lunch_resume = model.saturday_open_close = false;
                        if (angular.isDefined(response.Success)) {
                            Flash.set($filter("translate")(response.Success), 'success', true);
                        }
                        $state.go('AppointmentSetting', {});
                    }
                    $scope.is_disable = false;
                });  
            }
        };
    });
}(angular.module("Abs.appointments")));