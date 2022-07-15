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

/**
 * Generic buffer check
 * @param buffer {Buffer}
 * @returns {boolean|Error}
 */
const checkBuffer = (buffer) => {
    if (!Buffer.isBuffer(buffer)) {
        throw new Error('second param should be buffer');
    }

    if (buffer.length <= 0) {
        return false;
    }
}

/**
 * Compare generic buffer
 * @param buffer {Buffer}
 * @param bufferType {Buffer}
 * @returns {boolean|Error}
 */
const compareGenericBuffer = (buffer, bufferType) => {
    checkBuffer(buffer);
    return Buffer.compare(bufferType, buffer.subarray(0, bufferType.length)) == 0;
}

const isPng = (buffer) => {
    compareGenericBuffer(buffer, s.PNG);
};

const isAvif = (buffer) => {
    compareGenericBuffer(buffer, s.AVIF);
};

const isBmp = (buffer) => {
    compareGenericBuffer(buffer, s.BMP);
};

const isDib = (buffer) => {
    compareGenericBuffer(buffer, s.DIB);
};

const isGif = (buffer) => {
    compareGenericBuffer(buffer, s.GIF);
};

const isTiff = (buffer) => {
    compareGenericBuffer(buffer, s.TIFF);
};

const isMp3 = (buffer) => {
    compareGenericBuffer(buffer, s.MP3);
};

const isMpg = (buffer) => {
    checkBuffer(buffer);

    if (Buffer.compare(s.MPG_0, buffer.subarray(0, s.MPG_0.length)) != 0 &&
        Buffer.compare(s.MPG_1, buffer.subarray(0, s.MPG_1.length)) != 0) {
        return false;
    }

    return true;
};

const isFlv = (buffer) => {
    compareGenericBuffer(buffer, s.FLV);
};

const isApk = (buffer) => {
    compareGenericBuffer(buffer, s.APK);
};

const isMsOffice = (buffer) => {
    compareGenericBuffer(buffer, s.MS_OFFICE);
};

const isJar = (buffer) => {
    compareGenericBuffer(buffer, s.JAR);
};

const isSwf = (buffer) => {
    compareGenericBuffer(buffer, s.SWF);
};

const isJpeg = (buffer) => {
    compareGenericBuffer(buffer, s.JPEG);
};

const isMp4 = (buffer) => {
    checkBuffer(buffer);

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
    checkBuffer(buffer);

    if (Buffer.compare(s.THREE_GP_0, buffer.subarray(0, s.THREE_GP_0.length)) != 0 &&
        Buffer.compare(s.THREE_GP_1, buffer.subarray(0, s.THREE_GP_1.length)) != 0 &&
        Buffer.compare(s.THREE_GP_2, buffer.subarray(0, s.THREE_GP_2.length)) != 0) {
        return false;
    }

    return true;
};

const isMkv = (buffer) => {
    compareGenericBuffer(buffer, s.MKV);
};

const isPdf = (buffer) => {
    compareGenericBuffer(buffer, s.PDF);
};

const isRar = (buffer) => {
    compareGenericBuffer(buffer, s.RAR);
};

const isGzip = (buffer) => {
    compareGenericBuffer(buffer, s.GZIP);
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
    compareGenericBuffer(buffer, s.WEBP);
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
