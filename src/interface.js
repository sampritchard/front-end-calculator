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
    seeHistory();
  });

  $('#equal-button').click(function() {
    calculator.sum();
    seeResult();
    calculator.history = [];
  })
})
