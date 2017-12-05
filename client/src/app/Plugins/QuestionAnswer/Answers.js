(function (module) {
    module.controller('AnswersController', function ($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, AnswerQuestion, AnswerAdd, AnswersList, AnswerEdit) {
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
         model.init = function () {
            model.setMetaData();
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Answers");
        };
        if($state.current.name == 'AnswersList'){
            AnswersList.get().$promise.then(function(response){
                $scope.answers = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if($state.current.name == 'AnswerQuestion'){
            AnswerQuestion.get().$promise.then(function(response){
                $scope.questions = response.data;
                $scope.paginates = response.meta.pagination;
            });
        }
        if($state.current.name == 'AnswerAdd'){
            AnswerAdd.get({id:$state.params.id}).$promise.then(function(response){
                $scope.questions = response;
            });
        }
        if($state.current.name == 'AnswerEdit'){
            AnswerEdit.get({id:$state.params.id}).$promise.then(function(response){
                model.formValue = response;
            });
        }
        model.answerAdd = function(){
            AnswerAdd.post({id:$state.params.id},model.formValue).$promise.then(function (response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('AnswersList');
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };
        model.answerUpdate = function(){
            AnswerEdit.put(model.formValue).$promise.then(function (response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('AnswersList');
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });
        };
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