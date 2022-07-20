const assert = require('assert');
const filesig = require('../index');

describe('Test Buffer Validation', () => {
  const emptyBufferSample = ''; // mock using empty string
  it('should throw error if buffer is invalid', () => {
    const valid = () => {
      filesig.isJpeg(emptyBufferSample);
    };
    assert.throws(valid, Error);
  });
});
