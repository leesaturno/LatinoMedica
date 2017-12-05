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

        $stateProvider.state('IcalList', {
            url: '/ical/list',
            authenticate: true,
            views: {
                "main": {
                    controller: 'IcalController as model',
                    templateUrl: 'Plugins/IcalCalendar/ical_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Ical List'}
        }).state('IcalAdd', {
            url: '/ical/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'IcalController as model',
                    templateUrl: 'Plugins/IcalCalendar/ical_add.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Add Ical'}
        }).state('IcalEdit', {
            url: '/ical/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'IcalController as model',
                    templateUrl: 'Plugins/IcalCalendar/ical_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Modify Ical'}
        })
    });
}(angular.module("Abs.IcalCalendar", [
    'ui.router',
    'ngResource',
    'oitozero.ngSweetAlert',
    'uiSwitch'
])));
