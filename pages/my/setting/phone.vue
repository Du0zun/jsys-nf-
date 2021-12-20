<template>
	<view class="page">
		<view class="title">
			更换手机后，下次登录可使用新的手机号登录 ，当前手机号：13123456789
		</view>
		<view class="item1 flex-center-start">
			<view class="text">+86中国</view>
			<input v-model="form.phone" class="input" placeholder="请输入新的手机号" />
		</view>
		<view class="item2 flex-center-between">
			<input v-model="form.code" class="input" placeholder="请输入短信验证码" />
			<view @click="get_code()" class="btn_code">{{str}}</view>
		</view>
		<view class="flex-center-center">
			<view class="btn">确定</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				str:'获取验证码',
				time:60,
				Interval:'',
				form: {
					phone: '',
					code: ''
				},
		    }
		},
		methods:{
			get_code(){
				if (!this.form.phone) {
					this.helper.toast('请输入手机号!');
					return;
				}
				if(this.Interval) return;
				this.str = this.time + 's';
				this.Interval = setInterval(()=>{
					if (this.time <= 0) {
						clearInterval(this.Interval);
						this.Interval = '';
						this.str = '获取验证码';
						this.time = 60;
						return;
					}
					this.time --
					this.str = this.time + 's';
				},1000)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		padding: 0 53rpx;
		.title{
			font-size: 26rpx;
			font-weight: 400;
			color: #999999;
			margin-top: 80rpx;
		}
		.item1{
			margin-top: 235rpx;
			.text{
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				width: 60rpx;
				margin-right: 17rpx;
			}
			.input{
				border-bottom: 2rpx solid #DBDBDB;
				width: 598rpx;
				height: 66rpx;
			}
		}
		.item2{
			border-bottom: 2rpx solid #DBDBDB;
			width: 574rpx;
			height: 66rpx;
			margin-left: 72rpx;
			margin-top: 54rpx;
			.btn_code{
				width: 167rpx;
				height: 49rpx;
				background: #FFFFFF;
				border: 2rpx solid #676767;
				border-radius: 24rpx;
				font-size: 25rpx;
				font-weight: 400;
				color: #666666;
				line-height: 49rpx;
				text-align: center;
			}
		}
		.btn{
			width: 570rpx;
			height: 88rpx;
			background: #004299;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: 400;
			color: #FFFFFF;
			line-height: 88rpx;
			text-align: center;
			margin-top: 204rpx;
		}
	}
</style>