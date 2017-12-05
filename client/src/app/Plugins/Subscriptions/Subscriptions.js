(function(module) {

    module.directive('subscriptionAlert', function () {
        var linker = function (scope, element, attrs) {
            // do DOM Manipulation here
        };
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'Plugins/Subscriptions/subscription_alert.tpl.html',
            link: linker,
            controller: 'SubscriptionsController as model',
            bindToController: true
        };
    });

    module.controller('SubscriptionsController', function($scope, $state, $rootScope, $location, Flash, $filter, GENERAL_CONFIG, Planslist, GetSubscriptionDetail, PaymentGateway, SweetAlert, PaymentSuccessApprove, Subscribe, PlanAction) {
        var model = this;
        model.subscriptionsplan = {};
        if ($state.current.name == 'SubscriptionsPlans') {
            Planslist.get().$promise.then(function (response) {
                $scope.subscriptionsplan = response.subscriptions;
                $scope.urlGO = response.urlgo;
                if($scope.urlGO !== undefined){
                    $location.path($scope.urlGO);
                }
                if($scope.subscriptionsplan === undefined){
                    $scope.subCount = 0;
                }else{
                    $scope.subCount = $scope.subscriptionsplan.length;
                }
            });
        }
        function subscribe(){
            Subscribe.get().$promise.then(function(response) {
                $scope.subscribeDetail = response.subscribes;
            });
        }

        if ($state.current.name == 'SubscriptionPlan') {
            GetSubscriptionDetail.get({id: $state.params.id}).$promise.then(function(response) {
                model.subscribeplan = response;
                model.subscribeplan.price = parseInt(response.price);
            });
        }
        if ($state.current.name == 'Subscribe') {
            subscribe();
        }
        $scope.planaction = function (actionType){
            if(actionType == 'active'){
                actParam = 'active';
                var titleMsg = 'Are you sure to activate your suspended paypal subscription?';
            }else if(actionType == 'suspend'){
                actParam = 'suspend';
                var titleMsg = 'Are you sure to Suspend your activated paypal subscription?';
            }else{
                actParam = 'cancel';
                var titleMsg = 'Are you sure to cancel your paypal subscription?';
            }
             SweetAlert.swal({
                title: titleMsg,
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                if(isConfirm) {
                    $('#preloader').attr('style','display:block');
                    $('#status').attr('style','display:block');
                    PlanAction.get({'par': actParam}).$promise.then(function(response){
                        $('#preloader').attr('style','display:none');
                        $('#status').attr('style','display:none');
                        subscribe();
                        if(actionType == 'active'){
                            $rootScope.auth.is_paypal_suspend = 0;
                            var respMsg = "Paypal Subscription Activated Successfully"; 
                        }else if(actionType == 'suspend'){
                            $rootScope.auth.is_paypal_suspend = 1;
                            var respMsg = "Paypal Subscription Suspended Successfully";
                        }else{
                             $rootScope.auth.is_paypal_cancel = 1;
                             var respMsg = "Paypal Subscription Canceled Successfully";
                        }
                        Flash.set($filter("translate")(respMsg), 'success', true);
                    });
                }
            });
        };
        model.payment = function (){
            SweetAlert.swal({
                title: "Are you sure to subscribe this plan?",
                text: "",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function (isConfirm) {
                if(isConfirm) {
                    $('#preloader').attr('style','display:block');
                    $('#status').attr('style','display:block');
                    /* Here we are using paypal only so i m directly post the values to backend controller */
                   PaymentGateway.post(model.subscribeplan).$promise.then(function(response) {
                        $scope.gatewayDetails = response;
                        if($scope.gatewayDetails.status === 'success'){
                           window.location.href=$scope.gatewayDetails.urlgo;
                        }
                   });
                }
            });
        };
        if ($state.current.name == 'success') {
           PaymentSuccessApprove.get({tokenid: $location.search().token, payerid:  $location.search().PayerID}).$promise.then(function(response) {
                $rootScope.auth.is_trial = 0;
           });
        }
    });
})(angular.module('Abs.Subscriptions'));