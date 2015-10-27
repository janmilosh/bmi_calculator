describe('BMI Service', function() {
  var BMI;

  beforeEach(module('BMIServices'));
  beforeEach(inject(function(_BMI_) {
    BMI = _BMI_;
  }));

  beforeEach(function() {
    metrics = new BMI.initializeMetrics(66, 140);
  });

  it('should instantiate height in inches', function() {
    expect(metrics.inches).toEqual(66);
  });

  it('should instantiate weight in pounds', function() {
    expect(metrics.pounds).toEqual(140);
  });

  it('should instantiate height in centimeters', function() {
    expect(metrics.centimeters).toEqual(167.6);
  });

  it('should instantiate weight in kilograms', function() {
    expect(metrics.kilograms).toEqual(63.5);
  });

  it('should calculate the BMI', function() {
    expect(metrics.BMI).toEqual(22.6);
  });

  it('should convert inches to centimeters with one decimal place', function() {
    var centimeters = BMI.useCentimeters(1);
    expect(centimeters).toEqual(2.5);
  });

  it('should convert centimeters to inches with one decimal place', function() {
    var inches = BMI.useInches(2.54);
    expect(inches).toEqual(1.0);
  });

  it('should convert pounds to kilograms with one decimal place', function() {
    var kilograms = BMI.useKilograms(167);
    expect(kilograms).toEqual(75.8);
  });

  it('should convert kilograms to pounds with one decimal place', function() {
    var pounds = BMI.usePounds(76);
    expect(pounds).toEqual(167.6);
  });

  it('should correctly assess underweight based on BMI', function() {
    var assessment = BMI.assess(18.4);
    expect(assessment).toEqual('underweight');
  });

  it('should correctly assess normal weight based on BMI', function() {
    var assessment1 = BMI.assess(18.5);
    var assessment2 = BMI.assess(24.9)
    expect(assessment1).toEqual('normalweight');
    expect(assessment2).toEqual('normalweight');
  });

  it('should correctly assess overweight based on BMI', function() {
    var assessment = BMI.assess(25);
    expect(assessment).toEqual('overweight');
  });
});
