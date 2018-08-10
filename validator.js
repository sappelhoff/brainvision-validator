// All functions to validate a BrainVision file triplet
var fs = require("fs");
var path = require("path");

module.exports = {

    assertBVTriplet: function(vhdrPath) {
        // read the contents of the vhdr file
        var vhdrContent = fs.readFileSync(vhdrPath, 'utf8');

        // Find the links to the data and marker files
        var eegRe = new RegExp('DataFile=(.*\.eeg)');
        var vmrkRe = new RegExp('MarkerFile=(.*\.vmrk)');

        var eegBaseName = vhdrContent.match(eegRe)[1];
        var vmrkBaseName = vhdrContent.match(vmrkRe)[1];

        // get the full paths to eeg and marker files
        var basePath = path.dirname(vhdrPath);
        var eegPath = path.join(basePath, eegBaseName);
        var vmrkPath = path.join(basePath, vmrkBaseName);

        // check that they exists
        var allGood =  fs.existsSync(eegPath) && fs.existsSync(vmrkPath);
        if (!allGood) {throw new Error('File triplet pointers are broken.');}

        // finally, check that marker file points to correct data file
        var vmrkContent = fs.readFileSync(vmrkPath, 'utf8');

        if (eegBaseName == vmrkContent.match(eegRe)[1]) {
            return allGood;
        } else {
            throw new Error ('File triplets are present but link to data from .vmrk is broken.');
        }
    }
};
