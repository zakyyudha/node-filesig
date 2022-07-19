const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');

describe('Test BMP Validation', () => {
  const validBmpBuffer = Buffer.from([0x42, 0x4D, 0x8A, 0x7B, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x8A, 0x00, 0x00, 0x00, 0x7C, 0x00]);
  const invalidBmpBuffer = Buffer.from([0x41, 0x4D, 0x8A, 0x7B, 0x0C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x8A, 0x00, 0x00, 0x00, 0x7C, 0x00]);

  it('should return false when input buffer is invalid BMP', () => {
    const valid = filesig.isBmp(invalidBmpBuffer);
    assert.equal(valid, false);
  });

  it('should return true when input buffer is valid BMP', () => {
    const valid = filesig.isBmp(validBmpBuffer);
    assert.equal(valid, true);
  });
});
