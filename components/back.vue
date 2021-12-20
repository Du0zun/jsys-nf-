<template>
    <view class="back-box flex-center-center" @click="back()">
        <view class="back" :style="[{borderTop: '2upx solid'+color,borderLeft: '2upx solid'+color}]"></view>
    </view>
</template>
<script>
export default {
    props: {
        color:{
            type:String,
            default:"#000000"
        }
    }, // default指定默认值
    methods: {
        back() {
            uni.navigateBack()
        }
    }
}
</script>
<style lang="scss" scoped>
.back-box{
    position: absolute;
    top: 0;
	/* #ifdef APP-PLUS */
	top: 40px;
	/* #endif */
    left: 0;
    width: 44px;
    height: 44px;
    z-index: 99;
    .back{
        width: 25upx;
        height: 25upx;
        transform: rotate(-45deg);
    }
}
</style>