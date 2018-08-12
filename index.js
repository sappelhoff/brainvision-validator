var validator = require("./validator.js");

// Export the BrainVision validation function: validateBrainVision
module.exports = {

    /**
     * validateBrainVision - Take a BrainVision file and collect all issues
     *
     * Step by step, go through the check functions in validator.js and upon
     * encountering a false, push a new issues depending on the current
     * function. In the end, return an array of issues, that is empty if the
     * BrainVision file was fine.
     *
     * @param  {type} vhdrPath path to the file to be tested
     * @return {array} A list of issues with the BrainVision file.
     */
    validateBrainVision: function(vhdrPath) {
        var issues = [];

        // Does it have the proper extension
        var isVHDR = validator.assertIsVHDR(vhdrPath);
        if (!isVHDR) {issues.push('Wrong file extension. Header file should end with .vhdr');}

        // Are the internal links functional
        var linksAreGood = validator.assertBVTriplet(vhdrPath);
        if (!linksAreGood) {issues.push('Internal links are broken. Check DataFile and MarkerFile fields in .vhdr and .vmrk ');}

        return issues;
    }
};
