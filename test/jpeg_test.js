const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');

describe('Test JPEG Validation', () => {
  const validJpegBuffer = Buffer.from([0xFF, 0xD8, 0x46, 0x46, 0x12, 0x18, 0x14, 0x32, 0x45, 0x19, 0x21, 0x18, 0x39, 0x43, 0x33, 0x22]);
  const invalidJpegBuffer = Buffer.from([0xFE, 0xD8, 0x46, 0x46, 0x12, 0x18, 0x14, 0x32, 0x45, 0x19, 0x21, 0x18, 0x39, 0x43, 0xFF, 0xD8]);

  it('should return false when input buffer is invalid JPEG', () => {
    const valid = filesig.isJpeg(invalidJpegBuffer);
    assert.equal(valid, false);
  });

  it('should return true when input buffer is valid JPEG', () => {
    const valid = filesig.isJpeg(validJpegBuffer);
    assert.equal(valid, true);
  });
});
