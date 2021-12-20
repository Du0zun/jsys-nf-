<template>
	<view class="page">
		<image class="head" src="../../../static/new_comer/bg.png" mode=""></image>
		<view class="title flex-center-between">
			<view>我的成就</view>
		</view>
		<view class="box1 flex-center-between">
			<view class="item">
				<!-- <image class="icon" src="../../../static/new_comer/reg1.png"></image> -->
				<image class="icon" src="../../../static/new_comer/reg2.png"></image>
				<view>注册</view>
			</view>
			<view class="item">
				<image v-if="is_check != 2" class="icon" src="../../../static/new_comer/smrz1.png"></image>
				<image v-if="is_check == 2" class="icon" src="../../../static/new_comer/smrz2.png"></image>
				<view>实名认证</view>
			</view>
			<view class="item">
				<image v-if="has_buy == 0" class="icon" src="../../../static/new_comer/scgm1.png"></image>
				<image v-if="has_buy == 1" class="icon" src="../../../static/new_comer/scgm2.png"></image>
				<view>首次购买</view>
			</view>
		</view>
		<view class="title flex-center-between">
			<view>人气产品</view>
			<navigator url="/pages/product/all_fund" hover-class="none" style="color: #9B9B9B; font-size: 28rpx;">更多</navigator>
		</view>
		<view class="box3">
			<view @click="choose = 1" class="text1" :class="{choose_text:choose == 1}">
				<view>精选股基</view>
				<view class="flex-center-center">
					<view v-if="choose == 1" class="xian"></view>
				</view>
			</view>
			<view @click="choose = 2" class="text1" :class="{choose_text:choose == 2}">
				<view>优质债基</view>
				<view class="flex-center-center">
					<view v-if="choose == 2" class="xian"></view>
				</view>
			</view>
		</view>
		<view class="box4">
			<view class="content">
				<view @click="jump('/pages/product/info?id=' + row.id)" v-if="choose == 1"  class="item flex-center-between" v-for="(row,i) in porduct1" :key="i">
					<view>
						<view class="flex-center-start">
							<view class="text1">{{row.jyrsy}}</view>
							<view class="text2">%</view>
						</view>
						<view class="text3">日收益</view>
					</view>
					<view style="margin-top: 14rpx;text-align: center;">
						<view class="text4">{{row.title}}</view>
						<view class="text5">{{row.describe}}</view>
					</view>
				</view>
				<view @click="jump('/pages/product/info?id=' + row.id)" v-if="choose == 2" class="item flex-center-between" v-for="(row,i) in porduct2" :key="i">
					<view>
						<view class="flex-center-start">
							<view class="text1">{{row.jyrsy}}</view>
							<view class="text2">%</view>
						</view>
						<view class="text3">日收益</view>
					</view>
					<view style="margin-top: 14rpx;text-align: center;">
						<view class="text4">{{row.title}}</view>
						<view class="text5">{{row.describe}}</view>
					</view>
				</view>
			</view>
		</view>
		<view class="title flex-center-between">
			<view>新手入门</view>
			<view @click="tabJump('/pages/news/index',4)" style="color: #9B9B9B; font-size: 28rpx;">更多</view>
		</view>
		<view class="flex-center-center">
			<image class="bg2" src="../../../static/new_comer/bg2.png"></image>
		</view>
		<view class="new_content">
			<view class="new_item flex-center-start" v-for="(row,i) in news" :key="i">
				<view>
					<view class="new_title">{{row.title}}</view>
					<view class="new_info">{{row.category_name}}  {{row.click_count}}阅读</view>
				</view>
				<image class="new_img" :src="helper.uploadUrl +  row.image"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				choose:1,
				porduct1:'',
				porduct2:'',
				news:'',
				is_check:'',
				has_buy:''
		    }
		},
		onLoad (e) {
			this.is_check = e.is_check;
			this.has_buy = e.has_buy;
			this.helper.post('index/fund_page',{limit:2,type:3},(res) => {
				this.porduct1 = res.data
			})

			this.helper.post('index/fund_page',{limit:2,type:4},(res) => {
				this.porduct2 = res.data
			})

			this.helper.post('articles/index',{pagesize:2,list_type:4},(res) => {
				this.news = res.data.list.data;
			})
			
		},
		methods:{
			jump (e) {
				uni.navigateTo({
					url:e
				})
			},
			tabJump (e,type) {
				uni.setStorageSync("product", type);
				uni.switchTab({
				    url: e
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		overflow: hidden;
		.head{
			width: 100%;
			height: 267rpx;
		}
		.title{
			margin-top: 44rpx;
			margin-bottom: 44rpx;
			padding: 0 32rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: #333333;
		}
		.box1{
			padding: 0 82rpx;
			.item{
				text-align: center;
				.icon{
					width: 90rpx;
					height: 121rpx;
				}
			}
			
		}
		.box3{
			padding-left: 22rpx;
			display: flex;
			justify-content: flex-start;
			.text1{
				font-size: 30rpx;
				font-weight: 400;
				color: #666666;
				margin-right: 62rpx;
			}
			.choose_text{
				font-size: 32rpx;
				font-weight: bold;
				color: #666666;
				margin-right: 62rpx;	
			}
			.xian{
				width: 70rpx;
				height: 7rpx;
				background: #044095;
				margin-top: 18rpx;
			}
		}
		.box4{
			padding: 27rpx;
			.content{
				width: 100%;
				height: 326rpx;
				background: #FFFFFF;
				box-shadow: 0px 0px 6rpx 0px #DBDBDB;
				padding-top: 45rpx;
				overflow: hidden;
				.item{
					padding-left: 34rpx;
					padding-right: 272rpx;
					margin-bottom: 82rpx;
					.text1{
						font-size: 52rpx;
						font-weight: 400;
						color: #F23F5C;
					}
					.text2{
						font-size: 32rpx;
						font-weight: 400;
						color: #F23F5C;
						margin-top: 14rpx;
					}
					.text3{
						font-size: 26rpx;
						font-weight: 400;
						color: #F23F5C;
					}
					.text4{
						font-size: 32rpx;
						font-weight: bold;
						color: #333333;
					}
					.text5{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
						margin-top: 8rpx;
					}
				}
			}
		}
		.bg2{
			width: 690rpx;
			height: 243rpx;
			border-radius: 10rpx;
			margin-bottom: 38rpx;
		}
		.new_content{
			padding: 0 30rpx;
			.new_item{
				margin-bottom: 84rpx;
				.new_title{
					font-size: 32rpx;
					font-weight: 400;
					width: 446rpx;
					color: #333333;
					margin-right: 36rpx;
				}
				.new_info{
					font-size: 24rpx;
					font-weight: 400;
					color: #9A9A9A;
					margin-top: 24rpx;
				}
				.new_img{
					width: 221rpx;
					height: 132rpx;
				}
			}
			
		}
	}
</style>