<template>
    <view class="page">
		<view class="head">
			<view class="box1 flex-center-between">
				<view class="search flex-center-start">
					<image @click="confirm()" class="img" src="../../static/product/search.png"></image>
					<input v-model="jijin_name" @confirm="confirm()" placeholder-style="color: #C1C1C1;font-size: 26rpx;" style="width: 100%;" placeholder="股权名称" />
				</view>
				<view class="flex-center-start">
					<view class="flex-center" style="position: relative;">
						<image @click="jump('/pages/msg/msg')" class="img1" src="../../static/product/msg.png"></image>
						<view v-if="unreadCount !=0" class="msg_box">{{unreadCount}}</view>
					</view>
					<image class="img2" src="../../static/product/kf.png"></image>
				</view>
			</view>
		</view>
		<view class="big_box">
			<view class="head_btn flex-center-around">
				<navigator url="./select" hover-class="none" class="item">
					<image class="icon" src="../../static/product/znsx.png"></image>
					<view class="text">智能筛选</view>
				</navigator>
				<navigator url="./hot_fund" hover-class="none" class="item">
					<image class="icon" src="../../static/product/rdph.png"></image>
					<view class="text">热度排行</view>
				</navigator>
			</view>

			<view class="title flex-center-between" style="margin-top: 20rpx;">
					<view>全部股权</view>
			</view>
		</view>
		<view class="all_fund">
			<view class="xian"></view>
			<view class="item" v-for="(row,i) in list" :key="i">
				<view class="item_title flex-center-between">
					<view class="text1">{{row.title}}</view>
					<view @click="jump('./info?id=' + row.id)" class="btn">购买</view>
				</view>
				<view class="item_box flex-center-between">
					<view>
						<view class="text1">{{row.qtje}}</view>
						<view class="text2">每股价格</view>
					</view>

					<view>
						<view class="text3">{{row.jyrsy}}%</view>
						<view class="text2">分红比例</view>
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
				product1:'',
				product2:'',
				product3:'',
				unreadCount:0,
				unreadCount:0,
				jijin_name:'',
				page:0,
				last_page:1,
				list:[],
	        }
	    },
		onLoad () {
			this.loadData_all();
		},
		onPullDownRefresh() {
			this.loadData();
			this.page = 0;
			this.last_page = 1;
			this.list = [];
			this.loadData_all();
		},
		onShow () {
			this.loadData();
			this.helper.post('user/unreadCount',{},(res) => {
				this.unreadCount = res.data;
			})
			uni.setStorageSync("product", 1);
		},
	    methods: {
			confirm () {
				if(!this.jijin_name) {
					this.helper.toast('请输入内容')
					return
				}
				uni.navigateTo({
					url:'/pages/equity/select?search_name=' + this.jijin_name
				})
			},
			loadData_all () {
				this.page ++ 
				if (this.page > this.last_page) {
					return;
				}
				let data = {
					page:this.page,
				}
				this.helper.post('projects/12',data,(res) => {
					this.last_page = res.data.products.last_page;
					this.list.push(...res.data.products.data);
				})
			},
			loadData () {
				// limit	3	string	是	展示的个数
				// type	5	string	是	3精选好基 4热度排行 5主题选基 6新发基金
				//精选
				// this.helper.post('index/fund_page',{limit:3,type:3},(res) => {
				// 	this.product1 = res.data;
				// 	uni.stopPullDownRefresh();
				// })
				// //热门
				// this.helper.post('index/fund_page',{limit:2,type:4},(res) => {
				// 	this.product2 = res.data;
				// 	uni.stopPullDownRefresh();
				// })
				// //主题选基
				// this.helper.post('index/fund_page',{limit:3,type:5},(res) => {
				// 	this.product3 = res.data;
				// 	uni.stopPullDownRefresh();
				// })
				
			},
			jump (e) {
				uni.navigateTo({
					url:e
				})
			}
	    }
	}
</script>

<style lang="scss" scoped>
	.page{
		.head{
			    height: 84rpx;
			    border-bottom: 2rpx solid #C2C2C2;
			    padding: 0 30rpx;
				margin-top: 73rpx;
			.box1{
				.search{
					width: 500rpx;
					height: 64rpx;
					border: 2rpx solid #C1C1C1;
					border-radius: 32rpx;
					padding: 0 22rpx;
					color: #C1C1C1;
					font-size: 26rpx;
					.img{
						width: 30rpx;
						height: 30rpx;
						margin-right: 14rpx;
					}
				}
				.img1{
					width: 38rpx;
					height: 36rpx;
					margin-right: 30rpx;
				}
				.img2{
					width: 34rpx;
					height: 38rpx;
				}
				.msg_box{
					position: absolute;
					width: 30rpx;
					height: 30rpx;
					background: #FF0000;
					border-radius: 50%;
					text-align: center;
					line-height: 30rpx;
					color: #FFFFFF;
					font-size: 18rpx;
					top: -20rpx;
					left: 28rpx;
				}
			}
		}
		.big_box{
			padding: 0 30rpx;
			.head_btn{
				width: 100%;
				height: 136rpx;
				background: #F7F6F4;
				border-radius: 10rpx;
				margin-top: 17rpx;
				.item{
					text-align: center;
					.icon{
						width: 46rpx;
						height: 50rpx;
					}
					.text{
						font-size: 26rpx;
						font-weight: 400;
						color: #343434;
					}
				}
			}
			.swiper_box{
				height: 500rpx;
				margin-top: 40rpx;
				.content{
					width: 100%;
					background: #EEF7FE;
					box-shadow: 0px 0px 10rpx 0px rgba(204, 204, 204, 0.35);
					border-radius: 10rpx;
					text-align: center;
					overflow: hidden;
					.item_title{
						font-size: 36rpx;
						font-weight: bold;
						color: #343434;
						margin-top: 34rpx;
					}
					.item_title2{
						font-size: 26rpx;
						font-weight: 400;
						color: #666666;
						margin-top: 28rpx;
					}
					.item_box{
						margin-top: 37rpx;
						padding: 0 160rpx;
						font-size: 36rpx;
						.text{
							color: #999999;
							font-size: 26rpx;
						}
					}
					.btn{
						width: 622rpx;
						height: 81rpx;
						background: #004EA3;
						border-radius: 10rpx;
						text-align: center;
						line-height: 81rpx;
						font-size: 32rpx;
						color: #FFFFFF;
						margin-top: 27rpx;
						margin-bottom: 64rpx;
					}
				}
			}
			.title{
				font-size: 32rpx;
				font-weight: bold;
				color: #333333;
				.more{
					font-size: 28rpx;
					font-weight: 500;
					color: #9B9B9B;
				}
			}
			.box1{
				margin-top: 74rpx;
				.item{
					margin-bottom: 74rpx;
					.icon{
						width: 81rpx;
						height: 81rpx;
						margin-right: 33rpx;
					}
					.text1{
						font-size: 32rpx;
						font-weight: bold;
						color: #000000;
					}
					.text2{
						font-size: 32rpx;
						font-weight: bold;
						color: #F15B5A;
					}
					.text3{
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #666666;
					}
					.text4{
						font-size: 24rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #666666;
					}
				}
			}
			.box2{
				margin-top: 38rpx;
				.item{
					margin-bottom: 79rpx;
					width: 223rpx;
					height: 294rpx;
					background: #FFFFFF;
					box-shadow: 0px 0px 6rpx 0px rgba(147, 147, 147, 0.3);
					border-radius: 10rpx;
					.text1{
						font-size: 32rpx;
						font-family: Source Han Sans CN;
						font-weight: bold;
						color: #323232;
						margin-top: 28rpx;
					}
					.text2{
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
						margin-top: 23rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					}
					.text3{
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #333333;
						margin-top: 23rpx;
						width: 100%;
						overflow: hidden;
						text-overflow: ellipsis;
						display: -webkit-box;
						-webkit-line-clamp: 1;
						-webkit-box-orient: vertical;
					}
					.text4{
						font-size: 44rpx;
						font-family: Source Han Sans CN;
						font-weight: 500;
						color: #E2201E;
						margin-top: 12rpx;
					}
					.text5{
						font-size: 26rpx;
						font-family: Source Han Sans CN;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}
		.all_fund{
			margin-top: 33rpx;
			margin-bottom: 40rpx;
			.xian{
				width: 100%;
				height: 2rpx;
				background: #EAEAEA;
			}
			.item{
				margin-top: 30rpx;
				border-bottom: 2rpx solid #EAEAEA;
				.item_title{
					padding: 0 40rpx;
					.text1{
						font-size: 32rpx;
						font-weight: bold;
						color: #333333;
					}
					.btn{
						width: 148rpx;
						height: 46rpx;
						background: #FFFFFF;
						border: 2rpx solid #FC0907;
						border-radius: 10rpx;
						text-align: center;
						line-height: 46rpx;
						font-size: 26rpx;
						font-weight: 400;
						color: #FC0907;
					}
				}
				.item_box{
					text-align: center;
					padding: 0 160rpx;
					margin-top: 35rpx;
					margin-bottom: 28rpx;
					.text1{
						font-size: 32rpx;
						font-weight: 400;
						color: #333333;
					}
					.text2{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
					}
					.text3{
						font-size: 32rpx;
						font-weight: 400;
						color: #E01C1C;
					}
				}
			}
		}
	}
</style>