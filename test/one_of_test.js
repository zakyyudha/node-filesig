const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');

describe('Test One Of Validation', () => {
    let validPngBuffer = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52])
    let invalidPngBuffer = Buffer.from([0x80, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x0A, 0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52])

    it('should return true when input buffer is valid', () => {
        let valid = filesig.oneOf(validPngBuffer, filesig.is3gp, filesig.isApk, filesig.isPng, filesig.isGif);
        assert.equal(valid, true);
    });

    it('should return false when input buffer is valid, but one of the proper functions supplied is not available', () => {
        let valid = filesig.oneOf(validPngBuffer, filesig.is3gp, filesig.isApk, filesig.isZip, filesig.isGif);
        assert.equal(valid, false);
    });

    it('should return false when input buffer is invalid', () => {
        let valid = filesig.oneOf(invalidPngBuffer, filesig.is3gp, filesig.isApk, filesig.isPng, filesig.isGif);
        assert.equal(valid, false);
    });
});