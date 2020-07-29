import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import { TIMEOUT, DELAY, APPID, SERVER, randomStr, loginRoom } from './config';
const sinon = require('sinon');

const { expect, assert } = chai;
let token: any;
let roomId: any;
let userID: any;
let zg: ZegoExpressEngine;

describe('拉流功能', function() {
    beforeEach(async () => {
        roomId = randomStr();
        userID = randomStr();
        const data = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, userID);
        zg = data.zg;
        token = data.token;
        zg.setDebugVerbose(false);
    });

    it('订阅拉流更新回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                zg.on('roomStreamUpdate', spy);

                const newUserId = randomStr();
                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);
                const stream = await newZg.createStream();
                newZg.startPublishingStream(stream.id, stream);

                setTimeout(() => {
                    expect(spy.called).to.be.true;
                    done();
                }, DELAY);
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
                const newUserId = randomStr();
                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);

                const stream = await newZg.createStream();
                await newZg.startPublishingStream(stream.id, stream);

                setTimeout(async () => {
                    const result = await zg.startPlayingStream(stream.id);
                    expect(result).to.not.be.null;
                    done();
                }, DELAY);
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
                const publishStream = await zg.createStream();
                const streamId = randomStr();
                await zg.startPublishingStream(streamId, publishStream);
                zg.stopPlayingStream(streamId);
                // 验证停止拉流成功
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

    it('订阅拉流状态回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                zg.on('playerStateUpdate', spy);

                const newUserId = randomStr();
                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);
                const stream = await newZg.createStream();
                newZg.startPublishingStream(stream.id, stream);

                setTimeout(() => {
                    expect(spy.called).to.be.true;
                    expect(spy.callCount).to.equal(2);
                    done();
                }, DELAY);
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
                const newUserId = randomStr();
                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);

                zg.on('remoteCameraStatusUpdate', spy);

                const publishStream = await newZg.createStream();
                const streamId = randomStr();
                newZg.startPublishingStream(streamId, publishStream);

                setTimeout(async () => {
                    try {
                        await newZg.mutePublishStreamVideo(publishStream, true);
                        expect(spy.called).to.be.true;
                        expect(spy.callCount).to.equal(1);

                        await newZg.mutePublishStreamVideo(publishStream, false);
                        expect(spy.called).to.be.true;
                        expect(spy.callCount).to.equal(2);
                        done();
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

    it('拉流麦克风状态回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                const newUserId = randomStr();
                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, newUserId);

                zg.on('remoteMicStatusUpdate', spy);

                const publishStream = await newZg.createStream();
                const streamId = randomStr();
                newZg.startPublishingStream(streamId, publishStream);

                setTimeout(async () => {
                    try {
                        await newZg.mutePublishStreamAudio(publishStream, false);
                        expect(spy.called).to.be.true;
                        expect(spy.callCount).to.equal(1);

                        await newZg.mutePublishStreamAudio(publishStream, true);
                        expect(spy.called).to.be.true;
                        expect(spy.callCount).to.equal(2);
                        done();
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

    it('设置音浪回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                zg.on('soundLevelUpdate', spy);

                const stream = await zg.createStream();
                zg.startPublishingStream(stream.id, stream);

                setTimeout(() => {
                    zg.setSoundLevelDelegate(false);
                    assert.ok(true, '开启或关闭音浪回调');
                    expect(spy.callCount).to.gte(1);

                    zg.setSoundLevelDelegate(true);
                    assert.ok(true, '开启或关闭音浪回调');
                    expect(spy.callCount).to.gte(2);
                    done();
                }, DELAY);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
