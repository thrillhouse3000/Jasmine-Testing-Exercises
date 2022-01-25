describe('helpers.js tests with setup and tear down', function () {  
    describe('sumPaymentTotal() tests', function () {
        beforeEach(function () {
            allPayments = {
                payment1: {
                    billAmt: 4,
                    tipAmt: 2,
                    tipPercent: 50
                },
                payment2: {
                    billAmt: 6, 
                    tipAmt: 3,
                    tipPercent: 50
                }
            }
        });
        it('should sum correctly for each type', function () {
            expect(sumPaymentTotal('billAmt')).toBe(10)
            expect(sumPaymentTotal('tipAmt')).toBe(5)
            expect(sumPaymentTotal('tipPercent')).toBe(100)
        });
        afterEach(function (){
            allPayments = {};
        })
    })

    describe('calculateTipPercent() tests', function () {
        beforeEach(function () {
            billAmt = 4;
            tipAmt = 2;
        })
        it('should caluclate correct tip percentage', function () {
            expect(calculateTipPercent(billAmt, tipAmt)).toBe(50)
        })
    })

    describe('appendTd() tests', function () {
        beforeEach(function () {
            testTbody = document.createElement('table')
            newTr = document.createElement('tr')
            value = 'test'
        });
        it('should create a tr with a td inside that has the specified value', function () {
            appendTd(newTr, value)
            testTbody.append(newTr)
            expect(testTbody.innerHTML).toBe('<tr><td>test</td></tr>')
        });
        afterEach(function () {
            testTbody.remove();
        });  
    });

    describe('appendDeleteBtn() tests', function () {
        beforeEach(function () {
            testTbody = document.createElement('table')
            newTr = document.createElement('tr')
        });
        it('should create a td with an "X"', function () {
            appendDeleteBtn(newTr)
            testTbody.append(newTr)
            expect(testTbody.innerHTML).toBe('<tr><td>X</td></tr>')
        });
        afterEach(function () {
            testTbody.remove();
        });  
    })
});  