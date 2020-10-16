import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { LOG_LEVEL } from '../../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
import { before } from 'mocha';
import { inputParmError, tokenError } from '../zego-express-engine-webrtc/config';
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
let publishStream: MediaStream;
let roomID: any;
let firstCamera;
let firstMicrophones: any;
let video: any;
const mydate = new Date();
let num = 0;
let token = '';

//#region setSoundLevelDelegate

describe('1.14.0 去掉鉴权 addPublishCdnUrl', function() {
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
                console.warn(deviceResult.camera);
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

    beforeEach(async function() {
        num += 1;
        console.warn('去掉鉴权 addPublishCdnUrl Begin ' + num);
        this.timeout(TIMEOUT);
        video = document.createElement('video');
        video.width = 300;
        video.height = 300;
        video.autoplay = true;
        video.controls = true;
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
    });

    afterEach(function() {
        //document.body.appendChild(video);
        console.warn('去掉鉴权 addPublishCdnUrl End ' + num);
    });

    it('1.去掉鉴权 addPublishCdnUrl', function() {
        const stream = zg.createStream();
        zg.addPublishCdnUrl(stream.id, 'rtmp://wsdemo.zego.im/livestream/test259').then(result => {
            console.warn('test' + JSON.stringify(result));
        });
    });
});

//#endregion
