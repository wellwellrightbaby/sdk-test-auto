import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import { userID, TIMEOUT, DELAY, APPID, SERVER, user, getToken, randomStr } from './config';
const sinon = require('sinon');

const { expect, assert } = chai;
let token = '';
let roomId: any = '1234';
let zg: ZegoExpressEngine;

describe('拉流功能', function() {
    beforeEach(async () => {
        zg = new ZegoExpressEngine(APPID, SERVER);
        zg.setDebugVerbose(false);

        const { data } = await getToken(APPID, userID);
        token = data;
        roomId = randomStr();
    });

    it('订阅拉流更新回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                zg.on('roomStreamUpdate', spy);

                // @ts-ignore
                await zg.loginRoom(roomId, token, user);
                const publishStream = await zg.createStream();
                const streamId = randomStr();
                const result = zg.startPublishingStream(streamId, publishStream);

                expect(result).to.be.a('boolean');
                expect(spy.called).to.be.true;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('获取远端流', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);
                const publishStream = await zg.createStream();
                const streamId = randomStr();
                await zg.startPublishingStream(streamId, publishStream);
                const result = await zg.startPlayingStream(streamId);

                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    // 没有动态调整流质量的 api
    // it('订阅拉流质量回调', function(done) {
    //     this.timeout(TIMEOUT);

    //     const test = async () => {
    //         try {
    //             const spy = sinon.spy();
    //             roomId = '1234';

    //             zg.on('playQualityUpdate', spy);
    //
    //             await zg.createStream();

    //             expect(spy.called).to.be.true;
    //             expect(spy.callCount).to.equal(2);
    //             done();
    //         } catch (e) {
    //             done(e);
    //         }
    //     };

    //     setTimeout(test, DELAY);
    // });

    it('停止拉流', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                roomId = '1234';
                await zg.loginRoom(roomId, token, user);
                const publishStream = await zg.createStream();
                const streamId = randomStr();
                await zg.startPublishingStream(streamId, publishStream);
                zg.stopPlayingStream(streamId);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('流附加信息更新回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                const stream = await zg.createStream();
                const extraInfo = 'extra-info';

                zg.on('streamExtraInfoUpdate', spy);
                await zg.setStreamExtraInfo(stream.id, extraInfo);
                assert.ok(true, '更新推流附加信息：成功');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('订阅拉流状态回调', done => {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();

                zg.on('playerStateUpdate', spy);
                const stream = await zg.createStream();
                await zg.startPublishingStream(stream.id, stream);
                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(2);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('拉流摄像头状态回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                const publishStream = await zg.createStream();
                zg.on('remoteCameraStatusUpdate', spy);

                await zg.mutePublishStreamVideo(publishStream, true);
                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(1);

                await zg.mutePublishStreamVideo(publishStream, false);
                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(2);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('拉流麦克风状态回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                const publishStream = await zg.createStream();
                zg.on('remoteMicStatusUpdate', spy);

                await zg.mutePublishStreamAudio(publishStream, true);
                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(1);

                await zg.mutePublishStreamAudio(publishStream, false);
                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(2);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('设置音浪回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                await zg.createStream();

                zg.on('soundLevelUpdate', spy);

                zg.setSoundLevelDelegate(false);
                assert.ok(true, '开启或关闭音浪回调');
                expect(spy.callCount).to.equal(1);

                zg.setSoundLevelDelegate(true);
                assert.ok(true, '开启或关闭音浪回调');
                expect(spy.callCount).to.equal(2);

                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('音浪更新回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                await zg.createStream();

                zg.on('soundLevelUpdate', spy);

                zg.setSoundLevelDelegate(false);
                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(1);

                zg.setSoundLevelDelegate(true);
                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(2);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
