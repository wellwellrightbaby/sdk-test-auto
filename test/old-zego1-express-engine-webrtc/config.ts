import Axios from 'axios';
const crypto = require('crypto');

const TIMEOUT = 10000;
const DELAY = 2000;
const APPID = 1739272706;
const SERVER = 'wss://webliveroom-test.zego.im/ws';
const tokenURL = 'https://wsliveroom-demo.zego.im:8282/token';
const targetURL = 'rtmp://wsdemo.zego.im/livestream/test259';

const getToken = (app_id = APPID, id_name = ''): Promise<any> =>
    Axios.get(tokenURL, {
        params: { app_id, id_name },
    }).then(data => data.data);
const randomStr = (n = 32): string => Date.now().toString(n);
const md5 = (content: string): string =>
    crypto
        .createHash('md5')
        .update(content)
        .digest('hex');
const getSignature = (appID: number, secret: string): string =>
    md5(appID + Math.ceil(new Date().getTime() / 1000).toString() + secret);

const deviceId = '82fed889704cd583c49d36944f7260d9fc4b2334f5fe4bda054eee3738908da8';
const videoSrc = 'https://www.runoob.com/try/demo_source/movie.mp4';

const loginRoom = async (
    ZegoExpressEngine: any,
    APPID: number,
    SERVER: string,
    roomId: string,
    userId: string = randomStr(),
): Promise<any> => {
    const zg = new ZegoExpressEngine(APPID, SERVER);
    const user = {
        userID: userId,
        userName: 'name' + userId,
    };
    const token = await getToken(APPID, userId);
    await zg.loginRoom(roomId, token, user);

    return {
        zg,
        user,
        token,
    };
};

export {
    TIMEOUT,
    DELAY,
    APPID,
    SERVER,
    tokenURL,
    getToken,
    randomStr,
    md5,
    getSignature,
    targetURL,
    deviceId,
    loginRoom,
    videoSrc,
};
