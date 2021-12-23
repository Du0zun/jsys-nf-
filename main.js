import Vue from 'vue'
import App from './App'

import uView from "uview-ui"
Vue.use(uView)

import back from "./components/back.vue"
Vue.component('back', back)

import head from "./components/head.vue"
Vue.component('headTitle', head)

import nodata from "./components/nodata.vue"
Vue.component('no-data', nodata)

import nomore from "./components/nomore.vue"
Vue.component('no-more', nomore)

import store from "./store"
// 在main.js中注册全局组件
//挂在到Vue原型链上
Vue.prototype.$store = store

import helper from './common/helper.js'
Vue.prototype.helper = helper

Vue.prototype.$onLaunched = new Promise(resolve => {
    Vue.prototype.$isResolve = resolve
})

Vue.config.productionTip = false


App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()