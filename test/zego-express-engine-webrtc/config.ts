const P0 = false;
const P1 = false;
const P2 = true;
const sdkVersion = '1.12.0';

const tokenError = '';
const inputParmError = 'input parm error.';
const roomIDIllegalCharError = { code: 1002012, msg: 'room ID contains illegal characters' };
const liveroomCmdError = { code: 1000000003, msg: 'liveroom cmd error, result=1000000003' };
const roomIDTooLongError = { code: 1002013, msg: 'room ID is too long' };
const roomIDEmptyError = { code: 1002011, msg: 'room ID is empty' };

export { P0, P1, P2, sdkVersion };
export { tokenError, inputParmError, roomIDIllegalCharError, liveroomCmdError, roomIDTooLongError, roomIDEmptyError };
