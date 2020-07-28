import Axios from 'axios';
const crypto = require('crypto');

const userID = 'id' + new Date().getTime();
const TIMEOUT = 10000;
const DELAY = 2000;
const APPID = 1739272706;
const SERVER = 'wss://webliveroom-test.zego.im/ws';
const tokenURL = 'https://wsliveroom-demo.zego.im:8282/token';
const targetURL = 'rtmp://wsdemo.zego.im/livestream/test259';
const user = {
    userID: userID,
    userName: 'name' + userID,
};
const getToken = (app_id = APPID, id_name = userID) =>
    Axios.get(tokenURL, {
        params: { app_id, id_name },
    });
const randomStr = (n = 32) => Math.random().toString(n);
const md5 = (content: any) =>
    crypto
        .createHash('md5')
        .update(content)
        .digest('hex');
const getSignature = (appID: number, secret: string): string =>
    md5(appID + Math.ceil(new Date().getTime() / 1000).toString() + secret);

const deviceId: any = '82fed889704cd583c49d36944f7260d9fc4b2334f5fe4bda054eee3738908da8';
const videoSrc = 'https://www.runoob.com/try/demo_source/movie.mp4';

const loginRoom = async (
    ZegoExpressEngine: any,
    APPID: number,
    SERVER: string,
    roomId: string,
    userId: string = randomStr(),
) => {
    const newZg = new ZegoExpressEngine(APPID, SERVER);
    const newUser = {
        userID: userId,
        userName: 'name' + userId,
    };
    const newUsertoken = await getToken(APPID, userId);
    await newZg.loginRoom(roomId, newUsertoken, newUser);

    return {
        newZg,
        newUser,
        newUsertoken,
    };
};

export {
    userID,
    TIMEOUT,
    DELAY,
    APPID,
    SERVER,
    tokenURL,
    user,
    getToken,
    randomStr,
    md5,
    getSignature,
    targetURL,
    deviceId,
    loginRoom,
    videoSrc,
};
