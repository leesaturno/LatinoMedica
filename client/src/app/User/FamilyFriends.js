(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:FamilyFriendController
     * @description
     * This is FamilyFriend controller having the service FamilyFriend.
     **/
    module.controller('FamilyFriendController', ['$rootScope', '$scope', '$state', 'ConstUserType', 'FamilyFriends','Genders', 'City', 'States', 'Country', 'Flash', '$timeout', '$filter', '$anchorScroll', 'SweetAlert', function ($rootScope, $scope, $state, ConstUserType, FamilyFriends, Genders, City, States, Country, Flash, $timeout, $filter, $anchorScroll, SweetAlert) {
        var model = this;
        $scope.noRecords = false;
        model.familyfriends = [];
		model.dateBlockeBefore = $filter('date')(new Date(), "yyyy-MM-dd");
        Genders.get().$promise.then(function (response) {
            $scope.genderArray = response.data;
        });
        City.cityList({}).$promise.then(function (response) {
            $scope.cityArray = response.data;
        });
        States.stateList({}).$promise.then(function (response) {
            $scope.stateArray = response.data;
        });
        Country.countryList({}).$promise.then(function (response) {
            $scope.countryArray = response.data;
        });
        /* [ Flash Message ] */
        function flashMessage(message,classname){
            Flash.set($filter("translate")(message), classname, true);
        }
       
		
		function getFamilyFriends(param) {
			FamilyFriends.get(param).$promise.then(function (response) {
					if (angular.isDefined(response.data)) {
						$scope.typeid = '1';
						$scope.noRecords = (response.data.length > 0) ? true : false;
						console.log(response.data);
						$scope.friendsLists = response.data;
						$scope._metadata = response.meta.pagination;
						$scope.currentPage = response.meta.pagination.current_page;
						$scope.maxSize = 5;
					}
			});
		} 
		model.ConstUserType = ConstUserType;
		if ($state.current.name == 'FamilyFriends') {
			$scope.currentPage = ($scope.currentPage !== undefined) ? parseInt($scope.currentPage) : 1;
			var param = {
                    'page': $scope.currentPage
                };
			getFamilyFriends(param);
		}	
        $scope.paginate = function (currentPage) {
			var param = {
                    'page': currentPage
                };
			getFamilyFriends(param);
            $('html, body').stop(true, true).animate({
                scrollTop: 1200
            }, 600);
        };
        model.friendsAdd = function (isvalid) {
			
			if (isvalid) {
				if ($scope.typeid == '1') {
					model.familyFriends.is_active =1;
					FamilyFriends.add(model.familyFriends).$promise.then(function (response){
						if (angular.isDefined(response)) {
							/* [ Success Response ] */
							if(response.Success){
								$timeout(function(){
									$state.go('FamilyFriends', {}, { reload:true });  
								},500);                        
								flashMessage("FamilyFriend added successfully",'success');  
							} else {
								flashMessage("Please try again",'error');
							}                                
						}
					});
				} else {
					model.familyFriends.id = $scope.friendId;
					FamilyFriends.put(model.familyFriends).$promise.then(function (response){
						if (angular.isDefined(response)) {
							
							if(response.Success){
								$timeout(function(){
									$state.go('FamilyFriends', {}, { reload:true });  
								},500);                        
								flashMessage("FamilyFriend Updated successfully",'success');   
							} else {
								flashMessage("Please try again",'error');
							}                               
						}
					});
				}
			}
        };
		/*
		-edit family friend function
		*/
		$scope.editFamilyfriend = function(value){
			FamilyFriends.getbyid({id:value}).$promise.then(function (response){
				if (angular.isDefined(response)) {
					model.familyFriends = response;
					$scope.typeid = '2';
					$scope.friendId = response.id;
					$anchorScroll('friendtop');
				}
			});
		};
		
		/* 
		-remove family friend
		*/
		$scope.removeFamilyfriend = function(value){
			SweetAlert.swal({
                title: "Are you sure to delete the record",
                text: "FamilyFriends record deleted",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Confirm",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
                function (isConfirm) {
                    if (isConfirm) {
                        FamilyFriends.delete({id:value}).$promise.then(function (response){
							if(angular.isDefined(response)){
								/* [ Success Response ] */
								if(response.Success){
									$timeout(function(){
										$state.go('FamilyFriends', {}, { reload:true });  
									},500);                        
									flashMessage("FamilyFriend deleted successfully",'success');   
								} else {
									flashMessage("Please try again",'error');
								}                                
							}
						});
                    }
                });			
		};
    }]);
	module.filter('capitalize', function() {
		return function(input, scope) {
			if (input!=null) { 
				input = input.toLowerCase();
			}			
			return input.substring(0,1).toUpperCase()+input.substring(1);
		};
	});
	app.filter('ageFilter', function() {     
     return function(input) { 
         var ageDifMs = Date.now() - new Date(input);
		 var ageDate = new Date(ageDifMs); // miliseconds from epoch
		 return Math.abs(ageDate.getUTCFullYear() - 1970);
     }; 
});
}(angular.module("Abs.user")));