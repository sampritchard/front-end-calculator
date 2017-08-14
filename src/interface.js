$(document).ready(function() {

  calculator = new Calculator();

  function seeHistory() {
    $('#history').text(calculator.history.join(""));
  }

  function seeResult() {
    $('#answer').text(calculator.result);
  }

  $('.button').click(function() {
    var buttonPress = $(this).html();
    calculator.history.push(buttonPress);
    seeHistory();
  });

  $('#cancel-button').click(function() {
    calculator.history = [];
    calculator.result = 0;
    seeHistory();
    seeResult();
  });

  $('#equal-button').click(function() {
    calculator.sum();
    seeResult();
  })

  $('#save-button').click(function() {
    if (calculator.history.length > 0) {
    calculator.saveMaths();
    calculator.reverseList();
    calculator.deleteButton();
    calculator.selectButton();
  } else {
    alert("Please enter something!!")
  }
  })

  $('#saved-math').click(function() {
    calculator.showMaths();
  })
})
