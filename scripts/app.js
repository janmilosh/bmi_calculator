'use strict';

var BMIApp = angular.module('BMIApp', [
  'BMIControllers',
  'BMIDirectives',
  'BMIServices',
  'ui.slider',
  'ngRoute'
]);

BMIApp.config(function ($routeProvider) {  
  $routeProvider
    .when('/', {
      templateUrl: 'partials/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
