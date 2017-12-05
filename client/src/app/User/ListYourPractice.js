(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:ListYourPracticeController
     * @description
     *
     * This is user register controller having the methods setmMetaData, init, and signup. It controls the register functionalities.
     **/
    module.controller('ListYourPracticeController', function ($auth, $state, $scope, Flash, $rootScope, $filter, AuthFactory, $location, Genders, City, Specialties, Language) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:ListYourPracticeController
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
         * @methodOf user.controller:ListYourPracticeController
         * @description
         * This method will initialze the page. It uses setMetaData() and captcha_site_key.
         *
         **/
        model.init = function () {
           model.setMetaData();
           $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Register");
			if(angular.isDefined($state.params.signin)){
				$scope.gotoDiv('joinlationmedica');
			}
			$scope.breakpointSlick = [
				{
				  breakpoint: 1199,
				  settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					arrows: true
				  }
				}
			];
        };
        model.init();
        Specialties.specialtyliList({
        }).$promise.then(function (response) {
            $rootScope.specialtyliLists = response.specialties;
        });
        Language.languageList({
        }).$promise.then(function (response) {
            $rootScope.languageLists = response.data;
        });
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
         * @methodOf user.controller:ListYourPracticeController
         * @description
         * This method will validate the credentials and signup the user.
         *
         * @param {Boolean} isvalid Boolean flag to indicate whether the function call is valid or not
         **/
        model.signup = function (isvalid) {
            
			if (isvalid) {
					
                var credentials = {
                    first_name: model.first_name,
                    last_name: model.last_name,
                    username: model.username,
                    email: model.email,
                    password: model.password,
                    confirm_password: model.confirm_password,
                    phone: model.phone,
                    specialty_id: model.specialty_id,
                    postal_code: model.postal_code,
                    is_agree_terms_conditions: model.terms_conditions,
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
		model.search = function () {
			if (model.specialty_id || model.city_id) {
                $location.path('/search').search({
                    is_online_booking: true,
                    specialty_id: model.specialty_id,
                    city_id: model.city_id,
                });
            } else {
                $location.path('/search').search({
                    is_online_booking: true
                });
            }
        };
    });
}(angular.module("Abs.user")));