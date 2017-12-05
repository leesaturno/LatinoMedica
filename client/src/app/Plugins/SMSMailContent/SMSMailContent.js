(function (module) {
    module.controller('SMSMailContentController', function ($scope, $http, $filter, $state, $rootScope, $location, Flash, SweetAlert, SmsList, SmsEdit, MailList, MailEdit, Restore) {
        var model = this;
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf pages.controller:PagesController
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
        if($state.current.name === 'SmsList'){
            SmsList.get().$promise.then(function (response){
               $scope.templates = response.data;
            });
        }else if($state.current.name === 'MailList'){
            MailList.get().$promise.then(function (response){
                $scope.templates = response.data;
            });
        }else if($state.current.name === 'SmsEdit'){
            SmsEdit.get({id:$state.params.id}).$promise.then(function (response){
                model.template = response;
            });
        }else if($state.current.name === 'MailEdit'){
            MailEdit.get({id:$state.params.id}).$promise.then(function (response){
                model.template = response;
            });
        }

        model.smsTemplateupdate = function (){
            SweetAlert.swal({
                title: "Are you sure to Modify this template?",
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
                    SmsEdit.put(model.template).$promise.then(function (response){
                        if(response.Success){
                            Flash.set($filter("translate")(response.Success), 'success', true);
                            $state.go('SmsList');
                        }else{
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                    });
                }
            });
        };
        model.mailTemplateupdate = function (){
            SweetAlert.swal({
                title: "Are you sure to Modify this template?",
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
                    MailEdit.put(model.template).$promise.then(function (response){
                        if(response.Success){
                            Flash.set($filter("translate")(response.Success), 'success', true);
                            $state.go('MailList');
                        }else{
                            Flash.set($filter("translate")(response.Failed), 'error', false);
                        }
                    });
                }
            });
        };
        $scope.restoretemplate = function (templatename, type){
            if(type === 'sms'){
                titleText = 'Are you sure to restore this SMS template?';
            }else if(type === 'mail'){
                titleText = 'Are you sure to restore this Mail template?';
            }
            SweetAlert.swal({
                    title: titleText,
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
                        Restore.get({url_type:type, tmp_name:templatename}).$promise.then(function(response){
                            if(response.Success){
                                Flash.set($filter("translate")(response.Success), 'success', true);
                                if(type === 'sms'){
                                    $state.go('SmsList');
                                }else if(type === 'mail'){
                                    $state.go('MailList');
                                }
                            }else{
                                Flash.set($filter("translate")(response.Failed), 'error', false);
                            }
                        });
                    }
                });

        };
    });
} (angular.module("Abs.SMSMailContent")));
