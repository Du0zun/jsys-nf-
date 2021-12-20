//一个非常简单的store的示例
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        user: uni.getStorageSync("user") ? uni.getStorageSync("user") : '123'
    },
    mutations: {
        //修改头像
        change_img(state, img) {
            state.user.picImg = img;
            uni.removeStorageSync("user");
            uni.setStorageSync("user", state.user);
        },
        //修改性别
        change_gender(state, gender) {
            state.user.gender = gender;
            uni.removeStorageSync("user");
            uni.setStorageSync("user", state.user);
        },
        //修改昵称
        change_nickname(state, nickname) {
            state.user.nickname = nickname;
            uni.removeStorageSync("user");
            uni.setStorageSync("user", state.user);
        },
        //修改电话
        change_mobile(state, mobile) {
            state.user.mobile = mobile;
            uni.removeStorageSync("user");
            uni.setStorageSync("user", state.user);
        },
        //修改风格
        change_style(state, style) {
            state.user.style = style;
            uni.removeStorageSync("user");
            uni.setStorageSync("user", state.user);
        },
        changeLogin(state, user) {
            state.user = user
        }
    }
})
export default store