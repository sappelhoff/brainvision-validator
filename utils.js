// BrainVision utility functions
var fs = require("fs");
var path = require("path");
var vsprintf = require("sprintf-js").vsprintf;

module.exports = {

    /**
     * _get_file_triplet - get the paths to each file of this triplet
     *
     * @param  {string} vhdrPath path to the file to work on
     * @return {(object} pathsBV the issue key or null, if no issue
     */
    _get_file_triplet: function(vhdrPath){

        // make sure we are working on a header file
        ext = path.extname(vhdrPath);
        if (ext != '.vhdr') {
            throw new Error (vsprintf("Expected file with extension '.vhdr' " +
                                      "file but got '%s'", [ext]));
        }

        // read the contents of the vhdr file
        var vhdrContent = fs.readFileSync(vhdrPath, 'utf8');

        // find the links to the data and marker files
        var basePath = path.resolve(path.dirname(vhdrPath));
        var eegRe = new RegExp('DataFile=(.*\.eeg)');
        var vmrkRe = new RegExp('MarkerFile=(.*\.vmrk)');

        if (vhdrContent.match(eegRe) && vhdrContent.match(vmrkRe)) {
            var eegBaseName = vhdrContent.match(eegRe)[1];
            var eegPath = path.join(basePath, eegBaseName);
            var vmrkBaseName = vhdrContent.match(vmrkRe)[1];
            var vmrkPath = path.join(basePath, vmrkBaseName);
        }
        else {
            throw new Error (vsprintf("Couldn't find links to 'DataFile' " +
                             "and/or 'MarkerFile' in %s", [ext]))
        }

        // return all the paths as an object
        brainVisionPaths = {}
        brainVisionPaths.vhdr = path.join(basePath, path.basename(vhdrPath))
        brainVisionPaths.vmrk = vmrkPath
        brainVisionPaths.eeg = eegPath
        return brainVisionPaths;
    },

}
