<template>
	<view class="page">
		<view class="head_title">资讯</view>
		<view class="tag_box flex-center-start">
			<view @click="choose_type(1)" :class="{choose_tag:type == 1}" class="tag">全部</view>
			<view @click="choose_type(2)" :class="{choose_tag:type == 2}" class="tag">热榜</view>
			<view @click="choose_type(3)" :class="{choose_tag:type == 3}" class="tag">推荐</view>
			<view @click="choose_type(4)" :class="{choose_tag:type == 4}" class="tag">新手</view>
		</view>
		<view class="content">
			<view @click="jump('/pages/news/info?id=' + row.id)" class="item flex-center-between" v-for="(row,i) in list" :key="i">
				<view>
					<view class="text1">{{row.title}}</view>
					<view class="text2">{{row.category_name}}  {{row.click_count}}阅读</view>
				</view>
				<image class="icon" :src="helper.uploadUrl +  row.image"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:0,
				page:0,
				last_page:1,
				list:[]
			}
		},
		onShow () {
			this.type = uni.getStorageSync("product")?uni.getStorageSync("product"):1;
			this.page = 0,
			this.last_page = 1;
			this.list = [];
			this.loadData();
		},
		onLoad() {
			
		},
		onPullDownRefresh() {
			this.page = 0,
			this.last_page = 1;
			this.list = [];
			this.loadData();
		},
		onReachBottom() {
			console.log('到底了')
			this.loadData();
		},
		methods: {
			loadData () {
				this.page ++ 
				if (this.page > this.last_page) {
					return;
				}
				this.helper.post('articles/index',{list_type:this.type,page:this.page},(res) => {
					this.list.push(...res.data.list.data)
					this.last_page = res.data.list.last_page;
					uni.stopPullDownRefresh();
				})
			},
			choose_type (e) {
				this.type = e;
				this.page = 0,
				this.last_page = 1;
				this.list = [];
				this.loadData();
				uni.setStorageSync("product", e);
			},
			jump (e) {
				uni.navigateTo({
					url:e
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.head_title{
			font-size: 36rpx;
			font-family: Source Han Sans CN;
			font-weight: 400;
			color: #333333;
			text-align: center;
			border-bottom: 1px solid #EBEBEB;
			height: 60rpx;
			margin-top: 39rpx;
		}
		.tag_box{
			margin-top: 26rpx;
			padding: 0 31rpx;
			.tag{
				height: 41rpx;
				background: #EDEDED;
				border-radius: 21rpx;
				font-size: 26rpx;
				font-weight: 400;
				color: #343434;
				text-align: center;
				line-height: 41rpx;
				margin-right: 8rpx;
				padding: 0 30rpx;
			}
			.choose_tag{
				background: #EAF4FD;
				font-size: 26rpx;
				font-weight: 400;
				color: #10518C;
			}
		}
		.content{
			padding: 0 34rpx;
			margin-top: 51rpx;
			.item{
				margin-bottom: 84rpx;
				.icon{
					width: 221rpx;
					height: 132rpx;
					border-radius: 10rpx;
				}
				.text1{
					font-size: 32rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
				}
				.text2{
					font-size: 24rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #9A9A9A;
					margin-top: 24rpx;
				}
			}
		}
	}
</style>
