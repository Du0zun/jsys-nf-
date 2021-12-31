<template>
	<view class="page">
		<view class="xian"></view>
		<view class="flex-center-center">
			<view class="head">
				<view class="flex-center-center">
					<image class="img" :src="img_url"></image>
				</view>
				<view class="flex-center-center">
					<view @click="copy_img()" class="save_img">保存图片</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="item flex-center-between"  v-for="(row,i) in list1" :key="i">
				<view class="flex-center-start">
					<image class="logo" :src="helper.uploadUrl + row.thumb_url"></image>
					<view class="box1">
						<view style="margin-bottom: 12rpx;">{{row.name}}</view>
						<!-- <view>ID:123</view> -->
					</view>
				</view>
				<view @click="down_load(row.url)" class="copy">下载</view>
			</view>
			<view class="item flex-center-between" v-for="(row,i) in list2" :key="i">
				<view class="flex-center-start">
					<image class="logo" :src="helper.uploadUrl + row.thumb_url"></image>
					<view class="box1">
						<view style="margin-bottom: 12rpx;">{{row.name}}</view>
						<view>ID:{{row.value}}</view>
					</view>
				</view>
				<view @click="copy(row.value)" class="copy">复制</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				list2:[],
				list1:[],
				img_url:''
		    }
		},
		onLoad() {
			this.helper.post("contact",{},(res)=>{
				console.log('数据',res)
				this.img_url = this.helper.uploadUrl + res.data.kefu_banner;
				this.list2 = res.data.list2;
				this.list1 = res.data.list1;
			})
		},
		methods:{
			copy (e) {
				this.helper.copyTextToClipboard(e)
			},
			down_load (e) {
				// #ifdef APP-PLUS
				plus.runtime.openURL(e)
				// #endif
				// #ifdef H5
				window.open(e)
				// #endif
			},
			copy_img(){
				this.helper.savePicture(this.img_url)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.xian{
			width: 100%;
			height: 2rpx;
			background: #EAEAEA;
		}
		.head{
			width: 690rpx;
			height: 722rpx;
			background: #FFFFFF;
			box-shadow: 0px 4rpx 9rpx 0px #E4E4E4;
			border-radius: 10rpx;
			margin-top: 39rpx;
			.img{
				width: 655rpx;
				height: 587rpx;
				margin-top: 17rpx;
			}
			.save_img{
				width: 230rpx;
				height: 64rpx;
				background: #3162EE;
				border-radius: 10rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #FFFFFF;
				text-align: center;
				line-height: 64rpx;
				margin-top: 31rpx;
			}
		}
		.content{
			padding: 0 58rpx;
			.item{
				height: 140rpx;
				border-bottom: 2rpx solid #EBEBEB;
				.logo{
					width: 74rpx;
					height: 74rpx;
					margin-right: 10rpx;
				}
				.box1{
					font-size: 28rpx;
					font-weight: 400;
					color: #333333;
				}
				.copy{
					width: 110rpx;
					height: 40rpx;
					background: #3162EE;
					border-radius: 20rpx;
					font-size: 26rpx;
					font-weight: 400;
					color: #FFFFFF;
					text-align: center;
					line-height: 44rpx;
					margin-right: 27rpx;
				}
			}
		}
	}
</style>