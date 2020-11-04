import { webPlayOption, AudioMixConfig, Constraints, ERRO, CapabilityDetection, WebListener, webPublishOption, PublishStreamConstraints } from '../common/zego.entity';
import { ZegoStreamCenterWeb } from './zego.streamCenter.web';
import { BaseCenter } from '../common/clientBase/index';
import { ZegoMediaElement, MediaRecorder, ZegoAudioContext } from '../../types/index';
export declare class ZegoWebRTC extends BaseCenter {
    streamCenter: ZegoStreamCenterWeb;
    ac: ZegoAudioContext;
    mediaEleSources: Array<{
        audio: HTMLMediaElement;
        node: MediaElementAudioSourceNode;
    }>;
    constructor(appID: number, server: string | Array<string>);
    static screenShotReady: boolean;
    static mediaRecorder: MediaRecorder;
    static recordedBlobs: Blob[];
    protected getSocket(server: string): WebSocket;
    on<k extends keyof WebListener>(event: k, callBack: WebListener[k]): boolean;
    off<k extends keyof WebListener>(event: k, callBack?: WebListener[k]): boolean;
    mutePublishStreamVideo(localStream: MediaStream, mute: boolean): boolean;
    mutePublishStreamAudio(localStream: MediaStream, mute: boolean): boolean;
    private enableStream;
    setAudioOutput(localVideo: HTMLMediaElement, audioOutput: string): boolean;
    setCustomSignalUrl(signalUrl: Array<string>): false | undefined;
    private setQualityMonitorCycle;
    startPlayingStream(streamID: string, playOption?: webPlayOption): Promise<MediaStream>;
    stopPlayingStream(streamID: string): void;
    createStream(option?: Constraints): Promise<MediaStream>;
    private checkScreenParams;
    private checkCameraParams;
    destroyStream(localStream: MediaStream): void;
    startPublishingStream(streamID: string, localStream: MediaStream, publishOption?: webPublishOption): boolean;
    stopPublishingStream(streamID: string): boolean;
    setVideoConfig(localStream: MediaStream, constraints: PublishStreamConstraints): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    replaceTrack(localStream: MediaStream, mediaStreamTrack: MediaStreamTrack): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    preloadEffect(id: string, effectUrl: string, callBack?: Function): void;
    playEffect(AudioMixConfig: AudioMixConfig, start?: Function, end?: Function): void;
    pauseEffect(streamID: string, effectID?: string): boolean;
    resumeEffect(streamID: string, effectID?: string): boolean;
    stopEffect(streamID: string, effectID?: string): boolean;
    unloadEffect(effecId: string): boolean;
    startMixingAudio(streamID: string, audio: Array<HTMLMediaElement>): boolean;
    stopMixingAudio(streamID: string, audio?: Array<HTMLMediaElement>): boolean;
    mixingBuffer(streamID: string, sourceID: string, arrayBuffer: ArrayBuffer, callBack?: Function): false | undefined;
    stopMixingBuffer(streamID: string, sourceID: string): boolean;
    setMixingAudioVolume(streamID: string, volume: number, audio: HTMLMediaElement): boolean;
    private startScreenShotChrome;
    private startScreenSharing;
    private startScreenShotFirFox;
    private stopScreenShot;
    protected WebrtcOnPublishStateUpdateHandle(type: 0 | 1 | 2, streamID: string, error: ERRO): void;
    protected setCDNInfo(streamInfo: {
        urlHttpsFlv: string;
        urlHttpsHls: string;
        urlFlv: string;
        urlHls: string;
        urlRtmp: string;
    }, streamItem: {
        urls_flv: string | string[];
        urls_m3u8: string | string[];
        urls_rtmp: string | string[];
        urls_https_flv: string | string[];
        urls_https_m3u8: string | string[];
    }): void;
    protected loginBodyData(): {
        [index: string]: string | number | any[];
    };
    private screenStreamFrom;
    filterStreamList(streamID?: string): void;
    checkSystemRequirements(): Promise<CapabilityDetection>;
    enumDevices(): Promise<{
        microphones: Array<{
            deviceName: string;
            deviceID: string;
        }>;
        speakers: Array<{
            deviceName: string;
            deviceID: string;
        }>;
        cameras: Array<{
            deviceName: string;
            deviceID: string;
        }>;
    }>;
    getAudioInfo(localStream: MediaStream, errCallBack: (param: any) => void, option?: {
        type: string;
        bufferSize?: number;
        channels?: number;
        sampleBit?: 8 | 16;
        sampleRate: number;
    }): any;
    getSoundLevel(localStream: MediaStream, sucCallBack: Function, errCallBack: Function): void;
    stopSoundLevel(localStream: MediaStream): void;
    private static handleDataAvailable;
    startRecord(el: ZegoMediaElement): void;
    stopRecord(): void;
    resumeRecord(): void;
    pauseRecord(): void;
    saveRecord(name: string): void;
    takeSnapShot(el: HTMLVideoElement, img: HTMLImageElement): void;
    saveSnapShot(el: HTMLVideoElement, name: string): void;
    useVideoDevice(localStream: MediaStream, deviceID: string): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    useAudioDevice(localStream: MediaStream, deviceID: string): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    setSoundLevelDelegate(bool: boolean, timeInMs?: number): void;
    private bindWindowListener;
}
