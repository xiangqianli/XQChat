'use strict';

/**
 * @ngdoc function
 * @name chatbotApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the chatbotApp
 */
angular.module('chatbotApp')
  .controller('ContactCtrl', ['$scope','chatFactory',function ($scope, chatFactory) {
    
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.chatWindowH = window.screen.availHeight*0.7;

    $scope.mymessage = '';

    $scope.responses = chatFactory.getResponses();

    $scope.chatStack = [{
        'to': false,
        'from':true,
        'auto': false,
        'message':chatFactory.getResponseWithIndex(0)
    }];

    var keywords=['hi','401k','eco','life insurance','life insurance','save','disunderstandable','button choice 401k','Tell me more.','That did help.','What next?','esg','That not help.'];
    var extendSaveKeywords=['savings'];

    var isAutoChatting = false;

    //Control the display of auto-chat-button "Tell me more."
    $scope.button1Show = false;

    //Control the display of auto-chat-button "Yes. and No."
    $scope.button2Show = false;

    //Control the display of auto-chat-button "What Next?"
    $scope.button3Show = false;  

    var findMsgIndex = function(message){

        for(var i in keywords){
            if(i-1===0 && message.search(keywords[i])===0){
                isAutoChatting = true;// Enter Button Choice Conversations
                return 7;
            }else if(message.search(keywords[i])!== -1){
                if(i-3===0){
                    var tempNum = Math.random()*2+3;
                    var random = parseInt(tempNum,10);
                    return random;
                }
                return i;
            }
        }

        for(var j in extendSaveKeywords){
            if(message.search(extendSaveKeywords[j])!== -1){
                return 5;
            }
        }
        //Otherwise return response with 'disunderstandable' info.
        return 6;
    };

    $scope.SendMsg = function(message){
        var msgIndex = findMsgIndex(message);
        if(msgIndex-7 === 0 && isAutoChatting){
            $scope.button1Show = true;
            $scope.button2Show = false;
            $scope.button3Show = false;
        }
        if(msgIndex-8 === 0 && isAutoChatting){
            $scope.button1Show = false;
            $scope.button2Show = true;
            $scope.button3Show = false;
        }
        if(msgIndex-9 === 0 && isAutoChatting){
            $scope.button1Show = false;
            $scope.button2Show = false;
            $scope.button3Show = true;
        }
        if( (msgIndex-10 === 0 || msgIndex-12 === 0) && isAutoChatting){
            isAutoChatting = false;
            $scope.button1Show = false;
            $scope.button2Show = false;
            $scope.button3Show = false;
        }
        var tempStack;
        tempStack = {
            'to':true,
            'from':false,
            'message':message
        };
        $scope.chatStack.push(tempStack);
        if(msgIndex!==12){
            tempStack={
            'to':false,
            'from':true,
            'message':chatFactory.getResponseWithIndex(msgIndex)
            };
            $scope.chatStack.push(tempStack);
        }
        $scope.mymessage= '';
    };


    }

  ]);
