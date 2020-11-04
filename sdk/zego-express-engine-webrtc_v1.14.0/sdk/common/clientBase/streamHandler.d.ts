import { SocketCenter } from './socketCenter';
import { StateCenter } from './stateCenter';
import { CdnPushConfig, MixStreamConfig, ERRO, MixStreamAdvance } from '../zego.entity';
import { Logger } from '../zego.logger';
import { ZegoDataReport } from '../zego.datareport';
import { ZegoStreamCenter } from '../ZegoStreamCenter';
export declare class StreamHandler {
    private logger;
    private socketCenter;
    private stateCenter;
    private dataReport;
    private streamCenter;
    constructor(logger: Logger, stateCenter: StateCenter, socketCenter: SocketCenter, dataReport: ZegoDataReport, streamCenter: ZegoStreamCenter);
    setCDNInfo(streamInfo: {
        urlFlv: string;
        urlHls: string;
        urlRtmp: string;
    }, streamItem: {
        urls_flv: string;
        urls_m3u8: string;
        urls_rtmp: string;
    }): void;
    onStreamUpdated(roomid: string, type: number, streamList: any[]): void;
    onStreamExtraInfoUpdated(roomid: string, streamList: any[]): void;
    handleStreamStart(lastRunState: number, msg: any): void;
    onPublishStateUpdate(type: number, streamId: string, error: ERRO): void;
    updateStreamInfo(streamid: string, cmd: string | number, stream_extra_info?: string, error?: Function): void;
    handleStreamUpdateRsp(msg: any): void;
    handleFetchStreamListRsp(msg: any): void;
    private handleFullUpdateStream;
    handlePushStreamUpdateMsg(msg: any): void;
    private handleAddedStreamList;
    private handleDeletedStreamList;
    private handleUpdatedStreamList;
    private fetchStreamList;
    private handleReconnectStream;
    makeCallbackStreamList(streamList: any[]): {
        user: {
            userID: any;
            userName: any;
        };
        extraInfo: any;
        streamID: any;
        roomID: string;
        urlFlv: string;
        urlRtmp: string;
        urlHls: string;
        urlHttpsFlv: string;
        urlHttpsHls: string;
    }[];
    updateMixStream(mixStreamConfig: MixStreamConfig, successCallback: Function, errorCallback: (err: {
        errorCode: number;
        extendedData: string;
    }) => void): boolean;
    sendBizChannelRequest(reqBody: any, success: Function, error: Function, isRetry?: boolean): void;
    setMixerTaskConfig(advance: MixStreamAdvance): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    publishTarget(cdnPushConfig: CdnPushConfig, success: (result: {
        errorCode: number;
        extendedData: string;
    }) => void, error: (result: {
        errorCode: number;
        extendedData: string;
    }) => void): void;
    stopMixStream(taskid: string, successCallback: Function, errorCallback: (err: {
        errorCode: number;
        extendedData: string;
    }) => void): boolean;
    updateStreamExtraInfo(streamid: string, extraInfo: string): boolean;
    roomStateHandle(state: 'DISCONNECTED' | 'CONNECTING' | 'CONNECTED', error: ERRO): void;
}
