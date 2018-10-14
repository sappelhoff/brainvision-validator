var expect = require("chai").expect;
var path = require("path");
var validateBrainVision = require("../index.js").validateBrainVision;

describe("validateBrainVision", function() {

    it("returns an empty array for valid checks", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var issues = validateBrainVision(vhdrPath);
        expect(issues).to.be.an('array').that.is.empty;
    }),

    it("returns an array of issues for invalid checks", function() {
        var vhdrPath = path.join(__dirname, 'data/broken_link.vhdr');
        var issues = validateBrainVision(vhdrPath);
        expect(issues).to.be.an('array').that.is.not.empty;
    })
});
