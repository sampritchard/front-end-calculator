function Calculator() {
  this.result = 0;
  this.history = [];
}

Calculator.prototype.sum = function () {
  var sum = this.history.join("");
  var sumString = sum.toString();
  this.result = eval(sumString);
};
