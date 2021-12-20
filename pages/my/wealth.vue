<template>
	<view class="page">
		<view class="head">
			<view class="head_title flex-center-center">
				<image @click="back()" class="icon" src="../../static/product/new/zuo.png" mode=""></image>
				<view class="title">积分转换</view>
				<navigator url="/pages/my/record/record" hover-class="none" class="text">交易记录</navigator>
			</view>
		</view>
		<view class="middle">
			<view class="content">
				<view class="item1 flex-center-start">
					<view class="text1">当前积分：</view>
					<view class="text2">{{integral}}</view>
				</view>
				<view class="item2">
					<view class="box1 flex-center-between">
						<input v-model="scort" class="text1" placeholder="请输入积分" />
						<view class="text2">兑换余额：{{scort * (integral_to_balance/100)}}</view>
					</view>
				</view>
				<view class="item3 flex-center-between">
					<view class="flex-center-start">
						<image class="icon" src="../../static/tips.png"></image>
						<view class="text1">积分兑换率：</view>
						<view class="text2">{{integral_to_balance}}积分可转换1元</view>
					</view>
					<view @click="scort = integral" class="text3">全部</view>
				</view>
				<view class="item4 flex-center-center">
					<view class="btn" @click="pay1()">确定转换</view>
				</view>
			</view>
			<view class="content2">
				<view class="text1">温馨提示：</view>
				<view class="text2">
					1、每{{integral_to_balance}}积分可兑换
				</view>
				<view class="text2">
					2、兑换的积分直接到帐余额。
				</view>
				<view class="text2">
					3、积分转换至少需要{{minimum_integral}}积分
				</view>
			</view>
		</view>
		<view class="popup notice_up" :class="{show: show_password}" @click="show_password = !show_password,password=[]">
			<view class="box">
				<view class="title">
					请输入支付密码
				</view>
				<view class="money">
					{{scort}}积分
				</view>
				<view class="nav flex-center">
					<view class="list flex-center-center" v-for="(row , i) in 6" :key="i">
						<view class="box-radius" v-if="password[i]">
						</view>
					</view>
				</view>
				<view class="submit" @click.stop="pay2()">
					确认
				</view>
			</view>
			<view class="number flex-center-between">
				<view class="list" v-for="(row , i) in number" :key="i" @click.stop="add(row,i)">
					{{row}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				integral:'',
				integral_to_balance:'',//积分转换余额比例:1积分=N元
				minimum_integral:'',//积分转化所需最低积分
				scort:'',
				number: ['1','2','3','4','5','6','7','8','9','清除','0','删除'],
				password: [],
				show_password: false,
		    }
		},
		onLoad (e) {
			this.integral = e.integral;
			this.integral_to_balance = e.integral_to_balance;
			this.minimum_integral = e.minimum_integral;
		},
		methods:{
			pay1 () {
				if(!this.scort) {
					this.helper.toast('请输入积分!')
					return
				}
				this.show_password = true;
			},
			pay2 () {
				let data = {
					paypwd:this.password.join(''),//	123456	string	否	密码
					out_int:this.scort,//	转出积分
				}
				this.helper.post('user/integral_out',data,(res) => {
					this.helper.toast(res.msg)
					setTimeout(()=>{
						uni.navigateBack()
					},1500)
				})
				
			},
			back() {
				uni.navigateBack()
			},
			add(row , i) {
				if(i == 9) {
					this.password = []
				}else if(i == 11) {
					this.password.pop()
				}else {
					if(this.password.length == 6) return
					this.password.push(row)
				}
			},
		}
	}
</script>

<style lang="scss" scoped>
.page{
	.head{
		width: 100%;
		height: 128rpx;
		background: #FFFFFF;
		overflow: hidden;
		border-bottom: 2rpx solid #F3F3F3;
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
				color: #343434;
			}
			.text{
				position: absolute;
				right: 29rpx;
				font-size: 24rpx;
				font-weight: 400;
			}
		}
	}
	.middle{
		padding: 0 32rpx;
		margin-top: 29rpx;
		.content{
			width: 100%;
			height: 405rpx;
			background: #FFFFFF;
			box-shadow: 0px 0px 10rpx 0px rgba(146, 146, 146, 0.24);
			border-radius: 10rpx;
			overflow: hidden;
			.item1{
				font-size: 28rpx;
				padding: 0 24rpx;
				margin-top: 26rpx;
				.text1{
					color: #343434;
				}
				.text2{
					color: #EB2020;
				}
			}
			.item2{
				padding: 0 20rpx;
				.box1{
					width: 100%;
					height: 100rpx;
					border-bottom: 2rpx solid #EBEBEB;
					.text1{
						font-size: 54rpx;
						font-weight: 400;
						color: #343434;
						width: 50%;
					}
					.text2{
						font-size: 28rpx;
						font-weight: 400;
						color: #343434;
					}
				}
			}
			.item3{
				padding: 0 29rpx;
				margin-top: 21rpx;
				.icon{
					width: 30rpx;
					height: 30rpx;
				}
				.text1{
					font-size: 26rpx;
					font-weight: 400;
					color: #999999;
					margin-left: 15rpx;
				}
				.text2{
					font-size: 26rpx;
					font-weight: 400;
					color: #E93737;
				}
				.text3{
					font-size: 28rpx;
					font-weight: 400;
					color: #33A1F6;
				}
			}
			.item4{
				margin-top: 57rpx;
				.btn{
					width: 540rpx;
					height: 80rpx;
					background: #004EA3;
					border-radius: 10rpx;
					font-size: 32rpx;
					font-weight: 400;
					color: #FFFFFF;
					text-align: center;
					line-height: 80rpx;
				}
			}
		}
		.content2{
			margin-top: 83rpx;
			.text1{
				font-size: 26rpx;
				font-weight: 400;
				color: #EB2D2D;
				margin-bottom: 20rpx;
			}
			.text2{
				font-size: 26rpx;
				font-weight: 400;
				color: #9B9B9B;
				margin-top: 10rpx;
			}
		}
	}
	.popup{
		.box{
			width: 540upx;
			height: 500upx;
			background: #ffffff;
			border-radius: 10upx;
			margin: 0 auto;
			margin-top: 300upx;
			text-align: center;
			padding: 30upx;
			overflow: hidden;
			.title{
				font-size: 32upx;
			}
			.money{
				margin-top: 40upx;
				font-size: 60upx;
				&::before{
					content: "";
					font-size: 50upx;
				}
			}
			.nav{
				margin-top: 60upx;
				height: 70upx;
				border-radius: 10upx;
				border: 2upx solid #535353;
				.list{
					height: 70upx;
					border-right: 2upx solid #989898;
					width: 16.66666%;
					&:last-child{
						border-right: none;
					}
					.box-radius{
						width: 20upx;
						height: 20upx;
						border-radius: 50%;
						background: #000000;
					}
				}
			}
			.submit{
				margin: 0 auto;
				margin-top: 60upx;
				width: 360upx;
				height: 70upx;
				line-height: 70upx;
				border-radius: 10upx;
				background: #3B8AED;
				color: #ffffff;
				text-align: center;
				font-size: 32upx;
			}
		}
		.number{
			flex-wrap: wrap;
			position: absolute;
			bottom: 0;
			width: 100%;
			background: #ffffff;
			.list{
				height: 90upx;
				line-height: 90upx;
				width: 33.333%;
				font-size: 32upx;
				box-sizing: border-box;
				border-right: 2upx solid #cccccc5c;
				border-bottom: 2upx solid #cccccc5c;
			}
		}
		.profit_box{
			width: 600upx;
			border-radius: 10upx;
			padding: 40upx 30upx;
			background: #ffffff;
			margin: 0 auto;
			margin-top: 40%;
			.title{
				font-size: 36upx;
			}
			.item{
				margin-top: 50upx;
				align-items: flex-start;
				text-align: left;
				.left{
					width: 210upx;
				}
				.right{
					color: #666666;
				}
			}
		}
		.icon_close{
			width:60upx;
			height: 60upx;
			margin-top: 20upx;
		}
	}
}
</style>