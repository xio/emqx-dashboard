webpackJsonp([20],{
    LbE0:function(t,e,s){
        "use strict";
        Object.defineProperty(e,"__esModule",{value:!0});
        var n={
            name:"help-view",
            components:{},
            data:function(){return{lang:window.localStorage.getItem("language")||"en"}},
            computed:{
                docsLink:function(){
                    return"en"===this.lang?
                        "https://docs.emqx.io/broker/v4/en":
                        "https://docs.emqx.io/broker/v4/cn"
                }
            },
            methods:{}
        },
        a={
            render:function(){
                var t=this,e=t.$createElement,s=t._self._c||e;
                return s("div",{staticClass:"help-view"},[
                    s("div",{staticClass:"page-title"},[t._v(t._s(t.$t("leftbar.help")))]),
                    t._v(" "),
                    s("div",{staticClass:"help-item"},[
                        s("h3",[t._v(t._s(t.$t("help.quickStart")))]),
                        t._v(" "),
                        s("p",[t._v(t._s(t.$t("help.emqxDesc")))]),
                        t._v(" "),
                        s("a",{attrs:{target:"_blank",href:"https://github.com/emqx/emqx"}},[
                            t._v("Github")])]),
                    t._v(" "),
                    s("el-divider"),
                    t._v(" "),
                    s("div",{staticClass:"help-item"},[
                        s("h3",[t._v(t._s(t.$t("help.useDocs")))]),
                        t._v(" "),
                        s("p",[t._v(t._s(t.$t("help.docsDesc")))]),
                        t._v(" "),
                        s("a",{attrs:{target:"_blank",href:t.docsLink}},[
                            t._v("\n      "+t._s(t.$t("help.forwardView"))+"\n    ")])
                    ])
                    ],1)
                },
                staticRenderFns:[
                    function(){
                        var t=this.$createElement,
                            e=this._self._c||t;
                        return e("a",{
                            staticClass:"follow-link", 
                            attrs:{target:"_blank",href:"https://github.com/emqx/emqx"}},[
                                e("i",{staticClass:"iconfont icon-git"})])
                    },
                    function(){
                        var t=this.$createElement,
                            e=this._self._c||t;
                        return e("a",{staticClass:"follow-link",attrs:{target:"_blank",href:"https://twitter.com/emqtt"}},[
                            e("i",{staticClass:"iconfont icon-tuite"})])
                    },
                    function(){
                        var t=this.$createElement,e=this._self._c||t;
                        return e("a",{
                            staticClass:"follow-link",
                            attrs:{target:"_blank",href:"https://emqx.slack.com/"}
                            },[
                                e("i",{staticClass:"iconfont icon-slack"})])
                    },
                    function(){
                        var t=this.$createElement,
                            e=this._self._c||t;
                        return e("a",{staticClass:"follow-link",
                            attrs:{target:"_blank",href:"https://stackoverflow.com/questions/tagged/emq"}},
                            [e("i",{staticClass:"iconfont icon-stack-overflow"})])},
                    function(){var t=this.$createElement,e=this._self._c||t;
                        return e("a",{staticClass:"follow-link",
                        attrs:{target:"_blank",href:"https://groups.google.com/forum/#!forum/emqtt"}},
                        [e("i",{staticClass:"iconfont icon-icons-google_groups"})])
                    },
                    function(){
                        var t=this.$createElement,e=this._self._c||t;
                        return e("a",{staticClass:"follow-link",
                            attrs:{target:"_blank",href:"https://www.youtube.com/channel/UCDU9GWFk8NTGiTvPx_2XskA"}},[
                                e("i",{staticClass:"iconfont icon-youtube"})])
                    }
                ]
            };
            var i=s("VU/8")(n,a,!1,function(t){s("fYOn")},null,null);e.default=i.exports},fYOn:function(t,e){}});
