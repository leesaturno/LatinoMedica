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
