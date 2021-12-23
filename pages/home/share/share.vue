<template>
	<view class="page">
		<view class="bg">
			<view class="head flex-center-center">
				<image @click="back()" class="icon" src="../../../static/team/back.png" mode=""></image>
				<view class="title">分享推广</view>
			</view>
			<view class="qrimg flex-center-center">
				<view class="qrimg-i">
					<view class="qrimg-i">
						<tki-qrcode v-if="ifShow" cid="qrcode1" ref="qrcode" :val="val" :size="size" :unit="unit" :background="background" :foreground="foreground" :pdground="pdground" :icon="icon" :iconSize="iconsize" :lv="lv" :onval="onval" :loadMake="loadMake" :usingComponents="true" @result="qrR" />
					</view>
				</view>
			</view>
			<!-- <view class="box1 flex-center-center">
				<view class="text1">
					我的推广链接：{{val}}
				</view>
				<view @click="copy(val)" class="copy">复制</view>
			</view> -->
			<view class="box1 flex-center-center">
				<view class="text1">
					我的推广链接：{{val}}
				</view>
				<view @click="copy(val)" class="copy">复制</view>
			</view>
			<view class="box1 flex-center-center" style="margin-bottom: 32rpx;">
				<view class="text1">
					我的邀請碼：{{user.invicode}}
				</view>
				<view @click="copy(user.invicode)" class="copy">复制</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"
	export default {
		data() {
		    return {
				ifShow: true,
				val: '', // 要生成的二维码值
				size: 258, // 二维码大小
				unit: 'upx', // 单位
				background: '#FFFFFF', // 背景色
				foreground: '#000000', // 前景色
				pdground: '#000000', // 角标色
				icon: '../../../static/logo.png', // 二维码图标
				iconsize: 20, // 二维码图标大小
				lv: 3, // 二维码容错级别 ， 一般不用设置，默认就行
				onval: true, // val值变化时自动重新生成二维码
				loadMake: true, // 组件加载完成后自动生成二维码
				src: '', // 二维码生成后的图片地址或base64
		    }
		},
		computed:{
			user(){
				return this.$store.state.user
			},

		},
		onLoad (e) {
			this.val = this.helper.invite + '#/pages/login/reg?sc=' + this.user.invicode
		},
		methods:{
			back(){
				uni.navigateBack()
			},
			copy (e) {
				this.helper.copyTextToClipboard(e)
			},
			qrR(res) {
				this.src = res
			},
		},
		components: {
			tkiQrcode
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		overflow: hidden;
		.bg{
			// width: 100%;
			// height: 100vh;
			background-image: url(../../../static/share/share.jpg);
			background-repeat: no-repeat;
			background-size: 100%;
			overflow: hidden;
			.head{
				margin-top: 74rpx;
				position: relative;
				.icon{
					width: 17rpx;
					height: 32rpx;
					position: absolute;
					left: 45rpx;
				}
				.title{
					font-size: 36rpx;
					font-weight: 400;
					color: #FFFFFF
				}
			}
			.qrimg{
				margin-top: 800rpx;
			}
			.box1{
				margin-top: 32rpx;
				.text1{
					width: 500rpx;
					font-size: 32rpx;
					font-weight: bold;
					color: #D68A60;
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					word-break: break-all;
				}
				.copy{
					margin-left: 36rpx;
					width: 81rpx;
					height: 49rpx;
					background: #F4E0D2;
					border-radius: 10rpx;
					font-size: 22rpx;
					font-weight: bold;
					color: #D68A60;
					line-height: 49rpx;
					text-align: center;
				}
				
			}
		}
	}
</style>