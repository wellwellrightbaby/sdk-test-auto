import { ZegoExpressEngine } from '../../sdk/zego-express-engine-webrtc';
import Axios from 'axios';
import { before } from 'mocha';
import { P0, P1, P2 } from './config';
import {
    tokenFormatError,
    inputParmError,
    roomIDIllegalCharError,
    liveroomCmdError,
    roomIDTooLongError,
    roomIDEmptyError,
    userIDTooLongError,
    userIDIllegalCharError,
    tokenError,
    userIDEmptyError,
    userNameEmptyError,
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

//#region loginRoom

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
        this.timeout(TIMEOUT + TIMEOUT + TIMEOUT);
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
            this.timeout(TIMEOUT + TIMEOUT + TIMEOUT);
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
            setTimeout(test, TIMEOUT);
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
                            expect(e).to.deep.equal(tokenFormatError);
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
                            expect(e).to.deep.equal(inputParmError);
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
                            expect(e).to.deep.equal(tokenFormatError);
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

    if (P0) {
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
    }

    if (P2) {
        it('loginRoom userID3', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = '123456789012345678901234567890123456789012345678901234567890123';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
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
            });
        });

        it('loginRoom userID4', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = '1234567890123456789012345678901234567890123456789012345678901234';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
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
            });
        });

        it('loginRoom userID5', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = '12345678901234567890123456789012345678901234567890123456789012345';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(userIDTooLongError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });

        it('loginRoom userID6', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789012';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
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
            });
        });

        it('loginRoom userID7', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = '""';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(userIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });

        it('loginRoom userID8', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = 'test';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: 'test123',
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(tokenError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });

        it('loginRoom userID9', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = 'test';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: '',
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(userIDEmptyError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });

        it('loginRoom userID10', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = ' ';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(userIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });

        it('loginRoom userID11', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = '~!@#$%^&*()_+`1234567890-=[]\'{}|;:",./<>?/';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(userIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });

        it('loginRoom userID12', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = ':';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(userIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });

        it('loginRoom userID13', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = '一二三四五六七八九十一二三四五六七八九十一';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(userIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });

        it('loginRoom userID14', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uID = '一二三四五六七八九十一二三四五六七八九十一二';
            Axios.get('https://wsliveroom-demo.zego.im:8282/token', {
                params: { app_id: APPID, id_name: uID },
            }).then(token => {
                try {
                    zg.loginRoom(roomID, token.data, {
                        userID: uID,
                        userName: 'userName',
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            expect(e).to.deep.equal(userIDIllegalCharError);
                            done();
                        },
                    );
                } catch (e) {
                    done(e);
                }
            });
        });
    }

    if (P0) {
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
    }

    if (P2) {
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

        it('loginRoom userName7', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uName =
                '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: uName,
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

        it('loginRoom userName8', async function() {
            roomID = 'loginRoom_1234567890';
            const result = await zg.loginRoom(roomID, token, {
                userID: userID,
                userName:
                    '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五',
            });
            expect(result).to.be.true;
        });

        it('loginRoom userName9', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uName =
                '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: uName,
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

        it('loginRoom userName14', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'loginRoom_1234567890';
            const uName = '';
            const test = () => {
                try {
                    zg.loginRoom(roomID, token, {
                        userID: userID,
                        userName: uName,
                    }).then(
                        loginResult => {
                            expect(loginResult).to.be.true;
                            done();
                        },
                        e => {
                            console.warn('eee' + JSON.stringify(e));
                            expect(e).to.deep.equal(userNameEmptyError);
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

    if (P0) {
        it('loginRoom config1', async function() {
            this.timeout(TIMEOUT);
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
            this.timeout(TIMEOUT);
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
            this.timeout(TIMEOUT);
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
            this.timeout(TIMEOUT);
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
            this.timeout(TIMEOUT);
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
    }

    if (P2) {
        it('loginRoom config6', async function() {
            this.timeout(TIMEOUT);
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

        it('loginRoom config7', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'roomID';
            const test = () => {
                try {
                    zg.loginRoom(
                        roomID,
                        token,
                        {
                            userID: userID,
                            userName: 'userName',
                        },
                        {
                            maxMemberCount: Number.MAX_VALUE,
                        },
                    ).then(
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
            done();
        });

        it('loginRoom config8', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'roomID';
            const test = () => {
                try {
                    zg.loginRoom(
                        roomID,
                        token,
                        {
                            userID: userID,
                            userName: 'userName',
                        },
                        {
                            maxMemberCount: -1,
                        },
                    ).then(
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
            done();
        });

        it('loginRoom config9', async function() {
            this.timeout(TIMEOUT);
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
    }

    if (P0) {
        it('loginRoom config10', async function() {
            this.timeout(TIMEOUT);
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
            this.timeout(TIMEOUT);
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
            this.timeout(TIMEOUT);
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
            this.timeout(TIMEOUT);
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
    }

    if (P2) {
        it('loginRoom config14', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'roomID';
            const test = () => {
                try {
                    zg.loginRoom(
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
                    ).then(
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
            done();
        });

        it('loginRoom config15', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'roomID';
            const test = () => {
                try {
                    zg.loginRoom(
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
                    ).then(
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
            done();
        });

        it('loginRoom config16', function(done) {
            this.timeout(TIMEOUT);
            roomID = 'roomID';
            const test = () => {
                try {
                    zg.loginRoom(
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
                    ).then(
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
            done();
        });

        it('loginRoom config17', async function() {
            this.timeout(TIMEOUT);
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
    }
});
//#endregion

//#region logoutRoom

describe('express-web logoutRoom', function() {
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
        this.timeout(TIMEOUT);
        num += 1;
        console.warn('logoutRoom TestCase Begin ' + num);
    });

    afterEach(function() {
        console.warn('logoutRoom TestCase End ' + num);
    });

    if (P0) {
        it('logout roomID1', async function() {
            roomID = '1234567890';
            const resultLogin = await zg.loginRoom(roomID, token, {
                userID: userID,
                userName: 'userName',
            });
            expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID2', async function() {
            roomID = 'QWERTYUIOPASDFGHJKLZXCVBNM';
            const resultLogin = await zg.loginRoom(roomID, token, {
                userID: userID,
                userName: 'userName',
            });
            expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID3', async function() {
            roomID = 'qwertyuiopasdfghjklzxcvbnm';
            const resultLogin = await zg.loginRoom(roomID, token, {
                userID: userID,
                userName: 'userName',
            });
            expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID4', async function() {
            roomID = 'qwertyuiopasdfghjklzxcvbnm';
            const resultLogin = await zg.loginRoom(roomID, token, {
                userID: userID,
                userName: 'userName',
            });
            expect(resultLogin).to.be.true;
            roomID = '';
            const result = zg.logoutRoom();
            expect(result).to.be.undefined;
        });

        it('logout roomID5', async function() {
            roomID = 'qwertyuiopasdfghjklzxcvbnm';
            const resultLogin = await zg.loginRoom(roomID, token, {
                userID: userID,
                userName: 'userName',
            });
            expect(resultLogin).to.be.true;
            roomID = '';
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });
    }

    if (P2) {
        it('logout roomID6', async function() {
            roomID = "~!@#$%^&*()_+=-;',.<>/";
            //登入会失败，直接走登出逻辑
            // const resultLogin = await zg.loginRoom(roomID, token, {
            //     userID: userID,
            //     userName: 'userName',
            // });
            // expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID7', async function() {
            roomID = '~!@#$%^&*()_+`1234567890-=[]\'{}|;:",./<>?/';
            //登入会失败，直接走登出逻辑
            // const resultLogin = await zg.loginRoom(roomID, token, {
            //     userID: userID,
            //     userName: 'userName',
            // });
            // expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID8', async function() {
            this.timeout(TIMEOUT + TIMEOUT + TIMEOUT + TIMEOUT + TIMEOUT + TIMEOUT);
            roomID =
                '1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567';
            const resultLogin = await zg.loginRoom(roomID, token, {
                userID: userID,
                userName: 'userName',
            });
            expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID9', async function() {
            roomID =
                '12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678';
            //登入会失败，直接走登出逻辑
            // const resultLogin = await zg.loginRoom(roomID, token, {
            //     userID: userID,
            //     userName: 'userName',
            // });
            // expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID10', async function() {
            roomID =
                '123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789';
            //登入会失败，直接走登出逻辑
            // const resultLogin = await zg.loginRoom(roomID, token, {
            //     userID: userID,
            //     userName: 'userName',
            // });
            // expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID11', async function() {
            roomID =
                'abcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijabcdefghijlmnopqrsquvwsyzlmnopqrsquvws';
            //登入会失败，直接走登出逻辑
            // const resultLogin = await zg.loginRoom(roomID, token, {
            //     userID: userID,
            //     userName: 'userName',
            // });
            // expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID12', async function() {
            roomID = ' ';
            //登入会失败，直接走登出逻辑
            // const resultLogin = await zg.loginRoom(roomID, token, {
            //     userID: userID,
            //     userName: 'userName',
            // });
            // expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID13', async function() {
            roomID = ':';
            //登入会失败，直接走登出逻辑
            // const resultLogin = await zg.loginRoom(roomID, token, {
            //     userID: userID,
            //     userName: 'userName',
            // });
            // expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID14', async function() {
            roomID = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二';
            //登入会失败，直接走登出逻辑
            // const resultLogin = await zg.loginRoom(roomID, token, {
            //     userID: userID,
            //     userName: 'userName',
            // });
            // expect(resultLogin).to.be.true;
            const result = zg.logoutRoom(roomID);
            expect(result).to.be.undefined;
        });

        it('logout roomID15', async function() {
            try {
                roomID = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十一二三';
                //登入会失败，直接走登出逻辑
                // const resultLogin = await zg.loginRoom(roomID, token, {
                //     userID: userID,
                //     userName: 'userName',
                // });
                // expect(resultLogin).to.be.true;
                const result = zg.logoutRoom(roomID);
                expect(result).to.be.undefined;
            } catch (error) {
                console.warn('www:' + JSON.stringify(error));
            }
        });
    }
});

//#endregion
