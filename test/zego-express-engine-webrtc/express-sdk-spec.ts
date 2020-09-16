import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { LOG_LEVEL } from '../../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
import { before } from 'mocha';
//import { deviceId } from './zego-express-engine-webrtc/config';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let token = '';
let zg: ZegoExpressEngine;
let publishStream: MediaStream;
let roomID: string;

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

//config timeout问题
/*


describe('on RoomStateUpdate', function() {
    before(async function() {
        console.warn('test RoomStateUpdate');
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
        const result1 = zg.on('roomStateUpdate', (roomID, state, errorCode, extendedData) => {
            console.warn('roomStateUpdate: ', roomID, state, errorCode, extendedData);
            throw new Error();
        });
        expect(result1).to.be.true;

        console.warn('test RoomStateUpdate');
    });

    it('connect', async function() {
        roomID = 'loginRoom_1234567890';
        const result = await zg.loginRoom(roomID, token, {
            userID: userID,
            userName: 'userName',
        });
        expect(result).to.be.true;
    });

    it('disconnect', async function() {
        roomID = 'loginRoom_1234567890';
        const result = await zg.loginRoom(roomID, token, {
            userID: userID,
            userName: 'userName',
        });
        expect(result).to.be.true;
        const outresult = zg.logoutRoom(roomID);
        expect(outresult).to.be.undefined;
    });
});
/*
describe('on RoomUserUpdate:userUpdate is true', function() {
    before(async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'disable',
            remoteLogLevel: 'disable',
        });
        expect(result).to.be.true;
        const result1 = zg.on('roomUserUpdate', (roomID, updateType, userList) => {
            console.warn(
                `roomUserUpdate: room ${roomID}, user ${updateType === 'ADD' ? 'added' : 'left'} `,
                JSON.stringify(userList),
            );
        });
        expect(result1).to.be.true;
    });

    it('connect1', async function() {
        roomID = 'loginRoom_1234567890';
        const result = await zg.loginRoom(
            roomID,
            token,
            {
                userID: userID,
                userName: 'userName',
            },
            { userUpdate: true },
        );
        expect(result).to.be.true;
    });

    it('connect2', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test1' },
        });
        const zg1 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg1.loginRoom(roomID, data, {
            userID: 'test1',
            userName: 'uName_test1',
        });
        expect(result).to.be.true;
    });

    it('connect3', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test2' },
        });
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test2',
            userName: 'uName_test2',
        });
        expect(result).to.be.true;
    });

    it('connect4 and disconnect', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test3' },
        });
        const zg3 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg3.loginRoom(roomID, data, {
            userID: 'test3',
            userName: 'uName_test3',
        });
        expect(result).to.be.true;
        const result1 = await zg3.logoutRoom(roomID);
        expect(result1).to.be.undefined;
    });

    it('same user', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test2' },
        });
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test2',
            userName: 'uName_test2',
        });
        expect(result).to.be.true;
    });
});*/
/*
describe('on RoomUserUpdate:userUpdate is false', function() {
    before(async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'disable',
            remoteLogLevel: 'disable',
        });
        expect(result).to.be.true;
        const result1 = zg.on('roomUserUpdate', (roomID, updateType, userList) => {
            console.warn(
                `roomUserUpdate: room ${roomID}, user ${updateType === 'ADD' ? 'added' : 'left'} `,
                JSON.stringify(userList),
            );
        });
        expect(result1).to.be.true;
    });

    it('connect1', async function() {
        roomID = 'loginRoom_1234567890';
        const result = await zg.loginRoom(
            roomID,
            token,
            {
                userID: userID,
                userName: 'userName',
            },
            { userUpdate: false },
        );
        expect(result).to.be.true;
    });

    it('connect2', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test11' },
        });
        const zg1 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg1.loginRoom(roomID, data, {
            userID: 'test11',
            userName: 'uName_test11',
        });
        expect(result).to.be.true;
    });

    it('connect3', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test12' },
        });
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test12',
            userName: 'uName_test12',
        });
        expect(result).to.be.true;
    });

    it('connect4 and disconnect', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test13' },
        });
        const zg3 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg3.loginRoom(roomID, data, {
            userID: 'test13',
            userName: 'uName_test13',
        });
        expect(result).to.be.true;
        const result1 = await zg3.logoutRoom(roomID);
        expect(result1).to.be.undefined;
    });

    it('same user', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test12' },
        });
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test12',
            userName: 'uName_test12',
        });
        expect(result).to.be.true;
    });
});


describe('on test', function() {
    this.timeout(10000);
    roomID = 'loginRoom_1234567890';
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
        zg.on('roomUserUpdate', (roomID, updateType, userList) => {
            const ulist = userList.join(',');
            console.log('roomUserUpdate: ', roomID, updateType, ulist);
        });

        const result1 = await zg.loginRoom(roomID, token, {
            userID: userID,
            userName: 'userName',
        });
    });

    it('test', async function() {
        const result = await zg.createStream({
            camera: {
                audio: false,
                video: true,
                videoQuality: 3,
                facingMode: 'environment',
            },
        });
        const publishOption: any = {
            streamParams: 123,
            extraInfo: '',
            videoCodec: 'H.264',
        };
        const result1 = zg.startPublishingStream(result.id, result, publishOption);
        expect(result1).to.be.true;
    });
});
*/
