$(document).ready(function() {

  calculator = new Calculator();

  function seeHistory() {
    $('#history').text(calculator.history);
  }
  $('#1').click(function() {
    calculator.history.push(1);
    seeHistory();
  })
})
