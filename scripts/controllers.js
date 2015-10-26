'use strict';

var BMIControllers = angular.module('BMIControllers', []);

BMIControllers.controller('HomeController', function ($scope, $rootScope, BMI) {
  $scope.units = 'english';
  $scope.metrics = new BMI.initializeMetrics(70, 150);
  $scope.assessment = 'normalweight';

  $rootScope.$on('newInches', function(event, inches) {
    $scope.metrics.centimeters = BMI.useCentimeters(inches);
    update();
  });

  $rootScope.$on('newCentimeters', function(event, centimeters) {
    $scope.metrics.inches = BMI.useInches(centimeters);
    update();
  });

  $rootScope.$on('newPounds', function(event, pounds) {
    $scope.metrics.kilograms = BMI.useKilograms(pounds);
    update();
  });

  $rootScope.$on('newKilograms', function(event, kilograms) {
    $scope.metrics.pounds = BMI.usePounds(kilograms);
    update();
  });

  function update() {
    $scope.metrics.BMI = BMI.calculateBMI($scope.metrics.inches, $scope.metrics.pounds);
    $scope.assessment = BMI.assess($scope.metrics.BMI);
  }
});