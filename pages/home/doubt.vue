<template>
	<view class="page">
		<view class="xian"></view>
		<view class="title">操作流程</view>
		<video style="width: 100%;margin-top:40rpx" :src="helper.uploadUrl + list.video_url"></video>
		<!-- <view class="content" v-for="(row,i) in list" :key="i">
			<view style="padding-left: 50rpx;">
				<view  @click="choose = row.id" class="item flex-center-between">
					<view class="text1">{{row.title}}</view>
					<image v-if="choose != row.id" class="icon" src="../../static/shang.png" mode=""></image>
					<image v-if="choose == row.id" class="icon" src="../../static/xia.png" mode=""></image>
				</view>
			</view>
			<view v-if="choose == row.id" class="item_info">
				<view class="info_box">
					<video style="width: 100%;" :src="helper.uploadUrl + row.video_url"></video>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				list:[],
				choose:'',	
				page:0,
				last_page:1,
		    }
		},
		onLoad () {
			this.loadData();
		},
		onReachBottom() {
			console.log('到底了')
			this.loadData();
		},
		methods:{
			loadData () {
				this.page ++ 
				if (this.page > this.last_page) {
					return;
				}
				this.helper.post('video/detail',{id:6},(res) => {
					this.list = res.data[0];
					// this.list.push(...res.data.list.data)
					// this.last_page = res.data.list.last_page;
				})

			},
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.xian{
			width: 100%;
			height: 2rpx;
			background: #EBEBEB;
		}
		.title{
			font-size: 36rpx;
			font-weight: 400;
			color: #323232;
			margin-top: 32rpx;
			margin-left: 38rpx;
		}
		.content{
			// padding-left: 50rpx;
			.item{
				width: 100%;
				height: 122rpx;
				border-bottom: 2rpx solid #EBEBEB;
				.text1{
					font-size: 30rpx;
					font-weight: 400;
					color: #323232;
					margin-left: 30rpx;
				}
				.icon{
					width: 23rpx;
					height: 13rpx;
					margin-right: 52rpx;
				}
			}
			.item_info{
				width: 100%;
				background: #EBEBEB;
				margin-top: -2rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #333333;
				.info_box{
					padding: 70rpx;
					line-height: 36rpx;
				}
			}
		}
	}
</style>