(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting-phone"],{"06ba":function(t,e,a){"use strict";var n=a("070f"),i=a.n(n);i.a},"070f":function(t,e,a){var n=a("c688");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("8cdb010e",n,!0,{sourceMap:!1,shadowMode:!1})},"362b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{str:"获取验证码",time:60,Interval:"",form:{phone:"",code:""}}},methods:{get_code:function(){var t=this;this.form.phone?this.Interval||(this.str=this.time+"s",this.Interval=setInterval((function(){if(t.time<=0)return clearInterval(t.Interval),t.Interval="",t.str="获取验证码",void(t.time=60);t.time--,t.str=t.time+"s"}),1e3)):this.helper.toast("请输入手机号!")}}};e.default=n},"606c":function(t,e,a){"use strict";a.r(e);var n=a("362b"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},c688:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.flex-center[data-v-dc1dfa1a]{display:flex;align-items:center}.flex-center-between[data-v-dc1dfa1a]{display:flex;align-items:center;justify-content:space-between}.flex-center-around[data-v-dc1dfa1a]{display:flex;align-items:center;justify-content:space-around}.flex-center-center[data-v-dc1dfa1a]{display:flex;align-items:center;justify-content:center}.flex-center-start[data-v-dc1dfa1a]{display:flex;align-items:center;justify-content:flex-start}.flex_1[data-v-dc1dfa1a]{flex:1}.input_n[data-v-dc1dfa1a]{background:none;outline:none;border:none;font-size:%?28?%}.page-column[data-v-dc1dfa1a]{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-direction:column}.notice_up[data-v-dc1dfa1a]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;opacity:0;text-align:center;-webkit-transform:scale(1.5);transform:scale(1.5);background:rgba(0,0,0,.6);transition:all .2s ease-in-out 0s;pointer-events:none;-webkit-perspective:1000px;perspective:1000px;-webkit-backface-visibility:hidden;backface-visibility:hidden;flex-direction:column}.notice_up.show[data-v-dc1dfa1a]{opacity:1;-webkit-transform:scale(1);transform:scale(1);pointer-events:auto}.popup .box[data-v-dc1dfa1a]{width:%?540?%;height:%?500?%;background:#fff;border-radius:%?10?%;margin:0 auto;margin-top:%?300?%;text-align:center;padding:%?30?%;overflow:hidden}.popup .box .title[data-v-dc1dfa1a]{font-size:%?32?%}.popup .box .money[data-v-dc1dfa1a]{margin-top:%?40?%;font-size:%?60?%}.popup .box .money[data-v-dc1dfa1a]::before{content:"";font-size:%?50?%}.popup .box .money_1[data-v-dc1dfa1a]{margin-top:%?40?%;font-size:%?60?%}.popup .box .nav[data-v-dc1dfa1a]{margin-top:%?60?%;height:%?70?%;border-radius:%?10?%;border:%?2?% solid #535353}.popup .box .nav .list[data-v-dc1dfa1a]{height:%?70?%;border-right:%?2?% solid #989898;width:16.66666%}.popup .box .nav .list[data-v-dc1dfa1a]:last-child{border-right:none}.popup .box .nav .list .box-radius[data-v-dc1dfa1a]{width:%?20?%;height:%?20?%;border-radius:50%;background:#000}.popup .box .submit[data-v-dc1dfa1a]{margin:0 auto;margin-top:%?60?%;width:%?360?%;height:%?70?%;line-height:%?70?%;border-radius:%?10?%;background:linear-gradient(90deg,#df85de,#884ff2);color:#fff;text-align:center;font-size:%?32?%}.popup .number[data-v-dc1dfa1a]{flex-wrap:wrap;position:absolute;bottom:0;width:100%;background:#fff}.popup .number .list[data-v-dc1dfa1a]{height:%?90?%;line-height:%?90?%;width:33.333%;font-size:%?32?%;box-sizing:border-box;border-right:%?2?% solid hsla(0,0%,80%,.36);border-bottom:%?2?% solid hsla(0,0%,80%,.36)}.arrow[data-v-dc1dfa1a]::after{content:"";display:block;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:%?15?%;height:%?15?%;border-top:%?3?% solid #999;border-right:%?3?% solid #999}\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.page[data-v-dc1dfa1a]{padding:0 %?53?%}.page .title[data-v-dc1dfa1a]{font-size:%?26?%;font-weight:400;color:#999;margin-top:%?80?%}.page .item1[data-v-dc1dfa1a]{margin-top:%?235?%}.page .item1 .text[data-v-dc1dfa1a]{font-size:%?28?%;font-weight:400;color:#333;width:%?60?%;margin-right:%?17?%}.page .item1 .input[data-v-dc1dfa1a]{border-bottom:%?2?% solid #dbdbdb;width:%?598?%;height:%?66?%}.page .item2[data-v-dc1dfa1a]{border-bottom:%?2?% solid #dbdbdb;width:%?574?%;height:%?66?%;margin-left:%?72?%;margin-top:%?54?%}.page .item2 .btn_code[data-v-dc1dfa1a]{width:%?167?%;height:%?49?%;background:#fff;border:%?2?% solid #676767;border-radius:%?24?%;font-size:%?25?%;font-weight:400;color:#666;line-height:%?49?%;text-align:center}.page .btn[data-v-dc1dfa1a]{width:%?570?%;height:%?88?%;background:#004299;border-radius:%?10?%;font-size:%?32?%;font-weight:400;color:#fff;line-height:%?88?%;text-align:center;margin-top:%?204?%}',""]),t.exports=e},ebcf:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"title"},[t._v("更换手机后，下次登录可使用新的手机号登录 ，当前手机号：13123456789")]),a("v-uni-view",{staticClass:"item1 flex-center-start"},[a("v-uni-view",{staticClass:"text"},[t._v("+86中国")]),a("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入新的手机号"},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}})],1),a("v-uni-view",{staticClass:"item2 flex-center-between"},[a("v-uni-input",{staticClass:"input",attrs:{placeholder:"请输入短信验证码"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}}),a("v-uni-view",{staticClass:"btn_code",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.get_code()}}},[t._v(t._s(t.str))])],1),a("v-uni-view",{staticClass:"flex-center-center"},[a("v-uni-view",{staticClass:"btn"},[t._v("确定")])],1)],1)},r=[]},ff5f:function(t,e,a){"use strict";a.r(e);var n=a("ebcf"),i=a("606c");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("06ba");var o,d=a("f0c5"),s=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"dc1dfa1a",null,!1,n["a"],o);e["default"]=s.exports}}]);