'use strict';

/**
 * @ngdoc overview
 * @name chatbotApp
 * @description
 * # chatbotApp
 *
 * Main module of the application.
 */
angular
  .module('chatbotApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/chatme', {
        templateUrl: 'views/chatme.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/chatbot', {
        templateUrl: 'views/chatbot.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
