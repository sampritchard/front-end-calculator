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
    this.history.push(name);
    this.history.push(new Date().toDateString())
    var ul = document.getElementById("list-saved-maths");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(this.history.join("")));
    ul.appendChild(li);

    var list = document.getElementsByTagName("li");
    for (var i = 0; i < list.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      list[i].appendChild(span);
    }

      var close = document.getElementsByClassName("close");
      for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
    };
