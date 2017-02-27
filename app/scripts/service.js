'use strict';

angular.module('chatbotApp')
        .factory('chatFactory',function(){
            var chatFac ={};

            var responses=[{
                //index:1
                keyword:'hi',
                response:'Welcome! You can type some keywords. Let\'s see if I can figure out or not.'
            },
            {
                //index:2
                keyword:'401k',
                response:'A 401(k) is a retirement savings plan sponsored by an employer. It lets workers save and invest a piece of their paycheck before taxes are taken out. Taxes arent paid until the money is withdrawn from the account.'
            },
            {
                //index:3
                keyword:'eco',
                response:'Glad you asked. There is a growing focus in the investing community on what is called ESG investing. Short for Envionmental, Social, Governance. By investin in companies and funds that are ESG focused, and that take their environmental concerns seriously, you can greatly reduce impact of investsments on the environment, and the society too.'
            },
            {
                //index:4
                keyword:'life insurance',
                response:'We\'re taking a whole new approach to life insurance. With it, you can protect the ones you love, while saving money and earning valuable rewards and discounts by simply living a healthy life. The healthier your lifestyle, the more you’ll save and the greater your rewards.'
            },
            {
                //index:5
                keyword:'life insurance',
                response:'No matter what your financial goals, John Hancock has a life insurance solution that’s right for you. And now, it can also help you live a longer healthier life.'
            },
            {
                //index:6
                keyword:'save',
                response:'Take a look at vitality: <a href="https://www.johnhancockinsurance.com/life/John-Hancock-Vitality-Program.aspx">https://www.johnhancockinsurance.com/life/John-Hancock-Vitality-Program.aspx</a>'
            },
            {
                //index:7 error default
                keyword:'disunderstandable',
                response:'Sorry, I can\'t understand.'
            },
            {
                //index:8 auto
                keyword:'button choice 401k',
                response:'Awesome. Thanks for your interest! <br>With John Hancock as your partner, Plan Sponsors and their employees will benefit from an experienced industry leader who offers high-touch service and support and a commitment to putting participants first.</br>Did that help?'
            },
            {
                //index:9 auto
                keyword:'tellmemore',
                response:'Sure. John Hancock is one of the largest full-service providers of 401(k) plans in the US - we service nearly 2.8 million participants.<br>We have been in this business for over 100 years!<br>Did that help?</br>'

            },
            {
                //index:10 auto
                keyword:'yes',
                response:'Awesome.'
            },
            {
                //index:11 auto
                keyword:'next',
                response:'Here is a link that might be useful to learn about college savings:<br>to learn about college savings:link to college savings:</br> <a href="http://www.jhinvestments.com/Article.aspx?ArticleID=%7BA283791B-75F7-4B31-98A4-C3927BCDDB0B%7D">http://www.jhinvestments.com/Article.aspx?ArticleID=%7BA283791B-75F7-4B31-98A4-C3927BCDDB0B%7D</a>'
            },{
                //index:12 auto no_button
                keyword:'esg',
                response:'<button class="btn btn-primary">E-Environment</button><button class="btn btn-error">S-Social</button><button class="btn btn-warning">G-Governance</button><br>Isn\'t that cool?</br>'
            }
            ];

            chatFac.getResponses = function(){
                return responses;
            };

            chatFac.getResponseWithIndex = function(index){
                return responses[index].response;
            };

            chatFac.getResponseWithKeyword = function(keyword){
                for(var x in responses){
                    if(responses[x].keyword===keyword){
                        return responses[x].response;
                    }
                }
                return responses[x].response;
            };

            return chatFac;
        });

angular.module('chatbotApp')
        .directive('autoScrollToBottom',function(){
            return {  
                link: function(scope, element) {
                    scope.$watch(  
                        function() {  
                            return element.children().length<element.length?element.length:element.children().length;  
                        },  
                        function() {  
                            element.animate({  
                                scrollTop: element.prop('scrollHeight')  
                            }, 1000);  
                        }  
                    );  
                }  
            };  
        });

angular.module('chatbotApp')
        .filter('htmlContent',['$sce', function($sce) {
            return function(input) {
                return $sce.trustAsHtml(input);
            };
        }
        ]);