<template>
	<view class="uni-head flex-center-center" :style="[{background:background}]">
		<view class="back-box flex-center-center" @click="back()" v-if="show_back">
			<view class="back" :style="[{borderTop: '2upx solid'+color,borderLeft: '2upx solid'+color}]"></view>
		</view>
		<view class="title" :style="[{color: color}]">{{title}}</view>
		<view class="slot flex-center-center">
			<slot name="right"></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: {
				type:String,
				default:""
			},
			show_back: {
				default: true
			},
			background: {
				type:String,
				default:"#ffffff"
			},
			color:{
				type:String,
				default:"#000000"
			}
		}, // default指定默认值
		data() {
			return {
				
			};
		},
		methods: {
		    back() {
		        uni.navigateBack()
		    }
		}
	}
</script>

<style lang="scss" scoped>
.uni-head{
	width: 100%;
	height: 44px;
	position: relative;
	/* #ifdef APP-PLUS */
	padding-top: 40px;
	height: 84px;
	/* #endif */
	.back-box{
		position: absolute;
		top: 0;
		left: 0;
		/* #ifdef APP-PLUS */
			top: 40px;
		/* #endif */
		width: 44px;
		height: 44px;
		.back{
			width: 25upx;
			height: 25upx;
			transform: rotate(-45deg);
			z-index: 99;
		}
	}
	.title{
		width: 250upx;
		font-weight: bold;
		font-size: 32upx;
		text-align: center;
	}
	.slot{
		position: absolute;
		top: 0;
		/* #ifdef APP-PLUS */
			top: 40px;
		/* #endif */
		font-size: 12px;
		right: 10px;
		// width: 44px;
		height: 44px;
		line-height: 44px;
		overflow: hidden;
	}
}
</style>
