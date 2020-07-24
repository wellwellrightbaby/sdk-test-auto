import { ZegoExpressEngine } from '../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import chai from 'chai';
import { webPublishOption } from '../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
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
const TIMEOUT = 10000;
const APPID = 1739272706;
const SERVER = 'wss://webliveroom-test.test.im/ws';
const tokenURL = 'https://wsliveroom-demo.zego.im:8282/token';
const targetURL = 'rtmp://wsdemo.zego.im/livestream/test259';
let token = '';
let roomId: any = '1234';
let zg: ZegoExpressEngine | any;
const user = {
    userID: userID,
    userName: 'name' + userID,
};

describe('express-web', function() {
    describe('初始化相关的前置功能', function() {
        beforeEach(function() {
            this.timeout(TIMEOUT);
            zg = new ZegoExpressEngine(APPID, SERVER);
        });

        it('初始化sdk', function() {
            expect(zg).is.not.null;

            zg = null;
            zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.test.im/ws');
            expect(zg).is.not.null;

            zg = null;
            zg = new ZegoExpressEngine(APPID, 'https://webliveroom-test.test.im/ws');
            expect(zg).is.not.null;

            // todo: console.error('server wrong')
            zg = null;
            zg = new ZegoExpressEngine(APPID, 'http://webliveroom-test.test.im/ws');
            expect(zg).is.not.null;

            zg = null;
            zg = new ZegoExpressEngine(APPID, 'ftp://webliveroom-test.test.im/ws');
            expect(zg).is.not.null;

            zg = null;
            // @ts-ignore
            zg = new ZegoExpressEngine(APPID.toString(), 'ftp://webliveroom-test.test.im/ws');
            expect(zg).is.not.null;
        });

        it('日志配置', function() {
            let result = zg.setLogConfig({
                logLevel: 'warn',
                remoteLogLevel: 'error',
            });
            expect(result).to.be.true;

            result = zg.setLogConfig({
                logLevel: 'warn',
                remoteLogLevel: 'warn',
                // todo: 远程 log 服务器地址
                logURL: '',
            });
            expect(result).to.be.true;
        });

        it('设置调试开关', function() {
            expect(zg.stateCenter.debug).to.be.false;

            zg.setDebugVerbose(true);
            expect(zg.stateCenter.debug).to.be.true;

            zg.setDebugVerbose(false);
            expect(zg.stateCenter.debug).to.be.false;
        });

        it('可用性检测', async function() {
            const result = await zg.checkSystemRequirements();

            expect(result.webRTC).to.be.a('boolean');
            expect(result.customCapture).to.be.a('boolean');
            expect(result.camera).to.be.a('boolean');
            expect(result.microphone).to.be.a('boolean');
            expect(result.microphone).to.be.a('boolean');
            expect(result.videoCodec).to.be.a('object');
            expect(result.screenSharing).to.be.a('boolean');

            const { H264, VP8 } = result.videoCodec;
            expect(H264).to.be.a('boolean');
            expect(VP8).to.be.a('boolean');
        });

        it('获取媒体设备信息', async function() {
            const result = await zg.enumDevices();
            const [key1, key2] = ['deviceName', 'deviceID'];
            const testArrayObjectHasKeys = (arrayObject: {}[], ...keys: string[]) =>
                arrayObject.forEach(obj => {
                    expect(obj).to.have.all.keys(...keys);
                });

            // for each
            expect(result.microphones).to.be.an('array');
            expect(result.speakers).to.be.an('array');
            expect(result.cameras).to.be.an('array');

            testArrayObjectHasKeys(result.microphones, key1, key2);
            testArrayObjectHasKeys(result.speakers, key1, key2);
            testArrayObjectHasKeys(result.cameras, key1, key2);
        });

        it('回调事件注册', function() {
            const { listenerList } = zg.stateCenter;

            zg.on('roomUserUpdate', () => {});
            expect(listenerList.roomUserUpdate.length).to.equal(1);

            zg.on('roomUserUpdate', () => {});
            expect(listenerList.roomUserUpdate.length).to.equal(2);
        });

        it('回调事件删除', function() {
            const { listenerList } = zg.stateCenter;
            zg.on('roomUserUpdate', () => {});
            zg.on('roomUserUpdate', () => {});
            zg.off('roomUserUpdate');

            expect(listenerList.roomUserUpdate.length).to.equal(0);
        });

        it('获取当前 sdk 版本号', function() {
            expect(zg.getVersion()).to.be.a('string');
        });
    });

    describe('房间功能', function() {
        before(async function() {
            const { data } = (await Axios.get(tokenURL, {
                params: { app_id: APPID, id_name: userID },
            })) as any;
            token = data;
        });

        beforeEach(function() {
            this.timeout(TIMEOUT);
            zg = new ZegoExpressEngine(APPID, SERVER);
        });

        it('登录房间 roomId 传入非字符串，会返回 rejected 状态', function(done) {
            roomId = 1234;
            try {
                // @ts-ignore
                zg.loginRoom(roomId, token, user).should.be.rejected.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('登录房间 roomId 传入字符串，会返回 fulfilled 状态', function(done) {
            roomId = '1234';
            try {
                // @ts-ignore
                zg.loginRoom(roomId, token, user).should.be.fulfilled.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('登录房间 config 修改', async function() {
            const config = {
                userUpdate: false,
                maxMemberCount: 3,
            };
            roomId = '1234';

            try {
                // @ts-ignore
                return assert.isFulfilled(zg.loginRoom(roomId, token, user, config));
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('登出房间', async function() {
            const config = {
                userUpdate: false,
                maxMemberCount: 3,
            };
            zg = new ZegoExpressEngine(APPID, SERVER);
            roomId = '1234';

            try {
                await zg.loginRoom(roomId, token, user, config);
                await zg.logoutRoom(roomId);

                expect(zg.stateCenter.userid).to.be.equal('');
                expect(zg.stateCenter.sessionid).to.be.equal('');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('房间状态更新回调：连接成功', async function() {
            const config = {
                userUpdate: false,
                maxMemberCount: 3,
            };
            const spy = sinon.spy();
            roomId = '1234';

            zg.on('roomStateUpdate', spy);
            await zg.loginRoom(roomId, token, user, config);

            expect(spy.called).to.be.true;
            expect(spy.callCount).to.equal(2);
        });

        it('房间状态更新回调：断开连接', async function() {
            const spy = sinon.spy();
            const config = {
                userUpdate: false,
                maxMemberCount: 3,
            };
            roomId = '1234';

            zg.on('roomStateUpdate', spy);
            await zg.loginRoom(roomId, token, user, config);
            await zg.logoutRoom(roomId);

            expect(spy.called).to.be.true;
            expect(spy.callCount).to.equal(3);
        });

        it('房间用户进出回调', async function() {
            const enterRoom = async ({ appid, server, uid, roomId, config }: any) => {
                zg = new ZegoExpressEngine(appid, server);
                const user = {
                    userID: uid,
                    userName: 'name' + uid,
                };

                await zg.loginRoom(roomId, token, user, config);
                return zg;
            };

            const leaveRoom = async ({ user, roomId }: any) => {
                await user.logoutRoom(roomId);
            };
            const spy = sinon.spy();

            zg.on('roomUserUpdate', spy);

            const user1 = await enterRoom({
                appid: APPID,
                server: SERVER,
                uid: userID,
                roomId: '1234',
                config: {
                    userUpdate: true,
                    maxMemberCount: 3,
                },
            });

            expect(spy.callCount).to.equal(2);

            const user2 = await enterRoom({
                appid: APPID,
                server: SERVER,
                uid: userID,
                roomId: '1234',
                config: {
                    userUpdate: true,
                    maxMemberCount: 3,
                },
            });

            expect(spy.callCount).to.equal(4);

            await leaveRoom({
                user: user1,
                roomId: '1234',
            });

            expect(spy.callCount).to.equal(5);

            await leaveRoom({
                user: user2,
                roomId: '1234',
            });

            expect(spy.callCount).to.equal(6);
        });
    });

    describe('推流功能', function() {
        before(async function() {
            const { data } = (await Axios.get(tokenURL, {
                params: { app_id: APPID, id_name: userID },
            })) as any;
            token = data;
        });

        beforeEach(() => {
            this.timeout(TIMEOUT);
            zg = new ZegoExpressEngine(APPID, SERVER);
        });

        it('创建默认流', function(done) {
            try {
                // @ts-ignore
                zg.createStream().should.be.fulfilled.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('创建流，修改 camera 参数', function(done) {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        audio: false,
                        video: true,
                        videoQuality: 3,
                        facingMode: 'environment',
                    },
                }).should.be.fulfilled.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('创建流，修改 camera 参数，同时禁用 audio 和 video 会抛出错误', function(done) {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        audio: false,
                        video: false,
                        videoQuality: 3,
                        facingMode: 'environment',
                    },
                }).should.be.rejected.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('创建流，修改 screen 参数', function(done) {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 3,
                    },
                }).should.be.fulfilled.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('创建流，修改 screen 参数，设置 videoQuality 值为 4', function(done) {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 4,
                        frameRate: 18,
                        bitrate: 1000,
                    },
                }).should.be.fulfilled.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('创建流，修改 custom 参数', function(done) {
            try {
                // @ts-ignore
                zg.createStream({
                    custom: {
                        bitrate: 1000,
                    },
                }).should.be.fulfilled.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('销毁流', async function() {
            try {
                // @ts-ignore
                await zg.createStream();
                assert.ok(true, '销毁成功');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('发布推流', async function() {
            roomId = '1234';
            // @ts-ignore
            await zg.loginRoom(roomId, token, user);

            const publishStream = await zg.createStream();
            const streamId = Math.random().toString(32);
            const result = await zg.startPublishingStream(streamId, publishStream);
            expect(result).to.be.a('boolean');
        });

        it('发布推流，修改 publishOption 参数', async function() {
            try {
                roomId = '1234';
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);

                const publishStream = await zg.createStream();
                const streamId = Math.random().toString(32);
                // todo: 参数未知
                const publishOption: webPublishOption = {
                    streamParams: '',
                    extraInfo: '',
                    videoCodec: 'H264',
                };
                const result = await zg.startPublishingStream(streamId, publishStream, publishOption);
                expect(result).to.be.a('boolean');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('停止发布推流', async function() {
            try {
                const publishStream = await zg.createStream({
                    custom: {
                        bitrate: 1000,
                    },
                });
                assert.ok(true, '停止发布推流成功');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('增加转推 CDN 地址', function(done) {
            try {
                const streamID = '1345';
                const signature = getSignature(APPID, 'secret');
                zg.addPublishCdnUrl(streamID, signature, targetURL).should.be.fulfilled.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('删除转推 CDN 地址', function(done) {
            try {
                const streamID = '1345';
                const signature = getSignature(APPID, 'secret');
                zg.removePublishCdnUrl(streamID, signature, targetURL).should.be.fulfilled.and.notify(done);
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('更新推流附加信息', async function() {
            try {
                const streamID = '1345';
                const extraInfo = {
                    msg: 'extra-info',
                };

                await zg.setStreamExtraInfo(streamID, extraInfo);
                assert.ok(true, '更新推流附加信息：成功');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        // 没有动态调整流质量的函数
        // it('订阅推流质量回调', () => {
        //     zg = new ZegoExpressEngine(APPID, SERVER);
        //     const spy = sinon.spy();

        //     zg.on('publishQualityUpdate', spy);
        // });

        it('打开/关闭流画面', async function() {
            try {
                const publishStream = await zg.createStream();

                await zg.mutePublishStreamVideo(publishStream, true);
                // 如何检测视频流是否关闭
                assert.ok(true, '打开流画面：成功');

                await zg.mutePublishStreamVideo(publishStream, false);
                // 如何检测视频流是否关闭
                assert.ok(true, '关闭流画面：成功');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('打开/关闭流声音', async function() {
            try {
                const publishStream = await zg.createStream();

                await zg.mutePublishStreamAudio(publishStream, true);
                // 如何检测视频流是否关闭
                assert.ok(true, '打开流画面：成功');

                await zg.mutePublishStreamAudio(publishStream, false);
                // 如何检测视频流是否关闭
                assert.ok(true, '关闭流画面：成功');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('使用摄像头设备', async function() {
            try {
                const publishStream = await zg.createStream();

                const deviceId: any = '82fed889704cd583c49d36944f7260d9fc4b2334f5fe4bda054eee3738908da8';
                zg.useVideoDevice(publishStream, deviceId).should.be.fulfilled;
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('使用麦克风设备', async function() {
            try {
                const publishStream = await zg.createStream();

                const deviceId: any = '82fed889704cd583c49d36944f7260d9fc4b2334f5fe4bda054eee3738908da8';
                zg.useAudioDevice(publishStream, deviceId).should.be.fulfilled;
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('订阅推流状态回调', async function() {
            const spy = sinon.spy();
            roomId = '1234';

            zg.on('publisherStateUpdate', spy);
            await zg.createStream();

            expect(spy.called).to.be.true;
            expect(spy.callCount).to.equal(2);
        });

        it('屏幕共享中断回调', async function() {
            const spy = sinon.spy();
            roomId = '1234';

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
            expect(spy.callCount).to.equal(2);
        });

        // mediaList 是 HTMLMediaElement，在 node 中无法测试
        // it('开始混音', async function() {
        //     zg = new ZegoExpressEngine(APPID, SERVER);
        //     const streamID = '';
        //     const mediaList = [];
        //     zg.startMixingAudio(streamID, mediaList);
        // });

        // mediaList 是 HTMLMediaElement，在 node 中无法测试
        // it('停止混音', async function() {});
    });

    describe('拉流功能', function() {
        before(async function() {
            const { data } = (await Axios.get(tokenURL, {
                params: { app_id: APPID, id_name: userID },
            })) as any;
            token = data;
        });

        beforeEach(() => {
            this.timeout(TIMEOUT);
            zg = new ZegoExpressEngine(APPID, SERVER);
        });

        // it('订阅拉流更新回调', function() {

        //     zg.on('roomStreamUpdate', );
        // });

        // it('获取远端流', function() {
        //     zg.startPlayingStream(streamID, playOption):
        // });
        // it('订阅拉流质量回调', function() {
        //     zg.on('playQualityUpdate', callBack:(streamID,stats)
        // });
        // it('停止拉流', function() {
        //     zg.stopPlayingStream(streamID)
        // });
        // it('流附加信息更新回调', function() {
        //     zg.on('streamExtraInfoUpdate', callBack:(roomID,streamList)
        // });
        // it('订阅拉流状态回调', function() {
        // ]zg.on('playerStateUpdate', callBack:(result) => void)
        // });
        // it('拉流摄像头状态回调', function() {
        //     zg.on('remoteCameraStatusUpdate', callBack:(streamID, status) => void)
        // });
        // it('拉流麦克风状态回调', function() {
        //     zg.on('remoteMicStatusUpdate', callBack:(streamID, status) => void)
        // });
        // it('设置音浪回调', function() {
        //     zg.setSoundLevelDelegate(boolean, interval)
        // });
        // it('音浪更新回调', function() {
        //     zg.on('soundLevelUpdate', callBack:(soundLevelList) => void)
        // });
    });

    // describe('混流功能', function() {
    //     it('开始混流', function() {
    //         zg.startMixerTask(mixStreamConfig):Promise<result>,发起（更新）混流信息
    //     });

    //     it('混流高级配置', function() {
    //         zg.setMixerTaskConfig(config):void
    //     });
    //     it('结束混流', function() {
    //         zg.stopMixerTask(taskID):Promise<result>
    //     });
    // });

    describe('消息功能', function() {
        let message: any;

        beforeEach(() => {
            this.timeout(TIMEOUT);
            zg = new ZegoExpressEngine(APPID, SERVER);
        });

        it('发送房间广播消息', async function() {
            try {
                message = 'zego SDK';
                roomId = '1234';

                const result = await zg.sendBroadcastMessage(roomId, message);
                expect(result.messageID).to.be.a('number');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('房间消息通知', async function() {
            const spy = sinon.spy();
            message = 'zego SDK';
            roomId = '1234';

            zg.on('IMRecvBroadcastMessage', spy);
            await zg.sendBroadcastMessage(roomId, message);

            expect(spy.called).to.be.true;
            expect(spy.callCount).to.equal(2);
        });

        it('发送房间弹幕消息', async function() {
            try {
                message = 'Hello from zego SDK';
                roomId = '1234';

                const result = await zg.sendBarrageMessage(roomId, message);
                expect(result.messageID).to.be.a('string');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('房间弹幕消息通知', async function() {
            const spy = sinon.spy();
            message = 'zego SDK';
            roomId = '1234';

            zg.on('IMRecvBarrageMessage', spy);
            await zg.sendBroadcastMessage(roomId, message);

            expect(spy.called).to.be.true;
            expect(spy.callCount).to.equal(1);
        });

        it('发送自定义信令', async function() {
            try {
                const toUserIDList = ['toUserIDList', 'sendCustomCommand'];
                message = 'Command from zego SDK';
                roomId = '1234';

                const result = await zg.sendCustomCommand(roomId, message, toUserIDList);
                expect(result.messageID).to.be.a('number');
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('监听自定义命令信令通知', async function() {
            const spy = sinon.spy();
            const toUserIDList = ['toUserIDList', 'sendCustomCommand'];
            message = 'Command from zego SDK';
            roomId = '1234';

            zg.on('IMRecvCustomCommand', spy);
            await zg.sendCustomCommand(roomId, message, toUserIDList);

            expect(spy.called).to.be.true;
            expect(spy.callCount).to.equal(1);
        });
    });
});
