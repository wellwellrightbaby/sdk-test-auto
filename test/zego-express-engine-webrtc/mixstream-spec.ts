import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import { TIMEOUT, DELAY, APPID, SERVER, getToken, randomStr, loginRoom } from './config';

const { expect } = chai;

let userID: any;
let roomId: any;
let zg: ZegoExpressEngine;
let token = '';
let user: any;

describe('混流功能', function() {
    beforeEach(async () => {
        roomId = randomStr();
        userID = randomStr();
        const data = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, userID);
        zg = data.zg;
        token = data.token;
        zg.setDebugVerbose(false);
    });

    it('开始混流', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const taskID = 'taskId';
                const stream = await zg.createStream();
                zg.startPublishingStream(stream.id, stream);

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
                                target: 'output-stream id or url',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320,
                            outputHeight: 480,
                            // singleStreamPassThrough: true
                        };
                        const result = await zg.startMixerTask({
                            taskID,
                            outputList,
                            outputConfig,
                            inputList,
                        });
                        expect(result).to.have.keys(['errorCode', 'extendedData']);
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

    it('混流高级配置', function(done) {
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
                                target: 'output-stream id or url',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320,
                            outputHeight: 480,
                            // singleStreamPassThrough: true
                        };

                        zg.setMixerTaskConfig({
                            // 16 进制 rgb
                            backgroundColor: 666666,
                            // backgroundImage: '#FFB400',
                            videoCodec: 'h264',
                        });

                        const result = await zg.startMixerTask({
                            taskID,
                            outputList,
                            outputConfig,
                            inputList,
                        });
                        expect(result).to.have.keys(['errorCode', 'extendedData']);
                        done();
                    } catch (e) {
                        done(e);
                    }
                });
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

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
                                target: 'output-stream id or url',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320,
                            outputHeight: 480,
                            // singleStreamPassThrough: true
                        };

                        const result = await zg.startMixerTask({
                            taskID,
                            outputList,
                            outputConfig,
                            inputList,
                        });
                        expect(result).to.have.keys(['errorCode', 'extendedData']);

                        const taskResult = await zg.stopMixerTask(taskID);
                        expect(taskResult).to.have.keys(['errorCode']);
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
