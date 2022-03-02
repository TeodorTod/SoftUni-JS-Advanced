let testNumbers = require('./testNumbers.js');
const {
    assert,
    expect
} = require('chai');

describe("Tests numbers", () => {
    describe("sumNumber", () => {
        it('first parameter is not a num', function() {
            expect(testNumbers.sumNumbers('no', 1)).to.equal(undefined);
        });
        it('second parameter is not a num', function() {
            expect(testNumbers.sumNumbers(3, 'stand')).to.equal(undefined);
        });
        it('both parameters are not a num', function() {
            expect(testNumbers.sumNumbers([], 'stand')).to.equal(undefined);
        });
        it('positive sum', function() {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
        });
        it('negative sum', function() {
            expect(testNumbers.sumNumbers(-3, -5)).to.equal('-8.00');
        });
     });

     describe('numberChecker', () => {
        it('even num', function() {
            expect(testNumbers.numberChecker('2')).to.equal("The number is even!");
        });
        it('odd num', function() {
            expect(testNumbers.numberChecker('3')).to.equal("The number is odd!");
        });
        it('parameter is not a num 1', () => {
            expect(()=>testNumbers.numberChecker({})).to.throw("The input is not a number!");
        });
        it('parameter is not a num 2', () => {
            expect(()=>testNumbers.numberChecker('string')).to.throw("The input is not a number!");
        });
    
     });

     describe('averageSumArray', () => {
        it('even num', function() {
            expect(testNumbers.averageSumArray([3, 4, 5])).to.equal(4);
        });
     });
     
});
