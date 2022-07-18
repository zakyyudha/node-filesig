const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');

describe('Test WEBP Validation', () => {
  const validWebpBuffer = Buffer.from([0x52, 0x49, 0x46, 0x46, 0x12, 0x18, 0x14, 0x32, 0x45, 0x19, 0x21, 0x18, 0x39, 0x43, 0x33, 0x22]);
  const invalidWebpBuffer = Buffer.from([0x58, 0x49, 0x46, 0x46, 0x12, 0x18, 0x14, 0x32, 0x45, 0x19, 0x21, 0x18, 0x39, 0x43, 0x33, 0x22]);

  it('should return false when input buffer is invalid WEBP', () => {
    const valid = filesig.isWebp(invalidWebpBuffer);
    assert.equal(valid, false);
  });

  it('should return true when input buffer is valid WEBP', () => {
    const valid = filesig.isWebp(validWebpBuffer);
    assert.equal(valid, true);
  });
});
