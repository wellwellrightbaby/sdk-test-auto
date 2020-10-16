/**
 * 房间弹幕消息
 *
 */
export interface ZegoBarrageMessageInfo {
    /**
     * 发送消息用户
     */
    fromUser: ZegoUser;
    /**
     * 消息内容
     */
    message: string;
    /**
     * 发送时间
     */
    sendTime: number;
    /**
     * 消息ID
     */
    messageID: string;
}
/**
 * 广播消息
 *
 */
export interface ZegoBroadcastMessageInfo {
    /**
     * 发送消息用户
     */
    fromUser: ZegoUser;
    /**
     * 消息内容
     */
    message: string;
    /**
     * 发送时间
     */
    sendTime: number;
    /**
     * 消息ID
     */
    messageID: number;
}
export interface ZegoCamera {
    /**
     * 是否需要音频，默认为 true
     */
    audio: boolean;
    /**
     * 音频输入设备，不传则为默认设备
     */
    audioInput: string;
    /**
     * 音频码率，默认为 48kbps
     */
    audioBitrate: number;
    /**
     * 是否需要视频
     */
    video: boolean;
    /**
     * 视频输入设备，不传则为默认设备
     */
    videoInput: string;
    /**
     * 视频质量等级，默认质量等级为 2
     * 1  分辨率:320 * 240	帧率:15	码率: 300K
     * 2  分辨率:640 * 480	帧率:15	码率: 800K
     * 3  分辨率:1280 * 720	帧率:20	码率: 1500K
     * 4 分辨率:width * height	帧率:frameRate	码率: bitrate（k）
     */
    videoQuality: 1 | 2 | 3 | 4;
    /**
     * 摄像头朝向，'user'表示前置摄像头，'environment'表示后置摄像头
     */
    facingMode: 'user' | 'environment';
    /**
     * 声道数，1为单声道，2为双声道，默认单声道
     */
    channelCount: 1 | 2;
    /**
     * 是否开启降噪
     */
    ANS: boolean;
    /**
     * 是否开启自动增益
     */
    AGC: boolean;
}
export interface ZegoCapabilityDetection {
    /**
     * 是否支持webRTC协议,true代表可以使用webRTC协议传输流
     */
    webRTC: boolean;
    /**
     * 是否支持自定义流(不通过摄像头或者屏幕捕捉采集到的其他流, 比如video标签播放的mp4等)
     */
    customCapture: boolean;
    /**
     * 摄像头是否有权限调用
     */
    camera: boolean;
    /**
     * 麦克风是否有权限调用
     */
    microphone: boolean;
    /**
     * 是否支持屏幕共享功能
     */
    screenSharing: boolean;
    /**
     * 浏览器支持的视频编码格式; 需要注意的是有些浏览器检测会支持某一种编码格式,但实际系统阉割了该功能, 所以如果某个编码格式返回false,则一定不支持, true 不一定100%支持
     */
    videoCodec: ZegoVideoCodec;
}
export interface ZegoCustom {
    /**
     * 第三方源,<video>或<audio>媒体对象或MediaStream
     */
    source: HTMLMediaElement | MediaStream;
    /**
     * 视频码率
     */
    bitrate: number;
}
export interface ZegoDeviceInfo {
    deviceName: string;
    deviceID: string;
}
export interface ZegoDeviceInfos {
    microphones: ZegoDeviceInfo[];
    speakers: ZegoDeviceInfo[];
    cameras: ZegoDeviceInfo[];
}
export interface ZegoEvent {
    /**
     * 当房间用户发送变化时触发
     */
    roomUserUpdate: RoomUserUpdateCallBack;
    /**
     * 房间和服务期之间的连接状态发生变化时触发
     */
    roomStateUpdate: RoomStateUpdateCallBack;
    /**
     * 房间内人数发生改变时触发
     */
    roomOnlineUserCountUpdate: RoomOnlineUserCountUpdateCallBack;
    /**
     * 推流质量回调
     */
    publishQualityUpdate: PublishQualityUpdateCallBack;
    /**
     * 推流状态回调
     */
    publisherStateUpdate: PublisherStateUpdateCallBack;
    /**
     * 屏幕共享中断回调
     */
    screenSharingEnded: ScreenSharingEndedCallBack;
    /**
     * 房间内流变化回调
     */
    roomStreamUpdate: RoomStreamUpdateCallBack;
    /**
     * 拉流质量回调，每次回调间隔3s
     */
    playQualityUpdate: PlayQualityUpdateCallBack;
    /**
     * 接收对端设置的流附加信息
     */
    streamExtraInfoUpdate: StreamExtraInfoUpdateCallBack;
    /**
     * 拉流状态回调
     */
    playerStateUpdate: PlayerStateUpdateCallBack;
    /**
     * 对端摄像头状态发生改变回调
     */
    remoteCameraStatusUpdate: RemoteCameraStatusUpdateCallBack;
    /**
     * 麦克风状态回调
     */
    remoteMicStatusUpdate: RemoteMicStatusUpdateCallBack;
    /**
     * 音浪回调
     */
    soundLevelUpdate: SoundLevelUpdateCallBack;
    /**
     * 房间消息通知
     */
    IMRecvBroadcastMessage: IMRecvBroadcastMessageCallBack;
    /**
     * 房间弹幕消息通知
     */
    IMRecvBarrageMessage: IMRecvBarrageMessageCallBack;
    /**
     * 监听自定义命令信令通知
     */
    IMRecvCustomCommand: IMRecvCustomCommandCallBack;
    /**
     * 监听房间额外消息通知
     */
    roomExtraInfoUpdate: roomExtraInfoUpdateCallBack;
    /**
     * 监听视频设备状态变化
     */
    videoDeviceStateChanged: videoDeviceStateChangedCallBack;
    /**
     * 监听音频设备状态变化
     */
    audioDeviceStateChanged: audioDeviceStateChangedCallBack;
    /**
     * 监听设备异常
     */
    deviceError: deviceErrorCallBack;
}
export interface ZegoLocalStreamConfig {
    /**
     * 摄像头麦克风采集流相关配置
     */
    camera: ZegoCamera;
    /**
     * 屏幕捕捉采集流相关配置
     */
    screen: ZegoScreen;
    /**
     * 第三方流采集相关配置
     */
    custom: ZegoCustom;
}
/**
 * 日志配置选项
 *
 * Note: 支持版本：1.0.0
 *
 * Note: 废弃时间：无
 *
 */
export interface ZegoLogConfig {
    /**
     * 等级越高,打印日志越少
     */
    logLevel: 'debug' | 'info' | 'warn' | 'error' | 'report' | 'disable';
    /**
     * 等级越高,上传日志越少
     */
    remoteLogLevel: 'debug' | 'info' | 'warn' | 'error' | 'disable';
    logURL: string;
}
export interface ZegoMixStreamAdvance {
    /**
     * 混流背景颜色; backgroundColor 为十六进制的 RGB，输入格式必须为 0xRRGGBBxx
     */
    backgroundColor: number;
    /**
     * 混流背景图片; backgroundImage 需要提前在即构后台预设 imageId，输入格式为 preset-id://xxx
     */
    backgroundImage: string;
    /**
     * 混流视频编码，'vp8' 或 ' h264',默认'h264'
     */
    videoCodec: "VP8" | "H264" | "vp8" | "h264";
}
export interface ZegoMixStreamConfig {
    /**
     * 混流任务 id（客户自定义,务必保证唯一），必填，最大为256个字符,仅支持数字,英文字符 和 '~', '!', '@', '#', '$', '', '^', '&', '*', '(', ')', '_', '+', '=', '-', ', ';', '’', ',', '
     */
    taskID: string;
    /**
     * 混流输入流列表
     */
    inputList: ZegoMixStreamInput[];
    /**
     * 混流输出流列表
     */
    outputList: ZegoMixStreamOutput[];
    /**
     * 混流输出配置
     */
    outputConfig: ZegoMixStreamOutputConfig;
}
export interface ZegoMixStreamInput {
    /**
     * 输入流 ID
     */
    streamID: string;
    /**
     * 混流内容类型;contentType 取值为'VIDEO'(音视频)、'AUDIO'(纯音频),默认为'VIDEO'
     */
    contentType: 'VIDEO' | 'AUDIO';
    /**
     * 流在输出画布上的布局
     */
    layout: ZegoMixStreamLayout;
}
export interface ZegoMixStreamLayout {
    /**
     * 目标位置，上
     */
    top: number;
    /**
     * 目标位置，左
     */
    left: number;
    /**
     * 目标位置，下
     */
    bottom: number;
    /**
     * 目标位置，右
     */
    right: number;
}
export interface ZegoMixStreamOutput {
    /**
     * 混流输出流 ID 或 URL
     */
    target: string;
}
export interface ZegoMixStreamOutputConfig {
    /**
     * 混流输出视频码率，kbps
     * 数值 （必须，且大于 0）
     */
    outputBitrate: number;
    /**
     * 混流输出视频帧率
     */
    outputFPS: number;
    /**
     * 混流输出视频分辨率宽度
     */
    outputWidth: number;
    /**
     * 混流输出视频分辨率高度
     */
    outputHeight: number;
    /**
     * 混流输出音频编码
     * outputAudioCodecID 可选0：HE_AAC,1：AAC_LC,2：MP3,3: OPULS 默认为0
     */
    outputAudioCodecID: 0 | 1 | 2 | 3;
    /**
     * 混流输出音频码率，kbps
     */
    outputAudioBitrate: number;
    /**
     * 混流输出声道数
     */
    outputAudioChannels: 1 | 2;
}
export interface ZegoPlayAudioStats {
    /**
     * 音频码率
     */
    audioBitrate: number;
    /**
     * 音频编码格式"opus"
     */
    audioCodec: string;
    /**
     * 网络抖动
     */
    audioJitter: number;
    /**
     * 音量
     */
    audioLevel: number;
    /**
     * 丢包数
     */
    audioPacketsLost: number;
    /**
     * 丢包率
     */
    audioPacketsLostRate: number;
    /**
     * 拉流音频质量
     */
    audioQuality: number;
    /**
     * 采样率
     */
    audioSamplingRate: number;
    /**
     * 音轨是否被关闭
     */
    muteState: "0" | "1";
    /**
     * 音频帧率
     */
    audioFPS: number;
}
/**
 * 拉流质量回调详细信息
 *
 */
export interface ZegoPlayStats {
    /**
     * 视频相关描述
     */
    video: ZegoPlayVideoStats;
    /**
     * 音频相关描述
     */
    audio: ZegoPlayAudioStats;
}
export interface ZegoPlayVideoStats {
    /**
     * 接收视频高
     */
    frameHeight: number;
    /**
     * 接收视频宽
     */
    frameWidth: number;
    /**
     * 视频编码格式
     */
    googCodecName: string;
    /**
     * 是否视轨被关闭
     */
    muteState: "0" | "1";
    /**
     * 视频码率
     */
    videoBitrate: number;
    /**
     * 视频转码帧率
     */
    videoFPS: number;
    /**
     * 视频丢包数
     */
    videoPacketsLost: number;
    /**
     * 视频丢率
     */
    videoPacketsLostRate: number;
    /**
     * 视频解码帧率
     */
    videoTransferFPS: number;
    /**
     * 视频质量
     */
    videoQuality: number;
    /**
     * 视频解码总大小
     */
    videoFramesDecoded: number;
}
/**
 * 拉流状态
 *
 */
export interface ZegoPlayerState {
    /**
     * 流id
     */
    streamID: string;
    /**
     * NO_PLAY：未拉流状态，PLAY_REQUESTING：正在请求拉流状态，PLAYING：正在拉流状态
     */
    state: 'NO_PLAY' | 'PLAY_REQUESTING' | 'PLAYING';
    /**
     * 错误码
     */
    errorCode: number;
    /**
     * 扩展信息
     */
    extendedData: string;
}
export interface ZegoPublishAudioStats {
    /**
     * 音频码率
     */
    audioBitrate: number;
    /**
     * 音频编码格式
     */
    audioCodec: string;
    /**
     * 音频丢包数
     */
    audioPacketsLost: number;
    /**
     * 音频丢包率
     */
    audioPacketsLostRate: number;
    /**
     * 音频编码格式
     */
    googCodecName: string;
    /**
     * 音轨是否被关闭
     */
    muteState: '0' | '1';
    /**
     * 音频帧率
     */
    audioFPS: number;
}
export interface ZegoPublishStats {
    /**
     * 推流视频数据
     */
    video: ZegoPublishVideoStats;
    /**
     * 推流音频数据
     */
    audio: ZegoPublishAudioStats;
}
export interface ZegoPublishStreamConfig {
    width: number;
    height: number;
    frameRate: number;
    maxBitrate: number;
}
export interface ZegoPublishVideoStats {
    /**
     * 采集视频高
     */
    frameHeight: number;
    /**
     * 采集视频宽
     */
    frameWidth: number;
    /**
     * 视频编码格式
     */
    googCodecName: string;
    /**
     * 是否视轨被关闭
     */
    muteState: "0" | "1";
    /**
     * 视频码率
     */
    videoBitrate: number;
    /**
     * 视频转码帧率
     */
    videoFPS: number;
    /**
     * 视频丢包数
     */
    videoPacketsLost: number;
    /**
     * 视频丢率
     */
    videoPacketsLostRate: number;
    /**
     * 视频编码帧率
     */
    videoTransferFPS: number;
}
/**
 * 推流状态
 *
 */
export interface ZegoPublisherState {
    /**
     * 流ID
     */
    streamID: string;
    /**
     * NO_PUBLISH：未推流状态，PUBLISH_REQUESTING：正在请求推流状态，PUBLISHING：正在推流状态
     */
    state: 'PUBLISHING' | 'NO_PUBLISH' | 'PUBLISH_REQUESTING';
    /**
     * 错误码
     */
    errorCode: number;
    /**
     * 扩展信息
     */
    extendedData: string;
}
/**
 * 房间相关配置
 *
 */
export interface ZegoRoomConfig {
    /**
     * 设置 roomUserUpdate 是否回调，默认为 false 不回调
     */
    userUpdate: boolean;
    /**
     * 房间最大用户数量，传 0 视为不限制，默认无限制; 只有第一个登录房间的用户设置生效
     */
    maxMemberCount: number;
}
export interface ZegoScreen {
    /**
     * 是否需要音频，默认为 false
     */
    audio: boolean;
    /**
     * 一般而言，屏幕共享视频质量的选择要根据实际情况和场景来确定，screen 中的 videoQuality 提供三种预设值：
     *
     * 1：帧率较大，适合对流畅度要求较高的场景。
     * 2：适合在流畅度和清晰度之间取得平衡的场景。
     * 3：码率较大，适合对清晰度要求较高的场景。
     * 除了以上三种预设值，videoQuality 还提供一种自定义取值 4，可自定义帧率、码率，screen 增加 frameRate / bitrate 属性，使用时需要把这两个属性也传递给 SDK。
     *
     * 视频质量等级，默认质量等级为 2
     * 1  帧率:20	码率: 800K
     * 2  帧率:15	码率: 1500K
     * 3  帧率:5	        码率: 2000K
     * 4  帧率:frameRate	码率: bitrate（k）
     */
    videoQuality: 1 | 2 | 3 | 4;
}
export interface ZegoServerResponse {
    /**
     * 返回错误码,为0则是成功
     */
    errorCode: number;
    /**
     * 扩展信息
     */
    extendedData?: string;
}
/**
 * 音浪信息
 *
 */
export interface ZegoSoundLevelInfo {
    /**
     * 流ID
     */
    streamID: string;
    /**
     * 音浪大小
     */
    soundLevel: number;
    /**
     * 用于区分推拉流
     */
    type: string;
}
export interface ZegoStreamList {
    /**
     * 流 ID
     */
    streamID: string;
    /**
     * 流对应的用户
     */
    user: ZegoUser;
    /**
     * 流附加信息
     */
    extraInfo: string;
    /**
     * flv 播放地址
     */
    urlsFLV: string;
    /**
     * rtmp 播放地址
     */
    urlsRTMP: string;
    /**
     * hls 播放地址
     */
    urlsHLS: string;
    /**
     * https 协议的 flv 播放地址
     */
    urlsHttpsFLV: string;
    /**
     * https 协议的 hls 播放地址
     */
    urlsHttpsHLS: string;
}
export interface ZegoUser {
    /**
     * 用户 ID，最大 64 字节的字符串。仅支持数字，英文字符 和 '~', '!', '@', '#', '$', '', '^', '&', '*', '(', ')', '_', '+', '=', '-', ', ';', '’', ',', '.
     */
    userID: string;
    /**
     * 用户名,最大长度不超过 256 字节的字符串
     */
    userName: string;
}
export interface ZegoVideoCodec {
    /**
     * 是否支持H264编解码能力
     */
    H264: boolean;
    /**
     * 是否支持VP8编解码能力
     */
    VP8: boolean;
}
export interface ZegoWebPlayOption {
    /**
     * 是否需要拉取视频，默认为 true;
     * 通常情况下建议不填，SDK 默认会根据拉到的实际设备状态选择是否拉音视频
     */
    video: boolean;
    /**
     * 是否需要拉取音频，默认为 true;
     * 通常情况下建议不填，SDK 默认会根据拉到的实际设备状态选择是否拉音视频
     */
    audio: boolean;
    /**
     * 拉流额外参数;鉴权参数 streamParams 格式如下：'zg_expired=XX&zg_nonce=XX&zg_token=XX',只有需要配置鉴权时才传入，否则请忽略
     */
    streamParams: string;
    /**
     * 拉流选取编码格式，'VP8'或'H264'
     */
    videoCodec: 'VP8' | 'H264';
}
export interface ZegoWebPublishOption {
    /**
     * 推流备选参数 ; 备选参数 streamParams 格式如下：'zg_expired=XX&zg_nonce=XX&zg_token=XX'，只有需要配置鉴权才传入（可选功能）
     */
    streamParams?: string;
    /**
     * 流附加信息
     */
    extraInfo?: string;
    /**
     * 推流视频编码，'VP8'或 'H264'
     */
    videoCodec?: 'VP8' | 'H264';
}
/**
 * @param roomID 房间ID
 * @param messageInfo 弹幕消息信息
 */
declare type IMRecvBarrageMessageCallBack = (roomID: string, messageInfo: ZegoBarrageMessageInfo[]) => void;
/**
 * @param roomID 房间ID
 * @param chatData 房间消息信息
 */
declare type IMRecvBroadcastMessageCallBack = (roomID: string, chatData: ZegoBroadcastMessageInfo[]) => void;
/**
 * @param roomID 房间ID
 * @param fromUser 发送消息用户信息
 * @param command 收到的自定义消息
 */
declare type IMRecvCustomCommandCallBack = (roomID: string, fromUser: ZegoUser, command: string) => void;
/**
 * 拉流质量回调,拉流成功后开始触发
 *
 * @param streamID 流 ID
 * @param stats 拉流质量回调信息
 */
declare type PlayQualityUpdateCallBack = (streamID: string, stats: ZegoPlayStats) => void;
/**
 * 拉流状态发生变化是回调
 *
 * @param result 拉流状态结果
 */
declare type PlayerStateUpdateCallBack = (result: ZegoPlayerState) => void;
/**
 * 订阅推流质量回调
 *
 * @param streamID 推流流ID
 * @param stats 推流质量描述
 */
declare type PublishQualityUpdateCallBack = (streamID: string, stats: ZegoPublishStats) => void;
/**
 * @param result 推流状态结果
 */
declare type PublisherStateUpdateCallBack = (result: ZegoPublisherState) => void;
/**
 * @param streamID 流 ID
 * @param status 所拉流的摄像头状态 'OPEN'表示开启 'MUTE'表示关闭
 */
declare type RemoteCameraStatusUpdateCallBack = (streamID: string, status: 'OPEN' | 'MUTE') => void;
/**
 * @param streamID 流 ID
 * @param status 所拉流的麦克风状态 'OPEN'表示开启 'MUTE'表示关闭
 */
declare type RemoteMicStatusUpdateCallBack = (streamID: string, status: 'OPEN' | 'MUTE') => void;
/**
 * @param roomID 发生用户变化房间的ID
 * @param count 当前在线用户数量
 */
declare type RoomOnlineUserCountUpdateCallBack = (roomID: string, count: number) => void;
/**
 * @param roomID 房间ID
 * @param state DISCONNECTED: 房间和服务期断开,并重试后仍旧失败
 *              CONNECTING:  断开并开始重连
 *              CONNECTED: 重连成功
 * @param errorCode 断开时候的具体错误码
 * @param extendedData 扩展信息
 */
declare type RoomStateUpdateCallBack = (roomID: string, state: 'DISCONNECTED' | 'CONNECTING' | 'CONNECTED', errorCode: number, extendedData: string) => void;
/**
 * 监听已登录房间内流的变化（增加，删除）
 *
 * @param roomID 房间ID
 * @param updateType DELETE：流删除，ADD：流新增
 * @param streamList 更新流列表
 */
declare type RoomStreamUpdateCallBack = (roomID: string, updateType: 'DELETE' | 'ADD', streamList: ZegoStreamList[]) => void;
/**
 * 房间用户变化回调
 *
 * Note: 详情描述：当前登录房间,如果用户发生新增,删除等,触发回调通知当前用户
 *
 * Note: 触发条件：其他用户登录,推出时触发
 *
 * Note: 限制频率：无
 *
 * Note: 关注回调：无
 *
 * Note: 重点提示：触发前提是登录时,设置了关注用户变化
 *
 * Note: 支持版本：1.0.0
 *
 * Note: 废弃时间：无
 *
 * @param roomID 发生用户变化房间的ID
 * @param updateType 用户行为，DELETE 表示离开，ADD 表示进入
 * @param userList 发生变化用户的具体信息
 *
 * @return 没有返回
 */
declare type RoomUserUpdateCallBack = (roomID: string, updateType: 'DELETE' | 'ADD', userList: ZegoUser[]) => void;
/**
 * @param mediaStream 创建屏幕共享流得到的流对象
 */
declare type ScreenSharingEndedCallBack = (mediaStream: MediaStream) => void;
/**
 * 推拉流音浪回调,该接口目前不兼容safari
 *
 * @param soundLevelList 声浪信息列表，包括流id，声浪大小，及流状态
 */
declare type SoundLevelUpdateCallBack = (soundLevelList: ZegoSoundLevelInfo[]) => void;
/**
 * 流附加消息变化时回调
 *
 * @param roomID 房间ID
 * @param streamList 流信息
 */
declare type StreamExtraInfoUpdateCallBack = (roomID: string, streamList: {
    streamID: string;
    user: ZegoUser;
    extraInfo: string;
}[]) => void;
/**
 * 音频设备状态变化回调
 *
 * @param updateType 'DELETE' 表示设备删除， 'ADD'表示设备增加
 * @param deviceType 'Input'表示输入设备， 'Output'表示输出设备
 * @param deviceInfo 设备信息
 */
declare type audioDeviceStateChangedCallBack = (updateType: 'DELETE' | 'ADD', deviceType: 'Input' | 'Output', deviceInfo: {
    deviceName: string;
    deviceID: string;
}) => void;
/**
 * 设备异常回调
 *
 * @param errorCode 错误码
 * @param deviceName 发生异常的设备名称
 */
declare type deviceErrorCallBack = (errorCode: number, deviceName: string) => void;
/**
 * 房间额外消息更新回调
 *
 * @param roomID 房间ID
 * @param type 消息类型
 * @param data 消息内容
 */
declare type roomExtraInfoUpdateCallBack = (roomID: string, type: string, data: string) => void;
/**
 * 视频设备状态变化更新回调
 *
 * @param updateType 'DELETE' 为设备被移除， 'ADD'表示设备增加
 * @param deviceInfo 设备信息，deviceName为设备名称，deviceID为设备ID
 */
declare type videoDeviceStateChangedCallBack = (updateType: 'DELETE' | 'ADD', deviceInfo: {
    deviceName: string;
    deviceID: string;
}) => void;
export {};
