(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./sdk/webrtc/zego.client.web.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./sdk/common/ZegoStreamCenter.ts":
/*!****************************************!*\
  !*** ./sdk/common/ZegoStreamCenter.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ZegoStreamCenter = /** @class */ (function () {
    function ZegoStreamCenter(log, stateCenter) {
        this.playerList = {};
        this.publisherList = {};
        this.playSuccessCallBackList = {};
        this.playErrorCallBackList = {};
    }
    ZegoStreamCenter.prototype.onRemoteCameraStatusUpdate = function (streamID, status) { };
    ZegoStreamCenter.prototype.onRemoteMicStatusUpdate = function (streamID, status) { };
    ZegoStreamCenter.prototype.setSessionInfo = function (appid, userid, token, testEnvironment) { };
    return ZegoStreamCenter;
}());
exports.ZegoStreamCenter = ZegoStreamCenter;


/***/ }),

/***/ "./sdk/common/clientBase/common.ts":
/*!*****************************************!*\
  !*** ./sdk/common/clientBase/common.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var zego_error_1 = __webpack_require__(/*! ../zego.error */ "./sdk/common/zego.error.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/util/client-util.ts");
var Common = /** @class */ (function () {
    function Common() {
    }
    Common.prototype.getSocket = function (server) {
        return null;
    };
    //空实现 web独有
    Common.prototype.setCDNInfo = function (streamInfo, streamItem) { };
    Common.prototype.onPublishStateUpdateHandle = function (type, streamID, error) {
        var _this = this;
        if (type == 0) {
            //start publish
            if (this.stateCenter.publishStreamList[streamID]) {
                if (this.stateCenter.publishStreamList[streamID].state == zego_entity_1.ENUM_PUBLISH_STREAM_STATE.tryPublish) {
                    this.stateCenter.publishStreamList[streamID].state = zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info;
                    this.streamHandler.updateStreamInfo(streamID, zego_entity_1.ENUM_STREAM_SUB_CMD.liveBegin, this.stateCenter.publishStreamList[streamID].extra_info, function (err) {
                        if (_this.stateCenter.publishStreamList[streamID] &&
                            _this.stateCenter.publishStreamList[streamID].state ==
                                zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) {
                            _this.stateCenter.publishStreamList[streamID].state = zego_entity_1.ENUM_PUBLISH_STREAM_STATE.stop;
                            _this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.error, streamID, err);
                            _this.streamCenter.stopPublishingStream(streamID);
                        }
                    });
                }
                else {
                    this.WebrtcOnPublishStateUpdateHandle(type, streamID, error);
                    if (this.stateCenter.clientType == 'xcx') {
                        this.dataReport.uploadReport(this.stateCenter.reportSeqList.startPublish[streamID]);
                        delete this.stateCenter.reportSeqList.startPublish[streamID];
                        client_util_1.ClientUtil.unregisterCallback('kZegoTaskPublishStart' + streamID, this.stateCenter.reportList);
                    }
                }
                //当前状态为publishing时，如果小程序继续回调相同的开始推流状态码，不应该再返回推流成功的回调
                // else if (this.stateCenter.publishStreamList[streamID].state == ENUM_PUBLISH_STREAM_STATE.publishing) {
                //     this.onPublishStateUpdate(type, streamID, error);
                // }
            }
        }
        else {
            this.streamHandler.onPublishStateUpdate(type, streamID, error);
            if (type == 1) {
                this.logger.info('cb.cm.opsuh trigger internal stop publish stream');
                this.stopPublishingStream(streamID, true);
            }
        }
    };
    //空实现，被子类覆盖
    Common.prototype.WebrtcOnPublishStateUpdateHandle = function (type, streamid, error) { };
    //abstract stopRemoteStream(streamID: string): void;
    //abstract stopPublishLocalStream(streamId: string): void;
    //abstract publishLocalStream(streamid: string, localStream: any, extraInfo: string): boolean;
    //abstract getRemoteStream(streamid: string, option?: object): Promise<any>;
    Common.prototype.loginBodyData = function () { };
    //重置流
    Common.prototype.resetStreamCenter = function () {
        this.stateCenter.customUrl && (this.stateCenter.customUrl = null);
        this.streamCenter.reset();
        if (!this.socketCenter.isDisConnect()) {
            //send stream delete info
            for (var streamid in this.stateCenter.publishStreamList) {
                if (this.stateCenter.publishStreamList[streamid].state == zego_entity_1.ENUM_PUBLISH_STREAM_STATE.publishing) {
                    this.streamHandler.updateStreamInfo(streamid, zego_entity_1.ENUM_STREAM_SUB_CMD.liveEnd, this.stateCenter.publishStreamList[streamid].extra_info);
                }
            }
        }
    };
    /*
     *    "zb.cm.hfwur": "ZegoExpressEngine.base.Common.handleFetchWebRtcUrlRsp",
     */
    Common.prototype.handleFetchWebRtcUrlRsp = function (msg) {
        var streamID = msg.body.stream_id;
        var totalStreamID = this.streamCenter.getTotalStreamId(streamID);
        var foundSignal = false;
        if (msg.body.urls && Array.isArray(msg.body.urls) && msg.body.urls.length > 0) {
            foundSignal = true;
        }
        else {
            this.logger.error('cb.cm.hfwur signal url is empty');
        }
        if (msg.body.ptype === 'push' && this.streamCenter.publisherList[totalStreamID]) {
            if (msg.header.seq !== this.streamCenter.publisherList[totalStreamID].seq) {
                this.logger.info('cb.cm.hfwur seq is not match, ignore ' + streamID);
                return;
            }
            //todo add event
            if (!foundSignal) {
                this.streamHandler.onPublishStateUpdate(1, streamID, zego_error_1.publishErrorList.DISPATCH_ERROR);
                this.stopPublishingStream(streamID);
                return;
            }
            if (this.stateCenter.publishStreamList[streamID]) {
                this.streamCenter.startPublishingStream(streamID, msg.body.urls);
            }
            else {
                this.logger.error('cb.cm.hfwur no streamid to publish');
            }
        }
        else if (msg.body.ptype == 'pull' && this.streamCenter.playerList[totalStreamID]) {
            if (msg.header.seq !== this.streamCenter.playerList[totalStreamID].seq) {
                this.logger.info('cb.cm.hfwur seq is not match, ignore ' + streamID);
                return;
            }
            if (!foundSignal) {
                this.streamCenter.onPlayStateUpdate(1, streamID, zego_error_1.playErrorList.DISPATCH_ERROR);
                this.stopPlayingStream(streamID);
                return;
            }
            //check streamid exist
            var found = false;
            for (var i = 0; i < this.stateCenter.streamList.length; i++) {
                if (this.stateCenter.streamList[i].stream_id === streamID) {
                    // 根据传入的流id判断当前的流列表中是否存在该流
                    found = true;
                    break;
                }
            }
            if (found == false) {
                this.logger.warn('cb.cm.hfwur cannot find stream, continue to play');
                // return;
            }
            this.streamCenter.startPlayingStream(streamID, msg.body.urls, this.streamCenter.playSuccessCallBackList[streamID]);
        }
    };
    return Common;
}());
exports.Common = Common;


/***/ }),

/***/ "./sdk/common/clientBase/heartBeatHandler.ts":
/*!***************************************************!*\
  !*** ./sdk/common/clientBase/heartBeatHandler.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/util/client-util.ts");
var zego_extern_1 = __webpack_require__(/*! ../zego.extern */ "./sdk/common/zego.extern.ts");
var zego_logevent_1 = __webpack_require__(/*! ../zego.logevent */ "./sdk/common/zego.logevent.ts");
var zego_externalError_1 = __webpack_require__(/*! ../zego.externalError */ "./sdk/common/zego.externalError.ts");
var MAX_TRY_HEARTBEAT_COUNT = 3; //最大心跳尝试次数
var HeartBeatHandler = /** @class */ (function () {
    function HeartBeatHandler(logger, stateCenter, socketCenter, dataReport) {
        this.logger = logger;
        this.socketCenter = socketCenter;
        this.stateCenter = stateCenter;
        this.dataReport = dataReport;
    }
    HeartBeatHandler.prototype.resetHeartbeat = function () {
        this.logger.debug('zb.hb.rht call');
        clearTimeout(this.stateCenter.heartbeatTimer);
        this.stateCenter.heartbeatTimer = null;
        clearTimeout(this.stateCenter.loginHeartbeatTimer);
        this.stateCenter.loginHeartbeatTimer = null;
        this.stateCenter.tryHeartbeatCount = 0;
        this.logger.debug('zb.hb.rht call success');
    };
    //空实现 ，logincenter覆盖
    HeartBeatHandler.prototype.hbLogout = function (err) { };
    HeartBeatHandler.prototype.fetchReliableMessage = function (trans_channel, trans_seq_array) { };
    HeartBeatHandler.prototype.start = function (heartbeatInterval) {
        var _this = this;
        this.logger.info('zb.hb.sht call');
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLiveRoomhHB);
        this.dataReport.addMsgInfo(reportSeq, {
            room_sid: this.stateCenter.sessionid,
        });
        // 若当前不是处于login登录状态，则返回不做心跳
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.hb.sht state error');
            this.dataReport.addMsgInfo(reportSeq, {
                error: zego_logevent_1.errorList.kLiveRoomNotLoginError.code,
                message: zego_logevent_1.errorList.kLiveRoomNotLoginError.message,
            });
            this.dataReport.uploadReport(reportSeq);
            return;
        }
        // 若尝试心跳次数大于最大尝试次数，则置为登出状态，清除状态数据
        if (++this.stateCenter.tryHeartbeatCount > MAX_TRY_HEARTBEAT_COUNT) {
            this.logger.error('zb.hb.sht come to try limit');
            this.dataReport.addMsgInfo(reportSeq, {
                error: zego_logevent_1.errorList.kLiveRoomHBTimeoutError.code,
                message: zego_logevent_1.errorList.kLiveRoomHBTimeoutError.message,
            });
            this.dataReport.uploadReport(reportSeq);
            this.hbLogout(zego_externalError_1.errorCodeList.HEARTBEAT_TIMEOUT);
            return;
        }
        // 发送消息
        this.logger.debug('zb.hb.sht send packet');
        var bodyData = {
            reserve: 0,
        };
        this.socketCenter.registerRouter('hb', function (msg) {
            if (msg.body.err_code !== 0) {
                var err = client_util_1.ClientUtil.decodeServerError(msg.body.err_code, msg.body.err_message);
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: err.code,
                    message: err.message,
                });
            }
            _this.dataReport.uploadReport(reportSeq);
            _this.handleHeartbeatRsp(msg);
        });
        this.socketCenter.sendMessage('hb', bodyData);
        this.logger.info('zb.hb.sht call success');
        this.stateCenter.heartbeatInterval = heartbeatInterval;
        // heartbeatInterval后再发
        this.stateCenter.heartbeatTimer = setTimeout(function () {
            _this.start(_this.stateCenter.heartbeatInterval);
        }, this.stateCenter.heartbeatInterval);
    };
    HeartBeatHandler.prototype.relogin = function () { };
    /*
     *    "hhbr.0": "ZegoExpressEngine.handleHeartbeatRsp",
     */
    HeartBeatHandler.prototype.handleHeartbeatRsp = function (msg) {
        this.logger.debug('zb.hb.hhbr call');
        // TODO
        if (msg.body.err_code == zego_entity_1.ERROR_CODES.ROOM_SESSION_ID_ERR) {
            // relogin
            this.hbLogout(zego_externalError_1.errorCodeList.HEARTBEAT_TIMEOUT);
            return;
        }
        if (msg.body.err_code !== 0) {
            this.logger.error('zb.hb.hhbr call disconnect, server error=', msg.body.err_code);
            // TODO room_session_id error
            this.hbLogout(client_util_1.ClientUtil.getServerError(msg.body.err_code));
            return;
        }
        //reset heartbeat fail count
        this.stateCenter.tryHeartbeatCount = 0;
        this.stateCenter.heartbeatInterval = msg.body.hearbeat_interval;
        if (this.stateCenter.heartbeatInterval < zego_entity_1.MINIUM_HEARTBEAT_INTERVAL) {
            this.stateCenter.heartbeatInterval = zego_entity_1.MINIUM_HEARTBEAT_INTERVAL;
        }
        //update timewindow
        if (msg.body.bigim_time_window && typeof msg.body.bigim_time_window == 'number') {
            this.stateCenter.bigimTimeWindow = msg.body.bigim_time_window;
        }
        if (msg.body.dati_time_window && typeof msg.body.dati_time_window == 'number') {
            this.stateCenter.datiTimeWindow = msg.body.dati_time_window;
        }
        this.ReliableMessageHandler(msg);
        //update stream if diff/
        this.fetchStreamList(msg);
        //update user if diff
        // if (msg.body.server_user_seq !== this.stateCenter.userSeq && this.stateCenter.userStateUpdate) {
        //     this.logger.info('zb.hb.hhbr call update user ' + msg.body.server_user_seq, this.stateCenter.userSeq);
        //     this.fetchUserList();
        // }
        this.patchUserList(msg);
        //try updating stream info again
        for (var streamid in this.stateCenter.publishStreamList) {
            if (this.stateCenter.publishStreamList[streamid].state == zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) {
                this.logger.info('zb.hb.hhbr try to update stream info');
                this.updateStreamInfo(streamid, zego_entity_1.ENUM_STREAM_SUB_CMD.liveBegin, this.stateCenter.publishStreamList[streamid].extra_info);
            }
        }
        //get online count
        if (msg.body.online_count != undefined && msg.body.online_count != 0) {
            this.onUpdateOnlineCount(this.stateCenter.roomid, msg.body.online_count);
        }
        this.logger.debug('zb.hb.hhbr call success');
    };
    HeartBeatHandler.prototype.ReliableMessageHandler = function (msg) {
        var _this = this;
        //check trans seq
        if (msg.body.trans_seqs) {
            for (var i = 0; i < msg.body.trans_seqs.length; i++) {
                var trans_channel = msg.body.trans_seqs[i].trans_channel;
                var trans_seq_array = msg.body.trans_seqs[i].trans_seq_array;
                trans_seq_array = trans_seq_array.filter(function (item) {
                    var type = item.trans_type, seq = item.trans_seq;
                    if (!_this.stateCenter.transSeqMap[type] || _this.stateCenter.transSeqMap[type].seq < seq) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                trans_seq_array.length > 0 && this.fetchReliableMessage(trans_channel, trans_seq_array);
            }
        }
    };
    /*
     *    "fsl.0": "ZegoExpressEngine.fetchStreamList",拉取服务端流信息
     */
    HeartBeatHandler.prototype.fetchStreamList = function (msg) {
        var _this = this;
        //update stream if diff/
        if (msg.body.stream_seq === this.stateCenter.streamSeq)
            return;
        this.logger.debug('zb.hb.fsl current seq ' + this.stateCenter.streamSeq + ' server Seq ' + msg.body.stream_seq);
        this.logger.debug('zb.hb.fsl call');
        // 不是处于登录状态，不让拉流
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.hb.fsl state error');
            return;
        }
        // 是否正处于拉流状态 false 为完成， true为正在拉流
        if (this.stateCenter.streamQuerying) {
            this.logger.warn('zb.hb.fsl already doing');
            return;
        }
        this.stateCenter.streamQuerying = true;
        this.logger.debug('zb.hb.fsl send fetch request');
        // 发送消息
        this.socketCenter.registerRouter('stream_info', function (msg) {
            _this.handleFetchStreamListRsp(msg);
        });
        this.socketCenter.sendMessage('stream_info', {
            reserve: 0,
        });
        this.logger.debug('zb.hb.fsl call success');
    };
    HeartBeatHandler.prototype.patchUserList = function (msg) {
        var _this = this;
        if (msg.body.server_user_seq !== this.stateCenter.userSeq &&
            this.stateCenter.userStateUpdate &&
            !this.stateCenter.userSeqMergeMap) {
            // 如果超过上次全量同步用户的等待时间则立即同步，否则等待差值后再同步
            var wait = this.stateCenter.lastUserQueryTime - Date.now();
            this.logger.info('zb.hb.hhbr call update user ' +
                this.stateCenter.userSeq +
                ' server ' +
                msg.body.server_user_seq +
                ' wait ' +
                wait);
            if (wait > 0) {
                this.stateCenter.userQueryTimer && clearTimeout(this.stateCenter.userQueryTimer);
                this.stateCenter.userQueryTimer = setTimeout(function () {
                    _this.fetchUserList();
                }, wait);
            }
            else {
                this.fetchUserList();
            }
        }
    };
    //空实现 被覆盖
    HeartBeatHandler.prototype.handleFetchStreamListRsp = function (msg) { };
    //空实现 被覆盖
    HeartBeatHandler.prototype.fetchUserList = function () { };
    //流更新信令  退出上次推的自己的流
    HeartBeatHandler.prototype.updateStreamInfo = function (streamid, cmd, stream_extra_info, error) {
        if (stream_extra_info === void 0) { stream_extra_info = ''; }
    };
    //空实现 被sdk覆盖
    HeartBeatHandler.prototype.onUpdateOnlineCount = function (roomId, userCount) { };
    //空实现 被sdk覆盖了
    HeartBeatHandler.prototype.onRecvReliableMessage = function (transResults) { };
    HeartBeatHandler.prototype.resetCheckMessage = function () {
        this.logger.debug('zb.hb.rcm call');
        clearTimeout(this.stateCenter.sendDataCheckTimer);
        this.stateCenter.sendDataCheckTimer = null;
        this.checkSendMessageList(this.stateCenter.sendDataList);
        this.checkSendMessageList(this.stateCenter.sendCommandList);
        this.stateCenter.sendDataMap = {};
        this.stateCenter.sendCommandMap = {};
        this.logger.debug('zb.hb.rcm call success');
    };
    HeartBeatHandler.prototype.checkSendMessageList = function (messageList) {
        var head = messageList.getFirst();
        while (head != null) {
            messageList.remove(head);
            if (head._data.error) {
                if (head._data.data.body.custom_msg) {
                    head._data.error(zego_externalError_1.errorCodeList.TIMEOUT, head._data.data.header.seq, head._data.data.body.custom_msg);
                }
                else {
                    head._data.error(zego_externalError_1.errorCodeList.TIMEOUT, head._data.data.header.seq);
                }
            }
            head = messageList.getFirst();
        }
    };
    HeartBeatHandler.prototype.checkMessageListTimeout = function (messageList, messageMap) {
        var head = messageList.getFirst();
        var timestamp = Date.parse(new Date() + '');
        var checkCount = 0;
        var timeoutMsgCount = 0;
        var dropMsgCount = 0;
        while (head != null) {
            var _dataTimeout = head._data.data.header.cmd === 'biz_channel'
                ? this.stateCenter.sendDataBizTimeout
                : this.stateCenter.sendDataTimeout;
            if (head._data.time + _dataTimeout > timestamp) {
                break;
            }
            delete messageMap[head._data.data.header.seq];
            messageList.remove(head);
            ++timeoutMsgCount;
            if (head._data.error == null ||
                (this.stateCenter.sendDataDropTimeout > 0 &&
                    head._data.time + this.stateCenter.sendDataDropTimeout < timestamp)) {
                ++dropMsgCount;
            }
            else {
                if (head._data.data.body.custom_msg) {
                    head._data.error(zego_externalError_1.errorCodeList.TIMEOUT, head._data.data.header.seq, head._data.data.body.custom_msg);
                }
                else {
                    head._data.error(zego_externalError_1.errorCodeList.TIMEOUT, head._data.data.header.seq);
                }
            }
            ++checkCount;
            if (checkCount >= this.stateCenter.sendDataCheckOnceCount) {
                break;
            }
            head = messageList.getFirst();
        }
        if (timeoutMsgCount != 0 || dropMsgCount != 0) {
            this.logger.debug('zb.hb.cmt call success, stat: timeout=', timeoutMsgCount, 'drop=', dropMsgCount);
        }
    };
    /*
     *    "scmt.0": "ZegoExpressEngine.startCheckMessageTimeout",
     */
    //检查custommsg发送包是否超时
    HeartBeatHandler.prototype.startCheckMessageTimeout = function () {
        var _this = this;
        //this.logger.debug("scmt.0 call");
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.hb.scmt state error');
            return;
        }
        this.checkMessageListTimeout(this.stateCenter.sendDataList, this.stateCenter.sendDataMap);
        this.checkMessageListTimeout(this.stateCenter.sendCommandList, this.stateCenter.sendCommandMap);
        this.stateCenter.sendDataCheckTimer = setTimeout(function () {
            _this.startCheckMessageTimeout();
        }, this.stateCenter.sendDataCheckInterval);
    };
    return HeartBeatHandler;
}());
exports.HeartBeatHandler = HeartBeatHandler;


/***/ }),

/***/ "./sdk/common/clientBase/index.ts":
/*!****************************************!*\
  !*** ./sdk/common/clientBase/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ./common */ "./sdk/common/clientBase/common.ts");
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var socketCenter_1 = __webpack_require__(/*! ./socketCenter */ "./sdk/common/clientBase/socketCenter.ts");
var roomHandler_1 = __webpack_require__(/*! ./roomHandler */ "./sdk/common/clientBase/roomHandler.ts");
var streamHandler_1 = __webpack_require__(/*! ./streamHandler */ "./sdk/common/clientBase/streamHandler.ts");
var heartBeatHandler_1 = __webpack_require__(/*! ./heartBeatHandler */ "./sdk/common/clientBase/heartBeatHandler.ts");
var messageHandler_1 = __webpack_require__(/*! ./messageHandler */ "./sdk/common/clientBase/messageHandler.ts");
var liveHandler_1 = __webpack_require__(/*! ./liveHandler */ "./sdk/common/clientBase/liveHandler.ts");
var zego_externalError_1 = __webpack_require__(/*! ../zego.externalError */ "./sdk/common/zego.externalError.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/util/client-util.ts");
var zego_extern_1 = __webpack_require__(/*! ../zego.extern */ "./sdk/common/zego.extern.ts");
var zego_logevent_1 = __webpack_require__(/*! ../zego.logevent */ "./sdk/common/zego.logevent.ts");
// 对外开发接口，与文档保持一致；调度中心
var BaseCenter = /** @class */ (function (_super) {
    __extends(BaseCenter, _super);
    function BaseCenter() {
        return _super.call(this) || this;
    }
    BaseCenter.prototype.init = function () {
        this.bindSocketHandler();
        this.bindStreamHandler();
        this.bindHeatBeatHandler();
        this.bindRoomHandler();
        this.bindMessageHandler();
        this.bindLiveHandler();
        this.bindStreamCenterHandler();
    };
    /*
     *    "zb.cm.bsh.0": "ZegoClient.base.bindSocketHandler",
     */
    BaseCenter.prototype.bindSocketHandler = function () {
        var _this = this;
        this.socketCenter = new socketCenter_1.SocketCenter(this.logger, this.stateCenter);
        this.socketCenter.registerRouter('push_signal', function (msg) {
            _this.liveHandler.handlePushSignalMsg(msg);
        });
        this.socketCenter.getSocket = function (server) {
            return _this.getSocket(server);
        };
        this.socketCenter.handlePushKickout = function (msg) {
            _this.logger.info('zb.cm.bsh.0  call hpk');
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskKickout);
            _this.roomHandler.setRunState(zego_entity_1.ENUM_RUN_STATE.logout);
            _this.roomHandler.resetRoom();
            _this.dataReport.addMsgInfo(reportSeq, {
                user_id: _this.stateCenter.idName,
            });
            _this.logger.error('zb.cm.bsh.0 kick out reason ' + msg.body.reason);
            var _kickoutErr = client_util_1.ClientUtil.getKickoutError(msg.body.reason);
            _this.dataReport.addMsgInfo(reportSeq, {
                error: _kickoutErr.code,
                message: _kickoutErr.message,
            });
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.actionListener('roomStateUpdate', _this.stateCenter.roomid, 'DISCONNECTED', 
            // @ts-ignore
            zego_externalError_1.errorCodeList[_kickoutErr.name].code, 
            // @ts-ignore
            zego_externalError_1.errorCodeList[_kickoutErr.name].msg);
            _this.logger.debug('zb.cm.bsh.0  call hpk success');
        };
        this.socketCenter.handlePushCustomMsg = function (msg) {
            _this.messageHandler.handlePushCustomMsg(msg);
        };
        this.socketCenter.handlePushUserStateUpdateMsg = function (msg) {
            _this.roomHandler.handlePushUserStateUpdateMsg(msg);
        };
        // id_name: "1571033566235"
        // msg_category: 1
        // msg_content: "test"
        // msg_id: 1
        // msg_type: 1
        // nick_name: ""
        // role: 1
        // send_time: 1571033604338
        this.socketCenter.handlePushRoomMsg = function (msg) {
            var seq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(seq);
            _this.dataReport.addMsgInfo(seq, {
                room_sid: msg.header.session_id,
            });
            var chatData = [];
            msg.body.chat_data.forEach(function (data) {
                var chatInfo = {
                    fromUser: {
                        userID: data.id_name,
                        userName: data.nick_name,
                    },
                    message: data.msg_content,
                    sendTime: data.send_time,
                    messageID: data.msg_id,
                };
                chatData.push(chatInfo);
                _this.dataReport.addMsgInfo(seq, {
                    from_msg_id: data.id_name,
                });
            });
            _this.dataReport.uploadReport(seq, zego_logevent_1.eventList.kZegoTaskLiveRoomGetRoomMessage);
            _this.stateCenter.actionListener('IMRecvBroadcastMessage', _this.stateCenter.roomid, chatData);
        };
        this.socketCenter.handlePushMergeMsg = function (msg) {
            _this.messageHandler.handlePushMergeMsg(msg);
        };
        this.socketCenter.handlePushTransMsg = function (msg) {
            _this.messageHandler.handlePushTransMsg(msg);
        };
        this.socketCenter.handleBigImMsgRsp = function (msg) {
            _this.messageHandler.handleBigImMsgRsp(msg);
        };
    };
    BaseCenter.prototype.bindStreamHandler = function () {
        var _this = this;
        this.streamHandler = new streamHandler_1.StreamHandler(this.logger, this.stateCenter, this.socketCenter, this.dataReport);
        this.streamHandler.onStreamUpdated = function (roomID, type, streamList) {
            var _streamList = streamList.map(function (stream) {
                return {
                    streamID: stream.streamID,
                    user: stream.user,
                    extraInfo: stream.extraInfo,
                    urlsFLV: stream.urlFlv,
                    urlsRTMP: stream.urlRtmp,
                    urlsHLS: stream.urlHls,
                    urlsHttpsFLV: stream.urlHttpsFlv,
                    urlsHttpsHLS: stream.urlHttpsHls,
                };
            });
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLiveRoomGetStreamUpdateInfo);
            _this.dataReport.addMsgInfo(reportSeq, {
                stream_update_type: type === 1 ? 'added' : 'deleted',
                update_stream: _streamList,
            });
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.actionListener('roomStreamUpdate', roomID, client_util_1.ClientUtil.getSteamUpdateType(type), _streamList);
            if (type === 1) {
                var filterStreamList_1 = [];
                _streamList.forEach(function (stream) {
                    if (stream.extraInfo) {
                        filterStreamList_1.push({
                            streamID: stream.streamID,
                            user: stream.user,
                            extraInfo: stream.extraInfo,
                        });
                    }
                });
                filterStreamList_1.length > 0 &&
                    _this.stateCenter.actionListener('streamExtraInfoUpdate', roomID, filterStreamList_1);
            }
        };
        this.streamHandler.onPublishStateUpdate = function (type, streamID, error) {
            _this.logger.info('zb.opsu ', streamID);
            if (_this.stateCenter.clientType == 'xcx') {
                if (type == 0) {
                    client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskPublishStart' + streamID, _this.stateCenter.reportList) &&
                        client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskPublishStart' + streamID, _this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.eventEnd, 'publish_state');
                    _this.dataReport.uploadReport(_this.stateCenter.reportSeqList.startPublish[streamID]);
                    delete _this.stateCenter.reportSeqList.startPublish[streamID];
                    client_util_1.ClientUtil.unregisterCallback('kZegoTaskPublishStart' + streamID, _this.stateCenter.reportList);
                }
                else if (type == 1) {
                    _this.dataReport.addMsgInfo(_this.stateCenter.reportSeqList.startPublish[streamID], {
                        error: error.code,
                        message: error.msg,
                    });
                    _this.dataReport.uploadReport(_this.stateCenter.reportSeqList.startPublish[streamID]);
                    delete _this.stateCenter.reportSeqList.startPublish[streamID];
                    client_util_1.ClientUtil.unregisterCallback('kZegoTaskPublishStart' + streamID, _this.stateCenter.reportList);
                }
            }
            else {
                streamID = _this.streamCenter.getRealStreamId(streamID);
                var totalStreamID = _this.streamCenter.getTotalStreamId(streamID);
                var reportSeq = _this.stateCenter.reportSeqList.startPublish[totalStreamID];
                var publish = _this.streamCenter.publisherList[totalStreamID];
                if (publish && publish.publisher && (type == 0 || type == 1) && reportSeq) {
                    if (publish.publisher.retrySeq !== 0) {
                        var retrySeq = publish.publisher.retrySeq;
                        _this.dataReport.eventEndWithMsgInfo(retrySeq, 'PublishState', {
                            type: type,
                        });
                        type == 1 &&
                            _this.dataReport.addMsgInfo(retrySeq, {
                                error: error.code,
                                message: error.msg,
                            });
                        _this.dataReport.uploadReport(retrySeq);
                        delete _this.stateCenter.reportSeqList.rePublish[totalStreamID];
                    }
                    else {
                        _this.dataReport.eventEndWithMsgInfo(reportSeq, 'PublishState', {
                            type: type,
                        });
                        type == 1 &&
                            _this.dataReport.addMsgInfo(reportSeq, {
                                error: error.code,
                                message: error.msg,
                            });
                        _this.dataReport.uploadReport(reportSeq);
                        delete _this.stateCenter.reportSeqList.startPublish[totalStreamID];
                    }
                }
            }
            // @ts-ignore
            error.code &&
                // @ts-ignore
                zego_externalError_1.exterErrorCodeMap[error.code] &&
                // @ts-ignore
                (error.code = zego_externalError_1.errorCodeList[zego_externalError_1.exterErrorCodeMap[error.code]].code);
            _this.stateCenter.actionListener('publisherStateUpdate', {
                state: client_util_1.ClientUtil.getPublisherStateType(type),
                streamID: streamID,
                errorCode: error.code,
                extendedData: error.msg,
            });
        };
        this.streamHandler.onStreamExtraInfoUpdated = function (roomID, streamList) {
            var _streamList = streamList.map(function (stream) {
                return {
                    streamID: stream.streamID,
                    user: stream.user,
                    extraInfo: stream.extraInfo,
                };
            });
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLiveRoomGetStreamExtraInfo);
            _this.dataReport.addMsgInfo(reportSeq, {
                update_stream: _streamList,
            });
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.actionListener('streamExtraInfoUpdate', roomID, _streamList);
        };
        this.streamHandler.setCDNInfo = function (streamInfo, streamItem) {
            _this.setCDNInfo(streamInfo, streamItem);
        };
    };
    BaseCenter.prototype.bindHeatBeatHandler = function () {
        var _this = this;
        this.heartBeatHandler = new heartBeatHandler_1.HeartBeatHandler(this.logger, this.stateCenter, this.socketCenter, this.dataReport);
        this.heartBeatHandler.onRecvReliableMessage = function (transResults) {
            var extraInfoList = transResults.map(function (result) {
                return {
                    key: result.trans_type,
                    value: result.trans_data,
                    updateUser: {
                        userID: result.trans_idname,
                        userName: result.trans_nickname,
                    },
                    updateTime: result.trans_send_time,
                };
            });
            _this.stateCenter.actionListener('roomExtraInfoUpdate', _this.stateCenter.roomid, extraInfoList);
            transResults.forEach(function (result) {
                _this.stateCenter.actionListener('recvReliableMessage', result.trans_type, result.trans_seq, result.trans_data);
            });
        };
        this.heartBeatHandler.handleFetchStreamListRsp = function (msg) {
            _this.streamHandler.handleFetchStreamListRsp(msg);
        };
        this.heartBeatHandler.fetchUserList = function () {
            _this.roomHandler.fetchUserList();
        };
        this.heartBeatHandler.onUpdateOnlineCount = function (roomId, userCount) {
            _this.stateCenter.actionListener('roomOnlineUserCountUpdate', roomId, userCount);
        };
        this.heartBeatHandler.updateStreamInfo = function (streamid, cmd, stream_extra_info, error) {
            if (stream_extra_info === void 0) { stream_extra_info = ''; }
            _this.streamHandler.updateStreamInfo(streamid, cmd, stream_extra_info, error);
        };
        this.heartBeatHandler.hbLogout = function (err) {
            _this.logger.error('hhbr.0 ' + err.msg);
            _this.stateCenter.actionListener('roomStateUpdate', _this.stateCenter.roomid, 'DISCONNECTED', err.code, '');
        };
        this.heartBeatHandler.fetchReliableMessage = function (trans_channel, trans_seq_array) {
            _this.messageHandler.fetchReliableMessage(trans_channel, trans_seq_array);
        };
        this.heartBeatHandler.relogin = function () {
            _this.roomHandler.relogin();
        };
    };
    /*
     *    "zb.cm.brh": "ZegoClient.base.bindRoomHandler",
     */
    BaseCenter.prototype.bindRoomHandler = function () {
        var _this = this;
        this.roomHandler = new roomHandler_1.RoomHandler(this.logger, this.stateCenter, this.socketCenter);
        this.roomHandler.loginSuccessCallBack = function (lastRunState, msg) {
            //处理心跳
            var heartbeatInterval = msg.body.hearbeat_interval < zego_entity_1.MINIUM_HEARTBEAT_INTERVAL
                ? zego_entity_1.MINIUM_HEARTBEAT_INTERVAL
                : msg.body.hearbeat_interval;
            _this.stateCenter.loginHeartbeatTimer = setTimeout(function () {
                _this.stateCenter.tryHeartbeatCount = 0;
                _this.stateCenter.heartbeatTimer && clearTimeout(_this.stateCenter.heartbeatTimer);
                _this.heartBeatHandler.start(heartbeatInterval);
            }, heartbeatInterval);
            //消息检查
            _this.heartBeatHandler.resetCheckMessage();
            _this.heartBeatHandler.startCheckMessageTimeout();
            _this.streamCenter.setSessionInfo(_this.stateCenter.appid, _this.stateCenter.idName, _this.stateCenter.token, _this.stateCenter.testEnvironment);
            //房间成员变化
            //handle anchor info
            if (msg.body.anchor_info) {
                _this.stateCenter.actionListener('getAnchorInfo', msg.body.anchor_info.anchor_id_name, msg.body.anchor_info.anchor_nick_name);
            }
            if (msg.body.online_count) {
                _this.stateCenter.actionListener('roomOnlineUserCountUpdate', _this.stateCenter.roomid, msg.body.online_count);
            }
            //handle userStateUpdate
            _this.logger.info('zb.cm.brh hls userStateUpdate ' + _this.stateCenter.userStateUpdate);
            if (_this.stateCenter.userStateUpdate) {
                _this.logger.info('zb.cm.brh hls fetch all new userlist');
                _this.roomHandler.fetchUserList(lastRunState);
            }
            //流处理理
            _this.streamHandler.handleStreamStart(lastRunState, msg);
        };
        this.roomHandler.resetRoomCallBack = function () {
            // 清除心跳计时器对象
            _this.heartBeatHandler.resetHeartbeat();
            // 清除检查消息循环
            _this.heartBeatHandler.resetCheckMessage();
            //清除推拉流状态
            _this.resetStreamCenter();
        };
        // this.roomHandler.socketCloseCallBack = (): void => {
        //     console.error('socketCloseCallBack');
        //     this.heartBeatHandler.resetHeartbeat();
        // };
        this.roomHandler.onUserStateUpdate = function (roomID, updateType, userList) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLiveRoomGetUserUpdateInfo);
            var callUserList = userList.filter(function (val) { return val.userID !== _this.stateCenter.idName; });
            callUserList.length !== 0 &&
                _this.stateCenter.actionListener('roomUserUpdate', roomID, updateType, callUserList);
            _this.dataReport.addMsgInfo(reportSeq, { user_update_type: updateType == 'ADD' ? 'added' : 'deleted' });
        };
        this.roomHandler.onDisconnect = function (err) {
            _this.logger.error('zc.od.0 ' + err.msg);
            if (typeof err.code == 'string' && err.code === 'Error.Network') {
                _this.dataReport.addMsgInfo(_this.stateCenter.reportSeqList.relogin, {
                    error: zego_logevent_1.errorList.kLiveRoomDisconnect.code,
                    message: zego_logevent_1.errorList.kLiveRoomDisconnect.message,
                });
            }
            else if (typeof err.code == 'number') {
                var serverErr = void 0;
                if ((err.code < 2000000000 && err.code > 1000000000) || err.code < 1000000) {
                    serverErr = client_util_1.ClientUtil.decodeServerError(err.code, err.msg);
                }
                else {
                    serverErr = zego_logevent_1.codeErrMap[err.code];
                }
                serverErr &&
                    _this.dataReport.addMsgInfo(_this.stateCenter.reportSeqList.relogin, {
                        error: serverErr.code,
                        message: serverErr.message,
                    });
            }
            _this.dataReport.uploadReport(_this.stateCenter.reportSeqList.relogin);
            _this.stateCenter.reportSeqList.relogin = 0;
            client_util_1.ClientUtil.unregisterCallback('kZegoTaskReLoginRoom', _this.stateCenter.reportList);
            _this.stateCenter.actionListener('roomStateUpdate', _this.stateCenter.roomid, 'DISCONNECTED', err.code, '');
        };
        this.roomHandler.onConnecting = function (err) {
            if (_this.stateCenter.reportSeqList.login === 0) {
                var reportSeq = zego_extern_1.getReportSeq();
                _this.stateCenter.reportSeqList.relogin = reportSeq;
                _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskReLoginRoom);
                client_util_1.ClientUtil.logReportCallback('kZegoTaskReLoginRoom', _this.dataReport, reportSeq, _this.stateCenter.reportList);
            }
            _this.stateCenter.actionListener('roomStateUpdate', _this.stateCenter.roomid, 'CONNECTING', err.code, err.msg);
        };
        this.roomHandler.fetchReliableMessage = function (trans_channel, trans_seq_array) {
            _this.messageHandler.fetchReliableMessage(trans_channel, trans_seq_array);
        };
        this.roomHandler.loginBodyData = function () { return _this.loginBodyData(); };
    };
    BaseCenter.prototype.bindMessageHandler = function () {
        var _this = this;
        this.messageHandler = new messageHandler_1.MessageHandler(this.logger, this.stateCenter, this.socketCenter, this.dataReport);
        this.messageHandler.onRecvCustomCommand = function (fromUserId, fromUserName, roomId, command) {
            var seq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(seq);
            _this.dataReport.uploadReport(seq, zego_logevent_1.eventList.kZegoTaskLiveRoomGetCustomCommand);
            _this.stateCenter.actionListener('IMRecvCustomCommand', roomId, { userID: fromUserId, userName: fromUserName }, command);
        };
        this.messageHandler.onRecvBigRoomMessage = function (messageList, roomId) {
            var seq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(seq);
            var chatData = [];
            messageList.forEach(function (data) {
                var chatInfo = {
                    fromUser: {
                        userID: data.idName,
                        userName: data.nickName,
                    },
                    message: data.content,
                    sendTime: data.time,
                    messageID: data.messageId,
                };
                chatData.push(chatInfo);
            });
            _this.dataReport.uploadReport(seq, zego_logevent_1.eventList.kZegoTaskLiveGetRoomBigIM);
            _this.stateCenter.actionListener('IMRecvBarrageMessage', roomId, chatData);
        };
        this.messageHandler.onRecvReliableMessage = function (transResults) {
            var extraInfoList = transResults.map(function (result) {
                return {
                    key: result.trans_type,
                    value: result.trans_data,
                    updateUser: {
                        userID: result.trans_idname,
                        userName: result.trans_nickname,
                    },
                    updateTime: result.trans_send_time,
                };
            });
            _this.stateCenter.actionListener('roomExtraInfoUpdate', _this.stateCenter.roomid, extraInfoList);
            transResults.forEach(function (result) {
                _this.stateCenter.actionListener('recvReliableMessage', result.trans_type, result.trans_seq, result.trans_data);
            });
        };
        this.messageHandler.relogin = function () {
            _this.roomHandler.relogin();
        };
    };
    BaseCenter.prototype.bindLiveHandler = function () {
        var _this = this;
        this.liveHandler = new liveHandler_1.LiveHandler(this.logger, this.stateCenter, this.socketCenter);
        this.liveHandler.onRecvEndJoinLiveCommand = function (requestId, from_userid, from_username, roomid) {
            _this.stateCenter.actionListener('recvEndJoinLiveCommand', requestId, from_userid, from_username, roomid);
        };
        this.liveHandler.onRecvInviteJoinLiveRequest = function (requestId, from_userid, from_username, roomid) {
            _this.stateCenter.actionListener('RecvInviteJoinLiveRequest', requestId, from_userid, from_username, roomid);
        };
        this.liveHandler.onRecvJoinLiveRequest = function (requestId, from_userid, from_username, roomid) {
            _this.stateCenter.actionListener('recvJoinLiveRequest', requestId, from_userid, from_username, roomid);
        };
    };
    // bindStreamCenterHandler() {
    //     this.streamCenter.onPlayStateUpdate = (type: 0 | 1 | 2, streamID: string, error: ERRO) => {
    //         const playStates = ['PLAYING', 'NO_PLAY', 'PLAY_REQUESTING'];
    //         this.stateCenter.actionListener('playerStateUpdate', {
    //             streamID,
    //             state: playStates[type],
    //             error: { errorCode: error.code, extendedData: '' },
    //         });
    //     };
    //     this.streamCenter.onPublishQualityUpdate = (streamID: string, streamQuality: StreamQuality) => {
    //         this.stateCenter.actionListener('publishQualityUpdate', streamID, streamQuality);
    //     };
    //     this.streamCenter.onPlayQualityUpdate = (streamID: string, streamQuality: StreamQuality) => {
    //         this.stateCenter.actionListener('playQualityUpdate', streamQuality);
    //     };
    // }
    BaseCenter.prototype.bindStreamCenterHandler = function () {
        var _this = this;
        this.streamCenter.onPlayStateUpdate = function (type, streamID, error) {
            if (_this.stateCenter.clientType == 'xcx') {
                if (type == 0) {
                    client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskPlayStart' + streamID, _this.stateCenter.reportList) &&
                        client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskPlayStart' + streamID, _this.stateCenter.reportList)('eventEnd', 'play_state');
                    _this.dataReport.uploadReport(_this.stateCenter.reportSeqList.startPlay[streamID]);
                    delete _this.stateCenter.reportSeqList.startPlay[streamID];
                    client_util_1.ClientUtil.unregisterCallback('kZegoTaskPlayStart' + streamID, _this.stateCenter.reportList);
                }
                else if (type == 1) {
                    _this.dataReport.uploadReport(_this.stateCenter.reportSeqList.startPlay[streamID]);
                    delete _this.stateCenter.reportSeqList.startPlay[streamID];
                    client_util_1.ClientUtil.unregisterCallback('kZegoTaskPlayStart' + streamID, _this.stateCenter.reportList);
                }
                _this.stateCenter.actionListener('playerStateUpdate', {
                    state: client_util_1.ClientUtil.getPlayerStateType(type),
                    streamID: streamID,
                    errorCode: error && error.code,
                    extendedData: error && error.msg,
                });
            }
            else {
                streamID = _this.streamCenter.getRealStreamId(streamID);
                var totalStreamID = _this.streamCenter.getTotalStreamId(streamID);
                var reportSeq = _this.stateCenter.reportSeqList.startPlay[totalStreamID];
                var play = _this.streamCenter.playerList[totalStreamID];
                if (play && play.player && (type == 0 || type == 1) && reportSeq) {
                    if (play.player.retrySeq !== 0) {
                        var retrySeq = play.player.retrySeq;
                        _this.dataReport.eventEndWithMsgInfo(retrySeq, 'PlayState', {
                            type: type,
                        });
                        type == 1 &&
                            error &&
                            _this.dataReport.addMsgInfo(retrySeq, {
                                error: error.code,
                                message: error.msg,
                            });
                        _this.dataReport.uploadReport(retrySeq);
                        delete _this.stateCenter.reportSeqList.rePlay[totalStreamID];
                    }
                    else {
                        _this.dataReport.eventEndWithMsgInfo(reportSeq, 'PlayState', {
                            type: type,
                        });
                        type == 1 &&
                            error &&
                            _this.dataReport.addMsgInfo(reportSeq, {
                                error: error.code,
                                message: error.msg,
                            });
                        _this.dataReport.uploadReport(reportSeq);
                        delete _this.stateCenter.reportSeqList.startPlay[totalStreamID];
                    }
                }
                // 错误码转换
                // @ts-ignore
                error.code &&
                    // @ts-ignore
                    zego_externalError_1.exterErrorCodeMap[error.code] &&
                    // @ts-ignore
                    (error.code = zego_externalError_1.errorCodeList[zego_externalError_1.exterErrorCodeMap[error.code]].code);
                _this.stateCenter.actionListener('playerStateUpdate', {
                    state: client_util_1.ClientUtil.getPlayerStateType(type),
                    streamID: streamID,
                    errorCode: error && error.code,
                    extendedData: error && error.msg,
                });
            }
        };
        this.streamCenter.onPublishStateUpdate = function (type, streamID, error) {
            _this.onPublishStateUpdateHandle(type, streamID, error);
        };
        this.streamCenter.onPublishQualityUpdate = function (streamID, stats) {
            _this.stateCenter.actionListener('publishQualityUpdate', streamID, stats);
        };
        this.streamCenter.onPlayQualityUpdate = function (streamID, stats) {
            _this.stateCenter.actionListener('playQualityUpdate', streamID, stats);
        };
        this.streamCenter.onRemoteCameraStatusUpdate = function (streamID, status) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskRemoteCameraUpdate);
            _this.dataReport.addMsgInfo(reportSeq, {
                stream_id: streamID,
                status: status,
            });
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.actionListener('remoteCameraStatusUpdate', streamID, status);
        };
        this.streamCenter.onRemoteMicStatusUpdate = function (streamID, status) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskRemoteMicUpdate);
            _this.dataReport.addMsgInfo(reportSeq, {
                stream_id: streamID,
                status: status,
            });
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.actionListener('remoteMicStatusUpdate', streamID, status);
        };
        this.streamCenter.onSoundLevelUpdate = function (soundLevelList) {
            _this.stateCenter.actionListener('soundLevelUpdate', soundLevelList);
        };
    };
    /*********
     *
     * 下面的方法微信和web端实现一样，共用
     *
     *
     * ****/
    /*
     *    "zb.cm.cf": "ZegoClient.base.config",
     */
    // 配置client
    BaseCenter.prototype.setLogConfig = function (option) {
        this.logger.info('zb.cm.clf call');
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq);
        if (option.logLevel) {
            var _level = client_util_1.ClientUtil.getLogLevel(option.logLevel);
            _level && this.logger.setLogLevel(_level);
            this.dataReport.addMsgInfo(reportSeq, {
                log_level: option.logLevel,
            });
        }
        if (option.remoteLogLevel && [0, 1, 2, 3, 99, 100].includes(client_util_1.ClientUtil.getLogLevel(option.remoteLogLevel))) {
            this.logger.setRemoteLogLevel(client_util_1.ClientUtil.getLogLevel(option.remoteLogLevel));
            this.dataReport.addMsgInfo(reportSeq, {
                remote_log_level: option.remoteLogLevel,
            });
        }
        this.logger.setSessionInfo(this.stateCenter.appid, '', '', this.stateCenter.idName, '', zego_entity_1.PROTO_VERSION);
        if (typeof option.logURL == 'string' &&
            (option.logURL.startsWith('wss://') || option.logURL.startsWith('https://'))) {
            this.logger.openLogServer(option.logURL);
            this.dataReport.addMsgInfo(reportSeq, {
                log_url: option.logURL,
            });
        }
        else if (option.logURL) {
            this.logger.error('zb.cm.clf log url must be a wss or https url');
            return false;
        }
        this.dataReport.uploadReport(reportSeq, zego_logevent_1.eventList.kZegoTaskSetLog);
        this.logger.info('zb.cm.clf call success');
        return true;
    };
    /**
     *    "zb.cm.sd": "ZegoClient.base.setDebugVerbose"
     * @param enable is to start debugging
     */
    BaseCenter.prototype.setDebugVerbose = function (enable) {
        this.logger.info('zb.cm.sd call');
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq);
        if (typeof enable == 'boolean') {
            this.stateCenter.debug = enable;
            this.stateCenter.debugCustom = true;
            this.dataReport.addMsgInfo(reportSeq, {
                debug: enable ? 'true' : 'false',
            });
        }
        this.dataReport.uploadReport(reportSeq, zego_logevent_1.eventList.kZegoTaskSetDebug);
        this.logger.info('zb.cm.sd call success');
    };
    //房间相关---登录，房间人员变化
    BaseCenter.prototype.loginRoom = function (roomID, token, user, config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a = _this.loginReport(resolve, reject, token, config), interResolve = _a.interResolve, interReject = _a.interReject;
            if (roomID === undefined || roomID == '') {
                _this.logger.error('zb.rh.lg roomID is empty');
                interReject(zego_externalError_1.errorCodeList.ROOM_ID_NULL, ' roomID is empty.');
                return;
            }
            if (typeof roomID !== 'string') {
                _this.logger.error('zb.rh.lg roomid must be string');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param roomID error.');
                return;
            }
            if (roomID.length > zego_entity_1.MAX_ROOM_ID_LENGTH) {
                _this.logger.error('zb.rh.lg room ID is too long');
                interReject(zego_externalError_1.errorCodeList.ROOM_ID_TOO_LONG, ' room ID is too long');
            }
            if (!client_util_1.ClientUtil.checkIllegalCharacters(roomID)) {
                _this.logger.error('zb.rh.lg roomID contains illegal characters');
                interReject(zego_externalError_1.errorCodeList.ROOM_ID_INVALID_CHARACTER, ' room ID contains illegal characters.');
                return;
            }
            if (typeof token !== 'string' || token == '') {
                _this.logger.error('zb.rh.lg token must be string and not empty');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param token error.');
                return;
            }
            if (!user || typeof user !== 'object') {
                _this.logger.error('zb.rh.lg user must be exist and is an object');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param user error.');
                return;
            }
            if (user.userID === undefined || user.userID == '') {
                _this.logger.error('zb.rh.lg userID is empty');
                interReject(zego_externalError_1.errorCodeList.USER_ID_NULL, ' userID is empty.');
                return;
            }
            if (typeof user.userID !== 'string') {
                _this.logger.error('zb.rh.lg userID must be string');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param userID error.');
                return;
            }
            if (user.userID.length > zego_entity_1.MAX_USER_ID_LENGTH) {
                _this.logger.error('zb.rh.lg user ID is too long');
                interReject(zego_externalError_1.errorCodeList.USER_ID_TOO_LONG, ' user ID is too long.');
                return;
            }
            if (!client_util_1.ClientUtil.checkIllegalCharacters(user.userID)) {
                _this.logger.error('zb.rh.lg user ID contains illegal characters');
                interReject(zego_externalError_1.errorCodeList.USER_ID_INVALID_CHARACTER, ' user ID contains illegal characters.');
                return;
            }
            if (user.userName === undefined || user.userName == '') {
                _this.logger.error('zb.rh.lg userName is empty');
                interReject(zego_externalError_1.errorCodeList.USER_NAME_NULL, ' userName is empty.');
                return;
            }
            if (typeof user.userName !== 'string') {
                _this.logger.error('zb.rh.lg userName must be string');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' userName must be string.');
                return;
            }
            if (user.userName.length > zego_entity_1.MAX_USER_NAME_LENGTH) {
                _this.logger.error('zb.rh.lg user name is too long');
                interReject(zego_externalError_1.errorCodeList.USER_NAME_TOO_LONG, ' user name is too long.');
                return;
            }
            if (typeof config !== 'undefined' &&
                typeof config.maxMemberCount !== 'undefined' &&
                !client_util_1.ClientUtil.checkInteger(config.maxMemberCount, false)) {
                _this.logger.error('zb.rh.lg maxMemberCount must be integer number');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' maxMemberCount must be integer number.');
                return;
            }
            // if (this.stateCenter.roomid === roomID) {
            //     this.logger.error('zb.rh.lg only one room can be logged in at the same time');
            //     interReject(errorCodeList.ROOM_COUNT_EXCEED, ' only one room can be logged in at the same time.');
            //     return;
            // }
            _this.roomHandler.login(roomID, token, user, config, interResolve, interReject);
        });
    };
    // 日志事件上报
    BaseCenter.prototype.loginReport = function (resolve, reject, token, config) {
        var _this = this;
        // 检查事件存在
        if (this.stateCenter.reportSeqList.login !== 0) {
            this.dataReport.uploadReport(this.stateCenter.reportSeqList.login);
            this.stateCenter.reportSeqList.login = 0;
            client_util_1.ClientUtil.unregisterCallback('kZegoTaskLoginRoom', this.stateCenter.reportList);
        }
        // 事件开始
        var reportSeq = zego_extern_1.getReportSeq();
        this.stateCenter.reportSeqList.login = reportSeq;
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLoginRoom);
        typeof token === 'string' &&
            this.dataReport.addMsgInfo(reportSeq, {
                token: token,
            });
        if (config) {
            if (config.userUpdate && typeof config.userUpdate == 'boolean') {
                this.dataReport.addMsgInfo(reportSeq, {
                    user_update: config.userUpdate,
                });
            }
            if (config.maxMemberCount && typeof config.maxMemberCount == 'number') {
                this.dataReport.addMsgInfo(reportSeq, {
                    max_member_count: config.maxMemberCount,
                });
            }
        }
        // register event trigger, can add report event by actionSuccessCallback
        client_util_1.ClientUtil.logReportCallback('kZegoTaskLoginRoom', this.dataReport, reportSeq, this.stateCenter.reportList);
        var interResolve = function (suc) {
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.reportSeqList.login = 0;
            client_util_1.ClientUtil.unregisterCallback('kZegoTaskLoginRoom', _this.stateCenter.reportList);
            resolve(suc);
        };
        var interReject = function (err, exterMsg) {
            if (exterMsg === void 0) { exterMsg = ''; }
            var reportErr, exterErr;
            if ((err.code < 2000000000 && err.code > 1000000000) || err.code < 1000000) {
                reportErr = client_util_1.ClientUtil.decodeServerError(err.code, err.msg);
                exterErr = client_util_1.ClientUtil.getLiveRoomError(err.code);
            }
            else {
                var errName = zego_logevent_1.codeErrMap[err.code];
                //@ts-ignore
                reportErr = zego_logevent_1.errorList[errName];
            }
            reportErr &&
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: reportErr.code,
                    message: reportErr.message + exterMsg,
                });
            _this.dataReport.uploadReport(reportSeq);
            _this.stateCenter.reportSeqList.login = 0;
            client_util_1.ClientUtil.unregisterCallback('kZegoTaskLoginRoom', _this.stateCenter.reportList);
            // @ts-ignore
            if (exterErr && zego_externalError_1.errorCodeList[exterErr]) {
                // @ts-ignore
                err.code = zego_externalError_1.errorCodeList[exterErr].code;
                // @ts-ignore
                // err.msg = errorCodeList[exterErr].msg + exterMsg;
            }
            if (exterMsg !== '') {
                err.msg += exterMsg;
            }
            reject(err);
        };
        return { interResolve: interResolve, interReject: interReject };
    };
    BaseCenter.prototype.logoutRoom = function (roomID) {
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq);
        this.dataReport.addMsgInfo(reportSeq, {
            roomid: roomID,
        });
        if (roomID === undefined) {
            roomID = this.stateCenter.roomid;
        }
        else {
            if (typeof roomID !== 'string' || roomID == '') {
                this.logger.error('zb.rh.lg roomID must be string and not empty');
                this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' param roomID error',
                });
                this.dataReport.uploadReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLogoutRoom);
                return;
            }
            else if (roomID !== this.stateCenter.roomid) {
                this.logger.error('zb.rh.lg roomID is error');
                this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' roomID is error',
                });
                this.dataReport.uploadReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLogoutRoom);
                return;
            }
        }
        this.roomHandler.logout(roomID);
        this.dataReport.uploadReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLogoutRoom);
    };
    BaseCenter.prototype.sendCustomCommand = function (roomID, command, toUserList) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //--- event log start
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLiveRoomSendCustomCommand);
            _this.dataReport.addMsgInfo(reportSeq, {
                room_sid: _this.stateCenter.sessionid,
            });
            var _a = client_util_1.ClientUtil.proxyRes(_this.dataReport, reportSeq, resolve, reject), interResolve = _a.interResolve, interReject = _a.interReject;
            //--- event log end
            if (typeof roomID !== 'string' || roomID == '') {
                _this.logger.error('zb.scc roomid must be string and not empty');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param roomID error');
                return;
            }
            if (!(toUserList instanceof Array) || toUserList.find(function (user) { return typeof user !== 'string'; })) {
                _this.logger.error('zb.scc dstMembers must be string array');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param toUserList error');
                return;
            }
            if (typeof command !== 'string' && typeof command !== 'object') {
                _this.logger.error('zb.scc custom content must be a non empty string or object');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param command error');
                return;
            }
            if (typeof command === 'string' && command.length > zego_entity_1.MAX_MESSAGE_LENGTH) {
                _this.logger.error('zb.sbcm command too long');
                interReject(zego_externalError_1.errorCodeList.IM_CONTENT_TOO_LONG, ' command too long');
                return;
            }
            _this.messageHandler.sendCustomCommand(toUserList, command, interResolve, interReject);
        });
    };
    BaseCenter.prototype.sendBroadcastMessage = function (roomID, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // --log event start
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLiveRoomSendRoomMessage);
            _this.dataReport.addMsgInfo(reportSeq, {
                room_sid: _this.stateCenter.sessionid,
            });
            var _a = client_util_1.ClientUtil.proxyRes(_this.dataReport, reportSeq, resolve, reject), interResolve = _a.interResolve, interReject = _a.interReject;
            if (typeof roomID !== 'string' || roomID == '') {
                _this.logger.error('zb.sbcm roomid must be string and not empty');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param roomID error');
                return;
            }
            if (message === undefined || message == '') {
                _this.logger.error('zb.sbcm message is empty');
                interReject(zego_externalError_1.errorCodeList.IM_CONTENT_NULL, ' message is empty.');
                return;
            }
            if (typeof message !== 'string') {
                _this.logger.error('zb.sbcm message must be string');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param message error');
                return;
            }
            if (message.length > zego_entity_1.MAX_MESSAGE_LENGTH) {
                _this.logger.error('zb.sbcm message too long');
                interReject(zego_externalError_1.errorCodeList.IM_CONTENT_TOO_LONG, ' message too long');
                return;
            }
            _this.messageHandler.sendRoomMsg(_this.stateCenter.msgCategory, roomID, message, interResolve, interReject);
        });
    };
    BaseCenter.prototype.sendReliableMessage = function (type, data, success, error) {
        if (!type || typeof type !== 'string') {
            this.logger.error('zb.cm.srm type must be string');
            error(zego_externalError_1.errorCodeList.INPUT_PARAM, -1);
            return;
        }
        if (type.length > zego_entity_1.MAX_TRANS_TYPE_LENGTH) {
            this.logger.error('zb.cm.srm type is too long');
            error(zego_externalError_1.errorCodeList.INPUT_PARAM, -1);
            return;
        }
        if (!data || typeof data !== 'string') {
            this.logger.error('zb.cm.srm data must be string');
            error(zego_externalError_1.errorCodeList.INPUT_PARAM, -1);
            return;
        }
        if (data.length > zego_entity_1.MAX_TRANS_DATA_LENGTH) {
            this.logger.error('zb.cm.srm type is too long');
            error(zego_externalError_1.errorCodeList.INPUT_PARAM, -1);
            return;
        }
        this.messageHandler.sendReliableMessage(type, data, success, error);
    };
    BaseCenter.prototype.setRoomExtraInfo = function (roomID, type, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // TODO 长度检测
            if (!type || typeof type !== 'string') {
                _this.logger.error('zb.cm.srxi0.0 type must be string');
                reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code });
                return;
            }
            if (type.length > zego_entity_1.MAX_TRANS_TYPE_LENGTH) {
                _this.logger.error('zb.cm.srxi0.0 type is too long');
                reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code });
                return;
            }
            if (!data || typeof data !== 'string') {
                _this.logger.error('zb.cm.srxi0.0 data must be string');
                reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code });
                return;
            }
            if (data.length > zego_entity_1.MAX_TRANS_DATA_LENGTH) {
                _this.logger.error('zb.cm.srxi0.0 type is too long');
                reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code });
                return;
            }
            var interResolve = function (seq) {
                resolve({ errorCode: 0 });
            };
            _this.messageHandler.sendReliableMessage(type, data, interResolve, reject);
        });
    };
    BaseCenter.prototype.sendBarrageMessage = function (roomID, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLiveSendRoomBigIM);
            _this.dataReport.addMsgInfo(reportSeq, {
                room_sid: _this.stateCenter.sessionid,
            });
            var _a = client_util_1.ClientUtil.proxyRes(_this.dataReport, reportSeq, resolve, reject), interResolve = _a.interResolve, interReject = _a.interReject;
            if (typeof roomID !== 'string' || roomID == '') {
                _this.logger.error('zb.sbm roomid must be string and not empty');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param roomID error');
                return;
            }
            if (message === undefined || message == '') {
                _this.logger.error('zb.sbm message is empty');
                interReject(zego_externalError_1.errorCodeList.IM_CONTENT_NULL, ' message is empty.');
                return;
            }
            if (typeof message !== 'string') {
                _this.logger.error('zb.sbm message must be string');
                interReject(zego_externalError_1.errorCodeList.INPUT_PARAM, ' param message error');
                return;
            }
            if (message.length > zego_entity_1.MAX_MESSAGE_LENGTH) {
                _this.logger.error('zb.sbm message too long');
                interReject(zego_externalError_1.errorCodeList.IM_CONTENT_TOO_LONG, ' message too long');
                return;
            }
            _this.messageHandler.sendBigRoomMessage(_this.stateCenter.msgCategory, roomID, message, interResolve, interReject);
        });
    };
    BaseCenter.prototype.sendRelayMessage = function (type, data, success, error) {
        this.messageHandler.sendRelayMessage(type, data, success, error);
    };
    BaseCenter.prototype.requestJoinLive = function (destIdName, success, error, resultCallback) {
        return this.liveHandler.requestJoinLive(destIdName, success, error, resultCallback);
    };
    BaseCenter.prototype.inviteJoinLive = function (destIdName, success, error, resultCallback) {
        return this.liveHandler.inviteJoinLive(destIdName, success, error, resultCallback);
    };
    BaseCenter.prototype.endJoinLive = function (destIdName, success, error) {
        return this.liveHandler.endJoinLive(destIdName, success, error);
    };
    BaseCenter.prototype.respondJoinLive = function (requestId, respondResult, success, error) {
        return this.liveHandler.respondJoinLive(requestId, respondResult, success, error);
    };
    /*
     *    "zc.p.ums": "ZegoClient.updateMixStream",//更新混流信令
     */
    BaseCenter.prototype.startMixerTask = function (mixStreamConfig) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (mixStreamConfig.outputConfig && mixStreamConfig.outputConfig.outputFps) {
                mixStreamConfig.outputConfig.outputFPS = mixStreamConfig.outputConfig.outputFps;
            }
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskMixStart);
            client_util_1.ClientUtil.logReportCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, _this.dataReport, reportSeq, _this.stateCenter.reportList);
            var interResolve = function (res) {
                _this.dataReport.uploadReport(reportSeq);
                client_util_1.ClientUtil.unregisterCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, _this.stateCenter.reportList);
                resolve(res);
            };
            var interReject = function (err) {
                var errName, externalErr, reportErr;
                if (err.errorCode < 2000000000 && err.errorCode > 1000000000) {
                    errName = client_util_1.ClientUtil.mixServerError(err.errorCode)[0];
                    // @ts-ignore
                    reportErr = zego_logevent_1.errorList[errName];
                    externalErr = client_util_1.ClientUtil.mixServerError(err.errorCode)[1];
                }
                else if (err.errorCode < 1000000) {
                    reportErr = client_util_1.ClientUtil.decodeServerError(err.errorCode, err.extendedData);
                    externalErr = client_util_1.ClientUtil.getLiveRoomError(err.errorCode);
                }
                else {
                    errName = zego_logevent_1.codeErrMap[err.errorCode];
                    //@ts-ignore
                    reportErr = zego_logevent_1.errorList[errName];
                }
                if (reportErr) {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        //@ts-ignore
                        error: reportErr.code,
                        //@ts-ignore
                        message: reportErr.message,
                    });
                }
                else {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        error: err.errorCode,
                        message: err.extendedData,
                    });
                }
                _this.dataReport.uploadReport(reportSeq);
                client_util_1.ClientUtil.unregisterCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, _this.stateCenter.reportList);
                // @ts-ignore
                externalErr && (err.errorCode = zego_externalError_1.errorCodeList[externalErr].code);
                reject(err);
            };
            _this.streamHandler.updateMixStream(mixStreamConfig, interResolve, interReject);
        });
    };
    BaseCenter.prototype.setMixerTaskConfig = function (config) {
        var _this = this;
        return new Promise(function (res, rej) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskMixConfig);
            client_util_1.ClientUtil.logReportCallback('kZegoTaskMixConfig', _this.dataReport, reportSeq, _this.stateCenter.reportList);
            _this.streamHandler
                .setMixerTaskConfig(config)
                .then(function (result) {
                _this.dataReport.uploadReport(reportSeq);
                client_util_1.ClientUtil.unregisterCallback('kZegoTaskMixConfig', _this.stateCenter.reportList);
                res(result);
            })
                .catch(function (err) {
                var errName = zego_logevent_1.codeErrMap[err.errorCode];
                if (errName) {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        //@ts-ignore
                        error: zego_logevent_1.errorList[errName].code,
                        //@ts-ignore
                        message: zego_logevent_1.errorList[errName].message,
                    });
                }
                _this.dataReport.uploadReport(reportSeq);
                client_util_1.ClientUtil.unregisterCallback('kZegoTaskMixConfig', _this.stateCenter.reportList);
                rej(err);
            });
        });
    };
    /*
     *    "zc.p.sms": "ZegoClient.stopMixStream", //停止混流信令
     */
    BaseCenter.prototype.stopMixerTask = function (taskId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskMixStop);
            if (!taskId) {
                _this.logger.error('zb.sh.ums no taskID found');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' param taskID error',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({ errorCode: zego_externalError_1.errorCodeList.MIXER_TASK_ID_NULL.code, extendedData: '' });
                return;
            }
            if (typeof taskId !== 'string') {
                _this.logger.error('zb.rh.lg taskID must be string');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' param taskID error',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
                return;
            }
            if (taskId.length > zego_entity_1.MAX_MIX_TASK_ID_LENGTH) {
                _this.logger.error('zb.sh.ums taskID is too long');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' param taskID error',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({ errorCode: zego_externalError_1.errorCodeList.MIXER_TASK_ID_TOO_LONG.code, extendedData: '' });
                return;
            }
            if (!client_util_1.ClientUtil.checkIllegalCharacters(taskId)) {
                _this.logger.error('zb.sh.ums taskID contains illegal characters');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' param taskID error',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({ errorCode: zego_externalError_1.errorCodeList.MIXER_TASK_ID_INVALID_CHARACTER.code, extendedData: '' });
                return;
            }
            var interResolve = function (res) {
                _this.dataReport.uploadReport(reportSeq);
                resolve(res);
            };
            var interReject = function (err) {
                var errName, reportErr, externalErr;
                if (err.errorCode < 2000000000 && err.errorCode > 1000000000) {
                    errName = client_util_1.ClientUtil.mixServerError(err.errorCode - zego_entity_1.MIXSTREAM_ERROR_CODE)[0];
                    // @ts-ignore
                    reportErr = zego_logevent_1.errorList[errName];
                    externalErr = client_util_1.ClientUtil.mixServerError(err.errorCode - zego_entity_1.MIXSTREAM_ERROR_CODE)[1];
                }
                else if (err.errorCode < 1000000) {
                    reportErr = client_util_1.ClientUtil.decodeServerError(err.errorCode, err.extendedData);
                    externalErr = client_util_1.ClientUtil.getLiveRoomError(err.errorCode);
                }
                else {
                    errName = zego_logevent_1.codeErrMap[err.errorCode];
                    //@ts-ignore
                    reportErr = zego_logevent_1.errorList[errName];
                }
                if (reportErr) {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        //@ts-ignore
                        error: reportErr.code,
                        //@ts-ignore
                        message: reportErr.message,
                    });
                }
                else {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        error: err.errorCode,
                        message: err.extendedData,
                    });
                }
                _this.dataReport.uploadReport(reportSeq);
                // @ts-ignore
                externalErr && (err.errorCode = zego_externalError_1.errorCodeList[externalErr].code);
                reject(err);
            };
            _this.streamHandler.stopMixStream(taskId, interResolve, interReject);
        });
    };
    BaseCenter.prototype.addPublishCdnUrl = function (streamID, signature, targetURL) {
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskAddPublishCdnUrl);
        this.dataReport.addMsgInfo(reportSeq, {
            stream_id: streamID,
            signature: signature,
            target_url: targetURL,
        });
        return this.publishTarget({
            type: 'addpush',
            streamID: streamID,
            pushUrl: targetURL,
            signature: signature,
        }, reportSeq);
    };
    BaseCenter.prototype.removePublishCdnUrl = function (streamID, signature, targetURL) {
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskRemovePublishCdnUrl);
        this.dataReport.addMsgInfo(reportSeq, {
            stream_id: streamID,
            signature: signature,
            target_url: targetURL,
        });
        return this.publishTarget({
            type: 'delpush',
            streamID: streamID,
            pushUrl: targetURL,
            signature: signature,
        }, reportSeq);
    };
    BaseCenter.prototype.clearPublishCdnUrl = function (streamID, signature, targetURL) {
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskRemovePublishCdnUrl);
        this.dataReport.addMsgInfo(reportSeq, {
            stream_id: streamID,
            signature: signature,
            target_url: targetURL,
        });
        return this.publishTarget({
            type: 'clearpush',
            streamID: streamID,
            pushUrl: targetURL,
            signature: signature,
        }, reportSeq);
    };
    BaseCenter.prototype.publishTarget = function (cdnPushConfig, reportSeq) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!cdnPushConfig.streamID || typeof cdnPushConfig.streamID !== 'string') {
                _this.logger.error('zb.pt' + ' streamid error');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' streamid error',
                });
                _this.dataReport.uploadReport(reportSeq);
                return;
            }
            if (!cdnPushConfig.pushUrl || typeof cdnPushConfig.pushUrl !== 'string') {
                _this.logger.error('zb.pt' + ' pushurl error');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' pushurl error',
                });
                _this.dataReport.uploadReport(reportSeq);
                return;
            }
            if (!cdnPushConfig.signature || typeof cdnPushConfig.signature !== 'string') {
                _this.logger.error('zb.pt' + ' appSecret error');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' signature error',
                });
                _this.dataReport.uploadReport(reportSeq);
                return;
            }
            if (!_this.stateCenter.publishStreamList[cdnPushConfig.streamID]) {
                _this.logger.error('zb.pt' + ' publish stream no found');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kPublishStreamNotFound.code,
                    message: zego_logevent_1.errorList.kPublishStreamNotFound.message,
                });
                _this.dataReport.uploadReport(reportSeq);
                return;
            }
            var interResolve = function (res) {
                _this.dataReport.uploadReport(reportSeq);
                resolve(res);
            };
            var interReject = function (err) {
                var serverErr = client_util_1.ClientUtil.getServerError(err.errorCode);
                var e = client_util_1.ClientUtil.decodeServerError(serverErr.code, serverErr.msg);
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: e.code,
                    message: e.message,
                });
                _this.dataReport.uploadReport(reportSeq);
                reject(err);
            };
            _this.streamHandler.publishTarget(cdnPushConfig, interResolve, interReject);
        });
    };
    BaseCenter.prototype.setStreamExtraInfo = function (streamID, extraInfo) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskLiveRoomSendStreamExtraInfo);
            _this.dataReport.addMsgInfo(reportSeq, {
                stream_id: streamID,
                stream_extra_info: extraInfo,
                room_sid: _this.stateCenter.sessionid,
            });
            if (typeof streamID !== 'string' || streamID == '') {
                _this.logger.error('zb.ssei streamID must be string and not empty');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' streamID must be string and not empty',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: zego_externalError_1.errorCodeList.INPUT_PARAM.msg });
                return false;
            }
            if (extraInfo === undefined || extraInfo === '') {
                _this.logger.error('zb.ssei extraInfo is empty');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' extraInfo is empty',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_EXTRA_INFO_NULL.code,
                    extendedData: zego_externalError_1.errorCodeList.INPUT_PARAM.msg,
                });
                return false;
            }
            if (typeof extraInfo !== 'string' || extraInfo == '') {
                _this.logger.error('zb.ssei extraInfo must be string');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' extraInfo must be string',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: zego_externalError_1.errorCodeList.INPUT_PARAM.msg });
                return false;
            }
            if (!_this.stateCenter.isLogin()) {
                _this.logger.error('zb.ssei not login');
                _this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kNotLoginError);
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kNotLoginError.code,
                    message: zego_logevent_1.errorList.kNotLoginError.message,
                });
                reject({ errorCode: zego_externalError_1.errorCodeList.NOT_LOGIN.code, extendedData: zego_externalError_1.errorCodeList.NOT_LOGIN.msg });
                return false;
            }
            if (!_this.stateCenter.publishStreamList[streamID]) {
                _this.logger.error('zb.ssei' + ' publish stream no found');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kPublishStreamNotFound.code,
                    message: zego_logevent_1.errorList.kPublishStreamNotFound.message,
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISH_NOT_PUBLISH.code,
                    extendedData: zego_externalError_1.errorCodeList.PUBLISH_NOT_PUBLISH.msg,
                });
                return;
            }
            var res = _this.streamHandler.updateStreamExtraInfo(streamID, extraInfo);
            _this.dataReport.uploadReport(reportSeq);
            resolve({ errorCode: 0, extendedData: '' });
        });
        // return res;
    };
    BaseCenter.prototype.bindListener = function (listener, callBack) {
        if (!this.stateCenter.listenerList[listener]) {
            this.logger.error('zc.o.0 event ' + listener + ' no found');
            return false;
        }
        if (typeof callBack !== 'function') {
            this.logger.error('zc.o.0 listener callBack must be funciton');
            return false;
        }
        this.stateCenter.listenerList[listener].indexOf(callBack) == -1 &&
            this.stateCenter.listenerList[listener].push(callBack);
        return true;
    };
    BaseCenter.prototype.deleteListener = function (listener, callBack) {
        if (!this.stateCenter.listenerList[listener]) {
            this.logger.error('zc.o.1 listener no found');
            return false;
        }
        var li = this.stateCenter.listenerList[listener];
        if (callBack) {
            li.splice(li.indexOf(callBack), 1);
        }
        else {
            this.stateCenter.listenerList[listener] = [];
        }
        return true;
    };
    BaseCenter.prototype.getVersion = function () {
        return zego_entity_1.PROTO_VERSION;
    };
    BaseCenter.prototype.setSdkBizVersion = function (bizVersion) {
        if (typeof bizVersion === 'string' && bizVersion !== '') {
            this.stateCenter.bizVersion = bizVersion;
        }
    };
    BaseCenter.prototype.setSdkLoginRelateService = function (relateService) {
        if (Array.isArray(relateService) && relateService.every(function (v) { return typeof v === 'string'; })) {
            this.stateCenter.relateService = relateService;
        }
    };
    return BaseCenter;
}(common_1.Common));
exports.BaseCenter = BaseCenter;


/***/ }),

/***/ "./sdk/common/clientBase/liveHandler.ts":
/*!**********************************************!*\
  !*** ./sdk/common/clientBase/liveHandler.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var LiveHandler = /** @class */ (function () {
    function LiveHandler(logger, stateCenter, socketCenter) {
        this.logger = logger;
        this.socketCenter = socketCenter;
        this.stateCenter = stateCenter;
    }
    /*
     *    "zb.lh.rjl": "ZegoExpressEngine.base.LiveHandler.requestJoinLive",
     */
    LiveHandler.prototype.requestJoinLive = function (destIdName, success, error, resultCallback) {
        this.logger.debug('zb.lh.rjl call');
        var requestId = this.stateCenter.getRequestId();
        var signalCmd = this.stateCenter.getSignalCmdContent(requestId, destIdName);
        if (resultCallback == undefined) {
            return false;
        }
        this.stateCenter.joinLiveCallbackMap[requestId] = resultCallback;
        this.sendSignalCmd(zego_entity_1.ENUM_SIGNAL_SUB_CMD.joinLiveRequest, signalCmd, destIdName, success, error);
        return true;
    };
    /*
     *    "zb.lh.ijl": "ZegoExpressEngine.base.LiveHandler.inviteJoinLive",
     */
    LiveHandler.prototype.inviteJoinLive = function (destIdName, success, error, resultCallback) {
        this.logger.debug('zb.lh.ijl call');
        var requestId = this.stateCenter.getRequestId();
        var signalCmd = this.stateCenter.getSignalCmdContent(requestId, destIdName);
        if (resultCallback == undefined) {
            return false;
        }
        this.stateCenter.joinLiveCallbackMap[requestId] = resultCallback;
        this.sendSignalCmd(zego_entity_1.ENUM_SIGNAL_SUB_CMD.joinLiveInvite, signalCmd, destIdName, success, error);
        return true;
    };
    /*
     *    "zb.lh.ejl": "ZegoExpressEngine.base.LiveHandler.endJoinLive",
     */
    LiveHandler.prototype.endJoinLive = function (destIdName, success, error) {
        this.logger.debug('zb.lh.ejl call');
        var requestId = this.stateCenter.getRequestId();
        var signalCmd = this.stateCenter.getSignalCmdContent(requestId, destIdName);
        this.sendSignalCmd(zego_entity_1.ENUM_SIGNAL_SUB_CMD.joinLiveStop, signalCmd, destIdName, success, error);
        return true;
    };
    /*
     *    "zb.lh.rpjl": "ZegoExpressEngine.base.LiveHandler.respondJoinLive",
     */
    LiveHandler.prototype.respondJoinLive = function (requestId, respondResult, success, error) {
        this.logger.debug('zb.lh.rpjl call');
        var dest_id_name = this.stateCenter.joinLiveRequestMap[requestId];
        if (!dest_id_name) {
            this.logger.info('zb.lh.rpjl no dest id name');
            return false;
        }
        var result = 0;
        if (respondResult === true)
            result = 1;
        var signalCmd = this.stateCenter.getSignalCmdContent(requestId, dest_id_name, result);
        this.sendSignalCmd(zego_entity_1.ENUM_SIGNAL_SUB_CMD.joinLiveResult, signalCmd, dest_id_name, success, error);
        delete this.stateCenter.joinLiveRequestMap[requestId];
        return true;
    };
    /*
     *    "zb.lh.ssc": "ZegoExpressEngine.base.LiveHandler.sendSignalCmd",
     */
    //连麦信令
    LiveHandler.prototype.sendSignalCmd = function (cmd, signalMsg, dest_id_name, success, error) {
        this.logger.debug('zb.lh.ssc call');
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.lh.ssc state error');
            return;
        }
        this.logger.debug('zb.lh.ssc send signal cmd ' + cmd);
        var bodyData = {
            sub_cmd: cmd,
            signal_msg: signalMsg,
            dest_id_name: [dest_id_name],
        };
        this.socketCenter.sendMessage('signal', bodyData, success, error);
        this.logger.info('zb.lh.ssc call success');
    };
    /*
     *    "zb.lh.hpsm": "ZegoExpressEngine.base.LiveHandler.handlePushSignalMsg",
     */
    // 连麦信令push
    LiveHandler.prototype.handlePushSignalMsg = function (msg) {
        if (!this.stateCenter.isLogin()) {
            this.logger.warn('zb.lh.hpsm not login');
            return;
        }
        var signalMsg = JSON.parse(msg.body.signal_msg);
        this.logger.debug('zb.lh.hpcm hpsm= ', signalMsg);
        switch (msg.body.sub_cmd) {
            case zego_entity_1.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveRequest:
                this.handlePushJoinLiveRequestMsg(signalMsg);
                break;
            case zego_entity_1.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveResult:
                this.handlePushJoinLiveResultMsg(signalMsg);
                break;
            case zego_entity_1.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveInvite:
                this.handlePushJoinLiveInviteMsg(signalMsg);
                break;
            case zego_entity_1.ENUM_PUSH_SIGNAL_SUB_CMD.pushJoinLiveStop:
                this.handlePushJoinLiveStopMsg(signalMsg);
        }
        this.logger.debug('zb.lh.hpsm call end');
    };
    /*
     *    "zb.lh.hpjlrm": "ZegoExpressEngine.base.LiveHandler.handlePushJoinLiveRequestMsg",
     */
    //请求连麦push
    LiveHandler.prototype.handlePushJoinLiveRequestMsg = function (signalMsg) {
        var requestId = signalMsg.request_id;
        if (typeof requestId !== 'string') {
            this.logger.error('zb.lh.hpjlrm no requestId');
            return;
        }
        var dest_id_name = signalMsg.from_userid;
        if (typeof dest_id_name !== 'string') {
            this.logger.error('zb.lh.hpjlrm no from user');
            return;
        }
        this.stateCenter.joinLiveRequestMap[requestId] = dest_id_name;
        this.logger.info('zb.lh.hpjlrm onRecvJoinLiveRequest ' + dest_id_name);
        this.onRecvJoinLiveRequest(requestId, signalMsg.from_userid, signalMsg.from_username, signalMsg.room_id);
    };
    LiveHandler.prototype.onRecvJoinLiveRequest = function (requestId, from_userid, from_username, roomid) { };
    /*
     *    "zb.lh.hpjlim": "ZegoExpressEngine.base.LiveHandler.handlePushJoinLiveInviteMsg",
     */
    LiveHandler.prototype.handlePushJoinLiveInviteMsg = function (signalMsg) {
        var requestId = signalMsg.request_id;
        if (typeof requestId !== 'string') {
            this.logger.error('zb.lh.hpjlim no requestId');
            return;
        }
        var dest_id_name = signalMsg.from_userid;
        if (typeof dest_id_name !== 'string') {
            this.logger.error('zb.lh.hpjlim no from user');
            return;
        }
        this.stateCenter.joinLiveRequestMap[requestId] = dest_id_name;
        this.logger.info('zb.lh.hpjlim onRecvInviteJoinLiveRequest ' + dest_id_name);
        this.onRecvInviteJoinLiveRequest(requestId, signalMsg.from_userid, signalMsg.from_username, signalMsg.room_id);
    };
    LiveHandler.prototype.onRecvInviteJoinLiveRequest = function (requestId, from_userid, from_username, roomid) { };
    /*
     *    "zb.lh.hpjlim": "ZegoExpressEngine.base.LiveHandler.handlePushJoinLiveResultMsg",
     */
    LiveHandler.prototype.handlePushJoinLiveResultMsg = function (signalMsg) {
        var requestId = signalMsg.request_id;
        if (typeof requestId !== 'string') {
            this.logger.error('zb.lh.hpjlrm no requestId');
            return;
        }
        var result = signalMsg.result;
        if (result == undefined) {
            this.logger.info('zb.lh.hpjlrm no result');
            return;
        }
        var respondResult = result == 1 ? true : false;
        if (this.stateCenter.joinLiveCallbackMap[requestId]) {
            var result_callback = this.stateCenter.joinLiveCallbackMap[requestId];
            if (!result_callback) {
                this.logger.info('hpjlrm.o no callback');
                return;
            }
            this.logger.info('zb.lh.hpjlrm joinLiveRequest/invite result ' + respondResult);
            delete this.stateCenter.joinLiveCallbackMap[requestId];
            result_callback(respondResult, signalMsg.from_userid, signalMsg.from_username);
        }
    };
    /*
     *    "zb.lh.hpjlsm": "ZegoExpressEngine.base.LiveHandler.handlePushJoinLiveStopMsg",
     */
    LiveHandler.prototype.handlePushJoinLiveStopMsg = function (signalMsg) {
        var requestId = signalMsg.request_id;
        if (typeof requestId !== 'string') {
            this.logger.error('zb.lh.hpjlsm no requestId');
            return;
        }
        this.logger.info('zb.lh.hpjlsm onRecvEndJoinLiveCommand ' + signalMsg.from_userid);
        this.onRecvEndJoinLiveCommand(requestId, signalMsg.from_userid, signalMsg.from_username, signalMsg.room_id);
    };
    LiveHandler.prototype.onRecvEndJoinLiveCommand = function (requestId, from_userid, from_username, roomid) { };
    return LiveHandler;
}());
exports.LiveHandler = LiveHandler;


/***/ }),

/***/ "./sdk/common/clientBase/messageHandler.ts":
/*!*************************************************!*\
  !*** ./sdk/common/clientBase/messageHandler.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/util/client-util.ts");
var zego_externalError_1 = __webpack_require__(/*! ../zego.externalError */ "./sdk/common/zego.externalError.ts");
var MessageHandler = /** @class */ (function () {
    function MessageHandler(logger, stateCenter, socketCenter, dataReport) {
        this.logger = logger;
        this.socketCenter = socketCenter;
        this.stateCenter = stateCenter;
        this.dataReport = dataReport;
    }
    /*
     *    "zb.mh.scc": "ZegoExpressEngine.base.MessageHandler.sendCustomCommand",
     */
    MessageHandler.prototype.sendCustomCommand = function (dstMembers, customContent, success, error) {
        var _this = this;
        this.logger.debug('zb.mh.scc call');
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.mh.scc state error');
            return;
        }
        var customContent_send = {
            from_userid: this.stateCenter.idName,
            from_username: this.stateCenter.nickName,
            request_id: this.stateCenter.getRequestId(),
            custom_content: customContent || '',
            room_id: this.stateCenter.roomid,
        };
        var bodyData = {
            dest_id_name: dstMembers,
            custom_msg: JSON.stringify(customContent_send),
        };
        if (!client_util_1.ClientUtil.checkCustomCommandParam(bodyData)) {
            this.logger.error('zb.mh.scc param error');
            return;
        }
        // 发送消息
        this.socketCenter.registerRouter('custommsg', function (msg) {
            _this.handleSendCustomMsgRsp(msg);
        });
        this.socketCenter.sendCustomMessage('custommsg', bodyData, function () {
            var results = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                results[_i] = arguments[_i];
            }
            var err = results[0], msgID = results[1];
            success({ errorCode: err, messageID: msgID });
        }, function () {
            var results = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                results[_i] = arguments[_i];
            }
            var err = results[0], msgID = results[1];
            _this.logger.error('zb.mh.scc ' + err.msg);
            var _err;
            if (err == zego_externalError_1.errorCodeList.TIMEOUT) {
                _err = zego_externalError_1.errorCodeList.IM_SEND_FAILED;
            }
            else {
                _err = err;
            }
            error({ errorCode: _err.code, messageID: msgID });
        });
        this.logger.info('zb.mh.scc call success');
    };
    /*
     *    "zb.mh.hscmrcall": "ZegoExpressEngine.base.MessageHandler.handleSendCustomMsgRsp",
     */
    MessageHandler.prototype.handleSendCustomMsgRsp = function (msg) {
        this.logger.debug('zb.mh.hscmrcall');
        var sendDataNode = this.stateCenter.sendDataMap[msg.header.seq];
        var sendData;
        var customMsg;
        if (sendDataNode != null) {
            sendData = sendDataNode._data;
            if (sendData.data.header.cmd != 'custommsg') {
                this.logger.error('zb.mh.hscmrcmd wrong' + sendData.data.header.cmd);
            }
            else {
                if (msg.body.err_code === 0) {
                    customMsg = JSON.parse(sendData.data.body.custom_msg);
                    if (sendData.success != null) {
                        sendData.success(0, msg.body.msg_id);
                    }
                }
                else {
                    if (sendData.error != null) {
                        sendData.error(client_util_1.ClientUtil.getServerError(msg.body.err_code), msg.body.msg_id);
                    }
                }
            }
            delete this.stateCenter.sendDataMap[msg.header.seq];
            this.stateCenter.sendDataList.remove(sendDataNode);
        }
        else {
            this.logger.error('zb.mh.hscmrno found seq=' + msg.header.seq);
        }
        this.logger.debug('zb.mh.hscmr  call success');
    };
    /*
     *    "zb.mh.hpcm": "ZegoExpressEngine.base.MessageHandler.handlePushCustomMsg",
     */
    MessageHandler.prototype.handlePushCustomMsg = function (msg) {
        var submsg = JSON.parse(msg.body.custommsg);
        this.logger.debug('zb.mh.hpcm submsg=', submsg);
        this.onRecvCustomCommand(submsg.from_userid, submsg.from_username, submsg.room_id, submsg.custom_content);
    };
    MessageHandler.prototype.onRecvCustomCommand = function (fromUserId, fromUserName, roomId, command) { };
    /*
     *    "zb.mh.srm": "ZegoExpressEngine.base.MessageHandler.sendRoomMsg",
     */
    MessageHandler.prototype.sendRoomMsg = function (msg_category, room_id, msg_content, success, error) {
        var _this = this;
        this.logger.debug('zb.mh.srm call');
        // 不是处于登录状态
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.mh.srm state error');
            return;
        }
        var timestamp = Date.parse(new Date() + '');
        if (this.stateCenter.sendRoomMsgTime > 0 &&
            this.stateCenter.sendRoomMsgTime + this.stateCenter.SendRoomMsgInterval > timestamp) {
            this.logger.info('zb.mh.srm freq error');
            if (error) {
                error(zego_externalError_1.errorCodeList.FREQ_LIMITED, 0, msg_category, msg_content);
            }
            return;
        }
        this.stateCenter.sendRoomMsgTime = timestamp;
        this.logger.debug('zb.mh.srm send fetch request');
        var bodyData = {
            msg_category: msg_category,
            msg_type: 1,
            msg_content: msg_content,
        };
        // 发送消息
        this.socketCenter.registerRouter('im_chat', function (msg) {
            _this.handleSendRoomMsgRsp(msg);
        });
        this.socketCenter.sendCustomMessage('im_chat', bodyData, function () {
            var results = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                results[_i] = arguments[_i];
            }
            var err = results[0], msgID = results[1];
            success({ errorCode: err, messageID: msgID });
        }, function () {
            var results = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                results[_i] = arguments[_i];
            }
            var err = results[0], msgID = results[1];
            _this.logger.error('zb.mh.srm ' + err.msg);
            var _err;
            if (err == zego_externalError_1.errorCodeList.TIMEOUT) {
                _err = zego_externalError_1.errorCodeList.IM_SEND_FAILED;
            }
            else {
                _err = err;
            }
            error({ errorCode: _err.code, messageID: msgID });
        });
        this.logger.info('zb.mh.srm call success');
    };
    /*
     *    "zb.mh.hsrmr": "ZegoExpressEngine.base.MessageHandler.handleSendRoomMsgRsp",
     */
    MessageHandler.prototype.handleSendRoomMsgRsp = function (msg) {
        this.logger.debug('zb.mh.hsrmr call');
        var sendDataNode = this.stateCenter.sendDataMap[msg.header.seq];
        var sendData;
        if (sendDataNode != null) {
            sendData = sendDataNode._data;
            if (sendData.data.header.cmd != 'im_chat') {
                this.logger.error('zb.mh.hsrmr cmd wrong' + sendData.data.header.cmd);
            }
            else {
                if (msg.body.err_code === 0) {
                    if (sendData.success) {
                        sendData.success(0, msg.body.msg_id);
                    }
                }
                else {
                    if (sendData.error) {
                        sendData.error(client_util_1.ClientUtil.getServerError(msg.body.err_code), msg.body.msg_id);
                    }
                }
            }
            delete this.stateCenter.sendDataMap[msg.header.seq];
            this.stateCenter.sendDataList.remove(sendDataNode);
        }
        else {
            this.logger.error('hzb.mh.hsrmr no found seq=' + msg.header.seq);
        }
        this.logger.info('zb.mh.hsrmr call success');
    };
    MessageHandler.prototype.onRecvRoomMsg = function (chat_data, server_msg_id, ret_msg_id) { };
    /*
     *    "zb.mh.srirm": "ZegoExpressEngine.base.MessageHandler.sendReliableMessage",
     */
    MessageHandler.prototype.sendReliableMessage = function (type, data, success, error) {
        this.logger.debug('zb.mh.srirm call');
        if (!this.stateCenter.transSeqMap[type]) {
            this.stateCenter.transSeqMap[type] = {
                seq: 0,
            };
        }
        var body = {
            trans_type: type,
            trans_data: data,
            trans_local_seq: this.stateCenter.transSeqMap[type].seq,
            trans_channel: 'clt',
        };
        this.socketCenter.sendMessage('trans', body, success, error);
    };
    /*
     *    "zb.mh.sbim": "ZegoExpressEngine.base.MessageHandler.sendBigRoomMessage",
     */
    MessageHandler.prototype.sendBigRoomMessage = function (category, room_id, content, success, error) {
        var _this = this;
        console.log(room_id);
        this.logger.debug('zb.mh.sbim call');
        var timeWindow = this.stateCenter.bigimTimeWindow;
        var offset = this.stateCenter.serverTimeOffset;
        var serverTime = new Date().getTime() + offset;
        var clientId = (++this.stateCenter.cmdSeq).toString();
        this.stateCenter.bigImCallbackMap[clientId] = {
            success: success,
            error: error,
        };
        if (timeWindow == 0) {
            var bodyData = {
                msg_category: category,
                msg_type: 1,
                msg_content: content,
                bigmsg_client_id: clientId,
            };
            this.logger.debug('zb.mh.sbim no time window');
            this.sendBigRoomMessageInternal([bodyData], function (msg) {
                _this.handleBigImMsgRsp(msg);
            }, error);
        }
        else {
            var currentIndex = Math.floor(serverTime / timeWindow);
            this.logger.debug('currentIndex ' + currentIndex + ' lastTimeIndex ' + this.stateCenter.bigImLastTimeIndex);
            if (this.stateCenter.bigImLastTimeIndex < currentIndex && this.stateCenter.bigImMessageList.length == 0) {
                this.stateCenter.bigImLastTimeIndex = currentIndex;
                var oneData = {
                    msg_category: category,
                    msg_type: 1,
                    msg_content: content,
                    bigmsg_client_id: clientId,
                };
                this.sendBigRoomMessageInternal([oneData], function (msg) {
                    _this.handleBigImMsgRsp(msg);
                }, error);
            }
            else {
                this.stateCenter.bigImMessageList.push({
                    msg_category: category,
                    msg_type: 1,
                    msg_content: content,
                    bigmsg_client_id: clientId,
                });
                if (this.stateCenter.bigImMessageList.length == 1) {
                    this.setBigImTimer(offset, timeWindow);
                }
            }
        }
    };
    /*
     *    "zb.mh.hpmmnot": "ZegoExpressEngine.base.MessageHandler.handlePushMergeMsg",
     */
    MessageHandler.prototype.handlePushMergeMsg = function (msg) {
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.mh.hpmmnot login');
            return;
        }
        for (var i = 0; i < msg.body.messages.length; i++) {
            if (msg.body.messages[i].sub_cmd === 14001) {
                this.handlePushBigRooMsg(msg.body.messages[i].msg_body);
            }
        }
        this.logger.debug('zb.mh.hpmm call success');
    };
    /*
     *    "zb.mh.hpbrm": "ZegoExpressEngine.base.MessageHandler.handlePushBigRooMsg",
     */
    MessageHandler.prototype.handlePushBigRooMsg = function (bodyString) {
        var messageBody;
        //messageBody json
        try {
            messageBody = JSON.parse(bodyString);
        }
        catch (e) {
            this.logger.warn('zb.mh.hpbrm parse json error');
            return;
        }
        if (!messageBody) {
            this.logger.warn("zb.mh.hpbrm cann't find message body");
            return;
        }
        var roomId = messageBody.room_id;
        var pushData = [];
        for (var i = 0; i < messageBody.msg_data.length; i++) {
            var message = messageBody.msg_data[i];
            var idName = message.id_name;
            if (idName == this.stateCenter.idName) {
                this.logger.debug('zb.mh.hpbrm self message');
                continue;
            }
            pushData.push({
                idName: message.id_name,
                nickName: message.nick_name,
                messageId: message.bigmsg_id,
                category: message.msg_category,
                type: message.msg_type,
                content: message.msg_content,
                time: message.send_time,
            });
        }
        if (pushData.length == 0) {
            this.logger.debug('zb.mh.hpbrm no other pushData except self');
        }
        else {
            this.onRecvBigRoomMessage(pushData, roomId);
        }
        this.logger.debug('zb.mh.hpbrm call success');
    };
    MessageHandler.prototype.onRecvBigRoomMessage = function (messageList, roomId) { };
    /*
     *    "zb.mh.sbim": "ZegoExpressEngine.base.MessageHandler.sendBigRoomMessageInternal",
     */
    MessageHandler.prototype.sendBigRoomMessageInternal = function (msgs, success, error) {
        this.logger.debug('zb.mh.sbim call');
        var bodyData = {
            msgs: msgs,
        };
        this.socketCenter.sendMessage('bigim_chat', bodyData, success, error);
    };
    /*
     *    "zb.mh.hbmr": "ZegoExpressEngine.base.MessageHandler.handleBigImMsgRsp",
     */
    MessageHandler.prototype.handleBigImMsgRsp = function (msg) {
        if (!this.stateCenter.isLogin()) {
            this.logger.info('zb.mh.hbmr not login');
            return;
        }
        if (this.stateCenter.bigimTimeWindow != msg.body.bigim_time_window) {
            this.stateCenter.bigimTimeWindow = msg.body.bigim_time_window;
        }
        for (var i = 0; i < msg.body.msgs.length; i++) {
            var clientId = msg.body.msgs[i].bigmsg_client_id;
            var msgId = msg.body.msgs[i].bigmsg_id;
            if (this.stateCenter.bigImCallbackMap[clientId]) {
                var success = this.stateCenter.bigImCallbackMap[clientId].success;
                if (success != null) {
                    // success(msg.header.seq, msgId);
                    success({ errorCode: 0, messageID: msgId });
                }
                delete this.stateCenter.bigImCallbackMap[clientId];
            }
        }
    };
    /*
     *    "zb.mh.sbt": "ZegoExpressEngine.base.MessageHandler.setBigImTimer",
     */
    MessageHandler.prototype.setBigImTimer = function (offset, timeWindow) {
        var _this = this;
        var serverTimestamp = new Date().getTime() + offset;
        var residue = timeWindow - (serverTimestamp % timeWindow);
        var interval = client_util_1.ClientUtil.generateRandumNumber(timeWindow) + residue;
        this.logger.info('zb.mh.sbt setTimer ' + interval);
        this.stateCenter.bigImTimer = setTimeout(function () {
            _this.onBigImTimer();
        }, interval);
    };
    MessageHandler.prototype.onBigImTimer = function () {
        var _this = this;
        var serverTimestamp = new Date().getTime() + this.stateCenter.serverTimeOffset;
        this.stateCenter.bigImLastTimeIndex = Math.floor(serverTimestamp / this.stateCenter.bigimTimeWindow);
        var bodyData = [];
        var requestList = [];
        for (var i = 0; i < this.stateCenter.bigImMessageList.length; i++) {
            if (i >= 20) {
                break;
            }
            var info = this.stateCenter.bigImMessageList[i];
            bodyData.push({
                msg_category: info.msg_category,
                msg_type: info.msg_type,
                msg_content: info.msg_content,
                bigmsg_client_id: info.bigmsg_client_id,
            });
            requestList.push(info.bigmsg_client_id);
        }
        if (this.stateCenter.bigImMessageList.length > 20) {
            this.stateCenter.bigImMessageList.splice(0, 20);
        }
        else {
            this.stateCenter.bigImMessageList = [];
        }
        this.sendBigRoomMessageInternal(bodyData, function (msg) {
            _this.handleBigImMsgRsp(msg);
        }, function (err, seq) {
            for (var i = 0; i < requestList.length; i++) {
                var clientId = requestList[i];
                var callbackInfo = _this.stateCenter.bigImCallbackMap[clientId];
                if (callbackInfo) {
                    if (callbackInfo.error != null) {
                        callbackInfo.error(err, seq);
                    }
                    delete _this.stateCenter.bigImCallbackMap[clientId];
                }
            }
        });
        clearTimeout(this.stateCenter.bigImTimer);
        this.stateCenter.bigImTimer = null;
        if (this.stateCenter.bigImMessageList.length > 0) {
            this.setBigImTimer(this.stateCenter.serverTimeOffset, this.stateCenter.bigimTimeWindow);
        }
    };
    /*
     *    "zb.mh.srlm": "ZegoExpressEngine.base.MessageHandler.sendRelayMessage",
     */
    MessageHandler.prototype.sendRelayMessage = function (type, data, success, error) {
        this.logger.debug('zb.mh.srm call');
        var timeWindow = this.stateCenter.datiTimeWindow;
        var offset = this.stateCenter.serverTimeOffset;
        if (timeWindow > 0) {
            this.stateCenter.realyMessageList.push({
                type: type,
                data: data,
                success: success,
                error: error,
            });
            if (this.stateCenter.realyMessageList.length == 1) {
                this.setRelayTimer(offset, timeWindow);
            }
        }
        else {
            this.sendRelayMessageInternal(type, data, success, error);
        }
    };
    /*
     *    "zb.mh.srlmi": "ZegoExpressEngine.base.MessageHandler.sendRelayMessageInternal",
     */
    MessageHandler.prototype.sendRelayMessageInternal = function (type, data, success, error) {
        this.logger.debug('zb.mh.srmi call');
        var bodyData = {
            relay_type: type,
            relay_data: data,
        };
        this.socketCenter.sendMessage('relay', bodyData, success, error);
    };
    /*
     *    "zb.mh.srt": "ZegoExpressEngine.base.MessageHandler.setRelayTimer",
     */
    MessageHandler.prototype.setRelayTimer = function (offset, timeWindow) {
        var _this = this;
        var serverTimestamp = new Date().getTime() + offset;
        var residue = timeWindow * 2 - (serverTimestamp % timeWindow);
        var interval = client_util_1.ClientUtil.generateRandumNumber(residue);
        this.logger.info('zb.mh.srt setTimer ' + interval);
        this.stateCenter.relayTimer = setTimeout(function () {
            _this.onRelayTimer();
        }, interval);
    };
    /*
     *    "zb.mh.ort": "ZegoExpressEngine.base.MessageHandler.onRelayTimer",
     */
    MessageHandler.prototype.onRelayTimer = function () {
        if (this.stateCenter.realyMessageList.length == 0) {
            this.logger.info('zb.mh.ort no relay data');
            return;
        }
        var relayInfo = this.stateCenter.realyMessageList[0];
        this.sendRelayMessageInternal(relayInfo.type, relayInfo.data, relayInfo.success, relayInfo.error);
        clearTimeout(this.stateCenter.relayTimer);
        this.stateCenter.relayTimer = null;
        this.stateCenter.realyMessageList.splice(0, 1);
        if (this.stateCenter.realyMessageList.length > 0) {
            this.setRelayTimer(this.stateCenter.serverTimeOffset, this.stateCenter.datiTimeWindow);
        }
    };
    /*
     *    "zb.mh.hptr": "ZegoExpressEngine.base.MessageHandler.handlePushTransMsg",
     */
    MessageHandler.prototype.handlePushTransMsg = function (msg) {
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.mh.hptr not login');
            return;
        }
        var type = msg.body.trans_type;
        var seq = msg.body.trans_seq;
        if (!this.stateCenter.transSeqMap[type] || this.stateCenter.transSeqMap[type].seq < seq) {
            this.stateCenter.transSeqMap[type] = {
                seq: seq,
            };
            this.onRecvReliableMessage([msg.body]);
        }
        else {
            this.logger.warn('zb.mh.hptr trans seq wrong');
        }
        // if (msg.body.trans_user_idname != this.stateCenter.idName && msg.body.trans_idname != this.stateCenter.idName) {
        // this.onRecvReliableMessage(type, seq, msg.body.trans_data);
        // } else {
        //     this.logger.debug('zb.mh.hptr receive self trans message');
        // }
        this.logger.info('zb.mh.hptr trans ' + type + ' seq ' + seq);
    };
    MessageHandler.prototype.onRecvReliableMessage = function (trans_results) { };
    MessageHandler.prototype.relogin = function () { };
    /*
     *    "frm.0": "ZegoExpressEngine.fetchReliableMessage",拉取可靠业务广播
     */
    MessageHandler.prototype.fetchReliableMessage = function (trans_channel, fetch_array) {
        var _this = this;
        this.logger.debug('zb.hb.frm call');
        var data = {
            trans_channel: trans_channel,
            fetch_array: fetch_array,
        };
        this.socketCenter.registerRouter('trans_fetch', function (msg) {
            _this.handleFetchTransRsp(msg);
        });
        this.socketCenter.sendMessage('trans_fetch', data);
        this.logger.debug('zb.hb.frm call success');
    };
    //fetch trans 回包
    MessageHandler.prototype.handleFetchTransRsp = function (msg) {
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.hb.hftr not login');
            return;
        }
        // TODO room_session_id error
        if (msg.body.err_code == zego_entity_1.ERROR_CODES.ROOM_SESSION_ID_ERR) {
            // relogin
            this.relogin();
            return;
        }
        if (msg.body.err_code != 0) {
            this.logger.error('zb.hb.hftr trans send error ' + msg.body.err_code);
            return;
        }
        var trans_fetch_results = msg.body.trans_fetch_results;
        var transResults = [];
        if (Array.isArray(trans_fetch_results) && trans_fetch_results.length > 0) {
            for (var i = 0; i < trans_fetch_results.length; i++) {
                var trans_fetch_result = trans_fetch_results[i];
                if (trans_fetch_result.err_code === zego_entity_1.ERROR_CODES.FETCH_TRANS_UNKNOWN_TYPE) {
                    this.logger.warn('zb.hb.hftr fetch trans unknown type ' + trans_fetch_result.err_code);
                    continue;
                }
                var type = trans_fetch_result.trans_type;
                var seq = trans_fetch_result.trans_seq;
                if (trans_fetch_result.err_code === zego_entity_1.ERROR_CODES.FETCH_TRANS_WRONG_SEQ) {
                    this.logger.warn('zb.hb.hftr fetch trans seq is wrong ' + trans_fetch_result.err_code);
                    this.stateCenter.transSeqMap[type] = {
                        seq: seq,
                    };
                    continue;
                }
                if (!this.stateCenter.transSeqMap[type] || this.stateCenter.transSeqMap[type].seq < seq) {
                    this.stateCenter.transSeqMap[type] = {
                        seq: seq,
                    };
                    // this.onRecvReliableMessage(type, seq, trans_fetch_result.trans_data);
                    transResults.push(trans_fetch_result);
                }
                else {
                    this.logger.warn('zb.hb.hftr fetch trans seq wrong');
                }
                transResults.length > 0 && this.onRecvReliableMessage(transResults);
                // if (
                //     trans_fetch_result.trans_user_idname != this.stateCenter.idName &&
                //     trans_fetch_result.trans_idname != this.stateCenter.idName
                // ) {
                // this.onRecvReliableMessage(type, seq, trans_fetch_result.trans_data);
                // }
                this.logger.debug('zb.hb.hftr trans ' + type + ' seq ' + seq);
            }
        }
    };
    return MessageHandler;
}());
exports.MessageHandler = MessageHandler;


/***/ }),

/***/ "./sdk/common/clientBase/roomHandler.ts":
/*!**********************************************!*\
  !*** ./sdk/common/clientBase/roomHandler.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/util/client-util.ts");
var zego_error_1 = __webpack_require__(/*! ../zego.error */ "./sdk/common/zego.error.ts");
var zego_extern_1 = __webpack_require__(/*! ../zego.extern */ "./sdk/common/zego.extern.ts");
var zego_externalError_1 = __webpack_require__(/*! ../zego.externalError */ "./sdk/common/zego.externalError.ts");
var RoomHandler = /** @class */ (function () {
    function RoomHandler(logger, stateCenter, socketCenter) {
        this.logger = logger;
        this.socketCenter = socketCenter;
        this.stateCenter = stateCenter;
    }
    /*
     *    "zb.rh.srs": "ZegoClient.base.RoomHandler.setRunState",
     */
    RoomHandler.prototype.setRunState = function (newRunState) {
        this.logger.debug('zb.rh.srs old=' + this.stateCenter.runState + ', new=' + newRunState);
        this.stateCenter.lastRunState = this.stateCenter.runState;
        this.stateCenter.runState = newRunState;
    };
    /*
     *    "zb.rh.rtl": "ZegoClient.base.RoomHandler.resetTryLogin",
     */
    RoomHandler.prototype.resetTryLogin = function () {
        this.logger.debug('zb.rh.rtl call');
        clearTimeout(this.stateCenter.tryLoginTimer);
        this.stateCenter.tryLoginTimer = null;
        this.stateCenter.tryLoginCount = 0;
        this.logger.debug('zb.rh.rtl call success');
    };
    RoomHandler.prototype.resetBigRoomInfo = function () {
        //清除trans信令信息
        this.stateCenter.transSeqMap = {};
        //清除relay信令信息
        this.stateCenter.realyMessageList = [];
        if (this.stateCenter.relayTimer) {
            clearTimeout(this.stateCenter.relayTimer);
            this.stateCenter.relayTimer = null;
        }
        //清除大房间消息
        this.stateCenter.bigImLastTimeIndex = 0;
        this.stateCenter.bigIMmessageList = [];
        this.stateCenter.bigImCallbackMap = {};
        if (this.stateCenter.bigImTimer) {
            clearTimeout(this.stateCenter.bigImTimer);
            this.stateCenter.bigImTimer = null;
        }
        this.stateCenter.serverTimeOffset = 0;
        this.stateCenter.datiTimeWindow = 0;
        this.stateCenter.bigimTimeWindow = 0;
    };
    /*
     *    "zb.rh.rr": "ZegoClient.base.RoomHandler.resetRoom",
     */
    RoomHandler.prototype.resetRoom = function (roomid) {
        var _this = this;
        this.logger.info('zb.rh.rr call');
        // 清除尝试登录计时器对象
        this.resetTryLogin();
        this.resetRoomCallBack();
        // 清除流列表
        this.stateCenter.streamList = [];
        this.stateCenter.streamQuerying = false;
        this.stateCenter.publishStreamList = {};
        // 清除连麦信令
        this.stateCenter.joinLiveCallbackMap = {};
        this.stateCenter.joinLiveRequestMap = {};
        // 清除请求url信息
        this.stateCenter.streamUrlMap = {};
        //清除大房间消息
        this.resetBigRoomInfo();
        this.stateCenter.cmdCallback = {};
        // 防止多次重置时，发送多次消息
        this.logger.info('zb.rh.rr call send logout=', this.stateCenter.sessionid);
        if (this.stateCenter.sessionid !== '0' && this.stateCenter.runState !== zego_entity_1.ENUM_RUN_STATE.logout) {
            var bodyData = {
                reserve: 0,
            };
            this.socketCenter.registerRouter('logout', function (msg) {
                _this.handleLogoutRsp(msg);
            });
            this.socketCenter.sendMessage('logout', bodyData);
        }
        this.socketCenter.closeSocket();
        //setTimeout( () =>{
        this.setRunState(zego_entity_1.ENUM_RUN_STATE.logout);
        this.stateCenter.userid = '';
        this.stateCenter.sessionid = '';
        // this.stateCenter.roomid = '';
        this.stateCenter.roomSessionId = '';
        this.logger.setSessionInfo(this.stateCenter.appid, this.stateCenter.roomid, this.stateCenter.sessionid, this.stateCenter.idName, this.stateCenter.nickName, zego_entity_1.PROTO_VERSION);
        //},500);
        this.logger.info('zb.rh.rr call success');
    };
    //空接口，被覆盖
    RoomHandler.prototype.resetRoomCallBack = function () { };
    // socketCloseCallBack() {}
    RoomHandler.prototype.onDisconnect = function (err) { };
    RoomHandler.prototype.onConnecting = function (err) { };
    //空实现，被覆盖
    RoomHandler.prototype.loginSuccessCallBack = function (lastRunState, msg) { };
    RoomHandler.prototype.fetchReliableMessage = function (trans_channel, trans_seq_array) { };
    /*
     *    "zb.rh.lg": "ZegoClient.base.RoomHandler.login",
     */
    //登录房间
    RoomHandler.prototype.login = function (roomid, token, user, config, success, error) {
        this.logger.setSessionInfo(this.stateCenter.appid, roomid, '', user.userID, '', zego_entity_1.PROTO_VERSION);
        this.logger.info('zb.rh.lg call:', roomid, token);
        if (config) {
            config.userUpdate &&
                typeof config.userUpdate == 'boolean' &&
                (this.stateCenter.userStateUpdate = config.userUpdate);
            config.maxMemberCount &&
                typeof config.maxMemberCount == 'number' &&
                (this.stateCenter.maxMemberCount = config.maxMemberCount);
        }
        if (!this.stateCenter.configOK) {
            this.logger.error('zb.rh.lg init sdk wrong');
            error(zego_error_1.commonErrorList.INIT);
            return;
        }
        if (this.stateCenter.runState !== zego_entity_1.ENUM_RUN_STATE.logout) {
            this.logger.debug('zb.rh.lg reset');
            this.setRunState(zego_entity_1.ENUM_RUN_STATE.logout);
            this.resetRoom();
        }
        this.logger.debug('zb.rh.lg begin');
        this.setRunState(zego_entity_1.ENUM_RUN_STATE.trylogin);
        this.stateCenter.roomid = roomid;
        this.stateCenter.token = token;
        this.stateCenter.third_token = token;
        this.stateCenter.idName = user.userID;
        this.stateCenter.nickName = user.userName;
        client_util_1.ClientUtil.registerCallback('login', {
            success: success,
            error: error,
        }, this.stateCenter.callbackList);
        this.resetTryLogin();
        this.onConnecting({ code: 0, msg: '' });
        this.tryLogin();
        this.logger.info('zb.rh.lg call success');
    };
    //登录请求数据包  被覆盖
    RoomHandler.prototype.loginBodyData = function () { };
    /*
     *    "zb.rh.tl": "ZegoClient.base.RoomHandler.tryLogin",
     */
    RoomHandler.prototype.tryLogin = function () {
        var _this = this;
        this.logger.debug('zb.rh.tl call');
        if (this.stateCenter.runState !== zego_entity_1.ENUM_RUN_STATE.trylogin) {
            this.logger.error('zb.rh.tl state error');
            return;
        }
        // 如果尝试登录次数大于最大可尝试次数，则直接置为logout登出状态
        if (++this.stateCenter.tryLoginCount > zego_entity_1.MAX_TRY_LOGIN_COUNT) {
            this.logger.error('zb.rh.tl fail times limit');
            var lastRunState = this.stateCenter.lastRunState;
            this.setRunState(zego_entity_1.ENUM_RUN_STATE.logout);
            this.resetRoom();
            if (lastRunState == zego_entity_1.ENUM_RUN_STATE.login) {
                //relogin fail, not by user
                this.logger.error('zb.rh.tl fail and disconnect');
                this.onDisconnect(zego_externalError_1.errorCodeList.ROOM_RETRY_TIMEOUT);
            }
            else {
                //trylogin fail, call by user
                this.logger.info('zb.rh.tl fail and callback user');
                client_util_1.ClientUtil.actionErrorCallback('login', this.stateCenter.callbackList)(zego_externalError_1.errorCodeList.LOGIN_TIMEOUT);
            }
            return;
        }
        this.stateCenter.startConnceTime = new Date().getTime();
        console.warn('start connect', this.stateCenter.startConnceTime);
        var logAction = this.stateCenter.reportSeqList.login !== 0 ? 'kZegoTaskLoginRoom' : 'kZegoTaskReLoginRoom';
        // 如果websocket还未初始化或者还不是处于连接状态
        if (this.socketCenter.isDisConnect()) {
            this.logger.debug('zb.rh.tl need new websocket');
            try {
                // 若已经初始化，但是还不是连接状态，先清除置为null
                this.socketCenter.closeSocket();
                // 建立websocket连接
                this.logger.debug('zb.rh.tl new websocket');
                var serverUrl = this.stateCenter.tryLoginCount % 2 === 1 ? this.stateCenter.server : this.stateCenter.serverBak;
                if (client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)) {
                    this.stateCenter.tryLoginCount > 1 &&
                        client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.eventEnd, 'create_socket');
                    client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.eventStart, 'create_socket');
                    // this.dataReport.addEventMsg(reportSeq, 'create_socket', 'server', serverUrl);
                    client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.addEventMsg, 'create_socket', 'server', serverUrl);
                }
                this.socketCenter.createSocket(serverUrl);
                this.socketCenter.registerRouter('login', function (msg, seq) {
                    _this.handleLoginRsp(msg, seq);
                });
                this.socketCenter.closeHandler(function (err) {
                    _this.socketCenter.closeSocket();
                    // this.socketCloseCallBack();
                    _this.closeHandler(err);
                });
                this.socketCenter.openHandler(function () {
                    _this.openHandler();
                });
            }
            catch (e) {
                this.logger.error('zb.rh.tl websocket err:' + e);
            }
        }
        else {
            // websocket已建立成功
            var bodyData = this.loginBodyData();
            this.logger.info('zb.rh.tl use current websocket and sent login');
            client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList) &&
                client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.eventStart, 'liveroom_login');
            this.socketCenter.sendMessage('login', bodyData);
        }
        //settimeout
        this.stateCenter.tryLoginTimer = setTimeout(function () {
            _this.tryLogin();
        }, zego_entity_1.TRY_LOGIN_INTERVAL[this.stateCenter.tryLoginCount % zego_entity_1.MAX_TRY_LOGIN_COUNT]);
        this.logger.info('zb.rh.tl call success');
    };
    /*
     *    "zb.rh.hlr": "ZegoClient.base.RoomHandler.handleLoginRsp",
     */
    RoomHandler.prototype.handleLoginRsp = function (msg, cmdSeq) {
        this.logger.debug('zb.rh.hlr call');
        var logAction = this.stateCenter.reportSeqList.login !== 0 ? 'kZegoTaskLoginRoom' : 'kZegoTaskReLoginRoom';
        client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList) &&
            client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.eventEndWithMsgInfo, 'liveroom_login');
        if (this.stateCenter.runState !== zego_entity_1.ENUM_RUN_STATE.trylogin) {
            this.logger.error('zb.rh.hlr state error');
            return;
        }
        else if (msg.header.seq !== cmdSeq) {
            this.logger.error('zb.rh.hlr in wrong seq, local=', cmdSeq, ',recv=', msg.header.seq);
            return;
        }
        else if (msg.body.err_code !== 0) {
            this.handleLoginFail(msg);
            this.logger.error('zb.rh.hlr server error=', msg.body.err_code);
            return;
        }
        else {
            this.handleLoginSuccess(msg);
            this.logger.info('zb.rh.hlr call success.');
        }
    };
    /*
     *    "zb.rh.hlf": "ZegoClient.base.RoomHandler.handleLoginFail",
     */
    //登录失败回调
    RoomHandler.prototype.handleLoginFail = function (msg) {
        this.logger.debug('zb.rh.hlf call');
        if (client_util_1.ClientUtil.isKeepTryLogin(msg.body.err_code)) {
            this.logger.warn('zb.rh.hlf KeepTry true');
            return;
        }
        //stop
        var lastRunState = this.stateCenter.lastRunState;
        this.setRunState(zego_entity_1.ENUM_RUN_STATE.logout);
        this.resetRoom();
        var err = client_util_1.ClientUtil.getServerError(msg.body.err_code);
        if (lastRunState === zego_entity_1.ENUM_RUN_STATE.login) {
            //relogin fail, not by user
            this.logger.info('zb.rh.hlf callback disconnect');
            this.onDisconnect(err);
        }
        else {
            //trylogin fail, call by user
            this.logger.info('zb.rh.hlf callback error');
            client_util_1.ClientUtil.actionErrorCallback('login', this.stateCenter.callbackList)(err);
        }
        this.logger.debug('zb.rh.hlf call success');
    };
    /*
     *    "zb.rh.hls": "ZegoClient.base.RoomHandler.handleLoginSuccess",
     */
    //登录成功回调
    RoomHandler.prototype.handleLoginSuccess = function (msg) {
        var _this = this;
        this.stateCenter.startloginSucTime = new Date().getTime();
        console.warn('login suc', this.stateCenter.startloginSucTime, this.stateCenter.startloginSucTime - this.stateCenter.startloginTime, this.stateCenter.startloginSucTime - this.stateCenter.startConnceTime);
        this.logger.info('zb.rh.hls call');
        var loginInfo = {};
        //enter login
        var lastRunState = this.stateCenter.lastRunState;
        this.setRunState(zego_entity_1.ENUM_RUN_STATE.login);
        this.stateCenter.userid = msg.body.user_id;
        this.stateCenter.sessionid = msg.body.session_id;
        this.stateCenter.roomSessionId = msg.body.room_session_id;
        this.stateCenter.anchor_info = msg.body.anchor_info || this.stateCenter.anchor_info;
        this.stateCenter.userListInterval = msg.body.userlist_interval || this.stateCenter.userListInterval;
        this.stateCenter.userListMergeInterval =
            msg.body.userlist_merge_timeout || this.stateCenter.userListMergeInterval;
        //set log
        this.logger.setSessionInfo(this.stateCenter.appid, this.stateCenter.roomid, this.stateCenter.sessionid, this.stateCenter.idName, this.stateCenter.nickName, zego_entity_1.PROTO_VERSION);
        // fetch_trans
        if (msg.body.trans_seqs) {
            for (var i = 0; i < msg.body.trans_seqs.length; i++) {
                var trans_channel = msg.body.trans_seqs[i].trans_channel;
                var trans_seq_array = msg.body.trans_seqs[i].trans_seq_array;
                trans_seq_array = trans_seq_array.filter(function (item) {
                    var type = item.trans_type, seq = item.trans_seq;
                    if (!_this.stateCenter.transSeqMap[type] || _this.stateCenter.transSeqMap[type].seq < seq) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                trans_seq_array.length > 0 && this.fetchReliableMessage(trans_channel, trans_seq_array);
            }
        }
        if (msg.body.config_info) {
            this.logger.setRemoteLogLevel(msg.body.config_info.log_level);
            loginInfo['log_level'] = msg.body.config_info.log_level;
            if (msg.body.config_info.log_url != '') {
                this.logger.openLogServer(msg.body.config_info.log_url);
                loginInfo['log_url'] = msg.body.config_info.log_url;
            }
        }
        //get time stamp & window
        if (msg.body.ret_timestamp != undefined && typeof msg.body.ret_timestamp == 'string') {
            var serverTime = parseFloat(msg.body.ret_timestamp);
            if (serverTime == 0) {
                this.stateCenter.serverTimeOffset = 0;
            }
            else {
                this.stateCenter.serverTimeOffset = msg.body.ret_timestamp - new Date().getTime();
            }
        }
        if (msg.body.bigim_time_window && typeof msg.body.bigim_time_window == 'number') {
            this.stateCenter.bigimTimeWindow = msg.body.bigim_time_window;
        }
        if (msg.body.dati_time_window && typeof msg.body.dati_time_window == 'number') {
            this.stateCenter.datiTimeWindow = msg.body.dati_time_window;
        }
        //get if testEnvironment
        if (msg.body.cluster_env && msg.body.cluster_env === 1) {
            this.stateCenter.testEnvironment = true;
            loginInfo['test_environment'] = 'true';
            !this.stateCenter.debugCustom && (this.stateCenter.debug = true);
        }
        var logAction = this.stateCenter.reportSeqList.login !== 0 ? 'kZegoTaskLoginRoom' : 'kZegoTaskReLoginRoom';
        client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList) &&
            client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.addEventMsg, 'liveroom_login', 'respond_info', loginInfo);
        //stop trylogin
        this.resetTryLogin();
        this.loginSuccessCallBack(lastRunState, msg);
    };
    /*
     *    "zb.rh.oh": "ZegoClient.base.RoomHandler.openHandler",
     */
    RoomHandler.prototype.openHandler = function () {
        // websocket连接已经打开
        // 注册onmessage函数，处理服务的发过来的消息，该函数只调用一次
        this.logger.info('zb.rh.oh websocket.onpen call');
        var logAction = this.stateCenter.reportSeqList.login !== 0 ? 'kZegoTaskLoginRoom' : 'kZegoTaskReLoginRoom';
        client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList) &&
            client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.eventEndWithMsgInfo, 'create_socket', { try_cnt: this.stateCenter.tryLoginCount });
        this.socketCenter.responseHandler();
        // 发送消息
        var bodyData = this.loginBodyData();
        this.logger.info('zb.rh.oh websocket.onpen send login');
        this.stateCenter.startloginTime = new Date().getTime();
        console.warn('start login', this.stateCenter.startloginTime, this.stateCenter.startloginTime - this.stateCenter.startConnceTime);
        client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList) &&
            client_util_1.ClientUtil.actionSuccessCallback(logAction, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.eventStart, 'liveroom_login');
        this.socketCenter.sendMessage('login', bodyData);
        this.logger.debug('zb.rh.oh websocket.onpen call success');
    };
    /*
     *    "zb.rh.oc": "ZegoClient.base.RoomHandler.closeHandler",
     */
    RoomHandler.prototype.closeHandler = function (e) {
        this.logger.info('zb.rh.ws.oc msg=' + JSON.stringify(e));
        if (this.stateCenter.runState !== zego_entity_1.ENUM_RUN_STATE.logout) {
            if (this.stateCenter.runState === zego_entity_1.ENUM_RUN_STATE.trylogin &&
                this.stateCenter.tryLoginCount <= zego_entity_1.MAX_TRY_LOGIN_COUNT) {
                //trylogin --> trylogin
                this.logger.info('zb.rh.ws.oc is called because of try login');
            }
            else if (this.stateCenter.runState === zego_entity_1.ENUM_RUN_STATE.login) {
                //login --> trylogin
                this.logger.info('zb.rh.ws.oc is called because of network broken, try again');
                this.setRunState(zego_entity_1.ENUM_RUN_STATE.trylogin);
                this.resetTryLogin();
                this.onConnecting({ code: 0, msg: '' });
                this.tryLogin();
            }
            else {
                //unknown
                this.logger.error('zb.rh.ws.oc out of think!!!');
                this.setRunState(zego_entity_1.ENUM_RUN_STATE.logout);
                this.resetRoom();
                this.onDisconnect(zego_externalError_1.errorCodeList.ROOM_INNER_ERROR);
            }
        }
        else {
            //* --> logout
            this.logger.info('zb.rh.ws.oc onclose logout flow call websocket.close');
        }
    };
    /*
     *    "zb.rh.lo": "ZegoClient.base.RoomHandler.logout",
     */
    RoomHandler.prototype.logout = function (roomID) {
        this.logger.info('zb.rh.lo call');
        if (this.stateCenter.runState === zego_entity_1.ENUM_RUN_STATE.logout) {
            this.logger.warn('zb.rh.lo at logout');
            return;
        }
        this.resetRoom(roomID);
        this.stateCenter.actionListener('roomStateUpdate', roomID, 'DISCONNECTED', 0, '');
        this.logger.info('zb.rh.lo call success');
    };
    RoomHandler.prototype.relogin = function () {
        this.logger.info('zb.rh.rl call');
        this.setRunState(zego_entity_1.ENUM_RUN_STATE.trylogin);
        // this.resetTryLogin();
        // this.onConnecting({ code: 0, msg: '' });
        this.stateCenter.roomSessionId = '';
        var bodyData = this.loginBodyData();
        this.socketCenter.sendMessage('login', bodyData);
        this.logger.debug('zb.rh.rl call success');
    };
    /*
     *    "zb.rh.ful": "ZegoClient.base.RoomHandler.fetchUserList",
     */
    // 拉取服务端user信息
    RoomHandler.prototype.fetchUserList = function (lastRunState) {
        this.logger.debug('zb.rh.ful call');
        if (this.stateCenter.userQuerying) {
            this.logger.warn('zb.rh.ful is already querying');
            return;
        }
        this.stateCenter.userQuerying = true;
        this.stateCenter.userTempList = [];
        zego_entity_1.ROOMVERSION === 'V1'
            ? this.fetchUserListWithPage(0, lastRunState ? lastRunState : 0)
            : this.fetchUserListWithPageV2(0);
        this.logger.info('zb.rh.ful the first time call');
    };
    /*
     *    "zb.rh.fulwp": "ZegoClient.base.RoomHandler.fetchUserListWithPage",
     */
    //分页拉取user list
    RoomHandler.prototype.fetchUserListWithPageV2 = function (userIndex) {
        var _this = this;
        this.logger.debug('zb.rh.fulwp call');
        this.socketCenter.registerRouter('user_list_v2', function (msg) {
            _this.handleFetchUserListRspV2(userIndex, msg);
        });
        // 发送消息
        this.socketCenter.sendMessage('user_list_v2', {
            marker: userIndex === 0 ? '' : userIndex + '',
            mode: 0,
            limit: 100,
        });
        this.logger.info('zb.rh.fulwp call success');
    };
    /*
     *    "zb.rh.fulwp": "ZegoClient.base.RoomHandler.fetchUserListWithPage",
     */
    //分页拉取user list
    RoomHandler.prototype.fetchUserListWithPage = function (userIndex, lastRunState) {
        var _this = this;
        this.logger.debug('zb.rh.fulwp call');
        this.socketCenter.registerRouter('user_list', function (msg) {
            _this.handleFetchUserListRsp(msg, lastRunState);
        });
        // 发送消息
        this.socketCenter.sendMessage('user_list', {
            user_index: userIndex,
            sort_type: 0,
        });
        this.logger.info('zb.rh.fulwp call success');
    };
    /*
     *    "zb.rh.hfulr": "ZegoClient.base.RoomHandler.handleFetchUserListRsp",
     */
    RoomHandler.prototype.handleFetchUserListRspV2 = function (currentIndex, msg) {
        this.logger.debug('zb.rh.hfulr call');
        if (msg.body.err_code != 0) {
            this.stateCenter.userQuerying = false;
            this.stateCenter.lastUserQueryTime = Date.now() + this.stateCenter.userListInterval;
            this.logger.info('zb.rh.hfulr fetch error ' + msg.body.err_code);
            return;
        }
        //set userseq
        if (!this.stateCenter.userStateUpdate) {
            return;
        }
        this.stateCenter.userTempList = __spreadArrays(this.stateCenter.userTempList, msg.body.user_baseinfos);
        // this.logger.debug("zb.rh.hfulr server user_list " + msg.body.user_baseinfos);
        var serverIndex = msg.body.marker;
        if (currentIndex != serverIndex) {
            this.logger.warn('zb.rh.hfulr fetch another page');
            this.fetchUserListWithPageV2(currentIndex + 1);
            return;
        }
        this.stateCenter.userSeq = msg.body.server_user_seq;
        this.logger.info('zb.rh.hfulr set user Seq ' + this.stateCenter.userSeq);
        var user_list = [];
        for (var i = 0; i < this.stateCenter.userTempList.length; i++) {
            var user_info = {
                userId: this.stateCenter.userTempList[i].id_name,
                userName: this.stateCenter.userTempList[i].nick_name,
            };
            user_list.push(user_info);
        }
        this.stateCenter.userQuerying = false;
        this.stateCenter.lastUserQueryTime = Date.now() + this.stateCenter.userListInterval;
        //this.onGetTotalUserList(this.stateCenter.roomid, user_list);
        this.stateCenter.userTempList = [];
        this.logger.info('zb.rh.hfulr call success user_list ' + user_list + ' count ' + user_list.length);
    };
    /*
     *    "zb.rh.hfulr": "ZegoClient.base.RoomHandler.handleFetchUserListRsp",
     */
    RoomHandler.prototype.handleFetchUserListRsp = function (msg, lastRunState) {
        var _this = this;
        this.logger.debug('zb.rh.hfulr call');
        if (msg.body.err_code != 0) {
            this.stateCenter.userQuerying = false;
            this.stateCenter.lastUserQueryTime = Date.now() + this.stateCenter.userListInterval;
            this.logger.info('zb.rh.hfulr fetch error ' + msg.body.err_code);
            return;
        }
        //set userseq
        if (!this.stateCenter.userStateUpdate) {
            return;
        }
        this.stateCenter.userTempList = __spreadArrays(this.stateCenter.userTempList, msg.body.user_baseinfos);
        // this.logger.debug("zb.rh.hfulr server user_list " + msg.body.user_baseinfos);
        var currentIndex = msg.body.ret_user_index;
        var serverIndex = msg.body.server_user_index;
        if (currentIndex != serverIndex) {
            this.logger.warn('zb.rh.hfulr fetch another page');
            this.fetchUserListWithPage(currentIndex + 1, lastRunState);
            return;
        }
        this.stateCenter.userSeq = msg.body.server_user_seq;
        this.logger.info('zb.rh.hfulr set user Seq ' + this.stateCenter.userSeq);
        var user_list = [];
        for (var i = 0; i < this.stateCenter.userTempList.length; i++) {
            var user_info = {
                userID: this.stateCenter.userTempList[i].id_name,
                userName: this.stateCenter.userTempList[i].nick_name,
            };
            user_list.push(user_info);
        }
        if (lastRunState == zego_entity_1.ENUM_RUN_STATE.login) {
            client_util_1.ClientUtil.mergeUserList(this.logger, this.stateCenter.userList, user_list, function (addUserList, delUserList) {
                addUserList.length !== 0 && _this.onUserStateUpdate(_this.stateCenter.roomid, 'ADD', addUserList);
                delUserList.length !== 0 && _this.onUserStateUpdate(_this.stateCenter.roomid, 'DELETE', delUserList);
            });
            this.stateCenter.userList = user_list;
        }
        else {
            this.stateCenter.userList = user_list;
            user_list.length !== 0 && this.onUserStateUpdate(this.stateCenter.roomid, 'ADD', user_list);
        }
        this.stateCenter.userQuerying = false;
        this.stateCenter.lastUserQueryTime = Date.now() + this.stateCenter.userListInterval;
        this.stateCenter.userTempList = [];
        this.logger.info('zb.rh.hfulr call success user_list ' + user_list + ' count ' + user_list.length);
    };
    /*
     *    "zb.rh.hlor": "ZegoClient.base.RoomHandler.handleLogoutRsp",
     */
    RoomHandler.prototype.handleLogoutRsp = function (msg) {
        this.logger.debug('zb.rh.hlor result=', msg.body.err_code);
    };
    /*
     *    "zb.rh.hpus": "ZegoClient.base.RoomHandler.handlePushUserStateUpdateMsg",
     */
    RoomHandler.prototype.handlePushUserStateUpdateMsg = function (msg) {
        this.logger.info('zb.rh.hpus call');
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.rh.hpus not login');
            return;
        }
        if (!this.stateCenter.userStateUpdate) {
            this.logger.info('zb.rh.hpus no userStateUpdate flag');
            return;
        }
        // if (this.stateCenter.userSeq + msg.body.user_actions.length !== msg.body.user_list_seq) {
        //     this.logger.warn(
        //         'zb.rh.hpus fetch new userlist ' + this.stateCenter.userSeq,
        //         +' server ' + msg.body.user_list_seq,
        //     );
        //     this.fetchUserList();
        //     return;
        // }
        // merge user or fetchUserList
        if (this.stateCenter.userSeq + msg.body.user_actions.length !== msg.body.user_list_seq) {
            this.mergeUserByUserSeq(msg.body.user_list_seq, msg.body.user_actions);
            return;
        }
        this.stateCenter.userSeq = msg.body.user_list_seq;
        this.logger.debug('zb.rh.hpus push userSeq ' + this.stateCenter.userSeq);
        var user_list = [];
        for (var i = 0; i < msg.body.user_actions.length; i++) {
            var user_info = {
                action: msg.body.user_actions[i].Action,
                idName: msg.body.user_actions[i].IdName,
                nickName: msg.body.user_actions[i].NickName,
                loginTime: msg.body.user_actions[i].LoginTime,
            };
            user_list.push(user_info);
        }
        var addUserList = [];
        var delUserList = [];
        user_list.forEach(function (user) {
            if (user.action == 1) {
                addUserList.push({ userID: user.idName, userName: user.nickName });
            }
            else if (user.action == 2) {
                delUserList.push({ userID: user.idName, userName: user.nickName });
            }
        });
        this.stateCenter.userList = this.stateCenter.userList
            .concat(addUserList)
            .filter(function (user) { return !delUserList.some(function (delUser) { return delUser.userID == user.userID; }); });
        addUserList.length !== 0 && this.onUserStateUpdate(msg.body.room_id, 'ADD', addUserList);
        delUserList.length !== 0 && this.onUserStateUpdate(msg.body.room_id, 'DELETE', delUserList);
        this.logger.info('zb.rh.hpus call success');
    };
    RoomHandler.prototype.onUserStateUpdate = function (roomId, updateType, userList) { };
    RoomHandler.prototype.mergeUserByUserSeq = function (userSeq, userList) {
        var _this = this;
        if (!this.stateCenter.userSeqMergeMap) {
            this.logger.warn('zb.rh.hpus new merge userlist ' + this.stateCenter.userSeq + ' server ' + userSeq);
            this.stateCenter.userSeqMergeMap = {};
            // 添加定时器，检查 userSeq 连续性
            this.stateCenter.userSeqMergeTimer && clearTimeout(this.stateCenter.userSeqMergeTimer);
            this.stateCenter.userSeqMergeTimer = setTimeout(function () {
                var userSeqList = Object.keys(_this.stateCenter.userSeqMergeMap)
                    .map(function (key) { return +key; })
                    .sort(function (a, b) { return a - b; });
                // userSeq 连续
                if (userSeqList[userSeqList.length - 1] - userSeqList[0] + 1 === userSeqList.length) {
                    _this.mergeUser(userSeqList);
                }
                else {
                    _this.stateCenter.userSeqMergeMap = null;
                    // 如果超过上次全量同步用户的等待时间则立即同步，否则等待差值后再同步
                    var wait = _this.stateCenter.lastUserQueryTime - Date.now();
                    _this.logger.info('zb.rh.hpus fetch merge userlist ' +
                        _this.stateCenter.userSeq +
                        ' userSeqList ' +
                        userSeqList.join(',') +
                        ' wait ' +
                        wait);
                    if (wait > 0) {
                        _this.stateCenter.userQueryTimer && clearTimeout(_this.stateCenter.userQueryTimer);
                        _this.stateCenter.userQueryTimer = setTimeout(function () {
                            _this.fetchUserList();
                        }, wait);
                    }
                    else {
                        _this.fetchUserList();
                    }
                }
            }, this.stateCenter.userListMergeInterval);
        }
        this.logger.warn('zb.rh.hpus merge userlist ' +
            this.stateCenter.userSeq +
            ' server ' +
            userSeq +
            ' userlist ' +
            userList.length);
        this.stateCenter.userSeqMergeMap[userSeq] = userList;
    };
    RoomHandler.prototype.mergeUser = function (userSeqList) {
        var _this = this;
        this.logger.info('zb.rh.hpus merge userlist ' + this.stateCenter.userSeq + ' userSeqList ' + userSeqList.join(','));
        this.stateCenter.userSeq = userSeqList[userSeqList.length - 1];
        // 一段时间内同一个用户多次进出房间，以最后一次为准（因为合并了推送消息，userSeq升序）
        var userMap = {};
        userSeqList.forEach(function (seq) {
            _this.stateCenter.userSeqMergeMap[seq].forEach(function (item) {
                userMap[item.IdName] = item;
            });
        });
        this.stateCenter.userSeqMergeMap = null;
        var userList = Object.values(userMap).map(function (item) {
            var user = {
                action: item.Action,
                idName: item.IdName,
                nickName: item.NickName,
                role: item.Role,
                loginTime: item.LoginTime ? String(item.LoginTime) : '',
            };
            return user;
        });
        // loginTime 升序
        userList.sort(function (a, b) { return a.loginTime.localeCompare(b.loginTime); });
        var addUserList = [];
        var delUserList = [];
        userList.forEach(function (user) {
            if (user.action == 1) {
                addUserList.push({ userID: user.idName, userName: user.nickName });
            }
            else if (user.action == 2) {
                delUserList.push({ userID: user.idName, userName: user.nickName });
            }
        });
        this.stateCenter.userList = this.stateCenter.userList
            .concat(addUserList)
            .filter(function (user) { return !delUserList.some(function (delUser) { return delUser.userID == user.userID; }); });
        addUserList.length !== 0 && this.onUserStateUpdate(this.stateCenter.roomid, 'ADD', addUserList);
        delUserList.length !== 0 && this.onUserStateUpdate(this.stateCenter.roomid, 'DELETE', delUserList);
    };
    return RoomHandler;
}());
exports.RoomHandler = RoomHandler;


/***/ }),

/***/ "./sdk/common/clientBase/socketCenter.ts":
/*!***********************************************!*\
  !*** ./sdk/common/clientBase/socketCenter.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/util/client-util.ts");
var SocketCenter = /** @class */ (function () {
    function SocketCenter(logger, stateCenter) {
        var _this = this;
        this.websocket = null;
        this.cmdSeq = 0;
        this.responseRouters = {};
        this.logger = logger;
        this.stateCenter = stateCenter;
        this.responseRouters = {
            push_kickout: function (msg) {
                _this.handlePushKickout(msg);
            },
            push_custommsg: function (msg) {
                _this.handlePushCustomMsg(msg);
            },
            push_im_chat: function (msg) {
                _this.handlePushRoomMsg(msg);
            },
            push_userlist_update: function (msg) {
                _this.handlePushUserStateUpdateMsg(msg);
            },
            push_merge_message: function (msg) {
                _this.handlePushMergeMsg(msg);
            },
            trans: function (msg) {
                _this.handleTransRsp(msg);
            },
            push_trans: function (msg) {
                _this.handlePushTransMsg(msg);
            },
        };
    }
    /*
     *    "hpk.0": "ZegoExpressEngine.handlePushKickout",
     */
    SocketCenter.prototype.handlePushKickout = function (msg) { };
    SocketCenter.prototype.handlePushCustomMsg = function (msg) { };
    SocketCenter.prototype.handlePushRoomMsg = function (msg) { };
    SocketCenter.prototype.handlePushUserStateUpdateMsg = function (msg) { };
    SocketCenter.prototype.handlePushMergeMsg = function (msg) { };
    SocketCenter.prototype.handlePushTransMsg = function (msg) { };
    SocketCenter.prototype.handleBigImMsgRsp = function (msg) { };
    /*
     *    "zb.sc.htr": "ZegoExpressEngine.base.SocketCenter.handleTransRsp",
     *
     */
    //trans回包
    SocketCenter.prototype.handleTransRsp = function (msg) {
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.sc.htr not login');
            return;
        }
        if (msg.body.err_code != 0) {
            this.logger.error('zb.sc.htr trans send error ' + msg.body.err_code);
            return;
        }
        var type = msg.body.trans_type;
        if (!this.stateCenter.transSeqMap[type]) {
            this.logger.error('zb.sc.htr cannot match send info');
            return;
        }
        //update seq
        this.stateCenter.transSeqMap[type].seq = msg.body.trans_seq;
        this.logger.debug('zb.sc.htr trans ' + type + ' seq ' + msg.body.trans_seq);
    };
    SocketCenter.prototype.handleBizChannelRspCallback = function (msg, sendData) {
        if (msg.body.err_code === 0) {
            if (sendData.success != null) {
                sendData.success(msg.header.seq, msg.body.cmd, msg.body.rsp_body);
            }
        }
        else {
            if (sendData.error != null) {
                sendData.error(msg.body.err_code, msg.header.seq, msg.body.rsp_body, sendData.isRetry);
            }
        }
    };
    //注册cmd回调事件
    SocketCenter.prototype.registerRouter = function (name, callBack) {
        this.responseRouters[name] = callBack;
    };
    SocketCenter.prototype.getSocket = function (server) {
        return null;
    };
    // 获取全局参数对象header
    SocketCenter.prototype.getHeaderV2 = function (cmd) {
        var header = {
            Protocol: 'req_v2',
            cmd: cmd,
            appid: this.stateCenter.appid,
            seq: ++this.cmdSeq,
            user_id: this.stateCenter.userid,
            session_id: this.stateCenter.sessionid || '',
            room_id: this.stateCenter.roomid || '',
            room_session_id: this.stateCenter.roomSessionId || '',
            biz_version: this.stateCenter.bizVersion || '',
        };
        return header;
    };
    // 获取全局参数对象header
    SocketCenter.prototype.getHeader = function (cmd) {
        return {
            Protocol: 'req',
            cmd: cmd,
            appid: this.stateCenter.appid,
            seq: ++this.cmdSeq,
            user_id: this.stateCenter.userid,
            session_id: this.stateCenter.sessionid || '',
            room_id: this.stateCenter.roomid || '',
            room_session_id: this.stateCenter.roomSessionId || '',
            biz_version: this.stateCenter.bizVersion || '',
        };
    };
    /*
     *    "zb.sc.sm": "ZegoExpressEngine.base.SocketCenter.sendMessage",
     *
     */
    SocketCenter.prototype.sendMessage = function (cmd, body, success, error, isRetry) {
        this.logger.info('zb.sc.sm call ' + cmd);
        if (this.isDisConnect()) {
            this.logger.error('zb.sc.sm error ' + cmd + ' websocket is disconnected');
            return -1;
        }
        var header = zego_entity_1.ROOMVERSION === 'V1' ? this.getHeader(cmd) : this.getHeaderV2(cmd);
        var data = {
            header: header,
            body: body,
        };
        success == undefined && (success = null);
        error == undefined && (error = null);
        if (success != null || error != null) {
            var cmdData = {
                data: data,
                seq: header.seq,
                deleted: false,
                time: Date.parse(new Date() + ''),
                success: success,
                error: error,
                isRetry: isRetry,
            };
            var cmdDataNode = this.stateCenter.sendCommandList.push(cmdData);
            this.stateCenter.sendCommandMap[cmdData.seq] = cmdDataNode;
        }
        this.logger.info('zb.sc.sm data ', JSON.stringify(data));
        this.websocket && this.websocket.send(JSON.stringify(data));
        this.logger.debug('zb.sc.sm success');
        return header.seq;
    };
    /*
     *    "zb.sc.scm": "ZegoExpressEngine.base.SocketCenter.sendCustomMessage"
     */
    //发送带回调消息
    SocketCenter.prototype.sendCustomMessage = function (cmd, body, success, error) {
        this.logger.debug('zb.sc.scm call');
        if (this.isDisConnect()) {
            this.logger.error('zb.sc.scm error');
            return false;
        }
        var header = zego_entity_1.ROOMVERSION === 'V1' ? this.getHeader(cmd) : this.getHeaderV2(cmd);
        var data = {
            header: header,
            body: body,
        };
        var dataBuffer = JSON.stringify(data);
        if (success == undefined)
            success = null;
        if (error == undefined)
            error = null;
        var cmdData = {
            data: data,
            seq: header.seq,
            deleted: false,
            time: Date.parse(new Date() + ''),
            success: success,
            error: error,
        };
        var cmdDataNode = this.stateCenter.sendDataList.push(cmdData);
        this.stateCenter.sendDataMap[cmdData.seq] = cmdDataNode;
        this.logger.info('zb.sc.scm data ', dataBuffer);
        this.websocket && this.websocket.send(dataBuffer);
        this.logger.debug('zb.sc.scm success seq: ', header.seq);
        return true;
    };
    SocketCenter.prototype.isDisConnect = function () {
        return !this.websocket || this.websocket.readyState !== 1;
    };
    /*
     *    "zb.sc.cs": "ZegoExpressEngine.base.SocketCenter.closeSocket"
     */
    SocketCenter.prototype.closeSocket = function () {
        if (this.websocket) {
            this.logger.info('zb.sc.cs close websocket');
            this.websocket.onclose = null;
            this.websocket.onerror = null;
            this.websocket.close();
            this.websocket = null;
        }
    };
    SocketCenter.prototype.createSocket = function (server) {
        this.websocket = this.getSocket(server);
    };
    SocketCenter.prototype.openHandler = function (hander) {
        if (this.websocket)
            this.websocket.onopen = hander;
    };
    /*
     *    "zb.sc.ch": "ZegoExpressEngine.base.SocketCenter.closeHandler"
     */
    SocketCenter.prototype.closeHandler = function (hander) {
        if (this.websocket)
            this.websocket.onclose = hander;
    };
    /*
     *    "zb.sc.ws.oe": "ZegoExpressEngine.base.SocketCenter.errorHandler"
     */
    SocketCenter.prototype.errorHandler = function () {
        var _this = this;
        if (this.websocket)
            this.websocket.onerror = function (e) {
                _this.logger.error('zb.sc.oe msg=' + JSON.stringify(e));
            };
    };
    /*
     *    "zb.sc.crp": "ZegoExpressEngine.base.SocketCenter.checkResponse"
     */
    // 被logincenter 覆盖
    SocketCenter.prototype.checkResponse = function (msg) {
        if (msg.header.appid !== this.stateCenter.appid ||
            msg.header.session_id !== this.stateCenter.sessionid ||
            msg.header.user_id !== this.stateCenter.userid ||
            msg.header.room_id !== this.stateCenter.roomid ||
            this.stateCenter.runState !== zego_entity_1.ENUM_RUN_STATE.login) {
            this.logger.error('zb.sc.crp check session fail.');
            return true;
        }
        else {
            return false;
        }
    };
    /*
     *    "zb.sc.ws.rph: "ZegoExpressEngine.base.SocketCenter.responseHandler"
     */
    SocketCenter.prototype.responseHandler = function () {
        var _this = this;
        if (this.websocket)
            this.websocket.onmessage = function (e) {
                var msg = JSON.parse(e.data);
                _this.logger.info('zb.sc.ws.rph jsonmsg= ', msg.header.cmd);
                _this.logger.info('zb.sc.ws.rph jsonmsg= ', e.data);
                if (msg.body.err_code !== 0) {
                    msg.body.err_message &&
                        _this.logger.error("zb.sc.ws.rph cmd=" + msg.header.cmd + ", err_code=" + msg.body.err_code + ", err_message=" + msg.body.err_message + " ");
                }
                if (msg.header.cmd === 'login') {
                    _this.responseRouters['login'](msg, _this.cmdSeq);
                    return;
                }
                else if (msg.header.cmd === 'logout') {
                    _this.responseRouters['logout'](msg, _this.cmdSeq);
                    return;
                }
                if (!_this.stateCenter.isLogin()) {
                    _this.logger.warn('zb.sc.ws.rph  already logout');
                    return;
                }
                if (_this.checkResponse(msg)) {
                    _this.logger.error('zb.sc.ws.rph check session fail.');
                    return;
                }
                //检查消息回包
                _this.handleSendCommandMsgRsp(msg);
                _this.logger.info("zb.sc.ws.rph cmd=" + msg.header.cmd + ",function=" + !!_this.responseRouters[msg.header.cmd]);
                _this.responseRouters[msg.header.cmd] && _this.responseRouters[msg.header.cmd](msg);
                // switch (msg.header.cmd) {
                //   case 'hb':
                //     this.handleHeartbeatRsp(msg);
                //     break;
                //   case 'logout':
                //     this.handleLogoutRsp(msg);
                //     break;
                //   case 'custommsg':
                //     this.handleSendCustomMsgRsp(msg);
                //     break;
                //   case 'stream_info':
                //     this.handleFetchStreamListRsp(msg);
                //     break;
                //   case 'push_custommsg':
                //     this.handlePushCustomMsg(msg);
                //     break;
                //   case 'push_stream_update':
                //     this.handlePushStreamUpdateMsg(msg);
                //     break;
                //   case 'push_kickout':
                //     this.handlePushKickout(msg);
                //     break;
                //   case 'stream_url':?-wx
                //     this.handleFetchStreamUrlRsp(msg);
                //     break;
                //   case 'stream_publish':?-wx
                //     this.handleFetchStreamPublishUrlRsp(msg);
                //     break;
                //   case 'webrtc_url':
                //     this.handleFetchWebRtcUrlRsp(msg);
                //     break;
                //   case 'im_chat':
                //     this.handleSendRoomMsgRsp(msg);
                //     break;
                //   case 'push_im_chat':
                //     this.handlePushRoomMsg(msg);
                //     break;
                //   case 'push_userlist_update':
                //     this.handlePushUserStateUpdateMsg(msg);
                //     break;
                //   case 'user_list':
                //     this.handleFetchUserListRsp(msg);
                //     break;
                //   case 'push_signal':
                //     this.handlePushSignalMsg(msg);
                //     break;
                //   case 'stream':
                //     this.handleStreamUpdateRsp(msg);
                //     break;
                //   case 'trans':
                //     this.handleTransRsp(msg);
                //     break;
                //   case 'trans_fetch':
                //     this.handleFetchTransRsp(msg);
                //     break;
                //   case 'push_trans':
                //     this.handlePushTransMsg(msg);
                //     break;
                //   case 'push_merge_message':
                //     this.handlePushMergeMsg(msg);
                //     break;
                // }
            };
    };
    /*
     *    "zb.sc.hscmr: "ZegoExpressEngine.base.SocketCenter.handleSendCommandMsgRsp"
     */
    SocketCenter.prototype.handleSendCommandMsgRsp = function (msg) {
        this.logger.debug('zb.sc.hscmr call');
        var sendDataNode = this.stateCenter.sendCommandMap[msg.header.seq];
        var sendData;
        if (sendDataNode != null) {
            sendData = sendDataNode._data;
            delete this.stateCenter.sendCommandMap[msg.header.seq];
            this.stateCenter.sendCommandList.remove(sendDataNode);
            if (sendData.data.header.cmd == 'login') {
                this.logger.debug("zb.sc.hscmr don't check " + sendData.data.header.cmd);
            }
            else if (sendData.data.header.cmd == 'relay') {
                this.handleRelayRspCallback(msg, sendData);
            }
            else if (sendData.data.header.cmd == 'bigim_chat') {
                this.handleBigImRspCallback(msg, sendData);
            }
            else if (sendData.data.header.cmd == 'biz_channel') {
                this.handleBizChannelRspCallback(msg, sendData);
            }
            else if (msg.body.err_code === 0) {
                sendData.success != null && sendData.success(msg.header.seq);
            }
            else {
                sendData.error != null && sendData.error(client_util_1.ClientUtil.getServerError(msg.body.err_code), msg.header.seq);
            }
        }
        this.logger.debug('zb.sc.hscmr call success');
    };
    SocketCenter.prototype.handleRelayRspCallback = function (msg, sendData) {
        if (msg.body.err_code === 0) {
            if (sendData.success != null) {
                sendData.success(msg.header.seq, msg.body.relay_result);
            }
        }
        else {
            if (sendData.error != null) {
                sendData.error(client_util_1.ClientUtil.getServerError(msg.body.err_code), msg.header.seq);
            }
        }
    };
    SocketCenter.prototype.handleBigImRspCallback = function (msg, sendData) {
        if (msg.body.err_code === 0) {
            if (sendData.success != null) {
                //should be sendData.success callback
                this.handleBigImMsgRsp(msg);
            }
        }
        else {
            if (sendData.error != null) {
                sendData.error({ errorCode: client_util_1.ClientUtil.getServerError(msg.body.err_code).code, messageID: '' });
            }
        }
    };
    return SocketCenter;
}());
exports.SocketCenter = SocketCenter;


/***/ }),

/***/ "./sdk/common/clientBase/stateCenter.ts":
/*!**********************************************!*\
  !*** ./sdk/common/clientBase/stateCenter.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var zego_extern_1 = __webpack_require__(/*! ../zego.extern */ "./sdk/common/zego.extern.ts");
var StateCenter = /** @class */ (function () {
    function StateCenter() {
        this.debug = false;
        this.debugCustom = false;
        this.testEnvironment = false;
        this.third_token = '';
        this.pullLimited = true;
        this.configOK = false;
        this.relateService = [];
        this.role = 2;
        this.maxMemberCount = 0;
        this.roomCreateFlag = 1;
        this.runState = zego_entity_1.ENUM_RUN_STATE.logout;
        this.lastRunState = zego_entity_1.ENUM_RUN_STATE.logout;
        this.callbackList = {};
        this.streamQuerying = false;
        this.streamSeq = 0;
        this.streamList = [];
        this.publishStreamList = {};
        //用户相关
        this.userQuerying = false;
        this.userTempList = [];
        this.userList = [];
        this.userSeq = 0;
        // 检查 userSeq 的连续性
        this.userSeqMergeMap = null;
        this.userSeqMergeTimer = null;
        this.userQueryTimer = null;
        this.lastUserQueryTime = 0;
        this.userListInterval = 30000;
        this.userListMergeInterval = 5000;
        this.anchor_info = {
            anchor_id: '',
            anchor_id_name: '',
            anchor_nick_name: '',
        };
        //command check timout
        this.sendCommandMap = {};
        this.sendCommandList = new zego_entity_1.LinkedList();
        this.sendDataMap = {};
        this.sendDataList = new zego_entity_1.LinkedList();
        this.joinLiveCallbackMap = {};
        this.joinLiveRequestMap = {};
        this.streamUrlMap = {};
        this.cmdCallback = {};
        this.customUrl = [];
        this.customPlayUrl = [];
        //x消息相关
        this.transSeqMap = {};
        this.realyMessageList = [];
        this.relayTimer = null;
        this.bigImLastTimeIndex = 0;
        this.bigIMmessageList = [];
        this.bigImCallbackMap = {};
        this.bigImTimer = null;
        this.msgCategory = 2;
        this.serverTimeOffset = 0;
        this.datiTimeWindow = 0;
        this.bigimTimeWindow = 0;
        this.bigImMessageList = [];
        this.tryLoginCount = 0;
        this.tryLoginTimer = null;
        this.heartbeatTimer = null;
        this.loginHeartbeatTimer = null;
        this.sendDataCheckTimer = null;
        this.sendDataCheckInterval = 2000; //检查发送消息间隔
        this.sendDataTimeout = 5 * 1000; //发送消息超时
        this.sendDataBizTimeout = 6 * 1000; // 发送biz_channel消息超时
        this.sendDataDropTimeout = 10 * 1000; //丢弃过期消息的超时时间
        this.sendDataCheckOnceCount = 100; //每次处理最大的超时包
        this.sendRoomMsgTime = 0; //上一次发送房间消息时间
        this.SendRoomMsgInterval = 500; //发送房间消息最多500毫秒发送一次
        this.cmdSeq = 0;
        //音效相关
        this.audioEffectBuffer = {};
        this.audioBitRate = 48000;
        //动态转推cdn相关
        this.cdnSeq = 0;
        //回调相关
        this.listenerList = {
            roomUserUpdate: [],
            roomOnlineUserCountUpdate: [],
            getAnchorInfo: [],
            IMRecvCustomCommand: [],
            IMRecvBroadcastMessage: [],
            recvReliableMessage: [],
            roomExtraInfoUpdate: [],
            IMRecvBarrageMessage: [],
            recvJoinLiveRequest: [],
            recvInviteJoinLiveRequest: [],
            recvEndJoinLiveCommand: [],
            roomStreamUpdate: [],
            streamExtraInfoUpdate: [],
            playerStateUpdate: [],
            publisherStateUpdate: [],
            roomStateUpdate: [],
            screenSharingEnded: [],
            publishQualityUpdate: [],
            playQualityUpdate: [],
            remoteCameraStatusUpdate: [],
            remoteMicStatusUpdate: [],
            soundLevelUpdate: [],
            videoDeviceStateChanged: [],
            audioDeviceStateChanged: [],
            deviceError: [],
        };
        // log event
        this.reportList = {};
        this.reportSeqList = {
            login: 0,
            relogin: 0,
            startPublish: {},
            rePublish: {},
            startPlay: {},
            rePlay: {},
            stopPublish: {},
            stopPlay: {},
        };
        this.streamTrigger = {};
        // 混流配置相关
        this.mixStreamAdvance = {};
        this.audioStreamList = {};
        // 设备信息
        this.deviceInfos = null;
        this.deviceChangeTimer = null;
        this.deviceStateOut = false;
    }
    //是否登录
    StateCenter.prototype.isLogin = function () {
        return this.runState === zego_entity_1.ENUM_RUN_STATE.login;
    };
    //requestId
    StateCenter.prototype.getRequestId = function () {
        return this.idName + '-' + zego_extern_1.getSeq();
    };
    StateCenter.prototype.getSignalCmdContent = function (requestId, dest_id_name, result) {
        var data = {
            request_id: requestId,
            room_id: this.roomid,
            from_userid: this.idName,
            from_username: this.nickName,
            to_userid: dest_id_name,
        };
        if (result != undefined) {
            data['result'] = result;
        }
        return JSON.stringify(data);
    };
    StateCenter.prototype.actionListener = function (listener) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.listenerList[listener] &&
            this.listenerList[listener].forEach(function (func) {
                try {
                    func.apply(void 0, args);
                }
                catch (error) {
                    _this.logger.error('zb.sct.al0.0 ', listener, ' ', error);
                }
            });
    };
    return StateCenter;
}());
exports.StateCenter = StateCenter;


/***/ }),

/***/ "./sdk/common/clientBase/streamHandler.ts":
/*!************************************************!*\
  !*** ./sdk/common/clientBase/streamHandler.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../zego.entity */ "./sdk/common/zego.entity.ts");
var client_util_1 = __webpack_require__(/*! ../../util/client-util */ "./sdk/util/client-util.ts");
var zego_extern_1 = __webpack_require__(/*! ../zego.extern */ "./sdk/common/zego.extern.ts");
var zego_externalError_1 = __webpack_require__(/*! ../zego.externalError */ "./sdk/common/zego.externalError.ts");
var StreamHandler = /** @class */ (function () {
    function StreamHandler(logger, stateCenter, socketCenter, dataReport) {
        this.logger = logger;
        this.socketCenter = socketCenter;
        this.stateCenter = stateCenter;
        this.dataReport = dataReport;
    }
    //空实现 被sdk覆盖
    StreamHandler.prototype.setCDNInfo = function (streamInfo, streamItem) { };
    //空实现 被sdk覆盖
    StreamHandler.prototype.onStreamUpdated = function (roomid, type, streamList) { };
    //空实现 被sdk覆盖
    StreamHandler.prototype.onStreamExtraInfoUpdated = function (roomid, streamList) { };
    /*
     *    "zb.sh.hss": "ZegoClient.base.StreamHandler.handleStreamStart",
     */
    StreamHandler.prototype.handleStreamStart = function (lastRunState, msg) {
        var _this = this;
        this.stateCenter.streamQuerying = false;
        this.socketCenter.registerRouter('stream', function (msg) {
            _this.handleStreamUpdateRsp(msg);
        });
        this.socketCenter.registerRouter('push_stream_update', function (msg) {
            _this.handlePushStreamUpdateMsg(msg);
        });
        if (this.stateCenter.reportSeqList.relogin) {
            this.dataReport.uploadReport(this.stateCenter.reportSeqList.relogin);
            this.stateCenter.reportSeqList.relogin = 0;
            client_util_1.ClientUtil.unregisterCallback('kZegoTaskReLoginRoom', this.stateCenter.reportList);
        }
        this.stateCenter.actionListener('roomStateUpdate', this.stateCenter.roomid, 'CONNECTED', 0, '');
        if (lastRunState == zego_entity_1.ENUM_RUN_STATE.login) {
            this.logger.info('zb.sh.hss recover from disconnect so call streamupdate');
            //relogin and stream update callback
            this.handleFullUpdateStream(msg.body.stream_seq, msg.body.stream_info || []);
        }
        else {
            this.logger.info('zb.sh.hss success callback user');
            //login and callback
            this.stateCenter.streamList = msg.body.stream_info || [];
            this.stateCenter.streamSeq = msg.body.stream_seq;
            for (var i = 0; i < this.stateCenter.streamList.length; i++) {
                //check whether stream contain self
                if (this.stateCenter.streamList[i].anchor_id_name == this.stateCenter.idName) {
                    //delete this stream
                    this.updateStreamInfo(this.stateCenter.streamList[i].stream_id, zego_entity_1.ENUM_STREAM_SUB_CMD.liveEnd);
                    this.stateCenter.streamList.splice(i--, 1);
                }
            }
            var callbackStreamList = this.makeCallbackStreamList(this.stateCenter.streamList);
            client_util_1.ClientUtil.actionSuccessCallback('login', this.stateCenter.callbackList) && client_util_1.ClientUtil.actionSuccessCallback('login', this.stateCenter.callbackList)(true);
            callbackStreamList.length > 0 && this.onStreamUpdated(this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.added, callbackStreamList);
        }
    };
    //空实现 被sdk覆盖
    StreamHandler.prototype.onPublishStateUpdate = function (type, streamId, error) { };
    /*
     *    "zb.sh.usi": "ZegoClient.base.StreamHandler.updateStreamInfo",
     */
    //流更新信令  退出上次推的自己的流
    StreamHandler.prototype.updateStreamInfo = function (streamid, cmd, stream_extra_info, error) {
        var _this = this;
        if (stream_extra_info === void 0) { stream_extra_info = ''; }
        this.logger.debug('zb.sh.usi call');
        var extra_info = stream_extra_info;
        var data = {
            stream_id: streamid,
            extra_info: extra_info,
        };
        var stream_msg = JSON.stringify(data);
        var bodyData = {
            sub_cmd: cmd,
            stream_msg: stream_msg,
        };
        this.socketCenter.registerRouter('stream', function (msg) {
            _this.handleStreamUpdateRsp(msg);
        });
        this.socketCenter.sendMessage('stream', bodyData, undefined, error);
        this.logger.info('zb.sh.usi call success cmd ' + cmd);
    };
    /*
     *    "zb.sh.hsur": "ZegoClient.base.StreamHandler.handleStreamUpdateRsp",
     */
    //流更新回包
    StreamHandler.prototype.handleStreamUpdateRsp = function (msg) {
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zb.sh.hsur not login');
            return;
        }
        if (msg.body.err_code != 0) {
            this.logger.error('zb.sh.hsur stream update error ' + msg.body.err_code);
            return;
        }
        this.logger.info('zb.sh.hsur stream seq ' + this.stateCenter.streamSeq + ' server seq ' + msg.body.stream_seq);
        this.stateCenter.streamSeq = msg.body.stream_seq;
        //流删除时，publishStreamList已经删除了
        for (var i = 0; i < msg.body.stream_info.length; i++) {
            var streamid = msg.body.stream_info[i].stream_id;
            if (!this.stateCenter.publishStreamList[streamid]) {
                this.logger.info('hsur.0 stream is not exist');
                return;
            }
            if (this.stateCenter.publishStreamList[streamid].state == zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) {
                this.stateCenter.publishStreamList[streamid].state = zego_entity_1.ENUM_PUBLISH_STREAM_STATE.publishing;
                this.onPublishStateUpdate(0, streamid, { code: 0, msg: '' });
            }
        }
    };
    /*
     *    "zb.sh.hfslr": "ZegoClient.base.StreamHandler.handleFetchStreamListRsp",
     */
    StreamHandler.prototype.handleFetchStreamListRsp = function (msg) {
        this.logger.info('zb.sh.hfslr call');
        this.stateCenter.streamQuerying = false;
        if (msg.body.err_code !== 0) {
            this.logger.info('zb.sh.hfslr server error=', msg.body.err_code);
            return;
        }
        if (this.stateCenter.streamSeq === msg.body.stream_seq) {
            this.logger.info('zb.sh.hfslr same seq');
            return;
        }
        this.handleFullUpdateStream(msg.body.stream_seq, msg.body.stream_info);
        this.logger.debug('zb.sh.hfslr call success');
    };
    /*
     *    "zb.sh.hfus": "ZegoClient.base.StreamHandler.handleFullUpdateStream",
     */
    StreamHandler.prototype.handleFullUpdateStream = function (serverStreamSeq, serverStreamList) {
        var _this = this;
        this.logger.debug('zb.sh.hfus call');
        this.stateCenter.streamSeq = serverStreamSeq;
        this.logger.debug('zb.sh.hfus server seq ' + this.stateCenter.streamSeq);
        client_util_1.ClientUtil.mergeStreamList(this.logger, this.stateCenter.idName, this.stateCenter.streamList, serverStreamList, function (addStreamList, delStreamList, updateStreamList) {
            if (addStreamList.length !== 0) {
                _this.logger.debug('zb.sh.hfus callback addstream');
                _this.onStreamUpdated(_this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.added, _this.makeCallbackStreamList(addStreamList));
            }
            if (delStreamList.length !== 0) {
                _this.logger.debug('zb.sh.hfus callback delstream');
                _this.onStreamUpdated(_this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.deleted, _this.makeCallbackStreamList(delStreamList));
            }
            if (updateStreamList.length !== 0) {
                _this.logger.debug('zb.sh.hfus callback updatestream');
                _this.onStreamExtraInfoUpdated(_this.stateCenter.roomid, _this.makeCallbackStreamList(updateStreamList));
            }
        });
        this.logger.info('zb.sh.hfus call success');
    };
    /*
     *    "zb.sh.hpsum": "ZegoClient.base.StreamHandler.handlePushStreamUpdateMsg",
     */
    StreamHandler.prototype.handlePushStreamUpdateMsg = function (msg) {
        this.logger.info('zb.sh.hpsum call');
        if (!msg.body.stream_info || msg.body.stream_info.length === 0) {
            this.logger.info('zb.sh.hpsum, emtpy list');
            return;
        }
        if (msg.body.stream_info.length + this.stateCenter.streamSeq !== msg.body.stream_seq) {
            this.logger.info('zb.sh.hpsum call updatestream');
            this.fetchStreamList();
            return;
        }
        this.stateCenter.streamSeq = msg.body.stream_seq;
        switch (msg.body.stream_cmd) {
            case zego_entity_1.ENUM_STREAM_UPDATE_CMD.added:
                this.handleAddedStreamList(msg.body.stream_info);
                break;
            case zego_entity_1.ENUM_STREAM_UPDATE_CMD.deleted:
                this.handleDeletedStreamList(msg.body.stream_info);
                break;
            case zego_entity_1.ENUM_STREAM_UPDATE_CMD.updated:
                this.handleUpdatedStreamList(msg.body.stream_info);
                break;
        }
        this.logger.info('zb.sh.hpsum call success');
    };
    /*
     *    "zb.sh.hasl": "ZegoClient.base.StreamHandler.handleAddedStreamList",
     */
    StreamHandler.prototype.handleAddedStreamList = function (streamList) {
        this.logger.debug('zb.sh.hasl call');
        var addStreamList = [];
        var flag;
        for (var i = 0; i < streamList.length; i++) {
            if (streamList[i].anchor_id_name == this.stateCenter.idName) {
                this.logger.debug('hdsl.0 have self stream added');
                continue;
            }
            flag = false;
            for (var j = 0; j < this.stateCenter.streamList.length; j++) {
                if (streamList[i].stream_id === this.stateCenter.streamList[j].stream_id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                addStreamList.push(streamList[i]);
            }
        }
        if (addStreamList.length !== 0) {
            this.logger.debug('zb.sh.hasl callback addstream');
            // this.stateCenter.streamList.concat(addStreamList);
            for (var k = 0; k < addStreamList.length; k++) {
                this.stateCenter.streamList.push(addStreamList[k]);
            }
            this.onStreamUpdated(this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.added, this.makeCallbackStreamList(addStreamList));
        }
        this.logger.info('zb.sh.hasl call success');
    };
    /*
     *    "zb.sh.hdsl": "ZegoClient.base.StreamHandler.handleDeletedStreamList",
     */
    StreamHandler.prototype.handleDeletedStreamList = function (streamList) {
        this.logger.debug('zb.sh.hdsl call');
        var delStreamList = [];
        for (var i = 0; i < streamList.length; i++) {
            if (streamList[i].anchor_id_name == this.stateCenter.idName) {
                this.logger.debug('zb.sh.hdsl have self stream deleted');
                continue;
            }
            for (var j = this.stateCenter.streamList.length - 1; j >= 0; j--) {
                if (streamList[i].stream_id === this.stateCenter.streamList[j].stream_id) {
                    this.stateCenter.streamList.splice(j, 1);
                    delStreamList.push(streamList[i]);
                    break;
                }
            }
        }
        if (delStreamList.length !== 0) {
            this.logger.debug('zb.sh.hdsl callback delstream');
            this.onStreamUpdated(this.stateCenter.roomid, zego_entity_1.ENUM_STREAM_UPDATE_TYPE.deleted, this.makeCallbackStreamList(delStreamList));
        }
        this.logger.info('zb.sh.hdsl call');
    };
    /*
     *    "zb.sh.husl": "ZegoClient.base.StreamHandler.handleUpdatedStreamList",
     */
    StreamHandler.prototype.handleUpdatedStreamList = function (streamList) {
        this.logger.debug('zb.sh.husl call');
        var updateStreamList = [];
        for (var i = 0; i < streamList.length; i++) {
            if (streamList[i].anchor_id_name == this.stateCenter.idName) {
                this.logger.debug('hsul.0 have self stream updated');
                continue;
            }
            for (var j = 0; j < this.stateCenter.streamList.length; j++) {
                if (streamList[i].stream_id === this.stateCenter.streamList[j].stream_id) {
                    if (streamList[i].extra_info !== this.stateCenter.streamList[j].extra_info) {
                        this.stateCenter.streamList[j] = streamList[i];
                        updateStreamList.push(streamList[i]);
                    }
                    break;
                }
            }
        }
        if (updateStreamList.length !== 0) {
            this.logger.debug('zb.sh.husl callback updatestream');
            this.onStreamExtraInfoUpdated(this.stateCenter.roomid, this.makeCallbackStreamList(updateStreamList));
        }
        this.logger.info('zb.sh.husl call success');
    };
    /*
     *    "zb.sh.fsl": "ZegoClient.base.StreamHandler.fetchStreamList",
     */
    // 拉取服务端流信息
    StreamHandler.prototype.fetchStreamList = function () {
        this.logger.info('zb.sh.fsl call');
        // 不是处于登录状态，不让拉流
        if (!this.stateCenter.isLogin()) {
            this.logger.info('zb.sh.fsl state error');
            return;
        }
        // 是否正处于拉流状态 false 为完成， true为正在拉流
        if (this.stateCenter.streamQuerying) {
            this.logger.info('zb.sh.fsl already doing');
            return;
        }
        this.stateCenter.streamQuerying = true;
        this.logger.debug('zb.sh.fsl send fetch request');
        var bodyData = {
            reserve: 0,
        };
        // 发送消息
        this.socketCenter.registerRouter('stream_info', this.handleFetchStreamListRsp.bind(this));
        this.socketCenter.sendMessage('stream_info', bodyData);
        this.logger.debug('zb.sh.fsl call success');
    };
    StreamHandler.prototype.makeCallbackStreamList = function (streamList) {
        var callbackStreamList = [];
        if (streamList && streamList.length > 0) {
            for (var i = 0; i < streamList.length; i++) {
                var streamInfo = {
                    user: {
                        userID: streamList[i].anchor_id_name,
                        userName: streamList[i].anchor_nick_name,
                    },
                    extraInfo: streamList[i].extra_info,
                    streamID: streamList[i].stream_id,
                    roomID: '',
                    urlFlv: '',
                    urlRtmp: '',
                    urlHls: '',
                    urlHttpsFlv: '',
                    urlHttpsHls: '',
                };
                this.setCDNInfo(streamInfo, streamList[i]);
                callbackStreamList.push(streamInfo);
            }
        }
        return callbackStreamList;
    };
    /*
     *    "zb.sh.ums": "ZegoClient.base.StreamHandler.updateMixStream",
     */
    StreamHandler.prototype.updateMixStream = function (mixStreamConfig, successCallback, errorCallback) {
        var _a;
        var _this = this;
        this.logger.info('zb.sh.ums call');
        if (!mixStreamConfig.taskID) {
            this.logger.error('zb.sh.ums no taskId found');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.MIXER_TASK_ID_NULL.code, extendedData: '' });
            return false;
        }
        if (typeof mixStreamConfig.taskID !== 'string') {
            this.logger.error('zb.rh.lg taskId must be string');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
            return false;
        }
        if (mixStreamConfig.taskID.length > zego_entity_1.MAX_MIX_TASK_ID_LENGTH) {
            this.logger.error('zb.sh.ums taskId is too long');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.MIXER_TASK_ID_TOO_LONG.code, extendedData: '' });
            return false;
        }
        if (!client_util_1.ClientUtil.checkIllegalCharacters(mixStreamConfig.taskID)) {
            this.logger.error('zb.sh.ums task ID contains illegal characters');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.MIXER_TASK_ID_INVALID_CHARACTER.code, extendedData: '' });
            return false;
        }
        if (!mixStreamConfig.inputList || mixStreamConfig.inputList.length == 0) {
            this.logger.error('zb.sh.ums input list wrong');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.MIXER_INPUTLIST_NULL.code, extendedData: '' });
            return false;
        }
        // 纯音频内部指定参数
        mixStreamConfig.inputList.forEach(function (streamInfo) {
            if (streamInfo.contentType === 'AUDIO') {
                !streamInfo.layout && (streamInfo.layout = { top: 0, left: 0, bottom: 0, right: 0 });
                streamInfo.layout.top = 0;
                streamInfo.layout.left = 0;
                streamInfo.layout.bottom = 1;
                streamInfo.layout.right = 1;
            }
        });
        var allAudio = mixStreamConfig.inputList.every(function (input) { return input.contentType === 'AUDIO'; });
        for (var i = 0; i < mixStreamConfig.inputList.length; i++) {
            var inputInfo = mixStreamConfig.inputList[i];
            if (typeof inputInfo.layout !== 'object') {
                this.logger.error('zb.sh.ums input layout must be object');
                errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
                return false;
            }
            if (!client_util_1.ClientUtil.checkInteger(inputInfo.layout.top, false) || !client_util_1.ClientUtil.checkInteger(inputInfo.layout.bottom, false) || !client_util_1.ClientUtil.checkInteger(inputInfo.layout.left, false) || !client_util_1.ClientUtil.checkInteger(inputInfo.layout.right, false)) {
                this.logger.error('zb.sh.ums top、left、bottom、right must be integer number');
                errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
                return false;
            }
        }
        if (!mixStreamConfig.outputList || mixStreamConfig.outputList.length == 0) {
            this.logger.error('zb.sh.ums no output list found');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.MIXER_OUTPUTLIST_NULL.code, extendedData: '' });
            return false;
        }
        if (mixStreamConfig.outputList.some(function (output) {
            return (typeof output === 'string' && !client_util_1.ClientUtil.isUrl(output) && !client_util_1.ClientUtil.checkIllegalCharacters(output)) || (typeof output === 'object' && output.target && !client_util_1.ClientUtil.isUrl(output.target)
                && !client_util_1.ClientUtil.checkIllegalCharacters(output.target));
        })) {
            this.logger.error('zb.sh.ums stream output target is incorrect');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.MIXER_OUTPUT_TARGET_INVALID.code, extendedData: '' });
            return false;
        }
        if (!allAudio && (!mixStreamConfig.outputConfig || typeof mixStreamConfig.outputConfig !== 'object')) {
            this.logger.error('zb.sh.ums no output config found');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.MIXER_NO_OUTPUT_TARGET.code, extendedData: '' });
            return false;
        }
        if (allAudio) {
            mixStreamConfig.outputConfig === undefined && (mixStreamConfig.outputConfig = {
                outputBitrate: 0,
                outputFPS: 0,
                outputWidth: 0,
                outputHeight: 0,
            });
            mixStreamConfig.outputConfig.outputBitrate = 0.001;
            mixStreamConfig.outputConfig.outputFPS = 1;
            mixStreamConfig.outputConfig.outputWidth = 1;
            mixStreamConfig.outputConfig.outputHeight = 1;
        }
        if (!mixStreamConfig.outputConfig.outputBitrate || !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputBitrate)) {
            this.logger.error('zb.sh.ums bitrate param is required and must be integer number');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
            return false;
        }
        if (!mixStreamConfig.outputConfig.outputFPS || !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputFPS)) {
            this.logger.error('zb.sh.ums fps param is required and must be integer number');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
            return false;
        }
        if (!mixStreamConfig.outputConfig.outputWidth || !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputWidth)) {
            this.logger.error('zb.sh.ums width param is required and must be integer number');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
            return false;
        }
        if (!mixStreamConfig.outputConfig.outputHeight || !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputHeight)) {
            this.logger.error('zb.sh.ums height param is required and must be integer number');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
            return false;
        }
        if (mixStreamConfig.outputConfig.outputAudioCodecID !== undefined && !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputAudioCodecID, false)) {
            this.logger.error('zb.sh.ums AudioCodecID param must be integer number');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
            return false;
        }
        if (mixStreamConfig.outputConfig.outputAudioBitrate !== undefined && !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputAudioBitrate)) {
            this.logger.error('zb.sh.ums AudioBitrate param must be integer number');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
            return false;
        }
        if (mixStreamConfig.outputConfig.outputAudioChannels !== undefined && !client_util_1.ClientUtil.checkInteger(mixStreamConfig.outputConfig.outputAudioChannels, false)) {
            this.logger.error('zb.sh.ums AudioChannels param must be integer number');
            errorCallback({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
            return false;
        }
        var _bypass = 0;
        if (mixStreamConfig.outputConfig.singleStreamPassThrough && typeof mixStreamConfig.outputConfig.singleStreamPassThrough === 'boolean') {
            _bypass = mixStreamConfig.outputConfig.singleStreamPassThrough ? 1 : 0;
        }
        var req_body = {
            task_id: mixStreamConfig.taskID,
            id_name: this.stateCenter.idName,
            live_channel: this.stateCenter.roomid,
            appid: this.stateCenter.appid,
            version: zego_entity_1.PROTO_VERSION,
            bypass: _bypass
        };
        var _advance = this.stateCenter.mixStreamAdvance;
        if (_advance) {
            // if (_advance.userData) {
            //     req_body['UserData'] = _advance.userData;
            // }
            if (_advance.videoCodec) {
                req_body['extra_params'] = [{ key: 'video_encode', value: _advance.videoCodec }];
            }
            if (_advance.backgroundColor) {
                req_body['output_bg_color'] = _advance.backgroundColor;
            }
            if (_advance.backgroundImage) {
                req_body['output_bg_image'] = _advance.backgroundImage;
            }
            if (_advance.waterMark) {
                req_body['watermark'] = _advance.waterMark;
            }
            if (_advance.extraParams) {
                !req_body['extra_params'] && (req_body['extra_params'] = []);
                (_a = req_body['extra_params']).push.apply(_a, _advance.extraParams);
            }
        }
        var mixInput = [];
        for (var i = 0; i < mixStreamConfig.inputList.length; i++) {
            var streamInfo = mixStreamConfig.inputList[i];
            var totalStreamId = streamInfo.streamID;
            if (this.stateCenter.testEnvironment) {
                totalStreamId = 'zegotest-' + this.stateCenter.appid + '-' + streamInfo.streamID;
            }
            mixInput.push({
                stream_id: totalStreamId,
                content_control: streamInfo.contentType === 'AUDIO' ? 1 : 0,
                rect: {
                    layer: i,
                    top: streamInfo.layout.top,
                    left: streamInfo.layout.left,
                    bottom: streamInfo.layout.bottom,
                    right: streamInfo.layout.right,
                },
            });
        }
        req_body['MixInput'] = mixInput;
        client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, this.stateCenter.reportList) &&
            client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.addMsgInfo, undefined, {
                mix_stream_id: mixStreamConfig.taskID,
                stream_cnt: mixInput.length,
                input_stream_list: mixInput,
            });
        var mixOutput = [];
        mixStreamConfig.outputList.forEach(function (streamInfo) {
            var outputStreamInfo = {};
            var _target = '';
            if (typeof streamInfo === 'string') {
                _target = streamInfo;
            }
            else if (typeof streamInfo === 'object' && streamInfo['target']) {
                _target = streamInfo.target;
            }
            else {
                _this.logger.error('zb.sh.ums output target required');
                errorCallback({ errorCode: zego_externalError_1.errorCodeList.MIXER_OUTPUTLIST_NULL.code, extendedData: '' });
                return false;
            }
            if (_target.startsWith('rtmp://') ||
                (_target.startsWith('https://') && _target.endsWith('.flv')) ||
                (_target.startsWith('https://') && _target.endsWith('.m3u8'))) {
                outputStreamInfo['mixurl'] = _target;
            }
            else {
                if (_this.stateCenter.testEnvironment) {
                    outputStreamInfo['stream_id'] = 'zegotest-' + _this.stateCenter.appid + '-' + _target;
                }
                else {
                    outputStreamInfo['stream_id'] = _target;
                }
            }
            outputStreamInfo['bitrate'] = mixStreamConfig.outputConfig.outputBitrate * 1000;
            outputStreamInfo['fps'] = mixStreamConfig.outputConfig.outputFPS;
            outputStreamInfo['width'] = mixStreamConfig.outputConfig.outputWidth;
            outputStreamInfo['height'] = mixStreamConfig.outputConfig.outputHeight;
            if (mixStreamConfig.outputConfig.outputAudioCodecID) {
                outputStreamInfo['audio_enc_id'] = mixStreamConfig.outputConfig.outputAudioCodecID;
            }
            if (_advance.videoCodec === 'vp8') {
                outputStreamInfo['audio_enc_id'] = 3;
            }
            else if (_advance.videoCodec === 'h264') {
                outputStreamInfo['audio_enc_id'] = 0;
            }
            if (mixStreamConfig.outputConfig.outputAudioBitrate) {
                outputStreamInfo['audio_bitrate'] = mixStreamConfig.outputConfig.outputAudioBitrate * 1000;
            }
            if (mixStreamConfig.outputConfig.outputAudioChannels) {
                outputStreamInfo['audio_channel_cnt'] = mixStreamConfig.outputConfig.outputAudioChannels;
            }
            if (_this.stateCenter.testEnvironment) {
                outputStreamInfo['testenv'] = 1;
            }
            else {
                outputStreamInfo['testenv'] = 0;
            }
            mixOutput.push(outputStreamInfo);
        });
        req_body['MixOutput'] = mixOutput;
        client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, this.stateCenter.reportList) &&
            client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixStart' + mixStreamConfig.taskID, this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.addMsgInfo, undefined, {
                output_target_list: mixOutput
            });
        var body = {
            channel: 'zeus',
            cmd: 'start_mix',
            req_body: JSON.stringify(req_body),
        };
        this.logger.debug('zb.sh.ums send command');
        this.sendBizChannelRequest(body, function (seq, cmd, rspBody) {
            _this.logger.debug('zb.sh.ums receive message');
            var prefix = 'zegotest-' + _this.stateCenter.appid + '-';
            if (rspBody.length == 0) {
                if (errorCallback) {
                    errorCallback({
                        errorCode: client_util_1.ClientUtil.getServerError(zego_entity_1.MIXSTREAM_ERROR_CODE + 1).code,
                        extendedData: '',
                    });
                }
                return;
            }
            var data = JSON.parse(rspBody);
            var mixPlayInfoList = [];
            for (var i = 0; i < data.play.length; i++) {
                var mixPlayInfo = {
                    rtmpURL: '',
                    hlsURL: '',
                    flvURL: '',
                };
                var streamID = data.play[i].stream_alias || '';
                if (_this.stateCenter.testEnvironment && streamID && streamID.startsWith(prefix)) {
                    streamID = streamID.slice(prefix.length);
                }
                mixPlayInfo['streamID'] = streamID;
                if (data.play[i].rtmp_url && data.play[i].rtmp_url.length > 0) {
                    mixPlayInfo.rtmpURL = data.play[i].rtmp_url;
                }
                if (data.play[i].hls_url && data.play[i].hls_url.length > 0) {
                    mixPlayInfo['hlsURL'] = data.play[i].hls_url;
                }
                if (data.play[i].hdl_url && data.play[i].hdl_url.length > 0) {
                    mixPlayInfo['flvURL'] = data.play[i].hdl_url;
                }
                mixPlayInfoList.push(mixPlayInfo);
            }
            if (successCallback) {
                var mixs = { mixerOutputList: mixPlayInfoList };
                successCallback({ errorCode: 0, extendedData: JSON.stringify(mixs) });
                // successCallback({ errorCode: 0 ,extendedData: ''})
            }
        }, function (error, seq, rspBody) {
            if (typeof error == 'number') {
                _this.logger.debug('zb.sh.ums error: ' + error);
                var nonExistsStreamId = [];
                if (error == 1000000150 && rspBody.length != 0) {
                    //no stream list
                    var data = JSON.parse(rspBody);
                    var prefix = 'zegotest-' + _this.stateCenter.appid + '-';
                    for (var i = 0; i < data.non_exist_streams.length; i++) {
                        var totalStreamId = data.non_exist_streams[i];
                        if (_this.stateCenter.testEnvironment && totalStreamId.startsWith(prefix)) {
                            nonExistsStreamId.push(totalStreamId.slice(prefix.length));
                        }
                        else {
                            nonExistsStreamId.push(totalStreamId);
                        }
                    }
                }
                if (errorCallback) {
                    errorCallback({
                        errorCode: client_util_1.ClientUtil.getServerError(error).code,
                        extendedData: '',
                    });
                }
            }
            else {
                _this.logger.debug('zb.sh.ums error code ' + error.code);
                var _err = void 0;
                if (error == zego_externalError_1.errorCodeList.TIMEOUT) {
                    _err = zego_externalError_1.errorCodeList.MIXER_START_REQUEST_ERROR;
                }
                else {
                    _err = zego_externalError_1.errorCodeList.MIXER_INNER_ERROR;
                }
                if (errorCallback) {
                    errorCallback({ errorCode: _err.code, extendedData: '' });
                }
            }
        });
        return true;
    };
    StreamHandler.prototype.sendBizChannelRequest = function (reqBody, success, error, isRetry) {
        var _this = this;
        if (isRetry === void 0) { isRetry = false; }
        reqBody = Object.assign(reqBody, { is_retry_req: isRetry ? 1 : 0 });
        this.socketCenter.sendMessage('biz_channel', reqBody, success, function (err, seq, rspBody, isRetry) {
            // retry
            if (typeof err == 'number' && err === 2002 && !isRetry) {
                _this.sendBizChannelRequest(reqBody, success, error, true);
                return;
            }
            error(err, seq, rspBody);
        }, isRetry);
    };
    StreamHandler.prototype.setMixerTaskConfig = function (advance) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var mixStreamAdvance = {};
            var config = {};
            // if (
            //     advance &&
            //     advance.userData &&
            //     typeof advance.userData == 'string' &&
            //     (advance.userData as string).length <= 10000
            // ) {
            //     mixStreamAdvance.userData = advance.userData;
            // }
            if (advance && advance.videoCodec) {
                var videoc = advance.videoCodec.toLowerCase();
                if (['vp8', 'h264'].indexOf(videoc) == -1) {
                    _this.logger.error('zb.sh.ums param videoCode error');
                    reject({ errorCode: zego_externalError_1.errorCodeList.MIXER_VIDEO_CONFIG_INVALID.code, extendedData: '' });
                    return false;
                }
                //@ts-ignore
                mixStreamAdvance.videoCodec = videoc;
                config['video_codec'] = videoc;
                // mixStreamAdvance.extraParams = [{ key: 'video_encode', value: advance.videoCodec }];
            }
            if (advance.backgroundColor) {
                // mixOutput["output_bg_color"] = mixStreamConfig.outputBgColor;
                if (!client_util_1.ClientUtil.checkInteger(advance.backgroundColor)) {
                    _this.logger.error('zb.sh.ums param backgroundColor must be integer number');
                    reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
                    return false;
                }
                mixStreamAdvance.backgroundColor = advance.backgroundColor;
                config['background_color'] = advance.backgroundColor;
            }
            if (advance.backgroundImage) {
                // mixOutput["output_bg_image"] = mixStreamConfig.outputBgImage;
                if (typeof advance.backgroundImage !== 'string') {
                    _this.logger.error('zb.sh.ums param outputBgImage error');
                    reject({ errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code, extendedData: '' });
                    return false;
                }
                if (!(advance.backgroundImage.startsWith('preset-id://') && (advance.backgroundImage.endsWith('.jpg') || advance.backgroundImage.endsWith('.png')))) {
                    _this.logger.error('zb.sh.ums illegal input background image URL');
                    reject({ errorCode: zego_externalError_1.errorCodeList.MIXER_BACKGROUND_IMAGE_URL_INVALID.code, extendedData: '' });
                    return false;
                }
                mixStreamAdvance.backgroundImage = advance.backgroundImage;
                config['background_image'] = advance.backgroundImage;
            }
            if (advance.waterMark) {
                mixStreamAdvance.waterMark = advance.waterMark;
                config['water_mark'] = advance.waterMark;
            }
            // if (advance.extraParams) {
            //     if (!mixStreamAdvance.extraParams) mixStreamAdvance.extraParams = [];
            //     mixStreamAdvance.extraParams.push(...advance.extraParams);
            // }
            _this.stateCenter.mixStreamAdvance = mixStreamAdvance;
            client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixConfig', _this.stateCenter.reportList) &&
                client_util_1.ClientUtil.actionSuccessCallback('kZegoTaskMixConfig', _this.stateCenter.reportList)(zego_extern_1.REPORT_ACTION.addMsgInfo, undefined, {
                    config: config
                });
            resolve({ errorCode: 0, extendedData: '' });
        });
    };
    StreamHandler.prototype.publishTarget = function (cdnPushConfig, success, error) {
        var _this = this;
        if (['addpush', 'delpush', 'clearpush'].indexOf(cdnPushConfig.type) == -1) {
            this.logger.error('zb.sh.pt cdn push type error');
            return;
        }
        this.logger.info('zb.sh.pt' + 'call');
        var timestamp = Math.ceil(new Date().getTime() / 1000);
        var totalStreamId = cdnPushConfig.streamID;
        if (this.stateCenter.testEnvironment) {
            totalStreamId = 'zegotest-' + this.stateCenter.appid + '-' + cdnPushConfig.streamID;
        }
        var req_body = {
            appid: this.stateCenter.appid,
            biz_type: 0,
            timestamp: timestamp,
            signature: cdnPushConfig.signature,
            seq: this.stateCenter.cdnSeq++,
            version: zego_entity_1.PROTO_VERSION * 1,
            stream_id: totalStreamId,
            pushurl: cdnPushConfig.pushUrl,
        };
        var body = {
            channel: 'media',
            cmd: cdnPushConfig.type,
            req_body: JSON.stringify(req_body),
        };
        this.logger.debug('zb.sh.pt' + ' send command');
        this.sendBizChannelRequest(body, function (seq, cmd, rspBody) {
            _this.logger.debug('zb.sh.pt' + ' receive message');
            if (rspBody.length == 0) {
                error && error({ errorCode: client_util_1.ClientUtil.getServerError(zego_entity_1.MIXSTREAM_ERROR_CODE + 1).code });
                return;
            }
            var data = JSON.parse(rspBody);
            var code = data.code, message = data.message;
            if (!code || code == 0) {
                _this.logger.info('zb.sh.pt ' + cdnPushConfig.type + ' success');
                success && success({ errorCode: 0 });
            }
            else {
                _this.logger.error('zb.sh.pt ' + cdnPushConfig.type + ' error code: ' + code + ' ' + message);
                error && error({ errorCode: code });
                return;
            }
        }, function (err, seq, rspbody) {
            _this.logger.debug('zb.sh.pt error: ' + error);
            var message = '';
            if (err == 2001) {
                message = 'invalid channel';
            }
            else if (err == 2002) {
                message = 'bizchannel error';
            }
            _this.logger.error('zb.sh.pt ' + message);
            error && error({ errorCode: err });
        });
        // this.socketCenter.sendMessage(
        //     'biz_channel',
        //     body,
        //     (seq: number, cmd: string, rspBody: any) => {
        //         this.logger.debug('zb.sh.pt' + ' receive message');
        //         if (rspBody.length == 0) {
        //             error && error({ errorCode: ClientUtil.getServerError(MIXSTREAM_ERROR_CODE + 1).code });
        //             return;
        //         }
        //         const data = JSON.parse(rspBody);
        //         const { code, message } = data;
        //         if (!code || code == 0) {
        //             this.logger.info('zb.sh.pt ' + cdnPushConfig.type + ' success');
        //             success && success({ errorCode: 0 });
        //         } else {
        //             this.logger.error('zb.sh.pt ' + cdnPushConfig.type + ' error code: ' + code + ' ' + message);
        //             error && error({ errorCode: code });
        //             return;
        //         }
        //     },
        //     (err: number, seq: number, rspbody: any) => {
        //         this.logger.debug('zb.sh.pt error: ' + error);
        //         let message = '';
        //         if (err == 2001) {
        //             message = 'invalid channel';
        //         } else if (err == 2002) {
        //             message = 'bizchannel error';
        //         }
        //         this.logger.error('zb.sh.pt ' + message);
        //         error && error({ errorCode: err });
        //     },
        // );
    };
    /*
     *    "zb.sh.sms": "ZegoClient.base.StreamHandler.stopMixStream",
     */
    //停止混流信令
    StreamHandler.prototype.stopMixStream = function (taskid, successCallback, errorCallback) {
        var _this = this;
        this.logger.info('zb.sh.sms call');
        // if (!taskid || typeof taskid !== 'string') {
        //     this.logger.error('zb.sh.sms taskid error');
        //     return false;
        // }
        var req_body = {
            id_name: this.stateCenter.idName,
            live_channel: this.stateCenter.roomid,
            appid: this.stateCenter.appid,
            version: zego_entity_1.PROTO_VERSION,
            task_id: taskid,
        };
        var body = {
            channel: 'zeus',
            cmd: 'stop_mix',
            req_body: JSON.stringify(req_body),
        };
        this.sendBizChannelRequest(body, function () {
            if (successCallback) {
                successCallback({ errorCode: 0 });
            }
        }, function (error) {
            if (typeof error == 'number') {
                if (errorCallback) {
                    errorCallback({
                        errorCode: client_util_1.ClientUtil.getServerError(zego_entity_1.MIXSTREAM_ERROR_CODE + error).code,
                        extendedData: '',
                    });
                }
            }
            else {
                _this.logger.error('zb.sh.sms stop mix fail ' + JSON.stringify(error));
                var _err = void 0;
                if (error == zego_externalError_1.errorCodeList.TIMEOUT) {
                    _err = zego_externalError_1.errorCodeList.MIXER_STOP_REQUEST_ERROR;
                }
                else {
                    _err = zego_externalError_1.errorCodeList.MIXER_INNER_ERROR;
                }
                if (errorCallback) {
                    errorCallback({ errorCode: _err.code, extendedData: '' });
                }
            }
        });
        // this.socketCenter.sendMessage(
        //     'biz_channel',
        //     body,
        //     () => {
        //         if (successCallback) {
        //             successCallback({ errorCode: 0 });
        //         }
        //     },
        //     (error: number | object) => {
        //         if (typeof error == 'number') {
        //             if (errorCallback) {
        //                 errorCallback({
        //                     errorCode: ClientUtil.getServerError(MIXSTREAM_ERROR_CODE + error).code as number,
        //                     extendedData: '',
        //                 });
        //             }
        //         } else {
        //             this.logger.error('zb.sh.sms stop mix fail ' + JSON.stringify(error));
        //             if (errorCallback) {
        //                 errorCallback({ errorCode: commonErrorList.STOP_MIX_FAIL.code, extendedData: '', });
        //             }
        //         }
        //     },
        // );
        return true;
    };
    /*
     *    "zb.sh.usei": "ZegoClient.base.StreamHandler.updateStreamExtraInfo",
     */
    StreamHandler.prototype.updateStreamExtraInfo = function (streamid, extraInfo) {
        this.logger.info('zb.sh.usei call');
        // if (typeof streamid !== 'string' || streamid == '') {
        //     this.logger.error('zb.sh.usei streamid must be string and not empty');
        //     return false;
        // }
        // if (typeof extraInfo !== 'string' || extraInfo == '') {
        //     this.logger.error('zb.sh.usei extraInfo must be string and not empty');
        //     return false;
        // }
        if (this.stateCenter.publishStreamList[streamid]) {
            this.stateCenter.publishStreamList[streamid].extra_info = extraInfo;
            if (this.stateCenter.publishStreamList[streamid].state >= zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) {
                this.updateStreamInfo(streamid, zego_entity_1.ENUM_STREAM_SUB_CMD.liveUpdate, extraInfo);
            }
        }
        return true;
    };
    return StreamHandler;
}());
exports.StreamHandler = StreamHandler;


/***/ }),

/***/ "./sdk/common/zego.datareport.ts":
/*!***************************************!*\
  !*** ./sdk/common/zego.datareport.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ZegoDataReport = /** @class */ (function () {
    function ZegoDataReport(log) {
        this.log = log;
        this.dataStatistics = {};
        this.logger = log;
    }
    ZegoDataReport.prototype.newReport = function (seq, event) {
        this.dataStatistics[seq] = {
            event_time: Date.now(),
            time_consumed: 0,
            seq: seq,
            error: 0,
            message: 'success',
            event: event,
            events: [],
        };
    };
    ZegoDataReport.prototype.addMsgExt = function (seq, msg_ext) {
        if (!this.dataStatistics[seq]) {
            console.warn(seq + " not exist");
            return;
        }
        this.dataStatistics[seq].msg_ext = msg_ext;
    };
    ZegoDataReport.prototype.addMsgInfo = function (seq, msg_ext) {
        if (!this.dataStatistics[seq]) {
            console.warn(seq + " not exist");
            return;
        }
        // this.dataStatistics[seq].msg_ext = msg_ext;
        Object.assign(this.dataStatistics[seq], msg_ext);
    };
    /*
     *    "zd.es.0": "ZegoDataReport.eventStart"
     */
    ZegoDataReport.prototype.eventStart = function (seq, event_name) {
        if (!this.dataStatistics[seq]) {
            this.logger.warn('zd.es.0 no seq match');
            return;
        }
        else if (this.dataStatistics[seq].events == undefined) {
            this.logger.warn('zd.es.0 no events');
            return;
        }
        this.dataStatistics[seq].events.push({
            event: event_name,
            event_time: Date.now(),
            time_consumed: 0,
        });
    };
    /*
     *    "zd.ee.0": "ZegoDataReport.eventStart"
     */
    ZegoDataReport.prototype.eventEnd = function (seq, event_name, extInfo) {
        if (!this.dataStatistics[seq]) {
            this.logger.info('zd.ee.0 no seq match');
            return;
        }
        var events = this.dataStatistics[seq].events;
        if (!events || events.length === 0) {
            this.logger.info('zd.ee.0 no events');
            return;
        }
        for (var i = events.length - 1; i >= 0; i--) {
            if (events[i].event == event_name && events[i].time_consumed == 0) {
                events[i].time_consumed = Date.now() - events[i].event_time;
                break;
            }
        }
    };
    ZegoDataReport.prototype.eventEndWithMsg = function (seq, event_name, msg_ext) {
        if (!this.dataStatistics[seq]) {
            this.logger.warn('zd.ee.0 no seq match');
            return;
        }
        var events = this.dataStatistics[seq].events;
        if (!events) {
            this.logger.warn('zd.ee.0 no events');
            return;
        }
        for (var i = events.length - 1; i >= 0; i--) {
            if (events[i].event == event_name && events[i].time_consumed == 0) {
                events[i].time_consumed = Date.now() - events[i].event_time;
                if (events[i].msg_ext == undefined) {
                    events[i].msg_ext = {};
                }
                events[i].msg_ext = __assign({}, msg_ext);
                break;
            }
        }
    };
    ZegoDataReport.prototype.eventEndWithMsgInfo = function (seq, event_name, msg_ext) {
        if (!this.dataStatistics[seq]) {
            this.logger.warn('zd.ee.0 no seq match');
            return;
        }
        var events = this.dataStatistics[seq].events;
        if (!events) {
            this.logger.warn('zd.ee.0 no events');
            return;
        }
        for (var i = events.length - 1; i >= 0; i--) {
            if (events[i].event == event_name && events[i].time_consumed == 0) {
                events[i].time_consumed = Date.now() - events[i].event_time;
                // if (events[i].msg_ext == undefined) {
                //     events[i].msg_ext = {};
                // }
                // events[i].msg_ext = { ...msg_ext };
                Object.assign(events[i], msg_ext);
                break;
            }
        }
    };
    /*
     *    "zd.aei.0": "ZegoDataReport.addEventInfo"
     */
    ZegoDataReport.prototype.addEventInfo = function (seq, event_name, key, value) {
        if (!this.dataStatistics[seq]) {
            this.logger.warn('zd.aei.0 no seq match');
            return;
        }
        var events = this.dataStatistics[seq].events;
        if (events == undefined) {
            this.logger.warn('zd.aei.0 no events');
            return;
        }
        for (var i = events.length - 1; i >= 0; i--) {
            if (events[i].event == event_name && events[i].time_consumed != undefined) {
                if (events[i].msg_ext == undefined) {
                    events[i].msg_ext = {};
                }
                else if (events[i].msg_ext) {
                    events[i].msg_ext[key] = value;
                }
                break;
            }
        }
    };
    ZegoDataReport.prototype.addEventMsg = function (seq, event_name, key, value) {
        if (!this.dataStatistics[seq]) {
            this.logger.warn('zd.aem.0 no seq match');
            return;
        }
        var events = this.dataStatistics[seq].events;
        if (events == undefined) {
            this.logger.warn('zd.aem.0 no events');
            return;
        }
        for (var i = events.length - 1; i >= 0; i--) {
            if (events[i].event == event_name) {
                // if (events[i].msg_ext == undefined) {
                //     events[i].msg_ext = {};
                // } else if (events[i].msg_ext) {
                //     events[i].msg_ext![key] = value;
                // }
                // Object.assign(events[i], { key: value });
                // @ts-ignore
                events[i][key] = value;
                break;
            }
        }
    };
    /*
     *    "zd.ae.0": "ZegoDataReport.addEvent"
     */
    ZegoDataReport.prototype.addEvent = function (seq, event_name, msg_ext) {
        if (!this.dataStatistics[seq]) {
            this.logger.warn('zd.ae.0 no seq match');
            return;
        }
        if (!this.dataStatistics[seq].events) {
            return;
        }
        if (msg_ext) {
            this.dataStatistics[seq].events.push({
                event: event_name,
                event_time: Date.now(),
                msg_ext: msg_ext,
            });
        }
        else {
            this.dataStatistics[seq].events.push({
                event: event_name,
                event_time: Date.now(),
            });
        }
    };
    ZegoDataReport.prototype.uploadReport = function (seq, itemType, error, extern) {
        var reportInfo = this.dataStatistics[seq];
        if (reportInfo == undefined) {
            return;
        }
        itemType && (reportInfo.event = itemType);
        reportInfo.time_consumed = Date.now() - reportInfo.event_time;
        error &&
            this.addMsgInfo(seq, {
                error: error.code,
                message: error.message + ' ' + (extern || ''),
            });
        this.logger.report(reportInfo);
        delete this.dataStatistics[seq];
    };
    return ZegoDataReport;
}());
exports.ZegoDataReport = ZegoDataReport;


/***/ }),

/***/ "./sdk/common/zego.entity.ts":
/*!***********************************!*\
  !*** ./sdk/common/zego.entity.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PROTO_VERSION = "1.13.0";
exports.ROOMVERSION = "V1";
var ENUM_LOG_LEVEL;
(function (ENUM_LOG_LEVEL) {
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["debug"] = 0] = "debug";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["info"] = 1] = "info";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["warn"] = 2] = "warn";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["error"] = 3] = "error";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["report"] = 99] = "report";
    ENUM_LOG_LEVEL[ENUM_LOG_LEVEL["disable"] = 100] = "disable";
})(ENUM_LOG_LEVEL = exports.ENUM_LOG_LEVEL || (exports.ENUM_LOG_LEVEL = {}));
exports.LOG_LEVEL = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
    report: 99,
    disable: 100,
};
var ENUM_REMOTE_TYPE;
(function (ENUM_REMOTE_TYPE) {
    ENUM_REMOTE_TYPE[ENUM_REMOTE_TYPE["disable"] = 0] = "disable";
    ENUM_REMOTE_TYPE[ENUM_REMOTE_TYPE["websocket"] = 1] = "websocket";
    ENUM_REMOTE_TYPE[ENUM_REMOTE_TYPE["https"] = 2] = "https";
})(ENUM_REMOTE_TYPE = exports.ENUM_REMOTE_TYPE || (exports.ENUM_REMOTE_TYPE = {}));
exports.sdkErrorList = {
    CLIENT: 'Client.',
    SERVER: 'Server.',
    SUCCESS: {
        code: 'Success',
        msg: 'success.',
    },
    PARAM: {
        code: 'Error.Param',
        msg: 'input error.',
    },
    HEARTBEAT_TIMEOUT: {
        code: 'Error.Timeout',
        msg: 'heartbeat timeout.',
    },
    LOGIN_TIMEOUT: {
        code: 'Error.Timeout',
        msg: 'login timeout.',
    },
    SEND_MSG_TIMEOUT: {
        code: 'Error.Timeout',
        msg: 'send customsg timeout.',
    },
    RESET_QUEUE: {
        code: 'Error.Timeout',
        msg: 'msg waiting ack is clear when reset.',
    },
    LOGIN_DISCONNECT: {
        code: 'Error.Network',
        msg: 'network is broken and login fail.',
    },
    KICK_OUT: {
        code: 'Error.Kickout',
        msg: 'kickout reason=',
    },
    UNKNOWN: {
        code: 'Error.Unknown',
        msg: 'unknown error.',
    },
    FREQ_LIMITED: {
        code: 'Error.requencyLimited',
        msg: 'Frequency Limited.',
    },
};
exports.ERROR_CODES = {
    ROOM_SESSION_ID_ERR: 1000000152,
    FETCH_TRANS_UNKNOWN_CHANNEL: 1000001108,
    FETCH_TRANS_UNKNOWN_TYPE: 1000001109,
    FETCH_TRANS_WRONG_SEQ: 1000001110,
};
var ENUM_SIGNAL_STATE;
(function (ENUM_SIGNAL_STATE) {
    ENUM_SIGNAL_STATE[ENUM_SIGNAL_STATE["disconnected"] = 0] = "disconnected";
    ENUM_SIGNAL_STATE[ENUM_SIGNAL_STATE["connecting"] = 1] = "connecting";
    ENUM_SIGNAL_STATE[ENUM_SIGNAL_STATE["connected"] = 2] = "connected";
})(ENUM_SIGNAL_STATE = exports.ENUM_SIGNAL_STATE || (exports.ENUM_SIGNAL_STATE = {}));
exports.ENUM_RESOLUTION_TYPE = {
    LOW: {
        width: 320,
        height: 240,
        frameRate: 15,
        bitRate: 300,
    },
    MEDIUM: {
        width: 640,
        height: 480,
        frameRate: 15,
        bitRate: 800,
    },
    HIGH: {
        width: 1280,
        height: 720,
        frameRate: 20,
        bitRate: 1500,
    },
};
exports.ENUM_SCREEM_RESOLUTION_TYPE = {
    LOW: {
        frameRate: 20,
        bitRate: 800,
    },
    MEDIUM: {
        frameRate: 15,
        bitRate: 1200,
    },
    HIGH: {
        frameRate: 5,
        bitRate: 2000,
    },
};
exports.ENUM_RETRY_STATE = {
    didNotStart: 0,
    retrying: 1,
    finished: 2,
};
exports.ENUM_PUBLISH_STATE = {
    start: 0,
    waitingSessionRsp: 1,
    waitingOffserRsp: 2,
    waitingServerAnswer: 3,
    waitingServerICE: 4,
    connecting: 5,
    publishing: 6,
    stop: 7,
    didNotStart: 8,
};
exports.ENUM_PLAY_STATE = {
    start: 0,
    waitingSessionRsp: 1,
    waitingOffserRsp: 2,
    waitingServerAnswer: 3,
    waitingServerICE: 4,
    connecting: 5,
    playing: 6,
    stop: 7,
    didNotStart: 8,
};
exports.ENUM_PLAY_STATE_NEGO = {
    stop: 0,
    start: 1,
    waiterAnswer: 2,
    waitingCandidate: 3,
    sendCandidate: 4,
    iceConnected: 5,
};
exports.ENUM_CONNECT_STATE = { disconnect: 0, connecting: 1, connected: 2 };
exports.MAX_TRY_CONNECT_COUNT = 1;
exports.SEND_MSG_RESET = 2;
exports.SEND_MSG_TIMEOUT = 1;
exports.MAX_TRY_HEARTBEAT_COUNT = 5;
exports.MAX_STREAM_ID_LENGTH = 256;
exports.MAX_USER_ID_LENGTH = 64;
exports.MAX_USER_NAME_LENGTH = 256;
exports.MAX_ROOM_ID_LENGTH = 128;
exports.MAX_MESSAGE_LENGTH = 1024;
exports.MAX_MIX_TASK_ID_LENGTH = 256;
exports.MAX_TRANS_TYPE_LENGTH = 128;
exports.MAX_TRANS_DATA_LENGTH = 1024 * 4;
exports.ENUM_PUBLISH_STREAM_STATE = {
    waiting_url: 1,
    tryPublish: 2,
    update_info: 3,
    publishing: 4,
    stop: 5,
};
exports.ENUM_STREAM_SUB_CMD = {
    liveNone: 0,
    liveBegin: 2001,
    liveEnd: 2002,
    liveUpdate: 2003,
};
exports.ENUM_STREAM_UPDATE_TYPE = {
    added: 1,
    deleted: 0,
};
//运行状态
var ENUM_RUN_STATE;
(function (ENUM_RUN_STATE) {
    ENUM_RUN_STATE[ENUM_RUN_STATE["logout"] = 0] = "logout";
    ENUM_RUN_STATE[ENUM_RUN_STATE["trylogin"] = 1] = "trylogin";
    ENUM_RUN_STATE[ENUM_RUN_STATE["login"] = 2] = "login";
})(ENUM_RUN_STATE = exports.ENUM_RUN_STATE || (exports.ENUM_RUN_STATE = {}));
exports.ENUM_PUBLISH_STATE_UPDATE = {
    start: 0,
    error: 1,
    retry: 2,
};
exports.ENUM_PLAY_STATE_UPDATE = {
    start: 0,
    error: 1,
    retry: 2,
};
exports.MAX_TRY_LOGIN_COUNT = 5; //最大重试登录次数
exports.TRY_LOGIN_INTERVAL = [2000, 4000, 6000, 8000, 10000]; //重试登录的频率
exports.MINIUM_HEARTBEAT_INTERVAL = 3000; //最小心跳尝试间隔
exports.ENUM_STREAM_UPDATE_CMD = {
    added: 12001,
    deleted: 12002,
    updated: 12003,
};
exports.SERVER_ERROR_CODE = 10000;
exports.MIXSTREAM_ERROR_CODE = 10000;
var QUALITYLEVEL;
(function (QUALITYLEVEL) {
    QUALITYLEVEL[QUALITYLEVEL["low"] = 1] = "low";
    QUALITYLEVEL[QUALITYLEVEL["stantard"] = 2] = "stantard";
    QUALITYLEVEL[QUALITYLEVEL["hight"] = 3] = "hight";
    QUALITYLEVEL[QUALITYLEVEL["custome"] = 4] = "custome";
})(QUALITYLEVEL = exports.QUALITYLEVEL || (exports.QUALITYLEVEL = {}));
exports.ENUM_SIGNAL_SUB_CMD = {
    none: 0,
    joinLiveRequest: 1001,
    joinLiveResult: 1002,
    joinLiveInvite: 1003,
    joinLiveStop: 1004,
};
exports.ENUM_PUSH_SIGNAL_SUB_CMD = {
    none: 0,
    pushJoinLiveRequest: 11001,
    pushJoinLiveResult: 11002,
    pushJoinLiveInvite: 11003,
    pushJoinLiveStop: 11004,
};
exports.ENUM_PUBLISH_STATE_NEGO = {
    stop: 0,
    start: 1,
    waiterAnswer: 2,
    waitingCandidate: 3,
    sendCandidate: 4,
    iceConnected: 5,
};
//拉流选择
var ENUM_PLAY_SOURCE_TYPE;
(function (ENUM_PLAY_SOURCE_TYPE) {
    ENUM_PLAY_SOURCE_TYPE[ENUM_PLAY_SOURCE_TYPE["cdn"] = 0] = "cdn";
    ENUM_PLAY_SOURCE_TYPE[ENUM_PLAY_SOURCE_TYPE["ultra"] = 1] = "ultra";
})(ENUM_PLAY_SOURCE_TYPE = exports.ENUM_PLAY_SOURCE_TYPE || (exports.ENUM_PLAY_SOURCE_TYPE = {}));
//拉流连麦状态
var ENUM_BROADCASTER_STATUS;
(function (ENUM_BROADCASTER_STATUS) {
    ENUM_BROADCASTER_STATUS[ENUM_BROADCASTER_STATUS["stop"] = 0] = "stop";
    ENUM_BROADCASTER_STATUS[ENUM_BROADCASTER_STATUS["start"] = 1] = "start";
})(ENUM_BROADCASTER_STATUS = exports.ENUM_BROADCASTER_STATUS || (exports.ENUM_BROADCASTER_STATUS = {}));
//推流选择
var ENUM_DISPATCH_TYPE;
(function (ENUM_DISPATCH_TYPE) {
    ENUM_DISPATCH_TYPE[ENUM_DISPATCH_TYPE["cdn"] = 0] = "cdn";
    ENUM_DISPATCH_TYPE[ENUM_DISPATCH_TYPE["ultra"] = 1] = "ultra";
    ENUM_DISPATCH_TYPE[ENUM_DISPATCH_TYPE["customUrl"] = 2] = "customUrl";
})(ENUM_DISPATCH_TYPE = exports.ENUM_DISPATCH_TYPE || (exports.ENUM_DISPATCH_TYPE = {}));
var ENUM_SOURCE_TYPE;
(function (ENUM_SOURCE_TYPE) {
    ENUM_SOURCE_TYPE[ENUM_SOURCE_TYPE["CDN"] = 0] = "CDN";
    ENUM_SOURCE_TYPE[ENUM_SOURCE_TYPE["BGP"] = 1] = "BGP";
})(ENUM_SOURCE_TYPE = exports.ENUM_SOURCE_TYPE || (exports.ENUM_SOURCE_TYPE = {}));
var E_CLIENT_TYPE;
(function (E_CLIENT_TYPE) {
    E_CLIENT_TYPE[E_CLIENT_TYPE["ClientType_None"] = 0] = "ClientType_None";
    E_CLIENT_TYPE[E_CLIENT_TYPE["ClientType_H5"] = 1] = "ClientType_H5";
    E_CLIENT_TYPE[E_CLIENT_TYPE["ClientType_SmallPragram"] = 2] = "ClientType_SmallPragram";
    E_CLIENT_TYPE[E_CLIENT_TYPE["ClientType_Webrtc"] = 3] = "ClientType_Webrtc";
})(E_CLIENT_TYPE = exports.E_CLIENT_TYPE || (exports.E_CLIENT_TYPE = {}));
var ListNode = /** @class */ (function () {
    function ListNode(id, data) {
        if (id === void 0) { id = null; }
        if (data === void 0) { data = null; }
        this._id = null;
        this.next = null;
        this.prev = null;
        this._id = id;
        this._data = data;
    }
    Object.defineProperty(ListNode.prototype, "id", {
        get: function () {
            if (this._id) {
                return this._id;
            }
            else {
                return null;
            }
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListNode.prototype, "data", {
        get: function () {
            return this._data;
        },
        set: function (data) {
            this._data = data;
        },
        enumerable: true,
        configurable: true
    });
    ListNode.prototype.hasNext = function () {
        return this.next && this.next.id;
    };
    ListNode.prototype.hasPrev = function () {
        return this.prev && this.prev.id;
    };
    return ListNode;
}());
exports.ListNode = ListNode;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        //initialize end buffer nodes
        this.start = new ListNode();
        this.end = new ListNode();
        //initialize counters
        this._idCounter = 0;
        this._numNodes = 0;
        //initialize node pointers
        this.start.next = this.end;
        this.start.prev = null;
        this.end.prev = this.start;
        this.end.next = null;
    }
    /**
     *   Inserts a node before another node in the linked list
     *   @param {Node} toInsertBefore
     *   @param {Node} node
     */
    LinkedList.prototype.insertBefore = function (toInsertBefore, data) {
        var newNode = new ListNode(this._idCounter, data);
        newNode.next = toInsertBefore;
        newNode.prev = toInsertBefore.prev;
        if (toInsertBefore.prev)
            toInsertBefore.prev.next = newNode;
        toInsertBefore.prev = newNode;
        ++this._idCounter;
        ++this._numNodes;
        return newNode;
    };
    /**
     *   Adds data wrapped in a Node object to the end of the linked list
     *   @param {object} data
     */
    LinkedList.prototype.addLast = function (data) {
        return this.insertBefore(this.end, data);
    };
    /**
     *   Alias for addLast
     *   @param {object} data
     */
    LinkedList.prototype.add = function (data) {
        return this.addLast(data);
    };
    /**
     *   Gets and returns the first node in the linked list or null
     *   @return {Node/null}
     */
    LinkedList.prototype.getFirst = function () {
        if (this._numNodes === 0) {
            return null;
        }
        else {
            return this.start.next;
        }
    };
    /**
     *   Gets and returns the last node in the linked list or null
     *   @return {Node/null}
     */
    LinkedList.prototype.getLast = function () {
        if (this._numNodes === 0) {
            return null;
        }
        else {
            return this.end.prev;
        }
    };
    /**
     *   Gets and returns the size of the linked list
     *   @return {number}
     */
    LinkedList.prototype.size = function () {
        return this._numNodes;
    };
    /**
     *   (Internal) Gets and returns the node at the specified index starting from the first in the linked list
     *   Use getAt instead of this function
     *   @param {number} index
     */
    LinkedList.prototype.getFromFirst = function (index) {
        var count = 0, temp = this.start.next;
        if (index >= 0) {
            while (count < index && temp !== null) {
                temp = temp.next;
                ++count;
            }
        }
        else {
            temp = null;
        }
        if (temp === null) {
            throw 'Index out of bounds.';
        }
        return temp;
    };
    /**
     *   Gets and returns the Node at the specified index in the linked list
     *   @param {number} index
     */
    LinkedList.prototype.get = function (index) {
        var temp = null;
        if (index === 0) {
            temp = this.getFirst();
        }
        else if (index === this._numNodes - 1) {
            temp = this.getLast();
        }
        else {
            temp = this.getFromFirst(index);
        }
        return temp;
    };
    /**
     *   Removes and returns node from the linked list by rearranging pointers
     *   @param {Node} node
     *   @return {Node}
     */
    LinkedList.prototype.remove = function (node) {
        if (node.prev)
            node.prev.next = node.next;
        if (node.next)
            node.next.prev = node.prev;
        --this._numNodes;
        return node;
    };
    /**
     *   Removes and returns the first node in the linked list if it exists, otherwise returns null
     *   @return {Node/null}
     */
    LinkedList.prototype.removeFirst = function () {
        var temp = null;
        if (this._numNodes > 0 && this.start.next) {
            temp = this.remove(this.start.next);
        }
        return temp;
    };
    /**
     *   Removes and returns the last node in the linked list if it exists, otherwise returns null
     *   @return {Node/null}
     */
    LinkedList.prototype.removeLast = function () {
        var temp = null;
        if (this._numNodes > 0 && this.end.prev) {
            temp = this.remove(this.end.prev);
        }
        return temp;
    };
    /**
     *   Removes all nodes from the list
     */
    LinkedList.prototype.removeAll = function () {
        this.start.next = this.end;
        this.end.prev = this.start;
        this._numNodes = 0;
        this._idCounter = 0;
    };
    /**
     *    Iterates the list calling the given fn for each node
     *    @param {function} fn
     */
    LinkedList.prototype.each = function (iterator) {
        var temp = this.start;
        while (temp.hasNext()) {
            temp = temp.next;
            iterator(temp);
        }
    };
    LinkedList.prototype.find = function (iterator) {
        var temp = this.start, found = false, result = null;
        while (temp.hasNext() && !found) {
            temp = temp.next;
            if (iterator(temp)) {
                result = temp;
                found = true;
            }
        }
        return result;
    };
    LinkedList.prototype.map = function (iterator) {
        var temp = this.start;
        var results = [];
        while (temp.hasNext()) {
            temp = temp.next;
            if (iterator(temp)) {
                results.push(temp);
            }
        }
        return results;
    };
    /**
     *    Alias for addLast
     *    @param {object} data
     */
    LinkedList.prototype.push = function (data) {
        return this.addLast(data);
    };
    /**
     *    Performs insertBefore on the first node
     *    @param {object} data
     */
    LinkedList.prototype.unshift = function (data) {
        if (this._numNodes > 0) {
            this.insertBefore(this.start.next, data);
        }
        else {
            this.insertBefore(this.end, data);
        }
    };
    /**
     *    Alias for removeLast
     */
    LinkedList.prototype.pop = function () {
        return this.removeLast();
    };
    /**
     *    Alias for removeFirst()
     */
    LinkedList.prototype.shift = function () {
        return this.removeFirst();
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;


/***/ }),

/***/ "./sdk/common/zego.error.ts":
/*!**********************************!*\
  !*** ./sdk/common/zego.error.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
//200XXXXXXX
exports.commonErrorList = {
    SUCCESS: {
        code: 'Success',
        msg: 'success.',
    },
    INIT: {
        code: 2000000001,
        msg: 'init sdk wrong',
    },
    PARAM: {
        code: 2000000002,
        msg: 'input parm error.',
    },
    DETECT_TIMEOUT: {
        code: 2000000003,
        msg: 'detect time out',
    },
    DETECT_FAIL: {
        code: 2000000004,
        msg: 'detect fail',
    },
    SCREEN: {
        code: 2000000005,
        msg: 'screen sharing fail',
    },
    DEVICE_NO_FOUND: {
        code: 2000000006,
        msg: 'device no found',
    },
    ENUMERATE_DEVICES_FAIL: {
        code: 2000000007,
        msg: 'enumerate devices fail',
    },
    NOT_LOGIN: {
        code: 2000000008,
        msg: 'not login',
    },
    STOP_MIX_FAIL: {
        code: 2000000009,
        msg: 'stop mix stream fail',
    },
    MIX_VIDEOC: {
        code: 2000000010,
        msg: 'mix video code type wrong',
    },
    // new error
    MIX_OUTPUT: {
        code: 2000000011,
        msg: 'mix output wrong',
    },
};
//2001XXXXXX
exports.liveRoomErrorList = {
    SERVER: {
        code: 0,
        msg: 'liverooom cmd error',
    },
    // KICK_OUT: {
    //     code: 2001000001,
    //     msg: 'liveroom kick out',
    // },
    HEARTBEAT_TIMEOUT: {
        code: 2001000002,
        msg: 'heartbeat timeout.',
    },
    LOGIN_TIMEOUT: {
        code: 2001000003,
        msg: 'login timeout.',
    },
    SEND_MSG_TIMEOUT: {
        code: 2001000004,
        msg: 'send customsg timeout.',
    },
    RESET_QUEUE: {
        code: 2001000005,
        msg: 'msg waiting ack is clear when reset.',
    },
    LOGIN_DISCONNECT: {
        code: 2001000006,
        msg: 'network is broken and login fail.',
    },
    UNKNOWN: {
        code: 2001000007,
        msg: 'unknown error.',
    },
    FREQ_LIMITED: {
        code: 2001000008,
        msg: 'frequency limited.',
    },
};
//2002XXXXXX
exports.publishErrorList = {
    PARAM: {
        code: 2002000001,
        msg: 'input param error.',
    },
    BROWSER_NOT_SUPPORT: {
        code: 2002000002,
        msg: 'browser do not support',
    },
    DISPATCH_ERROR: {
        code: 2002000003,
        msg: 'dispatch request error',
    },
    DISPATCH_TIMEOUT: {
        code: 2002000004,
        msg: 'dispatch request timeout',
    },
    TOKEN_ERROR: {
        code: 2002000005,
        msg: 'login token error',
    },
    SEND_SESSION_TIMEOUT: {
        code: 2002000006,
        msg: 'send session request timeout',
    },
    CREATE_SESSION_ERROR: {
        code: 2002000007,
        msg: 'create session error',
    },
    CREATE_OFFER_ERROR: {
        code: 2002000008,
        msg: 'create offer error',
    },
    SET_LOCAL_DESC_ERROR: {
        code: 2002000009,
        msg: 'setLocalDescription error',
    },
    SEND_MEDIA_DESC_TIMEOUT: {
        code: 2002000010,
        msg: 'send mediaDesc timeout',
    },
    SERVER_MEDIA_DESC_TIMEOUT: {
        code: 2002000011,
        msg: 'waiting server mediaDesc timeout',
    },
    SERVER_MEDIA_DESC_ERROR: {
        code: 2002000012,
        msg: 'server mediaDesc type error',
    },
    SET_REMOTE_DESC_ERROR: {
        code: 2002000013,
        msg: 'other side offer error',
    },
    SEND_CANDIDATE_TIMEOUT: {
        code: 2002000014,
        msg: 'sendIceCandidate error',
    },
    SERVER_CANDIDATE_TIMEOUT: {
        code: 2002000015,
        msg: 'waiting candidate timeout',
    },
    SERVER_CANDIDATE_ERROR: {
        code: 2002000016,
        msg: 'recv candidate error',
    },
    SESSION_CLOSED: {
        code: 2002000017,
        msg: 'server session closed',
    },
    MEDIA_CONNECTION_FAILED: {
        code: 2002000018,
        msg: 'ice Connection state failed',
    },
    MEDIA_CONNECTION_CLOSED: {
        code: 2002000019,
        msg: 'ice connection state closed',
    },
    WEBSOCKET_ERROR: {
        code: 2002000020,
        msg: 'network error',
    },
    CONSTRAINTS_ERROR: {
        code: 2002000021,
        msg: 'constraint error',
    },
    MEDIA_CONNECTION_DISCONNECTED: {
        code: 2002000022,
        msg: 'ice connection state disconnected',
    },
    SERVER_NEGO_TIMEOUT: {
        code: 2002000023,
        msg: 'negotiation timeout',
    },
};
//2003XXXXXX
exports.playErrorList = {
    PARAM: {
        code: 2003000001,
        msg: 'input parm error.',
    },
    REPEATED_PULL: {
        code: 2003000002,
        msg: 'repeated pull same stream',
    },
    DISPATCH_ERROR: {
        code: 2003000003,
        msg: 'dispatch request error',
    },
    DISPATCH_TIMEOUT: {
        code: 2003000004,
        msg: 'dispatch request timeout',
    },
    TOKEN_ERROR: {
        code: 2003000005,
        msg: 'login token error',
    },
    SEND_SESSION_TIMEOUT: {
        code: 2003000006,
        msg: 'send session request timeout',
    },
    CREATE_SESSION_ERROR: {
        code: 2003000007,
        msg: 'create session error',
    },
    CREATE_OFFER_ERROR: {
        code: 2003000008,
        msg: 'create offer error',
    },
    SERVER_MEDIA_DESC_TIMEOUT: {
        code: 2003000009,
        msg: 'wating server mediaDesc timeout',
    },
    SET_REMOTE_DESC_ERROR: {
        code: 2003000010,
        msg: 'other side offer error',
    },
    CREATE_ANSWER_ERROR: {
        code: 2003000011,
        msg: 'create offer error',
    },
    SET_LOCAL_DESC_ERROR: {
        code: 2003000012,
        msg: 'setLocalDescription error',
    },
    SEND_MEDIA_DESC_TIMEOUT: {
        code: 2003000013,
        msg: 'send mediaDesc timeout',
    },
    SEND_CANDIDATE_ERROR: {
        code: 2003000014,
        msg: 'send candidate error',
    },
    SEND_CANDIDATE_TIMEOUT: {
        code: 2003000015,
        msg: 'send candidate timeout',
    },
    SERVER_CANDIDATE_TIMEOUT: {
        code: 2003000016,
        msg: 'waiting candidate timeout',
    },
    SERVER_CANDIDATE_ERROR: {
        code: 2003000017,
        msg: 'recv candidate error',
    },
    MEDIA_CONNECTION_FAILED: {
        code: 2003000018,
        msg: 'ice Connection state failed',
    },
    MEDIA_CONNECTION_CLOSED: {
        code: 2003000019,
        msg: 'ice connection state closed',
    },
    SESSION_CLOSED: {
        code: 2003000020,
        msg: 'server session closed',
    },
    WEBSOCKET_ERROR: {
        code: 2003000021,
        msg: 'network error',
    },
    MEDIA_CONNECTION_DISCONNECTED: {
        code: 2002000022,
        msg: 'ice connection state disconnected',
    },
    SERVER_NEGO_TIMEOUT: {
        code: 2002000023,
        msg: 'negotiation timeout',
    },
};


/***/ }),

/***/ "./sdk/common/zego.extern.ts":
/*!***********************************!*\
  !*** ./sdk/common/zego.extern.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ENUM_PUBLISH_STATE_UPDATE = {
    start: 0,
    error: 1,
    retry: 2,
};
exports.ENUM_PLAY_STATE_UPDATE = {
    start: 0,
    error: 1,
    retry: 2,
    stop: 3,
};
exports.ENUM_RETRY_STATE = {
    didNotStart: 0,
    retrying: 1,
    finished: 2,
};
exports.REPORT_ACTION = {
    eventStart: 'eventStart',
    eventEndWithMsgInfo: 'eventEndWithMsgInfo',
    addEventMsg: 'addEventMsg',
    addEvent: 'addEvent',
    eventEnd: 'eventEnd',
    addMsgInfo: 'addMsgInfo',
};
exports.getSeq = (function () {
    var seq = 1;
    return function () {
        return seq++;
    };
})();
exports.getReportSeq = (function () {
    var seq = 1;
    return function () {
        return seq++;
    };
})();


/***/ }),

/***/ "./sdk/common/zego.externalError.ts":
/*!******************************************!*\
  !*** ./sdk/common/zego.externalError.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.internalErrList = {
    SEND_MSG_TIMEOUT: {
        code: 'Error.Timeout',
        msg: 'send customsg timeout.',
    },
};
exports.errorCodeList = {
    // commonErr
    NOT_LOGIN: {
        code: 1000002,
        msg: 'not login room',
    },
    STREAMID_TOO_LONG: {
        code: 1000014,
        msg: 'stream ID is too long',
    },
    STREAM_ID_NULL: {
        code: 1000015,
        msg: 'streamID is empty',
    },
    STREAM_ID_INVALID_CHARACTER: {
        code: 1000016,
        msg: 'stream ID contains illegal characters',
    },
    // 通用错误码
    INPUT_PARAM: {
        code: 1100001,
        msg: 'input parm error.',
    },
    TIMEOUT: {
        code: 1100002,
        msg: 'network timeout.',
    },
    // rtc 码
    INIT_SDK_WRONG: {
        code: 1101000,
        msg: 'init sdk wrong',
    },
    // roomErr
    // NONE_APP_ID: {
    //     code: 1001000,
    //     msg: 'app id can not be 0',
    // },
    // ROOM_COUNT_EXCEED: {
    //     code: 1002001,
    //     msg: 'login rooms exceeds the upper limit',
    // },
    USER_ID_NULL: {
        code: 1002005,
        msg: 'user ID is empty',
    },
    USER_ID_INVALID_CHARACTER: {
        code: 1002006,
        msg: 'user ID contains illegal characters',
    },
    USER_ID_TOO_LONG: {
        code: 1002007,
        msg: 'user ID is too long',
    },
    USER_NAME_NULL: {
        code: 1002008,
        msg: 'username is empty',
    },
    // USER_NAME_INVALID_CHARACTER: {
    //     code: 1002009,
    //     msg: 'username contains illegal characters',
    // },
    USER_NAME_TOO_LONG: {
        code: 1002010,
        msg: 'username is too long',
    },
    ROOM_ID_NULL: {
        code: 1002011,
        msg: 'room ID is empty',
    },
    ROOM_ID_INVALID_CHARACTER: {
        code: 1002012,
        msg: 'room ID contains illegal characters',
    },
    ROOM_ID_TOO_LONG: {
        code: 1002013,
        msg: 'room ID is too long',
    },
    LOGIN_TIMEOUT: {
        code: 1002031,
        msg: 'login timeout',
    },
    ROOM_MAX_USER_COUNT: {
        code: 1002034,
        msg: 'users logging into the room exceeds the maximum number',
    },
    MULTIPLE_LOGIN_KICKOUT: {
        code: 1002050,
        msg: 'kickout may be the same user ID login other',
    },
    ROOM_RETRY_TIMEOUT: {
        code: 1002053,
        msg: 'network is broken and login fail.',
    },
    MANUAL_KICKOUT: {
        code: 1002055,
        msg: 'server has sent a signal to kick out',
    },
    ROOM_INNER_ERROR: {
        code: 1002099,
        msg: 'room internal error',
    },
    // web
    HEARTBEAT_TIMEOUT: {
        code: 1102001,
        msg: 'heartbeat timeout.',
    },
    // access_svr
    PARSE_JSON_ERROR: {
        code: 1102011,
        msg: 'parse json error.',
    },
    LOGIN_PROCESSING: {
        code: 1102012,
        msg: 'login is processing.',
    },
    LIVEROMM_REQUEST_ERROR: {
        code: 1102013,
        msg: 'liveroom request error.',
    },
    ZPUSH_REQUEST_FAIL: {
        code: 1102014,
        msg: 'zpush request fail.',
    },
    LOGIN_STATE_WRONG: {
        code: 1102015,
        msg: 'user login state is wrong.',
    },
    TOKEN_ERROR: {
        code: 1102016,
        msg: 'token error',
    },
    DIAPATCH_ERROR: {
        code: 1102017,
        msg: 'dispatch error',
    },
    TOKEN_EXPIRED: {
        code: 1102018,
        msg: 'token expired',
    },
    SUBCMD_ERROR: {
        code: 1102019,
        msg: 'subcmd error.',
    },
    ZEGO_AUTH_ERROR: {
        code: 1102020,
        msg: 'zego auth error.',
    },
    BIZ_CHANNEL_ERROR: {
        code: 1102021,
        msg: 'biz channel error.',
    },
    // ROOM_INNER_ERROR: {
    //     code: 1102099,
    //     msg: 'unknown error.',
    // },
    // publishStreamErr
    PUBLISHER_EXTRA_INFO_NULL: {
        code: 1003050,
        msg: 'extra info of publshing stream is null',
    },
    PUBLISHER_EXTRA_INFO_TOO_LONG: {
        code: 1003051,
        msg: 'stream extra info is too long',
    },
    PUBLISHER_PARAM: {
        code: 1103001,
        msg: 'input parm error',
    },
    PUBLISHER_BROWSER_NOT_SUPPORT: {
        code: 1103002,
        msg: 'browser do not support',
    },
    PUBLISHER_DISPATCH_FAIL: {
        code: 1103003,
        msg: 'dispatch request error',
    },
    PUBLISHER_SCREEN_FAILED: {
        code: 1103010,
        msg: 'screen fail',
    },
    ENUMERATE_DEVICES_FAIL: {
        code: 1103011,
        msg: 'enumerate devices fail',
    },
    PUBLISHER_DISPATCH_REQUEST_FAIL: {
        code: 1103020,
        msg: 'dispatch request fail',
    },
    PUBLISHER_SESSION_REQUEST_FAIL: {
        code: 1103021,
        msg: 'session request fail',
    },
    PUBLISHER_CREATE_OFFER_ERROR: {
        code: 1103022,
        msg: 'create offer error',
    },
    PUBLISHER_SET_LOCAL_DESC_ERROR: {
        code: 1103023,
        msg: 'setLocalDescription error',
    },
    PUBLISHER_MEDIA_DESC_ERROR: {
        code: 1103024,
        msg: 'mediaDesc error',
    },
    PUBLISHER_SET_REMOTE_DESC_ERROR: {
        code: 1103025,
        msg: 'other side offer error',
    },
    PUBLISHER_CANDIDATE_ERROR: {
        code: 1103026,
        msg: 'candidate error',
    },
    PUBLISHER_SESSION_CLOSED: {
        code: 1103027,
        msg: 'server session closed',
    },
    PUBLISHER_MEDIA_CONNECTION_ERROR: {
        code: 1103028,
        msg: 'ice connection error',
    },
    PUBLISHER_CONSTRAINTS_ERROR: {
        code: 1103029,
        msg: 'constraint error',
    },
    PUBLISHER_SERVER_NEGO_TIMEOUT: {
        code: 1103030,
        msg: 'negotiation timeout',
    },
    PUBLISH_NOT_PUBLISH: {
        code: 1103040,
        msg: 'publisher not found',
    },
    PUBLISH_DEVICE_OUT_ERR: {
        code: 1103041,
        msg: 'device change ',
    },
    PUBLISH_SCREEN_CANCELED: {
        code: 1103042,
        msg: 'screen canceled',
    },
    PUBLISH_SCREEN_NOT_SUPPORT: {
        code: 1103043,
        msg: 'screen not support',
    },
    PUBLISH_NO_PREVIEW: {
        code: 1103044,
        msg: 'stream is not from zego',
    },
    VIDEO_DEVICE_FALSE: {
        code: 1103045,
        msg: 'video is false',
    },
    AUDIO_DEVICE_FALSE: {
        code: 1103046,
        msg: 'audio is false',
    },
    TRACK_NOT_FOUND: {
        code: 1103047,
        msg: 'track is not found',
    },
    DEVICE_NOT_FOUND: {
        code: 1103048,
        msg: 'device is not found',
    },
    // play
    PLAYER_PARAM: {
        code: 1104001,
        msg: 'input parm error',
    },
    PLAYER_DISPATCH_REQUEST_FAIL: {
        code: 1104020,
        msg: 'dispatch request fail',
    },
    PLAYER_SESSION_REQUEST_FAIL: {
        code: 1104021,
        msg: 'session request fail',
    },
    PLAYER_CREATE_OFFER_ERROR: {
        code: 1104022,
        msg: 'create offer error',
    },
    PLAYER_SET_LOCAL_DESC_ERROR: {
        code: 1104023,
        msg: 'setLocalDescription error',
    },
    PLAYER_MEDIA_DESC_ERROR: {
        code: 1104024,
        msg: 'mediaDesc error',
    },
    PLAYER_SET_REMOTE_DESC_ERROR: {
        code: 1104025,
        msg: 'other side offer error',
    },
    PLAYER_CANDIDATE_ERROR: {
        code: 1104026,
        msg: 'candidate error',
    },
    PLAYER_SESSION_CLOSED: {
        code: 1104027,
        msg: 'server session closed',
    },
    PLAYER_MEDIA_CONNECTION_ERROR: {
        code: 1104028,
        msg: 'ice connection error',
    },
    PLAYER_SERVER_NEGO_TIMEOUT: {
        code: 1104030,
        msg: 'negotiation timeout',
    },
    // mixStreamErr
    MIXER_NO_SERVICES: {
        code: 1005000,
        msg: 'no mix stream service',
    },
    MIXER_TASK_ID_NULL: {
        code: 1005001,
        msg: 'mixer task is null',
    },
    MIXER_TASK_ID_TOO_LONG: {
        code: 1005002,
        msg: 'task ID is too long',
    },
    MIXER_TASK_ID_INVALID_CHARACTER: {
        code: 1005003,
        msg: 'task ID contains illegal characters',
    },
    MIXER_NO_OUTPUT_TARGET: {
        code: 1005005,
        msg: 'task configuration does not specify output',
    },
    MIXER_OUTPUT_TARGET_INVALID: {
        code: 1005006,
        msg: 'stream output target is incorrect',
    },
    MIXER_START_REQUEST_ERROR: {
        code: 1005010,
        msg: 'start mixer task fail, possibly due to network reasons',
    },
    MIXER_STOP_REQUEST_ERROR: {
        code: 1005011,
        msg: 'stop mixer task fail, possibly due to network reasons',
    },
    MIXER_NOT_OWNER_STOPMIXER: {
        code: 1005012,
        msg: ' maxed task must be stopped by the start user of the task',
    },
    MIXER_INPUTLIST_NULL: {
        code: 1005020,
        msg: 'Mixed stream task input list is null',
    },
    MIXER_OUTPUTLIST_NULL: {
        code: 1005021,
        msg: 'Mixed stream task output list is null',
    },
    MIXER_VIDEO_CONFIG_INVALID: {
        code: 1005023,
        msg: 'invalid mixed stream task video configuration',
    },
    MIXER_EXCEED_MAX_INPUT_COUNT: {
        code: 1005025,
        msg: 'more than the maximum number of input streams',
    },
    MIXER_INPUT_STREAM_NOT_EXISTS: {
        code: 1005026,
        msg: 'Input stream does not exist',
    },
    MIXER_INPUT_PARAMETERS_ERROR: {
        code: 1005027,
        msg: 'stream input parameters are wrong',
    },
    MIXER_EXCEED_MAX_OUTPUT_COUNT: {
        code: 1005030,
        msg: 'more than the maximum number of output streams',
    },
    MIXER_AUTHENTICATION_FAILED: {
        code: 1005050,
        msg: 'mixed stream authentication failed',
    },
    MIXER_WATERMARK_NULL: {
        code: 1005061,
        mag: 'input watermark is null',
    },
    MIXER_WATERMARK_PARAMETERS_ERROR: {
        code: 1005062,
        msg: 'input watermark parameter is wrong',
    },
    MIXER_WATERMARK_URL_INVALID: {
        code: 1005063,
        msg: 'illegal input watermark URL',
    },
    MIXER_BACKGROUND_IMAGE_URL_INVALID: {
        code: 1005067,
        msg: 'illegal input background image URL',
    },
    MIXER_INNER_ERROR: {
        code: 1005099,
        msg: 'mixed stream internal error',
    },
    DEVICE_ERROR_TYPE_UNPLUGGED: {
        code: 1006006,
        msg: 'the device is unplugged',
    },
    // imErr
    IM_CONTENT_NULL: {
        code: 1009001,
        msg: 'message content is empty',
    },
    IM_CONTENT_TOO_LONG: {
        code: 1009002,
        msg: 'message content is too long',
    },
    IM_SEND_FAILED: {
        code: 1009010,
        msg: 'failed to send message',
    },
    // web
    FREQ_LIMITED: {
        code: 1109001,
        msg: 'frequency limited.',
    },
};
exports.exterErrorCodeMap = {
    2002000001: 'PUBLISHER_PARAM',
    2002000002: 'PUBLISHER_BROWSER_NOT_SUPPORT',
    // 获取媒体节点地址失败
    2002000003: 'PUBLISHER_DISPATCH_REQUEST_FAIL',
    2002000004: 'PUBLISHER_DISPATCH_REQUEST_FAIL',
    // 媒体节点连接失败
    2002000005: 'TOKEN_ERROR',
    // session 连接失败
    2002000006: 'PUBLISHER_SESSION_REQUEST_FAIL',
    2002000007: 'PUBLISHER_SESSION_REQUEST_FAIL',
    //
    2002000008: 'PUBLISHER_CREATE_OFFER_ERROR',
    2002000009: 'PUBLISHER_SET_LOCAL_DESC_ERROR',
    //
    2002000010: 'PUBLISHER_MEDIA_DESC_ERROR',
    2002000011: 'PUBLISHER_MEDIA_DESC_ERROR',
    //
    2002000012: 'PUBLISHER_SET_REMOTE_DESC_ERROR',
    2002000013: 'PUBLISHER_SET_REMOTE_DESC_ERROR',
    2002000014: 'PUBLISHER_CANDIDATE_ERROR',
    2002000015: 'PUBLISHER_CANDIDATE_ERROR',
    2002000016: 'PUBLISHER_CANDIDATE_ERROR',
    2002000017: 'PUBLISHER_SESSION_CLOSED',
    2002000018: 'PUBLISHER_MEDIA_CONNECTION_ERROR',
    2002000019: 'PUBLISHER_MEDIA_CONNECTION_ERROR',
    2002000020: 'PUBLISHER_MEDIA_CONNECTION_ERROR',
    2002000022: 'PUBLISHER_MEDIA_CONNECTION_ERROR',
    2002000021: 'PUBLISHER_CONSTRAINTS_ERROR',
    2002000023: 'PUBLISHER_SERVER_NEGO_TIMEOUT',
    2003000001: 'PLAYER_PARAM',
    2003000003: 'PLAYER_DISPATCH_REQUEST_FAIL',
    2003000004: 'PLAYER_DISPATCH_REQUEST_FAIL',
    2003000005: 'TOKEN_ERROR',
    2003000006: 'PLAYER_SESSION_REQUEST_FAIL',
    2003000007: 'PLAYER_SESSION_REQUEST_FAIL',
    2003000009: 'PLAYER_MEDIA_DESC_ERROR',
    2003000010: 'PLAYER_SET_REMOTE_DESC_ERROR',
    2003000008: 'PLAYER_CREATE_OFFER_ERROR',
    2003000011: 'PLAYER_CREATE_OFFER_ERROR',
    2003000012: 'PLAYER_SET_LOCAL_DESC_ERROR',
    2003000014: 'PLAYER_CANDIDATE_ERROR',
    2003000015: 'PLAYER_CANDIDATE_ERROR',
    2003000016: 'PLAYER_CANDIDATE_ERROR',
    2003000017: 'PLAYER_CANDIDATE_ERROR',
    2003000020: 'PLAYER_SESSION_CLOSED',
    2003000018: 'PLAYER_MEDIA_CONNECTION_ERROR',
    2003000019: 'PLAYER_MEDIA_CONNECTION_ERROR',
    2003000022: 'PLAYER_MEDIA_CONNECTION_ERROR',
    2003000021: 'PLAYER_MEDIA_CONNECTION_ERROR',
    2003000023: 'PLAYER_SERVER_NEGO_TIMEOUT',
};


/***/ }),

/***/ "./sdk/common/zego.logevent.ts":
/*!*************************************!*\
  !*** ./sdk/common/zego.logevent.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//
exports.eventList = {
    kZegoTaskInitSetting: '/sdk/init',
    kZegoTaskLoginRoom: '/sdk/login',
    kZegoTaskLogoutRoom: '/sdk/logout',
    kZegoTaskReLoginRoom: '/sdk/relogin',
    kZegoTaskSdkDisconnect: '/sdk/disconnect',
    kZegoTaskKickout: '/sdk/kickout',
    kZegoTaskSessionClose: '/sdk/session_close',
    kZegoTaskLiveRoomhHB: '/liveroom/hb',
    kZegoTaskLiveSendRoomBigIM: '/liveroom/send_big_room_message',
    kZegoTaskLiveGetRoomBigIM: '/liveroom/get_big_room_message',
    // kZegoTaskLiveRoomGetCurrentUserList: '/liveroom/get_current_user_list',
    kZegoTaskLiveRoomGetUserUpdateInfo: '/liveroom/get_user_update_info',
    kZegoTaskLiveRoomGetRoomMessage: '/liveroom/get_room_message',
    kZegoTaskLiveRoomSendRoomMessage: '/liveroom/send_room_message',
    kZegoTaskLiveRoomSendCustomCommand: '/liveroom/send_custom_command',
    kZegoTaskLiveRoomGetCustomCommand: '/liveroom/get_custom_command',
    // kZegoTaskLiveRoomSendEndJoinLive: '/liveroom/send_end_join_live',
    // kZegoTaskLiveRoomSendInviteJoinLive: '/liveroom/send_invite_join_live',
    // kZegoTaskLiveRoomSendJoinLiveResult: '/liveroom/send_join_live_result',
    // kZegoTaskLiveRoomSendRequestJoinLive: '/liveroom/send_request_join_live',
    kZegoTaskLiveRoomSendStreamExtraInfo: '/liveroom/send_stream_extra_info',
    kZegoTaskLiveRoomGetStreamExtraInfo: '/liveroom/get_stream_extra_info',
    // kZegoTaskLiveRoomSendStreamUpdateInfo: '/liveroom/send_stream_update_info',
    kZegoTaskLiveRoomGetStreamUpdateInfo: '/liveroom/get_stream_update_info',
    // kZegoTaskLiveRoomGetCurrentStreamList: '/liveroom/get_current_stream_list',
    // kZegoTaskLiveRoomGetReliableMessage: '/liveroom/get_reliable_message',
    // kZegoTaskLiveRoomSendReliableMessage: '/liveroom/send_reliable_message',
    kZegoTaskPublishStart: '/sdk/start_publish',
    kZegoTaskRePublish: '/sdk/republish',
    kZegoTaskPublishStop: '/sdk/stop_publish',
    // kZegoTaskRtcPublishStateUpdate: '/rtc/publish_stat_report', ///< 推流质量更新
    // kZegoTaskCdnPublishStateUpdate: '/cdn/publish_stat_report', ///< 推流质量更新
    kZegoTaskPlayStart: '/sdk/start_play',
    kZegoTaskRePlay: '/sdk/replay',
    kZegoTaskPlayStop: '/sdk/stop_play',
    // kZegoTaskDispatch: '/rtc/dispatch', ///< Dispatch
    kZegoTaskMixStart: '/mix/start_mix',
    kZegoTaskMixStop: '/mix/stop_mix',
    kZegoTaskMixConfig: '/mix/config_mix',
    kZegoTaskEnumDevices: '/sdk/enum_devices',
    kZegoTaskSetDebug: '/sdk/set_debug',
    kZegoTaskSetLog: '/sdk/set_log_config',
    kZegoTaskUseVideoDevice: '/sdk/use_video_device',
    kZegoTaskUseAudioDevice: '/sdk/use_audio_device',
    kZegoTaskCheckSystemRequirements: '/sdk/check_system',
    kZegoTaskMutePublishVideo: '/sdk/mute_publish_video',
    kZegoTaskMutePublishAudio: '/sdk/mute_publish_audio',
    kZegoTaskRemoteCameraUpdate: '/sdk/remote_camera_update',
    kZegoTaskRemoteMicUpdate: '/sdk/remote_mic_update',
    kZegoTaskGetSoundLevel: '/sdk/get_sound_level',
    kZegoTaskStopSoundLevel: '/sdk/stop_sound_level',
    kZegoTaskAddPublishCdnUrl: '/sdk/add_publish_cdn_url',
    kZegoTaskRemovePublishCdnUrl: '/sdk/remove_publish_cdn_url',
    kZegoTaskClearPublishCdnUrl: '/sdk/clear_publish_cdn_url',
    kZegoTaskCreateStream: '/sdk/create_stream',
    kZegoTaskDestroyStream: '/sdk/destroy_stream',
    kZegoTaskScreenSharingEnded: '/sdk/screen_share_end',
    kZegoTaskVideoDeviceChanged: '/sdk/video_device_state_changed',
    kZegoTaskAudioDeviceChanged: '/sdk/audio_device_state_changed',
    kZegoTaskDeviceError: '/sdk/device_error',
    kZegoEventPublishStat: '/sdk/publish_stat_report',
    kZegoEventPlayStat: '/sdk/play_stat_report',
    kZegoSetPublishConstraints: '/sdk/set_publish_stream_constraints',
};
exports.errorList = {
    kOK: 0,
    kEnd: 1,
    kNoneAppIdError: 10000101,
    kNotLoginError: {
        code: 10000105,
        message: 'sdk error, not login room',
    },
    kPublishBadNameError: 10000106,
    kInvalidParamError: {
        code: 10001001,
        message: 'sdk error, invalid param.',
    },
    kInvalidChannelError: 10001002,
    kNullPointerError: 10001003,
    kInvalidUserIDError: 10001004,
    kInvalidRoomIDError: 10001005,
    kNoFreeChannelError: 10001101,
    kFormatUrlError: 10001102,
    kInvalidExtraUrlError: 10001103,
    kNoPushIpError: 10001104,
    kUnmatchStreamIDError: 10002001,
    kUnmatchSeqError: {
        code: 10002002,
        message: 'sdk error, unmatch seq',
    },
    kNoneSeqError: 10002003,
    kUnmatchStateError: 10002004,
    kRedirectError: 10003001,
    kOutOfMemeryError: 10004001,
    kStartThreadError: 10004002,
    kStartRequestError: 10005001,
    kStartUpdateStreamInfoError: 10006001,
    kNoMultiRoomLoginRole: 10007001,
    kMultiRoomIDMappingOther: 10007002,
    kNetWorkProbeNoUrl: 10007003,
    kNetWorkProbeStopPublish: 10007004,
    kNetWorkProbeStopPlay: 10007005,
    kFetalError1: 10007101,
    kFetalError2: 10007102,
    kFetalError3: 10007103,
    kFetalError4: 10007104,
    kFetalError5: 10007105,
    kFetalError6: 10007106,
    kFetalError7: 10007107,
    kSDKNoMoudleFunction: 10008001,
    kDeviceError: 10009001,
    kNetworkNotConnectError: 11000101,
    kNetworkDnsResolveError: 11000404,
    kEngineCreateError: 12101001,
    kEngineStatusError: 12101002,
    kEngineStartError: 12101003,
    kDeniedMaxRetryError: 12101004,
    kDeniedDisableSwitchLineError: 12101005,
    kEngineNoPlayDataError: 12102001,
    kEngineNoPublishDataError: 12102002,
    kEngineUnknownError: 12200000,
    kEngineConnectServerError: 12200001,
    kEngineRtmpHandshakeError: 12200002,
    kEngineRtmpAppConnectError: 12200003,
    kEngineRtmpCreateStreamError: 12200004,
    kEngineRtmpPublishBadNameError: 12200005,
    kEngineServerDisconnectError: 12200006,
    kEngineRtpConnectServerError: 12200100,
    kEngineRtpHelloTimeoutError: 12200101,
    kEngineRtpCreateSessionTimeoutError: 12200102,
    kEngineRtpCreateSessionFailError: 12200103,
    kEngineRtpPlayOrPublishTimeoutError: 12200104,
    kEngineRtpPlayOrPublishDeniedError: 12200105,
    kEngineRtpTimeoutError: 12200106,
    kEngineRtpDecryptError: 12200107,
    kEngineRtpDecryptNotSupport: 12200108,
    kEngineRtpSockError: 12200109,
    kEngineHttpFlvProtocolError: 12200200,
    kEngineHttpFlvHttpCodeError: 12200201,
    kEngineHttpFlvParseFlvError: 12200202,
    kEngineHttpFlvServerDisconnectError: 12200203,
    kEngineHttpFlvRedirectError: 12200204,
    kPlayStreamNotExistError: 12301004,
    kMediaServerForbidError: 12301011,
    kMediaServerPublishBadNameError: 12301012,
    kMediaServerStopPublishError: 12301014,
    kConfigDecryptError: 20000001,
    kConfigOfflineError: 20000002,
    kConfigDomainError: 20000003,
    kConfigMediaNetworkNoneError: 20000004,
    kConfigMediaNetworkNoUrlError: 20000005,
    kConfigServerCouldntConnectError: 21200007,
    kConfigServerTimeoutError: 21200028,
    kConfigServerSslCaCertError: 21200060,
    kDispatchServerInvalidError: 30000001,
    kDispatchNoIpError: 30000404,
    kDispatchServerCouldntConnectError: 31200007,
    kDispatchServerTimeoutError: 31200028,
    kDispatchServerSslCaCertError: 31200060,
    kDispatchNotChangedError: 32000001,
    kDispatchEmptyPublishIpsError: 32001002,
    kDispatchEmptyPlayIpsError: 32001003,
    kDispatchStreamNotExistError: 32001004,
    kDispatchAgentTimeoutError: 35500001,
    kDispatchAgentDroppedError: 35500002,
    kLogicServerNoUrlError: 40000404,
    kLogicServerNoIpError: 40000405,
    kLogicServerNoStreamInfoError: 40000406,
    kLogicServerFetalError1: 40700001,
    kLogicServerCouldntConnectError: 41200007,
    kLogicServerTimeoutError: 41200028,
    kLogicServerSslCaCertError: 41200060,
    kLoginAgentTimeoutError: 45500001,
    kLoginAgentDroppedError: 45500002,
    kLiveRoomRequestParamError: 50001001,
    kLiveRoomHBTimeoutError: {
        code: 50001002,
        message: 'liveroom error, hb timeout',
    },
    kLiveRoomNoPushServerAddrError: 50001003,
    kLiveRoomNoPushCryptoKeyError: 50001004,
    kLiveRoomNoPushTokenError: 50001005,
    kLiveRoomAutoRetryMaxTimeOut: 50001006,
    kLiveRoomRetryRightNow: 50001009,
    kLiveRoomWaitNetOKWillRetry: 50001010,
    kLiveRoomLogoutWhenLogining: 50001011,
    kLiveRoomLogoutUserCancel: 50001012,
    kLiveRoomHBErrorNoResp: 50001050,
    kLiveRoomHBErrorByHttpTiemout: 50001051,
    kLiveRoomReliableMessageParseBufError: 50001200,
    kLiveRoomReliableMessageTransChannelError: 50001201,
    kLiveRoomReliableUserMessageBufEmpty: 50001202,
    kLiveRoomReliableUserMessageParseBufError: 50001203,
    kLiveRoomGetUserListParseBufError: 50001204,
    kLiveRoomHttpNullPtrError: 50001205,
    kLiveRoomMultiZPushSessionIDNotMatchError: 50005021,
    kLiveRoomMultiLimitRoomCountError: 50005022,
    kLiveRoomCouldntConnectError: 51200007,
    kLiveRoomTimeoutError: 51200028,
    kLiveRoomSslCaCertError: 51200060,
    kLiveRoomInvalidRspError: 51400003,
    // liveroom 服务端错误码
    kLiveRoomInputParamsError: 52000002,
    kLiveRoomRoomAuthError: 52000101,
    kLiveRoomRoomNotExistError: 52000104,
    kLiveRoomUserNotExistError: 52000105,
    kLiveRoomSetStreamInfoError: 52000123,
    kLiveRoomStreamInfoNotExist: 52000138,
    kLiveRoomSessionError: 52000141,
    kLiveRoomQpsLimitError: 52000201,
    kLiveRoomLuaSessionError: 52001001,
    kLiveRoomAddUserError: 52001002,
    kLiveRoomDelUserError: 52001003,
    kLiveRoomAddTransError: 52001009,
    kLiveRoomMaxUserCountError: 52001105,
    kLiveRoomPublishBadNameError: 52001012,
    kLiveRoomRequiredReloginError: 52002001,
    kLiveRoomThirdTokenAuthError: 52002002,
    kLiveRoomNetBrokenTimeoutError: 52002003,
    kLiveRoomAgentTimeoutError: 55500001,
    kLiveRoomAgentDroppedError: 55500002,
    kRoomConnectError: 60001001,
    kRoomDoHandShakeReqError: 60001002,
    kRoomDoLoginReqError: 60001003,
    kRoomTimeoutError: 60001004,
    kRoomHbTimeoutError: 60001005,
    kRoomStartConnectError: 60001006,
    kRoomReconnectFailError: 60001008,
    kRoomLoginZPushNoCryptoKey: 60001009,
    kRoomLoginCheckMD5Fail: 60001010,
    kRoomRetryIPOver: 60001011,
    kRoomRetryActiveIPError: 60001012,
    kRoomSendLoginNoZPushRsp: 60001013,
    kRoomDoSendLoginMultiRoomReqError: 60001014,
    kRoomZPushTcpClosed: 60001015,
    kRoomConnectErrorQuic: 60001016,
    kRoomInvalidSocketError: 60002001,
    kRoomInvalidRspError: 60003001,
    kRoomDecodeSignError: 62001001,
    kRoomDecodeLoginError: 62001002,
    kRoomReplayAttacksError: 62002001,
    kRoomThirdTokenAuthError: 62002002,
    kRoomLoginCreateUserError: 62010001,
    kRoomLoginSameCreateUserError: 62010002,
    kRoomStatusTimeoutError: 62010005,
    kRoomStatusRspError: 62010006,
    kRoomDispatchTokenBuildError: 62030011,
    kRoomDispatchTokenDecodeError: 62030012,
    kRoomDispatchTokenInvalidError: 62030013,
    kRoomDispatchTokenExpiredError: 62030014,
    kRoomMultipleLoginKickoutError: {
        code: 63000001,
        message: 'zpush multiple login kickout',
    },
    kRoomManualKickoutError: {
        code: 63000002,
        message: 'zpush manual kickout',
    },
    kRoomSessionErrorKickoutError: {
        code: 63000003,
        message: 'zpush room session error',
    },
    kRoomDispatchError: 64000001,
    kRoomDispatchResultNotMatch: 64000002,
    kRoomNoDispatchToken: 64000003,
    kRoomSdkZpushError: 65000001,
    //混流错误码定义
    kMixStreamNoneMixConfigError: 80000001,
    kMixStreamCouldntConnectError: 81200007,
    kMixStreamTimeoutError: 81200028,
    kMixStreamSslCaCertError: 81200060,
    // 服务端返回码
    kMixStreamFailError: {
        code: 82000001,
        message: 'failure',
    },
    kMixStreamInputError: {
        code: 82000002,
        message: 'input params error',
    },
    kMixStreamAuthError: {
        code: 82000003,
        message: 'Auth Failure',
    },
    kMixStreamNotExistError: {
        code: 82000150,
        message: 'mix stream not exist',
    },
    kMixStreamStartMixError: {
        code: 82000151,
        message: 'mix stream fail',
    },
    kMixStreamStopMixError: {
        code: 82000152,
        message: 'unmix stream fail',
    },
    kMixStreamInputFormatError: {
        code: 82000155,
        message: 'mix stream input format error',
    },
    kMixStreamOutputFormatError: {
        code: 82000156,
        message: 'mix stream output format error',
    },
    kMixStreamNotOpenError: {
        code: 82000157,
        message: 'mix not open',
    },
    kMixStreamInputExceedError: {
        code: 82000158,
        message: 'mix stream input exceed',
    },
    kMixStreamDispatchError: {
        code: 82000159,
        message: 'mix_dispatch fail',
    },
    kMixStreamStopMixOwnerError: {
        code: 82000160,
        message: 'unmix owner fail',
    },
    kMixStreamWaterMarkParamError: {
        code: 82000170,
        message: 'water mark params error',
    },
    kMixStreamWaterMarkImageError: {
        code: 82000171,
        message: 'water mark image empty',
    },
    kMixStreamQpsOverloadError: {
        code: 82000190,
        message: 'mix_start qps overload',
    },
    kMixStreamAgentTimeoutError: 85500001,
    kMixStreamAgentDroppedError: 85500002,
    // 客户端错误
    // 200110XXXX: commonError
    kInitSdkError: {
        code: 2001100001,
        message: 'login but init sdk wrong',
    },
    kScreenSharingFail: {
        code: 2001100002,
        message: 'screen share fail',
    },
    kEnumerateDevicesFail: {
        code: 2001100003,
        message: 'enumerate devices fail',
    },
    kMixVideocError: {
        code: 2001100004,
        message: 'mix video code type wrong',
    },
    kWxGetSettingFail: {
        code: 2001100005,
        message: 'wx getsetting fail',
    },
    kDevicesDetectError: {
        code: 2001100006,
        message: 'devices detect error',
    },
    kVideoCodecDetectError: {
        code: 2001100007,
        message: 'videoCodec detect error',
    },
    kMixStopFail: {
        code: 2001100008,
        message: 'stop mix stream fail',
    },
    // 200111XXXX: liveRoomError
    kLoginTimeoutError: {
        code: 2001110001,
        message: 'login timeout',
    },
    kSendMsgTimeout: {
        code: 2001110002,
        message: 'send customsg timeout.',
    },
    kLiveRoomDisconnect: {
        code: 2001110003,
        message: 'network is broken and login fail.',
    },
    kMsgFrequencyLimited: {
        code: 2001110004,
        message: 'send msg freq error',
    },
    kLiveRoomNotLoginError: {
        code: 2001110005,
        message: 'liveroom not login',
    },
    kLiveRoomMessageParseError: {
        code: 2001110006,
        message: 'message parse error',
    },
    kLiveRoomMessageNoneError: {
        code: 2001110007,
        message: 'message none error',
    },
    // 200112XXXX: publishError、playError
    kBrowserNotSupport: {
        code: 2001120001,
        message: 'browser do not support',
    },
    kHttpsRequired: {
        code: 2001120002,
        message: 'https or localhost required',
    },
    kDispatchError: {
        code: 2001120003,
        message: 'dispatch request error',
    },
    kDispatchTimeout: {
        code: 2001120004,
        message: 'dispatch request timeout',
    },
    kTokenError: {
        code: 2001120005,
        message: 'login token error',
    },
    kSendSessionTimeout: {
        code: 2001120006,
        message: 'send session request timeout',
    },
    kCreateSessionError: {
        code: 2001120007,
        message: 'create session error',
    },
    kCreateOfferError: {
        code: 2001120008,
        message: 'create offer error',
    },
    kSetLocalDescError: {
        code: 2001120009,
        message: 'setLocalDescription error',
    },
    kSendMediaDescTimeout: {
        code: 2001120010,
        message: 'send mediaDesc timeout',
    },
    kServerMediaDescTimeout: {
        code: 2001120011,
        message: 'waiting server mediaDesc timeout',
    },
    kServerMediaDescError: {
        code: 2001120012,
        message: 'server mediaDesc type error',
    },
    kSetRemoteDescError: {
        code: 2001120013,
        message: 'other side offer error',
    },
    kSendCandidateTimeout: {
        code: 2001120014,
        message: 'sendIceCandidate error',
    },
    kServerCandidateTimeout: {
        code: 2001120015,
        message: 'waiting candidate timeout',
    },
    kServerCandidateError: {
        code: 2001120016,
        message: 'recv candidate error',
    },
    kSessionClosed: {
        code: 2001120017,
        message: 'server session closed',
    },
    kMediaConnectionFailed: {
        code: 2001120018,
        message: 'Iice Connection state failed',
    },
    kMediaConnectionClosed: {
        code: 2001120019,
        message: 'ice connection state closed',
    },
    kWebsocketError: {
        code: 2001120020,
        message: 'network error',
    },
    kConstraintError: {
        code: 2001120021,
        message: 'constraint error',
    },
    kMediaConnectionDisconnected: {
        code: 2001120022,
        message: 'ice connection state disconnected',
    },
    kServerNegoTimeout: {
        code: 2001120023,
        message: 'negotiation timeout',
    },
    kLocalStreamError: {
        code: 2001120024,
        message: 'local stream error',
    },
    kPublishConstraintsNotSupport: {
        code: 2001120025,
        message: 'publish constraints is not supported',
    },
    kGetSoundLevelError: {
        code: 2001120026,
        message: 'get sound level error',
    },
    kPublishStreamNotFound: {
        code: 2001120027,
        message: 'publish stream not found',
    },
    kPublisherRepeatError: {
        code: 2001120028,
        message: 'publisher already exist, publish repeat',
    },
    kPlayerRepeatError: {
        code: 2001120029,
        message: 'player already exist, play repeat',
    },
    kStopWhenPublishing: {
        code: 2001120030,
        message: 'stop publish when publishing error',
    },
    kStopWhenPlaying: {
        code: 2001120031,
        message: 'stop play when playing error',
    },
    kPublishRetryFail: {
        code: 2001120032,
        message: 'publish retry fail',
    },
    kPlayRetryFail: {
        code: 2001120033,
        message: 'play retry fail',
    },
    kUrlsNone: {
        code: 2001120034,
        message: 'url none',
    },
    kIsPublishing: {
        code: 2001120035,
        message: 'stream is publishing',
    },
    kIsPlaying: {
        code: 2001120035,
        message: 'stream is pulling',
    },
    kDecodeAudioDataFail: {
        code: 2001120036,
        message: 'decode audio fail',
    },
    kNoPreviewBeforePublish: {
        code: 2001120037,
        message: 'stream is not created by zego',
    },
    kDeviceChangeError: {
        code: 2001130038,
        message: 'publish error by device change',
    },
    kNoVideo: {
        code: 2001130039,
        message: 'video is false',
    },
    kNoAudio: {
        code: 2001130040,
        message: 'audio is false',
    },
    kTrackNotFound: {
        code: 2001130041,
        message: 'track not found',
    },
};
exports.codeErrMap = {
    1101000: 'kInitSdkError',
    1100001: 'kInvalidParamError',
    1103001: 'kInvalidParamError',
    1104001: 'kInvalidParamError',
    1000014: 'kInvalidParamError',
    1000015: 'kInvalidParamError',
    1000016: 'kInvalidParamError',
    1101001: 'kInvalidParamError',
    1002005: 'kInvalidParamError',
    1002006: 'kInvalidParamError',
    1002007: 'kInvalidParamError',
    1002008: 'kInvalidParamError',
    1002009: 'kInvalidParamError',
    1002010: 'kInvalidParamError',
    1002011: 'kInvalidParamError',
    1002012: 'kInvalidParamError',
    1002013: 'kInvalidParamError',
    1103010: 'kScreenSharingFail',
    1103011: 'kEnumerateDevicesFail',
    1103029: 'kConstraintError',
    1103040: 'kPublishStreamNotFound',
    1103041: 'kDeviceChangeError',
    1103044: 'kNoPreviewBeforePublish',
    1103045: 'kNoVideo',
    1103046: 'kNoAudio',
    1103047: 'kTrackNotFound',
    1000002: 'kNotLoginError',
    1005001: 'kInvalidParamError',
    1005002: 'kInvalidParamError',
    1005003: 'kInvalidParamError',
    1005005: 'kInvalidParamError',
    1005006: 'kInvalidParamError',
    1005020: 'kInvalidParamError',
    1005021: 'kInvalidParamError',
    1005067: 'kInvalidParamError',
    1005011: 'kMixStopFail',
    1005023: 'kMixVideocError',
    1102001: 'kLiveRoomHBTimeoutError',
    1002031: 'kLoginTimeoutError',
    1002053: 'kLiveRoomDisconnect',
    1109001: 'kMsgFrequencyLimited',
    // 保留
    // 2000000002: 'kInvalidParamError',
    2002000001: 'kInvalidParamError',
    2002000002: 'kBrowserNotSupport',
    2002000003: 'kDispatchError',
    2002000004: 'kDispatchTimeout',
    2002000005: 'kTokenError',
    2002000006: 'kSendSessionTimeout',
    2002000007: 'kCreateSessionError',
    2002000008: 'kCreateOfferError',
    2002000009: 'kSetLocalDescError',
    2002000010: 'kSendMediaDescTimeout',
    2002000011: 'kServerMediaDescTimeout',
    2002000012: 'kServerMediaDescError',
    2002000013: 'kSetRemoteDescError',
    2002000014: 'kSendCandidateTimeout',
    2002000015: 'kServerCandidateTimeout',
    2002000016: 'kServerCandidateError',
    2002000017: 'kSessionClosed',
    2002000018: 'kMediaConnectionFailed',
    2002000019: 'kMediaConnectionClosed',
    2002000020: 'kWebsocketError',
    2002000021: 'kConstraintError',
    2002000022: 'kMediaConnectionDisconnected',
    2002000023: 'kServerNegoTimeout',
    2003000003: 'kDispatchError',
    2003000004: 'kDispatchTimeout',
    2003000005: 'kTokenError',
    2003000006: 'kSendSessionTimeout',
    2003000007: 'kCreateSessionError',
    2003000008: 'kCreateOfferError',
    2003000009: 'kSetLocalDescError',
    2003000010: 'kSendMediaDescTimeout',
    2003000011: 'kServerMediaDescTimeout',
    2003000012: 'kServerMediaDescError',
    2003000013: 'kSetRemoteDescError',
    2003000014: 'kSendCandidateTimeout',
    2003000015: 'kServerCandidateTimeout',
    2003000016: 'kServerCandidateError',
    2003000017: 'kSessionClosed',
    2003000018: 'kMediaConnectionFailed',
    2003000019: 'kMediaConnectionClosed',
    2003000020: 'kWebsocketError',
    2003000021: 'kConstraintError',
    2003000022: 'kMediaConnectionDisconnected',
    2003000023: 'kServerNegoTimeout',
};


/***/ }),

/***/ "./sdk/common/zego.logger.ts":
/*!***********************************!*\
  !*** ./sdk/common/zego.logger.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ./zego.entity */ "./sdk/common/zego.entity.ts");
exports.D = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];
var Logger = /** @class */ (function () {
    function Logger(stateCenter) {
        this.logLevel = zego_entity_1.ENUM_LOG_LEVEL.info;
        this.logRemoteLevel = 0;
        this.logUploadTimer = null;
        this.logUploadInterval = 1000 * 10;
        this.logCache = [];
        this.logCacheSend = [];
        this.logCacheMax = 100;
        this.existUserID = false;
        this.stateCenter = stateCenter;
    }
    Logger.prototype.setLogLevel = function (logLevel) {
        if (this.logLevel < zego_entity_1.ENUM_LOG_LEVEL.debug || this.logLevel > zego_entity_1.ENUM_LOG_LEVEL.report) {
            this.logLevel = zego_entity_1.ENUM_LOG_LEVEL.disable;
        }
        else {
            this.logLevel = logLevel;
        }
    };
    Logger.prototype.setRemoteLogLevel = function (logLevel) {
        if (this.logRemoteLevel < zego_entity_1.ENUM_LOG_LEVEL.debug || this.logRemoteLevel > zego_entity_1.ENUM_LOG_LEVEL.report) {
            this.logRemoteLevel = zego_entity_1.ENUM_LOG_LEVEL.disable;
        }
        else {
            this.logRemoteLevel = logLevel;
        }
    };
    Logger.prototype.setSessionInfo = function (appid, roomid, sessionid, userid, userName, version) {
        this.appid = appid;
        this.roomid = roomid;
        this.sessionid = sessionid;
        this.userid = userid;
        this.userName = userName;
        this.version = version;
    };
    Logger.prototype.openLogServer = function (url) {
        try {
            if (url.startsWith('wss:')) {
                this.logType = zego_entity_1.ENUM_REMOTE_TYPE.websocket;
                this.openWebSocketLogServer(url);
            }
            else if (url.startsWith('https:')) {
                this.logType = zego_entity_1.ENUM_REMOTE_TYPE.https;
                this.openHttpsLogServer(url);
            }
            else {
                this.logType = zego_entity_1.ENUM_REMOTE_TYPE.disable;
            }
        }
        catch (e) {
            this.error(JSON.stringify(e));
        }
    };
    Logger.prototype.stopLogServer = function () {
        if (this.logType == zego_entity_1.ENUM_REMOTE_TYPE.websocket) {
            this.stopWebSocketServer();
        }
        else if (this.logType == zego_entity_1.ENUM_REMOTE_TYPE.https) {
            //send last data
            this.SendHttpsLog();
            this.stopHttpsServer();
        }
        this.logType = zego_entity_1.ENUM_REMOTE_TYPE.disable;
    };
    Logger.prototype.stopWebSocketServer = function () {
        if (this.websocket) {
            this.websocket.onclose = null;
            this.websocket.onerror = null;
            this.websocket.close();
            this.websocket = null;
        }
    };
    Logger.prototype.openHttpsLogServer = function (url) {
        var _this = this;
        this.url = url;
        if (!url) {
            return;
        }
        this.stopHttpsServer();
        //start timer
        if (!this.logUploadTimer) {
            this.logUploadTimer = setInterval(function () {
                _this.SendHttpsLog();
            }, this.logUploadInterval);
        }
    };
    Logger.prototype.stopHttpsServer = function () {
        //stop timer
        if (this.logUploadTimer) {
            clearInterval(this.logUploadTimer);
            this.logUploadTimer = null;
        }
    };
    Logger.prototype.report = function (dataItem) {
        var log = this.logReportParamList(zego_entity_1.ENUM_LOG_LEVEL.report, dataItem);
        if (this.logLevel !== zego_entity_1.ENUM_LOG_LEVEL.disable && this.logLevel <= zego_entity_1.ENUM_LOG_LEVEL.report) {
            console.debug(log);
        }
        //report 立即上报
        this.RemoteLog(zego_entity_1.ENUM_LOG_LEVEL.report, log, true);
    };
    Logger.prototype.debug = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var log = this.logParamList(zego_entity_1.ENUM_LOG_LEVEL.debug, values.join(''));
        if (this.logLevel !== zego_entity_1.ENUM_LOG_LEVEL.disable && this.logLevel <= zego_entity_1.ENUM_LOG_LEVEL.debug) {
            console.debug(log);
        }
        this.log(zego_entity_1.ENUM_LOG_LEVEL.debug, log);
    };
    Logger.prototype.info = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var log = this.logParamList(zego_entity_1.ENUM_LOG_LEVEL.info, values.join(''));
        if (this.logLevel !== zego_entity_1.ENUM_LOG_LEVEL.disable && this.logLevel <= zego_entity_1.ENUM_LOG_LEVEL.info) {
            console.info(log);
        }
        this.log(zego_entity_1.ENUM_LOG_LEVEL.info, log);
    };
    Logger.prototype.warn = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var log = this.logParamList(zego_entity_1.ENUM_LOG_LEVEL.warn, values.join(''));
        if (this.logLevel !== zego_entity_1.ENUM_LOG_LEVEL.disable && this.logLevel <= zego_entity_1.ENUM_LOG_LEVEL.warn) {
            console.warn(log);
        }
        this.log(zego_entity_1.ENUM_LOG_LEVEL.warn, log);
    };
    Logger.prototype.error = function () {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var log = this.logParamList(zego_entity_1.ENUM_LOG_LEVEL.error, values.join(''));
        if (this.logLevel !== zego_entity_1.ENUM_LOG_LEVEL.disable && this.logLevel <= zego_entity_1.ENUM_LOG_LEVEL.error) {
            console.error(log);
            if (window) {
                this.stateCenter.debug && window.alert(values.join('').substr(values.join('').indexOf(' ') + 1, 4500));
            }
            else if (wx) {
                this.stateCenter.debug &&
                    wx.showModal({
                        title: '',
                        content: values.join('').substr(values.join('').indexOf(' ') + 1, 4500),
                    });
            }
        }
        this.log(zego_entity_1.ENUM_LOG_LEVEL.error, log);
    };
    Logger.prototype.log = function (level, log) {
        if (this.logRemoteLevel !== zego_entity_1.ENUM_LOG_LEVEL.disable && this.logRemoteLevel <= level) {
            this.RemoteLog(level, log);
        }
    };
    Logger.prototype.RemoteLog = function (level, log, force) {
        if (force === void 0) { force = false; }
        if (this.url == '') {
            return;
        }
        if (this.logType == zego_entity_1.ENUM_REMOTE_TYPE.websocket) {
            this.RemoteWebSocketLog(level, log);
        }
        else if (this.logType == zego_entity_1.ENUM_REMOTE_TYPE.https) {
            this.RemoteHttpsLog(level, log, force);
        }
        else if (this.logLevel !== zego_entity_1.ENUM_LOG_LEVEL.disable && this.logLevel <= level) {
            this.logCacheSend.push(log);
            while (this.logCacheSend.length > this.logCacheMax) {
                this.logCacheSend.shift();
            }
        }
    };
    Logger.prototype.RemoteWebSocketLog = function (level, log) {
        if (typeof log == 'string' && log.length > 4000) {
            console.info('log over maximum, ignore');
            return;
        }
        if (this.websocket == null || this.websocket.readyState == 2 || this.websocket.readyState == 3) {
            var url = this.url;
            this.url = '';
            this.openLogServer(url);
            if (this.logCacheSend.length < this.logCacheMax) {
                this.logCacheSend.push(log);
            }
        }
        else if (this.websocket.readyState == 0) {
            if (this.logCacheSend.length < this.logCacheMax) {
                this.logCacheSend.push(log);
            }
        }
        else if (this.websocket.readyState == 1) {
            if (this.logCacheSend.length > 0) {
                var logBefore = '';
                for (var i = 0; i < this.logCacheSend.length; i++) {
                    if ((logBefore + this.logCacheSend[i]).length > 4000) {
                        // console.error('logBefore.length 4000', logBefore.length, logBefore);
                        this.websocket.send(logBefore);
                        logBefore = '';
                    }
                    logBefore = logBefore + this.logCacheSend[i] + '\n';
                }
                log = logBefore + log;
                this.logCacheSend = [];
                //console.warn('logBefore length',logBefore.length,logBefore);
                this.websocket.send(log);
            }
            else {
                //console.warn('log length',log.join("\n").length,log);
                this.websocket.send(log);
            }
        }
        else {
            console.warn('wrong socket state:' + this.websocket.readyState);
            if (this.logCacheSend.length < this.logCacheMax) {
                this.logCacheSend.push(log);
            }
        }
    };
    Logger.prototype.RemoteHttpsLog = function (level, log, force) {
        this.logCacheSend.push(log);
        if (this.logCacheSend.length >= this.logCacheMax || force === true) {
            this.SendHttpsLog();
        }
    };
    Logger.prototype.logParamList = function (level, logInfo) {
        var t = new Date();
        var stringTime = t.getFullYear() + '/';
        stringTime += (exports.D[t.getMonth() + 1] || t.getMonth() + 1) + '/';
        stringTime += (exports.D[t.getDate()] || t.getDate()) + ' ';
        stringTime += (exports.D[t.getHours()] || t.getHours()) + ':';
        stringTime += (exports.D[t.getMinutes()] || t.getMinutes()) + ':';
        stringTime += exports.D[t.getSeconds()] || t.getSeconds();
        stringTime += '.' + (t.getTime() % 1000);
        //get first space from logInfo
        var action = logInfo.substr(0, logInfo.indexOf(' '));
        if (action.length == 0) {
            action = logInfo;
        }
        var content = logInfo.substr(logInfo.indexOf(' ') + 1, 4500);
        if (content.length == 0) {
            content = '';
        }
        var s = {
            time: stringTime,
            level: level,
            action: action,
            content: content,
            appid: this.appid,
            roomid: this.roomid,
            userid: this.userid,
            userName: this.userName,
            sessionid: this.sessionid,
        };
        return JSON.stringify(s);
    };
    return Logger;
}());
exports.Logger = Logger;


/***/ }),

/***/ "./sdk/common/zego.signal.ts":
/*!***********************************!*\
  !*** ./sdk/common/zego.signal.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
var zego_entity_1 = __webpack_require__(/*! ./zego.entity */ "./sdk/common/zego.entity.ts");
var zego_extern_1 = __webpack_require__(/*! ./zego.extern */ "./sdk/common/zego.extern.ts");
var WEBRTC_PROTO_VERSION = '1.0.1'; //协议版本号
var ZegoSignal = /** @class */ (function () {
    function ZegoSignal(logger, stateCenter) {
        this.sendDataMap = {};
        this.sendDataList = new zego_entity_1.LinkedList();
        this.sendDataCheckOnceCount = 100;
        this.signalSeq = 0;
        this.pushCallback = {};
        this.sessionInfos = {};
        //tryheartbeat
        this.tryHeartbeatCount = 0;
        // heartbeatTimer = null;
        this.heartbeatInterval = 10 * 1000;
        this.sendDataTimeout = 5 * 1000; //发送消息超时
        this.sendDataDropTimeout = 10 * 1000; //丢弃过期消息的超时时间
        this.tryConnectCount = 1;
        this.tryConnectTimer = null;
        this.tryConnectInterval = 3000;
        this.state = zego_entity_1.ENUM_CONNECT_STATE.disconnect;
        //token
        this.tokenType = 0;
        this.browser = this.getBrowserAndVersion();
        this.platform = navigator.platform;
        this.negoInterval = 25000;
        this.negoTryCount = 1;
        this.negoTryMaxCount = 2;
        this.logger = logger;
        this.stateCenter = stateCenter;
    }
    ZegoSignal.prototype.getBrowserAndVersion = function () {
        var ua = navigator.userAgent;
        var tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([\d\.]+)/i) || [];
        if (/trident/i.test(M[1])) {
            tem = /\brv[ :]+([\d\.]+)/g.exec(ua) || [];
            return { name: 'IE', version: tem[1] || '' };
        }
        if (M[1] === 'Chrome') {
            tem = ua.match(/\bOPR|Edge\/([\d\.]+)/);
            if (tem != null) {
                return { name: 'Opera', version: tem[1] };
            }
        }
        M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = ua.match(/version\/([\d+\.]+)/i)) != null) {
            M.splice(1, 1, tem[1]);
        }
        return {
            name: M[0],
            version: M[1]
        };
    };
    /*
     *    "zs.ssi.0": "ZegoSignal.setSessionInfo"
     */
    ZegoSignal.prototype.setSessionInfo = function (appid, userid) {
        this.logger.debug('zs.ssi.0 call');
        this.appid = appid + '';
        this.userid = userid;
        // this.server = serverUrl;
    };
    ZegoSignal.prototype.onDisconnect = function (server) { };
    ZegoSignal.prototype.onUpdateHeartBeartInterval = function (interval) { };
    // onSocketCloseCallBack(): void {}
    /*
     *    "zs.cs.0": "ZegoSignal.connectServer"
     */
    ZegoSignal.prototype.resetConnectTimer = function () {
        this.logger.info('zs.rct.0 call');
        clearTimeout(this.tryConnectTimer);
        this.tryConnectTimer = null;
        this.tryConnectCount = 0;
    };
    ZegoSignal.prototype.bindWebSocketHandle = function () {
        var _this = this;
        // 只要重连成功，心跳次数重新算
        this.tryHeartbeatCount = 0;
        this.websocket.onmessage = function (e) {
            var msg = JSON.parse(e.data);
            _this.logger.info('zs.bsh.0 signmsg= ', msg.header.cmd);
            _this.logger.info('zs.bsh.0 signmsg= ' + JSON.stringify(msg));
            if (msg.header.appid != _this.appid || msg.header.user_id !== _this.userid) {
                _this.logger.warn('zs.bsh.0 check header failed');
                return;
            }
            _this.handleServerPush(msg);
        };
        this.websocket.onclose = function (e) {
            _this.logger.info('zs.bsh.0 close msg = ' + JSON.stringify(e));
            // this.onSocketCloseCallBack();
            if (_this.state != zego_entity_1.ENUM_CONNECT_STATE.disconnect) {
                //try connect
                _this.resetConnectTimer();
                _this.startConnectTimer();
                //all request timeout
                _this.resetCheckMessage();
            }
        };
        this.websocket.onerror = function (e) {
            _this.logger.error('zs.bsh.0 msg = ' + JSON.stringify(e));
        };
    };
    ZegoSignal.prototype.resetCheckMessage = function () {
        this.logger.debug('zs.rcm.0 call');
        // clearTimeout(this.sendDataCheckTimer);
        // this.sendDataCheckTimer = null;
        var head = this.sendDataList.getFirst();
        while (head != null) {
            this.sendDataList.remove(head);
            if (head._data.error)
                head._data.error(zego_entity_1.SEND_MSG_RESET, head._data.seq);
            head = this.sendDataList.getFirst();
        }
        this.sendDataMap = {};
    };
    ZegoSignal.prototype.handleServerPush = function (msg) {
        switch (msg.header.cmd) {
            case 'LoginRsp':
                this.handleRespondData('LoginReq', msg);
                break;
            case 'CreateSessionRsp':
                this.handleRespondData('CreateSessionReq', msg);
                if (msg.body.result === 0)
                    this.addSession(msg.header.session_id, msg.body.session_token);
                break;
            case 'MediaDescRsp':
                this.handleRespondData('MediaDescReq', msg);
                break;
            case 'CandidateInfoRsp':
                this.handleRespondData('CandidateInfoReq', msg);
                break;
            case 'CloseSessionRsp':
                this.handleRespondData('CloseSessionReq', msg);
                this.removeSession(msg.header.session_id);
                break;
            case 'ClientHBRsp':
                this.handleRespondData('ClientHBReq', msg);
                break;
            case 'MediaDescPush':
                this.handlePushData(msg);
                break;
            case 'CandidateInfoPush':
                this.handlePushData(msg);
                break;
            case 'CloseSessionPush':
                this.handlePushData(msg);
                this.removeSession(msg.header.session_id);
                break;
            case 'QualityReportRsp':
                this.handleRespondData('QualityReportReq', msg);
                break;
            case 'SessionResetPush':
                this.handlePushResetSessionData(msg);
                break;
            case 'StreamStatusNotifyPush':
                this.handlePushData(msg);
                break;
            case 'PublishEventPush':
                this.handlePushData(msg);
                break;
            case 'PlayEventPush':
                this.handlePushData(msg);
                break;
        }
    };
    ZegoSignal.prototype.disconnectCallback = function () {
        // for (let sessionId in this.sessionInfos) {
        //     let callbackData = this.pushCallback["WebSocketDisconnect"+ sessionId];
        //     if (callbackData == null) {
        //         this.logger.error("zs.dc.0 no callbackData");
        //         return;
        //     }
        //     if (callbackData.callback) {
        //         callbackData.callback(callbackData.object, parseInt(sessionId));
        //     }
        // }
        if (this.connectCallback) {
            this.connectCallback(-1, this.server, undefined);
            this.connectCallback = null;
        }
        var server = this.server;
        this.disconnectServer();
        this.onDisconnect(server);
    };
    ZegoSignal.prototype.updateToken = function () {
        var _this = this;
        this.logger.info('zs.ut.0 call');
        var cmd = 'LoginReq';
        var body = {
            token: this.token,
            tokenType: this.tokenType,
            roomid: this.stateCenter.roomid,
            anchorname: this.stateCenter.anchor_info.anchor_id,
            sdkversion: zego_entity_1.PROTO_VERSION,
            osinfo: navigator.appVersion
        };
        if (Object.keys(this.sessionInfos).length != 0) {
            var sessions = [];
            for (var sessionId in this.sessionInfos) {
                var session_id = parseInt(sessionId);
                sessions.push({
                    session_id: session_id,
                    session_token: this.sessionInfos[session_id].token
                });
            }
            body['sessions'] = sessions;
        }
        this.sendMessageWithCallback(cmd, zego_extern_1.getSeq(), 0, body, function (seq, session_id, data) {
            if (data.result == 0) {
                _this.token = data.token;
                _this.tokenType = data.tokenType;
                var tokenInfo = {
                    report: data.report,
                    report_interval: data.report_interval_ms
                };
                data.negoInterval && (_this.negoInterval = data.negoInterval);
                data.negoTryCount && (_this.negoTryCount = data.negoTryCount);
                data.negoTryMaxCount && (_this.negoTryMaxCount = data.negoTryMaxCount);
                if (_this.connectCallback != null) {
                    _this.connectCallback(0, _this.server, tokenInfo);
                    _this.connectCallback = null;
                }
            }
            else {
                var errorTokenInfo = {
                    error: data.strError
                };
                if (_this.connectCallback != null) {
                    _this.connectCallback(data.result, _this.server, errorTokenInfo);
                    _this.connectCallback = null;
                }
            }
        }, function () {
            if (_this.connectCallback != null) {
                _this.connectCallback(-1, _this.server, undefined);
                _this.connectCallback = null;
            }
        });
    };
    ZegoSignal.prototype.sendMessageWithCallback = function (cmd, seq, sessionId, body, success, error) {
        this.logger.debug('zs.smwc.0 call ' + cmd);
        if (!this.websocket || this.websocket.readyState !== 1) {
            this.logger.error('zs.smwc.0 connect not establish');
            if (error) {
                error(zego_entity_1.SEND_MSG_TIMEOUT, seq);
            }
            return;
        }
        var header = this.getHeader(cmd, seq, sessionId);
        var data = {
            header: header,
            body: body
        };
        if (success == undefined) {
            success = null;
        }
        if (error == undefined) {
            error = null;
        }
        var cmdData = {
            // data: data,
            seq: seq,
            deleted: false,
            cmd: cmd,
            time: Date.parse(new Date() + ''),
            success: success,
            error: error
        };
        var cmdDataNode = this.sendDataList.push(cmdData);
        this.sendDataMap[cmdData.seq] = cmdDataNode;
        var dataBuffer = JSON.stringify(data);
        this.websocket.send(dataBuffer);
        this.logger.debug('zs.smwc.0 success');
    };
    ZegoSignal.prototype.getHeader = function (cmd, seq, sessionId) {
        this.globalHeader = {
            version: WEBRTC_PROTO_VERSION,
            cmd: cmd,
            appid: this.appid + '',
            seq: seq,
            user_id: this.userid,
            session_id: sessionId
        };
        return this.globalHeader;
    };
    //rtc信令连接
    ZegoSignal.prototype.connectServer = function (token, serverUrl, result) {
        var _this = this;
        this.token = token;
        this.server = serverUrl;
        this.state = zego_entity_1.ENUM_CONNECT_STATE.connecting;
        this.connectCallback = result;
        if (!this.websocket || this.websocket.readyState !== 1) {
            this.logger.info('zs.cs.0 need new websocket');
            try {
                if (this.websocket) {
                    this.logger.warn('zs.cs.0 close error websocket');
                    this.websocket.onclose = null;
                    this.websocket.onerror = null;
                    this.websocket.close();
                    this.websocket = null;
                }
                //connect websocket
                this.websocket = new WebSocket(this.server);
                this.websocket.onopen = function () {
                    //reset connect timer
                    _this.resetConnectTimer();
                    //register onMessage
                    _this.logger.info('zs.cs.0 websocket open call');
                    _this.bindWebSocketHandle();
                    //update token
                    _this.updateToken();
                    _this.state = zego_entity_1.ENUM_CONNECT_STATE.connected;
                };
                this.websocket.onclose = function (reason) {
                    _this.logger.info('zs.cs.0 websocket close call  ' + JSON.stringify(reason));
                };
                this.websocket.onerror = function (err) {
                    _this.logger.info('zs.cs.0 websocket onerror call  ' + JSON.stringify(err));
                };
            }
            catch (e) {
                this.logger.error('zs.cs.0 websocket error ' + e);
            }
        }
        else {
            //websocket is already connect
            this.resetConnectTimer();
            this.state = zego_entity_1.ENUM_CONNECT_STATE.connected;
        }
        //单个节点目前只试一次，一组节点轮询三次
        this.tryConnectTimer = setTimeout(function () {
            _this.startConnectTimer(result);
        }, this.tryConnectInterval);
    };
    ZegoSignal.prototype.startConnectTimer = function (callback) {
        this.logger.info('zs.sct.0 call');
        if (this.tryConnectCount >= zego_entity_1.MAX_TRY_CONNECT_COUNT) {
            this.logger.info('zs.sct.0 beyond ' + this.server + 'max limit');
            this.disconnectCallback();
            return;
        }
        if (!this.websocket || this.websocket.readyState !== 1) {
            this.tryConnectCount += 1;
            this.connectServer(this.token, this.server, callback);
        }
        else {
            //already connect
            this.resetConnectTimer();
        }
    };
    /*
     *    "zs.ds.0": "ZegoSignal.disconnectServer"
     */
    //rtc信令断开连接
    ZegoSignal.prototype.disconnectServer = function () {
        this.logger.debug('zs.ds.0 call');
        //this.server = null;
        this.connectCallback = null;
        this.resetCheckMessage();
        this.resetConnectTimer();
        if (this.websocket) {
            this.websocket.onclose = null;
            this.websocket.onerror = null;
            this.websocket.close();
            this.websocket = null;
        }
        this.token = '';
        this.sessionInfos = {};
        this.tokenType = 0;
        this.tryHeartbeatCount = 0;
        this.tryConnectCount = 0;
        this.state = zego_entity_1.ENUM_CONNECT_STATE.disconnect;
    };
    ZegoSignal.prototype.isServerConnected = function () {
        if (this.websocket && this.websocket.readyState === 1) {
            return true;
        }
        return false;
    };
    /*
     *    "zs.cs.1": "ZegoSignal.createSession"
     */
    ZegoSignal.prototype.createSession = function (seq, type, mode, streamId, strAuthParam, success, error) {
        if (strAuthParam === void 0) { strAuthParam = ''; }
        this.logger.debug('zs.cs.1 call: ', streamId);
        var sdkversion = '';
        zego_entity_1.PROTO_VERSION.split('.').forEach(function (e, ind) { return (e.length == 1 && ind == 1 ? (sdkversion += '0' + e) : (sdkversion += e)); });
        var cmd = 'CreateSessionReq';
        var body = {
            type: type,
            stream_id: streamId,
            platform: this.platform,
            browser: this.browser.name,
            version: this.browser.version,
            app_id: this.appid,
            negotiate_mode: mode,
            strAuthParam: strAuthParam,
            sdk_version: sdkversion * 1
        };
        // //publish
        // if (type == 0) {
        //         body['negotiate_mode'] = 0;
        // } else {
        //         body['negotiate_mode'] = 1;
        // }
        this.sendMessageWithCallback(cmd, seq, 0, body, success, error);
    };
    ZegoSignal.prototype.removeSession = function (sessionId) {
        this.logger.info('zs.rs.0 call');
        if (this.sessionInfos[sessionId]) {
            delete this.sessionInfos[sessionId];
        }
    };
    /*
     *    "zs.scs.0": "ZegoSignal.sendCloseSession"
     */
    ZegoSignal.prototype.sendCloseSession = function (seq, sessionId, reason, success, error) {
        this.logger.debug('zs.scs.0 call: ', sessionId);
        var cmd = 'CloseSessionReq';
        var body = {
            reason: reason
        };
        this.removeSession(sessionId);
        this.sendMessageWithCallback(cmd, seq, sessionId, body, success, error);
    };
    ZegoSignal.prototype.sendMessage = function (cmd, seq, sessionId, body) {
        this.logger.debug('zs.sm.0 call ' + cmd);
        if (!this.websocket || this.websocket.readyState !== 1) {
            this.logger.error('zs.sm.0 connect not establish');
            return;
        }
        var header = this.getHeader(cmd, seq, sessionId);
        var data = {
            header: header,
            body: body
        };
        var dataBuffer = JSON.stringify(data);
        this.websocket.send(dataBuffer);
        this.logger.debug('zs.sm.0 success');
    };
    /*
     *    "zs.hrd.0": "ZegoSignal.handleRespondData"
     */
    ZegoSignal.prototype.handleRespondData = function (cmd, msg) {
        this.logger.debug('zs.hrd.0 call');
        //callback
        var sendDataNode = this.sendDataMap[msg.header.seq];
        if (sendDataNode == null) {
            if (msg.header.cmd == 'CloseSessionRsp')
                return;
            this.logger.error('zs.hrd.0 cannot find data ' + cmd);
            return;
        }
        var sendData = sendDataNode._data;
        if (sendData.cmd !== cmd) {
            this.logger.error('sz.hrd.0 command is not match');
        }
        else if (sendData.success) {
            sendData.success(msg.header.seq, msg.header.session_id, msg.body);
        }
        delete this.sendDataMap[msg.header.seq];
        this.sendDataList.remove(sendDataNode);
    };
    /*
     *    "zs.as.0": "ZegoSignal.addSession"
     */
    ZegoSignal.prototype.addSession = function (sessionId, token) {
        this.logger.info('zs.as.0 call');
        this.sessionInfos[sessionId] = {
            token: token
        };
    };
    /*
     *    "zs.hpd.0": "ZegoSignal.handlePushData"
     */
    ZegoSignal.prototype.handlePushData = function (msg) {
        this.logger.debug('zs.hpd.0 call ' + msg.header.cmd + ' session ' + msg.header.session_id);
        var callbackData = this.pushCallback[msg.header.cmd + msg.header.session_id];
        if (!callbackData) {
            this.logger.info('zs.hpd.0 no callbackData ' + msg.header.cmd + ' session: ' + msg.header.session_id);
            return;
        }
        if (callbackData.callback) {
            callbackData.callback(msg.header.seq, msg.header.session_id, msg.body);
        }
    };
    /*
     *    "zs.hprsd.0": "ZegoSignal.handlePushResetSessionData"
     */
    ZegoSignal.prototype.handlePushResetSessionData = function (msg) {
        this.logger.debug('zs.hprsd.0 call ');
        var sessionList = [];
        if (msg.body.cResetType == 0) {
            sessionList = Object.keys(this.sessionInfos);
        }
        else if (msg.body.cResetType == 1) {
            for (var i = 0; i < msg.body.session_ids.length; i++) {
                sessionList.push(msg.body.session_ids[i]);
            }
        }
        //send ack
        this.sendResetSessionAck(msg.header.seq, 0, 0);
        if (sessionList.length == 0) {
            this.logger.info('zs.hprsd.0 no session to callback');
            return;
        }
        for (var j = 0; j < sessionList.length; j++) {
            var callbackData = this.pushCallback[msg.header.cmd + sessionList[j]];
            if (callbackData == null) {
                this.logger.info('zs.hprsd.0 no callbackData ' + sessionList[j]);
            }
            else {
                if (callbackData.callback) {
                    callbackData.callback(msg.header.seq, sessionList[j], msg.body);
                }
            }
        }
    };
    /*
     *    "zs.smd.0": "ZegoSignal.sendMediaDesc"
     */
    //type 0: offer  1: answer
    ZegoSignal.prototype.sendMediaDesc = function (seq, sessionId, type, desc, success, error) {
        this.logger.debug('zs.smd.0 call: ', sessionId);
        var cmd = 'MediaDescReq';
        var body = {
            type: type,
            sdp: desc.sdp
        };
        if (desc.width != undefined) {
            body['width'] = desc.width;
        }
        if (desc.height != undefined) {
            body['height'] = desc.height;
        }
        if (desc.frameRate != undefined) {
            body['framerate'] = desc.frameRate;
        }
        if (desc.video_min_kpbs != undefined) {
            body['video_min_kpbs'] = desc.video_min_kpbs;
        }
        if (desc.video_max_kpbs != undefined) {
            body['video_max_kpbs'] = desc.video_max_kpbs;
        }
        if (desc.audio_kpbs != undefined) {
            body['audio_kpbs'] = desc.audio_kpbs;
        }
        if (desc.keyframe_intv != undefined) {
            body['keyframe_intv'] = desc.keyframe_intv;
        }
        this.sendMessageWithCallback(cmd, seq, sessionId, body, success, error);
    };
    /*
     *    "zs.sci.0": "ZegoSignal.sendCandidateInfo"
     */
    ZegoSignal.prototype.sendCandidateInfo = function (seq, sessionId, candidateList, success, error) {
        this.logger.debug('zs.sci.0 call: ', sessionId);
        var cmd = 'CandidateInfoReq';
        var dataList = [];
        for (var i = 0; i < candidateList.length; i++) {
            var info = {
                candidate: candidateList[i].candidate,
                sdpMid: candidateList[i].sdpMid,
                sdpMLineIndex: candidateList[i].sdpMLineIndex
            };
            dataList.push(info);
        }
        var body = {
            infos: dataList
        };
        this.sendMessageWithCallback(cmd, seq, sessionId, body, success, error);
    };
    /*
     *    "zs.smda.0": "ZegoSignal.sendMediaDescAck"
     */
    ZegoSignal.prototype.sendMediaDescAck = function (seq, sessionId, result) {
        this.logger.debug('zs.smda.0 call: ', sessionId);
        var cmd = 'MediaDescAck';
        var body = {
            result: result
        };
        this.sendMessage(cmd, seq, sessionId, body);
    };
    /*
     *    "zs.scia.0": "ZegoSignal.sendCandidateInfoAck"
     */
    ZegoSignal.prototype.sendCandidateInfoAck = function (seq, sessionId, result) {
        this.logger.debug('zs.scia.0 call: ', sessionId);
        var cmd = 'CandidateInfoAck';
        var body = {
            result: result
        };
        this.sendMessage(cmd, seq, sessionId, body);
    };
    /*
     *    "zs.scsa.0": "ZegoSignal.sendCloseSessionAck"
     */
    ZegoSignal.prototype.sendCloseSessionAck = function (seq, sessionId, result) {
        this.logger.debug('zs.scsa.0 call: ', sessionId);
        var cmd = 'CloseSessionAck';
        var body = {
            result: result
        };
        this.sendMessage(cmd, seq, sessionId, body);
    };
    /*
     *    "zs.ssra.0": "ZegoSignal.sendResetSessionAck"
     */
    ZegoSignal.prototype.sendResetSessionAck = function (seq, sessionId, result) {
        this.logger.debug('zs.ssra.0 call: ', sessionId);
        var cmd = 'SessionResetAck';
        var body = {
            result: result
        };
        this.sendMessage(cmd, seq, sessionId, body);
    };
    /*
     *    "zs.rpc.0": "ZegoSignal.registerPushCallback"
     */
    ZegoSignal.prototype.registerPushCallback = function (cmd, sessionId, callback) {
        //this.logger.debug("zs.rpc.0 call: ", cmd);
        if (callback && typeof callback === 'function') {
            this.logger.debug('zs.rpc.0 setcallback');
            this.pushCallback[cmd + sessionId] = { callback: callback };
        }
    };
    /*
     *    "zs.upc.0": "ZegoSignal.unregisterPushCallback"
     */
    ZegoSignal.prototype.unregisterPushCallback = function (cmd, sessionId) {
        //this.logger.info("zs.urpc.0 call: ", cmd);
        delete this.pushCallback[cmd + sessionId];
    };
    /*
     *    "zs.cmt.0": "ZegoSignal.checkMessageTimeout"
     */
    ZegoSignal.prototype.checkMessageTimeout = function () {
        var head = this.sendDataList.getFirst();
        var timestamp = Date.parse(new Date() + '');
        var checkCount = 0;
        var timeoutMsgCount = 0;
        var dropMsgCount = 0;
        //this.logger.debug('zs.cmt.0 call ' + timestamp);
        while (head != null) {
            if (head._data.time + this.sendDataTimeout > timestamp) {
                break;
            }
            delete this.sendDataMap[head._data.seq];
            this.sendDataList.remove(head);
            ++timeoutMsgCount;
            if (head._data.error == null ||
                (this.sendDataDropTimeout > 0 && head._data.time + this.sendDataDropTimeout < timestamp)) {
                ++dropMsgCount;
            }
            else {
                if (head._data.error)
                    head._data.error(zego_entity_1.SEND_MSG_TIMEOUT, head._data.seq);
            }
            ++checkCount;
            if (checkCount >= this.sendDataCheckOnceCount) {
                break;
            }
            head = this.sendDataList.getFirst();
        }
        // this.sendDataCheckTimer = setTimeout(function() {
        //     checkMessageTimeout(this);
        // }, this.sendDataCheckInterval);
        if (timeoutMsgCount != 0 || dropMsgCount != 0) {
            this.logger.debug('zs.cmt.0 call success, state: timeout=', timeoutMsgCount, ' drop=', dropMsgCount);
        }
    };
    /*
     *    "zs.shb.0": "ZegoSignal.signalHeartbeat"
     */
    ZegoSignal.prototype.sendHeartbeat = function () {
        var _this = this;
        this.logger.debug('zs.shb.0 call tryHeartbeatCount:' + this.tryHeartbeatCount);
        if (Object.keys(this.sessionInfos).length == 0) {
            this.logger.info('zs.shb.0 no need to heartbeat');
            return;
        }
        if (this.state !== zego_entity_1.ENUM_CONNECT_STATE.connected) {
            this.logger.warn('zs.shb.0 state error');
            return;
        }
        if (++this.tryHeartbeatCount > zego_entity_1.MAX_TRY_HEARTBEAT_COUNT) {
            this.logger.error('zs.shb.0 heartbeat try limit');
            this.disconnectCallback();
            return;
        }
        var sessionIdList = [];
        for (var sessionId in this.sessionInfos) {
            sessionIdList.push(parseInt(sessionId));
        }
        var body = {
            session_ids: sessionIdList
        };
        this.sendMessageWithCallback('ClientHBReq', zego_extern_1.getSeq(), 0, body, function (seq, sessionId, data) {
            if (_this.heartbeatInterval != data.hb_interval) {
                _this.heartbeatInterval = data.hb_interval;
                _this.onUpdateHeartBeartInterval(data.hb_interval);
            }
            _this.tryHeartbeatCount = 0;
        }, function (err, seq) {
            // this.tryHeartbeatCount += 1;
        });
    };
    /*
     *    "zs.qr.0": "ZegoSignal.QualityReport"
     */
    ZegoSignal.prototype.QualityReport = function (seq, sessionId, qualityStat, success, error) {
        this.logger.debug('zs.qr.0 call');
        var cmd = 'QualityReportReq';
        var body = {
            streams: [
                __assign(__assign({}, qualityStat), {
                    aid: sessionId
                })
            ]
        };
        this.sendMessageWithCallback(cmd, seq, sessionId, body, success, error);
    };
    /*
     *    "zs.sss.0": "ZegoSignal.sendStreamStatus"
     */
    ZegoSignal.prototype.sendStreamStatus = function (seq, sessionId, camera, microphone) {
        this.logger.debug('zs.sss.0 call');
        var cmd = 'StreamStatusNotify';
        var body = {
            mic_status: microphone,
            camera_status: camera
        };
        this.logger.info('zs.sss.0 stream status ' + JSON.stringify(body));
        this.sendMessage(cmd, seq, sessionId, body);
    };
    /*
     *    "zs.sbs.0": "ZegoSignal.sendBroadcasterStatus"
     */
    ZegoSignal.prototype.sendBroadcasterStatus = function (seq, sessionId, status) {
        this.logger.debug('zs.sss.0 call');
        var cmd = 'BroadcasterStatusNotify';
        var body = {
            status: status
        };
        this.sendMessage(cmd, seq, sessionId, body);
    };
    return ZegoSignal;
}());
exports.ZegoSignal = ZegoSignal;


/***/ }),

/***/ "./sdk/util/AudioMixUtil.ts":
/*!**********************************!*\
  !*** ./sdk/util/AudioMixUtil.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_logevent_1 = __webpack_require__(/*! ../common/zego.logevent */ "./sdk/common/zego.logevent.ts");
var client_util_1 = __webpack_require__(/*! ./client-util */ "./sdk/util/client-util.ts");
var AudioMixUtil = /** @class */ (function () {
    function AudioMixUtil(log, ac, mediaEleSources) {
        this.audioBufferList = [];
        this.loop = false;
        this.replace = false;
        this.effectEndedCallBack = null;
        this.effectEndedListener = null;
        this.startTimes = 0;
        this.startOffset = 0;
        this.pauseTimes = 0;
        this.resumeOffset = 0;
        //混音
        this.paused = false;
        this.isMixAudio = false;
        this.isMixingBuffer = false;
        this.audioCurrentTimer = null;
        this.logger = log;
        this.ac = ac;
        this.mediaEleSources = mediaEleSources;
    }
    //预加载音效
    AudioMixUtil.prototype.preloadEffect = function (effectUrl, callBack) {
        var _this = this;
        this.logger.info('amu.pe.0 start preload effect');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', effectUrl, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
            if (xhr.status == 200 || xhr.status == 304) {
                var buffer = xhr.response;
                _this.ac.decodeAudioData(buffer, function (ab) {
                    _this.logger.info('amu.pe.0 effect preload success');
                    callBack('', ab);
                }, function (err) {
                    callBack(err);
                });
            }
            else {
                var err = xhr.statusText;
                callBack(err);
            }
        };
        xhr.send();
    };
    AudioMixUtil.prototype.playEffect = function (playTime, loop, replace, start, end) {
        var _this = this;
        if (this.isMixAudio === true) {
            this.logger.error('amu.pe.1 audio is mixing');
            return;
        }
        if (!this.audioBuffer) {
            this.logger.error('amu.pe.1 no audio buffer found');
            return;
        }
        this.startOffset = playTime || 0;
        this.loop = loop || false;
        this.replace = replace || false;
        this.effectEndedCallBack = end;
        this.mixEffect(this.audioBuffer, function () {
            loop ? (_this.buffSource.loop = true) : (_this.buffSource.loop = false);
            playTime ? _this.buffSource.start(0, playTime / 1e3) : _this.buffSource.start(0);
            _this.startTimes = Date.now();
            _this.effectEndedListener = _this.effectEndedHandler.bind(_this);
            _this.buffSource.addEventListener('ended', _this.effectEndedListener);
            start && start();
        });
    };
    AudioMixUtil.prototype.mixingBuffer = function (ab, callBack) {
        var _this = this;
        if (this.isMixAudio === true && this.audioBufferList.length == 0 && this.isMixingBuffer == false) {
            this.logger.error('amu.mb.0 audio is mixing');
            return;
        }
        this.ac.decodeAudioData(ab, function (audioBuffer) {
            _this.audioBufferList.push(audioBuffer);
            _this.audioBufferList.length == 1 && _this.playRealTimeEffect(_this.audioBufferList[0]);
            _this.isMixingBuffer = true;
            callBack && callBack();
        }, function (err) {
            _this.logger.error('amu.mb.0 ' + err);
            callBack &&
                callBack({
                    code: zego_logevent_1.errorList.kDecodeAudioDataFail.code,
                    message: zego_logevent_1.errorList.kDecodeAudioDataFail.message + ' ' + err,
                });
        });
    };
    AudioMixUtil.prototype.stopMingBuffer = function () {
        this.isMixingBuffer = false;
        return this.stopMixingAudio();
    };
    AudioMixUtil.prototype.playRealTimeEffect = function (ab) {
        var _this = this;
        this.mixEffect(ab, function () {
            _this.buffSource && _this.buffSource.start(0);
            _this.buffSource &&
                _this.buffSource.addEventListener('ended', function () {
                    _this.audioBufferList.shift();
                    _this.audioBufferList.length > 0 &&
                        _this.isMixAudio &&
                        _this.playRealTimeEffect(_this.audioBufferList[0]);
                });
        });
    };
    AudioMixUtil.prototype.pauseEffect = function () {
        if (this.audioBufferList.length > 0) {
            this.logger.error('amu.pe.0 real time buffer can not be paused');
            return;
        }
        this.stopMixingAudio();
        this.resumeOffset = (this.pauseTimes - this.startTimes + this.startOffset) % (this.audioBuffer.duration * 1e3);
        this.paused = true;
    };
    AudioMixUtil.prototype.resumeEffect = function () {
        if (this.audioBufferList.length > 0) {
            this.logger.error('amu.pe.0 real time buffer can not be resume');
            return;
        }
        this.playEffect(this.resumeOffset, this.loop, this.replace, undefined, this.effectEndedCallBack);
        this.startOffset = this.resumeOffset;
        this.paused = false;
    };
    AudioMixUtil.prototype.mixEffect = function (audioBuffer, callBack) {
        if (!this.localStream) {
            this.logger.error('amu.me.0 localStream can not be found');
            return;
        }
        if (!this.replaceTrack()) {
            return false;
        }
        this.gainNode = this.ac.createGain();
        this.buffSource = this.ac.createBufferSource();
        this.buffSource.buffer = audioBuffer;
        this.buffSource.connect(this.gainNode);
        this.gainNode.connect(this.ac.destination);
        this.gainNode.connect(this.destination);
        callBack();
    };
    //开始混音
    AudioMixUtil.prototype.startMixingAudio = function (audio, replace) {
        this.replace = replace || false;
        if (this.isMixAudio) {
            this.logger.error('amu.sma.0 audio is mixing');
            return false;
        }
        if (!this.localStream) {
            this.logger.error('amu.sma.0 localStream can not be found');
            return false;
        }
        if (!this.replaceTrack()) {
            return false;
        }
        audio.captureStream = audio.captureStream || audio.mozCaptureStream || audio.webkitCaptureStream;
        //混音
        this.gainNode = this.ac.createGain();
        var bro = client_util_1.ClientUtil.getBrowser();
        if (bro === 'Safari') {
            var mediaEle = this.mediaEleSources.find(function (item) { return item.audio === audio; });
            if (mediaEle) {
                this.mixAudio = mediaEle.node;
            }
            else {
                var node = this.ac.createMediaElementSource(audio);
                this.mixAudio = node;
                this.mediaEleSources.push({ audio: audio, node: node });
            }
            audio.currentTime = audio.currentTime;
            this.audioCurrentTimer = setInterval(function () {
                audio.currentTime = audio.currentTime + 0.45;
            }, 6000);
        }
        else {
            this.mixAudio = this.ac.createMediaStreamSource(audio.captureStream());
        }
        this.mixAudio.connect(this.gainNode);
        this.gainNode.connect(this.destination);
        return true;
    };
    AudioMixUtil.prototype.replaceTrack = function () {
        // this.streamSource = this.ac.createMediaStreamSource(this.localStream);
        this.destination = this.ac.createMediaStreamDestination();
        !this.replace && this.streamSource.connect(this.destination);
        // this.gainNode.connect(this.destination);
        //替换推流音轨
        var audioTrack = this.destination.stream.getAudioTracks()[0];
        var sender = this.peerConnection
            .getSenders()
            .find(function (s) { return s.track.kind === audioTrack.kind; });
        if (!sender) {
            this.logger.error('amu.rt.0 no sender');
            return false;
        }
        this.micTrack = this.localStream.getAudioTracks()[0];
        sender.replaceTrack(audioTrack);
        this.localStream.removeTrack(this.micTrack);
        this.localStream.addTrack(audioTrack);
        this.isMixAudio = true;
        return true;
    };
    AudioMixUtil.prototype.stopMixingAudio = function () {
        var _this = this;
        if (this.paused) {
            this.logger.info('amu.sma.1 audioEffect paused');
            return true;
        }
        if (!this.isMixAudio) {
            this.logger.warn('amu.sma.1 no mixing audio found');
            return true;
        }
        if (!this.localStream) {
            this.logger.error('amu.sma.1 localStream can not be found');
            return false;
        }
        var sender = this.peerConnection
            .getSenders()
            .find(function (s) { return s.track.kind === _this.micTrack.kind; });
        // sender.replaceTrack(this.micTrack);
        // this.localStream.removeTrack(this.localStream.getAudioTracks()[0]);
        // this.localStream.addTrack(this.micTrack!);
        if (this.mixAudio) {
            this.mixAudio.disconnect(this.gainNode);
            this.mixAudio = null;
            if (this.audioCurrentTimer) {
                clearInterval(this.audioCurrentTimer);
                this.audioCurrentTimer = null;
            }
        }
        else if (this.buffSource) {
            this.buffSource.removeEventListener('ended', this.effectEndedListener);
            this.buffSource.stop();
            this.pauseTimes = Date.now();
            this.buffSource.disconnect(this.gainNode);
            this.buffSource = null;
        }
        this.gainNode.disconnect(this.destination);
        //this.micTrack = null;
        this.isMixAudio = false;
        this.audioBufferList = [];
        return true;
    };
    AudioMixUtil.prototype.setMixingAudioVolume = function (volume) {
        if (!this.gainNode) {
            this.logger.error('amu.sma.2 no mixing audio found');
            return false;
        }
        this.gainNode.gain.value = volume;
        return true;
    };
    AudioMixUtil.prototype.effectEndedHandler = function () {
        this.stopMixingAudio();
        this.effectEndedCallBack && this.effectEndedCallBack();
    };
    return AudioMixUtil;
}());
exports.AudioMixUtil = AudioMixUtil;


/***/ }),

/***/ "./sdk/util/client-util.ts":
/*!*********************************!*\
  !*** ./sdk/util/client-util.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/common/zego.entity.ts");
var zego_error_1 = __webpack_require__(/*! ../common/zego.error */ "./sdk/common/zego.error.ts");
var zego_logevent_1 = __webpack_require__(/*! ../common/zego.logevent */ "./sdk/common/zego.logevent.ts");
var ClientUtil = /** @class */ (function () {
    function ClientUtil() {
    }
    ClientUtil.checkConfigParam = function (appid, server, logger) {
        if (!appid || typeof appid !== 'number' || !this.checkInteger(appid)) {
            logger.error('ccp.0 appid must be positive integer number and not empty');
            return false;
        }
        if (!server || (typeof server !== 'string' && !Array.isArray(server)) || server == '') {
            logger.error('ccp.0 server must be string or string array and not empty');
            return false;
        }
        return true;
    };
    // static checkCommonParam(
    // 	action: string,
    // 	param: Array<{
    // 		content: any;
    // 		name: string;
    // 		type: string;
    // 	}>,
    // 	logger: Logger
    // ): boolean {
    // 	let check = true;
    // 	param.forEach((param) => {
    // 		if (param.type == 'number' && typeof param.content !== 'number') {
    // 			logger.error(`${action} ${param.content} must be number`);
    // 			check = false;
    // 		} else if (param.type == 'string' && (param.content == '' || typeof param.content !== 'string')) {
    // 			logger.error(`${action} ${param.content} must be string and not empty`);
    // 			check = false;
    // 		}
    // 	});
    // 	return check;
    // }
    ClientUtil.checkStreamID = function (streamID) {
        // const reg = /^(?=.*[a-zA-Z\d~!@#$%^&amp;*()_+`\-={}:";'&lt;&gt;?,.\/]).{1,256}$/;
        var reg = /^([0-9a-zA-Z#!$%&()`'+-;<=.>@^_~,\\*])+$/;
        var reg2 = /^[^:/]*$/g;
        return reg.test(streamID) && reg2.test(streamID);
    };
    ClientUtil.checkIllegalCharacters = function (str) {
        // const reg = /^(?=.*[a-zA-Z\d~!@#$%^&amp;*()_+`\-={}:";'&lt;&gt;?,.\/]).{1,256}$/;
        var reg = /^([0-9a-zA-Z#!$%&()`'+-;<=.>@^_~,\\*])+$/;
        var reg2 = /^[^:/]*$/g;
        return reg.test(str) && reg2.test(str);
    };
    ClientUtil.isUrl = function (str) {
        if (str.startsWith('rtmp://') ||
            (str.startsWith('https://') && str.endsWith('.flv')) ||
            (str.startsWith('https://') && str.endsWith('.m3u8'))) {
            return true;
        }
        return false;
    };
    ClientUtil.registerCallback = function (fName, option, callbackList) {
        var sf, ef;
        if (option.success) {
            sf = option.success;
            callbackList[fName + 'SuccessCallback'] = sf;
        }
        if (option.error) {
            ef = option.error;
            callbackList[fName + 'ErrorCallback'] = ef;
        }
    };
    ClientUtil.actionErrorCallback = function (fName, callbackList) {
        return callbackList[fName + 'ErrorCallback'];
    };
    // 执行成功回调函数
    ClientUtil.actionSuccessCallback = function (fName, callbackList) {
        return callbackList[fName + 'SuccessCallback'];
    };
    ClientUtil.logReportCallback = function (logEvent, dataReport, reportSeq, callbackList) {
        ClientUtil.registerCallback(logEvent, {
            success: function (reportName, eventName) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                ClientUtil.dataReportEvent(dataReport, reportSeq, reportName, eventName, args);
            },
        }, callbackList);
    };
    ClientUtil.proxyRes = function (dataReport, reportSeq, resolve, reject) {
        var interResolve = function (res) {
            dataReport.uploadReport(reportSeq);
            resolve(res);
        };
        var interReject = function (err, exterMsg) {
            if (exterMsg === void 0) { exterMsg = ''; }
            var reportErr;
            if (err.code < 2000000000 && err.code > 1000000000) {
                reportErr = ClientUtil.decodeServerError(err.code, err.msg);
            }
            else {
                var errName = zego_logevent_1.codeErrMap[err.code];
                // @ts-ignore
                reportErr = zego_logevent_1.errorList[errName];
            }
            reportErr &&
                dataReport.addMsgInfo(reportSeq, {
                    error: reportErr.code,
                    message: reportErr.message + exterMsg,
                });
            dataReport.uploadReport(reportSeq);
            reject(err);
        };
        return { interResolve: interResolve, interReject: interReject };
    };
    /**
         错误管理
         */
    ClientUtil.getServerError = function (code) {
        var serverErrorList = {
            1: 'parse json error.',
            1001: 'login is processing.',
            1002: 'liveroom request error.',
            1003: 'zpush connect fail.',
            1004: 'zpush handshake fail.',
            1005: 'zpush login fail.',
            1006: 'user login state is wrong.',
            1007: 'got no zpush addr',
            1008: 'token error',
            1009: 'dispatch error',
            1010: 'token expired',
            1011: 'token format error',
            1012: 'subcmd error',
            1101: 'zego auth error',
            2001: 'invalid channel',
            2002: 'biz channel error',
            1000000000: 'liveroom cmd error, result=',
        };
        if (code === 0) {
            return zego_error_1.commonErrorList.SUCCESS;
        }
        var err = zego_error_1.liveRoomErrorList.SERVER;
        err.code = code;
        if (code > 1000000000) {
            // @ts-ignore
            // errCodeMap[code] && (err.code = errorCodeList[errCodeMap[code]].code);
            err.msg = serverErrorList[1000000000] + code;
        }
        else if (serverErrorList[code]) {
            err.msg = serverErrorList[code];
        }
        else {
            err.msg = 'unknown error code:' + code;
        }
        return err;
    };
    ClientUtil.unregisterCallback = function (fName, callbackList) {
        delete callbackList[fName + 'SuccessCallback'];
        delete callbackList[fName + 'ErrorCallback'];
    };
    ClientUtil.decodeServerError = function (code, msg) {
        var err = { code: -1, message: 'server error' };
        if (code > 1000000000) {
            err.code = code - 1000000000 + 52000000;
        }
        else {
            err.code = code + 2002000000;
        }
        msg && (err.message = msg);
        return err;
    };
    ClientUtil.getLiveRoomError = function (code) {
        var prefix = 1000000000;
        var liveRoomErrMap = {
            1105: 'ROOM_MAX_USER_COUNT',
            1012: 'PUBLISHER_ERROR_REPETITIVE_PUBLISH_STREAM',
            2002: 'ROOM_ERROR_AUTHENTICATION_FAILED',
            2003: 'ROOM_ERROR_LOGIN_TIMEOUT',
        };
        var accessSvrErrMap = {
            1: 'PARSE_JSON_ERROR',
            1001: 'LOGIN_PROCESSING',
            1002: 'LIVEROMM_REQUEST_ERROR',
            1003: 'ZPUSH_REQUEST_FAIL',
            1004: 'ZPUSH_REQUEST_FAIL',
            1005: 'ZPUSH_REQUEST_FAIL',
            1006: 'LOGIN_STATE_WRONG',
            1007: 'ZPUSH_REQUEST_FAIL',
            1008: 'TOKEN_ERROR',
            1009: 'DIAPATCH_ERROR',
            1010: 'TOKEN_EXPIRED',
            1011: 'TOKEN_ERROR',
            1012: 'SUBCMD_ERROR',
            1101: 'ZEGO_AUTH_ERROR',
            2001: 'BIZ_CHANNEL_ERROR',
            2002: 'BIZ_CHANNEL_ERROR',
        };
        if (code > 1000000000) {
            return liveRoomErrMap[code - prefix] || '';
        }
        else {
            return accessSvrErrMap[code] || 'ROOM_INNER_ERROR';
        }
    };
    ClientUtil.mixServerError = function (code) {
        var mixServerErrorList = {
            82000001: 'kMixStreamFailError',
            82000002: 'kMixStreamInputError',
            82000003: 'kMixStreamAuthError',
            82000150: 'kMixStreamNotExistError',
            82000151: 'kMixStreamStartMixError',
            82000152: 'kMixStreamStopMixError',
            82000155: 'kMixStreamInputFormatError',
            82000156: 'kMixStreamOutputFormatError',
            82000157: 'kMixStreamNotOpenError',
            82000158: 'kMixStreamInputExceedError',
            82000159: 'kMixStreamDispatchError',
            82000160: 'kMixStreamStopMixOwnerError',
            82000170: 'kMixStreamWaterMarkParamError',
            82000171: 'kMixStreamWaterMarkImageError',
            82000190: 'kMixStreamQpsOverloadError',
        };
        var mixServerErrorMap = {
            1: 'MIXER_START_REQUEST_ERROR',
            3: 'MIXER_AUTHENTICATION_FAILED',
            150: 'MIXER_INPUT_STREAM_NOT_EXISTS',
            151: 'MIXER_START_REQUEST_ERROR',
            152: 'MIXER_STOP_REQUEST_ERROR',
            153: 'MIXER_INPUT_PARAMETERS_ERROR',
            154: 'MIXER_EXCEED_MAX_OUTPUT_COUNT',
            155: 'MIXER_INPUT_PARAMETERS_ERROR',
            156: 'MIXER_VIDEO_CONFIG_INVALID',
            157: 'MIXER_NO_SERVICES',
            158: 'MIXER_EXCEED_MAX_INPUT_COUNT',
            159: 'MIXER_START_REQUEST_ERROR',
            160: 'MIXER_NOT_OWNER_STOPMIXER',
            170: 'MIXER_WATERMARK_PARAMETERS_ERROR',
            171: 'MIXER_WATERMARK_NULL',
            190: 'MIXER_START_REQUEST_ERROR',
        };
        var res = [];
        if (code > 1000000000) {
            var errcode = code - 1000000000 + 82000000;
            if (mixServerErrorList[errcode]) {
                res[0] = mixServerErrorList[errcode];
            }
            else {
                res[0] = '';
            }
            if (mixServerErrorMap[code - 1000000000]) {
                res[1] = mixServerErrorMap[code - 1000000000];
            }
            else {
                res[1] = '';
            }
        }
        return res;
    };
    ClientUtil.getKickoutError = function (code) {
        var err = {};
        switch (code) {
            case 1:
                err.code = 63000001;
                err.message = 'zpush multiple login kickout';
                err.name = 'MULTIPLE_LOGIN_KICKOUT';
                break;
            case 2:
                err.code = 63000002;
                err.message = 'zpush manual kickout';
                err.name = 'MANUAL_KICKOUT';
                break;
            case 3:
                err.code = 63000003;
                err.message = 'zpush room session error';
                break;
            default:
                break;
        }
        return err;
    };
    ClientUtil.dataReportEvent = function (dataReport, reportSeq, reportName, eventName, args) {
        switch (reportName) {
            case 'eventStart':
                dataReport.eventStart(reportSeq, eventName);
                break;
            case 'eventEndWithMsgInfo':
                dataReport.eventEndWithMsgInfo(reportSeq, eventName, args[0]);
                break;
            case 'addEventMsg':
                dataReport.addEventMsg(reportSeq, eventName, args[0], args[1]);
                break;
            case 'addEvent':
                dataReport.addEvent(reportSeq, eventName);
                break;
            case 'eventEnd':
                dataReport.eventEnd(reportSeq, eventName);
                break;
            case 'addMsgInfo':
                dataReport.addMsgInfo(reportSeq, args[0]);
                break;
            default:
                break;
        }
    };
    ClientUtil.isKeepTryLogin = function (code) {
        switch (code) {
            case 1002: //liveroom connect error
            case 1003: //zpush connect error
                return true;
            default:
                return false;
        }
    };
    /*
     *    "msl.0": "ZegoClient.mergeStreamList",
     */
    ClientUtil.mergeStreamList = function (logger, idName, oldStreamList, newStreamList, callbackResult) {
        logger.debug('msl.0 call');
        var addStreamList = [];
        var delStreamList = [];
        var updateStreamList = [];
        var flag;
        if (!newStreamList) {
            newStreamList = [];
        }
        for (var i = 0; i < newStreamList.length; i++) {
            if (newStreamList[i].anchor_id_name == idName) {
                logger.debug('msl.0 have self stream added');
                continue;
            }
            flag = false;
            for (var j = 0; j < oldStreamList.length; j++) {
                if (newStreamList[i].stream_id === oldStreamList[j].stream_id) {
                    if (newStreamList[i].extra_info !== oldStreamList[j].extra_info) {
                        updateStreamList.push(newStreamList[i]);
                    }
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                addStreamList.push(newStreamList[i]);
            }
        }
        for (var k = 0; k < oldStreamList.length; k++) {
            flag = false;
            for (var n = 0; n < newStreamList.length; n++) {
                if (oldStreamList[k].stream_id === newStreamList[n].stream_id) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                delStreamList.push(oldStreamList[k]);
            }
        }
        oldStreamList.splice(0);
        for (var i = 0; i < newStreamList.length; i++) {
            oldStreamList.push(newStreamList[i]);
        }
        callbackResult(addStreamList, delStreamList, updateStreamList);
        logger.debug('msl.0 call success');
    };
    ClientUtil.mergeUserList = function (logger, oldUserList, newUserList, callbackResult) {
        logger.debug('msl.0 call');
        var addUserList = [];
        var delUserList = [];
        var flag;
        if (!newUserList) {
            newUserList = [];
        }
        for (var i = 0; i < newUserList.length; i++) {
            flag = false;
            for (var j = 0; j < oldUserList.length; j++) {
                if (newUserList[i].userID === oldUserList[j].userID) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                addUserList.push(newUserList[i]);
            }
        }
        for (var k = 0; k < oldUserList.length; k++) {
            flag = false;
            for (var n = 0; n < newUserList.length; n++) {
                if (oldUserList[k].userID === newUserList[n].userID) {
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                delUserList.push(oldUserList[k]);
            }
        }
        oldUserList.splice(0);
        for (var i = 0; i < newUserList.length; i++) {
            oldUserList.push(oldUserList[i]);
        }
        callbackResult(addUserList, delUserList);
        logger.debug('msl.0 call success');
    };
    ClientUtil.checkCustomCommandParam = function (param) {
        return true;
    };
    ClientUtil.checkInteger = function (num, positive) {
        if (!positive)
            return typeof num === 'number' && num % 1 === 0 && num >= 0;
        return typeof num === 'number' && num % 1 === 0 && num > 0;
    };
    ClientUtil.checkValidNumber = function (param, min, max) {
        min = min || 1;
        max = max || 1 * 1e4;
        return typeof param === 'number' && param % 1 == 0 && param >= min && param <= max;
    };
    //生成随机数
    ClientUtil.generateRandumNumber = function (maxNum) {
        return parseInt(Math.random() * (maxNum + 1) + '', 10);
    };
    //生成随机数
    ClientUtil.uuid = function (len, radix) {
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [];
        var i;
        radix = radix || chars.length;
        if (len) {
            // Compact form
            for (i = 0; i < len; i++)
                uuid[i] = chars[0 | (Math.random() * radix)];
        }
        else {
            // rfc4122, version 4 form
            var r = void 0;
            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            // Fill in random data. At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | (Math.random() * 16);
                    uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    };
    ClientUtil.supportDetection = function (screenShotReady, success) {
        return __awaiter(this, void 0, void 0, function () {
            var result, videoEle, video, err_1, audio, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        result = {
                            webRTC: false,
                            customCapture: false,
                            camera: false,
                            microphone: false,
                            videoCodec: {
                                H264: false,
                                H265: false,
                                VP8: false,
                                VP9: false,
                            },
                            screenSharing: screenShotReady,
                            errInfo: {},
                        };
                        videoEle = document.createElement('video');
                        // @ts-ignore
                        if (videoEle['captureStream'] || videoEle['mozCaptureStream']) {
                            result.customCapture = true;
                        }
                        if (!(navigator && navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) return [3 /*break*/, 7];
                        if (!(window.location.protocol !== 'https:' &&
                            window.location.protocol !== 'file:' &&
                            window.location.hostname.indexOf('127.0.0.1') == -1 &&
                            window.location.hostname.indexOf('localhost') == -1)) return [3 /*break*/, 1];
                        result.camera = false;
                        // result.errInfo.camera = {};
                        console.error('webrtc requires https or localhost');
                        return [3 /*break*/, 7];
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ video: true })];
                    case 2:
                        video = _a.sent();
                        video && (result.camera = true) && video.getTracks().forEach(function (track) { return track.stop(); });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        result.errInfo.camera = {
                            name: err_1.name,
                            message: err_1.message,
                        };
                        console.error('camera devices detect error: ', err_1.name, err_1.message);
                        return [3 /*break*/, 4];
                    case 4:
                        _a.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, navigator.mediaDevices.getUserMedia({ audio: true })];
                    case 5:
                        audio = _a.sent();
                        audio && (result.microphone = true) && audio.getTracks().forEach(function (track) { return track.stop(); });
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _a.sent();
                        result.errInfo.microphone = {
                            name: err_2.name,
                            message: err_2.message,
                        };
                        console.error('microphone devices detect error: ', err_2.name, err_2.message);
                        return [3 /*break*/, 7];
                    case 7:
                        this.supportVideoCodeType(function (rtcCodec, err) {
                            result.videoCodec.H264 = rtcCodec.H264;
                            result.videoCodec.H265 = rtcCodec.H265;
                            result.videoCodec.VP8 = rtcCodec.VP8;
                            result.videoCodec.VP9 = rtcCodec.VP9;
                            result.webRTC = rtcCodec.webRTC;
                            if (err) {
                                result.errInfo.webRTC = {
                                    name: err.name,
                                    message: err.message,
                                };
                                console.error('videoCodec detect error: ' + err);
                            }
                            success && success(result);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientUtil.getNetQuality = function (rtt, fractionLost) {
        var netQuality = 0;
        if (rtt && rtt < 600) {
            if (fractionLost > 0.4) {
                netQuality = 2;
            }
            else if (fractionLost > 0.3) {
                netQuality = 4;
            }
            else {
                netQuality = 5;
            }
        }
        else if (rtt < 900) {
            if (fractionLost > 0.4) {
                netQuality = 2;
            }
            else if (fractionLost > 0.2) {
                netQuality = 3;
            }
            else {
                netQuality = 4;
            }
        }
        else {
            if (fractionLost > 0.2) {
                netQuality = 2;
            }
            else {
                netQuality = 3;
            }
        }
        return netQuality;
    };
    ClientUtil.getDevices = function (deviceInfoCallback, error) {
        if (navigator.mediaDevices === undefined || navigator.mediaDevices.enumerateDevices === undefined) {
            if (error) {
                error(zego_error_1.publishErrorList.BROWSER_NOT_SUPPORT);
            }
            return;
        }
        navigator.mediaDevices
            .enumerateDevices()
            .then(function (deviceInfos) {
            var microphone = [];
            var speaker = [];
            var camera = [];
            for (var i = 0; i < deviceInfos.length; i++) {
                var deviceInfo = deviceInfos[i];
                if (deviceInfo.kind === 'audioinput') {
                    microphone.push({
                        deviceName: deviceInfo.label,
                        deviceID: deviceInfo.deviceId,
                    });
                }
                if (deviceInfo.kind === 'audiooutput') {
                    speaker.push({
                        deviceName: deviceInfo.label,
                        deviceID: deviceInfo.deviceId,
                    });
                }
                if (deviceInfo.kind === 'videoinput') {
                    camera.push({
                        deviceName: deviceInfo.label,
                        deviceID: deviceInfo.deviceId,
                    });
                }
            }
            if (deviceInfoCallback) {
                deviceInfoCallback({
                    microphones: microphone,
                    speakers: speaker,
                    cameras: camera,
                });
            }
        })
            .catch(function (err) {
            console.error('enumerate devices wrong ' + err);
            error && error(zego_error_1.commonErrorList.ENUMERATE_DEVICES_FAIL);
        });
    };
    ClientUtil.compareVersion = function (v1, v2) {
        v1 = v1.split('.');
        v2 = v2.split('.');
        var len = Math.max(v1.length, v2.length);
        while (v1.length < len) {
            v1.push('0');
        }
        while (v2.length < len) {
            v2.push('0');
        }
        for (var i = 0; i < len; i++) {
            var num1 = parseInt(v1[i]);
            var num2 = parseInt(v2[i]);
            if (num1 > num2) {
                return 1;
            }
            else if (num1 < num2) {
                return -1;
            }
        }
        return 0;
    };
    ClientUtil.isSupportLive = function (sucCall, errCall) {
        var resultList = {
            10001: '当前微信版本过低，无法使用相关组件',
            10002: '需要摄像头和录音功能的授权',
        };
        var version = wx.getSystemInfoSync().SDKVersion;
        var res = {
            code: -1,
            msg: '',
        };
        if (this.compareVersion(version, '1.7.0') < 0) {
            res = {
                code: 10001,
                msg: resultList[10001],
            };
            sucCall && sucCall(res);
        }
        wx.getSetting({
            success: function (_a) {
                var authSetting = _a.authSetting;
                if (!authSetting['scope.camera'] || !authSetting['scope.record']) {
                    res = {
                        code: 10002,
                        msg: resultList[10002],
                    };
                }
                sucCall && sucCall(res);
            },
            fail: function (err) {
                console.error('get setting error', err);
                errCall && errCall(err);
            },
        });
    };
    ClientUtil.supportVideoCodeType = function (sucCall) {
        //@ts-ignore
        var rtcCodec = {
            webRTC: false,
            H264: false,
            VP8: false,
            VP9: false,
            H265: false,
        };
        try {
            new RTCPeerConnection()
                .createOffer({
                offerToReceiveAudio: true,
                offerToReceiveVideo: true,
            })
                .then(function (desc) {
                rtcCodec.webRTC = true;
                if (desc && desc.sdp) {
                    var sdplist = desc.sdp.split('\r\n');
                    rtcCodec.H264 = sdplist.some(function (item) {
                        return item.startsWith('a=rtpmap:') && item.indexOf('H264/') > -1;
                    });
                    rtcCodec.VP8 = sdplist.some(function (item) {
                        return item.startsWith('a=rtpmap:') && item.indexOf('VP8/') > -1;
                    });
                    rtcCodec.VP9 = sdplist.some(function (item) {
                        return item.startsWith('a=rtpmap:') && item.indexOf('VP9/') > -1;
                    });
                    rtcCodec.H265 = sdplist.some(function (item) {
                        return item.startsWith('a=rtpmap:') && item.indexOf('H264/') > -1;
                    });
                    sucCall && sucCall(rtcCodec);
                }
            });
        }
        catch (error) {
            sucCall && sucCall(rtcCodec, error);
        }
    };
    ClientUtil.inlineWorker = function (func) {
        //内联worker
        if (Worker && func) {
            var functionBody = func
                .toString()
                .trim()
                .match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1];
            var url = URL.createObjectURL(new window.Blob([functionBody], {
                type: 'text/javascript',
            }));
            return new Worker(url);
        }
        return null;
    };
    ClientUtil.getBrowser = function () {
        var ua = window.navigator.userAgent;
        var isIE = window.ActiveXObject != undefined && ua.indexOf('MSIE') != -1;
        var isFirefox = ua.indexOf('Firefox') != -1;
        var isOpera = window.opr != undefined;
        var isChrome = ua.indexOf('Chrome') && window.chrome;
        var isSafari = ua.indexOf('Safari') != -1 && ua.indexOf('Version') != -1;
        if (isIE) {
            return 'IE';
        }
        else if (isFirefox) {
            return 'Firefox';
        }
        else if (isOpera) {
            return 'Opera';
        }
        else if (isChrome) {
            return 'Chrome';
        }
        else if (isSafari) {
            return 'Safari';
        }
        else {
            return 'Unkown';
        }
    };
    ClientUtil.isTestEnv = function (server) {
        if (server.indexOf('wss://wssliveroom-test.zego.im/ws') != -1 ||
            server.indexOf('wss://test2-wsliveroom-api.zego.im/ws') != -1 ||
            server.indexOf('wss://wsliveroom-test.zegocloud.com/ws') != -1 ||
            server.indexOf('wss://wsliveroom-test.zego.im/ws') != -1 ||
            server.indexOf('wss://webliveroom-test.zego.im/ws') != -1 ||
            server.indexOf('wss://webliveroom-test-bak.zego.im/ws') != -1 ||
            server.indexOf('wss://webliveroom-hk-test.zegocloud.com/ws') != -1 ||
            server.indexOf('wss://webliveroom-hk-test-bak.zegocloud.com/ws') != -1) {
            return true;
        }
        return false;
    };
    ClientUtil.setDebug = function (server, stateCenter) {
        if (typeof server === 'string' && server.indexOf('wss') > -1) {
            stateCenter.debug = ClientUtil.isTestEnv(server);
        }
        else if (Array.isArray(server) &&
            server.length > 0 &&
            server.every(function (v) { return typeof v === 'string' && v.indexOf('wss') > -1; })) {
            stateCenter.debug = this.isTestEnv(server[0]) || this.isTestEnv(server[1]);
        }
        else {
            console.error('server wrong');
        }
        stateCenter.testEnvironment = stateCenter.debug;
    };
    ClientUtil.getPublisherStateType = function (type) {
        return type == 0 || type == 1 ? (type == 0 ? 'PUBLISHING' : 'NO_PUBLISH') : 'PUBLISH_REQUESTING';
    };
    ClientUtil.getPlayerStateType = function (type) {
        return type == 0 || type == 1 ? (type == 0 ? 'PLAYING' : 'NO_PLAY') : 'PLAY_REQUESTING';
    };
    ClientUtil.getSteamUpdateType = function (type) {
        return type == 0 ? 'DELETE' : 'ADD';
    };
    ClientUtil.getLogLevel = function (level) {
        return zego_entity_1.LOG_LEVEL[level];
    };
    return ClientUtil;
}());
exports.ClientUtil = ClientUtil;


/***/ }),

/***/ "./sdk/util/mediaUtil.ts":
/*!*******************************!*\
  !*** ./sdk/util/mediaUtil.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var client_util_1 = __webpack_require__(/*! ./client-util */ "./sdk/util/client-util.ts");
var MediaUtil = /** @class */ (function () {
    function MediaUtil(context, _a) {
        var _this = this;
        var type = _a.type, _b = _a.channels, channels = _b === void 0 ? 1 : _b, _c = _a.bufferSize, bufferSize = _c === void 0 ? 0 : _c, _d = _a.sampleBit, sampleBit = _d === void 0 ? 16 : _d, _e = _a.sampleRate, sampleRate = _e === void 0 ? 44100 : _e;
        this.instant = 0.0;
        this.slow = 0.0;
        this.clip = 0.0;
        this.context = context;
        this.type = type;
        this.channels = channels;
        this.bufferSize = bufferSize;
        this.sampleBit = sampleBit;
        this.sampleRate = sampleRate;
        this.script = context.createScriptProcessor(bufferSize, channels, channels);
        var audioprocessTime = new Date().getTime();
        this.script.addEventListener('audioprocess', function (event) {
            var input = event.inputBuffer.getChannelData(0);
            var i;
            var sum = 0.0;
            var clipcount = 0;
            for (i = 0; i < input.length; ++i) {
                sum += input[i] * input[i];
                if (Math.abs(input[i]) > 0.99) {
                    clipcount += 1;
                }
            }
            _this.instant = Math.sqrt(sum / input.length);
            _this.slow = 0.95 * _this.slow + 0.05 * _this.instant;
            _this.clip = clipcount / input.length;
            // 需要获取音频数据
            if (type === 'pcm' || type === 'wav') {
                var buffer = [];
                for (var i_1 = 0; i_1 < _this.channels; i_1++) {
                    buffer.push(event.inputBuffer.getChannelData(i_1));
                }
                _this.recorderBuffer(buffer);
            }
        });
        // 需要获取音频数据,准备worker环境
        if (type === 'pcm' || type === 'wav') {
            this.initRecorderBuffer(type);
        }
    }
    MediaUtil.prototype.connectToSource = function (stream, callback) {
        console.log('SoundMeter connecting');
        try {
            this.mic = this.context.createMediaStreamSource(stream);
            this.mic.connect(this.script);
            // necessary to make sample run, but should not be.
            this.script.connect(this.context.destination);
            if (typeof callback !== 'undefined') {
                callback(null);
            }
        }
        catch (e) {
            console.error(e);
            if (typeof callback !== 'undefined') {
                callback(e);
            }
        }
        return this;
    };
    MediaUtil.prototype.recorderBuffer = function (audioBuffer) {
        this.worker.postMessage({
            command: 'record',
            val: audioBuffer,
        });
    };
    MediaUtil.prototype.initRecorderBuffer = function (type) {
        var _this = this;
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        var self = this;
        this.worker = client_util_1.ClientUtil.inlineWorker(function () {
            var record = [], sampleChannel, sampleBit, sampleRate, oldSampleRate, bufferSize, type;
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            var _self = _this;
            function init(option) {
                sampleChannel = option.sampleChannel;
                sampleBit = option.sampleBit;
                sampleRate = option.sampleRate;
                oldSampleRate = option.oldSampleRate;
                bufferSize = option.bufferSize;
                type = option.type;
            }
            function floatTo16BitPCM(output, offset, input) {
                for (var i = 0; i < input.length; i++, offset += 2) {
                    var s = Math.max(-1, Math.min(1, input[i]));
                    output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
                }
            }
            function floatTo8BitPCM(output, offset, input) {
                for (var i = 0; i < input.length; i++, offset++) {
                    //这里只能加1了
                    var s = Math.max(-1, Math.min(1, input[i]));
                    var val = s < 0 ? s * 0x80 : s * 0x7f;
                    val += 128;
                    output.setInt8(offset, val);
                }
            }
            function floatToPCM(samples, _sampleBit) {
                var dataLength;
                if (_sampleBit == 8) {
                    dataLength = samples.length;
                }
                else if (_sampleBit == 16) {
                    //16位的需要两倍空间
                    dataLength = samples.length;
                    dataLength = dataLength * 2;
                }
                var buffer = new ArrayBuffer(dataLength);
                var view = new DataView(buffer);
                if (_sampleBit == 8) {
                    floatTo8BitPCM(view, 0, samples);
                }
                else if (sampleBit == 16) {
                    floatTo16BitPCM(view, 0, samples);
                }
                return view;
            }
            function writeString(view, offset, string) {
                for (var i = 0; i < string.length; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            }
            function encodeWave(samples, _sampleBit) {
                var dataLength;
                if (_sampleBit == 8) {
                    dataLength = samples.length;
                }
                else if (sampleBit == 16) {
                    //16位的需要两倍空间
                    dataLength = samples.length;
                    dataLength = dataLength * 2;
                }
                var buffer = new ArrayBuffer(dataLength + 44);
                var view = new DataView(buffer);
                var newSamepleRate = sampleRate;
                var newSampleBits = sampleBit;
                var newSampleChannel = sampleChannel;
                writeString(view, 0, 'RIFF');
                view.setUint32(4, 36 + dataLength, true);
                writeString(view, 8, 'WAVE');
                writeString(view, 12, 'fmt ');
                view.setUint32(16, 16, true);
                view.setUint16(20, 1, true);
                view.setUint16(22, newSampleChannel, true);
                view.setUint32(24, newSamepleRate, true);
                view.setUint32(28, newSamepleRate * newSampleChannel * (newSampleBits / 8), true);
                view.setUint16(32, newSampleChannel * (newSampleBits / 8), true);
                view.setUint16(34, newSampleBits, true);
                writeString(view, 36, 'data');
                view.setUint32(40, dataLength, true);
                if (sampleBit == 8) {
                    floatTo8BitPCM(view, 44, samples);
                }
                else if (sampleBit == 16) {
                    floatTo16BitPCM(view, 44, samples);
                }
                return view;
            }
            //压缩
            function compressHandler(compressRate, data) {
                var result = new Float32Array(data.length / compressRate);
                var index = 0, j = 0;
                while (index < result.length) {
                    result[index] = data[j];
                    j += compressRate;
                    index++;
                }
                return result;
            }
            //获取buffer
            function getAudioBuffer(data, _bufferSize, _record) {
                var result = new Float32Array(_bufferSize * data.length);
                var offset = 0;
                for (var i = 0; i < _record[0].length; i++) {
                    result.set(_record[0][i], offset);
                    offset += _record[0][i].length;
                    //console.log(offset);
                }
                return result;
            }
            //合并声道
            function combineChannels(channelL, channelR) {
                var result = new Float32Array(channelL.length + channelR.length);
                for (var i = 0; i < channelL.length + channelR.length; i += 2) {
                    result[i] = channelL[(i / 2) >> 0];
                    result[i + 1] = channelR[(i / 2) >> 0];
                }
                return result;
            }
            function collectBuffer(compressRate) {
                var collect_record, compress_collect_record;
                if (sampleChannel == 1) {
                    //单声道
                    collect_record = getAudioBuffer(record[0], bufferSize, record);
                    if (compressRate != 1) {
                        //压缩比
                        compress_collect_record = compressHandler(compressRate, collect_record);
                    }
                }
                else if (sampleChannel == 2) {
                    //双声道
                    //处理声道1,处理声道2
                    var collect_record_1 = getAudioBuffer(record[0], bufferSize, record);
                    var collect_record_2 = getAudioBuffer(record[1], bufferSize, record);
                    var compress_collect_record_1 = void 0, compress_collect_record_2 = void 0;
                    if (compressRate != 1) {
                        //压缩声道1，2
                        compress_collect_record_1 = compressHandler(compressRate, collect_record_1);
                        compress_collect_record_2 = compressHandler(compressRate, collect_record_2);
                        compress_collect_record = combineChannels(compress_collect_record_1, compress_collect_record_2);
                    }
                    else {
                        collect_record = combineChannels(collect_record_1, collect_record_2);
                    }
                }
                if (compressRate != 1) {
                    //输入采集概和输出采集率不同，需要压缩采集点
                    return compress_collect_record;
                }
                else {
                    return collect_record;
                }
            }
            function collectPCM(compressRate) {
                var result = collectBuffer(compressRate);
                var interleaveData = floatToPCM(result, sampleBit);
                _self.postMessage({
                    command: 'exportPcmLive',
                    val: interleaveData,
                });
            }
            function collectWAV(compressRate) {
                var result = collectBuffer(compressRate);
                var interleaveData = encodeWave(result, sampleBit);
                _self.postMessage({
                    command: 'exportWav',
                    val: interleaveData,
                });
            }
            function recordData(buffer) {
                for (var i = 0; i < sampleChannel; i++) {
                    if (!record[i]) {
                        record[i] = [];
                    }
                    record[i].push(buffer[i]);
                }
                var compressRate = Math.round(oldSampleRate / sampleRate);
                if (type === 'pcm') {
                    collectPCM(compressRate);
                }
                else if (type === 'wav') {
                    collectWAV(compressRate);
                }
                record = []; //清空
            }
            _this.onmessage = function (e) {
                switch (e.data.command) {
                    case 'init':
                        init(e.data.val);
                        break;
                    case 'record':
                        recordData(e.data.val);
                        break;
                }
            };
        });
        this.worker.postMessage({
            command: 'init',
            val: {
                sampleChannel: this.channels,
                sampleBit: this.sampleBit,
                sampleRate: this.sampleRate,
                oldSampleRate: this.context.sampleRate,
                bufferSize: this.bufferSize,
                type: type,
            },
        });
        this.worker.onmessage = function (e) {
            switch (e.data.command) {
                case 'exportPcmLive':
                    self.onReceiveBuffer(e.data.val);
                    break;
                case 'exportWav':
                    self.onReceiveWav(e.data.val);
                    break;
            }
        };
    };
    MediaUtil.prototype.onReceiveBuffer = function (val) { };
    MediaUtil.prototype.onReceiveWav = function (wavBlob) { };
    MediaUtil.prototype.writeString = function (view, offset, string) {
        for (var i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    };
    MediaUtil.prototype.writeBuffer = function (view, offset, buffer) {
        for (var i = 0; i < buffer.byteLength; i++) {
            view.setUint8(offset + i, buffer[i]);
        }
    };
    MediaUtil.prototype.concatenation = function (segments) {
        var sumLength = 0;
        for (var i = 0; i < segments.length; ++i) {
            sumLength += segments[i].buffer.byteLength;
        }
        var whole = new Uint8Array(sumLength);
        var pos = 0;
        for (var i = 0; i < segments.length; ++i) {
            whole.set(new Uint8Array(segments[i].buffer), pos);
            pos += segments[i].buffer.byteLength;
        }
        return whole;
    };
    MediaUtil.prototype.encodeWave = function (samples) {
        var wholeBuffer = this.concatenation(samples);
        var dataLength = wholeBuffer.byteLength;
        var buffer = new ArrayBuffer(dataLength + 44);
        var view = new DataView(buffer);
        var newSamepleRate = this.sampleRate;
        var newSampleBits = this.sampleBit;
        var newSampleChannel = this.channels;
        this.writeString(view, 0, 'RIFF');
        view.setUint32(4, 36 + dataLength, true);
        this.writeString(view, 8, 'WAVE');
        this.writeString(view, 12, 'fmt ');
        view.setUint32(16, 16, true);
        view.setUint16(20, 1, true);
        view.setUint16(22, newSampleChannel, true);
        view.setUint32(24, newSamepleRate, true);
        view.setUint32(28, newSamepleRate * newSampleChannel * (newSampleBits / 8), true);
        view.setUint16(32, newSampleChannel * (newSampleBits / 8), true);
        view.setUint16(34, newSampleBits, true);
        this.writeString(view, 36, 'data');
        view.setUint32(40, dataLength, true);
        this.writeBuffer(view, 44, wholeBuffer);
        return view;
    };
    MediaUtil.prototype.stop = function () {
        this.mic.disconnect();
        this.script.disconnect();
    };
    return MediaUtil;
}());
exports.MediaUtil = MediaUtil;


/***/ }),

/***/ "./sdk/util/sdpUtil.ts":
/*!*****************************!*\
  !*** ./sdk/util/sdpUtil.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var SdpUtil = /** @class */ (function () {
    function SdpUtil() {
    }
    SdpUtil.zegoSdp = function (sdp) {
        var sdpLines = sdp.split('\r\n');
        var h264_id = [], opus_id = [];
        sdpLines.forEach(function (item) {
            var _id = item.match(/a=rtpmap:(\d+)\s+((H264\/90000)|(opus\/48000\/2))/);
            if (_id && _id[1] && _id[2]) {
                //@ts-ignore
                _id[2] === 'H264/90000' && h264_id.push(_id[1]);
                //@ts-ignore
                _id[2] === 'opus/48000/2' && opus_id.push(_id[1]);
            }
        });
        var newSdpLines = [];
        sdpLines.map(function (item) {
            //去掉非h64和opus编解码
            var isH264_opus = true;
            var other_needed = true;
            var _matched = item.match(/((a=rtcp-fb:)|(a=rtpmap:)|(a=fmtp:))(\d+)/);
            if (_matched && _matched[5]) {
                if (!__spreadArrays(h264_id, opus_id).some(function (item) { return item == _matched[5]; })) {
                    isH264_opus = false;
                }
            }
            //去掉非h64和opus编解码 m=video
            if (item.indexOf('m=video') > -1) {
                var _videoDesc = item.split(' ');
                item = __spreadArrays([_videoDesc[0], _videoDesc[1], _videoDesc[2]], h264_id).join(' ');
            }
            else if (item.indexOf('m=audio') > -1) {
                var _videoDesc = item.split(' ');
                item = __spreadArrays([_videoDesc[0], _videoDesc[1], _videoDesc[2]], opus_id).join(' ');
            }
            //a=ssrc 非cname
            // if (item.indexOf ('a=ssrc') > -1 && item.indexOf ('cname') < 0) {
            //         other_needed = false
            // }
            //@ts-ignore
            isH264_opus && other_needed && newSdpLines.push(item);
        });
        return newSdpLines.join('\r\n');
    };
    SdpUtil.getSDPByVideDecodeType = function (sdp, type) {
        var videoDecodeTypes = {
            str: '',
            arr: [],
            obj: {
                H264: [],
                H265: [],
                VP8: [],
                VP9: [],
                OHTER: [],
            },
        };
        if (!sdp.includes('m=video')) {
            return sdp;
        }
        var videoHead = /m=video.+/.exec(sdp)[0];
        videoHead = videoHead.match(/[\s|\d]+/g)[1].replace(' ', '');
        videoDecodeTypes.str = videoHead;
        videoDecodeTypes.arr = videoDecodeTypes.str.split(' ');
        videoDecodeTypes.arr.forEach(function (decodeType) {
            var reg = new RegExp('a=rtpmap:' + decodeType + '.+');
            var matched = reg.exec(sdp)[0];
            if (matched.includes('H264')) {
                videoDecodeTypes.obj.H264.push(decodeType);
            }
            else if (matched.includes('H265')) {
                videoDecodeTypes.obj.H265.push(decodeType);
            }
            else if (matched.includes('VP8')) {
                videoDecodeTypes.obj.VP8.push(decodeType);
            }
            else if (matched.includes('VP9')) {
                videoDecodeTypes.obj.VP9.push(decodeType);
            }
            else {
                videoDecodeTypes.obj.OHTER.push(decodeType);
            }
        });
        videoDecodeTypes.obj.OHTER.forEach(function (otherType) {
            var reg = new RegExp('a=fmtp:' + otherType + '.+apt=(\\d+)');
            var matchedArr = reg.exec(sdp);
            var matched = matchedArr && matchedArr[1];
            if (matched) {
                if (videoDecodeTypes.obj.H264.includes(matched)) {
                    videoDecodeTypes.obj.H264.push(otherType);
                }
                else if (videoDecodeTypes.obj.H265.includes(matched)) {
                    videoDecodeTypes.obj.H265.push(otherType);
                }
                else if (videoDecodeTypes.obj.VP8.includes(matched)) {
                    videoDecodeTypes.obj.VP8.push(otherType);
                }
                else if (videoDecodeTypes.obj.VP9.includes(matched)) {
                    videoDecodeTypes.obj.VP9.push(otherType);
                }
            }
        });
        var targetArr = [];
        if (type === 'VP9') {
            targetArr = __spreadArrays(videoDecodeTypes.obj.H265, videoDecodeTypes.obj.H264, videoDecodeTypes.obj.VP8);
        }
        else if (type === 'VP8') {
            targetArr = __spreadArrays(videoDecodeTypes.obj.H265, videoDecodeTypes.obj.H264, videoDecodeTypes.obj.VP9);
        }
        else if (type === 'H264') {
            targetArr = __spreadArrays(videoDecodeTypes.obj.H265, videoDecodeTypes.obj.VP8, videoDecodeTypes.obj.VP9);
        }
        else if (type === 'H265') {
            targetArr = __spreadArrays(videoDecodeTypes.obj.VP8, videoDecodeTypes.obj.H264, videoDecodeTypes.obj.VP9);
        }
        // targetArr.forEach(itype => {
        //         let currentIndex = videoDecodeTypes.arr.indexOf(itype);
        //         let reg;
        //         if( currentIndex!==(videoDecodeTypes.arr.length - 1)){
        //                 reg = new RegExp('a=rtpmap:' + itype + '[\\s\\S]+a=rtpmap:' + videoDecodeTypes.arr[currentIndex+1])
        //                 sdp = sdp.replace(reg, 'a=rtpmap:' + videoDecodeTypes.arr[currentIndex+1]);
        //         }else{
        //                 reg = new RegExp ('a=rtpmap:' + itype + '[\\s\\S]+a=fmtp:' + itype + '.+\\s\\n')
        //                 sdp = sdp.replace(reg, '');
        //         }
        //         videoDecodeTypes.arr.splice(currentIndex,1)
        //         //console.log('targetArr',reg)
        // });
        targetArr.forEach(function (itype) {
            var currentIndex = videoDecodeTypes.arr.indexOf(itype);
            videoDecodeTypes.arr.splice(currentIndex, 1);
            var regRtpmap = new RegExp('a=rtpmap:' + itype + '.+\\s\\n', 'g');
            var regRtcpfb = new RegExp('a=rtcp-fb:' + itype + '.+\\s\\n', 'g');
            var regFmtp = new RegExp('a=fmtp:' + itype + '.+\\s\\n', 'g');
            sdp = sdp.replace(regRtpmap, '');
            sdp = sdp.replace(regRtcpfb, '');
            sdp = sdp.replace(regFmtp, '');
        });
        sdp = sdp.replace(videoHead, videoDecodeTypes.arr.join(' '));
        return sdp;
    };
    return SdpUtil;
}());
exports.SdpUtil = SdpUtil;


/***/ }),

/***/ "./sdk/webrtc/adapter.js":
/*!*******************************!*\
  !*** ./sdk/webrtc/adapter.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */

  'use strict';

  var _adapter_factory = require('./adapter_factory.js');

  var adapter = (0, _adapter_factory.adapterFactory)({ window: window });
  module.exports = adapter; // this is the difference from adapter_core.

  },{"./adapter_factory.js":2}],2:[function(require,module,exports){
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.adapterFactory = adapterFactory;

  var _utils = require('./utils');

  var utils = _interopRequireWildcard(_utils);

  var _chrome_shim = require('./chrome/chrome_shim');

  var chromeShim = _interopRequireWildcard(_chrome_shim);

  var _edge_shim = require('./edge/edge_shim');

  var edgeShim = _interopRequireWildcard(_edge_shim);

  var _firefox_shim = require('./firefox/firefox_shim');

  var firefoxShim = _interopRequireWildcard(_firefox_shim);

  var _safari_shim = require('./safari/safari_shim');

  var safariShim = _interopRequireWildcard(_safari_shim);

  var _common_shim = require('./common_shim');

  var commonShim = _interopRequireWildcard(_common_shim);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  // Shimming starts here.
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  function adapterFactory() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        window = _ref.window;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      shimChrome: true,
      shimFirefox: true,
      shimEdge: true,
      shimSafari: true
    };

    // Utils.
    var logging = utils.log;
    var browserDetails = utils.detectBrowser(window);

    var adapter = {
      browserDetails: browserDetails,
      commonShim: commonShim,
      extractVersion: utils.extractVersion,
      disableLog: utils.disableLog,
      disableWarnings: utils.disableWarnings
    };

    // Shim browser if found.
    switch (browserDetails.browser) {
      case 'chrome':
        if (!chromeShim || !chromeShim.shimPeerConnection || !options.shimChrome) {
          logging('Chrome shim is not included in this adapter release.');
          return adapter;
        }
        logging('adapter.js shimming chrome.');
        // Export to the adapter global object visible in the browser.
        adapter.browserShim = chromeShim;

        chromeShim.shimGetUserMedia(window);
        chromeShim.shimMediaStream(window);
        chromeShim.shimPeerConnection(window);
        chromeShim.shimOnTrack(window);
        chromeShim.shimAddTrackRemoveTrack(window);
        chromeShim.shimGetSendersWithDtmf(window);
        chromeShim.shimGetStats(window);
        chromeShim.shimSenderReceiverGetStats(window);
        chromeShim.fixNegotiationNeeded(window);

        commonShim.shimRTCIceCandidate(window);
        commonShim.shimConnectionState(window);
        commonShim.shimMaxMessageSize(window);
        commonShim.shimSendThrowTypeError(window);
        commonShim.removeAllowExtmapMixed(window);
        break;
      case 'firefox':
        if (!firefoxShim || !firefoxShim.shimPeerConnection || !options.shimFirefox) {
          logging('Firefox shim is not included in this adapter release.');
          return adapter;
        }
        logging('adapter.js shimming firefox.');
        // Export to the adapter global object visible in the browser.
        adapter.browserShim = firefoxShim;

        firefoxShim.shimGetUserMedia(window);
        firefoxShim.shimPeerConnection(window);
        firefoxShim.shimOnTrack(window);
        firefoxShim.shimRemoveStream(window);
        firefoxShim.shimSenderGetStats(window);
        firefoxShim.shimReceiverGetStats(window);
        firefoxShim.shimRTCDataChannel(window);

        commonShim.shimRTCIceCandidate(window);
        commonShim.shimConnectionState(window);
        commonShim.shimMaxMessageSize(window);
        commonShim.shimSendThrowTypeError(window);
        break;
      case 'edge':
        if (!edgeShim || !edgeShim.shimPeerConnection || !options.shimEdge) {
          logging('MS edge shim is not included in this adapter release.');
          return adapter;
        }
        logging('adapter.js shimming edge.');
        // Export to the adapter global object visible in the browser.
        adapter.browserShim = edgeShim;

        edgeShim.shimGetUserMedia(window);
        edgeShim.shimGetDisplayMedia(window);
        edgeShim.shimPeerConnection(window);
        edgeShim.shimReplaceTrack(window);

        // the edge shim implements the full RTCIceCandidate object.

        commonShim.shimMaxMessageSize(window);
        commonShim.shimSendThrowTypeError(window);
        break;
      case 'safari':
        if (!safariShim || !options.shimSafari) {
          logging('Safari shim is not included in this adapter release.');
          return adapter;
        }
        logging('adapter.js shimming safari.');
        // Export to the adapter global object visible in the browser.
        adapter.browserShim = safariShim;

        safariShim.shimRTCIceServerUrls(window);
        safariShim.shimCreateOfferLegacy(window);
        safariShim.shimCallbacksAPI(window);
        safariShim.shimLocalStreamsAPI(window);
        safariShim.shimRemoteStreamsAPI(window);
        safariShim.shimTrackEventTransceiver(window);
        safariShim.shimGetUserMedia(window);

        commonShim.shimRTCIceCandidate(window);
        commonShim.shimMaxMessageSize(window);
        commonShim.shimSendThrowTypeError(window);
        commonShim.removeAllowExtmapMixed(window);
        break;
      default:
        logging('Unsupported browser!');
        break;
    }

    return adapter;
  }

  // Browser shims.

  },{"./chrome/chrome_shim":3,"./common_shim":6,"./edge/edge_shim":7,"./firefox/firefox_shim":11,"./safari/safari_shim":14,"./utils":15}],3:[function(require,module,exports){

  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _getusermedia = require('./getusermedia');

  Object.defineProperty(exports, 'shimGetUserMedia', {
    enumerable: true,
    get: function get() {
      return _getusermedia.shimGetUserMedia;
    }
  });

  var _getdisplaymedia = require('./getdisplaymedia');

  Object.defineProperty(exports, 'shimGetDisplayMedia', {
    enumerable: true,
    get: function get() {
      return _getdisplaymedia.shimGetDisplayMedia;
    }
  });
  exports.shimMediaStream = shimMediaStream;
  exports.shimOnTrack = shimOnTrack;
  exports.shimGetSendersWithDtmf = shimGetSendersWithDtmf;
  exports.shimGetStats = shimGetStats;
  exports.shimSenderReceiverGetStats = shimSenderReceiverGetStats;
  exports.shimAddTrackRemoveTrackWithNative = shimAddTrackRemoveTrackWithNative;
  exports.shimAddTrackRemoveTrack = shimAddTrackRemoveTrack;
  exports.shimPeerConnection = shimPeerConnection;
  exports.fixNegotiationNeeded = fixNegotiationNeeded;

  var _utils = require('../utils.js');

  var utils = _interopRequireWildcard(_utils);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  function shimMediaStream(window) {
    window.MediaStream = window.MediaStream || window.webkitMediaStream;
  }

  function shimOnTrack(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('ontrack' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'ontrack', {
        get: function get() {
          return this._ontrack;
        },
        set: function set(f) {
          if (this._ontrack) {
            this.removeEventListener('track', this._ontrack);
          }
          this.addEventListener('track', this._ontrack = f);
        },

        enumerable: true,
        configurable: true
      });
      var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function () {
        var _this = this;

        if (!this._ontrackpoly) {
          this._ontrackpoly = function (e) {
            // onaddstream does not fire when a track is added to an existing
            // stream. But stream.onaddtrack is implemented so we use that.
            e.stream.addEventListener('addtrack', function (te) {
              var receiver = void 0;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = _this.getReceivers().find(function (r) {
                  return r.track && r.track.id === te.track.id;
                });
              } else {
                receiver = { track: te.track };
              }

              var event = new Event('track');
              event.track = te.track;
              event.receiver = receiver;
              event.transceiver = { receiver: receiver };
              event.streams = [e.stream];
              _this.dispatchEvent(event);
            });
            e.stream.getTracks().forEach(function (track) {
              var receiver = void 0;
              if (window.RTCPeerConnection.prototype.getReceivers) {
                receiver = _this.getReceivers().find(function (r) {
                  return r.track && r.track.id === track.id;
                });
              } else {
                receiver = { track: track };
              }
              var event = new Event('track');
              event.track = track;
              event.receiver = receiver;
              event.transceiver = { receiver: receiver };
              event.streams = [e.stream];
              _this.dispatchEvent(event);
            });
          };
          this.addEventListener('addstream', this._ontrackpoly);
        }
        return origSetRemoteDescription.apply(this, arguments);
      };
    } else {
      // even if RTCRtpTransceiver is in window, it is only used and
      // emitted in unified-plan. Unfortunately this means we need
      // to unconditionally wrap the event.
      utils.wrapPeerConnectionEvent(window, 'track', function (e) {
        if (!e.transceiver) {
          Object.defineProperty(e, 'transceiver', { value: { receiver: e.receiver } });
        }
        return e;
      });
    }
  }

  function shimGetSendersWithDtmf(window) {
    // Overrides addTrack/removeTrack, depends on shimAddTrackRemoveTrack.
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && !('getSenders' in window.RTCPeerConnection.prototype) && 'createDTMFSender' in window.RTCPeerConnection.prototype) {
      var shimSenderWithDtmf = function shimSenderWithDtmf(pc, track) {
        return {
          track: track,
          get dtmf() {
            if (this._dtmf === undefined) {
              if (track.kind === 'audio') {
                this._dtmf = pc.createDTMFSender(track);
              } else {
                this._dtmf = null;
              }
            }
            return this._dtmf;
          },
          _pc: pc
        };
      };

      // augment addTrack when getSenders is not available.
      if (!window.RTCPeerConnection.prototype.getSenders) {
        window.RTCPeerConnection.prototype.getSenders = function () {
          this._senders = this._senders || [];
          return this._senders.slice(); // return a copy of the internal state.
        };
        var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
        window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
          var sender = origAddTrack.apply(this, arguments);
          if (!sender) {
            sender = shimSenderWithDtmf(this, track);
            this._senders.push(sender);
          }
          return sender;
        };

        var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
        window.RTCPeerConnection.prototype.removeTrack = function (sender) {
          origRemoveTrack.apply(this, arguments);
          var idx = this._senders.indexOf(sender);
          if (idx !== -1) {
            this._senders.splice(idx, 1);
          }
        };
      }
      var origAddStream = window.RTCPeerConnection.prototype.addStream;
      window.RTCPeerConnection.prototype.addStream = function (stream) {
        var _this2 = this;

        this._senders = this._senders || [];
        origAddStream.apply(this, [stream]);
        stream.getTracks().forEach(function (track) {
          _this2._senders.push(shimSenderWithDtmf(_this2, track));
        });
      };

      var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
      window.RTCPeerConnection.prototype.removeStream = function (stream) {
        var _this3 = this;

        this._senders = this._senders || [];
        origRemoveStream.apply(this, [stream]);

        stream.getTracks().forEach(function (track) {
          var sender = _this3._senders.find(function (s) {
            return s.track === track;
          });
          if (sender) {
            // remove sender
            _this3._senders.splice(_this3._senders.indexOf(sender), 1);
          }
        });
      };
    } else if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'getSenders' in window.RTCPeerConnection.prototype && 'createDTMFSender' in window.RTCPeerConnection.prototype && window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      window.RTCPeerConnection.prototype.getSenders = function () {
        var _this4 = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this4;
        });
        return senders;
      };

      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function get() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = this._pc.createDTMFSender(this.track);
            } else {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }
  }

  function shimGetStats(window) {
    if (!window.RTCPeerConnection) {
      return;
    }

    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function (selector, successCallback, errorCallback) {
      var _this5 = this;

      var args = arguments;

      // If selector is a function then we are in the old style stats so just
      // pass back the original getStats format to avoid breaking old users.
      if (arguments.length > 0 && typeof selector === 'function') {
        return origGetStats.apply(this, arguments);
      }

      // When spec-style getStats is supported, return those when called with
      // either no arguments or the selector argument is null.
      if (origGetStats.length === 0 && (arguments.length === 0 || typeof arguments[0] !== 'function')) {
        return origGetStats.apply(this, []);
      }

      var fixChromeStats_ = function fixChromeStats_(response) {
        var standardReport = {};
        var reports = response.result();
        reports.forEach(function (report) {
          var standardStats = {
            id: report.id,
            timestamp: report.timestamp,
            type: {
              localcandidate: 'local-candidate',
              remotecandidate: 'remote-candidate'
            }[report.type] || report.type
          };
          report.names().forEach(function (name) {
            standardStats[name] = report.stat(name);
          });
          standardReport[standardStats.id] = standardStats;
        });

        return standardReport;
      };

      // shim getStats with maplike support
      var makeMapStats = function makeMapStats(stats) {
        return new Map(Object.keys(stats).map(function (key) {
          return [key, stats[key]];
        }));
      };

      if (arguments.length >= 2) {
        var successCallbackWrapper_ = function successCallbackWrapper_(response) {
          args[1](makeMapStats(fixChromeStats_(response)));
        };

        return origGetStats.apply(this, [successCallbackWrapper_, arguments[0]]);
      }

      // promise-support
      return new Promise(function (resolve, reject) {
        origGetStats.apply(_this5, [function (response) {
          resolve(makeMapStats(fixChromeStats_(response)));
        }, reject]);
      }).then(successCallback, errorCallback);
    };
  }

  function shimSenderReceiverGetStats(window) {
    if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender && window.RTCRtpReceiver)) {
      return;
    }

    // shim sender stats.
    if (!('getStats' in window.RTCRtpSender.prototype)) {
      var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
      if (origGetSenders) {
        window.RTCPeerConnection.prototype.getSenders = function () {
          var _this6 = this;

          var senders = origGetSenders.apply(this, []);
          senders.forEach(function (sender) {
            return sender._pc = _this6;
          });
          return senders;
        };
      }

      var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
      if (origAddTrack) {
        window.RTCPeerConnection.prototype.addTrack = function () {
          var sender = origAddTrack.apply(this, arguments);
          sender._pc = this;
          return sender;
        };
      }
      window.RTCRtpSender.prototype.getStats = function () {
        var sender = this;
        return this._pc.getStats().then(function (result) {
          return (
            /* Note: this will include stats of all senders that
             *   send a track with the same id as sender.track as
             *   it is not possible to identify the RTCRtpSender.
             */
            utils.filterStats(result, sender.track, true)
          );
        });
      };
    }

    // shim receiver stats.
    if (!('getStats' in window.RTCRtpReceiver.prototype)) {
      var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
      if (origGetReceivers) {
        window.RTCPeerConnection.prototype.getReceivers = function () {
          var _this7 = this;

          var receivers = origGetReceivers.apply(this, []);
          receivers.forEach(function (receiver) {
            return receiver._pc = _this7;
          });
          return receivers;
        };
      }
      utils.wrapPeerConnectionEvent(window, 'track', function (e) {
        e.receiver._pc = e.srcElement;
        return e;
      });
      window.RTCRtpReceiver.prototype.getStats = function () {
        var receiver = this;
        return this._pc.getStats().then(function (result) {
          return utils.filterStats(result, receiver.track, false);
        });
      };
    }

    if (!('getStats' in window.RTCRtpSender.prototype && 'getStats' in window.RTCRtpReceiver.prototype)) {
      return;
    }

    // shim RTCPeerConnection.getStats(track).
    var origGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function () {
      if (arguments.length > 0 && arguments[0] instanceof window.MediaStreamTrack) {
        var track = arguments[0];
        var sender = void 0;
        var receiver = void 0;
        var err = void 0;
        this.getSenders().forEach(function (s) {
          if (s.track === track) {
            if (sender) {
              err = true;
            } else {
              sender = s;
            }
          }
        });
        this.getReceivers().forEach(function (r) {
          if (r.track === track) {
            if (receiver) {
              err = true;
            } else {
              receiver = r;
            }
          }
          return r.track === track;
        });
        if (err || sender && receiver) {
          return Promise.reject(new DOMException('There are more than one sender or receiver for the track.', 'InvalidAccessError'));
        } else if (sender) {
          return sender.getStats();
        } else if (receiver) {
          return receiver.getStats();
        }
        return Promise.reject(new DOMException('There is no sender or receiver for the track.', 'InvalidAccessError'));
      }
      return origGetStats.apply(this, arguments);
    };
  }

  function shimAddTrackRemoveTrackWithNative(window) {
    // shim addTrack/removeTrack with native variants in order to make
    // the interactions with legacy getLocalStreams behave as in other browsers.
    // Keeps a mapping stream.id => [stream, rtpsenders...]
    window.RTCPeerConnection.prototype.getLocalStreams = function () {
      var _this8 = this;

      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      return Object.keys(this._shimmedLocalStreams).map(function (streamId) {
        return _this8._shimmedLocalStreams[streamId][0];
      });
    };

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
      if (!stream) {
        return origAddTrack.apply(this, arguments);
      }
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      var sender = origAddTrack.apply(this, arguments);
      if (!this._shimmedLocalStreams[stream.id]) {
        this._shimmedLocalStreams[stream.id] = [stream, sender];
      } else if (this._shimmedLocalStreams[stream.id].indexOf(sender) === -1) {
        this._shimmedLocalStreams[stream.id].push(sender);
      }
      return sender;
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function (stream) {
      var _this9 = this;

      this._shimmedLocalStreams = this._shimmedLocalStreams || {};

      stream.getTracks().forEach(function (track) {
        var alreadyExists = _this9.getSenders().find(function (s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.', 'InvalidAccessError');
        }
      });
      var existingSenders = this.getSenders();
      origAddStream.apply(this, arguments);
      var newSenders = this.getSenders().filter(function (newSender) {
        return existingSenders.indexOf(newSender) === -1;
      });
      this._shimmedLocalStreams[stream.id] = [stream].concat(newSenders);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      delete this._shimmedLocalStreams[stream.id];
      return origRemoveStream.apply(this, arguments);
    };

    var origRemoveTrack = window.RTCPeerConnection.prototype.removeTrack;
    window.RTCPeerConnection.prototype.removeTrack = function (sender) {
      var _this10 = this;

      this._shimmedLocalStreams = this._shimmedLocalStreams || {};
      if (sender) {
        Object.keys(this._shimmedLocalStreams).forEach(function (streamId) {
          var idx = _this10._shimmedLocalStreams[streamId].indexOf(sender);
          if (idx !== -1) {
            _this10._shimmedLocalStreams[streamId].splice(idx, 1);
          }
          if (_this10._shimmedLocalStreams[streamId].length === 1) {
            delete _this10._shimmedLocalStreams[streamId];
          }
        });
      }
      return origRemoveTrack.apply(this, arguments);
    };
  }

  function shimAddTrackRemoveTrack(window) {
    if (!window.RTCPeerConnection) {
      return;
    }
    var browserDetails = utils.detectBrowser(window);
    // shim addTrack and removeTrack.
    if (window.RTCPeerConnection.prototype.addTrack && browserDetails.version >= 65) {
      return shimAddTrackRemoveTrackWithNative(window);
    }

    // also shim pc.getLocalStreams when addTrack is shimmed
    // to return the original streams.
    var origGetLocalStreams = window.RTCPeerConnection.prototype.getLocalStreams;
    window.RTCPeerConnection.prototype.getLocalStreams = function () {
      var _this11 = this;

      var nativeStreams = origGetLocalStreams.apply(this);
      this._reverseStreams = this._reverseStreams || {};
      return nativeStreams.map(function (stream) {
        return _this11._reverseStreams[stream.id];
      });
    };

    var origAddStream = window.RTCPeerConnection.prototype.addStream;
    window.RTCPeerConnection.prototype.addStream = function (stream) {
      var _this12 = this;

      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};

      stream.getTracks().forEach(function (track) {
        var alreadyExists = _this12.getSenders().find(function (s) {
          return s.track === track;
        });
        if (alreadyExists) {
          throw new DOMException('Track already exists.', 'InvalidAccessError');
        }
      });
      // Add identity mapping for consistency with addTrack.
      // Unless this is being used with a stream from addTrack.
      if (!this._reverseStreams[stream.id]) {
        var newStream = new window.MediaStream(stream.getTracks());
        this._streams[stream.id] = newStream;
        this._reverseStreams[newStream.id] = stream;
        stream = newStream;
      }
      origAddStream.apply(this, [stream]);
    };

    var origRemoveStream = window.RTCPeerConnection.prototype.removeStream;
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};

      origRemoveStream.apply(this, [this._streams[stream.id] || stream]);
      delete this._reverseStreams[this._streams[stream.id] ? this._streams[stream.id].id : stream.id];
      delete this._streams[stream.id];
    };

    window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
      var _this13 = this;

      if (this.signalingState === 'closed') {
        throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
      }
      var streams = [].slice.call(arguments, 1);
      if (streams.length !== 1 || !streams[0].getTracks().find(function (t) {
        return t === track;
      })) {
        // this is not fully correct but all we can manage without
        // [[associated MediaStreams]] internal slot.
        throw new DOMException('The adapter.js addTrack polyfill only supports a single ' + ' stream which is associated with the specified track.', 'NotSupportedError');
      }

      var alreadyExists = this.getSenders().find(function (s) {
        return s.track === track;
      });
      if (alreadyExists) {
        throw new DOMException('Track already exists.', 'InvalidAccessError');
      }

      this._streams = this._streams || {};
      this._reverseStreams = this._reverseStreams || {};
      var oldStream = this._streams[stream.id];
      if (oldStream) {
        // this is using odd Chrome behaviour, use with caution:
        // https://bugs.chromium.org/p/webrtc/issues/detail?id=7815
        // Note: we rely on the high-level addTrack/dtmf shim to
        // create the sender with a dtmf sender.
        oldStream.addTrack(track);

        // Trigger ONN async.
        Promise.resolve().then(function () {
          _this13.dispatchEvent(new Event('negotiationneeded'));
        });
      } else {
        var newStream = new window.MediaStream([track]);
        this._streams[stream.id] = newStream;
        this._reverseStreams[newStream.id] = stream;
        this.addStream(newStream);
      }
      return this.getSenders().find(function (s) {
        return s.track === track;
      });
    };

    // replace the internal stream id with the external one and
    // vice versa.
    function replaceInternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(internalStream.id, 'g'), externalStream.id);
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp
      });
    }
    function replaceExternalStreamId(pc, description) {
      var sdp = description.sdp;
      Object.keys(pc._reverseStreams || []).forEach(function (internalId) {
        var externalStream = pc._reverseStreams[internalId];
        var internalStream = pc._streams[externalStream.id];
        sdp = sdp.replace(new RegExp(externalStream.id, 'g'), internalStream.id);
      });
      return new RTCSessionDescription({
        type: description.type,
        sdp: sdp
      });
    }
    ['createOffer', 'createAnswer'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function () {
        var _this14 = this;

        var args = arguments;
        var isLegacyCall = arguments.length && typeof arguments[0] === 'function';
        if (isLegacyCall) {
          return nativeMethod.apply(this, [function (description) {
            var desc = replaceInternalStreamId(_this14, description);
            args[0].apply(null, [desc]);
          }, function (err) {
            if (args[1]) {
              args[1].apply(null, err);
            }
          }, arguments[2]]);
        }
        return nativeMethod.apply(this, arguments).then(function (description) {
          return replaceInternalStreamId(_this14, description);
        });
      };
    });

    var origSetLocalDescription = window.RTCPeerConnection.prototype.setLocalDescription;
    window.RTCPeerConnection.prototype.setLocalDescription = function () {
      if (!arguments.length || !arguments[0].type) {
        return origSetLocalDescription.apply(this, arguments);
      }
      arguments[0] = replaceExternalStreamId(this, arguments[0]);
      return origSetLocalDescription.apply(this, arguments);
    };

    // TODO: mangle getStats: https://w3c.github.io/webrtc-stats/#dom-rtcmediastreamstats-streamidentifier

    var origLocalDescription = Object.getOwnPropertyDescriptor(window.RTCPeerConnection.prototype, 'localDescription');
    Object.defineProperty(window.RTCPeerConnection.prototype, 'localDescription', {
      get: function get() {
        var description = origLocalDescription.get.apply(this);
        if (description.type === '') {
          return description;
        }
        return replaceInternalStreamId(this, description);
      }
    });

    window.RTCPeerConnection.prototype.removeTrack = function (sender) {
      var _this15 = this;

      if (this.signalingState === 'closed') {
        throw new DOMException('The RTCPeerConnection\'s signalingState is \'closed\'.', 'InvalidStateError');
      }
      // We can not yet check for sender instanceof RTCRtpSender
      // since we shim RTPSender. So we check if sender._pc is set.
      if (!sender._pc) {
        throw new DOMException('Argument 1 of RTCPeerConnection.removeTrack ' + 'does not implement interface RTCRtpSender.', 'TypeError');
      }
      var isLocal = sender._pc === this;
      if (!isLocal) {
        throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError');
      }

      // Search for the native stream the senders track belongs to.
      this._streams = this._streams || {};
      var stream = void 0;
      Object.keys(this._streams).forEach(function (streamid) {
        var hasTrack = _this15._streams[streamid].getTracks().find(function (track) {
          return sender.track === track;
        });
        if (hasTrack) {
          stream = _this15._streams[streamid];
        }
      });

      if (stream) {
        if (stream.getTracks().length === 1) {
          // if this is the last track of the stream, remove the stream. This
          // takes care of any shimmed _senders.
          this.removeStream(this._reverseStreams[stream.id]);
        } else {
          // relying on the same odd chrome behaviour as above.
          stream.removeTrack(sender.track);
        }
        this.dispatchEvent(new Event('negotiationneeded'));
      }
    };
  }

  function shimPeerConnection(window) {
    if (!window.RTCPeerConnection && window.webkitRTCPeerConnection) {
      // very basic support for old versions.
      window.RTCPeerConnection = window.webkitRTCPeerConnection;
    }
    if (!window.RTCPeerConnection) {
      return;
    }

    // shim implicit creation of RTCSessionDescription/RTCIceCandidate
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      };
    });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function () {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };
  }

  function fixNegotiationNeeded(window) {
    utils.wrapPeerConnectionEvent(window, 'negotiationneeded', function (e) {
      var pc = e.target;
      if (pc.signalingState !== 'stable') {
        return;
      }
      return e;
    });
  }

  },{"../utils.js":15,"./getdisplaymedia":4,"./getusermedia":5}],4:[function(require,module,exports){
  /*
   *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shimGetDisplayMedia = shimGetDisplayMedia;
  function shimGetDisplayMedia(window, getSourceId) {
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
      return;
    }
    if (!window.navigator.mediaDevices) {
      return;
    }
    // getSourceId is a function that returns a promise resolving with
    // the sourceId of the screen/window/tab to be shared.
    if (typeof getSourceId !== 'function') {
      console.error('shimGetDisplayMedia: getSourceId argument is not ' + 'a function');
      return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function (constraints) {
      return getSourceId(constraints).then(function (sourceId) {
        var widthSpecified = constraints.video && constraints.video.width;
        var heightSpecified = constraints.video && constraints.video.height;
        var frameRateSpecified = constraints.video && constraints.video.frameRate;
        constraints.video = {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: sourceId,
            maxFrameRate: frameRateSpecified || 3
          }
        };
        if (widthSpecified) {
          constraints.video.mandatory.maxWidth = widthSpecified;
        }
        if (heightSpecified) {
          constraints.video.mandatory.maxHeight = heightSpecified;
        }
        return window.navigator.mediaDevices.getUserMedia(constraints);
      });
    };
  }

  },{}],5:[function(require,module,exports){
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports.shimGetUserMedia = shimGetUserMedia;

  var _utils = require('../utils.js');

  var utils = _interopRequireWildcard(_utils);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  var logging = utils.log;

  function shimGetUserMedia(window) {
    var navigator = window && window.navigator;

    if (!navigator.mediaDevices) {
      return;
    }

    var browserDetails = utils.detectBrowser(window);

    var constraintsToChrome_ = function constraintsToChrome_(c) {
      if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) !== 'object' || c.mandatory || c.optional) {
        return c;
      }
      var cc = {};
      Object.keys(c).forEach(function (key) {
        if (key === 'require' || key === 'advanced' || key === 'mediaSource') {
          return;
        }
        var r = _typeof(c[key]) === 'object' ? c[key] : { ideal: c[key] };
        if (r.exact !== undefined && typeof r.exact === 'number') {
          r.min = r.max = r.exact;
        }
        var oldname_ = function oldname_(prefix, name) {
          if (prefix) {
            return prefix + name.charAt(0).toUpperCase() + name.slice(1);
          }
          return name === 'deviceId' ? 'sourceId' : name;
        };
        if (r.ideal !== undefined) {
          cc.optional = cc.optional || [];
          var oc = {};
          if (typeof r.ideal === 'number') {
            oc[oldname_('min', key)] = r.ideal;
            cc.optional.push(oc);
            oc = {};
            oc[oldname_('max', key)] = r.ideal;
            cc.optional.push(oc);
          } else {
            oc[oldname_('', key)] = r.ideal;
            cc.optional.push(oc);
          }
        }
        if (r.exact !== undefined && typeof r.exact !== 'number') {
          cc.mandatory = cc.mandatory || {};
          cc.mandatory[oldname_('', key)] = r.exact;
        } else {
          ['min', 'max'].forEach(function (mix) {
            if (r[mix] !== undefined) {
              cc.mandatory = cc.mandatory || {};
              cc.mandatory[oldname_(mix, key)] = r[mix];
            }
          });
        }
      });
      if (c.advanced) {
        cc.optional = (cc.optional || []).concat(c.advanced);
      }
      return cc;
    };

    var shimConstraints_ = function shimConstraints_(constraints, func) {
      if (browserDetails.version >= 61) {
        return func(constraints);
      }
      constraints = JSON.parse(JSON.stringify(constraints));
      if (constraints && _typeof(constraints.audio) === 'object') {
        var remap = function remap(obj, a, b) {
          if (a in obj && !(b in obj)) {
            obj[b] = obj[a];
            delete obj[a];
          }
        };
        constraints = JSON.parse(JSON.stringify(constraints));
        remap(constraints.audio, 'autoGainControl', 'googAutoGainControl');
        remap(constraints.audio, 'noiseSuppression', 'googNoiseSuppression');
        constraints.audio = constraintsToChrome_(constraints.audio);
      }
      if (constraints && _typeof(constraints.video) === 'object') {
        // Shim facingMode for mobile & surface pro.
        var face = constraints.video.facingMode;
        face = face && ((typeof face === 'undefined' ? 'undefined' : _typeof(face)) === 'object' ? face : { ideal: face });
        var getSupportedFacingModeLies = browserDetails.version < 66;

        if (face && (face.exact === 'user' || face.exact === 'environment' || face.ideal === 'user' || face.ideal === 'environment') && !(navigator.mediaDevices.getSupportedConstraints && navigator.mediaDevices.getSupportedConstraints().facingMode && !getSupportedFacingModeLies)) {
          delete constraints.video.facingMode;
          var matches = void 0;
          if (face.exact === 'environment' || face.ideal === 'environment') {
            matches = ['back', 'rear'];
          } else if (face.exact === 'user' || face.ideal === 'user') {
            matches = ['front'];
          }
          if (matches) {
            // Look for matches in label, or use last cam for back (typical).
            return navigator.mediaDevices.enumerateDevices().then(function (devices) {
              devices = devices.filter(function (d) {
                return d.kind === 'videoinput';
              });
              var dev = devices.find(function (d) {
                return matches.some(function (match) {
                  return d.label.toLowerCase().includes(match);
                });
              });
              if (!dev && devices.length && matches.includes('back')) {
                dev = devices[devices.length - 1]; // more likely the back cam
              }
              if (dev) {
                constraints.video.deviceId = face.exact ? { exact: dev.deviceId } : { ideal: dev.deviceId };
              }
              constraints.video = constraintsToChrome_(constraints.video);
              logging('chrome: ' + JSON.stringify(constraints));
              return func(constraints);
            });
          }
        }
        constraints.video = constraintsToChrome_(constraints.video);
      }
      logging('chrome: ' + JSON.stringify(constraints));
      return func(constraints);
    };

    var shimError_ = function shimError_(e) {
      if (browserDetails.version >= 64) {
        return e;
      }
      return {
        name: {
          PermissionDeniedError: 'NotAllowedError',
          PermissionDismissedError: 'NotAllowedError',
          InvalidStateError: 'NotAllowedError',
          DevicesNotFoundError: 'NotFoundError',
          ConstraintNotSatisfiedError: 'OverconstrainedError',
          TrackStartError: 'NotReadableError',
          MediaDeviceFailedDueToShutdown: 'NotAllowedError',
          MediaDeviceKillSwitchOn: 'NotAllowedError',
          TabCaptureError: 'AbortError',
          ScreenCaptureError: 'AbortError',
          DeviceCaptureError: 'AbortError'
        }[e.name] || e.name,
        message: e.message,
        constraint: e.constraint || e.constraintName,
        toString: function toString() {
          return this.name + (this.message && ': ') + this.message;
        }
      };
    };

    var getUserMedia_ = function getUserMedia_(constraints, onSuccess, onError) {
      shimConstraints_(constraints, function (c) {
        navigator.webkitGetUserMedia(c, onSuccess, function (e) {
          if (onError) {
            onError(shimError_(e));
          }
        });
      });
    };
    navigator.getUserMedia = getUserMedia_.bind(navigator);

    // Even though Chrome 45 has navigator.mediaDevices and a getUserMedia
    // function which returns a Promise, it does not accept spec-style
    // constraints.
    if (navigator.mediaDevices.getUserMedia) {
      var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function (cs) {
        return shimConstraints_(cs, function (c) {
          return origGetUserMedia(c).then(function (stream) {
            if (c.audio && !stream.getAudioTracks().length || c.video && !stream.getVideoTracks().length) {
              stream.getTracks().forEach(function (track) {
                track.stop();
              });
              throw new DOMException('', 'NotFoundError');
            }
            return stream;
          }, function (e) {
            return Promise.reject(shimError_(e));
          });
        });
      };
    }
  }

  },{"../utils.js":15}],6:[function(require,module,exports){
  /*
   *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports.shimRTCIceCandidate = shimRTCIceCandidate;
  exports.shimMaxMessageSize = shimMaxMessageSize;
  exports.shimSendThrowTypeError = shimSendThrowTypeError;
  exports.shimConnectionState = shimConnectionState;
  exports.removeAllowExtmapMixed = removeAllowExtmapMixed;

  var _sdp = require('sdp');

  var _sdp2 = _interopRequireDefault(_sdp);

  var _utils = require('./utils');

  var utils = _interopRequireWildcard(_utils);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function shimRTCIceCandidate(window) {
    // foundation is arbitrarily chosen as an indicator for full support for
    // https://w3c.github.io/webrtc-pc/#rtcicecandidate-interface
    if (!window.RTCIceCandidate || window.RTCIceCandidate && 'foundation' in window.RTCIceCandidate.prototype) {
      return;
    }

    var NativeRTCIceCandidate = window.RTCIceCandidate;
    window.RTCIceCandidate = function (args) {
      // Remove the a= which shouldn't be part of the candidate string.
      if ((typeof args === 'undefined' ? 'undefined' : _typeof(args)) === 'object' && args.candidate && args.candidate.indexOf('a=') === 0) {
        args = JSON.parse(JSON.stringify(args));
        args.candidate = args.candidate.substr(2);
      }

      if (args.candidate && args.candidate.length) {
        // Augment the native candidate with the parsed fields.
        var nativeCandidate = new NativeRTCIceCandidate(args);
        var parsedCandidate = _sdp2.default.parseCandidate(args.candidate);
        var augmentedCandidate = Object.assign(nativeCandidate, parsedCandidate);

        // Add a serializer that does not serialize the extra attributes.
        augmentedCandidate.toJSON = function () {
          return {
            candidate: augmentedCandidate.candidate,
            sdpMid: augmentedCandidate.sdpMid,
            sdpMLineIndex: augmentedCandidate.sdpMLineIndex,
            usernameFragment: augmentedCandidate.usernameFragment
          };
        };
        return augmentedCandidate;
      }
      return new NativeRTCIceCandidate(args);
    };
    window.RTCIceCandidate.prototype = NativeRTCIceCandidate.prototype;

    // Hook up the augmented candidate in onicecandidate and
    // addEventListener('icecandidate', ...)
    utils.wrapPeerConnectionEvent(window, 'icecandidate', function (e) {
      if (e.candidate) {
        Object.defineProperty(e, 'candidate', {
          value: new window.RTCIceCandidate(e.candidate),
          writable: 'false'
        });
      }
      return e;
    });
  }

  function shimMaxMessageSize(window) {
    if (window.RTCSctpTransport || !window.RTCPeerConnection) {
      return;
    }
    var browserDetails = utils.detectBrowser(window);

    if (!('sctp' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'sctp', {
        get: function get() {
          return typeof this._sctp === 'undefined' ? null : this._sctp;
        }
      });
    }

    var sctpInDescription = function sctpInDescription(description) {
      if (!description || !description.sdp) {
        return false;
      }
      var sections = _sdp2.default.splitSections(description.sdp);
      sections.shift();
      return sections.some(function (mediaSection) {
        var mLine = _sdp2.default.parseMLine(mediaSection);
        return mLine && mLine.kind === 'application' && mLine.protocol.indexOf('SCTP') !== -1;
      });
    };

    var getRemoteFirefoxVersion = function getRemoteFirefoxVersion(description) {
      // TODO: Is there a better solution for detecting Firefox?
      var match = description.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
      if (match === null || match.length < 2) {
        return -1;
      }
      var version = parseInt(match[1], 10);
      // Test for NaN (yes, this is ugly)
      return version !== version ? -1 : version;
    };

    var getCanSendMaxMessageSize = function getCanSendMaxMessageSize(remoteIsFirefox) {
      // Every implementation we know can send at least 64 KiB.
      // Note: Although Chrome is technically able to send up to 256 KiB, the
      //       data does not reach the other peer reliably.
      //       See: https://bugs.chromium.org/p/webrtc/issues/detail?id=8419
      var canSendMaxMessageSize = 65536;
      if (browserDetails.browser === 'firefox') {
        if (browserDetails.version < 57) {
          if (remoteIsFirefox === -1) {
            // FF < 57 will send in 16 KiB chunks using the deprecated PPID
            // fragmentation.
            canSendMaxMessageSize = 16384;
          } else {
            // However, other FF (and RAWRTC) can reassemble PPID-fragmented
            // messages. Thus, supporting ~2 GiB when sending.
            canSendMaxMessageSize = 2147483637;
          }
        } else if (browserDetails.version < 60) {
          // Currently, all FF >= 57 will reset the remote maximum message size
          // to the default value when a data channel is created at a later
          // stage. :(
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831
          canSendMaxMessageSize = browserDetails.version === 57 ? 65535 : 65536;
        } else {
          // FF >= 60 supports sending ~2 GiB
          canSendMaxMessageSize = 2147483637;
        }
      }
      return canSendMaxMessageSize;
    };

    var getMaxMessageSize = function getMaxMessageSize(description, remoteIsFirefox) {
      // Note: 65536 bytes is the default value from the SDP spec. Also,
      //       every implementation we know supports receiving 65536 bytes.
      var maxMessageSize = 65536;

      // FF 57 has a slightly incorrect default remote max message size, so
      // we need to adjust it here to avoid a failure when sending.
      // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1425697
      if (browserDetails.browser === 'firefox' && browserDetails.version === 57) {
        maxMessageSize = 65535;
      }

      var match = _sdp2.default.matchPrefix(description.sdp, 'a=max-message-size:');
      if (match.length > 0) {
        maxMessageSize = parseInt(match[0].substr(19), 10);
      } else if (browserDetails.browser === 'firefox' && remoteIsFirefox !== -1) {
        // If the maximum message size is not present in the remote SDP and
        // both local and remote are Firefox, the remote peer can receive
        // ~2 GiB.
        maxMessageSize = 2147483637;
      }
      return maxMessageSize;
    };

    var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function () {
      this._sctp = null;

      if (sctpInDescription(arguments[0])) {
        // Check if the remote is FF.
        var isFirefox = getRemoteFirefoxVersion(arguments[0]);

        // Get the maximum message size the local peer is capable of sending
        var canSendMMS = getCanSendMaxMessageSize(isFirefox);

        // Get the maximum message size of the remote peer.
        var remoteMMS = getMaxMessageSize(arguments[0], isFirefox);

        // Determine final maximum message size
        var maxMessageSize = void 0;
        if (canSendMMS === 0 && remoteMMS === 0) {
          maxMessageSize = Number.POSITIVE_INFINITY;
        } else if (canSendMMS === 0 || remoteMMS === 0) {
          maxMessageSize = Math.max(canSendMMS, remoteMMS);
        } else {
          maxMessageSize = Math.min(canSendMMS, remoteMMS);
        }

        // Create a dummy RTCSctpTransport object and the 'maxMessageSize'
        // attribute.
        var sctp = {};
        Object.defineProperty(sctp, 'maxMessageSize', {
          get: function get() {
            return maxMessageSize;
          }
        });
        this._sctp = sctp;
      }

      return origSetRemoteDescription.apply(this, arguments);
    };
  }

  function shimSendThrowTypeError(window) {
    if (!(window.RTCPeerConnection && 'createDataChannel' in window.RTCPeerConnection.prototype)) {
      return;
    }

    // Note: Although Firefox >= 57 has a native implementation, the maximum
    //       message size can be reset for all data channels at a later stage.
    //       See: https://bugzilla.mozilla.org/show_bug.cgi?id=1426831

    function wrapDcSend(dc, pc) {
      var origDataChannelSend = dc.send;
      dc.send = function () {
        var data = arguments[0];
        var length = data.length || data.size || data.byteLength;
        if (dc.readyState === 'open' && pc.sctp && length > pc.sctp.maxMessageSize) {
          throw new TypeError('Message too large (can send a maximum of ' + pc.sctp.maxMessageSize + ' bytes)');
        }
        return origDataChannelSend.apply(dc, arguments);
      };
    }
    var origCreateDataChannel = window.RTCPeerConnection.prototype.createDataChannel;
    window.RTCPeerConnection.prototype.createDataChannel = function () {
      var dataChannel = origCreateDataChannel.apply(this, arguments);
      wrapDcSend(dataChannel, this);
      return dataChannel;
    };
    utils.wrapPeerConnectionEvent(window, 'datachannel', function (e) {
      wrapDcSend(e.channel, e.target);
      return e;
    });
  }

  /* shims RTCConnectionState by pretending it is the same as iceConnectionState.
   * See https://bugs.chromium.org/p/webrtc/issues/detail?id=6145#c12
   * for why this is a valid hack in Chrome. In Firefox it is slightly incorrect
   * since DTLS failures would be hidden. See
   * https://bugzilla.mozilla.org/show_bug.cgi?id=1265827
   * for the Firefox tracking bug.
   */
  function shimConnectionState(window) {
    if (!window.RTCPeerConnection || 'connectionState' in window.RTCPeerConnection.prototype) {
      return;
    }
    var proto = window.RTCPeerConnection.prototype;
    Object.defineProperty(proto, 'connectionState', {
      get: function get() {
        return {
          completed: 'connected',
          checking: 'connecting'
        }[this.iceConnectionState] || this.iceConnectionState;
      },

      enumerable: true,
      configurable: true
    });
    Object.defineProperty(proto, 'onconnectionstatechange', {
      get: function get() {
        return this._onconnectionstatechange || null;
      },
      set: function set(cb) {
        if (this._onconnectionstatechange) {
          this.removeEventListener('connectionstatechange', this._onconnectionstatechange);
          delete this._onconnectionstatechange;
        }
        if (cb) {
          this.addEventListener('connectionstatechange', this._onconnectionstatechange = cb);
        }
      },

      enumerable: true,
      configurable: true
    });

    ['setLocalDescription', 'setRemoteDescription'].forEach(function (method) {
      var origMethod = proto[method];
      proto[method] = function () {
        if (!this._connectionstatechangepoly) {
          this._connectionstatechangepoly = function (e) {
            var pc = e.target;
            if (pc._lastConnectionState !== pc.connectionState) {
              pc._lastConnectionState = pc.connectionState;
              var newEvent = new Event('connectionstatechange', e);
              pc.dispatchEvent(newEvent);
            }
            return e;
          };
          this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly);
        }
        return origMethod.apply(this, arguments);
      };
    });
  }

  function removeAllowExtmapMixed(window) {
    /* remove a=extmap-allow-mixed for Chrome < M71 */
    if (!window.RTCPeerConnection) {
      return;
    }
    var browserDetails = utils.detectBrowser(window);
    if (browserDetails.browser === 'chrome' && browserDetails.version >= 71) {
      return;
    }
    var nativeSRD = window.RTCPeerConnection.prototype.setRemoteDescription;
    window.RTCPeerConnection.prototype.setRemoteDescription = function (desc) {
      if (desc && desc.sdp && desc.sdp.indexOf('\na=extmap-allow-mixed') !== -1) {
        desc.sdp = desc.sdp.split('\n').filter(function (line) {
          return line.trim() !== 'a=extmap-allow-mixed';
        }).join('\n');
      }
      return nativeSRD.apply(this, arguments);
    };
  }

  },{"./utils":15,"sdp":17}],7:[function(require,module,exports){
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

  var _getusermedia = require('./getusermedia');

  Object.defineProperty(exports, 'shimGetUserMedia', {
    enumerable: true,
    get: function get() {
      return _getusermedia.shimGetUserMedia;
    }
  });

  var _getdisplaymedia = require('./getdisplaymedia');

  Object.defineProperty(exports, 'shimGetDisplayMedia', {
    enumerable: true,
    get: function get() {
      return _getdisplaymedia.shimGetDisplayMedia;
    }
  });
  exports.shimPeerConnection = shimPeerConnection;
  exports.shimReplaceTrack = shimReplaceTrack;

  var _utils = require('../utils');

  var utils = _interopRequireWildcard(_utils);

  var _filtericeservers = require('./filtericeservers');

  var _rtcpeerconnectionShim = require('rtcpeerconnection-shim');

  var _rtcpeerconnectionShim2 = _interopRequireDefault(_rtcpeerconnectionShim);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  function shimPeerConnection(window) {
    var browserDetails = utils.detectBrowser(window);

    if (window.RTCIceGatherer) {
      if (!window.RTCIceCandidate) {
        window.RTCIceCandidate = function (args) {
          return args;
        };
      }
      if (!window.RTCSessionDescription) {
        window.RTCSessionDescription = function (args) {
          return args;
        };
      }
      // this adds an additional event listener to MediaStrackTrack that signals
      // when a tracks enabled property was changed. Workaround for a bug in
      // addStream, see below. No longer required in 15025+
      if (browserDetails.version < 15025) {
        var origMSTEnabled = Object.getOwnPropertyDescriptor(window.MediaStreamTrack.prototype, 'enabled');
        Object.defineProperty(window.MediaStreamTrack.prototype, 'enabled', {
          set: function set(value) {
            origMSTEnabled.set.call(this, value);
            var ev = new Event('enabled');
            ev.enabled = value;
            this.dispatchEvent(ev);
          }
        });
      }
    }

    // ORTC defines the DTMF sender a bit different.
    // https://github.com/w3c/ortc/issues/714
    if (window.RTCRtpSender && !('dtmf' in window.RTCRtpSender.prototype)) {
      Object.defineProperty(window.RTCRtpSender.prototype, 'dtmf', {
        get: function get() {
          if (this._dtmf === undefined) {
            if (this.track.kind === 'audio') {
              this._dtmf = new window.RTCDtmfSender(this);
            } else if (this.track.kind === 'video') {
              this._dtmf = null;
            }
          }
          return this._dtmf;
        }
      });
    }
    // Edge currently only implements the RTCDtmfSender, not the
    // RTCDTMFSender alias. See http://draft.ortc.org/#rtcdtmfsender2*
    if (window.RTCDtmfSender && !window.RTCDTMFSender) {
      window.RTCDTMFSender = window.RTCDtmfSender;
    }

    var RTCPeerConnectionShim = (0, _rtcpeerconnectionShim2.default)(window, browserDetails.version);
    window.RTCPeerConnection = function (config) {
      if (config && config.iceServers) {
        config.iceServers = (0, _filtericeservers.filterIceServers)(config.iceServers, browserDetails.version);
        utils.log('ICE servers after filtering:', config.iceServers);
      }
      return new RTCPeerConnectionShim(config);
    };
    window.RTCPeerConnection.prototype = RTCPeerConnectionShim.prototype;
  }

  function shimReplaceTrack(window) {
    // ORTC has replaceTrack -- https://github.com/w3c/ortc/issues/614
    if (window.RTCRtpSender && !('replaceTrack' in window.RTCRtpSender.prototype)) {
      window.RTCRtpSender.prototype.replaceTrack = window.RTCRtpSender.prototype.setTrack;
    }
  }

  },{"../utils":15,"./filtericeservers":8,"./getdisplaymedia":9,"./getusermedia":10,"rtcpeerconnection-shim":16}],8:[function(require,module,exports){
  /*
   *  Copyright (c) 2018 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.filterIceServers = filterIceServers;

  var _utils = require('../utils');

  var utils = _interopRequireWildcard(_utils);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  // Edge does not like
  // 1) stun: filtered after 14393 unless ?transport=udp is present
  // 2) turn: that does not have all of turn:host:port?transport=udp
  // 3) turn: with ipv6 addresses
  // 4) turn: occurring muliple times
  function filterIceServers(iceServers, edgeVersion) {
    var hasTurn = false;
    iceServers = JSON.parse(JSON.stringify(iceServers));
    return iceServers.filter(function (server) {
      if (server && (server.urls || server.url)) {
        var urls = server.urls || server.url;
        if (server.url && !server.urls) {
          utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
        }
        var isString = typeof urls === 'string';
        if (isString) {
          urls = [urls];
        }
        urls = urls.filter(function (url) {
          // filter STUN unconditionally.
          if (url.indexOf('stun:') === 0) {
            return false;
          }

          var validTurn = url.startsWith('turn') && !url.startsWith('turn:[') && url.includes('transport=udp');
          if (validTurn && !hasTurn) {
            hasTurn = true;
            return true;
          }
          return validTurn && !hasTurn;
        });

        delete server.url;
        server.urls = isString ? urls[0] : urls;
        return !!urls.length;
      }
    });
  }

  },{"../utils":15}],9:[function(require,module,exports){
  /*
   *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shimGetDisplayMedia = shimGetDisplayMedia;
  function shimGetDisplayMedia(window) {
    if (!('getDisplayMedia' in window.navigator)) {
      return;
    }
    if (!window.navigator.mediaDevices) {
      return;
    }
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
      return;
    }
    window.navigator.mediaDevices.getDisplayMedia = window.navigator.getDisplayMedia.bind(window.navigator);
  }

  },{}],10:[function(require,module,exports){
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shimGetUserMedia = shimGetUserMedia;
  function shimGetUserMedia(window) {
    var navigator = window && window.navigator;

    var shimError_ = function shimError_(e) {
      return {
        name: { PermissionDeniedError: 'NotAllowedError' }[e.name] || e.name,
        message: e.message,
        constraint: e.constraint,
        toString: function toString() {
          return this.name;
        }
      };
    };

    // getUserMedia error shim.
    var origGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = function (c) {
      return origGetUserMedia(c).catch(function (e) {
        return Promise.reject(shimError_(e));
      });
    };
  }

  },{}],11:[function(require,module,exports){
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shimGetDisplayMedia = exports.shimGetUserMedia = undefined;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _getusermedia = require('./getusermedia');

  Object.defineProperty(exports, 'shimGetUserMedia', {
    enumerable: true,
    get: function get() {
      return _getusermedia.shimGetUserMedia;
    }
  });

  var _getdisplaymedia = require('./getdisplaymedia');

  Object.defineProperty(exports, 'shimGetDisplayMedia', {
    enumerable: true,
    get: function get() {
      return _getdisplaymedia.shimGetDisplayMedia;
    }
  });
  exports.shimOnTrack = shimOnTrack;
  exports.shimPeerConnection = shimPeerConnection;
  exports.shimSenderGetStats = shimSenderGetStats;
  exports.shimReceiverGetStats = shimReceiverGetStats;
  exports.shimRemoveStream = shimRemoveStream;
  exports.shimRTCDataChannel = shimRTCDataChannel;

  var _utils = require('../utils');

  var utils = _interopRequireWildcard(_utils);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  function shimOnTrack(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCTrackEvent && 'receiver' in window.RTCTrackEvent.prototype && !('transceiver' in window.RTCTrackEvent.prototype)) {
      Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get: function get() {
          return { receiver: this.receiver };
        }
      });
    }
  }

  function shimPeerConnection(window) {
    var browserDetails = utils.detectBrowser(window);

    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(window.RTCPeerConnection || window.mozRTCPeerConnection)) {
      return; // probably media.peerconnection.enabled=false in about:config
    }
    if (!window.RTCPeerConnection && window.mozRTCPeerConnection) {
      // very basic support for old versions.
      window.RTCPeerConnection = window.mozRTCPeerConnection;
    }

    // shim away need for obsolete RTCIceCandidate/RTCSessionDescription.
    ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (method) {
      var nativeMethod = window.RTCPeerConnection.prototype[method];
      window.RTCPeerConnection.prototype[method] = function () {
        arguments[0] = new (method === 'addIceCandidate' ? window.RTCIceCandidate : window.RTCSessionDescription)(arguments[0]);
        return nativeMethod.apply(this, arguments);
      };
    });

    // support for addIceCandidate(null or undefined)
    var nativeAddIceCandidate = window.RTCPeerConnection.prototype.addIceCandidate;
    window.RTCPeerConnection.prototype.addIceCandidate = function () {
      if (!arguments[0]) {
        if (arguments[1]) {
          arguments[1].apply(null);
        }
        return Promise.resolve();
      }
      return nativeAddIceCandidate.apply(this, arguments);
    };

    var modernStatsTypes = {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    };

    var nativeGetStats = window.RTCPeerConnection.prototype.getStats;
    window.RTCPeerConnection.prototype.getStats = function (selector, onSucc, onErr) {
      return nativeGetStats.apply(this, [selector || null]).then(function (stats) {
        if (browserDetails.version < 53 && !onSucc) {
          // Shim only promise getStats with spec-hyphens in type names
          // Leave callback version alone; misc old uses of forEach before Map
          try {
            stats.forEach(function (stat) {
              stat.type = modernStatsTypes[stat.type] || stat.type;
            });
          } catch (e) {
            if (e.name !== 'TypeError') {
              throw e;
            }
            // Avoid TypeError: "type" is read-only, in old versions. 34-43ish
            stats.forEach(function (stat, i) {
              stats.set(i, Object.assign({}, stat, {
                type: modernStatsTypes[stat.type] || stat.type
              }));
            });
          }
        }
        return stats;
      }).then(onSucc, onErr);
    };
  }

  function shimSenderGetStats(window) {
    if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
      return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpSender.prototype) {
      return;
    }
    var origGetSenders = window.RTCPeerConnection.prototype.getSenders;
    if (origGetSenders) {
      window.RTCPeerConnection.prototype.getSenders = function () {
        var _this = this;

        var senders = origGetSenders.apply(this, []);
        senders.forEach(function (sender) {
          return sender._pc = _this;
        });
        return senders;
      };
    }

    var origAddTrack = window.RTCPeerConnection.prototype.addTrack;
    if (origAddTrack) {
      window.RTCPeerConnection.prototype.addTrack = function () {
        var sender = origAddTrack.apply(this, arguments);
        sender._pc = this;
        return sender;
      };
    }
    window.RTCRtpSender.prototype.getStats = function () {
      return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map());
    };
  }

  function shimReceiverGetStats(window) {
    if (!((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && window.RTCRtpSender)) {
      return;
    }
    if (window.RTCRtpSender && 'getStats' in window.RTCRtpReceiver.prototype) {
      return;
    }
    var origGetReceivers = window.RTCPeerConnection.prototype.getReceivers;
    if (origGetReceivers) {
      window.RTCPeerConnection.prototype.getReceivers = function () {
        var _this2 = this;

        var receivers = origGetReceivers.apply(this, []);
        receivers.forEach(function (receiver) {
          return receiver._pc = _this2;
        });
        return receivers;
      };
    }
    utils.wrapPeerConnectionEvent(window, 'track', function (e) {
      e.receiver._pc = e.srcElement;
      return e;
    });
    window.RTCRtpReceiver.prototype.getStats = function () {
      return this._pc.getStats(this.track);
    };
  }

  function shimRemoveStream(window) {
    if (!window.RTCPeerConnection || 'removeStream' in window.RTCPeerConnection.prototype) {
      return;
    }
    window.RTCPeerConnection.prototype.removeStream = function (stream) {
      var _this3 = this;

      utils.deprecated('removeStream', 'removeTrack');
      this.getSenders().forEach(function (sender) {
        if (sender.track && stream.getTracks().includes(sender.track)) {
          _this3.removeTrack(sender);
        }
      });
    };
  }

  function shimRTCDataChannel(window) {
    // rename DataChannel to RTCDataChannel (native fix in FF60):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1173851
    if (window.DataChannel && !window.RTCDataChannel) {
      window.RTCDataChannel = window.DataChannel;
    }
  }

  },{"../utils":15,"./getdisplaymedia":12,"./getusermedia":13}],12:[function(require,module,exports){
  /*
   *  Copyright (c) 2018 The adapter.js project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.shimGetDisplayMedia = shimGetDisplayMedia;
  function shimGetDisplayMedia(window, preferredMediaSource) {
    if (window.navigator.mediaDevices && 'getDisplayMedia' in window.navigator.mediaDevices) {
      return;
    }
    if (!window.navigator.mediaDevices) {
      return;
    }
    window.navigator.mediaDevices.getDisplayMedia = function (constraints) {
      if (!(constraints && constraints.video)) {
        var err = new DOMException('getDisplayMedia without video ' + 'constraints is undefined');
        err.name = 'NotFoundError';
        // from https://heycam.github.io/webidl/#idl-DOMException-error-names
        err.code = 8;
        return Promise.reject(err);
      }
      if (constraints.video === true) {
        constraints.video = { mediaSource: preferredMediaSource };
      } else {
        constraints.video.mediaSource = preferredMediaSource;
      }
      return window.navigator.mediaDevices.getUserMedia(constraints);
    };
  }

  },{}],13:[function(require,module,exports){
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports.shimGetUserMedia = shimGetUserMedia;

  var _utils = require('../utils');

  var utils = _interopRequireWildcard(_utils);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  function shimGetUserMedia(window) {
    var browserDetails = utils.detectBrowser(window);
    var navigator = window && window.navigator;
    var MediaStreamTrack = window && window.MediaStreamTrack;

    navigator.getUserMedia = function (constraints, onSuccess, onError) {
      // Replace Firefox 44+'s deprecation warning with unprefixed version.
      utils.deprecated('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia');
      navigator.mediaDevices.getUserMedia(constraints).then(onSuccess, onError);
    };

    if (!(browserDetails.version > 55 && 'autoGainControl' in navigator.mediaDevices.getSupportedConstraints())) {
      var remap = function remap(obj, a, b) {
        if (a in obj && !(b in obj)) {
          obj[b] = obj[a];
          delete obj[a];
        }
      };

      var nativeGetUserMedia = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
      navigator.mediaDevices.getUserMedia = function (c) {
        if ((typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object' && _typeof(c.audio) === 'object') {
          c = JSON.parse(JSON.stringify(c));
          remap(c.audio, 'autoGainControl', 'mozAutoGainControl');
          remap(c.audio, 'noiseSuppression', 'mozNoiseSuppression');
        }
        return nativeGetUserMedia(c);
      };

      if (MediaStreamTrack && MediaStreamTrack.prototype.getSettings) {
        var nativeGetSettings = MediaStreamTrack.prototype.getSettings;
        MediaStreamTrack.prototype.getSettings = function () {
          var obj = nativeGetSettings.apply(this, arguments);
          remap(obj, 'mozAutoGainControl', 'autoGainControl');
          remap(obj, 'mozNoiseSuppression', 'noiseSuppression');
          return obj;
        };
      }

      if (MediaStreamTrack && MediaStreamTrack.prototype.applyConstraints) {
        var nativeApplyConstraints = MediaStreamTrack.prototype.applyConstraints;
        MediaStreamTrack.prototype.applyConstraints = function (c) {
          if (this.kind === 'audio' && (typeof c === 'undefined' ? 'undefined' : _typeof(c)) === 'object') {
            c = JSON.parse(JSON.stringify(c));
            remap(c, 'autoGainControl', 'mozAutoGainControl');
            remap(c, 'noiseSuppression', 'mozNoiseSuppression');
          }
          return nativeApplyConstraints.apply(this, [c]);
        };
      }
    }
  }

  },{"../utils":15}],14:[function(require,module,exports){
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports.shimLocalStreamsAPI = shimLocalStreamsAPI;
  exports.shimRemoteStreamsAPI = shimRemoteStreamsAPI;
  exports.shimCallbacksAPI = shimCallbacksAPI;
  exports.shimGetUserMedia = shimGetUserMedia;
  exports.shimConstraints = shimConstraints;
  exports.shimRTCIceServerUrls = shimRTCIceServerUrls;
  exports.shimTrackEventTransceiver = shimTrackEventTransceiver;
  exports.shimCreateOfferLegacy = shimCreateOfferLegacy;

  var _utils = require('../utils');

  var utils = _interopRequireWildcard(_utils);

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

  function shimLocalStreamsAPI(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getLocalStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getLocalStreams = function () {
        if (!this._localStreams) {
          this._localStreams = [];
        }
        return this._localStreams;
      };
    }
    if (!('addStream' in window.RTCPeerConnection.prototype)) {
      var _addTrack = window.RTCPeerConnection.prototype.addTrack;
      window.RTCPeerConnection.prototype.addStream = function (stream) {
        var _this = this;

        if (!this._localStreams) {
          this._localStreams = [];
        }
        if (!this._localStreams.includes(stream)) {
          this._localStreams.push(stream);
        }
        stream.getTracks().forEach(function (track) {
          return _addTrack.call(_this, track, stream);
        });
      };

      window.RTCPeerConnection.prototype.addTrack = function (track, stream) {
        if (stream) {
          if (!this._localStreams) {
            this._localStreams = [stream];
          } else if (!this._localStreams.includes(stream)) {
            this._localStreams.push(stream);
          }
        }
        return _addTrack.call(this, track, stream);
      };
    }
    if (!('removeStream' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.removeStream = function (stream) {
        var _this2 = this;

        if (!this._localStreams) {
          this._localStreams = [];
        }
        var index = this._localStreams.indexOf(stream);
        if (index === -1) {
          return;
        }
        this._localStreams.splice(index, 1);
        var tracks = stream.getTracks();
        this.getSenders().forEach(function (sender) {
          if (tracks.includes(sender.track)) {
            _this2.removeTrack(sender);
          }
        });
      };
    }
  }

  function shimRemoteStreamsAPI(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    if (!('getRemoteStreams' in window.RTCPeerConnection.prototype)) {
      window.RTCPeerConnection.prototype.getRemoteStreams = function () {
        return this._remoteStreams ? this._remoteStreams : [];
      };
    }
    if (!('onaddstream' in window.RTCPeerConnection.prototype)) {
      Object.defineProperty(window.RTCPeerConnection.prototype, 'onaddstream', {
        get: function get() {
          return this._onaddstream;
        },
        set: function set(f) {
          var _this3 = this;

          if (this._onaddstream) {
            this.removeEventListener('addstream', this._onaddstream);
            this.removeEventListener('track', this._onaddstreampoly);
          }
          this.addEventListener('addstream', this._onaddstream = f);
          this.addEventListener('track', this._onaddstreampoly = function (e) {
            e.streams.forEach(function (stream) {
              if (!_this3._remoteStreams) {
                _this3._remoteStreams = [];
              }
              if (_this3._remoteStreams.includes(stream)) {
                return;
              }
              _this3._remoteStreams.push(stream);
              var event = new Event('addstream');
              event.stream = stream;
              _this3.dispatchEvent(event);
            });
          });
        }
      });
      var origSetRemoteDescription = window.RTCPeerConnection.prototype.setRemoteDescription;
      window.RTCPeerConnection.prototype.setRemoteDescription = function () {
        var pc = this;
        if (!this._onaddstreampoly) {
          this.addEventListener('track', this._onaddstreampoly = function (e) {
            e.streams.forEach(function (stream) {
              if (!pc._remoteStreams) {
                pc._remoteStreams = [];
              }
              if (pc._remoteStreams.indexOf(stream) >= 0) {
                return;
              }
              pc._remoteStreams.push(stream);
              var event = new Event('addstream');
              event.stream = stream;
              pc.dispatchEvent(event);
            });
          });
        }
        return origSetRemoteDescription.apply(pc, arguments);
      };
    }
  }

  function shimCallbacksAPI(window) {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !window.RTCPeerConnection) {
      return;
    }
    var prototype = window.RTCPeerConnection.prototype;
    var createOffer = prototype.createOffer;
    var createAnswer = prototype.createAnswer;
    var setLocalDescription = prototype.setLocalDescription;
    var setRemoteDescription = prototype.setRemoteDescription;
    var addIceCandidate = prototype.addIceCandidate;

    prototype.createOffer = function (successCallback, failureCallback) {
      var options = arguments.length >= 2 ? arguments[2] : arguments[0];
      var promise = createOffer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    prototype.createAnswer = function (successCallback, failureCallback) {
      var options = arguments.length >= 2 ? arguments[2] : arguments[0];
      var promise = createAnswer.apply(this, [options]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };

    var withCallback = function withCallback(description, successCallback, failureCallback) {
      var promise = setLocalDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setLocalDescription = withCallback;

    withCallback = function withCallback(description, successCallback, failureCallback) {
      var promise = setRemoteDescription.apply(this, [description]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.setRemoteDescription = withCallback;

    withCallback = function withCallback(candidate, successCallback, failureCallback) {
      var promise = addIceCandidate.apply(this, [candidate]);
      if (!failureCallback) {
        return promise;
      }
      promise.then(successCallback, failureCallback);
      return Promise.resolve();
    };
    prototype.addIceCandidate = withCallback;
  }

  function shimGetUserMedia(window) {
    var navigator = window && window.navigator;

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      // shim not needed in Safari 12.1
      var mediaDevices = navigator.mediaDevices;
      var _getUserMedia = mediaDevices.getUserMedia.bind(mediaDevices);
      navigator.mediaDevices.getUserMedia = function (constraints) {
        return _getUserMedia(shimConstraints(constraints));
      };
    }

    if (!navigator.getUserMedia && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.getUserMedia = function (constraints, cb, errcb) {
        navigator.mediaDevices.getUserMedia(constraints).then(cb, errcb);
      }.bind(navigator);
    }
  }

  function shimConstraints(constraints) {
    if (constraints && constraints.video !== undefined) {
      return Object.assign({}, constraints, { video: utils.compactObject(constraints.video) });
    }

    return constraints;
  }

  function shimRTCIceServerUrls(window) {
    // migrate from non-spec RTCIceServer.url to RTCIceServer.urls
    var OrigPeerConnection = window.RTCPeerConnection;
    window.RTCPeerConnection = function (pcConfig, pcConstraints) {
      if (pcConfig && pcConfig.iceServers) {
        var newIceServers = [];
        for (var i = 0; i < pcConfig.iceServers.length; i++) {
          var server = pcConfig.iceServers[i];
          if (!server.hasOwnProperty('urls') && server.hasOwnProperty('url')) {
            utils.deprecated('RTCIceServer.url', 'RTCIceServer.urls');
            server = JSON.parse(JSON.stringify(server));
            server.urls = server.url;
            delete server.url;
            newIceServers.push(server);
          } else {
            newIceServers.push(pcConfig.iceServers[i]);
          }
        }
        pcConfig.iceServers = newIceServers;
      }
      return new OrigPeerConnection(pcConfig, pcConstraints);
    };
    window.RTCPeerConnection.prototype = OrigPeerConnection.prototype;
    // wrap static methods. Currently just generateCertificate.
    if ('generateCertificate' in window.RTCPeerConnection) {
      Object.defineProperty(window.RTCPeerConnection, 'generateCertificate', {
        get: function get() {
          return OrigPeerConnection.generateCertificate;
        }
      });
    }
  }

  function shimTrackEventTransceiver(window) {
    // Add event.transceiver member over deprecated event.receiver
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.RTCPeerConnection && 'receiver' in window.RTCTrackEvent.prototype &&
    // can't check 'transceiver' in window.RTCTrackEvent.prototype, as it is
    // defined for some reason even when window.RTCTransceiver is not.
    !window.RTCTransceiver) {
      Object.defineProperty(window.RTCTrackEvent.prototype, 'transceiver', {
        get: function get() {
          return { receiver: this.receiver };
        }
      });
    }
  }

  function shimCreateOfferLegacy(window) {
    var origCreateOffer = window.RTCPeerConnection.prototype.createOffer;
    window.RTCPeerConnection.prototype.createOffer = function (offerOptions) {
      if (offerOptions) {
        if (typeof offerOptions.offerToReceiveAudio !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveAudio = !!offerOptions.offerToReceiveAudio;
        }
        var audioTransceiver = this.getTransceivers().find(function (transceiver) {
          return transceiver.receiver.track.kind === 'audio';
        });
        if (offerOptions.offerToReceiveAudio === false && audioTransceiver) {
          if (audioTransceiver.direction === 'sendrecv') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('sendonly');
            } else {
              audioTransceiver.direction = 'sendonly';
            }
          } else if (audioTransceiver.direction === 'recvonly') {
            if (audioTransceiver.setDirection) {
              audioTransceiver.setDirection('inactive');
            } else {
              audioTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveAudio === true && !audioTransceiver) {
          this.addTransceiver('audio');
        }

        if (typeof offerOptions.offerToReceiveVideo !== 'undefined') {
          // support bit values
          offerOptions.offerToReceiveVideo = !!offerOptions.offerToReceiveVideo;
        }
        var videoTransceiver = this.getTransceivers().find(function (transceiver) {
          return transceiver.receiver.track.kind === 'video';
        });
        if (offerOptions.offerToReceiveVideo === false && videoTransceiver) {
          if (videoTransceiver.direction === 'sendrecv') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('sendonly');
            } else {
              videoTransceiver.direction = 'sendonly';
            }
          } else if (videoTransceiver.direction === 'recvonly') {
            if (videoTransceiver.setDirection) {
              videoTransceiver.setDirection('inactive');
            } else {
              videoTransceiver.direction = 'inactive';
            }
          }
        } else if (offerOptions.offerToReceiveVideo === true && !videoTransceiver) {
          this.addTransceiver('video');
        }
      }
      return origCreateOffer.apply(this, arguments);
    };
  }

  },{"../utils":15}],15:[function(require,module,exports){
  /*
   *  Copyright (c) 2016 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
  /* eslint-env node */
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  exports.extractVersion = extractVersion;
  exports.wrapPeerConnectionEvent = wrapPeerConnectionEvent;
  exports.disableLog = disableLog;
  exports.disableWarnings = disableWarnings;
  exports.log = log;
  exports.deprecated = deprecated;
  exports.detectBrowser = detectBrowser;
  exports.compactObject = compactObject;
  exports.walkStats = walkStats;
  exports.filterStats = filterStats;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var logDisabled_ = true;
  var deprecationWarnings_ = true;

  /**
   * Extract browser version out of the provided user agent string.
   *
   * @param {!string} uastring userAgent string.
   * @param {!string} expr Regular expression used as match criteria.
   * @param {!number} pos position in the version string to be returned.
   * @return {!number} browser version.
   */
  function extractVersion(uastring, expr, pos) {
    var match = uastring.match(expr);
    return match && match.length >= pos && parseInt(match[pos], 10);
  }

  // Wraps the peerconnection event eventNameToWrap in a function
  // which returns the modified event object (or false to prevent
  // the event).
  function wrapPeerConnectionEvent(window, eventNameToWrap, wrapper) {
    if (!window.RTCPeerConnection) {
      return;
    }
    var proto = window.RTCPeerConnection.prototype;
    var nativeAddEventListener = proto.addEventListener;
    proto.addEventListener = function (nativeEventName, cb) {
      if (nativeEventName !== eventNameToWrap) {
        return nativeAddEventListener.apply(this, arguments);
      }
      var wrappedCallback = function wrappedCallback(e) {
        var modifiedEvent = wrapper(e);
        if (modifiedEvent) {
          cb(modifiedEvent);
        }
      };
      this._eventMap = this._eventMap || {};
      this._eventMap[cb] = wrappedCallback;
      return nativeAddEventListener.apply(this, [nativeEventName, wrappedCallback]);
    };

    var nativeRemoveEventListener = proto.removeEventListener;
    proto.removeEventListener = function (nativeEventName, cb) {
      if (nativeEventName !== eventNameToWrap || !this._eventMap || !this._eventMap[cb]) {
        return nativeRemoveEventListener.apply(this, arguments);
      }
      var unwrappedCb = this._eventMap[cb];
      delete this._eventMap[cb];
      return nativeRemoveEventListener.apply(this, [nativeEventName, unwrappedCb]);
    };

    Object.defineProperty(proto, 'on' + eventNameToWrap, {
      get: function get() {
        return this['_on' + eventNameToWrap];
      },
      set: function set(cb) {
        if (this['_on' + eventNameToWrap]) {
          this.removeEventListener(eventNameToWrap, this['_on' + eventNameToWrap]);
          delete this['_on' + eventNameToWrap];
        }
        if (cb) {
          this.addEventListener(eventNameToWrap, this['_on' + eventNameToWrap] = cb);
        }
      },

      enumerable: true,
      configurable: true
    });
  }

  function disableLog(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
    }
    logDisabled_ = bool;
    return bool ? 'adapter.js logging disabled' : 'adapter.js logging enabled';
  }

  /**
   * Disable or enable deprecation warnings
   * @param {!boolean} bool set to true to disable warnings.
   */
  function disableWarnings(bool) {
    if (typeof bool !== 'boolean') {
      return new Error('Argument type: ' + (typeof bool === 'undefined' ? 'undefined' : _typeof(bool)) + '. Please use a boolean.');
    }
    deprecationWarnings_ = !bool;
    return 'adapter.js deprecation warnings ' + (bool ? 'disabled' : 'enabled');
  }

  function log() {
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
      if (logDisabled_) {
        return;
      }
      if (typeof console !== 'undefined' && typeof console.log === 'function') {
        console.log.apply(console, arguments);
      }
    }
  }

  /**
   * Shows a deprecation warning suggesting the modern and spec-compatible API.
   */
  function deprecated(oldMethod, newMethod) {
    if (!deprecationWarnings_) {
      return;
    }
    console.warn(oldMethod + ' is deprecated, please use ' + newMethod + ' instead.');
  }

  /**
   * Browser detector.
   *
   * @return {object} result containing browser and version
   *     properties.
   */
  function detectBrowser(window) {
    var navigator = window.navigator;

    // Returned result object.

    var result = { browser: null, version: null };

    // Fail early if it's not a browser
    if (typeof window === 'undefined' || !window.navigator) {
      result.browser = 'Not a browser.';
      return result;
    }

    if (navigator.mozGetUserMedia) {
      // Firefox.
      result.browser = 'firefox';
      result.version = extractVersion(navigator.userAgent, /Firefox\/(\d+)\./, 1);
    } else if (navigator.webkitGetUserMedia || window.isSecureContext === false && window.webkitRTCPeerConnection && !window.RTCIceGatherer) {
      // Chrome, Chromium, Webview, Opera.
      // Version matches Chrome/WebRTC version.
      // Chrome 74 removed webkitGetUserMedia on http as well so we need the
      // more complicated fallback to webkitRTCPeerConnection.
      result.browser = 'chrome';
      result.version = extractVersion(navigator.userAgent, /Chrom(e|ium)\/(\d+)\./, 2);
    } else if (navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/)) {
      // Edge.
      result.browser = 'edge';
      result.version = extractVersion(navigator.userAgent, /Edge\/(\d+).(\d+)$/, 2);
    } else if (window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./)) {
      // Safari.
      result.browser = 'safari';
      result.version = extractVersion(navigator.userAgent, /AppleWebKit\/(\d+)\./, 1);
    } else {
      // Default fallthrough: not supported.
      result.browser = 'Not a supported browser.';
      return result;
    }

    return result;
  }

  /**
   * Remove all empty objects and undefined values
   * from a nested object -- an enhanced and vanilla version
   * of Lodash's `compact`.
   */
  function compactObject(data) {
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
      return data;
    }

    return Object.keys(data).reduce(function (accumulator, key) {
      var isObject = _typeof(data[key]) === 'object';
      var value = isObject ? compactObject(data[key]) : data[key];
      var isEmptyObject = isObject && !Object.keys(value).length;
      if (value === undefined || isEmptyObject) {
        return accumulator;
      }

      return Object.assign(accumulator, _defineProperty({}, key, value));
    }, {});
  }

  /* iterates the stats graph recursively. */
  function walkStats(stats, base, resultSet) {
    if (!base || resultSet.has(base.id)) {
      return;
    }
    resultSet.set(base.id, base);
    Object.keys(base).forEach(function (name) {
      if (name.endsWith('Id')) {
        walkStats(stats, stats.get(base[name]), resultSet);
      } else if (name.endsWith('Ids')) {
        base[name].forEach(function (id) {
          walkStats(stats, stats.get(id), resultSet);
        });
      }
    });
  }

  /* filter getStats for a sender/receiver track. */
  function filterStats(result, track, outbound) {
    var streamStatsType = outbound ? 'outbound-rtp' : 'inbound-rtp';
    var filteredResult = new Map();
    if (track === null) {
      return filteredResult;
    }
    var trackStats = [];
    result.forEach(function (value) {
      if (value.type === 'track' && value.trackIdentifier === track.id) {
        trackStats.push(value);
      }
    });
    trackStats.forEach(function (trackStat) {
      result.forEach(function (stats) {
        if (stats.type === streamStatsType && stats.trackId === trackStat.id) {
          walkStats(result, stats, filteredResult);
        }
      });
    });
    return filteredResult;
  }

  },{}],16:[function(require,module,exports){
  /*
   *  Copyright (c) 2017 The WebRTC project authors. All Rights Reserved.
   *
   *  Use of this source code is governed by a BSD-style license
   *  that can be found in the LICENSE file in the root of the source
   *  tree.
   */
   /* eslint-env node */
  'use strict';

  var SDPUtils = require('sdp');

  function fixStatsType(stat) {
    return {
      inboundrtp: 'inbound-rtp',
      outboundrtp: 'outbound-rtp',
      candidatepair: 'candidate-pair',
      localcandidate: 'local-candidate',
      remotecandidate: 'remote-candidate'
    }[stat.type] || stat.type;
  }

  function writeMediaSection(transceiver, caps, type, stream, dtlsRole) {
    var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

    // Map ICE parameters (ufrag, pwd) to SDP.
    sdp += SDPUtils.writeIceParameters(
        transceiver.iceGatherer.getLocalParameters());

    // Map DTLS parameters to SDP.
    sdp += SDPUtils.writeDtlsParameters(
        transceiver.dtlsTransport.getLocalParameters(),
        type === 'offer' ? 'actpass' : dtlsRole || 'active');

    sdp += 'a=mid:' + transceiver.mid + '\r\n';

    if (transceiver.rtpSender && transceiver.rtpReceiver) {
      sdp += 'a=sendrecv\r\n';
    } else if (transceiver.rtpSender) {
      sdp += 'a=sendonly\r\n';
    } else if (transceiver.rtpReceiver) {
      sdp += 'a=recvonly\r\n';
    } else {
      sdp += 'a=inactive\r\n';
    }

    if (transceiver.rtpSender) {
      var trackId = transceiver.rtpSender._initialTrackId ||
          transceiver.rtpSender.track.id;
      transceiver.rtpSender._initialTrackId = trackId;
      // spec.
      var msid = 'msid:' + (stream ? stream.id : '-') + ' ' +
          trackId + '\r\n';
      sdp += 'a=' + msid;
      // for Chrome. Legacy should no longer be required.
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
          ' ' + msid;

      // RTX
      if (transceiver.sendEncodingParameters[0].rtx) {
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
            ' ' + msid;
        sdp += 'a=ssrc-group:FID ' +
            transceiver.sendEncodingParameters[0].ssrc + ' ' +
            transceiver.sendEncodingParameters[0].rtx.ssrc +
            '\r\n';
      }
    }
    // FIXME: this should be written by writeRtpDescription.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
    if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' cname:' + SDPUtils.localCName + '\r\n';
    }
    return sdp;
  }

  // Edge does not like
  // 1) stun: filtered after 14393 unless ?transport=udp is present
  // 2) turn: that does not have all of turn:host:port?transport=udp
  // 3) turn: with ipv6 addresses
  // 4) turn: occurring muliple times
  function filterIceServers(iceServers, edgeVersion) {
    var hasTurn = false;
    iceServers = JSON.parse(JSON.stringify(iceServers));
    return iceServers.filter(function(server) {
      if (server && (server.urls || server.url)) {
        var urls = server.urls || server.url;
        if (server.url && !server.urls) {
          console.warn('RTCIceServer.url is deprecated! Use urls instead.');
        }
        var isString = typeof urls === 'string';
        if (isString) {
          urls = [urls];
        }
        urls = urls.filter(function(url) {
          var validTurn = url.indexOf('turn:') === 0 &&
              url.indexOf('transport=udp') !== -1 &&
              url.indexOf('turn:[') === -1 &&
              !hasTurn;

          if (validTurn) {
            hasTurn = true;
            return true;
          }
          return url.indexOf('stun:') === 0 && edgeVersion >= 14393 &&
              url.indexOf('?transport=udp') === -1;
        });

        delete server.url;
        server.urls = isString ? urls[0] : urls;
        return !!urls.length;
      }
    });
  }

  // Determines the intersection of local and remote capabilities.
  function getCommonCapabilities(localCapabilities, remoteCapabilities) {
    var commonCapabilities = {
      codecs: [],
      headerExtensions: [],
      fecMechanisms: []
    };

    var findCodecByPayloadType = function(pt, codecs) {
      pt = parseInt(pt, 10);
      for (var i = 0; i < codecs.length; i++) {
        if (codecs[i].payloadType === pt ||
            codecs[i].preferredPayloadType === pt) {
          return codecs[i];
        }
      }
    };

    var rtxCapabilityMatches = function(lRtx, rRtx, lCodecs, rCodecs) {
      var lCodec = findCodecByPayloadType(lRtx.parameters.apt, lCodecs);
      var rCodec = findCodecByPayloadType(rRtx.parameters.apt, rCodecs);
      return lCodec && rCodec &&
          lCodec.name.toLowerCase() === rCodec.name.toLowerCase();
    };

    localCapabilities.codecs.forEach(function(lCodec) {
      for (var i = 0; i < remoteCapabilities.codecs.length; i++) {
        var rCodec = remoteCapabilities.codecs[i];
        if (lCodec.name.toLowerCase() === rCodec.name.toLowerCase() &&
            lCodec.clockRate === rCodec.clockRate) {
          if (lCodec.name.toLowerCase() === 'rtx' &&
              lCodec.parameters && rCodec.parameters.apt) {
            // for RTX we need to find the local rtx that has a apt
            // which points to the same local codec as the remote one.
            if (!rtxCapabilityMatches(lCodec, rCodec,
                localCapabilities.codecs, remoteCapabilities.codecs)) {
              continue;
            }
          }
          rCodec = JSON.parse(JSON.stringify(rCodec)); // deepcopy
          // number of channels is the highest common number of channels
          rCodec.numChannels = Math.min(lCodec.numChannels,
              rCodec.numChannels);
          // push rCodec so we reply with offerer payload type
          commonCapabilities.codecs.push(rCodec);

          // determine common feedback mechanisms
          rCodec.rtcpFeedback = rCodec.rtcpFeedback.filter(function(fb) {
            for (var j = 0; j < lCodec.rtcpFeedback.length; j++) {
              if (lCodec.rtcpFeedback[j].type === fb.type &&
                  lCodec.rtcpFeedback[j].parameter === fb.parameter) {
                return true;
              }
            }
            return false;
          });
          // FIXME: also need to determine .parameters
          //  see https://github.com/openpeer/ortc/issues/569
          break;
        }
      }
    });

    localCapabilities.headerExtensions.forEach(function(lHeaderExtension) {
      for (var i = 0; i < remoteCapabilities.headerExtensions.length;
           i++) {
        var rHeaderExtension = remoteCapabilities.headerExtensions[i];
        if (lHeaderExtension.uri === rHeaderExtension.uri) {
          commonCapabilities.headerExtensions.push(rHeaderExtension);
          break;
        }
      }
    });

    // FIXME: fecMechanisms
    return commonCapabilities;
  }

  // is action=setLocalDescription with type allowed in signalingState
  function isActionAllowedInSignalingState(action, type, signalingState) {
    return {
      offer: {
        setLocalDescription: ['stable', 'have-local-offer'],
        setRemoteDescription: ['stable', 'have-remote-offer']
      },
      answer: {
        setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
        setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
      }
    }[type][action].indexOf(signalingState) !== -1;
  }

  function maybeAddCandidate(iceTransport, candidate) {
    // Edge's internal representation adds some fields therefore
    // not all fieldѕ are taken into account.
    var alreadyAdded = iceTransport.getRemoteCandidates()
        .find(function(remoteCandidate) {
          return candidate.foundation === remoteCandidate.foundation &&
              candidate.ip === remoteCandidate.ip &&
              candidate.port === remoteCandidate.port &&
              candidate.priority === remoteCandidate.priority &&
              candidate.protocol === remoteCandidate.protocol &&
              candidate.type === remoteCandidate.type;
        });
    if (!alreadyAdded) {
      iceTransport.addRemoteCandidate(candidate);
    }
    return !alreadyAdded;
  }


  function makeError(name, description) {
    var e = new Error(description);
    e.name = name;
    // legacy error codes from https://heycam.github.io/webidl/#idl-DOMException-error-names
    e.code = {
      NotSupportedError: 9,
      InvalidStateError: 11,
      InvalidAccessError: 15,
      TypeError: undefined,
      OperationError: undefined
    }[name];
    return e;
  }

  module.exports = function(window, edgeVersion) {
    // https://w3c.github.io/mediacapture-main/#mediastream
    // Helper function to add the track to the stream and
    // dispatch the event ourselves.
    function addTrackToStreamAndFireEvent(track, stream) {
      stream.addTrack(track);
      stream.dispatchEvent(new window.MediaStreamTrackEvent('addtrack',
          {track: track}));
    }

    function removeTrackFromStreamAndFireEvent(track, stream) {
      stream.removeTrack(track);
      stream.dispatchEvent(new window.MediaStreamTrackEvent('removetrack',
          {track: track}));
    }

    function fireAddTrack(pc, track, receiver, streams) {
      var trackEvent = new Event('track');
      trackEvent.track = track;
      trackEvent.receiver = receiver;
      trackEvent.transceiver = {receiver: receiver};
      trackEvent.streams = streams;
      window.setTimeout(function() {
        pc._dispatchEvent('track', trackEvent);
      });
    }

    var RTCPeerConnection = function(config) {
      var pc = this;

      var _eventTarget = document.createDocumentFragment();
      ['addEventListener', 'removeEventListener', 'dispatchEvent']
          .forEach(function(method) {
            pc[method] = _eventTarget[method].bind(_eventTarget);
          });

      this.canTrickleIceCandidates = null;

      this.needNegotiation = false;

      this.localStreams = [];
      this.remoteStreams = [];

      this._localDescription = null;
      this._remoteDescription = null;

      this.signalingState = 'stable';
      this.iceConnectionState = 'new';
      this.connectionState = 'new';
      this.iceGatheringState = 'new';

      config = JSON.parse(JSON.stringify(config || {}));

      this.usingBundle = config.bundlePolicy === 'max-bundle';
      if (config.rtcpMuxPolicy === 'negotiate') {
        throw(makeError('NotSupportedError',
            'rtcpMuxPolicy \'negotiate\' is not supported'));
      } else if (!config.rtcpMuxPolicy) {
        config.rtcpMuxPolicy = 'require';
      }

      switch (config.iceTransportPolicy) {
        case 'all':
        case 'relay':
          break;
        default:
          config.iceTransportPolicy = 'all';
          break;
      }

      switch (config.bundlePolicy) {
        case 'balanced':
        case 'max-compat':
        case 'max-bundle':
          break;
        default:
          config.bundlePolicy = 'balanced';
          break;
      }

      config.iceServers = filterIceServers(config.iceServers || [], edgeVersion);

      this._iceGatherers = [];
      if (config.iceCandidatePoolSize) {
        for (var i = config.iceCandidatePoolSize; i > 0; i--) {
          this._iceGatherers.push(new window.RTCIceGatherer({
            iceServers: config.iceServers,
            gatherPolicy: config.iceTransportPolicy
          }));
        }
      } else {
        config.iceCandidatePoolSize = 0;
      }

      this._config = config;

      // per-track iceGathers, iceTransports, dtlsTransports, rtpSenders, ...
      // everything that is needed to describe a SDP m-line.
      this.transceivers = [];

      this._sdpSessionId = SDPUtils.generateSessionId();
      this._sdpSessionVersion = 0;

      this._dtlsRole = undefined; // role for a=setup to use in answers.

      this._isClosed = false;
    };

    Object.defineProperty(RTCPeerConnection.prototype, 'localDescription', {
      configurable: true,
      get: function() {
        return this._localDescription;
      }
    });
    Object.defineProperty(RTCPeerConnection.prototype, 'remoteDescription', {
      configurable: true,
      get: function() {
        return this._remoteDescription;
      }
    });

    // set up event handlers on prototype
    RTCPeerConnection.prototype.onicecandidate = null;
    RTCPeerConnection.prototype.onaddstream = null;
    RTCPeerConnection.prototype.ontrack = null;
    RTCPeerConnection.prototype.onremovestream = null;
    RTCPeerConnection.prototype.onsignalingstatechange = null;
    RTCPeerConnection.prototype.oniceconnectionstatechange = null;
    RTCPeerConnection.prototype.onconnectionstatechange = null;
    RTCPeerConnection.prototype.onicegatheringstatechange = null;
    RTCPeerConnection.prototype.onnegotiationneeded = null;
    RTCPeerConnection.prototype.ondatachannel = null;

    RTCPeerConnection.prototype._dispatchEvent = function(name, event) {
      if (this._isClosed) {
        return;
      }
      this.dispatchEvent(event);
      if (typeof this['on' + name] === 'function') {
        this['on' + name](event);
      }
    };

    RTCPeerConnection.prototype._emitGatheringStateChange = function() {
      var event = new Event('icegatheringstatechange');
      this._dispatchEvent('icegatheringstatechange', event);
    };

    RTCPeerConnection.prototype.getConfiguration = function() {
      return this._config;
    };

    RTCPeerConnection.prototype.getLocalStreams = function() {
      return this.localStreams;
    };

    RTCPeerConnection.prototype.getRemoteStreams = function() {
      return this.remoteStreams;
    };

    // internal helper to create a transceiver object.
    // (which is not yet the same as the WebRTC 1.0 transceiver)
    RTCPeerConnection.prototype._createTransceiver = function(kind, doNotAdd) {
      var hasBundleTransport = this.transceivers.length > 0;
      var transceiver = {
        track: null,
        iceGatherer: null,
        iceTransport: null,
        dtlsTransport: null,
        localCapabilities: null,
        remoteCapabilities: null,
        rtpSender: null,
        rtpReceiver: null,
        kind: kind,
        mid: null,
        sendEncodingParameters: null,
        recvEncodingParameters: null,
        stream: null,
        associatedRemoteMediaStreams: [],
        wantReceive: true
      };
      if (this.usingBundle && hasBundleTransport) {
        transceiver.iceTransport = this.transceivers[0].iceTransport;
        transceiver.dtlsTransport = this.transceivers[0].dtlsTransport;
      } else {
        var transports = this._createIceAndDtlsTransports();
        transceiver.iceTransport = transports.iceTransport;
        transceiver.dtlsTransport = transports.dtlsTransport;
      }
      if (!doNotAdd) {
        this.transceivers.push(transceiver);
      }
      return transceiver;
    };

    RTCPeerConnection.prototype.addTrack = function(track, stream) {
      if (this._isClosed) {
        throw makeError('InvalidStateError',
            'Attempted to call addTrack on a closed peerconnection.');
      }

      var alreadyExists = this.transceivers.find(function(s) {
        return s.track === track;
      });

      if (alreadyExists) {
        throw makeError('InvalidAccessError', 'Track already exists.');
      }

      var transceiver;
      for (var i = 0; i < this.transceivers.length; i++) {
        if (!this.transceivers[i].track &&
            this.transceivers[i].kind === track.kind) {
          transceiver = this.transceivers[i];
        }
      }
      if (!transceiver) {
        transceiver = this._createTransceiver(track.kind);
      }

      this._maybeFireNegotiationNeeded();

      if (this.localStreams.indexOf(stream) === -1) {
        this.localStreams.push(stream);
      }

      transceiver.track = track;
      transceiver.stream = stream;
      transceiver.rtpSender = new window.RTCRtpSender(track,
          transceiver.dtlsTransport);
      return transceiver.rtpSender;
    };

    RTCPeerConnection.prototype.addStream = function(stream) {
      var pc = this;
      if (edgeVersion >= 15025) {
        stream.getTracks().forEach(function(track) {
          pc.addTrack(track, stream);
        });
      } else {
        // Clone is necessary for local demos mostly, attaching directly
        // to two different senders does not work (build 10547).
        // Fixed in 15025 (or earlier)
        var clonedStream = stream.clone();
        stream.getTracks().forEach(function(track, idx) {
          var clonedTrack = clonedStream.getTracks()[idx];
          track.addEventListener('enabled', function(event) {
            clonedTrack.enabled = event.enabled;
          });
        });
        clonedStream.getTracks().forEach(function(track) {
          pc.addTrack(track, clonedStream);
        });
      }
    };

    RTCPeerConnection.prototype.removeTrack = function(sender) {
      if (this._isClosed) {
        throw makeError('InvalidStateError',
            'Attempted to call removeTrack on a closed peerconnection.');
      }

      if (!(sender instanceof window.RTCRtpSender)) {
        throw new TypeError('Argument 1 of RTCPeerConnection.removeTrack ' +
            'does not implement interface RTCRtpSender.');
      }

      var transceiver = this.transceivers.find(function(t) {
        return t.rtpSender === sender;
      });

      if (!transceiver) {
        throw makeError('InvalidAccessError',
            'Sender was not created by this connection.');
      }
      var stream = transceiver.stream;

      transceiver.rtpSender.stop();
      transceiver.rtpSender = null;
      transceiver.track = null;
      transceiver.stream = null;

      // remove the stream from the set of local streams
      var localStreams = this.transceivers.map(function(t) {
        return t.stream;
      });
      if (localStreams.indexOf(stream) === -1 &&
          this.localStreams.indexOf(stream) > -1) {
        this.localStreams.splice(this.localStreams.indexOf(stream), 1);
      }

      this._maybeFireNegotiationNeeded();
    };

    RTCPeerConnection.prototype.removeStream = function(stream) {
      var pc = this;
      stream.getTracks().forEach(function(track) {
        var sender = pc.getSenders().find(function(s) {
          return s.track === track;
        });
        if (sender) {
          pc.removeTrack(sender);
        }
      });
    };

    RTCPeerConnection.prototype.getSenders = function() {
      return this.transceivers.filter(function(transceiver) {
        return !!transceiver.rtpSender;
      })
      .map(function(transceiver) {
        return transceiver.rtpSender;
      });
    };

    RTCPeerConnection.prototype.getReceivers = function() {
      return this.transceivers.filter(function(transceiver) {
        return !!transceiver.rtpReceiver;
      })
      .map(function(transceiver) {
        return transceiver.rtpReceiver;
      });
    };


    RTCPeerConnection.prototype._createIceGatherer = function(sdpMLineIndex,
        usingBundle) {
      var pc = this;
      if (usingBundle && sdpMLineIndex > 0) {
        return this.transceivers[0].iceGatherer;
      } else if (this._iceGatherers.length) {
        return this._iceGatherers.shift();
      }
      var iceGatherer = new window.RTCIceGatherer({
        iceServers: this._config.iceServers,
        gatherPolicy: this._config.iceTransportPolicy
      });
      Object.defineProperty(iceGatherer, 'state',
          {value: 'new', writable: true}
      );

      this.transceivers[sdpMLineIndex].bufferedCandidateEvents = [];
      this.transceivers[sdpMLineIndex].bufferCandidates = function(event) {
        var end = !event.candidate || Object.keys(event.candidate).length === 0;
        // polyfill since RTCIceGatherer.state is not implemented in
        // Edge 10547 yet.
        iceGatherer.state = end ? 'completed' : 'gathering';
        if (pc.transceivers[sdpMLineIndex].bufferedCandidateEvents !== null) {
          pc.transceivers[sdpMLineIndex].bufferedCandidateEvents.push(event);
        }
      };
      iceGatherer.addEventListener('localcandidate',
        this.transceivers[sdpMLineIndex].bufferCandidates);
      return iceGatherer;
    };

    // start gathering from an RTCIceGatherer.
    RTCPeerConnection.prototype._gather = function(mid, sdpMLineIndex) {
      var pc = this;
      var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
      if (iceGatherer.onlocalcandidate) {
        return;
      }
      var bufferedCandidateEvents =
        this.transceivers[sdpMLineIndex].bufferedCandidateEvents;
      this.transceivers[sdpMLineIndex].bufferedCandidateEvents = null;
      iceGatherer.removeEventListener('localcandidate',
        this.transceivers[sdpMLineIndex].bufferCandidates);
      iceGatherer.onlocalcandidate = function(evt) {
        if (pc.usingBundle && sdpMLineIndex > 0) {
          // if we know that we use bundle we can drop candidates with
          // ѕdpMLineIndex > 0. If we don't do this then our state gets
          // confused since we dispose the extra ice gatherer.
          return;
        }
        var event = new Event('icecandidate');
        event.candidate = {sdpMid: mid, sdpMLineIndex: sdpMLineIndex};

        var cand = evt.candidate;
        // Edge emits an empty object for RTCIceCandidateComplete‥
        var end = !cand || Object.keys(cand).length === 0;
        if (end) {
          // polyfill since RTCIceGatherer.state is not implemented in
          // Edge 10547 yet.
          if (iceGatherer.state === 'new' || iceGatherer.state === 'gathering') {
            iceGatherer.state = 'completed';
          }
        } else {
          if (iceGatherer.state === 'new') {
            iceGatherer.state = 'gathering';
          }
          // RTCIceCandidate doesn't have a component, needs to be added
          cand.component = 1;
          // also the usernameFragment. TODO: update SDP to take both variants.
          cand.ufrag = iceGatherer.getLocalParameters().usernameFragment;

          var serializedCandidate = SDPUtils.writeCandidate(cand);
          event.candidate = Object.assign(event.candidate,
              SDPUtils.parseCandidate(serializedCandidate));

          event.candidate.candidate = serializedCandidate;
          event.candidate.toJSON = function() {
            return {
              candidate: event.candidate.candidate,
              sdpMid: event.candidate.sdpMid,
              sdpMLineIndex: event.candidate.sdpMLineIndex,
              usernameFragment: event.candidate.usernameFragment
            };
          };
        }

        // update local description.
        var sections = SDPUtils.getMediaSections(pc._localDescription.sdp);
        if (!end) {
          sections[event.candidate.sdpMLineIndex] +=
              'a=' + event.candidate.candidate + '\r\n';
        } else {
          sections[event.candidate.sdpMLineIndex] +=
              'a=end-of-candidates\r\n';
        }
        pc._localDescription.sdp =
            SDPUtils.getDescription(pc._localDescription.sdp) +
            sections.join('');
        var complete = pc.transceivers.every(function(transceiver) {
          return transceiver.iceGatherer &&
              transceiver.iceGatherer.state === 'completed';
        });

        if (pc.iceGatheringState !== 'gathering') {
          pc.iceGatheringState = 'gathering';
          pc._emitGatheringStateChange();
        }

        // Emit candidate. Also emit null candidate when all gatherers are
        // complete.
        if (!end) {
          pc._dispatchEvent('icecandidate', event);
        }
        if (complete) {
          pc._dispatchEvent('icecandidate', new Event('icecandidate'));
          pc.iceGatheringState = 'complete';
          pc._emitGatheringStateChange();
        }
      };

      // emit already gathered candidates.
      window.setTimeout(function() {
        bufferedCandidateEvents.forEach(function(e) {
          iceGatherer.onlocalcandidate(e);
        });
      }, 0);
    };

    // Create ICE transport and DTLS transport.
    RTCPeerConnection.prototype._createIceAndDtlsTransports = function() {
      var pc = this;
      var iceTransport = new window.RTCIceTransport(null);
      iceTransport.onicestatechange = function() {
        pc._updateIceConnectionState();
        pc._updateConnectionState();
      };

      var dtlsTransport = new window.RTCDtlsTransport(iceTransport);
      dtlsTransport.ondtlsstatechange = function() {
        pc._updateConnectionState();
      };
      dtlsTransport.onerror = function() {
        // onerror does not set state to failed by itself.
        Object.defineProperty(dtlsTransport, 'state',
            {value: 'failed', writable: true});
        pc._updateConnectionState();
      };

      return {
        iceTransport: iceTransport,
        dtlsTransport: dtlsTransport
      };
    };

    // Destroy ICE gatherer, ICE transport and DTLS transport.
    // Without triggering the callbacks.
    RTCPeerConnection.prototype._disposeIceAndDtlsTransports = function(
        sdpMLineIndex) {
      var iceGatherer = this.transceivers[sdpMLineIndex].iceGatherer;
      if (iceGatherer) {
        delete iceGatherer.onlocalcandidate;
        delete this.transceivers[sdpMLineIndex].iceGatherer;
      }
      var iceTransport = this.transceivers[sdpMLineIndex].iceTransport;
      if (iceTransport) {
        delete iceTransport.onicestatechange;
        delete this.transceivers[sdpMLineIndex].iceTransport;
      }
      var dtlsTransport = this.transceivers[sdpMLineIndex].dtlsTransport;
      if (dtlsTransport) {
        delete dtlsTransport.ondtlsstatechange;
        delete dtlsTransport.onerror;
        delete this.transceivers[sdpMLineIndex].dtlsTransport;
      }
    };

    // Start the RTP Sender and Receiver for a transceiver.
    RTCPeerConnection.prototype._transceive = function(transceiver,
        send, recv) {
      var params = getCommonCapabilities(transceiver.localCapabilities,
          transceiver.remoteCapabilities);
      if (send && transceiver.rtpSender) {
        params.encodings = transceiver.sendEncodingParameters;
        params.rtcp = {
          cname: SDPUtils.localCName,
          compound: transceiver.rtcpParameters.compound
        };
        if (transceiver.recvEncodingParameters.length) {
          params.rtcp.ssrc = transceiver.recvEncodingParameters[0].ssrc;
        }
        transceiver.rtpSender.send(params);
      }
      if (recv && transceiver.rtpReceiver && params.codecs.length > 0) {
        // remove RTX field in Edge 14942
        if (transceiver.kind === 'video'
            && transceiver.recvEncodingParameters
            && edgeVersion < 15019) {
          transceiver.recvEncodingParameters.forEach(function(p) {
            delete p.rtx;
          });
        }
        if (transceiver.recvEncodingParameters.length) {
          params.encodings = transceiver.recvEncodingParameters;
        } else {
          params.encodings = [{}];
        }
        params.rtcp = {
          compound: transceiver.rtcpParameters.compound
        };
        if (transceiver.rtcpParameters.cname) {
          params.rtcp.cname = transceiver.rtcpParameters.cname;
        }
        if (transceiver.sendEncodingParameters.length) {
          params.rtcp.ssrc = transceiver.sendEncodingParameters[0].ssrc;
        }
        transceiver.rtpReceiver.receive(params);
      }
    };

    RTCPeerConnection.prototype.setLocalDescription = function(description) {
      var pc = this;

      // Note: pranswer is not supported.
      if (['offer', 'answer'].indexOf(description.type) === -1) {
        return Promise.reject(makeError('TypeError',
            'Unsupported type "' + description.type + '"'));
      }

      if (!isActionAllowedInSignalingState('setLocalDescription',
          description.type, pc.signalingState) || pc._isClosed) {
        return Promise.reject(makeError('InvalidStateError',
            'Can not set local ' + description.type +
            ' in state ' + pc.signalingState));
      }

      var sections;
      var sessionpart;
      if (description.type === 'offer') {
        // VERY limited support for SDP munging. Limited to:
        // * changing the order of codecs
        sections = SDPUtils.splitSections(description.sdp);
        sessionpart = sections.shift();
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var caps = SDPUtils.parseRtpParameters(mediaSection);
          pc.transceivers[sdpMLineIndex].localCapabilities = caps;
        });

        pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
          pc._gather(transceiver.mid, sdpMLineIndex);
        });
      } else if (description.type === 'answer') {
        sections = SDPUtils.splitSections(pc._remoteDescription.sdp);
        sessionpart = sections.shift();
        var isIceLite = SDPUtils.matchPrefix(sessionpart,
            'a=ice-lite').length > 0;
        sections.forEach(function(mediaSection, sdpMLineIndex) {
          var transceiver = pc.transceivers[sdpMLineIndex];
          var iceGatherer = transceiver.iceGatherer;
          var iceTransport = transceiver.iceTransport;
          var dtlsTransport = transceiver.dtlsTransport;
          var localCapabilities = transceiver.localCapabilities;
          var remoteCapabilities = transceiver.remoteCapabilities;

          // treat bundle-only as not-rejected.
          var rejected = SDPUtils.isRejected(mediaSection) &&
              SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;

          if (!rejected && !transceiver.rejected) {
            var remoteIceParameters = SDPUtils.getIceParameters(
                mediaSection, sessionpart);
            var remoteDtlsParameters = SDPUtils.getDtlsParameters(
                mediaSection, sessionpart);
            if (isIceLite) {
              remoteDtlsParameters.role = 'server';
            }

            if (!pc.usingBundle || sdpMLineIndex === 0) {
              pc._gather(transceiver.mid, sdpMLineIndex);
              if (iceTransport.state === 'new') {
                iceTransport.start(iceGatherer, remoteIceParameters,
                    isIceLite ? 'controlling' : 'controlled');
              }
              if (dtlsTransport.state === 'new') {
                dtlsTransport.start(remoteDtlsParameters);
              }
            }

            // Calculate intersection of capabilities.
            var params = getCommonCapabilities(localCapabilities,
                remoteCapabilities);

            // Start the RTCRtpSender. The RTCRtpReceiver for this
            // transceiver has already been started in setRemoteDescription.
            pc._transceive(transceiver,
                params.codecs.length > 0,
                false);
          }
        });
      }

      pc._localDescription = {
        type: description.type,
        sdp: description.sdp
      };
      if (description.type === 'offer') {
        pc._updateSignalingState('have-local-offer');
      } else {
        pc._updateSignalingState('stable');
      }

      return Promise.resolve();
    };

    RTCPeerConnection.prototype.setRemoteDescription = function(description) {
      var pc = this;

      // Note: pranswer is not supported.
      if (['offer', 'answer'].indexOf(description.type) === -1) {
        return Promise.reject(makeError('TypeError',
            'Unsupported type "' + description.type + '"'));
      }

      if (!isActionAllowedInSignalingState('setRemoteDescription',
          description.type, pc.signalingState) || pc._isClosed) {
        return Promise.reject(makeError('InvalidStateError',
            'Can not set remote ' + description.type +
            ' in state ' + pc.signalingState));
      }

      var streams = {};
      pc.remoteStreams.forEach(function(stream) {
        streams[stream.id] = stream;
      });
      var receiverList = [];
      var sections = SDPUtils.splitSections(description.sdp);
      var sessionpart = sections.shift();
      var isIceLite = SDPUtils.matchPrefix(sessionpart,
          'a=ice-lite').length > 0;
      var usingBundle = SDPUtils.matchPrefix(sessionpart,
          'a=group:BUNDLE ').length > 0;
      pc.usingBundle = usingBundle;
      var iceOptions = SDPUtils.matchPrefix(sessionpart,
          'a=ice-options:')[0];
      if (iceOptions) {
        pc.canTrickleIceCandidates = iceOptions.substr(14).split(' ')
            .indexOf('trickle') >= 0;
      } else {
        pc.canTrickleIceCandidates = false;
      }

      sections.forEach(function(mediaSection, sdpMLineIndex) {
        var lines = SDPUtils.splitLines(mediaSection);
        var kind = SDPUtils.getKind(mediaSection);
        // treat bundle-only as not-rejected.
        var rejected = SDPUtils.isRejected(mediaSection) &&
            SDPUtils.matchPrefix(mediaSection, 'a=bundle-only').length === 0;
        var protocol = lines[0].substr(2).split(' ')[2];

        var direction = SDPUtils.getDirection(mediaSection, sessionpart);
        var remoteMsid = SDPUtils.parseMsid(mediaSection);

        var mid = SDPUtils.getMid(mediaSection) || SDPUtils.generateIdentifier();

        // Reject datachannels which are not implemented yet.
        if (rejected || (kind === 'application' && (protocol === 'DTLS/SCTP' ||
            protocol === 'UDP/DTLS/SCTP'))) {
          // TODO: this is dangerous in the case where a non-rejected m-line
          //     becomes rejected.
          pc.transceivers[sdpMLineIndex] = {
            mid: mid,
            kind: kind,
            protocol: protocol,
            rejected: true
          };
          return;
        }

        if (!rejected && pc.transceivers[sdpMLineIndex] &&
            pc.transceivers[sdpMLineIndex].rejected) {
          // recycle a rejected transceiver.
          pc.transceivers[sdpMLineIndex] = pc._createTransceiver(kind, true);
        }

        var transceiver;
        var iceGatherer;
        var iceTransport;
        var dtlsTransport;
        var rtpReceiver;
        var sendEncodingParameters;
        var recvEncodingParameters;
        var localCapabilities;

        var track;
        // FIXME: ensure the mediaSection has rtcp-mux set.
        var remoteCapabilities = SDPUtils.parseRtpParameters(mediaSection);
        var remoteIceParameters;
        var remoteDtlsParameters;
        if (!rejected) {
          remoteIceParameters = SDPUtils.getIceParameters(mediaSection,
              sessionpart);
          remoteDtlsParameters = SDPUtils.getDtlsParameters(mediaSection,
              sessionpart);
          remoteDtlsParameters.role = 'client';
        }
        recvEncodingParameters =
            SDPUtils.parseRtpEncodingParameters(mediaSection);

        var rtcpParameters = SDPUtils.parseRtcpParameters(mediaSection);

        var isComplete = SDPUtils.matchPrefix(mediaSection,
            'a=end-of-candidates', sessionpart).length > 0;
        var cands = SDPUtils.matchPrefix(mediaSection, 'a=candidate:')
            .map(function(cand) {
              return SDPUtils.parseCandidate(cand);
            })
            .filter(function(cand) {
              return cand.component === 1;
            });

        // Check if we can use BUNDLE and dispose transports.
        if ((description.type === 'offer' || description.type === 'answer') &&
            !rejected && usingBundle && sdpMLineIndex > 0 &&
            pc.transceivers[sdpMLineIndex]) {
          pc._disposeIceAndDtlsTransports(sdpMLineIndex);
          pc.transceivers[sdpMLineIndex].iceGatherer =
              pc.transceivers[0].iceGatherer;
          pc.transceivers[sdpMLineIndex].iceTransport =
              pc.transceivers[0].iceTransport;
          pc.transceivers[sdpMLineIndex].dtlsTransport =
              pc.transceivers[0].dtlsTransport;
          if (pc.transceivers[sdpMLineIndex].rtpSender) {
            pc.transceivers[sdpMLineIndex].rtpSender.setTransport(
                pc.transceivers[0].dtlsTransport);
          }
          if (pc.transceivers[sdpMLineIndex].rtpReceiver) {
            pc.transceivers[sdpMLineIndex].rtpReceiver.setTransport(
                pc.transceivers[0].dtlsTransport);
          }
        }
        if (description.type === 'offer' && !rejected) {
          transceiver = pc.transceivers[sdpMLineIndex] ||
              pc._createTransceiver(kind);
          transceiver.mid = mid;

          if (!transceiver.iceGatherer) {
            transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
                usingBundle);
          }

          if (cands.length && transceiver.iceTransport.state === 'new') {
            if (isComplete && (!usingBundle || sdpMLineIndex === 0)) {
              transceiver.iceTransport.setRemoteCandidates(cands);
            } else {
              cands.forEach(function(candidate) {
                maybeAddCandidate(transceiver.iceTransport, candidate);
              });
            }
          }

          localCapabilities = window.RTCRtpReceiver.getCapabilities(kind);

          // filter RTX until additional stuff needed for RTX is implemented
          // in adapter.js
          if (edgeVersion < 15019) {
            localCapabilities.codecs = localCapabilities.codecs.filter(
                function(codec) {
                  return codec.name !== 'rtx';
                });
          }

          sendEncodingParameters = transceiver.sendEncodingParameters || [{
            ssrc: (2 * sdpMLineIndex + 2) * 1001
          }];

          // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
          var isNewTrack = false;
          if (direction === 'sendrecv' || direction === 'sendonly') {
            isNewTrack = !transceiver.rtpReceiver;
            rtpReceiver = transceiver.rtpReceiver ||
                new window.RTCRtpReceiver(transceiver.dtlsTransport, kind);

            if (isNewTrack) {
              var stream;
              track = rtpReceiver.track;
              // FIXME: does not work with Plan B.
              if (remoteMsid && remoteMsid.stream === '-') {
                // no-op. a stream id of '-' means: no associated stream.
              } else if (remoteMsid) {
                if (!streams[remoteMsid.stream]) {
                  streams[remoteMsid.stream] = new window.MediaStream();
                  Object.defineProperty(streams[remoteMsid.stream], 'id', {
                    get: function() {
                      return remoteMsid.stream;
                    }
                  });
                }
                Object.defineProperty(track, 'id', {
                  get: function() {
                    return remoteMsid.track;
                  }
                });
                stream = streams[remoteMsid.stream];
              } else {
                if (!streams.default) {
                  streams.default = new window.MediaStream();
                }
                stream = streams.default;
              }
              if (stream) {
                addTrackToStreamAndFireEvent(track, stream);
                transceiver.associatedRemoteMediaStreams.push(stream);
              }
              receiverList.push([track, rtpReceiver, stream]);
            }
          } else if (transceiver.rtpReceiver && transceiver.rtpReceiver.track) {
            transceiver.associatedRemoteMediaStreams.forEach(function(s) {
              var nativeTrack = s.getTracks().find(function(t) {
                return t.id === transceiver.rtpReceiver.track.id;
              });
              if (nativeTrack) {
                removeTrackFromStreamAndFireEvent(nativeTrack, s);
              }
            });
            transceiver.associatedRemoteMediaStreams = [];
          }

          transceiver.localCapabilities = localCapabilities;
          transceiver.remoteCapabilities = remoteCapabilities;
          transceiver.rtpReceiver = rtpReceiver;
          transceiver.rtcpParameters = rtcpParameters;
          transceiver.sendEncodingParameters = sendEncodingParameters;
          transceiver.recvEncodingParameters = recvEncodingParameters;

          // Start the RTCRtpReceiver now. The RTPSender is started in
          // setLocalDescription.
          pc._transceive(pc.transceivers[sdpMLineIndex],
              false,
              isNewTrack);
        } else if (description.type === 'answer' && !rejected) {
          transceiver = pc.transceivers[sdpMLineIndex];
          iceGatherer = transceiver.iceGatherer;
          iceTransport = transceiver.iceTransport;
          dtlsTransport = transceiver.dtlsTransport;
          rtpReceiver = transceiver.rtpReceiver;
          sendEncodingParameters = transceiver.sendEncodingParameters;
          localCapabilities = transceiver.localCapabilities;

          pc.transceivers[sdpMLineIndex].recvEncodingParameters =
              recvEncodingParameters;
          pc.transceivers[sdpMLineIndex].remoteCapabilities =
              remoteCapabilities;
          pc.transceivers[sdpMLineIndex].rtcpParameters = rtcpParameters;

          if (cands.length && iceTransport.state === 'new') {
            if ((isIceLite || isComplete) &&
                (!usingBundle || sdpMLineIndex === 0)) {
              iceTransport.setRemoteCandidates(cands);
            } else {
              cands.forEach(function(candidate) {
                maybeAddCandidate(transceiver.iceTransport, candidate);
              });
            }
          }

          if (!usingBundle || sdpMLineIndex === 0) {
            if (iceTransport.state === 'new') {
              iceTransport.start(iceGatherer, remoteIceParameters,
                  'controlling');
            }
            if (dtlsTransport.state === 'new') {
              dtlsTransport.start(remoteDtlsParameters);
            }
          }

          // If the offer contained RTX but the answer did not,
          // remove RTX from sendEncodingParameters.
          var commonCapabilities = getCommonCapabilities(
            transceiver.localCapabilities,
            transceiver.remoteCapabilities);

          var hasRtx = commonCapabilities.codecs.filter(function(c) {
            return c.name.toLowerCase() === 'rtx';
          }).length;
          if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
            delete transceiver.sendEncodingParameters[0].rtx;
          }

          pc._transceive(transceiver,
              direction === 'sendrecv' || direction === 'recvonly',
              direction === 'sendrecv' || direction === 'sendonly');

          // TODO: rewrite to use http://w3c.github.io/webrtc-pc/#set-associated-remote-streams
          if (rtpReceiver &&
              (direction === 'sendrecv' || direction === 'sendonly')) {
            track = rtpReceiver.track;
            if (remoteMsid) {
              if (!streams[remoteMsid.stream]) {
                streams[remoteMsid.stream] = new window.MediaStream();
              }
              addTrackToStreamAndFireEvent(track, streams[remoteMsid.stream]);
              receiverList.push([track, rtpReceiver, streams[remoteMsid.stream]]);
            } else {
              if (!streams.default) {
                streams.default = new window.MediaStream();
              }
              addTrackToStreamAndFireEvent(track, streams.default);
              receiverList.push([track, rtpReceiver, streams.default]);
            }
          } else {
            // FIXME: actually the receiver should be created later.
            delete transceiver.rtpReceiver;
          }
        }
      });

      if (pc._dtlsRole === undefined) {
        pc._dtlsRole = description.type === 'offer' ? 'active' : 'passive';
      }

      pc._remoteDescription = {
        type: description.type,
        sdp: description.sdp
      };
      if (description.type === 'offer') {
        pc._updateSignalingState('have-remote-offer');
      } else {
        pc._updateSignalingState('stable');
      }
      Object.keys(streams).forEach(function(sid) {
        var stream = streams[sid];
        if (stream.getTracks().length) {
          if (pc.remoteStreams.indexOf(stream) === -1) {
            pc.remoteStreams.push(stream);
            var event = new Event('addstream');
            event.stream = stream;
            window.setTimeout(function() {
              pc._dispatchEvent('addstream', event);
            });
          }

          receiverList.forEach(function(item) {
            var track = item[0];
            var receiver = item[1];
            if (stream.id !== item[2].id) {
              return;
            }
            fireAddTrack(pc, track, receiver, [stream]);
          });
        }
      });
      receiverList.forEach(function(item) {
        if (item[2]) {
          return;
        }
        fireAddTrack(pc, item[0], item[1], []);
      });

      // check whether addIceCandidate({}) was called within four seconds after
      // setRemoteDescription.
      window.setTimeout(function() {
        if (!(pc && pc.transceivers)) {
          return;
        }
        pc.transceivers.forEach(function(transceiver) {
          if (transceiver.iceTransport &&
              transceiver.iceTransport.state === 'new' &&
              transceiver.iceTransport.getRemoteCandidates().length > 0) {
            console.warn('Timeout for addRemoteCandidate. Consider sending ' +
                'an end-of-candidates notification');
            transceiver.iceTransport.addRemoteCandidate({});
          }
        });
      }, 4000);

      return Promise.resolve();
    };

    RTCPeerConnection.prototype.close = function() {
      this.transceivers.forEach(function(transceiver) {
        /* not yet
        if (transceiver.iceGatherer) {
          transceiver.iceGatherer.close();
        }
        */
        if (transceiver.iceTransport) {
          transceiver.iceTransport.stop();
        }
        if (transceiver.dtlsTransport) {
          transceiver.dtlsTransport.stop();
        }
        if (transceiver.rtpSender) {
          transceiver.rtpSender.stop();
        }
        if (transceiver.rtpReceiver) {
          transceiver.rtpReceiver.stop();
        }
      });
      // FIXME: clean up tracks, local streams, remote streams, etc
      this._isClosed = true;
      this._updateSignalingState('closed');
    };

    // Update the signaling state.
    RTCPeerConnection.prototype._updateSignalingState = function(newState) {
      this.signalingState = newState;
      var event = new Event('signalingstatechange');
      this._dispatchEvent('signalingstatechange', event);
    };

    // Determine whether to fire the negotiationneeded event.
    RTCPeerConnection.prototype._maybeFireNegotiationNeeded = function() {
      var pc = this;
      if (this.signalingState !== 'stable' || this.needNegotiation === true) {
        return;
      }
      this.needNegotiation = true;
      window.setTimeout(function() {
        if (pc.needNegotiation) {
          pc.needNegotiation = false;
          var event = new Event('negotiationneeded');
          pc._dispatchEvent('negotiationneeded', event);
        }
      }, 0);
    };

    // Update the ice connection state.
    RTCPeerConnection.prototype._updateIceConnectionState = function() {
      var newState;
      var states = {
        'new': 0,
        closed: 0,
        checking: 0,
        connected: 0,
        completed: 0,
        disconnected: 0,
        failed: 0
      };
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport && !transceiver.rejected) {
          states[transceiver.iceTransport.state]++;
        }
      });

      newState = 'new';
      if (states.failed > 0) {
        newState = 'failed';
      } else if (states.checking > 0) {
        newState = 'checking';
      } else if (states.disconnected > 0) {
        newState = 'disconnected';
      } else if (states.new > 0) {
        newState = 'new';
      } else if (states.connected > 0) {
        newState = 'connected';
      } else if (states.completed > 0) {
        newState = 'completed';
      }

      if (newState !== this.iceConnectionState) {
        this.iceConnectionState = newState;
        var event = new Event('iceconnectionstatechange');
        this._dispatchEvent('iceconnectionstatechange', event);
      }
    };

    // Update the connection state.
    RTCPeerConnection.prototype._updateConnectionState = function() {
      var newState;
      var states = {
        'new': 0,
        closed: 0,
        connecting: 0,
        connected: 0,
        completed: 0,
        disconnected: 0,
        failed: 0
      };
      this.transceivers.forEach(function(transceiver) {
        if (transceiver.iceTransport && transceiver.dtlsTransport &&
            !transceiver.rejected) {
          states[transceiver.iceTransport.state]++;
          states[transceiver.dtlsTransport.state]++;
        }
      });
      // ICETransport.completed and connected are the same for this purpose.
      states.connected += states.completed;

      newState = 'new';
      if (states.failed > 0) {
        newState = 'failed';
      } else if (states.connecting > 0) {
        newState = 'connecting';
      } else if (states.disconnected > 0) {
        newState = 'disconnected';
      } else if (states.new > 0) {
        newState = 'new';
      } else if (states.connected > 0) {
        newState = 'connected';
      }

      if (newState !== this.connectionState) {
        this.connectionState = newState;
        var event = new Event('connectionstatechange');
        this._dispatchEvent('connectionstatechange', event);
      }
    };

    RTCPeerConnection.prototype.createOffer = function() {
      var pc = this;

      if (pc._isClosed) {
        return Promise.reject(makeError('InvalidStateError',
            'Can not call createOffer after close'));
      }

      var numAudioTracks = pc.transceivers.filter(function(t) {
        return t.kind === 'audio';
      }).length;
      var numVideoTracks = pc.transceivers.filter(function(t) {
        return t.kind === 'video';
      }).length;

      // Determine number of audio and video tracks we need to send/recv.
      var offerOptions = arguments[0];
      if (offerOptions) {
        // Reject Chrome legacy constraints.
        if (offerOptions.mandatory || offerOptions.optional) {
          throw new TypeError(
              'Legacy mandatory/optional constraints not supported.');
        }
        if (offerOptions.offerToReceiveAudio !== undefined) {
          if (offerOptions.offerToReceiveAudio === true) {
            numAudioTracks = 1;
          } else if (offerOptions.offerToReceiveAudio === false) {
            numAudioTracks = 0;
          } else {
            numAudioTracks = offerOptions.offerToReceiveAudio;
          }
        }
        if (offerOptions.offerToReceiveVideo !== undefined) {
          if (offerOptions.offerToReceiveVideo === true) {
            numVideoTracks = 1;
          } else if (offerOptions.offerToReceiveVideo === false) {
            numVideoTracks = 0;
          } else {
            numVideoTracks = offerOptions.offerToReceiveVideo;
          }
        }
      }

      pc.transceivers.forEach(function(transceiver) {
        if (transceiver.kind === 'audio') {
          numAudioTracks--;
          if (numAudioTracks < 0) {
            transceiver.wantReceive = false;
          }
        } else if (transceiver.kind === 'video') {
          numVideoTracks--;
          if (numVideoTracks < 0) {
            transceiver.wantReceive = false;
          }
        }
      });

      // Create M-lines for recvonly streams.
      while (numAudioTracks > 0 || numVideoTracks > 0) {
        if (numAudioTracks > 0) {
          pc._createTransceiver('audio');
          numAudioTracks--;
        }
        if (numVideoTracks > 0) {
          pc._createTransceiver('video');
          numVideoTracks--;
        }
      }

      var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
          pc._sdpSessionVersion++);
      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        // For each track, create an ice gatherer, ice transport,
        // dtls transport, potentially rtpsender and rtpreceiver.
        var track = transceiver.track;
        var kind = transceiver.kind;
        var mid = transceiver.mid || SDPUtils.generateIdentifier();
        transceiver.mid = mid;

        if (!transceiver.iceGatherer) {
          transceiver.iceGatherer = pc._createIceGatherer(sdpMLineIndex,
              pc.usingBundle);
        }

        var localCapabilities = window.RTCRtpSender.getCapabilities(kind);
        // filter RTX until additional stuff needed for RTX is implemented
        // in adapter.js
        if (edgeVersion < 15019) {
          localCapabilities.codecs = localCapabilities.codecs.filter(
              function(codec) {
                return codec.name !== 'rtx';
              });
        }
        localCapabilities.codecs.forEach(function(codec) {
          // work around https://bugs.chromium.org/p/webrtc/issues/detail?id=6552
          // by adding level-asymmetry-allowed=1
          if (codec.name === 'H264' &&
              codec.parameters['level-asymmetry-allowed'] === undefined) {
            codec.parameters['level-asymmetry-allowed'] = '1';
          }

          // for subsequent offers, we might have to re-use the payload
          // type of the last offer.
          if (transceiver.remoteCapabilities &&
              transceiver.remoteCapabilities.codecs) {
            transceiver.remoteCapabilities.codecs.forEach(function(remoteCodec) {
              if (codec.name.toLowerCase() === remoteCodec.name.toLowerCase() &&
                  codec.clockRate === remoteCodec.clockRate) {
                codec.preferredPayloadType = remoteCodec.payloadType;
              }
            });
          }
        });
        localCapabilities.headerExtensions.forEach(function(hdrExt) {
          var remoteExtensions = transceiver.remoteCapabilities &&
              transceiver.remoteCapabilities.headerExtensions || [];
          remoteExtensions.forEach(function(rHdrExt) {
            if (hdrExt.uri === rHdrExt.uri) {
              hdrExt.id = rHdrExt.id;
            }
          });
        });

        // generate an ssrc now, to be used later in rtpSender.send
        var sendEncodingParameters = transceiver.sendEncodingParameters || [{
          ssrc: (2 * sdpMLineIndex + 1) * 1001
        }];
        if (track) {
          // add RTX
          if (edgeVersion >= 15019 && kind === 'video' &&
              !sendEncodingParameters[0].rtx) {
            sendEncodingParameters[0].rtx = {
              ssrc: sendEncodingParameters[0].ssrc + 1
            };
          }
        }

        if (transceiver.wantReceive) {
          transceiver.rtpReceiver = new window.RTCRtpReceiver(
              transceiver.dtlsTransport, kind);
        }

        transceiver.localCapabilities = localCapabilities;
        transceiver.sendEncodingParameters = sendEncodingParameters;
      });

      // always offer BUNDLE and dispose on return if not supported.
      if (pc._config.bundlePolicy !== 'max-compat') {
        sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
          return t.mid;
        }).join(' ') + '\r\n';
      }
      sdp += 'a=ice-options:trickle\r\n';

      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        sdp += writeMediaSection(transceiver, transceiver.localCapabilities,
            'offer', transceiver.stream, pc._dtlsRole);
        sdp += 'a=rtcp-rsize\r\n';

        if (transceiver.iceGatherer && pc.iceGatheringState !== 'new' &&
            (sdpMLineIndex === 0 || !pc.usingBundle)) {
          transceiver.iceGatherer.getLocalCandidates().forEach(function(cand) {
            cand.component = 1;
            sdp += 'a=' + SDPUtils.writeCandidate(cand) + '\r\n';
          });

          if (transceiver.iceGatherer.state === 'completed') {
            sdp += 'a=end-of-candidates\r\n';
          }
        }
      });

      var desc = new window.RTCSessionDescription({
        type: 'offer',
        sdp: sdp
      });
      return Promise.resolve(desc);
    };

    RTCPeerConnection.prototype.createAnswer = function() {
      var pc = this;

      if (pc._isClosed) {
        return Promise.reject(makeError('InvalidStateError',
            'Can not call createAnswer after close'));
      }

      if (!(pc.signalingState === 'have-remote-offer' ||
          pc.signalingState === 'have-local-pranswer')) {
        return Promise.reject(makeError('InvalidStateError',
            'Can not call createAnswer in signalingState ' + pc.signalingState));
      }

      var sdp = SDPUtils.writeSessionBoilerplate(pc._sdpSessionId,
          pc._sdpSessionVersion++);
      if (pc.usingBundle) {
        sdp += 'a=group:BUNDLE ' + pc.transceivers.map(function(t) {
          return t.mid;
        }).join(' ') + '\r\n';
      }
      sdp += 'a=ice-options:trickle\r\n';

      var mediaSectionsInOffer = SDPUtils.getMediaSections(
          pc._remoteDescription.sdp).length;
      pc.transceivers.forEach(function(transceiver, sdpMLineIndex) {
        if (sdpMLineIndex + 1 > mediaSectionsInOffer) {
          return;
        }
        if (transceiver.rejected) {
          if (transceiver.kind === 'application') {
            if (transceiver.protocol === 'DTLS/SCTP') { // legacy fmt
              sdp += 'm=application 0 DTLS/SCTP 5000\r\n';
            } else {
              sdp += 'm=application 0 ' + transceiver.protocol +
                  ' webrtc-datachannel\r\n';
            }
          } else if (transceiver.kind === 'audio') {
            sdp += 'm=audio 0 UDP/TLS/RTP/SAVPF 0\r\n' +
                'a=rtpmap:0 PCMU/8000\r\n';
          } else if (transceiver.kind === 'video') {
            sdp += 'm=video 0 UDP/TLS/RTP/SAVPF 120\r\n' +
                'a=rtpmap:120 VP8/90000\r\n';
          }
          sdp += 'c=IN IP4 0.0.0.0\r\n' +
              'a=inactive\r\n' +
              'a=mid:' + transceiver.mid + '\r\n';
          return;
        }

        // FIXME: look at direction.
        if (transceiver.stream) {
          var localTrack;
          if (transceiver.kind === 'audio') {
            localTrack = transceiver.stream.getAudioTracks()[0];
          } else if (transceiver.kind === 'video') {
            localTrack = transceiver.stream.getVideoTracks()[0];
          }
          if (localTrack) {
            // add RTX
            if (edgeVersion >= 15019 && transceiver.kind === 'video' &&
                !transceiver.sendEncodingParameters[0].rtx) {
              transceiver.sendEncodingParameters[0].rtx = {
                ssrc: transceiver.sendEncodingParameters[0].ssrc + 1
              };
            }
          }
        }

        // Calculate intersection of capabilities.
        var commonCapabilities = getCommonCapabilities(
            transceiver.localCapabilities,
            transceiver.remoteCapabilities);

        var hasRtx = commonCapabilities.codecs.filter(function(c) {
          return c.name.toLowerCase() === 'rtx';
        }).length;
        if (!hasRtx && transceiver.sendEncodingParameters[0].rtx) {
          delete transceiver.sendEncodingParameters[0].rtx;
        }

        sdp += writeMediaSection(transceiver, commonCapabilities,
            'answer', transceiver.stream, pc._dtlsRole);
        if (transceiver.rtcpParameters &&
            transceiver.rtcpParameters.reducedSize) {
          sdp += 'a=rtcp-rsize\r\n';
        }
      });

      var desc = new window.RTCSessionDescription({
        type: 'answer',
        sdp: sdp
      });
      return Promise.resolve(desc);
    };

    RTCPeerConnection.prototype.addIceCandidate = function(candidate) {
      var pc = this;
      var sections;
      if (candidate && !(candidate.sdpMLineIndex !== undefined ||
          candidate.sdpMid)) {
        return Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'));
      }

      // TODO: needs to go into ops queue.
      return new Promise(function(resolve, reject) {
        if (!pc._remoteDescription) {
          return reject(makeError('InvalidStateError',
              'Can not add ICE candidate without a remote description'));
        } else if (!candidate || candidate.candidate === '') {
          for (var j = 0; j < pc.transceivers.length; j++) {
            if (pc.transceivers[j].rejected) {
              continue;
            }
            pc.transceivers[j].iceTransport.addRemoteCandidate({});
            sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
            sections[j] += 'a=end-of-candidates\r\n';
            pc._remoteDescription.sdp =
                SDPUtils.getDescription(pc._remoteDescription.sdp) +
                sections.join('');
            if (pc.usingBundle) {
              break;
            }
          }
        } else {
          var sdpMLineIndex = candidate.sdpMLineIndex;
          if (candidate.sdpMid) {
            for (var i = 0; i < pc.transceivers.length; i++) {
              if (pc.transceivers[i].mid === candidate.sdpMid) {
                sdpMLineIndex = i;
                break;
              }
            }
          }
          var transceiver = pc.transceivers[sdpMLineIndex];
          if (transceiver) {
            if (transceiver.rejected) {
              return resolve();
            }
            var cand = Object.keys(candidate.candidate).length > 0 ?
                SDPUtils.parseCandidate(candidate.candidate) : {};
            // Ignore Chrome's invalid candidates since Edge does not like them.
            if (cand.protocol === 'tcp' && (cand.port === 0 || cand.port === 9)) {
              return resolve();
            }
            // Ignore RTCP candidates, we assume RTCP-MUX.
            if (cand.component && cand.component !== 1) {
              return resolve();
            }
            // when using bundle, avoid adding candidates to the wrong
            // ice transport. And avoid adding candidates added in the SDP.
            if (sdpMLineIndex === 0 || (sdpMLineIndex > 0 &&
                transceiver.iceTransport !== pc.transceivers[0].iceTransport)) {
              if (!maybeAddCandidate(transceiver.iceTransport, cand)) {
                return reject(makeError('OperationError',
                    'Can not add ICE candidate'));
              }
            }

            // update the remoteDescription.
            var candidateString = candidate.candidate.trim();
            if (candidateString.indexOf('a=') === 0) {
              candidateString = candidateString.substr(2);
            }
            sections = SDPUtils.getMediaSections(pc._remoteDescription.sdp);
            sections[sdpMLineIndex] += 'a=' +
                (cand.type ? candidateString : 'end-of-candidates')
                + '\r\n';
            pc._remoteDescription.sdp =
                SDPUtils.getDescription(pc._remoteDescription.sdp) +
                sections.join('');
          } else {
            return reject(makeError('OperationError',
                'Can not add ICE candidate'));
          }
        }
        resolve();
      });
    };

    RTCPeerConnection.prototype.getStats = function(selector) {
      if (selector && selector instanceof window.MediaStreamTrack) {
        var senderOrReceiver = null;
        this.transceivers.forEach(function(transceiver) {
          if (transceiver.rtpSender &&
              transceiver.rtpSender.track === selector) {
            senderOrReceiver = transceiver.rtpSender;
          } else if (transceiver.rtpReceiver &&
              transceiver.rtpReceiver.track === selector) {
            senderOrReceiver = transceiver.rtpReceiver;
          }
        });
        if (!senderOrReceiver) {
          throw makeError('InvalidAccessError', 'Invalid selector.');
        }
        return senderOrReceiver.getStats();
      }

      var promises = [];
      this.transceivers.forEach(function(transceiver) {
        ['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport',
            'dtlsTransport'].forEach(function(method) {
              if (transceiver[method]) {
                promises.push(transceiver[method].getStats());
              }
            });
      });
      return Promise.all(promises).then(function(allStats) {
        var results = new Map();
        allStats.forEach(function(stats) {
          stats.forEach(function(stat) {
            results.set(stat.id, stat);
          });
        });
        return results;
      });
    };

    // fix low-level stat names and return Map instead of object.
    var ortcObjects = ['RTCRtpSender', 'RTCRtpReceiver', 'RTCIceGatherer',
      'RTCIceTransport', 'RTCDtlsTransport'];
    ortcObjects.forEach(function(ortcObjectName) {
      var obj = window[ortcObjectName];
      if (obj && obj.prototype && obj.prototype.getStats) {
        var nativeGetstats = obj.prototype.getStats;
        obj.prototype.getStats = function() {
          return nativeGetstats.apply(this)
          .then(function(nativeStats) {
            var mapStats = new Map();
            Object.keys(nativeStats).forEach(function(id) {
              nativeStats[id].type = fixStatsType(nativeStats[id]);
              mapStats.set(id, nativeStats[id]);
            });
            return mapStats;
          });
        };
      }
    });

    // legacy callback shims. Should be moved to adapter.js some days.
    var methods = ['createOffer', 'createAnswer'];
    methods.forEach(function(method) {
      var nativeMethod = RTCPeerConnection.prototype[method];
      RTCPeerConnection.prototype[method] = function() {
        var args = arguments;
        if (typeof args[0] === 'function' ||
            typeof args[1] === 'function') { // legacy
          return nativeMethod.apply(this, [arguments[2]])
          .then(function(description) {
            if (typeof args[0] === 'function') {
              args[0].apply(null, [description]);
            }
          }, function(error) {
            if (typeof args[1] === 'function') {
              args[1].apply(null, [error]);
            }
          });
        }
        return nativeMethod.apply(this, arguments);
      };
    });

    methods = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'];
    methods.forEach(function(method) {
      var nativeMethod = RTCPeerConnection.prototype[method];
      RTCPeerConnection.prototype[method] = function() {
        var args = arguments;
        if (typeof args[1] === 'function' ||
            typeof args[2] === 'function') { // legacy
          return nativeMethod.apply(this, arguments)
          .then(function() {
            if (typeof args[1] === 'function') {
              args[1].apply(null);
            }
          }, function(error) {
            if (typeof args[2] === 'function') {
              args[2].apply(null, [error]);
            }
          });
        }
        return nativeMethod.apply(this, arguments);
      };
    });

    // getStats is special. It doesn't have a spec legacy method yet we support
    // getStats(something, cb) without error callbacks.
    ['getStats'].forEach(function(method) {
      var nativeMethod = RTCPeerConnection.prototype[method];
      RTCPeerConnection.prototype[method] = function() {
        var args = arguments;
        if (typeof args[1] === 'function') {
          return nativeMethod.apply(this, arguments)
          .then(function() {
            if (typeof args[1] === 'function') {
              args[1].apply(null);
            }
          });
        }
        return nativeMethod.apply(this, arguments);
      };
    });

    return RTCPeerConnection;
  };

  },{"sdp":17}],17:[function(require,module,exports){
   /* eslint-env node */
  'use strict';

  // SDP helpers.
  var SDPUtils = {};

  // Generate an alphanumeric identifier for cname or mids.
  // TODO: use UUIDs instead? https://gist.github.com/jed/982883
  SDPUtils.generateIdentifier = function() {
    return Math.random().toString(36).substr(2, 10);
  };

  // The RTCP CNAME used by all peerconnections from the same JS.
  SDPUtils.localCName = SDPUtils.generateIdentifier();

  // Splits SDP into lines, dealing with both CRLF and LF.
  SDPUtils.splitLines = function(blob) {
    return blob.trim().split('\n').map(function(line) {
      return line.trim();
    });
  };
  // Splits SDP into sessionpart and mediasections. Ensures CRLF.
  SDPUtils.splitSections = function(blob) {
    var parts = blob.split('\nm=');
    return parts.map(function(part, index) {
      return (index > 0 ? 'm=' + part : part).trim() + '\r\n';
    });
  };

  // returns the session description.
  SDPUtils.getDescription = function(blob) {
    var sections = SDPUtils.splitSections(blob);
    return sections && sections[0];
  };

  // returns the individual media sections.
  SDPUtils.getMediaSections = function(blob) {
    var sections = SDPUtils.splitSections(blob);
    sections.shift();
    return sections;
  };

  // Returns lines that start with a certain prefix.
  SDPUtils.matchPrefix = function(blob, prefix) {
    return SDPUtils.splitLines(blob).filter(function(line) {
      return line.indexOf(prefix) === 0;
    });
  };

  // Parses an ICE candidate line. Sample input:
  // candidate:702786350 2 udp 41819902 8.8.8.8 60769 typ relay raddr 8.8.8.8
  // rport 55996"
  SDPUtils.parseCandidate = function(line) {
    var parts;
    // Parse both variants.
    if (line.indexOf('a=candidate:') === 0) {
      parts = line.substring(12).split(' ');
    } else {
      parts = line.substring(10).split(' ');
    }

    var candidate = {
      foundation: parts[0],
      component: parseInt(parts[1], 10),
      protocol: parts[2].toLowerCase(),
      priority: parseInt(parts[3], 10),
      ip: parts[4],
      address: parts[4], // address is an alias for ip.
      port: parseInt(parts[5], 10),
      // skip parts[6] == 'typ'
      type: parts[7]
    };

    for (var i = 8; i < parts.length; i += 2) {
      switch (parts[i]) {
        case 'raddr':
          candidate.relatedAddress = parts[i + 1];
          break;
        case 'rport':
          candidate.relatedPort = parseInt(parts[i + 1], 10);
          break;
        case 'tcptype':
          candidate.tcpType = parts[i + 1];
          break;
        case 'ufrag':
          candidate.ufrag = parts[i + 1]; // for backward compability.
          candidate.usernameFragment = parts[i + 1];
          break;
        default: // extension handling, in particular ufrag
          candidate[parts[i]] = parts[i + 1];
          break;
      }
    }
    return candidate;
  };

  // Translates a candidate object into SDP candidate attribute.
  SDPUtils.writeCandidate = function(candidate) {
    var sdp = [];
    sdp.push(candidate.foundation);
    sdp.push(candidate.component);
    sdp.push(candidate.protocol.toUpperCase());
    sdp.push(candidate.priority);
    sdp.push(candidate.address || candidate.ip);
    sdp.push(candidate.port);

    var type = candidate.type;
    sdp.push('typ');
    sdp.push(type);
    if (type !== 'host' && candidate.relatedAddress &&
        candidate.relatedPort) {
      sdp.push('raddr');
      sdp.push(candidate.relatedAddress);
      sdp.push('rport');
      sdp.push(candidate.relatedPort);
    }
    if (candidate.tcpType && candidate.protocol.toLowerCase() === 'tcp') {
      sdp.push('tcptype');
      sdp.push(candidate.tcpType);
    }
    if (candidate.usernameFragment || candidate.ufrag) {
      sdp.push('ufrag');
      sdp.push(candidate.usernameFragment || candidate.ufrag);
    }
    return 'candidate:' + sdp.join(' ');
  };

  // Parses an ice-options line, returns an array of option tags.
  // a=ice-options:foo bar
  SDPUtils.parseIceOptions = function(line) {
    return line.substr(14).split(' ');
  };

  // Parses an rtpmap line, returns RTCRtpCoddecParameters. Sample input:
  // a=rtpmap:111 opus/48000/2
  SDPUtils.parseRtpMap = function(line) {
    var parts = line.substr(9).split(' ');
    var parsed = {
      payloadType: parseInt(parts.shift(), 10) // was: id
    };

    parts = parts[0].split('/');

    parsed.name = parts[0];
    parsed.clockRate = parseInt(parts[1], 10); // was: clockrate
    parsed.channels = parts.length === 3 ? parseInt(parts[2], 10) : 1;
    // legacy alias, got renamed back to channels in ORTC.
    parsed.numChannels = parsed.channels;
    return parsed;
  };

  // Generate an a=rtpmap line from RTCRtpCodecCapability or
  // RTCRtpCodecParameters.
  SDPUtils.writeRtpMap = function(codec) {
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) {
      pt = codec.preferredPayloadType;
    }
    var channels = codec.channels || codec.numChannels || 1;
    return 'a=rtpmap:' + pt + ' ' + codec.name + '/' + codec.clockRate +
        (channels !== 1 ? '/' + channels : '') + '\r\n';
  };

  // Parses an a=extmap line (headerextension from RFC 5285). Sample input:
  // a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
  // a=extmap:2/sendonly urn:ietf:params:rtp-hdrext:toffset
  SDPUtils.parseExtmap = function(line) {
    var parts = line.substr(9).split(' ');
    return {
      id: parseInt(parts[0], 10),
      direction: parts[0].indexOf('/') > 0 ? parts[0].split('/')[1] : 'sendrecv',
      uri: parts[1]
    };
  };

  // Generates a=extmap line from RTCRtpHeaderExtensionParameters or
  // RTCRtpHeaderExtension.
  SDPUtils.writeExtmap = function(headerExtension) {
    return 'a=extmap:' + (headerExtension.id || headerExtension.preferredId) +
        (headerExtension.direction && headerExtension.direction !== 'sendrecv'
            ? '/' + headerExtension.direction
            : '') +
        ' ' + headerExtension.uri + '\r\n';
  };

  // Parses an ftmp line, returns dictionary. Sample input:
  // a=fmtp:96 vbr=on;cng=on
  // Also deals with vbr=on; cng=on
  SDPUtils.parseFmtp = function(line) {
    var parsed = {};
    var kv;
    var parts = line.substr(line.indexOf(' ') + 1).split(';');
    for (var j = 0; j < parts.length; j++) {
      kv = parts[j].trim().split('=');
      parsed[kv[0].trim()] = kv[1];
    }
    return parsed;
  };

  // Generates an a=ftmp line from RTCRtpCodecCapability or RTCRtpCodecParameters.
  SDPUtils.writeFmtp = function(codec) {
    var line = '';
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) {
      pt = codec.preferredPayloadType;
    }
    if (codec.parameters && Object.keys(codec.parameters).length) {
      var params = [];
      Object.keys(codec.parameters).forEach(function(param) {
        if (codec.parameters[param]) {
          params.push(param + '=' + codec.parameters[param]);
        } else {
          params.push(param);
        }
      });
      line += 'a=fmtp:' + pt + ' ' + params.join(';') + '\r\n';
    }
    return line;
  };

  // Parses an rtcp-fb line, returns RTCPRtcpFeedback object. Sample input:
  // a=rtcp-fb:98 nack rpsi
  SDPUtils.parseRtcpFb = function(line) {
    var parts = line.substr(line.indexOf(' ') + 1).split(' ');
    return {
      type: parts.shift(),
      parameter: parts.join(' ')
    };
  };
  // Generate a=rtcp-fb lines from RTCRtpCodecCapability or RTCRtpCodecParameters.
  SDPUtils.writeRtcpFb = function(codec) {
    var lines = '';
    var pt = codec.payloadType;
    if (codec.preferredPayloadType !== undefined) {
      pt = codec.preferredPayloadType;
    }
    if (codec.rtcpFeedback && codec.rtcpFeedback.length) {
      // FIXME: special handling for trr-int?
      codec.rtcpFeedback.forEach(function(fb) {
        lines += 'a=rtcp-fb:' + pt + ' ' + fb.type +
        (fb.parameter && fb.parameter.length ? ' ' + fb.parameter : '') +
            '\r\n';
      });
    }
    return lines;
  };

  // Parses an RFC 5576 ssrc media attribute. Sample input:
  // a=ssrc:3735928559 cname:something
  SDPUtils.parseSsrcMedia = function(line) {
    var sp = line.indexOf(' ');
    var parts = {
      ssrc: parseInt(line.substr(7, sp - 7), 10)
    };
    var colon = line.indexOf(':', sp);
    if (colon > -1) {
      parts.attribute = line.substr(sp + 1, colon - sp - 1);
      parts.value = line.substr(colon + 1);
    } else {
      parts.attribute = line.substr(sp + 1);
    }
    return parts;
  };

  SDPUtils.parseSsrcGroup = function(line) {
    var parts = line.substr(13).split(' ');
    return {
      semantics: parts.shift(),
      ssrcs: parts.map(function(ssrc) {
        return parseInt(ssrc, 10);
      })
    };
  };

  // Extracts the MID (RFC 5888) from a media section.
  // returns the MID or undefined if no mid line was found.
  SDPUtils.getMid = function(mediaSection) {
    var mid = SDPUtils.matchPrefix(mediaSection, 'a=mid:')[0];
    if (mid) {
      return mid.substr(6);
    }
  };

  SDPUtils.parseFingerprint = function(line) {
    var parts = line.substr(14).split(' ');
    return {
      algorithm: parts[0].toLowerCase(), // algorithm is case-sensitive in Edge.
      value: parts[1]
    };
  };

  // Extracts DTLS parameters from SDP media section or sessionpart.
  // FIXME: for consistency with other functions this should only
  //   get the fingerprint line as input. See also getIceParameters.
  SDPUtils.getDtlsParameters = function(mediaSection, sessionpart) {
    var lines = SDPUtils.matchPrefix(mediaSection + sessionpart,
        'a=fingerprint:');
    // Note: a=setup line is ignored since we use the 'auto' role.
    // Note2: 'algorithm' is not case sensitive except in Edge.
    return {
      role: 'auto',
      fingerprints: lines.map(SDPUtils.parseFingerprint)
    };
  };

  // Serializes DTLS parameters to SDP.
  SDPUtils.writeDtlsParameters = function(params, setupType) {
    var sdp = 'a=setup:' + setupType + '\r\n';
    params.fingerprints.forEach(function(fp) {
      sdp += 'a=fingerprint:' + fp.algorithm + ' ' + fp.value + '\r\n';
    });
    return sdp;
  };
  // Parses ICE information from SDP media section or sessionpart.
  // FIXME: for consistency with other functions this should only
  //   get the ice-ufrag and ice-pwd lines as input.
  SDPUtils.getIceParameters = function(mediaSection, sessionpart) {
    var lines = SDPUtils.splitLines(mediaSection);
    // Search in session part, too.
    lines = lines.concat(SDPUtils.splitLines(sessionpart));
    var iceParameters = {
      usernameFragment: lines.filter(function(line) {
        return line.indexOf('a=ice-ufrag:') === 0;
      })[0].substr(12),
      password: lines.filter(function(line) {
        return line.indexOf('a=ice-pwd:') === 0;
      })[0].substr(10)
    };
    return iceParameters;
  };

  // Serializes ICE parameters to SDP.
  SDPUtils.writeIceParameters = function(params) {
    return 'a=ice-ufrag:' + params.usernameFragment + '\r\n' +
        'a=ice-pwd:' + params.password + '\r\n';
  };

  // Parses the SDP media section and returns RTCRtpParameters.
  SDPUtils.parseRtpParameters = function(mediaSection) {
    var description = {
      codecs: [],
      headerExtensions: [],
      fecMechanisms: [],
      rtcp: []
    };
    var lines = SDPUtils.splitLines(mediaSection);
    var mline = lines[0].split(' ');
    for (var i = 3; i < mline.length; i++) { // find all codecs from mline[3..]
      var pt = mline[i];
      var rtpmapline = SDPUtils.matchPrefix(
          mediaSection, 'a=rtpmap:' + pt + ' ')[0];
      if (rtpmapline) {
        var codec = SDPUtils.parseRtpMap(rtpmapline);
        var fmtps = SDPUtils.matchPrefix(
            mediaSection, 'a=fmtp:' + pt + ' ');
        // Only the first a=fmtp:<pt> is considered.
        codec.parameters = fmtps.length ? SDPUtils.parseFmtp(fmtps[0]) : {};
        codec.rtcpFeedback = SDPUtils.matchPrefix(
            mediaSection, 'a=rtcp-fb:' + pt + ' ')
          .map(SDPUtils.parseRtcpFb);
        description.codecs.push(codec);
        // parse FEC mechanisms from rtpmap lines.
        switch (codec.name.toUpperCase()) {
          case 'RED':
          case 'ULPFEC':
            description.fecMechanisms.push(codec.name.toUpperCase());
            break;
          default: // only RED and ULPFEC are recognized as FEC mechanisms.
            break;
        }
      }
    }
    SDPUtils.matchPrefix(mediaSection, 'a=extmap:').forEach(function(line) {
      description.headerExtensions.push(SDPUtils.parseExtmap(line));
    });
    // FIXME: parse rtcp.
    return description;
  };

  // Generates parts of the SDP media section describing the capabilities /
  // parameters.
  SDPUtils.writeRtpDescription = function(kind, caps) {
    var sdp = '';

    // Build the mline.
    sdp += 'm=' + kind + ' ';
    sdp += caps.codecs.length > 0 ? '9' : '0'; // reject if no codecs.
    sdp += ' UDP/TLS/RTP/SAVPF ';
    sdp += caps.codecs.map(function(codec) {
      if (codec.preferredPayloadType !== undefined) {
        return codec.preferredPayloadType;
      }
      return codec.payloadType;
    }).join(' ') + '\r\n';

    sdp += 'c=IN IP4 0.0.0.0\r\n';
    sdp += 'a=rtcp:9 IN IP4 0.0.0.0\r\n';

    // Add a=rtpmap lines for each codec. Also fmtp and rtcp-fb.
    caps.codecs.forEach(function(codec) {
      sdp += SDPUtils.writeRtpMap(codec);
      sdp += SDPUtils.writeFmtp(codec);
      sdp += SDPUtils.writeRtcpFb(codec);
    });
    var maxptime = 0;
    caps.codecs.forEach(function(codec) {
      if (codec.maxptime > maxptime) {
        maxptime = codec.maxptime;
      }
    });
    if (maxptime > 0) {
      sdp += 'a=maxptime:' + maxptime + '\r\n';
    }
    sdp += 'a=rtcp-mux\r\n';

    if (caps.headerExtensions) {
      caps.headerExtensions.forEach(function(extension) {
        sdp += SDPUtils.writeExtmap(extension);
      });
    }
    // FIXME: write fecMechanisms.
    return sdp;
  };

  // Parses the SDP media section and returns an array of
  // RTCRtpEncodingParameters.
  SDPUtils.parseRtpEncodingParameters = function(mediaSection) {
    var encodingParameters = [];
    var description = SDPUtils.parseRtpParameters(mediaSection);
    var hasRed = description.fecMechanisms.indexOf('RED') !== -1;
    var hasUlpfec = description.fecMechanisms.indexOf('ULPFEC') !== -1;

    // filter a=ssrc:... cname:, ignore PlanB-msid
    var ssrcs = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(parts) {
      return parts.attribute === 'cname';
    });
    var primarySsrc = ssrcs.length > 0 && ssrcs[0].ssrc;
    var secondarySsrc;

    var flows = SDPUtils.matchPrefix(mediaSection, 'a=ssrc-group:FID')
    .map(function(line) {
      var parts = line.substr(17).split(' ');
      return parts.map(function(part) {
        return parseInt(part, 10);
      });
    });
    if (flows.length > 0 && flows[0].length > 1 && flows[0][0] === primarySsrc) {
      secondarySsrc = flows[0][1];
    }

    description.codecs.forEach(function(codec) {
      if (codec.name.toUpperCase() === 'RTX' && codec.parameters.apt) {
        var encParam = {
          ssrc: primarySsrc,
          codecPayloadType: parseInt(codec.parameters.apt, 10)
        };
        if (primarySsrc && secondarySsrc) {
          encParam.rtx = {ssrc: secondarySsrc};
        }
        encodingParameters.push(encParam);
        if (hasRed) {
          encParam = JSON.parse(JSON.stringify(encParam));
          encParam.fec = {
            ssrc: primarySsrc,
            mechanism: hasUlpfec ? 'red+ulpfec' : 'red'
          };
          encodingParameters.push(encParam);
        }
      }
    });
    if (encodingParameters.length === 0 && primarySsrc) {
      encodingParameters.push({
        ssrc: primarySsrc
      });
    }

    // we support both b=AS and b=TIAS but interpret AS as TIAS.
    var bandwidth = SDPUtils.matchPrefix(mediaSection, 'b=');
    if (bandwidth.length) {
      if (bandwidth[0].indexOf('b=TIAS:') === 0) {
        bandwidth = parseInt(bandwidth[0].substr(7), 10);
      } else if (bandwidth[0].indexOf('b=AS:') === 0) {
        // use formula from JSEP to convert b=AS to TIAS value.
        bandwidth = parseInt(bandwidth[0].substr(5), 10) * 1000 * 0.95
            - (50 * 40 * 8);
      } else {
        bandwidth = undefined;
      }
      encodingParameters.forEach(function(params) {
        params.maxBitrate = bandwidth;
      });
    }
    return encodingParameters;
  };

  // parses http://draft.ortc.org/#rtcrtcpparameters*
  SDPUtils.parseRtcpParameters = function(mediaSection) {
    var rtcpParameters = {};

    // Gets the first SSRC. Note tha with RTX there might be multiple
    // SSRCs.
    var remoteSsrc = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
        .map(function(line) {
          return SDPUtils.parseSsrcMedia(line);
        })
        .filter(function(obj) {
          return obj.attribute === 'cname';
        })[0];
    if (remoteSsrc) {
      rtcpParameters.cname = remoteSsrc.value;
      rtcpParameters.ssrc = remoteSsrc.ssrc;
    }

    // Edge uses the compound attribute instead of reducedSize
    // compound is !reducedSize
    var rsize = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-rsize');
    rtcpParameters.reducedSize = rsize.length > 0;
    rtcpParameters.compound = rsize.length === 0;

    // parses the rtcp-mux attrіbute.
    // Note that Edge does not support unmuxed RTCP.
    var mux = SDPUtils.matchPrefix(mediaSection, 'a=rtcp-mux');
    rtcpParameters.mux = mux.length > 0;

    return rtcpParameters;
  };

  // parses either a=msid: or a=ssrc:... msid lines and returns
  // the id of the MediaStream and MediaStreamTrack.
  SDPUtils.parseMsid = function(mediaSection) {
    var parts;
    var spec = SDPUtils.matchPrefix(mediaSection, 'a=msid:');
    if (spec.length === 1) {
      parts = spec[0].substr(7).split(' ');
      return {stream: parts[0], track: parts[1]};
    }
    var planB = SDPUtils.matchPrefix(mediaSection, 'a=ssrc:')
    .map(function(line) {
      return SDPUtils.parseSsrcMedia(line);
    })
    .filter(function(msidParts) {
      return msidParts.attribute === 'msid';
    });
    if (planB.length > 0) {
      parts = planB[0].value.split(' ');
      return {stream: parts[0], track: parts[1]};
    }
  };

  // Generate a session ID for SDP.
  // https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-20#section-5.2.1
  // recommends using a cryptographically random +ve 64-bit value
  // but right now this should be acceptable and within the right range
  SDPUtils.generateSessionId = function() {
    return Math.random().toString().substr(2, 21);
  };

  // Write boilder plate for start of SDP
  // sessId argument is optional - if not supplied it will
  // be generated randomly
  // sessVersion is optional and defaults to 2
  // sessUser is optional and defaults to 'thisisadapterortc'
  SDPUtils.writeSessionBoilerplate = function(sessId, sessVer, sessUser) {
    var sessionId;
    var version = sessVer !== undefined ? sessVer : 2;
    if (sessId) {
      sessionId = sessId;
    } else {
      sessionId = SDPUtils.generateSessionId();
    }
    var user = sessUser || 'thisisadapterortc';
    // FIXME: sess-id should be an NTP timestamp.
    return 'v=0\r\n' +
        'o=' + user + ' ' + sessionId + ' ' + version +
          ' IN IP4 127.0.0.1\r\n' +
        's=-\r\n' +
        't=0 0\r\n';
  };

  SDPUtils.writeMediaSection = function(transceiver, caps, type, stream) {
    var sdp = SDPUtils.writeRtpDescription(transceiver.kind, caps);

    // Map ICE parameters (ufrag, pwd) to SDP.
    sdp += SDPUtils.writeIceParameters(
        transceiver.iceGatherer.getLocalParameters());

    // Map DTLS parameters to SDP.
    sdp += SDPUtils.writeDtlsParameters(
        transceiver.dtlsTransport.getLocalParameters(),
        type === 'offer' ? 'actpass' : 'active');

    sdp += 'a=mid:' + transceiver.mid + '\r\n';

    if (transceiver.direction) {
      sdp += 'a=' + transceiver.direction + '\r\n';
    } else if (transceiver.rtpSender && transceiver.rtpReceiver) {
      sdp += 'a=sendrecv\r\n';
    } else if (transceiver.rtpSender) {
      sdp += 'a=sendonly\r\n';
    } else if (transceiver.rtpReceiver) {
      sdp += 'a=recvonly\r\n';
    } else {
      sdp += 'a=inactive\r\n';
    }

    if (transceiver.rtpSender) {
      // spec.
      var msid = 'msid:' + stream.id + ' ' +
          transceiver.rtpSender.track.id + '\r\n';
      sdp += 'a=' + msid;

      // for Chrome.
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
          ' ' + msid;
      if (transceiver.sendEncodingParameters[0].rtx) {
        sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
            ' ' + msid;
        sdp += 'a=ssrc-group:FID ' +
            transceiver.sendEncodingParameters[0].ssrc + ' ' +
            transceiver.sendEncodingParameters[0].rtx.ssrc +
            '\r\n';
      }
    }
    // FIXME: this should be written by writeRtpDescription.
    sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].ssrc +
        ' cname:' + SDPUtils.localCName + '\r\n';
    if (transceiver.rtpSender && transceiver.sendEncodingParameters[0].rtx) {
      sdp += 'a=ssrc:' + transceiver.sendEncodingParameters[0].rtx.ssrc +
          ' cname:' + SDPUtils.localCName + '\r\n';
    }
    return sdp;
  };

  // Gets the direction from the mediaSection or the sessionpart.
  SDPUtils.getDirection = function(mediaSection, sessionpart) {
    // Look for sendrecv, sendonly, recvonly, inactive, default to sendrecv.
    var lines = SDPUtils.splitLines(mediaSection);
    for (var i = 0; i < lines.length; i++) {
      switch (lines[i]) {
        case 'a=sendrecv':
        case 'a=sendonly':
        case 'a=recvonly':
        case 'a=inactive':
          return lines[i].substr(2);
        default:
          // FIXME: What should happen here?
      }
    }
    if (sessionpart) {
      return SDPUtils.getDirection(sessionpart);
    }
    return 'sendrecv';
  };

  SDPUtils.getKind = function(mediaSection) {
    var lines = SDPUtils.splitLines(mediaSection);
    var mline = lines[0].split(' ');
    return mline[0].substr(2);
  };

  SDPUtils.isRejected = function(mediaSection) {
    return mediaSection.split(' ', 2)[1] === '0';
  };

  SDPUtils.parseMLine = function(mediaSection) {
    var lines = SDPUtils.splitLines(mediaSection);
    var parts = lines[0].substr(2).split(' ');
    return {
      kind: parts[0],
      port: parseInt(parts[1], 10),
      protocol: parts[2],
      fmt: parts.slice(3).join(' ')
    };
  };

  SDPUtils.parseOLine = function(mediaSection) {
    var line = SDPUtils.matchPrefix(mediaSection, 'o=')[0];
    var parts = line.substr(2).split(' ');
    return {
      username: parts[0],
      sessionId: parts[1],
      sessionVersion: parseInt(parts[2], 10),
      netType: parts[3],
      addressType: parts[4],
      address: parts[5]
    };
  };

  // a very naive interpretation of a valid SDP.
  SDPUtils.isValidSDP = function(blob) {
    if (typeof blob !== 'string' || blob.length === 0) {
      return false;
    }
    var lines = SDPUtils.splitLines(blob);
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].length < 2 || lines[i].charAt(1) !== '=') {
        return false;
      }
      // TODO: check the modifier a bit more.
    }
    return true;
  };

  // Expose public methods.
  if (typeof module === 'object') {
    module.exports = SDPUtils;
  }

  },{}]},{},[1])(1)
  });

/***/ }),

/***/ "./sdk/webrtc/zego.client.web.ts":
/*!***************************************!*\
  !*** ./sdk/webrtc/zego.client.web.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/common/zego.entity.ts");
var zego_logger_webrtc_1 = __webpack_require__(/*! ./zego.logger.webrtc */ "./sdk/webrtc/zego.logger.webrtc.ts");
var zego_streamCenter_web_1 = __webpack_require__(/*! ./zego.streamCenter.web */ "./sdk/webrtc/zego.streamCenter.web.ts");
var client_util_1 = __webpack_require__(/*! ../util/client-util */ "./sdk/util/client-util.ts");
var index_1 = __webpack_require__(/*! ../common/clientBase/index */ "./sdk/common/clientBase/index.ts");
var stateCenter_1 = __webpack_require__(/*! ../common/clientBase/stateCenter */ "./sdk/common/clientBase/stateCenter.ts");
var mediaUtil_1 = __webpack_require__(/*! ../util/mediaUtil */ "./sdk/util/mediaUtil.ts");
var index_2 = __webpack_require__(/*! ../../types/index */ "./types/index.ts");
var zego_error_1 = __webpack_require__(/*! ../common/zego.error */ "./sdk/common/zego.error.ts");
var zego_datareport_1 = __webpack_require__(/*! ../common/zego.datareport */ "./sdk/common/zego.datareport.ts");
var zego_extern_1 = __webpack_require__(/*! ../common/zego.extern */ "./sdk/common/zego.extern.ts");
var zego_logevent_1 = __webpack_require__(/*! ../common/zego.logevent */ "./sdk/common/zego.logevent.ts");
var zego_externalError_1 = __webpack_require__(/*! ../common/zego.externalError */ "./sdk/common/zego.externalError.ts");
var ZegoExpressEngine = /** @class */ (function (_super) {
    __extends(ZegoExpressEngine, _super);
    function ZegoExpressEngine(appID, server) {
        var _this = _super.call(this) || this;
        _this.mediaEleSources = [];
        var stateCenter = new stateCenter_1.StateCenter();
        var log = new zego_logger_webrtc_1.LoggerWeb(stateCenter);
        stateCenter.logger = log;
        _this.dataReport = new zego_datareport_1.ZegoDataReport(log);
        _this.ac = new (typeof webkitAudioContext !== 'undefined' ? webkitAudioContext : AudioContext)();
        var streamCenter = new zego_streamCenter_web_1.ZegoStreamCenterWeb(log, stateCenter, _this.dataReport, _this.ac, _this.mediaEleSources);
        _this.streamCenter = streamCenter;
        _this.logger = log;
        _this.stateCenter = stateCenter;
        _this.stateCenter.clientType = 'rtc';
        var seq = zego_extern_1.getReportSeq();
        _this.dataReport.newReport(seq);
        _this.init();
        client_util_1.ClientUtil.setDebug(server, _this.stateCenter);
        if (!client_util_1.ClientUtil.checkConfigParam(appID, server, log)) {
            log.error('zc.0 init sdk error');
            _this.dataReport.addMsgInfo(seq, {
                error: zego_logevent_1.errorList.kInvalidParamError.code,
                message: zego_logevent_1.errorList.kInvalidParamError.message,
            });
        }
        else {
            _this.stateCenter.appid = appID;
            if (typeof server === 'string') {
                _this.stateCenter.server = server;
                _this.stateCenter.serverBak = server;
            }
            else if (Array.isArray(server) && server.length > 0) {
                _this.stateCenter.server = server[0];
                _this.stateCenter.serverBak = server[1] || server[0];
            }
            _this.stateCenter.configOK = true;
            _this.bindWindowListener();
            log.info('zc.0 ' + navigator.appVersion);
            _this.dataReport.addMsgInfo(seq, {
                system_info: navigator.appVersion,
            });
        }
        _this.logger.setSessionInfo(_this.stateCenter.appid, '', '', '', '', zego_entity_1.PROTO_VERSION);
        _this.dataReport.uploadReport(seq, zego_logevent_1.eventList.kZegoTaskInitSetting);
        return _this;
    }
    // config(option: WebConfig): boolean {
    //     option.qualityInterval && this.setQualityMonitorCycle(option.qualityInterval);
    //     return this.setConfig(option);
    // }
    ZegoExpressEngine.prototype.getSocket = function (server) {
        return new WebSocket(server);
    };
    ZegoExpressEngine.prototype.on = function (event, callBack) {
        return this.bindListener(event, callBack);
    };
    ZegoExpressEngine.prototype.off = function (event, callBack) {
        return this.deleteListener(event, callBack);
    };
    ZegoExpressEngine.prototype.mutePublishStreamVideo = function (localStream, mute) {
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskMutePublishVideo);
        var res = this.enableStream(localStream, { video: !mute });
        this.dataReport.uploadReport(reportSeq);
        return res;
    };
    ZegoExpressEngine.prototype.mutePublishStreamAudio = function (localStream, mute) {
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskMutePublishAudio);
        var res = this.enableStream(localStream, { audio: !mute });
        this.dataReport.uploadReport(reportSeq);
        return res;
    };
    ZegoExpressEngine.prototype.enableStream = function (localStream, option) {
        this.logger.debug('zc.p.ec.0 call');
        if (typeof option.video !== 'boolean' && typeof option.audio !== 'boolean') {
            this.logger.error('zc.p.es.0 option error');
            return false;
        }
        var video = true, audio = true;
        if (typeof option.video == 'boolean') {
            video = this.streamCenter.enableCamera(localStream, option.video);
        }
        if (typeof option.audio == 'boolean') {
            audio = this.streamCenter.enableMicrophone(localStream, option.audio);
        }
        return video && audio;
    };
    ZegoExpressEngine.prototype.setAudioOutput = function (localVideo, audioOutput) {
        this.logger.debug('zc.p.slao call');
        if (typeof audioOutput !== 'string') {
            console.error('audiooutput is not string');
            return false;
        }
        return this.streamCenter.setStreamAudioOutput(localVideo, audioOutput);
    };
    ZegoExpressEngine.prototype.setCustomSignalUrl = function (signalUrl) {
        this.logger.debug('zc.p.scs.0 call: ' + signalUrl);
        if (!signalUrl || signalUrl.length == 0) {
            this.logger.error('zc.p.scs.0 param error');
            return false;
        }
        var isUrl = true;
        signalUrl.forEach(function (url) { return url.indexOf('wss://') != 0 && (isUrl = false); });
        if (!isUrl) {
            this.logger.error('zc.p.scs.0 url is not correct');
            return;
        }
        this.stateCenter.customUrl = signalUrl;
    };
    ZegoExpressEngine.prototype.setQualityMonitorCycle = function (timeInMs) {
        if (typeof timeInMs === 'number' && timeInMs >= 1000) {
            this.streamCenter.setQualityMonitorCycle(timeInMs);
            return true;
        }
        else {
            this.logger.error('zc.sqmc.0 time must be number and bigger than 1000');
            return false;
        }
    };
    /*
     *    "zc.p.sps.0": "ZegoExpressEngine.startPlayingStream",  // 播放流
     */
    ZegoExpressEngine.prototype.startPlayingStream = function (streamID, playOption) {
        var _this = this;
        this.logger.info('zc.p.sps.0 call ', streamID);
        var totalStreamId = this.streamCenter.getTotalStreamId(streamID);
        return new Promise(function (resolve, reject) {
            //publish Event start
            var reportSeq = zego_extern_1.getReportSeq();
            _this.stateCenter.reportSeqList.startPlay[totalStreamId] = reportSeq;
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskPlayStart);
            if (streamID === undefined || streamID === '') {
                _this.logger.error('zc.p.sps.0 streamID required');
                _this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, 'stream id required');
                reject(zego_externalError_1.errorCodeList.STREAM_ID_NULL);
                return false;
            }
            if (typeof streamID !== 'string') {
                _this.logger.error('zc.p.sps.0 streamID must be string and not empty');
                _this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, 'stream id type error');
                reject(zego_externalError_1.errorCodeList.PLAYER_PARAM);
                return false;
            }
            if (streamID.length > zego_entity_1.MAX_STREAM_ID_LENGTH) {
                var msg = 'stream id length limit';
                _this.logger.error('zc.sps.0 ' + msg);
                _this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, msg);
                delete _this.stateCenter.reportSeqList.startPlay[totalStreamId];
                reject(zego_externalError_1.errorCodeList.STREAMID_TOO_LONG);
                return false;
            }
            if (!client_util_1.ClientUtil.checkIllegalCharacters(streamID)) {
                var msg = 'stream ID contains illegal characters';
                _this.logger.error('zc.sps.0 ' + msg);
                _this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, msg);
                delete _this.stateCenter.reportSeqList.startPlay[totalStreamId];
                reject(zego_externalError_1.errorCodeList.STREAM_ID_INVALID_CHARACTER);
                return false;
            }
            if (typeof playOption !== 'undefined' && typeof playOption !== 'object') {
                _this.logger.error('zc.p.sps.0 playOption must be object');
                _this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, 'playOption must be object');
                reject(zego_externalError_1.errorCodeList.PLAYER_PARAM);
                return false;
            }
            if (_this.stateCenter.customUrl && _this.stateCenter.customUrl.length > 0) {
                if (!_this.streamCenter.setPlayStateStart(streamID, playOption)) {
                    _this.logger.error('zc.p.sps.0 cannot start play');
                    reject(zego_error_1.playErrorList.REPEATED_PULL);
                    return false;
                }
                _this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.retry, streamID, { code: 0, msg: '' });
                return _this.streamCenter.startPlayingStream(streamID, _this.stateCenter.customUrl, resolve);
            }
            _this.dataReport.addMsgInfo(reportSeq, {
                streamID: streamID,
                playOption: playOption,
            });
            if (!_this.stateCenter.isLogin()) {
                _this.logger.error('zc.p.sps.0 not login');
                _this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kNotLoginError);
                // reject(errorList.kNotLoginError);
                reject(zego_externalError_1.errorCodeList.NOT_LOGIN);
                return false;
            }
            var found = false;
            for (var i = 0; i < _this.stateCenter.streamList.length; i++) {
                if (_this.stateCenter.streamList[i].stream_id === streamID) {
                    // 根据传入的流id判断当前的流列表中是否存在该流
                    found = true;
                    break;
                }
            }
            if (found == false) {
                _this.logger.info('zc.p.sps.0 cannot find stream');
                // return false;
            }
            //打开不能同时多次拉同一条流限制
            if (!_this.stateCenter.pullLimited) {
                streamID = +'_' + streamID;
            }
            // playOption videoCodec 大小写兼容
            if (playOption && playOption.videoCodec) {
                playOption.videoCodec = playOption.videoCodec.toUpperCase();
            }
            if (!_this.streamCenter.setPlayStateStart(streamID, playOption)) {
                _this.logger.info('zc.p.sps.0 cannot start play');
                reject(zego_error_1.playErrorList.REPEATED_PULL);
                return false;
            }
            _this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.retry, streamID, { code: 0, msg: '' });
            //send request
            var body = {
                stream_id: streamID,
                ptype: 'pull',
                signals: _this.streamCenter.getAllInUseUrl(),
            };
            _this.streamCenter.playSuccessCallBackList[streamID] = resolve;
            _this.socketCenter.registerRouter('webrtc_url', function (msg) {
                _this.handleFetchWebRtcUrlRsp(msg);
            });
            var seq = _this.socketCenter.sendMessage('webrtc_url', body, undefined, function (err) {
                _this.logger.info('zc.p.sps.0 dispatch error');
                if (err == zego_externalError_1.errorCodeList.TIMEOUT) {
                    _this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.error, streamID, zego_error_1.playErrorList.DISPATCH_TIMEOUT);
                }
                else {
                    _this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.error, streamID, zego_error_1.playErrorList.DISPATCH_ERROR);
                }
                _this.streamCenter.stopPlayingStream(streamID);
            });
            var totalStreamID = _this.streamCenter.getTotalStreamId(streamID);
            if (_this.streamCenter.playerList[totalStreamID])
                _this.streamCenter.playerList[totalStreamID].seq = seq;
            return true;
        });
    };
    /*
     *    "zc.p.sps.0.1": "ZegoExpressEngine.stopPlayingStream",停止拉流
     */
    ZegoExpressEngine.prototype.stopPlayingStream = function (streamID) {
        this.logger.info('zc.p.sps.1.0 call', streamID);
        var totalStreamId = this.streamCenter.getTotalStreamId(streamID);
        //stop play event start
        var reportSeq = zego_extern_1.getReportSeq();
        this.stateCenter.reportSeqList.stopPlay[totalStreamId] = reportSeq;
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskPlayStop);
        this.dataReport.addMsgInfo(reportSeq, {
            streamID: streamID,
        });
        if (typeof streamID !== 'string' || streamID === '') {
            this.logger.error('zc.p.sps.1.0 streamid must be string and not empty');
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, 'stream id type error');
            delete this.stateCenter.reportSeqList.stopPlay[totalStreamId];
            return;
        }
        var play = this.streamCenter.playerList[totalStreamId];
        // if (!play || play.serverUrls.length == 0) {
        //     play && this.logger.error('zc.p.sps.1.0 stream can not be destroyed');
        //     this.dataReport.uploadReport(reportSeq, undefined, errorList.kIsPlaying, 'can not be destroyed');
        //     delete this.stateCenter.reportSeqList.stopPlay[totalStreamId];
        //     return;
        // }
        var shouldPlayUpdate = play && play.player && play.player.state !== zego_entity_1.ENUM_PLAY_STATE.stop;
        this.streamCenter.stopPlayingStream(streamID);
        for (var seq in this.stateCenter.streamUrlMap) {
            if (this.stateCenter.streamUrlMap[seq] === streamID) {
                delete this.stateCenter.streamUrlMap[seq];
                break;
            }
        }
        this.dataReport.uploadReport(reportSeq);
        shouldPlayUpdate &&
            this.streamCenter.onPlayStateUpdate(zego_entity_1.ENUM_PLAY_STATE_UPDATE.error, streamID, { code: 0, msg: '' });
        this.logger.debug('zc.p.sps.1.0 call success');
        return;
    };
    /*
     *    "ze.cs.0": "ZegoExpressEngine.startPreview", 开始预览
     */
    ZegoExpressEngine.prototype.createStream = function (option) {
        var _this = this;
        this.logger.debug('ze.cs.0 call');
        // @ts-ignore
        if (option && option.camera && option.camera.audioBitRate) {
            // @ts-ignore
            option.camera.audioBitrate = option.camera.audioBitRate;
        }
        if (option && option.camera && option.camera.bitrate) {
            option.camera.bitRate = option.camera.bitrate;
        }
        if (option && option.screen && typeof option.screen == 'object' && option.screen.bitrate) {
            option.screen.bitRate = option.screen.bitrate;
        }
        if (option && option.custom && option.custom.bitrate) {
            option.custom.bitRate = option.custom.bitrate;
        }
        return new Promise(function (resolve, reject) {
            //const code = sdkErrorList.CLIENT + sdkErrorList.PARAM.code;
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskCreateStream);
            var interResolve = function (stream) {
                _this.dataReport.uploadReport(reportSeq);
                resolve(stream);
            };
            var interReject = function (err, exterMsg) {
                if (exterMsg === void 0) { exterMsg = ''; }
                var errName = zego_logevent_1.codeErrMap[err.code];
                if (errName) {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        //@ts-ignore
                        error: zego_logevent_1.errorList[errName].code,
                        //@ts-ignore
                        message: zego_logevent_1.errorList[errName].message + exterMsg,
                    });
                }
                else {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        error: err.code,
                        message: err.msg,
                    });
                }
                _this.dataReport.uploadReport(reportSeq);
                if (err.code > 2000000000) {
                    // @ts-ignore
                    zego_externalError_1.exterErrorCodeMap[err.code] && (err.code = zego_externalError_1.errorCodeList[zego_externalError_1.exterErrorCodeMap[err.code]].code);
                }
                if (err.code) {
                    reject({
                        code: err.code,
                        msg: err.msg + exterMsg,
                    });
                }
                else {
                    reject(err);
                }
            };
            if (window.location.protocol !== 'https:' &&
                window.location.protocol !== 'file:' &&
                window.location.hostname.indexOf('127.0.0.1') == -1 &&
                window.location.hostname.indexOf('localhost') == -1) {
                _this.logger.error('ze.cs.0 https or localhost required ');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kHttpsRequired.code,
                    message: zego_logevent_1.errorList.kHttpsRequired.message,
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    code: zego_externalError_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT.code,
                    msg: zego_externalError_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT.msg + ' https or localhost required',
                });
                return;
            }
            if (option && option.screen) {
                if (typeof option.screen === 'object' && option.screen.videoQuality !== undefined) {
                    if (!client_util_1.ClientUtil.checkInteger(option.screen.videoQuality)) {
                        _this.logger.error('ze.cs.0 videoQuality must be integer number');
                        interReject(zego_error_1.publishErrorList.PARAM, ' videoQuality must be integer number');
                        return;
                    }
                }
                if (typeof option.screen === 'object' && option.screen.bitRate) {
                    if (!client_util_1.ClientUtil.checkInteger(option.screen.bitRate)) {
                        _this.logger.error('ze.cs.0 bitrate must be integer number');
                        interReject(zego_error_1.publishErrorList.PARAM, ' bitrate must be integer number');
                        return;
                    }
                    else if (option.screen.bitRate > 10240) {
                        _this.logger.error('ze.cs.0 bitrate cannot greater than 10 Mbps');
                        reject(zego_error_1.publishErrorList.PARAM + ' bitrate cannot greater than 10 Mbps');
                        return;
                    }
                }
                if (typeof option.screen === 'object' && option.screen.frameRate) {
                    if (!client_util_1.ClientUtil.checkInteger(option.screen.frameRate)) {
                        _this.logger.error('ze.cs.0 frameRate must be integer number');
                        interReject(zego_error_1.publishErrorList.PARAM, ' frameRate must be integer number');
                        return;
                    }
                }
                var bro = client_util_1.ClientUtil.getBrowser();
                var screenConfig_1 = _this.streamCenter.getScreenConstrains(option.screen);
                _this.dataReport.addMsgInfo(reportSeq, {
                    stream_type: 'screen',
                    screen: screenConfig_1,
                });
                var handleScreenSuccess_1 = function (stream) {
                    _this.streamCenter.createScreenPreviewer(stream, screenConfig_1) &&
                        interResolve(stream);
                    stream.getVideoTracks()[0].onended = function () {
                        var reportSeq = zego_extern_1.getReportSeq();
                        _this.dataReport.newReport(reportSeq);
                        _this.dataReport.uploadReport(reportSeq, zego_logevent_1.eventList.kZegoTaskScreenSharingEnded);
                        stream && _this.streamCenter.stopPreview(stream);
                        _this.stateCenter.actionListener('screenSharingEnded', stream);
                    };
                };
                if (bro == 'Firefox') {
                    _this.startScreenShotFirFox('screen', screenConfig_1, function (suc, stream, err) {
                        if (suc) {
                            stream && handleScreenSuccess_1(stream);
                        }
                        else {
                            err && interReject(err);
                        }
                    });
                }
                else if (bro == 'Chrome' && ZegoExpressEngine.screenShotReady) {
                    _this.startScreenShotChrome(function (suc, stream, err) {
                        if (suc) {
                            _this.logger.info('ze.cs.0 using extention');
                            stream && handleScreenSuccess_1(stream);
                        }
                        else {
                            err && _this.logger.error('ze.cs.0 extention ' + err);
                            if (err !== 'SS_DIALOG_CANCEL') {
                                _this.startScreenSharing(screenConfig_1, function (suc, stream, err) {
                                    if (suc) {
                                        stream && handleScreenSuccess_1(stream);
                                    }
                                    else {
                                        _this.logger.error('ze.cs.0 ' + err);
                                        err && interReject(err);
                                    }
                                });
                            }
                            else {
                                err && interReject(zego_externalError_1.errorCodeList.PUBLISH_SCREEN_CANCELED);
                            }
                        }
                    });
                }
                else {
                    _this.startScreenSharing(screenConfig_1, function (suc, stream, err) {
                        if (suc) {
                            stream && handleScreenSuccess_1(stream);
                        }
                        else {
                            err && interReject(err);
                        }
                    });
                }
            }
            else {
                if (option && typeof option.camera === 'object' && option.camera.videoQuality !== undefined) {
                    if (!client_util_1.ClientUtil.checkInteger(option.camera.videoQuality)) {
                        _this.logger.error('ze.cs.0 videoQuality must be integer number');
                        interReject(zego_error_1.publishErrorList.PARAM, ' videoQuality must be integer number');
                        return;
                    }
                }
                if (option && option.camera && option.camera.audioBitrate) {
                    if (!client_util_1.ClientUtil.checkInteger(option.camera.audioBitrate)) {
                        _this.logger.error('ze.cs.0 audioBitrate must be integer number');
                        interReject(zego_error_1.publishErrorList.PARAM, ' audioBitrate must be integer number');
                        return;
                    }
                    else if (option.camera.audioBitrate < 6) {
                        _this.logger.error('ze.cs.0 audioBitrate cannot less 6 kbps');
                        interReject(zego_error_1.publishErrorList.PARAM, ' audioBitrate cannot less 6 kbps');
                        return;
                    }
                    else if (option.camera.audioBitrate > 510) {
                        _this.logger.error('ze.cs.0 audioBitrate cannot greater than 510 kbps');
                        interReject(zego_error_1.publishErrorList.PARAM, ' audioBitrate cannot greater than 510 kbps');
                        return;
                    }
                    _this.stateCenter.audioBitRate = option.camera.audioBitrate * 1e3;
                }
                if (option && option.camera && option.camera.bitRate) {
                    if (typeof option.camera.bitRate !== 'number') {
                        _this.logger.error('ze.cs.0 bitrate must be integer number');
                        interReject(zego_error_1.publishErrorList.PARAM, ' bitrate must be integer number');
                        return;
                    }
                    else if (option.camera.bitRate > 10240) {
                        _this.logger.error('ze.cs.0 bitrate cannot greater than 10 Mbps');
                        interReject(zego_error_1.publishErrorList.PARAM, ' bitrate cannot greater than 10 Mbps');
                        return;
                    }
                }
                if (option && option.camera && option.camera.channelCount !== undefined) {
                    if (!client_util_1.ClientUtil.checkInteger(option.camera.channelCount)) {
                        _this.logger.error('ze.cs.0 channelCount must be integer number');
                        interReject(zego_error_1.publishErrorList.PARAM, ' channelCount must be integer number');
                        return;
                    }
                }
                if (option &&
                    option.camera &&
                    option.camera.videoQuality === 4 &&
                    !_this.checkCameraParams(option.camera, interReject)) {
                    return;
                }
                if (option && option.custom && option.custom.bitRate) {
                    if (!client_util_1.ClientUtil.checkInteger(option.custom.bitRate)) {
                        _this.logger.error('ze.cs.0 bitrate must be integer number');
                        interReject(zego_error_1.publishErrorList.PARAM, ' bitrate must be integer number');
                        return;
                    }
                    else if (option.custom.bitRate > 10240) {
                        _this.logger.error('ze.cs.0 bitrate cannot greater than 10 Mbps');
                        interReject(zego_error_1.publishErrorList.PARAM, ' bitrate cannot greater than 10 Mbps');
                        return;
                    }
                }
                var constraints = {};
                if (option && option.camera) {
                    constraints = option.camera;
                    _this.dataReport.addMsgInfo(reportSeq, {
                        stream_type: 'camera',
                        camera: option.camera,
                    });
                    if (typeof constraints.video !== 'boolean')
                        constraints.video = true;
                    if (typeof constraints.audio !== 'boolean')
                        constraints.audio = true;
                }
                else if (option && option.custom) {
                    constraints = option.custom;
                    _this.dataReport.addMsgInfo(reportSeq, {
                        stream_type: 'custom',
                        custom: option.custom,
                    });
                }
                _this.streamCenter.startPreview(constraints, interResolve, interReject);
            }
        });
    };
    ZegoExpressEngine.prototype.checkCameraParams = function (cameras, errorCallback) {
        if (!cameras.width || !client_util_1.ClientUtil.checkValidNumber(cameras.width)) {
            this.logger.error('ze.cs.0 width must be integer number');
            errorCallback(zego_error_1.publishErrorList.PARAM, ' width must be integer number');
            return false;
        }
        if (!cameras.height || !client_util_1.ClientUtil.checkValidNumber(cameras.height)) {
            this.logger.error('ze.cs.0 height must be integer number');
            errorCallback(zego_error_1.publishErrorList.PARAM, ' height must be integer number');
            return false;
        }
        if (!cameras.frameRate || !client_util_1.ClientUtil.checkValidNumber(cameras.frameRate)) {
            this.logger.error('ze.cs.0 frameRate must be integer number');
            errorCallback(zego_error_1.publishErrorList.PARAM, ' frameRate must be integer number');
            return false;
        }
        if (!cameras.bitrate || !client_util_1.ClientUtil.checkValidNumber(cameras.bitrate)) {
            this.logger.error('ze.cs.0 bitrate must be integer number');
            errorCallback(zego_error_1.publishErrorList.PARAM, ' bitrate must be integer number');
            return false;
        }
        return true;
    };
    /*
     *    "zc.p.sp.1": "ZegoExpressEngine.stopPreview",结束预览
     */
    ZegoExpressEngine.prototype.destroyStream = function (localStream) {
        this.logger.info('zc.p.sp.1 call');
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq);
        if (!(localStream instanceof MediaStream) ||
            (localStream instanceof MediaStream && localStream.getTracks().length == 0)) {
            this.logger.error('zc.p.sp.1 localStream is not mediaStream or tracks is null');
            this.dataReport.addMsgInfo(reportSeq, {
                error: zego_logevent_1.errorList.kLocalStreamError.code,
                message: zego_logevent_1.errorList.kLocalStreamError.message,
            });
            this.dataReport.uploadReport(reportSeq, zego_logevent_1.eventList.kZegoTaskDestroyStream);
            return;
        }
        this.streamCenter.stopPreview(localStream);
        this.dataReport.uploadReport(reportSeq, zego_logevent_1.eventList.kZegoTaskDestroyStream);
    };
    /*
     *    "zc.p.sps.1": "ZegoExpressEngine.startPublishingStream",开始推流
     */
    ZegoExpressEngine.prototype.startPublishingStream = function (streamID, localStream, publishOption) {
        var _this = this;
        this.logger.info('zc.sps.0 call ', streamID);
        var totalStreamId = this.streamCenter.getTotalStreamId(streamID);
        //publish Event start
        var reportSeq = zego_extern_1.getReportSeq();
        this.stateCenter.reportSeqList.startPublish[totalStreamId] = reportSeq;
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskPublishStart);
        if (streamID === undefined) {
            this.logger.error('zc.p.sps.0 streamID required');
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, 'stream id required');
            return false;
        }
        if (!streamID || typeof streamID !== 'string') {
            var msg = 'stream id type wrong';
            this.logger.error('zc.sps.0 ' + msg);
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, msg);
            delete this.stateCenter.reportSeqList.startPublish[totalStreamId];
            return false;
        }
        if (streamID.length > zego_entity_1.MAX_STREAM_ID_LENGTH) {
            var msg = 'stream id length limit';
            this.logger.error('zc.sps.0 ' + msg);
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, msg);
            delete this.stateCenter.reportSeqList.startPublish[totalStreamId];
            return false;
        }
        if (!client_util_1.ClientUtil.checkIllegalCharacters(streamID)) {
            var msg = 'stream ID contains illegal characters';
            this.logger.error('zc.sps.0 ' + msg);
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, msg);
            delete this.stateCenter.reportSeqList.startPublish[totalStreamId];
            return false;
        }
        if (!localStream || (localStream instanceof MediaStream && localStream.getTracks().length == 0)) {
            var msg = 'localStream wrong';
            this.logger.error('zc.sps.0 ' + msg);
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, msg);
            delete this.stateCenter.reportSeqList.startPublish[totalStreamId];
            return false;
        }
        if (!this.streamCenter.checkPreview(localStream)) {
            var msg = 'stream is not from zego';
            this.logger.error('zc.sps.0 ' + msg);
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kNoPreviewBeforePublish, msg);
            delete this.stateCenter.reportSeqList.startPublish[totalStreamId];
            return false;
        }
        if (typeof publishOption !== 'undefined' && typeof publishOption !== 'object') {
            this.logger.error('zc.p.sps.0 publishOption must be object');
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, 'publishOption must be object');
            return false;
        }
        if (publishOption !== undefined &&
            publishOption.streamParams !== undefined &&
            typeof publishOption.streamParams !== 'string') {
            this.logger.error('zc.p.sps.0 publishOption streamParams must be string');
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, ' publishOption streamParams must be string');
            return false;
        }
        if (publishOption !== undefined &&
            publishOption.extraInfo !== undefined &&
            typeof publishOption.extraInfo !== 'string') {
            this.logger.error('zc.p.sps.0 publishOption extraInfo must be string');
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, ' publishOption extraInfo must be string');
            return false;
        }
        if (publishOption !== undefined &&
            publishOption.videoCodec !== undefined &&
            typeof publishOption.videoCodec !== 'string') {
            this.logger.error('zc.p.sps.0 publishOption videoCodec must be string');
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, ' publishOption videoCodec must be string');
            return false;
        }
        if (!this.stateCenter.isLogin()) {
            this.logger.error('zc.p.sps.1 not login');
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kNotLoginError);
            delete this.stateCenter.reportSeqList.startPublish[totalStreamId];
            return false;
        }
        if (!publishOption) {
            publishOption = {};
        }
        // publishOption videoCodec 大小写兼容
        if (publishOption && publishOption.videoCodec) {
            publishOption.videoCodec = publishOption.videoCodec.toUpperCase();
        }
        this.dataReport.addMsgInfo(reportSeq, {
            streamID: streamID,
            publishOption: publishOption,
        });
        publishOption.audioBitRate = this.stateCenter.audioBitRate;
        if (this.stateCenter.customUrl && this.stateCenter.customUrl.length != 0) {
            this.stateCenter.publishStreamList[streamID] = {
                state: zego_entity_1.ENUM_PUBLISH_STREAM_STATE.tryPublish,
                extra_info: publishOption.extraInfo ? publishOption.extraInfo : null,
            };
            if (!this.streamCenter.setPublishStateStart(streamID, localStream, publishOption)) {
                this.logger.info('zc.p.sps.1 cannot start publish');
                return false;
            }
            this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.retry, streamID, { code: 0, msg: '' });
            return this.streamCenter.startPublishingStream(streamID, this.stateCenter.customUrl);
        }
        this.stateCenter.publishStreamList[streamID] = {
            state: zego_entity_1.ENUM_PUBLISH_STREAM_STATE.tryPublish,
            extra_info: publishOption.extraInfo ? publishOption.extraInfo : null,
        };
        if (!this.streamCenter.setPublishStateStart(streamID, localStream, publishOption)) {
            this.logger.error('zc.p.sps.1 cannot start publish');
            return false;
        }
        this.logger.info('zc.p.sps.1 start publish');
        this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.retry, streamID, { code: 0, msg: '' });
        var body = {
            stream_id: streamID,
            ptype: 'push',
            signals: this.streamCenter.getAllInUseUrl(),
            header_kvs: [{ key: 'grpc-metadata-push', value: (publishOption && publishOption.cdnUrl) || '' }],
        };
        this.socketCenter.registerRouter('webrtc_url', function (msg) {
            _this.handleFetchWebRtcUrlRsp(msg);
        });
        var seq = this.socketCenter.sendMessage('webrtc_url', body, undefined, function (err) {
            _this.logger.info('zc.p.sps.1 dispatch error');
            if (err == zego_externalError_1.errorCodeList.TIMEOUT) {
                _this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.error, streamID, zego_error_1.publishErrorList.DISPATCH_TIMEOUT);
            }
            else {
                _this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.error, streamID, zego_error_1.publishErrorList.DISPATCH_ERROR);
            }
            _this.streamCenter.stopPublishingStream(streamID);
        });
        var totalStreamID = this.streamCenter.getTotalStreamId(streamID);
        if (this.streamCenter.publisherList[totalStreamID])
            this.streamCenter.publisherList[totalStreamID].seq = seq;
        return true;
    };
    //结束推流
    ZegoExpressEngine.prototype.stopPublishingStream = function (streamID) {
        this.logger.info('zc.p.sps.1.1 call ', streamID);
        var totalStreamId = this.streamCenter.getTotalStreamId(streamID);
        //stop publish Event start
        var reportSeq = zego_extern_1.getReportSeq();
        this.stateCenter.reportSeqList.stopPublish[totalStreamId] = reportSeq;
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskPublishStop);
        this.dataReport.addMsgInfo(reportSeq, {
            streamID: streamID,
        });
        if (typeof streamID !== 'string' || streamID == '') {
            this.logger.error('zc.p.sps.1.1 streamID must be string and not empty');
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kInvalidParamError, 'stream id type error');
            delete this.stateCenter.reportSeqList.stopPublish[totalStreamId];
            return false;
        }
        var publish = this.streamCenter.publisherList[totalStreamId];
        // if (!publish || publish.serverUrls.length == 0 || !publish.publisher.signal) {
        //     publish && this.logger.error('zc.p.sps.1.1 stream can not be destroyed');
        //     this.dataReport.uploadReport(reportSeq, undefined, errorList.kIsPublishing, 'can not be destroyed');
        //     delete this.stateCenter.reportSeqList.stopPublish[totalStreamId];
        //     return false;
        // }
        var shouldPublishUpdate = publish && publish.publisher && publish.publisher.state !== zego_entity_1.ENUM_PUBLISH_STATE.stop;
        this.streamCenter.stopPublishingStream(streamID);
        if (this.stateCenter.publishStreamList[streamID]) {
            if (this.stateCenter.publishStreamList[streamID].state >= zego_entity_1.ENUM_PUBLISH_STREAM_STATE.update_info) {
                this.streamHandler.updateStreamInfo(streamID, zego_entity_1.ENUM_STREAM_SUB_CMD.liveEnd);
            }
            delete this.stateCenter.publishStreamList[streamID];
        }
        this.dataReport.uploadReport(reportSeq);
        // TODO 抛出回调
        shouldPublishUpdate &&
            this.streamHandler.onPublishStateUpdate(zego_entity_1.ENUM_PUBLISH_STATE_UPDATE.error, streamID, { code: 0, msg: '' });
        return true;
    };
    //修改推流参数
    ZegoExpressEngine.prototype.setPublishStreamConstraints = function (localStream, constraints) {
        var _this = this;
        this.logger.info('zc.spsc.0 call');
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoSetPublishConstraints);
            if (!(localStream instanceof MediaStream)) {
                _this.logger.error('zc.spsc.0 localStream not found');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kLocalStreamError.code,
                    message: zego_logevent_1.errorList.kLocalStreamError.message,
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.code,
                    extendedData: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.msg + ' localStream no found',
                });
                return;
            }
            if (!constraints || typeof constraints !== 'object' || Object.keys(constraints).length == 0) {
                _this.logger.error('zc.spsc.0 constraints wrong');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message,
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.code,
                    extendedData: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.msg + ' constraints wrong',
                });
                return;
            }
            if (constraints.width && !client_util_1.ClientUtil.checkValidNumber(constraints.width)) {
                _this.logger.error('zc.spsc.0 constraints width integer number, range[1, 10000]');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' constraints width integer number, range[1, 10000]',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.code,
                    extendedData: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.msg + ' constraints wrong',
                });
                return;
            }
            if (constraints.height && !client_util_1.ClientUtil.checkValidNumber(constraints.height)) {
                _this.logger.error('zc.spsc.0 constraints height integer number, range[1, 10000]');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' constraints height integer number, range[1, 10000]',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.code,
                    extendedData: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.msg + ' constraints wrong',
                });
                return;
            }
            var interResolve = function () {
                _this.dataReport.uploadReport(reportSeq);
                resolve({ errorCode: 0, extendedData: '' });
            };
            var interReject = function (err) {
                var errName = zego_logevent_1.codeErrMap[err.code];
                if (errName) {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        //@ts-ignore
                        error: zego_logevent_1.errorList[errName].code,
                        //@ts-ignore
                        message: err.msg,
                    });
                }
                else {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        error: err.code,
                        message: err.msg,
                    });
                }
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: err.code,
                    extendedData: err.msg,
                });
            };
            _this.streamCenter.setPublishStreamConstraints(localStream, constraints, interResolve, interReject);
        });
    };
    ZegoExpressEngine.prototype.replaceTrack = function (localStream, mediaStreamTrack) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!(localStream instanceof MediaStream)) {
                _this.logger.error('zp.rt.0 localStream not found');
                reject({
                    errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code,
                    extendedData: zego_externalError_1.errorCodeList.INPUT_PARAM.msg + ' localStream no found',
                });
                return;
            }
            if (!mediaStreamTrack || !(mediaStreamTrack instanceof MediaStreamTrack)) {
                _this.logger.error('zp.rt.0 mediastream track no found');
                reject({
                    errorCode: zego_externalError_1.errorCodeList.INPUT_PARAM.code,
                    extendedData: zego_externalError_1.errorCodeList.INPUT_PARAM.msg + ' mediastream track no found',
                });
                return;
            }
            _this.streamCenter.replaceTrack(localStream, mediaStreamTrack, resolve, reject);
        });
    };
    //预加载音效
    ZegoExpressEngine.prototype.preloadEffect = function (id, effectUrl, callBack) {
        if (!id || typeof id !== 'string' || !effectUrl || typeof effectUrl !== 'string') {
            this.logger.error('zc.pe.0 params error');
            return;
        }
        if (this.stateCenter.audioEffectBuffer[id]) {
            this.logger.error('zc.pe.0 audio buffer already exists');
            return;
        }
        this.logger.info('zc.pe.0 start preload effect');
        this.streamCenter.preloadEffect(this.ac, id, effectUrl, callBack);
    };
    ZegoExpressEngine.prototype.playEffect = function (AudioMixConfig, start, end) {
        if (!AudioMixConfig.streamID ||
            typeof AudioMixConfig.streamID !== 'string' ||
            !AudioMixConfig.effectID ||
            typeof AudioMixConfig.effectID !== 'string') {
            this.logger.error('zc.pe.1 params error');
            return;
        }
        if (!this.stateCenter.audioEffectBuffer[AudioMixConfig.effectID]) {
            this.logger.error("zc,pe.1 audio buffer dosesn't exists");
            return;
        }
        this.streamCenter.playEffect(AudioMixConfig, start, end);
    };
    ZegoExpressEngine.prototype.pauseEffect = function (streamID, effectID) {
        if (!streamID || typeof streamID !== 'string') {
            this.logger.error('zc.pe.2 streamID format error');
            return false;
        }
        if (effectID && typeof effectID !== 'string') {
            this.logger.error('zc.pe.2 effect ');
        }
        return this.streamCenter.pauseEffect(streamID, effectID);
    };
    ZegoExpressEngine.prototype.resumeEffect = function (streamID, effectID) {
        if (!streamID || typeof streamID !== 'string') {
            this.logger.error('zc.pe.2 streamID format error');
            return false;
        }
        if (effectID && typeof effectID !== 'string') {
            this.logger.error('zc.pe.2 effect ');
        }
        return this.streamCenter.resumeEffect(streamID, effectID);
    };
    ZegoExpressEngine.prototype.stopEffect = function (streamID, effectID) {
        if (!streamID || typeof streamID !== 'string') {
            this.logger.error('zc.pe.2 streamID format error');
            return false;
        }
        if (effectID && typeof effectID !== 'string') {
            this.logger.error('zc.pe.2 effect ');
        }
        return this.streamCenter.stopEffect(streamID, effectID);
    };
    ZegoExpressEngine.prototype.unloadEffect = function (effecId) {
        if (!effecId || typeof effecId !== 'string') {
            this.logger.error('zc.ue.0 params error');
            return false;
        }
        delete this.stateCenter.audioEffectBuffer[effecId];
        return true;
    };
    //开始混音
    ZegoExpressEngine.prototype.startMixingAudio = function (streamID, audio) {
        this.logger.debug('zc.sma.0 call');
        if (!streamID || typeof streamID !== 'string') {
            this.logger.error('zc.sma.0 stream id type error');
            return false;
        }
        if (!audio) {
            this.logger.error('zc.sma.0 no audio');
            return false;
        }
        if (Array.isArray(audio) && audio.length !== 0) {
            return this.streamCenter.startMixingAudio(streamID, audio);
        }
        else {
            this.logger.error('zc.sma.0 audio param type error');
            return false;
        }
    };
    //停止混音
    ZegoExpressEngine.prototype.stopMixingAudio = function (streamID, audio) {
        if (!streamID || typeof streamID !== 'string') {
            this.logger.error('zc.sma.1 param streamID format error');
            return false;
        }
        if ((Array.isArray(audio) && audio.length !== 0) || typeof audio == 'undefined') {
            return this.streamCenter.stopMixingAudio(streamID, audio);
        }
        else {
            this.logger.error('zc.sma.0 audio param type error');
            return false;
        }
    };
    ZegoExpressEngine.prototype.mixingBuffer = function (streamID, sourceID, arrayBuffer, callBack) {
        this.logger.info('zc.mb.0 call ' + sourceID);
        if (!streamID || typeof streamID !== 'string') {
            this.logger.error('zc.mb.0 param streamid format error');
            return false;
        }
        if (!sourceID || typeof sourceID !== 'string') {
            this.logger.error('zc.mb.0 param source id format error');
            return false;
        }
        this.streamCenter.mixingBuffer(streamID, sourceID, arrayBuffer, callBack);
    };
    ZegoExpressEngine.prototype.stopMixingBuffer = function (streamID, sourceID) {
        this.logger.info('zc.smb.0 call ' + sourceID);
        if (!streamID || typeof streamID !== 'string') {
            this.logger.error('zc.sma.1 param streamid format error');
            return false;
        }
        if (!sourceID || typeof sourceID !== 'string') {
            this.logger.error('zc.sma.1 param source id format error');
            return false;
        }
        return this.streamCenter.stopMixingBuffer(streamID, sourceID);
    };
    ZegoExpressEngine.prototype.setMixingAudioVolume = function (streamID, volume, audio) {
        this.logger.debug('zc.sma.2 call');
        if (typeof streamID !== 'string' || streamID == '') {
            this.logger.error('zc.sma.2 stream ID must be string and not empty');
            return false;
        }
        if (typeof volume !== 'number' || volume < 0 || volume > 100) {
            this.logger.error('zc.sma.2 volume must be a number between 0 and 100');
            return false;
        }
        if (!audio || !(audio instanceof HTMLMediaElement)) {
            this.logger.error('zc.sma.2 no audio');
            return false;
        }
        return this.streamCenter.setMixingAudioVolume(streamID, volume, audio);
    };
    ZegoExpressEngine.prototype.startScreenShotChrome = function (callBack) {
        if (!ZegoExpressEngine.screenShotReady) {
            var msg = "zc.b.ss Please install the extension:1. Go to chrome://extensions  2. Check: \"Enable Developer mode   3. Click: \"Load the unpacked extension... 4. Choose \"extension\" folder from the repository 5. Reload this page";
            this.logger.error(msg);
            callBack(false, null, {
                code: zego_externalError_1.errorCodeList.PUBLISHER_SCREEN_FAILED.code,
                msg: zego_externalError_1.errorCodeList.PUBLISHER_SCREEN_FAILED.msg + ' ' + msg,
            });
        }
        else {
            window.postMessage({ type: 'SS_UI_REQUEST', text: 'start' }, '*');
            // listen for messages from the content-script
            client_util_1.ClientUtil.registerCallback('screenShare', { success: callBack }, this.stateCenter.callbackList);
        }
    };
    ZegoExpressEngine.prototype.startScreenSharing = function (screenConfig, callBack) {
        var _this = this;
        if ('getDisplayMedia' in navigator.mediaDevices) {
            var zegoMediaDevices = navigator.mediaDevices;
            zegoMediaDevices
                .getDisplayMedia({
                audio: screenConfig.audio,
                video: {
                    frameRate: screenConfig.frameRate,
                },
            })
                .then(function (stream) {
                callBack(true, stream);
            })
                .catch(function (err) {
                _this.logger.error('zc.b.sss ' + err);
                if (err.message && err.message.toLowerCase() == 'permission denied') {
                    callBack(false, null, zego_externalError_1.errorCodeList.PUBLISH_SCREEN_CANCELED);
                }
                else {
                    callBack(false, null, {
                        code: zego_externalError_1.errorCodeList.PUBLISHER_SCREEN_FAILED.code,
                        msg: zego_externalError_1.errorCodeList.PUBLISHER_SCREEN_FAILED.msg + ' ' + err,
                    });
                }
            });
        }
        else {
            this.logger.error('zc.b.sss brower does not support getDisplayMedia');
            callBack(false, null, zego_externalError_1.errorCodeList.PUBLISH_SCREEN_NOT_SUPPORT);
        }
    };
    ZegoExpressEngine.prototype.startScreenShotFirFox = function (mediaSource, screenConfig, callBack) {
        var _this = this;
        var config = {
            video: {
                frameRate: screenConfig.frameRate,
                bitRate: screenConfig.bitRate,
            },
            audio: screenConfig.audio,
        };
        config.video['mediaSource'] = mediaSource;
        navigator.mediaDevices
            .getUserMedia(config)
            .then(function (stream) {
            // this.stateCenter.screenShotStream = stream;
            callBack(true, stream);
        })
            .catch(function (err) {
            _this.logger.error('ze.ssf.1 ' + err);
            callBack(false, null, {
                code: zego_externalError_1.errorCodeList.PUBLISHER_SCREEN_FAILED.code,
                msg: zego_externalError_1.errorCodeList.PUBLISHER_SCREEN_FAILED.msg + ' ' + err,
            });
        });
    };
    ZegoExpressEngine.prototype.stopScreenShot = function () {
        this.stateCenter.screenShotStream.getTracks().forEach(function (track) {
            track.stop();
        });
        window.postMessage({ type: 'SS_UI_CANCEL', text: 'start' }, '*');
    };
    // web独有
    ZegoExpressEngine.prototype.WebrtcOnPublishStateUpdateHandle = function (type, streamID, error) {
        if (this.stateCenter.publishStreamList[streamID].state == zego_entity_1.ENUM_PUBLISH_STREAM_STATE.publishing) {
            this.streamHandler.onPublishStateUpdate(type, streamID, error);
        }
    };
    // web独有
    ZegoExpressEngine.prototype.setCDNInfo = function (streamInfo, streamItem) {
        streamInfo.urlFlv =
            streamItem.urls_flv instanceof Array
                ? streamItem.urls_flv[0]
                : typeof streamItem.urls_flv == 'string'
                    ? streamItem.urls_flv
                    : '';
        streamInfo.urlHls =
            streamItem.urls_m3u8 instanceof Array
                ? streamItem.urls_m3u8[0]
                : typeof streamItem.urls_m3u8 == 'string'
                    ? streamItem.urls_m3u8
                    : '';
        streamInfo.urlHttpsFlv =
            streamItem.urls_https_flv instanceof Array
                ? streamItem.urls_https_flv[0]
                : typeof streamItem.urls_https_flv == 'string'
                    ? streamItem.urls_https_flv
                    : '';
        streamInfo.urlHttpsHls =
            streamItem.urls_https_m3u8 instanceof Array
                ? streamItem.urls_https_m3u8[0]
                : typeof streamItem.urls_https_m3u8 == 'string'
                    ? streamItem.urls_https_m3u8
                    : '';
        streamInfo.urlRtmp =
            streamItem.urls_rtmp instanceof Array
                ? streamItem.urls_rtmp[0]
                : typeof streamItem.urls_rtmp == 'string'
                    ? streamItem.urls_rtmp
                    : '';
    };
    ZegoExpressEngine.prototype.loginBodyData = function () {
        return {
            id_name: this.stateCenter.idName,
            nick_name: this.stateCenter.nickName,
            role: this.stateCenter.role,
            token: this.stateCenter.token,
            version: zego_entity_1.PROTO_VERSION,
            room_name: this.stateCenter.roomid,
            user_state_flag: this.stateCenter.userStateUpdate ? 1 : 0,
            room_create_flag: this.stateCenter.roomCreateFlag,
            client_type: zego_entity_1.E_CLIENT_TYPE.ClientType_Webrtc,
            third_token: this.stateCenter.third_token,
            user_count_limit: this.stateCenter.maxMemberCount,
            relate_service: this.stateCenter.relateService.join() || '',
        };
    };
    ZegoExpressEngine.prototype.screenStreamFrom = function (streamID, canRequestAudioTrack, callBack) {
        var config = {};
        config['audio'] = {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: streamID,
            },
        };
        config['video'] = {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: streamID,
                maxWidth: window.screen.width,
                maxHeight: window.screen.height,
            },
        };
        !canRequestAudioTrack && (config['audio'] = false);
        navigator.mediaDevices
            .getUserMedia(config)
            .then(function (stream) {
            // this.stateCenter.screenShotStream = stream;
            callBack(true, stream);
        })
            .catch(function (err) {
            //this.logger.error('ze.ssf.0 ' + err);
            callBack(false, null, err);
        });
    };
    ZegoExpressEngine.prototype.filterStreamList = function (streamID) {
        var flv = {};
        var hls = {};
        var rtmp = {};
        var streamListUrl = [];
        var index = 0;
        this.stateCenter.streamList.forEach(function (item, ind) {
            if (item.stream_id == streamID)
                index = ind;
        });
        for (var key in this.stateCenter.streamList[index]) {
            if (key == 'urls_flv' || key == 'urls_https_flv') {
                flv[key] = this.stateCenter.streamList[index][key];
            }
            if (key == 'urls_m3u8' || key == 'urls_https_m3u8') {
                hls[key] = this.stateCenter.streamList[index][key];
            }
            if (key == 'urls_rtmp') {
                rtmp[key] = this.stateCenter.streamList[index][key];
            }
        }
        var pro = window.location.protocol;
        var ua = window.navigator.userAgent;
        if (/Safari/.test(ua) && !/Chrome/.test(ua)) {
            for (var key in hls) {
                if (hls[key]) {
                    hls[key].forEach(function (item) {
                        if (item.indexOf(pro) !== -1)
                            streamListUrl.push(item);
                    });
                }
            }
        }
        else if (pro == 'http:') {
            for (var key in flv) {
                if (flv[key]) {
                    flv[key].forEach(function (item) {
                        if (item.indexOf('http') !== -1 || item.indexOf('https') !== -1)
                            streamListUrl.push(item);
                    });
                }
            }
        }
        else if (pro == 'https:') {
            for (var key in flv) {
                if (flv[key]) {
                    flv[key].forEach(function (item) {
                        if (item.indexOf(pro) !== -1)
                            streamListUrl.push(item);
                    });
                }
            }
        }
        else if (pro == 'rtmp:') {
            for (var key in rtmp) {
                if (rtmp[key]) {
                    rtmp[key].forEach(function (item) {
                        if (item.indexOf(pro) !== -1)
                            streamListUrl.push(item);
                    });
                }
            }
        }
        return streamListUrl.filter(function (ele, index, self) { return self.indexOf(ele) == index; });
    };
    // private voiceChange(mult: number, streamID: string): any {
    //     if (!mult || typeof mult !== 'number') {
    //         this.logger.error('zc.vc.0 mult error');
    //         return false;
    //     }
    //     if (!streamID || typeof streamID !== 'string') {
    //         this.logger.error('zc.vc.0 stream id error');
    //         return false;
    //     }
    //     return this.streamCenter.voiceChange(mult, streamID);
    // }
    // private voiceBack(streamID: string): void {
    //     this.streamCenter.voiceBack(streamID);
    // }
    ZegoExpressEngine.prototype.checkSystemRequirements = function () {
        var _this = this;
        var flag = navigator &&
            navigator.mediaDevices &&
            (ZegoExpressEngine.screenShotReady || 'getDisplayMedia' in navigator.mediaDevices);
        return new Promise(function (resolve) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskCheckSystemRequirements);
            var interResolve = function (capability) {
                _this.dataReport.addMsgInfo(reportSeq, {
                    capability: capability,
                });
                _this.dataReport.uploadReport(reportSeq);
                resolve(capability);
            };
            client_util_1.ClientUtil.supportDetection(flag, interResolve);
        });
    };
    ZegoExpressEngine.prototype.enumDevices = function () {
        var _this = this;
        this.logger.info('zc.ed.0 call');
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskEnumDevices);
            var interResolve = function (res) {
                _this.dataReport.addMsgInfo(reportSeq, {
                    microphones: res.microphones,
                    speakers: res.speakers,
                    cameras: res.cameras,
                });
                _this.dataReport.uploadReport(reportSeq);
                resolve(res);
            };
            var interReject = function (err) {
                var errName = zego_logevent_1.codeErrMap[err.code];
                if (errName) {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        //@ts-ignore
                        error: zego_logevent_1.errorList[errName].code,
                        //@ts-ignore
                        message: zego_logevent_1.errorList[errName].message,
                    });
                }
                _this.dataReport.uploadReport(reportSeq);
                reject(err);
            };
            client_util_1.ClientUtil.getDevices(interResolve, interReject);
        });
    };
    ZegoExpressEngine.prototype.getAudioInfo = function (localStream, errCallBack, option) {
        if (!localStream) {
            console.error('loclStream is empty!');
            return false;
        }
        var _option = __assign({}, option);
        return new mediaUtil_1.MediaUtil(this.ac, _option).connectToSource(localStream, function (e) {
            errCallBack(e);
        });
    };
    ZegoExpressEngine.prototype.getSoundLevel = function (localStream, sucCallBack, errCallBack) {
        this.logger.info('zc.gsl call');
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskGetSoundLevel);
        try {
            var mic = this.ac.createMediaStreamSource(localStream);
            var script = this.ac.createScriptProcessor(4096, 1, 1); //创建一个音频分析对象，采样的缓冲区大小为4096，输入和输出都是单声道
            this.stateCenter.audioStreamList[localStream.id] = { mic: mic, script: script };
            mic.connect(script); //将该分析对象与麦克风音频进行连接
            script.connect(this.ac.destination);
            script.onaudioprocess = function (e) {
                //开始处理音频
                var buffer = e.inputBuffer.getChannelData(0); //获得缓冲区的输入音频，转换为包含了PCM通道数据的32位浮点数组
                //创建变量并迭代来获取最大的音量值
                var maxVal = 0;
                for (var i = 0; i < buffer.length; i++) {
                    if (maxVal < buffer[i]) {
                        maxVal = buffer[i];
                    }
                }
                sucCallBack(maxVal);
            };
            this.dataReport.uploadReport(reportSeq);
        }
        catch (err) {
            errCallBack(err);
            this.dataReport.addMsgInfo(reportSeq, {
                error: zego_logevent_1.errorList.kGetSoundLevelError.code,
                message: zego_logevent_1.errorList.kGetSoundLevelError.message,
            });
            this.dataReport.uploadReport(reportSeq);
        }
        this.logger.info('zc.gsl call success');
    };
    ZegoExpressEngine.prototype.stopSoundLevel = function (localStream) {
        this.logger.info('zc.ssl call');
        var reportSeq = zego_extern_1.getReportSeq();
        this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskStopSoundLevel);
        var ctx = this.stateCenter.audioStreamList[localStream.id];
        ctx.mic.disconnect();
        ctx.script.disconnect();
        delete this.stateCenter.audioStreamList[localStream.id];
        this.dataReport.uploadReport(reportSeq);
    };
    ZegoExpressEngine.handleDataAvailable = function (event) {
        if (event.data && event.data.size > 0) {
            ZegoExpressEngine.recordedBlobs.push(event.data);
        }
    };
    ZegoExpressEngine.prototype.startRecord = function (el) {
        var playStream = el.captureStream();
        ZegoExpressEngine.recordedBlobs = [];
        var options = { mimeType: 'video/webm;codecs=vp9' };
        if (!index_2.MediaRecorder.isTypeSupported(options.mimeType)) {
            options = { mimeType: 'video/webm;codecs=vp8' };
            if (!index_2.MediaRecorder.isTypeSupported(options.mimeType)) {
                options = { mimeType: 'video/webm' };
                if (!index_2.MediaRecorder.isTypeSupported(options.mimeType)) {
                    options = { mimeType: '' };
                }
            }
        }
        try {
            ZegoExpressEngine.mediaRecorder = new index_2.MediaRecorder(playStream, options);
        }
        catch (e) {
            console.error('Exception while creating ZegoMediaRecorder:', e);
            return;
        }
        ZegoExpressEngine.mediaRecorder.onstop = function (event) {
            console.log('Recorder stopped: ', event);
        };
        ZegoExpressEngine.mediaRecorder.ondataavailable = ZegoExpressEngine.handleDataAvailable;
        ZegoExpressEngine.mediaRecorder.start(10); // collect 10ms of data
    };
    ZegoExpressEngine.prototype.stopRecord = function () {
        if (ZegoExpressEngine.mediaRecorder) {
            ZegoExpressEngine.mediaRecorder.stop();
        }
        else {
            console.warn('please invoke startRecord first');
        }
    };
    ZegoExpressEngine.prototype.resumeRecord = function () {
        if (ZegoExpressEngine.mediaRecorder) {
            ZegoExpressEngine.mediaRecorder.resume();
        }
        else {
            console.warn('please invoke startRecord first');
        }
    };
    ZegoExpressEngine.prototype.pauseRecord = function () {
        if (ZegoExpressEngine.mediaRecorder) {
            ZegoExpressEngine.mediaRecorder.pause();
        }
        else {
            console.warn('please invoke startRecord first');
        }
    };
    ZegoExpressEngine.prototype.saveRecord = function (name) {
        if (ZegoExpressEngine.mediaRecorder && ZegoExpressEngine.recordedBlobs) {
            var blob = new Blob(ZegoExpressEngine.recordedBlobs, { type: 'video/webm' });
            var url_1 = window.URL.createObjectURL(blob);
            var a_1 = document.createElement('a');
            a_1.style.display = 'none';
            a_1.href = url_1;
            a_1.download = name + '.webm';
            document.body.appendChild(a_1);
            a_1.click();
            setTimeout(function () {
                document.body.removeChild(a_1);
                window.URL.revokeObjectURL(url_1);
            }, 100);
        }
        else {
            console.warn('please invoke startRecord first');
        }
    };
    ZegoExpressEngine.prototype.takeSnapShot = function (el, img) {
        if (el && el.videoHeight !== 0) {
            var canvas = document.createElement('canvas');
            canvas.width = el.videoWidth;
            canvas.height = el.videoHeight;
            var canvasContext = canvas.getContext('2d');
            canvasContext && canvasContext.drawImage(el, 0, 0, canvas.width, canvas.height);
            img.src = canvas.toDataURL('image/jpeg');
        }
        else {
            console.error('video can not empty');
        }
    };
    ZegoExpressEngine.prototype.saveSnapShot = function (el, name) {
        if (el && el.videoHeight !== 0) {
            var canvas = document.createElement('canvas');
            canvas.width = el.videoWidth;
            canvas.height = el.videoHeight;
            var canvasContext = canvas.getContext('2d');
            canvasContext && canvasContext.drawImage(el, 0, 0, canvas.width, canvas.height);
            canvas.toBlob(function (blob) {
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = name + '.jpeg';
                document.body.appendChild(a);
                a.click();
                setTimeout(function () {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                }, 100);
            });
        }
        else {
            console.error('video can not empty');
        }
    };
    ZegoExpressEngine.prototype.useVideoDevice = function (localStream, deviceID) {
        var _this = this;
        this.logger.info('zc.uvd.0 call');
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskUseVideoDevice);
            _this.dataReport.addMsgInfo(reportSeq, {
                deviceID: deviceID,
            });
            if (!(localStream instanceof MediaStream)) {
                _this.logger.error('zc.uvd.0 localStream not found');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kLocalStreamError.code,
                    message: zego_logevent_1.errorList.kLocalStreamError.message,
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.code,
                    extendData: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.msg,
                });
                return;
            }
            if (typeof deviceID !== 'string') {
                _this.logger.error('zc.uvd.0 deviceID must be string');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' deviceID must be string',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.code,
                    extendData: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.msg,
                });
                return;
            }
            var interResolve = function (res) {
                _this.dataReport.uploadReport(reportSeq);
                resolve(res);
            };
            var interReject = function (err) {
                var errName = zego_logevent_1.codeErrMap[err.code];
                if (errName) {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        //@ts-ignore
                        error: zego_logevent_1.errorList[errName].code,
                        //@ts-ignore
                        message: zego_logevent_1.errorList[errName].message,
                    });
                }
                _this.dataReport.uploadReport(reportSeq);
                reject(err);
            };
            client_util_1.ClientUtil.getDevices(function (devicesInfos) {
                var cameras = devicesInfos.cameras;
                if (!cameras.find(function (camera) { return camera.deviceID == deviceID; })) {
                    _this.logger.error('zc.uvd.0 device is not found');
                    reject({
                        errorCode: zego_externalError_1.errorCodeList.DEVICE_NOT_FOUND.code,
                        extendData: zego_externalError_1.errorCodeList.DEVICE_NOT_FOUND.msg,
                    });
                    return;
                }
                _this.streamCenter.switchDevice('video', localStream, deviceID, interResolve, interReject);
            }, function (err) {
                _this.logger.warn('zc.uvd.0 getDevices err:', err);
                _this.streamCenter.switchDevice('video', localStream, deviceID, interResolve, interReject);
            });
        });
        // return this.setPublishStreamConstraints(localStream, {
        //     videoInput: deviceID,
        // });
    };
    ZegoExpressEngine.prototype.useAudioDevice = function (localStream, deviceID) {
        var _this = this;
        this.logger.info('zc.uad.1 call');
        return new Promise(function (resolve, reject) {
            var reportSeq = zego_extern_1.getReportSeq();
            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskUseAudioDevice);
            _this.dataReport.addMsgInfo(reportSeq, {
                deviceID: deviceID,
            });
            if (!(localStream instanceof MediaStream)) {
                _this.logger.error('zc.uad.1 localStream not found');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kLocalStreamError.code,
                    message: zego_logevent_1.errorList.kLocalStreamError.message,
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.code,
                    extendData: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.msg,
                });
                return;
            }
            if (typeof deviceID !== 'string') {
                _this.logger.error('zc.uad.1 deviceID must be string');
                _this.dataReport.addMsgInfo(reportSeq, {
                    error: zego_logevent_1.errorList.kInvalidParamError.code,
                    message: zego_logevent_1.errorList.kInvalidParamError.message + ' deviceID must be string',
                });
                _this.dataReport.uploadReport(reportSeq);
                reject({
                    errorCode: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.code,
                    extendData: zego_externalError_1.errorCodeList.PUBLISHER_PARAM.msg,
                });
                return;
            }
            var interResolve = function (res) {
                _this.dataReport.uploadReport(reportSeq);
                resolve(res);
            };
            var interReject = function (err) {
                var errName = zego_logevent_1.codeErrMap[err.code];
                if (errName) {
                    _this.dataReport.addMsgInfo(reportSeq, {
                        //@ts-ignore
                        error: zego_logevent_1.errorList[errName].code,
                        //@ts-ignore
                        message: zego_logevent_1.errorList[errName].message,
                    });
                }
                _this.dataReport.uploadReport(reportSeq);
                reject(err);
            };
            client_util_1.ClientUtil.getDevices(function (devicesInfos) {
                var microphones = devicesInfos.microphones;
                if (!microphones.find(function (microphone) { return microphone.deviceID == deviceID; })) {
                    _this.logger.error('zc.uad.1 device is not found');
                    reject({
                        errorCode: zego_externalError_1.errorCodeList.DEVICE_NOT_FOUND.code,
                        extendData: zego_externalError_1.errorCodeList.DEVICE_NOT_FOUND.msg,
                    });
                    return;
                }
                _this.streamCenter.switchDevice('audio', localStream, deviceID, interResolve, interReject);
            }, function (err) {
                _this.logger.warn('zc.uad.1 getDevices err:', err);
                _this.streamCenter.switchDevice('audio', localStream, deviceID, interResolve, interReject);
            });
        });
        // return this.setPublishStreamConstraints(localStream, {
        //     audioInput: deviceID,
        // });
    };
    ZegoExpressEngine.prototype.setSoundLevelDelegate = function (bool, timeInMs) {
        this.logger.info('zc.ssd.0 call');
        if (typeof bool !== 'boolean') {
            this.logger.error('zc.ssd.0 param 1 must be boolean');
            return;
        }
        if (timeInMs && (!client_util_1.ClientUtil.checkInteger(timeInMs) || timeInMs < 100 || timeInMs > 3000)) {
            this.logger.error('zc.ssd.0 soundLevel interval must be integer number which is between 100 and 3000');
            return;
        }
        this.streamCenter.setSoundLevelDelegate(bool, timeInMs);
    };
    ZegoExpressEngine.prototype.bindWindowListener = function () {
        var _this = this;
        //防止，暴力退出（关闭或刷新页面）
        var isOnIOS = navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i);
        var eventName = isOnIOS ? 'pagehide' : 'unload';
        window.addEventListener(eventName, function () {
            if (window.event)
                window.event.cancelBubble = true; // Don't know if this works on iOS but it might!
            for (var key in _this.streamCenter.publisherList) {
                _this.stopPublishingStream(key);
            }
            for (var key in _this.streamCenter.playerList) {
                _this.stopPlayingStream(key);
            }
            console.log(_this.streamCenter.playerList);
            console.log(_this.streamCenter.publisherList);
            _this.logoutRoom(_this.stateCenter.roomid);
        });
        window.addEventListener('message', function (event) {
            var _a = event.data, type = _a.type, streamId = _a.streamId, canRequestAudioTrack = _a.canRequestAudioTrack;
            if (type === 'SS_DIALOG_SUCCESS') {
                //user chose a stream
                _this.screenStreamFrom(streamId, canRequestAudioTrack, client_util_1.ClientUtil.actionSuccessCallback('screenShare', _this.stateCenter.callbackList));
            }
            if (type === 'SS_DIALOG_CANCEL') {
                //this.logger.error('zc.b.ss ' + type);
                client_util_1.ClientUtil.actionSuccessCallback('screenShare', _this.stateCenter.callbackList)(false, null, type);
            }
        });
    };
    ZegoExpressEngine.screenShotReady = false;
    return ZegoExpressEngine;
}(index_1.BaseCenter));
exports.ZegoExpressEngine = ZegoExpressEngine;
// listen for messages from the content-script
window.addEventListener('message', function (event) {
    var type = event.data.type, origin = event.origin;
    // NOTE: you should discard foreign events
    if (origin !== window.location.origin) {
        console.warn('ScreenStream: you should discard foreign event from origin:', origin);
        // return;
    }
    // content-script will send a 'SS_PING' msg if extension is installed
    if (type === 'SS_PING') {
        ZegoExpressEngine.screenShotReady = true;
    }
});


/***/ }),

/***/ "./sdk/webrtc/zego.logger.webrtc.ts":
/*!******************************************!*\
  !*** ./sdk/webrtc/zego.logger.webrtc.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var zego_logger_1 = __webpack_require__(/*! ../common/zego.logger */ "./sdk/common/zego.logger.ts");
var LoggerWeb = /** @class */ (function (_super) {
    __extends(LoggerWeb, _super);
    function LoggerWeb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoggerWeb.prototype.openWebSocketLogServer = function (url) {
        if (this.url != url) {
            this.url = url;
            if (!url)
                return;
            // if (this.websocket == null || this.websocket.readyState == 2 || this.websocket.readyState == 3) {
            // } else {
            //     return;
            // }
            this.stopWebSocketServer();
            this.websocket = new WebSocket(url);
            this.websocket.onopen = function (evt) { };
            this.websocket.onclose = function (evt) {
                console.error("onclose   websocket error:", evt);
            };
            this.websocket.onmessage = function (evt) { };
            this.websocket.onerror = function (err) {
                console.error("open log websocket error:" + err);
            };
        }
    };
    LoggerWeb.prototype.SendHttpsLog = function () {
        var _this = this;
        if (this.logCacheSend.length == 0) {
            return;
        }
        var uploadData = this.logCacheSend.join('\n');
        //console.log("url " + this.url);
        //console.log(uploadData);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    if (xmlhttp.responseText.length == 0) {
                        return;
                    }
                    try {
                        var json = JSON.parse(xmlhttp.responseText);
                        var interval = json.interval;
                        if (typeof interval === 'number' && _this.logUploadInterval !== interval) {
                            _this.timeInterval = interval;
                            _this.openHttpsLogServer(_this.url);
                        }
                    }
                    catch (e) {
                        console.log('send result failed ' + e);
                    }
                }
                else {
                    console.log('send failed ' + xmlhttp.status);
                }
            }
        };
        xmlhttp.open('POST', this.url, true);
        xmlhttp.send(uploadData);
        this.logCacheSend = [];
    };
    LoggerWeb.prototype.logReportParamList = function (level, logInfo) {
        var t = new Date();
        var stringTime = t.getFullYear() + '/';
        stringTime += (zego_logger_1.D[t.getMonth() + 1] || t.getMonth() + 1) + '/';
        stringTime += (zego_logger_1.D[t.getDate()] || t.getDate()) + ' ';
        stringTime += (zego_logger_1.D[t.getHours()] || t.getHours()) + ':';
        stringTime += (zego_logger_1.D[t.getMinutes()] || t.getMinutes()) + ':';
        stringTime += zego_logger_1.D[t.getSeconds()] || t.getSeconds();
        stringTime += '.' + (t.getTime() % 1000);
        logInfo['time'] = stringTime;
        logInfo['level'] = level;
        logInfo['console'] = 'rtc';
        logInfo['appid'] = this.appid;
        logInfo['room_id'] = this.roomid;
        logInfo['roomid'] = this.roomid;
        logInfo['userid'] = this.userid;
        logInfo['id_name'] = this.userid;
        logInfo['userName'] = this.userName;
        logInfo['sessionid'] = this.sessionid;
        logInfo['sdk_version'] = this.version;
        logInfo['test_environment'] = this.stateCenter.testEnvironment;
        logInfo['version'] = this.version;
        this.appid &&
            this.userid &&
            (logInfo['event_id'] = this.appid + '_' + this.userid + '_' + logInfo['event_time'] + '_' + logInfo['seq']);
        return [JSON.stringify(logInfo)];
    };
    return LoggerWeb;
}(zego_logger_1.Logger));
exports.LoggerWeb = LoggerWeb;


/***/ }),

/***/ "./sdk/webrtc/zego.play.web.ts":
/*!*************************************!*\
  !*** ./sdk/webrtc/zego.play.web.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/common/zego.entity.ts");
var zego_extern_1 = __webpack_require__(/*! ../common/zego.extern */ "./sdk/common/zego.extern.ts");
var zego_error_1 = __webpack_require__(/*! ../common/zego.error */ "./sdk/common/zego.error.ts");
var sdpUtil_1 = __webpack_require__(/*! ../util/sdpUtil */ "./sdk/util/sdpUtil.ts");
var zego_logevent_1 = __webpack_require__(/*! ../common/zego.logevent */ "./sdk/common/zego.logevent.ts");
var client_util_1 = __webpack_require__(/*! ../util/client-util */ "./sdk/util/client-util.ts");
var ZegoPlayWeb = /** @class */ (function () {
    function ZegoPlayWeb(log, signal, dataReport, qualityTimeInterval, streamCenter, ac) {
        this.state = zego_entity_1.ENUM_PLAY_STATE.stop;
        this.candidateInfo = [];
        this.waitICETimer = null;
        this.waitingICETimeInterval = 5000;
        this.waitingOfferTimer = null;
        this.waitingOfferTimeInterval = 5000;
        this.waitingServerTimer = null;
        this.waitingServerTimerInterval = 3000;
        // waitingAnswerTimer: number;
        // waitingAnswerTimeInterval = 0;
        this.qualityTimer = null;
        //连麦状态
        this.broadcasterStatus = zego_entity_1.ENUM_BROADCASTER_STATUS.stop;
        this.playQualityList = [];
        this.maxQualityListCount = 10;
        this.lastPlayStats = {
            audioPacketsLost: 0,
            videoPacketsLost: 0,
            time: 0,
            audioTime: 0,
            videoTime: 0,
            audioBytesReceived: 0,
            videoBytesReceived: 0,
            audioPacketsReceived: 0,
            videoPacketsReceived: 0,
            framesDecoded: 0,
            framesReceived: 0,
            framesDropped: 0,
            audioBitrate: 0,
        };
        this.reportSeq = zego_extern_1.getSeq();
        this.retrySeq = 0;
        this.streamReportSeq = zego_extern_1.getSeq();
        this.videoSizeCallback = false;
        this.qualityUpload = false;
        this.qualityUploadInterval = 30 * 1000;
        this.qualityUploadLastTime = 0;
        //retry
        this.maxRetryCount = 3;
        this.currentRetryCount = 0;
        this.retryState = zego_entity_1.ENUM_RETRY_STATE.didNotStart;
        this.remoteStream = null;
        this.playStream = null;
        this.playOption = {};
        this.closeSessionSignal = false;
        this.stateNego = zego_entity_1.ENUM_PLAY_STATE_NEGO.stop;
        this.negoTimer = null;
        this.negoInterval = 25000;
        this.negoTryCount = 1;
        this.negoTryMaxCount = 2;
        this.playEvent = false;
        this.nextSignalTryCount = 1;
        this.waittingConnectedTimer = null;
        this.waittingConnectedInerval = 15000;
        this.tryingNexitSignal = false;
        this.gotStreamStatus = false;
        this.soundLevel = 0;
        this.mic = null;
        this.script = null;
        this.logger = log;
        this.signal = signal;
        this.dataReport = dataReport;
        this.qualityTimeInterval = qualityTimeInterval;
        this.streamCenter = streamCenter;
        this.ac = ac;
        this.dataReport.newReport(this.streamReportSeq);
        this.dataReport.addMsgInfo(this.streamReportSeq, {
            abs_time: Date.now(),
        });
    }
    /*
     *    "zp.sp.1": "ZegoPlayWeb.startPlay"
     */
    ZegoPlayWeb.prototype.startPlay = function (streamId, success, playOption) {
        var _this = this;
        this.logger.info('zp.sp.1 called ', streamId);
        this.playEvent = false;
        this.signal && this.signal.negoInterval && (this.negoInterval = this.signal.negoInterval);
        this.signal && this.signal.negoTryCount && (this.negoTryCount = this.signal.negoTryCount);
        this.signal && this.signal.negoTryMaxCount && (this.negoTryMaxCount = this.signal.negoTryMaxCount);
        if (!streamId) {
            this.logger.warn('zp.sp.1 streamId is null');
            return;
        }
        this.streamId = streamId;
        this.getRomoteStreamSuc = success;
        this.playOption = playOption || {};
        if (playOption && playOption.videoCodec) {
            this.playOption.videoCodec = playOption.videoCodec;
        }
        //create session
        this.sessionSeq = zego_extern_1.getSeq();
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'CreateSession');
        this.dataReport.eventStart(this.streamReportSeq, 'CreateSession');
        this.signal.createSession(this.sessionSeq, 1, 0, streamId, playOption && playOption.streamParams, function (seq, sessionId, data) {
            var turnServer = data.turn_server;
            var ip = turnServer.split('?')[0] && turnServer.split('?')[0].slice(5);
            var serverArr = _this.streamCenter.server.split('?');
            var app = serverArr[1] && serverArr[1].slice(2);
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'CreateSession', {
                sessionId: data.session_id,
                url: "webrtc://" + ip + "/" + app + "/" + _this.streamId
            });
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'CreateSession', {
                sessionId: data.session_id,
                url: "webrtc://" + ip + "/" + app + "/" + _this.streamId
            });
            _this.logger.info('zp.sp.1 ' + _this.streamId + ' sessionId:' + data.session_id);
            if (_this.sessionSeq != seq) {
                _this.logger.error('zp.sp.1 seq is not match.');
                return;
            }
            if (data.result !== 0) {
                _this.logger.error('zp.sp.1 ' + _this.streamId + ' create error');
                _this.playStateUpdateError(zego_error_1.playErrorList.CREATE_SESSION_ERROR);
            }
            else {
                _this.sessionId = data.session_id;
                _this.onCreatePlaySessionSuccess(data);
            }
        }, function (err, seq) {
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'CreateSession', {
                error: err,
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'CreateSession', {
                error: err,
            });
            _this.playStateUpdateError(zego_error_1.playErrorList.SEND_SESSION_TIMEOUT);
        });
        this.state = zego_entity_1.ENUM_PLAY_STATE.waitingSessionRsp;
        this.logger.info('zp.sp.1 ' + this.streamId + ' called success');
        this.stateNego = zego_entity_1.ENUM_PLAY_STATE_NEGO.start;
        // 下面的代码，在服务器没有返回任何错误码，且协商不成功时才会回调
        this.negoTimer = setTimeout(function () {
            if (_this.stateNego !== zego_entity_1.ENUM_PLAY_STATE_NEGO.iceConnected && _this.negoTryCount < _this.negoTryMaxCount) {
                _this.signal.sendCloseSession(zego_extern_1.getSeq(), _this.sessionId, 1);
                _this.resetPlay();
                _this.startPlay(streamId, success, playOption);
                ++_this.negoTryCount;
            }
            else if (_this.stateNego !== zego_entity_1.ENUM_PLAY_STATE_NEGO.iceConnected &&
                _this.negoTryCount === _this.negoTryMaxCount) {
                _this.logger.error('zp.sp.1 ' + _this.streamId + ' waiting timeout');
                _this.playStateUpdateError(zego_error_1.playErrorList.SERVER_NEGO_TIMEOUT);
            }
        }, this.negoInterval);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // create session result
    /*
     *    "zp.ops.1": "ZegoPlayWeb.onCreatePlaySessionSuccess"
     */
    ZegoPlayWeb.prototype.onCreatePlaySessionSuccess = function (data) {
        var _this = this;
        this.logger.info('zp.ops.1 ' + this.streamId + ' success');
        var urls = [];
        if (data.turn_server)
            urls.push(data.turn_server);
        if (data.stun_server)
            urls.push(data.stun_server);
        var configuration = {
            iceTransportPolicy: 'relay',
            iceServers: [
                {
                    urls: urls,
                    username: data.turn_username,
                    credential: data.turn_auth_key,
                },
            ],
        };
        this.logger.info('zp.ops.1 ' + this.streamId + ' username: ' + data.turn_username);
        this.logger.info('zp.ops.1 ' + this.streamId + ' credential: ' + data.turn_auth_key);
        //this.createdSession = true;
        this.peerConnection = new RTCPeerConnection(configuration);
        this.peerConnection.onicecandidate = function (e) {
            _this.onIceCandidate(e);
        };
        this.peerConnection.onsignalingstatechange = function (e) {
            _this.onConnectionStateChange(e);
        };
        this.peerConnection.oniceconnectionstatechange = function (e) {
            _this.onIceConnectionStateChange(e);
        };
        this.peerConnection.ontrack = function (e) {
            // console.error('ontrack', e);
            _this.onGotRemoteStream(e.streams[0]);
        };
        // this.peerConnection.onaddstream = (e: any) => {
        //         console.warn('onaddstream',e);
        //         this.onGotRemoteStream (e.stream);
        // };
        var offerOptions = {
            offerToReceiveAudio: 1,
            offerToReceiveVideo: 1,
        };
        if (this.playOption && this.playOption.video === false) {
            offerOptions.offerToReceiveVideo = 0;
        }
        if (this.playOption && this.playOption.audio === false) {
            offerOptions.offerToReceiveAudio = 0;
        }
        this.logger.info('zp.ops.1 ' + this.streamId + ' createOffer: ' + JSON.stringify(offerOptions));
        //create offer
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'CreateOffer');
        this.dataReport.eventStart(this.streamReportSeq, 'CreateOffer');
        this.peerConnection.createOffer(offerOptions).then(function (desc) {
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'CreateOffer');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'CreateOffer');
            _this.onCreateOfferSuccess(desc);
        }, function (error) {
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'CreateOffer', {
                error: error.toString(),
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'CreateOffer', {
                error: error.toString(),
            });
            _this.logger.error('zp.ops.0 ' + _this.streamId + ' create offer error ' + error.toString());
            _this.playStateUpdateError(zego_error_1.playErrorList.CREATE_OFFER_ERROR, true);
        });
        //register callback
        this.signal.registerPushCallback('MediaDescPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvMediaDesc(seq, sessionId, data);
        });
        this.signal.registerPushCallback('CandidateInfoPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvCandidateInfo(seq, sessionId, data);
        });
        this.signal.registerPushCallback('CloseSessionPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvCloseSession(seq, sessionId, data);
        });
        // this.signal.registerPushCallback("WebSocketDisconnect", this.sessionId, onDisconnect, this);
        this.signal.registerPushCallback('SessionResetPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvResetSession(seq, sessionId, data);
        });
        this.signal.registerPushCallback('StreamStatusNotifyPush', this.sessionId, function (seq, sessionId, data) {
            _this.gotStreamStatus = true;
            _this.streamStatus = data;
            _this.playStream && _this.onRecvStreamStatus(data);
        });
        this.signal.registerPushCallback('PlayEventPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvPlayEvent(seq, sessionId, data);
        });
        this.logger.info('zp.ops.1 ' + this.streamId + ' call success');
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // create offer result
    /*
     *    "zp.oco.1": "ZegoPlayWeb.onCreateOfferSuccess"
     */
    ZegoPlayWeb.prototype.onCreateOfferSuccess = function (desc) {
        //desc.sdp = SdpUtil.zegoSdp(desc.sdp);
        var _this = this;
        //this.logger.info ("zp.oco.1 localSdp ", desc.sdp);
        this.logger.info('zp.oco.1 ' + this.streamId + ' localSdp1 ' + desc.sdp.substr(0, desc.sdp.length / 2));
        this.logger.info('zp.oco.1 ' + this.streamId + ' localSdp2 ' + desc.sdp.substr(desc.sdp.length / 2));
        desc.sdp = desc.sdp.replace(/sendrecv/g, 'recvonly');
        desc.sdp = desc.sdp.replace(/useinbandfec=/, 'stereo=1;useinbandfec=');
        if (this.playOption.videoCodec) {
            desc.sdp = sdpUtil_1.SdpUtil.getSDPByVideDecodeType(desc.sdp, this.playOption.videoCodec);
        }
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'SetLocalDescription');
        this.dataReport.eventStart(this.streamReportSeq, 'SetLocalDescription');
        this.peerConnection.setLocalDescription(desc).then(function () {
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SetLocalDescription');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'SetLocalDescription');
            _this.onSetLocalDescriptionSuccess(desc);
        }, function (error) {
            _this.logger.error('zp.oca.1 ' + _this.streamId + ' set error ' + error.toString());
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SetLocalDescription', {
                error: error.toString(),
            });
            _this.dataReport.eventEnd(_this.streamReportSeq, 'SetLocalDescription', {
                error: error.toString(),
            });
            _this.playStateUpdateError(zego_error_1.playErrorList.SET_LOCAL_DESC_ERROR, true);
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // setLocalDescription result
    /*
     *    "zp.osd.1": "ZegoPlayWeb.onSetLocalDescriptionSuccess"
     */
    ZegoPlayWeb.prototype.onSetLocalDescriptionSuccess = function (desc) {
        var _this = this;
        this.logger.info('zp.osd.1 ' + this.streamId + ' success');
        var mediaDescription = {
            sdp: desc.sdp,
        };
        this.answerSeq = zego_extern_1.getSeq();
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'SendMediaDesc');
        this.dataReport.eventStart(this.streamReportSeq, 'SendMediaDesc');
        this.signal.sendMediaDesc(this.answerSeq, this.sessionId, 0, mediaDescription, function (seq, sessionId, data) {
            _this.logger.info('zp.osd.1 ' + _this.streamId + ' sendMediaDesc resp');
            if (_this.answerSeq != seq || _this.sessionId != sessionId) {
                _this.logger.error('zp.osd.1 ' + _this.streamId + ' seq or sessionId is not equal ' + _this.answerSeq + ' ' + seq, +' ' + _this.sessionId + ' ' + sessionId);
                return;
            }
            _this.logger.info('zp.osd.1 ' + _this.streamId + ' send success stateNego:waiterAnswer');
            _this.stateNego = zego_entity_1.ENUM_PLAY_STATE_NEGO.waiterAnswer;
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SendMediaDesc');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'SendMediaDesc');
            //setTimer
            _this.waitingOfferTimer = setTimeout(function () {
                if (_this.state == zego_entity_1.ENUM_PLAY_STATE.waitingOffserRsp) {
                    _this.logger.error('zp.osd.1 ' + _this.streamId + ' waiting timeout');
                    _this.playStateUpdateError(zego_error_1.playErrorList.SERVER_CANDIDATE_TIMEOUT);
                }
            }, _this.waitingOfferTimeInterval);
            _this.state = zego_entity_1.ENUM_PLAY_STATE.waitingServerAnswer;
        }, function (err, seq) {
            _this.logger.error('zp.osd.1 ' + _this.streamId + ' failed to send ' + err);
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SendMediaDesc', {
                error: err,
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'SendMediaDesc', {
                error: err,
            });
            _this.playStateUpdateError(zego_error_1.playErrorList.SEND_MEDIA_DESC_TIMEOUT);
        });
        this.state = zego_entity_1.ENUM_PLAY_STATE.waitingOffserRsp;
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push offer (setRemoteDescription)
    /*
     *    "zp.orm.1": "ZegoPlayWeb.onRecvMediaDesc"
     */
    ZegoPlayWeb.prototype.onRecvMediaDesc = function (seq, sessionId, data) {
        var _this = this;
        this.logger.info('zp.orm.1 ' + this.streamId + ' received ', data);
        this.stateNego = zego_entity_1.ENUM_PLAY_STATE_NEGO.waitingCandidate;
        this.logger.info('zp.orm.1 ' + this.streamId + ' received stateNego:waitingCandidate');
        if (this.state !== zego_entity_1.ENUM_PLAY_STATE.waitingServerAnswer) {
            this.logger.error('zp.orm.1 ' + this.streamId + ' current state ' + this.state + ' not allowed');
            return;
        }
        if (this.waitingOfferTimer != null) {
            clearTimeout(this.waitingOfferTimer);
            this.waitingOfferTimer = null;
        }
        this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'RecvMediaDesc');
        this.dataReport.addEvent(this.streamReportSeq, 'RecvMediaDesc');
        this.signal.sendMediaDescAck(seq, this.sessionId, 0);
        var offerDescription = {
            type: 'answer',
            sdp: data.sdp,
            toJSON: function () { },
        };
        //setRemoteDescritpion
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'SetRemoteDescription');
        this.dataReport.eventStart(this.streamReportSeq, 'SetRemoteDescription');
        this.logger.info('zp.orm.1 ' + this.streamId + ' remoteSdp ', offerDescription.sdp);
        this.peerConnection.setRemoteDescription(new RTCSessionDescription(offerDescription)).then(function () {
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SetRemoteDescription');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'SetRemoteDescription');
            _this.logger.info('zp.orm.1 ' + _this.streamId + ' set success');
        }, function (error) {
            _this.logger.error('zp.orm.1 ' + _this.streamId + ' set remote error ' + error.toString());
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SetRemoteDescription', {
                error: error.toString(),
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'SetRemoteDescription', {
                error: error.toString(),
            });
            _this.playStateUpdateError(zego_error_1.playErrorList.SET_REMOTE_DESC_ERROR);
        });
        //setTimer
        this.waitICETimer = setTimeout(function () {
            if (_this.state == zego_entity_1.ENUM_PLAY_STATE.waitingServerICE) {
                _this.logger.error('zp.orm.1 ' + _this.streamId + ' waiting server timeout');
                _this.playStateUpdateError(zego_error_1.playErrorList.SERVER_CANDIDATE_TIMEOUT);
            }
        }, this.waitingICETimeInterval);
        this.state = zego_entity_1.ENUM_PLAY_STATE.waitingServerICE;
        this.logger.info('zp.orm.1 ' + this.streamId + ' call success');
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push ICE (addIceCandidate)
    /*
     *    "zp.orci.1": "ZegoPlayWeb.onRecvCandidateInfo"
     */
    ZegoPlayWeb.prototype.onRecvCandidateInfo = function (seq, sessionId, data) {
        var _this = this;
        this.logger.info('zp.orci.1 ' + this.streamId + ' received ');
        if (this.state != zego_entity_1.ENUM_PLAY_STATE.waitingServerICE) {
            this.logger.warn('zp.orci.1 ' + this.streamId + ' current state ' + this.state + ' not allowed');
            return;
        }
        if (this.waitICETimer != null) {
            clearTimeout(this.waitICETimer);
            this.waitICETimer = null;
        }
        this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'RecvIceCandidate');
        this.dataReport.addEvent(this.streamReportSeq, 'RecvIceCandidate');
        this.signal.sendCandidateInfoAck(seq, this.sessionId, 0);
        //send candidate
        this.sendCandidateInfo(this.candidateInfo);
        this.candidateInfo = [];
        for (var i = 0; i < data.infos.length; i++) {
            var ice = {
                sdpMid: data.infos[i].sdpMid,
                sdpMLineIndex: data.infos[i].sdpMLineIndex,
                candidate: data.infos[i].candidate,
            };
            this.logger.info('zp.orci.1 ' + this.streamId + ' candidate ' + ice.candidate);
            this.peerConnection.addIceCandidate(new RTCIceCandidate(ice)).then(function () {
                _this.logger.debug('zp.orci.1 ' + _this.streamId + ' add success');
            }, function (error) {
                _this.logger.error('zp.orci.1 ' + _this.streamId + ' add error ' + error.toString());
                _this.playStateUpdateError(zego_error_1.playErrorList.SERVER_CANDIDATE_ERROR);
            });
        }
        this.state = zego_entity_1.ENUM_PLAY_STATE.connecting;
        this.logger.info('zp.orci.1 ' + this.streamId + ' call success');
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push playEvent
    /*
     *    "zp.orpe.1": "ZegoPlayWeb.onRecvPlayEvent"
     */
    ZegoPlayWeb.prototype.onRecvPlayEvent = function (seq, sessionId, data) {
        this.logger.info('zp.orpe.1 ' + this.streamId + ' received');
        if (this.playEvent === true && data.event == 0) {
            this.logger.info('zp.orpe.1 ' + this.streamId + ' retry: ' + this.streamId);
            var streamId = this.streamId;
            var playOption = this.playOption;
            this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 1);
            this.resetPlay();
            this.startPlay(streamId, this.getRomoteStreamSuc, playOption);
        }
        else {
            this.playEvent = true;
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // onIceCandidate callback
    /*
     *    "zp.oic.1": "ZegoPlayWeb.onIceCandidate"
     */
    ZegoPlayWeb.prototype.onIceCandidate = function (event) {
        this.logger.info('zp.oic.1 ' + this.streamId + ' called');
        //send candidate to other peer
        if (event.candidate == undefined) {
            return;
        }
        this.logger.debug('zp.oic.1 ' + this.streamId + ' candidate ' + event.candidate.candidate);
        if (this.state < zego_entity_1.ENUM_PLAY_STATE.connecting || this.state == zego_entity_1.ENUM_PLAY_STATE.stop) {
            //save candidate Info
            this.logger.debug('zp.oic.1 ' + this.streamId + ' cached');
            this.candidateInfo.push({
                candidate: event.candidate.candidate,
                sdpMid: event.candidate.sdpMid,
                sdpMLineIndex: event.candidate.sdpMLineIndex,
            });
        }
        else {
            this.logger.debug('zp.oic.1 ' + this.streamId + ' send');
            var candidate = {
                candidate: event.candidate.candidate,
                sdpMid: event.candidate.sdpMid,
                sdpMLineIndex: event.candidate.sdpMLineIndex,
            };
            this.sendCandidateInfo([candidate]);
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // onIceStateChange callback
    /*
     *    "zp.ocs.1": "ZegoPlayWeb.onConnectionStateChange"
     */
    ZegoPlayWeb.prototype.onConnectionStateChange = function (event) {
        this.logger.info('zp.oisc.1 ' + this.streamId + ' called ' + event.target.signalingState);
    };
    /*
     *    "zp.oics.1": "ZegoPlayWeb.onIceConnectionStateChange"
     */
    ZegoPlayWeb.prototype.onIceConnectionStateChange = function (event) {
        var _this = this;
        if (this.state == zego_entity_1.ENUM_PLAY_STATE.stop || this.peerConnection == null) {
            return;
        }
        this.logger.info('zp.oisc.1 ' + this.streamId + ' stateChanged ' + this.peerConnection.iceConnectionState);
        if (this.peerConnection.iceConnectionState === 'connected') {
            this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceConnected');
            this.dataReport.addEvent(this.streamReportSeq, 'IceConnected');
            if (this.state != zego_entity_1.ENUM_PLAY_STATE.playing) {
                this.onPlayStateUpdate(zego_extern_1.ENUM_PLAY_STATE_UPDATE.start, this.streamId, { code: 0, msg: '' });
            }
            this.state = zego_entity_1.ENUM_PLAY_STATE.playing;
            this.retrySeq = 0;
            if (this.retryState != zego_entity_1.ENUM_RETRY_STATE.didNotStart) {
                this.retryState = zego_entity_1.ENUM_RETRY_STATE.finished;
                this.currentRetryCount = 0;
            }
            //play started
            this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'PlayState');
            this.dataReport.eventStart(this.streamReportSeq, 'PlayState');
            //BroadcasterStatusNotify
            for (var i in this.streamCenter.publisherList) {
                var publisher = this.streamCenter.publisherList[i].publisher;
                if (publisher.state == zego_entity_1.ENUM_PUBLISH_STATE.publishing &&
                    this.broadcasterStatus == zego_entity_1.ENUM_BROADCASTER_STATUS.stop) {
                    this.signal && this.signal.sendBroadcasterStatus(zego_extern_1.getSeq(), this.sessionId, 1);
                    this.broadcasterStatus = zego_entity_1.ENUM_BROADCASTER_STATUS.start;
                    break;
                }
            }
            //start quality timeInterval
            this.setPlayQualityTimer();
            this.stateNego = zego_entity_1.ENUM_PLAY_STATE_NEGO.iceConnected;
            this.logger.info('zp.oisc.1 ' + this.streamId + ' stateNego:iceConnected');
            this.negoTryCount = 1;
            this.nextSignalTryCount = 1;
            this.waittingConnectedTimer && clearTimeout(this.waittingConnectedTimer);
            this.waittingConnectedTimer = null;
            if (this.negoTimer) {
                clearTimeout(this.negoTimer);
            }
        }
        else if (this.peerConnection.iceConnectionState === 'closed') {
            this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceClosed');
            this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState);
        }
        else if (this.peerConnection.iceConnectionState === 'failed') {
            this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceFailed');
            this.checkPlayConnectionFailedState(this.peerConnection.iceConnectionState);
        }
        else if (this.peerConnection.iceConnectionState === 'disconnected') {
            this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceDisconnected');
            this.waittingConnectedTimer = setTimeout(function () {
                !_this.tryingNexitSignal && _this.tryNextSignal(zego_error_1.playErrorList.MEDIA_CONNECTION_DISCONNECTED);
            }, this.waittingConnectedInerval);
        }
    };
    ZegoPlayWeb.prototype.checkPlayConnectionFailedState = function (connectionState) {
        var state = null;
        if (connectionState == 'failed') {
            state = zego_error_1.playErrorList.MEDIA_CONNECTION_FAILED;
        }
        else if (connectionState == 'closed') {
            state = zego_error_1.playErrorList.MEDIA_CONNECTION_CLOSED;
        }
        if (state == null) {
            return;
        }
        if (this.state != zego_entity_1.ENUM_PLAY_STATE.playing && this.retryState == zego_entity_1.ENUM_PLAY_STATE.didNotStart) {
            this.logger.info('zp.oics.1 ' + this.streamId + ' state ' +
                this.state +
                ' retryState ' +
                this.retryState +
                ' connectionState ' +
                connectionState);
            this.playStateUpdateError(state);
        }
        else {
            if (this.shouldRetryPlay()) {
                this.onPlayStateUpdate(zego_extern_1.ENUM_PLAY_STATE_UPDATE.retry, this.streamId, zego_error_1.playErrorList.MEDIA_CONNECTION_FAILED);
                this.startRetryPlay();
            }
            else {
                this.playStateUpdateError(state);
            }
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // retry play
    /*
     *    "zp.srp.1.0": "ZegoPlayWeb.shouldRetryPlay"
     */
    ZegoPlayWeb.prototype.shouldRetryPlay = function () {
        if (this.retryState == zego_entity_1.ENUM_RETRY_STATE.didNotStart && this.state != zego_entity_1.ENUM_PLAY_STATE.playing) {
            this.logger.info("zp.srp.1.0 " + this.streamId + " connection didn't success");
            return false;
        }
        if (this.retryState == zego_entity_1.ENUM_RETRY_STATE.retrying) {
            this.logger.info('zp.srp.0.0 ' + this.streamId + ' already retrying');
            return false;
        }
        if (this.currentRetryCount > this.maxRetryCount) {
            this.logger.info('zp.srp.1.0 ' + this.streamId + ' beyond max');
            return false;
        }
        this.logger.debug('zp.srp.1.0 ' + this.streamId + ' call success');
        return true;
    };
    /*
     *    "zp.srp.1": "ZegoPlayWeb.startRetryPlay"
     */
    ZegoPlayWeb.prototype.startRetryPlay = function () {
        this.logger.debug('zp.srp.0 ' + this.streamId + ' call');
        var streamId = this.streamId;
        this.resetPlay();
        this.tryStartPlay(streamId);
    };
    ZegoPlayWeb.prototype.clearTryPlayTimer = function () {
        if (this.waitingServerTimer != null) {
            clearTimeout(this.waitingServerTimer);
            this.waitingServerTimer = null;
        }
    };
    /*
     *    "zp.tsp.1": "ZegoPublish.tryStartPlay"
     */
    ZegoPlayWeb.prototype.tryStartPlay = function (streamId) {
        var _this = this;
        this.logger.debug('zp.tsp.1 ' + this.streamId + ' call');
        this.clearTryPlayTimer();
        this.streamId = streamId;
        if (this.currentRetryCount > this.maxRetryCount) {
            this.logger.error('zp.tsp.1 ' + this.streamId + ' beyond max limit');
            //callback error
            this.playStateUpdateError(zego_error_1.playErrorList.WEBSOCKET_ERROR);
            return;
        }
        this.retryState = zego_entity_1.ENUM_RETRY_STATE.retrying;
        this.currentRetryCount += 1;
        if (this.signal.isServerConnected()) {
            this.logger.debug('zp.tsp.1 ' + this.streamId + ' signal connected');
            this.startPlay(streamId, this.getRomoteStreamSuc, this.playOption);
        }
        else {
            //setTimer
            this.logger.debug('zp.tsp.1 ' + this.streamId + ' signal server not connected');
            this.waitingServerTimer = setTimeout(function () {
                _this.tryStartPlay(streamId);
            }, this.waitingServerTimerInterval);
        }
    };
    ZegoPlayWeb.prototype.clearPlayQualityTimer = function () {
        if (this.qualityTimer != null) {
            clearInterval(this.qualityTimer);
            this.qualityTimer = null;
        }
        this.lastPlayStats = {
            audioPacketsLost: 0,
            videoPacketsLost: 0,
            time: 0,
            audioTime: 0,
            videoTime: 0,
            audioBytesReceived: 0,
            videoBytesReceived: 0,
            videoPacketsReceived: 0,
            audioPacketsReceived: 0,
            framesDecoded: 0,
            framesDropped: 0,
            framesReceived: 0,
            audioBitrate: 0,
        };
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // reset function
    /*
     *    "zp.rp.1": "ZegoPlayWeb.resetPlay"
     */
    ZegoPlayWeb.prototype.resetPlay = function () {
        this.logger.info('zp.rp.1 ' + this.streamId + ' call');
        this.state = zego_entity_1.ENUM_PLAY_STATE.stop;
        this.playEvent = false;
        if (this.peerConnection != undefined) {
            this.peerConnection.close();
            this.peerConnection = null;
        }
        if (this.waitingOfferTimer != null) {
            clearTimeout(this.waitingOfferTimer);
            this.waitingOfferTimer = null;
        }
        if (this.waitICETimer != null) {
            clearTimeout(this.waitICETimer);
            this.waitICETimer = null;
        }
        if (this.negoTimer != null) {
            clearTimeout(this.negoTimer);
            this.negoTimer = null;
        }
        if (this.waittingConnectedTimer != null) {
            clearTimeout(this.waittingConnectedTimer);
            this.waittingConnectedTimer = null;
        }
        this.clearPlayQualityTimer();
        if (this.signal) {
            this.signal.unregisterPushCallback('MediaDescPush', this.sessionId);
            this.signal.unregisterPushCallback('CandidateInfoPush', this.sessionId);
            this.signal.unregisterPushCallback('CloseSessionPush', this.sessionId);
            // this.signal.unregisterPushCallback('WebSocketDisconnect', this.sessionId);
        }
        // this.sessionId = 0;
        this.sessionSeq = 0;
        this.answerSeq = 0;
        this.videoSizeCallback = false;
        this.currentRetryCount = 0;
        this.retryState = zego_entity_1.ENUM_RETRY_STATE.didNotStart;
        this.clearTryPlayTimer();
        this.stopSoundLevel();
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // quality timer
    /*
     *    "zp.spq.1": "ZegoPlayWeb.setPlayQualityTimer"
     */
    ZegoPlayWeb.prototype.setPlayQualityTimer = function () {
        var _this = this;
        if (this.qualityTimer != null) {
            return;
        }
        this.logger.info('zp.spq.1 ' + this.streamId + ' startTimer');
        this.clearPlayQualityTimer();
        var supportStatsCallback = true;
        this.peerConnection.getStats(function () { }).catch(function (err) {
            _this.logger.info('zp.spq.1 ' + _this.streamId + ' getStats callback not support');
            supportStatsCallback = false;
        });
        this.qualityTimer = setInterval(function () {
            if (_this.peerConnection) {
                // this.peerConnection.getStats(null).then(
                //     (results: any) => {
                //         this.getPlayStats(results);
                //     },
                //     (error: { toString: () => string }) => {
                //         this.logger.info('zp.spq.1 getStats error ' + error.toString());
                //     },
                // );
                var promiseList = [_this.peerConnection.getStats(null)];
                if (supportStatsCallback) {
                    promiseList.push(new Promise(function (resolve, reject) {
                        _this.peerConnection.getStats(function (results) { return resolve(results); }, function (err) { return reject(err); });
                    }));
                }
                Promise.all(promiseList).then(function (values) {
                    var stats = _this.getPlayStats(values[0], values[1]);
                }).catch(function (error) {
                    _this.logger.info('zp.spq.1 ' + _this.streamId + ' getStats error ' + error.toString());
                });
            }
        }, this.qualityTimeInterval);
        this.lastPlayStats = {
            audioPacketsLost: 0,
            videoPacketsLost: 0,
            time: new Date().getTime(),
            audioTime: 0,
            videoTime: 0,
            audioBytesReceived: 0,
            videoBytesReceived: 0,
            videoPacketsReceived: 0,
            audioPacketsReceived: 0,
            framesDecoded: 0,
            framesReceived: 0,
            framesDropped: 0,
            audioBitrate: 0,
        };
    };
    /*
     *    "zp.gps.1": "ZegoPlayWeb.getPlayStats"
     */
    ZegoPlayWeb.prototype.getPlayStats = function (results, callbackResults) {
        var _this = this;
        if (results == undefined) {
            return;
        }
        var medias = document.querySelectorAll('video, audio');
        var streamMedia;
        for (var i = 0; i < medias.length; i++) {
            if (medias[i].srcObject === this.playStream) {
                streamMedia = medias[i];
            }
        }
        var playData = {
            audioFractionLost: 0,
            audioPacketsLost: 0,
            audioPacketsLostRate: 0,
            audioBitrate: 0,
            audioLevel: 0,
            audioSendLevel: 0,
            audioSamplingRate: 0,
            audioCodec: 'opus',
            audioQuality: 0,
            videoQuality: 0,
            videoPacketsLost: 0,
            videoPacketsLostRate: 0,
            videoBitrate: 0,
            videoFPS: 0,
            playData: 0,
            nackCount: 0,
            pliCount: 0,
            //sliCount: 0,
            audioJitter: 0,
            videoFractionLost: 0,
            videoFramesDecoded: 0,
            frameHeight: 0,
            frameWidth: 0,
            videoTransferFPS: 0,
            videoFramesDropped: 0,
            totalRoundTripTime: 0,
            currentRoundTripTime: 0,
            googBandwidthLimitedResolution: undefined,
            videoCodecName: '',
            audioCodecName: '',
            googCpuLimitedResolution: undefined,
            googAvailableSendBandwidth: 0,
            audioMuteState: this.playStream && this.playStream.getAudioTracks().length > 0 ? this.playStream.getAudioTracks()[0].enabled ? '0' : '1' : '1',
            videoMuteState: this.playStream && this.playStream.getVideoTracks().length > 0 ? this.playStream.getVideoTracks()[0].enabled ? '0' : '1' : '1',
            muted: streamMedia ? streamMedia.muted : undefined,
            paused: streamMedia ? streamMedia.paused : undefined,
            volume: streamMedia ? streamMedia.volume : undefined,
            sinkId: streamMedia ? streamMedia.sinkId : undefined
        };
        var time = this.lastPlayStats.time;
        var rtt = 0;
        results.forEach(function (result) {
            if ((result.type == 'inbound-rtp' || (result.type == 'ssrc' && result.bytesReceived != undefined)) &&
                (result.mediaType == 'audio' || result.id.indexOf('AudioStream') >= 0)) {
                //audio
                //debugger
                if (time != 0) {
                    playData['audioBitrate'] =
                        (8 * (result.bytesReceived - _this.lastPlayStats['audioBytesReceived'])) /
                            (result.timestamp - time);
                }
                if (playData['audioBitrate'] < 0) {
                    playData['audioBitrate'] = 0;
                }
                playData.audioJitter = result.jitter;
                result.packetsLost > 0 && (playData.audioPacketsLost = result.packetsLost);
                playData.audioFractionLost = result.fractionLost;
                var timePacketsLost = result.packetsLost - _this.lastPlayStats.audioPacketsLost;
                if (timePacketsLost > 0) {
                    playData.audioPacketsLostRate =
                        timePacketsLost /
                            (result.packetsReceived - _this.lastPlayStats.audioPacketsReceived + timePacketsLost);
                }
                else {
                    playData.audioPacketsLostRate = 0;
                }
                _this.lastPlayStats.audioBytesReceived = result.bytesReceived;
                result.packetsLost > 0 && (_this.lastPlayStats.audioPacketsLost = result.packetsLost);
                _this.lastPlayStats.audioPacketsReceived = result.packetsReceived;
                _this.lastPlayStats.audioTime = result.timestamp;
                _this.lastPlayStats.time = result.timestamp;
                _this.lastPlayStats.audioBitrate = playData['audioBitrate'];
            }
            else if ((result.type == 'inbound-rtp' || (result.type == 'ssrc' && result.bytesReceived != undefined)) &&
                (result.mediaType == 'video' || result.id.indexOf('VideoStream') >= 0)) {
                //video
                if (time != 0) {
                    playData.videoBitrate =
                        (8 * (result.bytesReceived - _this.lastPlayStats.videoBytesReceived)) /
                            (result.timestamp - time);
                    playData.videoFPS =
                        (1000 * (result.framesDecoded - _this.lastPlayStats.framesDecoded)) / (result.timestamp - time);
                }
                if (playData.videoBitrate < 0) {
                    playData.videoBitrate = 0;
                }
                if (playData.videoFPS < 0) {
                    playData.videoFPS = 0;
                }
                //playData.jitter = result.jitter;
                playData.nackCount = result.nackCount;
                playData.pliCount = result.pliCount;
                //playData.sliCount = result.sliCount;
                playData.videoFractionLost = result.fractionLost;
                playData.videoFramesDecoded = result.framesDecoded;
                result.packetsLost > 0 && (playData.videoPacketsLost = result.packetsLost);
                var timePacketsLost = result.packetsLost - _this.lastPlayStats.videoPacketsLost;
                if (timePacketsLost > 0) {
                    playData.videoPacketsLostRate =
                        timePacketsLost /
                            (result.packetsReceived - _this.lastPlayStats.videoPacketsReceived + timePacketsLost);
                }
                else {
                    playData.videoPacketsLostRate = 0;
                }
                _this.lastPlayStats.videoBytesReceived = result.bytesReceived;
                _this.lastPlayStats.framesDecoded = result.framesDecoded;
                result.packetsLost > 0 && (_this.lastPlayStats.videoPacketsLost = result.packetsLost);
                _this.lastPlayStats.videoPacketsReceived = result.packetsReceived;
                _this.lastPlayStats.videoTime = result.timestamp;
                _this.lastPlayStats.time = result.timestamp;
            }
            else if (result.type == 'track' && (result.kind == 'video' || result.id.indexOf('video') >= 0) || result.frameWidth) {
                playData.frameHeight = result.frameHeight;
                playData.frameWidth = result.frameWidth;
                if (time != 0) {
                    playData.videoTransferFPS =
                        (1000 * (result.framesReceived - _this.lastPlayStats.framesReceived)) /
                            (result.timestamp - time);
                    playData.videoFramesDropped = result.framesDropped - _this.lastPlayStats.framesDropped;
                }
                if (playData.videoTransferFPS < 0) {
                    playData.videoTransferFPS = 0;
                }
                if (playData.videoFramesDropped < 0) {
                    playData.videoFramesDropped = 0;
                }
                _this.lastPlayStats.framesReceived = result.framesReceived;
                _this.lastPlayStats.framesDropped = result.framesDropped;
            }
            else if (result.type == 'track' && (result.kind == 'audio' || result.id.indexOf('audio') >= 0)) {
                playData.audioLevel = result.audioLevel;
                playData.audioSendLevel = result.totalAudioEnergy;
                playData.audioSamplingRate = result.totalSamplesDuration;
            }
            else if (result.type == 'candidate-pair') {
                if (result.totalRoundTripTime != undefined) {
                    playData.totalRoundTripTime = result.totalRoundTripTime;
                }
                if (result.currentRoundTripTime != undefined) {
                    playData.currentRoundTripTime = result.currentRoundTripTime;
                    rtt = playData.currentRoundTripTime * 1000;
                }
            }
        });
        callbackResults && callbackResults.result().forEach(function (result) {
            if (result.type == 'ssrc' && result.names().indexOf('googBandwidthLimitedResolution') >= 0) {
                playData.googBandwidthLimitedResolution = result.stat('googBandwidthLimitedResolution');
            }
            if (result.type == 'ssrc' && result.names().indexOf('codecImplementationName') >= 0) {
                playData.codecImplementationName = result.stat('codecImplementationName');
            }
            if (result.type == 'ssrc' && result.stat('mediaType') == 'video' && result.names().indexOf('googCodecName') >= 0) {
                playData.videoCodecName = result.stat('googCodecName');
            }
            if (result.type == 'ssrc' && result.stat('mediaType') == 'audio' && result.names().indexOf('googCodecName') >= 0) {
                playData.audioCodecName = result.stat('googCodecName');
            }
            if (result.type == 'ssrc' && result.names().indexOf('googCpuLimitedResolution') >= 0) {
                playData.googCpuLimitedResolution = result.stat('googCpuLimitedResolution');
            }
            if (result.type == 'VideoBwe' && result.names().indexOf('googAvailableSendBandwidth') >= 0) {
                playData.googAvailableSendBandwidth = result.stat('googAvailableSendBandwidth');
            }
        });
        playData.audioQuality = client_util_1.ClientUtil.getNetQuality(rtt, playData.audioPacketsLostRate);
        playData.videoQuality = client_util_1.ClientUtil.getNetQuality(rtt, playData.videoPacketsLostRate);
        // this.logger.debug("zp.gps.1 audio: " + playData.audioBitrate + " video: " + playData.videoBitrate +
        // " FPS: " + playData.videoFPS + " transfer: " + playData.videoTransferFPS);
        this.uploadPlayQuality(playData);
        var streamQuality = {
            video: {
                videoBitrate: playData.videoBitrate,
                videoFPS: playData.videoFPS,
                videoTransferFPS: playData.videoTransferFPS,
                videoFramesDecoded: playData.videoFramesDecoded,
                videoFramesDropped: playData.videoFramesDropped,
                videoPacketsLost: playData.videoPacketsLost,
                videoPacketsLostRate: playData.videoPacketsLostRate,
                videoQuality: playData.videoQuality,
                frameHeight: playData.frameHeight,
                frameWidth: playData.frameWidth,
                muteState: playData.videoMuteState,
            },
            audio: {
                audioBitrate: playData.audioBitrate,
                audioCodec: playData.audioCodec,
                audioJitter: playData.audioJitter,
                audioLevel: playData.audioLevel,
                audioPacketsLost: playData.audioPacketsLost,
                audioPacketsLostRate: playData.audioPacketsLostRate,
                audioQuality: playData.audioQuality,
                audioSamplingRate: playData.audioSamplingRate,
                audioSendLevel: playData.audioSendLevel,
                muteState: playData.audioMuteState,
            },
            //roomId: '',
            nackCount: playData.nackCount,
            pliCount: playData.pliCount,
            totalRoundTripTime: playData.totalRoundTripTime,
            playData: playData.playData,
            currentRoundTripTime: playData.currentRoundTripTime,
        };
        if (playData.muted !== undefined) {
            streamQuality.muted = playData.muted;
            streamQuality.paused = playData.paused;
            streamQuality.volume = playData.volume;
            streamQuality.sinkId = playData.sinkId;
        }
        if (playData.videoCodecName !== undefined) {
            // streamQuality.googBandwidthLimitedResolution = playData.googBandwidthLimitedResolution;
            streamQuality.video.googCodecName = playData.videoCodecName;
            streamQuality.audio.googCodecName = playData.audioCodecName;
            // streamQuality.googCpuLimitedResolution = playData.googCpuLimitedResolution;
            streamQuality.codecImplementationName = playData.codecImplementationName;
            streamQuality.googAvailableSendBandwidth = playData.googAvailableSendBandwidth;
        }
        if (time != 0) {
            this.onPlayQualityUpdate(this.streamId, streamQuality);
        }
    };
    /*
     *    "zp.upq.1": "ZegoPlayWeb.uploadPlayQuality"
     */
    ZegoPlayWeb.prototype.uploadPlayQuality = function (playData) {
        var _this = this;
        if (!this.qualityUpload) {
            return;
        }
        var timeStamp = Date.parse(new Date() + '');
        if (this.qualityUploadLastTime == 0 || timeStamp - this.qualityUploadLastTime >= this.qualityUploadInterval) {
            playData['stream_type'] = 'play';
            playData['stream_id'] = this.streamId;
            playData['timeStamp'] = timeStamp / 1000;
            this.logger.info('zp.upq.1 ' + this.streamId + ' upload' + JSON.stringify(playData));
            this.signal.QualityReport(zego_extern_1.getSeq(), this.sessionId, playData, function (seq, sessionId, data) {
                if (data.report !== undefined) {
                    _this.qualityUpload = data.report;
                    _this.qualityUploadInterval = data.report_interval_ms;
                }
            }, function (err, seq) {
                _this.logger.info('zp.upq.1 ' + _this.streamId + ' upload failed ' + err);
            });
            this.qualityUploadLastTime = timeStamp;
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push resetSession
    /*
     *    "zp.orrs.1": "ZegoPlayWeb.onRecvResetSession"
     */
    ZegoPlayWeb.prototype.onRecvResetSession = function (seq, sessionId, data) {
        this.logger.info('zp.orrs.1 ' + this.streamId + ' received ');
        if (sessionId != this.sessionId) {
            this.logger.info('zp.orrs.1 ' + this.streamId + ' cannot find session');
            return;
        }
        this.signal.sendCloseSessionAck(seq, this.sessionId, 0);
        var error = JSON.parse(JSON.stringify(zego_error_1.playErrorList.SESSION_CLOSED));
        // error.msg += data.reason;
        this.negoTimer && clearTimeout(this.negoTimer);
        //this.playStateUpdateError(error);
        !this.tryingNexitSignal && this.tryNextSignal(error);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push closeSession
    /*
     *    "zp.orcs.1": "ZegoPlayWeb.onRecvCloseSession"
     */
    ZegoPlayWeb.prototype.onRecvCloseSession = function (seq, sessionId, data) {
        this.logger.info('zp.orcs.1 ' + this.streamId + ' reason: ' + data.reason);
        this.signal.sendCloseSessionAck(seq, this.sessionId, 0);
        var error = JSON.parse(JSON.stringify(zego_error_1.playErrorList.SESSION_CLOSED));
        error.msg += data.reason;
        this.negoTimer && clearTimeout(this.negoTimer);
        //this.playStateUpdateError (error);
        // //重拉会导致原来的拉流卡顿，先让客户自己重试，sdk不帮忙重试了
        var reason = data.reason * 1;
        var action = data.err_info && JSON.parse(data.err_info).action ? JSON.parse(data.err_info).action : null;
        // 如果收到服务返回错误，清楚掉客户端超时重试逻辑；只调用错误码重试逻辑
        if ((typeof reason === 'number' && [24, 26, 28].includes(reason) && this.negoTryCount < this.negoTryMaxCount) ||
            action == 5) {
            this.logger.info('zp.orcs.1 ' + this.streamId + ' retry: ' + this.streamId);
            this.retrySeq = zego_extern_1.getReportSeq();
            this.dataReport.newReport(this.retrySeq, zego_logevent_1.eventList.kZegoTaskRePlay);
            this.dataReport.addMsgInfo(this.retrySeq, {
                reason: error
            });
            var streamId = this.streamId;
            var playOption = this.playOption;
            this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 1);
            this.onPlayStateUpdate(zego_extern_1.ENUM_PLAY_STATE_UPDATE.retry, this.streamId, { code: 0, msg: '' });
            this.resetPlay();
            this.startPlay(streamId, this.getRomoteStreamSuc, playOption);
            ++this.negoTryCount;
        }
        else if ([4, 8, 10, 11, 12, 27].includes(reason) || action == 2) {
            //重试下一个ip节点
            this.logger.info('zp.orcs.1 ' + this.streamId + ' try next signal ' + this.tryingNexitSignal);
            !this.tryingNexitSignal && this.tryNextSignal(error);
        }
        else {
            this.playStateUpdateError(error, true);
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push streamStatus
    /*
     *    "zp.orss.0": "ZegoPlayWeb.onRecvStreamStatus"
     */
    ZegoPlayWeb.prototype.onRecvStreamStatus = function (data) {
        this.logger.info('zp.orss.0 ' + this.streamId + ' call');
        this.cameraStatus !== data.camera_status &&
            this.onRemoteCameraStatusUpdate(this.streamId, this.getCameraMicStatus(data.camera_status));
        this.micStatus !== data.mic_status && this.onRemoteMicStatusUpdate(this.streamId, this.getCameraMicStatus(data.mic_status));
        this.cameraStatus = data.camera_status;
        this.micStatus = data.mic_status;
        // @ts-ignore
        if (typeof this.playOption.video === 'boolean' || typeof this.playOption.audio === 'boolean') {
            this.logger.info("zp.orss.0 " + this.streamId + " has set playType, ignore stream status");
            return;
        }
        var stream = this.playStream;
        data.camera_status !== 0 &&
            client_util_1.ClientUtil.getBrowser() !== 'Safari' &&
            stream.getVideoTracks().forEach(function (track) {
                setTimeout(function () {
                    track.enabled = false;
                    track.stop();
                    stream.removeTrack(track);
                }, 500);
            });
        data.camera_status == 0 &&
            client_util_1.ClientUtil.getBrowser() !== 'Safari' &&
            stream.getVideoTracks().length == 0 &&
            stream.addTrack(this.remoteStream.clone().getVideoTracks()[0]);
        this.logger.info('zp.orss.0 ' + this.streamId + ' call success');
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // onGotRemoteStream callback
    /*
     *    "zp.ogrs.1": "ZegoPlayWeb.onGotRemoteStream"
     */
    ZegoPlayWeb.prototype.onGotRemoteStream = function (stream) {
        var _this = this;
        this.logger.info('zp.ogrs.0 ' + this.streamId + ' called ' + stream);
        if (!stream) {
            this.logger.warn('zp.ogrs.0 ' + this.streamId + ' remote stream is empty');
            return;
        }
        if (!this.playStream) {
            this.playStream = stream.clone();
        }
        else {
            this.playStream.getTracks().forEach(function (track) { return _this.playStream.removeTrack(track); });
            stream
                .clone()
                .getTracks()
                .forEach(function (track) { return _this.playStream.addTrack(track); });
        }
        this.remoteStream = stream;
        this.getRomoteStreamSuc(this.playStream);
        this.gotStreamStatus && this.onRecvStreamStatus(this.streamStatus);
        this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'GetRemoteStream');
        this.streamCenter.soundLevelDelegate && this.startSoundLevel();
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // send candidate Info
    /*
     *    "zp.sci.1": "ZegoPlayWeb.sendCandidateInfo"
     */
    ZegoPlayWeb.prototype.sendCandidateInfo = function (candidateInfo) {
        var _this = this;
        this.logger.info('zp.sci.1 ' + this.streamId + ' called');
        candidateInfo = candidateInfo.filter(function (item) {
            if (item.candidate.indexOf('tcp') > 0) {
                return false;
            }
            else if (item.candidate) {
                return true;
            }
        });
        if (!candidateInfo || candidateInfo.length < 1) {
            this.logger.info('zp.sci.1 ' + this.streamId + ' cancelled');
            return;
        }
        // console.error(candidateInfo);
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'SendIceCandidate');
        this.dataReport.eventStart(this.streamReportSeq, 'SendIceCandidate');
        if (this.stateNego !== zego_entity_1.ENUM_PLAY_STATE_NEGO.iceConnected)
            this.stateNego = zego_entity_1.ENUM_PLAY_STATE_NEGO.sendCandidate;
        this.logger.info('zp.sci.1 ' + this.streamId + ' stateNego:sendCandidate');
        this.signal.sendCandidateInfo(zego_extern_1.getSeq(), this.sessionId, candidateInfo, function (seq, sessionId, data) {
            _this.logger.debug('zp.sci.1 ' + _this.streamId + ' send success');
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SendIceCandidate');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'SendIceCandidate');
        }, function (err, seq) {
            _this.logger.error('zp.sci.1 ' + _this.streamId + ' failed to send: ' + err.toString());
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SendIceCandidate', {
                error: err,
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'SendIceCandidate', {
                error: err,
            });
            _this.playStateUpdateError(zego_error_1.playErrorList.SEND_CANDIDATE_ERROR);
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // error function
    ZegoPlayWeb.prototype.shouldSendCloseSession = function (errorCode) {
        if (this.state != zego_extern_1.ENUM_PLAY_STATE_UPDATE.stop && this.state != zego_entity_1.ENUM_PLAY_STATE.waitingSessionRsp) {
            return true;
        }
        return false;
    };
    ZegoPlayWeb.prototype.playStateUpdateError = function (errorCode, isThrow) {
        this.logger.info('zp.psue.1 ' + this.streamId + ' called ', errorCode.code);
        if (!isThrow && (this.state === zego_entity_1.ENUM_PLAY_STATE.stop ||
            (this.negoTryCount < this.negoTryMaxCount && this.stateNego < zego_entity_1.ENUM_PLAY_STATE_NEGO.iceConnected))) {
            //already reset
            this.logger.info('zp.psue.1 ' + this.streamId + ' already reset');
            return;
        }
        if (this.sessionId != 0 && this.shouldSendCloseSession(errorCode)) {
            this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 1);
            this.closeSessionSignal = true;
        }
        this.state = zego_entity_1.ENUM_PLAY_STATE.stop;
        this.onPlayStateUpdate(zego_extern_1.ENUM_PLAY_STATE_UPDATE.error, this.streamId, errorCode);
        this.logger.info('zp.psue.1 ' + this.streamId + ' ended');
        this.resetPlay();
    };
    ZegoPlayWeb.prototype.getCameraMicStatus = function (status) {
        return status == 0 ? 'OPEN' : 'MUTE';
    };
    ZegoPlayWeb.prototype.onPlayStateUpdate = function (type, streamId, error) { };
    ZegoPlayWeb.prototype.onPlayQualityUpdate = function (streamID, quality) { };
    ZegoPlayWeb.prototype.onRemoteCameraStatusUpdate = function (streamID, status) { };
    ZegoPlayWeb.prototype.onRemoteMicStatusUpdate = function (streamID, status) { };
    /*
     *    "zp.sp.1.1": "ZegoPlayWeb.stopPlay"
     */
    ZegoPlayWeb.prototype.stopPlay = function () {
        this.logger.info('zp.sp.1.1 ' + this.streamId + ' called');
        //sendBroadcasterStatusNotify
        for (var i in this.streamCenter.publisherList) {
            var publisher = this.streamCenter.publisherList[i].publisher;
            if (publisher.state == zego_entity_1.ENUM_PUBLISH_STATE.publishing &&
                this.broadcasterStatus == zego_entity_1.ENUM_BROADCASTER_STATUS.start) {
                this.signal && this.signal.sendBroadcasterStatus(zego_extern_1.getSeq(), this.sessionId, 0);
                this.broadcasterStatus = zego_entity_1.ENUM_BROADCASTER_STATUS.stop;
                break;
            }
        }
        //send to server
        if (this.sessionId && !this.closeSessionSignal) {
            this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 0);
        }
        this.dataReport.eventEndWithMsg(this.streamReportSeq, 'PlayState', {
            'state': this.state + ''
        });
        this.dataReport.addEvent(this.streamReportSeq, 'StopPlay');
        this.dataReport.addMsgExt(this.streamReportSeq, {
            'stream': this.streamId,
            'sessionId': this.sessionId
        });
        this.dataReport.addMsgInfo(this.streamReportSeq, {
            itemtype: 'RTCPlayStream'
        });
        this.dataReport.uploadReport(this.streamReportSeq, 'RTCPlayStream');
        this.resetPlay();
    };
    /*
     *    "zp.od.1": "ZegoPlayWeb.onDisconnect"
     */
    ZegoPlayWeb.prototype.onDisconnect = function () {
        this.logger.info('zp.od.1 ' + this.streamId + ' call');
        // if (this.sessionId !== sessionId) {
        //     this.logger.info("zp.od.1 session is not same");
        //     return;
        // }
        this.logger.info('zp.od.1 ' + this.streamId + ' websocket disconnect');
        !this.tryingNexitSignal && this.tryNextSignal(zego_error_1.playErrorList.WEBSOCKET_ERROR);
    };
    ZegoPlayWeb.prototype.tryNextSignal = function (error) {
        this.tryingNexitSignal = true;
        var streamID = this.streamId;
        var server = this.signal.server;
        var checkPlay = this.streamCenter.playerList[streamID];
        var serverUrls = [];
        checkPlay && checkPlay.serverUrls && (serverUrls = checkPlay.serverUrls);
        //rePlay event start
        this.retrySeq = zego_extern_1.getReportSeq();
        this.streamCenter.stateCenter.reportSeqList.rePublish[streamID] = this.retrySeq;
        this.dataReport.newReport(this.retrySeq, zego_logevent_1.eventList.kZegoTaskRePlay);
        this.dataReport.addMsgInfo(this.retrySeq, {
            serverUrls: serverUrls,
            reason: error,
        });
        // 若已对节点列表轮询了三次，则不进行重试
        if (this.nextSignalTryCount > serverUrls.length * 3) {
            this.logger.error('zp.tns.1 ' + this.streamId + ' try max limit');
            this.playStateUpdateError(error, true);
        }
        else {
            this.onPlayStateUpdate(zego_extern_1.ENUM_PLAY_STATE_UPDATE.retry, this.streamId, { code: 0, msg: '' });
            serverUrls.forEach(function (val, ind) { return ind <= serverUrls.indexOf(server) && serverUrls.push(val); });
            serverUrls.splice(0, serverUrls.indexOf(server) + 1);
            this.logger.info('zp.tns.1 ' + this.streamId + ' try next signal ' + streamID);
            this.signal &&
                this.signal.state == zego_entity_1.ENUM_CONNECT_STATE.connected &&
                this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 1);
            this.signal && this.signal.removeSession(this.sessionId);
            this.resetPlay();
            this.streamCenter.connectPlayServer(streamID, this.getRomoteStreamSuc, true);
            this.nextSignalTryCount++;
        }
    };
    ZegoPlayWeb.prototype.startSoundLevel = function () {
        var _this = this;
        this.logger.info("zp.ssl.1 call streamID: " + this.streamId);
        if (!this.remoteStream || this.remoteStream.getAudioTracks().length == 0) {
            this.logger.info("zp.ssl.1 " + this.streamId + " remote stream no found");
            return;
        }
        this.script && this.script.disconnect() && (this.script = null);
        this.mic && this.mic.disconnect() && (this.mic = null);
        try {
            this.mic = this.ac.createMediaStreamSource(this.remoteStream);
            this.script = this.ac.createScriptProcessor(4096, 1, 1); //创建一个音频分析对象，采样的缓冲区大小为4096，输入和输出都是单声道
            this.mic.connect(this.script); //将该分析对象与麦克风音频进行连接
            this.script.connect(this.ac.destination);
            this.script.onaudioprocess = function (e) {
                //开始处理音频
                var buffer = e.inputBuffer.getChannelData(0); //获得缓冲区的输入音频，转换为包含了PCM通道数据的32位浮点数组
                //创建变量并迭代来获取最大的音量值
                var maxVal = 0;
                for (var i = 0; i < buffer.length; i++) {
                    if (maxVal < buffer[i]) {
                        maxVal = buffer[i];
                    }
                }
                _this.soundLevel = maxVal * 100;
            };
            this.ac.resume();
        }
        catch (err) {
            this.logger.error("zp.ssl.1 get sound level failed " + err);
        }
    };
    ZegoPlayWeb.prototype.stopSoundLevel = function () {
        this.logger.info("zp.ssl.1.1 call streamID: " + this.streamId);
        this.script && this.script.disconnect();
        this.mic && this.mic.disconnect();
        this.script = null;
        this.mic = null;
    };
    return ZegoPlayWeb;
}());
exports.ZegoPlayWeb = ZegoPlayWeb;


/***/ }),

/***/ "./sdk/webrtc/zego.preview.ts":
/*!************************************!*\
  !*** ./sdk/webrtc/zego.preview.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/common/zego.entity.ts");
var zego_error_1 = __webpack_require__(/*! ../common/zego.error */ "./sdk/common/zego.error.ts");
var zego_extern_1 = __webpack_require__(/*! ../common/zego.extern */ "./sdk/common/zego.extern.ts");
var ZegoPreview = /** @class */ (function () {
    function ZegoPreview(log) {
        var _this = this;
        this.log = log;
        this.localStream = null;
        this.videoInfo = {};
        this.previewSuc = false;
        /*
         *    "zp.em.2": "enableMicrophone"
         */
        this.enableMicrophone = function (enable, streamCenter) {
            if (!_this.localStream) {
                _this.logger.error('zp.em.2 no localStream');
                return false;
            }
            _this.localStream.getAudioTracks().forEach(function (track) {
                track.enabled = enable;
            });
            for (var i in streamCenter.publisherList) {
                var publisher = streamCenter.publisherList[i].publisher;
                publisher.localStream == _this.localStream &&
                    publisher.signal.sendStreamStatus(zego_extern_1.getSeq(), publisher.sessionId, _this.localStream.getVideoTracks()[0] && _this.localStream.getVideoTracks()[0].enabled === true
                        ? 0
                        : 2, enable ? 0 : 2);
            }
            _this.logger.debug('zp.em.2 call success');
            return true;
        };
        /*
         *    "zp.ec.2": "enableCamera"
         */
        this.enableCamera = function (enable, streamCenter) {
            if (!_this.localStream) {
                _this.logger.error('zp.ec.2 no localStream');
                return false;
            }
            _this.localStream.getVideoTracks().forEach(function (track) {
                track.enabled = enable;
            });
            for (var i in streamCenter.publisherList) {
                var publisher = streamCenter.publisherList[i].publisher;
                publisher.localStream == _this.localStream &&
                    publisher.signal.sendStreamStatus(zego_extern_1.getSeq(), publisher.sessionId, enable ? 0 : 2, _this.localStream.getAudioTracks()[0] && _this.localStream.getAudioTracks()[0].enabled == true
                        ? 0
                        : 2);
            }
            _this.logger.debug('zp.ec.2 call success');
            return true;
        };
        this.logger = log;
    }
    /*
     *    "zp.gmsc.2": "getMediaStreamConstraints"
     */
    ZegoPreview.prototype.getMediaStreamConstraints = function (mediaStreamConfig, force) {
        var mediaStreamConstraints = {
            audio: null,
            video: null,
        };
        mediaStreamConstraints['audio'] = true;
        mediaStreamConstraints['video'] = {
            width: 640,
            height: 480,
            frameRate: 15,
            bitRate: 800,
        };
        // console.log('mediaStreamConfig', mediaStreamConfig);
        //audio
        if (mediaStreamConfig.audio) {
            if (mediaStreamConfig.audioInput === undefined &&
                mediaStreamConfig.ANS === undefined &&
                mediaStreamConfig.AGC === undefined &&
                mediaStreamConfig.AEC === undefined &&
                mediaStreamConfig.channelCount === undefined) {
                mediaStreamConstraints.audio = {};
                mediaStreamConstraints.audio.noiseSuppression = true;
                mediaStreamConstraints.audio.autoGainControl = true;
                mediaStreamConstraints.audio.echoCancellation = true;
                mediaStreamConstraints.audio.channelCount = 1;
            }
            else {
                mediaStreamConstraints.audio = {};
                if (mediaStreamConfig.audioInput !== undefined && mediaStreamConfig.audioInput !== null)
                    mediaStreamConstraints.audio.deviceId = mediaStreamConfig.audioInput;
                if (mediaStreamConfig.ANS !== undefined)
                    mediaStreamConstraints.audio.noiseSuppression = mediaStreamConfig.ANS;
                if (mediaStreamConfig.AGC !== undefined)
                    mediaStreamConstraints.audio.autoGainControl = mediaStreamConfig.AGC;
                if (mediaStreamConfig.AEC !== undefined)
                    mediaStreamConstraints.audio.echoCancellation = mediaStreamConfig.AEC;
                if (mediaStreamConfig.channelCount !== undefined)
                    mediaStreamConstraints.audio.channelCount = mediaStreamConfig.channelCount;
            }
        }
        else if (mediaStreamConfig.audio === false) {
            mediaStreamConstraints.audio = false;
        }
        //video
        if (mediaStreamConfig.video) {
            var width = 640;
            var height = 480;
            var frameRate = 15;
            var bitRate = 800;
            //videoQuality
            //1 QVGA
            if (mediaStreamConfig.videoQuality === 1) {
                width = zego_entity_1.ENUM_RESOLUTION_TYPE.LOW.width;
                height = zego_entity_1.ENUM_RESOLUTION_TYPE.LOW.height;
                frameRate = zego_entity_1.ENUM_RESOLUTION_TYPE.LOW.frameRate;
                bitRate = zego_entity_1.ENUM_RESOLUTION_TYPE.LOW.bitRate;
            }
            //2 VGA
            else if (mediaStreamConfig.videoQuality === 2) {
                width = zego_entity_1.ENUM_RESOLUTION_TYPE.MEDIUM.width;
                height = zego_entity_1.ENUM_RESOLUTION_TYPE.MEDIUM.height;
                frameRate = zego_entity_1.ENUM_RESOLUTION_TYPE.MEDIUM.frameRate;
                bitRate = zego_entity_1.ENUM_RESOLUTION_TYPE.MEDIUM.bitRate;
            }
            //3 HD
            else if (mediaStreamConfig.videoQuality === 3) {
                width = zego_entity_1.ENUM_RESOLUTION_TYPE.HIGH.width;
                height = zego_entity_1.ENUM_RESOLUTION_TYPE.HIGH.height;
                frameRate = zego_entity_1.ENUM_RESOLUTION_TYPE.HIGH.frameRate;
                bitRate = zego_entity_1.ENUM_RESOLUTION_TYPE.HIGH.bitRate;
            }
            //custom
            else if (mediaStreamConfig.videoQuality === 4) {
                width = mediaStreamConfig.width;
                height = mediaStreamConfig.height;
                frameRate = mediaStreamConfig.frameRate;
                bitRate = mediaStreamConfig.bitRate || 800;
            }
            else {
                this.logger.info('zp.gmsc.2 use default');
            }
            if (force) {
                mediaStreamConfig.width && (width = mediaStreamConfig.width);
                mediaStreamConfig.height && (height = mediaStreamConfig.height);
                mediaStreamConfig.frameRate && (frameRate = mediaStreamConfig.frameRate);
                mediaStreamConfig.bitRate && (bitRate = mediaStreamConfig.bitRate);
            }
            //switch
            if (mediaStreamConfig.horizontal === false) {
                var temp = height;
                height = width;
                width = temp;
            }
            mediaStreamConstraints.video = {
                width: width,
                height: height,
                frameRate: frameRate,
                bitRate: bitRate,
            };
            //facingMode
            if (mediaStreamConfig.facingMode != undefined) {
                mediaStreamConstraints.video.facingMode = mediaStreamConfig.facingMode;
            }
            else if (mediaStreamConfig.videoInput != undefined && mediaStreamConfig.videoInput != null) {
                mediaStreamConstraints.video.deviceId = {
                    exact: mediaStreamConfig.videoInput,
                };
            }
            this.logger.info('zp.gmsc.2 width: ' + width + ' height: ' + height + ' rate: ' + frameRate);
        }
        else if (mediaStreamConfig.video === false) {
            mediaStreamConstraints.video = false;
        }
        return mediaStreamConstraints;
    };
    /*
     *    "zp.sv.2": "startPreview"
     */
    ZegoPreview.prototype.startPreview = function (mediaStreamConfig, successCallback, errorCallback) {
        var _this = this;
        this.logger.debug('zp.sv.2 called');
        this.mediaStreamConfig = mediaStreamConfig;
        if (navigator.mediaDevices === undefined || navigator.mediaDevices.getUserMedia == undefined) {
            if (errorCallback) {
                errorCallback(zego_error_1.publishErrorList.BROWSER_NOT_SUPPORT);
            }
            return;
        }
        //external media stream
        if (mediaStreamConfig.source instanceof MediaStream) {
            var videoTracks = mediaStreamConfig.source.getVideoTracks();
            var videoinfo = videoTracks.length > 0
                ? videoTracks[0].getSettings()
                : {
                    width: 0,
                    height: 0,
                    frameRate: 0,
                };
            this.logger.debug('zp.sv.2 use external media stream');
            this.previewSuc = true;
            this.localStream = mediaStreamConfig.source;
            this.videoInfo = {
                width: videoinfo.width,
                height: videoinfo.height,
                frameRate: videoinfo.frameRate,
                bitRate: mediaStreamConfig.bitRate || 0,
            };
            if (successCallback) {
                successCallback(this.localStream);
            }
            return;
        }
        else if (mediaStreamConfig.source instanceof HTMLMediaElement) {
            var result = this.captureStream(mediaStreamConfig.source);
            if (result) {
                this.videoInfo.bitRate = mediaStreamConfig.bitRate || 0;
                this.previewSuc = true;
                if (successCallback) {
                    successCallback(result);
                }
            }
            else {
                if (errorCallback) {
                    errorCallback(zego_error_1.publishErrorList.BROWSER_NOT_SUPPORT);
                }
            }
            return;
        }
        var mediaStreamConstraints = this.getMediaStreamConstraints(mediaStreamConfig);
        this.videoInfo = mediaStreamConstraints.video;
        this.mediaStreamConfig.video = mediaStreamConstraints.video ? true : false;
        this.mediaStreamConfig.audio = mediaStreamConstraints.audio ? true : false;
        this.logger.info('zp.sv.2 ', JSON.stringify(mediaStreamConstraints));
        navigator.mediaDevices.getUserMedia(mediaStreamConstraints).then(function (stream) {
            _this.logger.info('zp.sv.2 success');
            //this.localVideo.srcObject = stream;
            _this.localStream = stream;
            _this.previewSuc = true;
            if (successCallback) {
                successCallback(stream);
            }
        }, function (error) {
            _this.logger.info('zp.sv.2 failed ', error.name, ' ', error.message);
            if (errorCallback) {
                errorCallback(error);
            }
        });
    };
    /*
     *    "zp.cs.2": "captureStream"
     */
    ZegoPreview.prototype.captureStream = function (localVideo) {
        if (!localVideo) {
            this.logger.info('zp.cs.2 no local video');
            return null;
        }
        var stream;
        if (localVideo['captureStream']) {
            stream = localVideo['captureStream']();
            this.logger.debug('zp.cs.2 captureStream');
        }
        else if (localVideo['mozCaptureStream']) {
            stream = localVideo['mozCaptureStream']();
            this.logger.debug('zp.cs.2 mozCaptureStream');
        }
        else {
            this.logger.info("zp.cs.2 don't support");
            return null;
        }
        if (stream.getTracks().length == 0) {
            this.logger.error('zp.cs.2 external capture tracks no found');
            return null;
        }
        this.localStream = stream;
        this.videoInfo = {
            width: localVideo['videoWidth'],
            height: localVideo['videoHeight'],
            frameRate: 0,
            bitRate: 0,
        };
        this.logger.debug('zp.cs.2 called success');
        return this.localStream;
    };
    /*
     *    "zp.sv.2.1": "stopPreview"
     */
    ZegoPreview.prototype.stopPreview = function () {
        this.logger.info('zp.sv.2.1 called');
        if (!this.localStream) {
            return;
        }
        var tracks = this.localStream.getTracks();
        tracks.reverse();
        tracks.forEach(function (track) {
            track.stop();
        });
        this.localStream = null;
        this.videoInfo = {};
    };
    return ZegoPreview;
}());
exports.ZegoPreview = ZegoPreview;


/***/ }),

/***/ "./sdk/webrtc/zego.publish.ts":
/*!************************************!*\
  !*** ./sdk/webrtc/zego.publish.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/common/zego.entity.ts");
var zego_extern_1 = __webpack_require__(/*! ../common/zego.extern */ "./sdk/common/zego.extern.ts");
var zego_error_1 = __webpack_require__(/*! ../common/zego.error */ "./sdk/common/zego.error.ts");
// @ts-ignore
var adapter = __importStar(__webpack_require__(/*! ./adapter */ "./sdk/webrtc/adapter.js"));
var AudioMixUtil_1 = __webpack_require__(/*! ../util/AudioMixUtil */ "./sdk/util/AudioMixUtil.ts");
var sdpUtil_1 = __webpack_require__(/*! ../util/sdpUtil */ "./sdk/util/sdpUtil.ts");
var client_util_1 = __webpack_require__(/*! ../util/client-util */ "./sdk/util/client-util.ts");
var zego_logevent_1 = __webpack_require__(/*! ../common/zego.logevent */ "./sdk/common/zego.logevent.ts");
var ZegoPublish = /** @class */ (function () {
    function ZegoPublish(log, signal, dataReport, qualityTimeInterval, streamCenter, ac, mediaEleSources) {
        this.state = zego_entity_1.ENUM_PUBLISH_STATE.stop;
        this.sessionId = 0;
        // localVideo = null;
        // localStream = null;
        this.waitingICETimeInterval = 5000;
        this.waitingAnswerTimeInterval = 5000;
        this.candidateInfo = [];
        this.waitingICETimer = null;
        this.waitingAnswerTimer = null;
        this.qualityTimer = null;
        this.publishQualityList = [];
        this.maxQualityListCount = 10;
        this.lastPublishStats = {};
        this.reportSeq = zego_extern_1.getSeq();
        this.retrySeq = 0;
        this.streamReportSeq = zego_extern_1.getSeq();
        //quality signal
        this.qualityUpload = false;
        this.qualityUploadInterval = 30 * 1000;
        this.qualityUploadLastTime = 0;
        this.qualitySeq = 0;
        //retry
        this.maxRetryCount = 3;
        this.currentRetryCount = 0;
        this.retryState = zego_entity_1.ENUM_RETRY_STATE.didNotStart;
        this.waitingServerTimerInterval = 3 * 1000;
        this.waitingServerTimer = null;
        this.videoInfo = {
            width: 0,
            height: 0,
            frameRate: 0,
            bitRate: 0,
        };
        this.mediaStreamConfig = null;
        this.offerSeq = 0;
        this.audioMixList = [];
        this.arrayBufferMap = {};
        this.effectList = [];
        this.qualityCount = 0;
        this.closeSessionSignal = false;
        // playOption:PlayOption;
        this.audioBitRate = 48000;
        this.channelCount = 1;
        this.localSdpRevert = false;
        this.videoCodec = 'H264';
        this.stateNego = zego_entity_1.ENUM_PUBLISH_STATE_NEGO.stop;
        this.negoInterval = 25000;
        this.negoTryCount = 1;
        this.negoTryMaxCount = 2;
        this.publishEvent = false;
        this.nextSignalTryCount = 1;
        this.waittingConnectedTimer = null;
        this.waittingConnectedInerval = 15000;
        this.tryingNexitSignal = false;
        this.soundLevel = 0;
        this.script = null;
        this.cameraState = 'on';
        this.microState = 'on';
        this.logger = log;
        this.signal = signal;
        this.dataReport = dataReport;
        this.qualityTimeInterval = qualityTimeInterval;
        this.ac = ac;
        this.mediaEleSources = mediaEleSources;
        this.streamCenter = streamCenter;
        this.dataReport.newReport(this.streamReportSeq);
    }
    ZegoPublish.prototype.publishStateUpdateError = function (errorCode, isThrow) {
        this.logger.error('zp.psu.0 ' + this.streamId + ' call ' + JSON.stringify(errorCode));
        if (!isThrow && (this.state === zego_entity_1.ENUM_PUBLISH_STATE.stop ||
            (this.negoTryCount < this.negoTryMaxCount && this.stateNego < zego_entity_1.ENUM_PUBLISH_STATE_NEGO.iceConnected))) {
            //already reset
            this.logger.info('zp.psu.0 ' + this.streamId + ' already reset');
            return;
        }
        if (this.sessionId != 0 && this.shouldSendCloseSession(errorCode)) {
            //send close session request
            this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 1);
            this.closeSessionSignal = true;
        }
        this.state = zego_entity_1.ENUM_PUBLISH_STATE.stop;
        this.onPublishStateUpdate(zego_extern_1.ENUM_PUBLISH_STATE_UPDATE.error, this.streamId, errorCode);
        this.logger.info('zp.psu.0 ' + this.streamId + ' ended');
        this.resetPublish();
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // reset
    /*
     *    "zp.rp.0": "ZegoPublish.resetPublish"
     */
    ZegoPublish.prototype.resetPublish = function () {
        this.logger.info('zp.rp.0 ' + this.streamId + ' call');
        this.state = zego_entity_1.ENUM_PUBLISH_STATE.stop;
        this.publishEvent = false;
        if (this.peerConnection != undefined || this.peerConnection != null) {
            this.peerConnection.close();
            this.peerConnection = null;
        }
        if (this.waitingAnswerTimer != null) {
            clearTimeout(this.waitingAnswerTimer);
            this.waitingAnswerTimer = null;
        }
        if (this.waitingICETimer != null) {
            clearTimeout(this.waitingICETimer);
            this.waitingICETimer = null;
        }
        if (this.negoTimer != null) {
            clearTimeout(this.negoTimer);
            this.negoTimer = null;
        }
        if (this.waittingConnectedTimer != null) {
            clearTimeout(this.waittingConnectedTimer);
            this.waittingConnectedTimer = null;
        }
        this.clearPublishQualityTimer();
        if (this.signal) {
            this.signal.unregisterPushCallback('CandidateInfoPush', this.sessionId);
            this.signal.unregisterPushCallback('MediaDescPush', this.sessionId);
            this.signal.unregisterPushCallback('CloseSessionPush', this.sessionId);
            // this.signal.unregisterPushCallback('WebSocketDisconnect', this.sessionId);
        }
        // this.sessionId = 0;
        this.sessionSeq = 0;
        this.offerSeq = 0;
        this.candidateInfo = [];
        this.publishQualityList = [];
        this.qualityUploadLastTime = 0;
        this.currentRetryCount = 0;
        this.retryState = zego_entity_1.ENUM_RETRY_STATE.didNotStart;
        this.clearTryPublishTimer();
        this.stopSoundLevel();
    };
    ZegoPublish.prototype.clearTryPublishTimer = function () {
        if (this.waitingServerTimer != null) {
            clearTimeout(this.waitingServerTimer);
            this.waitingServerTimer = null;
        }
    };
    ZegoPublish.prototype.clearPublishQualityTimer = function () {
        if (this.qualityTimer != null) {
            clearInterval(this.qualityTimer);
            this.qualityTimer = null;
        }
        this.lastPublishStats = {};
        this.qualityCount = 0;
        //this.dataReport.uploadReport(this.qualitySeq, "RTCPublishQuality");
    };
    ZegoPublish.prototype.shouldSendCloseSession = function (errorCode) {
        if (this.state != zego_entity_1.ENUM_PUBLISH_STATE.stop && this.state != zego_entity_1.ENUM_PUBLISH_STATE.waitingSessionRsp) {
            return true;
        }
        return false;
    };
    /*
     *    "zp.sp.0": "ZegoPublish.startPublish"
     */
    ZegoPublish.prototype.startPublish = function (streamId, localStream, videoInfo, mediaStreamConfig, publishOption) {
        var _this = this;
        this.logger.info('zp.sp.0 ' + streamId + ' called');
        this.signal && this.signal.negoInterval && (this.negoInterval = this.signal.negoInterval);
        this.signal && this.signal.negoTryCount && (this.negoTryCount = this.signal.negoTryCount);
        this.signal && this.signal.negoTryMaxCount && (this.negoTryMaxCount = this.signal.negoTryMaxCount);
        if (!streamId) {
            this.logger.error('zp.sp.0 ' + streamId + ' streamId is null');
            return;
        }
        this.streamId = streamId;
        this.localStream = localStream;
        this.mediaStreamConfig = mediaStreamConfig;
        this.channelCount = mediaStreamConfig.channelCount;
        this.publishOption = publishOption || {};
        // firefox循环播放第三方视频时触发
        if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && mediaStreamConfig &&
            (mediaStreamConfig.externalCapture || mediaStreamConfig.externalMediaStream)) {
            this.localStream.onaddtrack = function () {
                _this.logger.info('zp.sp.0 ' + _this.streamId + ' Track added');
                var videoTracks = _this.localStream.getVideoTracks();
                var audioTracks = _this.localStream.getAudioTracks();
                if (videoTracks.length > 1) {
                    var sender = _this.peerConnection
                        .getSenders()
                        .find(function (s) { return s.track.kind === videoTracks[1].kind; });
                    sender.replaceTrack(videoTracks[1]);
                    _this.localStream.removeTrack(videoTracks[0]);
                }
                else if (audioTracks.length > 1) {
                    var sender = _this.peerConnection
                        .getSenders()
                        .find(function (s) { return s.track.kind === audioTracks[1].kind; });
                    sender.replaceTrack(audioTracks[1]);
                    _this.localStream.removeTrack(audioTracks[0]);
                }
            };
        }
        if (videoInfo) {
            this.videoInfo = videoInfo;
        }
        if (publishOption && publishOption.audioBitRate) {
            this.audioBitRate = publishOption.audioBitRate;
        }
        if (publishOption && publishOption.videoCodec) {
            this.videoCodec = publishOption.videoCodec;
        }
        //send to server
        this.sessionSeq = zego_extern_1.getSeq();
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'CreateSession');
        this.dataReport.eventStart(this.streamReportSeq, 'CreateSession');
        this.signal.createSession(this.sessionSeq, 0, 0, streamId, publishOption && publishOption.streamParams, function (seq, sessionId, data) {
            var turnServer = data.turn_server;
            var ip = turnServer.split('?')[0] && turnServer.split('?')[0].slice(5);
            var serverArr = _this.streamCenter.server.split('?');
            var app = serverArr[1] && serverArr[1].slice(2);
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'CreateSession', {
                sessionId: data.session_id,
                url: "webrtc://" + ip + "/" + app + "/" + _this.streamId
            });
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'CreateSession', {
                sessionId: data.session_id,
                url: "webrtc://" + ip + "/" + app + "/" + _this.streamId
            });
            _this.logger.info('zp.sp.0 ' + _this.streamId + ' sessionId:' + data.session_id);
            if (_this.sessionSeq != seq) {
                _this.logger.error('zp.sp.0 ' + _this.streamId + ' seq is not match.');
                return;
            }
            if (data.result !== 0) {
                _this.logger.error('zp.sp.0 ' + _this.streamId + ' create session failed ' + data.result);
                _this.publishStateUpdateError(zego_error_1.publishErrorList.CREATE_SESSION_ERROR);
            }
            else {
                _this.sessionId = data.session_id;
                _this.logger.info('zp.sp.0 ' + _this.streamId + ' create session success ' + _this.sessionId);
                _this.onCreatePublishSessionSuccess(data);
            }
        }, function (err, seq) {
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'CreateSession', {
                error: err,
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'CreateSession', {
                error: err,
            });
            _this.publishStateUpdateError(zego_error_1.publishErrorList.SEND_SESSION_TIMEOUT);
        });
        this.state = zego_entity_1.ENUM_PUBLISH_STATE.waitingSessionRsp;
        this.logger.info('zp.sp.0 ' + this.streamId + ' called success');
        this.stateNego = zego_entity_1.ENUM_PUBLISH_STATE_NEGO.start;
        // 下面的代码，在服务器没有返回任何错误码，且协商不成功时才会回调
        this.negoTimer = setTimeout(function () {
            if (_this.stateNego !== zego_entity_1.ENUM_PUBLISH_STATE_NEGO.iceConnected && _this.negoTryCount < _this.negoTryMaxCount) {
                _this.signal.sendCloseSession(zego_extern_1.getSeq(), _this.sessionId, 1);
                _this.resetPublish();
                _this.startPublish(streamId, localStream, videoInfo, mediaStreamConfig, publishOption);
                ++_this.negoTryCount;
            }
            else if (_this.stateNego !== zego_entity_1.ENUM_PUBLISH_STATE_NEGO.iceConnected &&
                _this.negoTryCount === _this.negoTryMaxCount) {
                _this.logger.error('zp.sp.0 ' + _this.streamId + ' waiting timeout');
                _this.publishStateUpdateError(zego_error_1.publishErrorList.SERVER_NEGO_TIMEOUT);
            }
        }, this.negoInterval);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // create session result
    /*
     *    "zp.ops.0": "ZegoPublish.onCreatePublishSessionSuccess"
     */
    ZegoPublish.prototype.onCreatePublishSessionSuccess = function (data) {
        var _this = this;
        //create offer
        this.logger.info('zp.ops.0 ' + this.streamId + ' called');
        // this.state = ENUM_PUBLISH_STATE.Start;
        var urls = [];
        if (data.turn_server)
            urls.push(data.turn_server);
        if (data.stun_server)
            urls.push(data.stun_server);
        var configuration = {
            iceTransportPolicy: 'relay',
            iceServers: [
                {
                    urls: urls,
                    username: data.turn_username,
                    credential: data.turn_auth_key,
                },
            ],
        };
        this.logger.info('zp.ops.0 ' + this.streamId + ' username: ' + data.turn_username);
        this.logger.info('zp.ops.0 ' + this.streamId + ' credential: ' + data.turn_auth_key);
        this.peerConnection = new RTCPeerConnection(configuration);
        this.peerConnection.onicecandidate = function (e) {
            _this.onIceCandidate(e);
        };
        this.peerConnection.onsignalingstatechange = function (e) {
            _this.onConnectionStateChange(e);
        };
        this.peerConnection.oniceconnectionstatechange = function (e) {
            _this.onIceConnectionStateChange(e);
        };
        var videoTracks = [];
        var audioTracks = [];
        if (this.localStream) {
            this.localStream.getTracks().forEach(function (track) {
                // if(track.kind === 'audio'){
                //         // @ts-ignore
                //         track.applyConstraints({noiseSuppression:{exact:true}})
                // }
                _this.peerConnection.addTrack(track, _this.localStream);
            });
            videoTracks = this.localStream.getVideoTracks();
            audioTracks = this.localStream.getAudioTracks();
            console.warn('getConstraints', audioTracks && audioTracks[0] && audioTracks[0].getConstraints && audioTracks[0].getConstraints());
            if (videoTracks.length > 0)
                this.logger.info('zp.ops.0 ' + this.streamId + ' video device: ' + videoTracks[0].label);
            if (audioTracks.length > 0)
                this.logger.info('zp.ops.0 ' + this.streamId + ' audio device: ' + audioTracks[0].label);
        }
        var offerOptions = {
            offerToReceiveAudio: audioTracks.length > 0 ? 1 : 0,
            offerToReceiveVideo: videoTracks.length > 0 ? 1 : 0,
        };
        this.logger.info('zp.ops.0 ' + this.streamId + ' createOffer: ' + JSON.stringify(offerOptions));
        //create offer
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'CreateOffer');
        this.dataReport.eventStart(this.streamReportSeq, 'CreateOffer');
        this.peerConnection.createOffer(offerOptions).then(function (desc) {
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'CreateOffer');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'CreateOffer');
            _this.onCreateOfferSuccess(desc);
        }, function (error) {
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'CreateOffer', {
                error: error.toString(),
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'CreateOffer', {
                error: error.toString(),
            });
            _this.logger.error('zp.ops.0 ' + _this.streamId + ' create offer error ' + error.toString());
            _this.publishStateUpdateError(zego_error_1.publishErrorList.CREATE_OFFER_ERROR, true);
        });
        //register callback
        this.signal.registerPushCallback('CandidateInfoPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvCandidateInfo(seq, sessionId, data);
        });
        this.signal.registerPushCallback('CloseSessionPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvCloseSession(seq, sessionId, data);
        });
        this.signal.registerPushCallback('MediaDescPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvMediaDescription(seq, sessionId, data);
        });
        // this.signal.registerPushCallback("WebSocketDisconnect", this.sessionId, onDisconnect, this);
        this.signal.registerPushCallback('SessionResetPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvResetSession(seq, sessionId, data);
        });
        this.signal.registerPushCallback('PublishEventPush', this.sessionId, function (seq, sessionId, data) {
            _this.onRecvPublishEvent(seq, sessionId, data);
        });
        this.logger.info('zp.ops.0 ' + this.streamId + ' call success');
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // create offer result
    /*
     *    "zp.oco.0": "ZegoPublish.onCreateOfferSuccess"
     */
    ZegoPublish.prototype.onCreateOfferSuccess = function (desc) {
        //this.logger.debug("zp.oco.0 success. before desc: " + desc.sdp);
        var _this = this;
        //change bandwidth
        if (this.videoInfo.bitRate != 0)
            desc.sdp = this.updateBandwidthRestriction(desc.sdp, this.videoInfo.bitRate);
        desc.sdp = desc.sdp.replace(/sendrecv/g, 'sendonly');
        // desc.sdp = desc.sdp.replace(/useinbandfec=\d+/, 'maxaveragebitrate=' + this.audioBitRate);
        // console.error('onCreateOfferSuccess', this.channelCount, typeof this.channelCount)
        desc.sdp = desc.sdp.replace(/useinbandfec=\d+/, 'maxaveragebitrate=' + this.audioBitRate + (this.channelCount === 2 ? ';stereo=1' : ''));
        // 部分浏览器 video和audio顺序是反过来的---这里做一下特殊处理
        if (/m=video[\s\S]*m=audio/.test(desc.sdp)) {
            this.localSdpRevert = true;
            //         console.log('befor localSdp:',desc.sdp);
            //         let [headerSdp,videoSdp,audioSdp]= [
            //                 /[\s\S]*m=video/.exec(desc.sdp)[0].replace('m=video',''),
            //                 /m=video[\s\S]*m=audio/.exec(desc.sdp)[0].replace('m=audio',''),
            //                 /m=audio[\s\S]*/.exec(desc.sdp)[0],
            //         ];
            //
            //         let mids = /a=group:BUNDLE\s+(\w+)\s+(\w+)/.exec(headerSdp);
            //
            //         headerSdp = headerSdp.replace(/a=group:BUNDLE\s+(\w+)\s+(\w+)/,'a=group:BUNDLE '+ mids[2]+' '+ mids[1]);
            //
            //         desc.sdp = headerSdp + audioSdp.replace('b=AS:800\r\n','') + videoSdp.replace('c=IN IP4 0.0.0.0','c=IN IP4 0.0.0.0\r\nb=AS:800');
            //         console.log('localSdp:',desc.sdp);
        }
        // desc.sdp = sdpUtil.zegoSdp(desc.sdp);
        desc.sdp = sdpUtil_1.SdpUtil.getSDPByVideDecodeType(desc.sdp, this.videoCodec);
        this.logger.info('zp.oco.0 ' + this.streamId + ' localSdp1 ' + desc.sdp.substr(0, desc.sdp.length / 2));
        this.logger.info('zp.oco.0 ' + this.streamId + ' localSdp2 ' + desc.sdp.substr(desc.sdp.length / 2));
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'SetLocalDescription');
        this.dataReport.eventStart(this.streamReportSeq, 'SetLocalDescription');
        this.peerConnection.setLocalDescription(desc).then(function () {
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SetLocalDescription');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'SetLocalDescription');
            _this.onSetLocalDescriptionSuccess(desc);
        }, function (error) {
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SetLocalDescription', {
                error: error.toString(),
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'SetLocalDescription', {
                error: error.toString(),
            });
            _this.logger.error('zp.oco.0 ' + _this.streamId + ' error ' + error.toString());
            _this.publishStateUpdateError(zego_error_1.publishErrorList.SET_LOCAL_DESC_ERROR, true);
        });
    };
    ZegoPublish.prototype.updateBandwidthRestriction = function (sdp, bandwidth) {
        var modifier = 'AS';
        if (adapter.browserDetails.browser === 'firefox') {
            bandwidth = (bandwidth >>> 0) * 1000;
            modifier = 'TIAS';
        }
        if (sdp.indexOf('b=' + modifier + ':') === -1) {
            // insert b= after c= line.
            sdp = sdp.replace(/c=IN (.*)\r\n/g, 'c=IN $1\r\nb=' + modifier + ':' + bandwidth + '\r\n');
            sdp = sdp.replace('b=' + modifier + ':' + bandwidth + '\r\n', '');
        }
        else {
            sdp = sdp.replace(new RegExp('b=' + modifier + ':.*\r\n', 'g'), 'b=' + modifier + ':' + bandwidth + '\r\n');
            sdp = sdp.replace('b=' + modifier + ':' + bandwidth + '\r\n', '');
        }
        return sdp;
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // setLocalDescription result
    /*
     *    "zp.osd.0": "ZegoPublish.onSetLocalDescriptionSuccess"
     */
    ZegoPublish.prototype.onSetLocalDescriptionSuccess = function (desc) {
        var _this = this;
        this.logger.info('zp.osd.0 ' + this.streamId + ' success');
        //send offer to other peer
        var mediaDescription = {
            sdp: desc.sdp,
            width: this.videoInfo.width,
            height: this.videoInfo.height,
            frameRate: this.videoInfo.frameRate,
            video_min_kpbs: this.videoInfo.bitRate,
            video_max_kpbs: this.videoInfo.bitRate,
            audio_kpbs: 48,
            keyframe_intv: 2,
        };
        this.offerSeq = zego_extern_1.getSeq();
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'SendMediaDesc');
        this.dataReport.eventStart(this.streamReportSeq, 'SendMediaDesc');
        this.signal.sendMediaDesc(this.offerSeq, this.sessionId, 0, mediaDescription, function (seq, sessionId, data) {
            if (_this.offerSeq != seq || _this.sessionId != sessionId) {
                _this.logger.error('zp.osd.0 ' + _this.streamId + ' seq or sessionId is not equal');
                return;
            }
            _this.logger.info('zp.osd.0 ' + _this.streamId + ' send success');
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SendMediaDesc', {
                mediaDescription: {
                    width: mediaDescription.width,
                    height: mediaDescription.height,
                    frameRate: mediaDescription.frameRate,
                    video_min_kpbs: mediaDescription.video_min_kpbs,
                    video_max_kpbs: mediaDescription.video_max_kpbs,
                    audio_kpbs: mediaDescription.audio_kpbs,
                    keyframe_intv: mediaDescription.keyframe_intv,
                }
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'SendMediaDesc', {
                mediaDescription: {
                    width: mediaDescription.width,
                    height: mediaDescription.height,
                    frameRate: mediaDescription.frameRate,
                    video_min_kpbs: mediaDescription.video_min_kpbs,
                    video_max_kpbs: mediaDescription.video_max_kpbs,
                    audio_kpbs: mediaDescription.audio_kpbs,
                    keyframe_intv: mediaDescription.keyframe_intv,
                }
            });
            //set timer for waiting
            _this.waitingAnswerTimer = setTimeout(function () {
                if (_this.state == zego_entity_1.ENUM_PUBLISH_STATE.waitingServerAnswer) {
                    _this.logger.error('zp.osd.0 ' + _this.streamId + ' waiting timeout');
                    _this.publishStateUpdateError(zego_error_1.publishErrorList.SERVER_MEDIA_DESC_TIMEOUT);
                }
            }, _this.waitingAnswerTimeInterval);
            _this.logger.info('zp.osd.0 ' + _this.streamId + ' send success stateNego:waiterAnswer');
            _this.stateNego = zego_entity_1.ENUM_PUBLISH_STATE_NEGO.waiterAnswer;
            _this.state = zego_entity_1.ENUM_PUBLISH_STATE.waitingServerAnswer;
        }, function (err, seq) {
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SendMediaDesc', {
                error: err,
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'SendMediaDesc', {
                error: err,
            });
            _this.publishStateUpdateError(zego_error_1.publishErrorList.SEND_MEDIA_DESC_TIMEOUT);
        });
        this.state = zego_entity_1.ENUM_PUBLISH_STATE.waitingOffserRsp;
        this.logger.info('zp.osd.0 ' + this.streamId + ' call success');
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push SDP (setRemoteDesription)
    /*
     *    "zp.ormd.0": "ZegoPublish.onRecvMediaDescription"
     */
    ZegoPublish.prototype.onRecvMediaDescription = function (seq, sessionId, data) {
        this.logger.info('zp.ormd.0 ' + this.streamId + ' received');
        if (this.state != zego_entity_1.ENUM_PUBLISH_STATE.waitingServerAnswer) {
            this.logger.info('zp.ormd.0 ' + this.streamId + ' current state ' + this.state + ' not allowed');
            return;
        }
        this.stateNego = zego_entity_1.ENUM_PUBLISH_STATE_NEGO.waitingCandidate;
        this.logger.info('zp.orm.0 ' + this.streamId + ' received stateNego:waitingCandidate');
        //clear timer
        if (this.waitingAnswerTimer != null) {
            clearTimeout(this.waitingAnswerTimer);
            this.waitingAnswerTimer = null;
        }
        this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'RecvMediaDesc');
        this.dataReport.addEvent(this.streamReportSeq, 'RecvMediaDesc');
        this.signal.sendMediaDescAck(seq, this.sessionId, 0);
        //not answer
        if (data.type == 1) {
            //临时修改
            //console.warn( 'profile-level-id before',data.sdp);
            // data.sdp = data.sdp.replace(/profile-level-id=.*/,'profile-level-id=640032');
            // console.warn( 'profile-level-id after',data.sdp);
            this.onGetRemoteOfferSucceses(data.sdp);
        }
        else {
            //server send error
            this.publishStateUpdateError(zego_error_1.publishErrorList.SERVER_MEDIA_DESC_ERROR);
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push offer (setRemoteDescription)
    /*
     *    "zp.oro.0": "ZegoPublish.onGetRemoteOfferSucceses"
     */
    ZegoPublish.prototype.onGetRemoteOfferSucceses = function (desc) {
        var _this = this;
        if (this.audioBitRate !== 48000) {
            desc = desc.replace(/maxaveragebitrate=(\d+)/, 'maxaveragebitrate=' + this.audioBitRate);
        }
        // 部分浏览器 video和audio顺序是反过来的---这里做一下特殊处理  safari-macos-choui's
        if (this.localSdpRevert) {
            //console.log('befor remotelocalSdp:',desc);
            // eslint-disable-next-line prefer-const
            var _a = [
                /[\s\S]*m=audio/.exec(desc)[0].replace('m=audio', ''),
                /m=video[\s\S]*/.exec(desc)[0],
                /m=audio[\s\S]*m=video/.exec(desc)[0].replace('m=video', ''),
            ], headerSdp = _a[0], videoSdp = _a[1], audioSdp = _a[2];
            var mids = /a=group:BUNDLE\s+(\w+)\s+(\w+)/.exec(headerSdp);
            headerSdp = headerSdp.replace(/a=group:BUNDLE\s+(\w+)\s+(\w+)/, 'a=group:BUNDLE ' + mids[2] + ' ' + mids[1]);
            desc = headerSdp + videoSdp + audioSdp;
            //console.log('localSdp:',desc);
        }
        this.logger.info('zp.oro.0 ' + this.streamId + ' remoteSdp:', desc);
        var answerDescription = {
            type: 'answer',
            sdp: desc,
            toJSON: function () { },
        };
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'SetRemoteDescription');
        this.dataReport.eventStart(this.streamReportSeq, 'SetRemoteDescription');
        this.peerConnection.setRemoteDescription(new RTCSessionDescription(answerDescription)).then(function () {
            _this.logger.info('zp.oro.0 ' + _this.streamId + ' set success');
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SetRemoteDescription');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'SetRemoteDescription');
        }, function (error) {
            _this.logger.error('zp.oro.0 ' + _this.streamId + ' failed: ' + error.toString());
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SetRemoteDescription', {
                error: error.toString(),
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'SetRemoteDescription', {
                error: error.toString(),
            });
            _this.publishStateUpdateError(zego_error_1.publishErrorList.SET_REMOTE_DESC_ERROR);
        });
        this.state = zego_entity_1.ENUM_PUBLISH_STATE.waitingServerICE;
        //setTimer
        this.waitingICETimer = setTimeout(function () {
            if (_this.state == zego_entity_1.ENUM_PUBLISH_STATE.waitingServerICE) {
                _this.logger.error('zp.orod.0 ' + _this.streamId + ' waiting server timeout');
                _this.publishStateUpdateError(zego_error_1.publishErrorList.SERVER_CANDIDATE_TIMEOUT);
            }
        }, this.waitingICETimeInterval);
        this.logger.debug('zp.oro.0 ' + this.streamId + ' call success');
    };
    /*
     *    "zp.oics.0": "ZegoPublish.onIceConnectionStateChange"
     */
    ZegoPublish.prototype.onIceConnectionStateChange = function (event) {
        var _this = this;
        if (this.state == zego_entity_1.ENUM_PUBLISH_STATE.stop || this.peerConnection == null) {
            return;
        }
        this.logger.info('zp.oics.0 ' + this.streamId + ' stateChanged ' + this.peerConnection.iceConnectionState);
        if (this.peerConnection.iceConnectionState === 'connected') {
            this.logger.info('zp.oics.0 ' + this.streamId + ' connected state ' + this.state);
            this.dataReport.eventEnd(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceConnected');
            this.dataReport.eventEnd(this.streamReportSeq, 'IceConnected');
            this.stateNego = zego_entity_1.ENUM_PUBLISH_STATE_NEGO.iceConnected;
            this.waittingConnectedTimer && clearTimeout(this.waittingConnectedTimer);
            this.waittingConnectedTimer = null;
            this.logger.info('zp.oisc.0 ' + this.streamId + ' stateNego:iceConnected');
            this.negoTryCount = 1;
            this.nextSignalTryCount = 1;
            if (this.negoTimer) {
                clearTimeout(this.negoTimer);
                this.negoTimer = null;
            }
            if (this.publishEvent) {
                this.publishSuccess();
            }
            else {
                this.firstGetStatsTimer && clearTimeout(this.firstGetStatsTimer);
                this.firstGetStatsTimer = null;
                this.firstGetStatsTimer = setTimeout(function () {
                    _this.logger.info('zp.oisc.0 get first stats state ' + _this.state);
                    if (_this.state !== zego_entity_1.ENUM_PUBLISH_STATE.publishing) {
                        _this.peerConnection.getStats().then(function (results) {
                            _this.logger.info('zp.oisc.0 get first stats suc');
                            if (results.size > 0)
                                _this.publishSuccess();
                        });
                    }
                }, 1000);
            }
        }
        else if (this.peerConnection.iceConnectionState === 'closed') {
            this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceClosed');
            this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState);
        }
        else if (this.peerConnection.iceConnectionState === 'failed') {
            this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceFailed');
            this.checkPublishConnectionFailedState(this.peerConnection.iceConnectionState);
        }
        else if (this.peerConnection.iceConnectionState === 'disconnected') {
            this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceDisconnected');
            this.waittingConnectedTimer = setTimeout(function () {
                !_this.tryingNexitSignal && _this.tryNextSignal(zego_error_1.publishErrorList.MEDIA_CONNECTION_DISCONNECTED);
            }, this.waittingConnectedInerval);
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // onIceCandidate callback
    /*
     *    "zp.oic.0": "ZegoPublish.onIceCandidate"
     */
    ZegoPublish.prototype.onIceCandidate = function (event) {
        this.logger.info('zp.oic.0 ' + this.streamId + ' candidate' + event.candidate);
        if (!event.candidate) {
            return;
        }
        this.logger.info('zp.oic.0 ' + this.streamId + ' candidate' + event.candidate.candidate);
        if (this.state < zego_entity_1.ENUM_PUBLISH_STATE.connecting || this.state == zego_entity_1.ENUM_PUBLISH_STATE.stop) {
            //save candidate Info
            this.candidateInfo.push({
                candidate: event.candidate.candidate,
                sdpMid: event.candidate.sdpMid,
                sdpMLineIndex: event.candidate.sdpMLineIndex,
            });
        }
        else {
            var candidate = {
                candidate: event.candidate.candidate,
                sdpMid: event.candidate.sdpMid,
                sdpMLineIndex: event.candidate.sdpMLineIndex,
            };
            this.sendCandidateInfo([candidate]);
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // send candidate Info
    /*
     *    "zp.sci.0": "ZegoPublish.sendCandidateInfo"
     */
    ZegoPublish.prototype.sendCandidateInfo = function (candidateInfo) {
        var _this = this;
        this.logger.info('zp.sci.0 ' + this.streamId + ' called');
        candidateInfo = candidateInfo.filter(function (item) {
            if (item.candidate.indexOf('relay') > 0) {
                return true;
            }
            return false;
        });
        if (!candidateInfo || candidateInfo.length < 1) {
            this.logger.info('zp.sci.0 ' + this.streamId + ' cancelled');
            return;
        }
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'SendIceCandidate');
        this.dataReport.eventStart(this.streamReportSeq, 'SendIceCandidate');
        if (this.stateNego !== zego_entity_1.ENUM_PUBLISH_STATE_NEGO.iceConnected)
            this.stateNego = zego_entity_1.ENUM_PUBLISH_STATE_NEGO.sendCandidate;
        this.logger.info('zp.sci.0 ' + this.streamId + ' stateNego:sendCandidate');
        this.signal.sendCandidateInfo(zego_extern_1.getSeq(), this.sessionId, candidateInfo, function (seq, sessionId, data) {
            _this.logger.info('zp.sci.0 ' + _this.streamId + ' send success');
            _this.dataReport.eventEnd(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SendIceCandidate');
            _this.dataReport.eventEnd(_this.streamReportSeq, 'SendIceCandidate');
        }, function (err, seq) {
            _this.logger.error('zp.sci.0 ' + _this.streamId + ' failed to send: ' + err.toString());
            _this.dataReport.eventEndWithMsg(_this.retrySeq == 0 ? _this.reportSeq : _this.retrySeq, 'SendIceCandidate', {
                error: err,
            });
            _this.dataReport.eventEndWithMsg(_this.streamReportSeq, 'SendIceCandidate', {
                error: err,
            });
            _this.publishStateUpdateError(zego_error_1.publishErrorList.SEND_CANDIDATE_TIMEOUT);
        });
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // onIceStateChange callback
    /*
     *    "zp.ocs.0": "ZegoPublish.onConnectionStateChange"
     */
    ZegoPublish.prototype.onConnectionStateChange = function (event) {
        this.logger.info('zp.ocs.0 ' + this.streamId + ' called ' + event.target.signalingState);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push ICE (addICECandidate)
    /*
     *    "zp.oci.0": "ZegoPublish.onRecvCandidateInfo"
     */
    ZegoPublish.prototype.onRecvCandidateInfo = function (seq, sessionId, data) {
        var _this = this;
        this.logger.info('zp.oci.0 ' + this.streamId + ' received ' + JSON.stringify(data.infos));
        if (this.state != zego_entity_1.ENUM_PUBLISH_STATE.waitingServerICE) {
            this.logger.info('zp.oci.0 ' + this.streamId + ' current state ' + this.state + ' not allowed');
            return;
        }
        if (this.waitingICETimer != null) {
            clearTimeout(this.waitingICETimer);
            this.waitingICETimer = null;
        }
        this.dataReport.addEvent(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'RecvIceCandidate');
        this.dataReport.addEvent(this.streamReportSeq, 'RecvIceCandidate');
        this.signal.sendCandidateInfoAck(seq, this.sessionId, 0);
        this.sendCandidateInfo(this.candidateInfo);
        this.candidateInfo = [];
        for (var i = 0; i < data.infos.length; i++) {
            var ice = {
                sdpMid: data.infos[i].sdpMid,
                sdpMLineIndex: data.infos[i].sdpMLineIndex,
                candidate: data.infos[i].candidate,
            };
            this.logger.debug('zp.orci.0 ' + this.streamId + ' candidate ' + ice.candidate);
            this.peerConnection.addIceCandidate(new RTCIceCandidate(ice)).then(function () {
                _this.logger.info('zp.oci.0 ' + _this.streamId + ' add success');
            }, function (error) {
                _this.logger.error('zp.oci.0 ' + _this.streamId + ' add error ' + error.toString());
                _this.publishStateUpdateError(zego_error_1.publishErrorList.SERVER_CANDIDATE_ERROR);
            });
        }
        this.state = zego_entity_1.ENUM_PUBLISH_STATE.connecting;
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'IceConnected');
        this.dataReport.eventStart(this.streamReportSeq, 'IceConnected');
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push closeSession
    /*
     *    "zp.orcs.0": "ZegoPublish.onRecvCloseSession"
     */
    ZegoPublish.prototype.onRecvCloseSession = function (seq, sessionId, data) {
        this.logger.info('zp.orcs.0 ' + this.streamId + ' reason: ' + data.reason);
        this.signal.sendCloseSessionAck(seq, this.sessionId, 0);
        var error = JSON.parse(JSON.stringify(zego_error_1.publishErrorList.SESSION_CLOSED));
        error.msg += data.reason;
        this.negoTimer && clearTimeout(this.negoTimer);
        //this.publishStateUpdateError (error);
        //重推会导致原来的拉流卡顿，先让客户自己重试，sdk不帮忙重试了
        var reason = data.reason * 1;
        var action = data.err_info && JSON.parse(data.err_info).action ? JSON.parse(data.err_info).action : null;
        // 如果收到服务返回错误，清楚掉客户端超时重试逻辑；只调用错误码重试逻辑
        if ((typeof reason === 'number' && [26].includes(reason) && this.negoTryCount < this.negoTryMaxCount) ||
            action == 5) {
            this.logger.info('zp.orcs.0 ' + this.streamId + ' retry: ' + this.streamId);
            this.retrySeq = zego_extern_1.getReportSeq();
            this.dataReport.newReport(this.retrySeq, zego_logevent_1.eventList.kZegoTaskRePublish);
            this.dataReport.addMsgInfo(this.retrySeq, {
                reason: error
            });
            var streamId = this.streamId;
            var localStream = this.localStream;
            var videoInfo = this.videoInfo;
            var mediaStreamConfig = this.mediaStreamConfig;
            var playOption = this.publishOption;
            this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 1);
            this.onPublishStateUpdate(zego_extern_1.ENUM_PUBLISH_STATE_UPDATE.retry, this.streamId, { code: 0, msg: '' });
            this.resetPublish();
            this.startPublish(streamId, localStream, videoInfo, mediaStreamConfig, playOption);
            ++this.negoTryCount;
        }
        else if ([4, 8, 10, 11, 12, 27].includes(reason) || action == 2) {
            //重试下一个ip节点
            this.logger.info('zp.orcs.0 ' + this.streamId + ' try next signal ' + this.tryingNexitSignal);
            !this.tryingNexitSignal && this.tryNextSignal(error);
        }
        else {
            this.publishStateUpdateError(error, true);
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push resetSession
    /*
     *    "zp.orrs.0": "ZegoPublish.onRecvResetSession"
     */
    ZegoPublish.prototype.onRecvResetSession = function (seq, sessionId, data) {
        this.logger.info('zp.orrs.0 ' + this.streamId + ' received ');
        if (sessionId != this.sessionId) {
            this.logger.error('zp.orrs.0 ' + this.streamId + ' cannot find session');
            return;
        }
        this.signal.sendCloseSessionAck(seq, this.sessionId, 0);
        var error = JSON.parse(JSON.stringify(zego_error_1.publishErrorList.SESSION_CLOSED));
        // error.msg += data.reason;
        this.negoTimer && clearTimeout(this.negoTimer);
        //this.publishStateUpdateError(error);
        !this.tryingNexitSignal && this.tryNextSignal(error);
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // server push publishEvent
    /*
     *    "zp.orpe.0": "ZegoPublish.onRecvPublishEvent"
     */
    ZegoPublish.prototype.onRecvPublishEvent = function (seq, sessionId, data) {
        this.logger.info('zp.orpe.0 ' + this.streamId + ' received');
        this.publishEvent = true;
        if (this.firstGetStatsTimer) {
            clearTimeout(this.firstGetStatsTimer);
            this.firstGetStatsTimer = null;
        }
        this.stateNego === zego_entity_1.ENUM_PUBLISH_STATE_NEGO.iceConnected && data.event == 0 && this.publishSuccess();
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // retry publish
    /*
     *    "zp.srp.0.0": "ZegoPublish.shouldRetryPublish"
     */
    ZegoPublish.prototype.shouldRetryPublish = function () {
        if (this.retryState == zego_entity_1.ENUM_RETRY_STATE.didNotStart && this.state != zego_entity_1.ENUM_PUBLISH_STATE.publishing) {
            this.logger.info("zp.srp.0.0 " + this.streamId + " connection didn't success");
            return false;
        }
        if (this.retryState == zego_entity_1.ENUM_RETRY_STATE.retrying) {
            this.logger.info('zp.srp.0.0 ' + this.streamId + ' already retrying');
            return false;
        }
        if (this.currentRetryCount > this.maxRetryCount) {
            this.logger.info('zp.srp.0.0 ' + this.streamId + ' beyond max');
            return false;
        }
        this.logger.info('zp.srp.1.0 ' + this.streamId + ' call success');
        return true;
    };
    /*
     *    "zp.srp.0": "ZegoPublish.startRetryPublish"
     */
    ZegoPublish.prototype.startRetryPublish = function () {
        this.logger.info('zp.srp.0 ' + this.streamId + ' call');
        var streamId = this.streamId;
        if (!streamId) {
            this.logger.info('zp.srp.0 ' + this.streamId + ' no streamid');
            return;
        }
        this.resetPublish();
        this.tryStartPublish(streamId);
    };
    /*
     *    "zp.tsp.0": "ZegoPublish.tryStartPublish"
     */
    ZegoPublish.prototype.tryStartPublish = function (streamId) {
        var _this = this;
        this.logger.info('zp.tsp.0 ' + this.streamId + ' call');
        this.clearTryPublishTimer();
        this.streamId = streamId;
        if (this.currentRetryCount > this.maxRetryCount) {
            this.logger.info('zp.tsp.0 ' + this.streamId + ' beyond max limit');
            //callback error
            this.publishStateUpdateError(zego_error_1.publishErrorList.WEBSOCKET_ERROR);
            return;
        }
        this.retryState = zego_entity_1.ENUM_RETRY_STATE.retrying;
        this.currentRetryCount += 1;
        if (this.signal.isServerConnected()) {
            this.logger.info('zp.tsp.0 ' + this.streamId + ' signal connected');
            this.startPublish(streamId, this.localStream, this.videoInfo, this.mediaStreamConfig, this.publishOption);
        }
        else {
            //setTimer
            this.logger.debug('zp.tsp.0 ' + this.streamId + ' signal server not connected');
            this.waitingAnswerTimer = setTimeout(function () {
                _this.tryStartPublish(streamId);
                console.warn(new Date());
            }, this.waitingAnswerTimeInterval);
        }
    };
    ZegoPublish.prototype.checkPublishConnectionFailedState = function (connectionState) {
        var state = null;
        if (connectionState == 'failed') {
            state = zego_error_1.publishErrorList.MEDIA_CONNECTION_FAILED;
        }
        else if (connectionState == 'closed') {
            state = zego_error_1.publishErrorList.MEDIA_CONNECTION_CLOSED;
        }
        if (state == null) {
            return;
        }
        if (this.state != zego_entity_1.ENUM_PUBLISH_STATE.publishing && this.retryState == zego_entity_1.ENUM_PUBLISH_STATE.didNotStart) {
            this.logger.info('zp.oics.0 ' + this.streamId + ' state ' +
                this.state +
                ' retryState ' +
                this.retryState +
                ' connectionState ' +
                connectionState);
            this.publishStateUpdateError(state);
        }
        else {
            if (this.shouldRetryPublish()) {
                this.onPublishStateUpdate(zego_extern_1.ENUM_PUBLISH_STATE_UPDATE.retry, this.streamId, { code: 0, msg: '' });
                this.startRetryPublish();
            }
            else {
                this.publishStateUpdateError(state);
            }
        }
    };
    //////////////////////////////////////////////////////////////////////////////////////////////
    // quality timer
    /*
     *    "zp.spq.0": "ZegoPublish.setPublishQualityTimer"
     */
    ZegoPublish.prototype.setPublishQualityTimer = function () {
        var _this = this;
        if (this.qualityTimer != null) {
            return;
        }
        this.logger.info('zp.spq.0 ' + this.streamId + ' called');
        this.clearPublishQualityTimer();
        var supportStatsCallback = true;
        this.peerConnection.getStats(function () { }).catch(function (err) {
            _this.logger.info('zp.spq.0 ' + _this.streamId + ' getStats callback not support');
            supportStatsCallback = false;
        });
        this.qualityTimer = setInterval(function () {
            _this.peerConnectionGetStats(supportStatsCallback);
        }, this.qualityTimeInterval);
        this.lastPublishStats = {
            audioPacketsLost: 0,
            videoPacketsLost: 0,
            videoPacketsSent: 0,
            audioPacketsSent: 0,
            videoTime: new Date().getTime(),
            audioTime: new Date().getTime(),
            time: new Date().getTime(),
            audioBytesSent: 0,
            videoBytesSent: 0,
            framesEncoded: 0,
            framesSent: 0,
        };
        this.qualitySeq = zego_extern_1.getSeq();
        this.qualityCount = 0;
    };
    ZegoPublish.prototype.peerConnectionGetStats = function (supportStatsCallback, callback) {
        var _this = this;
        if (this.peerConnection) {
            // this.peerConnection.getStats(null).then(
            //     (results: any) => {
            //         const stats = this.getPublishStats(results);
            //         callback && callback(stats);
            //     },
            //     (error: { toString: () => string }) => {
            //         this.logger.info('zp.spq.0 getStats error ' + error.toString());
            //     },
            // );
            var promiseList = [this.peerConnection.getStats(null)];
            if (supportStatsCallback) {
                promiseList.push(new Promise(function (resolve, reject) {
                    _this.peerConnection.getStats(function (results) { return resolve(results); }, function (err) { return reject(err); });
                }));
            }
            Promise.all(promiseList).then(function (values) {
                var stats = _this.getPublishStats(values[0], values[1]);
                callback && callback(stats);
            }).catch(function (error) {
                _this.logger.info('zp.spq.0 ' + _this.streamId + ' getStats error ' + error.toString());
            });
            // this.peerConnection.getSenders().forEach((sender: RTCRtpSender) => {
            //     sender.getStats().then((res: any) => {
            //         console.warn('senders', res);
            //         res.forEach((result: any) => {
            //             console.warn('result', result)
            //             if (result.packetsLost) {
            //                 console.warn('pack', result)
            //             }
            //         })
            //     })
            // })
        }
    };
    /*
     *    "zp.gps.0": "ZegoPublish.getPublishStats"
     */
    ZegoPublish.prototype.getPublishStats = function (results, callbackResults) {
        var _this = this;
        if (!results) {
            return;
        }
        var medias = document.querySelectorAll('video, audio');
        var streamMedia;
        for (var i = 0; i < medias.length; i++) {
            if (medias[i].srcObject === this.localStream) {
                streamMedia = medias[i];
            }
        }
        var publishData = {
            audioCodec: 'opus',
            audioBitrate: 0,
            videoBitrate: 0,
            audioLevel: 0,
            audioInputLevel: 0,
            audioPacketsLost: 0,
            audioPacketsLostRate: 0,
            sendLevel: 0,
            samplingRate: 0,
            videoFPS: 0,
            nackCount: 0,
            pliCount: 0,
            //sliCount: 0,
            audioQuality: 0,
            videoQuality: 0,
            frameHeight: 0,
            frameWidth: 0,
            videoTransferFPS: 0,
            videoPacketsLost: 0,
            videoPacketsLostRate: 0,
            totalRoundTripTime: 0,
            currentRoundTripTime: 0,
            googBandwidthLimitedResolution: undefined,
            videoCodecName: '',
            audioCodecName: '',
            googCpuLimitedResolution: undefined,
            googAvailableSendBandwidth: 0,
            googActualEncBitrate: 0,
            googTargetEncBitrate: 0,
            googFrameWidthInput: 0,
            googFrameHeightInput: 0,
            googFrameRateInput: 0,
            codecImplementationName: '',
            videoMuteState: this.localStream.getVideoTracks().length > 0 ? this.localStream.getVideoTracks()[0].enabled ? '0' : '1' : '1',
            audioMuteState: this.localStream.getAudioTracks().length > 0 ? this.localStream.getAudioTracks()[0].enabled ? '0' : '1' : '1',
            muted: streamMedia ? streamMedia.muted : undefined,
            paused: streamMedia ? streamMedia.paused : undefined,
            volume: streamMedia ? streamMedia.volume : undefined,
            sinkId: streamMedia ? streamMedia.sinkId : undefined,
        };
        var time = this.lastPublishStats.time;
        var rtt = 0;
        results.forEach(function (result) {
            if ((result.type == 'outbound-rtp' || (result.type == 'ssrc' && result.bytesSent != undefined)) &&
                result.mediaType == 'audio') {
                //audio
                if (time != 0) {
                    publishData.audioBitrate =
                        (8 * (result.bytesSent - _this.lastPublishStats.audioBytesSent)) / (result.timestamp - time);
                }
                if (publishData.audioBitrate < 0) {
                    publishData.audioBitrate = 0;
                }
                _this.lastPublishStats.audioBytesSent = result.bytesSent;
                _this.lastPublishStats.time = result.timestamp;
                _this.lastPublishStats.audioPacketsSentTimeStamp = result.packetsSent - _this.lastPublishStats.audioPacketsSent;
                // console.error('audioPacketsSentTimeStamp', this.lastPublishStats.audioPacketsSentTimeStamp);
                _this.lastPublishStats.audioPacketsSent = result.packetsSent;
            }
            else if ((result.type == 'outbound-rtp' || (result.type == 'ssrc' && result.bytesSent != undefined)) &&
                result.mediaType == 'video') {
                //video
                if (time != 0) {
                    publishData.videoBitrate =
                        (8 * (result.bytesSent - _this.lastPublishStats.videoBytesSent)) / (result.timestamp - time);
                    publishData.videoFPS =
                        (1000 * (result.framesEncoded - _this.lastPublishStats.framesEncoded)) /
                            (result.timestamp - time);
                }
                if (publishData.videoBitrate < 0) {
                    publishData.videoBitrate = 0;
                }
                if (publishData.videoFPS < 0) {
                    publishData.videoFPS = 0;
                }
                publishData.nackCount = result.nackCount;
                publishData.pliCount = result.pliCount;
                //publishData.sliCount = result.sliCount;
                _this.lastPublishStats.videoBytesSent = result.bytesSent;
                _this.lastPublishStats.framesEncoded = result.framesEncoded;
                _this.lastPublishStats.time = result.timestamp;
                _this.lastPublishStats.videoPacketsSentTimeStamp = result.packetsSent - _this.lastPublishStats.videoPacketsSent;
                // console.error('videoPacketsSentTimeStamp', this.lastPublishStats.videoPacketsSentTimeStamp);
                _this.lastPublishStats.videoPacketsSent = result.packetsSent;
            }
            else if (result.type == 'remote-inbound-rtp' && result.kind == 'video') {
                result.packetsLost > 0 && (publishData.videoPacketsLost = result.packetsLost);
                var videoLostDiff = result.packetsLost - _this.lastPublishStats.videoPacketsLost;
                if (videoLostDiff > 0) {
                    publishData.audioPacketsLostRate =
                        videoLostDiff /
                            _this.lastPublishStats.audioPacketsSentTimeStamp;
                }
                else {
                    publishData.audioPacketsLostRate = 0;
                }
                // this.lastPublishStats.videoPacketsLostTimeStamp = result.packetsLost - this.lastPublishStats.videoPacketsLost;
                // console.error('videoPacketsLostTimeStamp', this.lastPublishStats.videoPacketsLostTimeStamp);
                result.packetsLost > 0 && (_this.lastPublishStats.videoPacketsLost = result.packetsLost);
                _this.lastPublishStats.videoTime = result.timestamp;
            }
            else if (result.type == 'remote-inbound-rtp' && result.kind == 'audio') {
                result.packetsLost > 0 && (publishData.audioPacketsLost = result.packetsLost);
                var audioLostDiff = result.packetsLost - _this.lastPublishStats.audioPacketsLost;
                if (audioLostDiff > 0) {
                    publishData.audioPacketsLostRate =
                        audioLostDiff /
                            _this.lastPublishStats.audioPacketsSentTimeStamp;
                }
                else {
                    publishData.audioPacketsLostRate = 0;
                }
                // this.lastPublishStats.audioPacketsLostTimeStamp = result.packetsLost - this.lastPublishStats.audioPacketsLost;
                // console.error('audioPacketsLostTimeStamp', this.lastPublishStats.audioPacketsLostTimeStamp);
                result.packetsLost > 0 && (_this.lastPublishStats.audioPacketsLost = result.packetsLost);
                _this.lastPublishStats.audioTime = result.timestamp;
            }
            //safari don't have this type
            else if (result.type == 'media-source' && (result.kind == 'audio' || result.id.toLowerCase().indexOf('audio') >= 0)) {
                publishData.audioLevel = result.audioLevel;
                publishData.sendLevel = result.totalAudioEnergy;
                publishData.audioInputLevel = 32767 * result.totalAudioEnergy;
                publishData.samplingRate = result.totalSamplesDuration;
            }
            else if (result.type == 'track' && (result.kind == 'video' || result.id.indexOf('video') >= 0 || result.frameWidth)) {
                publishData.frameHeight = result.frameHeight;
                publishData.frameWidth = result.frameWidth;
                if (time != 0) {
                    publishData.videoTransferFPS =
                        (1000 * (result.framesSent - _this.lastPublishStats.framesSent)) / (result.timestamp - time);
                }
                if (publishData.videoTransferFPS < 0) {
                    publishData.videoTransferFPS = 0;
                }
                _this.lastPublishStats.framesSent = result.framesSent;
            }
            else if (result.type == 'candidate-pair') {
                if (result.totalRoundTripTime != undefined) {
                    publishData.totalRoundTripTime = result.totalRoundTripTime;
                }
                if (result.currentRoundTripTime != undefined) {
                    publishData.currentRoundTripTime = result.currentRoundTripTime;
                    rtt = publishData.currentRoundTripTime * 1000;
                }
            }
        });
        callbackResults && callbackResults.result().forEach(function (result) {
            // if (result.type == 'ssrc' && result.id.indexOf('send') >=0 && result.stat('mediaType') == 'video' && result.names().indexOf('packetsLost') >= 0) {
            //     const packetsLost = parseInt(result.stat('packetsLost'));
            //     publishData.videoPacketsLost = packetsLost;
            //     const timediff = result.timestamp.getTime() - this.lastPublishStats.videoTime;
            //     publishData.videoPacketsLostRate = (packetsLost - this.lastPublishStats.videoPacketsLost) /
            //         timediff;
            //     this.lastPublishStats.videoTime = result.timestamp.getTime();
            //     this.lastPublishStats.videoPacketsLost = packetsLost;
            // }
            // if (result.type == 'ssrc' && result.id.indexOf('send') >=0 && result.stat('mediaType') == 'audio' && result.names().indexOf('packetsLost') >= 0) {
            //     const packetsLost = parseInt(result.stat('packetsLost'));
            //     publishData.audioPacketsLost = packetsLost;
            //     publishData.audioPacketsLostRate = (packetsLost - this.lastPublishStats.audioPacketsLost) /
            //         (result.timestamp.getTime() - this.lastPublishStats.audioTime);
            //     this.lastPublishStats.audioTime = result.timestamp.getTime();
            //     this.lastPublishStats.audioPacketsLost = packetsLost;
            // }
            if (result.type == 'ssrc' && result.names().indexOf('googBandwidthLimitedResolution') >= 0) {
                publishData.googBandwidthLimitedResolution = result.stat('googBandwidthLimitedResolution');
            }
            if (result.type == 'ssrc' && result.stat('mediaType') == 'video' && result.names().indexOf('googCodecName') >= 0) {
                publishData.videoCodecName = result.stat('googCodecName');
            }
            if (result.type == 'ssrc' && result.stat('mediaType') == 'audio' && result.names().indexOf('googCodecName') >= 0) {
                publishData.audioCodecName = result.stat('googCodecName');
            }
            if (result.type == 'ssrc' && result.names().indexOf('googCpuLimitedResolution') >= 0) {
                publishData.googCpuLimitedResolution = result.stat('googCpuLimitedResolution');
            }
            if (result.type == 'ssrc' && result.names().indexOf('googFrameWidthInput') >= 0) {
                publishData.googFrameWidthInput = result.stat('googFrameWidthInput');
            }
            if (result.type == 'ssrc' && result.names().indexOf('googFrameHeightInput') >= 0) {
                publishData.googFrameHeightInput = result.stat('googFrameHeightInput');
            }
            if (result.type == 'ssrc' && result.names().indexOf('googFrameRateInput') >= 0) {
                publishData.googFrameRateInput = result.stat('googFrameRateInput');
            }
            if (result.type == 'ssrc' && result.names().indexOf('codecImplementationName') >= 0) {
                // console.error('codecImplementationName', result.names(), result.stat('codecImplementationName'))
                publishData.codecImplementationName = result.stat('codecImplementationName');
            }
            if (result.type == 'VideoBwe' && result.names().indexOf('googAvailableSendBandwidth') >= 0) {
                publishData.googAvailableSendBandwidth = result.stat('googAvailableSendBandwidth');
            }
            if (result.type == 'VideoBwe' && result.names().indexOf('googActualEncBitrate') >= 0) {
                publishData.googActualEncBitrate = result.stat('googActualEncBitrate');
            }
            if (result.type == 'VideoBwe' && result.names().indexOf('googTargetEncBitrate') >= 0) {
                publishData.googTargetEncBitrate = result.stat('googTargetEncBitrate');
            }
        });
        // this.logger.debug("zp.gps.0 audio: " + publishData.audioBitrate + " video: " + publishData.videoBitrate +
        //  " FPS: " + publishData.videoFPS + " transfer: " + publishData.videoTransferFPS);
        // this.dataReport.addEvent(this.qualitySeq, "PublishQuality", publishData);
        // this.qualityCount += 1;
        // if (this.qualityCount > this.maxQualityListCount) {
        //     this.dataReport.uploadReport(this.qualitySeq, "RTCPublishQuality");
        //     this.qualityCount = 0;
        //     this.qualitySeq = getSeq();
        //     this.dataReport.newReport(this.qualitySeq);
        // }
        publishData.audioQuality = client_util_1.ClientUtil.getNetQuality(rtt, publishData.audioPacketsLostRate);
        publishData.videoQuality = client_util_1.ClientUtil.getNetQuality(rtt, publishData.videoPacketsLostRate);
        //upload quality
        if (time !== 0) {
            this.uploadPublishQuality(publishData);
        }
        var streamQuality = {
            video: {
                videoBitrate: publishData.videoBitrate,
                videoFPS: publishData.videoFPS,
                videoTransferFPS: publishData.videoTransferFPS,
                frameHeight: publishData.frameHeight,
                frameWidth: publishData.frameWidth,
                muteState: publishData.videoMuteState,
                videoQuality: publishData.videoQuality,
                videoPacketsLost: publishData.videoPacketsLost,
                videoPacketsLostRate: publishData.videoPacketsLostRate
            },
            audio: {
                audioBitrate: publishData.audioBitrate,
                audioCodec: publishData.audioCodec,
                muteState: publishData.audioMuteState,
                audioQuality: publishData.audioQuality,
                audioPacketsLost: publishData.audioPacketsLost,
                audioPacketsLostRate: publishData.audioPacketsLostRate
            },
            //roomId: '',
            nackCount: publishData.nackCount,
            pliCount: publishData.pliCount,
            totalRoundTripTime: publishData.totalRoundTripTime,
            currentRoundTripTime: publishData.currentRoundTripTime,
        };
        if (publishData.videoPacketsLost !== undefined) {
            streamQuality.video.videoPacketsLost = publishData.videoPacketsLost;
            streamQuality.video.videoPacketsLostRate = publishData.videoPacketsLostRate;
            streamQuality.audio.audioPacketsLost = publishData.audioPacketsLost;
            streamQuality.audio.audioPacketsLostRate = publishData.audioPacketsLostRate;
        }
        if (publishData.muted !== undefined) {
            streamQuality.muted = publishData.muted;
            streamQuality.paused = publishData.paused;
            streamQuality.volume = publishData.volume;
            streamQuality.sinkId = publishData.sinkId;
        }
        if (publishData.googBandwidthLimitedResolution !== undefined) {
            streamQuality.googBandwidthLimitedResolution = publishData.googBandwidthLimitedResolution;
            streamQuality.video.googCodecName = publishData.videoCodecName;
            streamQuality.audio.googCodecName = publishData.audioCodecName;
            streamQuality.googCpuLimitedResolution = publishData.googCpuLimitedResolution;
            streamQuality.googFrameWidthInput = publishData.googFrameWidthInput;
            streamQuality.googFrameHeightInput = publishData.googFrameHeightInput;
            streamQuality.googFrameRateInput = publishData.googFrameRateInput;
            streamQuality.codecImplementationName = publishData.codecImplementationName;
            streamQuality.googAvailableSendBandwidth = publishData.googAvailableSendBandwidth;
            streamQuality.googActualEncBitrate = publishData.googActualEncBitrate;
            streamQuality.googTargetEncBitrate = publishData.googTargetEncBitrate;
        }
        if (time != 0) {
            this.onPublishQualityUpdate(this.streamId, streamQuality);
        }
        return streamQuality;
    };
    /*
     *    "zp.upq.0": "ZegoPublish.uploadPublishQuality"
     */
    ZegoPublish.prototype.uploadPublishQuality = function (publishData) {
        var _this = this;
        if (!this.qualityUpload) {
            return;
        }
        var timeStamp = Date.parse(new Date() + '');
        if (this.qualityUploadLastTime == 0 || timeStamp - this.qualityUploadLastTime >= this.qualityUploadInterval) {
            publishData['stream_type'] = 'publish';
            publishData['stream_id'] = this.streamId;
            publishData['timeStamp'] = timeStamp / 1000;
            this.logger.info('zp.upq.0 ' + this.streamId + ' upload' + JSON.stringify(publishData));
            this.signal.QualityReport(zego_extern_1.getSeq(), this.sessionId, publishData, function (seq, sessionId, data) {
                if (data.report !== undefined) {
                    _this.qualityUpload = data.report;
                    _this.qualityUploadInterval = data.report_interval_ms;
                }
            }, function (err, seq) {
                _this.logger.info('zp.upq.0 ' + _this.streamId + ' upload failed ' + err);
            });
            this.qualityUploadLastTime = timeStamp;
        }
    };
    /*
     *    "zp.sp.0.1": "ZegoPublish.stopPublish"
     */
    ZegoPublish.prototype.stopPublish = function () {
        this.logger.info('zp.sp.0.1 ' + this.streamId + ' called');
        //sendBroadcasterStatusNotify
        if ((Object.keys(this.streamCenter.publisherList).length = 1)) {
            for (var i in this.streamCenter.playerList) {
                var player = this.streamCenter.playerList[i].player;
                if (player.state == zego_entity_1.ENUM_PLAY_STATE.playing &&
                    player.broadcasterStatus == zego_entity_1.ENUM_BROADCASTER_STATUS.start) {
                    this.signal && this.signal.sendBroadcasterStatus(zego_extern_1.getSeq(), player.sessionId, 0);
                    player.broadcasterStatus = zego_entity_1.ENUM_BROADCASTER_STATUS.stop;
                }
            }
        }
        //stop Audio Mix
        this.stopMixingAudio();
        this.stopMixingBuffer();
        this.stopEffect();
        //close session
        if (this.sessionId && !this.closeSessionSignal) {
            this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 0);
        }
        this.dataReport.eventEndWithMsg(this.streamReportSeq, 'PublishState', {
            'state': this.state + ''
        });
        this.dataReport.addEvent(this.streamReportSeq, 'StopPublish');
        this.dataReport.addMsgExt(this.streamReportSeq, {
            'stream': this.streamId,
            'sessionId': this.sessionId
        });
        this.dataReport.addMsgInfo(this.streamReportSeq, {
            itemtype: 'RTCPublishStream'
        });
        this.dataReport.uploadReport(this.streamReportSeq, 'RTCPublishStream');
        this.resetPublish();
    };
    ZegoPublish.prototype.onPublishStateUpdate = function (type, streamId, error) { };
    ZegoPublish.prototype.onPublishQualityUpdate = function (streamId, quality) { };
    /*
     *    "zp.od.0": "ZegoPublish.onDisconnect"
     */
    ZegoPublish.prototype.onDisconnect = function () {
        this.logger.info('zp.od.0 ' + this.streamId + ' call');
        // if (this.sessionId !== sessionId) {
        //     this.logger.info("zp.od.0 session is not same");
        //     return;
        // }
        this.logger.info('zp.od.0 ' + this.streamId + ' websocket disconnect');
        !this.tryingNexitSignal && this.tryNextSignal(zego_error_1.publishErrorList.WEBSOCKET_ERROR);
    };
    //音效相关
    ZegoPublish.prototype.playEffect = function (AudioMixConfig, audioBuffer, start, end) {
        this.logger.info('zp.pe.0 ' + this.streamId + ' call');
        if (this.effectList.find(function (effect) { return effect.effectID == AudioMixConfig.effectID && effect.audioBuffer == audioBuffer; })) {
            this.logger.warn('zp.pe.0 ' + this.streamId + ' effect alreadly exist ');
            return;
        }
        else {
            var AudioMix = new AudioMixUtil_1.AudioMixUtil(this.logger, this.ac, this.mediaEleSources);
            AudioMix.localStream = this.localStream;
            if (!this.streamSource)
                this.streamSource = this.ac.createMediaStreamSource(this.localStream);
            AudioMix.streamSource = this.streamSource;
            AudioMix.peerConnection = this.peerConnection;
            AudioMix.audioBuffer = audioBuffer;
            this.effectList.push({
                audioMix: AudioMix,
                effectID: AudioMixConfig.effectID,
                audioBuffer: audioBuffer,
            });
            AudioMix.playEffect(AudioMixConfig.playTime, AudioMixConfig.loop, false, start, end);
            this.logger.info('zp.pe.0 ' + this.streamId + ' play effect ' + AudioMixConfig.effectID + ' success');
        }
    };
    ZegoPublish.prototype.pauseEffect = function (effectID) {
        var effect = this.effectList.find(function (effect) { return effect.effectID == effectID; });
        if (effect) {
            effect.audioMix.pauseEffect();
            this.logger.info('zp.pe.1 ' + this.streamId + ' pause ' + effectID + ' success');
        }
        else if (typeof effectID == 'undefined') {
            this.effectList.forEach(function (effect) { return effect.audioMix.pauseEffect(); });
        }
        else {
            this.logger.error('zp.pe.1 ' + this.streamId + ' no effect ID found');
            return false;
        }
        return true;
    };
    ZegoPublish.prototype.resumeEffect = function (effectID) {
        var effect = this.effectList.find(function (effect) { return effect.effectID == effectID; });
        if (effect) {
            effect.audioMix.resumeEffect();
            this.logger.info('zp.pe.1 ' + this.streamId + ' resume' + effectID + ' success');
        }
        else if (typeof effectID == 'undefined') {
            this.effectList.forEach(function (effect) { return effect.audioMix.resumeEffect(); });
        }
        else {
            this.logger.error('zp.pe.1 ' + this.streamId + ' no effect ID found');
            return false;
        }
        return false;
    };
    ZegoPublish.prototype.stopEffect = function (effectID) {
        var effect = this.effectList.find(function (effect) { return effect.effectID == effectID; });
        if (effect) {
            effect.audioMix.stopMixingAudio();
            this.effectList.splice(this.effectList.indexOf(effect), 1);
            this.logger.info('zp.pe.1 ' + this.streamId + ' pause ' + effectID + ' success');
        }
        else if (typeof effectID == 'undefined') {
            this.effectList.forEach(function (effect) { return effect.audioMix.stopMixingAudio(); });
            this.effectList = [];
        }
        else {
            this.logger.error('zp.pe.1 ' + this.streamId + ' no effect ID found');
            return false;
        }
        this.rebackMic();
        return true;
    };
    ZegoPublish.prototype.startMixingAudio = function (mediaList) {
        var _this = this;
        this.logger.info('zp.sma.0 ' + this.streamId + ' call');
        if (!this.localStream) {
            this.logger.error('zp.sma.0 localStream not found');
            return false;
        }
        if (!this.micTrack)
            this.micTrack = this.localStream.getAudioTracks().length > 0 ? this.localStream.getAudioTracks()[0] : null;
        mediaList.forEach(function (media) {
            if (_this.audioMixList.find(function (i) { return i.media == media; })) {
                _this.logger.info('zp.sma.0 ' + _this.streamId + ' mix audio already exist');
            }
            else {
                var AudioMix = new AudioMixUtil_1.AudioMixUtil(_this.logger, _this.ac, _this.mediaEleSources);
                AudioMix.localStream = _this.localStream;
                if (!_this.streamSource)
                    _this.streamSource = _this.ac.createMediaStreamSource(_this.localStream);
                AudioMix.streamSource = _this.streamSource;
                AudioMix.peerConnection = _this.peerConnection;
                _this.audioMixList.push({
                    audioMix: AudioMix,
                    media: media
                });
                AudioMix.startMixingAudio(media);
            }
        });
        return true;
    };
    ZegoPublish.prototype.stopMixingAudio = function (media) {
        var _this = this;
        this.logger.info('zp.sma.0.0 ' + this.streamId + ' call');
        if (media) {
            media.forEach(function (media) {
                for (var i = 0; i < _this.audioMixList.length; i++) {
                    if (_this.audioMixList[i].media == media) {
                        _this.audioMixList[i].audioMix.stopMixingAudio() && _this.audioMixList.splice(i--, 1);
                        break;
                    }
                }
            });
        }
        else {
            this.audioMixList.forEach(function (i) { return i.audioMix.stopMixingAudio(); });
            this.audioMixList = [];
        }
        this.rebackMic();
        return true;
    };
    ZegoPublish.prototype.mixingBuffer = function (sourceID, arrayBuffer, callBack) {
        this.logger.info('zp.mb.0 ' + this.streamId + ' call');
        if (!this.micTrack)
            this.micTrack = this.localStream.getAudioTracks().length > 0 ? this.localStream.getAudioTracks()[0] : null;
        if (this.arrayBufferMap[sourceID]) {
            this.arrayBufferMap[sourceID].mixingBuffer(arrayBuffer, callBack);
        }
        else {
            var AudioMix = new AudioMixUtil_1.AudioMixUtil(this.logger, this.ac, this.mediaEleSources);
            AudioMix.localStream = this.localStream;
            if (!this.streamSource)
                this.streamSource = this.ac.createMediaStreamSource(this.localStream);
            AudioMix.streamSource = this.streamSource;
            AudioMix.peerConnection = this.peerConnection;
            this.arrayBufferMap[sourceID] = AudioMix;
            AudioMix.mixingBuffer(arrayBuffer, callBack);
        }
    };
    ZegoPublish.prototype.stopMixingBuffer = function (sourceID) {
        if (sourceID && this.arrayBufferMap[sourceID]) {
            this.arrayBufferMap[sourceID].stopMingBuffer();
            delete this.arrayBufferMap[sourceID];
            return true;
        }
        else if (typeof sourceID == 'undefined') {
            for (var i in this.arrayBufferMap) {
                this.arrayBufferMap[i].stopMingBuffer();
            }
            return true;
        }
        else {
            this.logger.warn('zp.smb.0 ' + this.streamId + ' arrayBuffer no found');
            return false;
        }
        this.rebackMic();
    };
    ZegoPublish.prototype.setMixingAudioVolume = function (volume, audio) {
        this.logger.info('zp.sma.0.1 ' + this.streamId + ' call');
        var audioMixItem = this.audioMixList.find(function (item) { return item.media === audio; });
        if (audioMixItem) {
            audioMixItem.audioMix.setMixingAudioVolume(volume);
        }
        else {
            // todo
            this.logger.error('zp.sma.0.1 ' + this.streamId + ' audio is not mixing');
            return false;
        }
        this.logger.info('zp.sma.0.1 ' + this.streamId + ' call success');
        return true;
    };
    //voice change
    // voiceChange(mult: number) {
    //     this.pitchEffect = new PitchUtil(this.ac);
    //     const streamSource = this.ac.createMediaStreamSource(this.localStream.clone());
    //     const destination = this.ac.createMediaStreamDestination();
    //     streamSource.connect(this.pitchEffect.input);
    //     this.pitchEffect.output.connect(destination);
    //     this.pitchEffect.setPitchOffset(mult);
    //     if (!this.micTrack) {
    //         const audioTrack: MediaStreamTrack = destination.stream.getAudioTracks()[0];
    //         const sender = this.peerConnection
    //             .getSenders()
    //             .find((s: { track: { kind: string } }) => s.track.kind === audioTrack.kind);
    //         if (!sender) {
    //             this.logger.error('zp.vc.0 no sender');
    //             return false;
    //         }
    //         this.micTrack = this.localStream.getAudioTracks()[0];
    //         sender.replaceTrack(audioTrack);
    //         this.localStream.removeTrack(this.micTrack);
    //         this.localStream.addTrack(audioTrack);
    //     }
    // }
    // voiceBack() {
    //     if (!this.micTrack) {
    //         this.logger.error('zp.vb.0 mo mickTrack found');
    //         return;
    //     }
    //     const sender = this.peerConnection
    //         .getSenders()
    //         .find((s: { track: { kind: string } }) => s.track.kind === this.micTrack!.kind);
    //     sender.replaceTrack(this.micTrack);
    //     this.localStream.removeTrack(this.localStream.getAudioTracks()[0]);
    //     this.localStream.addTrack(this.micTrack);
    //     this.micTrack = null;
    // }
    ZegoPublish.prototype.publishSuccess = function () {
        this.logger.info('zp.ps.0 call');
        if (this.state != zego_entity_1.ENUM_PUBLISH_STATE.publishing) {
            this.onPublishStateUpdate(zego_extern_1.ENUM_PUBLISH_STATE_UPDATE.start, this.streamId, { code: 0, msg: '' });
        }
        this.state = zego_entity_1.ENUM_PUBLISH_STATE.publishing;
        this.retrySeq = 0;
        if (this.retryState != zego_entity_1.ENUM_RETRY_STATE.didNotStart) {
            this.retryState = zego_entity_1.ENUM_RETRY_STATE.finished;
            this.currentRetryCount = 0;
        }
        //publish started
        this.dataReport.eventStart(this.retrySeq == 0 ? this.reportSeq : this.retrySeq, 'PublishState');
        this.dataReport.eventStart(this.streamReportSeq, 'PublishState');
        //BroadcasterStatusNotify
        for (var i in this.streamCenter.playerList) {
            var player = this.streamCenter.playerList[i].player;
            if (player.state == zego_entity_1.ENUM_PLAY_STATE.playing && player.broadcasterStatus == zego_entity_1.ENUM_BROADCASTER_STATUS.stop) {
                this.signal && this.signal.sendBroadcasterStatus(zego_extern_1.getSeq(), player.sessionId, 1);
                player.broadcasterStatus = zego_entity_1.ENUM_BROADCASTER_STATUS.start;
            }
        }
        //start quality timeInterval
        this.setPublishQualityTimer();
        //report stream status
        var camera = 2;
        var microphone = 2;
        if (this.localStream.getVideoTracks().length !== 0 && this.localStream.getVideoTracks()[0].enabled == true) {
            camera = 0;
        }
        if (this.localStream.getAudioTracks().length !== 0 && this.localStream.getAudioTracks()[0].enabled == true) {
            microphone = 0;
        }
        this.signal.sendStreamStatus(zego_extern_1.getSeq(), this.sessionId, camera, microphone);
        this.streamCenter.soundLevelDelegate && this.startSoundLevel();
        this.logger.info('zp.ps.0 call success');
    };
    ZegoPublish.prototype.tryNextSignal = function (error) {
        this.tryingNexitSignal = true;
        var streamID = this.streamId;
        var server = this.signal.server;
        var checkPublish = this.streamCenter.publisherList[streamID];
        var serverUrls = [];
        checkPublish && checkPublish.serverUrls && (serverUrls = checkPublish.serverUrls);
        //rePublish event start
        this.retrySeq = zego_extern_1.getReportSeq();
        this.streamCenter.stateCenter.reportSeqList.rePublish[streamID] = this.retrySeq;
        this.dataReport.newReport(this.retrySeq, zego_logevent_1.eventList.kZegoTaskRePublish);
        this.dataReport.addMsgInfo(this.retrySeq, {
            serverUrls: serverUrls,
            reason: error,
        });
        // 若已对节点列表轮询了三次，则不进行重试
        if (this.nextSignalTryCount > serverUrls.length * 3) {
            this.logger.error('zp.tns.0 ' + this.streamId + ' try max limit');
            this.publishStateUpdateError(error, true);
        }
        else {
            this.onPublishStateUpdate(zego_extern_1.ENUM_PUBLISH_STATE_UPDATE.retry, this.streamId, { code: 0, msg: '' });
            serverUrls.forEach(function (val, ind) { return ind <= serverUrls.indexOf(server) && serverUrls.push(val); });
            serverUrls.splice(0, serverUrls.indexOf(server) + 1);
            this.logger.info('zp.tns.0 ' + this.streamId + ' try next signal ' + streamID);
            this.signal &&
                this.signal.state == zego_entity_1.ENUM_CONNECT_STATE.connected &&
                this.signal.sendCloseSession(zego_extern_1.getSeq(), this.sessionId, 1);
            this.signal && this.signal.removeSession(this.sessionId);
            this.resetPublish();
            this.streamCenter.connectPublishServer(streamID, true);
            this.nextSignalTryCount++;
        }
    };
    ZegoPublish.prototype.startSoundLevel = function () {
        var _this = this;
        this.logger.info("zp.ssl.0 call streamID: " + this.streamId);
        if (!this.localStream || this.localStream.getAudioTracks().length == 0) {
            this.logger.info('zp.ssl.0 ' + this.streamId + ' local stream no found');
            return;
        }
        if (this.script) {
            this.script.disconnect();
            this.script = null;
        }
        this.streamSource && this.streamSource.disconnect();
        try {
            if (!this.streamSource)
                this.streamSource = this.ac.createMediaStreamSource(this.localStream);
            this.script = this.ac.createScriptProcessor(4096, 1, 1); //创建一个音频分析对象，采样的缓冲区大小为4096，输入和输出都是单声道
            this.streamSource.connect(this.script); //将该分析对象与麦克风音频进行连接
            this.script.connect(this.ac.destination);
            this.script.onaudioprocess = function (e) {
                //开始处理音频
                var buffer = e.inputBuffer.getChannelData(0); //获得缓冲区的输入音频，转换为包含了PCM通道数据的32位浮点数组
                //创建变量并迭代来获取最大的音量值
                var maxVal = 0;
                // console.error('buffer', buffer);
                for (var i = 0; i < buffer.length; i++) {
                    if (maxVal < buffer[i]) {
                        maxVal = buffer[i];
                    }
                }
                _this.soundLevel = maxVal * 100;
            };
            this.ac.resume();
        }
        catch (err) {
            this.logger.error('zp.ssl.0 ' + this.streamId + ' get sound level failed ' + err);
        }
    };
    ZegoPublish.prototype.stopSoundLevel = function () {
        this.logger.info("zp.ssl.0.1 call streamID: " + this.streamId);
        this.script && this.script.disconnect();
        this.streamSource && this.streamSource.disconnect();
        this.script = null;
        // this.streamSource = null;
    };
    ZegoPublish.prototype.rebackMic = function () {
        var _this = this;
        if (this.peerConnection && this.micTrack instanceof MediaStreamTrack && this.audioMixList.length == 0 && Object.keys(this.arrayBufferMap).length == 0 && this.effectList.length == 0) {
            var sender = this.peerConnection
                .getSenders()
                .find(function (s) { return s.track.kind === _this.micTrack.kind; });
            sender.replaceTrack(this.micTrack);
            this.localStream.removeTrack(this.localStream.getAudioTracks()[0]);
            this.localStream.addTrack(this.micTrack);
        }
    };
    return ZegoPublish;
}());
exports.ZegoPublish = ZegoPublish;


/***/ }),

/***/ "./sdk/webrtc/zego.streamCenter.web.ts":
/*!*********************************************!*\
  !*** ./sdk/webrtc/zego.streamCenter.web.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var zego_preview_1 = __webpack_require__(/*! ./zego.preview */ "./sdk/webrtc/zego.preview.ts");
var zego_publish_1 = __webpack_require__(/*! ./zego.publish */ "./sdk/webrtc/zego.publish.ts");
var zego_error_1 = __webpack_require__(/*! ../common/zego.error */ "./sdk/common/zego.error.ts");
var zego_extern_1 = __webpack_require__(/*! ../common/zego.extern */ "./sdk/common/zego.extern.ts");
var zego_entity_1 = __webpack_require__(/*! ../common/zego.entity */ "./sdk/common/zego.entity.ts");
var zego_signal_1 = __webpack_require__(/*! ../common/zego.signal */ "./sdk/common/zego.signal.ts");
var zego_play_web_1 = __webpack_require__(/*! ./zego.play.web */ "./sdk/webrtc/zego.play.web.ts");
var ZegoStreamCenter_1 = __webpack_require__(/*! ../common/ZegoStreamCenter */ "./sdk/common/ZegoStreamCenter.ts");
var zego_logevent_1 = __webpack_require__(/*! ../common/zego.logevent */ "./sdk/common/zego.logevent.ts");
var client_util_1 = __webpack_require__(/*! ../util/client-util */ "./sdk/util/client-util.ts");
var zego_externalError_1 = __webpack_require__(/*! ../common/zego.externalError */ "./sdk/common/zego.externalError.ts");
var ZegoStreamCenterWeb = /** @class */ (function (_super) {
    __extends(ZegoStreamCenterWeb, _super);
    function ZegoStreamCenterWeb(log, stateCenter, dataReport, ac, mediaEleSources) {
        var _this = _super.call(this, log, stateCenter) || this;
        _this.testEnvironment = false;
        //由streamcenter统一管理每个signal的心跳逻辑
        _this.heartbeatTimer = null;
        _this.heartbeatInterval = 10 * 1000;
        //质量回调时间间隔,默认3s
        _this.qualityTimerInterval = 3 * 1000;
        _this.maxRetryCount = 5;
        _this.previewVideoList = [];
        _this.signalList = {};
        //人头计费上报
        _this.chargeInfos = {
            itemtype: 'ChargeInfos',
            timestamp_begin: 0,
            timestamp_end: 0,
            timestamp_diff_flag: 0,
            timestamp_diff: 0,
            infos: [],
        };
        _this.chargeInfosTimer = null;
        _this.chargeInfosInterval = 60 * 1000;
        _this.chargeInfoSeq = 0;
        _this.soundLevelDelegate = false;
        _this.soundLevelInterval = 1000;
        _this.tryCountConnectInterval = 3000;
        _this.checkMessageTimeout = function () {
            for (var serverUrl in _this.signalList) {
                if (_this.signalList[serverUrl].signal) {
                    _this.signalList[serverUrl].signal.checkMessageTimeout();
                }
            }
        };
        _this.getAllInUseUrl = function () {
            var serverUrls = [];
            for (var serverUrl in _this.signalList) {
                serverUrls.push(serverUrl);
            }
            return serverUrls;
        };
        /*
         *    "zsc.od.0": "ZegoStreamCenter.onDisconnectHandle"
         */
        _this.onDisconnectHandle = function (server) {
            _this.logger.info('zsc.od.0 call');
            if (_this.signalList[server]) {
                var signalInfo = _this.signalList[server];
                for (var i = 0; i < signalInfo.publishConnectedList.length; i++) {
                    var publish = _this.publisherList[signalInfo.publishConnectedList[i]];
                    if (publish && publish.publisher) {
                        publish.publisher.onDisconnect();
                    }
                }
                for (var i = 0; i < signalInfo.playConnectedList.length; i++) {
                    var play = _this.playerList[signalInfo.playConnectedList[i]];
                    if (play && play.player) {
                        play.player.onDisconnect();
                    }
                }
                delete _this.signalList[server];
                _this.stopSignalHeartbeat();
                _this.stopChargeInfosUpload();
                _this.stopSoundLevel();
            }
        };
        _this.logger = log;
        _this.stateCenter = stateCenter;
        _this.dataReport = dataReport;
        _this.ac = ac;
        _this.mediaEleSources = mediaEleSources;
        return _this;
    }
    ZegoStreamCenterWeb.prototype.onSignalDisconnected = function (server) { };
    /*
     *    "zsc.qmc.0": "ZegoStreamCenter.setQualityMonitorCycle"
     */
    ZegoStreamCenterWeb.prototype.setQualityMonitorCycle = function (timeInMs) {
        var _this = this;
        this.logger.debug('zsc.qmc.0 timeInterval ' + timeInMs);
        if (Object.keys(this.publisherList).length == 0) {
            this.qualityTimerInterval = timeInMs;
        }
        else {
            Object.keys(this.publisherList).forEach(function (streamid) {
                _this.publisherList[streamid].publisher.qualityTimeInterval = timeInMs;
                _this.publisherList[streamid].publisher.setPublishQualityTimer();
            });
        }
        return true;
    };
    /*
     *    "zsc.ssi.0": "ZegoStreamCenter.setSessionInfo"
     */
    ZegoStreamCenterWeb.prototype.setSessionInfo = function (appid, userid, token, testEnvironment) {
        this.logger.debug('zsc.ssi.0 called');
        // this.signal.setSessionInfo(appid, userid, serverUrl);
        this.appid = appid;
        this.userid = userid;
        this.token = token;
        this.testEnvironment = testEnvironment;
    };
    ZegoStreamCenterWeb.prototype.onPlayStateUpdate = function (type, streamid, error) { };
    ZegoStreamCenterWeb.prototype.onPlayQualityUpdate = function (streamID, streamQuality) { };
    ZegoStreamCenterWeb.prototype.onPublishStateUpdate = function (type, streamid, error) { };
    ZegoStreamCenterWeb.prototype.onPublishQualityUpdate = function (streamID, streamQuality) { };
    /*
     *    "zsc.uhb.0": "ZegoStreamCenter.onUpdateHeartBeartIntervalHandle"
     */
    ZegoStreamCenterWeb.prototype.onUpdateHeartBeartIntervalHandle = function (interval) {
        if (interval != this.heartbeatInterval) {
            this.logger.debug('zsc.uhb.0 update ' + interval);
            if (this.heartbeatTimer) {
                clearTimeout(this.heartbeatTimer);
                this.heartbeatTimer = null;
            }
            this.heartbeatInterval = interval;
            this.startSignalHeartbeat();
        }
    };
    /*
     *    "zsc.em.0": "ZegoStreamCenter.enableMicrophone"
     */
    ZegoStreamCenterWeb.prototype.enableMicrophone = function (localStream, enable) {
        var preview = this.checkPreview(localStream);
        if (!preview) {
            this.logger.error('zsc.em.0 no preview');
            return false;
        }
        return preview.enableMicrophone(enable, this);
    };
    /*
     *    "zsc.ec.0": "ZegoStreamCenter.enableCamera"
     */
    ZegoStreamCenterWeb.prototype.enableCamera = function (localStream, enable) {
        var preview = this.checkPreview(localStream);
        if (!preview) {
            this.logger.error('zsc.ec.0 no preview');
            return false;
        }
        return preview.enableCamera(enable, this);
    };
    ZegoStreamCenterWeb.prototype.recordDevices = function () {
        var _this = this;
        this.logger.info('zsc.rd.0 call');
        // 枚举设备并存储，同时设置设备列表更改监听
        client_util_1.ClientUtil.getDevices(function (res) {
            _this.stateCenter.deviceInfos = {
                microphones: res.microphones,
                speakers: res.speakers,
                cameras: res.cameras,
            };
        }, function (err) {
            _this.logger.warn('zsc.rd.0 getDevices err:', err);
        });
        if (navigator.mediaDevices.ondevicechange !== undefined) {
            navigator.mediaDevices.ondevicechange = null;
            navigator.mediaDevices.ondevicechange = function (event) {
                _this.logger.info('zsc.rd.0 devicechange');
                if (_this.stateCenter.deviceChangeTimer) {
                    clearTimeout(_this.stateCenter.deviceChangeTimer);
                    _this.stateCenter.deviceChangeTimer = null;
                }
                _this.stateCenter.deviceChangeTimer = setTimeout(function () {
                    client_util_1.ClientUtil.getDevices(function (res) {
                        // console.error('getDevices', this.stateCenter.deviceInfos, res);
                        var reducedCameras = [];
                        var _loop_1 = function (i) {
                            var camera = _this.stateCenter.deviceInfos.cameras[i];
                            if (!res.cameras.find(function (item) { return item.deviceID === camera.deviceID; })) {
                                reducedCameras.push(camera);
                            }
                        };
                        for (var i = 0; i < _this.stateCenter.deviceInfos.cameras.length; i++) {
                            _loop_1(i);
                        }
                        _this.stateCenter.deviceStateOut = false;
                        var deviceOut = false;
                        reducedCameras.length > 0 && (deviceOut = true);
                        reducedCameras.forEach(function (reducedCamera) {
                            for (var key in _this.publisherList) {
                                var localStream = _this.publisherList[key].localStream;
                                if (localStream &&
                                    _this.publisherList[key].cameraLabel === reducedCamera.deviceName) {
                                    // this.publisherList[key].publisher.peerConnectionGetStats((stats: any) => {
                                    //     console.warn('stats', stats);
                                    //     stats.video.videoBitrate == 0 &&
                                    deviceOut = false;
                                    var publisher = _this.publisherList[key].publisher;
                                    publisher.signal.sendStreamStatus(zego_extern_1.getSeq(), publisher.sessionId, -6, localStream.getAudioTracks()[0] &&
                                        localStream.getAudioTracks()[0].enabled == true
                                        ? 0
                                        : 2);
                                    var reportSeq = zego_extern_1.getReportSeq();
                                    _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskDeviceError);
                                    _this.dataReport.addMsgInfo(reportSeq, {
                                        stream_id: publisher.streamId,
                                        reason: 'device out',
                                        device: reducedCamera.deviceName,
                                    });
                                    _this.dataReport.uploadReport(reportSeq);
                                    _this.stateCenter.actionListener('deviceError', zego_externalError_1.errorCodeList.DEVICE_ERROR_TYPE_UNPLUGGED.code, reducedCamera.deviceName);
                                    // });
                                }
                                localStream && localStream.getAudioTracks().length === 0 && (deviceOut = false);
                            }
                        });
                        if (deviceOut) {
                            _this.stateCenter.deviceStateOut = true;
                        }
                        var reduceMicros = _this.stateCenter.deviceInfos.microphones.filter(function (item) { return !res.microphones.find(function (micro) { return micro.deviceID === item.deviceID; }); });
                        reduceMicros.forEach(function (reducedCamera) {
                            for (var key in _this.publisherList) {
                                var localStream = _this.publisherList[key].localStream;
                                if (localStream &&
                                    (_this.publisherList[key].microLabel === reducedCamera.deviceName ||
                                        _this.publisherList[key].microLabel.includes(reducedCamera.deviceName))) {
                                    var publisher = _this.publisherList[key].publisher;
                                    publisher.signal.sendStreamStatus(zego_extern_1.getSeq(), publisher.sessionId, localStream.getVideoTracks()[0] &&
                                        localStream.getVideoTracks()[0].enabled == true
                                        ? 0
                                        : 2, -6);
                                    var reportSeq = zego_extern_1.getReportSeq();
                                    _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskDeviceError);
                                    _this.dataReport.addMsgInfo(reportSeq, {
                                        stream_id: publisher.streamId,
                                        reason: 'device out',
                                        device: reducedCamera.deviceName,
                                    });
                                    _this.dataReport.uploadReport(reportSeq);
                                    _this.stateCenter.actionListener('deviceError', zego_externalError_1.errorCodeList.DEVICE_ERROR_TYPE_UNPLUGGED.code, _this.publisherList[key].microLabel);
                                }
                            }
                        });
                        var reduceSpeakers = _this.stateCenter.deviceInfos.speakers.filter(function (item) { return !res.speakers.find(function (micro) { return micro.deviceID === item.deviceID; }); });
                        var increseCameras = res.cameras.filter(function (item) {
                            return !_this.stateCenter.deviceInfos.cameras.find(function (camera) { return camera.deviceID === item.deviceID; });
                        });
                        var increseMicros = res.microphones.filter(function (item) {
                            return !_this.stateCenter.deviceInfos.microphones.find(function (camera) { return camera.deviceID === item.deviceID; });
                        });
                        var increseSpeakers = res.speakers.filter(function (item) {
                            return !_this.stateCenter.deviceInfos.speakers.find(function (camera) { return camera.deviceID === item.deviceID; });
                        });
                        // console.error(
                        //     'device',
                        //     reduceMicros,
                        //     reduceSpeakers,
                        //     reducedCameras,
                        //     increseMicros,
                        //     increseSpeakers,
                        //     increseCameras,
                        // );
                        reducedCameras.forEach(function (device) {
                            var reportSeq = zego_extern_1.getReportSeq();
                            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskVideoDeviceChanged);
                            _this.dataReport.addMsgInfo(reportSeq, {
                                update_type: 'delete',
                                device: device,
                            });
                            _this.dataReport.uploadReport(reportSeq);
                            _this.stateCenter.actionListener('videoDeviceStateChanged', 'DELETE', device);
                        });
                        reduceMicros.forEach(function (device) {
                            var reportSeq = zego_extern_1.getReportSeq();
                            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskAudioDeviceChanged);
                            _this.dataReport.addMsgInfo(reportSeq, {
                                update_type: 'delete',
                                device_type: 'input',
                                device: device,
                            });
                            _this.dataReport.uploadReport(reportSeq);
                            _this.stateCenter.actionListener('audioDeviceStateChanged', 'DELETE', 'Input', device);
                        });
                        reduceSpeakers.forEach(function (device) {
                            var reportSeq = zego_extern_1.getReportSeq();
                            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskAudioDeviceChanged);
                            _this.dataReport.addMsgInfo(reportSeq, {
                                update_type: 'delete',
                                device_type: 'output',
                                device: device,
                            });
                            _this.dataReport.uploadReport(reportSeq);
                            _this.stateCenter.actionListener('audioDeviceStateChanged', 'DELETE', 'Output', device);
                        });
                        increseCameras.forEach(function (device) {
                            var reportSeq = zego_extern_1.getReportSeq();
                            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskVideoDeviceChanged);
                            _this.dataReport.addMsgInfo(reportSeq, {
                                update_type: 'add',
                                device: device,
                            });
                            _this.dataReport.uploadReport(reportSeq);
                            _this.stateCenter.actionListener('videoDeviceStateChanged', 'ADD', device);
                        });
                        increseMicros.forEach(function (device) {
                            var reportSeq = zego_extern_1.getReportSeq();
                            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskAudioDeviceChanged);
                            _this.dataReport.addMsgInfo(reportSeq, {
                                update_type: 'add',
                                device_type: 'input',
                                device: device,
                            });
                            _this.dataReport.uploadReport(reportSeq);
                            _this.stateCenter.actionListener('audioDeviceStateChanged', 'ADD', 'Input', device);
                        });
                        increseSpeakers.forEach(function (device) {
                            var reportSeq = zego_extern_1.getReportSeq();
                            _this.dataReport.newReport(reportSeq, zego_logevent_1.eventList.kZegoTaskAudioDeviceChanged);
                            _this.dataReport.addMsgInfo(reportSeq, {
                                update_type: 'add',
                                device_type: 'output',
                                device: device,
                            });
                            _this.dataReport.uploadReport(reportSeq);
                            _this.stateCenter.actionListener('audioDeviceStateChanged', 'ADD', 'Output', device);
                        });
                        _this.stateCenter.deviceInfos = {
                            microphones: res.microphones,
                            speakers: res.speakers,
                            cameras: res.cameras,
                        };
                    }, function (err) {
                        _this.logger.warn('zsc.rd.0 getDevices err:', err);
                    });
                }, 500);
            };
        }
    };
    /*
     *    "zsc.sp.0": "ZegoStreamCenter.startPreview"
     */
    ZegoStreamCenterWeb.prototype.startPreview = function (mediaStreamConstraints, success, error) {
        var _this = this;
        var preview = null;
        preview = new zego_preview_1.ZegoPreview(this.logger);
        this.previewVideoList.push(preview);
        preview.startPreview(mediaStreamConstraints, function (stream) {
            _this.logger.debug('zsc.sp.0 call success');
            !_this.stateCenter.deviceInfos && _this.recordDevices();
            success && success(stream);
        }, function (err) {
            _this.previewVideoList = _this.previewVideoList.filter(function (view) { return view !== preview; });
            error && error(err);
        });
        return true;
    };
    /*
     *    "zsc.sp.1": "ZegoStreamCenter.stopPreview"
     */
    ZegoStreamCenterWeb.prototype.stopPreview = function (localStream) {
        if (!localStream) {
            this.logger.warn('zsc.sp.0 localStream null');
            return false;
        }
        for (var streamid in this.publisherList) {
            if (this.publisherList[streamid].localStream === localStream) {
                this.publisherList[streamid].localStream = null;
            }
        }
        var preview = this.checkPreview(localStream);
        if (!preview) {
            this.logger.warn('zsc.sp.0 no preview');
            return false;
        }
        if (preview.previewSuc) {
            preview.stopPreview();
            this.removePreview(preview);
        }
        return true;
    };
    /*
     *    "zsc.pss.0": "ZegoStreamCenter.setPublishStateStart"
     */
    ZegoStreamCenterWeb.prototype.setPublishStateStart = function (streamid, localStream, publishOption) {
        var _this = this;
        var totalStreamId = this.getTotalStreamId(streamid);
        var publish = this.publisherList[totalStreamId];
        var reportSeq = this.stateCenter.reportSeqList.startPublish[totalStreamId];
        this.dataReport.eventStart(reportSeq, 'setPublishState');
        if (publish) {
            this.logger.error('zsc.pss.0 publisher already exist');
            this.dataReport.eventEndWithMsgInfo(reportSeq, 'setPublishState', {
                message: 'publisher already exist',
            });
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kIsPublishing);
            delete this.stateCenter.reportSeqList.startPublish[totalStreamId];
            return false;
        }
        var publisher = new zego_publish_1.ZegoPublish(this.logger, null, this.dataReport, this.qualityTimerInterval, this, this.ac, this.mediaEleSources);
        publisher.state = zego_entity_1.ENUM_PUBLISH_STATE.start;
        publisher.reportSeq = this.stateCenter.reportSeqList.startPublish[totalStreamId] || 0;
        publisher.onPublishStateUpdate = function (type, _streamid, error) {
            var publish = _this.publisherList[_streamid];
            if (publish) {
                _this.onPublishStateUpdate(type, publish.streamID, error);
            }
            else {
                _this.logger.error('zsc.psuh.0 cannot find publish ' + streamid);
            }
        };
        publisher.onPublishQualityUpdate = function (_streamid, streamQuality) {
            var publish = _this.publisherList[_streamid];
            if (publish) {
                if (_this.stateCenter.deviceStateOut && streamQuality.audio.audioBitrate === 0) {
                    publish.deviceStateCount++;
                    if (publish.deviceStateCount >= 2) {
                        publish.deviceStateCount = 0;
                        _this.stateCenter.deviceStateOut = false;
                        _this.logger.warn('zsc.pss.0 publish audio error by device');
                        // this.onPublishStateUpdate(
                        //     ENUM_PUBLISH_STATE_UPDATE.error,
                        //     publish.streamID,
                        //     errorCodeList.PUBLISH_DEVICE_OUT_ERR,
                        // );
                    }
                }
                else {
                    publish.deviceStateCount = 0;
                }
                _this.onPublishQualityUpdate(publish.streamID, streamQuality);
            }
            else {
                _this.logger.error('zsc.psuh.0 cannot find publish ' + streamid);
            }
        };
        var cameraLabel = localStream.getVideoTracks()[0] && localStream.getVideoTracks()[0].label;
        var microLabel = localStream.getAudioTracks()[0] && localStream.getAudioTracks()[0].label;
        var cameraDeviceId = localStream.getVideoTracks()[0] && localStream.getVideoTracks()[0].getSettings().deviceId;
        var microDeviceId = localStream.getAudioTracks()[0] && localStream.getAudioTracks()[0].getSettings().deviceId;
        this.publisherList[totalStreamId] = {
            seq: 0,
            localStream: localStream,
            publisher: publisher,
            serverUrls: [],
            retryCount: 0,
            streamID: streamid,
            publishOption: publishOption,
            tryCountConnect: 1,
            countConnectTimer: undefined,
            cameraLabel: cameraLabel || '',
            microLabel: microLabel || '',
            cameraDeviceId: cameraDeviceId || '',
            microDeviceId: microDeviceId || '',
            deviceStateCount: 0,
        };
        this.dataReport.eventStart(publisher.reportSeq, 'GetSignalUrl');
        this.dataReport.eventStart(publisher.streamReportSeq, 'GetSignalUrl');
        return true;
    };
    /*
     *    "zsc.gts.0": "ZegoStreamCenter.getTotalStreamId"
     */
    ZegoStreamCenterWeb.prototype.getTotalStreamId = function (streamid) {
        if (this.testEnvironment) {
            var testStreamId = 'zegotest-' + this.appid + '-' + streamid;
            this.logger.info('zsc.gts.0 test streamid ' + testStreamId);
            return testStreamId;
        }
        return streamid;
    };
    /**
     * "zsc.grs.0": "ZegoStreamCenter.getRealStreamId"
     * @param streamid
     */
    ZegoStreamCenterWeb.prototype.getRealStreamId = function (streamid) {
        if (streamid.startsWith("zegotest-" + this.appid + "-")) {
            var realStreamId = streamid.substr(("zegotest-" + this.appid + "-").length);
            this.logger.info('zsc.grs.0 real streamid ' + realStreamId);
            return realStreamId;
        }
        return streamid;
    };
    /*
     *    "zsc.sps.0": "ZegoStreamCenter.startPublishingStream"
     */
    ZegoStreamCenterWeb.prototype.startPublishingStream = function (streamid, serverUrls) {
        this.logger.info('zsc.sps.0 call');
        var totalStreamid = this.getTotalStreamId(streamid);
        var publish = this.publisherList[totalStreamid];
        if (!publish) {
            this.logger.error("zsc.sps.0 publisher don't exist");
            return false;
        }
        var publisher = publish.publisher;
        this.dataReport.eventEndWithMsg(publisher.reportSeq, 'GetSignalUrl', {
            urls: serverUrls,
        });
        this.dataReport.eventEndWithMsg(publisher.streamReportSeq, 'GetSignalUrl', {
            urls: serverUrls,
        });
        if (!serverUrls || serverUrls.length === 0) {
            this.onPublishStateUpdate(zego_extern_1.ENUM_PUBLISH_STATE_UPDATE.error, streamid, zego_error_1.publishErrorList.DISPATCH_ERROR);
            this.logger.info("zsc.sps.0 server don't have signal url");
            return false;
        }
        publish.serverUrls = __spreadArrays(publish.serverUrls, serverUrls);
        var index = serverUrls.indexOf(this.server);
        if (index !== -1) {
            publish.serverUrls.splice(index, 1);
            publish.serverUrls.unshift(this.server);
        }
        return this.connectPublishServer(totalStreamid);
    };
    ZegoStreamCenterWeb.prototype.updateWaitingList = function (signalInfo, isPublish, streamID, success, error) {
        if (isPublish) {
            signalInfo.publishWaitingList.push({
                streamID: streamID,
                success: success,
                error: error,
            });
        }
        else {
            signalInfo.playWaitingList.push({
                streamID: streamID,
                success: success,
                error: error,
            });
        }
    };
    /*
     *    "zsc.ps.0": "ZegoStreamCenter.publishStream"
     */
    ZegoStreamCenterWeb.prototype.publishStream = function (streamid) {
        var publisher = this.publisherList[streamid].publisher;
        if (!publisher) {
            this.logger.info("zsc.ps.0 publisher don't exist");
            return;
        }
        var localStream = null, videoInfo = null;
        var publishOption = this.publisherList[streamid].publishOption;
        var preview = this.checkPreview(this.publisherList[streamid].localStream);
        if (preview) {
            localStream = preview.localStream;
            videoInfo = preview.videoInfo;
        }
        else {
            this.logger.error('zsc.ps.0 no preview found');
            return;
        }
        if (!localStream) {
            this.logger.error('zsc.ps.0 no localStream found');
            return;
        }
        this.logger.info('zsc.ps.0 call success');
        publisher.tryingNexitSignal = false;
        publisher.startPublish(streamid, localStream, videoInfo, preview.mediaStreamConfig, publishOption);
    };
    ZegoStreamCenterWeb.prototype.connectPublishServer = function (streamID, isForce) {
        var _this = this;
        var publish = this.publisherList[streamID];
        if (!publish) {
            this.logger.error("zsc.cps.0 publisher don't exist");
            return false;
        }
        this.dataReport.eventStart(isForce ? publish.publisher.retrySeq : publish.publisher.reportSeq, 'ConnectServer');
        this.dataReport.eventStart(publish.publisher.streamReportSeq, 'ConnectServer');
        this.connetWithReuseSignalServerTimer(streamID, true, function (streamid, signalInfo, serverUrl) {
            //check streamid exist
            var checkPublish = _this.publisherList[streamid];
            if (!checkPublish) {
                _this.logger.info("zsc.cps.0 after connect publisher don't exist");
                return;
            }
            var checkPublisher = checkPublish.publisher;
            if (!checkPublisher) {
                _this.logger.info("zsc.cps.1 check publisher don't exist");
                return;
            }
            _this.dataReport.eventEndWithMsg(isForce ? checkPublisher.retrySeq : checkPublisher.reportSeq, 'ConnectServer', {
                result: 0,
                server: serverUrl,
            });
            _this.dataReport.eventEndWithMsg(checkPublisher.streamReportSeq, 'ConnectServer', {
                result: 0,
                server: serverUrl,
            });
            var tokenInfo = signalInfo.tokenInfo;
            _this.logger.info('zsc.cps.0 update token success');
            if (tokenInfo && tokenInfo.report) {
                checkPublisher.qualityUpload = tokenInfo.report;
                checkPublisher.qualityUploadInterval = tokenInfo.report_interval;
            }
            checkPublisher.signal = signalInfo.signal;
            checkPublish.retryCount = 0;
            _this.server = serverUrl;
            _this.publishStream(streamid);
            _this.getTokenSuccess();
        }, function (streamID, result) {
            _this.logger.error('zsc.cps.0 update token failed ' + result);
            //check streamid exist
            var checkPublish = _this.publisherList[streamID];
            if (!checkPublish) {
                _this.logger.info("zsc.cps.0 after connect publisher don't exist");
                return;
            }
            var checkPublisher = checkPublish.publisher;
            if (!checkPublisher) {
                _this.logger.info("zsc.cps.1 check publisher don't exist");
                return;
            }
            if (_this.shouldRetry(checkPublish, result)) {
                _this.logger.info('zsc.cps.1 retry connect');
                checkPublish.serverUrls.splice(0, 1);
                checkPublish.retryCount += 1;
                _this.connectPublishServer(streamID);
            }
            else {
                if (isForce) {
                    _this.dataReport.eventEndWithMsg(checkPublisher.retrySeq, 'ConnectServer', {
                        result: result,
                    });
                    _this.dataReport.uploadReport(checkPublisher.retrySeq);
                    delete _this.stateCenter.reportSeqList.rePublish[streamID];
                }
                else {
                    _this.dataReport.eventEndWithMsg(checkPublisher.reportSeq, 'ConnectServer', {
                        result: result,
                    });
                    _this.dataReport.uploadReport(checkPublisher.reportSeq);
                    delete _this.stateCenter.reportSeqList.startPublish[streamID];
                }
                _this.onPublishStateUpdate(zego_extern_1.ENUM_PUBLISH_STATE_UPDATE.error, streamID, zego_error_1.publishErrorList.TOKEN_ERROR);
            }
        }, isForce);
        return true;
    };
    ZegoStreamCenterWeb.prototype.shouldRetry = function (stream, errorCode) {
        if (stream.serverUrls.length == 0) {
            return false;
        }
        if (stream.retryCount >= this.maxRetryCount) {
            return false;
        }
        if (errorCode != 3) {
            return false;
        }
        return true;
    };
    /*
     *    "zsc.gts.0": "ZegoStreamCenter.getTokenSuccess"
     */
    ZegoStreamCenterWeb.prototype.getTokenSuccess = function () {
        this.logger.debug('zsc.gts.0 call');
    };
    /*
     *    "zsc.sps.0.1": "ZegoStreamCenter.stopPublishingStream"
     */
    ZegoStreamCenterWeb.prototype.stopPublishingStream = function (streamid) {
        var totalStreamId = this.getTotalStreamId(streamid);
        var publish = this.publisherList[totalStreamId];
        if (!publish) {
            this.logger.warn("zsc.sps.0.1 publisher don't exist");
            return;
        }
        for (var signalUrl in this.signalList) {
            this.signalList[signalUrl].publishWaitingList = this.signalList[signalUrl].publishWaitingList.filter(function (info) { return info.streamID !== totalStreamId; });
        }
        delete this.publisherList[totalStreamId];
        if (publish.publisher) {
            publish.publisher.stopPublish();
            delete publish.publisher;
        }
        //update signal
        this.removeStreamFromSignal(true, totalStreamId);
        this.stopSignalHeartbeat();
        this.stopChargeInfosUpload();
        this.stopSoundLevel();
        this.logger.debug('zsc.sps.0.1 call success');
    };
    /*
     *    "zsc.psao.1": "ZegoStreamCenter.setPlayStreamAudioOutput"
     */
    // setPlayStreamAudioOutput(streamid: string, audioOutput: string) {
    //     const totalStreamId = this.getTotalStreamId(streamid);
    //     if (audioOutput != undefined && audioOutput.length != 0) {
    //         this.logger.debug('zsc.psao.1 device ' + audioOutput);
    //         const play = this.playerList[totalStreamId];
    //         if (!play) {
    //             this.logger.info("zsc.psao.1 play don't exist");
    //             return false;
    //         }
    //         if (!play.player) {
    //             this.logger.info("zsc.psao.1 player don't exist");
    //             return false;
    //         }
    //         return play.player.setAudioDestination(audioOutput);
    //     }
    //     return false;
    // }
    /*
     *    "zsc.psao.0": "ZegoStreamCenter.setPublishStreamAudioOutput"
     */
    ZegoStreamCenterWeb.prototype.setStreamAudioOutput = function (localVideo, audioOutput) {
        var _this = this;
        if (audioOutput != undefined && audioOutput.length != 0 && localVideo) {
            this.logger.debug('zsc.ssao.0 device ' + audioOutput);
            if (!localVideo) {
                this.logger.error('zsc.ssao.0 no localVideo');
                return false;
            }
            if (localVideo.sinkId !== 'undefined') {
                localVideo
                    .setSinkId(audioOutput)
                    .then(function () {
                    _this.logger.info('zsc.ssao.0 success device: ' + audioOutput);
                    // _this.audioOutput = audioOutput;
                })
                    .catch(function (error) {
                    _this.logger.info('zsc.ssao.0 ' + error.name);
                });
                return true;
            }
            else {
                this.logger.error('zsc.ssao.0 browser does not suppport');
                return false;
            }
        }
        return false;
    };
    /*
     *    "zsc.crss.0": "ZegoStreamCenter.connetWithReuseSignalServer"
     */
    ZegoStreamCenterWeb.prototype.connetWithReuseSignalServer = function (streamID, isPublish, serverUrl, success, error, isForce) {
        var _this = this;
        this.logger.info('zsc.crss.0 begin ' + serverUrl);
        var signalInfo = null;
        if (this.signalList[serverUrl] && !isForce) {
            signalInfo = this.signalList[serverUrl];
            //already connected
            if (signalInfo.state == zego_entity_1.ENUM_SIGNAL_STATE.connected) {
                this.logger.info('zsc.crss.0 already connected ' + serverUrl + ' streamId: ' + streamID);
                if (isPublish) {
                    signalInfo.publishConnectedList.push(streamID);
                }
                else {
                    signalInfo.playConnectedList.push(streamID);
                }
                success(streamID, signalInfo);
            }
            else if (signalInfo.state == zego_entity_1.ENUM_SIGNAL_STATE.connecting) {
                //isConnecting
                this.logger.debug('zsc.crss.0 signal is connecting ' + serverUrl + ' streamId: ' + streamID);
                this.updateWaitingList(signalInfo, isPublish, streamID, success, error);
            }
        }
        else {
            //no connect
            this.logger.info('zsc.crss.0 new signal ' + serverUrl + ' streamId: ' + streamID);
            var signal = new zego_signal_1.ZegoSignal(this.logger, this.stateCenter);
            signal.setSessionInfo(this.appid, this.userid);
            signal.onUpdateHeartBeartInterval = this.onUpdateHeartBeartIntervalHandle.bind(this);
            // signal.onSocketCloseCallBack = (): void => {
            //     this.stopSignalHeartbeat();
            // };
            signal.onDisconnect = this.onDisconnectHandle;
            this.signalList[serverUrl] = {
                signal: signal,
                state: zego_entity_1.ENUM_SIGNAL_STATE.connecting,
                publishWaitingList: [],
                playWaitingList: [],
                publishConnectedList: [],
                playConnectedList: [],
                tokenInfo: null,
            };
            this.updateWaitingList(this.signalList[serverUrl], isPublish, streamID, success, error);
            signal.connectServer(this.token, serverUrl, function (result, server, tokenInfo) {
                signalInfo = _this.signalList[serverUrl];
                var i = 0;
                var publishCallback;
                var playCallback;
                if (result != 0) {
                    //connected failed, notify and delete
                    _this.logger.debug('zsc.crss.0 connect failed ' + server);
                    for (i = 0; i < signalInfo.publishWaitingList.length; i++) {
                        publishCallback = signalInfo.publishWaitingList[i];
                        if (publishCallback.error) {
                            publishCallback.error(publishCallback.streamID, result);
                        }
                    }
                    for (i = 0; i < signalInfo.playWaitingList.length; i++) {
                        playCallback = signalInfo.playWaitingList[i];
                        if (playCallback.error) {
                            playCallback.error(playCallback.streamID, result);
                        }
                    }
                    delete _this.signalList[serverUrl];
                }
                else {
                    //connected success, notify and update state
                    _this.logger.debug('zsc.crss.0 connected success ' + server);
                    signalInfo.state = zego_entity_1.ENUM_SIGNAL_STATE.connected;
                    signalInfo.tokenInfo = tokenInfo;
                    for (i = 0; i < signalInfo.publishWaitingList.length; i++) {
                        publishCallback = signalInfo.publishWaitingList[i];
                        if (publishCallback.success) {
                            publishCallback.success(publishCallback.streamID, signalInfo);
                        }
                        signalInfo.publishConnectedList.push(publishCallback.streamID);
                    }
                    for (i = 0; i < signalInfo.playWaitingList.length; i++) {
                        playCallback = signalInfo.playWaitingList[i];
                        if (playCallback.success) {
                            playCallback.success(playCallback.streamID, signalInfo);
                        }
                        signalInfo.playConnectedList.push(playCallback.streamID);
                    }
                    signalInfo.publishWaitingList = [];
                    signalInfo.playWaitingList = [];
                    if (_this.heartbeatTimer == null)
                        _this.startSignalHeartbeat();
                    if (_this.chargeInfosTimer == null)
                        _this.startChargeInfosUpload();
                    if (_this.soundLevelTimer == null && _this.soundLevelDelegate)
                        _this.startSoundLevel();
                }
            });
        }
    };
    /*
     *    "zsc.pss.1": "ZegoStreamCenter.setPlayStateStart"
     */
    ZegoStreamCenterWeb.prototype.setPlayStateStart = function (streamid, playOption) {
        var _this = this;
        var totalStreamId = this.getTotalStreamId(streamid);
        var play = this.playerList[totalStreamId];
        var reportSeq = this.stateCenter.reportSeqList.startPlay[totalStreamId];
        this.dataReport.eventStart(reportSeq, 'setPlayState');
        if (play) {
            this.logger.error('zsc.pss.1 player already exist');
            this.dataReport.eventEndWithMsgInfo(reportSeq, 'setPlayState', {
                message: 'player already exist',
            });
            this.dataReport.uploadReport(reportSeq, undefined, zego_logevent_1.errorList.kIsPlaying);
            delete this.stateCenter.reportSeqList.startPlay[totalStreamId];
            return false;
        }
        var player = new zego_play_web_1.ZegoPlayWeb(this.logger, null, this.dataReport, this.qualityTimerInterval, this, this.ac);
        player.state = zego_entity_1.ENUM_PLAY_STATE.start;
        player.reportSeq = this.stateCenter.reportSeqList.startPlay[totalStreamId];
        this.playerList[totalStreamId] = {
            seq: 0,
            player: player,
            signal: null,
            serverUrls: [],
            retryCount: 0,
            streamID: streamid,
            playOption: playOption,
            tryCountConnect: 1,
            countConnectTimer: undefined,
        };
        player.onPlayStateUpdate = function (type, _streamid, error) {
            var play = _this.playerList[_streamid];
            if (play) {
                _this.onPlayStateUpdate(type, play.streamID, error);
            }
            else {
                _this.logger.error('zsc.pss.1 cannot find play ' + _streamid);
            }
        };
        player.onPlayQualityUpdate = function (_streamid, streamQuality) {
            var play = _this.playerList[_streamid];
            if (play) {
                _this.onPlayQualityUpdate(play.streamID, streamQuality);
            }
            else {
                _this.logger.error('zsc.pss.1 cannot find play ' + _streamid);
            }
        };
        player.onRemoteCameraStatusUpdate = function (_streamid, status) {
            var play = _this.playerList[_streamid];
            if (play) {
                _this.onRemoteCameraStatusUpdate(play.streamID, status);
            }
            else {
                _this.logger.error('zsc.pss.1 cannot find play ' + _streamid);
            }
        };
        player.onRemoteMicStatusUpdate = function (_streamid, status) {
            var play = _this.playerList[_streamid];
            if (play) {
                _this.onRemoteMicStatusUpdate(play.streamID, status);
            }
            else {
                _this.logger.error('zsc.pss.1 cannot find play ' + _streamid);
            }
        };
        this.dataReport.eventStart(player.reportSeq, 'GetSignalUrl');
        this.dataReport.eventStart(player.streamReportSeq, 'GetSignalUrl');
        return true;
    };
    /*
     *    "zsc.sps.1": "ZegoStreamCenter.startPlayingStream"
     */
    ZegoStreamCenterWeb.prototype.startPlayingStream = function (streamid, serverUrls, success) {
        this.logger.info('zsc.sps.1 start play called');
        var totalStreamId = this.getTotalStreamId(streamid);
        var play = this.playerList[totalStreamId];
        if (!play) {
            this.logger.error("zsc.sps.1 player don't exist");
            return false;
        }
        var player = play.player;
        this.dataReport.eventEndWithMsg(player.reportSeq, 'GetSignalUrl', {
            urls: serverUrls,
        });
        this.dataReport.eventEndWithMsg(player.streamReportSeq, 'GetSignalUrl', {
            urls: serverUrls,
        });
        if (serverUrls.length == 0) {
            this.onPlayStateUpdate(zego_extern_1.ENUM_PLAY_STATE_UPDATE.error, streamid, zego_error_1.playErrorList.DISPATCH_ERROR);
            this.logger.info("zsc.sps.1 server don't have signal url");
            return false;
        }
        play.serverUrls = __spreadArrays(play.serverUrls, serverUrls);
        var index = serverUrls.indexOf(this.server);
        if (index !== -1) {
            play.serverUrls.splice(index, 1);
            play.serverUrls.unshift(this.server);
        }
        return this.connectPlayServer(totalStreamId, success);
    };
    /*
     *    "zsc.cps.1": "ZegoStreamCenter.connectPlayServer"
     */
    ZegoStreamCenterWeb.prototype.connectPlayServer = function (streamId, success, isForce) {
        var _this = this;
        var play = this.playerList[streamId];
        if (!play) {
            this.logger.error("zsc.cps.1 player don't exist");
            return false;
        }
        this.dataReport.eventStart(isForce ? play.player.retrySeq : play.player.reportSeq, 'ConnectServer');
        this.dataReport.eventStart(play.player.streamReportSeq, 'ConnectServer');
        this.connetWithReuseSignalServerTimer(streamId, false, function (streamid, signalInfo, serverUrl) {
            //check streamid exist
            var checkPlay = _this.playerList[streamid];
            if (!checkPlay) {
                _this.logger.error("zsc.cps.1 after connect player don't exist");
                return;
            }
            var checkPlayer = checkPlay.player;
            if (!checkPlayer) {
                _this.logger.error("zsc.cps.1 checkplayer don't exist");
                return;
            }
            _this.dataReport.eventEndWithMsg(isForce ? checkPlayer.retrySeq : checkPlayer.reportSeq, 'ConnectServer', {
                result: 0,
                server: serverUrl,
            });
            _this.dataReport.eventEndWithMsg(checkPlayer.streamReportSeq, 'ConnectServer', {
                result: 0,
                server: serverUrl,
            });
            var tokenInfo = signalInfo.tokenInfo;
            _this.logger.info('zsc.cps.1 update token success');
            if (tokenInfo && tokenInfo.report) {
                checkPlayer.qualityUpload = tokenInfo.report;
                checkPlayer.qualityUploadInterval = tokenInfo.report_interval;
            }
            checkPlayer.signal = signalInfo.signal;
            checkPlay.retryCount = 0;
            _this.server = serverUrl;
            _this.playStream(streamid, success);
            _this.getTokenSuccess();
        }, function (streamid, result) {
            var checkPlay = _this.playerList[streamid];
            if (!checkPlay) {
                _this.logger.error("zsc.cps.1 after connect player don't exist");
                return;
            }
            if (_this.shouldRetry(checkPlay, result)) {
                _this.logger.info('zsc.cps.1 retry connect');
                var retryServerUrl = checkPlay.serverUrls[0];
                checkPlay.serverUrls.splice(0, 1);
                checkPlay.retryCount += 1;
                _this.connectPlayServer(streamid, success);
            }
            else {
                if (isForce) {
                    _this.dataReport.eventEndWithMsg(checkPlay.player.retrySeq, 'ConnectServer', {
                        result: result,
                    });
                    _this.dataReport.uploadReport(checkPlay.player.retrySeq);
                    delete _this.stateCenter.reportSeqList.rePlay[streamId];
                }
                else {
                    _this.dataReport.eventEndWithMsg(checkPlay.player.reportSeq, 'ConnectServer', {
                        result: result,
                    });
                    _this.dataReport.uploadReport(checkPlay.player.reportSeq);
                    delete _this.stateCenter.reportSeqList.startPlay[streamId];
                }
                _this.onPlayStateUpdate(zego_extern_1.ENUM_PLAY_STATE_UPDATE.error, streamid, zego_error_1.playErrorList.TOKEN_ERROR);
            }
        }, isForce);
        return true;
    };
    /*
     *    "zsc.crsst.0": "ZegoStreamCenter.connetWithReuseSignalServerTimer"
     */
    ZegoStreamCenterWeb.prototype.connetWithReuseSignalServerTimer = function (streamID, isPublish, success, error, isForce) {
        var _this = this;
        var serverUrls, serverUrl;
        if (isPublish && this.publisherList[streamID]) {
            serverUrls = this.publisherList[streamID].serverUrls;
            if (this.publisherList[streamID].tryCountConnect > serverUrls.length * 3) {
                this.logger.error('zs.crsst.0 beyond max limit');
                return;
            }
            this.publisherList[streamID].countConnectTimer = setTimeout(function () {
                _this.connetWithReuseSignalServerTimer(streamID, isPublish, success, error, isForce);
            }, this.tryCountConnectInterval);
            serverUrl = serverUrls[(this.publisherList[streamID].tryCountConnect - 1) % serverUrls.length];
            this.logger.info('zs.crsst.0 called ' + this.publisherList[streamID].tryCountConnect + ' ' + serverUrl);
            this.connetWithReuseSignalServer(streamID, isPublish, serverUrl, function (streamid, signalInfo) {
                clearTimeout(_this.publisherList[streamID].countConnectTimer);
                _this.publisherList[streamID].tryCountConnect = 1;
                success(streamid, signalInfo, serverUrl);
            }, this.publisherList[streamID].tryCountConnect === serverUrls.length * 3 ? error : undefined, isForce);
            ++this.publisherList[streamID].tryCountConnect;
        }
        else if (!isPublish && this.playerList[streamID]) {
            serverUrls = this.playerList[streamID].serverUrls;
            if (this.playerList[streamID].tryCountConnect > serverUrls.length * 3) {
                this.logger.error('zs.crsst.0 beyond max limit');
                return;
            }
            this.logger.info('zs.crsst.0 called ' + this.playerList[streamID].tryCountConnect);
            this.playerList[streamID].countConnectTimer = setTimeout(function () {
                _this.connetWithReuseSignalServerTimer(streamID, isPublish, success, error, isForce);
            }, this.tryCountConnectInterval);
            serverUrl = serverUrls[(this.playerList[streamID].tryCountConnect - 1) % serverUrls.length];
            // this.playerList[streamId].tryCountConnect === 1 && (serverUrl = serverUrl.replace ('zego', 'choui'));
            this.connetWithReuseSignalServer(streamID, isPublish, serverUrl, function (streamid, signalInfo) {
                clearTimeout(_this.playerList[streamID].countConnectTimer);
                _this.playerList[streamID].tryCountConnect = 1;
                success(streamid, signalInfo, serverUrl);
            }, this.playerList[streamID].tryCountConnect === serverUrls.length * 3 ? error : undefined, isForce);
            ++this.playerList[streamID].tryCountConnect;
        }
    };
    /*
     *    "zsc.ps.1": "ZegoStreamCenter.playStream"
     */
    ZegoStreamCenterWeb.prototype.playStream = function (streamid, success) {
        var player = this.playerList[streamid].player;
        if (!player) {
            this.logger.warn("zsc.ps.1 player don't exist");
            return;
        }
        this.logger.info('zsc.ps.1 call success');
        player.tryingNexitSignal = false;
        player.startPlay(streamid, success, this.playerList[streamid].playOption);
    };
    /*
     *    "zsc.rsfs.0": "ZegoStreamCenter.removeStreamFromSignal"
     */
    ZegoStreamCenterWeb.prototype.removeStreamFromSignal = function (isPublish, streamID) {
        var deleteSignal = [];
        for (var serverUrl in this.signalList) {
            var signalInfo = this.signalList[serverUrl];
            if (isPublish) {
                for (var i = 0; i < signalInfo.publishConnectedList.length; i++) {
                    if (signalInfo.publishConnectedList[i] === streamID) {
                        this.logger.debug('zsc.rsfs.0 found from publish');
                        signalInfo.publishConnectedList.splice(i, 1);
                        break;
                    }
                }
            }
            else {
                for (var j = 0; j < signalInfo.playConnectedList.length; j++) {
                    if (signalInfo.playConnectedList[j] === streamID) {
                        this.logger.debug('zsc.rsfs.0 found from play');
                        signalInfo.playConnectedList.splice(j, 1);
                        break;
                    }
                }
            }
            if (signalInfo.publishConnectedList.length == 0 && signalInfo.playConnectedList.length == 0) {
                signalInfo.signal.disconnectServer();
                deleteSignal.push(serverUrl);
            }
        }
        for (var k = 0; k < deleteSignal.length; k++) {
            delete this.signalList[deleteSignal[k]];
        }
    };
    /*
     *    "zsc.ssh.1": "ZegoStreamCenter.stopSignalHeartbeat"
     */
    ZegoStreamCenterWeb.prototype.stopSignalHeartbeat = function () {
        this.logger.debug('zsc.ssh.1 call');
        var count = 0;
        for (var url in this.signalList) {
            count += 1;
        }
        if (this.heartbeatTimer && count == 0) {
            this.logger.info('zsc.ssh.1 stop');
            clearTimeout(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    };
    /*
     *    "zsc.sps.1.1": "ZegoStreamCenter.stopPlayingStream"
     */
    ZegoStreamCenterWeb.prototype.stopPlayingStream = function (streamid) {
        var totalStreamId = this.getTotalStreamId(streamid);
        var player = this.playerList[totalStreamId];
        if (!player) {
            this.logger.info("zsc.sps.1.1 player don't exist");
            return;
        }
        // 人头计费
        // this.checkChargeInfos();
        for (var signalUrl in this.signalList) {
            this.signalList[signalUrl].playWaitingList = this.signalList[signalUrl].playWaitingList.filter(function (info) { return info.streamID !== totalStreamId; });
        }
        delete this.playerList[totalStreamId];
        if (player.player) {
            player.player.stopPlay();
            delete player.player;
        }
        //update signal
        this.removeStreamFromSignal(false, totalStreamId);
        this.stopSignalHeartbeat();
        this.stopChargeInfosUpload();
        this.stopSoundLevel();
        delete this.playSuccessCallBackList[streamid];
        this.logger.debug('zsc.sps.1.1 call success');
    };
    ZegoStreamCenterWeb.prototype.reset = function () {
        // 人头计费
        // this.checkChargeInfos();
        // this.stopChargeInfosUpload();
        for (var publishStreamId in this.publisherList) {
            if (this.publisherList[publishStreamId].publisher) {
                this.publisherList[publishStreamId].publisher.stopPublish();
            }
        }
        for (var playStreamId in this.playerList) {
            if (this.playerList[playStreamId].player) {
                this.playerList[playStreamId].player.stopPlay();
            }
        }
        for (var serverUrl in this.signalList) {
            if (this.signalList[serverUrl].signal) {
                this.signalList[serverUrl].signal.disconnectServer();
            }
        }
        this.playerList = {};
        this.publisherList = {};
        this.signalList = {};
        this.server = '';
        if (this.heartbeatTimer) {
            clearTimeout(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
    };
    ZegoStreamCenterWeb.prototype.replaceTrack = function (localStream, mediaStreamTrack, success, error) {
        var preview = this.checkPreview(localStream);
        var publisher = this.checkPublish(localStream);
        var isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        if (!publisher) {
            if (!preview) {
                this.logger.error('zc.rt.0 preview no found');
                error && error(zego_externalError_1.errorCodeList.PUBLISH_NO_PREVIEW);
                return;
            }
            var localStream_1 = preview.localStream;
            var localTrack = localStream_1.getTracks().find(function (t) { return t.kind === mediaStreamTrack.kind; });
            if (localTrack) {
                // !isSafari && localTrack.stop();
                localStream_1.removeTrack(localTrack);
                localStream_1.addTrack(mediaStreamTrack);
                success && success({ code: 0, msg: '' });
            }
            else {
                this.logger.error('zc.rt.0 track no found');
                error && error({ code: zego_externalError_1.errorCodeList.TRACK_NOT_FOUND.code, msg: zego_externalError_1.errorCodeList.TRACK_NOT_FOUND.msg });
            }
        }
        else {
            var localStream_2 = publisher.publisher.localStream;
            if (!publisher.publisher.peerConnection.getSenders ||
                !publisher.publisher.peerConnection.getSenders()[0].replaceTrack) {
                this.logger.error('zc.rt.0 replack track is not supported');
                error &&
                    error({
                        code: zego_externalError_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT.code,
                        msg: zego_externalError_1.errorCodeList.PUBLISHER_BROWSER_NOT_SUPPORT.msg + ' replack track is not supported',
                    });
                return;
            }
            var localTrack = localStream_2.getTracks().find(function (t) { return t.kind === mediaStreamTrack.kind; });
            var sender = publisher.publisher.peerConnection
                .getSenders()
                .find(function (s) { return s.track.kind === mediaStreamTrack.kind; });
            if (localTrack && sender) {
                var cameraStatus = 0;
                var micStatus = 0;
                var trackStateChanged = mediaStreamTrack.enabled !== localTrack.enabled ? true : false;
                if (mediaStreamTrack.kind === 'video') {
                    cameraStatus = mediaStreamTrack.enabled === true ? 0 : 2;
                    micStatus =
                        localStream_2.getAudioTracks()[0] && localStream_2.getAudioTracks()[0].enabled == true ? 0 : 2;
                }
                else if (mediaStreamTrack.kind === 'audio') {
                    micStatus = mediaStreamTrack.enabled === true ? 0 : 2;
                    cameraStatus =
                        localStream_2.getVideoTracks()[0] && localStream_2.getVideoTracks()[0].enabled == true ? 0 : 2;
                }
                // !isSafari && localTrack.stop();
                sender.replaceTrack(mediaStreamTrack);
                localStream_2.removeTrack(localTrack);
                localStream_2.addTrack(mediaStreamTrack);
                trackStateChanged &&
                    publisher.publisher.signal &&
                    publisher.publisher.signal.sendStreamStatus(zego_extern_1.getSeq(), publisher.publisher.sessionId, cameraStatus, micStatus);
                success && success({ code: 0, msg: '' });
            }
            else {
                this.logger.error('zc.rt.0 publisher track no found');
                error && error({ code: zego_externalError_1.errorCodeList.TRACK_NOT_FOUND.code, msg: zego_externalError_1.errorCodeList.TRACK_NOT_FOUND.msg });
            }
        }
    };
    ZegoStreamCenterWeb.prototype.startSignalHeartbeat = function () {
        var _this = this;
        this.logger.debug('zsc.ssh.0 call');
        if (this.heartbeatTimer) {
            clearTimeout(this.heartbeatTimer);
            this.heartbeatTimer = null;
        }
        this.heartbeatTimer = setTimeout(function () {
            _this.checkSignalHeartbeat();
        }, this.heartbeatInterval);
    };
    ZegoStreamCenterWeb.prototype.startChargeInfosUpload = function () {
        var _this = this;
        this.logger.debug('zsc.sciu.0 call');
        if (this.chargeInfosTimer) {
            clearTimeout(this.chargeInfosTimer);
            this.chargeInfosTimer = null;
        }
        this.chargeInfosTimer = setTimeout(function () {
            _this.checkChargeInfos();
        }, this.chargeInfosInterval);
    };
    ZegoStreamCenterWeb.prototype.checkChargeInfos = function () {
        this.logger.debug('zsc.cci.0 call');
        var chargeinfo = {
            is_publishing: 0,
            play_max_audio_bitrate: 0,
            play_stream_resolution_infos: [],
        };
        this.chargeInfos.timestamp_begin = new Date().getTime();
        for (var j in this.publisherList) {
            var publisher = this.publisherList[j].publisher;
            publisher.state === zego_entity_1.ENUM_PUBLISH_STATE.publishing && (chargeinfo.is_publishing = 1);
            break;
        }
        chargeinfo.play_max_audio_bitrate = 0;
        var _loop_2 = function (i) {
            var remoteStream = this_1.playerList[i].player.playStream;
            var videoInfo = remoteStream && remoteStream.getVideoTracks().length !== 0
                ? remoteStream.getVideoTracks()[0].getSettings()
                : undefined;
            var resolutionInfo = {
                video_width: videoInfo ? (videoInfo.width ? videoInfo.width : 0) : 0,
                video_height: videoInfo ? (videoInfo.height ? videoInfo.height : 0) : 0,
                count: 1,
            };
            !chargeinfo.play_stream_resolution_infos.find(function (val) {
                if (val.video_width == resolutionInfo.video_width && val.video_height == resolutionInfo.video_height) {
                    val.count++;
                    return true;
                }
                else {
                    return false;
                }
            }) && chargeinfo.play_stream_resolution_infos.push(resolutionInfo);
            if (resolutionInfo.video_width == 0 && resolutionInfo.video_height == 0) {
                var audioBitrate = this_1.playerList[i].player.lastPlayStats.audioBitrate * 1000;
                audioBitrate > chargeinfo.play_max_audio_bitrate && (chargeinfo.play_max_audio_bitrate = audioBitrate);
            }
        };
        var this_1 = this;
        for (var i in this.playerList) {
            _loop_2(i);
        }
        if (this.chargeInfos.timestamp_end !== 0) {
            this.chargeInfos.timestamp_diff = this.chargeInfos.timestamp_begin - this.chargeInfos.timestamp_end;
            this.chargeInfos.timestamp_diff_flag = 1;
        }
        else {
            this.chargeInfos.timestamp_diff = 0;
            this.chargeInfos.timestamp_diff_flag = 0;
        }
        this.chargeInfos.timestamp_end = new Date().getTime();
        this.chargeInfos.infos = [chargeinfo];
        chargeinfo.play_stream_resolution_infos.length !== 0 && this.logger.report(this.chargeInfos);
        this.chargeInfosTimer && this.startChargeInfosUpload();
    };
    // chargeInfoUploadEnd(): void {
    //     this.logger.debug('zsc.ciue.0 call');
    //     this.checkChargeInfos();
    //     if (this.chargeInfosTimer) {
    //         clearTimeout(this.chargeInfosTimer);
    //         this.chargeInfosTimer = null;
    //     }
    //     this.logger.debug('zsc.ciue.0 call success');
    // }
    ZegoStreamCenterWeb.prototype.checkSignalHeartbeat = function () {
        this.logger.debug('zsc.csh.0 call');
        for (var streamUrl in this.signalList) {
            if (this.signalList[streamUrl].signal) {
                this.signalList[streamUrl].signal.sendHeartbeat();
            }
        }
        if (this.heartbeatTimer)
            this.startSignalHeartbeat();
    };
    ZegoStreamCenterWeb.prototype.stopChargeInfosUpload = function () {
        this.logger.debug('zsc.sciu.0 call');
        var count = 0;
        for (var url in this.signalList) {
            count += 1;
        }
        if (this.chargeInfosTimer && count == 0) {
            this.logger.info('zsc.sciu.0 stop');
            clearTimeout(this.chargeInfosTimer);
            this.chargeInfosTimer = null;
        }
    };
    ZegoStreamCenterWeb.prototype.getPublisher = function (streamID) {
        var publisher = null;
        var tototalStreamId = this.getTotalStreamId(streamID);
        if (this.publisherList[tototalStreamId] && this.publisherList[tototalStreamId].publisher) {
            publisher = this.publisherList[tototalStreamId].publisher;
        }
        return publisher;
    };
    ZegoStreamCenterWeb.prototype.checkPreview = function (localStream) {
        for (var i = 0; i < this.previewVideoList.length; i++) {
            if (this.previewVideoList[i].localStream === localStream) {
                return this.previewVideoList[i];
            }
        }
        return null;
    };
    ZegoStreamCenterWeb.prototype.checkPublish = function (localStream) {
        for (var streamID in this.publisherList) {
            if (this.publisherList[streamID].localStream == localStream) {
                return this.publisherList[streamID];
            }
        }
        return null;
    };
    ZegoStreamCenterWeb.prototype.removePreview = function (preview) {
        for (var i = 0; i < this.previewVideoList.length; i++) {
            if (this.previewVideoList[i] === preview) {
                this.previewVideoList.splice(i, 1);
                break;
            }
        }
    };
    ZegoStreamCenterWeb.prototype.onPlayerStreamUrlUpdate = function (streamid, url, type) { };
    ZegoStreamCenterWeb.prototype.getScreenConstrains = function (screen) {
        var config = {};
        if (typeof screen == 'boolean' && screen) {
            config = {
                audio: false,
                frameRate: 15,
                bitRate: 1500,
            };
        }
        else if (typeof screen == 'object') {
            switch (screen.videoQuality) {
                case 1:
                    config = {
                        frameRate: zego_entity_1.ENUM_SCREEM_RESOLUTION_TYPE.LOW.frameRate,
                        bitRate: zego_entity_1.ENUM_SCREEM_RESOLUTION_TYPE.LOW.bitRate,
                    };
                    break;
                case 2:
                    config = {
                        frameRate: zego_entity_1.ENUM_SCREEM_RESOLUTION_TYPE.MEDIUM.frameRate,
                        bitRate: zego_entity_1.ENUM_SCREEM_RESOLUTION_TYPE.MEDIUM.bitRate,
                    };
                    break;
                case 3:
                    config = {
                        frameRate: zego_entity_1.ENUM_SCREEM_RESOLUTION_TYPE.HIGH.frameRate,
                        bitRate: zego_entity_1.ENUM_SCREEM_RESOLUTION_TYPE.HIGH.bitRate,
                    };
                    break;
                case 4:
                    if (typeof screen.frameRate !== 'number') {
                        this.logger.error('zc.gsc.0 screen frameRate must be required and integer number ');
                        screen.frameRate = 15;
                    }
                    if (typeof screen.bitRate !== 'number' || screen.bitRate > 3000) {
                        this.logger.error('zc.gsc.0 screen bitRate must be required and integer number and lower than 3000');
                        screen.bitRate = 1500;
                    }
                    config = {
                        frameRate: screen.frameRate,
                        bitRate: screen.bitRate,
                    };
            }
            config.audio = typeof screen.audio == 'boolean' ? screen.audio : false;
        }
        return config;
    };
    ZegoStreamCenterWeb.prototype.createScreenPreviewer = function (stream, screenConfig) {
        var preview = new zego_preview_1.ZegoPreview(this.logger);
        var videoInfo = stream.getVideoTracks()[0].getSettings();
        // this.stateCenter.screenShotStream = stream;
        this.previewVideoList.push(preview);
        preview.mediaStreamConfig = screenConfig;
        preview.localStream = stream;
        preview.videoInfo = {
            width: videoInfo.width,
            height: videoInfo.height,
            frameRate: videoInfo.frameRate || 0,
            bitRate: screenConfig.bitRate || 0,
        };
        preview.previewSuc = true;
        return preview;
    };
    ZegoStreamCenterWeb.prototype.switchDevice = function (type, localStream, deviceId, success, error) {
        // let sender;
        var _this = this;
        var preview = this.checkPreview(localStream);
        if (!preview) {
            this.logger.error('zsc.sd.0 preview no found');
            error && error(zego_externalError_1.errorCodeList.PUBLISH_NO_PREVIEW);
            return;
        }
        var publisherInfo = null;
        for (var i in this.publisherList) {
            this.publisherList[i].localStream == localStream && (publisherInfo = this.publisherList[i]);
        }
        if (type === 'video' && preview.mediaStreamConfig.video == false) {
            this.logger.error('zsc.sd.0 camera can not be changed when video is false');
            error && error(zego_externalError_1.errorCodeList.VIDEO_DEVICE_FALSE);
            return;
        }
        if (type === 'audio' && preview.mediaStreamConfig.audio == false) {
            this.logger.error('zsc.sd.0 microphone can not be changed when audio is false');
            error && error(zego_externalError_1.errorCodeList.AUDIO_DEVICE_FALSE);
            return;
        }
        if (preview.mediaStreamConfig.videoInput !== deviceId) {
            delete preview.mediaStreamConfig.facingMode;
        }
        var mediaStreamConfig = {};
        var lastTrack;
        if (type === 'video') {
            mediaStreamConfig.videoInput = deviceId;
            lastTrack = localStream.getVideoTracks()[0];
        }
        else {
            mediaStreamConfig.audioInput = deviceId;
            lastTrack = localStream.getAudioTracks()[0];
        }
        // const isSafari: boolean = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        // 部分手机不关闭上次的流的音视频轨 会导致预览失败（比如 小米8），safari不关闭
        // FireFox 不停止可能会NotReadableError: Concurrent mic process limit
        // !isSafari && lastTrack.stop();
        var bro = client_util_1.ClientUtil.getBrowser();
        this.logger.info('zsc.sd.0 browser ' + bro);
        bro === 'Firefox' && lastTrack.stop();
        var constraints = Object.assign(preview.mediaStreamConfig, mediaStreamConfig);
        var mediaStreamConstraints = preview.getMediaStreamConstraints(constraints);
        var backupStream = localStream.clone();
        navigator.mediaDevices.getUserMedia(mediaStreamConstraints).then(function (stream) {
            stream.getTracks().forEach(function (track) {
                var localTrack = localStream.getTracks().find(function (t) { return t.kind === track.kind; });
                track.enabled = localTrack.enabled;
                if (publisherInfo) {
                    var sender = publisherInfo.publisher.peerConnection
                        .getSenders()
                        .find(function (s) { return s.track !== null && s.track.kind === track.kind; });
                    if (sender) {
                        sender.replaceTrack(track);
                    }
                    else {
                        _this.logger.warn('zsc.sd.0 no sender found, only swithcing device on localMediaElement');
                    }
                }
                localStream.removeTrack(localTrack);
                localStream.addTrack(track);
            });
            backupStream.getTracks().forEach(function (track) { return track.stop(); });
            _this.logger.info('zsc.sd.0 swtich ' + type + ' device success');
            success && success();
        }, function (err) {
            _this.logger.error('zsc.sd.0 swtich ' + type + 'device fail ', err.name, JSON.stringify(err));
            bro === 'Firefox' &&
                backupStream.getTracks().forEach(function (track) {
                    var localTrack = localStream.getTracks().find(function (t) { return t.kind === track.kind; });
                    var sender = publisherInfo.publisher.peerConnection
                        .getSenders()
                        .find(function (s) { return s.track !== null && s.track.kind === track.kind; });
                    sender.replaceTrack(track);
                    localStream.removeTrack(localTrack);
                    localStream.addTrack(track);
                });
            error && error(err);
        });
    };
    ZegoStreamCenterWeb.prototype.setPublishStreamConstraints = function (stream, constraints, success, error) {
        var _this = this;
        var isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
        var publisher = null;
        this.logger.info('zsc.spsc.0 constraints', JSON.stringify(constraints));
        for (var i in this.publisherList) {
            this.publisherList[i].localStream == stream && (publisher = this.publisherList[i]);
        }
        if (!publisher) {
            this.logger.error('zsc.spsc.0 publisher not found');
            error && error(zego_externalError_1.errorCodeList.PUBLISH_NOT_PUBLISH);
            return;
        }
        this.logger.info('zsc.spsc.0 streamId ', publisher.streamID);
        var preview = this.checkPreview(stream);
        if (!preview) {
            this.logger.error('zsc.spsc.0 preview no found');
            error && error(zego_externalError_1.errorCodeList.PUBLISH_NO_PREVIEW);
            return;
        }
        // if ((constraints.width && constraints.width < 100) || (constraints.height && constraints.height < 100)) {
        //     this.logger.error('zsc.spsc.0 constraints wrong');
        //     error && error(errorCodeList.INPUT_PARAM);
        //     return;
        // }
        var applyVideo = false;
        var applyAudio = false;
        if (constraints.width || constraints.height || constraints.frameRate) {
            preview.mediaStreamConfig.videoQuality = 4;
            applyVideo = true;
        }
        if (constraints.ANS || constraints.AGC || constraints.AEC) {
            applyAudio = true;
        }
        var localStream = preview.localStream;
        var videoTrack = localStream.getVideoTracks()[0];
        var audioTrack = localStream.getAudioTracks()[0];
        if (applyVideo && !videoTrack) {
            this.logger.error('zsc.spsc.0 video track not found');
            error && error(zego_externalError_1.errorCodeList.TRACK_NOT_FOUND);
        }
        if (applyAudio && !audioTrack) {
            this.logger.error('zsc.spsc.0 audio track not found');
            error && error(zego_externalError_1.errorCodeList.TRACK_NOT_FOUND);
        }
        var mediaStreamConfig = Object.assign(preview.mediaStreamConfig, constraints);
        var mediaStreamConstraints = preview.getMediaStreamConstraints(mediaStreamConfig, true);
        this.logger.info('zsc.spsc.0 applyConstraints ', JSON.stringify(mediaStreamConstraints));
        var promiseList = [];
        if (applyVideo) {
            promiseList.push(videoTrack.applyConstraints(mediaStreamConstraints.video));
        }
        if (applyAudio) {
            promiseList.push(audioTrack.applyConstraints(mediaStreamConstraints.audio));
        }
        if (constraints.maxBitrate) {
            var sender = publisher.publisher.peerConnection
                .getSenders()
                .find(function (s) { return s.track && s.track.kind === 'video'; });
            var parameters = sender.getParameters();
            if (!parameters.encodings) {
                parameters.encodings = [{}];
            }
            // parameters.encodings[0].minBitrate = minBitRate * 1e3;
            parameters.encodings[0].maxBitrate = constraints.maxBitrate * 1e3;
            promiseList.push(sender.setParameters(parameters));
        }
        if (promiseList.length > 0) {
            Promise.all(promiseList)
                .then(function (values) {
                _this.logger.info('zsc.spsc.0 set constraints success');
                success && success();
            })
                .catch(function (err) {
                _this.logger.error('zsc.spsc.0 fail reason ', err.name, JSON.stringify(err));
                error &&
                    error({
                        code: zego_externalError_1.errorCodeList.PUBLISHER_CONSTRAINTS_ERROR.code,
                        msg: err.name + " " + (err.constraint ? 'constraint:' + err.constraint : ''),
                    });
            });
        }
        else {
            this.logger.warn('zsc.spsc.0 constaints is no changes');
            error &&
                error({
                    code: zego_externalError_1.errorCodeList.PUBLISHER_CONSTRAINTS_ERROR.code,
                    msg: "constaints is no changes",
                });
        }
    };
    ZegoStreamCenterWeb.prototype.preloadEffect = function (ac, id, effectUrl, callBack) {
        var _this = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', effectUrl, true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = function () {
            if (xhr.status == 200 || xhr.status == 304) {
                var buffer = xhr.response;
                ac.decodeAudioData(buffer, function (ab) {
                    _this.logger.info('zc.pe.0 effect preload success');
                    _this.stateCenter.audioEffectBuffer[id] = ab;
                    callBack && callBack();
                }, function (err) {
                    _this.logger.error('zc.pe.0 effect preload fail ' + err);
                    callBack && callBack(err);
                });
            }
            else {
                var err = xhr.statusText;
                _this.logger.error('zc.pe.0 effect preload fail ' + err);
                callBack && callBack(err);
            }
        };
        xhr.send();
    };
    ZegoStreamCenterWeb.prototype.playEffect = function (AudioMixConfig, start, end) {
        var audioBuffer = this.stateCenter.audioEffectBuffer[AudioMixConfig.effectID];
        var publisher = this.getPublisher(AudioMixConfig.streamID);
        if (!publisher) {
            this.logger.error("zc.pe.1 publisher doesn't exist");
            return;
        }
        if (audioBuffer) {
            publisher.playEffect(AudioMixConfig, audioBuffer, start, end);
        }
        else {
            this.logger.error('zc.pe.1 no audio buffer found');
        }
    };
    ZegoStreamCenterWeb.prototype.pauseEffect = function (streamID, effectID) {
        var publisher = this.getPublisher(streamID);
        if (!publisher) {
            this.logger.error("zc.pe.2 publisher doesn't exist");
            return false;
        }
        return publisher.pauseEffect(effectID);
    };
    ZegoStreamCenterWeb.prototype.resumeEffect = function (streamID, effectID) {
        var publisher = this.getPublisher(streamID);
        if (!publisher) {
            this.logger.error("zc.re.0 publisher doesn't exist");
            return false;
        }
        return publisher.resumeEffect(effectID);
    };
    ZegoStreamCenterWeb.prototype.stopEffect = function (streamID, effectID) {
        var publisher = this.getPublisher(streamID);
        if (!publisher) {
            this.logger.error("zc.re.0 publisher doesn't exist");
            return false;
        }
        return publisher.stopEffect(effectID);
    };
    ZegoStreamCenterWeb.prototype.setMixingAudioVolume = function (streamID, volume, audio) {
        var publisher = this.getPublisher(streamID);
        if (!publisher) {
            this.logger.error("zc.sma.2 publisher doesn't exist");
            return false;
        }
        // return true;
        //todo
        return publisher.setMixingAudioVolume(volume / 100, audio);
    };
    ZegoStreamCenterWeb.prototype.startMixingAudio = function (streamID, mediaList) {
        var publisher = this.getPublisher(streamID);
        if (!publisher) {
            this.logger.error("zc.sma.0 publisher doesn't exist");
            return false;
        }
        return publisher.startMixingAudio(mediaList);
    };
    ZegoStreamCenterWeb.prototype.stopMixingAudio = function (streamID, audio) {
        var publisher = this.getPublisher(streamID);
        if (!publisher) {
            this.logger.error("zc.sma.1 publisher doesn't exist");
            return false;
        }
        return publisher.stopMixingAudio(audio);
    };
    // voiceChange(mult: number, streamID: string): any {
    //     const publisher: ZegoPublish | null = this.getPublisher(streamID);
    //     if (publisher) return publisher.voiceChange(mult);
    // }
    // voiceBack(streamID: string): void {
    //     const publisher: ZegoPublish | null = this.getPublisher(streamID);
    //     if (publisher) return publisher.voiceBack();
    // }
    ZegoStreamCenterWeb.prototype.mixingBuffer = function (streamID, sourceID, arrayBuffer, callBack) {
        var publisher = this.getPublisher(streamID);
        if (!publisher) {
            this.logger.error("zc.mb.0 publisher doesn't exist");
            return;
        }
        if (arrayBuffer instanceof ArrayBuffer) {
            publisher.mixingBuffer(sourceID, arrayBuffer, callBack);
        }
        else {
            this.logger.error('zc.mb.0 array buffer not found');
            return;
        }
    };
    ZegoStreamCenterWeb.prototype.stopMixingBuffer = function (streamID, sourceID) {
        var publisher = this.getPublisher(streamID);
        if (!publisher) {
            this.logger.error("zc.sma.1 publisher doesn't exist");
            return false;
        }
        return publisher.stopMixingBuffer(sourceID);
    };
    ZegoStreamCenterWeb.prototype.setSoundLevelDelegate = function (bool, timeInMs) {
        this.logger.info('zsc.ssd.0 call');
        timeInMs && (this.soundLevelInterval = timeInMs);
        this.soundLevelDelegate = bool;
        for (var i in this.publisherList) {
            var publisher = this.publisherList[i].publisher;
            if (bool) {
                publisher.startSoundLevel();
            }
            else {
                publisher.stopSoundLevel();
            }
        }
        for (var i in this.playerList) {
            var player = this.playerList[i].player;
            if (bool) {
                player.startSoundLevel();
            }
            else {
                player.stopSoundLevel();
            }
        }
        if (!bool) {
            this.logger.info('zsc.ssd.0 stop getting sound');
            this.soundLevelTimer && clearTimeout(this.soundLevelTimer);
            this.soundLevelTimer = null;
            this.soundLevelInterval = 1000;
        }
        else {
            this.logger.info('zsc.ssd.0 start getting sound');
            var count = 0;
            for (var url in this.signalList) {
                count += 1;
            }
            this.soundLevelTimer == null && count > 0 && this.startSoundLevel();
        }
    };
    ZegoStreamCenterWeb.prototype.startSoundLevel = function () {
        var _this = this;
        this.logger.debug('zsc.ssl.0 call');
        if (this.soundLevelTimer) {
            clearTimeout(this.soundLevelTimer);
            this.soundLevelTimer = null;
        }
        this.soundLevelTimer = setTimeout(function () {
            _this.checkSoundLevel();
        }, this.soundLevelInterval);
    };
    ZegoStreamCenterWeb.prototype.checkSoundLevel = function () {
        this.logger.debug('zsc.csl.0 call');
        var soundLevelList = [];
        for (var i in this.publisherList) {
            var publisher = this.publisherList[i].publisher;
            soundLevelList.push({
                streamID: this.getBackStreamId(publisher.streamId),
                soundLevel: publisher.soundLevel,
                type: 'push',
            });
        }
        for (var i in this.playerList) {
            var player = this.playerList[i].player;
            soundLevelList.push({
                streamID: this.getBackStreamId(player.streamId),
                soundLevel: player.soundLevel,
                type: 'pull',
            });
        }
        this.soundLevelDelegate && soundLevelList.length > 0 && this.onSoundLevelUpdate(soundLevelList);
        this.soundLevelDelegate && this.startSoundLevel();
    };
    ZegoStreamCenterWeb.prototype.getBackStreamId = function (streamid) {
        if (this.testEnvironment && streamid) {
            var backStreamId = streamid.replace('zegotest-' + this.appid + '-', '');
            //this.logger.debug ('zsc.gbs.0 test back streamid ' + backStreamId);
            return backStreamId;
        }
        return streamid;
    };
    ZegoStreamCenterWeb.prototype.onSoundLevelUpdate = function (soundLevelList) { };
    ZegoStreamCenterWeb.prototype.stopSoundLevel = function () {
        var count = 0;
        for (var url in this.signalList) {
            count += 1;
        }
        if (this.soundLevelTimer && count == 0) {
            this.logger.info('zsc.ssl.0 stop');
            clearTimeout(this.soundLevelTimer);
            this.soundLevelTimer = null;
            this.soundLevelInterval = 1000;
        }
    };
    return ZegoStreamCenterWeb;
}(ZegoStreamCenter_1.ZegoStreamCenter));
exports.ZegoStreamCenterWeb = ZegoStreamCenterWeb;


/***/ }),

/***/ "./types/index.ts":
/*!************************!*\
  !*** ./types/index.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ })

/******/ });
});