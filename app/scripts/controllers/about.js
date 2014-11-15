'use strict';

/**
 * @ngdoc function
 * @name sgHackathonApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sgHackathonApp
 */
angular.module('sgHackathonApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
