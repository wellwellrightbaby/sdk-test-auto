import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { LOG_LEVEL } from '../../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
import { before } from 'mocha';
//import { deviceId } from './../zego-express-engine-webrtc/config';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let token = '';
let zg: ZegoExpressEngine;
let publishStream: MediaStream;
let roomID: any;
let firstCamera;
let firstMicrophones: any;
let video: any;
const mydate = new Date();

describe('1.12.0 createStream', function() {
    before(async function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
    });

    beforeEach(function() {
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
    });

    // it('1.12.0 创建流，宽为带小数点时', function(done) {
    //     console.log('1.12.0 创建流，宽为带小数点时');
    //     this.timeout(TIMEOUT);

    //     const test = () => {
    //         try {
    //             // @ts-ignore
    //             zg.createStream({
    //                 camera: {
    //                     videoQuality: 4,
    //                     width: 640.23,
    //                     height: 300,
    //                     frameRate: 15,
    //                     bitrate: 1500,
    //                 },
    //             }).then(
    //                 MediaStream => {
    //                     video.srcObject = MediaStream;
    //                     expect(MediaStream).to.to.be.empty;
    //                     expect(MediaStream).to.to.be.a('MediaStream');
    //                     done();
    //                 },
    //                 e => done(),
    //             );
    //         } catch (e) {
    //             done(e);
    //         }
    //     };
    //     setTimeout(test, DELAY);
    // });

    // it('1.12.0 创建流，高为带小数点时', function(done) {
    //     console.log('1.12.0 创建流，高为带小数点时');
    //     this.timeout(TIMEOUT);

    //     const test = () => {
    //         try {
    //             // @ts-ignore
    //             zg.createStream({
    //                 camera: {
    //                     videoQuality: 4,
    //                     width: 640,
    //                     height: 300.55,
    //                     frameRate: 15,
    //                     bitrate: 1500,
    //                 },
    //             }).then(
    //                 MediaStream => {
    //                     video.srcObject = MediaStream;
    //                     expect(MediaStream).to.to.be.empty;
    //                     expect(MediaStream).to.to.be.a('MediaStream');
    //                     done();
    //                 },
    //                 e => done(),
    //             );
    //         } catch (e) {
    //             done(e);
    //         }
    //     };
    //     setTimeout(test, DELAY);
    // });

    // it('1.12.0 创建流，宽和高为带小数点时', function(done) {
    //     console.log('1.12.0 创建流，宽和高为带小数点时');
    //     this.timeout(TIMEOUT);

    //     const test = () => {
    //         try {
    //             // @ts-ignore
    //             zg.createStream({
    //                 camera: {
    //                     videoQuality: 4,
    //                     width: 640.05,
    //                     height: 300.50,
    //                     frameRate: 15,
    //                     bitrate: 1500,
    //                 },
    //             }).then(
    //                 MediaStream => {
    //                     video.srcObject = MediaStream;
    //                     expect(MediaStream).to.to.be.empty;
    //                     expect(MediaStream).to.to.be.a('MediaStream');
    //                     done();
    //                 },
    //                 e => done(),
    //             );
    //         } catch (e) {
    //             done(e);
    //         }
    //     };
    //     setTimeout(test, DELAY);
    // });

    // it('1.12.0 创建流，帧率和码率为带小数点时', function(done) {
    //     console.log('1.12.0 创建流，帧率和码率为带小数点时');
    //     this.timeout(TIMEOUT);

    //     const test = () => {
    //         try {
    //             // @ts-ignore
    //             zg.createStream({
    //                 camera: {
    //                     videoQuality: 4,
    //                     width: 640,
    //                     height: 300,
    //                     frameRate: 15.23,
    //                     bitrate: 1500.20,
    //                 },
    //             }).then(
    //                 MediaStream => {
    //                     video.srcObject = MediaStream;
    //                     expect(MediaStream).to.to.be.empty;
    //                     expect(MediaStream).to.to.be.a('MediaStream');
    //                     done();
    //                 },
    //                 e => done(),
    //             );
    //         } catch (e) {
    //             done(e);
    //         }
    //     };
    //     setTimeout(test, DELAY);
    // });

    // it('1.12.0 创建流，码率为带小数点时', function(done) {
    //     console.log('1.12.0 创建流，码率为带小数点时');
    //     this.timeout(TIMEOUT);

    //     const test = () => {
    //         try {
    //             // @ts-ignore
    //             zg.createStream({
    //                 camera: {
    //                     videoQuality: 4,
    //                     width: 640,
    //                     height: 300,
    //                     frameRate: 15,
    //                     bitrate: 1500.20,
    //                 },
    //             }).then(
    //                 MediaStream => {
    //                     video.srcObject = MediaStream;
    //                     expect(MediaStream).to.to.be.empty;
    //                     expect(MediaStream).to.to.be.a('MediaStream');
    //                     done();
    //                 },
    //                 e => done(),
    //             );
    //         } catch (e) {
    //             done(e);
    //         }
    //     };
    //     setTimeout(test, DELAY);
    // });

    // it('1.12.0 创建流，宽、高、帧率和码率为带小数点时', function(done) {
    //     console.log('1.12.0 创建流，宽、高、帧率和码率为带小数点时');
    //     this.timeout(TIMEOUT);

    //     const test = () => {
    //         try {
    //             // @ts-ignore
    //             zg.createStream({
    //                 camera: {
    //                     videoQuality: 4,
    //                     width: 640.005,
    //                     height: 300.03,
    //                     frameRate: 15.23,
    //                     bitrate: 1500.20,
    //                 },
    //             }).then(
    //                 MediaStream => {
    //                     video.srcObject = MediaStream;
    //                     expect(MediaStream).to.to.be.empty;
    //                     expect(MediaStream).to.to.be.a('MediaStream');
    //                     done();
    //                 },
    //                 e => done(),
    //             );
    //         } catch (e) {
    //             done(e);
    //         }
    //     };
    //     setTimeout(test, DELAY);
    // });

    // it('1.12.0 创建流，宽、高、帧率和码率为整数时', function(done) {
    //     console.log('1.12.0 创建流，宽、高、帧率和码率为整数时');
    //     this.timeout(TIMEOUT);

    //     const test = () => {
    //         try {
    //             // @ts-ignore
    //             zg.createStream({
    //                 camera: {
    //                     videoQuality: 4,
    //                     width: 640,
    //                     height: 300,
    //                     frameRate: 15,
    //                     bitrate: 1500,
    //                 },
    //             }).then(
    //                 MediaStream => {
    //                     video.srcObject = MediaStream;
    //                     expect(MediaStream).to.to.be.empty;
    //                     expect(MediaStream).to.to.be.a('MediaStream');
    //                     done();
    //                 },
    //                 e => done(),
    //             );
    //         } catch (e) {
    //             done(e);
    //         }
    //     };
    //     setTimeout(test, DELAY);
    // });

    it('1.12.0 登录并创建流，宽和高为带小数点时', async function(done) {
        console.log('1.12.0 登录并创建流，宽和高为带小数点时');
        this.timeout(TIMEOUT);
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID + '1' },
        });
        token = data;

        // Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
        //           params: { app_id: APPID, id_name: userID+'1' },
        //     }).then(AxiosRespon => {
        //         console.log(AxiosRespon)
        //         token1 = AxiosRespon.data;
        // });

        roomID = 'v1.12.0_roomID1';
        zg.loginRoom(roomID, token, {
            userID: userID + '1',
            userName: 'v1.12.0_userName1',
        });

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        width: 640.05,
                        height: 300.5,
                        frameRate: 15,
                        bitrate: 1500,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => done(),
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('1.12.0 登录并创建流，宽、高、帧率、码率为整数时', async function(done) {
        console.log('1.12.0 登录并创建流，宽、高、帧率、码率为整数时');
        this.timeout(TIMEOUT);
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID + '2' },
        });
        token = data;
        // Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
        //           params: { app_id: APPID, id_name: userID+'1' },
        //     }).then(AxiosRespon => {
        //         token = AxiosRespon.data;
        // });

        roomID = 'v1.12.0_roomID2';
        zg.loginRoom(roomID, token, {
            userID: userID + '2',
            userName: 'v1.12.0_userName2',
        });

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        width: 640,
                        height: 300,
                        frameRate: 15,
                        bitrate: 1500,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => done(),
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });
});

describe('v1.12.0 logout', function() {
    before(async function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
        const result1 = zg.on('roomUserUpdate', (roomID, updateType, userList) => {
            console.warn(
                `roomUserUpdate: room ${roomID}, user ${updateType === 'ADD' ? 'added' : 'left'} `,
                JSON.stringify(userList),
            );
        });
        expect(result1).to.be.true;
    });

    it('connect', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        roomID = 'loginRoom_1234567890ha';
        const result = await zg.loginRoom(
            roomID,
            token,
            {
                userID: userID,
                userName: 'userName',
            },
            { userUpdate: true },
        );
        expect(result).to.be.true;
    });

    it('connect and disconnect1', async function() {
        const zg1 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test1' },
        });
        roomID = 'loginRoom_1234567890ha';
        const result = await zg1.loginRoom(roomID, data, {
            userID: 'test1',
            userName: 'uName_test1',
        });
        expect(result).to.be.true;
        const result1 = await zg1.logoutRoom(roomID);
        expect(result1).to.be.undefined;
    });

    it('connect and disconnect2', async function() {
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test1' },
        });
        roomID = 'loginRoom_1234567890ha';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test1',
            userName: 'uName_test1',
        });
        expect(result).to.be.true;
        const result1 = await zg2.logoutRoom();
        expect(result1).to.be.undefined;
    });

    it('connect and disconnect3', async function() {
        const zg3 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test1' },
        });
        roomID = 'loginRoom_1234567890ha';
        const result = await zg3.loginRoom(roomID, data, {
            userID: 'test1',
            userName: 'uName_test1',
        });
        expect(result).to.be.true;

        const abc = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test2' },
        });
        token = abc.data;
        const result2 = await zg3.loginRoom(roomID, token, {
            userID: 'test2',
            userName: 'uName_test2',
        });
        expect(result).to.be.true;

        const result1 = await zg3.logoutRoom(roomID);
        expect(result1).to.be.undefined;
    });

    it('connect and disconnect4', async function() {
        const zg4 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test11' },
        });
        roomID = 'loginRoom_1234567890ha';
        const result = await zg4.loginRoom(roomID, data, {
            userID: 'test11',
            userName: 'uName_test11',
        });
        expect(result).to.be.true;

        const abc = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test22' },
        });
        token = abc.data;
        const result2 = await zg4.loginRoom(roomID, token, {
            userID: 'test22',
            userName: 'uName_test22',
        });
        expect(result).to.be.true;

        const result1 = await zg4.logoutRoom();
        expect(result1).to.be.undefined;
    });
});

describe('混流功能', function() {
    before(async () => {
        console.warn('开始测试停止混流里logout问题');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result1 = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result1).to.be.true;

        roomID = 'mixer1.12.0';
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test_mixer' },
        });
        const result = await zg.loginRoom(roomID, data, {
            userID: 'test_mixer',
            userName: 'uName_test_mixer',
        });
        expect(result).to.be.true;
    });

    // after(()=>{
    //     console.warn('完成测试停止混流里logout问题')
    // })

    // it('开始混流', function(done) {
    //     console.log('开始混流')
    //     this.timeout(TIMEOUT);

    //     const test = async () => {
    //         try {
    //             const taskID = 'taskId';
    //             const stream = await zg.createStream();
    //             zg.startPublishingStream(stream.id, stream);

    //             // 延时，保证推流成功。再去执行混流
    //             setTimeout(async () => {
    //                 try {
    //                     const inputList = [
    //                         {
    //                             streamID: stream.id,
    //                             layout: {
    //                                 top: 3,
    //                                 left: 3,
    //                                 bottom: 5,
    //                                 right: 5,
    //                             },
    //                             contentType: 'VIDEO',
    //                         },
    //                     ];
    //                     const outputList = [
    //                         {
    //                             target: 'output-stream id or url',
    //                         },
    //                     ];
    //                     const outputConfig = {
    //                         outputBitrate: 300,
    //                         outputFPS: 15,
    //                         outputWidth: 320,
    //                         outputHeight: 480,
    //                         // singleStreamPassThrough: true
    //                     };
    //                     zg.startMixerTask({
    //                         taskID,
    //                         outputList,
    //                         outputConfig,
    //                         inputList,
    //                     }).then(
    //                         res=>{
    //                             //zg.logoutRoom()
    //                             expect(res).to.have.keys(['errorCode', 'extendedData']);
    //                         },
    //                     ).catch(err => {
    //                         console.error(err)
    //                     });
    //                     //expect(result).to.have.keys(['errorCode', 'extendedData']);
    //                     done();
    //                 } catch (e) {
    //                     done(e);
    //                 }
    //             }, DELAY);
    //         } catch (e) {
    //             done(e);
    //         }
    //     };

    //     setTimeout(test, DELAY);
    // });

    // it('混流高级配置', function(done) {
    //     this.timeout(TIMEOUT);

    //     const test = async () => {
    //         try {
    //             const taskID = 'taskId';
    //             const stream = await zg.createStream();
    //             await zg.startPublishingStream(stream.id, stream);

    //             // 延时，保证推流成功。再去执行混流
    //             setTimeout(async () => {
    //                 try {
    //                     const inputList = [
    //                         {
    //                             streamID: stream.id,
    //                             layout: {
    //                                 top: 3,
    //                                 left: 3,
    //                                 bottom: 5,
    //                                 right: 5,
    //                             },
    //                             contentType: 'VIDEO',
    //                         },
    //                     ];
    //                     const outputList = [
    //                         {
    //                             target: 'output-stream id or url',
    //                         },
    //                     ];
    //                     const outputConfig = {
    //                         outputBitrate: 300,
    //                         outputFPS: 15,
    //                         outputWidth: 320,
    //                         outputHeight: 480,
    //                         // singleStreamPassThrough: true
    //                     };

    //                     zg.setMixerTaskConfig({
    //                         // 16 进制 rgb
    //                         backgroundColor: 666666,
    //                         // backgroundImage: '#FFB400',
    //                         videoCodec: 'h264',
    //                     });

    //                     const result = await zg.startMixerTask({
    //                         taskID,
    //                         outputList,
    //                         outputConfig,
    //                         inputList,
    //                     });
    //                     expect(result).to.have.keys(['errorCode', 'extendedData']);
    //                     done();
    //                 } catch (e) {
    //                     done(e);
    //                 }
    //             });
    //         } catch (e) {
    //             done(e);
    //         }
    //     };

    //     setTimeout(test, DELAY);
    // });

    it('结束混流', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const taskID = 'taskId';
                const stream = await zg.createStream();
                await zg.startPublishingStream(stream.id, stream);

                // 延时，保证推流成功。再去执行混流
                setTimeout(async () => {
                    try {
                        const inputList = [
                            {
                                streamID: stream.id,
                                layout: {
                                    top: 3,
                                    left: 3,
                                    bottom: 5,
                                    right: 5,
                                },
                                contentType: 'VIDEO',
                            },
                        ];
                        const outputList = [
                            {
                                target: '13579246810' + new Date().getTime(),
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320,
                            outputHeight: 480,
                            // singleStreamPassThrough: true
                        };

                        zg.startMixerTask({
                            taskID,
                            outputList,
                            outputConfig,
                            inputList,
                        }).then(res => {
                            console.warn('混流成功');
                            expect(res).to.have.keys(['errorCode', 'extendedData']);
                        });

                        zg.stopMixerTask(taskID)
                            .then(res => {
                                console.warn('停止混流成功');
                                zg.logoutRoom('mixer1.12.0');
                                console.warn('完成测试停止混流里logout问题');
                                expect(res).to.have.keys(['errorCode']);
                            })
                            .catch(err => {
                                zg.logoutRoom('mixer1.12.0');
                                console.error('停止混流失败:' + err);
                            });
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
});
