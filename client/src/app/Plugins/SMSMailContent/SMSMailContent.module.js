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

        $stateProvider.state('SmsList', {
            url: '/sms/template/list',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SMSMailContentController as model',
                    templateUrl: 'Plugins/SMSMailContent/sms_template_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'SMS Templates List'}
        }).state('MailList', {
            url: '/mail/template/list',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SMSMailContentController as model',
                    templateUrl: 'Plugins/SMSMailContent/mail_template_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Mail Templates List'}
        }).state('SmsEdit', {
            url: '/sms/template/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SMSMailContentController as model',
                    templateUrl: 'Plugins/SMSMailContent/sms_template_modify.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Edit Sms Template'}
        }).state('MailEdit', {
            url: '/mail/template/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'SMSMailContentController as model',
                    templateUrl: 'Plugins/SMSMailContent/mail_template_modify.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Mail Template Edit'}
        });
    });
}(angular.module("Abs.SMSMailContent", [
    'ui.router',
    'ngResource',
    'oitozero.ngSweetAlert'
])));
