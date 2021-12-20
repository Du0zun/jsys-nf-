<template>
	<view class="page">
		<view class="head">
			<view class="head_title flex-center-center">
				<image @click="back()" class="icon" src="../../../static/team/back.png" mode=""></image>
				<view class="title">团队业绩</view>
				<navigator url="/pages/my/record/record" hover-class="none" class="text">交易记录</navigator>
			</view>
			<view class="box1 flex-center-center">
				<view>
					<view class="text1">{{team_balance}}</view>
					<view class="text2">团队余额(元)</view>
				</view>
			</view>
			<view class="box2">
				<view class="content flex-center-between">
					<view class="item">
						<view class="text1">{{team_capital_flow}}</view>
						<view class="text2">团队流水(元)</view>
					</view>
					<view class="item">
						<view class="text1">{{team_total_recharge}}</view>
						<view class="text2">团队总充值(元)</view>
					</view>
					<view class="item">
						<view class="text1">{{team_total_withdrawal}}</view>
						<view class="text2">团队总提现(元)</view>
					</view>
				</view>
			</view>
		</view>
		<view class="middle">
			<view class="content flex-center-start">
				<view style="border-right: 2rpx solid #DBDBDB;" class="item flex-center-between">
					<view class="text1">团队订单佣金</view>
					<view class="text2">{{team_order_commission}} 元</view>
				</view>
				<view class="item flex-center-between">
					<view class="text1">活跃人数</view>
					<view class="text3">{{active_user_count}} 人</view>
				</view>
				<view style="border-right: 2rpx solid #DBDBDB;background: rgb(246,246,246)" class="item flex-center-between">
					<view class="text1">首充人数</view>
					<view class="text2">{{first_charge_count}} 人</view>
				</view>
				<view class="item flex-center-between" style="background: rgb(246,246,246)">
					<view class="text1">直推人数</view>
					<view class="text3">{{direct_push_count}} 人</view>
				</view>
				<view style="border-right: 2rpx solid #DBDBDB;" class="item flex-center-between">
					<view class="text1">团队人数</view>
					<view class="text2">{{teams_count}} 人</view>
				</view>
				<view class="item flex-center-between">
					<view class="text1">新增人数</view>
					<view class="text3">{{new_user_count}} 人</view>
				</view>
				<!-- <view class="item_box"> -->
				<!-- 	<view class="item flex-center-between">
						<view class="text1">团队订单佣金</view>
						<view class="text2">{{team_order_commission}} 元</view>
					</view>
					<view class="item flex-center-between">
						<view class="text1">首充人数</view>
						<view class="text3">{{first_charge_count}} 人</view>
					</view>
					<view class="item flex-center-between">
						<view class="text1">直推人数</view>
						<view class="text3">{{direct_push_count}} 人</view>
					</view>
					<view class="item flex-center-between">
						<view class="text1">团队人数</view>
						<view class="text3">{{teams_count}} 人</view>
					</view>
					<view class="item flex-center-between">
						<view class="text1">新增人数</view>
						<view class="text3">{{new_user_count}} 人</view>
					</view>
					<view class="item flex-center-between">
						<view class="text1">活跃人数</view>
						<view class="text3">{{active_user_count}} 人</view>
					</view>
				</view> -->
			</view>
		</view>
		<view class="bottom">
			<view class="content">
				<view class="tag_box flex-center-between">
					<view @click="change_level(1)" :class="{choose_tag:choose_level == 1}" class="tag flex-center-center">Lv1成员</view>
					<view @click="change_level(2)" :class="{choose_tag:choose_level == 2}" class="tag flex-center-center">Lv2成员</view>
					<!-- <view @click="choose_level = 3" :class="{choose_tag:choose_level == 3}" class="tag flex-center-center">Lv3成员</view> -->
				</view>
				<view class="item_box">
					<view v-for="(row,i) in list" :key="i" class="item flex-center-between">
						<view class="flex-center-start">
							<image class="icon" :src="'../../../static/tabbar/head_' + row.picImg +'.png'" mode=""></image>
							<view>
								<view class="text1">用户名：{{row.nickname}}</view>
								<view class="text2">手机号：{{row.username}}</view>
							</view>
						</view>
						<view class="text3">{{row.created_data}}</view>
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
				choose_level:1,
				list:[],
				page:0,
				last_page:1,
				team_balance:'',//	367481.8000	Number	团队余额
				team_capital_flow:'',//	10047976.8501	Number	团队流水
				team_total_recharge:'',//	10096016.8501	Number	团队总充值
				team_total_withdrawal:'',//	100.0000	Number	团队总提现
				team_order_commission:'',//	186.00	Number	团队订单佣金
				first_charge_count:'',//	3	Number	首充人数
				direct_push_count:'',//	13	Number	直推人数
				teams_count:'',//	18	Number	团队人数
				new_user_count:'',//	0	Number	新增人数
				active_user_count:'',//	0	Number	活跃人数

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
			back(){
				uni.navigateBack()
			},
			change_level (e) {
				this.choose_level = e;
				this.list = [];
				this.page = 0;
				this.last_page = 1;
				this.loadData();
			},
			loadData () {
				this.page ++ 
				if (this.page > this.last_page) {
					return;
				}
				this.helper.post('user/teamReport',{page:this.page,level:this.choose_level},(res) => {
					this.team_balance = res.data.team_balance
					this.team_capital_flow = res.data.team_capital_flow;
					this.team_total_recharge = res.data.team_total_recharge;
					this.team_total_withdrawal = res.data.team_total_withdrawal;
					this.team_order_commission = res.data.team_order_commission;
					this.first_charge_count = res.data.first_charge_count;
					this.direct_push_count = res.data.direct_push_count;
					this.teams_count = res.data.teams_count;
					this.new_user_count = res.data.new_user_count;
					this.active_user_count = res.data.active_user_count;
					this.list.push(...res.data.level_info.data)
					this.last_page = res.data.level_info.last_page;
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		overflow: auto;
		.head{
			width: 100%;
			height: 526rpx;
			background-image: url(../../../static/team/bg.png);
			background-repeat: no-repeat;
			background-size: 100%;
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
				.text{
					position: absolute;
					right: 29rpx;
					top: 18rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
			.box1{
				margin-top: 77rpx;
				text-align: center;
				.text1{
					font-size: 46rpx;
					font-weight: 400;
					color: #FFFFFF;
				}
				.text2{
					font-size: 26rpx;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
			.box2{
				margin-top: 60rpx;
				padding: 0 55rpx;
				.content{
					.item{
						color: #FFFFFF;
						text-align: center;
						.text1{
							font-size: 32rpx;
							font-weight: 400;
							color: #FFFFFF;
						}
						.text2{
							font-size: 22rpx;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
				}
			}
		}
		.middle{
			padding: 0 30rpx;
			margin-top: -64rpx;
			.content{
				width: 100%;
				height: 246rpx;
				background: #FFFFFF;
				box-shadow: 0px 2rpx 8rpx 0px #DBDBDB;
				border-radius: 10rpx;
				overflow: hidden;
				flex-wrap: wrap;
				align-items: flex-start;
				.item{
					width: 49.8%;
					height: 33.3%;
					.text1{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
						margin-left: 14rpx;
					}
					.text2{
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
						margin-right: 20rpx;
					}
					.text3{
						font-size: 28rpx;
						font-weight: 400;
						color: #F23F5C;
						margin-right: 20rpx;
					}
				}
			}
		}
		.bottom{
			padding: 0 34rpx;
			margin-top: 28rpx;
			margin-bottom: 153rpx;
			.content{
				width: 100%;
				background: #FFFFFF;
				box-shadow: 0px 2rpx 8rpx 0px #DBDBDB;
				border-radius: 10rpx;
				.tag_box{
					.tag{
						height: 84rpx;
						width: 50%;
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
						border-bottom: 2rpx solid #DBDBDB;
						text-align: center;
					}
					.choose_tag{
						font-size: 28rpx;
						font-weight: 400;
						color: #004EA3;
						border-bottom: 8rpx solid #004EA3;
					}
				}
				.item_box{
					padding-left: 35rpx;
					.item{
						height: 142rpx;
						border-bottom: 2rpx solid #EBEBEB;
						.icon{
							width: 80rpx;
							height: 80rpx;
							border-radius: 40rpx;
							margin-right: 29rpx;
						}
						.text1{
							font-size: 28rpx;
							font-weight: 400;
							color: #333333;
						}
						.text2{
							font-size: 26rpx;
							font-weight: 400;
							color: #989898;
						}
						.text3{
							font-size: 26rpx;
							font-weight: 400;
							color: #333333;
							margin-right: 31rpx;
						}
					}
				}
			}
		}
	}
</style>