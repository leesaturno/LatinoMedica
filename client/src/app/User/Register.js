(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:UserRegisterController
     * @description
     *
     * This is user register controller having the methods setmMetaData, init, and signup. It controls the register functionalities.
     **/
    module.controller('UserRegisterController', function ($auth, $state, $scope, Flash, $rootScope, $filter, AuthFactory, $location, vcRecaptchaService, Genders, City, Specialties, Language) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:UserRegisterController
         * @description
         *
         * This method will set the meta data dynamically by using angular.element function
         **/
        model.setMetaData = function () {
            var pageTitle = $filter("translate")("Register");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf user.controller:UserRegisterController
         * @description
         * This method will initialze the page. It uses setMetaData() and captcha_site_key.
         *
         **/
        model.init = function () {
            model.setMetaData();
            model.captcha_site_key = $rootScope.settings['captcha.site_key'];
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Register");
        };
        model.init();
        model.user_type = $state.params.user_type;
        if (model.user_type == 'doctor') {
            Specialties.specialtyliList({
            }).$promise.then(function (response) {
                $rootScope.specialtyliLists = response.specialties;
            });
            Language.languageList({
            }).$promise.then(function (response) {
                $rootScope.languageLists = response.data;
            });
        }
        Genders.genderList({
        }).$promise.then(function (genderResponse) {
            $rootScope.genderLists = genderResponse.data;
			
        });
		City.cityList({}).$promise.then(function (response) {
                $rootScope.cityArray = response.data;
        });
        /**
         * @ngdoc method
         * @name signup
         * @methodOf user.controller:UserRegisterController
         * @description
         * This method will validate the credentials and signup the user.
         *
         * @param {Boolean} isvalid Boolean flag to indicate whether the function call is valid or not
         **/
        model.signup = function (isvalid) {
            //model.captchaErr = '';
            //if (vcRecaptchaService.getResponse() === "") { //if string is empty
               // model.captchaErr = $filter("translate")("Please resolve the captcha and submit");
            //}
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
					hobbies: model.hobbies,
                    is_agree_terms_conditions: model.terms_conditions,
                    //'g-recaptcha-response': vcRecaptchaService.getResponse()
                };
                /**
                 * @ngdoc service
                 * @name user.signup
                 * @kind function
                 * @description
                 * The auth service get the credentials from the user and validate it.
                 * @params {string} credentials login credentials provided by the user
                 **/
				if ($scope.cropImgSrc !== undefined) {
                    credentials.profileimg = $scope.cropImgSrc;
                }
				$auth.signup(credentials).then(function (response) {
                    if (response.data.token) {
                        $auth.setToken(response.data.token);
                        AuthFactory.fetch().$promise.then(function (user) {
                            localStorage.auth = user;
                            $state.go('MyCalender');
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
                        if (errorResponse.confirm_password) {
                            model.confirmPasswordErr = $filter("translate")(errorResponse.confirm_password[0]);
                        }
                        Flash.set($filter("translate")(error.data.message), 'error', false);
                    } else {
                        Flash.set($filter("translate")(error.data.message), 'error', false);
                    }
                });
            }
        };
		
		/**
		*Image upload for register page
		*Crop Function
		**/
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
		/* [month validation] */
		model.mothValid = function () {
		  	if (model.month > 12) {
				model.month = '';	
			}
		};
		/* [date validation] */
		model.dateValid = function () {
		  	if (model.date > 31) {
				model.date = '';	
			}
		};
    });
}(angular.module("Abs.user")));