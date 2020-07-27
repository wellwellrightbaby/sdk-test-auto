import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import {
    userID,
    TIMEOUT,
    DELAY,
    APPID,
    SERVER,
    user,
    getToken,
    randomStr,
} from './config';
const sinon = require('sinon');

const { expect } = chai;
let token = '';
let roomId: any = '1234';
let zg: ZegoExpressEngine;

describe('房间功能', function() {
    beforeEach(async function() {
        zg = new ZegoExpressEngine(APPID, SERVER);
        zg.setDebugVerbose(false);

        const { data } = await getToken(APPID, userID);
        token = data;
        roomId = randomStr();
    });

    afterEach(() => {
        sinon.restore();
    });

    it('登录房间 roomId 传入非字符串，会返回 rejected 状态', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            roomId = 1234;
            try {
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);
                done('should be rejected');
            } catch (e) {
                done();
            }
        };

        setTimeout(test, DELAY);
    });

    it('登录房间 roomId 传入错误的 token，会返回 rejected 状态', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
            token = 'error-token';
            try {
                // @ts-ignore
                await zg.loginRoom(roomId, token, user);
                done('should be rejected');
            } catch (e) {
                done();
            }
        };

        setTimeout(test, DELAY);
    });

    it('登录房间 roomId 传入字符串，会返回 fulfilled 状态', function(done) {
        this.timeout(TIMEOUT);

        const test = async () => {
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
                    const { data } = await getToken();
                    token = data;

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
                    roomId,
                    config: {
                        userUpdate: true,
                        maxMemberCount: 3,
                    },
                });
                expect(spy.callCount).to.equal(1);
                expect(spy.callW)

                await leaveRoom({
                    user: user1,
                    roomId,
                });
                expect(spy.callCount).to.equal(2);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
