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
    return parseFloat((pounds / 2.20462).toFixed(1));
  }

  service.usePounds = function(kilograms) {
    return parseFloat((kilograms * 2.20462).toFixed(1));
  }

  service.useCentimeters = function(inches) {
    return parseFloat((inches * 2.54).toFixed(1));
  }

  service.useInches = function(centimeters) {
    return parseFloat((centimeters / 2.54).toFixed(1));
  }
  
  service.calculateBMI = function(height, weight) {
    return parseFloat(((weight/(height * height)) * 703).toFixed(1));
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

