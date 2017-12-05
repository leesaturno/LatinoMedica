(function (module) {
	/*
	-Authorization  module
	-Users can select authorized doctors
	*/
	module.controller('AuthorizationController', AuthorizationController);
	AuthorizationController.$inject = ['$rootScope', '$scope', '$state', '$filter', 'Flash', '$timeout', 'ConstUserType', 'SweetAlert', 'Authorization'];
	function AuthorizationController($rootScope, $scope, $state, $filter, Flash, $timeout, ConstUserType, SweetAlert, Authorization) {
		var model = this;
		/* [ Flash Message ] */
		function flashMessage(message, classname) {
			Flash.set($filter("translate")(message), classname, true);
		}

		/* [Add authorized doctor ] */
		function addAuthorized(data) {
			Authorization.post(data).$promise.then(function (response) {
				if (angular.isDefined(response)) {
					if (response.Success) {
						$timeout(function () {
							$state.go('Authorization', {}, { reload: true });
						}, 500);
						flashMessage(response.Success, 'success');
					} else {
						flashMessage(response.Failure, 'error');
					}

				}
			});
		}

		/* [Get authorized doctors list] */
		function getAuthorizeddoctor(param) {
			Authorization.get(param).$promise.then(function (response) {
				if (angular.isDefined(response)) {
					model.doctorsLists = response;
					model.dataLength = (response.data.length > 0) ? true : false;
					model._metadata = response.meta.pagination;
                    model.currentPage = param.page;
                    model.maxSize = 5;
				}
			});
		}

		/* [Delete authorized doctor] */
		function deleteAuthorizeddoctor(id) {
			SweetAlert.swal({
                title: "Are you sure to Delete?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55", confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
				function (isConfirm) {
					Authorization.delete({ id: id }).$promise.then(function (response) {
						if (angular.isDefined(response)) {
							if (response.Success) {
								$timeout(function () {
									$state.go('Authorization', {}, { reload: true });
								}, 500);
								flashMessage('Authorization doctor deleted', 'success');
							} else {
								flashMessage("Authorization doctor could not be deleted", 'error');
							}
						}
					});
				});
		}
		
		model.init = function () {
			$rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + "Authorized Doctor";
		};
		
		model.init();
		model.ConstUserType = ConstUserType;
		if ($state.current.name == 'Authorization') {
			model.currentPage = (model.currentPage !== undefined) ? parseInt(model.currentPage) : 1;
			var param = {
                    'page': model.currentPage
                };
			getAuthorizeddoctor(param);
			
		}
		
		/* [Add doctor form submit] */
		model.addDoctor = function (valid) {
			if (valid) {
				addAuthorized(model.authorizedDoctor);
			}
		};
			
		/* [Delete doctor onclick] */
		model.removeDoctor = function (id) {
			if (angular.isDefined(id)) {
				deleteAuthorizeddoctor(id);
			}
		};
		
		/* [Pagination] */
		model.paginate = function() {
            model.currentPage = parseInt(model.currentPage);
			 var param = {
                    'page': model.currentPage
                };
            getAuthorizeddoctor(param);
            $('html, body').stop(true, true).animate({
                scrollTop: 400
            }, 600);
        };


	}

} (angular.module("Abs.user")));