'use strict';

const { Buffer } = require('buffer');
const s = require('./signature');

/**
 * Check if buffer is one of the predefined file types function
 * @param buffer {Buffer}
 * @param fns {Array<function>}
 * @returns {boolean|Error}
 */
const oneOf = (buffer, ...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('second and next parameter should be function');
    }

    const valid = fn(buffer);
    if (valid) {
      return true;
    }
  }

  return false;
};

/**
 * Generic buffer check
 * @param buffer {Buffer}
 * @returns {boolean|Error}
 */
const checkBuffer = (buffer) => {
  if (!Buffer.isBuffer(buffer)) {
    throw new Error('second param should be buffer');
  }

  return buffer.length > 0;
};

/**
 * Generic compare buffer fn wrapper
 * @param buffer {Buffer}
 * @param bufferType {Buffer}
 * @returns {boolean|Error}
 */
const genericCompareBuffer = (buffer, bufferType) => checkBuffer(buffer)
  && (Buffer.compare(bufferType, buffer.subarray(0, bufferType.length)) == 0);

const isPng = (buffer) => genericCompareBuffer(buffer, s.PNG);

const isAvif = (buffer) => genericCompareBuffer(buffer, s.AVIF);

const isBmp = (buffer) => genericCompareBuffer(buffer, s.BMP);

const isDib = (buffer) => genericCompareBuffer(buffer, s.DIB);

const isGif = (buffer) => genericCompareBuffer(buffer, s.GIF);

const isTiff = (buffer) => genericCompareBuffer(buffer, s.TIFF);

const isMp3 = (buffer) => genericCompareBuffer(buffer, s.MP3);

const isMpg = (buffer) => {
  if (!checkBuffer(buffer)) return false;

  if (Buffer.compare(s.MPG_0, buffer.subarray(0, s.MPG_0.length)) != 0
        && Buffer.compare(s.MPG_1, buffer.subarray(0, s.MPG_1.length)) != 0) {
    return false;
  }

  return true;
};

const isFlv = (buffer) => genericCompareBuffer(buffer, s.FLV);

const isApk = (buffer) => genericCompareBuffer(buffer, s.APK);

const isMsOffice = (buffer) => genericCompareBuffer(buffer, s.MS_OFFICE);

const isJar = (buffer) => genericCompareBuffer(buffer, s.JAR);

const isSwf = (buffer) => genericCompareBuffer(buffer, s.SWF);

const isJpeg = (buffer) => genericCompareBuffer(buffer, s.JPEG);

const isMp4 = (buffer) => {
  if (!checkBuffer(buffer)) return false;

  if (Buffer.compare(s.MP4_0.subarray(4, 8), buffer.subarray(4, 8)) == 0) {
    return true;
  }

  if (Buffer.compare(s.MPG_0.subarray(4, 8), buffer.subarray(4, 8)) != 0
        && Buffer.compare(s.MPG_1.subarray(4, 8), buffer.subarray(4, 8)) != 0) {
    return false;
  }

  return true;
};

const is3gp = (buffer) => {
  if (!checkBuffer(buffer)) return false;

  if (Buffer.compare(s.THREE_GP_0, buffer.subarray(0, s.THREE_GP_0.length)) != 0
        && Buffer.compare(s.THREE_GP_1, buffer.subarray(0, s.THREE_GP_1.length)) != 0
        && Buffer.compare(s.THREE_GP_2, buffer.subarray(0, s.THREE_GP_2.length)) != 0) {
    return false;
  }

  return true;
};

const isMkv = (buffer) => genericCompareBuffer(buffer, s.MKV);

const isPdf = (buffer) => genericCompareBuffer(buffer, s.PDF);

const isRar = (buffer) => genericCompareBuffer(buffer, s.RAR);

const isGzip = (buffer) => genericCompareBuffer(buffer, s.GZIP);

const isZip = (buffer) => {
  if (!checkBuffer(buffer)) return false;

  if (Buffer.compare(s.ZIP_0, buffer.subarray(0, s.ZIP_0.length)) != 0
        && Buffer.compare(s.ZIP_1, buffer.subarray(0, s.ZIP_1.length)) != 0
        && Buffer.compare(s.ZIP_2, buffer.subarray(0, s.ZIP_2.length)) != 0) {
    return false;
  }

  return true;
};

const isWebp = (buffer) => genericCompareBuffer(buffer, s.WEBP);

const isSvg = (buffer) => genericCompareBuffer(buffer, s.SVG);

module.exports = {
  oneOf,
  isPng,
  isAvif,
  isBmp,
  isDib,
  isGif,
  isTiff,
  isMp3,
  isMpg,
  isFlv,
  isApk,
  isMsOffice,
  isJar,
  isSwf,
  isJpeg,
  isMp4,
  is3gp,
  isMkv,
  isPdf,
  isRar,
  isGzip,
  isZip,
  isWebp,
  isSvg,
};
