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
                {title:'Sobre Nosotros',slug:'about-us'},
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
