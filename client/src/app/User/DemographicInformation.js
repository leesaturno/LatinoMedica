(function (module) {
	/*
	-DemographnInformation  module
	-Users can update their demographic information
	*/
	module.controller('DemographicInformationController', DemographicInformationController);
	DemographicInformationController.$inject = ['$rootScope', '$scope', '$state', '$filter', 'Flash', '$timeout', 'ConstUserType', 'SweetAlert', 'DemographicInformation', 'UserProfilesFactory'];
	function DemographicInformationController($rootScope, $scope, $state, $filter, Flash, $timeout, ConstUserType, SweetAlert, DemographicInformation, UserProfilesFactory) {
		var model = this;
		/* [ Flash Message ] */
		function flashMessage(message, classname) {
			Flash.set($filter("translate")(message), classname, true);
		}

		/* [Update demographic information] */
		function update_demographicinfo(data) {
			console.log(data);
			DemographicInformation.post(data).$promise.then(function (response) {
				if (angular.isDefined(response)) {
					if (response.Success) {
						$timeout(function () {
							$state.go('DemographicInformation', {}, { reload: true });
						}, 500);
						flashMessage(response.Success, 'success');
					} else {
						flashMessage(response.Failure, 'error');
					}

				}
			});
		}

		/* [Get demographic information] */
		function getDemographicinfo() {
			UserProfilesFactory.get().$promise.then(function (response) {
				if (angular.isDefined(response)) {
					model.demographicinformation = response;
					model.demographicInformation.postal_code = response.postal_code;
					model.demographicInformation.preferred_lang = parseInt(response.preferred_lang);					
					var race_ids = response.race.split(',');
					for(var i=0; i<race_ids.length; i++) {
						race_ids[i] = parseInt(race_ids[i], 10);
					} 
					model.racevalue = {
						race_ids:  race_ids
					};
					var ethic_ids = response.ethnicity.split(',');
					for(var j=0; j<ethic_ids.length; j++) { ethic_ids[j] = parseInt(ethic_ids[j], 10); } 
					model.ethic = {
						ethic_ids:  ethic_ids
					};
					
				}
			});
		}
		
		model.init = function () {
			$rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + "Demographic information";
			model.demographicInformation = {};
		};
		
		model.init();
		model.ConstUserType = ConstUserType;
		if ($state.current.name == 'DemographicInformation') {
			
			/* [Races checkbox values] */
			model.races = [
				{id: 1, name: 'American Indian or Alaska Native'},
				{id: 2, name: 'Asian'},
				{id: 3, name: 'Native Hawaiian'},
				{id: 4, name: 'Other Pacific Islander'},
				{id: 5, name: 'White'},
				{id: 6, name: 'Black or African American'},
				{id: 7, name: 'Other'},
				{id: 8, name: 'Decline to Answer'}
			];
			
			/* [Ethnicity checkbox values] */
			model.ethnic = [
				{id: 1, name: 'Hispanic or Latino'},
				{id: 2, name: 'Non Hispanic or Latino'},
				{id: 3, name: 'Decline to answer'}
			];
			
			/* [Languages select box values] */
			model.languages = [
				{value: 42, option: 'English'},
				{value: 149, option: 'Spanish'}
			];
			
			getDemographicinfo();
			
		}
		
		/* [race checkbox value ] */
		model.race_check = function (value, checked) {
            var idx = model.racevalue.race_ids.indexOf(value);
            if (idx >= 0 && !checked) {
                model.racevalue.race_ids.splice(idx, 1);
            }
            if (idx < 0 && checked) {
                model.racevalue.race_ids.push(value);
            }
			
        };
		
		/* [Ethnicity checkbox value ] */
		model.ethnicity_check = function (value, checked) {
            var idj = model.ethic.ethic_ids.indexOf(value);
            if (idj >= 0 && !checked) {
                model.ethic.ethic_ids.splice(idj, 1);
            }
            if (idj < 0 && checked) {
                model.ethic.ethic_ids.push(value);
            }
			
        };
		
		/* [update demographic info form submit] */
		model.addDemographic = function () {
			model.demographicInformation.race = model.racevalue.race_ids.toString();
			model.demographicInformation.ethnicity = model.ethic.ethic_ids.toString();
			update_demographicinfo(model.demographicInformation);
		};
		
	}

} (angular.module("Abs.user")));