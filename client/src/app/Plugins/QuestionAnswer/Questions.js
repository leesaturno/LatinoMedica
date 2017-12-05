(function (module) {
    module.controller('QuestionsController', function ($scope, $http, $filter, $state, $rootScope, $location, ConstUserType, Flash, QuestionList, QuestionAdd, QuestionEdit, SpecialtyList, QuestionView, QuestionSlug) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf icals.controller:IcalController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element
         **/
        model.setMetaData = function (title) {
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + title);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };
        $scope.userRole = ConstUserType;
        if($state.current.name == 'QuestionList'){
            QuestionList.get().$promise.then(function(response){
                $scope.questions = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if($state.current.name == 'QuestionAdd'){
            SpecialtyList.get().$promise.then(function (response){
                $scope.specialties = response.specialties;
            });
        }
        if($state.current.name == 'QuestionEdit'){
            QuestionEdit.get({id:$state.params.id}).$promise.then(function(response){
                model.formValue = response;
                model.formValue.specialty_id = parseInt(response.specialty_id);
                SpecialtyList.get().$promise.then(function (response){
                    $scope.specialties = response.specialties;
                });
            });
        }
        if($state.current.name == 'QuestionView'){
            QuestionSlug.get({slug:$state.params.slug}).$promise.then(function(response){
                $scope.questionR = response;
                QuestionView.get({slug:$state.params.slug}).$promise.then(function(response){
                    $scope.answers = response.data;
                    $scope.paginates = response;
                });
            });

        }
        model.questionAdd = function ($valid){
            if($valid) {
                QuestionAdd.post(model.formValue).$promise.then(function (response){
                    if(response.Success){
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('QuestionList');
                    }else{
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            }
        }
        
        model.questionUpdate = function ($valid) {
            QuestionEdit.put(model.formValue).$promise.then(function(response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('QuestionList');
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        }
        /* For select select box */
        module.directive('convertToNumber', function() {
            return {
                require: 'ngModel',
                link: function(scope, element, attrs, ngModel) {
                    ngModel.$parsers.push(function(val) {
                        return val ? parseInt(val, 10) : null;
                    });
                    ngModel.$formatters.push(function(val) {
                        return val ? '' + val : '';
                    });
                }
            };
        });
		$scope.ShowHide = function (value) {
			appointmetHide = angular.element(document.getElementsByClassName('js-answers'+value));
			if (appointmetHide.hasClass('hide')) {
				appointmetHide.removeClass('hide');
			}
			else
			{
				appointmetHide.addClass('hide');
			}
		}
    });
} (angular.module("Abs.QuestionAnswer")));