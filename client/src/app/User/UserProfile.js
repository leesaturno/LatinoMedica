(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:UserProfileController
     * @description
     *
     * This is user profile controller having the methods setmMetaData, init, upload and user_profile. It controld the user profile functions.
     **/
    module.controller('UserProfileController', function ($state, $scope, $http, $auth, Flash, UserProfilesFactory, UserProfilesImageFactory, $filter, $rootScope, $location, Upload, GENERAL_CONFIG, ConstSocialLogin, ConstThumb, City, States, Country, UserDeactivate, SweetAlert, ConstUserType) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:UserProfileController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element function.
         **/
        model.setMetaData = function () {
            var pageTitle = $filter("translate")("User Profile");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf user.controller:UserProfileController
         * @description
         * This method will initialze the page. It returns the page title
         *
         **/
        model.init = function () {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("User Profile");
            model.ConstSocialLogin = ConstSocialLogin;
            model.thumb = ConstThumb.user;
            //Select Gender List
            $scope.genderArray = [];
            $scope.photoUpload = false;
            $scope.fieldsRequired = true;
            $scope.genderArray.push({
                'id': 1,
                "name": $filter("translate")('Male')
            }, {
                    'id': 2,
                    "name": $filter("translate")('Female')
                });
            //Select List for notification types
            $scope.notificationArray = [];
            $scope.notificationArray.push({
                'id': 1,
                'name': $filter("translate")('Both')
            }, {
                    'id': 2,
                    'name': $filter("translate")('Email')
                }, {
                    'id': 3,
                    'name': $filter("translate")('SMS')
                });
            City.cityList({}).$promise.then(function (response) {
                $rootScope.cityArray = response.data;
            });
            States.stateList({}).$promise.then(function (response) {
                $rootScope.stateArray = response.data;
            });
            Country.countryList({}).$promise.then(function (response) {
                $rootScope.countryArray = response.data;
            });
            //Get user details
            UserProfilesFactory.get().$promise.then(function (response) {
                model.user_profile = response;
                $scope.user = response.User;
                model.user_profile.is_newpatient_accepted = (parseInt(response.is_newpatient_accepted) === 1) ? true : false;
                $rootScope.auth.attachmentable.thumb = $scope.user.attachmentable.thumb;
                $rootScope.auth.user_profile.first_name = response.first_name;
                $rootScope.auth.user_profile.last_name = response.last_name;
                $rootScope.auth.user_profile.postal_code = response.postal_code;
                $rootScope.auth.user_profile.phone = response.phone;
                $rootScope.auth.user_profile.gender_id = response.gender_id;
                model.user_profile.user_type = 'doctor';
                if (model.user_profile.User.role_id == '2') {
                    model.user_profile.user_type = 'patient';
                }
                if (response.booking_instructions === 'null') {
                    model.user_profile.booking_instructions = '';
                }
                if (response.practice_name === 'null') {
                    model.user_profile.practice_name = '';
                }
                if (response.board_certifications === 'null') {
                    model.user_profile.board_certifications = '';
                }
                if (response.about_me === 'null') {
                    model.user_profile.about_me = '';
                }
                if (response.memberships === 'null') {
                    model.user_profile.memberships = '';
                }
                if (response.awards === 'null') {
                    model.user_profile.awards = '';
                }
                if (response.gender_id) {
                    model.user_profile.gender_id = parseInt(response.gender_id);
                }
                if (response.city_id) {
                    model.user_profile.city_id = parseInt(response.city_id);
                }
                if (response.country_id) {
                    model.user_profile.country_id = parseInt(response.country_id);
                }
            });
        };
        model.init();
		model.ConstUserType = ConstUserType;
		model.deactivateLogout = function () {
            $http.get(GENERAL_CONFIG.api_url + '/users/logout', {
                 headers: {'Authorization': 'Bearer '+localStorage.userToken}
            });
            $rootScope.auth = {};
            $auth.logout();
			$state.go('home', {}, { reload:true });
        };
        $scope.dateBlockeBefore = $filter('date')(new Date(), "yyyy-MM-ddTHH:mm:ss.sssZ");
        // upload on file select or drop
        /**
         * @ngdoc method
         * @name upload
         * @methodOf user.controller:UserProfileController
         * @description
         * This method will save the user profile data
         *
         * @param {!Array.<string>} profileData contains the array of user profile data
         **/
        model.upload = function (profileData, file) {
            Upload.upload({
                url: GENERAL_CONFIG.api_url + '/user_profiles',
                data: {
                    file: file,
                    'first_name': profileData.first_name,
                    'last_name': profileData.last_name,
                    'dr_title': profileData.dr_title,
                    'practice_name': profileData.practice_name,
                    'dob': profileData.dob,
                    'gender_id': profileData.gender_id,
                    'about_me': profileData.about_me,
                    'board_certifications': profileData.board_certifications,
                    'memberships': profileData.memberships,
                    'awards': profileData.awards,
                    'phone': profileData.phone,
                    'address': profileData.address,
                    'city_id': profileData.city_id,
                    'state_id': profileData.state_id,
                    'country_id': profileData.country_id,
                    'postal_code': profileData.postal_code,
                    'notification_type_id': profileData.notification_type_id,
                    'is_newpatient_accepted': profileData.is_newpatient_accepted,
                    'identification_number': profileData.identification_number,
                    'hobbies': profileData.hobbies,
                    'html_info': profileData.html_info,
                    'no_insurance_patients': profileData.no_insurance_patients,
                    'is_allow_appointments': profileData.is_allow_appointments,
                }
            }).then(function (resp) {
                Flash.set($filter("translate")("UserProfile has been updated"), 'success', true);
                $state.reload('UserProfile');
            }, function (resp) {
                Flash.set($filter("translate")("UserProfile could not be updated. Please, try again."), 'error', false);
            }, function (evt) {
                var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            });
        };
        //Update user details
        /**
         * @ngdoc method
         * @name userProfile
         * @methodOf user.controller:UserProfileController
         * @description
         * This method will upload the file and returns the success message.
         *
         **/
        model.userProfile = function ($valid) {
            if ($valid) {
                UserProfilesFactory.update(model.user_profile).$promise.then(function (response) {
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.reload('UserProfile');
                }); 
            }
            if($scope.photoUpload === true) {          
                $('#inputFile').val('');
                UserProfilesImageFactory.update({
                    profileimg:$scope.cropImgSrc
                }).$promise.then(function (response) {
                    Flash.set($filter("translate")(response.Success), 'success', true);
					$state.go('UserProfile', {}, { reload: true });
                });
            }
        };
        model.userProfileDeactive = function () {
            SweetAlert.swal({
                title: "Are you sure",
                text: "Account deactivate causes to loose your account",
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
                        UserDeactivate.post()
                            .$promise.then(function (response) {
                                if (angular.isDefined(response.Success)) {
									model.deactivateLogout();
                                    Flash.set($filter("translate")(response.Success), 'success', true);
                                } else {
                                    Flash.set($filter("translate")(response.Failure), 'error', true);
                                }
                            });
                    }
                });
        };
        model.photoUpload = function (type) {
            if (parseInt(type) === 1) {
                $scope.photoUpload = true;
                $scope.fieldsRequired = false;
            } else {
                $scope.photoUpload = false;
                $scope.fieldsRequired = true;
            }
        };
        $('#inputFile').on('change', function () {
            readFile(this);
        });

        function readFile(input) {
            if (input.files && input.files[0]) {
                $('.js-cropimg-choose').addClass('hide');
                $('.js-crop-image-section').addClass('hide');
                $('.js-crop-col-md-3').addClass('p-l-0');

                $uploadCrop = $('.js-image-crop').croppie({
                    enableExif: true,
                    viewport: {
                        width: 254,
                        height: 208,
                        //type: 'circle'
                    },
                    boundary: {
                        width: 264,
                        height: 218
                    }
                });
                btnhtml = '<span class="btn btn-green crop-image"> Crop </span> <span class="btn btn-red js-crop-image-cancel"> Cancel </span>';

                $('.cr-slider-wrap').after(btnhtml);

                $('.crop-image').on('click', function (ev) {
                    $uploadCrop.croppie('result', {
                        type: 'canvas',
                        size: 'viewport'
                    }).then(function (resp) {
                        $scope.cropImgSrc = resp;
                        $('.js-image-crop-tmp-update').attr('src', resp);
                        $('.js-image-crop').html('');
                        $('.js-image-crop').removeClass('ready');
                        $('.js-cropimg-choose').removeClass('hide');
                        $('.js-crop-image-section').removeClass('hide');
                        $('.js-crop-col-md-3').removeClass('p-l-0');
                    });
                });

                $('.js-crop-image-cancel').on('click', function () {
                    $('.js-image-crop').html('');
                    $('.js-image-crop').removeClass('ready');
                    $('.js-cropimg-choose').removeClass('hide');
                    $('.js-crop-image-section').removeClass('hide');
                });
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('.js-image-crop').addClass('ready');
                    $uploadCrop.croppie('bind', {
                        url: e.target.result
                    }).then(function () {
                        console.log('jQuery bind complete');
                    });
                };
                reader.readAsDataURL(input.files[0]);
            } else {
                swal("Sorry - you're browser doesn't support the FileReader API");
                $('.js-cropimg-choose').removeClass('hide');
            }
        }
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
}(angular.module("Abs.user")));