// Import the validator
// API: Always accept a single input: a .vhdr header file
var bvv = require('./index.js');

module.exports = function(vhdrPath) {
    console.log(bvv.assertBVTriplet(vhdrPath));
};
