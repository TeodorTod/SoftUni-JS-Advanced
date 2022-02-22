let library = require('./library.js');
const {
    assert,
    expect
} = require('chai');

describe('Library test', () => {
    describe('calcPriceOfBook tests', () => {
        it('invalid input - name of book', () => {
            expect(()=>library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
        });
        it('invalid input - year', () => {
            expect(()=>library.calcPriceOfBook(1,'year')).to.throw('Invalid input');
        });
        it('invalid input - year', () => {
            expect(()=>library.calcPriceOfBook('1','year')).to.throw('Invalid input');
        });
        it('valid data - year is before under 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1978)).to.equal(`Price of The Little Prince is 10.00`);
        });
        it('valid data - year is 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(`Price of The Little Prince is 10.00`);
        });
        it('valid data - year is after 1980', () => {
            expect(library.calcPriceOfBook('The Little Prince', 1982)).to.equal(`Price of The Little Prince is 20.00`);
        });
    });

    describe('findBook tests', () => {
        it('invalid input - empty arr', () => {
            expect(()=>library.findBook([], "Clever Peter")).to.throw('No books currently available');
        });
        it('valid - found book', () => {
            expect(library.findBook(["Harry Potter", "The Lord of the rings", "Carry"], "Carry")).to.equal('We found the book you want.');
        });
        it('invalid input - not found book', () => {
            expect(library.findBook(["Harry Potter", "The Lord of the rings", "Carry"], "Lost")).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks tests', () => {
        it('invalid input - not an integer', () => {
            expect(()=>library.arrangeTheBooks('Yes')).to.throw('Invalid input');
        });
        it('invalid input - not an integer', () => {
            expect(()=>library.arrangeTheBooks(-100)).to.throw('Invalid input');
        });
        it('vali input - more shelves needed', () => {
            expect(library.arrangeTheBooks(45)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
        it('vali input - enought shelves', () => {
            expect(library.arrangeTheBooks(35)).to.equal('Great job, the books are arranged.');
        });
        it('vali input - enought shelves', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
    });
});