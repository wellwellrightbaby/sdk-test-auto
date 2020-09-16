import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { before } from 'mocha';
import { P0, P1, P2 } from './config';
import {
    tokenError,
    inputParmError,
    roomIDIllegalCharError,
    liveroomCmdError,
    roomIDTooLongError,
    roomIDEmptyError,
} from './config';
import { assert, config, should } from 'chai';
import chaiAsPromised from 'chai-as-promised';
const expect = chai.expect;

const TIMEOUT = 10000;
const DELAY = 2000;
const userID = 'id' + new Date().getTime();
const APPID = 1739272706;
let zg: ZegoExpressEngine;
let publishStream: MediaStream;
let roomID: string;
let token = '';
let num = 0;

describe('express-web loginRoom', function() {
    before(async function() {
        num = 0;
        const { data } = await Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
            params: { app_id: APPID, id_name: userID },
        });
        token = data;
        expect(token).to.be.a('string');
        zg = new ZegoExpressEngine(APPID, 'wss://webliveroom-test.zego.im/ws');
        expect(zg).is.not.null;
    });

    beforeEach(function() {
        num += 1;
        console.warn('loginRoom TestCase Begin ' + num);
    });

    afterEach(async function() {
        const result = zg.logoutRoom(roomID);
        expect(result).to.be.undefined;
        console.warn('loginRoom TestCase End ' + num);
    });

    if (P0) {
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
    }

    if (P1) {
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
    }

    if (P2) {
        it('loginRoom roomID4', function(done) {
            this.timeout(TIMEOUT);
            roomID = ' ';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(roomIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID5', function(done) {
            this.timeout(TIMEOUT);
            roomID = "~!@#$%^&*()_+=-;',.<>/";
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(roomIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID6', function(done) {
            this.timeout(TIMEOUT);
            roomID = '~!@#$%^&*()_+`1234567890-=[]\'{}|;:",./<>?/';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(roomIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID7', function(done) {
            this.timeout(TIMEOUT);
            roomID =
                '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.be.null;
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID8', function(done) {
            this.timeout(TIMEOUT);
            roomID =
                '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(liveroomCmdError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID9', function(done) {
            this.timeout(TIMEOUT);
            roomID =
                '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(roomIDTooLongError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID10', function(done) {
            this.timeout(TIMEOUT);
            roomID =
                'abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijlmnopqrsquvwsyzlmnopqrsquvws';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(liveroomCmdError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID11', function(done) {
            this.timeout(TIMEOUT);
            roomID = '';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(roomIDEmptyError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID12', function(done) {
            this.timeout(TIMEOUT);
            roomID = ':';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(roomIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID13', function(done) {
            this.timeout(TIMEOUT);
            roomID = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(roomIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom roomID14', function(done) {
            this.timeout(TIMEOUT);
            roomID = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(roomIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });
    }
    /*
    if (P0) {
        it('loginRoom token1', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                userID: userID,
                userName: 'userName',
            });
            expect(result).to.be.true;
        });
    }

    if (P2) {
        it('loginRoom token2', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const test = () => {
                try {
                    zg.loginRoom(roomID, 'test', {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            //expect(e).not.to.be.true;
                            //expect(e).not.to.be.satisfies;
                            expect(e['code']).to.equals(1102016);
                            expect(e['msg']).to.equals('token format error');
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom token3', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const test = () => {
                try {
                    zg.loginRoom(roomID, '', {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e['code']).to.equals(1100001);
                            expect(e['msg']).to.equals('input parm error.');
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });

        it('loginRoom token4', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const test = () => {
                try {
                    zg.loginRoom(roomID, '...', {
                        userID: userID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e['code']).to.equals(1102016);
                            expect(e['msg']).to.equals('token format error');
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            };
            setTimeout(test, DELAY);
        });
    }*/
    /*
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
    });*/
});
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
});
*/
