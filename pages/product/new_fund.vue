<template>
	<view class="page">
		<view class="head">
			<view class="content">
				<image @click="back()" class="back" src="../../static/product/new/zuo.png" mode=""></image>
				<view class="title">新发基金</view>
				<view class="text_box flex-center-start">
					<view class="flex-center-start" style="margin-right: 40rpx;">
						<image class="icon" src="../../static/product/new/gou.png" mode=""></image>
						<view>抢先布局</view>
					</view>
					<view class="flex-center-start">
						<image class="icon" src="../../static/product/new/gou.png" mode=""></image>
						<view>灵活建仓</view>
					</view>
				</view>
				<view class="text">认购中基金</view>
			</view>
		</view>
		<view class="middle">
			<view class="item" v-for="(row,i) in list" :key="i">
				<view class="title">{{row.djs_at}}截止</view>
				<view class="content">
					<view class="flex-center-start">
						<view class="flex-center-start">
							<view class="text1">{{row.jyrsy}}</view>
							<view class="text2">%</view>
						</view>
						<view class="text3">{{row.title}}</view>
					</view>
					<view class="flex-center-between">
						<view class="text4">日收益</view>
						<view class="text5">{{row.genre}}</view>
						<view class="text5">{{row.risk_level}}</view>
						<view class="btn"  @click="jump('/pages/product/info?id=' + row.id)">立即购买</view>
					</view>
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="title">新发基金认购流程</view>
			<view class="content">
				<view class="item">
					<view class="flex-center-start">
						<image class="icon" src="../../static/product/new/yuan.png" mode=""></image>
						<view class="text1">基金认购期</view>
					</view>
					<view class="text2">
						新发基金若募集超过限额，可能会提前结束募集并按末日比例配售，具体以基金公告为准
					</view>
				</view>
				<view class="item">
					<view class="flex-center-start">
						<image class="icon" src="../../static/product/new/yuan.png" mode=""></image>
						<view class="text1">基金成立</view>
					</view>
					<view class="text2">
						基金一般会在募集结束后的7个交易日内成立，成立后的下一个交易日可查看基金份额。
					</view>
				</view>
				<view class="item">
					<view class="flex-center-start">
						<image class="icon" src="../../static/product/new/yuan.png" mode=""></image>
						<view class="text1">基金封闭期</view>
					</view>
					<view class="text2">
						基金成立后，会有不超过3个月的封闭期(定期开放基金、封闭运作的基金等特殊品种除外)，基金会定期(一般每周最后一个交易日)公布净值，但不可申购或赎回，具体以基金公告为准。
					</view>
				</view>
				<view class="item" style="margin-bottom: 92rpx;">
					<view class="flex-center-start">
						<image class="icon" src="../../static/product/new/yuan.png" mode=""></image>
						<view class="text1">基金开放期</view>
					</view>
					<view class="text2">
						封闭期结束后，基金开放申购、赎回等业务(须满足持有期限制的基金、定期开放基金等特殊品种除外)，具体以基金公告为准。
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
				list:''
		    }
		},
		onLoad () {
			this.helper.post('index/fund_page',{type:6,limit:2},(res) => {
				this.list = res.data;
			})
		},
		methods:{
			jump (e) {
				uni.navigateTo({
					url:e
				})
			},
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.head{
			width: 100%;
			height: 468rpx;
			background-image: url(../../static/product/new/bg.png);
			background-repeat: no-repeat;
			background-size: 100%;
			.content{
				padding-left: 34rpx;
				overflow: hidden;
				.back{
					width: 16rpx;
					height: 29rpx;
					margin-top: 78rpx;
				}
				.title{
					font-size: 48rpx;
					font-weight: bold;
					color: #333333;
					margin-top: 35rpx;
				}
				.text_box{
					font-size: 24rpx;
					font-weight: 400;
					color: #333333;
					margin-top: 41rpx;
					.icon{
						width: 22rpx;
						height: 22rpx;
					}
				}
				.text{
					font-size: 32rpx;
					font-weight: 500;
					color: #333333;
					margin-top: 61rpx;
				}
			}
		}
		.middle{
			padding: 0 33rpx;
			margin-top: -50rpx;
			.item{
				width: 100%;
				height: 210rpx;
				background: #FFFFFF;
				box-shadow: 0px 0px 38rpx 0px rgba(204, 204, 204, 0.35);
				border-radius: 10rpx;
				margin-bottom: 25rpx;
				.title{
					width: 278rpx;
					height: 51rpx;
					background: #EEF2FE;
					border-radius: 0px 0px 30rpx 0px;
					font-size: 24rpx;
					font-weight: 400;
					color: #004EA3;
					text-align: center;
					line-height: 51rpx;
				}
				.content{
					padding: 0 33rpx;
					margin-top: 29rpx;
					.text1{
						font-size: 44rpx;
						font-weight: 500;
						color: #E2201E;
					}
					.text2{
						font-size: 26rpx;
						font-weight: 500;
						color: #E2201E;
						margin-top: 10rpx;
					}
					.text3{
						font-size: 32rpx;
						font-weight: bold;
						color: #333333;
						margin-left: 86rpx;
					}
					.text4{
						font-size: 26rpx;
						font-weight: 400;
						color: #E2201E;
					}
					.text5{
						height: 32rpx;
						background: #ECF2FE;
						border-radius: 16rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #19488A;
						text-align: center;
						line-height: 32rpx;
						padding: 0 24rpx;
					}
					.btn{
						width: 149rpx;
						height: 47rpx;
						background: #004EA3;
						border-radius: 24rpx;
						font-size: 26rpx;
						font-weight: 400;
						color: #FFFFFF;
						text-align: center;
						line-height: 47rpx;
					}
				}
			}
		}
		.bottom{
			width: 100%;
			background: #ECF2FE;
			overflow: hidden;
			.title{
				font-size: 32rpx;
				font-weight: 500;
				color: #004EA3;
				text-align: center;
				margin-top: 35rpx;
			}
			.content{
				padding-left: 28rpx;
				.item{
					margin-top: 43rpx;
					.icon{
						width: 18rpx;
						height: 18rpx;
					}
					.text1{
						font-size: 26rpx;
						font-weight: 500;
						color: #004EA3;
						margin-left: 26rpx;
					}
					.text2{
						width: 595rpx;
						font-size: 24rpx;
						font-weight: 400;
						color: #407DBF;
						margin-left: 27rpx;
						margin-left: 44rpx;
						margin-top: 20rpx;
					}
				}
			}
		}
	}
</style>