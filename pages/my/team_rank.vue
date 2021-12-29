<template>
	<view class="page">
		<view class="bg">
			<view class="head_title flex-center-center">
				<image @click="back()" class="icon" src="@/static/team/back.png" mode=""></image>
				<view class="title">团队排行榜</view>
			</view>
			<view class="flex-center-center">
				<image src="@/static/team_rank/title.png" class="head_img"></image>
			</view>
			<view class="flex-center-center">
				<image class="head_img2" src="../../static/team_rank/img.png" mode=""></image>
			</view>
			<view class="flex-center-center">
				<image class="head_img3" src="../../static/team_rank/juxing.png" mode=""></image>
			</view>
			<view class="flex-center-center">
				<view class="box">
					<view class="content">
						<view class="item_title flex-center-between">
							<view class="text_title">头像</view>
							<view class="text_title">昵称</view>
							<view class="text_title">团队人数</view>
							<view class="text_title">有效人数</view>
							<view class="text_title">排名</view>
						</view>
						<view class="item flex-center-between" v-for="(row,i) in list" :key="i">
							<view class="text1">
								<image class="icon" :src="'../../static/tabbar/head_' + row.picImg + '.png'"></image>
							</view>
							<view class="text1">{{row.nickname}}</view>
							<view class="text1">{{row.team_count}}</view>
							<view class="text1">{{row.buy_count}}</view>
							<view class="text1">
								<view v-if="i>2">No.{{i + 1}}</view>
								<image v-if="i == 0" class="icon2" src="@/static/team_rank/rank1.png"></image>
								<image v-if="i == 1" class="icon2" src="@/static/team_rank/rank2.png"></image>
								<image v-if="i == 2" class="icon2" src="@/static/team_rank/rank3.png"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="my">
				<view class="content">
					<view class="item flex-center-between">
						<view class="text1">
							<image class="icon" :src="'../../static/tabbar/head_' + myinfo.picImg + '.png'"></image>
						</view>
						<view class="text1">{{myinfo.nickname}}</view>
						<view class="text1">{{myinfo.team_count}}</view>
						<view class="text1">{{myinfo.buy_count}}</view>
						<view class="text1">
							<view v-if="myinfo.is_there_me == 0">未上榜</view>
							<image v-if="myinfo.is_there_me == 1 && myinfo.rank == 1" class="icon2" src="@/static/team_rank/rank1.png"></image>
							<image v-if="myinfo.is_there_me == 1 && myinfo.rank == 2" class="icon2" src="@/static/team_rank/rank2.png"></image>
							<image v-if="myinfo.is_there_me == 1 && myinfo.rank == 3" class="icon2" src="@/static/team_rank/rank3.png"></image>
							<view v-if="myinfo.is_there_me == 1 && myinfo.rank >3">No.{{myinfo.rank}}</view>
						</view>
					</view>
				</view>
				
			</view>
			<!-- <view class="flex-center-center">
				<view class="my"></view>
			</view> -->
		</view>
		
	</view>
</template>

<script>
	export default {

		data() {
		    return {
				list:[],
				myinfo:''
		    }
		},
		onLoad () {
			this.helper.post('user/tamRanking',{},(res) => {
				this.list = res.data;
				this.myinfo = res.myinfo
			})

		},
		methods:{
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		// min-height: 100vh;
		// /* #ifdef H5 */
		// min-height: calc(100vh);
		// background-color: rgb(2,25,77);
		// overflow: hidden;
		// position: relative;
		// /* #endif */
		// overflow: hidden;
		.bg{
			overflow: auto;
			position: relative;
			background-color: rgb(2,25,77);
			height: 100vh;
			.head_title{
				margin-top: 65rpx;
				position: relative;
				.icon{
					width: 17rpx;
					height: 32rpx;
					position: absolute;
					left: 45rpx;
				}
				.title{
					font-size: 36rpx;
					font-weight: 400;
					color: #FFFFFF
				}
				.text{
					position: absolute;
					right: 29rpx;
					top: 18rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
			.head_img{
				width: 567rpx;
				height: 180rpx;
				margin-top: 69rpx;
			}
			.head_img2{
				width: 750rpx;
				height: 423rpx;
				margin-top: 56rpx;
			}
			.head_img3{
				width: 677rpx;
				height: 54rpx;
				margin-top: 43rpx;
			}
			.box{
				margin-top: -30rpx;
				position: relative;
				margin-bottom: 160rpx;
				width: 100%;
				padding: 0 67rpx;
				.content{
					width: 100%;
					background: #FFFFFF;
					border-radius: 10rpx;
					overflow: hidden;
					.item_title{
						margin-top: 23rpx;
						margin-bottom: 10rpx;
						.text_title{
							text-align: center;
							width: 105rpx;
							font-size: 26rpx;
							font-weight: 500;
							color: #333333;
						}
					}
					.item{
						height: 80rpx;
						border-bottom: 2rpx solid rgb(234,234,234);
						.icon{
							width: 50rpx;
							height: 50rpx;
							border-radius: 50%;
						}
						.text1{
							word-break: break-all;
							font-size: 26rpx;
							font-weight: 400;
							color: #333333;
							text-align: center;
							width: 105rpx;
						}
						.icon2{
							width: 48rpx;
							height: 52rpx;
						}
					}
				}
			}
			.my{
				width: 100%;
				position: fixed;
				left: 0;
				bottom: 0;
				.content{
					padding: 0 67rpx;
					.item{
						width: 100%;
						height: 94rpx;
						background: #FFFFFF;
						border-radius: 10rpx 10rpx 0 0;
						.icon{
							width: 50rpx;
							height: 50rpx;
							border-radius: 50%;
						}
						.text1{
							word-break: break-all;
							font-size: 26rpx;
							font-weight: 400;
							color: #333333;
							text-align: center;
							width: 105rpx;
						}
						.icon2{
							width: 48rpx;
							height: 52rpx;
						}
					}
				}
				
			}
		}
		
	}
</style>