var expect = require("chai").expect;
var my_main_fun = require("../index.js");

describe("Simple Main Dummy", function(){
    it("will just return 1.", function() {
        var res = my_main_fun();

        expect(res).to.equal(1);
    });
});
