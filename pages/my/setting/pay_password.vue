<template>
	<view class="pasw">
		<view style="border-bottom: 2upx solid #EBEBEB;"></view>
		<view class="list_title flex-center-start">
			<view class="fot">旧支付密码</view>
			<view class="flex-center-center">
				<input placeholder-style="color:#B3B3B3" style="margin-left: 100rpx;" password="true" placeholder="请输入旧支付密码" v-model="pass" />
			</view>
		</view>
		<view class="list_title flex-center-start">
			<view class="fot">新支付密码</view>
			<view class="flex-center-center">
				<input placeholder-style="color:#B3B3B3" style="margin-left: 100rpx;" password="true" placeholder="请输入支付密码" v-model="pay_pasw" />
			</view>
		</view>
		<view class="list_title flex-center-start">
			<view class="fot">确认新密码</view>
			<view class="flex-center-center">
				<input placeholder-style="color:#B3B3B3" style="margin-left: 100rpx;" password="true" placeholder="请再次输入支付密码" v-model="pay_pasw2"/>
			</view>
		</view>
		<!-- <view class="list_title flex-center-start">
			<view class="fot">验证码</view>
			<view class="flex-center-center">
				<input placeholder-style="color:#B3B3B3" style="margin-left: 126rpx; width: 320rpx;" placeholder="请输入验证码" v-model="code"/>
				<view class="right">
					<view class="add flex-center-center">
						<view>验证码</view>
					</view>
				</view>
			</view>
		</view> -->
		<button class="btn" @click="save_pay_pasw()">
			<text>保存</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pay_pasw : '',
				pay_pasw2 : '',
				pass : '',
				style_color:'#E85B4A',
				style_type:0
			};
		},
		onShow () {

		},
		computed: {

		},
		methods: {
			save_pay_pasw () {
				if (this.pay_pasw.length != 6) {
					this.helper.toast('支付密码只能六位数!')
					return
				}
				if(!this.pay_pasw) {
					this.helper.toast('请输入支付密码!')
					return
				}
				if(this.pay_pasw != this.pay_pasw2) {
					this.helper.toast('两次密码不一致!')
					return
				}
				if(!this.pass) {
					this.helper.toast('旧支付密码不能为空!')
					return
				}
				let data = {
					new_paypwd : this.pay_pasw,
					old_paypwd : this.pass
				}
				this.helper.post('user/myedit',data,(res) => {
					if (res.status) {
						this.helper.toast(res.msg)
						setTimeout(()=>{
							uni.navigateBack()
						},1500)
					}else{
						uni.showToast({
							title:'修改失败',
							duration:2000,
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.pasw{
		background: rgb(255, 255, 255);
	}
	.right{
		.add{
			color: #004299;
			border-radius: 18upx;
			border: 2upx solid #004299;
		    height: 56rpx;
		    width: 120rpx;
			line-height: 48upx;
		}
	}
	.fot{
		font-size: 28rpx;
		font-weight: 400;
		color: #343434;
	}
	.btn{
		width: 310px;
		height: 44px;
		background: #004299;
		border-radius: 5px;
		margin-top: 124rpx;
		line-height: 84rpx;
		text{
			width: 28px;
			height: 13px;
			font-size: 14px;
			font-weight: 400;
			color: #FFFFFF;
		}
	}
	.list_title{
		line-height: 120rpx;
		height: 130rpx;
		border-bottom: 2upx solid #EBEBEB;
		width: 94%;
		margin-left: 46rpx;
		padding: 0 20upx;
		text{
			width: 27px;
			height: 13px;
			font-size: 14px;
			font-weight: 400;
			color: #343434;
		}
	}
</style>
