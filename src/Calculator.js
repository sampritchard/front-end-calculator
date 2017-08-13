function Calculator() {
  this.result = 0;
  this.history = [];
  this.saved = [];
}

Calculator.prototype.sum = function () {
  var sum = this.history.join("");
  var sumString = sum.toString();
  this.result = eval(sumString);
};

Calculator.prototype.saveMaths = function () {
  calculator.saved.push(calculator.history.join(""));
};
