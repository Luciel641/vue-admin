(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9e23524c"],{"312b":function(t,e,a){"use strict";var i=a("4941"),s=a.n(i);s.a},4941:function(t,e,a){},8716:function(t,e,a){"use strict";var i=a("a462"),s=a.n(i);s.a},9406:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard-container"},[a(t.currentRole,{tag:"component"})],1)},s=[],n=(a("caad"),a("2532"),a("5530")),r=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"first-row",attrs:{gutter:16}},[a("el-col",{attrs:{sm:12,lg:6}},[a("el-card",{attrs:{shadow:"never","body-style":t.bodyStyle}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("访问量")]),a("div",{staticClass:"card-body"},[a("count-to",{staticClass:"count-to",attrs:{"start-val":0,"end-val":56789,duration:2e3}})],1),a("el-divider"),a("div",{staticClass:"card-footer"},[a("span",[t._v("总访问量")]),a("span",[t._v("300万")])])],1)],1),a("el-col",{attrs:{sm:12,lg:6}},[a("el-card",{attrs:{shadow:"never","body-style":t.bodyStyle}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("销售额")]),a("div",{staticClass:"card-body"},[a("count-to",{staticClass:"count-to",attrs:{"start-val":0,"end-val":45612,duration:2e3}})],1),a("el-divider"),a("div",{staticClass:"card-footer"},[a("span",[t._v("总销售额")]),a("span",[t._v("76万")])])],1)],1),a("el-col",{attrs:{sm:12,lg:6}},[a("el-card",{attrs:{shadow:"never","body-style":t.bodyStyle}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("订单量")]),a("div",{staticClass:"card-body"},[a("count-to",{staticClass:"count-to",attrs:{"start-val":0,"end-val":12345,duration:2e3}})],1),a("el-divider"),a("div",{staticClass:"card-footer"},[a("span",[t._v("转化率")]),a("span",[t._v("30%")])])],1)],1),a("el-col",{attrs:{sm:12,lg:6}},[a("el-card",{attrs:{shadow:"never","body-style":t.bodyStyle}},[a("div",{attrs:{slot:"header"},slot:"header"},[t._v("新增用户")]),a("div",{staticClass:"card-body"},[a("count-to",{staticClass:"count-to",attrs:{"start-val":0,"end-val":5674,duration:2e3}})],1),a("el-divider"),a("div",{staticClass:"card-footer"},[a("span",[t._v("总用户")]),a("span",[t._v("23456人")])])],1)],1)],1),a("el-row",{staticClass:"second-row",attrs:{gutter:16}},t._l(t.links,(function(e,i){return a("el-col",{key:i,attrs:{xs:8,sm:4,lg:3}},[a("router-link",{attrs:{to:e.url}},[a("el-card",{attrs:{shadow:"hover"}},[a("i",{class:e.icon,style:{color:e.iconColor}}),a("p",[t._v(t._s(e.text))])])],1)],1)})),1),a("el-card",{staticClass:"visitChart",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"el-icon-s-data",staticStyle:{color:"#69c0ff"}}),t._v(" 访问量 ")]),a("el-row",{attrs:{gutter:16}},[a("el-col",{attrs:{md:16}},[a("h4",[t._v("访问量趋势")]),a("visit-chart",{attrs:{height:"240px"}})],1),a("el-col",{attrs:{md:8}},[a("h4",[t._v("访问量排行")]),a("div",{staticClass:"ranking"},[a("ul",t._l(t.ranking,(function(e,i){return a("li",{key:e.name,staticClass:"mg-t-10"},[a("div",{staticClass:"flex"},[a("span",{staticClass:"flex flex-auto"},[a("el-avatar",{staticClass:"mg-r-5",attrs:{size:"small"}},[t._v(" "+t._s(i+1)+" ")]),a("span",[t._v(t._s(e.name))])],1),a("span",[t._v(t._s(e.count))])])])})),0)])])],1)],1),a("el-card",{staticClass:"searchChart",attrs:{shadow:"never"}},[a("div",{attrs:{slot:"header"},slot:"header"},[a("i",{staticClass:"el-icon-search",staticStyle:{color:"#69c0ff"}}),t._v(" 热门搜索 ")]),a("el-row",{attrs:{gutter:16}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"number-info"},[a("div",{staticClass:"title"},[a("span",[t._v("搜索用户数")]),a("el-tooltip",{attrs:{content:"指标说明",placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline mg-l-5"})])],1),a("div",{staticClass:"value"},[a("span",{staticClass:"total"},[t._v("123456")]),a("span",{staticClass:"sub-total"},[t._v(" 123 "),a("i",{staticClass:"el-icon-caret-bottom text-success"})])])]),a("search-user-chart",{attrs:{height:"80px"}})],1),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"number-info"},[a("div",{staticClass:"title"},[a("span",[t._v("人均搜索次数")]),a("el-tooltip",{attrs:{content:"指标说明",placement:"top"}},[a("i",{staticClass:"el-icon-warning-outline mg-l-5"})])],1),a("div",{staticClass:"value"},[a("span",{staticClass:"total"},[t._v("21")]),a("span",{staticClass:"sub-total"},[t._v(" 3 "),a("i",{staticClass:"el-icon-caret-top text-danger"})])])]),a("search-count-chart",{attrs:{height:"80px"}})],1)],1)],1)],1)},l=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},u=[],d=a("313e"),h=a.n(d),f=a("ed08"),m={data:function(){return{$_sidebarElm:null,$_resizeHandler:null}},mounted:function(){var t=this;this.$_resizeHandler=Object(f["a"])((function(){t.chart&&t.chart.resize()}),100),this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}},p={mixins:[m],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},methods:{initChart:function(){this.chart=h.a.init(this.$el),this.chart.setOption({xAxis:{type:"category",axisLine:{lineStyle:{color:"#D7DDE4"}},axisTick:{alignWithLabel:!0,lineStyle:{color:"#D7DDE4"}},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!1,lineStyle:{color:"#F5F7F9"}},data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},yAxis:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}},type:"value"},series:[{data:[9728,4578,12768,4982,9665,5489,3288,13422,6753,7463,8162,6545],type:"bar",tooltip:!0,smooth:!0,symbol:"none",itemStyle:{normal:{barBorderRadius:[3,3,0,0],color:new h.a.graphic.LinearGradient(0,0,0,1,[{offset:0,color:"#69cdff"},{offset:.5,color:"#3eb3f7"},{offset:1,color:"#1495eb"}])}}}],color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:16,right:25,bottom:5,top:20,containLabel:!0},tooltip:{trigger:"axis"}})}}},v=p,b=a("2877"),y=Object(b["a"])(v,c,u,!1,null,"6b1b9aba",null),_=y.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},C=[],w={mixins:[m],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},methods:{initChart:function(){this.chart=h.a.init(this.$el),this.chart.setOption({xAxis:{data:["周一","周二","周三","周四","周五","周六","周日"],type:"category",show:!1},yAxis:{show:!1,type:"value"},series:[{data:[120,300,150,350,70,210,130],type:"line",tooltip:!0,smooth:!0,symbol:"none",areaStyle:{normal:{opacity:.2}}}],color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:-60,right:-20,bottom:-20,top:0,containLabel:!0},tooltip:{trigger:"axis"}})}}},x=w,F=Object(b["a"])(x,g,C,!1,null,"7a0af4a2",null),V=F.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.className,style:{height:t.height,width:t.width}})},$=[],E={mixins:[m],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"}},data:function(){return{chart:null}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},methods:{initChart:function(){this.chart=h.a.init(this.$el),this.chart.setOption({xAxis:{data:["周一","周二","周三","周四","周五","周六","周日"],type:"category",show:!1},yAxis:{show:!1,type:"value"},series:[{data:[300,150,350,70,210,130,120],type:"line",tooltip:!0,smooth:!0,symbol:"none",areaStyle:{normal:{opacity:.2}}}],color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:-60,right:-20,bottom:-20,top:0,containLabel:!0},tooltip:{trigger:"axis"}})}}},A=E,D=Object(b["a"])(A,S,$,!1,null,"6ae7d59c",null),z=D.exports,R=a("ec1b"),O=a.n(R),k={name:"DashboardAdmin",components:{VisitChart:_,SearchUserChart:V,SearchCountChart:z,CountTo:O.a},data:function(){return{bodyStyle:{padding:"10px"},links:[{icon:"el-icon-s-custom",iconColor:"#69c0ff",text:"用户",url:""},{icon:"el-icon-s-data",iconColor:"#95de64",text:"分析",url:""},{icon:"el-icon-s-goods",iconColor:"#ff9c6e",text:"商品",url:""},{icon:"el-icon-s-order",iconColor:"#b37feb",text:"订单",url:""},{icon:"el-icon-s-ticket",iconColor:"#ffd666",text:"票据",url:""},{icon:"el-icon-s-opportunity",iconColor:"#5cdbd3",text:"消息",url:""},{icon:"el-icon-s-management",iconColor:"#ff85c0",text:"标签",url:""},{icon:"el-icon-s-tools",iconColor:"#ffc069",text:"配置",url:""}],ranking:[{name:"北京",count:"78945"},{name:"上海",count:"78945"},{name:"广东",count:"78945"},{name:"四川",count:"78945"},{name:"江苏",count:"78945"},{name:"云南",count:"78945"},{name:"福建",count:"78945"}]}}},q=k,N=(a("8716"),Object(b["a"])(q,o,l,!1,null,"dd641ad6",null)),j=N.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"page-card"},[a("div",[a("span",{staticClass:"hello"},[t._v("Hello!")]),a("el-avatar",{staticClass:"mg-l-50",attrs:{src:t.avatar,size:100}}),a("span",{staticClass:"username"},[t._v(t._s(t.username))])],1),a("div",{staticClass:"welcome-text"},[t._v("Welcome to vue-admin")])])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[a("div",{staticClass:"title"},[t._v("普通用户首页")]),a("div",{staticClass:"content"},[t._v("普通用户首页不展示图表面板")])])}],B={name:"DashboardUser",data:function(){return{}},computed:Object(n["a"])({},Object(r["b"])(["username","avatar"]))},H=B,M=(a("312b"),Object(b["a"])(H,T,L,!1,null,"3db77ee4",null)),P=M.exports,J={name:"Dashboard",components:{adminDashboard:j,userDashboard:P},data:function(){return{currentRole:"adminDashboard"}},computed:Object(n["a"])({},Object(r["b"])(["roles"])),created:function(){console.log("dashboard created"),this.roles.includes("admin")||(this.currentRole="userDashboard")}},U=J,W=Object(b["a"])(U,i,s,!1,null,null,null);e["default"]=W.exports},a462:function(t,e,a){},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(i){if(a[i])return a[i].exports;var s=a[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",s=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;s.test(a);)a=a.replace(s,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),s=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=s.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",s.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,s="webkit moz ms o".split(" "),n=void 0,r=void 0;if("undefined"==typeof window)e.requestAnimationFrame=n=function(){},e.cancelAnimationFrame=r=function(){};else{e.requestAnimationFrame=n=window.requestAnimationFrame,e.cancelAnimationFrame=r=window.cancelAnimationFrame;for(var o=void 0,l=0;l<s.length&&(!n||!r);l++)o=s[l],e.requestAnimationFrame=n=n||window[o+"RequestAnimationFrame"],e.cancelAnimationFrame=r=r||window[o+"CancelAnimationFrame"]||window[o+"CancelRequestAnimationFrame"];n&&r||(e.requestAnimationFrame=n=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),s=window.setTimeout((function(){t(e+a)}),a);return i=e+a,s},e.cancelAnimationFrame=r=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=n,e.cancelAnimationFrame=r},function(t,e){t.exports=function(t,e,a,i){var s,n=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(s=t,n=t.default);var o="function"==typeof n?n.options:n;if(e&&(o.render=e.render,o.staticRenderFns=e.staticRenderFns),a&&(o._scopeId=a),i){var l=Object.create(o.computed||null);Object.keys(i).forEach((function(t){var e=i[t];l[t]=function(){return e}})),o.computed=l}return{esModule:s,exports:n,options:o}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))}}]);