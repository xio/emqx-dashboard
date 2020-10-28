webpackJsonp([16],{
    RjBg:function(e,t,s){
        "use strict";
        Object.defineProperty(t,"__esModule",{value:!0});
        var a=s("fZjL"),
            l=s.n(a),
            o=s("d7EF"),
            n=s.n(o),
            r=s("W3Iv"),
            i=s.n(r),
            c=s("Dd8w"),
            d=s.n(c),
            v=s("zL8q"),
            u=s("NYxO"),
            m={ name:"overview-view",
                components:{"el-select":v.Select,"el-option":v.Option,"el-table":v.Table,"el-table-column":v.TableColumn,"el-row":v.Row,"el-col":v.Col},
                data:function(){
                    return{nodeName:"",brokers:{},nodes:[],stats:[],timer:0,metrics:{packets:[],messages:[],bytes:[],client:[],session:[],delivery:[]}}
                },
                methods:d()({},Object(u.b)(["CURRENT_NODE"]),{
                    init:function(){
                        var e=this;
                        this.$httpGet("/nodes").then(function(t){e.nodeName=e.$store.state.nodeName||t.data[0].node,e.nodes=t.data,e.CURRENT_NODE(e.nodeName),e.refreshInterval()}).catch(function(t){e.$message.error(t||e.$t("error.networkError")),
                        setTimeout(function(){e.init()},2e4)})
                    },
                    refreshInterval:function(){
                        this.loadData(),clearInterval(this.timer),this.timer=setInterval(this.loadData,1e4)
                    },
                    loadData:function(){
                        var e=this;this.CURRENT_NODE(this.nodeName),
                            this.$httpGet("/nodes").then(function(t){e.nodes=t.data.sort(function(t,s){return t.node===e.nodeName?-1:t.uptime>s.uptime?-1:1})}),
                        this.$httpGet("/stats").then(function(t){var s=t.data;s.forEach(function(e){var t=d()({node:e.node},e.stats);i()(t).forEach(function(t){var s=n()(t,2),a=s[0],l=s[1],o=a.replace(/\./g,"_");e[o]=l,a.includes(".")&&delete e[a]})}),e.stats=s}),
                        this.$httpGet("/brokers/"+this.nodeName).then(function(t){e.brokers=t.data}),
                        this.$httpGet("/nodes/"+this.nodeName+"/metrics").then(function(t){
                            e.metrics={packets:[],messages:[],bytes:[],client:[],session:[],delivery:[]};
                            var s=d()({},t.data),
                            a={
                                packets:["received","sent","connect","connack","auth","disconnect.sent","disconnect.received","pingreq","pingresp","publish.received","publish.sent","puback.received","puback.sent","puback.missed","pubcomp.received","pubcomp.sent","pubcomp.missed","pubrec.received","pubrec.sent","pubrec.missed","pubrel.received","pubrel.sent","pubrel.missed","subscribe","suback","unsubscribe","unsuback"],messages:["received","sent","dropped","retained","qos0.received","qos0.sent","qos1.received","qos1.sent","qos2.received","qos2.expired","qos2.sent","qos2.dropped"],
                                bytes:["received","sent"],
                                client:["connected","authenticate","auth.anonymous","check_acl","subscribe","unsubscribe","disconnected"],
                                session:["created","resumed","takeovered","discarded","terminated"],
                                delivery:["dropped","dropped.no_local","dropped.too_large","dropped.qos0_msg","dropped.queue_full","dropped.expired"]};
                            l()(a).forEach(function(l){a[l].forEach(function(a){var o=l+"."+a;delete s[o],void 0!==t.data[o]&&e.metrics[l].push({key:a,value:t.data[o]})})}),
                            l()(s).forEach(function(t){var a=t.split(".")[0];e.metrics[a]&&void 0!==s[t]&&e.metrics[a].push({key:t.split(".").slice(1).join("."),value:s[t]})})
                        })
                    }
                }),
                created:function(){this.init()},
                beforeRouteLeave:function(e,t,s){clearInterval(this.timer),s()},
                beforeDestroy:function(){clearInterval(this.timer)}},p={
                render:function(){
                    var e=this,t=e.$createElement,s=e._self._c||t;
                    return s("div",{staticClass:"overview-view"},[
                        s("div",{staticClass:"page-title"},[
                            e._v("\n    "+e._s(e.$t("leftbar.overview"))+"\n    "),
                            s("el-select",{staticClass:"select-radius",
                                attrs:{placeholder:e.$t("select.placeholder")},
                                on:{change:e.loadData},
                                model:{value:e.nodeName,callback:function(t){e.nodeName=t},expression:"nodeName"}},
                                e._l(e.nodes,function(e){return s("el-option",{key:e.node,attrs:{label:e.node,value:e.node}})}),1)
                        ],1),
                        e._v(" "),
                        s("div",{staticClass:"card-box",staticStyle:{"margin-top":"54px"}},[
                    s("div",{staticClass:"card-title"},[e._v(e._s(e.$t("overview.broker")))]),
                    e._v(" "),
                    s("el-row",{staticClass:"broker-card",attrs:{gutter:10}},[
                        s("el-col",{attrs:{span:6}},[
                            s("div",{staticClass:"card-item"},[
                                s("div",{staticClass:"icon"},[
                                    s("i",{staticClass:"iconfont icon-systemname"})]),
                                e._v(" "),
                                s("div",{staticClass:"desc"},[
                                    s("h3",[e._v(e._s(e.$t("overview.systemName")))]),
                                    e._v(" "),
                                    s("p",[e._v(e._s(e.brokers.sysdescr))])])
                            ])
                        ]),
                        e._v(" "),
                        s("el-col",{attrs:{span:6}},[s("div",{staticClass:"card-item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-version",staticStyle:{"font-weight":"600"}})]),e._v(" "),s("div",{staticClass:"desc"},[s("h3",[e._v(e._s(e.$t("overview.version")))]),e._v(" "),s("p",[e._v(e._s(e.brokers.version))])])])]),e._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"card-item"},[s("div",{staticClass:"icon"},[s("i",{staticClass:"iconfont icon-uptime"})]),e._v(" "),s("div",{staticClass:"desc"},[s("h3",[e._v(e._s(e.$t("overview.uptime")))]),e._v(" "),s("p",[e._v(e._s(e.brokers.uptime))])])])]),e._v(" "),s("el-col",{attrs:{span:6}},[s("div",{staticClass:"card-item"},[s("div",{staticClass:"icon",staticStyle:{"line-height":"46px"}},[s("i",{staticClass:"iconfont icon-Systemtime",staticStyle:{"font-size":"36px",top:"2px"}})]),e._v(" "),s("div",{staticClass:"desc"},[s("h3",[e._v(e._s(e.$t("overview.systemTime")))]),e._v(" "),s("p",[e._v(e._s(e.brokers.datetime))])])])])],1)],1),e._v(" "),s("div",{staticClass:"card-box"},[s("div",{staticClass:"card-title"},[e._v(e._s(e.$t("overview.nodes"))+"("+e._s(e.nodes.length)+")")]),e._v(" "),s("el-table",{attrs:{data:e.nodes,border:""}},[s("el-table-column",{attrs:{prop:"node","min-width":"200",label:e.$t("overview.name")}}),e._v(" "),s("el-table-column",{attrs:{prop:"otp_release","min-width":"200",label:e.$t("overview.erlangOTPRelease")}}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.erlangProcesses")}},[s("el-table-column",{attrs:{"min-width":"150",prop:"process",label:"(used/avaliable)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.process_used+" / "+t.row.process_available)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.cpuInfo")}},[s("el-table-column",{attrs:{"min-width":"180",label:" (1load/5load/15load)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.load1+" / "+t.row.load5+" / "+t.row.load15)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{"min-width":"200",label:e.$t("overview.memoryInfo")}},[s("el-table-column",{attrs:{"min-width":"180",label:" (used/total)"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n            "+e._s(t.row.memory_used+" / "+t.row.memory_total)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{prop:"max_fds","min-width":"120",label:e.$t("overview.maxFds")}}),e._v(" "),s("el-table-column",{attrs:{"min-width":"120",label:e.$t("overview.status")},scopedSlots:e._u([{key:"default",fn:function(t){return[s("span",{class:["Running"===t.row.node_status?"running":"stopped","status"]},[e._v("\n            "+e._s(t.row.node_status)+"\n          ")])]}}])})],1)],1),e._v(" "),s("div",{staticClass:"card-box"},[s("div",{staticClass:"card-title"},[e._v(e._s(e.$t("overview.stats"))+"("+e._s(e.stats.length)+")")]),e._v(" "),s("el-table",{staticClass:"stats-table",attrs:{data:e.stats,border:""}},[s("el-table-column",{attrs:{prop:"node","min-width":"150",label:e.$t("overview.name")}}),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.connectionsCount")}},[s("el-table-column",{attrs:{"min-width":"150",label:"(count/max)"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[e._v("\n            "+e._s(s.connections_count)+" / "+e._s(s.connections_max)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.topicsCount")}},[s("el-table-column",{attrs:{"min-width":"150",label:"(count/max)"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[e._v("\n            "+e._s(s.topics_count)+" / "+e._s(s.topics_max)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.retainedCount")}},[s("el-table-column",{attrs:{"min-width":"150",label:"(count/max)"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[e._v("\n            "+e._s(s.retained_count)+" / "+e._s(s.retained_max)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.sessionsCount")}},[s("el-table-column",{attrs:{"min-width":"150",label:"(count/max)"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[e._v("\n            "+e._s(s.sessions_count)+" / "+e._s(s.sessions_max)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.subscriptionsCount")}},[s("el-table-column",{attrs:{"min-width":"150",label:"(count/max)"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[e._v("\n            "+e._s(s.subscriptions_count)+" / "+e._s(s.subscriptions_max)+"\n          ")]}}])})],1),e._v(" "),s("el-table-column",{attrs:{label:e.$t("overview.subscriptionsSharedCount")}},[s("el-table-column",{attrs:{"min-width":"150",label:"(count/max)"},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[e._v("\n            "+e._s(s.subscriptions_shared_count)+" / "+e._s(s.subscriptions_shared_max)+"\n          ")]}}])})],1)],1)],1),e._v(" "),s("div",{staticClass:"card-box"},[s("div",{staticClass:"card-title"},[e._v(e._s(e.$t("overview.metrics")))]),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.client}},[s("el-table-column",{attrs:{"min-width":"200",prop:"key",label:e.$t("overview.client")}}),e._v(" "),s("el-table-column",{attrs:{sortable:"",prop:"value",label:""}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.delivery}},[s("el-table-column",{attrs:{"min-width":"160",prop:"key",label:e.$t("overview.delivery")}}),e._v(" "),s("el-table-column",{attrs:{sortable:"",prop:"value",label:""}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.session}},[s("el-table-column",{attrs:{"min-width":"200",prop:"key",label:e.$t("overview.session")}}),e._v(" "),s("el-table-column",{attrs:{sortable:"",prop:"value",label:""}})],1)],1)],1),e._v(" "),s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.packets}},[s("el-table-column",{attrs:{"min-width":"200",prop:"key",label:e.$t("overview.packetsData")}}),e._v(" "),s("el-table-column",{attrs:{sortable:"",prop:"value",label:""}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.messages}},[s("el-table-column",{attrs:{"min-width":"200",prop:"key",label:e.$t("overview.messagesData")}}),e._v(" "),s("el-table-column",{attrs:{sortable:"",prop:"value",label:""}})],1)],1),e._v(" "),s("el-col",{attrs:{span:8}},[s("el-table",{attrs:{data:e.metrics.bytes}},[s("el-table-column",{attrs:{"min-width":"160",prop:"key",label:e.$t("overview.bytesData")}}),e._v(" "),s("el-table-column",{attrs:{sortable:"",prop:"value",label:""}})],1)],1)],1)],1)])},staticRenderFns:[]};var b=s("VU/8")(m,p,!1,function(e){s("xOct")},null,null);t.default=b.exports},xOct:function(e,t){}});
