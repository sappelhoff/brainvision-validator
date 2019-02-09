/**
 * issue_dict
 *
 * Dictionary of potential issues with the BrainVision files.
 */
module.exports = {
    1: "Wrong file extension. Header file should end with .vhdr",
    2: "Internal links are broken for files (.eeg, .vhdr, .vmrk)." +
       " Check DataFile and MarkerFile fields in .vhdr and .vmrk",
};
