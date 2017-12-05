var ngapp = angular.module('agriyBase', ['ng-admin', 'ng-admin.jwt-auth','angular.morris-chart']);
var admin_api_url = '';
var limit_per_page = 20;
var no_limit_per_page = 100;
var enabledPlugins;
// dashboard page redirect changes
function homeController($scope, $http, $location) {
    $location.path('/dashboard');
}
ngapp.config(function ($stateProvider) {
      $stateProvider.state('home', {
        url: '/',
        controller: homeController,
        controllerAs: 'controller'
    })
});
//Customize API Mapping
//Referenced Document Link: http://ng-admin-book.marmelab.com/doc/API-mapping.html
ngapp.config(['RestangularProvider', function (RestangularProvider) {
        // use the custom query parameters function to format the API request correctly
        RestangularProvider.addFullRequestInterceptor(function (element, operation, what, url, headers, params) {
            // custom pagination params
            if (params._filters) {
                angular.forEach(params._filters, function (value, i) {
                    params[i] = value;
                });
                delete params._filters;
            }
            if (params._sortField) {
                params.sort = params._sortField;
            }
            delete params._sortField;
            if (params._sortDir) {
                params.sortby = params._sortDir;
            }
            delete params._sortDir;
            if (params._perPage !== null && params._perPage !== 'all' && params._page) {
                params._start = (params._page - 1) * params._perPage;
                params._end = params._page * params._perPage;
                //In REST file, we added page and limit query parameters for pagination
                //Get Reference from http://ng-admin-book.marmelab.com/doc/API-mapping.html
                //Keyword - pagination
                params.page = params._page;
                params.limit = params._perPage;
            }
            delete params._start;
            delete params._end;
            if (params._perPage === null) {
                params.limit = limit_per_page;
            }
            //limit('all') is used for dropdown values, our api default limit value is '10', to show all the value we should pass string 'all' in limit parameter.
            if (params._perPage == 'all') {
                params.limit = 'all';
            }
            delete params._page;
            delete params._perPage;
            // custom sort params
            if (params._sortField) {
                delete params._sortField;
                delete params._sortDir;
            }
            return {
                params: params
            };
        });
        //Total Number of Results
        //Our API doesn't return a X-Total-Count header, so we added a totalCount property to the response object using a Restangular response interceptor.
        //Removed metadata info from response
        RestangularProvider.addResponseInterceptor(function (data, operation, what, url, response) {
            if (operation === "getList") {
                var headers = response.headers();
                if (response.data.meta.pagination.total !== null) {
                    response.totalCount = response.data.meta.pagination.total;
                }
            }
            return data;
        });
        //To cutomize single view results, we added setResponseExtractor.
        //Our API Edit view results single array with following data format data[{}], Its not working with ng-admin format
        //so we returned data like data[0];
        RestangularProvider.setResponseExtractor(function (response, operation, what, url) {
            if (response.data) {
                if (operation === "getList") {
                    // Use results as the return type, and save the result metadata
                    var newResponse = response.data;
                    newResponse._metadata = response.meta.pagination;
                    return newResponse;
                }
                return response.data[0];
            } else {
                return response;
            }
        });
    }]);
//Custom Header
//Referenced Link: http://ng-admin-book.marmelab.com/doc/Dashboard.html
//Above link has details about dashboard customization, we follwed the same steps for header customization.
//Created custom directive for header, reference http://ng-admin-book.marmelab.com/doc/Custom-pages.html keyword - directive.
//Template files created under 'tpl' directory.
ngapp.directive('customHeader', ['$location', '$state', '$http', function ($location, $state, $http, $scope) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: '../ag-admin/tpl/customHeader.tpl.html',
            link: function (scope) {
                scope.siteUrl = admin_api_url;
            }
        };
    }]);
ngapp.directive('bookingManual', ['$location', '$state', '$http', 'notification', function($location, $state, $http, notification) {
    return {
        restrict: 'E',
        scope: {
            entity: "&",
            entityName: "@",
            entry: "&",
            size: "@",
            label: "@",
            post: '&'
        },
        template: "<a class=\"btn btn-default btn-xs\"  href=\"../ag-admin/#/work_places/list/{{doctor_id}}\" ng-disabled=\"disableButton\" title=\"Work Places\" ng-class=\"{ 'btn-{{size}} hide': removeCancel === false }\"><i class=\"fa fa-map-marker\"></i></a>",
        link: function(scope, element) {
                scope.doctor_id = scope.entry()
                    .values.id;
        }
    };
}]);
ngapp.directive('badgeView', ['$location', '$state', '$http', 'notification', function($location, $state, $http, notification) {
    return {
        restrict: 'E',
        scope: {
            entity: "&",
            entityName: "@",
            entry: "&",
            size: "@",
            label: "@",
            post: '&'
        },
        template: "<a class=\"btn btn-default btn-xs\"  href=\"../ag-admin/#/badges/{{doctor_id}}\" ng-disabled=\"disableButton\" title=\"Badges\" ng-class=\"{ 'btn-{{size}} hide': removeCancel === false }\"><i class=\"fa fa-cog\"></i></a>",
        link: function(scope, element) {
                scope.doctor_id = scope.entry()
                    .values.id;
        }
    };
}]);
ngapp.directive('showManual', ['$location', '$state', '$http', 'notification', function($location, $state, $http, notification) {
    return {
        restrict: 'E',
        scope: {
            entity: "&",
            entityName: "@",
            entry: "&",
            size: "@",
            label: "@",
            post: '&'
        },
        template: "<a class=\"btn btn-default btn-xs\"  href=\"../ag-admin/#/users/view/{{id}}\" ng-disabled=\"disableButton\" title=\"User Views\" ng-class=\"{ 'btn-{{size}} hide': removeCancel === false }\"><i class=\"fa fa-eye\"></i></a>",
        link: function(scope, element) {
                scope.id = scope.entry()
                    .values.id;
        }
    };
}]);
    ngapp.directive('starRating', ['$location', '$state', '$http', function ($location, $state, $http, $scope) {
        return {
            restrict: 'E',
            scope: {
        	stars: '@'
            },
            template: '<i ng-repeat=\"star in starsArray\" class=\"glyphicon glyphicon-star\"></i>',
            link: function (scope,elm, attrs, ctrl) {
                scope.starsArray = Array.apply(null, { length: parseInt(scope.stars) }).map(Number.call, Number);
            }
        };
    }]);
 ngapp.directive('geoLocation', ['$location', function($location) {
    return {
        restrict: 'E',
        scope: {
            entity: "&",
            entityName: "@",
            entry: "&",
            size: "@",
            label: "@"
        },
        link: function(scope) {
            var autocompleteFrom = new google.maps.places.Autocomplete(document.getElementById('geo-location'));
            /* [ Display the address value if already inserted ] */
            if (scope.entry()
                .values.address != '') {
                scope.address = scope.entry()
                    .values.address;
            }
            google.maps.event.addListener(autocompleteFrom, 'place_changed', function() {
                scope.entry().values['address'] = '';
                scope.entry().values['address1'] = '';
                scope.entry().values['postal_code'] = '';
                var place = autocompleteFrom.getPlace();
                scope.entry().values.latitude = place.geometry.location.lat();
                scope.entry().values.longitude = place.geometry.location.lng();
                scope.entry().values['address'] = place.formatted_address;
                var k = 0;
                angular.forEach(place.address_components, function(value, key) {
                    //jshint unused:false
                    if (value.types[0] === 'locality' || value.types[0] === 'administrative_area_level_2') {
                        if (k === 0) {
                            if (scope.entry().values.id !== undefined) {
                                scope.entry().values['city_name'] = value.long_name;
                            } else {
                                scope.entry().values['city_name'] = value.long_name;
                            }
                        }
                        if (value.types[0] === 'locality') {
                            k = 1;
                        }
                    }
                    if (value.types[0] === 'sublocality_level_1' || value.types[0] === 'sublocality_level_2') {
                        if (scope.entry().values['address1'] !== '') {
                            scope.entry().values['address1'] = scope.entry().values['address1'] + ', ' + value.long_name;
                        } else {
                            scope.entry().values['address1'] = value.long_name;
                        }
                    }
                    if (value.types[0] === 'administrative_area_level_1') {
                        if (scope.entry().values.id !== undefined) {
                            scope.entry().values['state_name'] = value.long_name;
                        } else {
                            scope.entry().values['state_name'] = value.long_name;
                        }
                    }
                    if (value.types[0] === 'country') {
                         scope.entry().values['country_name'] = value.long_name;
                    }
                    if (value.types[0] === 'postal_code') {
                        scope.entry().values.postal_code = parseInt(value.long_name);
                    }
                });
                scope.$apply();
            });
        },
        template: '<input name="address" class="form-control" id="geo-location" ng-model="address">'
    };
}]);
 
/* [ Time Picker UIB ] */
ngapp.directive('timePicker', function($filter) {
    return {
        restrict: 'E',
        scope: {
            entry: '&',
            field: '@'
        },
        controller: function($scope, $log) {
            $scope.value = $scope.entry()
                .values[$scope.field];
            $scope.time = new Date();
            if ($scope.value !== null && $scope.value !== undefined) {
                var n = $scope.value.split(':');
                $scope.time.setHours(n[0]);
                $scope.time.setMinutes(n[1]);
            }
            $scope.hstep = 1;
            $scope.mstep = 5;
            $scope.options = {
                hstep: [1, 2, 3],
                mstep: [1, 2, 3]
            };
            $scope.changed = function() {
                $scope.entry()
                    .values[$scope.field] = $scope.time.getHours() + ":" + $scope.time.getMinutes() + ":00";
            };
            $scope.changed();
            $scope.ismeridian = false;
            $scope.toggleMode = function() {
                $scope.ismeridian = !$scope.ismeridian;
            };
        },
        template: '<uib-timepicker ng-model="time" ng-change="changed()" hour-step="hstep" minute-step="mstep" show-meridian="ismeridian"></uib-timepicker>'
    };
});
//Custom  Dashboard
//Referenced Link: http://ng-admin-book.marmelab.com/doc/Dashboard.html
//Created custom directive for header, reference http://ng-admin-book.marmelab.com/doc/Custom-pages.html keyword - directive.
//Template files created under 'tpl' directory.
ngapp.directive('dashboardSummary', ['$location', '$state', '$http', function ($location, $state, $http) {
        return {
            restrict: 'E',
            scope: {
                entity: "&",
                entityName: "@",
                entry: "&",
                size: "@",
                label: "@",
                revenueDetails: "&"
            },
            templateUrl: '../ag-admin/tpl/dashboardSummary.tpl.html',
            link: function (scope) {
                scope.rangeVal = [{
                        "key": "lastDays",
                        "value": "Last 7 Days"
                    }, {
                        "key": "lastWeeks",
                        "value": "Last 4 Weeks"
                    }, {
                        "key": "lastMonths",
                        "value": "Last 3 Months"
                    }, {
                        "key": "lastYears",
                        "value": "Last 1 Years"
                    }];
                if (scope.rangeText === undefined) {
                    scope.rangeText = "Last 7 Days";
                }
                scope.selectedRangeItem = function (rangeVal, rangeText) {
                    $http.get(admin_api_url + '/api/admin/stats', {
                        params: {
                            filter: rangeVal
                        }
                    }).success(function (response) {
                        scope.adminstats = response;
                        scope.rangeText = rangeText;
                    });
                };
                var token = localStorage.userToken;
                if (!token) {
                    $state.go('logout');
                } else {
                    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
                }
                $http.get(admin_api_url + '/api/admin/stats?filter=lastDays').success(function (response) {
                    scope.adminstats = response;
                });
                $http.get(admin_api_url + '/api/admin/activities').success(function (response) {
                    scope.adminactivities = response;
                });
                scope.enabled_plugin = localStorage.getItem('enabled_plugins');
                scope.site_version = localStorage.getItem('site_version');
                $http.get(admin_api_url + '/api/admin/settings/site.version/show').success(function (response) {
                    scope.siteversion = response.settings[0];
                });
            }
        };
    }]);
//Pages controller defined here.
function pagesController($scope, $http, $location, notification) {
    $scope.languageArr = [];
    $http.get(admin_api_url + '/api/languages?filter=active&sort=name&sortby=asc', {}).success(function (response) {
        $scope.languageList = response;
    }, function () {
    });
    $scope.pageAdd = function () {
        angular.forEach($scope.languageArr.pages, function (value, key) {
            $scope.languageArr.pages[key]['language_id'] = key;
            $scope.languageArr.pages[key]['slug'] = $scope.languageArr.pages.slug;
        }, $scope.languageArr.pages);
        $http.post(admin_api_url + '/api/admin/pages', $scope.languageArr.pages).success(function (response) {
            if (response.Success !== undefined) {
                notification.log(response.Success, {addnCls: 'humane-flatty-success'});
                $location.path('/pages/list');
            } else {
                notification.log('Page could not be updated. Please, try again.', {addnCls: 'humane-flatty-error'});
            }
        });
    }
}
//plugins controller function
function pluginsController($scope, $http, notification, $state, $window) {
    getPluginDetails();
    function getPluginDetails() {
        $http.get(admin_api_url + '/api/admin/plugins', {}).success(function (response) {
            $scope.other_plugin = response.other_plugin;
            $scope.enabled_plugin = response.enabled_plugin;
            enabledPlugin = response.enabled_plugin;
            localStorage.setItem('enabled_plugins', JSON.stringify(enabledPlugin));
        }, function (error) {
        });
    }
    ;
    $scope.checkStatus = function (plugin, enabled_plugins) {
        if ($.inArray(plugin, enabled_plugins) > -1) {
            return true;
        } else {
            return false;
        }
    }
    $scope.updatePluginStatus = function (e, plugin_name, status) {
        e.preventDefault();
        var target = angular.element(e.target);
        checkDisabled = target.parent().hasClass('disabled');
        if (checkDisabled === true) {
            return false;
        }
        var params = {};
        var confirm_msg = '';
        params.plugin_name = plugin_name;
        params.is_enabled = status;
        confirm_msg = (status === 0) ? "Are you sure want to disable?" : "Are you sure want to enable?";
        notification_msg = (status === 0) ? "disabled" : "enabled";
        if (confirm(confirm_msg)) {
            $http.put(admin_api_url + '/api/admin/plugins', params).success(function (response) {
                if (response.Success !== undefined) {
                    notification.log(plugin_name + ' Plugin update successfully.', {addnCls: 'humane-flatty-success'});
                    $state.reload();
                }
            }, function (error) {
                notification.log(plugin_name + ' Plugin could not be update', {addnCls: 'humane-flatty-error'});
                $state.reload();
            });
        }
    }
    $scope.fullRefresh = function () {
        $state.reload();
    }
}
function workplacesController($scope, $http, notification, $state, $window) {
    var token = localStorage.userToken;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    $scope.translationLanguages = [];
    $http.get(admin_api_url + '/api/admin/work_places/list/'+$state.params.doctor_id).success(function (response) {
        $scope.workplaces = response.data;
    });
}
function BadgesController($scope, $http, notification, $state, $window, Upload) {
    var token = localStorage.userToken;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    $scope.translationLanguages = [];
    $scope.isDoctorAccount = true;
    $http.get(admin_api_url + '/api/admin/users/'+$state.params.id+'/edit').success(function (response) {
        if(response.role_id == 3) {
            $scope.isDoctorAccount = true;
            $http.get(admin_api_url + '/api/admin/badges?user_id='+$state.params.id).success(function (response) {
                $scope.userBadges = response.data;
            });
        } else {
            $scope.isDoctorAccount = false;
        }
    });
    $scope.deleteBadges = function(id){
        if(angular.isDefined(id)){
            $http.delete(admin_api_url + '/api/admin/badges/'+id).success(function (response) {
                notification.log('User Badges deleted successfully.', {addnCls: 'humane-flatty-success'});
                    $state.reload();
            }, function (error) {
                notification.log('User Badges could not be deleted, Please try again.', {addnCls: 'humane-flatty-error'});       
            });
        }
    };
    
}


function userviewsController($scope, $http, notification, $state, $window) {
    var token = localStorage.userToken;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    $scope.translationLanguages = [];
    $http.get(admin_api_url + '/api/admin/users/'+$state.params.id).success(function (response) {
        console.log(response);
        $scope.userView = response;
    });
}
//Translations controller defined here.
function translationsController($scope, $http, $location, notification) {
    var token = localStorage.userToken;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    $scope.translationLanguages = [];
    $scope.Verified = 1; 
    
        $http.get(admin_api_url + '/api/admin/translations/languageCount').success(function (response) {
            $scope.translationLanguages = response.data;
            $scope.maxSize = response.meta.pagination.per_page;
            $scope.totalItems = response.meta.pagination.total;
            $scope.currentPage = response.meta.pagination.current_page;
            $scope.totalPages = response.meta.pagination.total_pages;
            $scope.pageChanged = function (page) {
                $scope.currentPage = page;
                $scope.getTranslation($scope.currentPage);
            };
            $scope.getTranslation = function (value) {
                var param = {
                    'page': $scope.currentPage
                };
                $scope.currentPage  = value;         
                $http.get(admin_api_url + '/api/admin/translations/languageCount?page='+$scope.currentPage).success(function (response) {
                    $scope.translationLanguages = response.data;
                    angular.forEach($scope.translationLanguages, function(value) {
                        if (angular.isDefined(value.attachments)) {
                            value.isShowUL = (Object.keys(value.attachments.data).length > 0)?true:false;
                        }
                    });
                    $scope._metadata = response.meta.pagination;
                    $scope.currentPage = param.page;
                    $scope.maxSize = 10;
                });
            };
             setTimeout(function(){
                $('.pagination-prev a').html('<i class="fa fa-chevron-left"></i>');
                $('.pagination-next a').html('<i class="fa fa-chevron-right"></i>');
            }, 1000);
        });
    
        $scope.deletelanguage = function (value) {
            $http.delete(admin_api_url + '/api/admin/translations/'+value, {id : value}).success(function (response) {
                if (response.Success !== undefined) {
                    notification.log(response.Success, {addnCls: 'humane-flatty-success'});
                    $location.path('/translations/all');
                } else {
                    notification.log('Page could not be updated. Please, try again.', {addnCls: 'humane-flatty-error'});
                }
            });
        };

        $scope.languageAction = function (type,id) {
            $http.post(admin_api_url + '/api/admin/languages/activation?type='+type+'&id='+id).success(function (response) {
                if (response.Success !== undefined) {
                    notification.log(response.Success, {addnCls: 'humane-flatty-success'});
                    $location.path('/translations/all');
                } else {
                    notification.log('Language could not be updated. Please, try again.', {addnCls: 'humane-flatty-error'});
                }
            });
        };
    
    
}
function translationTextAddsController($scope, $http,  $state, notification, $location) {
    var token = localStorage.userToken;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    $http.get(admin_api_url + '/api/admin/translations/language').success(function (response) {
            $scope.translateLanguageList = response; 
            $scope.translationTextAdd = function () {
            $('.js-loader-off').addClass('hide');
            $('.js-loader-on').removeClass('hide');
            var formdata = [];
                formdata.push({
                    'key': $scope.translationTextAdd.english_text,
                    'lang_text': $scope.translationTextAdd.english_text,
                    'language_id': 42
                });
            $('.js-addtext-translate').each(function(e) {
                $this = $(this);
                var ids = $this.attr('id'); 
                var id = ids.split('-');
                formdata.push({
                    'key': $scope.translationTextAdd.english_text,
                    'lang_text': $('#'+id[0]+'-'+id[1]+'-'+id[2]).val(),
                    'language_id': id[1]
                });
            });
            $http.post(admin_api_url + '/api/admin/translations/add', {'message' : formdata}).success(function (response) {
                if (response.Success !== undefined) {
                    notification.log('Translation text has been added.', {addnCls: 'humane-flatty-success'});
                    $location.path('/translations/all');
                } else {
                    notification.log('Translations text could not be updated. Please, try again.', {addnCls: 'humane-flatty-error'});
                }

            });
    };           
    });
    
}
function translationEditController($scope, $http,  $state, notification, $location) {
    var token = localStorage.userToken;
    var controller = this;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    $scope.translationEditList = [];
    var params = $state.params.id;
    $scope.init = function (params) {
    $http.get(params).success(function (response) {
        $scope.translationEditList = response.data;
        $scope.maxSize = response.meta.pagination.per_page;
        $scope.totalItems = response.meta.pagination.total;
        $scope.currentPage = response.meta.pagination.current_page;
        $scope.totalPages = response.meta.pagination.total_pages;
        $scope.pageChanged = function (page) {
            $scope.currentPage = page;
            $scope.getTranslation(params,$scope.currentPage);
        };
        $scope.getTranslation = function (params, value) {
            $scope.currentPage  = value;
			var searchText = "";
			if (angular.isDefined($scope.q)) {
				searchText+= "&q="+$scope.q;
			}
			if (angular.isDefined($scope.is_verified_checked) && $scope.is_verified_checked != "") {
				searchText+= "&is_verified="+$scope.is_verified_checked;
			}
			if (angular.isDefined($scope.is_pending_checked) && $scope.is_pending_checked != "") {
				searchText+= "&is_pending="+$scope.is_pending_checked;
			}
            $http.get(admin_api_url + '/api/admin/translations/'+$state.params.id+'?page='+$scope.currentPage+searchText).success(function (response) {
                $scope.translationEditList = response.data;
                angular.forEach($scope.translationEditList, function(value) {
                    if (angular.isDefined(value.attachments)) {
                        value.isShowUL = (Object.keys(value.attachments.data).length > 0)?true:false;
                    }
                });
                $scope._metadata = response.meta.pagination;
                $scope.maxSize = 10;
            });
        };
        setTimeout(function(){
                $('.pagination-prev a').html('<i class="fa fa-chevron-left"></i>');
                $('.pagination-next a').html('<i class="fa fa-chevron-right"></i>');
        }, 1000);
        $scope.translationEdit = function () {
            var formdata = [];
            $('.js-translation').each(function(e) {
                $this = $(this);
                var ids = $this.attr('id'); 
                var id = ids.split('-');
                var verify = 0;
                if($('#'+'dataisverified'+id[1]). prop("checked") == true){
                    verify = 1;
                }
				if($('#'+'dataistranslated'+id[1]). prop("checked") == true){
                    verify = 1;
                }
                formdata.push({
                    'key': $('#'+'datakey-'+id[1]).val(),
                    'value': $('#'+'datavalue'+id[1]).val(),
                    'is_verified': verify,
					'is_translated': verify,
                });
            });
            $http.put(admin_api_url + '/api/admin/translations/'+$state.params.id+'?page='+$scope.currentPage, {'message' : formdata}).success(function (response) {
                $scope.translationEditList = response.data;
                if (response.data !== undefined) {
                    notification.log('Translations has been updated', {addnCls: 'humane-flatty-success'});
                   var searchText = "";
					if (angular.isDefined($scope.q)) {
						searchText+= "&q="+$scope.q;
					}
					if (angular.isDefined($scope.is_verified_checked) && $scope.is_verified_checked != "") {
						searchText+= "&is_verified="+$scope.is_verified_checked;
					}
					if (angular.isDefined($scope.is_pending_checked) && $scope.is_pending_checked != "") {
						searchText+= "&is_pending="+$scope.is_pending_checked;
					}
                    $("html, body").stop().animate({scrollTop:0}, '500', 'swing', function() { 
                    });
                    $scope.init(admin_api_url + '/api/admin/translations/'+$state.params.id+'?page='+$scope.currentPage+searchText);
                } else {
                    notification.log('Translations could not be updated. Please, try again.', {addnCls: 'humane-flatty-error'});
                }
            });
        };
      });
    };
    $scope.init(admin_api_url + '/api/admin/translations/'+$state.params.id);
	$scope.clearFilter = function () {
		$scope.q = "";
		$scope.is_verified_checked = "";
		$scope.is_pending_checked = "";
		$scope.init(admin_api_url + '/api/admin/translations/'+$state.params.id+'?page=1');
	};
    $scope.filterText = function () {
        var searchText = "";
		if (angular.isDefined($scope.q)) {
			searchText+= "&q="+$scope.q;
		}
		if (angular.isDefined($scope.is_verified_checked) && $scope.is_verified_checked != "") {
			searchText+= "&is_verified="+$scope.is_verified_checked;
		}
		if (angular.isDefined($scope.is_pending_checked) && $scope.is_pending_checked != "") {
			searchText+= "&is_pending="+$scope.is_pending_checked;
		}
        $scope.init(admin_api_url + '/api/admin/translations/'+$state.params.id+'?page='+$scope.currentPage+searchText);
    };
}
function translationLanguagesController($scope, $http,  $state, notification, $location) {
    var token = localStorage.userToken;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    $http.get(admin_api_url + '/api/admin/translations/language/remain').success(function (response) {
            $scope.languageList = response;
            
    });
    $scope.translation = [];
    $scope.languagetranslationAdd = function (value) {
        var manual_translate = 0;
        var google_translate = 0;
        if (value == 1) {
            manual_translate = 1;
            google_translate = 0;
        } else {
            manual_translate = 0;
            google_translate = 1;
        }
        $scope.translation = {
            language_id:$scope.languageTo,
            key:'.',
            lang_text:'.',
            is_google_translate:google_translate,
            is_translated:manual_translate
        }
        $http.post(admin_api_url + '/api/admin/translations', $scope.translation).success(function (response) {
            if (response.Success !== undefined) {
                notification.log(response.Success, {addnCls: 'humane-flatty-success'});
                $location.path('/translations/all');
            } else {
                notification.log('translations could not be updated. Please, try again.', {addnCls: 'humane-flatty-error'});
            }
        });
    };
}
//Custom directives controlller function called here
//State Provider defined for custom pages.
//Templates created under 'tpl' directory and controller functions defined above.
ngapp.config(function ($stateProvider) {
    $stateProvider.state('pages', {
        parent: 'main',
        url: '/pages/add',
        templateUrl: '../ag-admin/tpl/pages.tpl.html',
        params: {
            id: null
        },
        controller: pagesController,
        controllerAs: 'controller',
    }).state('translationsList', {
        parent: 'main',
        url: '/translations/all',
        templateUrl: '../ag-admin/tpl/translationSummary.tpl.html',
        controller: translationsController,
        controllerAs: 'controller',
    }).state('translationLanguages', {
        parent: 'main',
        url: '/translations/add',
        templateUrl: '../ag-admin/tpl/translationLanguage.tpl.html',
        controller: translationLanguagesController,
        controllerAs: 'controller',
    }).state('translationTextAdd', {
        parent: 'main',
        url: '/translations/text/add',
        templateUrl: '../ag-admin/tpl/translationTextAdd.tpl.html',
        controller: translationTextAddsController,
        controllerAs: 'controller',
    }).state('translationEdit', {
        parent: 'main',
        url: '/translations/langedit/{id}',
        templateUrl: '../ag-admin/tpl/translationEdit.tpl.html',
        controller: translationEditController,
        controllerAs: 'controller',
	}).state('plugins', {
		parent: 'main',
		url: '/plugins',
		templateUrl: '../ag-admin/tpl/plugins.tpl.html',
		controller: pluginsController,
		controllerAs: 'controller',
	}).state('workplacesList', {
		parent: 'main',
		url: '/work_places/list/{doctor_id}',
		templateUrl: '../ag-admin/tpl/workplaces.tpl.html',
		controller: workplacesController,
		controllerAs: 'controller',
	}).state('userView', {
		parent: 'main',
		url: '/users/view/{id}',
		templateUrl: '../ag-admin/tpl/userView.tpl.html',
		controller: userviewsController,
		controllerAs: 'controller',
	}).state('badgesList', {
        parent: 'main',
        url: '/badges/{id}',
        templateUrl: '../ag-admin/tpl/badgesList.tpl.html',
        controller: BadgesController,
        controllerAs: 'controller',
    });
});
//Default pages/create changed here to pages/add.
ngapp.directive('createPage', ['$location', '$state', function ($location, $state) {
        return {
            restrict: 'E',
            scope: {
                entity: "&",
                entityName: "@",
                entry: "&",
                size: "@",
                label: "@"
            },
            template: '<a class="btn btn-default" ng-class="size ? \'btn-\' + size : \'\'" href="#/pages/add" >\n<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;<span class="hidden-xs"></span>\n</a>',
            link: function (scope) {
            }
        };
    }]);
    ngapp.directive('uploadImage', function() {
    return {
        restrict: 'E',
        scope: {
            entry: '&',
            class: '@'
        },
        controller: function($http, $scope, Upload, notification, $state) {
            $scope.show_error = false;
            $scope.upload = function() {
                if ($scope.badge) {
                    Upload.upload({
                            url: '/api/admin/badges?user_id='+$state.params.id,
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            },
                            user_id: $state.params.id,
                            file: $scope.badge                            
                        })
                        .then(function(response) {
                            $scope.response = response.data;
                            $state.reload();
                            if ($scope.response.error.code === 0) {
                                $scope.show_error = false;
                                $scope.badge.filename = $scope.response.attachment;
                                $scope.entry()
                                    .values.image = $scope.response.attachment;
                            }
                            if ($scope.response.error.code === 1) {
                                $scope.show_error = true;
                                notification.log("Image not uploaded.", {
                                    addnCls: 'humane-flatty-error'
                                });
                                return false;
                            }
                        }, function() {}, function(evt) {
                            $scope.badge.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                        });
                }
            };
        },
        template: '<div class="row"><div class="col-md-2"><button type="file" name="attachment" ng-model="badge" ngf-select="upload()" class="btn btn-default" accept="image/*"><span translate="BROWSE">Browse</span></button></div><span class="text-danger" ng-if="show_error">&nbsp;Upload image with 1200 x 800 Dimension</span><div class="col-md-10" ng-show="badge.progress >= 0 && !show_error"><div class="row"><div class="col-md-3 "><div class="progress" ng-show="badge.progress >= 0 && badge.progress < 100"></div></div><div class="col-md-9">{{badge.filename}}</div></div></div></div>'
    }
});
ngapp.config(['NgAdminConfigurationProvider', 'RestangularProvider', 'ngAdminJWTAuthConfiguratorProvider' ,function (NgAdminConfigurationProvider, RestangularProvider, ngAdminJWTAuthConfigurator) {
        var enabledPlugins = localStorage.getItem('enabled_plugins');
        var nga = NgAdminConfigurationProvider;
        ngAdminJWTAuthConfigurator.setJWTAuthURL(admin_api_url + '/api/users/login');
        ngAdminJWTAuthConfigurator.setCustomLoginTemplate('tpl/customLoginTemplate.html');
        ngAdminJWTAuthConfigurator.setCustomAuthHeader({
            name: 'Authorization',
            template: 'Bearer {{token}}'
        });
        /*
         After login success: do any thing here
         ngAdminJWTAuthConfigurator.setLoginSuccessCallback(function($state){
         })
         */
        //trunctate function to shorten text length.
        function truncate(value) {
            if (!value) {
                return '';
            }
            return value.length > 50 ? value.substr(0, 50) + '...' : value;
        }

        // create an admin application
        var admin = nga.application('Abs') // application main title
                .debug(true) // debug disabled
                .baseApiUrl(admin_api_url + '/api/admin/'); // main API endpoint
        // Creating all entities
        var users = nga.entity('users');
        var user_logins = nga.entity('user_logins');
        var cities = nga.entity('cities');
        var states = nga.entity('states');
        var countries = nga.entity('countries');
        var pages = nga.entity('pages');
        var email_templates = nga.entity('email_templates');
        var languages = nga.entity('languages');
        var settings = nga.entity('settings');
        var setting_categories = nga.entity('setting_categories');
        var ips = nga.entity('ips');
        var providers = nga.entity('providers');
        var roles = nga.entity('roles');
        var pages = nga.entity('pages');
        var contacts = nga.entity('contacts');
        var user_cash_withdrawals = nga.entity('user_cash_withdrawals');
        var user_logins = nga.entity('user_logins');
        var plugins = nga.entity('plugins');
        var transactions = nga.entity('transactions');
        var sms_templates = nga.entity('sms_templates');
        var plans = nga.entity('plans');
        var subscriptions = nga.entity('subscriptions');
        var user_educations = nga.entity('user_educations');
        var specialties = nga.entity('specialties');
        var specialty_diseases = nga.entity('specialty_diseases');
        var insurances = nga.entity('insurances');
        var questions = nga.entity('questions');
        var answers = nga.entity('answers');
        var user_favorites = nga.entity('user_favorites');
        var user_views = nga.entity('user_views');
        var appointments = nga.entity('appointments');
        var appointment_statuses = nga.entity('appointment_statuses');
        var user_reviews = nga.entity('user_reviews');
        var ratings = nga.entity('ratings');
        var messages = nga.entity('messages');
        var work_places = nga.entity('work_places');
        var payment_gateways = nga.entity('payment_gateways');
        var ical = nga.entity('ical');
		var translations = nga.entity('translations');
        
        //Adding all the entities to the admin application.
        admin.addEntity(users);
        admin.addEntity(user_logins);
        admin.addEntity(cities);
        admin.addEntity(states);
        admin.addEntity(countries);
        admin.addEntity(pages);
        admin.addEntity(email_templates);
        admin.addEntity(languages);
        admin.addEntity(settings);
        admin.addEntity(setting_categories);
        admin.addEntity(ips);
        admin.addEntity(providers);
        admin.addEntity(roles);
        admin.addEntity(pages);
        admin.addEntity(contacts);
        admin.addEntity(user_cash_withdrawals);
        admin.addEntity(user_logins);
        admin.addEntity(plugins);
        admin.addEntity(sms_templates);
        admin.addEntity(plans);
        admin.addEntity(subscriptions);
        admin.addEntity(transactions);
        admin.addEntity(user_educations);
        admin.addEntity(specialties);
        admin.addEntity(specialty_diseases);
        admin.addEntity(insurances);
        admin.addEntity(questions);
        admin.addEntity(answers);
        admin.addEntity(user_favorites);
        admin.addEntity(user_views);
        admin.addEntity(appointments);
        admin.addEntity(appointment_statuses);
        admin.addEntity(user_reviews);
        admin.addEntity(ratings);
        admin.addEntity(messages);
        admin.addEntity(work_places);
        admin.addEntity(payment_gateways);
        admin.addEntity(ical);
		admin.addEntity(translations);
        
        roles.listView().title('Roles')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('name').label('Name')
                ])
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>')
                ]);
        var countries_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        countries.listView().title('Countries')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('name').label('Name'),
                    nga.field('iso2').label('iso2')
                ])
                .infinitePagination(false)
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>')
                ])
                .actions(['create', 'batch', countries_custom_tmp]);

            ical.listView().title('Ical')
                .fields([
                    nga.field('link').label('Link'),
                    nga.field('user.user_profile.first_name').label('User'),
                    nga.field('is_active').label('Status')
                ])
                .infinitePagination(false)
                .perPage(limit_per_page)
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>')
                ]);
        countries.creationView().title('Add Country')
                .fields([
                    nga.field('name').label('Country')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Country'
                            }),
                    nga.field('iso2').label('iso2')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'iso2'
                            }),
                    nga.field('iso3').label('iso3')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'iso3'
                            })
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        // stop the progress bar
                        progression.done();
                        // add a notification
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        // redirect to the list view
                        $state.go($state.get('list'), {entity: entity.name()});
                        // cancel the default action (redirect to the add view)
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        // Error return to form fields.
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        // stop the progress bar
                        progression.done();
                        // add a notification
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        countries.editionView().title('Countries')
                .fields([
                    nga.field('name').label('Name'),
                    nga.field('iso2').label('iso2'),
                    nga.field('iso3').label('iso3')
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        var states_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        states.listView().title('States')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('name').label('Name'),
                    nga.field('Country.name').label('Country'),
                    nga.field('is_active', 'boolean').label('Active?')
                ])
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Active?'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }])
                ])
                .actions(['create', 'batch', states_custom_tmp]);
        states.creationView()
                .fields([
                    nga.field('name')
                            .label('State')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'State'
                            }),
                    nga.field('country_id', 'reference')
                            .label('Country')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Country'
                            })
                            .targetEntity(nga.entity('countries'))
                            .perPage('all') // For getting all list
                            .targetField(nga.field('name').map(truncate)),
                    nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }])
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        states.editionView()
                .fields([
                    nga.field('name')
                            .validation({
                                required: true
                            })
                            .label('State'),
                    nga.field('country_id', 'reference')
                            .label('Country')
                            .validation({
                                required: true
                            })
                            .perPage('all') // For getting all list
                            .targetEntity(nga.entity('countries'))
                            .targetField(nga.field('name').map(truncate)),
                    nga.field('is_active', 'choice').label('Active?')
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }])
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        var cities_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        cities.listView().title('Cities')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('name').label('Name'),
                    nga.field('Country.name').label('Country'),
                    nga.field('is_active', 'boolean').label('Active?')
                ])
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .sortField('name')
                .sortDir('ASC')
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Active?'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }])
                ])
                .actions(['create', 'batch', cities_custom_tmp]);
        cities.creationView()
                .fields([
                    nga.field('name').label('Name')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Name'
                            }),
                    nga.field('state_id', 'reference')
                            .label('State')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'State'
                            })
                            .perPage('all') // For getting all list
                            .targetEntity(nga.entity('states'))
                            .targetField(nga.field('name').map(truncate)),                            
                    nga.field('country_id', 'reference')
                            .label('Country')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Country'
                            })
                            .perPage('all') // For getting all list
                            .targetEntity(nga.entity('countries'))
                            .targetField(nga.field('name').map(truncate)),
                    nga.field('latitude').label('Latitude')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Latitude'
                            }),
                    nga.field('longitude').label('Longitude')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Longitude'
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }])
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        cities.editionView()
                .fields([
                    nga.field('name')
                            .label('Name')
                            .validation({
                                required: true
                            }),
                    nga.field('country_id', 'reference')
                            .label('Country')
                            .validation({
                                required: true
                            })
                            .targetEntity(nga.entity('countries'))
                            .perPage('all') // For getting all list
                            .targetField(nga.field('name').map(truncate)),
                    nga.field('latitude')
                            .label('Latitude')
                            .validation({
                                required: true
                            }),
                    nga.field('longitude')
                            .label('longitude')
                            .validation({
                                required: true
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }])
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        var providers_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        providers.listView().title('Providers')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('name').label('Name'),
                    nga.field('api_key').label('Client ID').map(truncate),
                    nga.field('secret_key').label('Secret Key').map(truncate),
                    nga.field('display_order').label('Display Order'),
                    nga.field('is_active', 'boolean').label('Active?'),
                ]).listActions(['delete', 'edit'])
                .sortField('id')
                .sortDir('ASC')
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>')
                ])
                .actions(['batch', providers_custom_tmp]);
        providers.editionView().title('Providers') // "Social Login" plugins
                .fields([
                    nga.field('name')
                            .label('Name')
                            .validation({
                                required: true
                            }),
                    nga.field('api_key')
                            .label('Client ID'),
                    nga.field('secret_key')
                            .label('Secret Key'),
                    nga.field('display_order')
                            .label('Display Order'),
                    nga.field('is_active', 'choice').label('Active?')
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }])
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        email_templates.listView().title('Email Templates')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('name').label('Name'),
                    nga.field('from_name').label('From Name'),
                    nga.field('subject').label('Subject').map(truncate),
                    nga.field('body_content').label('Content').map(truncate)
                ])
                .perPage(limit_per_page)
                .listActions(['edit'])
                .batchActions([])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>')
                ])
                .actions([]);
        email_templates.editionView().title('Edit Email Template')
                .fields([
                    nga.field('name').editable(false).label('Name'),
                    nga.field('from_name')
                            .label('From Name')
                            .validation({
                                required: true
                            }),
                    nga.field('subject')
                            .label('Subject')
                            .validation({
                                required: true
                            }),
                    nga.field('body_content', 'wysiwyg')
                            .validation({
                                required: true
                            })
                            .stripTags(true),
                    nga.field('info').editable(false).label('Constant for Subject and Content'),
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        var languages_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        languages.listView().title('Languages')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('name').label('Name'),
                    nga.field('iso2').label('ISO2'),
                    nga.field('is_active', 'boolean').label('Active?')
                ])
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Active?'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }, ])
                ])
                .actions(['create', 'batch', languages_custom_tmp]);
        languages.creationView().title('Create Language')
                .fields([
                    nga.field('name').label('Name')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Name'
                            }),
                    nga.field('iso2').label('ISO2')
                            .validation({
                                required: true,
                                minlength: 2,
                                maxlength: 2
                            })
                            .attributes({
                                placeholder: 'ISO2'
                            }),
                    nga.field('iso3').label('ISO3')
                            .validation({
                                required: true,
                                minlength: 3,
                                maxlength: 3
                            })
                            .attributes({
                                placeholder: 'ISO3'
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }])
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        languages.editionView().title('Edit Language')
                .fields([
                    nga.field('name')
                            .label('Name')
                            .validation({
                                required: true
                            }),
                    nga.field('iso2').label('ISO2')
                            .validation({
                                required: true
                            }),
                    nga.field('iso3').label('ISO3')
                            .validation({
                                required: true
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }])
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        users.listView()
                .fields([
                    nga.field('username').label('Name'),
                    nga.field('email').label('Email'),
                    nga.field('Subscription.name').label('Premium'),
                    nga.field('user_login_count').label('Logins'),
                    nga.field('LastLoginIp.ip').label('Last Login IP'),
                    nga.field('created_at').label('Registered On'),
                    nga.field('RegisterIp.ip').label('Registered IP'),
                ])
                .listActions(['<show-manual selection="selection" entry="entry" entity="entity" size="sm" label="View" ></show-manual>', 'edit', 'delete','<booking-manual selection="selection" entry="entry" entity="entity" size="sm" label="Edit" ></booking-manual>','<badge-view selection="selection" entry="entry" entity="entity" size="sm" label="View" ></badge-view>'])
                .filters([
                    nga.field('q').label('Search')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Select Status'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                },
                             ]),
                    nga.field('role_id', 'choice').label('User Type').attributes({
                        placeholder: 'Select User Type'
                    })
                    .choices([{
                            label: 'Patient',
                            value: 'patient'
                        }, {
                            label: 'Doctor',
                            value: 'doctor'
                        },
                    ]),
                    nga.field('subscription_id', 'choice').label('Premium').attributes({
                        placeholder: 'Select Premium'
                    })
                    .choices([{
                            label: 'Gold',
                            value: '1'
                        }, {
                            label: 'Silver',
                            value: '2'
                        },{
                            label: 'Bronze',
                            value: '3'
                        }, {
                            label: 'FREE',
                            value: '9'
                        },
                    ]),
                    nga.field('is_email_confirmed', 'choice').label('Email Verified Status').attributes({
                        placeholder: 'Email Verified?'
                    })
                    .choices([{
                        label: 'Yes',
                        value: 'yes'
                    }, {
                        label: 'No',
                        value: 'no'
                    }])
                ]);
        users.creationView()
                .fields([
                 nga.field('role_id', 'choice').label('User Type')
                            .choices([{
                                    label: 'Patient',
                                    value: '2'
                                },{
                                    label: 'Doctor',
                                    value: '3'
                                }])
                            .attributes({
                                placeholder: 'User Type'
                            })
                            .validation({
                                required: true
                            }),
                nga.field('email', 'email').label('Email')
                        .attributes({
                            placeholder: 'Email'
                        })
                        .validation({
                            required: true
                        }),
                nga.field('username').label('User Name').map(truncate)
                        .attributes({
                            placeholder: 'User Name'
                        })
                        .validation({
                            required: true
                        }),
                nga.field('password', 'password').label('Password')
                        .attributes({
                            placeholder: 'Password'
                        })
                        .validation({
                            required: true
                        }),
               nga.field('first_name').label('First Name').map(truncate)
                            .attributes({
                                placeholder: 'First Name'
                            })
                            .validation({
                                required: true
                            }),
                 nga.field('last_name').label('Last Name').map(truncate)
                            .attributes({
                                placeholder: 'Last Name'
                            })
                            .validation({
                                required: true
                            }),
                 nga.field('gender_id', 'choice')
                        .validation({
                            required: true
                        })
                        .choices([{
                            label: 'Male',
                            value: '1'
                        }, {
                            label: 'Female',
                            value: '2'
                        }])
                  .label('Gender'),
               nga.field('language_id', 'reference_many')
                        .label('Language')
                        .validation({
                            required: true
                        })
                .targetEntity(nga.entity('languages'))
                .targetField(nga.field('name'))
                .remoteComplete(true, {
                    searchQuery: function(search) {
                        return {
                            q: search,
                            autocomplete: true
                        };
                    }
                }),
                nga.field('phone').label('Phone').map(truncate)
                            .attributes({
                                placeholder: 'Phone'
                            }),
                nga.field('address').label('Address').map(truncate)
                            .attributes({
                                placeholder: 'Address'
                            })
                            .validation({
                                required: true
                            })
                            .template('<geo-location entry="entry" entity="entity"></geo-location>'),
                nga.field('country_id', 'reference')
                            .label('Country')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Country'
                            })
                            .targetEntity(nga.entity('countries'))
                            .perPage('all') // For getting all list
                            .targetField(nga.field('name').map(truncate)),
                nga.field('city_id', 'reference')
                            .label('City')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'City'
                            })
                            .targetEntity(nga.entity('cities'))
                            .perPage('all') // For getting all list
                            .targetField(nga.field('name').map(truncate)),
                nga.field('postal_code').label('Postal Code').map(truncate)
                            .attributes({
                                placeholder: 'Postal Code'
                            })
                            .validation({
                                required: true
                            }),
               
               /* nga.field('latitude').label('latitude').map(truncate)
                        .attributes({
                            placeholder: 'Latitude'
                        })
                        .validation({
                            required: true
                        }),
                 nga.field('longitude').label('Longitude').map(truncate)
                        .attributes({
                            placeholder: 'Longitude'
                        })
                        .validation({
                            required: true
                        }),*/
                nga.field('subscription_id', 'reference')
                    .label('Subscription Plans')
                    .attributes({
                        placeholder: 'Subscription Plans'
                    })
                    .perPage('all')
                    .targetEntity(nga.entity('subscriptions'))
                    .targetField(nga.field('name').map(truncate)),
                  nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ]),
                  nga.field('is_email_confirmed', 'choice').label('Email Confirmed?')
                            .attributes({
                                placeholder: 'Email Confirmed?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: 1
                                }, {
                                    label: 'No',
                                    value: 0
                                }]),
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        var errors_string = "Please check below things ";
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                            errors_string+= key+" "+value+" ";
                        }, form);
                        progression.done();
                        notification.log(error.data.message+errors_string, {addnCls: 'humane-flatty-error'});
                        scrollTop();
                        return false;
                    }]);
                /*users.showView().title('Show #{{ entry.values.username }}')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('username').label('Name'),
                    nga.field('email').label('Email'),
                    nga.field('created_at').label('Registered On'),
                    nga.field('RegisterIp.ip').label('Registered IP'),
                    nga.field('user_login_count').label('Logins'),
                    nga.field('LastLoginIp.ip').label('Last Login IP'),
                    nga.field('user_profile.postal_code').label('Postal Code')
                ]);*/
        users.editionView()
            .fields([
                 nga.field('role_id', 'choice').label('User Type')
                            .choices([{
                                    label: 'Patient',
                                    value: '2'
                                },{
                                    label: 'Doctor',
                                    value: '3'
                                }])
                            .attributes({
                                placeholder: 'User Type'
                            })
                            .validation({
                                required: true
                            }),
                nga.field('email', 'email').label('Email')
                        .attributes({
                            placeholder: 'Email'
                        })
                        .validation({
                            required: true
                        }),
                nga.field('username').label('User Name').map(truncate)
                        .attributes({
                            placeholder: 'User Name'
                        })
                        .validation({
                            required: true
                        }),
               nga.field('first_name').label('First Name').map(truncate)
                            .attributes({
                                placeholder: 'First Name'
                            })
                            .validation({
                                /*required: true*/
                            }),
                 nga.field('last_name').label('Last Name').map(truncate)
                            .attributes({
                                placeholder: 'Last Name'
                            })
                            .validation({
                                /*required: true*/
                            }),
                 nga.field('gender_id', 'choice')
                        .validation({
                            /*required: true*/
                        })
                        .choices([{
                            label: 'Male',
                            value: '1'
                        }, {
                            label: 'Female',
                            value: '2'
                        }])
                  .label('Gender'),
               nga.field('language_id', 'reference_many')
                        .label('Language')
                        .validation({
                            /*required: true*/
                        })
                .targetEntity(nga.entity('languages'))
                .targetField(nga.field('name'))
                .remoteComplete(true, {
                    searchQuery: function(search) {
                        return {
                            q: search,
                            autocomplete: true
                        };
                    }
                }),
                nga.field('phone').label('Phone').map(truncate)
                            .attributes({
                                placeholder: 'Phone'
                            }),
                nga.field('address').label('Address').map(truncate)
                            .attributes({
                                placeholder: 'Address'
                            })
                            .validation({
                               /*required: true*/
                            })
                            .template('<geo-location entry="entry" entity="entity"></geo-location>'),
                nga.field('country_id', 'reference')
                            .label('Country')
                            .validation({
                                /*required: true*/
                            })
                            .attributes({
                                placeholder: 'Country'
                            })
                            .targetEntity(nga.entity('countries'))
                            .perPage('all') // For getting all list
                            .targetField(nga.field('name').map(truncate)),
                nga.field('city_id', 'reference')
                            .label('City')
                            .validation({
                                /*required: true*/
                            })
                            .attributes({
                                placeholder: 'City'
                            })
                            .targetEntity(nga.entity('cities'))
                            .perPage('all') // For getting all list
                            .targetField(nga.field('name').map(truncate)),
                nga.field('postal_code').label('Postal Code').map(truncate)
                            .attributes({
                                placeholder: 'Postal Code'
                            })
                            .validation({
                                /*required: true*/
                            }),
                /*nga.field('latitude').label('latitude').map(truncate)
                        .attributes({
                            placeholder: 'Latitude'
                        })
                        .validation({
                            required: true
                        }),
                nga.field('longitude').label('Longitude').map(truncate)
                        .attributes({
                            placeholder: 'Longitude'
                        })
                        .validation({
                            required: true
                        }),*/
                nga.field('awards','text').label('Awards')
                            .attributes({
                                placeholder: 'Awards'
                            }),
                nga.field('subscription_id', 'reference')
                    .label('Subscription Plans')
                    .attributes({
                        placeholder: 'Subscription Plans'
                    })
                    .perPage('all')
                    .targetEntity(nga.entity('subscriptions'))
                    .targetField(nga.field('name').map(truncate)),
                nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ]),
                  nga.field('is_email_confirmed', 'choice').label('Email Confirmed?')
                            .attributes({
                                placeholder: 'Email Confirmed?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: 1
                                }, {
                                    label: 'No',
                                    value: 0
                                }]),
                
				nga.field('is_verified', 'choice').label('Is Verified?')
								.attributes({
									placeholder: 'Is Verified?'
								})
								.validation({
									required: true
								})
								.choices([{
										label: 'Yes',
										value: 1
									}, {
										label: 'No',
										value: 0
									}]),
				nga.field('is_featured', 'choice').label('Is Featured?')
								.attributes({
									placeholder: 'Is Featured?'
								})
								.validation({
									required: true
								})
								.choices([{
										label: 'Yes',
										value: 1
									}, {
										label: 'No',
										value: 0
									}]),
					])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        scrollTop();
                        return false;
                    }]);
        var setting_category_list_tpl = '<ma-edit-button entry="entry" entity="entity" size="sm" label="Configure"></ma-edit-button>';
        var setting_category_action_tpl = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        setting_categories.listView().title('Site Settings')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('name').label('Name'),
                    nga.field('description').label('Description')
                ])
                .sortField('display_order')
                .sortDir('ASC')
                .batchActions([])
                .perPage(limit_per_page)
                .actions(setting_category_action_tpl)
                .listActions(setting_category_list_tpl)
        settings_category_edit_template = '<add-sync entry="entry" entity="entity" size="sm" label="Synchronize with SudoPay" ></add-sync>' +
                '<ma-list-button entry="entry" entity="entity" size="sm"></ma-list-button>' +
                '<mooc-sync entry="entry" entity="entity" size="sm" label="Synchronize with Mooc Affliate" ></mooc-sync>';
        setting_categories.editionView().title('Edit Settings')
                .fields([
                    nga.field('name').editable(false).label('Name'),
                    nga.field('description').editable(false).label('Description'),
                    nga.field('Related Settings', 'referenced_list') // display list of related settings
                            .targetEntity(nga.entity('settings'))
                            .targetReferenceField('setting_category_id')
                            .targetFields([
                                nga.field('label').label('Name'),
                                nga.field('value').label('Value')
                            ])
                            .listActions(['edit'])
                ])
                .actions(settings_category_edit_template)
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        var setting_edit_template = '<ma-back-button></ma-back-button>';
        settings.editionView().title('Edit - {{entry.values.label}}')
                .fields([
                    nga.field('label').editable(false).label('Name'),
                    nga.field('description').editable(false).label('Description'),
                    nga.field('value', 'text').label('Value')
                            .validation({
                                validator: function (value, entry) {
                                    if (entry.name === "payment.is_live_mode" || entry.name === "paypal.is_live_mode" || entry.name === "facebook.is_enabled_facebook_comment" || entry.name === "analytics.is_enabled_facebook_pixel" || entry.name === "analytics.is_enabled_google_analytics" || entry.name === "paypal.is_paypal_enabled_for_payments" || entry.name === "payment.is_sudopay_enabled_for_payments") {
                                        if (value !== "0" && value !== "1") {
                                            throw new Error('Value must be either 0 or 1');
                                        }
                                    }
                                }
                            })
                ])
                .actions(setting_edit_template);
        var ips_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        ips.listView().title('IPs')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('ip').label('IP'),
                    nga.field('City.name')
                            .label('City')
                            .map(truncate),
                    nga.field('State.name')
                            .label('State')
                            .map(truncate),
                    nga.field('Country.name')
                            .label('Country')
                            .map(truncate),
                    nga.field('latitude').label('Latitude'),
                    nga.field('longitude').label('Longitude')
                ]).listActions(['delete'])
                .perPage(limit_per_page)
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="glyphicon glyphicon-search text-primary"></i></span></div>')
                ])
                .actions(['batch', ips_custom_tmp]);
        var pages_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>' +
                '<create-page entry="entry" entity="entity" size="sm" lable=""></create-page>';
        pages.listView().title('Pages')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('language_id', 'reference')
                            .label('Language')
                            .targetEntity(nga.entity('languages'))
                            .perPage('all') // For getting all list
                            .targetField(nga.field('name'))
                            .validation({
                                required: true
                            }),
                    nga.field('title').label('Title').map(truncate),
                    nga.field('page_content').label('Content').map(truncate),
                    nga.field('slug').label('Page Slug'),
                ])
                .perPage(limit_per_page)
                .listActions(['show', 'edit', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>')
                ])
                .actions(['batch', pages_custom_tmp]);
        pages.showView().title('Pages - {{ entry.values.id }}')
                .fields([
                    nga.field('language_id', 'reference')
                            .label('Language')
                            .targetEntity(nga.entity('languages'))
                            .perPage('all') // For getting all list
                            .targetField(nga.field('name')),
                    nga.field('title').label('Title'),
                    nga.field('page_content', 'wysiwyg').label('Content'),
                    nga.field('slug').label('Page Slug')
                ]);
        pages.editionView().title('Pages - {{ entry.values.title }}')
                .fields([
                    nga.field('title')
                            .validation({
                                required: true
                            })
                            .label('Title'),
                    nga.field('page_content', 'wysiwyg')
                            .stripTags(true)
                            .validation({
                                required: true
                            }),
                    nga.field('slug')
                            .label('Page Slug')
                            .validation({
                                required: true
                            })
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        var contacts_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        contacts.listView().title('Contacts')
                .fields([
                    nga.field('first_name').label('First Name'),
                    nga.field('last_name').label('Last Name'),
                    nga.field('email').label('Email'),
                    nga.field('subject').label('Subject').map(truncate),
                    nga.field('message').label('Message').map(truncate),
                    nga.field('Ip.ip').label('IP')
                ]).listActions(['show', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>')
                ])
                .actions(['batch', contacts_custom_tmp]);
        contacts.showView().title('Contact - {{ entry.values.id }}')
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('first_name').label('First Name'),
                    nga.field('last_name').label('Last Name'),
                    nga.field('email').label('Email'),
                    nga.field('subject').label('Subject'),
                    nga.field('message').label('Message'),
                    nga.field('Ip.ip').label('IP')
                ]);
        var user_cash_withdrawals_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        user_cash_withdrawals.listView().title('Withdraw Requests')
                .infinitePagination(false) // load pages as the user scrolls
                .perPage(limit_per_page)
                .fields([
                    nga.field('id').label('ID'),
                    nga.field('created_at').label('Created'),
                    nga.field('user.username').label('User'),
                    nga.field('amount').label('Amount'),
                    nga.field('withdrawal_status.name').label('Status'),
                    nga.field('money_transfer_account.account').label('Money Transfer Account'),
                ])
                .listActions(['edit', 'delete'])
                .filters([
                    nga.field('q').label('Search')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"/><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Select Status'
                    })
                            .choices([{
                                    label: 'Pending',
                                    value: '1'
                                }, {
                                    label: 'Under Process',
                                    value: '2'
                                }, {
                                    label: 'Rejected',
                                    value: '3'
                                }, {
                                    label: 'Failed',
                                    value: '4'
                                }, {
                                    label: 'Success',
                                    value: '5'
                                }])
                ])
                .actions(['batch', user_cash_withdrawals_custom_tmp]);
        user_cash_withdrawals.editionView().title('Edit Withdraw Requests')
                .fields([
                    nga.field('amount')
                            .label('Amount')
                            .validation({
                                required: true
                            }),
                    nga.field('withdrawal_status_id', 'choice').label('Status')
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Under Process',
                                    value: '2'
                                }, {
                                    label: 'Rejected',
                                    value: '3'
                                }, {
                                    label: 'Success',
                                    value: '5'
                                }])
                ])
                .onSubmitSuccess(['progression', 'notification', '$state', 'entry', 'entity', function (progression, notification, $state, entry, entity) {
                        progression.done();
                        notification.log(entry.values.Success, {addnCls: 'humane-flatty-success'});
                        $state.go($state.get('list'), {entity: entity.name()});
                        return false;
                    }])
                .onSubmitError(['error', 'form', 'progression', 'notification', function (error, form, progression, notification) {
                        angular.forEach(error.data.errors, function (value, key) {
                            if (this[key]) {
                                this[key].$valid = false;
                            }
                        }, form);
                        progression.done();
                        notification.log(error.data.message, {addnCls: 'humane-flatty-error'});
                        return false;
                    }]);
        var user_logins_custom_tmp = '<ma-filter-button filters="filters()" enabled-filters="enabledFilters" enable-filter="enableFilter()"></ma-filter-button>';
        user_logins.listView().title('User Logins')
                .fields([
                    nga.field('created_at').label('Login Time'),
                    nga.field('User.username').label('User'),
                    nga.field('UserLoginIp.ip').label('IP Address'),
                    nga.field('user_agent').label('User Agent').map(truncate)
                ])
                .perPage(limit_per_page)
                .listActions(['delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>')
                ])
                .actions(['batch', user_logins_custom_tmp]);
        user_favorites.listView().title('Patient Favorites')
                .fields([
                    nga.field('user.user_profile.first_name').label('Name'),
                    nga.field('doctor_user.user_profile.first_name').label('Doctor Name'),
                     nga.field('created_at', 'date').format('yyyy-MM-dd').label('Added On')
                ])
                .perPage(limit_per_page);

        user_views.listView().title('User Views')
                .fields([
                    nga.field('created_at').label('Viewed Time'),
                    nga.field('User.username').label('Patient Name'),
                    nga.field('User.username').label('Doctor Name'),
                    nga.field('ip').label('IP'),
                ])
                .perPage(limit_per_page)
                .listActions(['delete']);
        user_logins.listView().title('User Logins')
                .fields([
                    nga.field('created_at').label('Login Time'),
                    nga.field('User.username').label('Username'),
                    nga.field('user_login_ip_id').label('Login IP'),
                    nga.field('user_agent').label('User Agent'),
                ])
                .perPage(limit_per_page)
                .listActions(['delete']);
        user_reviews.listView().title('Reviews & Ratings')
                .fields([
                    nga.field('id').label('Id'),
                    nga.field('created_at', 'date').format('yyyy-MM-dd').label('Added On'),
                    nga.field('User.user_profile.display_name').label('Patient'),
                    nga.field('doctor_user.user_profile.display_name').label('Doctor'),
                    nga.field('review').label('Review'),
                    nga.field('bedside_rate').label('Bed Rate'),
                    nga.field('waittime_rate').label('Wait Time'),
                    nga.field('is_active', 'boolean').label('Active?'),
                ])
                .infinitePagination(false)
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .sortField('id')
                .sortDir('ASC')
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>')
                ]);
        user_reviews.editionView().title('Reviews & Ratings')
                .fields([
                    nga.field('id').label('Id'),
                    nga.field('created_at', 'date').format('yyyy-MM-dd').label('Added On'),
                    nga.field('User.user_profile.display_name').label('Patient'),
                    nga.field('doctor_user.user_profile.display_name').label('Doctor'),
                    nga.field('review').label('Review'),
                    nga.field('bedside_rate').label('Bed Rate'),
                    nga.field('waittime_rate').label('Wait Time'),
                    nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ])
                ]);
        ratings.listView().title('Patient Ratings')
                .fields([
                    nga.field('created_at', 'date').format('yyyy-MM-dd').label('Added On'),
                    nga.field('doctor_user.user_profile.display_name').label('Doctor'),
                    nga.field('user.username').label('Patient'),                    
                    nga.field('rating_option_id').label('Rate Option'),
                    nga.field('rate').label('Rate'),
                ])
                .infinitePagination(false)
                .perPage(limit_per_page)
                .sortField('id')
                .sortDir('ASC')
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>')
                ]);
        payment_gateways.listView().title('Payment Gateways')
                .fields([
                    nga.field('display_name').label('Display Name'),
                    nga.field('is_active').label('Active'),
                    nga.field('is_test_mode').label('Live Mode'),
                ])
                .listActions(['edit']);

        payment_gateways.editionView().title('Edit Payment Gateway')
                .fields([
                      nga.field('name').label('Name')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Name'
                            }),
                    nga.field('description').label('Description')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Description'
                            }),   

                ]);

        appointments.listView().title('Appointments')
                .fields([
                    nga.field('User.user_profile.first_name').label('Patient'),
                    nga.field('doctor_user.user_profile.first_name').label('Doctor'),
                    nga.field('appointment_date').label('Appointment Date'),
                    nga.field('appointment_time').label('Appointment Time'),
                    nga.field('phone').label('Phone'),
                    nga.field('SpecialtyDiseas.name').label('Reason for Visit'),
                    nga.field('appointment_status.name').label('Status'),
                ])
                .perPage(limit_per_page)
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>')
                ]);

        appointment_statuses.listView().title('Appointment Statuses')
                .fields([
                    nga.field('name').label('Name'),
                    nga.field('appointment_count').label('Appointment Count')
                   .map(function isValZero(value) {
                        if (value == 0) return '0';
                        return value;
                    }),
                    
                ])
                .batchActions([]);
                //.perPage(limit_per_page);


        transactions.listView().title('Transactions')
                .fields([
                    nga.field('created_at', 'date').format('yyyy-MM-dd').label('Date'),
                    nga.field('FromUser.username').label('User'),
                    nga.field('amount', 'number').format('$0,000.00').label('Amount'),
                    //nga.field('amount','string').format('$').label('Amount'),
                    nga.field('description').label('Description'),
                ])
                .perPage(limit_per_page)
                .batchActions([]);;
        specialties.listView().title('Specialties')
                .fields([
                    nga.field('name').label('Name'),
                    nga.field('speciality_disease_count').label('Speciality Disease Count'),
                    nga.field('user_count').label('User Count'),
                    nga.field('created_at').label('Created'),
                    nga.field('is_active', 'boolean').label('Active?'),
                ])
                .infinitePagination(false)
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .sortField('id')
                .sortDir('ASC')
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                            nga.field('filter', 'choice').label('Status').attributes({
                                    placeholder: 'Active?'
                             })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }, ])
                ]);

        specialties.creationView().title('Add Specialty')
                .fields([
                    nga.field('name').label('Specialty')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Specialty'
                            }),
                    nga.field('description').label('Small Description')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Small Description'
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ])
                ]);
        specialties.editionView().title('Edit Specialty')
                .fields([
                    nga.field('name').label('Name')
                            .validation({
                                required: true
                            }),
                    nga.field('description').label('Small Description')
                            .validation({
                                required: true
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ])
                ]);

        /* Specialties End Here */

        /* Specialty Diseases Start Here */
        specialty_diseases.listView().title('Specialty Diseases')
                .fields([
                    nga.field('name').label('Specialty Disease Name'),
                    nga.field('Specialty.name').label('Specialty'),
                    nga.field('created_at', 'date').format('yyyy-MM-dd').label('Created'),
                    nga.field('is_active', 'boolean').label('Active?'),
                ])
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Active?'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }, ])
                ]);

        specialty_diseases.creationView().fields([
            nga.field('name')
                    .label('Specialty Diseases')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Specialty Diseases'
                    }),
            nga.field('specialty_id', 'reference')
                    .label('Specialty')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Specialty'
                    })
                    .targetEntity(nga.entity('specialties'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('name').map(truncate)),
            nga.field('is_active', 'choice').label('Active?')
                    .attributes({
                        placeholder: 'Active?'
                    })
                    .validation({
                        required: true
                    })
                    .choices([{
                            label: 'Yes',
                            value: true
                        }, {
                            label: 'No',
                            value: false
                        }, ])
        ]);
        specialty_diseases.editionView().fields([
            nga.field('name')
                    .validation({
                        required: true
                    })
                    .label('Specialty'),
            nga.field('specialty_id', 'reference')
                    .label('Specialty')
                    .validation({
                        required: true
                    })
                    .perPage('all') // For getting all list
                    .targetEntity(nga.entity('specialties'))
                    .targetField(nga.field('name').map(truncate)),
            nga.field('is_active', 'choice').label('Active?')
                    .validation({
                        required: true
                    })
                    .choices([{
                            label: 'Yes',
                            value: true
                        }, {
                            label: 'No',
                            value: false
                        }, ])
        ]);
        /* Specialty Diseases End Here */

        /* Insurances Start Here */
        insurances.listView().title('Insurances')
                .fields([
                    nga.field('created_at').label('Created'),
                    nga.field('name').label('Name'),
                    nga.field('is_active', 'boolean').label('Active?'),
                ])
                .infinitePagination(false)
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .sortField('id')
                .sortDir('DESC')
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>')
                ]);

        insurances.creationView().title('Add Insurance')
                .fields([
                    nga.field('name').label('Insurance')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Insurance'
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ])
                ]);
        insurances.editionView().title('Edit Insurance')
                .fields([
                    nga.field('name').label('Name'),
                    nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ])
                ]);

        /* Insurances End Here */


        /*  Questions Start Here */
        questions.listView().title('Questions')
                .fields([
                    nga.field('question').label('Question'),
                    nga.field('User.username').label('User'),
                    nga.field('Specialty.name').label('Specialty'),
                    //nga.field('description').label('Description'),
                    nga.field('is_active', 'boolean').label('Active?'),
                ])
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Active?'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }, ])
                ]);

        questions.creationView().fields([
            nga.field('user_id', 'reference')
                    .label('User')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'User'
                    })
                    .targetEntity(nga.entity('users'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('username').map(truncate)),
            nga.field('question')
                    .label('Question')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Question'
                    }),
            nga.field('specialty_id', 'reference')
                    .label('Specialty')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Specialty'
                    })
                    .targetEntity(nga.entity('specialties'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('name').map(truncate)),
            /*nga.field('description', 'wysiwyg')
                    .label('Description')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Description',
                    }),*/
            nga.field('is_active', 'choice').label('Active?')
                    .attributes({
                        placeholder: 'Active?'
                    })
                    .validation({
                        required: true
                    })
                    .choices([{
                            label: 'Yes',
                            value: true
                        }, {
                            label: 'No',
                            value: false
                        }, ])
        ]);
        questions.editionView().fields([
            nga.field('user_id', 'reference')
                    .label('User')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'User'
                    })
                    .targetEntity(nga.entity('users'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('username').map(truncate)),
            nga.field('question')
                    .label('Question')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Question'
                    }),
            nga.field('specialty_id', 'reference')
                    .label('Specialty')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Specialty'
                    })
                    .targetEntity(nga.entity('specialties'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('name').map(truncate)),
            /*nga.field('description')
                    .label('Description')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Description',
                    }), */
            nga.field('is_active', 'choice').label('Active?')
                    .attributes({
                        placeholder: 'Active?'
                    })
                    .validation({
                        required: true
                    })
                    .choices([{
                            label: 'Yes',
                            value: true
                        }, {
                            label: 'No',
                            value: false
                        }, ])
        ]);

        /*  Questions End Here */

        /*  Answers Start Here */
        answers.listView().title('Answers')
                .fields([
                    nga.field('User.username').label('User'),
                    nga.field('question.question').label('Question'),
                    nga.field('question.specialty.name').label('Specialty'),
                    nga.field('answer').label('Answer'),
                    nga.field('is_active', 'boolean').label('Active?'),
                ])
                .perPage(limit_per_page)
                .listActions(['edit', 'delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Active?'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }, ])
                ]);

        /* answers.creationView().fields([
            nga.field('user_id', 'reference')
                    .label('User')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'User'
                    })
                    .targetEntity(nga.entity('users'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('username').map(truncate)),
            nga.field('question')
                    .label('Question')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Question'
                    }),
            nga.field('specialty_id', 'reference')
                    .label('Specialty')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Specialty'
                    })
                    .targetEntity(nga.entity('specialties'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('name').map(truncate)),
            nga.field('description', 'wysiwyg')
                    .label('Description')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Description',
                    }),
            nga.field('is_active', 'choice').label('Active?')
                    .attributes({
                        placeholder: 'Active?'
                    })
                    .validation({
                        required: true
                    })
                    .choices([{
                            label: 'Yes',
                            value: true
                        }, {
                            label: 'No',
                            value: false
                        }, ])
        ]); */
        answers.editionView().fields([
            nga.field('user_id', 'reference')
                    .label('User')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'User'
                    })
                    .targetEntity(nga.entity('users'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('username').map(truncate)),
            nga.field('question.question')
                    .label('Question')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Question'
                    }),
            nga.field('question.specialty_id', 'reference')
                    .label('Specialty')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Specialty'
                    })
                    .targetEntity(nga.entity('specialties'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('name').map(truncate)),
            nga.field('answer')
                    .label('Description')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Description',
                    }),
            nga.field('is_active', 'choice').label('Active?')
                    .attributes({
                        placeholder: 'Active?'
                    })
                    .validation({
                        required: true
                    })
                    .choices([{
                            label: 'Yes',
                            value: true
                        }, {
                            label: 'No',
                            value: false
                        }, ])
        ]);
        messages.listView().title('Messages')
                .fields([
                    nga.field('from_user.username').label('From User'),
                    nga.field('to_user.username').label('To User'),
                    nga.field('message_content.subject').label('Subject'),
                    nga.field('message_content.message').label('Message'),
                    nga.field('created_at').label('Date'),
                ])
                .perPage(limit_per_page)
                /*.listActions(['edit', 'delete'])*/
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                   
                ]);

        /*messages.creationView().fields([
            nga.field('user_id', 'reference')
                    .label('User')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'User'
                    })
                    .targetEntity(nga.entity('users'))
                    .perPage('all') 
                    .targetField(nga.field('username').map(truncate)),
            nga.field('subject')
                    .label('Subject')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Subject'
                    }),
            nga.field('message')
                    .label('Message')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Message'
                    }),
            
        ]);
        messages.editionView().fields([
            nga.field('user_id', 'reference')
                    .label('User')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'User'
                    })
                    .targetEntity(nga.entity('users'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('username').map(truncate)),
            nga.field('subject')
                    .label('Subject')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Subject'
                    }),
            nga.field('message')
                    .label('Message')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Message'
                    }),
        ]);*/

       /* work_places.listView().title('Work places')
                .fields([
                    nga.field('country.name').label('Country'),
                    nga.field('city.name').label('City'),
                    nga.field('work_phone_number').label('Phone'),
                    nga.field('price').label('Price'),
                    nga.field('is_preferred_location', 'boolean').label('Preferred'),
                    nga.field('is_active', 'boolean').label('Status'),
                ])
                .perPage(limit_per_page)
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                    
                ]);

        work_places.creationView().fields([
            nga.field('user_id', 'reference')
                    .label('User')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'User'
                    })
                    .targetEntity(nga.entity('users'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('username').map(truncate)),
            nga.field('question')
                    .label('Question')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Question'
                    }),
            nga.field('specialty_id', 'reference')
                    .label('Specialty')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Specialty'
                    })
                    .targetEntity(nga.entity('specialties'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('name').map(truncate)),
            nga.field('is_active', 'choice').label('Active?')
                    .attributes({
                        placeholder: 'Active?'
                    })
                    .validation({
                        required: true
                    })
                    .choices([{
                            label: 'Yes',
                            value: true
                        }, {
                            label: 'No',
                            value: false
                        }, ])
        ]);
        work_places.editionView().fields([
            nga.field('user_id', 'reference')
                    .label('User')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'User'
                    })
                    .targetEntity(nga.entity('users'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('username').map(truncate)),
            nga.field('question')
                    .label('Question')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Question'
                    }),
            nga.field('specialty_id', 'reference')
                    .label('Specialty')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Specialty'
                    })
                    .targetEntity(nga.entity('specialties'))
                    .perPage('all') // For getting all list
                    .targetField(nga.field('name').map(truncate)),
        ]);*/

        /*  Answer End Here */
        sms_templates.listView().title('SMS Templates')
                .fields([
                    nga.field('name').label('Name'),
                    nga.field('description').label('Description'),
                    nga.field('sms_content').label('SMS Content'),
                ])
                .perPage(limit_per_page)
                .listActions(['edit'])
                .batchActions([])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>')
                ]);
        sms_templates.editionView().title('Edit SMS Template')
                .fields([
                    nga.field('sms_content', 'wysiwyg')
                            .validation({
                                required: true
                            })
                            .stripTags(true),
                ]);

        /* User Education */
        user_educations.listView().title('User Educations')
                .fields([
                    nga.field('User.username').label('User'),
                    nga.field('education').label('Education'),
                    nga.field('location').label('Location'),
                    nga.field('organization').label('Organization'),
                    nga.field('date').label('Completed'),
                    nga.field('is_active', 'boolean').label('Active'),
                ])
                .perPage(limit_per_page)
                .listActions(['delete'])
                .filters([
                    nga.field('q').label('Search', 'template')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Active'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }, ])
                ]);

         
        user_educations.editionView().fields([
            nga.field('education')
                    .validation({
                        required: true
                    })
                    .label('Education'),
            nga.field('location')
                    .label('Location')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Location'
                    }),
            nga.field('organization')
                    .label('Organization')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Organization'
                    }),
            nga.field('date')
                    .label('Completed Date')
                    .validation({
                        required: true
                    })
                    .attributes({
                        placeholder: 'Completed Date'
                    }),
            nga.field('is_active', 'choice').label('Active?')
                    .attributes({
                        placeholder: 'Active?'
                    })
                    .validation({
                        required: true
                    })
                    .choices([{
                            label: 'Yes',
                            value: true
                        }, {
                            label: 'No',
                            value: false
                        }, ])
        ]);
        /* User Education Completed Here */

        /* Plan Table Start Here */
        subscriptions.listView()
                .fields([
                    nga.field('name').label('Name'),
                    nga.field('description').label('Description'),
                    nga.field('price').label('Price'),
                    nga.field('period_days').label('No. of Days'),
                    nga.field('is_active', 'boolean').label('Active?'),
                ])
                .filters([
                    nga.field('q').label('Search')
                            .pinned(true)
                            .template('<div class="input-group"><input type="text" ng-model="value" placeholder="Search" class="form-control"></input><span class="input-group-addon"><i class="fa fa-search text-primary"></i></span></div>'),
                    nga.field('filter', 'choice').label('Status').attributes({
                        placeholder: 'Select Status'
                    })
                            .choices([{
                                    label: 'Active',
                                    value: 'active'
                                }, {
                                    label: 'Inactive',
                                    value: 'inactive'
                                }, ]),
                ]);
        // set the fields of the user entity list view
        subscriptions.listView().title('Subscriptions') // default title is "[Entity_name] list"
                .infinitePagination(false) // load pages as the user scrolls		
                .perPage(limit_per_page)
                .listActions(['edit']);

        subscriptions.creationView()
                .fields([
                    nga.field('name').label('Name')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Name'
                            }),
                    nga.field('description').label('Description')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Description'
                            }),
                    nga.field('price').label('Price')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Price'
                            }),
                    nga.field('period_days').label('No. of Days')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'No. of Days'
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ])
                ]);

        subscriptions.showView()
                .title('Show #{{ entry.values.name }}')
                .fields([
                    nga.field('name').label('Name'),
                    nga.field('price').label('Price'),
                    nga.field('period_days').label('No. of Days'),
                    nga.field('description').label('Description'),
                ]);

        subscriptions.editionView()
                .fields([
                    nga.field('name').label('Name')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Name'
                            }),
                    nga.field('description').label('Description')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Description'
                            }),
                    nga.field('price').label('Price')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'Price'
                            }),
                    nga.field('period_days').label('No. of Days')
                            .validation({
                                required: true
                            })
                            .attributes({
                                placeholder: 'No. of Days'
                            }),
                    nga.field('is_active', 'choice').label('Active?')
                            .attributes({
                                placeholder: 'Active?'
                            })
                            .validation({
                                required: true
                            })
                            .choices([{
                                    label: 'Yes',
                                    value: true
                                }, {
                                    label: 'No',
                                    value: false
                                }, ])
                ]);
        /* Plan Table end Here */
        // attach the admin application to the DOM and run it
        nga.configure(admin);
        //Menu configuration
        admin.menu(nga.menu()
                .addChild(nga.menu().title('Dashboard').icon('').link('/dashboard'))
                .addChild(nga.menu().title('Users').icon('')
                        .addChild(nga.menu(users).title('Users').icon(''))
                        .addChild(nga.menu(user_logins).title('User Logins').icon(''))
                        .addChild(nga.menu(contacts).title('Contacts').icon(''))
                        .addChild(nga.menu(subscriptions).title('Subscriptions').icon(''))
                        .addChild(nga.menu(user_favorites).title('Patient Favorites').icon(''))
                        .addChild(nga.menu(user_educations).title('User Educations').icon(''))
                        .addChild(nga.menu(user_reviews).title('Reviews and Ratings').icon(''))
                        .addChild(nga.menu(ratings).title('Patient Reviews').icon(''))
                        )
                .addChild(nga.menu().title('QuestionAnswers').icon('')
                        .addChild(nga.menu(questions).title('Questions').icon(''))
                        .addChild(nga.menu(answers).title('Answers').icon(''))
                )                
                .addChild(nga.menu().title('Appointments').icon('')
                        .addChild(nga.menu(appointments).title('Appointments').icon(''))
                        .addChild(nga.menu(appointment_statuses).title('Appointment Status').icon(''))
                        )
                .addChild(nga.menu().title('Payments').icon('')
                        .addChild(nga.menu(transactions).title('Transactions').icon(''))
                        .addChild(nga.menu(payment_gateways).title('Payment Gateways').icon(''))
                        )
                .addChild(nga.menu().title('Messages').icon('')
                        .addChild(nga.menu(messages).title('messages').icon(''))
                )
				 .addChild(nga.menu().title('Insurances').icon('')
                        .addChild(nga.menu(insurances).title('Insurances').icon(''))
                        )   	
                .addChild(nga.menu().title('Settings').icon('')
                        .addChild(nga.menu(setting_categories).title('Site Settings').icon(''))
                        )
                .addChild(nga.menu().title('Specialties').icon('')
                        .addChild(nga.menu(specialties).title('Doctor Specialties').icon(''))
                        .addChild(nga.menu(specialty_diseases).title('Specialty Diseases').icon(''))
                        )
                .addChild(nga.menu().title('Master').icon('')
                        .addChild(nga.menu(providers).title('Providers').icon(''))
                        .addChild(nga.menu(pages).title('Pages').icon(''))
                        .addChild(nga.menu(cities).title('Cities').icon(''))
                        .addChild(nga.menu(states).title('States').icon(''))
                        .addChild(nga.menu(countries).title('Countries').icon(''))
                        .addChild(nga.menu(email_templates).title('Email Templates').icon(''))
                        .addChild(nga.menu(sms_templates).title('SMS Templates').icon(''))
                        .addChild(nga.menu(languages).title('Languages').icon(''))
						.addChild(nga.menu(translations).title('Translations').icon('').link("/translations/all"))
                        .addChild(nga.menu(ips).title('IPs').icon(''))
                        )
                .addChild(nga.menu(plugins).title('Plugins').icon('').link("/plugins"))
                .addChild(nga.menu().title('Logout').icon('').link('/logout'))
                );

                /*if (enabledPlugins.indexOf("IcalCalendar") > -1) {
                    admin.menu().getChildByTitle('Master')
                        .addChild(nga.menu(ical).title('Ical').icon('<span class="fa fa-calendar"></span>'))
                }*/
        // customize header
        var customHeaderTemplate = '<div class="navbar-header">' +
                '<button type="button" class="navbar-toggle" ng-click="isCollapsed = !isCollapsed">' +
                '<span class="icon-bar"></span>' +
                '<span class="icon-bar"></span>' +
                '<span class="icon-bar"></span>' +
                '</button>' +
                '<a class="navbar-brand" href="#" ng-click="appController.displayHome()"><img src="../assets/img/logo-white.png" alt="logo" /></a>' +
                '</div>' + '<custom-header></custom-header>'; //<custom-header></custom-header> this is custom directive				
        admin.header(customHeaderTemplate);
        // customize dashboard
        var dashboardTpl = '<div class="row list-header"><div class="col-lg-12"><div class="page-header">' +
                '<h4><span>Dashboard</span></h4></div></div></div>' +
                '<dashboard-summary></dashboard-summary>';
        admin.dashboard(nga.dashboard()
                .template(dashboardTpl)
                );
    }]);
//Checking Admin Authentication by checking auth credentials, Redirected to site page if not admin logged in.
ngapp.run(function ($rootScope, $location, $http) {
    $rootScope.$on('$viewContentLoaded', function () {
        if (!$('#preloader').hasClass('loadAG')) {
            $('#status').fadeOut(600);
            $('#preloader').delay(600).fadeOut(600 / 2);
        }
		
        /*if(enabledPlugins == null){
            $http.get(admin_api_url + '/api/plugins/list', {}).success(function (response) {
                localStorage.setItem('enabled_plugins', JSON.stringify(response.enabled_plugin));
            });
        }*/
        /* for redirect to login process */
        var url_array = ['/login', '/logout', ''];
        var path = $location.path();
        if (path.indexOf('/users/edit/') !== -1) {
            checkDoctor();
        }
        if ($.inArray(path, url_array) === -1) {
            var token = localStorage.userToken;
            var role = localStorage.userRole;
            if (!token || parseInt(role) != 1) {
                $location.path('/logout');
            }
        }
    });
});
function scrollTop(){
    $("html, body").animate({scrollTop: 0}, "slow");
}

function checkDoctor() {
    setTimeout(function () {
        var val = $('#role_id .ui-select-match .ui-select-toggle .ui-select-match-text .ng-binding').html();
        if (val != 'Doctor') {
            $('#row-is_verified').hide();
			$('#row-is_featured').hide();
        }
    }, 1000);
}