import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { LOG_LEVEL } from '../../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
import { before } from 'mocha';
import { tokenError } from '../zego-express-engine-webrtc/config';
import { numMustBeIntegerError } from './../zego-express-engine-webrtc/config';
//import { deviceId } from './../zego-express-engine-webrtc/config';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let zg: ZegoExpressEngine;
let publishStream: MediaStream;
let roomID: any;
let firstCamera;
let firstMicrophones: any;
let video: any;
const mydate = new Date();
let num = 0;
let token = '';

describe('1.13.0 number小数点检查 createStream 参数为screen对象', function() {
    before(function(done) {
        num = 0;
        this.timeout(TIMEOUT);
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const test = () => {
            zg.checkSystemRequirements().then(deviceResult => {
                expect(deviceResult).to.have.property('webRTC', true);
                expect(deviceResult).to.have.property('customCapture', true);
                expect(deviceResult).to.have.property('camera', true);
                expect(deviceResult).to.have.property('microphone', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('H264', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('VP8', true);
                expect(deviceResult).to.have.property('screenSharing', true);
                done();
            });
        };
        setTimeout(test, DELAY);
    });

    beforeEach(function() {
        num += 1;
        console.warn('number小数点检查 createStream Begin ' + num);
        this.timeout(TIMEOUT);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('number小数点检查 createStream End ' + num);
    });

    it('1.创建流 screen对象 videoQuality为默认2', function(done) {
        console.warn('1.创建流 screen对象 videoQuality为默认2');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
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

    it('2.创建流 screen对象 videoQuality为0', function(done) {
        console.warn('2.创建流 screen对象 videoQuality为0');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 0,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.创建流 screen对象 videoQuality为2.3', function(done) {
        console.warn('3.创建流 screen对象 videoQuality为2.3');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 2.3,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.创建流 screen对象 videoQuality为-2.3', function(done) {
        console.warn('4.创建流 screen对象 videoQuality为-2.3');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: -2.3,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('1.创建流 screen对象 videoQuality为4时frameRate为正常15', function(done) {
        console.warn('1.创建流 screen对象 videoQuality为4时frameRate为正常15');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 4,
                        frameRate: 15,
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

    it('2.创建流 screen对象 videoQuality为4时frameRate为0', function(done) {
        console.warn('2.创建流 videoQuality为4时frameRate为0');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 4,
                        frameRate: 0,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.创建流 screen对象 videoQuality为4时frameRate为正数小数点15.6', function(done) {
        console.warn('3.创建流 videoQuality为4时frameRate为正数小数点15.6');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 4,
                        frameRate: 15.6,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.创建流 screen对象 videoQuality为4时frameRate为负数小数点-15.6', function(done) {
        console.warn('4.创建流 videoQuality为4时frameRate为负数小数点-15.6');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 4,
                        frameRate: -15.6,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('5.创建流 screen对象 videoQuality为4时bitrate为正常800', function(done) {
        console.warn('5.创建流 screen对象 videoQuality为4时bitrate为正常800');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 4,
                        bitrate: 800,
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

    it('6.创建流 screen对象 videoQuality为4时bitrate为0', function(done) {
        console.warn('6.创建流 videoQuality为4时bitrate为0');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 4,
                        bitrate: 0,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('7.创建流 screen对象 videoQuality为4时bitrate为正数小数点801.1', function(done) {
        console.warn('7.创建流 videoQuality为4时bitrate为正数小数点801.1');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 4,
                        bitrate: 801.1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('8.创建流 screen对象 videoQuality为4时bitrate为负数小数点-801.1', function(done) {
        console.warn('8.创建流 videoQuality为4时bitrate为负数小数点-801.1');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    screen: {
                        videoQuality: 4,
                        bitrate: -801.1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
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


describe('1.13.0 number小数点检查 初始化', function() {
    before(function() {
        num = 0;
        console.warn('初始化SDK All Begin');
    });

    after(function() {
        console.warn('初始化SDK All End');
    });

    beforeEach(function() {
        this.timeout(TIMEOUT);
        num += 1;
        console.warn('初始化SDK TestCase Begin ' + num);
    });

    afterEach(function() {
        console.warn('初始化SDK TestCase End ' + num);
    });

    it('初始化sdk：正常场景1', function() {
        const zg1 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg1).is.not.null;
    });

    it('初始化sdk：正常场景2', function() {
        const zg2 = new ZegoExpressEngine(APPID, [
            'wss://webliveroom-test.zego.im/ws',
            'wss://webliveroom-test.zego.im/ws',
        ]);
        expect(zg2).is.not.null;
    });

    it('初始化sdk：异常场景1', function() {
        //APPID为0
        const zg3 = new ZegoExpressEngine(0, 'wss://webliveroom-test.zego.im/ws');
        expect(zg3).is.not.null;
    });

    it('初始化sdk：异常场景2', function() {
        //APPID为正数小数点
        const zg4 = new ZegoExpressEngine(1.1, 'wss://webliveroom-test.zego.im/ws');
        expect(zg4).is.not.null;
    });

    it('初始化sdk：异常场景3', function() {
        //APPID为负数小数点
        const zg5 = new ZegoExpressEngine(-1.1, [
            'wss://webliveroom-test.zego.im/ws',
            'wss://webliveroom-test.zego.im/ws',
        ]);
        expect(zg5).is.not.null;
    });
});

describe('1.13.0 number小数点检查 loginRoom', function() {
    before(async function() {
        num = 0;
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
    });

    beforeEach(function() {
        num += 1;
        console.warn('number小数点检查 loginRoom Begin ' + num);
    });

    afterEach(function() {
        console.warn('number小数点检查 loginRoom End ' + num);
    });

    it('loginRoom 填config参数 maxMemberCount正常', function(done) {
        this.timeout(TIMEOUT);
        roomID = 'roomID';
        const test = () => {
            try {
                zg.loginRoom(
                    roomID,
                    token,
                    {
                        userID: userID,
                        userName: 'userName',
                    },
                    {
                        userUpdate: false,
                        maxMemberCount: 0,
                    },
                ).then(
                    loginResult => {
                        expect(loginResult).to.be.true;
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

    it('loginRoom 填config参数 maxMemberCount为正数整数', function(done) {
        this.timeout(TIMEOUT);
        roomID = 'roomID';
        const test = () => {
            try {
                zg.loginRoom(
                    roomID,
                    token,
                    {
                        userID: userID,
                        userName: 'userName',
                    },
                    {
                        userUpdate: true,
                        maxMemberCount: 11.2,
                    },
                ).then(
                    loginResult => {
                        expect(loginResult).to.be.true;
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
        done();
    });

    it('loginRoom 填config参数 maxMemberCount为负数整数', function(done) {
        this.timeout(TIMEOUT);
        roomID = 'roomID';
        const test = () => {
            try {
                zg.loginRoom(
                    roomID,
                    token,
                    {
                        userID: userID,
                        userName: 'userName',
                    },
                    {
                        userUpdate: false,
                        maxMemberCount: -11.2,
                    },
                ).then(
                    loginResult => {
                        expect(loginResult).to.be.true;
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
        done();
    });
});

describe('1.13.0 number小数点检查 createStream 参数为camera对象', function() {
    before(function(done) {
        num = 0;
        this.timeout(TIMEOUT);
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const test = () => {
            zg.checkSystemRequirements().then(deviceResult => {
                expect(deviceResult).to.have.property('webRTC', true);
                expect(deviceResult).to.have.property('customCapture', true);
                expect(deviceResult).to.have.property('camera', true);
                expect(deviceResult).to.have.property('microphone', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('H264', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('VP8', true);
                expect(deviceResult).to.have.property('screenSharing', true);
                done();
            });
        };
        setTimeout(test, DELAY);
    });

    beforeEach(function() {
        num += 1;
        console.warn('number小数点检查 createStream Begin ' + num);
        this.timeout(TIMEOUT);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('number小数点检查 createStream End ' + num);
    });

    it('创建流 不带source参数（source 不传默认采集视频质量为 2 的摄像头麦克风数据）', function(done) {
        console.log('1:创建流 不带source参数（source 不传默认采集视频质量为 2 的摄像头麦克风数据）'); //推流音视频
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream().then(
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

    it('1.创建流 camara对象 audioBitrate为默认值48', function(done) {
        console.warn('1.创建流 camara对象 audioBitrate为默认值48');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        audioBitrate: 48,
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

    it('2.创建流 camara对象 audioBitrate为0', function(done) {
        console.warn('2.创建流 camara对象 audioBitrate为0');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        audioBitrate: 0,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.创建流 camara对象 audioBitrate为正数小数点', function(done) {
        console.warn('3.创建流 camara对象 audioBitrate为正数小数点');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        audioBitrate: 48.8,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.创建流 camara对象 audioBitrate为负数小数点', function(done) {
        console.warn('4.创建流 camara对象 audioBitrate为负数小数点');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        audioBitrate: -48.8,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('1.创建流 camara对象 videoQuality为默认值2', function(done) {
        console.warn('1.创建流 camara对象 videoQuality为默认值2');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
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

    it('2.创建流 camara对象 videoQuality为0', function(done) {
        console.warn('2.创建流 camara对象 videoQuality为0');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 0,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.创建流 camara对象 videoQuality为2.2', function(done) {
        console.warn('2.创建流 camara对象 videoQuality为2.2');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 2.2,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.创建流 camara对象 videoQuality为-2.2', function(done) {
        console.warn('4.创建流 camara对象 videoQuality为-2.2');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: -2.2,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('1.创建流 camara对象 videoQuality为4时frameRate为正常15', function(done) {
        console.warn('1.创建流 camara对象 videoQuality为4时frameRate为正常15');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        frameRate: 15,
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

    it('2.创建流 camara对象 videoQuality为4时frameRate为正数小数点15.6', function(done) {
        console.warn('2.创建流 camara对象 videoQuality为4时frameRate为正数小数点15.6');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        frameRate: 15.6,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.创建流 camara对象 videoQuality为4时bitrate为正常800', function(done) {
        console.warn('3.创建流 camara对象 videoQuality为4时bitrate为正常800');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        bitrate: 800,
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

    it('4.创建流 camara对象 videoQuality为4时bitrate为正数小数点801.888', function(done) {
        console.warn('4.创建流 camara对象 videoQuality为4时bitrate为正常801.888');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        bitrate: 801.888,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('5.创建流 camara对象 videoQuality为4时height为正常700', function(done) {
        console.warn('5.创建流 camara对象 videoQuality为4时height为正常700');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        height: 700,
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

    it('6.创建流 camara对象 videoQuality为4时height为正数小数点701.1', function(done) {
        console.warn('6.创建流 camara对象 videoQuality为4时height为正数小数点701.1');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        bitrate: 701.1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('7.创建流 camara对象 videoQuality为4时width为正常700', function(done) {
        console.warn('7.创建流 camara对象 videoQuality为4时width为正常700');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        width: 700,
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

    it('8.创建流 camara对象 videoQuality为4时width为正数小数点701.1', function(done) {
        console.warn('8.创建流 camara对象 videoQuality为4时width为正数小数点701.1');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        videoQuality: 4,
                        width: 701.1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('1.创建流 camara对象 channelCount为默认1', function(done) {
        console.warn('1.创建流 camara对象 channelCount为默认1');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
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

    it('2.创建流 camara对象 channelCount为0', function(done) {
        console.warn('2.创建流 camara对象 channelCount为0');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        channelCount: 0,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.创建流 camara对象 channelCount为2.1', function(done) {
        console.warn('3.创建流 camara对象 channelCount为2.1');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        channelCount: 2.1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.创建流 camara对象 channelCount为-2.1', function(done) {
        console.warn('4.创建流 camara对象 channelCount为-2.1');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    camera: {
                        channelCount: -2.1,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
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


describe('1.13.0 number小数点检查 createStream 参数为custom对象', function() {
    before(function(done) {
        num = 0;
        this.timeout(TIMEOUT);
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const test = () => {
            zg.checkSystemRequirements().then(deviceResult => {
                expect(deviceResult).to.have.property('webRTC', true);
                expect(deviceResult).to.have.property('customCapture', true);
                expect(deviceResult).to.have.property('camera', true);
                expect(deviceResult).to.have.property('microphone', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('H264', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('VP8', true);
                expect(deviceResult).to.have.property('screenSharing', true);
                done();
            });
        };
        setTimeout(test, DELAY);
        const videoThird = document.createElement('video');
        videoThird.width = 300;
        videoThird.height = 300;
        videoThird.autoplay = true;
        videoThird.controls = true;
        videoThird.src = 'https://zego-public.oss-cn-shanghai.aliyuncs.com/sdk-doc/assets/big_buck_bunny.mp4';
        videoThird.id = 'externerVideo';
        document.body.appendChild(videoThird);
    });

    beforeEach(function() {
        num += 1;
        console.warn('number小数点检查 createStream Begin ' + num);
        this.timeout(TIMEOUT);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('number小数点检查 createStream End ' + num);
    });

    it('1.创建流 custom对象 bitrate为正常800', function(done) {
        console.warn('1.创建流 custom对象 bitrate为正常800');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    custom: {
                        source: $('#externerVideo')[0],
                        bitrate: 800,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('2.创建流 custom对象 bitrate为0', function(done) {
        console.warn('2.创建流 custom对象 bitrate为0');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    custom: {
                        source: $('#externerVideo')[0],
                        bitrate: 0,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.创建流 custom对象 bitrate为正数小数点800.12', function(done) {
        console.warn('3.创建流 custom对象 bitrate为正数小数点800.12');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    custom: {
                        source: $('#externerVideo')[0],
                        bitrate: 800.12,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.创建流 custom对象 bitrate为负数小数点-800.12', function(done) {
        console.warn('4.创建流 custom对象 bitrate为负数小数点-800.12');
        this.timeout(TIMEOUT);
        const test = () => {
            try {
                zg.createStream({
                    custom: {
                        source: $('#externerVideo')[0],
                        bitrate: -800.12,
                    },
                }).then(
                    MediaStream => {
                        video.srcObject = MediaStream;
                        expect(MediaStream).to.to.be.empty;
                        expect(MediaStream).to.to.be.a('MediaStream');
                        done();
                    },
                    e => {
                        expect(e).to.deep.equal(numMustBeIntegerError);
                        done();
                    },
                );
            } catch (e) {
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });
});*/

describe('1.13.0 number小数点检查 startMixerTask', function() {
    before(function(done) {
        num = 0;
        this.timeout(TIMEOUT);

        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const test = async () => {
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: userID },
            });
            token = data;
            zg.checkSystemRequirements().then(deviceResult => {
                expect(deviceResult).to.have.property('webRTC', true);
                expect(deviceResult).to.have.property('customCapture', true);
                expect(deviceResult).to.have.property('camera', true);
                expect(deviceResult).to.have.property('microphone', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('H264', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('VP8', true);
                expect(deviceResult).to.have.property('screenSharing', true);
            });

            zg.loginRoom('Mixer-123321', token, {
                userID: userID,
                userName: 'userName',
            }).then(loginResult => {
                expect(loginResult).to.be.true;
                done();
            });
        };
        setTimeout(test, DELAY);
    });

    beforeEach(function() {
        num += 1;
        console.warn('number小数点检查 startMixerTask Begin ' + num);
        this.timeout(TIMEOUT);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('number小数点检查 startMixerTask End ' + num);
    });

    it('1.开始混流 参数正常', function(done) {
        console.warn('1.开始混流 参数正常');
        this.timeout(TIMEOUT);
        const test1 = () => {
            zg.enumDevices().then(deviceResult => {
                deviceResult.microphones.map((item, index) => {
                    if (!item.deviceName) {
                        item.deviceName = 'microphone' + index;
                    }
                    console.warn('microphone: ' + item.deviceName + ',' + item.deviceID);
                });
                deviceResult.speakers.map((item, index) => {
                    if (!item.deviceName) {
                        item.deviceName = 'speakers' + index;
                    }
                    console.warn('speakers: ' + item.deviceName + ',' + item.deviceID);
                });
                deviceResult.cameras.map((item, index) => {
                    if (!item.deviceName) {
                        item.deviceName = 'cameras' + index;
                    }
                    console.warn('cameras: ' + item.deviceName + ',' + item.deviceID);
                });
            });
        };
        setTimeout(test1, DELAY);
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
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('1.开始混流 layout里top为正数小数点3.2', function(done) {
        console.warn('1.开始混流 layout里top为正数小数点3.2');

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
                                    top: 3.2,
                                    left: 3,
                                    bottom: 5,
                                    right: 5,
                                },
                                contentType: 'VIDEO',
                            },
                        ];
                        const outputList = [
                            {
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('2.开始混流 layout里left为正数小数点3.2', function(done) {
        console.warn('2.开始混流 layout里left为正数小数点3.2');
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
                                    left: 3.2,
                                    bottom: 5,
                                    right: 5,
                                },
                                contentType: 'VIDEO',
                            },
                        ];
                        const outputList = [
                            {
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.开始混流 layout里bottom为正数小数点5.6', function(done) {
        console.warn('3.开始混流 layout里bottom为正数小数点5.6');
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
                                    bottom: 5.6,
                                    right: 5,
                                },
                                contentType: 'VIDEO',
                            },
                        ];
                        const outputList = [
                            {
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.开始混流 layout里right为正数小数点5.6', function(done) {
        console.warn('4.开始混流 layout里right为正数小数点5.6');
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
                                    right: 5.6,
                                },
                                contentType: 'VIDEO',
                            },
                        ];
                        const outputList = [
                            {
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('1.开始混流 outputConfig里outputBitrate为正数小数点302.2', function(done) {
        console.warn('1.开始混流 outputConfig里outputBitrate为正数小数点302.2');
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
                                target: 'outputstreamidorurl',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 302.2,
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('2.开始混流 outputConfig里outputFPS为正数小数点15.6', function(done) {
        console.warn('2.开始混流 outputConfig里outputFPS为正数小数点15.6');
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
                                target: 'outputstreamidorurl',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15.6,
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.开始混流 outputConfig里outputWidth为正数小数点320.8', function(done) {
        console.warn('3.开始混流 outputConfig里outputWidth为正数小数点320.8');
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
                                target: 'outputstreamidorurl',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320.8,
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.开始混流 outputConfig里outputHeight为正数小数点480.8', function(done) {
        console.warn('4.开始混流 outputConfig里outputHeight为正数小数点480.8');
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
                                target: 'outputstreamidorurl',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320,
                            outputHeight: 480.8,
                            // singleStreamPassThrough: true
                        };
                        const result = await zg.startMixerTask({
                            taskID,
                            outputList,
                            outputConfig,
                            inputList,
                        });
                        expect(result).to.have.keys(['errorCode', 'extendedData']);
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('5.开始混流 outputConfig里outputAudioCodecID为正数小数点2.12', function(done) {
        console.warn('5.开始混流 outputConfig里outputAudioCodecID为正数小数点2.12');
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
                                target: 'outputstreamidorurl',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320,
                            outputHeight: 480,
                            outputAudioCodecID: 2.12,
                            // singleStreamPassThrough: true
                        };
                        const result = await zg.startMixerTask({
                            taskID,
                            outputList,
                            outputConfig,
                            inputList,
                        });
                        expect(result).to.have.keys(['errorCode', 'extendedData']);
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('6.开始混流 outputConfig里outputAudioBitrate为正数小数点80.23', function(done) {
        console.warn('6.开始混流 outputConfig里outputAudioBitrate为正数小数点80.23');
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
                                target: 'outputstreamidorurl',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320,
                            outputHeight: 480,
                            outputAudioCodecID: 0,
                            outputAudioBitrate: 80.23,
                            // singleStreamPassThrough: true
                        };
                        const result = await zg.startMixerTask({
                            taskID,
                            outputList,
                            outputConfig,
                            inputList,
                        });
                        expect(result).to.have.keys(['errorCode', 'extendedData']);
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('7.开始混流 outputConfig里outputAudioChannels为正数小数点1.23', function(done) {
        console.warn('7.开始混流 outputConfig里outputAudioChannels为正数小数点1.23');
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
                                target: 'outputstreamidorurl',
                            },
                        ];
                        const outputConfig = {
                            outputBitrate: 300,
                            outputFPS: 15,
                            outputWidth: 320,
                            outputHeight: 480,
                            outputAudioCodecID: 0,
                            outputAudioBitrate: 80,
                            outputAudioChannels: 1.23,
                            // singleStreamPassThrough: true
                        };
                        const result = await zg.startMixerTask({
                            taskID,
                            outputList,
                            outputConfig,
                            inputList,
                        });
                        expect(result).to.have.keys(['errorCode', 'extendedData']);
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });
});


describe('1.13.0 number小数点检查 setMixerTaskConfig', function() {
    before(function(done) {
        num = 0;
        this.timeout(TIMEOUT);

        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const test = async () => {
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: userID },
            });
            token = data;
            zg.checkSystemRequirements().then(deviceResult => {
                expect(deviceResult).to.have.property('webRTC', true);
                expect(deviceResult).to.have.property('customCapture', true);
                expect(deviceResult).to.have.property('camera', true);
                expect(deviceResult).to.have.property('microphone', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('H264', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('VP8', true);
                expect(deviceResult).to.have.property('screenSharing', true);
            });

            zg.loginRoom('Mixer-123321', token, {
                userID: userID,
                userName: 'userName',
            }).then(loginResult => {
                expect(loginResult).to.be.true;
                done();
            });
        };
        setTimeout(test, DELAY);
    });

    beforeEach(function() {
        num += 1;
        console.warn('number小数点检查 setMixerTaskConfig Begin ' + num);
        this.timeout(TIMEOUT);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('number小数点检查 setMixerTaskConfig End ' + num);
    });

    it('1.setMixerTaskConfig backgroundColor正常0xffff66', function(done) {
        console.warn('1.setMixerTaskConfig backgroundColor正常0xffff66');
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const taskID = 'taskId';
                const stream = await zg.createStream();
                zg.startPublishingStream(stream.id, stream);

                // 延时，保证推流成功。再去执行混流
                setTimeout(async () => {
                    try {
                        zg.setMixerTaskConfig({
                            backgroundColor: 0xffff66,
                        });
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
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('2.setMixerTaskConfig backgroundColor为0', function(done) {
        console.warn('2.setMixerTaskConfig backgroundColor为0');
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const taskID = 'taskId';
                const stream = await zg.createStream();
                zg.startPublishingStream(stream.id, stream);

                // 延时，保证推流成功。再去执行混流
                setTimeout(async () => {
                    try {
                        zg.setMixerTaskConfig({
                            backgroundColor: 0,
                        });
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
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('3.setMixerTaskConfig backgroundColor为254.6', function(done) {
        console.warn('3.setMixerTaskConfig backgroundColor为254.6');
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const taskID = 'taskId';
                const stream = await zg.createStream();
                zg.startPublishingStream(stream.id, stream);

                // 延时，保证推流成功。再去执行混流
                setTimeout(async () => {
                    try {
                        zg.setMixerTaskConfig({
                            backgroundColor: 254.6,
                        });
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
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });

    it('4.setMixerTaskConfig backgroundColor为-254.6', function(done) {
        console.warn('4.setMixerTaskConfig backgroundColor为-254.6');
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const taskID = 'taskId';
                const stream = await zg.createStream();
                zg.startPublishingStream(stream.id, stream);

                // 延时，保证推流成功。再去执行混流
                setTimeout(async () => {
                    try {
                        zg.setMixerTaskConfig({
                            backgroundColor: -254.6,
                        });
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
                                target: 'outputstreamidorurl',
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
                        console.warn('eee0:' + JSON.stringify(result));
                        done();
                    } catch (e) {
                        console.warn('eee1:' + JSON.stringify(e));
                        done(e);
                    }
                }, DELAY);
            } catch (e) {
                console.warn('eee2:' + JSON.stringify(e));
                done(e);
            }
        };
        setTimeout(test, DELAY);
    });
});

describe('1.13.0 number小数点检查 setSoundLevelDelegate', function() {
    before(function(done) {
        num = 0;
        this.timeout(TIMEOUT);

        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const test = async () => {
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: userID },
            });
            token = data;
            zg.checkSystemRequirements().then(deviceResult => {
                expect(deviceResult).to.have.property('webRTC', true);
                expect(deviceResult).to.have.property('customCapture', true);
                expect(deviceResult).to.have.property('camera', true);
                expect(deviceResult).to.have.property('microphone', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('H264', true);
                expect(deviceResult)
                    .to.have.property('videoCodec')
                    .to.have.property('VP8', true);
                expect(deviceResult).to.have.property('screenSharing', true);
            });

            // zg.loginRoom('Mixer-123321', token, {
            //     userID: userID,
            //     userName: 'userName',
            // }).then(loginResult => {
            //     expect(loginResult).to.be.true;
            //     done();
            // });
            done();
        };
        setTimeout(test, DELAY);
    });

    beforeEach(function() {
        num += 1;
        console.warn('number小数点检查 setSoundLevelDelegate Begin ' + num);
        this.timeout(TIMEOUT);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        document.body.appendChild(video);
        console.warn('number小数点检查 setSoundLevelDelegate End ' + num);
    });

    it('1.setSoundLevelDelegate 开关为true,interval为默认1000', function() {
        console.warn('1.setSoundLevelDelegate 开关为true,interval为默认1000');
        this.timeout(TIMEOUT);
        zg.setSoundLevelDelegate(true, 1000);
    });

    it('2.setSoundLevelDelegate 开关为false,interval为默认1000', function() {
        console.warn('2.setSoundLevelDelegate 开关为false,interval为默认1000');
        this.timeout(TIMEOUT);
        zg.setSoundLevelDelegate(false, 1000);
    });

    it('3.setSoundLevelDelegate 开关为true,interval为0', function() {
        console.warn('3.setSoundLevelDelegate 开关为true,interval为默认0');
        this.timeout(TIMEOUT);
        zg.setSoundLevelDelegate(true, 0);
    });

    it('4.setSoundLevelDelegate 开关为true,interval为正数小数点1000.12', function() {
        console.warn('4.setSoundLevelDelegate 开关为true,interval为正数小数点1000.12');
        this.timeout(TIMEOUT);
        zg.setSoundLevelDelegate(true, 1000.12);
    });

    it('5.setSoundLevelDelegate 开关为true,interval为负数小数点-1000.12', function() {
        console.warn('5.setSoundLevelDelegate 开关为true,interval为负数小数点-1000.12');
        this.timeout(TIMEOUT);
        zg.setSoundLevelDelegate(true, -1000.12);
    });
});
