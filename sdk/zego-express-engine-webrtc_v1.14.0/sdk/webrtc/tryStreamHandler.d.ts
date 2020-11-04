import { TryHandler } from '../common/clientBase/retryHandler';
import { Logger } from '../common/zego.logger';
import { StateCenter } from '../common/clientBase/stateCenter';
import { ERRO } from '../common/zego.entity';
import { ZegoStreamCenterWeb } from './zego.streamCenter.web';
export declare class TryStreamHandler extends TryHandler {
    logger: Logger;
    stateCenter: StateCenter;
    streamCenter: ZegoStreamCenterWeb;
    isPublish: boolean;
    streamID: string;
    serverUrls: Array<string>;
    playStreamSuccess?: (stream: MediaStream) => void;
    constructor(logger: Logger, stateCenter: StateCenter);
    initStream(streamCenter: ZegoStreamCenterWeb, isPublish: boolean, streamID: string, serverUrls: Array<string>): void;
    active(firstInterval?: number, success?: (stream: MediaStream) => void): boolean;
    startMaxTime(): void;
    stopMaxTime(): void;
    onactive(...args: Array<any>): void;
    retryNextSignal(error: ERRO): boolean;
}
