import md5 from '../common/md5.js';
import store from "../store"

/* #ifdef APP-PLUS */
let rootUrl = '';
let uploadUrl = '';
/* #endif */

/* #ifdef H5 */
let rootUrl = '';
let uploadUrl = '';
/* #endif */

let nowVersion = "1.0.0";

let apiRootUrl = rootUrl;
let invite = '';
export default {
    rootUrl: rootUrl,
    uploadUrl: uploadUrl,
    nowVersion: nowVersion,
    apiRootUrl: apiRootUrl,
    invite: invite,
    loading: false,
    config: {},
    getSign: function(data) {
        var user = uni.getStorageSync("user");
        var lastsession = user ? user.lastsession : 0;
        var timestamp = Date.parse(new Date()) / 1000;
        data.timestamp = timestamp;
        data.lastsession = lastsession;
    },
    set_api_upload_Url(url, invite2, uploadUrl2) {
        apiRootUrl = url;
        invite = invite2;
        uploadUrl = uploadUrl2;
    },
    post: function(api, data, succ, error, hideloading) {
        var _this = this;
        this.getSign(data);

        if (!hideloading && !_this.loading) {
            _this.loading = true;
            uni.showLoading({
                mask: true,
                title: 'loading'
            });
        }
        console.log("请求接口：" + apiRootUrl + api);
        uni.request({
            url: apiRootUrl + api,
            method: 'POST',
            data: data,
            header: {
                "content-type": 'application/x-www-form-urlencoded'
            },
            success: res => {
                if (!hideloading) {
                    _this.loading = false;
                    uni.hideLoading();
                }
                if (res.statusCode == 200) {
                    if (res.data.status == 1) {
                        succ(res.data);
                    } else {
                        console.log('！！错误接口：' + apiRootUrl + api)
                        if (error) {
                            error(res.data);
                        } else {
                            uni.showToast({
                                icon: 'none',
                                title: res.data.msg
                            });
                        }
                        if (res.data.status == -1) { //重新登陆
                            _this.removeUser();
                            uni.redirectTo({
                                url: '/pages/login/login',
                            })
                        }
                    }
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: 'Interface status exception:' + res.statusCode
                    })
                }
            },
            fail: (res) => {
                console.log(res);
                uni.showToast({
                    icon: 'none',
                    title: 'Network exception'
                })
            },
            complete: () => {
                _this.loading = false;
            }
        });
    },
    toast(title, backfun) {
        uni.showToast({
            icon: 'none',
            title: title,
            success: function() {
                if (backfun) backfun()
            }
        })
    },

    alert(title, backfun) {
        uni.showModal({
            content: title,
            showCancel: false,
            cancelText: "取消", // 取消按钮的文字  
            confirmText: "确认", // 确认按钮文字 
            confirmColor: "#E42727",
            success: function(e) {
                if (e.confirm) {
                    if (backfun) backfun()
                }
            }
        })
    },

    confirm(title, backfun, backfun1) {
        uni.showModal({
            content: title,
            cancelText: "取消", // 取消按钮的文字  
            confirmText: "确认", // 确认按钮文字 
            confirmColor: "#E42727",
            success: function(e) {
                if (e.confirm) {
                    backfun()
                }
                if (e.cancel) {
                    backfun1()
                }
            }
        })
    },

    setUser: function(user) {
        uni.setStorageSync("user", user);
        store.commit('changeLogin', user)
    },
    getUser: function() {
        var user = uni.getStorageSync("user");
        return user;
    },
    getUserBack: function(back) {
        var user = uni.getStorageSync("user");
        back(user);
    },
    removeUser: function() {
        uni.removeStorageSync("user");
    },

    isWeixin: function() {
        try {
            var ua = window.navigator.userAgent.toLowerCase();
            if (ua.match(/micromessenger/i) == 'micromessenger') {
                return true;
            }
        } catch (e) {
            //TODO handle the exception
        }
        return false;
    },

    //复制
    copyTextToClipboard: function(text) {
        var _this = this;
        console.log(typeof(text))
            //#ifdef H5
        var textArea = document.createElement("textarea")
        textArea.style.position = 'fixed'
        textArea.style.top = 0
        textArea.style.left = 0
        textArea.style.width = '2em'
        textArea.style.height = '2em'
        textArea.style.padding = 0
        textArea.style.border = 'none'
        textArea.style.outline = 'none'
        textArea.style.boxShadow = 'none'
        textArea.style.background = 'transparent'
        textArea.value = text

        document.body.appendChild(textArea)

        textArea.select()

        try {
            if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) { //区分iPhone设备
                textArea.setSelectionRange(0, textArea.value.length); //兼容ios
            }
            var msg = document.execCommand('copy') ? '成功' : '失败'
            this.toast("复制成功");
        } catch (err) {
            this.toast("复制失败");
        }
        document.body.removeChild(textArea);

        //#endif

        //#ifndef H5
        var copy = String(text);
        uni.setClipboardData({
            data: copy,
            success: function() {
                //在success中加入uni.hideToast() 关闭默认提示
                uni.hideToast();
                _this.toast("复制成功");
            }
        });
        //#endif
    },

    //保存图片
    savePicture: function(url) {
        var _this = this;
        // #ifdef H5
        let a = document.createElement("a"); // 生成一个a元素
        let event = new MouseEvent("click"); // 创建一个单击事件
        a.download = "photo"; // 设置图片名称
        a.style.display = 'none';
        a.href = url;
        a.dispatchEvent(event); // 触发a的单击事件
        // #endif

        // #ifndef H5
        uni.showLoading({
            mask: true,
            title: '下载中...'
        });
        // uni.downloadFile({
        //     url: url,
        //     success: (res) => {
        // 		console.log(res)
        //         if (res.statusCode === 200) {
        uni.saveImageToPhotosAlbum({
            filePath: url,
            success: function() {
                uni.hideLoading();
                _this.toast("照片已经保存到相册里了");
            }
        });
        // }
        // }
        // });
        // #endif
    },

    downloadIamge: function(selector, name) {
        var image = new Image()
            // 解决跨域 Canvas 污染问题
        image.setAttribute('crossOrigin', 'anonymous')
        image.onload = function() {
            var canvas = document.createElement('canvas')
            canvas.width = image.width
            canvas.height = image.height

            var context = canvas.getContext('2d')
            context.drawImage(image, 0, 0, image.width, image.height)
            var url = canvas.toDataURL('image/png')

            // 生成一个a元素
            var a = document.createElement('a')
                // 创建一个单击事件
            var event = new MouseEvent('click')

            // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
            a.download = name || 'my_invite_code'
                // 将生成的URL设置为a.href属性
            a.href = url

            // 触发a的单击事件
            a.dispatchEvent(event)
        }

        image.src = selector

        return true
    }
}