<template>
	<view class="page">
		<view class="head">
			<view class="head_title flex-center-center">
				<image @click="back()" class="icon" src="../../static/product/new/zuo.png" mode=""></image>
				<view class="title">提现</view>
				<navigator url="/pages/my/record/record" hover-class="none" class="text">交易记录</navigator>
			</view>
		</view>
		<view class="big_box">
			<view class="box1 ">
				<navigator url="bank/bank" hover-class="none" class="content flex-center-between">
					<view class="item">
						<view >{{bank.bankname?bank.bankname:'请去添加银行卡'}}</view>
						<view >{{bank.hidden_code?bank.hidden_code:'请去添加银行卡'}}</view>
					</view>
					<image class="icon" src="../../static/my/you2.png"></image>
				</navigator>
			</view>
			<view class="box2">
				<view class="content1 flex-center-start">
					<view>帐户余额：</view>
					<view class="text1">{{amount}}</view>
				</view>
				<view class="content2">
					<view class="item flex-center-start">
						<view class="text2">￥</view>
						<input v-model="money" class="text3" placeholder="请输入金额" />
					</view>
				</view>
				<view class="flex-center-center">
					<view @click="submit()" class="btn">我要提现</view>
				</view>
			</view>
			<view class="hint">温馨提示：</view>
			<rich-text style="color: #9B9B9B;" :nodes="list"></rich-text>
		</view>
		<view class="popup notice_up" :class="{show: show_password}" @click="show_password = !show_password,password=[]">
			<view class="box">
				<view class="title">
					请输入支付密码
				</view>
				<view class="money">
					{{money}}元
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
				list: "1、在写PRD需求时，我们总会遇到各种各样的坑，",
				number: ['1','2','3','4','5','6','7','8','9','清除','0','删除'],
				password: [],
				show_password: false,
				bank:'',
				amount:'',
				money:''
		    }
		},
		onLoad (e) {
			this.amount = e.amount;
			this.helper.post('user/banks',{type:1},(res) => {
				this.bank = res.data;
			})
		},
		methods:{
			submit () {
				if(!this.money) {
					this.helper.toast('请输入金额!')
					return
				}
				// if(!this.bank.bankname) {
				// 	this.helper.toast('请去添加银行卡!')
				// 	return
				// }
				this.show_password = true
			},
			pay2 () {
				let data = {
					paypwd:this.password.join(''),//	123456	string	否	密码
					amount:this.money,//	120	string	否	金额
					bankid:this.bank.id,//	18194	string	否	暂无描述
				}
				this.helper.post('user/withdraw',data,(res) => {
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
		.big_box{
			padding: 0 32rpx;
			.box1{
				margin-top: 24rpx;
				width: 100%;
				height: 127rpx;
				background: linear-gradient(90deg, #030000, #515151);
				box-shadow: 0px 0px 10rpx 0px rgba(146, 146, 146, 0.24);
				border-radius: 10rpx;
				.content{
					height: 100%;
					padding: 0 49rpx;
					.item{
						font-size: 28rpx;
						font-weight: 400;
						color: #FFFFFF;
					}
					.icon{
						width: 17rpx;
						height: 30rpx;
					}
				}
			}
			.box2{
				margin-top: 26rpx;
				width: 100%;
				background: #FFFFFF;
				box-shadow: 0px 0px 10rpx 0px rgba(146, 146, 146, 0.24);
				border-radius: 10rpx;
				overflow: hidden;
				.content1{
					font-size: 28rpx;
					font-weight: 400;
					color: #343434;
					margin-top: 27rpx;
					margin-left: 33rpx;
					.text1{
						font-size: 28rpx;
						font-weight: 400;
						color: #EB2020;
					}
				}
				.content2{
					padding: 0 36rpx;
					margin-top: 51rpx;
					.item{
						border-bottom: 2rpx solid #EBEBEB;
						.text2{
							font-size: 28rpx;
							font-weight: 400;
							color: #343434;
							margin-top: 20rpx;
						}
						.text3{
							font-size: 54rpx;
							font-weight: 400;
							color: #343434;
						}
					}
				}
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
					margin-top: 78rpx;
					margin-bottom: 45rpx;
				}
			}
			.hint{
				font-size: 26rpx;
				font-weight: 400;
				color: #EB2D2D;
				margin-top: 57rpx;
				margin-bottom: 37rpx;
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
					content: "￥";
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