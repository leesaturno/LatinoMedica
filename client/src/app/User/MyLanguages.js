(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:LanguageController
     * @description
     *
     * This is dashboard controller. It contains all the details about the user. It fetches the data of the user by using AuthFactory.
     **/
    module.controller('LanguageController', function ($filter, $rootScope, $scope, $state, Flash, MyLanguages) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Languages");
            MyLanguages.get({
            }).$promise.then(function (response) {
                $scope.languages = response.languages;
                var ids = response.user_language_id.split(',');
                for(var i=0; i<ids.length; i++) { ids[i] = parseInt(ids[i], 10); } 
                $scope.user = {
                    language_ids:  ids
                };
            });
             
        };
        model.init();
        $scope.check = function (value, checked) {
            var idx = $scope.user.language_ids.indexOf(value);
            if (idx >= 0 && !checked) {
                $scope.user.language_ids.splice(idx, 1);
            }
            if (idx < 0 && checked) {
                $scope.user.language_ids.push(value);
            }
        };
        model.myLanguage = function () {
            $scope.languages = {
                language: $scope.user.language_ids
            };
            MyLanguages.update($scope.languages)
                    .$promise
                    .then(function (response) {
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.reload('MyLanguages');
                    });
        };
    });
}(angular.module("Abs.user")));
