import { ZegoDataReport } from '../common/zego.datareport';
import { VideoInfo, PlayOption, audioMixConfig } from '../common/zego.entity';
import { ZegoSignal } from '../common/zego.signal';
import { Logger } from '../common/zego.logger';
import { audioMixUtil } from '../util/audioMixUtil';
import { ZegoVideoDecodeType, ZegoAudioContext } from '../../types/index';
import { pitchUtil } from '../util/pitchUtil';
import { ZegoStreamCenterWeb } from './zego.streamCenter.web';
export declare class ZegoPublish {
    logger: Logger;
    signal: ZegoSignal;
    state: number;
    streamCenter: ZegoStreamCenterWeb;
    sessionId: number;
    waitingICETimeInterval: number;
    waitingAnswerTimeInterval: number;
    candidateInfo: any[];
    waitingICETimer: any;
    waitingAnswerTimer: any;
    qualityTimer: any;
    qualityTimeInterval: number;
    publishQualityList: any[];
    maxQualityListCount: number;
    lastPublishStats: any;
    reportSeq: number;
    dataReport: ZegoDataReport;
    qualityUpload: boolean;
    qualityUploadInterval: number;
    qualityUploadLastTime: number;
    qualitySeq: number;
    maxRetryCount: number;
    currentRetryCount: number;
    retryState: number;
    waitingServerTimerInterval: number;
    waitingServerTimer: any;
    videoInfo: VideoInfo;
    mediaStreamConfig: any;
    offerSeq: number;
    streamId: string;
    localStream: MediaStream;
    audioMixing: audioMixUtil;
    audioMixList: Array<{
        audioMix: audioMixUtil;
        media: HTMLMediaElement;
    }>;
    arrayBufferMap: {
        [index: string]: audioMixUtil;
    };
    sessionSeq: number;
    peerConnection: RTCPeerConnection | any;
    qualityCount: number;
    closeSessionSignal: boolean;
    micTrack: MediaStreamTrack;
    pitchEffect: pitchUtil;
    audioBitRate: number;
    localSdpRevert: boolean;
    videoDecodeType: ZegoVideoDecodeType;
    stateNego: number;
    negoTimer: any;
    negoInterval: number;
    negoTryCount: number;
    negoTryMaxCount: number;
    playOption: PlayOption;
    publishEvent: boolean;
    nextSignalTryCount: number;
    waittingConnectedTimer: any;
    waittingConnectedInerval: number;
    tryingNexitSignal: boolean;
    soundLevel: number;
    ac: ZegoAudioContext;
    script: any;
    mic: any;
    constructor(
        log: Logger,
        signal: ZegoSignal,
        dataReport: ZegoDataReport,
        qualityTimeInterval: number,
        streamCenter: ZegoStreamCenterWeb,
    );
    private publishStateUpdateError;
    private resetPublish;
    private clearTryPublishTimer;
    private clearPublishQualityTimer;
    private shouldSendCloseSession;
    startPublish(
        streamId: string,
        localStream: MediaStream,
        videoInfo: VideoInfo,
        mediaStreamConfig: any,
        playOption?: PlayOption,
    ): void;
    onCreatePublishSessionSuccess(data: any): void;
    onCreateOfferSuccess(desc: { sdp: any }): void;
    updateBandwidthRestriction(sdp: any, bandwidth: any): any;
    onSetLocalDescriptionSuccess(desc: any): void;
    onRecvMediaDescription(seq: number, sessionId: number, data: any): void;
    onGetRemoteOfferSucceses(desc: string): void;
    onIceConnectionStateChange(event: any): void;
    onIceCandidate(event: any): void;
    sendCandidateInfo(candidateInfo: any[]): void;
    onConnectionStateChange(event: any): void;
    onRecvCandidateInfo(seq: number, sessionId: number, data: any): void;
    onRecvCloseSession(seq: number, sessionId: number, data: any): void;
    onRecvResetSession(seq: number, sessionId: number, data: any): void;
    onRecvPublishEvent(seq: number, sessionId: number, data: any): void;
    shouldRetryPublish(): boolean;
    startRetryPublish(): void;
    tryStartPublish(streamId: any): void;
    checkPublishConnectionFailedState(connectionState: any): void;
    setPublishQualityTimer(): void;
    getPublishStats(results: any): void;
    uploadPublishQuality(publishData: any): void;
    stopPublish(): void;
    onPublishStateUpdate(type: any, streamId: any, error?: any): void;
    onPublishQualityUpdate(streamId: any, quality: any): void;
    onDisconnect(): void;
    playEffect(audioMixConfig: audioMixConfig, audioBuffer: AudioBuffer, start?: Function, end?: Function): void;
    pauseEffect(): void;
    resumeEffect(): void;
    stopMixingBuffer(): boolean;
    mixingBuffer(arrayBuffer: ArrayBuffer, callBack?: Function): void;
    voiceChange(mult: number): boolean;
    voiceBack(): void;
    publishSuccess(): void;
    tryNextSignal(error: any): void;
    startSoundLevel(): void;
    stopSoundLevel(): void;
    startMixingAudio(mediaList: Array<HTMLMediaElement>): boolean;
    stopMixingAudio(media?: Array<HTMLMediaElement>): boolean;
}
