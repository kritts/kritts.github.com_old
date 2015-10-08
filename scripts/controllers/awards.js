'use strict';

/**
 * @ngdoc function
 * @name dsilvaApp.controller:AwardsCtrl
 * @description
 * # AwardsCtrl
 * Controller of the dsilvaApp
 */
angular.module('dsilvaApp')
  .controller('AwardsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
