window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      updateMonthly();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let monthlyPaymentContainer = document.getElementById("monthly-payment");
  let loanAmount = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let yearlyRate = document.getElementById("loan-rate").value;
  let ratePercent = yearlyRate / 100;
  let totalPayments = years * 12;
  let periodicInterestRate = ratePercent / 12;

  let monthlyPayment =
    (loanAmount * periodicInterestRate) / 1 -
    (1 + periodicInterestRate) ** -totalPayments;

  monthlyPaymentContainer.innerText = `$${monthlyPayment.toFixed(2)}`;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let monthlyPaymentContainer = document.getElementById("monthly-payment");
  let loanAmount = document.getElementById("loan-amount").value;
  let years = document.getElementById("loan-years").value;
  let yearlyRate = document.getElementById("loan-rate").value;
  const result = calculateMonthlyPayment({ yearlyRate, loanAmount, years });
  console.log(result);
  monthlyPaymentContainer.innerText = `$${result}`;
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const percent = values.yearlyRate / 100;
  const totalPayments = values.years * 12;
  const amount = values.loanAmount;
  let periodicInterestRate = percent / 12;

  return (
    (amount * periodicInterestRate) / 1 -
    (1 + periodicInterestRate) ** -totalPayments
  ).toFixed(2);

  //monthlyPaymentContainer.innerText = `$${monthlyPayment.toFixed(2)}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  update();
}
