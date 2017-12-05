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
