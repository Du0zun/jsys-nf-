<template>
	<view class="page">
		<view class="head">
			<view class="box flex-center-between">
				<view>基金名称</view>
				<view @click="orderClick('qtje')" class="flex-center-start">
					<image v-if="grj_type == 'asc'" class="icon" src="../../static/product/down.png"></image>
					<image v-if="grj_type != 'asc'" class="icon" src="../../static/product/up.png"></image>
					<view style="margin-left: 10rpx;">购入价</view>
				</view>
				<view  @click="orderClick('jyrsy')" class="flex-center-start">
					<view style="margin-right: 10rpx;">日收益</view>
					<image v-if="rsy_type == 'asc'" class="icon" src="../../static/product/down.png"></image>
					<image v-if="rsy_type != 'asc'" class="icon" src="../../static/product/up.png"></image>
				</view>
			</view>
		</view>
		<view class="content">
			<view @click="jump('/pages/product/info?id=' + row.id)" class="item flex-center-between" v-for="(row,i) in list" :key="i">
				<view style="width:120rpx;">
					<view class="text1">{{row.title}}</view>
					<!-- <view class="text2">{{row.risk_level}}</view> -->
				</view>
				<view style="width:200rpx;text-align: center;">
					<view class="text3">{{row.qtje}}元</view>
					<!-- <view class="text2">{{row.created_at}}</view> -->
				</view>
				<view class="text4">{{row.jyrsy}}%</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				page:0,
				last_page:1,
				list:[],
				order:'isrm',//购入价qtje  日收益jyrsy  热门排行 isrm
				sort:'asc', //asc 正序  desc倒序,
				grj_type:'asc',//asc 正序  desc倒序,
				rsy_type:'asc'//asc 正序  desc倒序,
		    }
		},
		onLoad () {
			this.loadData();
		},
		onReachBottom() {
			console.log('到底了')
			this.loadData();
		},
		methods:{
			orderClick (e) {
				this.order = e;
				if (e == 'qtje') {
					if (this.grj_type == 'asc') {
						this.grj_type = 'desc'
					}else{
						this.grj_type = 'asc';
					}
					this.sort = this.grj_type;
				}else if (e == 'jyrsy'){
					if (this.rsy_type == 'asc') {
						this.rsy_type = 'desc'
					}else{
						this.rsy_type = 'asc'
					}
					this.sort = this.rsy_type;
				}
				this.page = 0;
				this.last_page = 1;
				this.list = [];
				this.loadData();
			},
			loadData () {
				this.page ++ 
				if (this.page > this.last_page) {
					return;
				}
				let data = {
					page:this.page,
					sort:this.sort,
					order:this.order
				}
				this.helper.post('projects/13',data,(res) => {
					this.last_page = res.data.products.last_page;
					this.list.push(...res.data.products.data);
				})
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
		overflow: hidden;
		.head{
			width: 100%;
			height: 83rpx;
			border-bottom: 2rpx solid #EAEAEA;
			border-top: 2rpx solid #EAEAEA;
			font-size: 26rpx;
			color: #999999;
			margin-bottom: 31rpx;
			.box{
				height: 100%;
				padding: 0 29rpx;
				.icon{
					width: 19rpx;
					height: 24rpx;
				}
			}
		}
		.content{
			padding: 0 29rpx;
			.item{
				margin-bottom: 63rpx;
				.text1{
					font-size: 26rpx;
					font-weight: 400;
					color: #333333;
				}
				.text2{
					font-size: 22rpx;
					font-weight: 400;
					color: #999999;
				}
				.text3{
					font-size: 32rpx;
					font-weight: 400;
					color: #333333;
				}
				.text4{
					font-size: 32rpx;
					font-weight: 400;
					color: #E01C1C;
				}
			}
		}
	}
</style>