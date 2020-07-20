import { ZegoExpressEngine } from '../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
const expect = chai.expect;

const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let token = '';
let zg: ZegoExpressEngine;
let publishStream: MediaStream;

describe('express-web', function() {
    before(async function() {
        const { data } = (await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        })) as any;
        token = data;
        expect(token).to.be.a('string');
    });

    it('初始化sdk', async function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'disable',
            remoteLogLevel: 'disable',
        });
        expect(result).to.be.true;
    });

    it('登录房间', async function() {
        const result = await zg.loginRoom('choui', token, {
            userID: userID,
            userName: 'name' + userID,
        });
        expect(result).to.equal(true);
    });

    it('创建流', async function() {
        try {
            publishStream = await zg.createStream();
            expect(publishStream).is.not.null;
        } catch (error) {
            expect(error).is.not.null;
        }
    });
});
