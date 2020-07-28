import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import {
    userID,
    TIMEOUT,
    DELAY,
    APPID,
    SERVER,
    user,
    getToken,
    randomStr,
    loginRoom,
} from './config';
const sinon = require('sinon');

const { expect } = chai;
let token = '';
let roomId: any;
let zg: ZegoExpressEngine;
let message: any;

describe('消息功能', function() {
    beforeEach(async function() {
        zg = new ZegoExpressEngine(APPID, SERVER);
        zg.setDebugVerbose(false);

        const { data } = await getToken(APPID, userID);
        token = data;
        roomId = randomStr();
    });

    it('发送房间广播消息', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                message = 'zego SDK';
                await zg.loginRoom(roomId, token, user);

                const result = await zg.sendBroadcastMessage(roomId, message);
                expect(result.messageID).to.be.a('number');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('房间消息通知', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                message = 'zego SDK';
                const newUserId = randomStr();
                const { newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);

                zg.on('IMRecvBroadcastMessage', spy);
                await zg.loginRoom(roomId, token, user);
                await newZg.sendBroadcastMessage(roomId, message);

                setTimeout(() => {
                    expect(spy.called).to.be.true;
                    expect(spy.callCount).to.equal(1);
                    done();
                }, DELAY);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('发送房间弹幕消息', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                message = 'Hello from zego SDK';

                await zg.loginRoom(roomId, token, user);
                const result = await zg.sendBarrageMessage(roomId, message);
                expect(result.messageID).to.be.a('string');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('房间弹幕消息通知', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                const newUserId = randomStr();
                const { newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);

                zg.on('IMRecvBarrageMessage', spy);
                await zg.loginRoom(roomId, token, user);

                setTimeout(async () => {
                    await newZg.sendBroadcastMessage(roomId, message);
                    message = 'zego SDK';

                    setTimeout(() => {
                        expect(spy.called).to.be.true;
                        expect(spy.callCount).to.equal(1);
                        done();
                    }, DELAY);
                }, DELAY);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('发送自定义信令', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const toUserIDList = ['toUserIDList', 'sendCustomCommand'];
                message = 'Command from zego SDK';

                await zg.loginRoom(roomId, token, user);
                const result = await zg.sendCustomCommand(roomId, message, toUserIDList);
                expect(result.messageID).to.be.a('number');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('监听自定义命令信令通知', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const newUserId = randomStr();
                const { newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);
                const spy = sinon.spy();
                const toUserIDList = [userID];

                zg.on('IMRecvCustomCommand', spy);
                await zg.loginRoom(roomId, token, user);

                setTimeout(async() => {
                    message = 'Command from zego SDK';
                    await newZg.sendCustomCommand(roomId, message, toUserIDList);
    
                    setTimeout(() => {
                        expect(spy.called).to.be.true;
                        expect(spy.callCount).to.equal(1);
                        done();
                    }, DELAY);
                }, DELAY);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
