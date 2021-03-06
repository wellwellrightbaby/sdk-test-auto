import { Common } from './common';
import { ERRO, MixStreamConfig, RoomConfig, User, LogConfig, MixStreamAdvance } from '../zego.entity';
export declare abstract class BaseCenter extends Common {
    constructor();
    init(): void;
    bindSocketHandler(): void;
    bindStreamHandler(): void;
    bindHeatBeatHandler(): void;
    bindRoomHandler(): void;
    bindMessageHandler(): void;
    bindLiveHandler(): void;
    bindStreamCenterHandler(): void;
    /*********
     *
     * 下面的方法微信和web端实现一样，共用
     *
     *
     * ****/
    setLogConfig(option: LogConfig): boolean;
    /**
     *    "zb.cm.sd": "ZegoClient.base.setDebugVerbose"
     * @param enable is to start debugging
     */
    setDebugVerbose(enable: boolean): void;
    loginRoom(roomID: string, token: string, user: User, config?: RoomConfig): Promise<boolean>;
    private loginReport;
    logoutRoom(roomID?: string): void;
    sendCustomCommand(roomID: string, command: string | Record<string, any>, toUserList: string[]): Promise<{
        errorCode: number;
        messageID: number;
        extendedData: string;
    }>;
    sendBroadcastMessage(roomID: string, message: string): Promise<{
        errorCode: number;
        messageID: number;
        extendedData: string;
    }>;
    sendReliableMessage(type: string, data: string, success: (seq: number) => void, error: (err: ERRO, seq: number) => void): void;
    setRoomExtraInfo(roomID: string, type: string, data: string): Promise<{
        errorCode: number;
    }>;
    sendBarrageMessage(roomID: string, message: string): Promise<{
        errorCode: number;
        messageID: number;
        extendedData: string;
    }>;
    sendRelayMessage(type: string, data: string, success: (seq: number) => void, error: (err: ERRO, seq: number) => void): void;
    requestJoinLive(destIdName: string, success: (seq: number) => void, error: (err: ERRO, seq: number) => void, resultCallback: (result: boolean, fromUserId: string, fromUserName: string) => void): boolean;
    inviteJoinLive(destIdName: string, success: (seq: number) => void, error: (err: ERRO, seq: number) => void, resultCallback: (result: boolean, fromUserId: string, fromUserName: string) => void): boolean;
    endJoinLive(destIdName: string, success: (seq: number) => void, error: (err: ERRO, seq: number) => void): boolean;
    respondJoinLive(requestId: string, respondResult: boolean, success?: (seq: number) => void, error?: (err: ERRO, seq: number) => void): boolean;
    startMixerTask(mixStreamConfig: MixStreamConfig): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    setMixerTaskConfig(config: MixStreamAdvance): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    stopMixerTask(taskId: string): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    addPublishCdnUrl(streamID: string, targetURL: string): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    removePublishCdnUrl(streamID: string, targetURL: string): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    clearPublishCdnUrl(streamID: string, targetURL: string): Promise<{
        errorCode: number;
    }>;
    private publishTarget;
    setStreamExtraInfo(streamID: string, extraInfo: string): Promise<{
        errorCode: number;
        extendedData: string;
    }>;
    bindListener(listener: string, callBack: Function): boolean;
    deleteListener(listener: string, callBack?: Function): boolean;
    getVersion(): string;
    private setSdkBizVersion;
    protected setSdkLoginRelateService(relateService: Array<string>): void;
    protected disconnectedHandle(error: ERRO): void;
    protected roomStateHandle(state: 'DISCONNECTED' | 'CONNECTING' | 'CONNECTED', error: ERRO): void;
}
