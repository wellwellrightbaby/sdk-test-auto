import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
const sinon = require('sinon');

const { expect } = chai;
const TIMEOUT = 5000;
const DELAY = 2000;
const APPID = 1739272706;
const SERVER = 'wss://webliveroom-test.test.im/ws';
let roomId = '1234';
let zg: ZegoExpressEngine;

describe('消息功能', function() {
    let message: any;

    beforeEach(() => {
        zg = new ZegoExpressEngine(APPID, SERVER);
        zg.setDebugVerbose(false);
    });

    it('发送房间广播消息', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                message = 'zego SDK';
                roomId = '1234';

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
                roomId = '1234';

                zg.on('IMRecvBroadcastMessage', spy);
                await zg.sendBroadcastMessage(roomId, message);

                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(2);
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
                roomId = '1234';

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
                roomId = '1234';

                zg.on('IMRecvBarrageMessage', spy);
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
                roomId = '1234';

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
                roomId = '1234';

                zg.on('IMRecvCustomCommand', spy);
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
