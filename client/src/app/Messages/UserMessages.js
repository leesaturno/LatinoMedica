(function(module){
	module.controller('UserMessagesController', UserMessagesController);
	UserMessagesController.$inject = ['$state', '$rootScope', '$scope', '$filter', '$location', '$timeout', 'Flash', 'SweetAlert', 'ConstantMessages', '$stateParams', 'MessagesService', 'SentMessagesService', 'ItemMessagesService', 'UserLists', 'MessageDelete', 'ConstUserType']; 
	function UserMessagesController ($state, $rootScope, $scope, $filter, $location, $timeout, Flash, SweetAlert, ConstantMessages, $stateParams, MessagesService, SentMessagesService, ItemMessagesService, UserLists, MessageDelete, ConstUserType) {
        var model = this;
        
        /* [ Page Title ] */ 
        function pageTitle (title) {
            $rootScope.pageTitle = $rootScope.settings['site.name'] + " | " + $filter("translate")(title);
        }
        /* [ Flash Message ] */
        function flashMessage(message,classname) {
            Flash.set($filter("translate")(message), classname, true);
        }
		/* [ GET - Messages ] */
        function getMessages (param) {
            MessagesService.getall(param).$promise.then(function (response) {
                if (angular.isDefined(response)) {
                    model.receivedMessages = response.data;
                    model.dataLength = (response.data.length > 0) ? true : false;
					model._metadata = response.meta.pagination;
                    model.currentPage = param.page;
					model.maxSize = 5;
					model.messageType = 'received';
                }
            }); 
        }
		/* [ GET - Sent Messages ] */
        function getSentMessages (param) {
            SentMessagesService.getall(param).$promise.then(function (response) {
                if (angular.isDefined(response)) {
                    model.sentMessages = response.data;
                    model.dataLength = (response.data.length > 0) ? true : false;
					model._metadata = response.meta.pagination;
                    model.currentPage = param.page;
                    model.maxSize = 5;
					model.messageType = 'sent';
                }
            }); 
        }
		/* [Get user lists for compose message] */
		function userlists () {
			UserLists.get().$promise.then(function (response)  {
				if (angular.isDefined(response)) {
					model.userLists = response.data;
				}
			});
		}
		/* [Compose Message] */
		function composeMessage (data) {
			MessagesService.compose(data).$promise.then(function (response) {
				if (angular.isDefined(response)) {
					 /* [ Success Response ] */
                    if (response.Success) {
                        $timeout(function () {
                            $state.go(ConstantMessages.state_Message, {}, { reload:true });  
                        },500);                        
                        flashMessage(response.Success,'success');   
                    } else {
                        flashMessage("Please try again",'error');
                    }
				}
			});
		}
		/* [Reply Message] */
		function replyMessage (data) {
			MessagesService.reply(data).$promise.then(function (response) {
				if (angular.isDefined(response)) {
					 /* [ Success Response ] */
                    if (response.Success) {
                        $timeout(function () {
                            $state.go(ConstantMessages.state_Message, {}, { reload:true });  
                        },500);                        
                        flashMessage(response.Success,'success');   
                    } else {
                        flashMessage("Please try again",'error');
                    }
				}
			});
		}
		/* [ Delete Messages ] */
        function fnDeletemessage (data) {
			SweetAlert.swal({
                title: "Are you sure to Delete?",
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
			    /* [ Delete the Messages Data ] */
                    MessageDelete.delete(data).$promise.then(function (response) {
                        flashMessage(response.Success,'success');                      
                        $timeout(function () {
                            $state.go(ConstantMessages.state_Message, {}, { reload:true });  
                        },500);
                    }, function (error) {
                        flashMessage("Messages could not be deleted",'error');                        
                    });         
				}
            });
        }
		
        model.init = function () {
			model.currentPage = (model.currentPage !== undefined) ? parseInt(model.currentPage) : 1;
			model.messageIds = {};
			model.receivedMessages = {};
			model.sentMessages = {};
			model.ConstUserType = ConstUserType;
		};
		model.init();
		var param = {
                    'page': model.currentPage
                };
        /* [ State {{UserMessage}} ] */
        if ($state.current.name === ConstantMessages.state_Message) {
            pageTitle('Messages');
			getMessages(param);
			model.message_reply = function (valid, toUserId) {
				if (valid) {
					model.reply_message.to_user_id = toUserId;
					model.reply_message.message_id = $scope.parentMessageId;
					replyMessage(model.reply_message);
				}
			};
		/* [State {{User Sent Message}} ] */
        } else if ($state.current.name === ConstantMessages.state_SentMessage) {
			pageTitle('Sent Messages');
			getSentMessages(param);
		/* [State {{User Compose Message}} ] */
		} else if ($state.current.name === ConstantMessages.state_ComposeMessage) {
			pageTitle('Compose Message');
			userlists();
			model.message_compose = function (valid) {
				if (valid) {
					composeMessage(model.compose_message);
				}
			};
		} else {
           $state.go(ConstantMessages.state_Message);
        }
		/* [Delete Message function] */
		model.messageDelete  = function () {
			if (angular.isDefined(model.messageIds.id)) {
				if (model.messageType == 'received') {
					model.messageIds.message_folder_id = '1';
				} else {
					model.messageIds.message_folder_id = '2';
				}
				fnDeletemessage(model.messageIds);	
			} else {
				alert("Please select any message to delete");
			}
		};
		/* [Cancatenate message checkbox value] */
		$scope.$watch('model.receivedMessages', function() {
			var newtext = "";
			for (var i = 0; i < model.receivedMessages.length; i++) {

				if (model.receivedMessages[i].selected === true) {
					newtext += model.receivedMessages[i].id + ',';
				}
			}
			model.messageIds.id = newtext;
			}, true);
		
		/* [Cancatenate Sent message checkbox value] */
		$scope.$watch('model.sentMessages', function() {
			var sentmsg = "";
			for (var j = 0; j < model.sentMessages.length; j++) {

				if (model.sentMessages[j].selected === true) {
					sentmsg += model.sentMessages[j].id + ',';
				}
			}
			model.messageIds.id = sentmsg;
		}, true);
		
		/* [Pagination] */
		model.paginate = function() {
			model.currentPage = parseInt(model.currentPage);
			var param = {
               'page': model.currentPage
            };
			if (model.messageType == 'received') {
				getMessages(param);
			} else {
				getSentMessages(param);
			}
            
            $('html, body').stop(true, true).animate({
                scrollTop: 200
            }, 600);
        };
		
		model.ShowHide = function (value) {
			messageHide = angular.element(document.getElementsByClassName('js-answers'+value));
			if (messageHide.hasClass('hide')) {
				messageHide.removeClass('hide');
			}
			else
			{
				messageHide.addClass('hide');
			}
		};
		
		model.messageReplyBox = function (value) {
			replyBoxHide = angular.element(document.getElementsByClassName('js-replybox'+value));
			if (replyBoxHide.hasClass('hide')) {
				replyBoxHide.removeClass('hide');
				$scope.parentMessageId = value;
			}
			else
			{
				replyBoxHide.addClass('hide');
			}
		};
    }
}(angular.module("Abs.usermessage")));