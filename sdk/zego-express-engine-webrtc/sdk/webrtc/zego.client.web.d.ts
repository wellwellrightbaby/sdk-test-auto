import { webPlayOption, Constraints, ERRO, CapabilityDetection, WebListener, webPublishOption } from '../common/zego.entity';
import { ZegoStreamCenterWeb } from './zego.streamCenter.web';
import { BaseCenter } from '../common/clientBase/index';
import { ZegoMediaElement, MediaRecorder, ZegoAudioContext } from '../../types/index';
export declare class ZegoExpressEngine extends BaseCenter {
    streamCenter: ZegoStreamCenterWeb;
    ac: ZegoAudioContext;
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
    destroyStream(localStream: MediaStream): void;
    startPublishingStream(streamID: string, localStream: MediaStream, publishOption?: webPublishOption): boolean;
    stopPublishingStream(streamID: string): boolean;
    setPublishStreamConstraints(localStream: MediaStream, constraints: any): Promise<void>;
    private preloadEffect;
    private playEffect;
    private pauseEffect;
    private resumeEffect;
    private unloadEffect;
    startMixingAudio(streamID: string, audio: Array<HTMLMediaElement>): boolean;
    stopMixingAudio(streamID: string, audio?: Array<HTMLMediaElement>): boolean;
    mixingBuffer(streamID: string, sourceID: string, arrayBuffer: ArrayBuffer, callBack?: Function): false | undefined;
    stopMixingBuffer(streamID: string, sourceID: string): boolean;
    setMixingAudioVolume(streamID: string, volume: number): boolean;
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
    private voiceChange;
    private voiceBack;
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
    private static getDevices;
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
    useVideoDevice(localStream: MediaStream, deviceID: string): Promise<void>;
    useAudioDevice(localStream: MediaStream, deviceID: string): Promise<void>;
    setSoundLevelDelegate(bool: boolean, timeInMs?: number): void;
    private bindWindowListener;
}