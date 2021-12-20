<template>
	<view class="page">
		<view class="video-info">
			<view class="title">
				{{list.title}}
			</view>
			<view class="prompt">{{list.category_name}}  {{list.click_count}}      阅读  </view>
			<image class="icon" :src="helper.uploadUrl + list.image"></image>
			<rich-text :nodes="list.content"></rich-text>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				list: "",
				id: ''
			};
		},
		onLoad(e) {
			this.list = ''
			this.id = e.id
			this.getmore()
		},
		methods: {
			getmore() {
				this.helper.post('articles/detail',{id:this.id},(res) => {
					console.log('阿萨德',res)
					this.list = res.data
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
.page{
	background-color: #ffffff;
	height: 100vh;
	.video-info{
	    margin: 0px 40rpx;
		.title{
			font-size: 32rpx;
			font-weight: bold;
			color: #343434;
			line-height: 46rpx;
			margin-bottom: 48rpx;
		}
		.prompt{
			font-size: 24rpx;
			font-weight: 400;
			color: #9A9A9A;
			margin-bottom: 40rpx;
		}
		.icon{
			width: 671rpx;
			height: 352rpx;
			border-radius: 10rpx;
			margin-bottom: 57rpx;
		}
	}
}


</style>
