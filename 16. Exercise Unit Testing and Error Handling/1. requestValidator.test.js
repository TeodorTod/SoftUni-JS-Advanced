const isOddOrEven = require('./1. requestValidator');
const { assert } = require('chai');

describe('isOddOrEven function test', () => {
    it('should return undefined if the parameter is number', () => {
        assert.equal(isOddOrEven(10), undefined);
    });
    it('should return undefined if the parameter is object', () => {
        assert.equal(isOddOrEven({}), undefined);
    });
    it('should return undefined if the parameter is array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    it('should return even', () => {
        assert.equal(isOddOrEven('ivan'), 'even');
    });
    it('should return odd', () => {
        assert.equal(isOddOrEven('ivane'), 'odd');
    });

   
});