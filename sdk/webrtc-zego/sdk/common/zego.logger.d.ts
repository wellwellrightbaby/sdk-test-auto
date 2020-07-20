import { ENUM_REMOTE_TYPE, ENUM_LOG_LEVEL } from './zego.entity';
import { ZegoWebSocket } from '../wechatMini/zego.webSocket';
export declare const D: string[];
export declare abstract class Logger {
    appid: number;
    roomid: string;
    sessionid: string;
    userid: string;
    userName: string;
    version: string;
    logType: ENUM_REMOTE_TYPE;
    logLevel: ENUM_LOG_LEVEL;
    logRemoteLevel: ENUM_LOG_LEVEL;
    websocket: WebSocket | ZegoWebSocket;
    url: string;
    logUploadTimer: any;
    logUploadInterval: number;
    timeInterval: number;
    logCache: any[];
    logCacheSend: any[];
    logCacheMax: number;
    abstract openWebSocketLogServer(url: string): any;
    abstract SendHttpsLog(): any;
    constructor();
    setLogLevel(logLevel: ENUM_LOG_LEVEL): void;
    setRemoteLogLevel(logLevel: ENUM_LOG_LEVEL): void;
    setSessionInfo(
        appid: number,
        roomid: string,
        sessionid: string,
        userid: string,
        userName: string,
        version: string,
    ): void;
    openLogServer(url: string): void;
    stopLogServer(): void;
    stopWebSocketServer(): void;
    openHttpsLogServer(url: string): void;
    stopHttpsServer(): void;
    report(dataItem: any): void;
    debug(...values: any[]): void;
    info(...values: any[]): void;
    warn(...values: any[]): void;
    error(...values: any[]): void;
    log(level: ENUM_LOG_LEVEL, log: any): void;
    RemoteLog(level: ENUM_LOG_LEVEL, log: any, force?: boolean): void;
    RemoteWebSocketLog(level: ENUM_LOG_LEVEL, log: any): void;
    RemoteHttpsLog(level: ENUM_LOG_LEVEL, log: any, force: boolean): void;
    logParamList(level: ENUM_LOG_LEVEL, logInfo: string): string[];
    abstract logReportParamList(level: ENUM_LOG_LEVEL, logInfo: string): any;
}
