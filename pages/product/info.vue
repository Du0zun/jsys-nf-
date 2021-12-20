<template>
	<view class="page">
		<view class="top">
			<view class="flex-center-start">
				<image @click="backJump()" style="margin-top: 74rpx; width: 18rpx;height: 30rpx; margin-left: 50rpx;" src="../../static/equity/zuojiantou.png"></image>
				<view style=" margin-top: 74rpx; margin-left: 236rpx; font-size: 36rpx; color: #FFFFFF;">基金详情</view>
			</view>
		</view>
		<view class="flex-center-center" style="margin-top: -140rpx;">
			<view class="fund_box">
				<view class="fund_title">{{equity_data.title}}</view>
				<!-- <view class="flex-center-start tag_box">
					<view class="tag">{{equity_data.genre}}</view>
					<view class="tag">{{equity_data.risk_level}}</view>
				</view> -->
				<view class="flex-center-between money_box">
					<view>
						<view class="text1">{{equity_data.qtje}}</view>
						<view class="text2">每份价格</view>
					</view>
					<view>
						<view class="text1">{{equity_data.mrsy}}</view>
						<view class="text2">每日收益</view>
					</view>
					<view>
						<view class="text3">{{equity_data.jyrsy}}%</view>
						<view class="text2">收益比例</view>
					</view>
				</view>
			</view>
		</view>
		<view class="flex-center-center">
			<view class="order_box">
				<view class="title">订单信息</view>
				<view class="order_box1 flex-center-between">
					<view>起购数量</view>
					<view style="margin-right: 26rpx;">{{equity_data.qtsl}}</view>
				</view>
				<view class="order_box1 flex-center-between">
					<view>购买数量</view>
					<view style="margin-right: 26rpx;" class="flex-center-start">
						<view class="order_btn_box flex-center-center" @click="order_btn()">
							<view class="order_btn1"></view>
						</view>
						<view class="order_input flex-center-center">{{buy_num}}</view>
						<view class="order_btn_box flex-center-center" @click="buy_num++">
							<view class="order_btn2 flex-center-center">+</view>
						</view>
					</view>
				</view>
				<view class="order_box1 flex-center-between">
					<view class="flex-center-start">实付金额
						<view style="font-size: 26rpx; color: #9B9B9B;">（以实付到账金额多准）</view>
					</view>
					<view style="margin-right: 26rpx; color: #F33034;">￥{{buy_num * equity_data.qtje}}</view>
				</view>
			</view>
		</view>
		<view class="flex-center-center">
			<view class="pay_box">
				<view class="title">支付信息</view>
				<view class="pay_box1 flex-center-between">
					<view>支付方式</view>
					<view class="flex-center-start" style="margin-right: 26rpx;" @click="show_select = true">{{choose_type == 2?'银行卡支付':'余额支付'}}
					<view style="margin-left: 16rpx;">></view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="choose_type == 2" class="flex-center-center" style="margin-bottom: 150rpx;">
			<view class="bank_box">
				<view class="bank_box1 flex-center-between">
					<view>收款户名</view>
					<view style="margin-right: 26rpx;">{{bank.bankrealname}}</view>
				</view>
				<view class="bank_box1 flex-center-between">
					<view>收款账号</view>
					<view style="margin-right: 26rpx;">{{bank.bankcode}}</view>
				</view>
				<view class="bank_box1 flex-center-between">
					<view>收款银行</view>
					<view style="margin-right: 26rpx;">{{bank.bankname}}</view>
				</view>
				<view class="bank_box2">
					<view>上传凭证</view>
					<image @click="upload_img()" style="width: 106rpx; height: 106rpx; margin-top: 24rpx;" :src="upload == '../../static/upload.png'?upload:helper.uploadUrl + upload"></image>
				</view>
			</view>
		</view>
		<view class="buy_box flex-center-start">
			<view class="flex-center-center" style="width: 410rpx; height: 100%;">
				<view class="flex-center-start">
					<view>合计:</view>
					<view style="color: #F33034; font-size: 38rpx;">￥{{buy_num * equity_data.qtje}}</view>
				</view>
			</view>
			<view @click="pay()" class="flex-center-center" style="width: 340rpx; height: 100%;background-color: #F71E1E; font-size: 28rpx; color: #FFFFFF;">
				提交订单
			</view>
		</view>
		<view class="popup notice_up" :class="{show: show_password}" @click="show_password = !show_password,password=[]">
			<view class="box">
				<view class="title">
					请输入支付密码
				</view>
				<view class="money">
					{{buy_num * equity_data.qtje}}
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
		<u-picker :show="show_select" :columns="type" @confirm="confirm" @cancel="show_select = false" ></u-picker>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				show_select: false,
				type: [
					['银行卡支付','余额支付'],

				],
				// choose_type: {
				// 	value: 2,
				// 	label: '银行卡支付'
				// },
				choose_type:2,
				buy_num :'',//购买数量
				upload:'../../static/upload.png',
				equity_data:'',
				bank:'',
				level_data:'',
				mylevel:'',
				giving_equity:0,
				number: ['1','2','3','4','5','6','7','8','9','清除','0','删除'],
				password: [],
				show_password: false,
		    }
		},
		onLoad (e) {
			this.helper.post('project/' + e.id,{},(res) => {
				console.log('详细数据',res)
				this.equity_data = res.data;
				this.buy_num = this.equity_data.qtsl;
			})
			this.helper.post('user/sysAccount',{},(res) => {
				console.log('银行数据',res)
				this.bank = res.data;
			})
		},
		methods:{
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
			confirm(e) {
                console.log('confirm', e)
                this.show_select = false;
				if (e.indexs[0] == 0) {
					this.choose_type = 2;
				}else{
					this.choose_type = 1;
				}
			},
			backJump () {
				uni.navigateBack();
			},
			jump () {
				uni.navigateTo({
					url:'./confirm'
				})
			},
			pay () {
				if (this.choose_type == 1){
					this.show_password = true;
					return;
				}
				if(this.upload == '../../static/upload.png') {
					this.helper.toast('请上传凭证')
					return
				}

				let data = {
					number:this.buy_num,
					payimg:this.upload,
					pay_type:this.choose_type,
				}
				this.helper.post('project/buy/' + this.equity_data.id,data,(res) => {
					this.helper.toast(res.msg)
					setTimeout(() => {
						uni.navigateBack();
					},1500)
				})
			},
			pay2 () {
				let data = {
					paypwd:this.password.join(''),
					number:this.buy_num,
					payimg:this.upload,
					pay_type:this.choose_type,
				}
				this.helper.post('project/buy/' + this.equity_data.id,data,(res) => {
					this.helper.toast(res.msg)
					setTimeout(() => {
						uni.navigateBack({})
					},1000)
				})
			},
			order_btn () {
				if(this.buy_num <= this.equity_data.qtsl) return;
				this.buy_num--;
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
		position: relative;
		min-height: 100vh;
		/* #ifdef H5 */
		min-height: calc(100vh);
		background: #F7F7F7;
		/* #endif */
	}
	.top{
		width: 100%;
		height: 332rpx;
		background-image: url(../../static/money/red_bg.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.fund_box{
		width: 690rpx;
		height: 259rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		.fund_title{
			margin-bottom: 50rpx;
			font-size: 36rpx;
			font-weight: bold;
			color: #343434;
			margin-top: 24rpx;
			margin-left: 31rpx;
		}
		.tag_box{
			margin-left: 25rpx;
			margin-top: 20rpx;
			.tag{
				height: 32rpx;
				background: #ECF2FE;
				border-radius: 16rpx;
				font-size: 24rpx;
				font-weight: 400;
				color: #19488A;
				text-align: center;
				line-height: 32rpx;
				padding: 0 20rpx;
				margin-right: 13rpx;
			}
		}
		.money_box{
			text-align: center;
			padding: 0 20px;
			margin-top: 15rpx;
			.text1{
				font-size: 40rpx;
				font-weight: 400;
				color: #F72130;
			}
			.text2{
				font-size: 26rpx;
				font-weight: 400;
				color: #999999;
			}
			.text3{
				font-size: 40rpx;
				font-weight: 400;
				color: #FB861F;
			}
		}
		
	}
	.order_box{
		width: 690rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin-top: 24rpx;
	}
	.title{
		color: #333333; 
		font-size: 32rpx;
		margin-left: 26rpx;
		margin-top: 30rpx;
	}
	.order_box1{
		width: 622rpx;
		height: 94rpx;
		border-bottom: 1px solid #EAEAEA;
		margin-left: 70rpx;
	}
	.order_btn_box{
		width: 34rpx;
		height: 34rpx;
		background: #FFFFFF;
		border: 2rpx solid #D1D1D1;
		border-radius: 6rpx;
	}
	.order_btn1{
		width: 20rpx;
		height: 2rpx;
		background: #999999;
		border-radius: 1px;
	}
	.order_input{
		width: 90rpx;
		height: 34rpx;
		background: #FFFFFF;
		border: 2rpx solid #D1D1D1;
		border-radius: 4rpx;
		margin-left: 8rpx;
		margin-right: 8rpx;
	}
	.order_btn2{
		width: 20rpx;
		height: 20rpx;
		color: #999999;
		border-radius: 2rpx;
	}
	.level_box{
		width: 690rpx;
		height: 164rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin-top: 24rpx;
	}
	.level_box1{
		width: 622rpx;
		height: 94rpx;
		margin-left: 70rpx;
	}
	.prompt_box{
		width: 690rpx;
		margin-top: 18rpx;
	}
	.pay_box{
		width: 690rpx;
		height: 164rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin-top: 24rpx;
	}
	.pay_box1{
		width: 622rpx;
		height: 94rpx;
		margin-left: 70rpx;
	}
	.bank_box{
		width: 690rpx;
		height: 518rpx;
		background: #FFFFFF;
		border-radius: 10rpx;
		margin-top: 24rpx;
	}
	.bank_box1{
		width: 622rpx;
		height: 94rpx;
		margin-left: 70rpx;
		border-bottom: 1px solid #EAEAEA;
	}
	.bank_box2{
		width: 622rpx;
		height: 94rpx;
		margin-left: 70rpx;
		margin-top: 46rpx;
	}
	.buy_box{
		height: 102rpx;
		background: #FFFFFF;
		position: absolute;
    	bottom: 0;
	}
	.code_icon{
		position: absolute;
		top: 200px;
		z-index: -1;
		.icon{
			width: 310upx;
			height: 310upx;
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
</style>
