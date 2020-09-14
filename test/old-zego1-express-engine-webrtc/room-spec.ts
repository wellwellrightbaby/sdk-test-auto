import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import chai from 'chai';
import { TIMEOUT, DELAY, APPID, SERVER, getToken, randomStr, loginRoom } from './config';
const sinon = require('sinon');

const { expect } = chai;
let token: any;
let userID: any;
let roomId: any;
let zg: ZegoExpressEngine;
let user: any;

describe('房间功能', function() {
    beforeEach(async function() {
        zg = new ZegoExpressEngine(APPID, SERVER);
        zg.setDebugVerbose(false);

        userID = randomStr();
        roomId = randomStr();
        token = await getToken(APPID, userID);
        user = {
            userID: userID,
            userName: 'name' + userID,
        };
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
                const spy = sinon.spy();
                zg.on('roomUserUpdate', spy);
                const { zg: user } = await loginRoom(ZegoExpressEngine, APPID, SERVER, roomId, userID);

                setTimeout(async () => {
                    expect(spy.callCount).to.equal(1);
                    expect(spy.called).to.be.true;

                    await user.logoutRoom(roomId);
                    expect(spy.callCount).to.equal(2);
                }, DELAY);
            } catch (e) {
                done(e);
            }
        };

        setTimeout(test, DELAY);
    });
});
