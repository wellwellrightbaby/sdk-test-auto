import { TryHandler } from './retryHandler';
import { Logger } from '../zego.logger';
import { ERRO, User, RoomConfig } from '../zego.entity';
import { RoomHandler } from './roomHandler';
import { StateCenter } from './stateCenter';
export declare class RetryRoomHandler extends TryHandler {
    logger: Logger;
    stateCenter: StateCenter;
    roomHandler: RoomHandler;
    roomID: string;
    token: string;
    user: User;
    server: string;
    serverBak: string;
    config?: RoomConfig;
    constructor(logger: Logger, stateCenter: StateCenter);
    initRoom(roomHandler: RoomHandler, roomID: string, token: string, user: User, server: string, serverBak: string, config?: RoomConfig): void;
    active(isFirst?: boolean): void;
    startMaxTime(): void;
    stopMaxTime(): void;
    onactive(success: boolean, error?: ERRO): void;
    handleError(error: ERRO, isServerError?: boolean): boolean;
    handleLoginFinish(success: boolean, error?: ERRO, isServerError?: boolean): void;
}
