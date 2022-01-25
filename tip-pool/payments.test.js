describe('payment.js tests with setup and tear down', function () {  
    describe('submitPaymentInfo() tests', function () {
        beforeEach(function () {
            curPayment = undefined;
        });
        it('should not submit if curPayment is undefined', function () {
            expect(submitPaymentInfo()).toBe(undefined);
        });
        afterEach(function () {
            curPayment = '';
        });
    });

    describe('createCurPayment() tests', function () {
        beforeEach(function () {
            billAmt = 0;
            tipAmt = -1;
        })
        it('should not fire without a positive bill amount or tip >= 0', function () {
            expect(createCurPayment()).toBe(undefined)
        });
        beforeEach(function () {
            billAmt = 1;
            tipAmt = 1;
        });
        it('should fire with a positive bill amount and tip >= 0', function () {
            createCurPayment()
            expect(billAmt).toBe(1)
            expect(tipAmt).toBe(1)
        });
    });

    describe('appendPaymentTable() tests', function () {
        beforeEach(function () {
            curPayment = {
            billAmt: '',
            tipAmt: '',
            tipPercent: ''
            }
            paymentTbody.innerHTML = '';
        });
        it('should not append the table if bill amount, tip amount or tip% do not exist', function () {
            expect(() => appendPaymentTable(curPayment)).toThrowError();
        });
    });

    describe('updateSummary() tests', function () {
        beforeEach(function () {
            paymentTotal = 0;
            numberOfPayments = 0;
        });
        it('should return tipPercentAvg as 0 if there are no payments', function () {
            updateSummary();
            expect(summaryTds[2].innerHTML).toBe('0%')
        });
        afterEach(function () {
            summaryTds[0].innerHTML = ''
            summaryTds[1].innerHTML = ''
            summaryTds[2].innerHTML = ''
        })
    });
});  