import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import { TIMEOUT, DELAY, APPID, SERVER } from './config';

const { expect } = chai;
let zg: ZegoExpressEngine;

describe('初始化相关的前置功能', function() {
    beforeEach(function() {
        zg = new ZegoExpressEngine(APPID, SERVER);
    });

    it('初始化sdk', function() {
        expect(zg).is.not.null;

        // @ts-ignore
        zg = null;
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.test.im/ws');
        expect(zg).is.not.null;

        // @ts-ignore
        zg = null;
        zg = new ZegoExpressEngine(APPID, 'https://webliveroom-test.test.im/ws');
        expect(zg).is.not.null;

        // todo: console.error('server wrong')
        // @ts-ignore
        zg = null;
        zg = new ZegoExpressEngine(APPID, 'http://webliveroom-test.test.im/ws');
        expect(zg).is.not.null;

        // @ts-ignore
        zg = null;
        zg = new ZegoExpressEngine(APPID, 'ftp://webliveroom-test.test.im/ws');
        expect(zg).is.not.null;

        // @ts-ignore
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
        expect(zg.stateCenter.debug).to.be.true;

        zg.setDebugVerbose(true);
        expect(zg.stateCenter.debug).to.be.true;

        zg.setDebugVerbose(false);
        expect(zg.stateCenter.debug).to.be.false;
    });

    it('可用性检测', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
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
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
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
