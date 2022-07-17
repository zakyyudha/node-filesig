const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');

describe('Test Check Buffer Validation', () => {
  const validSampleBuffer = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52]);
  const emptySampleBuffer = Buffer.from([]);
  const invalidSampleBuffer = ""; // Mock using empty string value

  it('should throw error when input buffer is invalid', () => {
    let valid = () => {
      filesig.checkBuffer(invalidSampleBuffer);
    }
    assert.throws(valid, Error, 'second param should be buffer');
  });

  it('should return false when input buffer is empty', () => {
    const valid = filesig.checkBuffer(emptySampleBuffer);
    assert.equal(valid, false);
  });

  it('should return true when input buffer is valid', () => {
    const valid = filesig.checkBuffer(validSampleBuffer);
    assert.equal(valid, true);
  });
});
