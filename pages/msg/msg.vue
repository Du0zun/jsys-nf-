<template>
	<view class="page">
		<view class="content">
			<view @click="jump('/pages/msg/info',row)" class="item" v-for="(row,i) in list" :key="i">
				<view class="box1 flex-center-start">
					<view v-if="row.status == 0" class="dian"></view>
					<view class="text1 flex-center-start">
						<view>【{{row.types}}】</view>
						<view>{{row.title}}</view>
					</view>
				</view>
				<view class="box2">
					<view class="text1">
						{{row.content}}
					</view>
					<view class="xian"></view>
					<view class="flex-center-between">
						<view class="text2">{{row.date}}</view>
						<view class="text3">查看详情</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				list:[],
				page:0,
				last_page:1,
		    }
		},
		onLoad () {
			// this.loadData();
		},
		onShow () {
			this.list = [];
			this.page = 0;
			this.last_page = 1;
			this.loadData();
		},
		onReachBottom() {
			console.log('到底了')
			this.loadData();
		},
		methods:{
			loadData () {
				this.page ++ 
				if (this.page > this.last_page) {
					return;
				}
				this.helper.post('user/msglist',{page:this.page},(res) => {
					this.list.push(...res.data.data)
					this.last_page = res.data.last_page;
				})
			},
			jump(e,row){
				this.helper.post('user/MsgRead',{id:row.id},(res) => {

				})
				let data = JSON.stringify(row)
				uni.navigateTo({
					url:e + '?data=' + data
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
			padding: 0 25rpx;
			overflow: hidden;
			.item{
				margin-top: 27rpx;
				width: 100%;
				height: 263rpx;
				background: #FFFFFF;
				box-shadow: 0px 1rpx 2rpx 0px rgba(153, 153, 153, 0.35);
				border-radius: 10rpx;
				overflow: hidden;
				.box1{
					margin-left: 14rpx;
					margin-top: 36rpx;
					.dian{
						width: 14rpx;
						height: 14rpx;
						background: #F13C3C;
						border-radius: 50%;
					}
					.text1{
						font-size: 28rpx;
						font-weight: 400;
						color: #333333;
					}
				}
				.box2{
					padding: 0 38rpx;
					margin-top: 28rpx;
					.text1{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
					}
					.xian{
						width: 100%;
						height: 2rpx;
						background: #EBEBEB;
						margin-top: 27rpx;
						margin-bottom: 16rpx;
					}
					.text2{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
					}
					.text3{
						font-size: 26rpx;
						font-weight: 400;
						color: #28A9FA;
					}
				}
			}
		}
	}
</style>