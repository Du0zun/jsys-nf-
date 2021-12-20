<template>
	<view class="page">
		<view class="head">
			<view @click="logout()" class="exit flex-center-start">
				<image class="icon" src="../../static/my/exit.png"></image>
				<view>退出</view>
			</view>
			<view class="user_box flex-center-between" @click="jump('/pages/my/setting/setting')">
				<view class="flex-center-start">
					<image :src="'../../static/tabbar/head_' + user_data.picImg + '.png'" class="head_img"></image>
					<view>
						<view class="flex-center-start">
							<view class="text1">{{user_data.mobile}}</view>
							<view v-if="user_data.is_check != 2" class="text2">未实名</view>
						</view>
						<view @click.stop="jump('/pages/my/authentication')" v-if="user_data.is_check != 2" class="text3">点击进行实名认证</view>
						<view v-if="user_data.is_check == 2" class="text3" style="color: #52c63b;">当前实名已认证</view>
					</view>
				</view>
				<image class="you" src="../../static/my/you.png"></image>
			</view>
			<view class="box flex-center-between">
				<view class="item">
					<view class="text1">银行卡</view>
					<view class="text2">{{user_data.total_bank}}</view>
				</view>
				<view class="item">
					<view class="text1">积分</view>
					<view class="text2">{{user_data.integral}}</view>
				</view>
				<view class="item">
					<view class="text1">余额
						<!-- <view class="dian"></view> -->
					</view>
					<view class="text2">{{user_data.amount}}</view>
				</view>
			</view>
		</view>
		<view class="btn_box1 flex-center-between">
			<view class="item" @click="sign()">
				<image class="icon" src="../../static/my/qd.png"></image>
				<view>签到</view>
			</view>
			<navigator :url="'/pages/my/recharge?amount=' + user_data.amount" hover-class="none" class="item">
				<image class="icon" src="../../static/my/cz.png"></image>
				<view>充值</view>
			</navigator>
			<navigator :url="'/pages/my/withdraw?amount='+ user_data.amount" hover-class="none" class="item">
				<image class="icon" src="../../static/my/tx.png"></image>
				<view>提现</view>
			</navigator>
			<navigator url="/pages/my/setting/setting" hover-class="none" class="item">
				<image class="icon" src="../../static/my/set.png"></image>
				<view>设置</view>
			</navigator>
		</view>
		<view class="money_box">
			<view class="content">
				<view class="flex-center-between item1">
					<view class="flex-center-start">
						<view>总资产(元)</view>
						<image @click="look = !look" v-if="!look" class="eyy" src="../../static/my/eyy.png"></image>
						<image @click="look = !look" v-if="look" style="height: 22rpx;" class="eyy" src="../../static/my/eyy2.png"></image>
					</view>
					<view>收益(元)</view>
				</view>
				<view class="flex-center-between item2">
					<view>{{look?user_data.lc_amount:'****'}}</view>
					<view>{{look?user_data.moneylog_moneys:'****'}}</view>
				</view>
			</view>
		</view>
		<view class="btn_box2 flex-center-start">
			<navigator url="/pages/home/team/team" hover-class="none" class="item">
				<image src="../../static/my/tdyj.png" class="icon"></image>
				<view>团队业绩</view>
			</navigator>
			<navigator :url="'/pages/my/wealth?integral=' + user_data.integral + '&integral_to_balance=' + user_data.integral_to_balance + '&minimum_integral=' + user_data.minimum_integral" hover-class="none" class="item">
				<image src="../../static/my/hz.png" class="icon"></image>
				<view>积分转换</view>
			</navigator>
			<navigator url="/pages/home/share/share" hover-class="none" class="item">
				<image src="../../static/my/yqhy.png" class="icon"></image>
				<view>邀请好友</view>
			</navigator>
			<navigator url="/pages/my/bank/bank" hover-class="none" class="item">
				<image src="../../static/my/tjyhk.png" class="icon"></image>
				<view>添加银行卡</view>
			</navigator>
			<navigator url="/pages/my/my_fund/my_fund" hover-class="none" class="item">
				<image src="../../static/my/symx.png" class="icon"></image>
				<view>我的基金</view>
			</navigator>
			<navigator url="/pages/my/record/record" hover-class="none" class="item">
				<image src="../../static/my/jyjl.png" class="icon"></image>
				<view>交易记录</view>
			</navigator>
			<navigator url="/pages/my/team_rank" hover-class="none" class="item">
				<image src="../../static/my/tdpm.png" class="icon"></image>
				<view>团队排名</view>
			</navigator>
			<view @click="kefu()" class="item">
				<image src="../../static/my/kf2.png" class="icon"></image>
				<view>客服</view>
			</view>
		</view>
		<view class="flex-center-center">
			<image class="logo" src="../../static/my/logo.png"></image>
		</view>
		<view class="flex-center-center" style="font-size: 24rpx;">
			嘉实云盛APP已通过中国网络安全审查技术与认证中心
		</view>
		<view class="flex-center-center" style="font-size: 24rpx;margin-top: 10rpx;">
			（CCRC）移动互联网应用程序安全认证
		</view>
		<view class="flex-center-center hint">
			<view class="xian"></view>
			<view style="margin-left: 12rpx;margin-right: 12rpx;">托付嘉实云盛·成就梦想</view>
			<view class="xian"></view>
		</view>
		<view v-if="sign_type" class="Sign_box flex-center-center">
			<image class="sign_img" src="../../static/my/qd2.png"></image>
			<view class="content">
				<view class="flex-center-center text1">
					<view>累计签到</view>
					<view style="color: #4284FD;">{{total_qiandao}}</view>
					<view>天</view>
				</view>
				<view class="flex-center-center text2">积分+{{user_data.sys_qiandao}}</view>
				<view class="flex-center-center">
					<view @click="sign_type = !sign_type" class="btn">确定</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				attest:false,
				look:false,
				sign_type:false,
				user_data:'',
				total_qiandao:'',
				getImLink:''
		    }
		},
		onShow () {
			uni.setStorageSync("product", 1);
			this.loadData();
		},
		onPullDownRefresh() {
			this.loadData();
		},
		onLoad() {
			this.helper.post('user/getImLink',{},(res) => {
				this.getImLink = res.data;
			})
		},
		methods:{
			kefu () {
				this.jump('/pages/my/kefu?link=' + this.getImLink)
				//#ifdef H5
				window.open(this.getImLink)
				//#endif
				//#ifdef APP
				this.jump('/pages/my/kefu?link=' + this.getImLink)
				//#endif
			},
			loadData () {
				this.helper.post('user/index',{},(res) => {
					this.user_data = res.data;
					uni.stopPullDownRefresh();
				})
			},
			sign () {
				this.helper.post('user/qiandao',{},(res) => {
					this.helper.toast(res.msg);
					this.total_qiandao = res.data.total_qiandao;
					this.sign_type = true
				})
			},
			jump (e) {
				uni.navigateTo({
					url:e
				})
			},
			logout() {
				this.helper.removeUser()
				uni.redirectTo({
					url:'/pages/login/login'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.head{
			overflow: hidden;
			width: 100%;
			height: 445rpx;
			background: linear-gradient(-35deg, #FDF4F7, #F4F4FE, #F5F1F2);
			.exit{
				float: right;
				margin-top: 49rpx;
				margin-right: 33rpx;
				.icon{
					width: 40rpx;
					height: 39rpx;
					margin-right: 7rpx;
				}
			}
			.user_box{
				margin-top: 124rpx;
				padding: 0 30rpx;
				.head_img{
					width: 115rpx;
					height: 115rpx;
					margin-right: 36rpx;
				}
				.you{
					width: 16rpx;
					height: 29rpx;
				}
				.text1{
					font-size: 42rpx;
					font-family: Source Han Sans CN;
					font-weight: 800;
					color: #333333;
				}
				.text2{
					font-size: 24rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #999999;
					margin-left: 46rpx;
					margin-top: 20rpx;
				}
				.text3{
					width: 245rpx;
					height: 45rpx;
					background: #EDEDED;
					border-radius: 23rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #666666;
					line-height: 45rpx;
					text-align: center;
					margin-top: 12rpx;
				}
			}
			.box{
				padding: 0 80rpx;
				margin-top: 58rpx;
				.item{
					text-align: center;
					.text1{
						font-size: 24rpx;
						font-weight: 400;
						color: #999999;
						position: relative;
						.dian{
							width: 14rpx;
							height: 14rpx;
							background: #F91414;
							border-radius: 50%;
							position: absolute;
							right: -10rpx;
							top: -6rpx;
						}
					}
					.text2{
						font-size: 48rpx;
						font-weight: 400;
						color: #333333;
						margin-top: 14rpx;
					}
				}
			}
		}
		.btn_box1{
			padding: 0 68rpx;
			margin-top: 34rpx;
			.item{
				font-size: 24rpx;
				font-weight: 400;
				color: #343434;
				text-align: center;
				.icon{
					width: 53rpx;
					height: 53rpx;
					margin-bottom: 15rpx;
				}
			}
		}
		.money_box{
			padding: 0 33rpx;
			margin-top: 40rpx;
			margin-bottom: 72rpx;
			.content{
				width: 100%;
				height: 179rpx;
				background: linear-gradient(90deg, #AEBAD2 0%, #7D90BB 100%);
				border-radius: 16rpx;
				overflow: hidden;
				.item1{
					color: #FFFEFC;
					margin-top: 43rpx;
					padding: 0 33rpx;
					.eyy{
						width: 25rpx;
						height: 11rpx;
						margin-left: 22rpx;
					}
				}
				.item2{
					padding: 0 33rpx;
					margin-top: 22rpx;
					font-size: 40rpx;
					font-family: Source Han Sans CN;
					font-weight: bold;
					color: #FFFFFF;
				}
				
			}
		}
		.btn_box2{
			flex-wrap: wrap;
			.item{
				width: 25%;
				font-size: 24rpx;
				font-family: Source Han Sans CN;
				font-weight: 400;
				color: #343434;
				text-align: center;
				margin-bottom: 57rpx;
				.icon{
					width: 53rpx;
					height: 53rpx;
					margin-bottom: 15rpx;
				}
			}
		}
		.logo{
			width: 181rpx;
			height: 102rpx;
			margin-bottom: 36rpx;
		}
		.hint{
			font-size: 24rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #B3B3B3;
			margin-top: 45rpx;
			margin-bottom: 22rpx;
			.xian{
				width: 85rpx;
				height: 2rpx;
				background: #BFBFBF;
			}
		}
		.Sign_box{
			width: 100%;
			height: 100vh;
			background-color: rgba(0, 0, 0, 0.5);
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
			flex-direction: column;
			.sign_img{
				height: 400rpx;
				width: 530rpx;
			}
			.content{
				width: 530rpx;
				height: 540rpx;
				background: #FFFFFF;
				border-radius: 0px 0px 30rpx 30rpx;
				.text1{
					margin-top: 88rpx;
					font-size: 51rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #000000;
				}
				.text2{
					font-size: 44rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #4284FD;
					margin-top: 77rpx;
				}
				.btn{
					width: 296rpx;
					height: 88rpx;
					background: #4284FD;
					border-radius: 44rpx;
					font-size: 40rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #FFFFFF;
					text-align: center;
					line-height: 88rpx;
					margin-top: 115rpx;
				}
			}
		}
		
	}
</style>