'use strict';

angular
  .module('sgHackathonApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl'
      })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });

angular.module('sgHackathonApp').filter('startFrom', function() {
    return function(arr, start) {
        return (arr || []).slice(start);
    };
});