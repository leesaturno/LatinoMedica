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

        $stateProvider.state('WidgetList', {
            url: '/widget/list',
            authenticate: true,
            views: {
                "main": {
                    controller: 'WidgetController as model',
                    templateUrl: 'Plugins/Widget/widget_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Widget List'}
        }).state('WidgetAdd', {
            url: '/widget/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'WidgetController as model',
                    templateUrl: 'Plugins/Widget/widget_add.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Add Widget'}
        })
    });
}(angular.module("Abs.Widget", [
    'ui.router',
    'ngResource',
    'oitozero.ngSweetAlert',
    'mgcrea.ngStrap.modal'
])));
