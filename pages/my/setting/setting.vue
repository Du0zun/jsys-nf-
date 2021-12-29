<template>
	<view class="set">
		<view class="content">
			<view class="list flex-center-between" @click="show_head = true">
				<view class="title">
					头像
				</view>
				<view class="right flex-center">
					<view class="icon flex-center-center">
						<image :src="'../../../static/tabbar/head_' + user.picImg + '.png'"></image>
					</view>
					<view class="back">
						<image src="@/static/my/back.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<navigator hover-class="none" url="/pages/my/setting/nickname" class="list flex-center-between">
				<view class="title">
					昵称
				</view>
				<view class="right flex-center">
					<view class="icon flex-center-center">
						{{user.nickname}}
					</view>
					<view class="back">
						<image src="@/static/my/back.png" mode="widthFix"></image>
					</view>
				</view>
			</navigator>
			<view class="list flex-center-between" @click="show_select = true">
				<view class="title">
					性别
				</view>
				<view class="right flex-center">
					<view class="icon flex-center-center">
						{{user.gender == 1?'男':'女'}}
					</view>
					<view class="back">
						<image src="@/static/my/back.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="list flex-center-between">
				<view class="title">
					手机号
				</view>
				<view class="right flex-center">
					<view class="icon flex-center-center">
						{{user.mobile}}
					</view>
					<view class="back">
						<image src="@/static/my/back.png" mode="widthFix"></image>
					</view>
				</view>
			</view>
			<navigator hover-class="none" url="/pages/my/setting/password" class="list flex-center-between">
				<view class="title">
					修改密码
				</view>
				<view class="right flex-center">
					<view class="back">
						<image src="@/static/my/back.png" mode="widthFix"></image>
					</view>
				</view>
			</navigator>
			<navigator hover-class="none" url="/pages/my/setting/pay_password" class="list flex-center-between">
				<view class="title">
					修改支付密码
				</view>
				<view class="right flex-center">
					<view class="back">
						<image src="@/static/my/back.png" mode="widthFix"></image>
					</view>
				</view>
			</navigator>
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="version">
			<view class="list flex-center-between">
				<view class="title">
					当前版本
				</view>
				<view class="right flex-center">
					{{helper.nowVersion}}
				</view>
			</view>
		</view>
		<!-- #endif -->
		<navigator url="/pages/login/login" hover-class="none" class="logout" @click="logout()">
			退出登录
		</navigator>
		<u-popup :show="show_head" mode="bottom" border-radius="15" @close="close">
			<view class="box">
				<view class="title">
					选择头像
				</view>
				<view class="item flex-center-between">
					<view class="list flex-center-center" v-for="(row , i) in 8" :key="i" @click="choose_icon = i">
						<image class="icon" :src="'../../../static/tabbar/head_'+(i+1)+'.png'"></image>
						<view class="choose" :class="{choose_one: choose_icon == i}">
							<image class="icon" v-if="choose_icon == i" src="@/static/tabbar/tick0.png"></image>
						</view>
					</view>
				</view>
				<view class="save" @click="save_icon">
					保存
				</view>
			</view>
		</u-popup>
		<u-picker :show="show_select" :columns="type" @confirm="confirm" @cancel="show_select = false" keyName="label"></u-picker>
	</view>
</template>
<script>
export default {
	data() {
		return {
			show_head: false,
			show_select: false,
			type: [
                    [
						{
							value: 1,
							label: '男'
						},
						{
							value: 2,
							label: '女'
						}
					]
                ],
			choose_icon: 0,
			style_color:'#E85B4A',
			style_type:0
		}
	},
	computed:{
		user(){
			return this.$store.state.user
		},

	},
	onShow () {

	},
	methods: {
		confirm(e) {
			console.log('选中',e)
			var gender = e.value[0].value
			this.helper.post('user/myedit',{gender:gender},(res) => {
				this.$store.commit('change_gender',gender)
			})
		},

		close () {
			this.show_head = false
		},
		save_icon() {
			this.show_head = false
			var picImg = this.choose_icon+1
			this.helper.post('user/myedit',{picImg:picImg},(res) => {
				this.helper.toast(res.msg)
				this.$store.commit('change_img',picImg)
			})
		},
		logout() {
			this.helper.removeUser()
			uni.redirectTo({
				url:'/pages/login/login'
			})
		}
	}
}
</script>
<style lang="scss" scoped>
.set{
	.content{
		padding-left: 46upx;
		padding-top: 10upx;
		border-top: 2upx solid #EBEBEB;
		.list{
			border-bottom: 2upx solid #EBEBEB;
			padding-bottom: 10upx;
			padding-top: 20upx;
			line-height: 80upx;
			padding-right: 30upx;
			.title{
				font-size: 28upx;
			}
			.right{
				.icon{
					margin-right: 20upx;
					image{
						width: 68upx;
						height: 68upx;
						border-radius: 50%;
					}
				}
				.back{
					image{
						width: 14upx;
					}
				}
			}
		}
	}
	.version{
		padding-left: 46upx;
		border-top: 24upx solid #EBEBEB;
		.list{
			border-bottom: 2upx solid #EBEBEB;
			padding-bottom: 10upx;
			padding-top: 20upx;
			line-height: 80upx;
			padding-right: 30upx;
		}
	}
	.logout{
		margin: 0 64upx;
		margin-top: 150upx;
		border-radius: 10upx;
		background: #CCCCCC;
		height: 88upx;
		line-height: 88upx;
		text-align: center;
		color: #ffffff;
	}
	.box{
		.title{
			font-size: 36upx;
			padding: 40upx 0;
			text-align: center;
		}
		.item{
			flex-wrap: wrap;
			padding: 0 44upx;
			.list{
				width: 25%;
				padding: 25upx 0;
				position: relative;
				.icon{
					width: 130upx;
					height: 130upx;
					border-radius: 50%;
				}
				.choose{
					position: absolute;
					background: #ffffff;
					overflow: hidden;
					bottom: 25upx;
					right: 20upx;
					width: 36upx;
					height: 36upx;
					border-radius: 50%;
					box-sizing: border-box;
					border: 2upx solid #B2B2B2;
					.icon{
						width: 36upx;
						height: 36upx;
					}
					&.choose_one{
						border: none;
						background: #ffffff;
					}
				}
			}
		}
		.save{
			background: #E85B4A;
			margin: 40upx 64upx;
			color: #ffffff;
			font-size: 28upx;
			text-align: center;
			height: 88upx;
			line-height: 88upx;
			border-radius: 10upx;
		}
	}
}
</style>