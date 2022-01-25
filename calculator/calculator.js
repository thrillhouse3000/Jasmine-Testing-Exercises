let currentMonthlyPayment = document.querySelector('#monthly-payment')

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let amount = updatedAmount()
      updateMonthly(amount);
    });
  }
});

let currentValues = function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  if(values.amount <= 0 || values.rate <= 0 || values.years <= 0){
    throw new Error('The values must be greater than 0!');
  }
  if (values.amount.toString() === 'NaN' || values.rate.toString() === 'NaN' || values.years.toString() === 'NaN') {
    throw new Error('The input values must be numbers');
  }
    let P = values.amount;
    let i = values.rate / 12; 
    let n = values.years * 12;
    let monthlyPayment = Math.round(((P * i) / (1 - Math.pow((1 + i), -n)))*100) / 100
    return monthlyPayment.toString();
  
}

// Get the current values from the UI
// Update the monthly payment
function updatedAmount() {
  let monthlyAmount = calculateMonthlyPayment(currentValues());
  return monthlyAmount;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  currentMonthlyPayment.innerText = monthly;
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmountInput = document.getElementById("loan-amount");
  let loanYearsInput = document.getElementById("loan-years");
  let loanRateInput = document.getElementById("loan-rate")

  loanAmountInput.value = 1000;
  loanYearsInput.value = 2;
  loanRateInput.value = 0.25;

  updateMonthly(updatedAmount());
}
