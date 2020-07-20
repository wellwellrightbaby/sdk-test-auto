import { ZegoClient } from '../sdk/webrtc-zego';
import Axios from 'axios';
const expect = chai.expect;

const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let token = '';
let zg: ZegoClient;
let publishStream: MediaStream;

describe('liveroom-web', function() {
    before(async function() {
        const { data } = (await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        })) as any;
        token = data;
        expect(token).to.be.a('string');
    });

    it('初始化sdk', async function() {
        zg = new ZegoClient();
        expect(zg).is.not.null;
        const result = zg.config({
            appid: APPID,
            server: ['wss://webliveroom-test.zego.im/ws'],
            idName: userID,
            nickName: userID,
            logLevel: 0,
            logUrl: '',
            audienceCreateRoom: true,
            remoteLogLevel: 0,
        });
        expect(result).to.be.true;
    });

    it('登录房间', function(done) {
        zg.login(
            'choui',
            2,
            token,
            function(streamList) {
                expect(streamList).to.not.null;
                done();
            },
            function(err) {
                done(err);
            },
        );
    });
});
