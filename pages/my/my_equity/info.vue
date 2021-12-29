<template>
	<view class="pay_detail  page-column">
		<view class="head">
			<view class="title">
				{{list.title}}
			</view>
			<view class="company">
				金额(元)
			</view>
			<view class="money">
				{{list.qtje}}
			</view>
			<view class="type">
				{{list.status}}
			</view>
		</view>
		<view class="center">
			<view class="title">
				确认信息
			</view>
			<view class="list flex-center-between">
				<view class="list-title">
					产品名称：
				</view>
				<view class="msg">
					{{list.title}}
				</view>
			</view>
			<view class="list flex-center-between">
				<view class="list-title">
					金额：
				</view>
				<view class="msg">
					{{list.qtje}}元
				</view>
			</view>
			<view class="list flex-center-between">
				<view class="list-title">
					时间：
				</view>
				<view class="msg">
					{{list.useritem_time}}
				</view>
			</view>
			<view class="list flex-center-between">
				<view class="list-title">
					产品来源：
				</view>
				<view class="msg">
					{{list.from_uid !=0?'转入':'购买'}}
					<!-- 购买?转入 -->
				</view>
			</view>
			<!-- <view class="list flex-center-between">
				<view class="list-title">
					购入价：
				</view>
				<view class="msg">
					{{list.amount}}
				</view>
			</view> -->
			<view class="list flex-center-between" v-if="list.shijian != 99999">
				<view class="list-title">
					产品期限：
				</view>
				<view class="msg">
					<!-- {{list.shijian}}{{list.qxdw}} -->
					asdasd
				</view>
			</view>
			<view class="list flex-center-between" v-if="list.reason">
				<view class="list-title">
					备注：
				</view>
				<view class="msg">
					<!-- {{list.reason}} -->
					asdasd
				</view>
			</view>
			<!-- <view class="list flex-center-between" v-if="list.ft_amount != 0">
				<view class="list-title">
					复投金额：
				</view>
				<view class="msg">
					{{list.ft_amount}}
				</view>
			</view>
			<view class="list flex-center-between" v-if="list.ft_amount != 0">
				<view class="list-title">
					复投状态：
				</view>
				<view class="msg">
					{{!list.ft_reason?'审核中':'失败:'+list.ft_reason}}
				</view>
			</view> -->
			<!-- <view class="list flex-center-between">
				<view class="list-title">
					订单号：
				</view>
				<view class="msg">
					54452254512255411552
				</view>
			</view> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: {}
			};
		},
		onLoad(e) {
			this.list = JSON.parse(e.data)
		}
	}
</script>

<style lang="scss" scoped>
.pay_detail{
	background: #EFEFEF;
	.head{
		margin: 24upx 30upx;
		padding: 0 30upx;
		background: #ffffff;
		text-align: center;
		border-radius: 10upx;
		.title{
			text-align: left;
			height: 90upx;
			line-height: 90upx;
			font-size: 32upx;
			border-bottom: 2upx solid #F0F0F0;
		}
		.company{
			padding: 30upx 0;
		}
		.money{
			font-size: 50upx;
		}
		.type{
			padding: 35upx 0;
		}
	}
	.center{
		margin: 24upx 30upx;
		padding: 20upx 30upx;
		background: #ffffff;
		text-align: center;
		border-radius: 10upx;
		.title{
			padding: 20upx 0;
			font-size: 32upx;
			text-align: left;
		}
		.list{
			padding: 20upx 0;
			font-size: 28upx;
			.list-title{
				color: #666666;
			}
		}
	}
}
</style>
