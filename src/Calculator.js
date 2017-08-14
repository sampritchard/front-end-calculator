function Calculator() {
  this.result = 0;
  this.history = [];
}

Calculator.prototype.sum = function () {
  var sum = this.history.join("");
  var sumString = sum.toString();
  this.result = eval(sumString);
};

Calculator.prototype.saveMaths = function () {
  var name = prompt("Name?");
  this.history.push( name);
  var ul = document.getElementById("list-saved-maths");
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(this.history.join("")));
  ul.appendChild(li);
};
