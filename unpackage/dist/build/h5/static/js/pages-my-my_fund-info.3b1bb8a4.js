(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my_fund-info"],{"0185":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{list:{}}},onLoad:function(t){this.list=JSON.parse(t.data)}};e.default=a},"6b16":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.flex-center[data-v-6e6844c4]{display:flex;align-items:center}.flex-center-between[data-v-6e6844c4]{display:flex;align-items:center;justify-content:space-between}.flex-center-around[data-v-6e6844c4]{display:flex;align-items:center;justify-content:space-around}.flex-center-center[data-v-6e6844c4]{display:flex;align-items:center;justify-content:center}.flex-center-start[data-v-6e6844c4]{display:flex;align-items:center;justify-content:flex-start}.flex_1[data-v-6e6844c4]{flex:1}.input_n[data-v-6e6844c4]{background:none;outline:none;border:none;font-size:%?28?%}.page-column[data-v-6e6844c4]{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-direction:column}.notice_up[data-v-6e6844c4]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;opacity:0;text-align:center;-webkit-transform:scale(1.5);transform:scale(1.5);background:rgba(0,0,0,.6);transition:all .2s ease-in-out 0s;pointer-events:none;-webkit-perspective:1000px;perspective:1000px;-webkit-backface-visibility:hidden;backface-visibility:hidden;flex-direction:column}.notice_up.show[data-v-6e6844c4]{opacity:1;-webkit-transform:scale(1);transform:scale(1);pointer-events:auto}.popup .box[data-v-6e6844c4]{width:%?540?%;height:%?500?%;background:#fff;border-radius:%?10?%;margin:0 auto;margin-top:%?300?%;text-align:center;padding:%?30?%;overflow:hidden}.popup .box .title[data-v-6e6844c4]{font-size:%?32?%}.popup .box .money[data-v-6e6844c4]{margin-top:%?40?%;font-size:%?60?%}.popup .box .money[data-v-6e6844c4]::before{content:"";font-size:%?50?%}.popup .box .money_1[data-v-6e6844c4]{margin-top:%?40?%;font-size:%?60?%}.popup .box .nav[data-v-6e6844c4]{margin-top:%?60?%;height:%?70?%;border-radius:%?10?%;border:%?2?% solid #535353}.popup .box .nav .list[data-v-6e6844c4]{height:%?70?%;border-right:%?2?% solid #989898;width:16.66666%}.popup .box .nav .list[data-v-6e6844c4]:last-child{border-right:none}.popup .box .nav .list .box-radius[data-v-6e6844c4]{width:%?20?%;height:%?20?%;border-radius:50%;background:#000}.popup .box .submit[data-v-6e6844c4]{margin:0 auto;margin-top:%?60?%;width:%?360?%;height:%?70?%;line-height:%?70?%;border-radius:%?10?%;background:linear-gradient(90deg,#df85de,#884ff2);color:#fff;text-align:center;font-size:%?32?%}.popup .number[data-v-6e6844c4]{flex-wrap:wrap;position:absolute;bottom:0;width:100%;background:#fff}.popup .number .list[data-v-6e6844c4]{height:%?90?%;line-height:%?90?%;width:33.333%;font-size:%?32?%;box-sizing:border-box;border-right:%?2?% solid hsla(0,0%,80%,.36);border-bottom:%?2?% solid hsla(0,0%,80%,.36)}.arrow[data-v-6e6844c4]::after{content:"";display:block;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:%?15?%;height:%?15?%;border-top:%?3?% solid #999;border-right:%?3?% solid #999}\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.pay_detail[data-v-6e6844c4]{background:#efefef}.pay_detail .head[data-v-6e6844c4]{margin:%?24?% %?30?%;padding:0 %?30?%;background:#fff;text-align:center;border-radius:%?10?%}.pay_detail .head .title[data-v-6e6844c4]{text-align:left;height:%?90?%;line-height:%?90?%;font-size:%?32?%;border-bottom:%?2?% solid #f0f0f0}.pay_detail .head .company[data-v-6e6844c4]{padding:%?30?% 0}.pay_detail .head .money[data-v-6e6844c4]{font-size:%?50?%}.pay_detail .head .type[data-v-6e6844c4]{padding:%?35?% 0}.pay_detail .center[data-v-6e6844c4]{margin:%?24?% %?30?%;padding:%?20?% %?30?%;background:#fff;text-align:center;border-radius:%?10?%}.pay_detail .center .title[data-v-6e6844c4]{padding:%?20?% 0;font-size:%?32?%;text-align:left}.pay_detail .center .list[data-v-6e6844c4]{padding:%?20?% 0;font-size:%?28?%}.pay_detail .center .list .list-title[data-v-6e6844c4]{color:#666}',""]),t.exports=e},"811b":function(t,e,i){var a=i("6b16");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("075ff5c4",a,!0,{sourceMap:!1,shadowMode:!1})},"8bbc":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"pay_detail  page-column"},[i("v-uni-view",{staticClass:"head"},[i("v-uni-view",{staticClass:"title"},[t._v(t._s(t.list.title))]),i("v-uni-view",{staticClass:"company"},[t._v("金额(元)")]),i("v-uni-view",{staticClass:"money"},[t._v(t._s(t.list.qtje))]),i("v-uni-view",{staticClass:"type"},[t._v(t._s(t.list.status))])],1),i("v-uni-view",{staticClass:"center"},[i("v-uni-view",{staticClass:"title"},[t._v("确认信息")]),i("v-uni-view",{staticClass:"list flex-center-between"},[i("v-uni-view",{staticClass:"list-title"},[t._v("产品名称：")]),i("v-uni-view",{staticClass:"msg"},[t._v(t._s(t.list.title))])],1),i("v-uni-view",{staticClass:"list flex-center-between"},[i("v-uni-view",{staticClass:"list-title"},[t._v("金额：")]),i("v-uni-view",{staticClass:"msg"},[t._v(t._s(t.list.qtje)+"元")])],1),i("v-uni-view",{staticClass:"list flex-center-between"},[i("v-uni-view",{staticClass:"list-title"},[t._v("时间：")]),i("v-uni-view",{staticClass:"msg"},[t._v(t._s(t.list.created_at))])],1),i("v-uni-view",{staticClass:"list flex-center-between"},[i("v-uni-view",{staticClass:"list-title"},[t._v("产品来源：")]),i("v-uni-view",{staticClass:"msg"},[t._v(t._s(0!=t.list.from_uid?"转入":"购买"))])],1),99999!=t.list.shijian?i("v-uni-view",{staticClass:"list flex-center-between"},[i("v-uni-view",{staticClass:"list-title"},[t._v("产品期限：")]),i("v-uni-view",{staticClass:"msg"},[t._v("asdasd")])],1):t._e(),t.list.reason?i("v-uni-view",{staticClass:"list flex-center-between"},[i("v-uni-view",{staticClass:"list-title"},[t._v("备注：")]),i("v-uni-view",{staticClass:"msg"},[t._v("asdasd")])],1):t._e()],1)],1)},s=[]},ea23:function(t,e,i){"use strict";var a=i("811b"),n=i.n(a);n.a},f49a:function(t,e,i){"use strict";i.r(e);var a=i("0185"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=n.a},f72f:function(t,e,i){"use strict";i.r(e);var a=i("8bbc"),n=i("f49a");for(var s in n)"default"!==s&&function(t){i.d(e,t,(function(){return n[t]}))}(s);i("ea23");var r,o=i("f0c5"),l=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"6e6844c4",null,!1,a["a"],r);e["default"]=l.exports}}]);