$(document).ready(function() {

  calculator = new Calculator();

  function seeHistory() {
    $('#history').text(calculator.history.join(""));
  }

  function seeResult() {
    $('#answer').text(calculator.result);
  }

  // function seeSavedMaths() {
  //   $('#list-saved-maths').text(calculator.saved.reverse().toString().replace(/,/g, " "));
  // }

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
    calculator.saveMaths();
    calculator.reverseList();
    calculator.deleteButton();
  })

  $('#saved-math').click(function() {
    calculator.showMaths();
  })
})
