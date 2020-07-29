import { LinkedList } from './zego.entity';
import { Logger } from './zego.logger';
import { StateCenter } from './clientBase/stateCenter';
export declare class ZegoSignal {
    logger: Logger;
    stateCenter: StateCenter;
    sendDataMap: {};
    sendDataList: LinkedList;
    sendDataCheckOnceCount: number;
    signalSeq: number;
    pushCallback: {};
    sessionInfos: {};
    tryHeartbeatCount: number;
    heartbeatInterval: number;
    sendDataTimeout: number;
    sendDataDropTimeout: number;
    tryConnectCount: number;
    tryConnectTimer: any;
    tryConnectInterval: number;
    state: number;
    tokenType: number;
    browser: {
        name: string;
        version: string;
    };
    platform: string;
    appid: string;
    userid: string;
    token: string;
    connectCallback: Function;
    server: string;
    websocket: WebSocket;
    negoInterval: number;
    negoTryCount: number;
    negoTryMaxCount: number;
    globalHeader: {
        [indes: string]: number | string;
    };
    constructor(logger: Logger, stateCenter: StateCenter);
    getBrowserAndVersion(): {
        name: string;
        version: string;
    };
    setSessionInfo(appid: number, userid: string): void;
    onDisconnect(server: any): void;
    onUpdateHeartBeartInterval(interval: any): void;
    private resetConnectTimer;
    private bindWebSocketHandle;
    private resetCheckMessage;
    private handleServerPush;
    private disconnectCallback;
    private updateToken;
    sendMessageWithCallback(
        cmd: string,
        seq: number,
        sessionId: number,
        body: any,
        success: Function,
        error: Function,
    ): void;
    private getHeader;
    connectServer(token: string, serverUrl: string, result: Function): void;
    private startConnectTimer;
    disconnectServer(): void;
    isServerConnected(): boolean;
    createSession(
        seq: number,
        type: number,
        mode: number,
        streamId: string,
        strAuthParam: string,
        success: any,
        error: any,
    ): void;
    removeSession(sessionId: number): void;
    sendCloseSession(seq: number, sessionId: number, reason: number, success?: Function, error?: Function): void;
    private sendMessage;
    handleRespondData(cmd: string, msg: any): void;
    addSession(sessionId: string, token: any): void;
    handlePushData(msg: any): void;
    handlePushResetSessionData(msg: any): void;
    sendMediaDesc(
        seq: number,
        sessionId: number,
        type: number,
        desc: {
            sdp: any;
            width?: number;
            height?: number;
            frameRate?: number;
            video_min_kpbs?: number;
            video_max_kpbs?: number;
            audio_kpbs?: number;
            keyframe_intv?: number;
        },
        success: Function,
        error: Function,
    ): void;
    sendCandidateInfo(seq: any, sessionId: any, candidateList: any, success: any, error: any): void;
    sendMediaDescAck(seq: any, sessionId: any, result: any): void;
    sendCandidateInfoAck(seq: any, sessionId: any, result: any): void;
    sendCloseSessionAck(seq: any, sessionId: any, result: any): void;
    sendResetSessionAck(seq: any, sessionId: any, result: any): void;
    registerPushCallback(cmd: string, sessionId: number, callback: Function): void;
    unregisterPushCallback(cmd: any, sessionId: any): void;
    checkMessageTimeout(): void;
    sendHeartbeat(): void;
    QualityReport(seq: any, sessionId: any, qualityStat: any, success: any, error: any): void;
    sendStreamStatus(seq: number, sessionId: number, camera: number, microphone: number): void;
    sendBroadcasterStatus(seq: number, sessionId: number, status: 0 | 1): void;
}
