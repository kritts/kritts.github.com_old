'use strict';

/**
 * @ngdoc function
 * @name dsilvaApp.controller:MainCtrl
 * @description
 * # NewsCtrl
 * Controller of the dsilvaApp
 */
angular.module('dsilvaApp')
  .controller('NewsCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
