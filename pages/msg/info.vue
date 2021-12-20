<template>
	<view class="page">
		<view class="title">
			「{{list.types}}」{{list.title}}
		</view>
		<view class="time">{{list.created_at}}</view>
		<view class="content">
			{{list.content}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				list:[]
		    }
		},
		onLoad (e) {
			this.list = JSON.parse(e.data);
			console.log('数据',this.list)
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		min-height: 100vh;
		/* #ifdef H5 */
		min-height: calc(100vh - 44px);
		background: #F7F7F7;
		/* #endif */
		padding: 51rpx;
		.title{
			font-size: 32rpx;
			font-weight: 400;
			color: #323232;
		}
		.time{
			margin-top: 28rpx;
			margin-bottom: 38rpx;
			font-size: 22rpx;
			font-weight: 400;
			color: #999999;
		}
		.content{
			font-size: 26rpx;
			font-weight: 400;
			color: #666666;
		}
	}
</style>