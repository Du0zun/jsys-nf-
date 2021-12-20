<template>
	<view class="page">
		<view class="middle">
			<view class="item">
				<view class="text1">手机号</view>
				<view class="box flex-center-start">
					<image class="icon" src="../../static/login/phone.png"></image>
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
			<view class="item">
				<view class="text1">确认密码</view>
				<view class="box flex-center-between">
					<view class="flex-center-start">
						<image class="icon" src="../../static/login/pwd.png"></image>
						<input v-if="!look2" v-model="pwd2" type="password" placeholder="请再次输入密码" />
						<input v-if="look2" v-model="pwd2" type="text" placeholder="请再次输入密码" />
					</view>
					<image @click="look2 = !look2" v-if="!look2" class="icon2" src="../../static/login/eyy.png"></image>
					<image @click="look2 = !look2" v-if="look2" style="height: 22rpx;" class="icon2" src="../../static/login/eyy2.png"></image>
				</view>
			</view>
			<view class="item">
				<view class="text1">图文验证</view>
				<view class="box flex-center-between">
					<view class="flex-center-start">
						<image class="icon" src="../../static/login/yzm.png"></image>
						<input v-model="code2" placeholder="请输入验证码" />
					</view>
					<image @click="img_upadata" style="width: 200rpx; height: 60rpx;" :src="code_url"></image>
				</view>
			</view>
			<view class="item">
				<view class="text1">短信验证</view>
				<view class="box flex-center-between">
					<view class="flex-center-start">
						<image class="icon" src="../../static/login/yzm.png"></image>
						<input v-model="code" placeholder="请输入验证码" />
					</view>
					<view @click="get_code()" class="code">{{str}}</view>
				</view>
			</view>
		</view>
		<view class="flex-center-center">
			<view @click="submit()" class="btn">确定</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				look:false,
				look2:false,
				account:'',
				pwd:'',
				pwd2:'',
				str:'验证码',
				time:60,
				Interval:'',
				phone:'',
				code:'',
				code_url:'',
				code_key:'',
				code2:'',
		    }
		},
		onLoad () {
			this.img_upadata();
		},
		methods:{
			img_upadata () {
				this.helper.post('captcha',{},(res)=>{
					this.code_url = res.data.img;
					this.code_key = res.data.key;
				})
			},
			submit () {
				if(!this.pwd) {
					this.helper.toast('请输入密码!')
					return
				}
				if(this.pwd != this.pwd2) {
					this.helper.toast('两次密码不一致!')
					return
				}
				if(!this.code) {
					this.helper.toast('请输入验证码!')
					return
				}
				let data = {
					password:this.pwd,
					mobile:this.phone,
					code:this.code,
				}
				this.helper.post('user/forget',data,(res) => {
					this.helper.setUser(res.data)
					uni.showToast({
						title:res.msg,
						duration:3000,
						success:function(){
							setTimeout(()=>{
								uni.navigateTo({
									url:'/pages/login/login'
								})
							},1000)
						}
					})
				})
			},
			get_code(){
				if (!this.phone) {
					this.helper.toast('请输入手机号!');
					return;
				}
				if (!this.code2) {
					this.helper.toast('请输入验证码!');
					return;
				}
				if(this.Interval) return;
				this.str = this.time + 's';
				this.Interval = setInterval(()=>{
					if (this.time <= 0) {
						clearInterval(this.Interval);
						this.Interval = '';
						this.str = '验证码';
						this.time = 60;
						return;
					}
					this.time --
					this.str = this.time + 's';
				},1000)
				let data = {
					mobile:this.phone,//	15888888666	string	否	手机号
					captcha:this.code2,//	string	否	图文验证码
					key:this.code_key,//	$2y$10$qEfVrwkbA4IczjR.RtnYx.35L5B7voy4nlHRGIdYBrpP42QWPJ2wm	string	否	key
				}
				this.helper.post('user/new_sendMsm',data,(res)=>{
					this.helper.toast(res.msg)
				})	
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.middle{
			padding: 0 46rpx;
			margin-top: 35rpx;
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
					width: 38rpx;
					height: 38rpx;
					margin-right: 26rpx;
				}
				.icon2{
					margin-right: 60rpx;
					width: 32rpx;
					height: 14rpx;
				}
				.code{
					width: 150rpx;
					height: 50rpx;
					background: #004299;
					border-radius: 25rpx;
					font-size: 28rpx;
					font-weight: 400;
					color: #FFFFFF;
					text-align: center;
					line-height: 50rpx;
				}
			}
		}
		.btn{
			width: 520rpx;
			height: 88rpx;
			background: #004299;
			border-radius: 10rpx;
			font-size: 32rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			line-height: 88rpx;
			margin-top: 164rpx;
		}
	}
</style>