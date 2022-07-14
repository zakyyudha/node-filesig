'use strict';

const { Buffer } = require('node:buffer');
const s = require('./signature');

const oneOf = (buffer, ...fns) => {
    for(const fn of fns) {
        if (typeof fn !== 'function') {
            throw new Error('second and next parameter should be function')
        }

        let valid = fn(buffer);
        if (valid) {
            return true;
        }
    }

    return false;
};

const isPng = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.PNG, buffer.subarray(0, s.PNG.length)) != 0) {
        return false;
    }

    return true;
};

const isAvif = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.AVIF, buffer.subarray(0, s.AVIF.length)) != 0) {
        return false;
    }

    return true;
};

const isBmp = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.BMP, buffer.subarray(0, s.BMP.length)) != 0) {
        return false;
    }

    return true;
};

const isDib = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.DIB, buffer.subarray(0, s.DIB.length)) != 0) {
        return false;
    }

    return true;
};

const isGif = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.GIF, buffer.subarray(0, s.GIF.length)) != 0) {
        return false;
    }

    return true;
};

const isTiff = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.TIFF, buffer.subarray(0, s.TIFF.length)) != 0) {
        return false;
    }

    return true;
};

const isMp3 = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.MP3, buffer.subarray(0, s.MP3.length)) != 0) {
        return false;
    }

    return true;
};

const isMpg = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.MPG_0, buffer.subarray(0, s.MPG_0.length)) != 0 && 
        Buffer.compare(s.MPG_1, buffer.subarray(0, s.MPG_1.length)) != 0) {
        return false;
    }

    return true;
};

const isFlv = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.FLV, buffer.subarray(0, s.FLV.length)) != 0) {
        return false;
    }

    return true;
};

const isApk = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.APK, buffer.subarray(0, s.APK.length)) != 0) {
        return false;
    }

    return true;
};

const isMsOffice = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.MS_OFFICE, buffer.subarray(0, s.MS_OFFICE.length)) != 0) {
        return false;
    }

    return true;
};

const isJar = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.JAR, buffer.subarray(0, s.JAR.length)) != 0) {
        return false;
    }

    return true;
};

const isSwf = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.SWF, buffer.subarray(0, s.SWF.length)) != 0) {
        return false;
    }

    return true;
};

const isJpeg = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.JPEG, buffer.subarray(0, s.JPEG.length)) != 0) {
        return false;
    }

    return true;
};

const isMp4 = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.MP4_0.subarray(4, 8), buffer.subarray(4, 8)) == 0) {
        return true;
    }

    if (Buffer.compare(s.MPG_0.subarray(4, 8), buffer.subarray(4, 8)) != 0 && 
        Buffer.compare(s.MPG_1.subarray(4, 8), buffer.subarray(4, 8)) != 0) {
        return false;
    }

    return true;
};

const is3gp = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.THREE_GP_0, buffer.subarray(0, s.THREE_GP_0.length)) != 0 && 
        Buffer.compare(s.THREE_GP_1, buffer.subarray(0, s.THREE_GP_1.length)) != 0 && 
        Buffer.compare(s.THREE_GP_2, buffer.subarray(0, s.THREE_GP_2.length)) != 0) {
        return false;
    }

    return true;
};

const isMkv = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.MKV, buffer.subarray(0, s.MKV.length)) != 0) {
        return false;
    }

    return true;
};

const isPdf = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.PDF, buffer.subarray(0, s.PDF.length)) != 0) {
        return false;
    }

    return true;
};

const isRar = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.RAR, buffer.subarray(0, s.RAR.length)) != 0) {
        return false;
    }

    return true;
};

const isGzip = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.GZIP, buffer.subarray(0, s.GZIP.length)) != 0) {
        return false;
    }

    return true;
};

const isZip = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.ZIP_0, buffer.subarray(0, s.ZIP_0.length)) != 0 && 
        Buffer.compare(s.ZIP_1, buffer.subarray(0, s.ZIP_1.length)) != 0 && 
        Buffer.compare(s.ZIP_2, buffer.subarray(0, s.ZIP_2.length)) != 0) {
        return false;
    }

    return true;
};

const isWebp = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }

    if (Buffer.compare(s.WEBP, buffer.subarray(0, s.WEBP.length)) != 0) {
        return false;
    }

    return true;
};

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
};