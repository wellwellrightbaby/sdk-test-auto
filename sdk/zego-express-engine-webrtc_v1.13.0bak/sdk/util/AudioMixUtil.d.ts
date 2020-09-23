import { ZegoAudioContext } from '../../types/index';
import { LoggerWeb } from '../webrtc/zego.logger.webrtc';
export declare class AudioMixUtil {
    logger: LoggerWeb;
    ac: ZegoAudioContext;
    mediaEleSources: Array<{
        audio: HTMLMediaElement;
        node: MediaElementAudioSourceNode;
    }>;
    localStream: MediaStream;
    peerConnection: RTCPeerConnection | any;
    audioBuffer: AudioBuffer;
    audioBufferList: Array<AudioBuffer>;
    loop: boolean;
    replace: boolean;
    buffSource: AudioBufferSourceNode | null;
    effectEndedCallBack: any;
    effectEndedListener: any;
    startTimes: number;
    startOffset: number;
    pauseTimes: number;
    resumeOffset: number;
    paused: boolean;
    isMixAudio: boolean;
    isMixingBuffer: boolean;
    streamSource: MediaStreamAudioSourceNode;
    private gainNode;
    private mixAudio;
    private destination;
    private micTrack;
    private audioCurrentTimer;
    constructor(log: LoggerWeb, ac: ZegoAudioContext, mediaEleSources: Array<{
        audio: HTMLMediaElement;
        node: MediaElementAudioSourceNode;
    }>);
    preloadEffect(effectUrl: string, callBack: Function): void;
    playEffect(playTime?: number, loop?: boolean, replace?: boolean, start?: Function, end?: Function): void;
    mixingBuffer(ab: ArrayBuffer, callBack?: Function): void;
    stopMingBuffer(): boolean;
    playRealTimeEffect(ab: AudioBuffer): void;
    pauseEffect(): void;
    resumeEffect(): void;
    mixEffect(audioBuffer: AudioBuffer, callBack: Function): false | undefined;
    startMixingAudio(audio: any, replace?: boolean): boolean;
    replaceTrack(): boolean;
    stopMixingAudio(): boolean;
    setMixingAudioVolume(volume: number): boolean;
    effectEndedHandler(): void;
}
