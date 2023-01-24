it("should calculate the monthly payment correctly", function () {
  let values = { yearlyRate: 58, loanAmount: 10000, years: 8 };
  const result = calculateMonthlyPayment(values);
  expect(result).toEqual("483.32");
});

it("should return a result with 2 decimal places", function () {
  let values = { yearlyRate: 58, loanAmount: 10000, years: 8 };
  const result = calculateMonthlyPayment(values);
  expect(result).toEqual("483.32");
});
