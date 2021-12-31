<template>
	<view class="page">
		<view class="head">
			<view class="head_title flex-center-center">
				<image @click="back()" class="icon" src="../../../static/team/back.png" mode=""></image>
				<view class="title">我的基金</view>
			</view>
			<view class="text2">累计收益(元)</view>
			<view class="flex-center-center text3">
				<view class="text4">￥</view>
				<view>{{totalRevenue}}</view>
			</view>
		</view>
		<view class="middle">
			<view class="content">
				<view class="item_box flex-center-between">
					<view class="item">
						<view class="text1">{{totalAmount}}</view>
						<view class="text2">购买总金额</view>
					</view>
					<view class="item">
						<view class="text1">{{yesterdayRevenue}}</view>
						<view class="text2">昨日收益</view>
					</view>
					<view class="item">
						<view class="text1">{{totalRevenue}}</view>
						<view class="text2">总收益</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="item" v-for="(row,i) in list" :key="i">
				<view class="box1 flex-center-between">
					<view class="text1">{{row.title}}</view>
					<view class="text2 flex-center-start">
						<view @click="jump_info(row)">查看明细</view>
						<image class="icon" src="../../../static/my/my_fund/you.png" mode=""></image>
					</view>
				</view>
				<view class="box2 flex-center-between">
					<view class="num_box">
						<view class="text1">￥{{row.total_amount}}</view>
						<view class="text2">购买金额</view>
					</view>
					<view class="num_box">
						<view class="text3">{{row.moneyCount}}</view>
						<view class="text2">昨日收益</view>
					</view>
					<view class="num_box">
						<view class="text3">{{row.shouyis}}</view>
						<view class="text2">总收益</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				list:[],
				page:0,
				last_page:1,
				totalAmount:'',//	7000.00	Number	购买总金额
				yesterdayRevenue:'',//	0.00	Number	总昨日收益
				totalRevenue:'',//	0.00	Number	总收益
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
				this.helper.post('user/money/myProduct/13',{page:this.page},(res) => {
					this.totalAmount = res.totalAmount;
					this.yesterdayRevenue = res.yesterdayRevenue;
					this.totalRevenue = res.totalRevenue;
					this.list.push(...res.data.data)
					this.last_page = res.data.last_page;
				})
			},
			jump_info (e) {
				let data = JSON.stringify(e);
				uni.navigateTo({
					url:'/pages/my/my_fund/info?data=' + data
				})
			},
			back () {
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		min-height: 100vh;
		/* #ifdef H5 */
		min-height: calc(100vh);
		background: #F7F7F7;
		/* #endif */
		overflow: hidden;
		.head{
			background-image: url(../../../static/my/my_fund/bg.png);
			background-repeat: no-repeat;
			background-size: 100%;
			width: 100%;
			height: 415rpx;
			overflow: hidden;
			.head_title{
				margin-top: 65rpx;
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
			.text2{
				font-size: 26rpx;
				font-weight: 400;
				color: #CCD2F9;
				text-align: center;
				margin-top: 63rpx;
			}
			.text3{
				font-size: 52rpx;
				font-weight: 400;
				color: #FFFFFF;
				margin-top: 18rpx;
				margin-top: 43rpx;
			}
			.text4{
				font-size: 28rpx;
			}
		}
		.middle{
			padding: 0 30rpx;
			margin-top: -60rpx;
			.content{
				width: 100%;
				height: 157rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
				.item_box{
					padding: 0 36rpx;
					height: 100%;
					.item{
						text-align: center;
						.text1{
							font-size: 36rpx;
							font-weight: 400;
							color: #343434;
						}
						.text2{
							font-size: 26rpx;
							font-weight: 400;
							color: #999999;
							margin-top: 20rpx;
						}
					}
				}
			}
		}
		.bottom{
			padding: 0 30rpx;
			margin-top: 24rpx;
			.item{
				width: 100%;
				height: 237rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
				overflow: hidden;
				margin-bottom: 24rpx;
				.box1{
					padding: 0 30rpx;
					margin-top: 32rpx;
					.text1{
						font-size: 36rpx;
						font-weight: bold;
						color: #343434;
					}
					.text2{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
						.icon{
							width: 12rpx;
							height: 21rpx;
							margin-left: 14rpx;
						}
					}
				}
				.box2{
					padding: 0 57rpx;
					margin-top: 40rpx;
					.num_box{
						text-align: center;
						.text1{
							font-size: 36rpx;
							font-weight: 400;
							color: #FB861F;
						}
						.text2{
							font-size: 26rpx;
							font-weight: 400;
							color: #999999;
						}
						.text3{
							font-size: 36rpx;
							font-weight: 400;
							color: #F72130;
						}
					}
				}
			}
			
		}
	}
</style>