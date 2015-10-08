'use strict';

/**
 * @ngdoc overview
 * @name dsilvaApp
 * @description
 * # dsilvaApp
 *
 * Main module of the application.
 */
angular
  .module('dsilvaApp', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/research', {
        templateUrl: 'views/research.html',
        controller: 'ResearchCtrl'
      })
      .when('/publications', {
        templateUrl: 'views/publications.html',
        controller: 'PublicationsCtrl'
      })  
      .when('/projects', {
        templateUrl: 'views/projects.html', 
        controller: 'ProjectsCtrl'
      }) 
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      }) 
      .when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      })
      .when('/personal', {
        templateUrl: 'views/personal.html',
        controller: 'PersonalCtrl'
      })
      .when('/personal/leadership', {
        templateUrl: 'views/leadership.html',
        controller: 'LeadershipCtrl'
      })
      .when('/personal/awards', {
        templateUrl: 'views/awards.html',
        controller: 'AwardsCtrl'
      })
      .when('/personal/goals', {
        templateUrl: 'views/goals.html',
        controller: 'GoalsCtrl'
      })
      .when('/personal/future', {
        templateUrl: 'views/future.html',
        controller: 'FutureCtrl'
      })
      .when('/experiences', {
        templateUrl: 'views/experiences.html',
        controller: 'ExperiencesCtrl'
      })
      .when('/experiences/ictd', {
        templateUrl: 'views/ictd.html',
        controller: 'ICTDCtrl'
      })
      .when('/experiences/msr', {
        templateUrl: 'views/msr.html',
        controller: 'MSRCtrl'
      })
      .when('/experiences/bioe', {
        templateUrl: 'views/bioe.html',
        controller: 'BioeCtrl'
      })
      .when('/experiences/broad', {
        templateUrl: 'views/broad.html',
        controller: 'BroadCtrl'
      }) 
  //    .when('/experiences/google', {
    //    templateUrl: 'views/google.html',
      //  controller: 'GoogleCtrl'
      //})
      .otherwise({
        redirectTo: '/'
      });
  });

