import { Logger } from '../common/zego.logger';
import { ENUM_LOG_LEVEL } from '../common/zego.entity';
export declare class LoggerWechat extends Logger {
    openWebSocketLogServer(url: string): void;
    SendHttpsLog(): void;
    logReportParamList(level: ENUM_LOG_LEVEL, logInfo: any): string[];
}
