<template>
	<view class="page">
		<view class="content">
			<view class="item" v-for="(row,i) in list " :key="i">
				<view class="box1 flex-center-between">
					<view class="text1">{{row.title}}</view>
					<view class="btn_box flex-center-center">
						<view v-if="choose_list.id == row.id && choose_list.nums>0" @click="Reduce(row)" class="btn1">-</view>
						<view v-if="choose_list.id == row.id && choose_list.nums>0" class="num">{{choose_list.nums}}</view>
						<view @click="add2(row)" class="btn2">+</view>
					</view>
				</view>
				<view class="box2 flex-center-between">
					<view>
						<view class="text1">{{row.sum_market_value}}</view>
						<view class="text2">总价值</view>
					</view>
					<view>
						<view class="text3">{{row.num}}</view>
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
					<input v-model="phone" class="input" placeholder="请输入对方手机号" />
				</view>
				<view @click="wealth()" class="btn">确认转出</view>
			</view>
			
		</view>
		<view class="popup notice_up" :class="{show: show_password}" @click="show_password = !show_password,password=[]">
			<view class="box">
				<view class="title">
					请输入支付密码
				</view>
				<view class="money">
					{{choose_list.nums}}个
				</view>
				<view class="nav flex-center">
					<view class="list flex-center-center" v-for="(row , i) in 6" :key="i">
						<view class="box-radius" v-if="password[i]">
						</view>
					</view>
				</view>
				<view style="background:#3B8AED;" class="submit" @click.stop="pay2()">
					确认
				</view>
			</view>
			<view class="number flex-center-between">
				<view class="list" v-for="(row , i) in number" :key="i" @click.stop="add(row,i)">
					{{row}}
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
				choose_list:{
					id:'',
					nums:0
				},
				number: ['1','2','3','4','5','6','7','8','9','清除','0','删除'],
				password: [],
				show_password: false,
				phone:''
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
				this.helper.post('user/money/tender/13',{page:this.page},(res) => {
					this.list.push(...res.data.data)
					this.last_page = res.data.last_page;
				})
			},
			Reduce (e) {
				if (this.choose_list.nums <= 0) {
					return;
				}
				this.choose_list.nums--
				if (this.choose_list.nums <= 0) {
					this.choose_list.id = '';
				}
				
			},
			add2 (e) {
				if (this.choose_list.id == e.id) {
					if (this.choose_list.nums >= e.num) {
						return;
					}
					this.choose_list.nums ++ 
				}else{
					this.choose_list.id = e.id;
					this.choose_list.nums = 0;
					this.choose_list.nums ++ 
				}
				   
			},
			pay2 () {
				this.show_password = false;
				let data = {
					paypwd:this.password.join(''),//	123456	string	是	交易密码
					num:this.choose_list.nums,//	1	string	是	转出个数
					pbid:this.choose_list.id,//	11882	string	是	购买表的id
					phone:this.phone,//	15885555666	string	是	转入人账号
				}
				
				this.helper.post('user/fund_out',data,(res) => {
					this.helper.toast(res.msg)
					setTimeout(()=>{
						uni.navigateBack()
					},1500)
				})
			},
			add(row , i) {
				if(i == 9) {
					this.password = []
				}else if(i == 11) {
					this.password.pop()
				}else {
					if(this.password.length == 6) return
					this.password.push(row)
				}
			},
			wealth () {
				console.log('转出数据',this.choose_list)
				if(!this.choose_list.id) {
					this.helper.toast('请选择基金')
					return
				}
				if(!this.phone) {
					this.helper.toast('请输入手机号！')
					return
				}
				this.show_password = true;
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