var validator = require("./validator.js");
var issue_dict = require("./issue_dict.js");

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
        var vhdrIssue = validator.get_issues_IsVHDR(vhdrPath);
        if (vhdrIssue) {issues.push(issue_dict[vhdrIssue]);}

        // Are the internal links functional
        var linkIssue = validator.get_issues_BVTriplet(vhdrPath);
        if (linkIssue) {issues.push(issue_dict[linkIssue]);}

        // return only unique issues
        issues = Array.from(new Set(issues));
        return issues;
    }
};
