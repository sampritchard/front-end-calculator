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
})
