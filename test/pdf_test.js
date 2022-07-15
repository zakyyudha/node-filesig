const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');

describe('Test PDF Validation', () => {
    let validPdfBuffer = Buffer.from('%PDF-1.3');
    let invalidPdfBuffer = Buffer.from('&*PDF-1.3');

    it('should return true when pdf input buffer is valid', () => {
        let valid = filesig.isPdf(validPdfBuffer);
        assert.equal(valid, true);
    });

    it('should return false when pdf input buffer is invalid', () => {
        let valid = filesig.isPdf(invalidPdfBuffer);
        assert.equal(valid, false);
    });
});