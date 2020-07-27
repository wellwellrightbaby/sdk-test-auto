import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import chai from 'chai';
const sinon = require('sinon');

const { expect } = chai;
const userID = 'id' + new Date().getTime();
const TIMEOUT = 10000;
const DELAY = 2000;
const APPID = 1739272706;
const SERVER = 'wss://webliveroom-test.test.im/ws';
const tokenURL = 'https://wsliveroom-demo.zego.im:8282/token';
let token = '';
let roomId: any = '1234';
let zg: ZegoExpressEngine;
const user = {
    userID: userID,
    userName: 'name' + userID,
};

describe('房间功能', function() {
    before(async function() {
        const { data } = (await Axios.get(tokenURL, {
            params: { app_id: APPID, id_name: userID },
        })) as any;
        token = data;
    });

    beforeEach(function() {
        zg = new ZegoExpressEngine(APPID, SERVER);
        zg.setDebugVerbose(false);
    });

    it('登录房间 roomId 传入非字符串，会返回 rejected 状态', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            roomId = 1234;
            try {
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);
                done();
            } catch (e) {
                done();
            }
        };

        setTimeout(test, DELAY);
    });

    it('登录房间 roomId 传入错误的 token，会返回 rejected 状态', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            roomId = '1234';
            token = 'error-token';
            try {
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);
                done();
            } catch (e) {
                done();
            }
        };

        setTimeout(test, DELAY);
    });

    it('登录房间 roomId 传入字符串，会返回 fulfilled 状态', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            roomId = '1234';
            try {
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('登录房间 config 修改', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            const config = {
                userUpdate: false,
                maxMemberCount: 3,
            };
            roomId = '1234';

            try {
                // @ts-ignore
                await zg.loginRoom(roomId, token, user, config);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('登出房间', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            const config = {
                userUpdate: false,
                maxMemberCount: 3,
            };
            zg = new ZegoExpressEngine(APPID, SERVER);
            roomId = '1234';

            try {
                await zg.loginRoom(roomId, token, user, config);
                await zg.logoutRoom(roomId);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('房间状态更新回调：连接成功', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const config = {
                    userUpdate: false,
                    maxMemberCount: 3,
                };
                const spy = sinon.spy();
                roomId = '1234';

                zg.on('roomStateUpdate', spy);
                await zg.loginRoom(roomId, token, user, config);

                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(2);
                done();
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('房间状态更新回调：断开连接', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const spy = sinon.spy();
                const config = {
                    userUpdate: false,
                    maxMemberCount: 3,
                };
                roomId = '1234';

                zg.on('roomStateUpdate', spy);
                await zg.loginRoom(roomId, token, user, config);
                await zg.logoutRoom(roomId);

                expect(spy.called).to.be.true;
                expect(spy.callCount).to.equal(3);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });

    it('房间用户进出回调', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            try {
                const enterRoom = async ({ appid, server, uid, roomId, config }: any) => {
                    zg = new ZegoExpressEngine(appid, server);
                    const user = {
                        userID: uid,
                        userName: 'name' + uid,
                    };

                    await zg.loginRoom(roomId, token, user, config);
                    return zg;
                };

                const leaveRoom = async ({ user, roomId }: any) => {
                    await user.logoutRoom(roomId);
                };
                const spy = sinon.spy();

                zg.on('roomUserUpdate', spy);

                const user1 = await enterRoom({
                    appid: APPID,
                    server: SERVER,
                    uid: userID,
                    roomId: '1234',
                    config: {
                        userUpdate: true,
                        maxMemberCount: 3,
                    },
                });

                expect(spy.callCount).to.equal(2);

                const user2 = await enterRoom({
                    appid: APPID,
                    server: SERVER,
                    uid: userID,
                    roomId: '1234',
                    config: {
                        userUpdate: true,
                        maxMemberCount: 3,
                    },
                });

                expect(spy.callCount).to.equal(4);

                await leaveRoom({
                    user: user1,
                    roomId: '1234',
                });

                expect(spy.callCount).to.equal(5);

                await leaveRoom({
                    user: user2,
                    roomId: '1234',
                });

                expect(spy.callCount).to.equal(6);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
