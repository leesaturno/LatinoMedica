(function (module) {
    module.directive('locationDirections', function() {
       return {
            restrict: 'E',
            link: function(scope, element, attrs) {
				if (angular.isDefined(attrs.wayPoints)) {
					scope.wayPoints = attrs.wayPoints;
				}/* else {
					scope.wayPoints = [];
				}*/
			},
			controller: function($scope, $element) {
				$scope.origin = "toronto";
				$scope.destination = "ottawa";
				$scope.mapChanged = function() {
					$scope.origin = $scope.originBox;
					$scope.destination = $scope.destinationBox;
					alert($scope.origin+"-----"+$scope.destination);
				};
			},
			templateUrl: 'CustomDirectives/Maps/locationDirections.tpl.html'
        };    
    });
}(angular.module("Abs.Maps", [
    'ngMap'    
])));