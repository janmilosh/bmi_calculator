'use strict';

var BMIServices = angular.module('BMIServices', []);

BMIServices.service('BMI', function() {
  
  var service = this;

  service.initializeMetrics = function(inches, pounds) {
    this.inches = inches;
    this.centimeters = service.useCentimeters(inches);
    this.pounds = pounds;
    this.kilograms = service.useKilograms(pounds);
    this.BMI = service.calculateBMI(this.inches, this.pounds);
  }

  service.useKilograms = function(pounds) {
    return Math.round(pounds * 10 / 2.20462) / 10;
  }

  service.usePounds = function(kilograms) {
    return Math.round(kilograms * 2.20462 * 10) / 10;
  }

  service.useCentimeters = function(inches) {
    return Math.round(inches * 2.54 * 10) / 10;
  }

  service.useInches = function(centimeters) {
    return Math.round(centimeters * 10 / 2.54) / 10;
  }
  
  service.calculateBMI = function(height, weight) {
    return Math.round(10 * (weight/(height * height)) * 703) / 10;
  }

  service.assess = function(bmi) {
    if(bmi >= 25) {
      return 'overweight';
    } else if(bmi < 18.5) {
      return 'underweight';
    } else {
      return 'normalweight';
    }
  }
});

