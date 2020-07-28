import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import { TIMEOUT, DELAY, APPID, SERVER, loginRoom, randomStr } from './config';
const sinon = require('sinon');

const { expect } = chai;
let token: any;
let roomId: any;
let userID: any;
let zg: ZegoExpressEngine;
let message: any;

describe('消息功能', function() {
    beforeEach(async function() {
        roomId = randomStr();
        userID = randomStr();
        const data = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, userID);
        zg = data.zg;
        token = data.token;
        zg.setDebugVerbose(false);
    });

    it('发送房间广播消息', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                message = 'zego SDK';

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
                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);

                zg.on('IMRecvBroadcastMessage', spy);
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
                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);

                zg.on('IMRecvBarrageMessage', spy);

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
                const toUserIDList = [userID];
                message = 'Command from zego SDK';

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
                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);
                const spy = sinon.spy();
                const toUserIDList = [userID];

                zg.on('IMRecvCustomCommand', spy);

                setTimeout(async () => {
                    try {
                        message = 'Command from zego SDK';
                        await newZg.sendCustomCommand(roomId, message, toUserIDList);

                        setTimeout(() => {
                            expect(spy.called).to.be.true;
                            expect(spy.callCount).to.equal(1);

                            done();
                        }, DELAY);
                    } catch (e) {
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
