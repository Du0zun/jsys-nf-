<template>
	<view class="page">
		<view class="content">
			<view class="item" v-for="(row,i) in list " :key="i">
				<view class="box1 flex-center-between">
					<view class="text1">国防军工基金</view>
					<view class="btn_box flex-center-center">
						<view v-if="row.w_num > 0" @click="Reduce(row)" class="btn1">-</view>
						<view v-if="row.w_num > 0" class="num">{{row.w_num}}</view>
						<view @click="add(row)" class="btn2">+</view>
					</view>
				</view>
				<view class="box2 flex-center-between">
					<view>
						<view class="text1">54213.00</view>
						<view class="text2">总价值</view>
					</view>
					<view>
						<view class="text3">{{row.nums}}</view>
						<view class="text2">已有数量</view>
					</view>
				</view>
			</view>
		</view>
		<view style="height: 103rpx;"></view>
		<view class="bottom">
			<view class="content flex-center-between">
				<view class="flex-center-start">
					<view class="text1">对方手机号</view>
					<input class="input" placeholder="请输入对方手机号" />
				</view>
				<view @click="wealth()" class="btn">确认转出</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				list:[
					{id:1,nums:10,w_num:0},
					{id:2,nums:10,w_num:0},
					{id:3,nums:10,w_num:0},
					{id:4,nums:10,w_num:0},
					{id:5,nums:10,w_num:0}
				],
				choose_list:[],
				page:0,
				last_page:1,
				//list:[]
		    }
		},
		onLoad () {
			this.helper.post('user/money/tender/13',{page:this.page},(res) => {
				
			})
			
		},
		methods:{
			Reduce (e) {
				if (e.w_num <= 0) {
					return;
				}
				e.w_num--;
				if ( e.w_num <= 0) {
					this.choose_list.splice(this.choose_list.indexOf(e.id), 1)
				}
				
			},
			add (e) {
				if (e.w_num >= e.nums) {
					return;
				}
				e.w_num++;
				if (this.choose_list.indexOf(e.id) == -1) {
					this.choose_list.push(e.id);
				}
			},
			wealth () {
				console.log('转出数据',this.choose_list)
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
		overflow: hidden;
		.content{
			padding: 0 28rpx;
			margin-top: 24rpx;
			.item{
				margin-bottom: 30rpx;
				width: 100%;
				height: 237rpx;
				background: #FFFFFF;
				box-shadow: 0px 0px 21rpx 0px rgba(0, 78, 163, 0.3);
				border-radius: 10rpx;
				overflow: hidden;
				.box1{
					margin-top: 32rpx;
					padding: 0 30rpx;
					.text1{
						font-size: 36rpx;
						font-weight: bold;
						color: #343434;
					}
					.btn_box{
						.btn1{
							width: 34rpx;
							height: 34rpx;
							background: #FFFFFF;
							border: 2rpx solid #004EA3;
							border-radius: 50%;
							font-size: 60rpx;
							font-weight: 400;
							color: #023984;
							text-align: center;
							line-height: 24rpx;
						}
						.num{
							font-size: 28rpx;
							font-weight: 400;
							color: #323232;
							margin-left: 26rpx;
							margin-right: 26rpx;
						}
						.btn2{
							width: 34rpx;
							height: 34rpx;
							background: #004EA3;
							border: 2rpx solid #004EA3;
							border-radius: 50%;;
							font-size: 36rpx;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 30rpx;
							text-align: center;
						}
					}
				}
				.box2{
					text-align: center;
					margin-top: 36rpx;
					padding: 0 101rpx;
					.text1{
						font-size: 36rpx;
						font-weight: 400;
						color: #F72130;
					}
					.text2{
						font-size: 26rpx;
						font-weight: 400;
						color: #999999;
					}
					.text3{
						font-size: 36rpx;
						font-weight: 400;
					}
				}
			}
		}
		.bottom{
			width: 100%;
			height: 103rpx;
			background: #FFFFFF;
			position: fixed;
			left: 0;
			bottom: 0;
			.content{
				padding: 0 31rpx;
				.text1{
					font-size: 24rpx;
					font-weight: 400;
					color: #323232;
					margin-right: 16rpx;
				}
				.input{
					width: 320rpx;
					height: 50rpx;
					background: #F3F3F3;
					border-radius: 10rpx;
					font-size: 24rpx;
					padding: 0 24rpx;
				}
				.btn{
					width: 160rpx;
					height: 60rpx;
					background: #004EA3;
					border-radius: 10rpx;
					font-size: 26rpx;
					font-weight: 400;
					color: #FFFFFF;
					line-height: 60rpx;
					text-align: center;
				}
			}
			
			
		}
	}
</style>