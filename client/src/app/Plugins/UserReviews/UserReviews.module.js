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
        $stateProvider.state('UserReviewAdd', {
            url: '/user/review/add/:id',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserReviewsController as model',
                    templateUrl: 'Plugins/UserReviews/userReview.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.UserReviews", [
    'ui.router',
    'ngResource'
])));
