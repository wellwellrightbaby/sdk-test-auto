import { Logger } from '../zego.logger';
import { StateCenter } from './stateCenter';
export declare abstract class TryHandler {
    logger?: Logger;
    RETRY_MAX_TIME: number;
    RETRY_START_TIME_INTERVAL: number;
    RETRY_CONTINUE_COUNT: number;
    RETRY_MAX_TIME_INTERVAL: number;
    retryTimer: any;
    maxTimer: any;
    retryStartTime: number;
    retryActiveCount: number;
    retryActiveInterval: number;
    isOverTime: boolean;
    constructor(logger: Logger, stateCenter: StateCenter);
    init(retryMaxTime?: number, startTimeInterval?: number, retryContinuteCount?: number, maxTimeInterval?: number): void;
    invalid(): void;
    abstract startMaxTime(): void;
    abstract stopMaxTime(): void;
    abstract active(...args: Array<any>): void;
    abstract onactive(...args: Array<any>): void;
}
