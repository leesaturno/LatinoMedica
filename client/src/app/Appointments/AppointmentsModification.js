(function (module) {
    module.controller('AppointmentsModificationController', function ($scope, $state, $filter, $rootScope, Flash, ConstUserType, appointmentModification, appointmentModificationAdd, appointmentModificationEdit, appointmentModificationDelete, splitedTimeSlot, SweetAlert) {
        var model = this;
        model.init = function () {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Appointment Modification");
            model.ConstUserType = ConstUserType;
            if($state.current.name == 'appointmentModification'){
                $scope.currentPage = ($scope.currentPage !== undefined) ? parseInt($scope.currentPage) : 1;
                $scope.getAppointmentModification();
            }
        };
        
        if($state.current.name == 'appointmentModificationAdd'){
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Add Modification Details");
            $scope.init = function(){
                $scope.dateBlockeBefore = $filter('date')(new Date(), "yyyy-MM-ddTHH:mm:ss.sssZ");
                splitedTimeSlot.get().$promise.then(function (response){
                    $scope.timeSlot = response.data;
                });
            };
            $scope.init();
            model.appointmentModificationAdd = function(){
                appointmentModificationAdd.add(model.settingValue).$promise.then(function (response) {
                    if(response.Success){
                        Flash.set($filter("translate")(response.Success), 'success', true);
                        $state.go('appointmentModification');
                    }else{
                        Flash.set($filter("translate")(response.Failed), 'error', false);
                    }
                });
            };
        } else if($state.current.name == 'appointmentModificationEdit'){
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")("Edit Modification Details");
            appointmentModificationEdit.get({id: $state.params.id}).$promise.then(function (response) {
                model.settingValue = response;
                model.settingValue.type = (parseInt(response.type) === 1)?true:false;
                if(response.practice_open !==''){
                    var practiceOpen = response.practice_open;
                    model.settingValue.appt_time = practiceOpen.split(',');
                    
                }else{
                    model.settingValue.appt_time = '';
                }
                
                /* Get the Time Splited Slot */
                splitedTimeSlot.get().$promise.then(function (response){
                    $scope.timeSlot = response.data;
                });
            });
            
            model.appointmentModificationEdit = function(){
                appointmentModificationEdit.update({id: $state.params.id},model.settingValue).$promise.then(function (response) {
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('appointmentModification');
                });
            };
        }
        /* For Show & Hide the Div */
        function ShowHide(shownDivModal){
            shownDivModal = shownDivModal;
        }
        $scope.swithcOn = true;
        $scope.swithcOff = false;
        $scope.getAppointmentModification = function () {
            param = { 'page': $scope.currentPage };
            appointmentModification.get(param).$promise.then(function (response) {
                $scope.modificationList = response.data;
                $scope._metadata = response.meta.pagination;
            });
        };

         /**
         * @ngdoc method
         * @name paginate
         * @methodOf appointments.controller:AppointmentsController
         * @description
         *
         * This method will be load pagination the pages.
         **/
        $scope.paginate = function (pageno) {
            $scope.currentPage = parseInt($scope.currentPage);
            $scope.getAppointmentModification();
        };
        model.init();
        $scope.AptModificationDelete = function (id) {
            SweetAlert.swal({
                title: 'Are you sure to delete?',
                text: "",
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
                    appointmentModificationDelete.delete({id: id}).$promise.then(function (response) {
                        Flash.set($filter("translate")("Appointment Modifications deleted successfully"), 'success', true);
                        $state.reload();
                    }, function (error) {
                        Flash.set($filter("translate")("Appointment Modifications could not be deleted"), 'error', false);
                    });
                }
            });
        };
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.appointments")));
