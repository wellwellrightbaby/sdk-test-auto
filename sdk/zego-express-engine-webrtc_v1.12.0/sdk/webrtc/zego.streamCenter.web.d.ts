import { ZegoDataReport } from '../common/zego.datareport';
import { ZegoPreview } from './zego.preview';
import { MediaStreamConstraints, webPlayOption, SignalInfo, ScreenConfig, ERRO, webPublishOption, ChargeInfos, Constraints, AudioMixConfig, PublishStreamConstraints } from '../common/zego.entity';
import { ZegoStreamCenter } from '../common/ZegoStreamCenter';
import { LoggerWeb } from './zego.logger.webrtc';
import { StateCenter } from '../common/clientBase/stateCenter';
import { ZegoAudioContext } from '../../types';
export declare class ZegoStreamCenterWeb extends ZegoStreamCenter {
    logger: LoggerWeb;
    dataReport: ZegoDataReport;
    stateCenter: StateCenter;
    testEnvironment: boolean;
    heartbeatTimer: any;
    heartbeatInterval: number;
    qualityTimerInterval: number;
    maxRetryCount: number;
    previewVideoList: ZegoPreview[];
    signalList: {
        [index: string]: SignalInfo;
    };
    appid: number;
    userid: string;
    token: string;
    server: string;
    chargeInfos: ChargeInfos;
    chargeInfosTimer: any;
    chargeInfosInterval: number;
    chargeInfoSeq: number;
    ac: ZegoAudioContext;
    mediaEleSources: Array<{
        audio: HTMLMediaElement;
        node: MediaElementAudioSourceNode;
    }>;
    soundLevelDelegate: boolean;
    soundLevelInterval: number;
    soundLevelTimer: any;
    constructor(log: LoggerWeb, stateCenter: StateCenter, dataReport: ZegoDataReport, ac: ZegoAudioContext, mediaEleSources: Array<{
        audio: HTMLMediaElement;
        node: MediaElementAudioSourceNode;
    }>);
    onSignalDisconnected(server: any): void;
    setQualityMonitorCycle(timeInMs: number): boolean;
    setSessionInfo(appid: number, userid: string, token: string, testEnvironment: boolean): void;
    onPlayStateUpdate(type: number, streamid: string, error: any): void;
    onPlayQualityUpdate(streamID: string, streamQuality: any): void;
    onPublishStateUpdate(type: number, streamid: string, error: number | ERRO | undefined): void;
    onPublishQualityUpdate(streamID: string, streamQuality: any): void;
    onUpdateHeartBeartIntervalHandle(interval: number): void;
    enableMicrophone(localStream: MediaStream, enable: boolean): boolean;
    enableCamera(localStream: MediaStream, enable: boolean): boolean;
    recordDevices(): void;
    startPreview(mediaStreamConstraints: Constraints['camera'] | Constraints['custom'], success: (stream: MediaStream) => void, error: (err: ERRO) => void): boolean;
    stopPreview(localStream: MediaStream): boolean;
    setPublishStateStart(streamid: string, localStream: MediaStream, publishOption: webPublishOption): boolean;
    getTotalStreamId(streamid: string): string;
    /**
     * "zsc.grs.0": "ZegoStreamCenter.getRealStreamId"
     * @param streamid
     */
    getRealStreamId(streamid: string): string;
    startPublishingStream(streamid: string, serverUrls: string[]): boolean;
    updateWaitingList(signalInfo: SignalInfo, isPublish: boolean, streamID: string, success: Function, error: Function | undefined): void;
    publishStream(streamid: string): void;
    connectPublishServer(streamID: string, isForce?: boolean): boolean;
    shouldRetry(stream: {
        serverUrls: string[];
        retryCount: number;
    }, errorCode: number): boolean;
    getTokenSuccess(): void;
    stopPublishingStream(streamid: string): void;
    setStreamAudioOutput(localVideo: any, audioOutput: string): boolean;
    connetWithReuseSignalServer(streamID: string, isPublish: boolean, serverUrl: string, success: Function, error: Function | undefined, isForce?: boolean): void;
    setPlayStateStart(streamid: string, playOption?: webPlayOption): boolean;
    startPlayingStream(streamid: string, serverUrls: string[], success: (stream: MediaStream) => void): boolean;
    connectPlayServer(streamId: string, success: (stream: MediaStream) => void, isForce?: boolean): boolean;
    private tryCountConnectInterval;
    private connetWithReuseSignalServerTimer;
    private playStream;
    private removeStreamFromSignal;
    private stopSignalHeartbeat;
    stopPlayingStream(streamid: string): void;
    reset(): void;
    replaceTrack(localStream: MediaStream, mediaStreamTrack: MediaStreamTrack, success?: (res: any) => void, error?: (err: ERRO) => void): void;
    checkMessageTimeout: () => void;
    getAllInUseUrl: () => string[];
    onDisconnectHandle: (server: string | number) => void;
    private startSignalHeartbeat;
    private startChargeInfosUpload;
    private checkChargeInfos;
    private checkSignalHeartbeat;
    private stopChargeInfosUpload;
    private getPublisher;
    checkPreview(localStream: MediaStream): ZegoPreview | null;
    checkPublish(localStream: MediaStream): any;
    removePreview(preview: ZegoPreview): void;
    onPlayerStreamUrlUpdate(streamid: string, url: string, type: string): void;
    getScreenConstrains(screen: {
        audio?: boolean;
        videoQuality?: 1 | 2 | 3 | 4;
        bitRate?: number;
        frameRate?: number;
    } | MediaStreamConstraints | boolean): ScreenConfig;
    createScreenPreviewer(stream: MediaStream, screenConfig?: ScreenConfig): any;
    switchDevice(type: 'audio' | 'video', localStream: MediaStream, deviceId: string, success: Function, error: Function): void;
    setPublishStreamConstraints(stream: MediaStream, constraints: PublishStreamConstraints, success?: Function, error?: Function): void;
    preloadEffect(ac: ZegoAudioContext, id: string, effectUrl: string, callBack?: Function): void;
    playEffect(AudioMixConfig: AudioMixConfig, start?: Function, end?: Function): void;
    pauseEffect(streamID: string, effectID?: string): boolean;
    resumeEffect(streamID: string, effectID?: string): boolean;
    stopEffect(streamID: string, effectID?: string): boolean;
    setMixingAudioVolume(streamID: string, volume: number, audio: HTMLMediaElement): boolean;
    startMixingAudio(streamID: string, mediaList: Array<HTMLMediaElement>): boolean;
    stopMixingAudio(streamID: string, audio?: Array<HTMLMediaElement>): boolean;
    mixingBuffer(streamID: string, sourceID: string, arrayBuffer: ArrayBuffer, callBack?: Function): void;
    stopMixingBuffer(streamID: string, sourceID: string): boolean;
    setSoundLevelDelegate(bool: boolean, timeInMs?: number): void;
    startSoundLevel(): void;
    checkSoundLevel(): void;
    getBackStreamId(streamid: string): string;
    onSoundLevelUpdate(soundLevelList: Array<{
        streamID: string;
        soundLevel: number;
        type: string;
    }>): void;
    stopSoundLevel(): void;
}
