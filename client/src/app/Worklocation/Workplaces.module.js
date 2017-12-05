(function (module) {
    module.constant('ConstantWorkPlaces', {
        state_WorkPlace: 'UserWorkPlace',
        state_WorkPlaceAdd: 'UserWorkPlaceAdd',
        state_WorkPlaceEdit: 'UserWorkPlaceEdit',
        state_AppoinmentSettings: 'UserAppoinmentSettings',
        state_AppoinmentSettingsCreate: 'UserAppoinmentSettingsCreate',
        state_AppoinmentSettingsUpdate: 'UserAppoinmentSettingsUpdate',
        state_AppoinmentModification: 'UserAppoinmentModification',
        state_AppoinmentModificationCreate: 'UserAppoinmentModificationCreate',
        state_AppoinmentModificationUpdate: 'UserAppoinmentModificationUpdate',     
    });
    module.config(function ($stateProvider,ConstantWorkPlaces) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state(ConstantWorkPlaces.state_WorkPlace, {
            url: '/user/workplaces',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserWorkPlacesController as model',
                    templateUrl: 'Worklocation/userWorkPlaces.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantWorkPlaces.state_WorkPlaceAdd, {
            url: '/user/workplaces/add',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserWorkPlacesController as model',
                    templateUrl: 'Worklocation/userWorkPlacesAdd.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantWorkPlaces.state_WorkPlaceEdit,{
            url: '/user/workplaces/{id}/edit',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserWorkPlacesController as model',
                    templateUrl: 'Worklocation/userWorkPlacesEdit.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantWorkPlaces.state_AppoinmentSettings,{
            url: '/user/workplaces/{locationid}/appoinmentsettings',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserWorkPlacesController as model',
                    templateUrl: 'Worklocation/userAppoinmentSettings.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        
        }).state(ConstantWorkPlaces.state_AppoinmentModification,{
            url: '/user/workplaces/{locationid}/appoinmentmodification',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserWorkPlacesController as model',
                    templateUrl: 'Worklocation/userAppoinmentModification.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantWorkPlaces.state_AppoinmentModificationCreate,{
            url: '/user/workplaces/{locationid}/appoinmentmodification/create',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserWorkPlacesController as model',
                    templateUrl: 'Worklocation/userAppoinmentModificationCreate.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantWorkPlaces.state_AppoinmentModificationUpdate,{
            url: '/user/workplaces/{locationid}/appoinmentmodification/{id}/update',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserWorkPlacesController as model',
                    templateUrl: 'Worklocation/userAppoinmentModificationUpdate.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.userworkplace", [
    'ui.router',
    'ngResource',
    'mgcrea.ngStrap.datepicker',
    'oitozero.ngSweetAlert',
    'ngMessages'
])));
