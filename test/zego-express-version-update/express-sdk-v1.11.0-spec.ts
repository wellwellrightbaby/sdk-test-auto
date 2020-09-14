import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { LOG_LEVEL } from '../../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
import { before } from 'mocha';
import { deviceId } from './../zego-express-engine-webrtc/config';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let token = '';
let zg: ZegoExpressEngine;
let publishStream: MediaStream;
const roomID = 'RoomOnlineUser';
let firstCamera;
let firstMicrophones: any;
let video: any;
let mydate = new Date();

describe('on roomOnlineUserCountUpdate', function() {
    this.timeout(100000);
    before(async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
        const result1 = zg.on('roomOnlineUserCountUpdate', (roomID, userCount) => {
            mydate = new Date();
            console.warn('roomOnlineUserCountUpdate: ', roomID, userCount, mydate.toLocaleTimeString());
        });
        expect(result1).to.be.true;
    });

    it('connect', async function() {
        const result = await zg.loginRoom(roomID, token, {
            userID: userID,
            userName: 'userName',
        });
        expect(result).to.be.true;
    });

    it('connect2', async function() {
        for (let i = 0; i < 10; i++) {
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: 'ROUC100' + i },
            });
            const zg1 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
            const result = await zg1.loginRoom(roomID, data, {
                userID: 'ROUC100' + i,
                userName: 'uName_ROUC100' + i,
            });
            expect(result).to.be.true;
        }
    });
});

// describe('on streamExtraInfoUpdate', function() {
//     this.timeout(100000);
//     before(async function() {
//         const mydate = new Date();
//         const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
//             params: { app_id: APPID, id_name: userID },
//         });
//         token = data;
//         expect(token).to.be.a('string');
//         zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
//         expect(zg).is.not.null;
//         const result = zg.setLogConfig({
//             logLevel: 'info',
//             remoteLogLevel: 'info',
//         });
//         expect(result).to.be.true;
//         const result1 = zg.on('streamExtraInfoUpdate', (roomID, streamList) => {
//             console.warn('streamExtraInfoUpdate: ', roomID, streamList, mydate.toLocaleString);
//         });
//         expect(result1).to.be.true;
//     });

//     it('connect', async function() {
//         const result = await zg.loginRoom(roomID, token, {
//             userID: 'RSEI100',
//             userName: 'userName_RSEI100',
//         });
//         expect(result).to.be.true;
//     });

// });

// describe('hello',function(){

// })
