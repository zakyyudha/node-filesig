const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');
const signature = require('../lib/signature');

describe('Test Generic Compare Buffer Validation', () => {
  const validSampleBuffer = Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52]); // Mock using png data
  const invalidSampleBuffer = Buffer.from([]);

  it('should return false when input buffer is invalid', () => {
    const valid = filesig.genericCompareBuffer(invalidSampleBuffer, signature.PNG);
    assert.equal(valid, false);
  });

  it('should return true when input buffer is valid', () => {
    const valid = filesig.genericCompareBuffer(validSampleBuffer, signature.PNG);
    assert.equal(valid, true);
  });
});
