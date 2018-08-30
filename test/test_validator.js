var expect = require("chai").expect;
var path = require("path");
var validator = require("../validator.js");

describe("assertIsVHDR", function(){

    it("detects wrong file extensions.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.wrong');
        var vhdrCheck = validator.assertIsVHDR(vhdrPath);
        expect(vhdrCheck).to.equal(1);
    });

    it("detects correct file extensions.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var vhdrCheck = validator.assertIsVHDR(vhdrPath);
        expect(vhdrCheck).to.equal(null);
    });
});

describe("assertBVTriplet", function(){

    it("detects correct links.", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var linkCheck = validator.assertBVTriplet(vhdrPath);
        expect(linkCheck).to.equal(null);
    });

    it("detects inconsistent DataFile links in vhdr and vmrk.", function() {
        var vhdrPath = path.join(__dirname, 'data/test_broken_link.vhdr');
        var linkCheck = validator.assertBVTriplet(vhdrPath);
        expect(linkCheck).to.equal(2);
    });

    it("detects wrong links.", function() {
        var vhdrPath = path.join(__dirname, 'data/test_broken_link2.vhdr');
        var linkCheck = validator.assertBVTriplet(vhdrPath);
        expect(linkCheck).to.equal(2);
    });
});
