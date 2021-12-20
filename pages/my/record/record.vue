<template>
	<view class="page">
		<view class="xian"></view>
		<view class="content">
			<view class="item" v-for="(row,i) in list" :key="i">
				<view class="flex-center-between">
					<view :style="{color:row.type_status == 4?'#389BF0':row.type_status == 8?'#F23F5C':'#343434'}" class="text1">
						{{row.moneylog_notice}}
					</view>
					<view class="text2" :style="{color:row.moneylog_money <= 0?'#389BF0':'#F23F5C'}">{{row.moneylog_money}}</view>
				</view>
				<view class="flex-center-between">
					<view class="text3">{{row.created_at}}</view>
					<view class="text4">{{row.type_status == 6?'数量':row.type_status == 7?'数量':row.type_status == 10?'积分':'金额'}}</view>
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
				this.helper.post('user/myDetail',{page:this.page},(res) => {
					this.list.push(...res.data.data)
					this.last_page = res.data.last_page;
				})
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.xian{
			width: 100%;
			height: 2rpx;
			background: #EBEBEB;
		}
		.content{
			.item{
				padding: 0 43rpx;
				border-bottom: 2rpx solid #EBEBEB;
				height: 90rpx;
				margin-top: 38rpx;
				.text1{
					font-size: 28rpx;
					font-weight: 400;
					color: #389BF0;
				}
				.text2{
					font-size: 32rpx;
					font-weight: 400;
					color: #389BF0;
				}
				.text3{
					font-size: 26rpx;
					font-weight: 400;
					color: #999999;
				}
				.text4{
					font-size: 22rpx;
					font-weight: 400;
					color: #999999;
				}
			}
		}
	}
</style>