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
const num = 0;
const sdkVersion = '1.12.0';
