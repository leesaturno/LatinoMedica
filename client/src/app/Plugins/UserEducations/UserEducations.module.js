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
