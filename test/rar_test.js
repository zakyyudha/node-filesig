const assert = require('assert');
const filesig = require('../index');
const fs = require("fs");

describe('Test RAR Validation', () => {
  it('should return false when input buffer is invalid RAR', () => {
    fs.readFile('./tmp/sample-0.tgz', (error, invalidRarBuffer) => {
      if (error) throw error;
      const valid = filesig.isRar(invalidRarBuffer);
      assert.equal(valid, false);
    });
  });

  it('should return true when input buffer is valid RAR', () => {
    fs.readFile('./tmp/sample-0.rar', (error, validRarBuffer) => {
      if (error) throw error;
      const valid = filesig.isRar(validRarBuffer);
      assert.equal(valid, true);
    });
  });
});
