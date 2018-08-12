var expect = require("chai").expect;
var path = require("path");
var validator = require("../validator.js");

describe("suiteValidator", function(){

    it("detects wrong file extensions.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.wrong');
        var isVHDR = validator.assertIsVHDR(vhdrPath);
        expect(isVHDR).to.equal(false);

        vhdrPath = path.join(__dirname, 'data/test.vhdr');
        isVHDR = validator.assertIsVHDR(vhdrPath);
        expect(isVHDR).to.equal(true);
    });

    it("will return true.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var foundTriplet = validator.assertBVTriplet(vhdrPath);
        expect(foundTriplet).to.equal(true);
    });
});
