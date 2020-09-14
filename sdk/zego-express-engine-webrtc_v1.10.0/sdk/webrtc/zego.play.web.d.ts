import { webPlayOption, ERRO, ENUM_BROADCASTER_STATUS } from '../common/zego.entity';
import { ZegoDataReport } from '../common/zego.datareport';
import { ZegoSignal } from '../common/zego.signal';
import { Logger } from '../common/zego.logger';
import { ZegoStreamCenterWeb } from './zego.streamCenter.web';
import { ZegoAudioContext } from '../../types';
export declare class ZegoPlayWeb {
    logger: Logger;
    signal: ZegoSignal;
    state: number;
    streamCenter: ZegoStreamCenterWeb;
    candidateInfo: never[];
    waitICETimer: any;
    waitingICETimeInterval: number;
    waitingOfferTimer: any;
    waitingOfferTimeInterval: number;
    waitingServerTimer: any;
    waitingServerTimerInterval: number;
    qualityTimer: any;
    qualityTimeInterval: number;
    broadcasterStatus: ENUM_BROADCASTER_STATUS;
    playQualityList: never[];
    maxQualityListCount: number;
    lastPlayStats: {
        audioPacketsLost: number;
        videoPacketsLost: number;
        time: number;
        audioTime: number;
        videoTime: number;
        audioBytesReceived: number;
        videoBytesReceived: number;
        framesDecoded: number;
        framesReceived: number;
        framesDropped: number;
        audioBitrate: number;
    };
    dataReport: ZegoDataReport;
    reportSeq: number;
    retrySeq: number;
    streamReportSeq: number;
    videoSizeCallback: boolean;
    qualityUpload: boolean;
    qualityUploadInterval: number;
    qualityUploadLastTime: number;
    maxRetryCount: number;
    currentRetryCount: number;
    retryState: number;
    streamId: string;
    sessionId: number;
    sessionSeq: number;
    answerSeq: number;
    getRomoteStreamSuc: any;
    remoteStream: MediaStream | null;
    playStream: MediaStream | null;
    peerConnection: RTCPeerConnection | any;
    playOption: webPlayOption;
    closeSessionSignal: boolean;
    stateNego: number;
    negoTimer: any;
    negoInterval: number;
    negoTryCount: number;
    negoTryMaxCount: number;
    cameraStatus: any;
    micStatus: any;
    playEvent: boolean;
    nextSignalTryCount: number;
    waittingConnectedTimer: any;
    waittingConnectedInerval: number;
    tryingNexitSignal: boolean;
    gotStreamStatus: boolean;
    streamStatus: any;
    ac: ZegoAudioContext;
    soundLevel: number;
    mic: any;
    script: any;
    constructor(log: Logger, signal: ZegoSignal | null, dataReport: ZegoDataReport, qualityTimeInterval: number, streamCenter: ZegoStreamCenterWeb, ac: ZegoAudioContext);
    startPlay(streamId: string, success: (stream: MediaStream) => void, playOption?: webPlayOption): void;
    private onCreatePlaySessionSuccess;
    onCreateOfferSuccess(desc: {
        sdp: any;
    }): void;
    private onSetLocalDescriptionSuccess;
    private onRecvMediaDesc;
    private onRecvCandidateInfo;
    private onRecvPlayEvent;
    private onIceCandidate;
    private onConnectionStateChange;
    private onIceConnectionStateChange;
    private checkPlayConnectionFailedState;
    private shouldRetryPlay;
    private startRetryPlay;
    private clearTryPlayTimer;
    private tryStartPlay;
    private clearPlayQualityTimer;
    private resetPlay;
    private setPlayQualityTimer;
    private getPlayStats;
    private getNetQuality;
    private uploadPlayQuality;
    private onRecvResetSession;
    private onRecvCloseSession;
    private onRecvStreamStatus;
    private onGotRemoteStream;
    private sendCandidateInfo;
    private shouldSendCloseSession;
    private playStateUpdateError;
    private getCameraMicStatus;
    onPlayStateUpdate(type: number, streamId: string | null, error?: ERRO): void;
    onPlayQualityUpdate(streamID: string, quality: any): void;
    onRemoteCameraStatusUpdate(streamID: string, status: string): void;
    onRemoteMicStatusUpdate(streamID: string, status: string): void;
    stopPlay(): void;
    onDisconnect(): void;
    tryNextSignal(error: any): void;
    startSoundLevel(): void;
    stopSoundLevel(): void;
}
