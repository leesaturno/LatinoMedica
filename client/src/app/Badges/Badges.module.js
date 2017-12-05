(function (module) {
    module.constant('Constantbadges', {
        state_Badges: 'UserBadges'          
    });
    module.config(function ($stateProvider,Constantbadges) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state(Constantbadges.state_Badges, {
            url: '/user/badges',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserBadgesController as model',
                    templateUrl: 'Badges/userBadges.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.userbadges", [
    'ui.router',
    'ngResource',
    'mgcrea.ngStrap.datepicker',
    'oitozero.ngSweetAlert',
    'ngMessages',
    'ngFileUpload',
])));
