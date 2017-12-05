(function (module) {
    module.config(function ($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('SubscriptionsPlans', {
            url: '/subscribe/plans',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SubscriptionsController as model',
                    templateUrl: 'Plugins/Subscriptions/subscriptionsPlans.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('SubscriptionPlan', {
                url: '/subscribe/payment/:id',
                authenticate: true,
                views: {
                    'main': {
                        controller: 'SubscriptionsController as model',
                        templateUrl: 'Plugins/Subscriptions/subscriptionsPayment.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
        }).state('success', {
            url: '/payment/success',
            authenticate: true,
            views: {
                'main': {
                    controller: 'SubscriptionsController as model',
                    templateUrl: 'Plugins/Subscriptions/subscriptionsSuccess.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('cancel', {
            url: '/subscribe/payment/cancel',
            authenticate: true,
            views: {
                'main': {
                    controller: 'SubscriptionsController as model',
                    templateUrl: 'Plugins/Subscriptions/subscriptionsCancel.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('Subscribe', {
            url: '/subscribe/list',
            authenticate: true,
            views: {
                'main': {
                    controller: 'SubscriptionsController as model',
                    templateUrl: 'Plugins/Subscriptions/subscribe_list.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });
// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.Subscriptions", [
    'ui.router',
    'ngResource',
    'mgcrea.ngStrap',
    'oitozero.ngSweetAlert'
])));(function(module) {
    module.factory('Planslist', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscriptions', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
	module.factory('UserPlanslist', function ($resource, GENERAL_CONFIG) {         
		return $resource(GENERAL_CONFIG.api_url + '/subscribe/plancheck/:id', {             
			id: '@id',         
		}, {             
			'get': {                
				method: 'GET'             
			}         
		});     
	});
    module.factory('GetSubscriptionDetail', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscriptions/:id', {
            id: '@id',
        }, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('PaymentGateway', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscription/subscribe', {}, {
            'post': {
                method: 'POST'
            }
        });
    });
    module.factory('PaymentSuccessApprove', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscription/approve/:tokenid/:payerid', {
            tokenid: '@tokenid',
            payerid: '@payerid'
        }, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('Subscribe', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscribe/list', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('PlanAction', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/subscription/:par', {
            par:'@par'
        }, {
            'get': {
                method: 'GET'
            }
        });
    });
	 module.factory('ManualPayDetails', function ($resource, GENERAL_CONFIG) {         
		 return $resource(GENERAL_CONFIG.api_url + '/settings/category/:id', { id: '@id' }, {             
			 'get': {                 
				 method: 'GET'             
			 }         
		 });     
	 });
})(angular.module('Abs.Subscriptions'));
(function(module) {

    module.directive('subscriptionAlert', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/Subscriptions/subscription_alert.tpl.html',
            link: linker,
            controller: 'SubscriptionsController as model',
            bindToController: true
        };
    });

    module.controller('SubscriptionsController', function($scope, $state, $rootScope, $location, Flash, $filter, GENERAL_CONFIG, Planslist, GetSubscriptionDetail, PaymentGateway, SweetAlert, PaymentSuccessApprove, Subscribe, PlanAction) {
        var model = this;
        model.subscriptionsplan = {};
        if ($state.current.name == 'SubscriptionsPlans') {
            Planslist.get().$promise.then(function (response) {
                $scope.subscriptionsplan = response.subscriptions;
                $scope.urlGO = response.urlgo;
                if($scope.urlGO !== undefined){
                    $location.path($scope.urlGO);
                }
                if($scope.subscriptionsplan === undefined){
                    $scope.subCount = 0;
                }else{
                    $scope.subCount = $scope.subscriptionsplan.length;
                }
            });
        }
        function subscribe(){
            Subscribe.get().$promise.then(function(response) {
                $scope.subscribeDetail = response.subscribes;
            });
        }

        if ($state.current.name == 'SubscriptionPlan') {
            GetSubscriptionDetail.get({id: $state.params.id}).$promise.then(function(response) {
                model.subscribeplan = response;
                model.subscribeplan.price = parseInt(response.price);
            });
        }
        if ($state.current.name == 'Subscribe') {
            subscribe();
        }
        $scope.planaction = function (actionType){
            if(actionType == 'active'){
                actParam = 'active';
                var titleMsg = 'Are you sure to activate your suspended paypal subscription?';
            }else if(actionType == 'suspend'){
                actParam = 'suspend';
                var titleMsg = 'Are you sure to Suspend your activated paypal subscription?';
            }else{
                actParam = 'cancel';
                var titleMsg = 'Are you sure to cancel your paypal subscription?';
            }
             SweetAlert.swal({
                title: titleMsg,
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                if(isConfirm) {
                    $('#preloader').attr('style','display:block');
                    $('#status').attr('style','display:block');
                    PlanAction.get({'par': actParam}).$promise.then(function(response){
                        $('#preloader').attr('style','display:none');
                        $('#status').attr('style','display:none');
                        subscribe();
                        if(actionType == 'active'){
                            $rootScope.auth.is_paypal_suspend = 0;
                            var respMsg = "Paypal Subscription Activated Successfully"; 
                        }else if(actionType == 'suspend'){
                            $rootScope.auth.is_paypal_suspend = 1;
                            var respMsg = "Paypal Subscription Suspended Successfully";
                        }else{
                             $rootScope.auth.is_paypal_cancel = 1;
                             var respMsg = "Paypal Subscription Canceled Successfully";
                        }
                        Flash.set($filter("translate")(respMsg), 'success', true);
                    });
                }
            });
        };
        model.payment = function (){
            SweetAlert.swal({
                title: "Are you sure to subscribe this plan?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                if(isConfirm) {
                    $('#preloader').attr('style','display:block');
                    $('#status').attr('style','display:block');
                    /* Here we are using paypal only so i m directly post the values to backend controller */
                   PaymentGateway.post(model.subscribeplan).$promise.then(function(response) {
                        $scope.gatewayDetails = response;
                        if($scope.gatewayDetails.status === 'success'){
                           window.location.href=$scope.gatewayDetails.urlgo;
                        }
                   });
                }
            });
        };
        if ($state.current.name == 'success') {
           PaymentSuccessApprove.get({tokenid: $location.search().token, payerid:  $location.search().PayerID}).$promise.then(function(response) {
                $rootScope.auth.is_trial = 0;
           });
        }
    });
})(angular.module('Abs.Subscriptions'));angular.module('Abs').requires.push('Abs.Subscriptions');/**
 * @ngdoc object
 * @name contacts
 * @description
 *
 * This is the module for contacts. It contains the contact us functionalities.
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} contactUs name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *        [
 *            'ui.router',
 *            'ngResource',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel',
 *            'vcRecaptcha'
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.contactUs module with the {@link angular.Module} api.
 **/
(function (module) {

    module.config(function ($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider
            .state('contact', {
                url: '/contactus',
                authenticate: false,
                views: {
                    'main': {
                        controller: 'ContactUsController as model',
                        templateUrl: 'Plugins/Contacts/contacts.tpl.html',
                        resolve: ResolveServiceData
                    }
                }
            });

    });

}(angular.module('Abs.Contacts', [
    'ui.router',
    'ngResource',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.facebook.pixel',
    'vcRecaptcha'
])));
(function (module) {
    /**
     * @ngdoc directive
     * @name contacts.directive:contactLinks
     * @scope
     * @restrict AE
     *
     * @description
     * contactLink directive creates a contact link. We can use this as an element.
     *
     * @param {string} googleAnalytics Name of the directive
     *
     **/
    module.directive('contactLinks', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/Contacts/contact_links.tpl.html',
            link: linker,
            controller: 'ContactUsController as model',
            bindToController: true
        };
    });
    /**
     * @ngdoc controller
     * @name contacts.controller:ContactUsController
     * @description
     *
     * This is contactUs controller having the methods init(), setMetaData(), and contactFormSubmit().
     *
     * It controls the functionality of contact us.
     **/
    module.controller('ContactUsController', function ($scope, $rootScope, ContactsFactory, $filter, Flash, $state, $location, vcRecaptchaService) {
        model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf contacts.controller:ContactUsController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element.
         **/
        model.setMetaData = function () {
            var pageTitle = $filter("translate")("Contact Us");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf Contacts.controller:ContactUsController
         * @description
         * This method will initialize the page. It returns the page title.
         **/
        model.init = function () {
            model.setMetaData();
            model.captcha_site_key = $rootScope.settings['captcha.site_key'];
            if($location.path() == '/contactus') {
                $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Contact Us");
            }
        };
        $scope.setRecaptchaId = function (widgetId) {
            $scope.widgetId = widgetId;
        };
        model.init();
        /**
         * @ngdoc method
         * @name contactFormSubmit
         * @methodOf contacts.controller:ContactUsController
         * @description
         * This method handles the form which is used for contact.
         *
         **/
        model.contactFormSubmit = function ($valid) {
            model.emailErr = '';
            model.captchaErr = '';
            var response = vcRecaptchaService.getResponse($scope.widgetId);
            if (response.length === 0) {
                model.captchaErr = $filter("translate")("Please resolve the captcha and submit");
            } else {
                model.captchaErr = '';
            }
                if ($valid) {
                    model.contactForm.recaptcha_response = response;
                    ContactsFactory.save(model.contactForm).$promise.then(function (response) {
                        Flash.set($filter("translate")("Thank you, we received your message and will get back to you as soon as possible."), 'success', true);
                        $state.reload('contact');
                    }, function (error) {
                        var errMsg = error.data.errors;
                        if (errMsg.email) {
                            model.emailErr = $filter("translate")(errMsg.email[0]);
                        }
                        Flash.set($filter("translate")("Contact message could not be sent. Please, try again."), 'error', false);
                    });
                }

        };
    });
}(angular.module("Abs.Contacts")));
(function (module) {
    /**
     * @ngdoc service
     * @name contacts.ContactsFactory
     * @description
     * ContactsFactory is a factory service which is used in post a contact form.
     * @param {string} ContactsFactory The name of the factory
     * @param {function()} function It uses post method to save the data
     */
    module.factory('ContactsFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(
            GENERAL_CONFIG.api_url + '/contacts', {}, {
                'save': {
                    method: 'POST'
                }
            }
        );
    });

})(angular.module("Abs.Contacts"));
angular.module('Abs').requires.push('Abs.Contacts');/**
 * @ngdoc object
 * @name pages
 * @description
 *
 * this is the module for pages
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} pages name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *        [
 *            'ui.router',
 *            'ngResource',
 *            'angulartics',
 *            'angulartics.google.analytics',
 *            'angulartics.facebook.pixel'
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.Pages module with the {@link angular.Module} api.
 **/
(function (module) {

    module.config(function ($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('pages', {
            url: '/page/{slug}',
            authenticate: false,
            views: {
                "main": {
                    controller: 'PagesController as model',
                    templateUrl: 'Plugins/Pages/pages.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Pages'}
        });
    });

}(angular.module("Abs.Pages", [
    'ui.router',
    'ngResource',
    'angulartics',
    'angulartics.google.analytics',
    'angulartics.facebook.pixel'
])));
(function (module) {
    /**
     * @ngdoc directive
     * @name pages.directive:footerLinks
     * @scope
     * @restrict AE
     *
     * @description
     * footerLinks directive creates a footerLinks tag. We can use this as an element.
     *
     * @param {string} googleAnalytics Name of the directive
     *
     **/
    module.directive('footerLinks', function () {        
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'A',
            //replace: true,
            templateUrl: 'Plugins/Pages/page_links.tpl.html',
            link: linker,
            controller: 'PagesController as model',
            bindToController: true
        };
    });
    /**
     * @ngdoc controller
     * @name pages.controller:PagesController
     * @description
     *
     * This is pages controller having the methods init(), setMetaData(). It controls the static pages.
     **/
    module.controller('PagesController', function ($scope, $http, $filter, $state, $rootScope, $location, PageFactory, $translate, $translateLocalStorage, Cities, Specialties) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf pages.controller:PagesController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element
         **/
        model.setMetaData = function (title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        /**
         * @ngdoc method
         * @name init
         * @methodOf pages.controller:PagesController
         * @description
         * This method will initialze the page. It returns the page title
         *
         **/
        model.init = function () {
            var currentLocale = $translate.preferredLanguage();
            if ($translate.use() !== undefined) {
                currentLocale = $translate.use();
            } else if ($translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== undefined || $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== null) {
                currentLocale = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY');
            }
            if ($state.params.slug !== undefined && $state.params.slug !== null) {
                PageFactory.get({slug: $state.params.slug, iso2: currentLocale}).$promise
                    .then(function (response) {
                        $scope.page = response;
                        model.setMetaData(response.title);
                        $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + response.title;
                    });
            }
        };
        model.init();
        footerLinks();
        function footerLinks(){
            model.footerScrollCount = 5;
            model.phaseOne = [
                {title:'About Us',slug:'about-us'},
                {title:'Press',slug:'about-us'},
                {title:'Employment',slug:'about-us'},
                {title:'Contact',slug:'about-us'},
                {title:'Answers',slug:'about-us'},
                {title:'FAQ',slug:'faq'},
                {title:'Blog',slug:'blog'}                
            ];
            model.phaseTwo = [
                {title:'Doctor',slug:'doctor'},
                {title:'Practice',slug:'practice'},
                {title:'Specialty',slug:'speciality'},
                {title:'Procedure',slug:'procedure'},
                {title:'Location',slug:'location'},
                {title:'Insurance',slug:'insurance'}                
            ];
            Cities.citiesliList({}).$promise.then(function (cityResponse) {
                model.phaseThree = cityResponse.data;
            });
            Specialties.specialtyliList({}).$promise.then(function (specialtyResponse) {
                model.phaseFour = specialtyResponse.specialties;
            });
            /*model.phaseThree = [
                {title:'Distrito Capital',slug:'distritocapital'},
                {title:'Amazonas',slug:'amazonas'},
                {title:'Anzoátegui',slug:'anzoátegui'},
                {title:'Apure',slug:'apure'},
                {title:'Aragua',slug:'aragua'},
                {title:'Barinas',slug:'barinas'},
                {title:'Bolívar',slug:'bolívar'},
                {title:'Carabobo',slug:'carabobo'}                     
            ];
            model.phaseFour = [
                {title:'Cardiologist',slug:'Cardiologist'},
                {title:'Dentist',slug:'Dentist'},
                {title:'Gastroenterologist',slug:'Gastroenterologist'},
                {title:'Geriatrician',slug:'Geriatrician'},
                {title:'Microbiologist',slug:'Microbiologist'},
                {title:'Pediatrician',slug:'Pediatrician'},
                {title:'Psychiatrist',slug:'Psychiatrist'},
                {title:'Urologist',slug:'Urologist'}                     
            ];*/
            model.footerEnd = [
                {title:'Site Map',slug:'about-us'},
                {title:'Privacy Policy',slug:'about-us'},
                {title:'Web Use Policy',slug:'about-us'},
                {title:'Diseno Web: Cincobe Publicidad & Marketing',slug:'about-us'}                
            ];
        }
    });
}(angular.module("Abs.Pages")));
(function (module) {
    /**
     * @ngdoc service
     * @name Pages.PageFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} PageFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('PageFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/page/:slug/:iso2', {
                slug: '@slug',
                iso2: '@iso2'
            }, {
                'get': {
                    method: 'GET'
                }
            }
        );
    });
})(angular.module("Abs.Pages"));
angular.module('Abs').requires.push('Abs.Pages');(function (module) {
    module.config(function ($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('UserPhotos', {
            url: '/photos',
            authenticate: true,
            views: {
                "main": {
                    controller: 'PhotosController as model',
                    templateUrl: 'Plugins/Photos/photo_index.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserPhotosAdd', {
            url: '/photos/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'PhotosController as model',
                    templateUrl: 'Plugins/Photos/photoAdd.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });
}(angular.module("Abs.Photos", [
    'ui.router',
    'ngResource',
    'ngFileUpload',
    'oitozero.ngSweetAlert',
    'jkuri.gallery'
])));
(function(module) {
    module.factory('PhotosFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos/:username', {username: '@username'}, {
            'get': {
                method: 'GET'
            }
        });
    });
    
    module.factory('PhotosAddFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos', {}, {
            'save': {
                method: 'POST'
            }
        });
    });
    
    module.factory('PhotoDeleteFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/photos/:id', {
                id: '@id'
            }, {
                'delete': {
                    method: 'DELETE'
                }
            }
        );
    });
   
    
})(angular.module("Abs.Photos"));
(function (module) {
    module.directive('clinicPhotos', function () {
        var linker = function (scope, element, attrs) {

        };
        return {
            restrict: 'E',
            templateUrl: 'Plugins/Photos/clinic_photos.tpl.html',
            link: linker,
            controller: 'PhotosController as model',
            bindToController: true
        };
    });

    module.controller('PhotosController', function ($state, $scope, Flash, $filter, $rootScope, $location, Upload, GENERAL_CONFIG, PhotosFactory, PhotoDeleteFactory, SweetAlert, $window, $timeout) {
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
            var pageTitle = $filter("translate")("My Photos");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter: title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
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
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Photos");
        };
        model.init();
        if($state.current.name !== 'UserPhotosAdd'){
            var splitedUrl = $location.url().split('/');
            $scope.images = [];
            PhotosFactory.get({ 'username': splitedUrl[2] }).$promise.then(function (response) {
                $scope.photos = response.data;
                $scope.isShown = ($scope.photos.length > 0) ? false:true;
                angular.forEach($scope.photos, function (value, key) {
                    $scope.images.push({
                        thumb: value.attachmentable.data.thumb.small,
                        img: value.attachmentable.data.thumb.medium,
                        description: 'Clinic Photo'
                    });
                });
                $scope.hospitalphotos = $scope.images;
            });
        }
        $scope.uploadFiles = function (files) {
            $scope.files = files;
            if (files && files.length) {
                Upload.upload({
                    url: GENERAL_CONFIG.api_url + '/photos',
                    data: {
                        files: files
                    }
                }).then(function (response) {
                    Flash.set($filter("translate")("Clinic Photos has been added"), 'success', true);
                    $state.go('UserPhotos');        
                    $timeout(function (){
                        $window.location.reload();
                    },3000);
                }, function (response) {
                    Flash.set($filter("translate")("Clinic Photos could not be added. Please, try again."), 'error', false);
                }, function (evt) {
                    $scope.progress =
                        Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                });
            }
        };

        $scope.photoDelete = function (id) {
            SweetAlert.swal({
                title: "Are you sure to remove this clinic photo?",
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
                        PhotoDeleteFactory.delete({ id: id }).$promise.then(function (response) {
                            if (response.Success) {
                                Flash.set($filter("translate")(response.Success), 'success', true);
                            } else {
                                Flash.set($filter("translate")(response.Failed), 'error', false);
                            }
                            PhotosFactory.get().$promise.then(function (response) {
                                $scope.photos = response.data;
                                $scope.isShown = ($scope.photos.length > 0) ? false : true;
                            });
                        });
                    }
                });

        };

        $scope.allPhotos = function () {
            $scope.showPhoto = true;
        };
    });
}(angular.module("Abs.Photos")));
angular.module('Abs').requires.push('Abs.Photos');(function (module) {
    module.config(function ($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('UserEducations', {
            url: '/user/education',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserEducationsController as model',
                    templateUrl: 'Plugins/UserEducations/userEducations.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserEducationAdd', {
            url: '/user/education/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserEducationsController as model',
                    templateUrl: 'Plugins/UserEducations/userEducationAdd.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state('UserEducationEdit',{
            url: '/user/education/{id}/edit',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserEducationsController as model',
                    templateUrl: 'Plugins/UserEducations/userEducationEdit.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.UserEducations", [
    'ui.router',
    'ngResource',
    'mgcrea.ngStrap.datepicker',
    'oitozero.ngSweetAlert'
])));
(function (module) {
    module.controller('UserEducationsAddController', function ($state, $scope, Flash, $filter, UserEducationAddFactory) {
        var model = this;
        $scope.today = function () {
            $scope.dt = new Date();
        };
        $scope.today();
        $scope.open = function () {
            $scope.popup.opened = true;
        };
        $scope.popup = {
            opened: false
        };
        $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        $scope.format = $scope.formats[0];
        $scope.userEducation = function () {
            UserEducationAddFactory.save(model.user_education)
                    .$promise
                    .then(function (response) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('UserEducations', {});
                    });

        };
    });

}(angular.module("Abs.UserEducations")));(function (module) {
    module.controller('UserEducationsEditController', function ($state, $filter, $rootScope, Flash, UserEducationEditFactory, UserEducationDeleteFactory) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Edit Education");
        };
        UserEducationEditFactory.get({id: $state.params.id}).$promise.then(function (response) {
            model.user_education = response;
        });
        model.userEducationEdit = function ($valid) {
            if($valid){
                UserEducationEditFactory.update({id: $state.params.id}, model.user_education).$promise.then(function (response) {
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('UserEducations');
                });
            }
        };
        model.init();
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.UserEducations")));(function (module) {
    module.factory('EducationList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education', {}, {
            'get': {
                method: 'GET'
            }
        });
    });
    module.factory('EducationAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/add', {}, {
            'post': {
                method: 'POST'
            }
        });
    });
    module.factory('EducationEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/:id', {}, {
            'get': {
                method: 'GET'
            },
            'put':{
                method: 'PUT'
            }
        });  
    });
     module.factory('EducationDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/user/education/:id', {
                id: '@id'
            }, {
                'delete': {
                    method: 'DELETE'
                }
            }
        );
    });
})(angular.module('Abs.UserEducations'));
(function(moduel){
    moduel.controller('UserEducationsController', function($state, $rootScope, $scope, $filter, $location, $timeout, Flash, SweetAlert, EducationList, EducationAdd, EducationEdit, EducationDelete){
        $scope.pageTitle = 'Doctor Education';
        var model = this;
        model.setMetaData = function () {
            var pageTitle = $filter("translate")($scope.pageTitle);
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter: title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function () {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Photos");
        };
        model.init();
        if($state.current.name === 'UserEducations'){
            $scope.pageTitle = 'Doctor Education';
            EducationList.get().$promise.then(function (response) {
                $scope.userEducations = response.user_educations;
                $scope.noEducationDiv = ($scope.userEducations.length > 0)?false:true;
            });
        }else if($state.current.name === 'UserEducationAdd'){
            $scope.pageTitle = 'Add Doctor Education';
        }else if($state.current.name === 'UserEducationEdit'){
            $scope.pageTitle = 'Edit Doctor Education';
            EducationEdit.get({id: $state.params.id}).$promise.then(function (response) {
                model.user_education = response;
            });
        }

        $scope.userEducation = function () {
            EducationAdd.post(model.user_education).$promise.then(function (response) {
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $timeout(function(){
                        $state.go('UserEducations');
                    },500);
                } else {
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };

        model.userEducationEdit = function ($valid) {
            if($valid){
                EducationEdit.put({id: $state.params.id}, model.user_education).$promise.then(function (response) {
                    if(response.Success){
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $timeout(function(){
                            $state.go('UserEducations');
                        },500);
                    } else {
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            }
        };

        $scope.UserEducationDelete = function (id) {
             SweetAlert.swal({
                title: "Are you sure to Delete?",
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
                    EducationDelete.delete({id: id}).$promise.then(function (response) {
                        Flash.set($filter("translate")("User Education deleted successfully"), 'success', true);
                        $timeout(function(){
                            $state.reload();
                        },500);
                    }, function (error) {
                        Flash.set($filter("translate")("User Education could not be deleted"), 'error', false);
                    });
                }
            });
        };
    });
}(angular.module("Abs.UserEducations")));angular.module('Abs').requires.push('Abs.UserEducations');(function (module) {

    module.config(function ($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };

        $stateProvider.state('MyDocotors', {
            url: '/user/favorite',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserFavoriteController as model',
                    templateUrl: 'Plugins/UserFavorites/user_favorites.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'My Doctors'}
        });
    });

}(angular.module("Abs.UserFavorites", [
    'ui.router',
    'ngResource',
    'oitozero.ngSweetAlert'
])));
(function (module) {
    module.directive('favoriteAdd', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/UserFavorites/favorite_add.tpl.html',
            link: linker,
            controller: 'UserFavoriteController as model',
            bindToController: true
        };
    });

    module.controller('UserFavoriteController', function ($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, MyDocotors, FavoriteAdd, FavoriteDelete) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf pages.controller:PagesController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element
         **/
        model.setMetaData = function (title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        model.init = function () { 
             
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Doctors");
 
            MyDocotors.get().$promise.then(function (response) {
                $scope.doctorDetails = response.data;
                $scope._metadata = response.meta.pagination;
            });
            $scope.add_favorite = function () {
                var splitedUrl = $location.url().split('/');
                FavoriteAdd.post({ 'username': splitedUrl[2] }).$promise.then(function (response) {
                     if(response.Success){
                            Flash.set($filter("translate")(response.Success), 'success', true);
                        }else{                        
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                });
            };
        };
        $scope.remove_favorite = function (favoriteId) {
             SweetAlert.swal({
                title: "Are you sure to remove this doctor in your favorite?",
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
                    FavoriteDelete.delete({ 'id': favoriteId }).$promise.then(function (response) {
                        if(response.Success){
                            Flash.set($filter("translate")(response.Success), 'success', true);
                        }else{                        
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                        MyDocotors.get().$promise.then(function (response) {
                            $scope.doctorDetails = response.data;
                            $scope._metadata = response.meta.pagination;
                        });
                    });
                }
            });

        };
        model.init();
    });
} (angular.module("Abs.UserFavorites")));
(function (module) {
    /**
     * @ngdoc service
     * @name Pages.PageFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} PageFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('MyDocotors', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorites', {}, {
                get: {
                    method: 'GET'
                }
            }
        );
    });
    module.factory('FavoriteAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/add', {}, {
                post: {
                    method: 'POST'
                }
            }
        );
    });
    module.factory('FavoriteDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/favorite/delete/:id', {id:'@id'}, {
                delete: {
                    method: 'delete'
                }
            }
        );
    });
})(angular.module("Abs.UserFavorites"));
angular.module('Abs').requires.push('Abs.UserFavorites');/**
 * agriyabase - v0.0.1 - 2016-04-22
 *
 * Copyright (c) 2016 Agriya
 */
/**
 * @ngdoc object
 * @name translations
 * @description
 *
 * This is the module for translations
 *
 * The angular.module is a global place for creating, registering and retrieving Angular modules.
 * All modules that should be available to an application must be registered using this mechanism.
 * Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
 *
 * @param {string} translations name of the module
 * @param {!Array.<string>=} dependencies If specified then new module is being created. If unspecified then the module is being retrieved for further configuration.
 *
 *         [
 *            'ngResource',
 *            'pascalprecht.translate',
 *            'tmh.dynamicLocale',
 *            'ngSanitize',
 *            'ngCookies',
 *        ]
 * @param {Function=} configFn Optional configuration function for the module.
 * @returns {angular.Module} new Abs.socialLogin module with the {@link angular.Module} api.
 **/
(function (module) {
}(angular.module('Abs.Translations', [
    'ngResource',
    'pascalprecht.translate',
    'tmh.dynamicLocale',
    'ngSanitize',
    'ngCookies'
])));
(function (module) {
    module.config(function (tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('assets/js/angular-i18n/angular-locale_{{locale}}.js');
    });
    /**
     * @ngdoc service
     * @name translations.LanguageList
     * @function
     * @description
     * It is used to list the languages.
     * @param {string}  LanguageList  service name
     */
    module.service('LanguageList', function ($sce, $rootScope, $q, GENERAL_CONFIG) {
        promise = $.get(GENERAL_CONFIG.api_url + '/languages?filter=active&sort=name&sortby=asc', function (response) {
        });
        return {
            promise: promise
        };
    });
	module.service('LanguageListActive', function ($sce, $rootScope, $q, GENERAL_CONFIG) {
        promise = $.get(GENERAL_CONFIG.api_url + '/languages/active', function (response) {
        });
        return {
            promise: promise
        };
    });
    /**
     * @ngdoc service
     * @name translations.LocaleService
     * @function
     * @description
     * It maintains the locale service of the languages.
     * @param {string}  LocaleService  service name
     */
    module.service('LocaleService', function ($translate, $rootScope, tmhDynamicLocale, GENERAL_CONFIG, LanguageListActive, ResolveService, $translateLocalStorage) {
        'use strict';
        var localesObj;
        var loadedlocalesObj = {};
        var _LOCALES_DISPLAY_NAMES = [];
        var _LOCALES;
        var promiseLanguages = LanguageListActive.promise;
        promiseLanguages.then(function (response) {
            $.each(response.data, function (i, data) {
                loadedlocalesObj[data.iso2] = data.name;
            });
            localesObj = loadedlocalesObj;
            // locales and locales display names
            _LOCALES = Object.keys(localesObj);
            if (!_LOCALES || _LOCALES.length === 0) {
                console.error('There are no _LOCALES provided');
            }
            _LOCALES.forEach(function (locale) {
                _LOCALES_DISPLAY_NAMES.push(localesObj[locale]);
            });
        });
        // STORING CURRENT LOCALE
        var currentLocale = $translate.preferredLanguage();
        if ($translate.use() !== undefined) {
            currentLocale = $translate.use();
        } else if ($translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== undefined && $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY') !== null) {
            currentLocale = $translateLocalStorage.get('NG_TRANSLATE_LANG_KEY');
        }
        // METHODS
        var checkLocaleIsValid = function (locale) {
            return _LOCALES.indexOf(locale) !== -1;
        };
        var setLocale = function (locale) {
            if (!checkLocaleIsValid(locale)) {
                console.error('Locale name "' + locale + '" is invalid');
                return;
            }
            // updating current locale
            currentLocale = locale;
            // asking angular-translate to load and apply proper translations
            $translate.use(locale);
        };
        // EVENTS
        // on successful applying translations by angular-translate
        $rootScope.$on('$translateChangeSuccess', function (event, data) {
            document.documentElement.setAttribute('lang', data.language); // sets "lang" attribute to html
            // asking angular-dynamic-locale to load and apply proper AngularJS $locale setting
            tmhDynamicLocale.set(data.language.toLowerCase().replace(/_/g, '-'));
        });
        return {
            getLocaleDisplayName: function () {
                return localesObj[currentLocale];
            },
            setLocaleByDisplayName: function (localeDisplayName) {
                setLocale(
                    _LOCALES[
                        _LOCALES_DISPLAY_NAMES.indexOf(localeDisplayName) // get locale index
                        ]
                );
            },
            getLocalesDisplayNames: function () {
                return _LOCALES_DISPLAY_NAMES;
            }
        };
    });
    /**
     * @ngdoc directive
     * @name translations:ngTranslateLanguageSelect
     * @scope
     * @restrict A
     *
     * @description
     * ngTranslateLanguageSelect directive creates a ngTranslateLanguageSelect tag. We can usae this as an attribute.
     *
     * @param {string}  footer  directive name
     *
     */
    module.directive('ngTranslateLanguageSelect', function (LocaleService, LanguageListActive) {
        'use strict';
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/Translations/language_translate.tpl.html',
            controller: function ($scope, $rootScope, $timeout, LanguageListActive) {
				var promiseSettings = LanguageListActive.promise;
                promiseSettings.then(function (response) {
                    $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                    $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                    $scope.visible = $scope.localesDisplayNames && $scope.localesDisplayNames.length > 1;
                });
                $scope.changeLanguage = function (locale) {
                    LocaleService.setLocaleByDisplayName(locale);
                };
				$timeout(function() {
					$scope.changeLanguage('Spanish'); // set primary language as Spanish
				},2000);				
            }
        };
    });
}(angular.module("Abs.Translations")));angular.module('Abs').requires.push('Abs.Translations');(function (module) {

    module.directive('questionAnswers', function(){
			return {
				restrict: 'E',
				transclude: true,
				scope: { slug:'@' },
				templateUrl: 'Plugins/QuestionAnswer/question_with_answer_view.tpl.html',
				controller: function($scope, $filter, $state, $timeout, Flash, QuestionSlug, QuestionView) {
					QuestionSlug.get({slug:$scope.slug}).$promise.then(function(response){
						$scope.questionR = response;
						QuestionView.get({slug:$scope.slug}).$promise.then(function(response){
							$scope.answers = response.data;
							$scope.paginates = response;
						});
					});
				}
			};
		});
	module.config(function ($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
		
        $stateProvider.state('QuestionList', {
            url: '/questions',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Questions List'}
        }).state('AnswersList', {
            url: '/answers',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answers_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Answers List'}
        }).state('QuestionAdd', {
            url: '/questions/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_add.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Question Add'}
        }).state('QuestionEdit', {
            url: '/questions/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Question Edit'}
        }).state('QuestionView', {
            url: '/questions/view/{slug}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/question_with_answer_view.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Question Edit'}
        }).state('AnswerQuestion', {
            url: '/answers/question',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/doctor_questions_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Questions'}
        }).state('AnswerAdd', {
            url: '/answers/add/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answer_add.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Answer Add'}
        }).state('AnswerEdit', {
            url: '/answers/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answer_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Answer Edit'}
        })
    });
}(angular.module("Abs.QuestionAnswer", [
    'ui.router',
    'ngResource',
    'oitozero.ngSweetAlert',
    'uiSwitch'
])));
(function (module) {
    module.controller('AnswersController', function ($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, AnswerQuestion, AnswerAdd, AnswersList, AnswerEdit) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf icals.controller:IcalController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element
         **/
        model.setMetaData = function (title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
         model.init = function () {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Answers");
        };
        if($state.current.name == 'AnswersList'){
            AnswersList.get().$promise.then(function(response){
                $scope.answers = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if($state.current.name == 'AnswerQuestion'){
            AnswerQuestion.get().$promise.then(function(response){
                $scope.questions = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if($state.current.name == 'AnswerAdd'){
            AnswerAdd.get({id:$state.params.id}).$promise.then(function(response){
                $scope.questions = response;
            });
        }
        if($state.current.name == 'AnswerEdit'){
            AnswerEdit.get({id:$state.params.id}).$promise.then(function(response){
                model.formValue = response;
            });
        }
        model.answerAdd = function(){
            AnswerAdd.post({id:$state.params.id},model.formValue).$promise.then(function (response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('AnswersList');
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };
        model.answerUpdate = function(){
            AnswerEdit.put(model.formValue).$promise.then(function (response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('AnswersList');
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };
		$scope.ShowHide = function (value) {
			appointmetHide = angular.element(document.getElementsByClassName('js-answers'+value));
			if (appointmetHide.hasClass('hide')) {
				appointmetHide.removeClass('hide');
			}
			else
			{
				appointmetHide.addClass('hide');
			}
		}
    });
} (angular.module("Abs.QuestionAnswer")));(function (module) {
    /**
     * @ngdoc service
     * @name Ical.IcalFactory
     * @description
     * PageFactory is used in page listing.
     * @param {string} IcalFactory The name of the factory
     * @param {function()} function It returns the url
     */
    module.factory('QuestionList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions', {}, {
            get: {
                method: 'GET'
            }
        });
    });

    module.factory('AnswerList', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers',{}, {
            get: {
                method: 'GET'
            }
        });
    });
    module.factory('QuestionAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/add', {}, {
            post:{
                method: 'POST'
            }
        });
    });
    module.factory('AnswerAdd', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/add/:id', {id:'@id'}, {
            get:{
                method:'GET'
            },
            post:{
                method: 'POST'
            }
        });
    });
    module.factory('QuestionEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/edit/:id', {id:'@id'}, {
            get: {
                method: 'GET'
            },
            put:{
                method: 'PUT'
            }
        });
    });
    module.factory('AnswerEdit', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/edit/:id', {id:'@id'}, {
            get: {
                method: 'GET'
            },
            put:{
                method:'PUT'
            }
        });
    });
    module.factory('QuestionDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/questions/:id', {id:'@id'}, {
            delete: {
                method: 'DELETE'
            }
        });
    });
    module.factory('AnswerDelete', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/answers/:id', {id:'@id'}, {
            delete: {
                method: 'DELETE'
            }
        });
    });
    module.factory('SpecialtyList', function($resource, GENERAL_CONFIG){
       return $resource(GENERAL_CONFIG.api_url+'/specialties',{},{
            get:{
                method:'GET'
            }
       });
    });
    module.factory('QuestionView', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/questions/view/:slug',{slug:'@slug'},{
            get:{
                method:'GET'
            }
        });
    });
    module.factory('QuestionSlug', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/question/:slug',{slug:'@slug'},{
            get:{
                method:'GET'
            }
        });
    });
    module.factory('AnswerQuestion', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/answers/question',{},{
            get:{
                method:'GET'
            }
        });
    });
    module.factory('AnswersList', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/answers',{},{
            get:{
                method:'GET'
            }
        });
    });
    module.factory('AnswersList', function($resource, GENERAL_CONFIG){
        return $resource(GENERAL_CONFIG.api_url+'/answers',{},{
            get:{
                method:'GET'
            }
        });
    });
})(angular.module("Abs.QuestionAnswer"));
(function (module) {
    module.controller('QuestionsController', function ($scope, $http, $filter, $state, $rootScope, $location, ConstUserType, Flash, QuestionList, QuestionAdd, QuestionEdit, SpecialtyList, QuestionView, QuestionSlug) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf icals.controller:IcalController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element
         **/
        model.setMetaData = function (title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        $scope.userRole = ConstUserType;
        if($state.current.name == 'QuestionList'){
            QuestionList.get().$promise.then(function(response){
                $scope.questions = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if($state.current.name == 'QuestionAdd'){
            SpecialtyList.get().$promise.then(function (response){
                $scope.specialties = response.specialties;
            });
        }
        if($state.current.name == 'QuestionEdit'){
            QuestionEdit.get({id:$state.params.id}).$promise.then(function(response){
                model.formValue = response;
                model.formValue.specialty_id = parseInt(response.specialty_id);
                SpecialtyList.get().$promise.then(function (response){
                    $scope.specialties = response.specialties;
                });
            });
        }
        if($state.current.name == 'QuestionView'){
            QuestionSlug.get({slug:$state.params.slug}).$promise.then(function(response){
                $scope.questionR = response;
                QuestionView.get({slug:$state.params.slug}).$promise.then(function(response){
                    $scope.answers = response.data;
                    $scope.paginates = response;
                });
            });

        }
        model.questionAdd = function ($valid){
            if($valid) {
                QuestionAdd.post(model.formValue).$promise.then(function (response){
                    if(response.Success){
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('QuestionList');
                    }else{
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            }
        }
        
        model.questionUpdate = function ($valid) {
            QuestionEdit.put(model.formValue).$promise.then(function(response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('QuestionList');
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        }
        /* For select select box */
        module.directive('convertToNumber', function() {
            return {
                require: 'ngModel',
                link: function(scope, element, attrs, ngModel) {
                    ngModel.$parsers.push(function(val) {
                        return val ? parseInt(val, 10) : null;
                    });
                    ngModel.$formatters.push(function(val) {
                        return val ? '' + val : '';
                    });
                }
            };
        });
		$scope.ShowHide = function (value) {
			appointmetHide = angular.element(document.getElementsByClassName('js-answers'+value));
			if (appointmetHide.hasClass('hide')) {
				appointmetHide.removeClass('hide');
			}
			else
			{
				appointmetHide.addClass('hide');
			}
		}
    });
} (angular.module("Abs.QuestionAnswer")));angular.module('Abs').requires.push('Abs.QuestionAnswer');(function (module) {
    module.config(function ($stateProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state('UserReviewAdd', {
            url: '/user/review/add/:id',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserReviewsController as model',
                    templateUrl: 'Plugins/UserReviews/userReview.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.UserReviews", [
    'ui.router',
    'ngResource'
])));
(function (module) {
    module.directive('ratingButton', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here

        };
        return {
            restrict: 'AE',
            templateUrl: "Plugins/UserReviews/ratingButton.tpl.html",
            link: linker,
            controller: 'ratingButtonController as model',
            bindToController: true,
            scope: {
            }
        };
    });
    module.controller('UserReviewsController', function ($scope, $rootScope,$filter) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Patient Review");
            $scope.rate = 0;
            $scope.overStar = 0;
            $scope.max = 5;
            $scope.isReadonly = false;
            $scope.hoveringOver = function (value) {
                $scope.overStar = value;
                $scope.percent = 100 * (value / $scope.max);
            };
        };
        model.init();     
         
    });
})(angular.module('Abs.UserReviews'));
//

(function (module) {

     module.directive('ratingStars', function () {
        var linker = function (scope, element, attrs) {

        };
        return {
            restrict: 'E',
            templateUrl: 'Plugins/UserReviews/rating_stars.tpl.html',
            link: linker,
            controller: 'UserReviewsController as model',
            bindToController: true
        };
    });

    module.controller('UserReviewsController', function ($state, $scope, $rootScope, $filter, $location, Flash, ReviewPost) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Patient Review");
            console.log($scope.userId);           
        };
        model.init();
        model.postReviewRating = function (){
            model.reviewRate.doctor_user_id = $scope.userId;
            ReviewPost.post(model.reviewRate).$promise.then(function (response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    var redirUrl = '/doctor/'+$state.params.username;
                    window.location.href=$location.absUrl();
                    window.location.reload();
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        }
    });
})(angular.module('Abs.UserReviews'));
(function(module) {
    module.factory('UserReviewsFactory', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/patient_reviews/:id', {id: '@id' }, {
            'get': {
                method: 'GET'
            }
        });
    });
    
    module.factory('ReviewPost', function ($resource, GENERAL_CONFIG) {
        return $resource(GENERAL_CONFIG.api_url + '/reviews/add', {}, {
            'post': {
                method: 'POST'
            }
        });
    });
   
    
})(angular.module("Abs.UserReviews"));
angular.module('Abs').requires.push('Abs.UserReviews');