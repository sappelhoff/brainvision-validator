var expect = require("chai").expect;
var path = require("path");
var utils = require("../utils.js");

describe("_get_file_triplet", function(){

    it("throws an error for wrong file extenstions", function() {
        var vhdrPath = path.join(__dirname, 'data/test.wrong');
        expect(() => utils._get_file_triplet(vhdrPath)).to.throw("extension");
    });

    it("throws an error for missing file links", function() {
        var vhdrPath = path.join(__dirname, 'data/empty.vhdr');
        expect(() => utils._get_file_triplet(vhdrPath)).to.throw("find links");
    });

    it("returns an object containing string paths", function() {
        var vhdrPath = path.join(__dirname, 'data/test.vhdr');
        var bvPaths = utils._get_file_triplet(vhdrPath);
        expect(bvPaths).to.have.all.keys('vhdr', 'vmrk', 'eeg');
    });
});
