const assert = require('assert');
const fs = require('fs');
const filesig = require('../index');

describe('Test ZIP Validation', () => {
  it('should return false when input buffer is empty', () => {
    const emptySampleBuffer = Buffer.from([]);
    const valid = filesig.isZip(emptySampleBuffer);
    assert.equal(valid, false);
  });

  it('should return false when input buffer is invalid ZIP', () => {
    fs.readFileSync('./tmp/sample-0.rar', (error, invalidZipBuffer) => {
      if (error) throw error;
      const valid = filesig.isZip(invalidZipBuffer);
      assert.equal(valid, false);
    });
  });

  it('should return true when input buffer is valid ZIP', () => {
    fs.readFileSync('./tmp/sample-0.zip', (error, validZipBuffer) => {
      if (error) throw error;
      const valid = filesig.isZip(validZipBuffer);
      assert.equal(valid, true);
    });
  });
});
