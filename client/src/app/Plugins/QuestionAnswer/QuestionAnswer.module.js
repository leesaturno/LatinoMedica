(function (module) {

    module.directive('questionAnswers', function(){
			return {
				restrict: 'E',
				transclude: true,
				scope: { slug:'@' },
				templateUrl: 'Plugins/QuestionAnswer/question_with_answer_view.tpl.html',
				controller: function($scope, $filter, $state, $timeout, Flash, QuestionSlug, QuestionView) {
					QuestionSlug.get({slug:$scope.slug}).$promise.then(function(response){
						$scope.questionR = response;
						QuestionView.get({slug:$scope.slug}).$promise.then(function(response){
							$scope.answers = response.data;
							$scope.paginates = response;
						});
					});
				}
			};
		});
	module.config(function ($stateProvider, $analyticsProvider) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
		
        $stateProvider.state('QuestionList', {
            url: '/questions',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Questions List'}
        }).state('AnswersList', {
            url: '/answers',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answers_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Answers List'}
        }).state('QuestionAdd', {
            url: '/questions/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_add.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Question Add'}
        }).state('QuestionEdit', {
            url: '/questions/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/questions_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Question Edit'}
        }).state('QuestionView', {
            url: '/questions/view/{slug}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'QuestionsController as model',
                    templateUrl: 'Plugins/QuestionAnswer/question_with_answer_view.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Question Edit'}
        }).state('AnswerQuestion', {
            url: '/answers/question',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/doctor_questions_list.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Questions'}
        }).state('AnswerAdd', {
            url: '/answers/add/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answer_add.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Answer Add'}
        }).state('AnswerEdit', {
            url: '/answers/edit/{id}',
            authenticate: true,
            views: {
                "main": {
                    controller: 'AnswersController as model',
                    templateUrl: 'Plugins/QuestionAnswer/answer_edit.tpl.html',
                    resolve: ResolveServiceData
                }
            },
            data: {pageTitle: 'Answer Edit'}
        })
    });
}(angular.module("Abs.QuestionAnswer", [
    'ui.router',
    'ngResource',
    'oitozero.ngSweetAlert',
    'uiSwitch'
])));
