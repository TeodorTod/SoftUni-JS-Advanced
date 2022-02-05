const lookupChar = require('./3. charLookup');
const { assert } = require('chai');

describe('lookupChar function test', () => {
    it('should return undefined if first parameter is not a string', () => {
        assert.equal(lookupChar(10, 1), undefined);
    });
    it('should return undefined if second parameter is not a number', () => {
        assert.equal(lookupChar('yes', 'no'), undefined);
    });
    it('should return undefined if second parameter is not a number', () => {
        assert.equal(lookupChar('yes', 1.1), undefined);
    });
    it('should return undefined if first parameter is not a string and second parameter is not a number', () => {
        assert.equal(lookupChar(10, 'pesho'), undefined);
    });
    it('should return Incorrect index if the value of index is incorrect', () => {
        assert.equal(lookupChar('pesho', 20), 'Incorrect index');
    });
    it('should return Incorrect index if the value of index is incorrect', () => {
        assert.equal(lookupChar('pesho', -5), 'Incorrect index');
    });
    it('should return undefined if first parameter is not a string and second parameter is not a number', () => {
        assert.equal(lookupChar('pesho', 0), 'p');
    });
    it('should return undefined if first parameter is not a string and second parameter is not a number', () => {
        assert.equal(lookupChar('pesho', 1), 'e');
    });
    
   
});