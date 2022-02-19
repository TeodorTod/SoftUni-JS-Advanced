let { expect } = require("chai");
let { Repository } = require("./solution.js");

describe("Repository", function () {
    describe("Initialization", function () {
        it("Shoud add props property on init", function () {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            expect(repository).to.have.property('props');
            expect(repository.props).to.deep.equal(properties);
        });

        it ('Should have property data on init', function() {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let repository = new Repository(properties);

            expect(repository).to.have.property('data');
            expect(typeof repository.data).is.equal('object');
            expect(repository.data).instanceOf(Map);
        });
    });
    
});
