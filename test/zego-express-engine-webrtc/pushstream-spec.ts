import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import chai from 'chai';
const crypto = require('crypto');
const sinon = require('sinon');

const { expect, assert } = chai;
const userID = 'id' + new Date().getTime();
const md5 = (content: any) =>
    crypto
        .createHash('md5')
        .update(content)
        .digest('hex');
const getSignature = (appID: number, secret: string): string =>
    md5(appID + Math.ceil(new Date().getTime() / 1000).toString() + secret);
const TIMEOUT = 5000;
const DELAY = 2000;
const APPID = 1739272706;
const SERVER = 'wss://webliveroom-test.test.im/ws';
const tokenURL = 'https://wsliveroom-demo.zego.im:8282/token';
const targetURL = 'rtmp://wsdemo.zego.im/livestream/test259';
let token = '';
let roomId: any = '1234';
let zg: ZegoExpressEngine;
const user = {
    userID: userID,
    userName: 'name' + userID,
};

describe('推流功能', function() {
    before(async function() {
        const { data } = (await Axios.get(tokenURL, {
            params: { app_id: APPID, id_name: userID },
        })) as any;
        token = data;
    });

    beforeEach(() => {
        zg = new ZegoExpressEngine(APPID, SERVER);
    });

    it('创建默认流', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const result = await zg.createStream();
                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                // @ts-ignore
                const result = await zg.createStream({
                    camera: {
                        audio: false,
                        video: true,
                        videoQuality: 3,
                        facingMode: 'environment',
                    },
                });

                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数，同时禁用 audio 和 video 会抛出错误', function(done) {
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        audio: false,
                        video: false,
                        videoQuality: 3,
                        facingMode: 'environment',
                    },
                }).then(() => {
                    done('should be rejected');
                }, done);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                // @ts-ignore
                const result = await zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 3,
                    },
                });

                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数，设置 videoQuality 值为 4', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                // @ts-ignore
                const result = await zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 4,
                        frameRate: 18,
                        bitrate: 1000,
                    },
                });

                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 custom 参数', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                // @ts-ignore
                const result = await zg.createStream({
                    custom: {
                        bitrate: 1000,
                    },
                });

                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('销毁流', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                // @ts-ignore
                const stream = await zg.createStream();
                await zg.destroyStream(stream);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('发布推流', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                roomId = '1234';
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);

                const stream = await zg.createStream();
                const result = await zg.startPublishingStream(stream.id, stream);
                expect(result).to.be.a('boolean');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('发布推流，修改 publishOption 参数', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                roomId = '1234';
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);

                const stream = await zg.createStream();
                // todo: 参数未知
                const publishOption: any = {
                    streamParams: '',
                    extraInfo: '',
                    videoCodec: 'H264',
                };
                const result = await zg.startPublishingStream(stream.id, stream, publishOption);
                expect(result).to.be.a('boolean');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('停止发布推流', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const stream = await zg.createStream();
                await zg.stopPublishingStream(stream.id);
                assert.ok(true, '停止发布推流成功');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('增加转推 CDN 地址', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const stream = await zg.createStream();
                const signature = getSignature(APPID, 'secret');
                const result = zg.addPublishCdnUrl(stream.id, signature, targetURL);
                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('删除转推 CDN 地址', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const signature = getSignature(APPID, 'secret');
                const stream = await zg.createStream();
                const result = zg.removePublishCdnUrl(stream.id, signature, targetURL);
                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('更新推流附加信息', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const extraInfo = 'extra-info';
                const stream = await zg.createStream();
                await zg.setStreamExtraInfo(stream.id, extraInfo);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    // 没有动态调整流质量的 api
    // it('订阅推流质量回调', () => {
    //     zg = new ZegoExpressEngine(APPID, SERVER);
    //     const spy = sinon.spy();

    //     zg.on('publishQualityUpdate', spy);
    // });

    it('打开/关闭流画面', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const publishStream = await zg.createStream();

                await zg.mutePublishStreamVideo(publishStream, true);
                // 如何检测视频流是否关闭
                assert.ok(true, '打开流画面：成功');

                await zg.mutePublishStreamVideo(publishStream, false);
                // 如何检测视频流是否关闭
                assert.ok(true, '关闭流画面：成功');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('打开/关闭流声音', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const publishStream = await zg.createStream();

                await zg.mutePublishStreamAudio(publishStream, true);
                // 如何检测视频流是否关闭
                assert.ok(true, '打开流画面：成功');

                await zg.mutePublishStreamAudio(publishStream, false);
                // 如何检测视频流是否关闭
                assert.ok(true, '关闭流画面：成功');
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('使用摄像头设备', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const publishStream = await zg.createStream();

                const deviceId: any = '82fed889704cd583c49d36944f7260d9fc4b2334f5fe4bda054eee3738908da8';
                const result = await zg.useVideoDevice(publishStream, deviceId);
                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('使用麦克风设备', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const publishStream = await zg.createStream();

                const deviceId: any = '82fed889704cd583c49d36944f7260d9fc4b2334f5fe4bda054eee3738908da8';
                const result = zg.useAudioDevice(publishStream, deviceId);
                expect(result).to.not.be.null;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('订阅推流状态回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                zg.on('publisherStateUpdate', spy);
                await zg.createStream();

                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(2);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('屏幕共享中断回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();

                zg.on('screenSharingEnded', spy);
                await zg.createStream({
                    screen: {
                        audio: false,
                        video: true,
                        videoQuality: 4,
                        frameRate: 18,
                        bitrate: 1000,
                    },
                });

                expect(spy.called).to.be.true;
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    // todo
    // mediaList 是 HTMLMediaElement
    // it('开始混音', async function() {
    //     zg = new ZegoExpressEngine(APPID, SERVER);
    //     const streamID = '';
    //     const mediaList = [];
    //     zg.startMixingAudio(streamID, mediaList);
    // });

    // mediaList 是 HTMLMediaElement，在 node 中无法测试
    // it('停止混音', async function() {});
});
