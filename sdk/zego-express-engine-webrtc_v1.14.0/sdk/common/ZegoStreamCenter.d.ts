import { Logger } from './zego.logger';
import { ERRO, PlayerInfo, StreamQuality, PublisherInfo } from './zego.entity';
import { StateCenter } from './clientBase/stateCenter';
export declare abstract class ZegoStreamCenter {
    playerList: {
        [index: string]: PlayerInfo;
    };
    publisherList: {
        [index: string]: PublisherInfo;
    };
    playSuccessCallBackList: {
        [index: string]: Function;
    };
    playErrorCallBackList: {
        [index: string]: Function;
    };
    constructor(log: Logger, stateCenter: StateCenter);
    abstract stopPublishingStream(streamId: string): void;
    abstract stopPlayingStream(streamId: string): void;
    abstract reset(): void;
    abstract startPlayingStream(streamid: string, serverUrls: string[], third?: any): boolean;
    abstract startPublishingStream(streamid: string, serverUrls: string[], preferPublishSourceType?: number): boolean;
    abstract onPlayStateUpdate(type: 0 | 1 | 2, streamid: string, error: ERRO): void;
    abstract onPlayQualityUpdate(streamID: string, streamQuality: StreamQuality): void;
    abstract onPublishStateUpdate(type: 0 | 1 | 2, streamid: string, error: ERRO): void;
    abstract onPublishQualityUpdate(streamID: string, streamQuality: StreamQuality): void;
    abstract onPlayerStreamUrlUpdate(streamid: string, url: string, type: string): void;
    abstract onSoundLevelUpdate(soundLevelList: Array<{
        streamID: string;
        soundLevel: number;
        type: string;
    }>): void;
    onRemoteCameraStatusUpdate(streamID: string, status: 'OPEN' | 'MUTE'): void;
    onRemoteMicStatusUpdate(streamID: string, status: 'OPEN' | 'MUTE'): void;
    setSessionInfo(appid: number, userid: string, token: string, testEnvironment: boolean): void;
}
