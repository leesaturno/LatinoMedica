(function (module) {
	module.controller('MedicalTeamController', MedicalTeamController);
	MedicalTeamController.$inject = ['$scope', '$rootScope', '$state', 'SweetAlert', 'Flash', '$filter', '$timeout', 'MedicalTeam', '$uibModal',  '$uibModalStack', 'Specialties', 'Cities'];
	function MedicalTeamController($scope, $rootScope, $state, SweetAlert, Flash, $filter, $timeout, MedicalTeam, $uibModal, $uibModalStack, Specialties, Cities) {
		var model = this;
		$scope.userId = $rootScope.auth.id;
		/* [ Flash Message ] */
        function flashMessage(message,classname) {
            Flash.set($filter("translate")(message), classname, true);
        }
		/* [ Page Title ] */ 
        function pageTitle(title){
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")(title);
        }
		 /* [ GET - Medical Team ] */
        function getmedicalTeamlist(){
            MedicalTeam.get().$promise.then(function (response) {
                if(angular.isDefined(response)){
                    model.medicalTeam = response.data;
					model.dataLength = (response.data.length > 0) ? true : false;                      
                }                              
            }); 
        }
		/* [ POST - Find Doctors List ] */
        function addDoctorList(data) {
            MedicalTeam.post(data).$promise.then(function (response) {
                if (angular.isDefined(response)) {
                    /* [ Success Response ] */
                    if (response.Success) {
                        $rootScope.closeModal();
                        $state.go('MedicalTeamList',{} , {reload:true});
                        Flash.set(response.Success, 'success');
                    } else if (response.message) {
                        Flash.set(response.message, 'error');
                    }
                    else {
                        Flash.set("Please try again", 'error');
                    }
                }
            });
        }
		/* [ DELETE { Workplace, Appoinments, Appoinment modification } ] */
        function fnDeleteWorkPlace(id){
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
                /* [ Delete the team list Data ] */
				if (isConfirm) {
					 MedicalTeam.delete({id: id}).$promise.then(function (response) {
							flashMessage("Team list deleted successfully",'success');                      
							$timeout(function(){
								$state.go('MedicalTeamList',{} , {reload:true});
							},500);
						}, function (error) {
							flashMessage("Team list could not be deleted",'error');
							$state.go('MedicalTeamList',{} , {reload:true});
						});                
				}
				 });
		
        }
		/* [ State {{MedicalTeam}} ] */
         model.init = function () {
			pageTitle('Medical Team');            
            getmedicalTeamlist();
            
        };
		model.init();
		/* [ Delete ] */
		$scope.deletedoctortlist = function(id){
			if(angular.isDefined(id)){
				fnDeleteWorkPlace(id);
				//flashMessage("Workplace deleted successfully",'success');
			}
		};
		$scope.showDoctorList = function () {
            $scope.modalInstance = $uibModal.open({
                templateUrl: 'User/doctor_filter.tpl.html',
                animation: true,
                controller: function ($scope, $rootScope, $stateParams, $filter, $state, $uibModal, userId, Specialties, Cities) {
                    var model = this;
					
					Cities.citiesliList().$promise.then(function (cityResponse) {
						$scope.citiesliLists = cityResponse.data;
					});
					Specialties.specialtyliList().$promise.then(function (specialtyResponse) {
						$scope.specialtyliLists = specialtyResponse.specialties;
					});
					
					/**
					 * @ngdoc method
					 * @name AppointmentsController.remainder.submit
					 * @methodOf module.AppointmentsController
					 * @description
					 * This method is post the remainder data.
					 */
                    model.search_list_data = function ($valid) {
						if ($valid) {
                            model.add_list.user_id = $rootScope.auth.id;
							console.log(model.add_list);
                            addDoctorList(model.add_list);
						}
                   };
                },
                controllerAs: 'model',
                resolve: {
                    userId: function () {
                        return model.userId;
                    }

                },
                size: 'lg'
            });
        };
		/*
		--Popup close
		*/
        $rootScope.closeModal = function () {
            $uibModalStack.dismissAll();
        };
		
   }
}(angular.module("Abs.user")));