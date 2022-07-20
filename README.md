### Nodejs File Signature Validator

small library to validate Files by reading each magic number from a file

[![filesig Node CI](https://github.com/telkomdev/node-filesig/actions/workflows/ci.yml/badge.svg)](https://github.com/telkomdev/node-filesig/actions/workflows/ci.yml)

#### Requirements
- Node version 12.x or higher

#### Install

```shell
$ npm install filesig
```

#### Usage
Simple
```javascript
const filesig = require('filesig');
const fs = require('fs');

fs.readFile('/home/john/document.pdf', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(filesig.isPdf(data));
    }
});

```

One of
```javascript
const filesig = require('filesig');
const fs = require('fs');

fs.readFile('/home/john/Capture.PNG', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let valid = filesig.oneOf(data, filesig.is3gp, filesig.isJpeg, filesig.isPng);
        console.log(valid);
    }
});
```
