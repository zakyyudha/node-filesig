'use strict';

const { Buffer } = require('buffer');
const s = require('./signature');
const { ScriptRegex, SvgRegex, HtmlCommentRegex } = require("./signature");

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
  && (Buffer.compare(bufferType, buffer.subarray(0, bufferType.length)) === 0);

/**
 * Generic compare buffer with predefined multiple buffer types
 * @param buffer {Buffer}
 * @param bufferTypes {Array<Buffer>}
 * @returns {boolean}
 */
const genericMultipleCompareBuffer = (buffer, bufferTypes) => {
  if (!checkBuffer(buffer)) return false;
  return !bufferTypes.map((bufferType) => Buffer
    .compare(bufferType, buffer.subarray(0, bufferType.length)) !== 0)
    .reduce((prev, next) => prev && next);
};

const isPng = (buffer) => genericCompareBuffer(buffer, s.PNG);

const isAvif = (buffer) => genericCompareBuffer(buffer, s.AVIF);

const isBmp = (buffer) => genericCompareBuffer(buffer, s.BMP);

const isDib = (buffer) => genericMultipleCompareBuffer(buffer, [s.DIB_0, s.DIB_1]);

const isGif = (buffer) => genericCompareBuffer(buffer, s.GIF);

const isTiff = (buffer) => genericCompareBuffer(buffer, s.TIFF);

const isMp3 = (buffer) => genericCompareBuffer(buffer, s.MP3);

const isMpg = (buffer) => genericMultipleCompareBuffer(buffer, [s.MPG_0, s.MPG_1]);

const isFlv = (buffer) => genericCompareBuffer(buffer, s.FLV);

const isApk = (buffer) => genericCompareBuffer(buffer, s.APK);

const isMsOffice = (buffer) => genericCompareBuffer(buffer, s.MS_OFFICE);

const isJar = (buffer) => genericCompareBuffer(buffer, s.JAR);

const isSwf = (buffer) => genericMultipleCompareBuffer(buffer, [s.SWF_0, s.SWF_1]);

const isJpeg = (buffer) => genericCompareBuffer(buffer, s.JPEG);

const isMp4 = (buffer) => {
  if (!checkBuffer(buffer)) return false;

  if (Buffer.compare(s.MP4_0.subarray(4, 8), buffer.subarray(4, 8)) === 0) {
    return true;
  }

  return !(Buffer.compare(s.MPG_0.subarray(4, 8), buffer.subarray(4, 8)) !== 0
    && Buffer.compare(s.MPG_1.subarray(4, 8), buffer.subarray(4, 8)) !== 0);
};

const is3gp = (buffer) => genericMultipleCompareBuffer(
  buffer,
  [s.THREE_GP_0, s.THREE_GP_1, s.THREE_GP_2],
);

const isMkv = (buffer) => genericCompareBuffer(buffer, s.MKV);

const isPdf = (buffer) => genericCompareBuffer(buffer, s.PDF);

const isRar = (buffer) => genericCompareBuffer(buffer, s.RAR);

const isGzip = (buffer) => genericCompareBuffer(buffer, s.GZIP);

const isZip = (buffer) => genericMultipleCompareBuffer(buffer, [s.ZIP_0, s.ZIP_1, s.ZIP_2]);

const isWebp = (buffer) => genericCompareBuffer(buffer, s.WEBP);

const isSvg = (buffer) => {
  const buffStr = buffer.toString();
  const withoutComments = buffStr.replace(HtmlCommentRegex, '');
  return genericCompareBuffer(buffer, s.SVG) && !ScriptRegex.test(withoutComments);
}

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
