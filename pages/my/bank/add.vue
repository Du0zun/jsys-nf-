<template>
	<view class="page">
		<view class="xian"></view>
		<view class="content">
			<view class="item flex-center-between">
				<view class="text">开户行</view>
				<input v-model="bankname" class="input" placeholder-style="color:#B3B3B3" placeholder="开户行" />
			</view>
			<view class="item flex-center-between">
				<view class="text">银行卡号</view>
				<input v-model="bankcode" class="input" placeholder-style="color:#B3B3B3" placeholder="银行卡号" />
			</view>
			<view class="item flex-center-between">
				<view class="text">姓名</view>
				<input v-model="bankrealname" class="input" placeholder-style="color:#B3B3B3" placeholder="请输入姓名" />
			</view>
			<view class="item flex-center-between">
				<view class="text">设为默认</view>
				<u-switch style="margin-right: 47rpx;"
					@change="change"
					size="20"
					space="2" v-model="value1" activeColor="#004EA3" 
					inactiveColor="rgb(230, 230, 230)">
				</u-switch>
			</view>
		</view>
		<view class="flex-center-center">
			<view @click="submit()" class="btn">提交</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				value1: false,
				moren:false,
				status:'',		//	0	string	是	是否默认 0：不默认 1：默认
				type:1,		//	1	string	是	添加的类型 1银行卡 2支付宝
				bankname:'',	//	银行名称1	string	是	银行名称
				bankrealname:'',//	开户人1	string	是	开户人
				bankcode:'',	//	123123	string	是	银行卡号
		    }
		},
		methods:{

			submit () {
				if(!this.bankname) {
					this.helper.toast('请输入银行名称!')
					return
				}
				if(!this.bankrealname) {
					this.helper.toast('请输入姓名!')
					return
				}
				if(!this.bankcode) {
					this.helper.toast('请输入银行卡号!')
					return
				}
				let data = {
					status:this.moren == true?1:0,		//	0	string	是	是否默认 0：不默认 1：默认
					type:1,		//	1	string	是	添加的类型 1银行卡 2支付宝
					bankname:this.bankname,	//	银行名称1	string	是	银行名称
					bankrealname:this.bankrealname,//	开户人1	string	是	开户人
					bankcode:this.bankcode,	//	123123	string	是	银行卡号
				}
				this.helper.post('user/bankAdd',data,(res) => {
					this.helper.toast(res.msg)
					setTimeout(()=>{
						uni.navigateBack()
					},1500)
				})
				
			},
			change(e) {
				console.log('change', e);
				this.moren = e
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.xian{
			width: 100%;
			height: 2rpx;
			background: #F3F3F3;
		}
		.content{
			padding-left: 41rpx;
			.item{
				height: 100rpx;
				border-bottom: 2rpx solid #EAEAEA;
				.text{
					font-size: 28rpx;
					font-weight: 400;
					color: #343434;
				}
				.input{
					width: 520rpx;
				}
			}
		}
		.btn{
			width: 590rpx;
			height: 80rpx;
			background: #004EA3;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			line-height: 80rpx;
			margin-top: 298rpx;
			margin-bottom: 100rpx;
		}
	}
</style>