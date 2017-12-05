(function (module) {
    /**
     * @ngdoc controller
     * @name user.controller:NotificationController
     * @description
     *
     * This is user profile controller having the methods setmMetaData, init, upload and user_profile. It controld the user profile functions.
     **/ 
    module.controller('NotificationController', function ($state, $scope, Flash, $filter, $rootScope, $location, ConstUserType, Notifications) {
        var model = this;
        
      
        /**
         * @ngdoc method
         * @name setMetaData
         * @methodOf user.controller:NotificationController
         * @description
         *
         * This method will set the meta data dynamically by using the angular.element function.
         **/ 
      /*  model.setMetaData = function () {
            var pageTitle = $filter("translate")("User Profile");
            var fullUrl = $location.absUrl();
            var appUrl = $rootScope.settings['scheme_name'] + ":/" + $location.url();
            angular.element('html head meta[property="og:title"], html head meta[name="twitter:title"]').attr("content", $rootScope.settings['site.name'] + " | " + pageTitle);
            angular.element('meta[property="al:ios:url"], meta[property="al:ipad:url"], meta[property="al:android:url"], meta[property="al:windows_phone:url"], html head meta[name="twitter:app:url:iphone"], html head meta[name="twitter:app:url:ipad"], html head meta[name="twitter:app:url:googleplay"]').attr('content', appUrl);
            angular.element('meta[property="og:url"]').attr('content', fullUrl);
        };*/
        /**
         * @ngdoc method
         * @name init
         * @methodOf user.controller:NotificationController
         * @description
         * This method will initialze the page. It returns the page title
         *
         **/
        model.init = function () {
          //model.setMetaData();
			model.formValue = {
				is_remind_email_wellness:0,
				is_remind_app_appointments:0,
				is_remind_app_appointment_changed:0,
				is_remind_app_wellness:0
        	};
        };
        model.init();
		model.ConstUserType = ConstUserType;
        Notifications.get().$promise.then(function (response) {      
          	model.formValue.is_remind_email_wellness = response.is_remind_email_wellness;
			model.formValue.is_remind_app_appointments = response.is_remind_app_appointments;
			model.formValue.is_remind_app_appointment_changed = response.is_remind_app_appointment_changed;
			model.formValue.is_remind_app_wellness = response.is_remind_app_wellness;
        });
        model.notification = function () {
			
			if (angular.isUndefined(model.formValue.is_remind_email_wellness)) {
				model.formValue.is_remind_email_wellness = 0;
			} else if (angular.isUndefined(model.formValue.is_remind_app_appointments)) {
				model.formValue.is_remind_app_appointments = 0;
			} else if (angular.isUndefined(model.formValue.is_remind_app_appointment_changed)) {
				model.formValue.is_remind_app_appointment_changed = 0;
			} else if (angular.isUndefined(model.formValue.is_remind_app_wellness)) {
				model.formValue.is_remind_app_wellness = 0;
			}
			Notifications.add(model.formValue).$promise.then(function (response){
                if(response.Success){
                    Flash.set($filter("translate")(response.Success), 'success', true);
                    $state.go('Notifications',{},{reload:true});
                }else{
                    Flash.set($filter("translate")(response.Failed), 'error', false);
                }
            });        
        };
    });
}(angular.module("Abs.user")));