const assert = require('assert');
const { Buffer } = require('buffer');
const filesig = require('../index');
const fs = require('fs')

describe('Test MP4 Validation', () => {
  it('should return false when input buffer is invalid MP4', () => {

  });
  it('should return true when input buffer is valid MP4', () => {
    fs.readFile('./tmp/sample-0.mp4', (error, validMp4Buffer) => {
      if (error) throw error;
      const valid = filesig.isMp4(validMp4Buffer);
      assert.equal(valid, true);
    })
  });
});
