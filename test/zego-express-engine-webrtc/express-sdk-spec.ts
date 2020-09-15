import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { LOG_LEVEL } from '../../sdk/zego-express-engine-webrtc/sdk/common/zego.entity';
import { before } from 'mocha';
//import { deviceId } from './zego-express-engine-webrtc/config';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let token = '';
let zg: ZegoExpressEngine;
let publishStream: MediaStream;
let roomID: string;

//"系统弹出的获取摄像头麦克风权限有没有办法实现自动" //使用checkSystemRequirements会向浏览器请求权限

describe('express-web', function() {
    before(async function() {
        const { data } = (await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        })) as any;
        token = data;
        expect(token).to.be.a('string');
    });

    it('初始化sdk', async function() {
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'disable',
            remoteLogLevel: 'disable',
        });
        expect(result).to.be.true;
    });

    it('登录房间', async function() {
        const result = await zg.loginRoom('choui', token, {
            userID: userID,
            userName: 'name' + userID,
        });
        expect(result).to.equal(true);
    });

    it('创建流', async function() {
        try {
            publishStream = await zg.createStream();
            expect(publishStream).is.not.null;
        } catch (error) {
            expect(error).is.not.null;
        }
    });
});

/*
//"回调事件注册"

//"回调事件删除"
*/

//config timeout问题
/*
describe('express-web loginRoom', function() {
      before(async function() {
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: userID },
            });
            token = data;
            expect(token).to.be.a('string');
            zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
            expect(zg).is.not.null;
            const result = zg.setLogConfig({
                  logLevel: 'disable',
                  remoteLogLevel: 'disable',
            });
            expect(result).to.be.true;
      });

      afterEach(async function() {
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('loginRoom 不填config参数', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom 填config参数', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
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
            );
            expect(result).to.be.true;
      });

      it('loginRoom roomID1', async function() {
            roomID = '1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID2', async function() {
            roomID = 'QWERTYUIOPASDFGHJKLZXCVBNM';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID3', async function() {
            roomID = 'qwertyuiopasdfghjklzxcvbnm';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID4', async function() {
            roomID = ' ';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID5', async function() {
            roomID = "~!@#$%^&*()_+=-;',.<>/";
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID6', async function() {
            roomID = '~!@#$%^&*()_+`1234567890-=[]\'{}|;:",./<>?/';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID7', async function() {
            roomID =
                  '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID8', async function() {
            roomID =
                  '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID9', async function() {
            roomID =
                  '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.false;
      });

      it('loginRoom roomID10', async function() {
            roomID =
                  'abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijlmnopqrsquvwsyzlmnopqrsquvws';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID11', async function() {
            roomID = '';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID12', async function() {
            roomID = ':';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID13', async function() {
            roomID = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom roomID14', async function() {
            roomID = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom token1', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom token2', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, 'test', {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom token3', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, '', {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom token4', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, '...', {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID1', async function() {
            roomID = 'loginRoom_1234567890';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: userID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: userID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID2', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = '0';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID3', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = '123456789012345678901234567890123456789012345678901234567890123';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID4', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = '1234567890123456789012345678901234567890123456789012345678901234';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID5', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = '12345678901234567890123456789012345678901234567890123456789012345';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID6', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789012';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID7', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = '""';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID8', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = 'test';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: 'test123',
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID9', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = 'test';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: '',
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID10', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = ' ';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID11', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = '~!@#$%^&*()_+`1234567890-=[]\'{}|;:",./<>?/';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID12', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = ':';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID13', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = '一二三四五六七八九十一二三四五六七八九十一';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userID14', async function() {
            roomID = 'loginRoom_1234567890';
            const uID = '一二三四五六七八九十一二三四五六七八九十一二';
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: uID },
            });
            const result = await zg.loginRoom(roomID, data, {
                  userID: uID,
                  userName: 'userName',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName1', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: '0',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName2', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: '1234567890',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName3', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'abcdefghijklmnopqrstuvwxyz',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName4', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName5', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: '~!@#$%^&*()_+`1234567890-=[]\'{}|;:",./<>?/',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName6', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName:
                        '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName7', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName:
                        '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName8', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName:
                        '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName9', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName:
                        '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName10', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: ' ',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName11', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: ':',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName12', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: '""',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName13', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: 'test123654',
            });
            expect(result).to.be.true;
      });

      it('loginRoom userName14', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                  userID: userID,
                  userName: '',
            });
            expect(result).to.be.true;
      });

      it('loginRoom config1', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: true,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config2', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: false,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config3', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: undefined,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config4', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        maxMemberCount: 0,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config5', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        maxMemberCount: 10,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config6', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        maxMemberCount: 100,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config7', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        maxMemberCount: Number.MAX_VALUE,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config8', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        maxMemberCount: -1,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config9', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        maxMemberCount: undefined,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config10', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
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
            );
            expect(result).to.be.true;
      });

      it('loginRoom config11', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: true,
                        maxMemberCount: 0,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config12', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: undefined,
                        maxMemberCount: 0,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config13', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: false,
                        maxMemberCount: 100,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config14', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: true,
                        maxMemberCount: Number.MAX_VALUE,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config15', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: undefined,
                        maxMemberCount: Number.MAX_VALUE,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config16', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: false,
                        maxMemberCount: Number.MAX_VALUE,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config17', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: true,
                        maxMemberCount: Number.MAX_VALUE,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config18', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: undefined,
                        maxMemberCount: Number.MAX_VALUE,
                  },
            );
            expect(result).to.be.true;
      });

      it('loginRoom config19', async function() {
            roomID = 'roomID';
            const result = await zg.loginRoom(
                  roomID,
                  token,
                  {
                        userID: userID,
                        userName: 'userName',
                  },
                  {
                        userUpdate: undefined,
                        maxMemberCount: 5000,
                  },
            );
            expect(result).to.be.true;
      });
});*/
/*
describe('express-web logoutRoom', function() {
      before(async function() {
            const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                  params: { app_id: APPID, id_name: userID },
            });
            token = data;
            expect(token).to.be.a('string');
            zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
            expect(zg).is.not.null;
            const result = zg.setLogConfig({
                  logLevel: 'disable',
                  remoteLogLevel: 'disable',
            });
            expect(result).to.be.true;
      });

      it('logout roomID1', async function() {
            roomID = '1234567890';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID2', async function() {
            roomID = 'QWERTYUIOPASDFGHJKLZXCVBNM';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID3', async function() {
            roomID = 'qwertyuiopasdfghjklzxcvbnm';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID4', async function() {
            roomID = ' ';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID5', async function() {
            roomID = "~!@#$%^&*()_+=-;',.<>/";
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID6', async function() {
            roomID = '~!@#$%^&*()_+`1234567890-=[]\'{}|;:",./<>?/';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID7', async function() {
            roomID =
                  '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID8', async function() {
            roomID =
                  '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID9', async function() {
            roomID =
                  '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID10', async function() {
            roomID =
                  'abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijlmnopqrsquvwsyzlmnopqrsquvws';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID11', async function() {
            roomID = '';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID12', async function() {
            roomID = ':';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID13', async function() {
            roomID = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });

      it('logout roomID14', async function() {
            roomID = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
      });
});*/

describe('on RoomStateUpdate', function() {
    before(async function() {
        console.warn('test RoomStateUpdate');
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
        const result1 = zg.on('roomStateUpdate', (roomID, state, errorCode, extendedData) => {
            console.warn('roomStateUpdate: ', roomID, state, errorCode, extendedData);
            throw new Error();
        });
        expect(result1).to.be.true;

        console.warn('test RoomStateUpdate');
    });

    it('connect', async function() {
        roomID = 'loginRoom_1234567890';
        const result = await zg.loginRoom(roomID, token, {
            userID: userID,
            userName: 'userName',
        });
        expect(result).to.be.true;
    });

    it('disconnect', async function() {
        roomID = 'loginRoom_1234567890';
        const result = await zg.loginRoom(roomID, token, {
            userID: userID,
            userName: 'userName',
        });
        expect(result).to.be.true;
        const outresult = zg.logoutRoom(roomID);
        expect(outresult).to.be.undefined;
    });
});
/*
describe('on RoomUserUpdate:userUpdate is true', function() {
    before(async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'disable',
            remoteLogLevel: 'disable',
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

    it('connect1', async function() {
        roomID = 'loginRoom_1234567890';
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

    it('connect2', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test1' },
        });
        const zg1 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg1.loginRoom(roomID, data, {
            userID: 'test1',
            userName: 'uName_test1',
        });
        expect(result).to.be.true;
    });

    it('connect3', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test2' },
        });
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test2',
            userName: 'uName_test2',
        });
        expect(result).to.be.true;
    });

    it('connect4 and disconnect', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test3' },
        });
        const zg3 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg3.loginRoom(roomID, data, {
            userID: 'test3',
            userName: 'uName_test3',
        });
        expect(result).to.be.true;
        const result1 = await zg3.logoutRoom(roomID);
        expect(result1).to.be.undefined;
    });

    it('same user', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test2' },
        });
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test2',
            userName: 'uName_test2',
        });
        expect(result).to.be.true;
    });
});*/
/*
describe('on RoomUserUpdate:userUpdate is false', function() {
    before(async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'disable',
            remoteLogLevel: 'disable',
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

    it('connect1', async function() {
        roomID = 'loginRoom_1234567890';
        const result = await zg.loginRoom(
            roomID,
            token,
            {
                userID: userID,
                userName: 'userName',
            },
            { userUpdate: false },
        );
        expect(result).to.be.true;
    });

    it('connect2', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test11' },
        });
        const zg1 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg1.loginRoom(roomID, data, {
            userID: 'test11',
            userName: 'uName_test11',
        });
        expect(result).to.be.true;
    });

    it('connect3', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test12' },
        });
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test12',
            userName: 'uName_test12',
        });
        expect(result).to.be.true;
    });

    it('connect4 and disconnect', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test13' },
        });
        const zg3 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg3.loginRoom(roomID, data, {
            userID: 'test13',
            userName: 'uName_test13',
        });
        expect(result).to.be.true;
        const result1 = await zg3.logoutRoom(roomID);
        expect(result1).to.be.undefined;
    });

    it('same user', async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: 'test12' },
        });
        const zg2 = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        roomID = 'loginRoom_1234567890';
        const result = await zg2.loginRoom(roomID, data, {
            userID: 'test12',
            userName: 'uName_test12',
        });
        expect(result).to.be.true;
    });
});


describe('on test', function() {
    this.timeout(10000);
    roomID = 'loginRoom_1234567890';
    before(async function() {
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
        const result = zg.setLogConfig({
            logLevel: 'info',
            remoteLogLevel: 'info',
        });
        expect(result).to.be.true;
        zg.on('roomUserUpdate', (roomID, updateType, userList) => {
            const ulist = userList.join(',');
            console.log('roomUserUpdate: ', roomID, updateType, ulist);
        });

        const result1 = await zg.loginRoom(roomID, token, {
            userID: userID,
            userName: 'userName',
        });
    });

    it('test', async function() {
        const result = await zg.createStream({
            camera: {
                audio: false,
                video: true,
                videoQuality: 3,
                facingMode: 'environment',
            },
        });
        const publishOption: any = {
            streamParams: 123,
            extraInfo: '',
            videoCodec: 'H.264',
        };
        const result1 = zg.startPublishingStream(result.id, result, publishOption);
        expect(result1).to.be.true;
    });
});
*/
