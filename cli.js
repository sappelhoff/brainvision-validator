// Import the validator
// API: Always accept a single input: a .vhdr header file
var bvv = require('./index.js');

module.exports = function(vhdrPath, options) {
    console.log(!options.verbose);
    console.log(bvv.assertBVTriplet(vhdrPath));
};
