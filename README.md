# BrainVision-Validator

> TL;DR: This npm module allows for validation of BrainVision EEG files.

BrainVision is the name of a file format commonly used for storing
electroencephalography (EEG) data. Originally, it was put forward by the
company [Brain Products](https://www.brainproducts.com/), however the
simplicity of the format has allowed for a diversity of tools reading from and
writing to the format.

The format consists of three separate files:
1. A text header file (`.vhdr`) containing meta data
2. A text marker file (`.vmrk`) containing information about events in the data
3. A binary data file (`.eeg`) containing the voltage values of the EEG

Both text files are based on the
[Microsoft Windows INI format](https://en.wikipedia.org/wiki/INI_file)
consisting of:
- sections marked as `[square brackets]`
- comments marked as `; comment`
- key-value pairs marked as `key=value`

A documentation for core BrainVision file format is provided by Brain Products.
You can [view the specification here](https://www.brainproducts.com/productdetails.php?id=21&tab=5).

Having three separate files for each EEG recording means that the single files
have internal pointers to each other's locations. See this example:

```INI
Brain Vision Data Exchange Header File Version 1.0
; Data synthesized by MNE-BIDS

[Common Infos]
DataFile=test.eeg
MarkerFile=test.vmrk

...
```

The BrainVision-Validator checks among other things, whether these internal
pointers are functional.

# Usage

#### In the command line
`npm install -g brainvision-validator`

`brainvision-validator some/path/to/a/brainvision/headerfile.vhdr`

or check the help using the help option: `brainvision-validator -h`

#### In a script
`npm install brainvision-validator`


```js
var validateBrainVision = require('brainvision-validator').validateBrainVision;

var vhdrPath = 'some/path/to/a/brainvision/headerfile.vhdr';

// get an array of issues ... issues.length==0 if there were none.
var issues = validateBrainVision(vhdrPath)

```

# Tests

Run `npm install` and then `npm test` from the project root.
