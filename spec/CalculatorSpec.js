describe('Calculator', function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it('starts with a result of 0', function() {
    expect(calculator.result).toEqual(0);
  })

  it('starts with an empty array for history', function() {
    expect(calculator.history).toEqual([]);
  })

  it('can do basic addition', function() {
    calculator.history = [11+11]
    calculator.sum();
    expect(calculator.result).toEqual(22);
  })

  it('can do basic subtraction', function() {
    calculator.history = [21-11]
    calculator.sum();
    expect(calculator.result).toEqual(10);
  })

  it('can do basic multiplication', function() {
    calculator.history = [2*2]
    calculator.sum();
    expect(calculator.result).toEqual(4);
  })

  it('can do basic division', function() {
    calculator.history = [4/2]
    calculator.sum();
    expect(calculator.result).toEqual(2);
  })

  it('can understand operator precedance', function() {
    calculator.history = [1+2*3]
    calculator.sum();
    expect(calculator.result).toEqual(7);
  })

})
