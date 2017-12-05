//

(function (module) {

     module.directive('ratingStars', function () {
        var linker = function (scope, element, attrs) {

        };
        return {
            restrict: 'E',
            templateUrl: 'Plugins/UserReviews/rating_stars.tpl.html',
            link: linker,
            controller: 'UserReviewsController as model',
            bindToController: true
        };
    });

    module.controller('UserReviewsController', function ($state, $scope, $rootScope, $filter, $location, Flash, ReviewPost) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Patient Review");
            console.log($scope.userId);           
        };
        model.init();
        model.postReviewRating = function (){
            model.reviewRate.doctor_user_id = $scope.userId;
            ReviewPost.post(model.reviewRate).$promise.then(function (response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    var redirUrl = '/doctor/'+$state.params.username;
                    window.location.href=$location.absUrl();
                    window.location.reload();
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        }
    });
})(angular.module('Abs.UserReviews'));
