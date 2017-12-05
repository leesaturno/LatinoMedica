(function (module) {
    module.directive('locationDirections', function(){
       return {
        restrict: 'E',
        scope: {
            customerInfo: '='
        },
        controller : function($rootScope,$scope,NgMap){
            $rootScope.logLatLng = function(e) {
                console.log('loc', e.latLng);
            };
            $rootScope.wayPoints = [];
            /*$rootScope.wayPoints = [
                {location: {lat:44.32384807250689, lng: -78.079833984375}, stopover: true},
                {location: {lat:44.55916341529184, lng: -76.17919921875}, stopover: true},
            ];*/
        },
		templateUrl: 'Maps/locationDirections.tpl.html'
	   };    
    });
// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.Maps", [
    'ngMap'    
])));
