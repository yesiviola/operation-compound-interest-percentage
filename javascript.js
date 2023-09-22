
function calculateMonthlyInterest(value, percentage) {
  var monthlyInterest = (value * percentage / 100) / 12;
  return monthlyInterest;
}
function calculateFinalValue() {
  var value = parseFloat(document.getElementById("value").value);
  var percentageMonthly = parseFloat(document.getElementById("percentageMonthly").value);
  var percentageAnnual = parseFloat(document.getElementById("percentageAnnual").value);
  var months = parseFloat(document.getElementById("months").value);

  var monthlyInterest = calculateMonthlyInterest(value, percentageMonthly);
  var annualInterest = (value * percentageAnnual) / 100;
  var finalValue = value;

  for (var i = 0; i < months; i++) {
      finalValue += finalValue * (monthlyInterest / 100);
  }

  finalValue += annualInterest;
  document.getElementById("result").value = finalValue.toFixed(2);
}





  
  

  