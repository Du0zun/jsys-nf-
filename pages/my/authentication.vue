<template>
	<view class="authentication-info">
		<view class="content">
			<view class="list flex-center">
				<view class="title">
					姓名
				</view>
				<view class="flex_1">
					<input placeholder-style="color:#B3B3B3" class="input_n" type="text" placeholder="请输入姓名" v-model="realname" />
				</view>
			</view>
			<view class="list flex-center">
				<view class="title">
					身份证号
				</view>
				<view class="flex_1">
					<input placeholder-style="color:#B3B3B3" class="input_n" type="text" placeholder="请输入身份证号" v-model="card" />
				</view>
			</view>
			<view class="list flex-center">
				<view class="title">
					详细地址
				</view>
				<view class="flex_1">
					<input placeholder-style="color:#B3B3B3" class="input_n" type="text" placeholder="街道门牌、楼层房间号等信息" v-model="address" />
				</view>
			</view>
		</view>
		<view class="submit" @click="addAddress()">
			提交
		</view>
		<u-picker mode="region" ref="uPicker" v-model="show" @confirm="confirm" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				address: "",
				card: '',
				area: "",
				mobile: '',
				realname: "",
				type: 2, // 2新增地址 1为编辑
				id:'',  
				style_type:0
			};
		},
		onShow() {
			var bankAdd = uni.getStorageSync("authentication");
			if(bankAdd) {
				uni.removeStorageSync("authentication");
				this.loadData();
			}

		},
		computed: {

		},
		// onLoad(e) {
		// 	if(e.list) {
		// 		var list = JSON.parse(e.list)
		// 		this.address = list.address
		// 		this.area = list.area
		// 		this.mobile = list.mobile
		// 		this.receiver = list.receiver
		// 		this.type = list.type;
		// 		this.id = list.id
		// 	}
		// },
		methods: {
			confirm(e) {
				this.area = e.province.label + e.city.label + e.area.label
			},
			addAddress() {
				if(!this.address) {
					this.helper.toast('地址不能为空！')
					return
				}
				if(!this.card) {
					this.helper.toast('身份证号不能为空！')
					return
				}
				if(!this.realname) {
					this.helper.toast('姓名不能为空！')
					return
				}
				if (this.type == 2) {
					var data = {
						address: this.address,
						area: this.area,
						card: this.card,
						realname: this.realname
					}
					this.helper.post('user/authentication',data,(res) => {
						this.helper.toast(res.msg)
						setTimeout(()=>{
							uni.setStorageSync("authentication",true);
							uni.navigateBack()
						},1500)
					})
				}else{
					// var data = {
					// 	address: this.address,
					// 	area: this.area,
					// 	mobile: this.mobile,
					// 	status: this.open?1:0,
					// 	receiver: this.receiver,
					// 	id: this.id
					// }
					// this.helper.post('user/addressEdit',data,(res) => {
					// 	uni.showToast({
					// 		title:'修改成功',
					// 		duration:2000,
					// 		success:function(){
					// 			uni.setStorageSync("addressAdd",true);
					// 			uni.navigateBack();
					// 		}
					// 	})
					// })
				}

			}
		}
	}
</script>

<style lang="scss" scoped>
.authentication-info{
	.content{
		padding-left: 42upx;
		border-top: 2upx solid #EAEAEA;
		.list{
			font-size: 28upx;
			color: #343434;
			border-bottom: 2upx solid #EAEAEA;
			padding-top: 26upx;
			line-height: 3;
			padding-right: 40upx;
			&:last-child{
				
			}
			.title{
				width: 120upx;
				margin-right: 30upx;
			}
			.back{
				.icon{
					width: 12upx;
				}
			}
			.open{
				width: 68upx;
				height: 36upx;
				border-radius: 36upx;
				background: #B2B2B2;
				position: relative;
				transition: all .3s;
				&.choose_bg{
					background: #E85B4A;
				}
				.item{
					width: 36upx;
					height: 36upx;
					background: #ffffff;
					position: absolute;
					left: 0;
					top: 0;
					border-radius: 50%;
					transition: all .3s;
					box-shadow: 0px 0px 8upx #888888;
					z-index: 9;
					&.open_item{
						left: 32upx;
					}
				}
			}
		}
	}
	.submit{
		margin: 0 80upx;
		margin-top: 100upx;
		height: 80upx;
		line-height: 80upx;
		border-radius: 80upx;
		background: #004299;
		color: #FFFFFF;
		font-size: 28upx;
		text-align: center;
	}
}
</style>
