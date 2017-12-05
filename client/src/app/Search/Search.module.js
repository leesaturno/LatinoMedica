/**
 * Each module has a <moduleName>.module.js file.  This file contains the angular module declaration -
 * angular.module("moduleName", []);
 * The build system ensures that all the *.module.js files get included prior to any other .js files, which
 * ensures that all module declarations occur before any module references.
 */
(function(module) {
    module.config(function ($stateProvider) {
        $stateProvider.state('search', {
            url: '/search?is_online_booking&gender_id&doctor&city_id&specialty_disease_id&specialty_id&insurance_id&appointment&page',
            views: {
                "main": {
                    controller: 'SearchController as model',
                    templateUrl: 'Search/search.tpl.html'
                }
            },
            data:{ pageTitle: 'Search' }
        });
    });
}(angular.module("Abs.search", [
    'ui.router',
    'ngResource',
    'ngMap',
    'bw.paging',
    'angucomplete-abs'
])));
