const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');

describe('Test TIFF Validation', () => {
  const validTiffBuffer = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0xD8, 0x37, 0x11, 0x00, 0xD7, 0x55, 0x02, 0xFF, 0xCB, 0x4E, 0x03, 0xFF]);
  const invalidTiffBuffer = Buffer.from([0x47, 0x49, 0x2A, 0x00, 0xD8, 0x37, 0x11, 0x00, 0xD7, 0x55, 0x02, 0xFF, 0xCB, 0x4E, 0x03, 0xFF]);

  it('should return false when input buffer is invalid TIFF', () => {
    const valid = filesig.isTiff(invalidTiffBuffer);
    assert.equal(valid, false);
  });

  it('should return true when input buffer is valid TIFF', () => {
    const valid = filesig.isTiff(validTiffBuffer);
    assert.equal(valid, true);
  });
});
