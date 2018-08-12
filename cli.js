// Import the validator
// API: Always accept a single input: a .vhdr header file
var colors = require('colors');
var validateBrainVision = require('./index.js').validateBrainVision;

module.exports = function(vhdrPath, options) {
    var issues = validateBrainVision(vhdrPath);
    if (issues.length == 0){

        console.log('BrainVision file triplet is valid.'.green);

    } else if (issues.length > 0 && options.verbose) {

        console.log('BrainVision file triplet is invalid!'.red);
        for (i = 0; i < issues.length; i++) {
            console.log(issues[i].yellow);
            console.log('');
        }

    } else {

        console.log('BrainVision file triplet is invalid!'.red);
        console.log('Use the --verbose flag to print out the issues.'.yellow);
    }
};
