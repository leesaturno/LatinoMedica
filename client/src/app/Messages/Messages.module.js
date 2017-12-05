(function (module) {
    module.constant('ConstantMessages', {
        state_Message: 'Message',
        state_SentMessage: 'SentMessage',
        state_ItemMessage: 'ItemMessage',
        state_ComposeMessage: 'ComposeMessage',
        state_MessageView: 'MessageView',
        state_ReplyMessage: 'ReplyMessage',
        state_PrivateNote: 'PrivateNote',
    });
    module.config(function ($stateProvider,ConstantMessages) {
        var ResolveServiceData = {
            'ResolveServiceData': function (ResolveService, $q) {
                return $q.all({
                    AuthServiceData: ResolveService.promiseAuth,
                    SettingServiceData: ResolveService.promiseSettings
                });
            }
        };
        $stateProvider.state(ConstantMessages.state_Message, {
            url: '/messages',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserMessagesController as model',
                    templateUrl: 'Messages/messages.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantMessages.state_SentMessage, {
            url: '/sentmessages',
            authenticate: true,
            views: {
                "main": {
                    controller: 'UserMessagesController as model',
                    templateUrl: 'Messages/sentmessages.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantMessages.state_ItemMessage,{
            url: '/item_messages/{id}',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserMessagesController as model',
                    templateUrl: 'Messages/itemmessages.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantMessages.state_ComposeMessage,{
            url: '/composemessage',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserMessagesController as model',
                    templateUrl: 'Messages/messagecompose.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        
        }).state(ConstantMessages.state_MessageView,{
            url: '/messages/{id}',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserMessagesController as model',
                    templateUrl: 'Messages/messageview.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantMessages.state_ReplyMessage,{
            url: '/messages/{message_id}/reply',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserMessagesController as model',
                    templateUrl: 'Messages/messagereply.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        }).state(ConstantMessages.state_PrivateNote,{
            url: '/private_notes',
            authenticate:true,
            views:{
                "main":{
                    controller: 'UserMessagesController as model',
                    templateUrl: 'Messages/privatenote.tpl.html',
                    resolve: ResolveServiceData
                }
            }
        });
    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("Abs.usermessage", [
    'ui.router',
    'ngResource',
    'mgcrea.ngStrap.datepicker',
    'oitozero.ngSweetAlert',
    'ngMessages'
])));
