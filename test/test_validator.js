var expect = require("chai").expect;
var path = require("path");
var validator = require("../validator.js");

describe("get_issues_IsVHDR", function(){

    it("detects wrong file extensions", function() {
        var vhdrPath = path.join(__dirname, 'data/test.wrong');
        var vhdrIssue = validator.get_issues_IsVHDR(vhdrPath);
        expect(vhdrIssue).to.equal(1);
    });

    it("detects correct file extensions", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var vhdrIssue = validator.get_issues_IsVHDR(vhdrPath);
        expect(vhdrIssue).to.equal(null);
    });
});

describe("get_issues_BVTriplet", function(){

    it("returns early if an incorrect file is being checked", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vmrk'); // note the extension
        var linkIssue = validator.get_issues_BVTriplet(vhdrPath);
        expect(linkIssue).to.equal(1);
    });

    it("detects correct links", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var linkIssue = validator.get_issues_BVTriplet(vhdrPath);
        expect(linkIssue).to.equal(null);
    });

    it("detects inconsistent DataFile links in vhdr and vmrk", function() {
        var vhdrPath = path.join(__dirname, 'data/broken_link.vhdr');
        var linkIssue = validator.get_issues_BVTriplet(vhdrPath);
        expect(linkIssue).to.equal(2);
    });

    it("detects wrong links", function() {
        var vhdrPath = path.join(__dirname, 'data/broken_link2.vhdr');
        var linkIssue = validator.get_issues_BVTriplet(vhdrPath);
        expect(linkIssue).to.equal(2);
    });
});
