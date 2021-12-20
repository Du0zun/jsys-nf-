<template>
	<view class="page">
		<view class="head">
			<view class="text">登录</view>
		</view>
		<view class="middle">
			<view class="flex-center-center">
				<image class="logo" src="../../static/login_logo.png"></image>
			</view>
			
			<view class="item">
				<view class="text1">账号</view>
				<view class="box flex-center-start">
					<image class="icon" src="../../static/login/login.png"></image>
					<input v-model="phone" placeholder="请输入手机号" />
				</view>
			</view>
			<view class="item">
				<view class="text1">密码</view>
				<view class="box flex-center-between">
					<view class="flex-center-start">
						<image class="icon" src="../../static/login/pwd.png"></image>
						<input v-if="!look" v-model="pwd" type="password" placeholder="请输入密码" />
						<input v-if="look" v-model="pwd" type="text" placeholder="请输入密码" />
					</view>
					
					<image @click="look = !look" v-if="!look" class="icon2" src="../../static/login/eyy.png"></image>
					<image @click="look = !look" v-if="look" style="height: 22rpx;" class="icon2" src="../../static/login/eyy2.png"></image>
				</view>
			</view>
		</view>
		<view class="text_box flex-center-between">
			<navigator url="/pages/login/forget" hover-class="none" class="text1">忘记密码?</navigator>
			<navigator url="/pages/login/reg" hover-class="none" class="text2">注册</navigator>
		</view>
		<view class="flex-center-center">
			<view @click="login()" class="btn">登录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				look:false,
				phone:'',
				pwd:''
		    }
		},
		computed: {

		},
		onLoad () {
			
		},
		methods:{
			login () {
				if(!this.phone) {
					this.helper.toast('请输入手机号!')
					return
				}
				if(!this.pwd) {
					this.helper.toast('请输入密码!')
					return
				}
				let data = {
					username:this.phone,
					password:this.pwd,
				}
				this.helper.post('login',data,(res) => {
					this.helper.setUser(res.data)
					uni.showToast({
						title:res.msg,
						duration:3000,
						success:function(){
							setTimeout(()=>{
								uni.switchTab({
									url:'/pages/home/index'
								})
							},1000)
						}
					})
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.head{
			width: 100%;
			height: 288rpx;
			background-image: url(../../static/login/color-bg.png);
			background-repeat: no-repeat;
			background-size: 100%;
			font-size: 36rpx;
			font-weight: 400;
			color: #FFFFFF;
			overflow: hidden;
			.text{
				text-align: center;
				margin-top: 64rpx;
			}
		}
		.middle{
			padding: 0 44rpx;
			margin-top: -76rpx;
			.logo{
				margin-bottom: 46rpx;
				width: 245rpx;
				height: 303rpx;
			}
			.item{
				margin-bottom: 48rpx;
				.text1{
					font-size: 28rpx;
					font-weight: 400;
					color: #666666;
				}
			}
			.box{
				border-bottom: 2rpx solid #EBEBEB;
				height: 80rpx;
				.icon{
					width: 37rpx;
					height: 37rpx;
					margin-right: 26rpx;
				}
				.icon2{
					margin-right: 60rpx;
					width: 32rpx;
					height: 14rpx;
				}
			}
		}
		.text_box{
			padding: 0 71rpx;
			.text1{
				font-size: 26rpx;
				font-weight: 400;
				color: #353535;
			}
			.text2{
				font-size: 26rpx;
				font-weight: 400;
				color: #004EA3;
			}
		}
		.btn{
			margin-top: 120rpx;
			width: 520rpx;
			height: 88rpx;
			background: #004299;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			line-height: 88rpx;
		}
	}
	
</style>