import { ZegoDataReport } from '../common/zego.datareport';
import { VideoInfo, ERRO, webPublishOption, AudioMixConfig } from '../common/zego.entity';
import { ZegoSignal } from '../common/zego.signal';
import { AudioMixUtil } from '../util/AudioMixUtil';
import { ZegoVideoCodec, ZegoAudioContext } from '../../types/index';
import { PitchUtil } from '../util/pitchUtil';
import { LoggerWeb } from './zego.logger.webrtc';
import { ZegoStreamCenterWeb } from './zego.streamCenter.web';
export declare class ZegoPublish {
    logger: LoggerWeb;
    signal: any;
    state: number;
    streamCenter: ZegoStreamCenterWeb;
    sessionId: number;
    waitingICETimeInterval: number;
    waitingAnswerTimeInterval: number;
    candidateInfo: never[];
    waitingICETimer: any;
    waitingAnswerTimer: any;
    qualityTimer: any;
    qualityTimeInterval: number;
    publishQualityList: never[];
    maxQualityListCount: number;
    lastPublishStats: any;
    reportSeq: number;
    retrySeq: number;
    streamReportSeq: number;
    dataReport: ZegoDataReport;
    qualityUpload: boolean;
    qualityUploadInterval: number;
    qualityUploadLastTime: number;
    qualitySeq: number;
    maxRetryCount: number;
    currentRetryCount: number;
    retryState: number;
    waitingServerTimerInterval: number;
    waitingServerTimer: number | null;
    firstGetStatsTimer: any;
    videoInfo: VideoInfo;
    mediaStreamConfig: null;
    offerSeq: number;
    streamId: string;
    localStream: MediaStream;
    ac: ZegoAudioContext;
    mediaEleSources: Array<{
        audio: HTMLMediaElement;
        node: MediaElementAudioSourceNode;
    }>;
    audioMixList: Array<{
        audioMix: AudioMixUtil;
        media: HTMLMediaElement;
    }>;
    arrayBufferMap: {
        [index: string]: AudioMixUtil;
    };
    effectList: Array<{
        audioMix: AudioMixUtil;
        effectID: string;
        audioBuffer: AudioBuffer;
    }>;
    sessionSeq: number;
    peerConnection: RTCPeerConnection | any;
    qualityCount: number;
    closeSessionSignal: boolean;
    micTrack: MediaStreamTrack | null;
    pitchEffect: PitchUtil;
    audioBitRate: number;
    channelCount: number;
    localSdpRevert: boolean;
    videoCodec: ZegoVideoCodec;
    stateNego: number;
    negoTimer: any;
    negoInterval: number;
    negoTryCount: number;
    negoTryMaxCount: number;
    publishOption: webPublishOption;
    publishEvent: boolean;
    nextSignalTryCount: number;
    waittingConnectedTimer: any;
    waittingConnectedInerval: number;
    tryingNexitSignal: boolean;
    soundLevel: number;
    script: any;
    mic: any;
    cameraState: string;
    microState: string;
    constructor(log: LoggerWeb, signal: ZegoSignal | null, dataReport: ZegoDataReport, qualityTimeInterval: number, streamCenter: ZegoStreamCenterWeb, ac: ZegoAudioContext, mediaEleSources: Array<{
        audio: HTMLMediaElement;
        node: MediaElementAudioSourceNode;
    }>);
    private publishStateUpdateError;
    private resetPublish;
    private clearTryPublishTimer;
    private clearPublishQualityTimer;
    private shouldSendCloseSession;
    startPublish(streamId: string, localStream: MediaStream, videoInfo: VideoInfo, mediaStreamConfig: any, publishOption?: webPublishOption): void;
    onCreatePublishSessionSuccess(data: any): void;
    onCreateOfferSuccess(desc: {
        sdp: any;
    }): void;
    updateBandwidthRestriction(sdp: any, bandwidth: string | number): any;
    onSetLocalDescriptionSuccess(desc: {
        sdp: any;
    }): void;
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
    tryStartPublish(streamId: string): void;
    checkPublishConnectionFailedState(connectionState: string): void;
    setPublishQualityTimer(): void;
    peerConnectionGetStats(supportStatsCallback: boolean, callback?: Function): void;
    getPublishStats(results: {
        forEach: (arg0: (result: any) => void) => void;
    }, callbackResults: any): void;
    uploadPublishQuality(publishData: any): void;
    stopPublish(): void;
    onPublishStateUpdate(type: number, streamId: string | null, error: ERRO): void;
    onPublishQualityUpdate(streamId: string | null, quality: any): void;
    onDisconnect(): void;
    playEffect(AudioMixConfig: AudioMixConfig, audioBuffer: AudioBuffer, start?: Function, end?: Function): void;
    pauseEffect(effectID?: string): boolean;
    resumeEffect(effectID?: string): boolean;
    stopEffect(effectID?: string): boolean;
    startMixingAudio(mediaList: Array<HTMLMediaElement>): boolean;
    stopMixingAudio(media?: Array<HTMLMediaElement>): boolean;
    mixingBuffer(sourceID: string, arrayBuffer: ArrayBuffer, callBack?: Function): void;
    stopMixingBuffer(sourceID?: string): boolean;
    setMixingAudioVolume(volume: number, audio: HTMLMediaElement): boolean;
    publishSuccess(): void;
    tryNextSignal(error: any): void;
    startSoundLevel(): void;
    stopSoundLevel(): void;
    rebackMic(): void;
}
