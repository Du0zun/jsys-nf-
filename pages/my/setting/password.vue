<template>
	<view class="pasw">
		<view style="border-bottom: 2upx solid #EBEBEB;"></view>
		<view class="list_title flex-center-start">
			<view class="fot">旧密码</view>
			<view class="flex-center-center">
				<input placeholder-style="color:#B3B3B3" style="margin-left: 100rpx;" password="true" placeholder="请输入旧密码" v-model="pasw_old"/>
			</view>
		</view>
		<view class="list_title flex-center-start">
			<view class="fot">新密码</view>
			<view class="flex-center-center">
				<input placeholder-style="color:#B3B3B3" style="margin-left: 100rpx;" password="true" placeholder="请输入新密码" v-model="pasw_new"/>
			</view>
		</view>
		<view class="list_title flex-center-start">
			<view class="fot">确认密码</view>
			<view class="flex-center-center">
				<input placeholder-style="color:#B3B3B3" style="margin-left: 72rpx;" password="true" placeholder="请再次输入新密码" v-model="pasw_new2"/>
			</view>
		</view>
		<button class="btn" @click="update_pasw()">
			<text>保存</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pasw_old : '',
				pasw_new : '',
				pasw_new2 : '',
				style_type:0
			};
		},
		onShow () {

		},
		computed: {
			
		},
		methods: {
			update_pasw () {
				let pasw_old = this.pasw_old;
				let pasw_new = this.pasw_new;
				let pasw_new2 = this.pasw_new2;
				if(!pasw_old) {
					this.helper.toast('请输入旧密码!')
					return
				}
				if(!pasw_new) {
					this.helper.toast('请输入新密码!')
					return
				}
				if(pasw_new != pasw_new2) {
					this.helper.toast('两次密码不一致!')
					return
				}
				
				this.helper.post('user/myedit',{old_pwd:pasw_old , new_pwd:pasw_new },(res) => {
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
