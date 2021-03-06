export declare const eventList: {
    kZegoTaskInitSetting: string;
    kZegoTaskLoginRoom: string;
    kZegoTaskLogoutRoom: string;
    kZegoTaskReLoginRoom: string;
    kZegoTaskSdkDisconnect: string;
    kZegoTaskKickout: string;
    kZegoTaskSessionClose: string;
    kZegoTaskLiveRoomhHB: string;
    kZegoTaskLiveSendRoomBigIM: string;
    kZegoTaskLiveGetRoomBigIM: string;
    kZegoTaskLiveRoomGetUserUpdateInfo: string;
    kZegoTaskLiveRoomGetRoomMessage: string;
    kZegoTaskLiveRoomSendRoomMessage: string;
    kZegoTaskLiveRoomSendCustomCommand: string;
    kZegoTaskLiveRoomGetCustomCommand: string;
    kZegoTaskLiveRoomSendStreamExtraInfo: string;
    kZegoTaskLiveRoomGetStreamExtraInfo: string;
    kZegoTaskLiveRoomGetStreamUpdateInfo: string;
    kZegoTaskPublishStart: string;
    kZegoTaskRePublish: string;
    kZegoTaskPublishStop: string;
    kZegoTaskPlayStart: string;
    kZegoTaskRePlay: string;
    kZegoTaskPlayStop: string;
    kZegoTaskMixStart: string;
    kZegoTaskMixStop: string;
    kZegoTaskMixConfig: string;
    kZegoTaskEnumDevices: string;
    kZegoTaskSetDebug: string;
    kZegoTaskSetLog: string;
    kZegoTaskUseVideoDevice: string;
    kZegoTaskUseAudioDevice: string;
    kZegoTaskCheckSystemRequirements: string;
    kZegoTaskMutePublishVideo: string;
    kZegoTaskMutePublishAudio: string;
    kZegoTaskRemoteCameraUpdate: string;
    kZegoTaskRemoteMicUpdate: string;
    kZegoTaskGetSoundLevel: string;
    kZegoTaskStopSoundLevel: string;
    kZegoTaskAddPublishCdnUrl: string;
    kZegoTaskRemovePublishCdnUrl: string;
    kZegoTaskClearPublishCdnUrl: string;
    kZegoTaskCreateStream: string;
    kZegoTaskDestroyStream: string;
    kZegoTaskScreenSharingEnded: string;
    kZegoTaskVideoDeviceChanged: string;
    kZegoTaskAudioDeviceChanged: string;
    kZegoTaskDeviceError: string;
    kZegoEventPublishStat: string;
    kZegoEventPlayStat: string;
    kZegoSetPublishConstraints: string;
};
export declare const errorList: {
    kOK: number;
    kEnd: number;
    kNoneAppIdError: number;
    kNotLoginError: {
        code: number;
        message: string;
    };
    kPublishBadNameError: number;
    kInvalidParamError: {
        code: number;
        message: string;
    };
    kInvalidChannelError: number;
    kNullPointerError: number;
    kInvalidUserIDError: number;
    kInvalidRoomIDError: number;
    kNoFreeChannelError: number;
    kFormatUrlError: number;
    kInvalidExtraUrlError: number;
    kNoPushIpError: number;
    kUnmatchStreamIDError: number;
    kUnmatchSeqError: {
        code: number;
        message: string;
    };
    kNoneSeqError: number;
    kUnmatchStateError: number;
    kRedirectError: number;
    kOutOfMemeryError: number;
    kStartThreadError: number;
    kStartRequestError: number;
    kStartUpdateStreamInfoError: number;
    kNoMultiRoomLoginRole: number;
    kMultiRoomIDMappingOther: number;
    kNetWorkProbeNoUrl: number;
    kNetWorkProbeStopPublish: number;
    kNetWorkProbeStopPlay: number;
    kFetalError1: number;
    kFetalError2: number;
    kFetalError3: number;
    kFetalError4: number;
    kFetalError5: number;
    kFetalError6: number;
    kFetalError7: number;
    kSDKNoMoudleFunction: number;
    kDeviceError: number;
    kNetworkNotConnectError: number;
    kNetworkDnsResolveError: number;
    kEngineCreateError: number;
    kEngineStatusError: number;
    kEngineStartError: number;
    kDeniedMaxRetryError: number;
    kDeniedDisableSwitchLineError: number;
    kEngineNoPlayDataError: number;
    kEngineNoPublishDataError: number;
    kEngineUnknownError: number;
    kEngineConnectServerError: number;
    kEngineRtmpHandshakeError: number;
    kEngineRtmpAppConnectError: number;
    kEngineRtmpCreateStreamError: number;
    kEngineRtmpPublishBadNameError: number;
    kEngineServerDisconnectError: number;
    kEngineRtpConnectServerError: number;
    kEngineRtpHelloTimeoutError: number;
    kEngineRtpCreateSessionTimeoutError: number;
    kEngineRtpCreateSessionFailError: number;
    kEngineRtpPlayOrPublishTimeoutError: number;
    kEngineRtpPlayOrPublishDeniedError: number;
    kEngineRtpTimeoutError: number;
    kEngineRtpDecryptError: number;
    kEngineRtpDecryptNotSupport: number;
    kEngineRtpSockError: number;
    kEngineHttpFlvProtocolError: number;
    kEngineHttpFlvHttpCodeError: number;
    kEngineHttpFlvParseFlvError: number;
    kEngineHttpFlvServerDisconnectError: number;
    kEngineHttpFlvRedirectError: number;
    kPlayStreamNotExistError: number;
    kMediaServerForbidError: number;
    kMediaServerPublishBadNameError: number;
    kMediaServerStopPublishError: number;
    kConfigDecryptError: number;
    kConfigOfflineError: number;
    kConfigDomainError: number;
    kConfigMediaNetworkNoneError: number;
    kConfigMediaNetworkNoUrlError: number;
    kConfigServerCouldntConnectError: number;
    kConfigServerTimeoutError: number;
    kConfigServerSslCaCertError: number;
    kDispatchServerInvalidError: number;
    kDispatchNoIpError: number;
    kDispatchServerCouldntConnectError: number;
    kDispatchServerTimeoutError: number;
    kDispatchServerSslCaCertError: number;
    kDispatchNotChangedError: number;
    kDispatchEmptyPublishIpsError: number;
    kDispatchEmptyPlayIpsError: number;
    kDispatchStreamNotExistError: number;
    kDispatchAgentTimeoutError: number;
    kDispatchAgentDroppedError: number;
    kLogicServerNoUrlError: number;
    kLogicServerNoIpError: number;
    kLogicServerNoStreamInfoError: number;
    kLogicServerFetalError1: number;
    kLogicServerCouldntConnectError: number;
    kLogicServerTimeoutError: number;
    kLogicServerSslCaCertError: number;
    kLoginAgentTimeoutError: number;
    kLoginAgentDroppedError: number;
    kLiveRoomRequestParamError: number;
    kLiveRoomHBTimeoutError: {
        code: number;
        message: string;
    };
    kLiveRoomNoPushServerAddrError: number;
    kLiveRoomNoPushCryptoKeyError: number;
    kLiveRoomNoPushTokenError: number;
    kLiveRoomAutoRetryMaxTimeOut: number;
    kLiveRoomRetryRightNow: number;
    kLiveRoomWaitNetOKWillRetry: number;
    kLiveRoomLogoutWhenLogining: number;
    kLiveRoomLogoutUserCancel: number;
    kLiveRoomHBErrorNoResp: number;
    kLiveRoomHBErrorByHttpTiemout: number;
    kLiveRoomReliableMessageParseBufError: number;
    kLiveRoomReliableMessageTransChannelError: number;
    kLiveRoomReliableUserMessageBufEmpty: number;
    kLiveRoomReliableUserMessageParseBufError: number;
    kLiveRoomGetUserListParseBufError: number;
    kLiveRoomHttpNullPtrError: number;
    kLiveRoomMultiZPushSessionIDNotMatchError: number;
    kLiveRoomMultiLimitRoomCountError: number;
    kLiveRoomCouldntConnectError: number;
    kLiveRoomTimeoutError: number;
    kLiveRoomSslCaCertError: number;
    kLiveRoomInvalidRspError: number;
    kLiveRoomInputParamsError: number;
    kLiveRoomRoomAuthError: number;
    kLiveRoomRoomNotExistError: number;
    kLiveRoomUserNotExistError: number;
    kLiveRoomSetStreamInfoError: number;
    kLiveRoomStreamInfoNotExist: number;
    kLiveRoomSessionError: number;
    kLiveRoomQpsLimitError: number;
    kLiveRoomLuaSessionError: number;
    kLiveRoomAddUserError: number;
    kLiveRoomDelUserError: number;
    kLiveRoomAddTransError: number;
    kLiveRoomMaxUserCountError: number;
    kLiveRoomPublishBadNameError: number;
    kLiveRoomRequiredReloginError: number;
    kLiveRoomThirdTokenAuthError: number;
    kLiveRoomNetBrokenTimeoutError: number;
    kLiveRoomAgentTimeoutError: number;
    kLiveRoomAgentDroppedError: number;
    kRoomConnectError: number;
    kRoomDoHandShakeReqError: number;
    kRoomDoLoginReqError: number;
    kRoomTimeoutError: number;
    kRoomHbTimeoutError: number;
    kRoomStartConnectError: number;
    kRoomReconnectFailError: number;
    kRoomLoginZPushNoCryptoKey: number;
    kRoomLoginCheckMD5Fail: number;
    kRoomRetryIPOver: number;
    kRoomRetryActiveIPError: number;
    kRoomSendLoginNoZPushRsp: number;
    kRoomDoSendLoginMultiRoomReqError: number;
    kRoomZPushTcpClosed: number;
    kRoomConnectErrorQuic: number;
    kRoomInvalidSocketError: number;
    kRoomInvalidRspError: number;
    kRoomDecodeSignError: number;
    kRoomDecodeLoginError: number;
    kRoomReplayAttacksError: number;
    kRoomThirdTokenAuthError: number;
    kRoomLoginCreateUserError: number;
    kRoomLoginSameCreateUserError: number;
    kRoomStatusTimeoutError: number;
    kRoomStatusRspError: number;
    kRoomDispatchTokenBuildError: number;
    kRoomDispatchTokenDecodeError: number;
    kRoomDispatchTokenInvalidError: number;
    kRoomDispatchTokenExpiredError: number;
    kRoomMultipleLoginKickoutError: {
        code: number;
        message: string;
    };
    kRoomManualKickoutError: {
        code: number;
        message: string;
    };
    kRoomSessionErrorKickoutError: {
        code: number;
        message: string;
    };
    kRoomDispatchError: number;
    kRoomDispatchResultNotMatch: number;
    kRoomNoDispatchToken: number;
    kRoomSdkZpushError: number;
    kMixStreamNoneMixConfigError: number;
    kMixStreamCouldntConnectError: number;
    kMixStreamTimeoutError: number;
    kMixStreamSslCaCertError: number;
    kMixStreamFailError: {
        code: number;
        message: string;
    };
    kMixStreamInputError: {
        code: number;
        message: string;
    };
    kMixStreamAuthError: {
        code: number;
        message: string;
    };
    kMixStreamNotExistError: {
        code: number;
        message: string;
    };
    kMixStreamStartMixError: {
        code: number;
        message: string;
    };
    kMixStreamStopMixError: {
        code: number;
        message: string;
    };
    kMixStreamInputFormatError: {
        code: number;
        message: string;
    };
    kMixStreamOutputFormatError: {
        code: number;
        message: string;
    };
    kMixStreamNotOpenError: {
        code: number;
        message: string;
    };
    kMixStreamInputExceedError: {
        code: number;
        message: string;
    };
    kMixStreamDispatchError: {
        code: number;
        message: string;
    };
    kMixStreamStopMixOwnerError: {
        code: number;
        message: string;
    };
    kMixStreamWaterMarkParamError: {
        code: number;
        message: string;
    };
    kMixStreamWaterMarkImageError: {
        code: number;
        message: string;
    };
    kMixStreamQpsOverloadError: {
        code: number;
        message: string;
    };
    kMixStreamAgentTimeoutError: number;
    kMixStreamAgentDroppedError: number;
    kInitSdkError: {
        code: number;
        message: string;
    };
    kScreenSharingFail: {
        code: number;
        message: string;
    };
    kEnumerateDevicesFail: {
        code: number;
        message: string;
    };
    kMixVideocError: {
        code: number;
        message: string;
    };
    kWxGetSettingFail: {
        code: number;
        message: string;
    };
    kDevicesDetectError: {
        code: number;
        message: string;
    };
    kVideoCodecDetectError: {
        code: number;
        message: string;
    };
    kMixStopFail: {
        code: number;
        message: string;
    };
    kLoginTimeoutError: {
        code: number;
        message: string;
    };
    kSendMsgTimeout: {
        code: number;
        message: string;
    };
    kLiveRoomDisconnect: {
        code: number;
        message: string;
    };
    kMsgFrequencyLimited: {
        code: number;
        message: string;
    };
    kLiveRoomNotLoginError: {
        code: number;
        message: string;
    };
    kLiveRoomMessageParseError: {
        code: number;
        message: string;
    };
    kLiveRoomMessageNoneError: {
        code: number;
        message: string;
    };
    kBrowserNotSupport: {
        code: number;
        message: string;
    };
    kHttpsRequired: {
        code: number;
        message: string;
    };
    kDispatchError: {
        code: number;
        message: string;
    };
    kDispatchTimeout: {
        code: number;
        message: string;
    };
    kTokenError: {
        code: number;
        message: string;
    };
    kSendSessionTimeout: {
        code: number;
        message: string;
    };
    kCreateSessionError: {
        code: number;
        message: string;
    };
    kCreateOfferError: {
        code: number;
        message: string;
    };
    kSetLocalDescError: {
        code: number;
        message: string;
    };
    kSendMediaDescTimeout: {
        code: number;
        message: string;
    };
    kServerMediaDescTimeout: {
        code: number;
        message: string;
    };
    kServerMediaDescError: {
        code: number;
        message: string;
    };
    kSetRemoteDescError: {
        code: number;
        message: string;
    };
    kSendCandidateTimeout: {
        code: number;
        message: string;
    };
    kServerCandidateTimeout: {
        code: number;
        message: string;
    };
    kServerCandidateError: {
        code: number;
        message: string;
    };
    kSessionClosed: {
        code: number;
        message: string;
    };
    kMediaConnectionFailed: {
        code: number;
        message: string;
    };
    kMediaConnectionClosed: {
        code: number;
        message: string;
    };
    kWebsocketError: {
        code: number;
        message: string;
    };
    kConstraintError: {
        code: number;
        message: string;
    };
    kMediaConnectionDisconnected: {
        code: number;
        message: string;
    };
    kServerNegoTimeout: {
        code: number;
        message: string;
    };
    kLocalStreamError: {
        code: number;
        message: string;
    };
    kPublishConstraintsNotSupport: {
        code: number;
        message: string;
    };
    kGetSoundLevelError: {
        code: number;
        message: string;
    };
    kPublishStreamNotFound: {
        code: number;
        message: string;
    };
    kPublisherRepeatError: {
        code: number;
        message: string;
    };
    kPlayerRepeatError: {
        code: number;
        message: string;
    };
    kStopWhenPublishing: {
        code: number;
        message: string;
    };
    kStopWhenPlaying: {
        code: number;
        message: string;
    };
    kPublishRetryFail: {
        code: number;
        message: string;
    };
    kPlayRetryFail: {
        code: number;
        message: string;
    };
    kUrlsNone: {
        code: number;
        message: string;
    };
    kIsPublishing: {
        code: number;
        message: string;
    };
    kIsPlaying: {
        code: number;
        message: string;
    };
    kDecodeAudioDataFail: {
        code: number;
        message: string;
    };
    kNoPreviewBeforePublish: {
        code: number;
        message: string;
    };
    kDeviceChangeError: {
        code: number;
        message: string;
    };
    kNoVideo: {
        code: number;
        message: string;
    };
    kNoAudio: {
        code: number;
        message: string;
    };
    kTrackNotFound: {
        code: number;
        message: string;
    };
};
export declare const codeErrMap: any;
