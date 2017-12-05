(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:UserController
     * @description
     *
     * This is user controller having the methods setmMetaData, init, upload and user_profile.
     **/
    module.controller('UserController', function ($scope, $state, $rootScope, $filter, $location, $auth, $timeout, Flash, $anchorScroll, ConstUserType, ConstMembershipPlan, UsersFactory, ConstSocialLogin, ProfileSearchList, AppointmentWeekList, UserReviews, UserAppointment, ReviewAdd, MyDocotors, $FB, PhotosFactory, SweetAlert, $interval, ActivityCount) {
        var model = this;
        var slideIndex = 0;
        //$FB.init('YOUR_APPID');
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:UserController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element function.
         *
         * It defines the angular elements
         **/
        model.setMetaData = function () {
            var pageTitle = $filter("translate")("User");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };

        $scope.gotoAnchor = function (x) {
            $anchorScroll(x);
        };


        /**
         * @ngdoc method
         * @name init
         * @methodOf user.controller:UserController
         * @description
         * This method will initialze the page. It returns the page title.
         *
         **/
        model.init = function () {
            model.setMetaData();
            model.ConstSocialLogin = ConstSocialLogin;
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("User") + ":" + $state.params.username;
            $scope.maxSize = 5;
            $scope.currentPage = ($scope.currentPage !== undefined) ? parseInt($scope.currentPage) : 1;
            $scope.worklocationLists = [];
            model.siteCurrency = $rootScope.settings['site.currency'];
            model.formvalue = '';
			$scope.clinicphotos = [];
            $scope.clinicSlick = [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ];
			
			PhotosFactory.get({ 'username': $state.params.username }).$promise.then(function (response) {
                $scope.photos = response.data;
                $scope.imageDisplay = false;
                if ($scope.photos.length > 0) {
                    $scope.imageDisplay = true;
                    var intialArr = 0;
                    var intialPhotoArr = 0;
                    $scope.clinicphotos[intialArr] = [];
                    angular.forEach($scope.photos, function (value, key) {
                        if (intialPhotoArr % 3 === 0) {
                            intialArr++;
                            $scope.clinicphotos[intialArr] = [];
                            $scope.clinicphotos[intialArr].push({thumb:value.attachmentable.data.thumb.small});
                        } else {
                            $scope.clinicphotos[intialArr].push({thumb:value.attachmentable.data.thumb.small});
                        }
                        intialPhotoArr++;
                    });
                    $scope.clinicphotos.splice(0, 1);
                    $timeout(function(){
                        $scope.showDivs(slideIndex);
                        $interval(plusDivs, 3000);
                    },1000);
                }
            });
        };
        UsersFactory.get({ username: $state.params.username }).$promise.then(function (response) {
            model.user = response;
            model.userBadges = model.user.badge.data;
            model.user.user_profile.booking_instructions = (model.user.user_profile.booking_instructions === null) ? $filter("translate")("No any booking instructions") : model.user.user_profile.booking_instructions;
            $scope.timeRating = parseInt(model.user.timing_avg_rating / model.user.timing_rating_count);
            $scope.bedRating = parseInt(model.user.bedside_avg_rating / model.user.bedside_rating_count);
            $scope.overAllRating = model.user.overall_avg_rating;
            $scope.practice = (response.user_profile.practice_name !== 'null') ? ' | ' + $filter("translate")("Practice by:") + response.user_profile.practice_name : '';
            model.user.user_profile.about_me = (response.user_profile.about_me !== 'null') ? response.user_profile.about_me : '';
            $scope.workplaces = response.workplace.data;
            $scope.mapCenter = false;
            if ($scope.workplaces.length > 0 && angular.isDefined($scope.workplaces[0].latitude) && angular.isDefined($scope.workplaces[0].longitude) && $scope.workplaces[0].latitude !== null && $scope.workplaces[0].longitude !== null && $scope.workplaces[0].latitude !== "" && $scope.workplaces[0].longitude !== "") {
                $scope.mapCenter = true;
                $scope.latitude = $scope.workplaces[0].latitude;
                $scope.longitude = $scope.workplaces[0].longitude;
				$scope.destinationAddress = $scope.workplaces[0].location;
                $scope.staticMapImage = 'https://maps.googleapis.com/maps/api/staticmap?sensor=false&style=feature:administrative|element:labels|visibility:off&markers=icon:http://abssalvador.nginxpg.develag.com/assets/img/hospital-marker.png|label:C|'+$scope.latitude+','+$scope.longitude+'&zoom=15&size=640x130&format=jpg&scale=2&visual_refresh=true&key=AIzaSyBCLwpetgvwQXwvqS7XmYvCr9lW_y4FHfY';
                $timeout(function(){
                   $('.js-maps-image').attr('src',$scope.staticMapImage);
                },100);
            } else {
                $scope.staticMapImage = '';
            }
            /* For Show More Concept */
            $scope.loadMore = function (worklocationId) {
                /* for appointment enable */
                appointmetHide = angular.element(document.getElementsByClassName('js-showmore' + worklocationId));
                if (appointmetHide.hasClass('hide')) {
                    appointmetHide.removeClass('hide');
                    appointmetHide.addClass('show');
                }
                /* For show less more button */
                moreShow = angular.element(document.getElementsByClassName('js-showmore_btn' + worklocationId));
                if (moreShow.hasClass('show')) {
                    moreShow.removeClass('show');
                    moreShow.addClass('hide');
                }
                lessShow = angular.element(document.getElementsByClassName('js-showless_btn' + worklocationId));
                if (lessShow.hasClass('hide')) {
                    lessShow.addClass('show');
                    lessShow.removeClass('hide');
                }
            };

            $scope.showLess = function (worklocationId) {
                /* for appointment enable */
                appointmetHide = angular.element(document.getElementsByClassName('js-showmore' + worklocationId));
                if (appointmetHide.hasClass('show')) {
                    appointmetHide.removeClass('show');
                    appointmetHide.addClass('hide');
                }
                /* For show less more button */
                moreShow = angular.element(document.getElementsByClassName('js-showmore_btn' + worklocationId));
                if (moreShow.hasClass('hide')) {
                    moreShow.removeClass('hide');
                    moreShow.addClass('show');
                }
                lessShow = angular.element(document.getElementsByClassName('js-showless_btn' + worklocationId));
                if (lessShow.hasClass('show')) {
                    lessShow.addClass('hide');
                    lessShow.removeClass('show');
                }
            };
			
            $scope.userId = model.user.id;
			$scope.specialtyId = model.user.user_profile.specialties[0].id;
			$scope.viewslot = 1;
            var slot_index = 0;
            angular.forEach(model.user.workplace.data, function (value, key) {
                var worklocation_details = [];
                ProfileSearchList.get({
                    viewslot: $scope.viewslot,
                    userids: $scope.userId,
                    workplaceid: value.id
                }).$promise.then(function (searchResponse) {
                    $scope.worklocationLists.push({
                        days: daysAddIntially(),
                        slotIndex: slot_index,
                        worklocationId: value.id,
                        worklocationName: value.location,
                        worklocationPrice: value.price,
                        viewslot: searchResponse.viewslot,
                        appointmentLoadMore: searchResponse.userLoadMore,
                        workslots: searchResponse.user_profiles[0],
                        show_button: searchResponse.user_profiles[0].show_button,
                        week_hender: searchResponse.user_profiles[0].week_hender
                    });
                    slot_index++;
                });
            });
            model.ConstUserType = ConstUserType;
            model.ConstMembershipPlan = ConstMembershipPlan;
            if ($rootScope.settings['site.enabled_plugins'].indexOf('UserReviews') > -1) {
                /* For get all reviews */
                $scope.getReviewsList();
                /* For check the Auth User is a Patient & if Auth User is a patient is alreay added a reivew or Not */
                if ($auth.isAuthenticated()) {
                    if ($rootScope.auth.role_id === ConstUserType.User) {
                        /* For Check the auth user is vist the doctor at once */
                        UserAppointment.get({
                            doctor_id: $scope.userId,
                            user_id: $rootScope.auth.id
                        }).$promise.then(function (Appointmentresponse) {
                            $scope.isAlreadyVisted = Appointmentresponse.data.is_visited;
                            if ($scope.isAlreadyVisted === true) {
                                $scope.isvisited = true;
                                UserReviews.get({
                                    doctor_id: $scope.userId,
                                    user_id: $rootScope.auth.id
                                }).$promise.then(function (reviewResponse) {
                                    $scope.authUserAddedReview = reviewResponse.data;
                                    $scope.userReviewData = reviewResponse.status;
                                    if ($scope.userReviewData === true) {
                                        /* for template side block regard */
                                        $scope.reviewEnable = false;
                                        $scope.alreadyadded = true;
                                    } else {
                                        /* for template side block regard */
                                        $scope.reviewEnable = true;
                                        $scope.alreadyadded = false;
                                    }
                                });
                            } else {
                                $scope.reviewEnable = false;
                                $scope.isvisited = false;
                            }
                        });
                    } else {
                        $scope.reviewEnable = false;
                        /* for template side block reg */
                    }
                }
            }

        });
		$scope.showMoreLanguage = function () {
				/* for appointment enable */
                languageHide = angular.element(document.getElementsByClassName('js-showmore-language'));
                if (languageHide.hasClass('hide')) {
                    languageHide.removeClass('hide');
                    languageHide.addClass('show');
                }
				moreShow = angular.element(document.getElementsByClassName('seeall-btn'));
                if (moreShow.hasClass('show')) {
                    moreShow.removeClass('show');
                    moreShow.addClass('hide');
                }
		};
        $scope.showRoute = function (e, workplace) {
            $scope.destinationBox = workplace.location;
        };
        $scope.travelMode = 'DRIVING';
        $scope.driveModeChanged = function (mode) {
            $scope.mapChanged(2, mode);
        };
        $scope.mapFilterClose = function (mode) {
            if (parseInt(mode) == 1) {
                $('.js-maps-show').removeClass('real-map');
                $('.js-maps-image').removeClass('hide');
            } else {
                $('.js-maps-show').addClass('real-map');
                $('.js-maps-image').addClass('hide');
                $scope.mapChanged(1, $scope.travelMode);
            }
           
        };
        $scope.mapChanged = function (checkMode, travelMode) {
			
			if (angular.isUndefined($scope.destinationBox)) {
				$scope.destinationBox = $scope.destinationAddress;
			}
            if ($scope.originBox !== "" && $scope.destinationBox !== "") {
                swal({
                    title: 'Loading...',
                    timer: 1000,
                    showConfirmButton: false
                });
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': $scope.originBox
                }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK && results.length >= 1) {
                        $scope.address1 = $scope.getLocationDetails(results[0]);
                        geocoder.geocode({
                            'address': $scope.destinationBox
                        }, function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK && results.length >= 1) {
                                $scope.address2 = $scope.getLocationDetails(results[0]);
                                $timeout(function () {
                                    $scope.waypoints = [
                                        { location: { lat: $scope.address1.latitude, lng: $scope.address1.longitude }, stopover: true },
                                        { location: { lat: $scope.address2.latitude, lng: $scope.address2.longitude }, stopover: true },
                                    ];
                                    if (angular.isDefined(travelMode)) {
                                        $scope.travelMode = travelMode;
                                    } else {
                                        $scope.travelMode = $scope.travelMode;
                                    }
                                    $scope.origin = $scope.address1.formatted_address;
                                    $scope.destination = $scope.address2.formatted_address;
                                }, 2000);
                            } else {
                                if (angular.isDefined(travelMode)) {
                                    $scope.travelMode = travelMode;
                                } else {
                                    $scope.travelMode = $scope.travelMode;
                                }
                                SweetAlert.swal('Destination address couldn\'t be located.');
                            }
                        });
                    } else {
                        if (angular.isDefined(travelMode)) {
                            $scope.travelMode = travelMode;
                        } else {
                            $scope.travelMode = $scope.travelMode;
                        }
                        SweetAlert.swal('Origin address couldn\'t be located.');
                    }
                });
            } else {
                if (checkMode === 2) {
                    if (angular.isDefined(travelMode)) {
                        $scope.travelMode = travelMode;
                    } else {
                        $scope.travelMode = $scope.travelMode;
                    }
                    SweetAlert.swal('Enter Origin and Destination address.');
                }
            }
        };
        $scope.dateAddFunction = function (days, multipleCount) {
            if (parseInt(multipleCount) > 1) {
                $scope.addDays = (parseInt(multipleCount) - 1) * 4 + parseInt(days);
            } else {
                $scope.addDays = parseInt(days);
            }
            var displayDate = '',curr_date = '',curr_month = '',curr_year = '',
					dayShortNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    monthShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            if ((parseInt(days) === '0') && (parseInt(multipleCount) === '1')) {
                displayDate = new Date();
                curr_date = displayDate.getDate();
                curr_month = displayDate.getMonth();
                curr_year = displayDate.getFullYear();
                dateValue = {
                    day: dayShortNames[parseInt(displayDate.getDay())],
                    date: $filter('date')(new Date(), "MM/dd"),
                    dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year,
                    year: $filter('date')(new Date(), "yyyy"),
                };
                return dateValue;
            } else if ((parseInt(days) === '0') && (parseInt(multipleCount) > 1)) {
                days = (parseInt(multipleCount) - 1) * 4;
                displayDate = addDays(new Date(), days);
                curr_date = displayDate.getDate();
                curr_month = displayDate.getMonth();
                curr_year = displayDate.getFullYear();
                dateValue = {
                    day: dayShortNames[parseInt(displayDate.getDay())],
                    date: $filter('date')(addDays(new Date(), days), "MM/dd"),
                    dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year,
                    year: $filter('date')(addDays(new Date(), days), "yyyy"),
                };
                return dateValue;
            } else {
                displayDate = addDays(new Date(), $scope.addDays);
                curr_date = displayDate.getDate();
                curr_month = displayDate.getMonth();
                curr_year = displayDate.getFullYear();
                dateValue = {
                    day: dayShortNames[parseInt(displayDate.getDay())],
                    date: $filter('date')(addDays(new Date(), $scope.addDays), "MM/dd"),
                    dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year,
                    year: $filter('date')(addDays(new Date(), $scope.addDays), "yyyy"),
                };
                return dateValue;
            }
        };
        model.init();
        function addDays(theDate, days) {
            return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
        }
        function plusDivs() {
           slideIndex = ($scope.clinicphotos.length - 1 <= parseInt(slideIndex)) ? 0 : parseInt(slideIndex)+1;
           $scope.showDivs(slideIndex);
        }
        $scope.showDivs = function (n) {
            $(".mySlides").addClass("hide");
            $("#mySlides"+n).removeClass("hide");
        };
        $scope.printDiv = function (divName) {
            var printContents = document.getElementById(divName).innerHTML;
            var popupWin = window.open('', '_blank', 'width=300,height=300');
            popupWin.document.open();
            popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="/assets/css/Abs-0.0.1.css" /></head><body onload="window.print()">' + printContents + '</body></html>');
            popupWin.document.close();
        };
        $scope.nextWeek = function (value, slot_index) {
            $scope.worklocationLists[slot_index].viewslot = parseInt($scope.worklocationLists[slot_index].viewslot) + 1;
            AppointmentWeekList.get({ viewslot: $scope.worklocationLists[slot_index].viewslot, userids: $scope.userId, workplaceid: value }).$promise.then(function (searchResponse) {
                $scope.worklocationLists[slot_index].workslots = searchResponse.user_profiles[0];
                $scope.worklocationLists[slot_index].days = daysAdd(slot_index);
                $scope.worklocationLists[slot_index].viewslot = searchResponse.viewslot;
                $scope.worklocationLists[slot_index].show_button = searchResponse.user_profiles[0].show_button;
            });
        };
        $scope.prevWeek = function (value, slot_index) {
            if ($scope.worklocationLists[slot_index].viewslot == '1') {
                $scope.worklocationLists[slot_index].viewslot = 1;
            } else {
                $scope.worklocationLists[slot_index].viewslot = parseInt($scope.worklocationLists[slot_index].viewslot) - 1;
                AppointmentWeekList.get({ viewslot: $scope.worklocationLists[slot_index].viewslot, userids: $scope.userId, workplaceid: value }).$promise.then(function (searchResponse) {
                    $scope.worklocationLists[slot_index].workslots = searchResponse.user_profiles[0];
                    $scope.worklocationLists[slot_index].days = daysAdd(slot_index);
                    $scope.worklocationLists[slot_index].viewslot = searchResponse.viewslot;
                    $scope.worklocationLists[slot_index].show_button = searchResponse.user_profiles[0].show_button;
                });
            }
        };
        function daysAdd(slot_index) {
            return {
                today: $scope.dateAddFunction(0, $scope.worklocationLists[slot_index].viewslot),
                day2: $scope.dateAddFunction(1, $scope.worklocationLists[slot_index].viewslot),
                day3: $scope.dateAddFunction(2, $scope.worklocationLists[slot_index].viewslot),
                day4: $scope.dateAddFunction(3, $scope.worklocationLists[slot_index].viewslot)
            };
        }
        function daysAddIntially() {
            return {
                today: $scope.dateAddFunction(0, $scope.viewslot),
                day2: $scope.dateAddFunction(1, $scope.viewslot),
                day3: $scope.dateAddFunction(2, $scope.viewslot),
                day4: $scope.dateAddFunction(3, $scope.viewslot)
            };
        }

        model.isAuthenticated = function () {
            return $auth.isAuthenticated();
        };
        $scope.getReviewsList = function () {
            param = { 'doctor_id': $scope.userId, 'page': $scope.currentPage };
            UserReviews.get(param).$promise.then(function (response) {
                $scope.doctorReviews = response.data;
                $scope._metadata = response.meta.pagination;
                $scope.metadata = response.meta.pagination;
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
        $scope.paginate = function () {
            $scope.currentPage = parseInt($scope.currentPage);
            $scope.getReviewsList();
        };

        $scope.ratings = [{
            current: 1,
            max: 5
        }];
        $scope.getLocationDetails = function (getAddressResults) {
            var address = {};
            for (var ii = 0; ii < getAddressResults.address_components.length; ii++) {
                var street_number = '',
                    route = '',
                    street = '',
                    city = '',
                    state = '',
                    zipcode = '',
                    country = '',
                    formatted_address = '',
                    latitude = '',
                    longitude = '';
                address.latitude = getAddressResults.geometry.location.lat();
                address.longitude = getAddressResults.geometry.location.lng();
                address.formatted_address = getAddressResults.formatted_address;
                var types = getAddressResults.address_components[ii].types.join(",");
                if (types === "street_number") {
                    address.street_number = getAddressResults.address_components[ii].long_name;
                }
                if (types === "route" || types === "point_of_interest,establishment") {
                    address.route = getAddressResults.address_components[ii].long_name;
                }
                if (types === "sublocality,political" || types === "locality,political" || types === "neighborhood,political" || types === "administrative_area_level_3,political") {
                    address.city = (city === '' || types === "locality,political") ? getAddressResults.address_components[ii].long_name : city;
                }
                if (types === "administrative_area_level_1,political") {
                    address.state = getAddressResults.address_components[ii].short_name;
                }
                if (types === "postal_code" || types === "postal_code_prefix,postal_code") {
                    address.zipcode = getAddressResults.address_components[ii].long_name;
                }
                if (types === "country,political") {
                    address.country = getAddressResults.address_components[ii].long_name;
                }
            }
            return address;
        };
        function statusBarShow() {
            $scope.norecodeShow = false;
            $('#search-loading-div').css('display', 'block');
            $('#loading').css('display', 'block');
            $('#search-result-div').css('display', 'none');
        }
        function statusBarHide() {
            $scope.norecodeShow = true;
            $('#search-loading-div').css('display', 'none');
            $('#loading').css('display', 'none');
            $('#search-result-div').css('display', 'block');
        }

    });
}(angular.module("Abs.user")));