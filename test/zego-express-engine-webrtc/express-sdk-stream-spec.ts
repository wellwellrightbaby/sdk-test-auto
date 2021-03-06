import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { LOG_LEVEL } from '../../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
import { before } from 'mocha';
//import { deviceId } from './../zego-express-engine-webrtc/config';
import { inputParamErrorwidth, inputParamErrorbitraterequired } from './config';
import { P0, P1, P2 } from './config';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
const token = '';
let zg: ZegoExpressEngine;
let publishStream: MediaStream;
let roomID: string;
let firstCamera;
let firstMicrophones: any;
let video: any;
let num = 0;
//#region createStream
/*
describe('createStream', function() {
    before(async function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
        zg.checkSystemRequirements()
        const deviceResult = await zg.enumDevices();
        firstCamera = deviceResult.cameras[0].deviceName;
        firstMicrophones = deviceResult.microphones[0].deviceName;
        console.log('firstCamera：' + firstCamera);
        console.log('firstMicrophones：' + firstMicrophones);
    });

    beforeEach(function() {
        num += 1;
        console.warn('createStream TestCase Begin ' + num);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('createStream TestCase End ' + num);
    });
    if (P0) {
        it('创建流 不带source参数（source 不传默认采集视频质量为 2 的摄像头麦克风数据）', function(done) {
            //   const _constraints = {
            //       camera: {
            //           audioInput: $('#audioList').val() as string,
            //           videoInput: $('#videoList').val() as string,
            //           video: video !== undefined ? video : $('#videoList').val() === '0' ? false : true,
            //           audio: $('#audioList').val() === '0' ? false : true,
            //       },
            //   };
            console.warn('1:创建流 不带source参数（source 不传默认采集视频质量为 2 的摄像头麦克风数据）'); //推流音视频
            this.timeout(TIMEOUT);
            const test = () => {
                try {
                    zg.createStream().then(
                        MediaStream => {
                            video.srcObject = MediaStream;
                            expect(MediaStream).to.to.be.a('MediaStream');
                            done();
                        },
                        e => {
                            expect(e).to.be.null;
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('创建流 带三个参数，但三个参数都为空', function(done) {
            console.warn('2:创建流 带三个参数，但三个参数都为空'); //共享屏幕
            this.timeout(TIMEOUT);
            const test = () => {
                try {
                    zg.createStream({
                        camera: {},
                        screen: {},
                        custom: {},
                    }).then(
                        MediaStream => {
                            video.srcObject = MediaStream;
                            expect(MediaStream).to.to.be.a('MediaStream');
                            done();
                        },
                        e => {
                            expect(e).to.be.null;
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('创建流 带camera参数，但camera参数为空', function(done) {
            console.warn('3:创建流 带camera参数，但camera参数为空'); //推流音视频
            this.timeout(TIMEOUT);
            const test = () => {
                try {
                    zg.createStream({
                        camera: {},
                    }).then(
                        MediaStream => {
                            video.srcObject = MediaStream;
                            expect(MediaStream).to.to.be.a('MediaStream');
                            done();
                        },
                        e => {
                            expect(e).to.be.null;
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('创建流 带screen参数，但screen参数为空', function(done) {
            console.warn('4:创建流 带screen参数，但screen参数为空'); //共享屏幕
            this.timeout(TIMEOUT);
            const test = () => {
                try {
                    zg.createStream({
                        screen: {},
                    }).then(
                        MediaStream => {
                            video.srcObject = MediaStream;
                            expect(MediaStream).to.to.be.a('MediaStream');
                            done();
                        },
                        e => {
                            expect(e).to.be.null;
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('创建流 带custom参数，但custom参数为空', function(done) {
            console.warn('5:创建流 带custom参数，但custom参数为空'); //推流音视频
            this.timeout(TIMEOUT);
            const test = () => {
                try {
                    zg.createStream({
                        custom: {},
                    }).then(
                        MediaStream => {
                            video.srcObject = MediaStream;
                            expect(MediaStream).to.to.be.a('MediaStream');
                            done();
                        },
                        e => {
                            expect(e).to.be.null;
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });
    }
});
*/
//#endregion

//#region createStream camera

describe('createStream camera', function() {
    before(async function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
        zg.checkSystemRequirements();
        const deviceResult = await zg.enumDevices();
        firstCamera = deviceResult.cameras[0].deviceName;
        firstMicrophones = deviceResult.microphones[0].deviceName;
        console.log('firstCamera：' + firstCamera);
        console.log('firstMicrophones：' + firstMicrophones);
    });

    beforeEach(function() {
        num += 1;
        console.warn('createStream camera TestCase Begin ' + num);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('createStream camera TestCase End ' + num);
    });

    //camera参数测试
    it('创建流，修改 camera 参数，同时禁用 audio 和 video 会抛出错误', function(done) {
        console.warn('6:创建流，修改 camera 参数，同时禁用 audio 和 video 会抛出错误');
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
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done('should be rejected');
                    },
                    e => {
                        console.warn(JSON.stringify(e));
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,audioInput和videoInput乱填', function(done) {
        console.warn('7:创建流，修改 camera 参数,audioInput和videoInput乱填');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        audioInput: 'test',
                        videoInput: 'test',
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done('should be rejected');
                    },
                    e => {
                        console.warn(JSON.stringify(e));
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,videoInput乱填,添加facingMode', function(done) {
        console.warn('8:创建流，修改 camera 参数,videoInput乱填,添加facingMode'); //有facingMode参数会忽略videoInput参数
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        videoInput: 'test',
                        facingMode: 'environment',
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,视频质量等级为1', function(done) {
        console.warn('9:创建流，修改 camera 参数,视频质量等级为1');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        videoQuality: 1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,视频质量等级为3', function(done) {
        console.warn('10:创建流，修改 camera 参数,视频质量等级为3');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        videoQuality: 3,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,视频质量等级为4,不传需要传的width/height/frameRate/bitrate属性', function(done) {
        console.warn('11:创建流，修改 camera 参数,视频质量等级为4,不传需要传的width/height/frameRate/bitrate属性');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        console.warn(JSON.stringify(e));
                        expect(e).to.deep.equal(inputParamErrorwidth);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,视频质量等级为4,传需要传的width/height/frameRate/bitrate属性', function(done) {
        console.warn('12:创建流，修改 camera 参数,视频质量等级为4,传需要传的width/height/frameRate/bitrate属性');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        width: 1280,
                        height: 720,
                        frameRate: 4,
                        bitrate: 2000,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,facingMode为user', function(done) {
        console.warn('13:创建流，修改 camera 参数,facingMode为user');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        facingMode: 'user',
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,facingMode为environment', function(done) {
        console.warn('14:创建流，修改 camera 参数,facingMode为environment');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        facingMode: 'environment',
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,声道数为1', function(done) {
        console.warn('15:创建流，修改 camera 参数,声道数为1');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        channelCount: 1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,声道数为2', function(done) {
        console.warn('16:创建流，修改 camera 参数,声道数为2');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        channelCount: 2,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,声道数为3（异常值）', function(done) {
        console.warn('17:创建流，修改 camera 参数,声道数为3（异常值）');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        channelCount: 3,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 camera 参数,ANS,AGC,AEC为false', function(done) {
        console.warn('18:创建流，修改 camera 参数,ANS,AGC,AEC为false');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    camera: {
                        ANS: false,
                        AGC: false,
                        AEC: false,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});

//#endregion

//#region createStream screen
/*
describe('createStream screen', function() {
    before(async function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
        const deviceResult = await zg.enumDevices();
        firstCamera = deviceResult.cameras[0].deviceName;
        firstMicrophones = deviceResult.microphones[0].deviceName;
        console.log('firstCamera：' + firstCamera);
        console.log('firstMicrophones：' + firstMicrophones);
    });

    beforeEach(function() {
        num += 1;
        console.warn('createStream screen TestCase Begin ' + num);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('createStream screen TestCase End ' + num);
    });

    it('创建流，修改 screen 参数,audio为true', function(done) {
        console.warn('19:创建流，修改 screen 参数,audio为true');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数,videoQuality为1', function(done) {
        console.warn('20:创建流，修改 screen 参数,videoQuality为1');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        videoQuality: 1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数,videoQuality为2', function(done) {
        console.warn('21:创建流，修改 screen 参数,videoQuality为2');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 2,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数,videoQuality为3', function(done) {
        console.warn('22:创建流，修改 screen 参数,videoQuality为3');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 3,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数,videoQuality为4，并传需要的frameRate/birate', function(done) {
        console.warn('23:创建流，修改 screen 参数,videoQuality为4，并传需要的frameRate/birate');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 4,
                        frameRate: 15,
                        bitrate: 2000,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数,videoQuality为4，并传需要的frameRate/birate/width', function(done) {
        console.warn('23:创建流，修改 screen 参数,videoQuality为4，并传需要的frameRate/birate/width');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 4,
                        frameRate: 15,
                        bitrate: 2000,
                        width: 500,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数,videoQuality为4，并传需要的frameRate/birate/width/height', function(done) {
        console.warn('23:创建流，修改 screen 参数,videoQuality为4，并传需要的frameRate/birate/width/height');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 4,
                        frameRate: 15,
                        bitrate: 1500,
                        width: 500,
                        height: 500,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.be.null;
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('创建流，修改 screen 参数,videoQuality为4，并不传需要的frameRate/birate', function(done) {
        console.warn('24:创建流，修改 screen 参数,videoQuality为4，并不传需要的frameRate/birate');
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                // @ts-ignore
                zg.createStream({
                    screen: {
                        audio: true,
                        videoQuality: 4,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        console.warn(JSON.stringify(e));
                        expect(e).to.deep.equal(inputParamErrorbitraterequired);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});

//#endregion

//#region createStream custom

describe('createstream custom', function() {
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
        num += 1;
        console.warn('createStream custom TestCase Begin ' + num);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('createStream custom TestCase End ' + num);
    });

    if (P0) {
        it('创建流，修改 custom 参数：参数只写source', function(done) {
            console.warn('1');
            this.timeout(TIMEOUT);

            const videotest = document.createElement('video');
            videotest.src = 'https://zego-public.oss-cn-shanghai.aliyuncs.com/sdk-doc/assets/big_buck_bunny.mp4';
            videotest.width = 300;
            videotest.height = 300;
            videotest.autoplay = true;
            videotest.controls = true;
            videotest.loop = true;
            document.body.appendChild(videotest);

            const test = () => {
                try {
                    // @ts-ignore
                    zg.createStream({
                        custom: {
                            source: videotest,
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

        it('创建流，修改 custom 参数：参数写source和bitrate', function(done) {
            console.warn('2');
            this.timeout(TIMEOUT);

            const videotest = document.createElement('video');
            videotest.src = 'https://zego-public.oss-cn-shanghai.aliyuncs.com/sdk-doc/assets/big_buck_bunny.mp4';
            videotest.width = 300;
            videotest.height = 300;
            videotest.autoplay = true;
            videotest.controls = true;
            videotest.loop = true;
            document.body.appendChild(videotest);

            const test = () => {
                try {
                    // @ts-ignore
                    zg.createStream({
                        custom: {
                            source: videotest,
                            bitrate: 2000,
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
    }
});
*/
//#endregion
