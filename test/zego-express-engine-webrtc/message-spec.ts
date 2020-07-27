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
                const newUser = {
                    userID: newUserId,
                    userName: 'name' + newUserId,
                };
                const { data: newUsertoken } = await getToken(APPID, newUserId);

                zg.on('IMRecvBroadcastMessage', spy);

                // await zg.loginRoom(roomId, token, user);
                await zg.loginRoom(roomId, newUsertoken, newUser);
                await zg.sendBroadcastMessage(roomId, message);

                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(1);
                done();
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
                message = 'zego SDK';
                const newUserId = randomStr();
                const newUser = {
                    userID: newUserId,
                    userName: 'name' + newUserId,
                };
                const { data: newUsertoken } = await getToken(APPID, newUserId);

                zg.on('IMRecvBarrageMessage', spy);

                // await zg.loginRoom(roomId, token, user);
                await zg.loginRoom(roomId, newUsertoken, newUser);
                await zg.sendBroadcastMessage(roomId, message);

                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(1);
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
                const spy = sinon.spy();
                const toUserIDList = ['toUserIDList', 'sendCustomCommand'];
                message = 'Command from zego SDK';

                zg.on('IMRecvCustomCommand', spy);

                await zg.loginRoom(roomId, token, user);
                await zg.sendCustomCommand(roomId, message, toUserIDList);

                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(1);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
