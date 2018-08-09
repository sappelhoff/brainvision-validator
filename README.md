[![Build Status](https://travis-ci.org/sappelhoff/brainvision-reader.svg?branch=master)](https://travis-ci.org/sappelhoff/brainvision-reader)
[![codecov](https://codecov.io/gh/sappelhoff/brainvision-reader/branch/master/graph/badge.svg)](https://codecov.io/gh/sappelhoff/brainvision-reader)

# brainvision-reader

Work in progress. This might become a reader / validator for electroencephalography
data files in the BrainVision format by Brain Products.

# Usage

1. Clone the repository
2. `npm install`
3. `npm link`
4. go anywhere you want to use it ...
5. from there do: `npm link brainvision-reader`

and from there, it's

```node
var bv = require('brainvision-reader');

var vhdrPath = 'some/path/to/a/brainvision/file';

bv.assertBVTriplet(vhdrPath)

```

This will then return `true` or raise an error.

# Tests

Run `npm test` from the project root.
