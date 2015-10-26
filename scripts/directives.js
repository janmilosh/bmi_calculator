'use strict';

var BMIDirectives = angular.module('BMIDirectives', []);

BMIDirectives.directive('sliderUpdate', function ($rootScope) { 
  return {
    require: 'ngModel',
    link: function(scope, elem, attr, ngModel) {
      
      scope.$watch('metrics.inches',function(newVal, oldVal) {
        $rootScope.$emit('newInches', newVal);        
      });
      
      scope.$watch('metrics.centimeters',function(newVal, oldVal) {
        $rootScope.$emit('newCentimeters', newVal);        
      });
      
      scope.$watch('metrics.pounds',function(newVal, oldVal) {
        $rootScope.$emit('newPounds', newVal);        
      });
      
      scope.$watch('metrics.kilograms',function(newVal, oldVal) {
        $rootScope.$emit('newKilograms', newVal);        
      });
    }
  };
});
