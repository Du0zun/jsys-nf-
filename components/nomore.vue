<template>
    <view class="nomore flex-center-center">
        <image class="icon" src="@/static/nomore.png" mode="widthFix"></image>
        <text>暂无更多数据</text>
    </view>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.nomore{
    width: 100%;
    padding: 20upx 0;
    color: #999999;
    font-size: 24upx;
    .icon{
        width: 46upx;
        margin-right: 20upx;
    }
}
</style>