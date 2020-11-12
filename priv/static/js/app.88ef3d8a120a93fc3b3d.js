webpackJsonp([23],{
    0:function(e,t,n){
        n("j1ja"),
        e.exports=n("NHnr")
    },
    "1KhH":function(e,t){},
    "7TWk":function(e,t){},
    "7YgM":function(e,t){e.exports={
        name:"emq-dashboard",version:"4.1-rc.3",
        description:"EMQ X Dashboard",
        author:"zhangwh <zh.whong@gmail.com>",
        private:!0,scripts:{
            dev:"BABEL_ENV=development webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
            start:"npm run dev",lint:"eslint --ext .js,.vue src",
            build:"node build/build.js","deploy:build":"node build/build.js && ./dist.sh"
        },
        dependencies:{
            axios:"^0.19.0",
            codemirror:"^5.48.0",
            dateformat:"^3.0.3","element-ui":"^2.11.1","js-sql-parser":"^1.2.1",
            jsonlint:"^1.6.3",
            jsonwebtoken:"^8.5.1","monaco-editor":"^0.18.1",
            mqtt:"^2.18.8",
            nprogress:"^0.2.0","script-loader":"^0.7.2","sql-formatter":"^2.3.3",
            vue:"^2.6.10","vue-i18n":"^8.12.0","vue-router":"^3.0.7",
            vuex:"^3.1.1","vuex-router-sync":"^5.0.0"
        },
        devDependencies:{
            autoprefixer:"^7.1.2","babel-core":"^6.22.1","babel-eslint":"^8.2.1","babel-helper-vue-jsx-merge-props":"^2.0.3","babel-loader":"^7.1.1","babel-plugin-dynamic-import-node":"^2.2.0","babel-plugin-syntax-jsx":"^6.18.0","babel-plugin-transform-runtime":"^6.22.0","babel-plugin-transform-vue-jsx":"^3.5.0","babel-polyfill":"^6.26.0","babel-preset-env":"^1.3.2","babel-preset-stage-2":"^6.22.0",chalk:"^2.0.1","copy-webpack-plugin":"^4.0.1","css-loader":"^0.28.0",eslint:"^4.15.0","eslint-config-airbnb-base":"^11.3.0","eslint-friendly-formatter":"^3.0.0","eslint-import-resolver-webpack":"^0.8.3","eslint-loader":"^1.7.1","eslint-plugin-import":"^2.7.0","eslint-plugin-vue":"^4.0.0","extract-text-webpack-plugin":"^3.0.0","file-loader":"^1.1.4","friendly-errors-webpack-plugin":"^1.6.1","html-webpack-plugin":"^2.30.1","monaco-editor-webpack-plugin":"^1.7.0","node-notifier":"^5.1.2","node-sass":"^4.8.3","optimize-css-assets-webpack-plugin":"^3.2.0",ora:"^1.2.0",
            portfinder:"^1.0.13","postcss-import":"^11.0.0","postcss-loader":"^2.0.8","postcss-url":"^7.2.1",rimraf:"^2.6.0","sass-loader":"^6.0.7",semver:"^5.3.0",shelljs:"^0.7.6","uglifyjs-webpack-plugin":"^1.1.1","url-loader":"^0.5.8","vue-loader":"^13.7.3","vue-style-loader":"^3.0.1","vue-template-compiler":"^2.5.2",webpack:"3.8.0","webpack-bundle-analyzer":"^3.3.2","webpack-dev-server":"2.9.7","webpack-merge":"^4.1.0"},
            engines:{node:">= 6.0.0",npm:">= 3.0.0"},
            browserslist:["> 1%","last 2 versions","not ie <= 8"]
        }
    },
    "HL/F":function(e,t,n){
        "use strict";
        var s=n("Dd8w"),a=n.n(s),o=n("wUZ8"),i=n.n(o),r=a()({},i.a,{
            select:{cluster:"All Nodes",placeholder:"Select Node"},
            error:{
                networkError:"Network Error",
                initializationError:"Initialization Error",module_not_loaded:"Related module are not load"
            },
            success:{createSuccess:"Create Success"},
            oper:{
                confirmDelete:"Confirm Delete ?",confirmStop:"Confirm Stop?",
                cancel:"Cancel",confirm:"Confirm",delete:"Delete",oper:"Operation",edit:"Edit",save:"Save",
                create:"Create",view:"View",viewMore:"View More",expand:"Expand",collapse:"Collapse",refresh:"Refresh",add:"Add",
                addSuccess:"Add Success",editSuccess:"Edit success",startSuccess:"Start Success",stopSuccess:"Stop Success",enableSuccess:"Enable Success",disabledSuccess:"Disable Success",deleteSuccess:"Delete Success",disconnectSuccess:"Disconnect Success",from:"From",stop:"Stop",start:"Start",
                    notice:"Notice",
                    confirmDisconnect:"Confirm disconnect?",
                    confirmKickOut:"Confirm kick out?",
                    confirmCleanSession:"Confirm Clean Session?",
                    yes:"Yes",no:"No",online:"Online",offline:"Offline",warning:"Warning",
                    subscribe:"Subscribe",unsubscribe:"Unsubscribe",
                    unsubscribeConfirm:"This action will cancel subscription to the topic",
                    pleaseEnter:"Please Enter",copy:"Copy",copySuccess:"Copy successfully",
                    copyFailed:"Copy failed",generate:"Generate",search:"Search",reset:"Reset",next:"Next",prev:"Previous"
            },
            leftbar:{
                topics: "Topics",
                websocket: "Websocket",
                overview:"Overview",
                connections:"Connections",
                sessions:"Sessions",
                management:"Management",
                instances:"Instances",
                admin:"Admin",
                settings: "Settings",
                listeners: "Listeners",
                users: "Users"
            },
            overview:{
                broker:"Broker",
                erlangOTPRelease:"Erlang/OTP Release",
                systemName:"System Name",
                version:"Version",
                uptime:"Uptime",
                systemTime:"System Time",
                nodes:"Nodes",name:"Name",
                erlangProcesses:"Erlang Processes",
                cpuInfo:"CPU Info",
                memoryInfo:"Memory Info",
                maxFds:"MaxFds",
                status:"Status",
                stats:"Stats",
                topicsCount:"Topics",
                topicsMax:"Max",
                connectionsCount:"Connections",
                connectionsMax:"Max",
                retainedCount:"Retained",
                retainedMax:"Max",
                sessionsCount:"Sessions",
                sessionsMax:"Max",
                subscribersCount:"Subscribers",
                subscribersMax:"Max",subscriptionsCount:"Subscriptions",subscriptionsMax:"Max",subscriptionsSharedCount:"Subscriptions Shared",subscriptionsSharedMax:"Max",metrics:"Metrics",packetsData:"The packets data",messagesData:"The messages data",bytesData:"The bytes data",
                session:"Session",client:"Client",delivery:"Delivery"
            },
            clients:{
                node:"Node",
                nodeName:"Node Name",clientId:"Client ID",username:"Username",ipAddr:"IP Address",
                port:"Port",
                cleanStart:"CleanStart",
                keepalive:"Keepalive(s)",
                back:"Back",
                subscriptionsCount:"Subscriptions Count",expiryInterval:"Expiry Interval(s)",
                maxInflight:"MaxInflight",inflightLen:"Inflight Len",mqueueLen:"MqueueLen",
                mqueueDropped:"MqueueDropped",awaitingRelLen:"AwaitingRelLen",deliverMsg:"DeliverMsg",
                enqueueMsg:"EnqueueMsg",createdAt:"Created At",connectedAt:"Connected At",connected:"Connect Status",
                basicInfo:"Basic Info",subsInfo:"Subscriptions",protoVer:"ProtoVer",
                protoName:"Protocol Name",protoType:"Protocol",connectInfo:"Connection",isBridge:"Is Bridge",
                disconnectAt:"Disconnect At",
                session:"Session",max:"Maximum",historicHigh:"Historic High of",subscriptions:"Subscriptions Count",
                inflight:"Inflight Window Size",mqueue:"Message Queue Size",awaiting_rel:"Unconfirmed PUBREC Packets Count",
                recv_cnt_desc:"Number of TCP Packets Received",recv_msg_desc:"Number of PUBLISH Packets Received",
                recv_oct_desc:"Number of Bytes Received",
                recv_pkt_desc:"Number of MQTT Packets Received",
                send_cnt_desc:"Number of TCP Packets Sent",
                send_msg_desc:"Number of PUBLISH Packets Sent",
                send_oct_desc:"Number of Bytes Sent",
                send_pkt_desc:"Number of MQTT Packets Sent",
                currentSubs:"Subscriptions Count",addSubs:"Add Subscription",view:"View",disconnected:"Disconnected",
                kickOut:"Kick Out"
            },
            topics:{topic:"Topic",node:"Node"},
            subscriptions:{clientId:"Client ID",topic:"Topic",qoS:"QoS",share:"Share"},
            plugins:{
                name:"Name",version:"Version",description:"Description",status:"Status",stopped:"Stopped",running:"Running",oper:"Operation",start:"Start",stop:"Stop",config:"Config",manage:"Manage",tutorial:"Tutorial",back:"Back",advancedConfig:"Advanced Config",add:"Add",configSuccess:"Config success",configFailure:"Config failure",notice:"Are you sure you want to submit changes and apply them ?",giveUpNotice:"Are you sure you want to give up the change and exit?",noticeTitle:"Notice",
                cacheNotice:"You have given up this change",emptyConfigOption:"No Default Configuration",
                searchByName:"Search by plugin name",
                usernameRequired:"username is required",
                passwordRequired:"password is required",clientidRequired:"Client ID is required",algorithm:"Algorithm",secret:"Secret or Private key",payloadDesc:"It is valid when verify_claims is enabled. You can use% u and% c placeholders to replace the entered user name and clientid respectively. For details, see",
                jwtDoc:"JWT Authentication",
                dataDesc:"One line is a set of data, separated by comma username,clientid",
                secretRequired:"Secret is required",payloadRequired:"Payload template is required",
                dataRequired:"Payload data is required",
                leaveTokenPage:"After leaving the page, the currently entered configuration and generated TOKEN information are no longer retained. Continue?"
            },
            modules:{name:"Name",enable:"Enable",disable:"Disable",enabled:"Enabled",disabled:"Disabled"},
            instances:{
                instances:"Instances",back:"Back",info:"Basic Info",name:"instance name",descr:"description",service:"service",configInfo:"Config Options",initConfig:"Init config or ",remarkConfig:"description is required",createInstance:"Create Instance",selectServiceType:"Instance Type",all:"All",running:"Running",stopped:"Stopped",auth:"Auth",backend:"Backend",hook:"hook",bridge:"Bridge",other:"Other",select:"Select",selected:"Selected",nextStep:"Next",authDesc:"Provide login authentication and publish subscribe ACL service.",backendDesc:"Provide message persistence to database services.",bridgeDesc:"Bridging a message flow into a message middleware data source.",hookDesc:"A service that uses the trigger callback mechanism to respond to the operation.",
                otherDesc:"The system runs information and other services."
            },
            listeners:{protocol:"Protocol",listenOn:"Listen On",maxConnections:"Max Connections",
                currentConnections:"Current Connections"
            },
            websocket:{
                connect:"Connect",
                host:"Host",
                port:"Port",
                clientID:"Client ID",
                username:"Username",
                password:"Password",
                keepAlive:"Keep Alive",
                cleanSession:"Clean Session",
                disconnect:"Disconnect",
                currentState:"Current State",
                subscribe:"Subscribe",
                topic:"Topic",
                qoS:"QoS",
                date:"Date",
                oper:"Operation",
                messages:"Messages",
                retained:"Retained",
                send:"send",
                messagesAlreadySent:"Messages already sent",
                messagesReceived:"Messages received",
                time:"Time",
                connectError:"Message send error",
                connectFailure:"Connect failed on",
                connectLeave:"The client does not connect to the broker",
                subscribeSuccess:"Subscribe success",
                subscribeFailure:"Subscribe failure",
                unsubscribeFailure:"Unsubscribe Failure",
                messageSendOut:"Message send out",
                connected:"CONNECTED",
                connecting:"CONNECTING",
                disconnected:"DISCONNECTED",
                notSupport:"Your browser doesn't support WebSocket"
            },
            httpApi:{
                introduction:"Introduction",
                desc:"Apart from this help page, all URIs will serve only resources of type application/json, and will require HTTP basic authentication. The default user is admin / public.\n<br/>The emqx_dashboard plugin provides a web management console. The Dashboard helps monitor broker's running status, statistics and metrics of MQTT packets.",
                reference:"Reference",
                method:"Method",path:"Path",description:"Description",back:"Back",linkAddress:"Request address",data:"Response data"
            },
            app:{
                appId:"AppID",
                secret:"AppSecret",
                newApp:"New App",
                viewApp:"View App",
                editApp:"Edit App",create:"Create",errors:"Option Required",name:"AppName",desc:"Remark",expired:"Expired date",
                status:"Status",
                enable:"Allowed",
                disable:"Denied",
                enableText:"Access allowed",
                disableText:"Access barred",
                expiredText:"Never expired",
                guide:"Application for authentication of EMQ X Management API (REST API)",
                docs:"Documentation"
            },
            users:{
                newUser:"New User",editUser:"Edit User",username:"Username",remark:"Remark",
                password:"Password",confirmPassword:"Confirm Password",oldPassword:"Old Password",newPassword:"New Password",
                confirmNewPassword:"Confirm New Password",changePassword:"Change Password",dontChangePassword:"Don't Change Password",
                confirm:"Confirm",confirmDelete:"Confirm Delete ?",usernameRequired:"Username required",remarkRequired:"Remark required",
                usernameIllegal:"Username length: 3~32",passwordRequired:"Password required",newPasswordRequired:"new password required",
                passwordInconsistent:"Password is inconsistent",authenticate:"You have changed your password. Please re authenticate",
                createUser:"Create user success",passwordIllegal:"Password length: 3~255"
            },
            alert:{required:"required",success:" success",failure:" failure",connect:"Connect"},
            login:{
                title:"LOG IN",
                username:"Username",
                password:"Password",
                remember:"Remember",
                loginButton:"Log In",
                error:"Username Or Password Error",usernameRequired:"Username Required",passwordRequired:"Password Required"
            },
            settings:{
                language:"Language",
                apply:"Apply",
                success:"Apply success"
            },
            config:{
                importConfig:"Import",
                selectConfigFile:"Select a config file",
                configFileMustBeJson:"Config file must be JSON",
                createBy:"Create by",
                create:"",
                createUser:"owner",
                nodeName:"node name",
                host:"host",
                descr:"description",
                createAt:"create At",
                more:"more",
                reSelect:"Select another",
                not_a_valid_config_file:"Not a valid config file",
                payload_error:"Config option is empty",
                import_file_error:"Import failure",
                exportConfig:"Export",
                ex:"Export",
                atLeastThree:"At least three words",
                importSuccess:"Import success",
                notice:"Use backup configuration files to configure initialization modification. <br/> Notice: configuration files may contain important data, such as database address and authentication information. Please keep good configuration files and use backup function reasonably."
            },
            help:{
                quickStart:"Quick start",
                emqxDesc:"EMQ X is a MQTT broker developed on the Erlang/OTP platform, which is the most popular MQTT message middleware in the open source community. It supports common IoT protocols, including MQTT, LwM2M, MQTT-SN, CoAP, LoRaWAN, HTTP, and WebSocket. Welcome to follow our project or participate in development.",
                useDocs:"Documentation",
                docsDesc:"We have prepared a comprehensive documentation to help you familiarize yourself with more powerful features.",
                forwardView:"View documentation"    
            },
            analysis:{
                topicMetrics:"Topic metrics",metricsTip:"(The metrics are real-time refresh data, including all statistics since the addition)",messageIn:"Message In",messageOut:"Message Out",messageDrop:"Message Drop",addTopic:"Add Topic",details:"Details",all:"All",rateItem:"{0} / second",rate:"(rate)",
                messageInDesc:"(message in rate)",
                messageOutDesc:"(message out rate)",
                messageDropDesc:"(message drop rate)",
                loadAnalysis:"Load",
                loadSuccess:"Load Success"
            },
            httpCode:{
                0:"Success",101:"Bad RPC",102:"Unknown Error",103:"Username or password error",104:"Empty username or password",105:"User does not exist",106:"Admin can not be deleted",107:"Missing request parameter",108:"Request parameter type error",109:"Request parameter is not a json",
                110:"Plugin has been loaded",111:"Plugin has been unloaded",112:"Client not online",
                113:"User already exist",114:"Old password error",115:"Bad topic"
            },
            util:{day:"day | days",year:"year | years"}
        }),
        c=n("Vi3T"),l=n.n(c),u=a()({},l.a,{
    select:{cluster:"全部节点",placeholder:"请选择"},
    error:{
        networkError:"网络错误",
        initializationError:"初始化错误",
        module_not_loaded:"相关模块未打开"
    },
    success:{createSuccess:"创建成功"},oper:{confirmDelete:"确认删除该项?",confirmStop:"确认停止?",
    confirm:"确认",cancel:"取消",delete:"删除",oper:"操作",edit:"编辑",save:"保存",create:"创建",view:"查看",viewMore:"查看更多",
    expand:"展开",collapse:"收起",refresh:"刷新",add:"添加",addSuccess:"添加成功",editSuccess:"编辑成功",startSuccess:"启动成功",
    stopSuccess:"停止成功",enableSuccess:"启用成功",disabledSuccess:"停用成功",deleteSuccess:"删除成功",disconnectSuccess:"断开连接成功",
    from:"从",stop:"停止",start:"启动",notice:"注意",
    confirmDisconnect:"确认断开连接？",
    confirmKickOut:"确认踢除客户端？",confirmCleanSession:"确认清除会话？",yes:"是",no:"否",online:"在线",offline:"离线",
    warning:"警告",subscribe:"订阅",unsubscribe:"取消订阅",unsubscribeConfirm:"此操作将取消订阅该主题",pleaseEnter:"请输入",
    copy:"复制",copySuccess:"复制成功",copyFailed:"复制失败",generate:"生成",search:"搜索",reset:"重置",next:"下一页",prev:"上一页"},
    leftbar:{
        topics: "Теми",
        websocket: "Websocket",
        overview:"Огляд",
        connections:"З'єднання",
        sessions:"Сесії",
        management:"Управління",
        instances:"服务",
        admin:"Адміністратор",
        settings: "Налаштування",
        listeners: "Слухачі",
        users: "Користувачі"
    },
    overview:{
        broker:"系统信息",
        systemName:"名称",
        version:"版本",
        uptime:"运行时间",
        systemTime:"系统时间",
        nodes:"节点信息",
        name:"节点名称",
        erlangOTPRelease:"Erlang/OTP 版本",
        erlangProcesses:"Erlang 进程",
        cpuInfo:"CPU",
        memoryInfo:"内存",
        maxFds:"最大文件句柄数",status:"状态",stats:"运行统计",topicsCount:"主题数",topicsMax:"峰值",connectionsCount:"连接数",connectionsMax:"峰值",retainedCount:"保留消息数",retainedMax:"最大保留消息数",sessionsCount:"会话数",sessionsMax:"峰值",subscribersCount:"订阅数",subscribersMax:"峰值",subscriptionsCount:"订阅数",subscriptionsMax:"峰值",subscriptionsSharedCount:"共享订阅数",subscriptionsSharedMax:"峰值",metrics:"度量指标",
        packetsData:"MQTT 报文",
        messagesData:"消息",
        bytesData:"流量收发(字节)",session:"会话",client:"客户端",delivery:"Delivery"},
        clients:{
            node:"节点",
            nodeName:"节点名称",
            clientId:"客户端 ID",
            username:"用户名",
            ipAddr:"IP 地址",
            port:"Порт",
            cleanStart:"清除会话",keepalive:"心跳（秒）",back:"返回",subscriptionsCount:"当前订阅数量",expiryInterval:"会话过期间隔（秒）",maxInflight:"最大拥塞",inflightLen:"当前拥塞",mqueueLen:"当前缓存消息",mqueueDropped:"丢弃消息",awaitingRelLen:"等待释放",deliverMsg:"投递消息",enqueueMsg:"入队消息",createdAt:"会话创建时间",connectedAt:"连接时间",connected:"连接状态",clientsDetails:"详情",basicInfo:"基础信息",subsInfo:"订阅列表",protoVer:"协议版本",protoName:"协议名称",protoType:"协议类型",connectInfo:"连接信息",isBridge:"是否为桥接",disconnectAt:"断开连接时间",session:"会话信息",max:"最大",subscriptions:"订阅数量",inflight:"飞行窗口",mqueue:"消息队列",awaiting_rel:"未确认的 PUBREC 数据包计数",recv_cnt_desc:"接收的 TCP 报文数量",recv_msg_desc:"接收的 PUBLISH 报文数量",recv_oct_desc:"接收的字节数量",recv_pkt_desc:"接收的 MQTT 报文数量",send_cnt_desc:"发送的 TCP 报文数量",send_msg_desc:"发送的 PUBLISH 报文数量",send_oct_desc:"发送的字节数量",
        send_pkt_desc:"发送的 MQTT 报文数量",currentSubs:"当前订阅数",addSubs:"添加订阅",view:"详情",disconnected:"已断开",kickOut:"踢除"},topics:{topic:"主题",node:"节点"},subscriptions:{clientId:"客户端 ID",topic:"主题",qoS:"QoS",share:"共享订阅"},plugins:{name:"插件名称",version:"版本",description:"描述",status:"状态",stopped:"已停止",running:"运行中",start:"启动",stop:"停止",config:"配置",manage:"管理",tutorial:"使用文档",back:"返回",advancedConfig:"高级配置",add:"新增",configSuccess:"配置成功",configFailure:"配置失败",notice:"你确定提交这些配置吗？重启插件后生效",giveUpNotice:"你确定放弃应用已更改的配置吗？",noticeTitle:"注意",cacheNotice:"已放弃操作",emptyConfigOption:"默认配置项为空",searchByName:"按插件名称搜索",
        usernameRequired:"请填写 username",
        passwordRequired:"请填写 password",
        clientidRequired:"请填写 Client ID",algorithm:"加密算法",secret:"密钥或私钥",payloadDesc:"启用 verify_claims 时有效, 可以使用 %u，%c 占位符分别替换输入的 username 和 clientid，详见",jwtDoc:"JWT 认证",dataDesc:"一行一组数据，使用逗号分割 username,clientid",secretRequired:"请输入 Secret",payloadRequired:"请输入 Payload 模版",dataRequired:"请填写 Payload 数据",leaveTokenPage:"离开页面后当前输入的配置与生成的 TOKEN 信息均不再保留，确认离开？"},modules:{name:"模块名称",enable:"启用",disable:"停用",enabled:"已启用",disabled:"已停用"},instances:{instances:"服务",back:"返回",info:"基本信息",name:"实例名称",descr:"备注信息",service:"所属服务",configInfo:"配置信息",initConfig:"初始化配置或",remarkConfig:"请输入备注信息",createInstance:"新建服务",selectServiceType:"选择实例类型",all:"全部",running:"运行中",stopped:"已停止",auth:"认证",backend:"持久化",hook:"回调钩子",bridge:"数据桥接",other:"其他",select:"选择",selected:"已选择",nextStep:"下一步",authDesc:"提供登录认证与发布订阅 ACL 服务。",backendDesc:"提供消息持久化到数据库服务。",bridgeDesc:"提供将消息流桥接为消息中间件数据源服务。",hookDesc:"使用触发回调机制响应操作的服务。",otherDesc:"系统运行信息等其他服务。"},listeners:{protocol:"协议",listenOn:"监听地址",maxConnections:"最大连接数",currentConnections:"当前连接数"},
        websocket:{connect:"连接",host:"主机地址",port:"Порт",clientID:"客户端 ID",username:"用户名",password:"密码",keepAlive:"心跳（秒）",cleanSession:"清除会话",disconnect:"断开连接",currentState:"当前状态",subscribe:"订阅",topic:"主题",qoS:"服务质量",date:"订阅时间",oper:"操作",messages:"消息",retained:"保留",send:"发送",messagesAlreadySent:"发布消息列表",messagesReceived:"订阅消息列表",time:"时间",connectError:"消息发送错误",connectFailure:"连接失败",connectLeave:"尚未连接到服务器",subscribeSuccess:"订阅成功",subscribeFailure:"订阅失败",messageSendOut:"消息已发出",connected:"已连接",connecting:"正在连接",disconnected:"未连接",
            notSupport:"你的浏览器暂不支持WebSocket"
        },
        httpApi:{introduction:"说明",desc:"除了帮助页面，所有URI返回application/json格式的的资源，每个请求都需要HTTP基本认证。默认用户是admin / public。<br/>emqx_dashboard插件提供了一个Web管理控制台, 用于监控服务器的运行状态，数据统计和MQTT包计数监控。",reference:"参考",method:"请求方法",path:"路径",description:"描述",back:"返回",linkAddress:"请求地址",data:"响应数据"},app:{appId:"AppID",secret:"App密钥",newApp:"新建APP",viewApp:"查看App",editApp:" 编辑App",errors:"该项为必填项",name:"App名称",desc:"备注",expired:"到期日期",status:"状态",enable:"允许访问",disable:"拒绝访问",enableText:"允许访问",disableText:"拒绝访问",expiredText:"永不过期",guide:"应用用于 EMQ X 管理监控 API (REST API) 连接认证，详见",docs:"文档"},users:{newUser:"新建用户",editUser:"编辑用户",username:"用户名",remark:"备注",password:"密码",confirmPassword:"确认密码",oldPassword:"旧密码",newPassword:"新密码",confirmNewPassword:"确认新密码",changePassword:"修改密码",dontChangePassword:"不修改密码",usernameRequired:"请填写用户名",remarkRequired:"请填写备注",usernameIllegal:"用户名长度: 3~32",passwordRequired:"请填写密码",newPasswordRequired:"请填写新密码",passwordInconsistent:"密码不一致",authenticate:"你已成功修改已登录用户密码，请重新登录",createUser:"新建用户成功",passwordIllegal:"密码长度: 3~255"},alert:{required:"字段是必填项",success:"成功",failure:"失败",connect:"连接"},
        login:{
            title:"Вхід",
            username:"Користувач",
            password:"Пароль",
            remember:"Запам'ятати",
            loginButton:"Увійти",
            error:"用户名或密码错误",
            usernameRequired:"请填写用户名",
            passwordRequired:"请填写密码"},
    settings:{
        language:"Мова",
        apply:"Зберегти",
        success:"Зміни збережено"
    },
    config:{
        importConfig:"导入配置",
        selectConfigFile:"选择配置文件",
        configFileMustBeJson:"请确保备份文件为正常 JSON 格式",
        createBy:"由",
        create:"创建",
        createUser:"创建用户",
        nodeName:"节点名称",
        host:"主机地址",
        descr:"备注信息",
        createAt:"创建时间",
        more:"更多信息",
        reSelect:"重新选择",
        not_a_valid_config_file:"不是合法的配置文件",
        payload_error:"无效的内容",import_file_error:"导入文件出错",exportConfig:"导出配置",ex:"导出",atLeastThree:"至少3个字符",
        importSuccess:"导入成功",notice:"使用备份的配置文件进行配置初始化/修改。<br/>注意: 配置文件可能包含有重要数据如数据库地址与认证信息，请妥善保管配置文件并合理使用备份功能。"},
        help:{
            quickStart:"快速开始",
            emqxDesc:"EMQ X 基于 Erlang/OTP 平台开发的 MQTT 消息服务器，是开源社区中最流行的 MQTT 消息服务器，支持丰富的物联网协议，包括 MQTT、LwM2M、MQTT-SN、CoAP、 LoRaWAN、 HTTP 和 WebSocket 等。欢迎 follow 我们的项目或参与构建。",
            useDocs:"使用文档",
            docsDesc:"我们为您准备了齐全的使用文档，帮助您熟悉更多强大的功能。",
            forwardView:"前往查看"
        },
        analysis:{
            topicMetrics:"主题监控",
            metricsTip:"（数据统计为实时刷新数据，包含自添加以来全部统计数据）",
            messageIn:"消息流入",
            messageOut:"消息流出",
            messageDrop:"消息丢弃",
            addTopic:"添加主题",
            details:"详情数据",
            all:"全部",
            rateItem:"{0} 条/秒",
            rate:"（速率）",
            messageInDesc:"（消息流入速率）",
            messageOutDesc:"（消息流出速率）",
            messageDropDesc:"（消息丢弃速率）",
            loadAnalysis:"启用",
            loadSuccess:"启用成功"
        },
        httpCode:{
            0:"成功",
            101:"RPC 操作失败",
            102:"未知错误",
            103:"用户名或密码错误",
            104:"空的用户名密码",105:"用户不存在",106:"不能删除管理员",
            107:"请求参数错误",
            108:"请求参数类型错误",109:"请求体不是 JSON",110:"插件当前已经启动",
            111:"插件当前已经停止",112:"客户端不在线",113:"用户已存在",114:"旧密码错误",115:"主题错误"
        },
        util:{day:"天",year:"年"}
    });
    t.a={en:a()({},r,{rule:{
        viewStates:"Status",
        topic:"Topic",
        node:"Node",
        all:"All",
        connectSuccess:"Connect success",
        speed_unit:"times/s",
        match_unit:"times",
        match_rate:"Hit Rate",
        success:"success",
        failed:"failed",
        params:"Params",
        matched_line:"(matched/not matched)",
        speed_line:"(current/max/last5m)",
        current:"current",
        max:"max",
        last5m:"last5m",
        metrics:"Metrics",
        speed:"Speed(seconds)",
        speed_max:"Speed max",
        speed_last5m:"The last 5 minutes speed",
        rule_matched:"Rule matched number",
        rule_nomatch:"Number of not atched",speed_current:"Matching Speed",speed_max_1:"Maximum Speed",speed_last5m_1:"Last5Mins Speed",rule_matched_1:"Matched",rule_nomatch_1:"Not Matched",enabled:"In Service",disabled:"Out of Service",running_statue:"Running status",reconnect:"Reconnect",connect:"Connect",stopped:"Stopped",running:"Running",no_test_output:"",test_output:"Result",test:"Test",input_test_data:"Test SQL",input_test_data_tips:"Input mock data and test SQL",is_required:"is required",conf_test:"Test Connection",conf_test_success:"Connection Success",conf_test_fail:"Connection Failed",new_resource:"New Resource",action_type:"Action Type",event_info:"Available Field",suggest_sql:"SQL Example",upgrade_tip:"Upgrade Tip",json_decode_upgrade:"The current version cancels the automatic JSON decoding of the payload. Select the field in the payload and use json_decode to decode it, as in the SQL example.",events:{message_acked:"message.acked",message_dropped:"message.dropped",message_publish:"message.publish",message_delivered:"message.deliver",client_unsubscribe:"client.unsubscribe",client_subscribe:"client.subscribe",client_disconnected:"client.disconnected",client_connected:"client.connected"},trigger_events:"Trigger",id:"ID",exists:"exists key",data_key:"KEY",data_value:"VALUE",events_rule:"Events Rule",create_rule:"Events Rule",events_type:"Events Type",rely_resource:"Resource",actions_tips:"Processing messages for hit rules",conditional_tips:"Defining rule conditions and data processing ways through SQL",conditional:"Rule condition",rule_engine:"Rule Engine",message_rule:"Rule",create:"Create",rule_name:"Rule Name",actions:"Actions",action:"Action",resource:"Resource",oper:"Operation",view:"View",confirm:"Confirm",delete:"Delete",rule_details:"Details",rule_desc:"Description",confirm_stop_delete:"Confirm to stop and remove ？",delete_success:"Delete success",action_exists:"Action already exists",cancel:"Cancel",resource_mgmt:"Resources",name:"Name",resource_type:"Resource Type",description:"Description",create_success:"Create success",type:"Type",value:"Value",edit:"Edit",add:"Add",ruleEnabled:"Enabled",ruleDisabled:"Disabled",basic_info:"Basic Info",rule_name_required:"rule name required",rule_sql:"SQL",rule_descr_placeholder:"e.g.message render to Webhook",rule_sql_tips_title:"Write SQL statements for conditional filtering and data processing:",sql_tips_html:'<p>EMQ X will trigger the Rule Engine when the message is published and the event is triggered, and the rules meeting the triggering conditions will execute their respective SQL statements to filter and process the context information of the message and event.</p>\n\n  <p class="item">\n    With the Actions, the Rule Engine can store the message processing results of a specified topic to the database, send them to the HTTP Server, forward them to the Kafka or RabbitMQ, and republish them to a new topic or another broker cluster like Azure IoT Hub. Each rule can allocate multiple Actions.\n  </p>\n\n  <p>1. Select the messages published to t/# and select all fields:</p>\n\n  <div class="code">\n    <code>SELECT * FROM  "t/#"</code>\n  </div>\n\n  <p>2. Select the message published to the t/a topic, and select the "x" field from the message payload in JSON format:</p>\n\n  <div class="code">\n    <code>SELECT payload.x as x FROM "t/a"</code>\n  </div>\n\n  <p class="item">The Rule Engine uses the virtual topic (Event Topic) starting with $events/ to process the built-in events of EMQ X. the built-in events provide more sophisticated message control and client action processing capabilities, which can be used in the message arrival records of QoS 1 and QoS 2, the device up and down line records and other businesses.</p>\n\n  <p>1. Select the client connected event, filter the device with Username \'emqx\' and select the connection information:</p>\n  <div class="code">\n    <code>SELECT clientid FROM "$events/client_connected" WHERE username = \'emqx\'</code>\n  </div>\n\n  <p>See the EMQ X documentation for a detailed tutorial on the rules engine and SQL statements.</p>',condition_screening:"Condition Screening",topic_condition:"Topic",message_publish_topic:"Message topic",set_action:"Action Handler",sql_required:"SQL required",actions_required:"actions required",rule_action_tips_title:"Define action handlers",action_tips_html:"\n<p> 1. Re-publish message to message server</p>\n\n<span> Re-publishing messages to broker requires specifying the target theme</span>\n\n<p> 2. Forwarding messages to Webhook</p>\n\n<span> Forwarding messages to HTTP Webhook</span>",
            resource_title:"Resource",
            resource_name:"Resource Name",resource_details:"Details",config_info:"Configuration",
        clientid_doc:"Current MQTT clientid",
        username_doc:"Current MQTT username",
        event_doc:"Trigger event name",
        id_doc:"MQTT message id",
        payload_doc:"The payload, if in JSON format, will be automatically decoded, and the object information will be obtained by using payload.x in SQL",peerhost_doc:"Client peer name",qos_doc:"Enumeration of message QoS 0,1,2",timestamp_doc:"Timestamp(millisecond)",topic_doc:"Currently MQTT topic can be filtered by wildcards in SQL.  When multiple topics are included in subscribe and unsubscribe, only the first one will be obtained here. To obtain all topics, please use topic_filters",node_doc:"Node name of the trigger event",message_delivered:"message delivered",message_acked:"message acked",message_dropped:"message dropped",client_connected:"client connected",client_disconnected:"client disconnected",session_subscribed:"session subscribed",session_unsubscribed:"session unsubscribed",parse_confirm:"Detected incompatible old SQL syntax, confirm to automatically convert it to the new version?",fallbackAction:"Fallback Actions",fallbackActionCreate:"Set the action that will be performed when an action execution error occurs (optional)",fallbackActionTip:"Action to be performed when the action execution error"}}),zh:a()({},u,{rule:{viewStates:"状态",topic:"主题",
        node:"节点",all:"合计",connectSuccess:"连接成功",speed_unit:"次/秒",match_unit:"次",match_rate:"命中率",success:"成功",failed:"失败",
        params:"参数",
        matched_line:"(命中/未命中)",speed_line:"(当前/最大/最近5分钟)",current:"当前",max:"最大",last5m:"最近5分钟",metrics:"度量指标",speed:"速度(秒)",speed_max:"最大命中速度",speed_last5m:"5分钟平均速度",rule_matched:"匹配条数",rule_nomatch:"未匹配条数",speed_current:"命中速度",speed_max_1:"最大命中速度",speed_last5m_1:"5分钟平均速度",rule_matched_1:"已命中",rule_nomatch_1:"未命中",enabled:"可用",disabled:"不可用",running_statue:"运行状态",reconnect:"重新连接",connect:"连接",stopped:"已停止",running:"运行中",no_test_output:"暂无结果",test_output:"测试输出",test:"测试",input_test_data:"SQL 测试",input_test_data_tips:"自定义模拟数据进行 SQL 命令测试，仅用于测试功能",is_required:"必填",conf_test:"测试连接",conf_test_success:"连接可用",conf_test_fail:"连接不可用",new_resource:"新建资源",action_type:"动作类型",event_info:"可用字段",suggest_sql:"规则 SQL 示例",upgrade_tip:"升级提示",json_decode_upgrade:"当前版本取消对 payload 的自动 JSON 解码，选择 payload 中的字段请使用 json_decode 解码，如 SQL 示例。",events:{message_acked:"消息确认",message_dropped:"消息丢弃",message_publish:"消息发布",message_delivered:"消息投递",client_unsubscribe:"取消订阅",client_subscribe:"订阅",client_disconnected:"连接断开",client_connected:"连接完成"},trigger_events:"触发事件",id:"ID",exists:"键重复",data_key:"键",data_value:"值",rely_resource:"关联资源",actions_tips:"处理命中规则的消息",conditional_tips:"使用 SQL 定义规则条件与数据处理方式",conditional:"条件",rule_engine:"规则引擎",message_rule:"规则",create:"新建",rule_name:"规则名称",actions:"响应动作",action:"动作",resource:"关联资源",oper:"操作",view:"查看",confirm:"确认",delete:"删除",rule_details:"规则详情",rule_desc:"规则描述",confirm_stop_delete:"确认停用并删除？",delete_success:"删除成功",action_exists:"动作已存在",cancel:"取消",resource_mgmt:"资源管理",name:"名称",resource_type:"资源类型",description:"备注",create_success:"创建成功",type:"类型",value:"值",edit:"编辑",add:"添加",ruleEnabled:"已启动",ruleDisabled:"已停止",basic_info:"基本信息",rule_name_required:"请输入规则名称",rule_sql:"规则 SQL",rule_descr_placeholder:"e.g.消息转发到 Webhook",
        rule_sql_tips_title:"编写 SQL 进行条件过滤与数据处理：",
        sql_tips_html:'<p>EMQ X 在消息发布、事件触发时将触发规则引擎，满足触发条件的规则将执行各自的 SQL 语句筛选并处理消息和事件的上下文信息。</p>\n  <p class="item">规则引擎借助响应动作可将特定主题的消息处理结果存储到数据库，发送到 HTTP Server，转发到消息队列 Kafka 或 RabbitMQ，重新发布到新的主题甚至是另一个 Broker 集群中，每个规则可以配置多个响应动作。</p>\n\n  <p>1. 选择发布到 \'t/#\' 主题的消息，并筛选出全部字段：</p>\n\n  <div class="code">\n    <code>SELECT * FROM  "t/#"</code>\n  </div>\n\n  <p>2. 选择发布到 \'t/a\' 主题的消息，并从 JSON 格式的消息内容中筛选出 "x" 字段：</p>\n\n  <div class="code">\n    <code>SELECT payload.x as x FROM "t/a"</code>\n  </div>\n\n  <p class="item">规则引擎使用 $events/ 开头的虚拟主题（事件主题）处理 EMQ X 内置事件，内置事件提供更精细的消息控制和客户端动作处理能力，可用在 QoS 1 QoS 2 的消息抵达记录、设备上下线记录等业务中。<p>\n\n  <p>1. 选择客户端连接事件，筛选 Username 为 \'emqx\' 的设备并获取连接信息：</p>\n  <div class="code">\n    <code>SELECT clientid, connected_at FROM "$events/client_connected" WHERE username = \'emqx\'</code>\n  </div>\n\n  <p>规则引擎和 SQL 语句的详细教程参见 EMQ X 文档。</p>',condition_screening:"条件筛选",topic_condition:"主题条件",message_publish_topic:"消息发布主题",set_action:"响应动作",sql_required:"请输入 SQL",actions_required:"动作不能为空",rule_action_tips_title:"定义动作",action_tips_html:"\n<p>1. 重新发布消息至消息服务器</p>\n<span>将消息重新发布到 broker 中，需要指定目标主题</span>\n<p>2. 将消息转发至 Webhook</p>\n<span>将消息转发至 HTTP Webhook</span>",
        resource_title:"Ресурси",
        resource_name:"资源名称",
        resource_details:"资源详情",
        config_info:"配置信息",events_rule:"事件规则",create_rule:"事件规则",events_type:"事件类型",
        clientid_doc:"当前客户端 MQTT clientid",
        username_doc:"当前客户端 MQTT username",
        event_doc:"触发事件名称",
        id_doc:"MQTT message id",payload_doc:"消息内容, 如果是 JSON 格式将自动解码, 在 SQL 中使用 payload.x 获取对象信息",peerhost_doc:"客户端网络地址",
        qos_doc:"消息 QoS 0,1,2 中枚举",
        timestamp_doc:"当前毫秒级时间戳",
        topic_doc:"当前 MQTT 主题, SQL 中可以使用通配符进行筛选.\nSubscribe 与 Unsubscribe 请求中包含多个主题时, 这里只会获取到第一个, 如需获取全部请使用 topic_filters",
        node_doc:"触发事件的节点名称",message_delivered:"消息投递",
        message_acked:"消息应答",message_dropped:"消息丢弃",
        client_connected:"连接建立",
        client_disconnected:"连接断开",
        session_subscribed:"会话订阅",
        session_unsubscribed:"会话取消订阅",
        parse_confirm:"检测到不兼容的旧版 SQL 语法，是否自动转换为新版语法？",
        fallbackAction:"失败备选动作",
        fallbackActionCreate:"设置发生动作执行错误时将执行的动作（可选）",
        fallbackActionTip:"动作执行错误时将执行的操作"
    }
})}},
JB6b:function(e,t){},

NHnr:function(e,t,n){
    "use strict";
    Object.defineProperty(t,"__esModule",{value:!0});
    var s=n("fZjL"),a=n.n(s),o=n("7+uW"),i=n("9JMe"),r=n("TXmL"),c=n("zL8q"),l=n.n(c),u=n("urW8"),d=n.n(u),
        p={render:function(){
            var e=this.$createElement,
            t=this._self._c||e;
            return t("div",{attrs:{id:"app"}},[t("router-view")],1)
            },
            staticRenderFns:[]
        };
        var m=n("VU/8")({name:"App"},p,!1,function(e){n("rBGa")},null,null).exports,
            h=n("cHtD"),
            b=n("olkN"),
            f=(n("7TWk"),n("HL/F")),
            g=n("mvHQ"),
            _=n.n(g),
            v={
                name:"json-input",
                components:{},
                inheritAttrs:!1,
                props:{value:[Array,Object,String]},
                model:{prop:"value",event:"input"},
                data:function(){return{objectPlaceholder:"JSON, e.g: \n"+_()({Authorization:"Basic YWRtaW46cHVibGlj"},null,2),sourceValue:""}},
                methods:{},
                created:function(){try{this.sourceValue=JSON.parse(this.value,null,2)}catch(e){this.sourceValue=""}},
                watch:{
                    value:function(e){console.log(e)},
                    sourceValue:function(e){
                        var t=e;
                        if(e){
                            try{t=JSON.parse(e)}catch(n){t=e}this.$emit("input",t)
                        }else this.$emit("input",void 0)}
                },
                computed:{}
            },
            S={
                render:function(){
                    var e=this,
                        t=e.$createElement;
                    return(e._self._c||t)("el-input",
                        {staticClass:"json-input",
                        attrs:{type:"textarea",placeholder:e.$attrs.placeholder||e.objectPlaceholder,rows:5},
                        model:{value:e.sourceValue,callback:function(t){e.sourceValue=t},expression:"sourceValue"}}
                        )
                },
                staticRenderFns:[]
            };
            var w=n("VU/8")(v,S,!1,function(e){n("1KhH")},null,null).exports,
                y=n("Dd8w"),
                T=n.n(y),
                k=n("d7EF"),
                C=n.n(k),
                A=n("W3Iv"),
                E=n.n(A),
                D={
                    name:"data-table",
                    components:{},
                    props:{
                        value:{required:!0},
                        isRaw:{type:Boolean,default:!0},
                        disabled:{type:Boolean,default:!1},
                        option:{type:Object,default:function(){return{}}},
                        allowedArray:{type:Boolean,default:!1}
                    },
                    model:{prop:"value",event:"input"},
                    watch:{},
                    data:function(){return{tableData:[{__new:!0,key:"",value:""}]}},
                    methods:{
                        initValue:function(e){
                            var t=this;
                            e?(this.tableData=[],
                                E()(e).forEach(function(e){
                                    var n=C()(e,2),
                                        s=n[0],
                                        a=n[1];
                                    s&&(a&&Array.isArray(a) ? 
                                    a.forEach(function(e){
                                        t.tableData.push({key:s,value:e})}) :
                                    t.tableData.push({key:s,value:a}))
                                }),
                                this.disabled||this.tableData.push({key:"",value:"",__new:!0})):
                                this.tableData=[{key:"",value:"",__new:!0}]
                        },
                        handleInput:function(e){
                            e.__new&&(this.$delete(e,"__new"),
                            (e.key||e.value)&&this.tableData.push({key:"",value:"",__new:!0})),
                            this.setObject()
                        },
                        setObject:function(){
                            var e=this,
                                t={},
                                n={};
                            this.tableData.forEach(function(s){
                                e.$set(s,"__has_error",!1);
                                var a=s.key,
                                    o=s.value,
                                    i=void 0===o?"":o,
                                    r=s.__new;
                                if(a&&!r)
                                    if(!n[a]||e.allowedArray)
                                        n[a] ?
                                        Array.isArray(t[a]) ? 
                                        t[a].push(i) :
                                        t[a]=[t[a],i] :
                                        t[a]=i,t[a]&&!e.allowedArray&&Array.isArray(t.key)&&(t[a]=t[a][0]),
                                n[a]=!0;else{e.$set(s,"__has_error",!0);
                                var c=e.tableData.find(function(e){return a===e.key});c&&e.$set(c,"__has_error",!0)}
                            }),
                            this.$emit("input",t)
                        },
                        handleOper:function(e,t,n){
                            ["edit"].includes(e)?this.$set(this.tableData[t],"__"+e,n):
                            "remove"===e&&(this.tableData=this.tableData.filter(function(e,n){return n!==t})),this.setObject()
                        }
                    },
                    created:function(){this.initValue(this.value)},
                    computed:{
                        _option:function(){return T()({keyLabel:this.$t("rule.data_key"),valueLabel:this.$t("rule.data_value")},this.option)}
                    }
                },
                M={ render:function(){
                    var e=this,t=e.$createElement,n=e._self._c||t;
                    return n("el-table",{staticClass:"data-table",class:{disable:e.disabled,"el-table--public":e.isRaw},staticStyle:{"margin-top":"0"},attrs:{border:"",data:e.tableData}},[
                        n("el-table-column",{attrs:{prop:"key",label:e._option.keyLabel},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[n("span",{staticClass:"data-value"},[e._v(e._s(s.key))]),
                        e._v(" "),
                        n("el-input",{staticClass:"data-input",class:{"is-error":s.__has_error&&!s.__new},attrs:{size:"mini",placeholder:s.__new?"Key":""},on:{input:function(t){return e.handleInput(s)}},model:{value:s.key,callback:function(t){e.$set(s,"key",t)},expression:"row.key"}},[s.__has_error?n("template",{slot:"append"},[e._v("\n          "+e._s(e.$t("rule.exists"))+"\n        ")]):e._e()],2)]}}])}),
                        e._v(" "),
                        n("el-table-column",{attrs:{prop:"value","class-name":"value-column",label:e._option.valueLabel},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row,a=t.$index;return[n("span",{staticClass:"data-value"},[e._v(e._s(s.value))]),e._v(" "),n("el-input",{staticClass:"data-input",attrs:{size:"mini",placeholder:s.__new?"Value":""},on:{input:function(t){return e.handleInput(s,!1)}},model:{value:s.value,callback:function(t){e.$set(s,"value",t)},expression:"row.value"}}),e._v(" "),e.disabled?e._e():n("i",{class:{"el-icon-close":!s.__new,"oper-icon":!0},on:{click:function(t){return e.handleOper("remove",a,!0)}}},[
                            e._v("\n        "+e._s(s.__new?" ":"")+"\n      ")])]}}])})],1)},
                    staticRenderFns:[]
                };
                var x=n("VU/8")(D,M,!1,function(e){n("JB6b")},null,null).exports,
                    I=n("w7XY"),
                    N=n("VOAv"),
                    R=n("CqLJ"),
                    P=n.n(R),
                    q={dateFormat:function(e){return e?10===e.toString().length?P()(1e3*e,"yyyy-mm-dd HH:MM:ss"):P()(e,"yyyy-mm-dd HH:MM:ss"):""}};
                    o.default.config.productionTip=!1,
                    o.default.use(r.a),
                    o.default.use(l.a),
                    o.default.prototype.$ELEMENT={size:"medium"},
                    o.default.use(function(e){
                        e.prototype.$httpGet=function(e){
                            var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};
                            return t._=Date.now(),I.a.get(e,{params:t})
                        },
                        e.component(w.name,w),
                        e.component(x.name,x),
                        e.prototype.$httpPost=I.a.post,
                        e.prototype.$httpPut=I.a.put,
                        e.prototype.$httpDelete=I.a.delete,
                        e.prototype.$axios=I.a,
                        e.prototype.$env=window.EMQX_DASHBOARD_CONFIG||{}
                    }),
                    a()(q).forEach(function(e){o.default.filter(e,q[e])});
                    var O=new r.a({locale:window.localStorage.language||window.EMQX_DASHBOARD_CONFIG.lang||"en",messages:f.a});
                    d.a.i18n(function(e,t){return O.t(e,t)}),
                    o.default.prototype.$t=function(e,t){return O.t(e,t)},
                    Object(N.a)(),
                    Object(i.sync)(b.a,h.a),
                    new o.default({el:"#app",
                        router:h.a,
                        store:b.a,
                        i18n:O,
                        components:{App:m},
                        template:"<App/>"})
                },
                UVIz:function(e,t){},
                VOAv:function(e,t,n){
                    "use strict";
                    function s(e){}
                    function a(){}
                    n.d(t,"a",function(){return a}),
                    n.d(t,"b",function(){return s})
                },
cHtD:function(e,t,n){
    "use strict";
    var s=n("7+uW"),
        a=n("/ocq"),
        o=n("olkN"),
        i=n("hQrB");
    s.default.use(a.a);
    var r=[
        {path:"/login",name:"login",component:function(){return n.e(18).then(n.bind(null,"lmfZ"))},
        meta:{requiresAuth:!1}},
        {path:"/",
            component:function(){ return n.e(16).then(n.bind(null,"lO7g")) },
            children:[
                {path:"",name:"overview",component:function(){ return n.e(16).then(n.bind(null,"RjBg")) }},
                {path:"/clients",name:"clients",component:function(){return n.e(1).then(n.bind(null,"zXyA"))}},
                {path:"/clients/:id",name:"clientDetails",component:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"8AHC"))}},
                {path:"/topics",name:"topics",component:function(){return n.e(1).then(n.bind(null,"zXyA"))}},
                {path:"/subscriptions",name:"subscriptions",component:function(){return n.e(1).then(n.bind(null,"zXyA"))}},
                {path:"/listeners",name:"listeners",component:function(){return n.e(19).then(n.bind(null,"uuOo"))}},
                {path:"/websocket",name:"websocket",component:function(){
                    return Promise.all([n.e(4),n.e(0)]).then(n.bind(null,"EzHP"))
                }},
                {path:"/http_api",name:"http_api",component:function(){return n.e(9).then(n.bind(null,"qB/b"))}},
                {path:"/users",name:"users",component:function(){return n.e(10).then(n.bind(null,"QSR2"))}},
                {path:"/settings",name:"settings",component:function(){return n.e(12).then(n.bind(null,"VKKr"))}},
                {path:"/help",name:"help",component:function(){return n.e(20).then(n.bind(null,"LbE0"))}}
            ]
        },
        {path:"*",
            meta:{requiresAuth:!1},
            component:function(){return n.e(17).then(n.bind(null,"wkqA"))}
        }
    ],
    c=new a.a({routes:r});
    c.beforeEach(function(e,t,n){
        var s=e.meta.requiresAuth;
        void 0===s||s?o.a.state.user.password?(i.a.indexOf(e.name)>-1&&o.a.dispatch("CANCEL_FEAT_ON_LEFTBAR",e.name),document.body.scrollTop=0,document.documentElement.scrollTop=0,n()):n({path:"/login",query:{redirect:e.fullPath}}):n()}),t.a=c},hQrB:function(e,t,n){"use strict";t.a=["rules"]},olkN:function(e,t,n){"use strict";var s,a,o=n("bOdI"),i=n.n(o),r=n("mvHQ"),c=n.n(r),l=n("7+uW"),u=n("NYxO"),d=n("7YgM"),p=n.n(d),m=n("hQrB");function h(e){try{return JSON.parse(e)}catch(e){return null}}l.default.use(u.a);var b={loading:!1,user:h(sessionStorage.getItem("user"))||h(localStorage.getItem("user"))||{},nodeName:"",
        showFeatOnLeftbar:function(){
            var e=h(localStorage.getItem("showFeatOnLeftbar"));
            function t(){
                var e={};
                m.a.forEach(function(t){e[t]=!0});
                var t={version:p.a.version,data:e};
                return localStorage.setItem("showFeatOnLeftbar",c()(t)),t
            }
            return e ? e.version!==p.a.version ? (localStorage.removeItem("showFeatOnLeftbar"),t()) : e:t()
        }()},
            f=(s={},
                i()(s,"USER_LOGIN",function(e,t){
                var n=e.commit;
                if(t.isLogOut)return sessionStorage.removeItem("user"),
                localStorage.removeItem("user"),
                void n("USER_LOGIN",t);
                t.remember ?
                localStorage.setItem("user",c()(t.user)) :
                sessionStorage.setItem("user",c()(t.user)),
                n("USER_LOGIN",t)
                }),
                i()(s,"CURRENT_NODE",function(e,t){
                    (0,e.commit)("CURRENT_NODE",t)
                }),
                i()(s,"LOADING",function(e){
                    (0,e.commit)("LOADING",arguments.length>1&&void 0!==arguments[1]&&arguments[1])}),
                i()(s,"CANCEL_FEAT_ON_LEFTBAR",function(e,t){(0,e.commit)("CANCEL_FEAT_ON_LEFTBAR",t)}),s),
                g=( a={},
                    i()(a,"USER_LOGIN",function(e,t){t.isLogOut?l.default.set(e,"user",{}):l.default.set(e,"user",t.user)}),
                    i()(a,"CURRENT_NODE",function(e,t){l.default.set(e,"nodeName",t)}),
                    i()(a,"LOADING",function(e,t){e.loading=t}),
                    i()(a,"CANCEL_FEAT_ON_LEFTBAR", function(e,t){
                        var n=e.showFeatOnLeftbar;n.data[t]=!1,
                        l.default.set(e,"showFeatOnLeftbar",n),
                        localStorage.setItem("showFeatOnLeftbar",c()(n))
                    }),a);
                    t.a=new u.a.Store({strict:!1,state:b,actions:f,mutations:g})
},
rBGa:function(e,t){},
w7XY:function(e,t,n){
    "use strict";
    var b1 = sessionStorage.base || JSON.stringify({proto: "http", host: "127.0.0.1", mgmt_port: 8080}),
        x1 = JSON.parse(b1),
        b2 = x1.proto+"://"+x1.host+":"+x1.mgmt_port+"/api/v4";

    console.log("base", b2);

    var s=n("pFYg"),
        a=n.n(s),
        o=n("//Fk"),
        i=n.n(o),
        r=n("woOf"),
        c=n.n(r),
        l=n("mtWM"),
        u=n.n(l),
        d=n("Y81h"),
        p=n.n(d),
        m=n("UVIz"),
        h=(n.n(m), n("zL8q")),
        b=(n.n(h), n("cHtD")),
        f=n("olkN"),
        g=n("HL/F"),
        _=["zh","en"].includes(localStorage.language) ? localStorage.language:window.EMQX_DASHBOARD_CONFIG.lang||"en",
        v=(g.a[_]||g.a.en).httpCode;
p.a.configure({showSpinner:!1}),
c()(u.a.defaults,{
    headers:{
        "Content-Type":"application/json",
        "Cache-Control":"no-cache"
    },
    baseURL:b2,
    timeout:1e4
});
var S=0;function w(e){
    console.error(e),
    p.a.done(),
    clearTimeout(S),
    f.a.dispatch("LOADING",!1);
    var t=e.response&&e.response.status;
    return e.response&&e.response.data.message&&(e.message=e.response.data.message),
        401===t ?
            (f.a.dispatch("USER_LOGIN",{isLogOut:!0}),
            b.a.push({path:"/login",query:{to:b.a.fullPath}})) :
            404===t ?
                e.message="URL Not Found":
                function(e){"module_not_loaded"!==e.message&&h.Message.error(e.message)}(e),i.a.reject(e.message)
            }u.a.interceptors.request.use(function(e){return f.a.state.user.username?e.auth={username:f.a.state.user.username,password:f.a.state.user.password}:b.a.push({path:"/login",query:{to:b.a.fullPath}}),p.a.start(),S=setTimeout(function(){f.a.dispatch("LOADING",!0)},100),e},function(e){console.warn("Request Error: ",e),f.a.dispatch("LOADING",!1)}),u.a.interceptors.response.use(function(e){var t={},n="";if("object"===a()(e.data)){var s=e.status,o=e.data,i=o.code,r=o.meta,c=o.message,l=e.data.data;0!==i&&(n=v[i]||c),r&&(l={items:l,meta:r}),t={data:l,status:s}}if(p.a.done(),clearTimeout(S),S=0,f.a.dispatch("LOADING",!1),n){var u=new Error(n);throw w(u),u}return t},w),t.a=u.a}},[0]);
