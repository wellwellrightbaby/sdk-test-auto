import { ERRO } from '../common/zego.entity';
import { Logger } from '../common/zego.logger';
import { StateCenter } from '../common/clientBase/stateCenter';
import { ZegoDataReport } from '../common/zego.datareport';
export declare class ClientUtil {
    static checkConfigParam(appid: number, server: string | Array<string>, logger: Logger): boolean;
    static checkStreamID(streamID: string): boolean;
    static checkIllegalCharacters(str: string): boolean;
    static isUrl(str: string): boolean;
    static registerCallback(fName: string, option: {
        success?: Function;
        error?: Function;
    }, callbackList: {
        [index: string]: Function;
    }): void;
    static actionErrorCallback(fName: string, callbackList: {
        [index: string]: Function;
    }): Function;
    static actionSuccessCallback(fName: string, callbackList: {
        [index: string]: Function;
    }): Function;
    static logReportCallback(logEvent: string, dataReport: ZegoDataReport, reportSeq: number, callbackList: {
        [index: string]: Function;
    }): void;
    static proxyRes(dataReport: ZegoDataReport, reportSeq: number, resolve: any, reject: any): any;
    /**
         错误管理
         */
    static getServerError(code: string | number): {
        code: string;
        msg: string;
    } | {
        code: number;
        msg: string;
    };
    static unregisterCallback(fName: string, callbackList: {
        [index: string]: Function;
    }): void;
    static decodeServerError(code: number, msg: string): {
        code: number;
        message: string;
    };
    static getLiveRoomError(code: number): any;
    static mixServerError(code: number): any[];
    static getKickoutError(code: number): any;
    static dataReportEvent(dataReport: ZegoDataReport, reportSeq: number, reportName: string, eventName: string, args: any): void;
    static isKeepTryLogin(code: number): boolean;
    static mergeStreamList(logger: Logger, idName: string, oldStreamList: any[], newStreamList: any[], callbackResult: {
        (addStreamList: any[], delStreamList: any[], updateStreamList: any[]): void;
        (arg0: any[], arg1: any[], arg2: any[]): void;
    }): void;
    static mergeUserList(logger: Logger, oldUserList: any[], newUserList: any[], callbackResult: (addUserList: any[], delUserList: any[]) => void): void;
    static checkCustomCommandParam(param: {
        dest_id_name: string[];
        custom_msg: string;
    }): boolean;
    static generateRandumNumber(maxNum: number): number;
    static uuid(len?: number, radix?: number): string;
    static supportDetection(screenShotReady: boolean, success: Function): Promise<void>;
    static getDevices(deviceInfoCallback: Function, error: (err: ERRO) => void): void;
    static compareVersion(v1: string[] | string, v2: string | string[]): 0 | 1 | -1;
    static isSupportLive(sucCall: {
        (arg0: {
            code: number;
            msg: string;
        }): void;
        (arg0: {
            code: number;
            msg: string;
        }): void;
    }, errCall: (arg0: any) => void): void;
    static supportVideoCodeType(sucCall: {
        (rtcCodec: {
            webRTC: boolean;
            H264: boolean;
            VP8: boolean;
            VP9: boolean;
            H265: boolean;
        }, error?: any): void;
    }): void;
    static inlineWorker(func: Function): Worker | null;
    static getBrowser(): string;
    static isTestEnv(server: string): boolean;
    static setDebug(server: string | Array<string>, stateCenter: StateCenter): void;
    static getPublisherStateType(type: 0 | 1 | 2): string;
    static getPlayerStateType(type: 0 | 1 | 2): string;
    static getSteamUpdateType(type: 0 | 1): string;
    static getLogLevel(level: 'debug' | 'info' | 'warn' | 'error' | 'report' | 'disable'): number;
}
