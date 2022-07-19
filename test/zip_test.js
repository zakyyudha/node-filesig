const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');

describe('Test ZIP Validation', () => {
  const validZipBuffer = Buffer.from([0x50, 0x4B, 0x03, 0x04, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x88, 0xB4, 0x5E, 0x4B, 0x00, 0x00]);
  const invalidZipBuffer = Buffer.from([0x52, 0x4B, 0x03, 0x04, 0x0A, 0x00, 0x00, 0x00, 0x00, 0x00, 0x88, 0xB4, 0x5E, 0x4B, 0x00, 0x00]);

  it('should return false when input buffer is invalid ZIP', () => {
    const valid = filesig.isZip(invalidZipBuffer);
    assert.equal(valid, false);
  });

  it('should return true when input buffer is valid ZIP', () => {
    const valid = filesig.isZip(validZipBuffer);
    assert.equal(valid, true);
  });
});
