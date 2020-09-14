import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { before } from 'mocha';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
const token = '';
let zg: ZegoExpressEngine;
let publishStream: MediaStream;
let roomID: string;

describe('express-web 初始化SDK', function() {
    before(function() {
        console.log('初始化SDK All Begin');
    });

    after(function() {
        console.log('初始化SDK All End');
    });

    beforeEach(function() {
        console.log('初始化SDK TestCase Begin');
    });

    afterEach(function() {
        console.log('初始化SDK TestCase End');
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
