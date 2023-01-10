/**
 * Check if buffer is one of the predefined file types function
 * @param buffer {Buffer}
 * @param fns {Array<function>}
 * @returns {boolean|Error}
 */
export function oneOf(buffer: Buffer, ...fns: Array<Function>): boolean | Error;
export function isPng(buffer: any): boolean | Error;
export function isAvif(buffer: any): boolean | Error;
export function isBmp(buffer: any): boolean | Error;
export function isDib(buffer: any): boolean;
export function isGif(buffer: any): boolean | Error;
export function isTiff(buffer: any): boolean | Error;
export function isMp3(buffer: any): boolean | Error;
export function isMpg(buffer: any): boolean;
export function isFlv(buffer: any): boolean | Error;
export function isApk(buffer: any): boolean | Error;
export function isMsOffice(buffer: any): boolean | Error;
export function isJar(buffer: any): boolean | Error;
export function isSwf(buffer: any): boolean;
export function isJpeg(buffer: any): boolean | Error;
export function isMp4(buffer: any): boolean;
export function is3gp(buffer: any): boolean;
export function isMkv(buffer: any): boolean | Error;
export function isPdf(buffer: any): boolean | Error;
export function isRar(buffer: any): boolean | Error;
export function isGzip(buffer: any): boolean | Error;
export function isZip(buffer: any): boolean;
export function isWebp(buffer: any): boolean | Error;
export function isSvg(buffer: any): boolean | Error;
