describe('calculateMonthlyPayment() tests', function () {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment({amount: 1000, years: 2, rate: 0.25})).toBe('53.37')
  });
  it("should return a result with 2 decimal places", function () {
    expect(calculateMonthlyPayment({amount: 3000, years: 3, rate: 0.03})).toBe('87.24')
  });
  it('should reject numbers that are not greater than 0', function () {
    expect(() => calculateMonthlyPayment({amount: 0, years: 0, rate: 0})).toThrowError();
    expect(() => calculateMonthlyPayment({amount: -1, years: -1, rate: -1})).toThrowError();
  })
  it('should not accept inputs that are not a number', function () {
    expect(() => calculateMonthlyPayment({amount: NaN, years: 2, rate: 0.25})).toThrowError();
    expect(() => calculateMonthlyPayment({amount: 2000, years: NaN, rate: 0.25})).toThrowError();
    expect(() => calculateMonthlyPayment({amount: 2000, years: 2, rate: NaN})).toThrowError();
  })
})
