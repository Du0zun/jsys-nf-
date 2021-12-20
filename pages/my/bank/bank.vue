<template>
	<view class="page">
		<view class="content">
			<view class="box" v-for="(row,i) in list" :key="i">
				<view class="item">
					<view class="text1 flex-center-between">
						<view>{{row.bankname}}</view>
						<view>{{row.bankrealname}}</view>
					</view>
					<view class="text2">储蓄卡</view>
					<view class="text3">{{row.bankcode}}</view>
					<view class="xian"></view>
					<view class="moren flex-center-between">
						<view class="flex-center-start" @click="statusEdit(row.id)">
							<view v-if="row.status == 0" class="kuang flex-center-center"></view>
							<image v-if="row.status == 1" class="icon1" src="../../../static/my/gou.png"></image>
							<view>默认地址</view>
						</view>
						<view @click="del(row.id)" class="flex-center-start">
							<image class="icon2" src="../../../static/my/del.png"></image>
							<view>删除</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 120rpx;"></view>
		<view class="btn flex-center-center" @click="jump('/pages/my/bank/add')">
			<image class="icon3" src="../../../static/my/add.png"></image>
			<view>添加银行卡</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				moren:false,
				list:[]
		    }
		},
		onLoad () {

		},
		onShow () {
			this.helper.post('user/banks',{},(res) => {
				this.list = res.data;
			})
		},
		methods:{
			del (e) {
				this.helper.post('user/bankDel',{id:e},(res) => {
					this.helper.toast(res.msg)
					setTimeout(()=>{
						this.helper.post('user/banks',{},(res) => {
							this.list = res.data;
						})
					},1500)
				})
			},
			statusEdit (e) {
				this.helper.post('user/statusEdit',{id:e,type:'bank'},(res) => {
					this.helper.toast(res.msg)
					setTimeout(()=>{
						this.helper.post('user/banks',{},(res) => {
							this.list = res.data;
						})
					},1500)
				})
			},
			jump(e){
				uni.navigateTo({
					url:e
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		min-height: 100vh;
		/* #ifdef H5 */
		min-height: calc(100vh - 44px);
		background: #F7F7F7;
		/* #endif */
		.content{
			padding: 0 28rpx;
			overflow: hidden;
			.box{
				margin-top: 24rpx;
				width: 100%;
				height: 290rpx;
				background: #FFFFFF;
				border-radius: 10rpx;
				.item{
					padding: 0 27rpx;
					overflow: hidden;
					.text1{
						margin-top: 35rpx;
						font-size: 28rpx;
						font-weight: 400;
						color: #343434;
					}
					.text2{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
						margin-top: 14rpx;
					}
					.text3{
						margin-top: 37rpx;
						font-size: 36rpx;
						font-weight: 400;
						color: #343434;
					}
					.xian{
						width: 100%;
						height: 2rpx;
						background: #EAEAEA;
						margin-top: 16rpx;
					}
					.moren{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
						margin-top: 16rpx;
						.kuang{
							width: 28rpx;
							height: 28rpx;
							border: 1px solid #999999;
							border-radius: 50%;
							margin-right: 16rpx;
						}
						.icon1{
							margin-right: 16rpx;
							width: 28rpx;
							height: 28rpx;
						}
						.icon2{
							width: 29rpx;
							height: 29rpx;
						}
					}
				}
			}
		}
		.btn{
			width: 100%;
			height: 97rpx;
			background: #004EA3;
			font-size: 28rpx;
			font-weight: 400;
			color: #FFFFFF;
			text-align: center;
			line-height: 97rpx;
			position: fixed;
			bottom: 0;
			left: 0;
			.icon3{
				width: 20rpx;
				height: 20rpx;
				margin-right: 11rpx;
			}
		}
	}
</style>