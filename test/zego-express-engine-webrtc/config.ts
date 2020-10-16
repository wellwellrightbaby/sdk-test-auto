const P0 = true;
const P1 = false;
const P2 = false;
const sdkVersion = '1.14.0';

const liveroomCmdError = { code: 1000000003, msg: 'liveroom cmd error, code:1000000003' };

const inputParmError = { code: 1100001, msg: 'input parm error.' };

const userIDEmptyError = { code: 1002005, msg: 'user ID is empty' };
const userIDIllegalCharError = { code: 1002006, msg: 'user ID contains illegal characters' };
const userIDTooLongError = { code: 1002007, msg: 'user ID is too long' };
const userNameEmptyError = { code: 1002008, msg: 'username is empty' };
const roomIDEmptyError = { code: 1002011, msg: 'room ID is empty' };
const roomIDIllegalCharError = { code: 1002012, msg: 'room ID contains illegal characters' };
const roomIDTooLongError = { code: 1002013, msg: 'room ID is too long' };
const tokenFormatError = { code: 1102016, msg: 'token format error' };
const tokenError = { code: 1102016, msg: 'token error' };

const inputParamErroraudioBitrate = { code: 1103001, msg: 'input param error. audioBitrate must be integer number' };
const inputParamErrorvideoQuality = { code: 1103001, msg: 'input param error. videoQuality must be integer number' };
const inputParamErrorframeRate = { code: 1103001, msg: 'input param error. frameRate must be integer number' };
const inputParamErrorbitrate = { code: 1103001, msg: 'input param error. bitrate must be integer number' };
const inputParamErrorheight = { code: 1103001, msg: 'input param error. height must be integer number' };
const inputParamErrorwidth = { code: 1103001, msg: 'input param error. width must be integer number' };
const inputParamErrorchannelCount = { code: 1103001, msg: 'input param error. channelCount must be integer number' };
const inputParamErrorbitraterequired = {
    code: 1103001,
    msg: 'input param error. bitrate is required when videoQuality is 4',
};

const inputParamErrormaxMemberCount = {
    code: 1100001,
    msg: 'input parm error. maxMemberCount must be integer number.',
};

export { P0, P1, P2, sdkVersion };
export {
    tokenFormatError,
    inputParmError,
    roomIDIllegalCharError,
    liveroomCmdError,
    roomIDTooLongError,
    roomIDEmptyError,
    userIDTooLongError,
    userIDIllegalCharError,
    tokenError,
    userIDEmptyError,
    userNameEmptyError,
    inputParamErroraudioBitrate,
    inputParamErrorvideoQuality,
    inputParamErrorframeRate,
    inputParamErrorbitrate,
    inputParamErrorheight,
    inputParamErrorwidth,
    inputParamErrorchannelCount,
    inputParamErrormaxMemberCount,
    inputParamErrorbitraterequired,
};
