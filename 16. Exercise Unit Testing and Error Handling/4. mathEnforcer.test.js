const mathEnforcer = require('./4. mathEnforcer');
const {
    assert
} = require('chai');

describe('mathEnforcer test', () => {
    it('should return undefined if the parameter is not a number', () => {
        assert.equal(mathEnforcer.addFive('pesho'), undefined);
    });
    it('should return undefined if the parameter is not a number', () => {
        assert.equal(mathEnforcer.addFive({}), undefined);
    });
    it('should return undefined if the parameter is not a number', () => {
        assert.equal(mathEnforcer.addFive([]), undefined);
    });
    it('should return parameter + 5', () => {
        assert.equal(mathEnforcer.addFive(5), 10);
    });
    it('should return parameter + 5', () => {
        assert.equal(mathEnforcer.addFive(5.5), 10.5);
    });
    it('should return parameter + 5', () => {
        assert.equal(mathEnforcer.addFive(-10), -5);
    });
    it('should return undefined if the parameter is not a number', () => {
        assert.equal(mathEnforcer.subtractTen('pesho'), undefined);
    });
    it('should return parameter - 10', () => {
        assert.equal(mathEnforcer.subtractTen(5), -5);
    });
    it('should return parameter - 10', () => {
        assert.equal(mathEnforcer.subtractTen(5.5), -4.5);
    });
    it('should return parameter - 10', () => {
        assert.equal(mathEnforcer.subtractTen(-5), -15);
    });
    it('should return undefined if first parameter is not a number', () => {
        assert.equal(mathEnforcer.sum('pesho', 1), undefined);
    });
    it('should return undefined if second parameter is not a number', () => {
        assert.equal(mathEnforcer.sum(3, 'pesho'), undefined);
    });
    it('should return sum of two parameters', () => {
        assert.equal(mathEnforcer.sum(3, 4), 7);
    });
    it('should return sum of two parameters', () => {
        assert.equal(mathEnforcer.sum(-3, -4), -7);
    });
    it('should return sum of two parameters', () => {
        assert.equal(mathEnforcer.sum(-3.5, -4.5), -8);
    });

});