import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import { before } from 'mocha';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const APPID = 1739272706;
let zg: ZegoExpressEngine;
let num = 0;
const sdkVersion = '1.12.0';

describe('express-web 初始化SDK', function() {
    before(function() {
        num = 0;
        console.log('初始化SDK All Begin');
    });

    after(function() {
        console.log('初始化SDK All End');
    });

    beforeEach(function() {
        num += 1;
        console.log('初始化SDK TestCase Begin ' + num);
    });

    afterEach(function() {
        console.log('初始化SDK TestCase End ' + num);
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

    it('初始化sdk：正常场景3', function() {
        const zg3 = new ZegoExpressEngine(APPID, [
            'wss://webliveroom-test.zego.im/ws',
            'wss://webliveroom-test.zego.im/ws',
            'wss://webliveroom-test.zego.im/ws',
        ]);
        expect(zg3).is.not.null;
    });

    it('初始化sdk：异常场景1', function() {
        const zg4 = new ZegoExpressEngine(APPID, '');
        expect(zg4).is.not.null;
    });

    it('初始化sdk：异常场景2', function() {
        const zg5 = new ZegoExpressEngine(APPID, ['', '']);
        expect(zg5).is.not.null;
    });

    it('初始化sdk：异常场景3', function() {
        const zg6 = new ZegoExpressEngine(APPID, ['', '', '']);
        expect(zg6).is.not.null;
    });

    it('初始化sdk：异常场景4', function() {
        const zg7 = new ZegoExpressEngine(0, 'wss://webliveroom-test.zego.im/ws');
        expect(zg7).is.not.null;
    });

    it('初始化sdk：异常场景5', function() {
        const zg8 = new ZegoExpressEngine(0, [
            'wss://webliveroom-test.zego.im/ws',
            'wss://webliveroom-test.zego.im/ws',
        ]);
        expect(zg8).is.not.null;
    });

    it('初始化sdk：异常场景6', function() {
        const zg9 = new ZegoExpressEngine(123456, 'wss://webliveroom-test.zego.im/ws');
        expect(zg9).is.not.null;
    });

    it('初始化sdk：异常场景7', function() {
        const zg10 = new ZegoExpressEngine(APPID, 'test');
        expect(zg10).is.not.null;
    });

    it('初始化sdk：异常场景8', function() {
        const zg11 = new ZegoExpressEngine(APPID, null);
        expect(zg11).is.not.null;
    });

    it('初始化sdk：异常场景9', function() {
        const zg12 = new ZegoExpressEngine(null, 'test');
        expect(zg12).is.not.null;
    });
});

describe('express-web setLogConfig', function() {
    before(function() {
        num = 0;
    });

    beforeEach(function() {
        num += 1;
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        console.log('setLogConfig TestCase Begin ' + num);
    });

    afterEach(function() {
        console.log('setLogConfig TestCase End ' + num);
    });

    it('setLogConfig logLevel1', function() {
        const result = zg.setLogConfig({
            logLevel: 'debug',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logLevel2', function() {
        const result = zg.setLogConfig({
            logLevel: 'info',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logLevel3', function() {
        const result = zg.setLogConfig({
            logLevel: 'warn',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logLevel4', function() {
        const result = zg.setLogConfig({
            logLevel: 'error',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logLevel5', function() {
        const result = zg.setLogConfig({
            logLevel: 'report',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logLevel6', function() {
        const result = zg.setLogConfig({
            logLevel: 'disable',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logLevel7', function() {
        const result = zg.setLogConfig({
            logLevel: undefined,
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logLevel8', function() {
        const result = zg.setLogConfig({
            logLevel: null,
        });
        expect(result).to.be.true;
    });

    it('setLogConfig remoteLogLevel1', function() {
        const result = zg.setLogConfig({
            remoteLogLevel: 'debug',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig remoteLogLevel2', function() {
        const result = zg.setLogConfig({
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig remoteLogLevel3', function() {
        const result = zg.setLogConfig({
            remoteLogLevel: 'warn',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig remoteLogLevel4', function() {
        const result = zg.setLogConfig({
            remoteLogLevel: 'error',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig remoteLogLevel5', function() {
        const result = zg.setLogConfig({
            remoteLogLevel: 'report',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig remoteLogLevel6', function() {
        const result = zg.setLogConfig({
            remoteLogLevel: 'disable',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig remoteLogLevel7', function() {
        const result = zg.setLogConfig({
            remoteLogLevel: undefined,
        });
        expect(result).to.be.true;
    });

    it('setLogConfig remoteLogLevel8', function() {
        const result = zg.setLogConfig({
            remoteLogLevel: null,
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logURL1', function() {
        const result = zg.setLogConfig({
            logURL: 'wss://webliveroom-test.zego.im/ws',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logURL2', function() {
        const result = zg.setLogConfig({
            logURL: 'test',
        });
        expect(result).to.be.false;
    });

    it('setLogConfig logURL3', function() {
        const result = zg.setLogConfig({
            logURL: '',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logURL4', function() {
        const result = zg.setLogConfig({
            logURL: undefined,
        });
        expect(result).to.be.true;
    });

    it('setLogConfig logURL5', function() {
        const result = zg.setLogConfig({
            logURL: null,
        });
        expect(result).to.be.true;
    });

    it('setLogConfig all1', function() {
        const result = zg.setLogConfig({
            logLevel: 'debug',
            remoteLogLevel: 'debug',
            logURL: 'wss://webliveroom-test.zego.im/ws',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig all2', function() {
        const result = zg.setLogConfig({
            logLevel: 'debug',
            remoteLogLevel: 'debug',
            logURL: undefined,
        });
        expect(result).to.be.true;
    });

    it('setLogConfig all3', function() {
        const result = zg.setLogConfig({
            logLevel: 'debug',
            remoteLogLevel: undefined,
            logURL: 'wss://webliveroom-test.zego.im/ws',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig all4', function() {
        const result = zg.setLogConfig({
            logLevel: undefined,
            remoteLogLevel: 'debug',
            logURL: 'wss://webliveroom-test.zego.im/ws',
        });
        expect(result).to.be.true;
    });

    it('setLogConfig all5', function() {
        const result = zg.setLogConfig({
            logLevel: undefined,
            remoteLogLevel: undefined,
            logURL: undefined,
        });
        expect(result).to.be.true;
    });
});

describe('express-web setDebugVerbose', function() {
    before(function() {
        num = 0;
    });

    beforeEach(function() {
        num += 1;
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        console.log('setDebugVerbose TestCase Begin ' + num);
    });

    afterEach(function() {
        console.log('setDebugVerbose TestCase End ' + num);
    });

    it('setDebugVerbose true', function() {
        const result = zg.setDebugVerbose(true);
        expect(result).to.be.undefined;
    });

    it('setDebugVerbose false', function() {
        const result = zg.setDebugVerbose(false);
        expect(result).to.be.undefined;
    });

    it('setDebugVerbose null', function() {
        const result = zg.setDebugVerbose(undefined);
        expect(result).to.be.undefined;
    });

    it('setDebugVerbose null', function() {
        const result = zg.setDebugVerbose(null);
        expect(result).to.be.undefined;
    });
});

describe('express-web checkSystemRequirements', function() {
    before(function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
    });

    it('checkSystemRequirements', function(done) {
        this.timeout(TIMEOUT + TIMEOUT);
        const test = () => {
            try {
                zg.checkSystemRequirements().then(
                    CapabilityDetection => {
                        console.log('CapabilityDetection.webRTC', CapabilityDetection.webRTC);
                        console.log('CapabilityDetection.customCapture', CapabilityDetection.customCapture);
                        console.log('CapabilityDetection.camera', CapabilityDetection.camera);
                        console.log('CapabilityDetection.microphone', CapabilityDetection.microphone);
                        console.log('CapabilityDetection.videoCodec.H264', CapabilityDetection.videoCodec.H264);
                        console.log('CapabilityDetection.videoCodec.H265', CapabilityDetection.videoCodec.H265);
                        console.log('CapabilityDetection.videoCodec.VP8', CapabilityDetection.videoCodec.VP8);
                        console.log('CapabilityDetection.videoCodec.VP9', CapabilityDetection.videoCodec.VP9);
                        console.log('CapabilityDetection.screenSharing', CapabilityDetection.screenSharing);

                        expect(CapabilityDetection.webRTC).to.be.true;
                        expect(CapabilityDetection.customCapture).to.be.true;
                        expect(CapabilityDetection.camera).to.be.true;
                        expect(CapabilityDetection.microphone).to.be.true;
                        expect(CapabilityDetection.videoCodec.H264).to.be.true;
                        expect(CapabilityDetection.videoCodec.VP8).to.be.true;
                        expect(CapabilityDetection.screenSharing).to.be.true;
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

describe('express-web enumDevices', function() {
    before(function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
    });

    it('enumDevices1', function(done) {
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                zg.enumDevices().then(
                    deviceResult => {
                        deviceResult.microphones.map((item, index) => {
                            if (!item.deviceName) {
                                item.deviceName = 'microphone' + index;
                            }
                            console.log('microphone: ' + item.deviceName + ',' + item.deviceID);
                        });
                        expect(deviceResult).to.be.not.null;
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

    it('enumDevices2', function(done) {
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                zg.enumDevices().then(
                    deviceResult => {
                        deviceResult.speakers.map((item, index) => {
                            if (!item.deviceName) {
                                item.deviceName = 'speaker' + index;
                            }
                            console.log('speaker: ' + item.deviceName + ',' + item.deviceID);
                        });
                        expect(deviceResult).to.be.not.null;
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

    it('enumDevices3', function(done) {
        this.timeout(TIMEOUT);

        const test = () => {
            try {
                zg.enumDevices().then(
                    deviceResult => {
                        deviceResult.cameras.map((item, index) => {
                            if (!item.deviceName) {
                                item.deviceName = 'camera' + index;
                            }
                            console.log('camera: ' + item.deviceName + ',' + item.deviceID);
                        });
                        expect(deviceResult).to.be.not.null;
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

describe('express-web getVersion', function() {
    before(function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
    });

    it('getVersion', function() {
        const result = zg.getVersion();
        console.warn(result);
        expect(result).to.equal(sdkVersion);
    });
});
