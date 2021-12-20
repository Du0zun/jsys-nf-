<template>
	<view class="pasw">
		<view style="border-bottom: 2upx solid #EBEBEB;"></view>
		<view class="list_title flex-center-start">
			<view class="fot">昵称</view>
			<view class="flex-center-center">
				<input placeholder-style="color:#B3B3B3" style="margin-left: 100rpx;" placeholder="请输入昵称" v-model="nickname"/>
			</view>
		</view>
		<button class="btn" @click="save_nickname()">
			<text>保存</text>
		</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nickname: '',
				style_type:0
			};
		},
		onShow () {

		},
		computed: {

		},
		methods: {
			save_nickname() {
				this.show_head = false
				var _this = this
				var nickname = _this.nickname
				_this.helper.post('user/myedit',{nickname:nickname},(res) => {
					_this.$store.commit('change_nickname',nickname)
					this.helper.toast(res.msg)
					setTimeout(()=>{
						uni.navigateBack()
					},1500)
				})
			},
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
