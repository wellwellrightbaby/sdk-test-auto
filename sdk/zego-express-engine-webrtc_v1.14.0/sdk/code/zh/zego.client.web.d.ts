import { ZegoServerResponse, ZegoLocalStreamConfig, ZegoPublishStreamConfig, ZegoUser, ZegoRoomConfig, ZegoEvent, ZegoMixStreamAdvance, ZegoMixStreamConfig, ZegoWebPlayOption, ZegoWebPublishOption, ZegoCapabilityDetection, ZegoDeviceInfos, ZegoLogConfig } from './ZegoExpressEntity';
import { ZegoWebRTC } from '../../webrtc/zego.client.web';
export declare class ZegoExpressEngine {
    /**
     * 通知即构服务器将流转推到CDN
     *
     * Note: 详情描述：
     *    当需要将音视频流转推到其它指定的 CDN 时，需要调用此接口进行设置（调用前请先联系技术支持配置转推CDN功能）
     *    建议使用服务端动态转推CDN中的增加转推CDN地址 API替代该客户端API
     *
     * Note: 调用时机：初始化后, 调用其他接口前调用
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *   该接口调用有可能会失败，若返回成功，仅代表通知即构服务器成功，无法判断即构服务器是否转推CDN成功
     *   signature的生成需要特殊的secret秘钥，需要联系技术支持获取（控制台上没有该secret，只是有可能serverSecret会和secret一致）
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param streamID 推流 ID
     * @param targetURL CDN 转推地址，支持的转推地址格式有 rtmp
     */
    addPublishCdnUrl(streamID: string, targetURL: string): Promise<ZegoServerResponse>;
    /**
     * 支持能力检测接口
     *
     * Note: 详情描述：配置客户端打印日志级别和远端日志上传级别，日志是定位问题的重要手段
     *
     * Note: 调用时机：初始化后, 调用其他接口前调用
     *
     * Note: 限制频率：没有限制
     *
     * Note: 与LiveRoom差异：多种能力检测接口合并, 客户不用一个个调用
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：初始化后立刻调用,建议在客户更换浏览器后,使用sdk前必须调用
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     */
    checkSystemRequirements(): Promise<ZegoCapabilityDetection>;
    zegoWebRTC: ZegoWebRTC;
    /**
     * 初始化Engine
     *
     * 初始化构造函数
     *
     * Note: 详情描述：实例化对象
     *
     * Note: 调用时机：使用SDK前第一个需要调用的接口
     *
     * Note: 限制频率：没有限制
     *
     * Note: 与LiveRoom差异：相关配置提前到初始化,减少客户必须关注接口数
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：server建议填写数组, 备用域名抗弱网能力更强
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param appID 用于区分不同客户和项目的唯一标识（必须是number类型）; 一个appID对应一个客户项目，不同端共有一个appID实现互通 ;一个客户可以申请多个appID,
     *              必须从即构控制台获取
     * @param server 表示SDK连接的即构服务器地址（支持备用域名）;SDK内的大多数功能由它交互 ; 同一个appID可以填写多个server; 必须从控制台获取
     */
    constructor(appID: number, server: string | string[]);
    /**
     * 创建推流数据源，包括摄像头麦克风采集源数据，屏幕共享数据，第三方源数据（能在页面播放的其他源数据）
     *
     * Note: 详情描述：为保证最大化兼容，使用默认配置，不传参数。如果有特定要求，使用自定义参数，请确保有对接口错误回调的处理。 建议使用前咨询售前获取最佳调用方案
     *
     * Note: 与LiveRoom差异：创建不同类型的流聚合为一个接口,参数层级更分明
     *
     * Note: 调用时机：初始化后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：推流质量回调publishQualityUpdate,推流状态回调publisherStateUpdate, 屏幕共享中断回调screenSharingEnded
     *
     * Note: 重点提示：
     *    移动端和pc对视频宽高的理解不一样，恰好相反，同样的分辩率在pc是横屏，在移动端就是竖屏
     *   虽然API支持设置分辩率，但是很多设备对于自定义的分辨率并不支持，推荐使用内设的几种分辨率
     *   创建流时没有视频轨道，safari拉流时也必须拉纯音频，否则无法播放。如果有动态切换的情况下，建议先推音视频流，再enable对应的轨道
     *    必须在安全域名下（https,localhost,127.0.0.1）调用该接口
     *    推第三方流时, 传入的video标签对应资源,必须加载成功后(oncanplay回调)才能调用该接口
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @return promise 异步返回流媒体对象
     */
    createStream(source: ZegoLocalStreamConfig): Promise<MediaStream>;
    /**
     * 销毁创建的流数据
     *
     * Note: 详情描述：销毁流后对应的相关设备也会关闭,如摄像头,麦克风
     *
     * Note: 调用时机：创建流后才能调用
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示： 推流过程中，销毁流会导致推流中断, 销毁流之前请先停止推流，否则对面会看到画面卡住
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param localStream 创建流得到的 stream
     */
    destroyStream(localStream: MediaStream): void;
    /**
     * 获取设备硬件信息，为控制硬件设备接口，提供设备id参数。
     *
     * 使用说明:
     * 需要在安全域名下(https,localhost,127.0.0.1)调用该接口;
     * 不能完全信赖该接口，要对获取不到设备信息的情况做降级处理，例如:提示客户更换浏览器。
     * 限制使用不通过的用户调用切换硬件设备接口等;
     * 约束限制:
     * 某些平台浏览器（如: Safari，iOS）可能获取到的设备名称为空，建议再次调用此接口，即可获取到正确的设备名称;
     * 页面刷新后设备ID可能会有变化，需要重新获取;
     * 部分浏览器需要在调用createrStream接口获取权限后,才可以获取到设备id;
     * safari不支持获取扬声器信息;
     */
    enumDevices(): Promise<ZegoDeviceInfos>;
    /**
     * 获取当前SDK版本
     *
     * Note: 详情描述：需要查看当前版本时调用
     *
     * Note: 调用时机：初始化后
     *
     * Note: 限制频率：无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示: 无
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @return 为 string 字符串，例如“1.0.0.标识”
     */
    getVersion(): string;
    /**
     * 登录房间
     *
     * Note: 详情描述： 大部分功能接口必须在登录房间后调用 , 登录成功后同一个房间里的用户，共享状态（用户状态，流状态，消息等)
     *
     * Note: 调用时机：初始化后,且拿到token后
     *
     * Note: 限制频率：无
     *
     * Note: 关注回调： 房间状态回调roomStateUpdate, 房间用户变化回调roomUserUpdate, 房间总人数变化回调roomOnlineUserCountUpdate
     *
     * Note: 重点提示：
     *        token是使用登录房间的钥匙, 这个是需要客户自己实现,为保证安全,一定要在自己的服务端生成token;
     *        同一个用户（即userID相同）不能同时登录两个及以上房间;
     *        若想监听房间内其他用户的变化，则config对象下的userUpdate参数必须设置为“true”
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param roomID 房间 ID，最大长度为 128 字节的字符串。仅支持数字，英文字符 和 '~', '!', '@', '#', '$', '', '^', '&', '*', '(', ')', '_', '+', '=', '-', ', ';', '’', ',', '.', '<', '>', '/',
     * @param token 登录验证 token, 是通过在即构控制台注册项目获得密钥,加上指定算法获得; 测试阶段可以通过即构的接口绕过, 正式环境一定要用户自己实现
     * @param user 登录用户信息
     * @param config 房间相关配置
     */
    loginRoom(roomID: string, token: string, user: ZegoUser, config: ZegoRoomConfig): Promise<boolean>;
    /**
     * 退出房间，不再接受各种房间内状态
     *
     * Note: 详情描述：结束音视频通话或其他功能后需要调用该接口退出房间，以保证对端能及时同步你的当前状态; 调用该接口后会向 Zego 服务器发送登出信令，之后重置当前房间中用户与 Zego 服务器进行交互所需的关键数据，并置空 websocket 对象
     *
     * Note: 调用时机：初始化后,登录前
     *
     * Note: 限制频率：无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：无
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param roomID 和登录房间的roomID保持一致
     */
    logoutRoom(roomID?: string): void;
    /**
     * 打开/关闭正在推流的流声音
     *
     * Note: 详情描述：只是将数据降低为很小,音频轨还在
     *
     * Note: 调用时机：创建流成功后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：拉流麦克风状态回调remoteMicStatusUpdate
     *
     * Note: 重点提示：打开/关闭流声音的前提是原始流必须有音频轨道，创建流时不能为纯视频
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param localStream 创建流获取的 stream
     * @param mute 是否停止发送音频流；true 表示不发送音频流；false 表示发送视频流；默认为 false
     */
    mutePublishStreamAudio(localStream: MediaStream, mute: boolean): boolean;
    /**
     * 关闭/打开正在推流的流画面
     *
     * Note: 详情描述：只是将数据降低为很小,视频轨还在
     *
     * Note: 调用时机：创建流成功后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：拉流摄像头状态回调remoteCameraStatusUpdate
     *
     * Note: 重点提示：打开/关闭流画面的前提是原始流必须有视频轨道，创建流时不能为纯音频
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param localStream 创建流获取的 stream
     * @param mute 是否停止发送视频流；true 表示不发送视频流；false 表示发送视频流；默认为 false
     */
    mutePublishStreamVideo(localStream: MediaStream, mute: boolean): boolean;
    /**
     * 删除注册过的回调事件
     *
     * Note: 详情描述：用于删除注册的同一类回调事件
     *
     * Note: 调用时机：注册后,退出房间前
     *
     * Note: 限制频率：无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：无
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param event 监听事件名
     */
    off<K extends keyof ZegoEvent>(event: K): boolean;
    /**
     * 注册回调事件
     *
     * Note: 详情描述：用于处理SDK主动通知开发者回调的接口，通过注册不同 event 的事件，可以收到不同功能的回调
     *
     * Note: 调用时机：初始化后,登录前
     *
     * Note: 限制频率：无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：同样的事件可以注册多个, 相同的注册事件，会根据注册的先后顺序依次触发
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param event 监听事件名
     * @param callBack 回调函数
     *
     * @return 注册是否成功
     */
    on<K extends keyof ZegoEvent>(event: K, callBack: ZegoEvent[K]): boolean;
    /**
     * 通知即构服务器停止将流转推到CDN
     *
     * Note: 详情描述：
     *     当已经添加了某个 CDN 转推地址，需要停止将流转推至该CDN时调用此接口（调用前请先联系技术支持配置转推CDN功能）
     *     建议使用服务端动态转推CDN API中的删除转推CDN地址 API替代该客户端API
     *
     * Note: 调用时机：转推成功后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *    该接口调用有可能会失败，若返回成功，仅代表通知即构服务器成功，无法判断即构服务器是否转推CDN成功
     *    signature的生成需要特殊的secret秘钥，需要联系技术支持获取（控制台上没有该secret，只是有可能serverSecret会和secret一致）
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param streamID 推流 ID
     * @param targetURL CDN 转推地址，支持的转推地址格式有 rtmp
     */
    removePublishCdnUrl(streamID: string, targetURL: string): Promise<ZegoServerResponse>;
    /**
     * 替换媒体流的音视频轨道
     *
     * Note: 详情描述：创建流成功后才能调用该接口，会将媒体流中原有的轨道替换为新的轨道，例如可以在摄像头、屏幕共享或视频之间切换视频轨道，在麦克风和 mp3 之间切换音频轨道
     *
     * Note: 调用时机：创建流后
     *
     * Note: 限制频率: 无
     *
     * Note: 与LiveRoom差异：新增的接口
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：localStream必须是通过createStream方法得到的
     *
     * Note: 支持版本：1.13.0
     *
     * Note: 废弃时间： 无
     *
     * @param localStream 创建流得到的 stream
     * @param mediaStreamTrack 音视频轨道
     */
    replaceTrack(localStream: MediaStream, mediaStreamTrack: MediaStreamTrack): Promise<ZegoServerResponse>;
    /**
     * 发送消息给房间内所有用户，消息不保证可靠
     *
     * Note: 详情描述：无
     *
     * Note: 调用时机：初始化后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：房间弹幕消息通知 MRecvBarrageMessage
     *
     * Note: 重点提示：
     *    消息不能超过1024字节
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param roomID 房间Id
     * @param message 消息内容，长度不超过1024字节
     */
    sendBarrageMessage(roomID: string, message: string): Promise<ZegoServerResponse>;
    /**
     * 发送消息给房间内所有用户，消息保证可靠
     *
     * Note: 详情描述：无
     *
     * Note: 调用时机：初始化后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：房间消息通知 IMRecvBroadcastMessage
     *
     * Note: 重点提示：
     *    消息不能超过1024字节
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param roomID 房间id
     * @param message 消息内容，长度不超过1024字节
     */
    sendBroadcastMessage(roomID: string, message: string): Promise<ZegoServerResponse>;
    /**
     * 发送消息给房间内指定用户，消息可靠
     *
     * Note: 详情描述：无
     *
     * Note: 调用时机：初始化后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：监听自定义命令信令通知 IMRecvCustomCommand
     *
     * Note: 重点提示：
     *    消息不能超过1024字节。
     *     两次发送自定义消息之间间隔不能小于500ms
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param roomID 房间Id
     * @param message 自定义消息内容，长度不超过1024字节
     * @param toUserIDList 目标用户uerId 数组
     */
    sendCustomCommand(roomID: string, message: string, toUserIDList: string[]): Promise<ZegoServerResponse>;
    /**
     * 错误日志信息 alert 提示，默认测试环境下都是开启状态
     *
     * Note: 详情描述：打开或关闭错误弹窗提示
     *
     * Note: 调用时机： 初始化后,登录之前
     *
     * Note: 限制频率：无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：不建议调用
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param enable 是否打开 debug 模式;默认sdk会自动判断
     */
    setDebugVerbose(enable: boolean): void;
    /**
     * 日志高级配置
     *
     * Note: 详情描述：配置客户端打印日志级别和远端日志上传级别，日志是定位问题的重要手段
     *
     * Note: 调用时机：初始化后, 调用其他接口前调用
     *
     * Note: 限制频率：没有限制
     *
     * Note: 与LiveRoom差异：新增加接口,日志相关配置统一入口
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示： 除非有明确的特殊需求，否则请勿调用该接口更改默认配置;
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param config 日志相关高级配置
     *
     * @return 调用是否成功; 失败情况: 输入参数格式有误
     */
    setLogConfig(config: ZegoLogConfig): boolean;
    /**
     * 混流高级配置
     *
     * Note: 详情描述：此方法为可选方法，需在startMixerTask之前调用才能生效
     *
     * Note: 调用时机：登录成功后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：无
     *
     * Note: 支持版本：1.5.2
     *
     * Note: 废弃时间： 无
     *
     * @param config 混流高级功能设置
     */
    setMixerTaskConfig(config: ZegoMixStreamAdvance): Promise<ZegoServerResponse>;
    /**
     * 设置混音音量
     *
     * Note: 详情描述：通过传入的音量值和标签，调节指定标签混入的音量
     *
     * Note: 与LiveRoom差异：可以调节指定标签的音量
     *
     * Note: 调用时机：混音后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：safari 下暂不支持使用混音
     *
     * Note: 支持版本：1.14.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 推流ID
     * @param volume 音量值
     * @param media 媒体标签 video 或 audio
     */
    setMixingAudioVolume(streamID: string, volume: number, media: HTMLMediaElement): boolean;
    /**
     * 设置房间附加消息
     *
     * Note: 详情描述：该功能可以设置一个以房间为单位的附加消息，该消息跟随整个房间的生命周期，每个登录到房间的用户都能够同步消息。开发者可用于实现各种业务逻辑，如房间公告等等。
     *
     * Note: 调用时机：登录房间后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 与LiveRoom差异：新增加接口
     *
     * Note: 关注回调：房间附加信息回调roomExtraInfoUpdate
     *
     * Note: 重点提示： 目前房间附加消息只允许设置一个键值对，且 key 最大长度为 10 字节，value 最大长度为 100 字节
     *
     * Note: 支持版本：1.12.0
     *
     * Note: 废弃时间：无
     *
     * @param roomID 房间 ID
     * @param key 附加消息键
     * @param value 附加消息值
     */
    setRoomExtraInfo(roomID: string, key: string, value: string): Promise<ZegoServerResponse>;
    /**
     * 设置是否监听音浪及音浪回调间隔时间
     *
     * Note: 详情描述：设置后将通过soundLevelUpdate 回调推拉流的音量大小
     *
     * Note: 调用时机：拉流成功后,即playerStateUpdate回调拉流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：拉流质量回调playQualityUpdate,拉流状态回调playerStateUpdate
     *
     * Note: 重点提示：无
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param bool 开启或关闭音浪回调
     * @param interval 需要回调的时间间隔，默认1000ms
     */
    setSoundLevelDelegate(bool: boolean, interval: number): void;
    /**
     * 设置流的附加信息
     *
     * Note: 详情描述：更改流附加信息
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：流附加信息回调streamExtraInfoUpdate
     *
     * Note: 重点提示：只支持字符串
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 推流 ID
     * @param extraInfo 流附加信息; extraInfo为json格式字符串
     */
    setStreamExtraInfo(streamID: string, extraInfo: string): Promise<ZegoServerResponse>;
    /**
     * 修改推流参数
     *
     * Note: 详情描述：推流成功后才能调用该接口，可在推流途中修改推流相关参数，不建议频繁修改
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：localStream必须是通过createStream方法得到的
     *
     * Note: 支持版本：1.14.0
     *
     * Note: 废弃时间： 无
     *
     * @param localStream 创建流得到的 stream
     * @param constraints 流的约束
     */
    setVideoConfig(localStream: MediaStream, constraints: ZegoPublishStreamConfig): Promise<ZegoServerResponse>;
    /**
     * 将多条流按照调用要求合成一条流。 由于实际动作是在服务端操作，没有浏览器性能上的限制，且各个流之间延迟低，可以保证被混的多条流画面和声音同步
     *
     * Note: 详情描述：混流前需要保证流还存在, 处理混流失败情况。避免发起混流和流删除操作同时触发，以免混流失败; 被混的流若中止推流，需要重新做混流处理，否则对端画面会卡住
     *
     * Note: 与LiveRoom差异：创建不同类型的流聚合为一个接口,参数层级更分明
     *
     * Note: 调用时机：初始化后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *    对应appID开启了混流功能
     *    被混的流在即构服务器上存在
     *    inputList 的contentType 均为'AUDIO'时，outputBitrate、outputFPS、outputWidth、outputHeight 可不设置，默认设置为1
     *
     * Note: 支持版本：1.5.2
     *
     * Note: 废弃时间： 无
     *
     * @param mixStreamConfig 混流参数配置
     */
    startMixerTask(mixStreamConfig: ZegoMixStreamConfig): Promise<ZegoServerResponse>;
    /**
     * 对正在推的流添加或替换音规
     *
     * Note: 详情描述：通常用于背景音乐和音效
     *
     * Note: 与LiveRoom差异：创建不同类型的流聚合为一个接口,参数层级更分明
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *    safari浏览器下使用该接口，会造成麦克风采集声音质量变差(暂不支持mac平台safari)
     *     混音不要同时包含6个以上，否则会出现性能问题,导致页面卡顿
     *
     * Note: 支持版本：1.7.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 需要混音的流id
     * @param mediaList 1 本地的<audio> 或 <video> 对象数组
     *                  2 对音效的操作（包括暂停恢复）则是通过操作<audio> 或 <video> 对象完成
     */
    startMixingAudio(streamID: string, mediaList: Array<HTMLMediaElement>): boolean;
    /**
     * 通过流ID获取远端流
     *
     * Note: 详情描述：该接口是异步函数，且可选参数都是针对特殊场景才使用，请不要随意设置。如果需要使用请先联系即构售前工程师确认
     *
     * Note: 调用时机：收到新增拉流,即roomStreamUpdate回调后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：拉流质量回调playQualityUpdate,拉流状态回调playerStateUpdate
     *
     * Note: 重点提示：
     *     拉流前确保该条流已经推成功(推送到服务器), 即拉流是在roomStreamUpdate回调后;
     *    若推流端为单主播模式需通过 CDN 拉流 (不是该接口)
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 流 ID
     * @param playOption 拉流附加参数
     */
    startPlayingStream(streamID: string, playOption: ZegoWebPlayOption): Promise<MediaStream>;
    /**
     * 将本地流推送到远端（即构服务器）
     *
     * Note: 详情描述：publishOption.videoCodec 默认使用H264推流，如果有特殊需求可选择VP8，更多场景选择方案请先咨询即构售前工程师
     *
     * Note: 调用时机：初始化后, 调用其他接口前调用
     *
     * Note: 限制频率：没有限制
     *
     * Note: 与LiveRoom差异：新增加接口,日志相关配置统一入口
     *
     * Note: 关注回调：推流质量回调publishQualityUpdate,推流状态回调publisherStateUpdate
     *
     * Note: 重点提示： localStream必须是通过createStream方法得到的
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param streamID 推流 ID，长度不超过256的字符串，仅支持数字，英文字符 和 '~', '!', '@', '#', '$', '', '^', '&', '*', '(', ')', '_', '+', '=', '-', ', ';', '’', ',', '.', '<', '>', '/', ''
     * @param localStream 创建流得到的 stream
     * @param publishOption 推拉附加参数：鉴权、视频编码
     *
     * @return true 代表客户端发送请求成功,流成功推送到服务器需要通过流状态回调接口判断;
     */
    startPublishingStream(streamID: string, localStream: MediaStream, publishOption: ZegoWebPublishOption): boolean;
    /**
     * 停止服务端混流
     *
     * Note: 详情描述：
     *    关闭页面一定要发起停止混流，避免异常关闭导致混流没有停止，影响计费
     *     被混的流若中止推流，需要重新做混流处理，否则对端画面会卡住
     *
     * Note: 与LiveRoom差异：创建不同类型的流聚合为一个接口,参数层级更分明
     *
     * Note: 调用时机：初始化后
     *
     * Note: 限制频率:  无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *    对应appID开启了混流功能
     *    被混的流在即构服务器上存在
     *
     * Note: 支持版本：1.5.2
     *
     * Note: 废弃时间： 无
     *
     * @param taskID 混流任务 id（客户自定义,务必保证唯一），必填，最大为256个字符,仅支持数字,英文字符 和 '~', '!', '@', '#', '$', '', '^', '&', '*', '(', ')', '_', '+', '=', '-', ', ';', '’', ',', '
     */
    stopMixerTask(taskID: string): Promise<ZegoServerResponse>;
    /**
     * 停止对正在推的流添加背景音乐或音效
     *
     * Note: 详情描述：通过传入的mediaList个数，控制对某个或多个背景音乐的暂停，不传入该参数则停止该流的所有混音
     *
     * Note: 与LiveRoom差异：创建不同类型的流聚合为一个接口,参数层级更分明
     *
     * Note: 调用时机：混音后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：
     *    检测captrue能力不支持的浏览器不能使用该接口。
     *    safari浏览器下使用该接口，会造成麦克风采集声音质量变差(暂不支持mac平台safari)
     *
     * Note: 支持版本：1.7.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 正在混音的流id
     */
    stopMixingAudio(streamID: string, mediaList: Array<HTMLMediaElement>): boolean;
    /**
     * 停止拉取远端流（即构服务器）
     *
     * Note: 详情描述：断开和即构服务器之间的连接,不再产生带宽
     *
     * Note: 调用时机：拉流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：拉流质量回调playQualityUpdate,拉流状态回调playerStateUpdate
     *
     * Note: 重点提示：停止拉流后不会销毁播放器,播放器销毁需要开发者自己实现
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param streamID 流 ID
     */
    stopPlayingStream(streamID: string): void;
    /**
     * 停止将本地流推送到远端（即构服务器）
     *
     * Note: 详情描述：需要在推流成功后才可以调用该接口
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率：没有限制
     *
     * Note: 关注回调：推流状态回调publisherStateUpdate
     *
     * Note: 重点提示： 停止推流不会导致渲染的<video>画面暂停，开发者需自行销毁<video>
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间：无
     *
     * @param streamID 推流 ID,和推流streamID保持一致
     */
    stopPublishingStream(streamID: string): boolean;
    /**
     * 切换麦克风
     *
     * Note: 详情描述：切换当前推流使用的设备
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：无
     *
     * Note: 重点提示：推流成功后才能调用该接口，推流前切换麦克风，请使用创建流接口。如果切换麦克风失败，原来的流会保留，并返回错误
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param localStream 创建流获取的 stream
     * @param deviceID 需要切换的麦克风设备 ID
     */
    useAudioDevice(localStream: MediaStream, deviceID: string): Promise<ZegoServerResponse>;
    /**
     * 切换摄像头
     *
     * Note: 详情描述：切换当前推流使用的设备
     *
     * Note: 调用时机：推流成功后
     *
     * Note: 限制频率: 无
     *
     * Note: 关注回调：流附加信息回调streamExtraInfoUpdate
     *
     * Note: 重点提示：推流成功后才能调用该接口，推流前切换摄像头，请使用创建流接口。如果切换摄像头失败，原来的流会保留，并返回错误
     *
     * Note: 支持版本：1.0.0
     *
     * Note: 废弃时间： 无
     *
     * @param localStream 创建流获取的 stream
     * @param deviceID 需要切换的摄像头设备 ID
     */
    useVideoDevice(localStream: MediaStream, deviceID: string): Promise<ZegoServerResponse>;
}
