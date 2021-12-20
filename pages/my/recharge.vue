<template>
	<view class="page">
		<view class="head">
			<view class="head_title flex-center-center">
				<image @click="back()" class="icon" src="../../static/product/new/zuo.png" mode=""></image>
				<view class="title">充值</view>
				<navigator url="/pages/my/record/record" hover-class="none" class="text">交易记录</navigator>
			</view>
		</view>
		<view class="middle">
			<view class="content">
				<view class="item1 flex-center-start">
					<view class="title1">帐户余额：</view>
					<view class="title2">{{amount}}</view>
				</view>
				<view class="item2 flex-center-start">
					<view class="title1">￥</view>
					<input class="title2" v-model="money" placeholder="请输入金额"/>
					<!-- <view class="title2">0.00</view> -->
				</view>
			</view>
		</view>
		<view class="bottom">
			<view class="content">
				<view class="item">
					<view class="box flex-center-between">
						<view class="flex-center-start">
							<image class="icon" src="../../static/bank.png" mode=""></image>
							<view class="text1">{{bank.bankname}}</view>
						</view>
						<view class="kuang flex-center-center">
							<view class="dian"></view>
						</view>
					</view>
					<view class="box flex-center-between">
						<view class="text2">收款户名</view>
						<view class="text3">{{bank.bankrealname}}</view>
					</view>
					<view class="box flex-center-between">
						<view class="text2">开户银行</view>
						<view class="text3">{{bank.bankname}}</view>
					</view>
					<view class="box flex-center-between">
						<view class="text2">银行卡号</view>
						<view class="text3">{{bank.bankcode}}</view>
					</view>
					<view class="text4">上传支付凭证</view>
					<image  @click="upload_img()" class="icon2" :src="upload == '../../static/upload2.png'?upload:helper.uploadUrl + upload"></image>
				</view>
				<view class="flex-center-center">
					<view @click="submit()" class="btn">已完成支付</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				amount:'',
				bank:'',
				money:'',
				upload:'../../static/upload2.png',
		    }
		},
		onLoad (e) {
			this.amount = e.amount;
			this.helper.post('user/sysAccount',{},(res) => {
				console.log('银行数据',res)
				this.bank = res.data;
			})
		},
		methods:{
			submit () {
				if(!this.amount) {
					this.helper.toast('请输入金额!')
					return
				}
				if(this.upload == '../../static/upload2.png') {
					this.helper.toast('请上传凭证!')
					return
				}
				let data = {
					amount:this.money,
					paymentid:3,
					payimg:this.upload,
				}
				this.helper.post('user/recharge',data,(res) => {
					this.helper.toast(res.msg)
					setTimeout(()=>{
						uni.navigateBack()
					},1500)
				})
			},
			back(){
				uni.navigateBack()
			},
			upload_img () {
				var _this = this
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
						_this.uploadFile(res)
					}
				});
			},
			uploadFile(e) {
				var user = uni.getStorageSync("user");
				var lastsession = user?user.lastsession:0;
				var _this = this
				uni.showLoading({
					mask: true,
					title:'上传中...'
				});
				uni.uploadFile({
					url : this.helper.apiRootUrl + 'uploadImg',
					filePath: e.tempFilePaths[0],
					name: 'file',
					formData: {
						lastsession:lastsession,
					},
					success: function (uploadFileRes) {
						var data_img = JSON.parse(uploadFileRes.data).data;
						_this.upload = data_img
						uni.hideLoading();
					}
				});
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
		.head{
			width: 100%;
			height: 128rpx;
			background: #FFFFFF;
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
			padding: 0 31rpx;
			margin-top: 24rpx;
			.content{
				width: 100%;
				height: 168rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
				overflow: hidden;
				.item1{
					margin-top: 27rpx;
					margin-left: 32rpx;
					.title1{
						font-size: 28rpx;
						font-weight: 400;
						color: #343434;
					}
					.title2{
						font-size: 28rpx;
						font-weight: 400;
						color: #EB2020;
					}
				}
				.item2{
					margin-top: 28rpx;
					margin-left: 30rpx;
					.title1{
						font-size: 28rpx;
						font-weight: 400;
						color: #343434;
						margin-top: 18rpx;
					}
					.title2{
						font-size: 54rpx;
						font-weight: 400;
						color: #343434;
					}
				}
			}
		}
		.bottom{
			padding: 0 31rpx;
			margin-top: 24rpx;
			.content{
				width: 100%;
				background: #FFFFFF;
				border-radius: 10rpx;
				.item{
					padding-left: 33rpx;
					.box{
						border-bottom: 2rpx solid #F3F3F3;
						height: 100rpx;
						padding-right: 37rpx;
						.icon{
							width: 68rpx;
							height: 43rpx;
							margin-right: 27rpx;
						}
						.text1{
							font-size: 28rpx;
							font-weight: 400;
							color: #333333;
						}
						.text2{
							font-size: 28rpx;
							font-weight: 400;
							color: #666666;
						}
						.text3{
							font-size: 28rpx;
							font-weight: 400;
							color: #333333;
						}
						.kuang{
							width: 34rpx;
							height: 34rpx;
							border: 2rpx solid #EB2D2D;
							border-radius: 50%;
							position: relative;
							.dian{
								width: 22rpx;
								height: 22rpx;
								background: #EB2D2D;
								border-radius: 50%;
					
							}
						}
					}
					.text4{
						font-size: 28rpx;
						font-weight: 400;
						color: #666666;
						margin-top: 31rpx;
					}
					.icon2{
						width: 110rpx;
						height: 110rpx;
						background: #E5E5E5;
						border-radius: 4rpx;
						margin-top: 28rpx;
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
					margin-top: 62rpx;
					margin-bottom: 56rpx;
				}
			}
			
		}
	}
</style>