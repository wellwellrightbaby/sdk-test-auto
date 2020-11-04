import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { LOG_LEVEL } from '../../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
import { before } from 'mocha';
import { inputParmError, tokenError } from '../zego-express-engine-webrtc/config';
import md5 from 'md5';
import {
    inputParamErroraudioBitrate,
    inputParamErrorvideoQuality,
    inputParamErrorframeRate,
    inputParamErrorbitrate,
    inputParamErrorheight,
    inputParamErrorwidth,
    inputParamErrorchannelCount,
    inputParamErrormaxMemberCount,
} from './../zego-express-engine-webrtc/config';
//import { deviceId } from './../zego-express-engine-webrtc/config';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let zg: ZegoExpressEngine;
// window.zg = zg;
let publishStream: MediaStream;
let roomID: any;
let firstCamera;
let firstMicrophones: any;
let video: any;
const mydate = new Date();
let num = 0;
let token = '';

//#region addPublishCdnUrl

describe('1.14.0 去掉鉴权 addPublishCdnUrl', function() {
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
            zg.checkSystemRequirements();

            zg.loginRoom('Cdn-123321', token, {
                userID: userID,
                userName: 'userName',
            }).then(loginResult => {
                expect(loginResult).to.be.true;
            });
            done();
        };
        setTimeout(test, DELAY);
    });

    beforeEach(async function() {
        num += 1;
        console.warn('去掉鉴权 addPublishCdnUrl Begin ' + num);
        this.timeout(TIMEOUT);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
    });

    afterEach(function() {
        //document.body.appendChild(video);
        console.warn('去掉鉴权 addPublishCdnUrl End ' + num);
    });

    it('1.去掉鉴权 addPublishCdnUrl 带鉴权', function(done) {
        console.warn('1.去掉鉴权 addPublishCdnUrl 带鉴权');
        this.timeout(TIMEOUT);
        const test = async () => {
            const taskID = 'taskId';
            const createstream = await zg.createStream();
            const publishresult = zg.startPublishingStream(createstream.id, createstream);
            expect(publishresult).to.be.true;
            zg.addPublishCdnUrl(
                createstream.id,
                md5(APPID + Math.ceil(new Date().getTime() / 1000).toString() + '1ec3f85cb2f21370264eb371c8c65ca3'),
                'rtmp://wsdemo.zego.im/livestream/test259',
            ).then(result => {
                console.warn('test1:' + JSON.stringify(result));
                expect(result).to.have.property('errorCode', 0);
                // expect(result)
                //     .to.have.property('extendedData')
                //     .include('flvURL');
            });
            done();
        };
        setTimeout(test, DELAY);
    });

    it('2.去掉鉴权 addPublishCdnUrl 带错误鉴权', function(done) {
        console.warn('2.去掉鉴权 addPublishCdnUrl 带错误鉴权');
        this.timeout(TIMEOUT);
        const test = async () => {
            const taskID = 'taskId';
            const createstream = await zg.createStream();
            const publishresult = zg.startPublishingStream(createstream.id, createstream);
            expect(publishresult).to.be.true;
            zg.addPublishCdnUrl(createstream.id, 'test', 'rtmp://wsdemo.zego.im/livestream/test259').then(result => {
                console.warn('test2:' + JSON.stringify(result));
                expect(result).to.have.property('errorCode', 0);
            });
            done();
        };
        setTimeout(test, DELAY);
    });

    it('3.去掉鉴权 addPublishCdnUrl 不带鉴权', function(done) {
        console.warn('3.去掉鉴权 addPublishCdnUrl 不带鉴权');
        this.timeout(TIMEOUT);
        const test = async () => {
            const taskID = 'taskId';
            const createstream = await zg.createStream();
            const publishresult = zg.startPublishingStream(createstream.id, createstream);
            expect(publishresult).to.be.true;
            zg.addPublishCdnUrl(createstream.id, 'rtmp://wsdemo.zego.im/livestream/test259').then(result => {
                console.warn('test3:' + JSON.stringify(result));
                expect(result).to.have.property('errorCode', 0);
            });
            done();
        };
        setTimeout(test, DELAY);
    });

    it('4.去掉鉴权 addPublishCdnUrl 不带鉴权', function(done) {
        console.warn('4.去掉鉴权 addPublishCdnUrl 不带鉴权');
        this.timeout(TIMEOUT);
        const test = async () => {
            const taskID = 'taskId';
            const createstream = await zg.createStream();
            const publishresult = zg.startPublishingStream(createstream.id, createstream);
            expect(publishresult).to.be.true;
            zg.addPublishCdnUrl('', 'rtmp://wsdemo.zego.im/livestream/test259').then(
                result => {
                    console.warn('test4:' + JSON.stringify(result));
                    expect(result).to.have.property('errorCode', 0);
                    done();
                },
                e => {
                    console.warn('test123456:' + JSON.stringify(e));
                    console.warn('test123456');
                    done();
                },
            );
        };
        setTimeout(test, DELAY);
    });

    it('5.去掉鉴权 addPublishCdnUrl 不带鉴权', function(done) {
        console.warn('5.去掉鉴权 addPublishCdnUrl 不带鉴权');
        this.timeout(TIMEOUT);
        const test = async () => {
            const taskID = 'taskId';
            const createstream = await zg.createStream();
            const publishresult = zg.startPublishingStream(createstream.id, createstream);
            expect(publishresult).to.be.true;
            zg.addPublishCdnUrl(createstream.id, '').then(
                result => {
                    console.warn('test5:' + JSON.stringify(result));
                    expect(result).to.have.property('errorCode', 0);
                    done();
                },
                e => {
                    console.warn('test123456:' + JSON.stringify(e));
                    console.warn('test123456');
                    done();
                },
            );
        };
        setTimeout(test, DELAY);
    });

    it('6.去掉鉴权 addPublishCdnUrl 带鉴权', function(done) {
        console.warn('6.去掉鉴权 addPublishCdnUrl 带鉴权');
        this.timeout(TIMEOUT);
        const test = async () => {
            const taskID = 'taskId';
            const createstream = await zg.createStream();
            const publishresult = zg.startPublishingStream(createstream.id, createstream);
            expect(publishresult).to.be.true;
            zg.addPublishCdnUrl(
                createstream.id,
                md5(APPID + Math.ceil(new Date().getTime() / 1000).toString() + '1ec3f85cb2f21370264eb371c8c65ca3'),
                '',
            ).then(
                result => {
                    console.warn('test6:' + JSON.stringify(result));
                    expect(result).to.have.property('errorCode', 0);
                    console.warn('123456test');
                    done();
                },
                e => {
                    //为什么没有触发error promise函数
                    console.warn('test123456:' + JSON.stringify(e));
                    console.warn('test123456');
                    done();
                },
            );
        };
        setTimeout(test, DELAY);
    });
});

//#endregion
/*
describe('express-web loginRoom', function() {
    before(async function() {
        num = 0;
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;

        zg.on('roomStateUpdate', (roomID, state, errorCode, extendedData) => {
            console.warn('roomStateUpdate: ', roomID, state, errorCode, extendedData);
        });
    });

    beforeEach(function() {
        this.timeout(TIMEOUT + TIMEOUT + TIMEOUT);
        num += 1;
        console.warn('loginRoom TestCase Begin ' + num);
    });

    afterEach(async function() {
        const result = zg.logoutRoom(roomID);
        expect(result).to.be.undefined;
        console.warn('loginRoom TestCase End ' + num);
    });

    it('loginRoom userID', async function() {
        roomID = 'QuickStartRoom-1';
        const uID = 'iPhone12,1@90119';
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: uID },
        });
        const result = await zg.loginRoom(
            roomID,
            data,
            {
                userID: uID,
                userName: 'userName',
            },
            {
                config: true,
            },
        );
        expect(result).to.be.true;
    });
});
*/
