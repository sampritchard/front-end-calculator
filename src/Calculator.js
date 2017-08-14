function Calculator() {
  this.result = 0;
  this.history = [];
  this.selectedItem = [];
}

  Calculator.prototype.sum = function () {
    var sum = this.history.join("");
    var sumString = sum.toString();
    this.result = eval(sumString);
  };

  Calculator.prototype.saveMaths = function () {
    var name = prompt("What would you like to call this function?");
    this.history.push(name);
    this.history.push(new Date())
    var ul = document.getElementById("list-saved-maths");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(this.history.join(" ")));
    ul.appendChild(li);
  };

  Calculator.prototype.deleteButton = function () {
    var list = document.getElementsByTagName("li");
    for (var i = 0; i < list.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("Delete");
      span.className = "close";
      span.appendChild(txt);
      list[i].appendChild(span);

      var close = document.getElementsByClassName("close");
      for (var i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
          }
        }
      }
    };

    Calculator.prototype.selectButton = function () {
      var list = document.getElementsByTagName("li");
      for (var i = 0; i < list.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("Select");
        span.className = "close";
        span.appendChild(txt);
        list[i].appendChild(span);

      var select = document.getElementsByClassName("close");
      for (var i = 0; i < select.length; i++) {
        select[i].onclick = function() {
          alert("Error! Needs Debugging")
          }
        }
      }
    };

  Calculator.prototype.reverseList = function () {
    var li = document.getElementsByTagName('li');
      for (var i = li.length; i-- ;) {
      li[i].parentNode.appendChild(li[i]);
      };
  };

  Calculator.prototype.showMaths = function () {
    var x = document.getElementById("list-saved-maths");
    if (x.style.display === 'none') {
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  };
