let companyAdministration = require('./companyAdministration.js');
const {
    assert,
    expect
} = require('chai');

describe("Tests", ()=> {
    describe("hiringEmployee tests", ()=> {
        it("not a programmer", ()=> {
            expect(()=>companyAdministration.hiringEmployee('Ivan', 'HR', 11)).to.throw(`We are not looking for workers for this position.`);
        });
        it("over 3 years", ()=> {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 11)).to.equal(`Ivan was successfully hired for the position Programmer.`);
        });
        it("equal to 3 years", ()=> {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 3)).to.equal(`Ivan was successfully hired for the position Programmer.`);
        });
        it("equal to 3 years", ()=> {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 2)).to.equal(`Ivan is not approved for this position.`);
        });
        it("equal to 3 years", ()=> {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', 0)).to.equal(`Ivan is not approved for this position.`);
        });
        it("equal to 3 years", ()=> {
            expect(companyAdministration.hiringEmployee('Ivan', 'Programmer', -3)).to.equal(`Ivan is not approved for this position.`);
        });
     });
     describe('calculateSalary tests', () => {
        it("not a number", ()=> {
            expect(()=>companyAdministration.calculateSalary('Ivan')).to.throw('Invalid hours');
        });
        it("negative number", ()=> {
            expect(()=>companyAdministration.calculateSalary(-1)).to.throw('Invalid hours');
        });
        it("normal salary", ()=> {
            expect(companyAdministration.calculateSalary(10)).to.equal(150);
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });
        it("normal salary", ()=> {
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });
        it("normal salary + bonus", ()=> {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000);
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });
     });
     describe('firedEmployee tests', () => {
        it("not a array", ()=> {
            expect(()=>companyAdministration.firedEmployee('Ivan', 3)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee({}, 1)).to.throw(Error, 'Invalid input');
        });
        it("not a array", ()=> {
            expect(()=>companyAdministration.firedEmployee([], 3)).to.throw('Invalid input');
        });
        it("not a array", ()=> {
            expect(()=>companyAdministration.firedEmployee(6, 3)).to.throw('Invalid input');
        });
        it("num is outside the array", ()=> {
            expect(()=>companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], 3)).to.throw('Invalid input');
        });
        it("num is outside the array", ()=> {
            expect(()=>companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], 5)).to.throw('Invalid input');
        });
        it("not a num", ()=> {
            expect(()=>companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], 'no')).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(['hi'], 0.5)).to.throw(Error, 'Invalid input');
        });
        it("minus num", ()=> {
            expect(()=>companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], -3)).to.throw('Invalid input');
        });
        it("normal input", ()=> {
            expect(companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], 1)).to.equal('Ivan, Gosho');
        });
        it("normal input", ()=> {
            expect(companyAdministration.firedEmployee(['Ivan', 'Pesho', 'Gosho'], 2)).to.equal('Ivan, Pesho');
        });
     });
     
});
