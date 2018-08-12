var expect = require("chai").expect;
var path = require("path");
var validator = require("../validator.js");

describe("assertIsVHDR", function(){

    it("detects wrong file extensions.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.wrong');
        var isVHDR = validator.assertIsVHDR(vhdrPath);
        expect(isVHDR).to.equal(false);
    });

    it("detects correct file extensions.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var isVHDR = validator.assertIsVHDR(vhdrPath);
        expect(isVHDR).to.equal(true);
    });
});

describe("assertBVTriplet", function(){

    it("detects correct links.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var isTriplet = validator.assertBVTriplet(vhdrPath);
        expect(isTriplet).to.equal(true);
    });

    it("detects inconsistent DataFile links in vhdr and vmrk.", function() {
        var vhdrPath = path.join(__dirname, 'data/test_broken_link.vhdr');
        var isTriplet = validator.assertBVTriplet(vhdrPath);
        expect(isTriplet).to.equal(false);
    });

    it("detects wrong links.", function() {
        var vhdrPath = path.join(__dirname, 'data/test_broken_link2.vhdr');
        var isTriplet = validator.assertBVTriplet(vhdrPath);
        expect(isTriplet).to.equal(false);
    });
});
