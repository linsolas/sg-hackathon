'use strict';

/**
 * @ngdoc function
 * @name sgHackathonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sgHackathonApp
 */
angular.module('sgHackathonApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
