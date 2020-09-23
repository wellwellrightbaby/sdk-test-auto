import { SocketCenter } from './socketCenter';
import { LinkedList, ERRO } from '../zego.entity';
import { StateCenter } from './stateCenter';
import { Logger } from '../zego.logger';
import { ZegoDataReport } from '../zego.datareport';
export declare class HeartBeatHandler {
    private logger;
    private socketCenter;
    private stateCenter;
    private dataReport;
    constructor(logger: Logger, stateCenter: StateCenter, socketCenter: SocketCenter, dataReport: ZegoDataReport);
    resetHeartbeat(): void;
    hbLogout(err: ERRO): void;
    fetchReliableMessage(trans_channel: string, trans_seq_array: any): void;
    start(heartbeatInterval: number): void;
    relogin(): void;
    private handleHeartbeatRsp;
    ReliableMessageHandler(msg: any): void;
    private fetchStreamList;
    private patchUserList;
    handleFetchStreamListRsp(msg: any): void;
    fetchUserList(): void;
    updateStreamInfo(streamid: string, cmd: string | number, stream_extra_info?: string, error?: Function): void;
    onUpdateOnlineCount(roomId: string, userCount: number): void;
    onRecvReliableMessage(transResults: any): void;
    resetCheckMessage(): void;
    private checkSendMessageList;
    protected checkMessageListTimeout(messageList: LinkedList, messageMap: {
        [index: number]: any;
    }): void;
    startCheckMessageTimeout(): void;
}
