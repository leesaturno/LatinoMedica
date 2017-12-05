(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:InsuranceController
     * @description
     *
     * This is dashboard controller. It contains all the details about the user. It fetches the data of the user by using AuthFactory.
     **/
    module.controller('InsuranceController', function ($scope, $filter, $rootScope, $state, Flash, MyInsurances, ConstUserType, UserInsurances, DoctorInsurances, SweetAlert) {
        var model = this;
		function getdoctorinsurance(param) {
			DoctorInsurances.get(param).$promise.then(function (response) {
				if (angular.isDefined(response)) {
					model.insuranceLists = response;
					model.dataLength = (response.data.length > 0) ? true : false;
					model._metadata = response.meta.pagination;
                    model.currentPage = param.page;
                    model.maxSize = 5;
				}
			});
		}
		/* [Delete authorized doctor] */
		function deleteInsurance(id) {
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
					if (isConfirm) {
						DoctorInsurances.delete({ id: id }).$promise.then(function (response) {
							if (angular.isDefined(response)) {
								if (response.Success) {
									Flash.set($filter("translate")(response.Success), 'success', true);
									$state.reload('MyInsurances');
								} else {
									Flash.set($filter("translate")(response.Success), 'success', true);
									$state.reload('MyInsurances');
								}
							}
						});
					}
				});
		}
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("My Insurances");
			MyInsurances.get({
            }).$promise.then(function (response) {
                $scope.insurances = response.insurances;
            });
			model.ConstUserType = ConstUserType;
			UserInsurances.get().$promise.then(function (response) {
				if (angular.isDefined(response.data[0])) {
					model.insurance = response.data[0];
					model.type = 'put';
				} else {
					model.type = 'post';
				}
			});
			model.currentPage = (model.currentPage !== undefined) ? parseInt(model.currentPage) : 1;
			var param = {
                    'page': model.currentPage
                };
			getdoctorinsurance(param);
        };
        model.init();
		
        
        model.myInsurance = function () {
           if(model.type == 'post') { 
			   UserInsurances.post(model.insurance).$promise.then(function (response) {
				   Flash.set($filter("translate")(response.Success), 'success', true);
                   $state.reload('MyInsurances');
			   });
		   } else {
			   UserInsurances.put({id: model.insurance.id},model.insurance).$promise.then(function (response) {
				   Flash.set($filter("translate")(response.Success), 'success', true);
                   $state.reload('MyInsurances');
			   });
		   }
	    };
		model.DoctorInsurance = function (valid) {
			if (valid) {
			  DoctorInsurances.post(model.insurancecount).$promise.then(function (response) {
				   Flash.set($filter("translate")(response.Success), 'success', true);
				   $state.reload('MyInsurances');
			  });
			}
	    };
		
		/* [Remove Insurance from doctor insuracne list] */
		model.removeInsurance = function (id) {
			if (angular.isDefined(id)) {
				deleteInsurance(id);
			}
		};
		
		/* [Pagination] */
		model.paginate = function() {
            model.currentPage = parseInt(model.currentPage);
			 var param = {
                    'page': model.currentPage
                };
            getdoctorinsurance(param);
            $('html, body').stop(true, true).animate({
                scrollTop: 400
            }, 600);
        };
    });

}(angular.module("Abs.user")));