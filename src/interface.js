$(document).ready(function() {

  calculator = new Calculator();

  function seeHistory() {
    $('#history').text(calculator.history);
  }

  $('.button').click(function() {
    var buttonPress = $(this).html();
    calculator.history.push(buttonPress);
    seeHistory();
  })
  
})
