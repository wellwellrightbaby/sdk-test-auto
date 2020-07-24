import { ZegoExpressEngine } from '../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import chai from 'chai';
import { webPublishOption } from '../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
const sinon = require('sinon');

const { expect, assert } = chai;
const userID = 'id' + new Date().getTime();
let user = {
    userID: userID,
    userName: 'name' + userID,
};
let roomId: any = '1234';
const APPID = 1739272706;
const SERVER = 'wss://webliveroom-test.test.im/ws';
const tokenURL = 'https://wsliveroom-demo.zego.im:8282/token';
let TIMEOUT = 10000;
let token = '';
let zg: ZegoExpressEngine;

describe('express-web', function() {
    describe('初始化相关的前置功能', function() {
        beforeEach(() => {
            zg = new ZegoExpressEngine(APPID, SERVER);
        });
    
        it('初始化sdk', async function() {
            expect(zg).is.not.null;
        });
    
        it('日志配置', function() {
            const result = zg.setLogConfig({
                logLevel: 'disable',
                remoteLogLevel: 'disable',
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
    
        it('可用性检测', function() {
            const test = async () => {
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
            };
    
            setTimeout(test, TIMEOUT);
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

        beforeEach(() => {
            zg = new ZegoExpressEngine(APPID, SERVER);
        });

        it('登录房间 roomId 传入非字符串，会返回 rejected 状态', async function() {
            roomId = 1234;
            try {
                // @ts-ignore
                return assert.isRejected(zg.loginRoom(roomId, token, user));
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('登录房间 roomId 传入字符串，会返回 fulfilled 状态', async function() {
            roomId = '1234';
            try {
                // @ts-ignore
                return assert.isFulfilled(zg.loginRoom(roomId, token, user));
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('登录房间 config 修改', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            let roomId = '1234';

            let config = {
                userUpdate: false,
                maxMemberCount: 3,
            };

            try {
                // @ts-ignore
                return assert.isFulfilled(zg.loginRoom(roomId, token, user, config));
            } catch (e) {
                assert.fail(JSON.stringify(e));
            }
        });

        it('登出房间', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            let roomId = '1234';

            let config = {
                userUpdate: false,
                maxMemberCount: 3,
            };

            await zg.loginRoom(roomId, token, user, config);
            await zg.logoutRoom(roomId);

            expect(zg.stateCenter.userid).to.be.equal('');
            expect(zg.stateCenter.sessionid).to.be.equal('');
        });

        it('房间状态更新回调：连接成功', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            let roomId = '1234';

            let config = {
                userUpdate: false,
                maxMemberCount: 3,
            };
            const spy = sinon.spy();

            zg.on('roomStateUpdate', spy);
            await zg.loginRoom(roomId, token, user, config);

            expect(spy.called).to.be.true;
            expect(spy.callCount).to.equal(1);
        });

        it('房间状态更新回调：断开连接', async function(done) {
            zg = new ZegoExpressEngine(APPID, SERVER);
            let roomId = '1234';

            let config = {
                userUpdate: false,
                maxMemberCount: 3,
            };
            const spy = sinon.spy();

            zg.on('roomStateUpdate', spy);
            await zg.loginRoom(roomId, token, user, config);
            await zg.logoutRoom(roomId);

            expect(spy.called).to.be.true;
            expect(spy.callCount).to.equal(2);
        });

        it('房间用户进出回调', async function() {
            const enterRoom = async ({ appid, server, uid, roomId, config }: any) => {
                zg = new ZegoExpressEngine(appid, server);
                let user = {
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

            expect(spy.callCount).to.equal(1);

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

            expect(spy.callCount).to.equal(2);

            await leaveRoom({
                user: user1,
                roomId: '1234',
            });

            expect(spy.callCount).to.equal(3);

            await leaveRoom({
                user: user2,
                roomId: '1234',
            });

            expect(spy.callCount).to.equal(4);
        });
    });

    describe('推流功能', function() {
        it('创建默认流', async function() {
            const publishStream = await zg.createStream();
            expect(publishStream.id).to.be.a('string');
            expect(publishStream.active).to.be.true;
            expect(zg.streamCenter.previewVideoList.length).to.equal(1);

            await zg.destroyStream(publishStream);
            expect(zg.streamCenter.previewVideoList.length).to.equal(0);
        });

        it('创建流，修改 camera 参数', async function() {
            const publishStream = await zg.createStream({
                camera: {
                    audio: false,
                    video: false,
                    videoQuality: 3,
                    facingMode: 'environment',
                },
            });
            expect(publishStream.id).to.be.a('string');
            expect(publishStream.active).to.be.true;
            expect(zg.streamCenter.previewVideoList.length).to.equal(1);

            await zg.destroyStream(publishStream);
            expect(zg.streamCenter.previewVideoList.length).to.equal(0);
        });

        it('创建流，修改 camera 参数', async function() {
            const publishStream = await zg.createStream({
                camera: {
                    audio: false,
                    video: false,
                    videoQuality: 3,
                },
            });
            expect(publishStream.id).to.be.a('string');
            expect(publishStream.active).to.be.true;
            expect(zg.streamCenter.previewVideoList.length).to.equal(1);

            await zg.destroyStream(publishStream);
            expect(zg.streamCenter.previewVideoList.length).to.equal(0);
        });

        it('创建流，修改 screen 参数', async function() {
            const publishStream = await zg.createStream({
                screen: {
                    audio: true,
                    videoQuality: 3,
                },
            });
            expect(publishStream.id).to.be.a('string');
            expect(publishStream.active).to.be.true;
            expect(zg.streamCenter.previewVideoList.length).to.equal(1);

            await zg.destroyStream(publishStream);
            expect(zg.streamCenter.previewVideoList.length).to.equal(0);
        });

        it('创建流，修改 screen 参数，设置 videoQuality 值为 4', async function() {
            const publishStream = await zg.createStream({
                screen: {
                    audio: true,
                    videoQuality: 4,
                    frameRate: 18,
                    bitrate: 1000,
                },
            });
            expect(publishStream.id).to.be.a('string');
            expect(publishStream.active).to.be.true;
            expect(zg.streamCenter.previewVideoList.length).to.equal(1);

            await zg.destroyStream(publishStream);
            expect(zg.streamCenter.previewVideoList.length).to.equal(0);
        });

        it('创建流，修改 custom 参数', async function() {
            const publishStream = await zg.createStream({
                custom: {
                    bitrate: 1000,
                },
            });
            expect(publishStream.id).to.be.a('string');
            expect(publishStream.active).to.be.true;
            expect(zg.streamCenter.previewVideoList.length).to.equal(1);

            await zg.destroyStream(publishStream);
            expect(zg.streamCenter.previewVideoList.length).to.equal(0);
        });

        it('发布推流', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            let roomId = '1234';
            // @ts-ignore
            await zg.loginRoom(roomId, token, user);

            const publishStream = await zg.createStream();
            const streamId = Math.random().toString(32);
            const result = await zg.startPublishingStream(streamId, publishStream);
            expect(result).to.be.a('boolean');
        });

        it('发布推流，修改 publishOption 参数', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            let roomId = '1234';
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
        });

        it('增加转推 CDN 地址', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            // todo: 方式未知
            const getSignature = (appID: number, timestamp: number, secret: string): string => '';
            const streamID = '1345';
            const signature = getSignature(APPID, Date.now(), '');
            // todo
            const targetURL = '';

            const result = await zg.addPublishCdnUrl(streamID, signature, targetURL);
            expect(result).to.keys('errorCode');
        });

        it('删除转推 CDN 地址', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            // todo: 方式未知
            const getSignature = (appID: number, timestamp: number, secret: string): string => '';
            const streamID = '1345';
            const signature = getSignature(APPID, Date.now(), '');
            // todo
            const targetURL = '';

            const result = await zg.removePublishCdnUrl(streamID, signature, targetURL);
            expect(result).to.keys('errorCode');
        });

        // 没有动态调整流质量的函数
        // it('订阅推流质量回调', () => {
        //     zg = new ZegoExpressEngine(APPID, SERVER);
        //     const spy = sinon.spy();

        //     zg.on('publishQualityUpdate', spy);
        // });

        it('打开/关闭流画面 CDN 地址', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            // todo: 方式未知
            const getSignature = (appID: number, timestamp: number, secret: string): string => '';
            const streamID = '1345';
            const signature = getSignature(APPID, Date.now(), '');
            // todo
            const targetURL = '';

            const result = await zg.removePublishCdnUrl(streamID, signature, targetURL);
            expect(result).to.have.keys('errorCode');
        });

        it('打开/关闭流画面', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            const publishStream = await zg.createStream();

            let result = zg.mutePublishStreamVideo(publishStream, false);
            // 如何检测视频流是否关闭
            expect(result).to.be.a('boolean');

            // 如何检测视频流是否开启
            result = zg.mutePublishStreamVideo(publishStream, true);
            expect(result).to.be.a('boolean');
        });

        it('打开/关闭流声音', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            const publishStream = await zg.createStream();

            let result = zg.mutePublishStreamAudio(publishStream, false);
            // 如何检测音频流是否关闭
            expect(result).to.be.a('boolean');

            // 如何检测音频流是否开启
            result = zg.mutePublishStreamAudio(publishStream, true);
            expect(result).to.be.a('boolean');
        });

        it('使用摄像头设备', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            const publishStream = await zg.createStream();

            let deviceId: any = '82fed889704cd583c49d36944f7260d9fc4b2334f5fe4bda054eee3738908da8';
            let result = await zg.useVideoDevice(publishStream, deviceId);
            // @ts-ignore
            expect(result).should.be.fulfilled;

            deviceId = 12345;
            result = await zg.useVideoDevice(publishStream, deviceId);
            // @ts-ignore
            expect(result).should.be.rejected;
        });

        it('使用麦克风设备', async function() {
            zg = new ZegoExpressEngine(APPID, SERVER);
            const publishStream = await zg.createStream();

            let deviceId: any = '82fed889704cd583c49d36944f7260d9fc4b2334f5fe4bda054eee3738908da8';
            let result = await zg.useAudioDevice(publishStream, deviceId);
            // @ts-ignore
            expect(result).should.be.fulfilled;

            deviceId = 12345;
            result = await zg.useVideoDevice(publishStream, deviceId);
            // @ts-ignore
            expect(result).should.be.rejected;
        });

        // it('订阅推流状态回调', async function() {

        // });

        // todo：如何通过 sdk 退出屏幕共享操作
        // it('屏幕共享中断回调', async function() {

        // });

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

    // describe('拉流功能', function() {
    //     it('订阅拉流更新回调', function() {

    //         zg.on('roomStreamUpdate', );
    //     });

    //     it('获取远端流', function() {
    //         zg.startPlayingStream(streamID, playOption):
    //     });
    //     it('订阅拉流质量回调', function() {
    //         zg.on('playQualityUpdate', callBack:(streamID,stats)
    //     });
    //     it('停止拉流', function() {
    //         zg.stopPlayingStream(streamID)
    //     });
    //     it('流附加信息更新回调', function() {
    //         zg.on('streamExtraInfoUpdate', callBack:(roomID,streamList)
    //     });
    //     it('订阅拉流状态回调', function() {
    //     ]zg.on('playerStateUpdate', callBack:(result) => void)
    //     });
    //     it('拉流摄像头状态回调', function() {
    //         zg.on('remoteCameraStatusUpdate', callBack:(streamID, status) => void)
    //     });
    //     it('拉流麦克风状态回调', function() {
    //         zg.on('remoteMicStatusUpdate', callBack:(streamID, status) => void)
    //     });
    //     it('设置音浪回调', function() {
    //         zg.setSoundLevelDelegate(boolean, interval)
    //     });
    //     it('音浪更新回调', function() {
    //         zg.on('soundLevelUpdate', callBack:(soundLevelList) => void)
    //     });
    //     it('', function() {});
    // });

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

    // describe('消息功能', function() {
    //     it('发送房间广播消息', function() {
    //         zg.sendBroadcastMessage(roomID, message):Promise<result>,参数如下：
    //     });

    //     it('房间消息通知', function() {
    //         zg.on('IMRecvBroadcastMessage', (roomID, ZegoMessageInfo[]) => void) ,参数如下:
    //     });
    //     it('发送房间弹幕消息', function() {
    //         zg.sendBarrageMessage(roomID, message):Promise<result>,参数如下：
    //     });
    //     it('房间弹幕消息通知', function() {
    //         zg.on('IMRecvBarrageMessage', (roomID, ZegoMessageInfo[]) => void) ,参数如下:
    //     });
    //     it('发送自定义信令', function() {
    //         zg.sendCustomCommand(roomID, command, toUserIDList):Promise<result>,参数如下：
    //     });
    //     it('监听自定义命令信令通知', function() {
    //         zg.on('IMRecvCustomCommand', (roomID,fromUser,command) => void) 参数如下
    //     });
    // });
});
