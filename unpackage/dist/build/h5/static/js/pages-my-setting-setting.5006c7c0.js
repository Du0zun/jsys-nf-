(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-setting-setting"],{"0876":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return c})),i.d(e,"a",(function(){return n}));var n={uPopup:i("f535").default,uPicker:i("aeec").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"set"},[n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"list flex-center-between",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show_head=!0}}},[n("v-uni-view",{staticClass:"title"},[t._v("头像")]),n("v-uni-view",{staticClass:"right flex-center"},[n("v-uni-view",{staticClass:"icon flex-center-center"},[n("v-uni-image",{attrs:{src:"../../../static/tabbar/head_"+t.user.picImg+".png"}})],1),n("v-uni-view",{staticClass:"back"},[n("v-uni-image",{attrs:{src:i("51c8"),mode:"widthFix"}})],1)],1)],1),n("v-uni-navigator",{staticClass:"list flex-center-between",attrs:{"hover-class":"none",url:"/pages/my/setting/nickname"}},[n("v-uni-view",{staticClass:"title"},[t._v("昵称")]),n("v-uni-view",{staticClass:"right flex-center"},[n("v-uni-view",{staticClass:"icon flex-center-center"},[t._v(t._s(t.user.nickname))]),n("v-uni-view",{staticClass:"back"},[n("v-uni-image",{attrs:{src:i("51c8"),mode:"widthFix"}})],1)],1)],1),n("v-uni-view",{staticClass:"list flex-center-between",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.show_select=!0}}},[n("v-uni-view",{staticClass:"title"},[t._v("性别")]),n("v-uni-view",{staticClass:"right flex-center"},[n("v-uni-view",{staticClass:"icon flex-center-center"},[t._v(t._s(1==t.user.gender?"男":"女"))]),n("v-uni-view",{staticClass:"back"},[n("v-uni-image",{attrs:{src:i("51c8"),mode:"widthFix"}})],1)],1)],1),n("v-uni-view",{staticClass:"list flex-center-between"},[n("v-uni-view",{staticClass:"title"},[t._v("手机号")]),n("v-uni-view",{staticClass:"right flex-center"},[n("v-uni-view",{staticClass:"icon flex-center-center"},[t._v(t._s(t.user.mobile))]),n("v-uni-view",{staticClass:"back"},[n("v-uni-image",{attrs:{src:i("51c8"),mode:"widthFix"}})],1)],1)],1),n("v-uni-navigator",{staticClass:"list flex-center-between",attrs:{"hover-class":"none",url:"/pages/my/setting/password"}},[n("v-uni-view",{staticClass:"title"},[t._v("修改密码")]),n("v-uni-view",{staticClass:"right flex-center"},[n("v-uni-view",{staticClass:"back"},[n("v-uni-image",{attrs:{src:i("51c8"),mode:"widthFix"}})],1)],1)],1),n("v-uni-navigator",{staticClass:"list flex-center-between",attrs:{"hover-class":"none",url:"/pages/my/setting/pay_password"}},[n("v-uni-view",{staticClass:"title"},[t._v("修改支付密码")]),n("v-uni-view",{staticClass:"right flex-center"},[n("v-uni-view",{staticClass:"back"},[n("v-uni-image",{attrs:{src:i("51c8"),mode:"widthFix"}})],1)],1)],1)],1),n("v-uni-navigator",{staticClass:"logout",attrs:{url:"/pages/login/login","hover-class":"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.logout()}}},[t._v("退出登录")]),n("u-popup",{attrs:{show:t.show_head,mode:"bottom","border-radius":"15"},on:{close:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"title"},[t._v("选择头像")]),n("v-uni-view",{staticClass:"item flex-center-between"},t._l(8,(function(e,a){return n("v-uni-view",{key:a,staticClass:"list flex-center-center",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.choose_icon=a}}},[n("v-uni-image",{staticClass:"icon",attrs:{src:"../../../static/tabbar/head_"+(a+1)+".png"}}),n("v-uni-view",{staticClass:"choose",class:{choose_one:t.choose_icon==a}},[t.choose_icon==a?n("v-uni-image",{staticClass:"icon",attrs:{src:i("aa21")}}):t._e()],1)],1)})),1),n("v-uni-view",{staticClass:"save",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.save_icon.apply(void 0,arguments)}}},[t._v("保存")])],1)],1),n("u-picker",{attrs:{show:t.show_select,columns:t.type,keyName:"label"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.confirm.apply(void 0,arguments)},cancel:function(e){arguments[0]=e=t.$handleEvent(e),t.show_select=!1}}})],1)},c=[]},"3eb7":function(t,e,i){"use strict";i.r(e);var n=i("999a"),a=i.n(n);for(var c in n)"default"!==c&&function(t){i.d(e,t,(function(){return n[t]}))}(c);e["default"]=a.a},"3f38":function(t,e,i){var n=i("8220");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("05f2e32e",n,!0,{sourceMap:!1,shadowMode:!1})},"51c8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAUCAYAAABbLMdoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjFGRTM5NDVGQTFBODExRUJCMEI3Q0JEMUMxNzI4OTQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjFGRTM5NDYwQTFBODExRUJCMEI3Q0JEMUMxNzI4OTQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MUZFMzk0NURBMUE4MTFFQkIwQjdDQkQxQzE3Mjg5NDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MUZFMzk0NUVBMUE4MTFFQkIwQjdDQkQxQzE3Mjg5NDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7Rn8sjAAABIklEQVR42oSRvUoDQRRGJzFKBBUbUVYDdir+EGLEJpUP4GPsO+1WPoKNta2aiIKNGrSSGFP5l3o9F76VdbOzDhyGYc+98+3cShRFp865NTgOw3DgSlYVjmAfruM4Xv1PbsIIVlTQ8Mpc/azOQ1hWwbqvs6PgRQWvsKSCjbxcSZLk94BgUXpg2b+hRaP+n87p4sNQN9hNc1ZIg81CWQVvKrB/WYAuBVsTMbILYZHtBuxnx9DxypmiO7adwhg50brO6jiolYjbbLdgziMcVj1iy95a4r2e8L1WINr4L2AaHuAAcVw0lD17KpjR0zURvybeWRkvJVrGdlZ0yuQ0pSuoS7SrP/MRp4Ig2FVGG2/fJ6YxzmAensrEVD6Bc4kfZUP6EWAAg2ht22ZDZeEAAAAASUVORK5CYII="},8220:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.flex-center[data-v-382cb39c]{display:flex;align-items:center}.flex-center-between[data-v-382cb39c]{display:flex;align-items:center;justify-content:space-between}.flex-center-around[data-v-382cb39c]{display:flex;align-items:center;justify-content:space-around}.flex-center-center[data-v-382cb39c]{display:flex;align-items:center;justify-content:center}.flex-center-start[data-v-382cb39c]{display:flex;align-items:center;justify-content:flex-start}.flex_1[data-v-382cb39c]{flex:1}.input_n[data-v-382cb39c]{background:none;outline:none;border:none;font-size:%?28?%}.page-column[data-v-382cb39c]{width:100%;height:100%;position:absolute;top:0;left:0;display:flex;flex-direction:column}.notice_up[data-v-382cb39c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:999;opacity:0;text-align:center;-webkit-transform:scale(1.5);transform:scale(1.5);background:rgba(0,0,0,.6);transition:all .2s ease-in-out 0s;pointer-events:none;-webkit-perspective:1000px;perspective:1000px;-webkit-backface-visibility:hidden;backface-visibility:hidden;flex-direction:column}.notice_up.show[data-v-382cb39c]{opacity:1;-webkit-transform:scale(1);transform:scale(1);pointer-events:auto}.popup .box[data-v-382cb39c]{width:%?540?%;height:%?500?%;background:#fff;border-radius:%?10?%;margin:0 auto;margin-top:%?300?%;text-align:center;padding:%?30?%;overflow:hidden}.popup .box .title[data-v-382cb39c]{font-size:%?32?%}.popup .box .money[data-v-382cb39c]{margin-top:%?40?%;font-size:%?60?%}.popup .box .money[data-v-382cb39c]::before{content:"";font-size:%?50?%}.popup .box .money_1[data-v-382cb39c]{margin-top:%?40?%;font-size:%?60?%}.popup .box .nav[data-v-382cb39c]{margin-top:%?60?%;height:%?70?%;border-radius:%?10?%;border:%?2?% solid #535353}.popup .box .nav .list[data-v-382cb39c]{height:%?70?%;border-right:%?2?% solid #989898;width:16.66666%}.popup .box .nav .list[data-v-382cb39c]:last-child{border-right:none}.popup .box .nav .list .box-radius[data-v-382cb39c]{width:%?20?%;height:%?20?%;border-radius:50%;background:#000}.popup .box .submit[data-v-382cb39c]{margin:0 auto;margin-top:%?60?%;width:%?360?%;height:%?70?%;line-height:%?70?%;border-radius:%?10?%;background:linear-gradient(90deg,#df85de,#884ff2);color:#fff;text-align:center;font-size:%?32?%}.popup .number[data-v-382cb39c]{flex-wrap:wrap;position:absolute;bottom:0;width:100%;background:#fff}.popup .number .list[data-v-382cb39c]{height:%?90?%;line-height:%?90?%;width:33.333%;font-size:%?32?%;box-sizing:border-box;border-right:%?2?% solid hsla(0,0%,80%,.36);border-bottom:%?2?% solid hsla(0,0%,80%,.36)}.arrow[data-v-382cb39c]::after{content:"";display:block;-webkit-transform:rotate(45deg);transform:rotate(45deg);width:%?15?%;height:%?15?%;border-top:%?3?% solid #999;border-right:%?3?% solid #999}\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.set .content[data-v-382cb39c]{padding-left:%?46?%;padding-top:%?10?%;border-top:%?2?% solid #ebebeb}.set .content .list[data-v-382cb39c]{border-bottom:%?2?% solid #ebebeb;padding-bottom:%?10?%;padding-top:%?20?%;line-height:%?80?%;padding-right:%?30?%}.set .content .list .title[data-v-382cb39c]{font-size:%?28?%}.set .content .list .right .icon[data-v-382cb39c]{margin-right:%?20?%}.set .content .list .right .icon uni-image[data-v-382cb39c]{width:%?68?%;height:%?68?%;border-radius:50%}.set .content .list .right .back uni-image[data-v-382cb39c]{width:%?14?%}.set .version[data-v-382cb39c]{padding-left:%?46?%;border-top:%?24?% solid #ebebeb}.set .version .list[data-v-382cb39c]{border-bottom:%?2?% solid #ebebeb;padding-bottom:%?10?%;padding-top:%?20?%;line-height:%?80?%;padding-right:%?30?%}.set .logout[data-v-382cb39c]{margin:0 %?64?%;margin-top:%?150?%;border-radius:%?10?%;background:#ccc;height:%?88?%;line-height:%?88?%;text-align:center;color:#fff}.set .box .title[data-v-382cb39c]{font-size:%?36?%;padding:%?40?% 0;text-align:center}.set .box .item[data-v-382cb39c]{flex-wrap:wrap;padding:0 %?44?%}.set .box .item .list[data-v-382cb39c]{width:25%;padding:%?25?% 0;position:relative}.set .box .item .list .icon[data-v-382cb39c]{width:%?130?%;height:%?130?%;border-radius:50%}.set .box .item .list .choose[data-v-382cb39c]{position:absolute;background:#fff;overflow:hidden;bottom:%?25?%;right:%?20?%;width:%?36?%;height:%?36?%;border-radius:50%;box-sizing:border-box;border:%?2?% solid #b2b2b2}.set .box .item .list .choose .icon[data-v-382cb39c]{width:%?36?%;height:%?36?%}.set .box .item .list .choose.choose_one[data-v-382cb39c]{border:none;background:#fff}.set .box .save[data-v-382cb39c]{background:#e85b4a;margin:%?40?% %?64?%;color:#fff;font-size:%?28?%;text-align:center;height:%?88?%;line-height:%?88?%;border-radius:%?10?%}',""]),t.exports=e},"848d":function(t,e,i){"use strict";i.r(e);var n=i("0876"),a=i("3eb7");for(var c in a)"default"!==c&&function(t){i.d(e,t,(function(){return a[t]}))}(c);i("9b12");var s,o=i("f0c5"),r=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"382cb39c",null,!1,n["a"],s);e["default"]=r.exports},"999a":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{show_head:!1,show_select:!1,type:[[{value:1,label:"男"},{value:2,label:"女"}]],choose_icon:0,style_color:"#E85B4A",style_type:0}},computed:{user:function(){return this.$store.state.user}},onShow:function(){},methods:{confirm:function(t){var e=this;console.log("选中",t);var i=t.value[0].value;this.helper.post("user/myedit",{gender:i},(function(t){e.$store.commit("change_gender",i)}))},close:function(){this.show_head=!1},save_icon:function(){var t=this;this.show_head=!1;var e=this.choose_icon+1;this.helper.post("user/myedit",{picImg:e},(function(i){t.helper.toast(i.msg),t.$store.commit("change_img",e)}))},logout:function(){this.helper.removeUser(),uni.redirectTo({url:"/pages/login/login"})}}};e.default=n},"9b12":function(t,e,i){"use strict";var n=i("3f38"),a=i.n(n);a.a},aa21:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkE1M0YyNEZBQTY1NjExRUJBNTA5OTM0RDI1NzcxRkQwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkE1M0YyNEZCQTY1NjExRUJBNTA5OTM0RDI1NzcxRkQwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTUzRjI0RjhBNjU2MTFFQkE1MDk5MzREMjU3NzFGRDAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTUzRjI0RjlBNjU2MTFFQkE1MDk5MzREMjU3NzFGRDAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6X6Ta6AAACwElEQVR42sSYXUgUURiGZzeDIoTKbqLoRvKPsiiTMokoLUgqDMMiAiHoogIjJKxuuuhPIiKk9MqghCK7iALTlCJyKUuELoStTJJcEEIxiagM6/3gHTgtzc6ZnTnOCw87Z/bM7Lvn5zvfOZGR3FzLo+aDrSAbrAMrwGIwDT6Dj6APDIJeMJzqZUvi8X/KGR6MFINDYC9Y4FBH7heCSpbF5B1wG3Tq/EhUo042Xyr/9nAKM07vPwA6QDdb1JehY+Ad2Gf5l3Tza9CQrqGboBHMsoLVSdADZnsxJF1UY5nTRvBS19CtgLrITWvBczdDMmgPWjOnTYm8vCb1RkSJQ4vAFyscrUc86k1uoRYrPN1P7jKJtjtDNLQUXVelGjpuha86ewzJ2jQC5hn8sVGQ5RR7FBVKC5UZNvMQLOOw+OFStyzKtcqUJM7sBlPgPT9TqUQMrTZk5jHYrJSvg0yXZ/LFUIEBM0/ADqUsa+IRjecyo0y4gtQzsF0pX2XWoKO5Uc2cqFWiKbjnUk+i7RalfMVrSJGMcVKjXi0YB9WcupX/qfOCM9bWZXDCY+v+lNb5oFGxWbnewwGrKiYLJfjFcoMd6Dzqmxjq16goeXSbUpYB285ryWtKle8uMAlLR0NiKK5ZuYrJuq0KcBZsU+5dBKd8TIiYLB1ZXDrmaD50zWGgngNnfM7QUmmhMYZ3XdWyJVSdD8BMHDlRzJ7yTR4frueUzgeXwOkA4ldjcsb4BhSFlHp8lYwVLfRbDYr7Q8yFasRMcgo76LaJM6QumHngtOuoZ/ifKQ0zfKTcl5Xw9MK0ZHavQetMuRma5knHU4NmhsAqro9aW+k/PBy4YcDMI7ASJNI5/TgKysFAAEYSnMm7wHc/50PdTNBli92VhpFXjO454K5OPqSrVlLEgb8BLAcLuWuJ8J9PgE9M8N96HYt/BRgAc72OVyhhziYAAAAASUVORK5CYII="}}]);