import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import {
    TIMEOUT,
    DELAY,
    APPID,
    SERVER,
    getToken,
    randomStr,
    getSignature,
    targetURL,
    deviceId,
    loginRoom,
    videoSrc,
} from './config';

const sinon = require('sinon');
const { expect, assert } = chai;

let token = '';
let roomId: any;
let userID: any;
let zg: ZegoExpressEngine;
let message: any;

describe('推流功能', function() {
    beforeEach(async () => {
        roomId = randomStr();
        userID = randomStr();
        const data = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, userID);
        zg = data.zg;
        token = data.token;
        zg.setDebugVerbose(false);
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
                }).then(
                    () => {
                        done('should be rejected');
                    },
                    e => done(),
                );
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
                zg.destroyStream(stream);
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
                const stream = await zg.createStream();
                const result = zg.startPublishingStream(stream.id, stream);
                expect(result).to.be.true;
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
                const stream = await zg.createStream();
                // todo: 参数未知
                const publishOption: any = {
                    streamParams: '',
                    extraInfo: '',
                    videoCodec: 'H264',
                };
                const result = zg.startPublishingStream(stream.id, stream, publishOption);
                expect(result).to.be.true;
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
                zg.startPublishingStream(stream.id, stream);
                const result = zg.stopPublishingStream(stream.id);
                expect(result).to.be.true;
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
                const result = await zg.addPublishCdnUrl(stream.id, signature, targetURL);
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
                await zg.addPublishCdnUrl(stream.id, signature, targetURL);
                const result = await zg.removePublishCdnUrl(stream.id, signature, targetURL);
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
                zg.setStreamExtraInfo(stream.id, extraInfo);
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
                let result: boolean;

                result = zg.mutePublishStreamVideo(publishStream, false);
                // 检测视频流是否关闭
                expect(result).to.be.a('boolean');

                result = zg.mutePublishStreamVideo(publishStream, true);
                // 检测视频流是否关闭
                expect(result).to.be.a('boolean');
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
                let result: boolean;

                result = zg.mutePublishStreamAudio(publishStream, false);
                // 检测视频流是否关闭
                expect(result).to.be.a('boolean');

                result = zg.mutePublishStreamAudio(publishStream, true);
                // 检测视频流是否关闭
                expect(result).to.be.a('boolean');
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
                const stream = await zg.createStream({
                    camera: {
                        video: false,
                    },
                });

                await zg.startPublishingStream(stream.id, stream);

                setTimeout(async () => {
                    try {
                        await zg.useVideoDevice(stream, deviceId);
                        done('invalid deviceId should be rejected');
                    } catch (e) {
                        console.log(e);
                        done();
                    }
                }, DELAY);
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
                await zg.loginRoom(roomId, token, user);
                const stream = await zg.createStream({
                    camera: {
                        audio: false,
                    },
                });

                await zg.startPublishingStream(stream.id, stream);

                setTimeout(async () => {
                    try {
                        // const devices = await navigator.mediaDevices.enumerateDevices();
                        // const deviceId = devices[0].deviceId;
                        await zg.useAudioDevice(stream, deviceId);
                        done('invalid deviceId should be rejected');
                    } catch (e) {
                        console.log(e);
                        done();
                    }
                }, DELAY);
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

                const { zg: newZg } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, userID);
                const stream = await newZg.createStream();
                newZg.startPublishingStream(stream.id, stream);

                setTimeout(() => {
                    expect(spy.called).to.be.true;
                    expect(spy.callCount).to.equal(1);
                    done();
                }, 2000);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    // todo:无法模拟中断操作
    // it('屏幕共享中断回调', function(done) {
    //     this.timeout(TIMEOUT);

    //     const test = async () => {
    //         try {
    //             const spy = sinon.spy();

    //             zg.on('screenSharingEnded', spy);
    //             await zg.createStream({
    //                 screen: {
    //                     audio: false,
    //                     video: true,
    //                     videoQuality: 4,
    //                     frameRate: 18,
    //                     bitrate: 1000,
    //                 },
    //             });

    //             expect(spy.called).to.be.true;
    //             done();
    //         } catch (e) {
    //             done(e);
    //         }
    //     };

    //     setTimeout(test, DELAY);
    // });

    it('开始混音', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            const video = document.createElement('video');
            video.id = randomStr();
            video.src = videoSrc;
            document.body.appendChild(video);

            try {
                const stream = await zg.createStream();
                const mediaList: HTMLMediaElement[] = [];
                mediaList.push(document.querySelector('#video1') as HTMLMediaElement);
                const result = zg.startMixingAudio(stream.id, mediaList);

                // 判断混音是否成功
                document.body.removeChild(video);
                expect(result).to.be.true;
                done();
            } catch (e) {
                document.body.removeChild(video);
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('停止混音', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            const video = document.createElement('video');
            video.id = randomStr();
            video.src = videoSrc;
            document.body.appendChild(video);

            try {
                const stream = await zg.createStream();
                const mediaList: HTMLMediaElement[] = [];
                mediaList.push(document.querySelector('#video1') as HTMLMediaElement);
                zg.startMixingAudio(stream.id, mediaList);
                const result = zg.stopMixingAudio(stream.id, mediaList);

                // 判断停止混音是否成功
                expect(result).to.be.true;
                document.body.removeChild(video);
                done();
            } catch (e) {
                document.body.removeChild(video);
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
