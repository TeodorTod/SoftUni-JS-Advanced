let flowerShop = require('./flowerShop.js');
const {
    assert,
    expect
} = require('chai');

describe("Tests", ()=> {
    describe('calcPriceOfFlowers test', ()=> {
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.calcPriceOfFlowers(1, 1, 1)).to.throw("Invalid input!");
        });
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.calcPriceOfFlowers('a', 'b', 1)).to.throw("Invalid input!");
        });
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.calcPriceOfFlowers('a', 1, 'b')).to.throw("Invalid input!");
        });
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.calcPriceOfFlowers('a', 'c', 'b')).to.throw("Invalid input!");
        });
        it("valid inputs", ()=> {
            expect(flowerShop.calcPriceOfFlowers('a', 2, 1)).to.equal(`You need $2.00 to buy a!`);
        });
        it("valid inputs", ()=> {
            expect(flowerShop.calcPriceOfFlowers('a', 2, 0)).to.equal(`You need $0.00 to buy a!`);
        });
        it("valid inputs", ()=> {
            expect(flowerShop.calcPriceOfFlowers('a', 2, 2)).to.equal(`You need $4.00 to buy a!`);
        });
     });

     describe('checkFlowersAvailable test', ()=> {
        it("available", ()=> {
            expect(flowerShop.checkFlowersAvailable('Rose', ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
        });
        it("available", ()=> {
            expect(flowerShop.checkFlowersAvailable('Lily', ["Rose", "Lily", "Orchid"])).to.equal(`The Lily are available!`);
        });
        it("available", ()=> {
            expect(flowerShop.checkFlowersAvailable('Orchid', ["Rose", "Lily", "Orchid"])).to.equal(`The Orchid are available!`);
        });
        it("available", ()=> {
            expect(flowerShop.checkFlowersAvailable('abs', ["Rose", "Lily", "Orchid"])).to.equal('The abs are sold! You need to purchase more!');
        });
        it("available", ()=> {
            expect(flowerShop.checkFlowersAvailable('abs', [])).to.equal('The abs are sold! You need to purchase more!');
        });
     });

     describe('sellFlowers test', ()=> {
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.sellFlowers([], 'a')).to.throw("Invalid input!");
        });
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.sellFlowers([], [])).to.throw("Invalid input!");
        });
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.sellFlowers(1, [])).to.throw("Invalid input!");
        });
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.sellFlowers('a', [])).to.throw("Invalid input!");
        });
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.sellFlowers(['a', 'b'], -1)).to.throw("Invalid input!");
        });
        it("Invalid inputs", ()=> {
            expect(()=>flowerShop.sellFlowers(['a', 'b'], 7)).to.throw("Invalid input!");
        });
        it("Valid inputs", ()=> {
            expect(flowerShop.sellFlowers(['a', 'b', 'c'], 1)).to.equal("a / c");
        });
     });
     
});
