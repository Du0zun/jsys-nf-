<template>
	<view class="detail-info">
		<view class="head">
			<view class="title">
				{{data.title}}
			</view>
			<view class="detail">
				<view>股权资产</view>
				<view class="money">￥{{totalAmount}}</view>
				<view>购入数量(股)：{{data.nums}}</view>
			</view>
		</view>
		<view class="content" v-for="(row , i) in list" :key="i" >
			<view v-if="row.currlog_type == 0">
				<view class="title">
					确认信息
					<view class="status" v-if="row.status != 1">
						{{row.statusname}}
					</view>
					<view class="status2" v-if="row.status == 1">
						{{row.statusname}}
					</view>
				</view>
				<view class="list flex-center-between">
					<view class="detail-title">买入产品：</view>
					<view>
						{{row.title}}
					</view>
				</view>
				<view class="list flex-center-between">
					<view class="detail-title">买入总金额：</view>
					<view>
						{{row.amount}}
					</view>
				</view>
				<view class="list flex-center-between">
					<view class="detail-title">买入时间：</view>
					<view>
						{{row.useritem_time}}
					</view>
				</view>
				<view class="list flex-center-between">
					<view class="detail-title">购买数量：</view>
					<view>
						{{row.num}}个
					</view>
				</view>
				<!-- <view class="list" style="text-align: center;">
					<view>
						{{row.statusname}}
					</view>
				</view> -->
				<!-- <view class="list flex-center-between">
					<view class="detail-title">订单号：</view>
					<view>
						{{row.order}}
					</view>
				</view> -->
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [],
				data:'',
				page: 1,
				last_page:1,
				totalAmount:'',
			};
		},
		onLoad(e) {
			this.data = JSON.parse(e.data);
			console.log('传入的数据',this.data)
			this.LoadData();
		},
		onReachBottom () {
			console.log('到底了')
			this.LoadData()
		},
		methods: {
			LoadData () {
				if (this.page > this.last_page) return;
				this.helper.post('user/money/myProduct_detail/' + this.data.productid,{page:this.page,pid:this.data.id},(res) => {
					console.log('详细数据2',res)
					this.totalAmount = res.totalAmount;
					if (res.data.data && res.data.data.length>0) {
						this.page++;
						this.last_page = res.data.last_page;
						this.list.push(...res.data.data);
					}
					uni.stopPullDownRefresh();
				})
			}
		},
	}
</script>

<style lang="scss" scoped>
.detail-info{
	.head{
		margin: 24upx;;
		margin-top:  0 30upx;;
		padding:  0 30upx;;
		background: #ffffff;
		border-radius: 10upx;
		.title{
			height: 90upx;
			line-height: 90upx;
			font-size: 32upx;
			border-bottom: 2upx solid #F5F5F5;
		}
		.detail{
			padding: 40upx 0;
			text-align: center;
			font-size: 26upx;
			.money{
				line-height: 2;
				font-size: 50upx;
				font-weight: bold;
			}
		}
	}
	.content{
		margin: 24upx;;
		margin-top:  0 30upx;;
		padding:  0 30upx;;
		background: #ffffff;
		border-radius: 10upx;
		.title{
			height: 90upx;
			line-height: 90upx;
			font-size: 32upx;
			font-weight: bold;
		}
		.list{
			height: 80upx;
			line-height: 80upx;
			.detail-title{
				color: #666666;
			}
		}
	}
	.status{
		width: 172rpx;
		position: relative;
		top: -80rpx;
		left: 488rpx;
		border: 1px solid red;
		border-radius: 10rpx;
		text-align: center;
		height: 62rpx;
		color: red;
		line-height: 62rpx;
	}
	.status2{
		width: 172rpx;
		position: relative;
		top: -80rpx;
		left: 488rpx;
		border: 1px solid #2B85E4;
		border-radius: 10rpx;
		text-align: center;
		height: 62rpx;
		color: #2B85E4;
		line-height: 62rpx;
	}
}
</style>
