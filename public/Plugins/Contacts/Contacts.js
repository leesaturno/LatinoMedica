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
