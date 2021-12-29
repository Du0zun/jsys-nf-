<template>
	<view class="page">
		<view class="head">
			<view class="box1 flex-center-between">
				<view class="search flex-center-start">
					<image @click="confirm()" class="img" src="../../static/home/search.png"></image>
					<input v-model="jijin_name" @confirm="confirm()" placeholder-style="color: #FFFFFF;font-size: 26rpx;" style="width: 100%;" placeholder="基金名称" />
				</view>
				<view class="flex-center-start">
					<view class="flex-center" style="position: relative;">
						<image @click="jump('/pages/msg/msg')" class="img1" src="../../static/home/msg.png"></image>
						<view v-if="unreadCount!=0" class="msg_box">{{unreadCount}}</view>
					</view>
					
					<image class="img2" src="../../static/home/kf.png"></image>
				</view>
			</view>
			<view class="box2 flex-center-between">
				<view>
					<view class="flex-center-start">
						<view style="color: #B4D0FF; margin-right: 24rpx;">总资产(元)</view>
						<!-- <image @click="look = !look" v-if="!look" class="img" src="../../static/home/eyy.png"></image>
						<image @click="look = !look" v-if="look" style="height: 22rpx;" class="img" src="../../static/home/eyy2.png"></image> -->
					</view>
					<view class="money">{{look?total_amount:'****'}}</view>
				</view>
				<view style="direction: rtl">
					<view  style="color: #B4D0FF;">收益</view>
					<view class="money">{{look?total_revenue:'****'}}</view>
				</view>
			</view>
		</view>
		<view class="content1 flex-center-between">
			<navigator :url="'./new_comer/new_comer?is_check=' + is_check + '&has_buy=' + has_buy" hover-class="none" class="item">
				<image class="img" src="../../static/home/xrzq.png"></image>
				<view>新人专区</view>
			</navigator>
			<navigator url="../product/new_fund" hover-class="none" class="item">
				<image class="img" src="../../static/home/xfjj.png"></image>
				<view>新发基金</view>
			</navigator>
			<navigator url="../product/all_fund" hover-class="none" class="item">
				<image class="img" src="../../static/home/qbzc.png"></image>
				<view>全部产品</view>
			</navigator>
			<navigator url="team/team" hover-class="none" class="item">
				<image class="img" src="../../static/home/tdyj.png"></image>
				<view>团队业绩</view>
			</navigator>
			<navigator url="./doubt" hover-class="none" class="item">
				<image class="img" src="../../static/home/ynwd.png"></image>
				<view>操作流程</view>
			</navigator>
			<navigator url="../my/record/record" hover-class="none" class="item">
				<image class="img" src="../../static/home/jyjl.png"></image>
				<view>交易记录</view>
			</navigator>
			<navigator url="../my/my_fund/my_fund" hover-class="none" class="item">
				<image class="img" src="../../static/home/symx.png"></image>
				<view>我的基金</view>
			</navigator>
			<navigator url="share/share" hover-class="none" class="item">
				<image class="img" src="../../static/home/yqhy.png"></image>
				<view>邀请好友</view>
			</navigator>
		</view>
		<u-swiper
				:list="list"
				previousMargin="20"
				nextMargin="20"
				circular
				radius="5"
				bgColor="#ffffff"
				height="110"
		></u-swiper>
		<view class="title flex-center-between">
			<view>热门基金</view>
			<navigator url="/pages/product/all_fund" hover-class="none" style="color: #9B9B9B; font-size: 28rpx;">更多</navigator>
		</view>
		<view class="boxs1">
			<swiper style="height: 500rpx;" class="swiper" indicator-color="#CBCBCD" indicator-active-color="#004EA3" :indicator-dots="true" :autoplay="true" :interval="4000" :duration="500">
			    <swiper-item v-for="(row,i) in hot_fund" :key="i">
			        <view class="content">
			        	<view class="item_title">{{row.title}}</view>
			        	<view class="item_title2">{{row.describe}}</view>
			        	<view class="item_box flex-center-center">
			        		<view>
			        			<view style="color: #F72130;">{{row.jyrsy}}%</view>
			        			<view class="text">近日收益</view>
			        		</view>
			        	
			        	</view>
			        	<view class="flex-center-center">
			        		<view @click="jump('../product/info?id=' + row.id)" class="flex-center-center btn">立即购买</view>
			        	</view>
			        </view>
			    </swiper-item>
			</swiper>

		</view>
		<view class="xian"></view>
		<view class="title flex-center-between">
			<view>周购买排行榜</view>
		</view>
		<view class="boxs2">
			<view class="content">
				<view @click="jump('../product/info?id=' + row.id)" class="item flex-center-start" v-for="(row,i) in rank_fund" :key="i">
					<view style="color: #E2201E;margin-right: 97rpx;margin-left: 29rpx;">
						<view class="flex-center-start">
							<view style="font-size: 44rpx;">{{row.jyrsy}}</view>
							<view style="font-size: 26rpx;margin-top: 10rpx;">%</view>
						</view>
						<view style="font-size: 26rpx;">近一年收益</view>
					</view>
					<view>
						<view class="item_title">{{row.title}}</view>
						<view class="flex-center-start" style="flex-wrap: wrap;">
							<view class="tag">{{row.genre}}</view>
							<view class="tag">{{row.risk_level}}</view>
						</view>
					</view>
				</view>
			</view>
			<navigator url="../product/all_fund" hover-class="none" class="text">查看更多</navigator>
		</view>
		<view class="xian"></view>
		<view class="title flex-center-between">
			<view>热门话题</view>
			<view @click="tabJump('/pages/news/index',2)" style="color: #9B9B9B; font-size: 28rpx;">更多</view>
		</view>
		<view class="boxs3">
			<video style="width: 100%;" :src="helper.uploadUrl + video_url"></video>
		<!-- 	<view class="boxs3_content">
				<view class="content_item" @click="jump('/pages/news/info?id=' + articles1.id)">
					<view class="item_title">{{articles1.title}}</view>
					<view class="item_time">{{articles1.updated_at}}</view>
					<view class="item_text_box">
						{{articles1.descr}}
					</view>
				</view>
			</view> -->
		</view>
	<!-- 	<view class="new_content">
			<view @click="jump('/pages/news/info?id=' + row.id)" class="new_item flex-center-start" v-for="(row,i) in articles2" :key="i">
				<view>
					<view class="new_title">{{row.title}}</view>
					<view class="new_info">{{row.category_name}}  {{row.click_count}}阅读</view>
				</view>
				<image class="new_img" :src="helper.uploadUrl + row.image"></image>
			</view>
		</view> -->
		<view class="bulletin" v-if="bulletin_type">
			<view style="height: 100%;" class="flex-center-center">
				<view class="bull_box">
					<image class="icon" src="../../static/gonggao.png"></image>
					<image @click="bulletin_type = !bulletin_type" class="cha" src="../../static/cha.png"></image>
					<view class="text1">公告</view>
					<view class="text2">
						{{tanchu_gg}}
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
				list: [],
				look:true,
				bulletin_type:false,
				tanchu_gg:'',
				hot_fund:[],
				rank_fund:[],
				articles1:'',
				articles2:'',
				total_amount:'',//总资产
				total_revenue:'',//总收益
				is_check:'',
				has_buy:'',
				unreadCount:0,
				jijin_name:'',
				video_url:''
			}
		},
		onPullDownRefresh() {
			this.loadData();
		},

		async onLoad() {
			await this.$onLaunched;
			this.bulletin_type = true;
			let _this = this;
			// #ifdef APP-PLUS  
			_this.helper.post("update_download",{},function(res){
				console.log('阿萨德',res)
			  if(res.data){
			    res = res.data;
			    var newVersion = res.version;
			    //正常用HBuilder测试出来的版本号是HBuilder的版本号，已下是获取自己的版本号
			    // plus.runtime.getProperty(plus.runtime.appid, function(wgtinfo){  
			    //     console.log(wgtinfo.version);
			    // });
			    // var nowVersion = plus.runtime.version;
			    var nowVersion = _this.helper.nowVersion;
			    // var newVersion = "1.0.1";
			    console.log("nowVersion:",nowVersion);
			    console.log("newVersion:",newVersion);
			    var isnew=false;
			    var newV = newVersion.split(".",4);
			    var nowV = nowVersion.split(".",4);
			    // console.log(newV)
			    // console.log(nowV)
			    for ( var i=0; i<newV.length&&i<nowV.length; i++ ) {
			      // console.log(parseInt(newV[i]))
			      // console.log(parseInt(nowV[i]))
			      if(parseInt(newV[i])<parseInt(nowV[i])){
			        break;
			      }else if(parseInt(newV[i])>parseInt(nowV[i])){
			        isnew = true;
			        break;
			      }
			    }
			    // console.log(isnew)
			    if(isnew){//新版本
					// console.log('更新版本')
					uni.downloadFile({  
						url: res.hot_url,
						success: (downloadResult) => {  
							console.log('成功回调', downloadResult) 
							if (downloadResult.statusCode === 200) {  
								plus.runtime.install(downloadResult.tempFilePath, {  
									force: true  
								}, function(e) {  
									console.log('install success...');  
									//  plus.runtime.restart();  
								}, function(e) {  
									console.error('install fail...');  
								});  
							}  
						}  
					});
			    }
			  }
			}) 
			//#endif
		},
		async onShow () {
			await this.$onLaunched;
			this.loadData();
			this.helper.post('user/unreadCount',{},(res) => {
				this.unreadCount = res.data;
			})
			this.helper.post('video/index',{category_id:1,pagesize:1},(res) => {
				this.video_url = res.data.list.data[0].video_url;
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
					url:'/pages/product/select?search_name=' + this.jijin_name
				})
			},
			loadData () {
				this.helper.post('index',{},(res) => {
					this.total_amount = res.data.total_amount;
					this.total_revenue = res.data.total_revenue;
					//轮播
					for (let k in res.data.banner) {
						this.list.push(this.helper.uploadUrl + res.data.banner[k].thumb_url)
					}
					this.tanchu_gg = res.data.tanchu_gg;//公告
					this.hot_fund = res.data.hot_fund;//热门基金
					this.rank_fund = res.data.rank_fund//排行
					this.is_check = res.data.is_check;
					this.has_buy = res.data.has_buy;
					uni.stopPullDownRefresh();
				})
				this.helper.post('articles/index',{pagesize:3,list_type:5},(res) => {
					this.articles2 = res.data.list.data;
					//默认取出第一个
					this.articles1 = this.articles2[0];
					this.articles2.splice(0,1)
					uni.stopPullDownRefresh();
				})
				
			},
			jump (e) {
				uni.navigateTo({
					url:e
				})
			},
			tabJump (e,type) {
				uni.setStorageSync("product", type);
				uni.switchTab({
				    url: e
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
.page{
	overflow: hidden;
	.head{
		overflow: hidden;
		height: 346rpx;
		background-image: url(../../static/home/bg.png);
		background-repeat: no-repeat;
		background-size: 100%;
		padding: 0 34rpx;
		.box1{
			margin-top: 66rpx;
			.search{
				width: 500rpx;
				height: 64rpx;
				border: 2rpx solid #FFFFFF;
				border-radius: 32rpx;
				padding: 0 22rpx;
				color: #FFFFFF;
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
		.box2{
			margin-top: 66rpx;
			.img{
				width: 24rpx;
				height: 12rpx;
			}
			.money{
				font-size: 36rpx;
				color: #FFFFFF;
			}
		}
	}
	.content1{
		flex-wrap: wrap;
		margin-top: 28rpx;
		.item{
			width: 25%;
			font-size: 24rpx;
			text-align: center;
			margin-bottom: 54rpx;
			.img{
				width: 48rpx;
				height: 56rpx;
			}
		}
	}
	.title{
		font-size: 32rpx;
		font-weight: 500;
		margin-top: 44rpx;
		margin-bottom: 44rpx;
		padding: 0 32rpx;
		color: #000000;
	}
	.boxs1{
		padding: 0 32rpx;
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
				padding: 0 98rpx;
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
	.xian{
		width: 100%;
		height: 20rpx;
		background: #F4F4F4;
	}
	.boxs2{
		padding: 0 32rpx;
		.content{
			width: 100%;
			background: #FFFFFF;
			box-shadow: 0px 0px 38rpx 0px rgba(204, 204, 204, 0.35);
			border-radius: 10rpx;
			overflow: hidden;
			padding-top: 50rpx;
			.item{
				margin-bottom: 50rpx;
				.item_title{
					font-size: 32rpx;
					font-weight: bold;
				}
				.tag{
					height: 32rpx;
					background: #ECF2FE;
					border-radius: 16rpx;
					color: #19488A;
					font-size: 24rpx;
					text-align: center;
					line-height: 32rpx;
					margin-top: 10rpx;
					margin-right: 18rpx;
					padding: 0 22rpx;
				}
			}
		}
		.text{
			font-size: 28rpx;
			font-weight: 400;
			color: #19488A;
			text-align: center;
			height: 87rpx;
			line-height: 87rpx;
		}
	}
	.boxs3{
		padding: 0 29rpx;
		margin-bottom: 53rpx;
		.boxs3_content{
			width: 100%;
			height: 243rpx;
			background: #FFF3F3;
			border-radius: 10rpx;
			overflow: hidden;
			.content_item{
				padding: 0 37rpx;
				
				.item_title{
					font-size: 32rpx;
					font-weight: bold;
					color: #000000;
					margin-top: 50rpx;
				}
				.item_time{
					font-size: 26rpx;
					font-weight: 400;
					color: #979797;
					margin-top: 20rpx;
				}
				.item_text_box{
					width: 604rpx;
					height: 68rpx;
					font-size: 26rpx;
					font-family: Source Han Sans CN;
					font-weight: 400;
					color: #333333;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					margin-top: 12rpx;
				}
			}
			
		}
	}
	.new_content{
		padding: 0 30rpx;
		.new_item{
			margin-bottom: 84rpx;
			.new_title{
				font-size: 32rpx;
				font-weight: 400;
				width: 446rpx;
				color: #333333;
				margin-right: 36rpx;
			}
			.new_info{
				font-size: 24rpx;
				font-weight: 400;
				color: #9A9A9A;
				margin-top: 24rpx;
			}
			.new_img{
				width: 221rpx;
				height: 132rpx;
				border-radius: 10rpx;
			}
		}
	}
	.bulletin{
		width: 100%;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.5);
		z-index: 999;
		.bull_box{
			width: 501rpx;
			background: #FFFFFF;
			border-radius: 29rpx;
			position: relative;
			.cha{
				position: absolute;
				right: -54rpx;
				top: -60rpx;
				width: 57rpx;
				height: 57rpx;
			}
			.icon{
				width: 481rpx;
				height: 237rpx;
				margin-left: 20rpx;
			}
			.text1{
				font-size: 46rpx;
				font-weight: bold;
				color: #0086B9;
				text-align: center;
				margin-top: 27rpx;
			}
			.text2{
				padding: 0 30rpx;
				font-size: 25rpx;
				font-weight: 400;
				color: #6F6F6F;
				text-align: center;
				margin-top: 19rpx;
				margin-bottom: 40rpx;
			}
		}
	}
}
</style>
