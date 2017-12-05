/*
 * @author  :    mugundhan_352at15
 * @created :    19th April 2016
 * @time    :    03.00 PM
 */
(function (module) {
    module.controller('SearchController', function ($location, $scope, $window, $rootScope, $filter, $state, $timeout, Languages, Cities, Specialties, SpecialtyDiseas, Gender, Insurances, SearchList, WeekList, SearchAll, GetSpecialty) {
        var model = this;

        model.setMetaData = function () {
            var pageTitle = $filter("translate")("Doctor Search");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function () {
            model.pageRedirect = pageRedirect;
            $scope.searchRecordShow = 1;
        };
         /* [ Specialty, Symptom, Condition, Treatment, Doctor’s Name Data ]*/
        model.homeSearchKey = function () {
            SearchAll.get().$promise.then(function (response) {
                if (angular.isDefined(response.doctor)) {
                   $scope.indexSearch = response.doctor;
					$scope.autocomplete = [];
					angular.forEach($scope.indexSearch, function (value, key) {
						$scope.autocomplete.push({id: value.id, name:value.name, image:value.image, username:value.username});
						$scope.autocomplete.push({id: value.id, name:value.caption, image:null, specialtyId:value.specialty});
                	});
			    }
            });
        };
        model.homeSearchKey();
        $timeout(function() {
             $('body').on('click', '.js-share-open', function (e) {
                $('.js-social-share').removeClass('share-open');
                $('#js-social-share'+$(this).attr('data-index')).addClass('share-open');
            });
            $('body').on('blur', '.js-share-open', function (e) {
                $('.js-social-share').removeClass('share-open');
            });
        }, 2000);
        model.formFilter = function (type,value) {
            if (parseInt(type) === 1) {
                if (parseInt(value) === 0) {
                    model.gender_id = undefined;
                } else {
                    model.gender_id = parseInt(value);
                }
            } else  if (parseInt(type) === 2) {
                if (parseInt(value) === 0) {
                    model.appointment = undefined;
                } else {
                    if (parseInt(value) === 1) {
                        model.appointment = "today";
                    } else if (parseInt(value) === 2) {
                        model.appointment = "threeday";
                    } else {
                        model.appointment = undefined;
                    }    
                }
           }
           model.refinesearch();
        };
        if (angular.isDefined($rootScope.doctorSpecialtyId) || angular.isDefined($location.search().specialty_id)) {
            model.specialty_id = !isNaN($rootScope.doctorSpecialtyId) ? $rootScope.doctorSpecialtyId : $location.search().specialty_id;
            GetSpecialty.get({id : model.specialty_id}).$promise.then(function (response) {
                model.specialtyDetail = response;
            });
        }
        model.refinesearch = function () {   
            if (angular.isDefined($rootScope.doctorSpecialtyId)) {
                model.specialty_id = $rootScope.doctorSpecialtyId;
                GetSpecialty.get({id : model.specialty_id}).$promise.then(function (response) {
                    model.specialtyDetail = response;
                    $rootScope.doctorSpecialtyId = "";
                });
            }
            $state.go('search',{
                specialty_id: !isNaN(model.specialty_id) ? model.specialty_id : undefined,
                city_id: !isNaN(model.city_id) ? model.city_id : undefined,
                specialty_disease_id: !isNaN(model.specialty_disease_id) ? model.specialty_disease_id : undefined,
                doctor: model.doctor,
                language_id: !isNaN(model.language_id) ? model.language_id : undefined,
                gender_id: !isNaN(model.gender_id) ? model.gender_id : undefined,
                insurance_id: !isNaN(model.insurance_id) ? model.insurance_id : undefined,
                appointment: model.appointment
            });
        };

        function dateAdd() {
            $scope.today = $scope.dateAddFunction(0, $scope.ViewSlot);
            $scope.day2 = $scope.dateAddFunction(1, $scope.ViewSlot);
            $scope.day3 = $scope.dateAddFunction(2, $scope.ViewSlot);
            $scope.day4 = $scope.dateAddFunction(3, $scope.ViewSlot);
        }
        $scope.init = function () {
            /* for loadmore function */
            $scope.loadMore = function (userId) {
                userAppointmentClass = 'showmore_' + userId;
                /* for appointment enable */
                appointmetHide = angular.element(document.getElementsByClassName(userAppointmentClass));
                if (appointmetHide.hasClass('hide')) {
                    appointmetHide.removeClass('hide');
                    appointmetHide.addClass('show');
                }
                /* For show less more button */
                showMoreClass = 'showmore_btn_' + userId;
                showLessClass = 'showless_btn_' + userId;
                moreShow = angular.element(document.getElementsByClassName(showMoreClass));
                if (moreShow.hasClass('show')) {
                    moreShow.removeClass('show');
                    moreShow.addClass('hide');
                }
                lessShow = angular.element(document.getElementsByClassName(showLessClass));
                if (lessShow.hasClass('hide')) {
                    lessShow.addClass('show');
                    lessShow.removeClass('hide');
                }
            };

            $scope.showLess = function (userId) {
                userAppointmentClass = 'showmore_' + userId;
                /* for appointment enable */
                appointmetHide = angular.element(document.getElementsByClassName(userAppointmentClass));
                if (appointmetHide.hasClass('show')) {
                    appointmetHide.removeClass('show');
                    appointmetHide.addClass('hide');
                }
                /* For show less more button */
                showMoreClass = 'showmore_btn_' + userId;
                showLessClass = 'showless_btn_' + userId;
                moreShow = angular.element(document.getElementsByClassName(showMoreClass));
                if (moreShow.hasClass('hide')) {
                    moreShow.removeClass('hide');
                    moreShow.addClass('show');
                }
                lessShow = angular.element(document.getElementsByClassName(showLessClass));
                if (lessShow.hasClass('show')) {
                    lessShow.addClass('hide');
                    lessShow.removeClass('show');
                }
            };

            $scope.dateAddFunction = function (days, multipleCount) {                
                $scope.positions = [];
                /* $scope.dateAddFunction = function (days, multipleCount) {*/
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
                        dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year
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
                        dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year
                    };
                    return dateValue;
                } else {
                    displayDate = addDays(new Date(), $scope.addDays);
                    curr_date = displayDate.getDate();
                    curr_month = displayDate.getMonth();
                    curr_year = displayDate.getFullYear();
                    dateValue = {
                        day: dayShortNames[parseInt(displayDate.getDay())],
                        date: $filter('date')(displayDate, "MM/dd"),
                        dateFormatted: curr_date + "-" + monthShortNames[curr_month] + "-" + curr_year
                    };
                    return dateValue;
                }
            };
            dateAdd();
             /* for form fields filling selected values*/
            model.specialty_id = (angular.isDefined($state.params.specialty_id)) ? parseInt($state.params.specialty_id) : undefined;
            model.insurance_id = (angular.isDefined($state.params.insurance_id)) ? parseInt($state.params.insurance_id) : undefined;
            model.city_id = (angular.isDefined($state.params.city_id)) ? parseInt($state.params.city_id) : undefined;
            model.specialty_disease_id = (angular.isDefined($state.params.specialty_disease_id)) ? parseInt($state.params.specialty_disease_id) : undefined;
            model.language_id = (angular.isDefined($state.params.language_id)) ? parseInt($state.params.language_id) : undefined;
            model.doctor = (angular.isDefined($state.params.doctor)) ? $state.params.doctor : undefined;
            model.gender_id = (angular.isDefined($state.params.gender_id)) ? parseInt($state.params.gender_id) : undefined;
            model.appointment = (angular.isDefined($state.params.appointment)) ? $state.params.appointment : undefined;
        };
        SearchList.searchList({
            is_online_booking: localStorage.ischeckboxchecked,
            city_id: $location.search().city_id,
            gender_id: $location.search().gender_id,
            specialty_disease_id: $location.search().specialty_disease_id,
            language_id: $location.search().language_id,
            insurance_id: $location.search().insurance_id,
            specialty_id: $location.search().specialty_id,
            page: $location.search().page,
            doctor: $location.search().doctor,
            appointment: model.appointment
        }).$promise.then(function (searchResponse) {
            $scope.searchLists = searchResponse.user_profiles[0];
            if ($scope.searchLists !== undefined) {
                var searchListsLength = Object.keys($scope.searchLists);
                $scope.searchRecordShow = (searchListsLength.length > 0) ? 1 : 0;
                $scope.PaginateValues = searchResponse.paginate_values;
                $scope.userIds = searchResponse.weekids;
                $scope.ViewSlot = searchResponse.viewslot;
                $scope.appointmentLoadMore = searchResponse.userLoadMore;
                $rootScope.doctorSpecialtyId = '';
            } else {
                $scope.searchRecordShow = 0;
            }
            Languages.languageList({}).$promise.then(function (response) {
                $scope.languagesLists = response.data;
            });
            Cities.citiesliList({}).$promise.then(function (cityResponse) {
                $scope.citiesliLists = cityResponse.data;
            });
            Specialties.specialtyliList({}).$promise.then(function (specialtyResponse) {
                $scope.specialtyliLists = specialtyResponse.specialties;
            });
            SpecialtyDiseas.specialtyDiseasliList({}).$promise.then(function (specialtyDiseasResponse) {
                $scope.specialtyDiseasliLists = specialtyDiseasResponse.data;
            });
            Gender.genderList({}).$promise.then(function (genderResponse) {
                $scope.genderLists = genderResponse.data;
            });
            Insurances.get().$promise.then(function (response) {
                $scope.insurances = response.insurance_companies;
            });

            /* for paginate dynamic link */
            currentUrl = $location.absUrl();
            paginateUrlSplited = currentUrl.split('#/');
            /* find the string page for remove the page string */
            if (paginateUrlSplited[1].indexOf('&page=') > 0 || paginateUrlSplited[1].indexOf('?page=') > 0) {
                if (paginateUrlSplited[1].indexOf('&page=') > 0) {
                    removePage = paginateUrlSplited[1].split('&page=');
                    $scope.paginateUrl = '#/' + removePage[0];
                } else {
                    removePage = paginateUrlSplited[1].split('?page=');
                    $scope.paginateUrl = '#/' + removePage[0] + '?';
                }
            } else {
                questRemove = paginateUrlSplited[1].split('?');
                if (questRemove.length > 1) {
                    $scope.paginateUrl = '#/' + paginateUrlSplited[1];
                } else {
                    $scope.paginateUrl = '#/' + paginateUrlSplited[1] + '?';
                }
            }

            if ($scope.searchLists !== undefined) {
                angular.forEach($scope.searchLists, function (value, key) {
                    var cityValue = "";
                    if (typeof value.data.city != "undefined") {
                        cityValue = ","+value.data.city.data.name+",";
                    }
                    var postal_codeValue = "";
                    if (typeof value.data.postal_code != "undefined") {
                        postal_codeValue = ","+value.data.postal_code+",";
                    }
                    var countryValue = "";
                    if (typeof value.data.country != "undefined") {
                        countryValue = ","+value.data.country.data.name+",";
                    }
                    if (typeof value.data.latitude != "undefined" && typeof value.data.longitude != "undefined" && value.data.latitude != null && value.data.longitude != null) {
                         var formattedAddress = postal_codeValue + cityValue + countryValue,
                            formattedAddressResult = formattedAddress.substring(1, formattedAddress.length-1).replace(/,,/g, ",");
                            $scope.positions.push({
                                id: key,
                                username: value.data.User.data.username,
                                doctor_name:value.data.display_name,
                                avatar: value.data.User.data.attachmentable.data.thumb.medium,
                                address1:value.data.address,
                                address2:formattedAddressResult,
                                rating: value.starRating,
                                lat: value.data.latitude,
                                lon: value.data.longitude
                            });
                    }
                });
            }
            $scope.mappositions = $scope.positions;
            $scope.cenLat = 33.862100;
            $scope.cenLong = -84.687900;
            if (angular.isDefined($scope.mappositions[0])) {
                $scope.cenLat = $scope.mappositions[0].lat;
                $scope.cenLong = $scope.mappositions[0].lon;
            }
        });

        function addDays(theDate, days) {
            return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
        }
        $scope.init();
        model.pageRedirect = function (linkvalue) {
            var fulUrl = $location.absUrl();
            var splitUrl = fulUrl.split('?');
            window.location.href = splitUrl[0] + "?" + linkvalue;
        };
        $scope.nextWeek = function () {
            statusBarShow();
            $scope.ViewSlot = parseInt($scope.ViewSlot) + 1;
            WeekList.get({
                viewslot: $scope.ViewSlot,
                userids: $scope.userIds
            }).$promise.then(function (searchResponse) {
                $scope.searchLists = searchResponse.user_profiles[0];
                $scope.ViewSlot = searchResponse.viewslot;
                statusBarHide();
            });
            dateAdd();
        };
        $scope.prevWeek = function () {
            statusBarShow();
            if ($scope.ViewSlot == '1') {
                $scope.ViewSlot = 1;
            } else {
                $scope.ViewSlot = parseInt($scope.ViewSlot) - 1;
            }
            WeekList.get({
                viewslot: $scope.ViewSlot,
                userids: $scope.userIds
            }).$promise.then(function (searchResponse) {
                $scope.searchLists = searchResponse.user_profiles[0];
                $scope.ViewSlot = searchResponse.viewslot;
                statusBarHide();
            });
            dateAdd();
        };

        $scope.showDetail = function (e, doctorInfo) {
            $scope.doctorInfo = doctorInfo;
            $scope.map.showInfoWindow('doctor-info', doctorInfo.id);
        };

        function statusBarShow() {
            $('#search-loading-div').attr('style', 'display:block');
            $('#loading').attr('style', 'display:block');
            $('#search-result-div').attr('style', 'display:none');
        }

        function statusBarHide() {
            $('#search-loading-div').attr('style', 'display:none');
            $('#loading').attr('style', 'display:none');
            $('#search-result-div').attr('style', 'display:block');
        }

        $(document).ready(function () {
            $(window).scroll(function () {
                if ($(document).scrollTop() > 613 && $(window).width() > 768) {
                    $(".search-result-header").addClass("search-header-fixed");
                } else {
                    $(".search-result-header").removeClass("search-header-fixed");
                }
            });
        });
    });
    /* For select when search */
    module.directive('convertToNumber', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function (val) {
                    return val ? parseInt(val, 10) : null;
                });
                ngModel.$formatters.push(function (val) {
                    return val ? '' + val : '';
                });
            }
        };
    });
}(angular.module("Abs.search")));