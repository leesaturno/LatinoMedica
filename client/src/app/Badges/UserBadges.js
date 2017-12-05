(function(moduel){
    moduel.controller('UserBadgesController', function($state, $rootScope, $scope, $filter, $location, $timeout, Flash, SweetAlert, BadgesService,Constantbadges,$stateParams,Upload,GENERAL_CONFIG){
        var model = this;  
        /* [ Page Title ] */ 
        function pageTitle(title){
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")(title);
        }
        /* [ Flash Message ] */
        function flashMessage(message,classname){
            Flash.set($filter("translate")(message), classname, true);
        }
        /* [ POST - Badges ] */
        function saveBadges(data){
           BadgesService.post(data).$promise.then(function (response) {
                if(angular.isDefined(response)){
                   if(response.Success){
                        $timeout(function(){
                            $state.go(Constantbadges.state_Badges,{},{reload:true});  
                        },500);                                           
                        flashMessage("Badges added successfully",'success');   
                    } else if(response.Failed) {
                        flashMessage(response.Failed,'error');  
                    }     
                }
            }); 
        }
        /* [ GET - Badges ] */
        function getBadges(){
            model.userBadgesLength = false;
            BadgesService.getall().$promise.then(function (response) {                
                if(angular.isDefined(response)){                    
                    model.userBadges = response.data;
                    model.userBadgesLength = (response.data.length > 0) ? true : false;    
                }
            });
        }        
        /* [ DELETE - Badges ] */
        function fnDeleteBadges(id){
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
                    BadgesService.delete({id: id}).$promise.then(function (response) {
                        flashMessage("User Badges deleted successfully",'success');                        
                        $timeout(function(){
                            $state.reload();
                        },500);
                    }, function (error) {
                        flashMessage("User Badges could not be deleted, Please try again",'error');             
                    });
                }
            });
        }
        /* [ List user Badges - state {{UserBadges}} ] */
        if($state.current.name === Constantbadges.state_Badges){
            pageTitle('My Badges');
            /* [ GET - Badges ] */
            getBadges(); 
            /* [ Save Images ] */  
            $scope.uploadFiles = function (files) {
                $scope.files = files;
                if (files && files.length) {
                    Upload.upload({
                        url: GENERAL_CONFIG.api_url + '/badges',
                        data: {
                            badge: files[0]
                        }
                    }).then(function (response) {
                        console.log(response);
                        flashMessage("Badges added successfully",'success');                       
                        $state.go(Constantbadges.state_Badges,{},{reload:true});
                    }, function (response) {
                        flashMessage("Badges could not be added. Please, try again.",'error'); 
                    }, function (evt) {
                        $scope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                }
            };           
            /* [ Delete the Work Place ] */
            $scope.deleteBadges = function(id){
                if(angular.isDefined(id)){
                    fnDeleteBadges(id);
                }
            };                  
        } else {
           $state.go(Constantbadges.state_Badges); 
        }
    });
}(angular.module("Abs.userbadges")));