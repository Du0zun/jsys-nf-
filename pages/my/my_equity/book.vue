<template>
	<view class="page">
		<view class="bg">
			<view class="content">
				<view class="text1">
					尊敬的{{realname}}股东：
				</view>
				<view class="text2">
					恭喜您成功成为我们【嘉实云盛集团】的原始股东，当前您拥有【嘉实云盛集团】
					<span style="color: #FA1323;">{{share}}</span>
					股原始股，可以享受拥有股权每日{{jyrsy}} 股权分红收益，同时享受公司上市后50倍以上的原始股价收益分红。
				</view>
				<view class="text3">
					特此证明！
				</view>
			</view>
			<image class="img" src="../../../static/my/book/zhang.png"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				realname:'',
				share:'',
				jyrsy:''
			}
		},
		onLoad (e) {
			this.helper.post('user/agreement',{sgin:e.id},(res) => {
				console.log('数据',res)
				this.realname = res.data.Mb.realname;
				this.share = res.data.ProBuy.share;
				this.jyrsy = res.data.Pro.jyrsy;
			})
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
	.page{
		.bg{
			width: 100%;
			height: 100vh;
			background-image: url(../../../static/my/book/bg.png);
			background-repeat: no-repeat;
			background-size: 100%;
			position: relative;
			.content{
				padding: 0 86rpx;
				overflow: hidden;
				.text1{
					font-size: 30rpx;
					font-weight: 500;
					color: #000101;
					margin-top: 500rpx;
				}
				.text2{
					text-indent:2em;
					margin-top: 38rpx;
					font-size: 30rpx;
					font-weight: 400;
					color: #000101;
					line-height: 48rpx;
				}
				.text3{
					font-size: 30rpx;
					font-weight: 400;
					color: #000101;
					margin-top: 33rpx;
					margin-left: 52rpx;
				}
			}
			.img{
				width: 240rpx;
				height: 172rpx;
				margin-top: -8rpx;
				margin-left: 400rpx;
			}
		}
	}
</style>