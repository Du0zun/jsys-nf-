<template>
	<view class="page">
		<view class="xian"></view>
		<view class="head">
			<view class="flex-center-between box">
				<view @click="choose1 = !choose1;choose2 = false;choose3 = false;" class="flex-center-start">
					<view :style="{color:choose1?'#004EA3':'#000000'}">类型</view>
					<image src="../../static/product/xia.png" class="icon"></image>
				</view>
				<view @click="choose2 = !choose2;choose1 = false;choose3 = false;" class="flex-center-start">
					<view :style="{color:choose2?'#004EA3':'#000000'}">状态</view>
					<image src="../../static/product/xia.png" class="icon"></image>
				</view>
				<view @click="choose3 = !choose3;choose2 = false;choose1 = false;" class="flex-center-start">
					<view :style="{color:choose3?'#004EA3':'#000000'}">其他</view>
					<image src="../../static/product/xia.png" class="icon"></image>
				</view>
			</view>
			<view @click="choose1 = false;choose2 = false;choose3 = false;" class="mask_box" v-if="choose1 || choose2 || choose3">
				<view @click.stop="" class="box1">
					<view v-if="choose1" class="box1_content flex-center-start">
						<view class="flex-center-center" style="width: 33%;" v-for="(row,i) in select_style" :key="i">
							<view @click.stop="select_style_type = i" :class="{choose_item:select_style_type == i}"  class="item">{{row}}</view>
						</view>
					</view>
					<view v-if="choose2" class="box1_title">总规模</view>
					<view v-if="choose2" class="box1_content flex-center-start">
						<view class="flex-center-center" style="width: 33%;" v-for="(row,i) in select_scale " :key="i">
							<view @click.stop="select_scale_type = row.id;select_scale_label = row.tab" :class="{choose_item:select_scale_type == row.id}" class="item">{{row.tab}}</view>
						</view>
					</view>
					<view v-if="choose2" class="box1_title">交易状态</view>
					<view v-if="choose2" class="box1_content flex-center-start">
						<view class="flex-center-center" style="width: 33%;" v-for="(row,i) in select_state " :key="i">
							<view @click.stop="select_state_type = row.id" :class="{choose_item:select_state_type == row.id}" class="item">{{row.tab}}</view>
						</view>
					</view>
					<view v-if="choose2" class="box1_title">风险等级</view>
					<view v-if="choose2" class="box1_content flex-center-start">
						<view class="flex-center-center" style="width: 33%;" v-for="(row,i) in select_risk " :key="i">
							<view @click.stop="select_risk_type = i + 1" :class="{choose_item:select_risk_type == i + 1}" class="item">{{row}}</view>
						</view>
					</view>
					<view v-if="choose3" class="box1_title">个人起投金额</view>
					<view v-if="choose3" class="box1_content flex-center-start">
						<view class="flex-center-center" style="width: 33%;" v-for="(row,i) in select_money " :key="i">
							<view @click.stop="select_money_type = row.id;select_money_label = row.tab" :class="{choose_item:select_money_type == row.id}" class="item">{{row.tab}}</view>
						</view>
					</view>
					<view class="btn_box flex-center-between">
						<view @click.stop="Reset()" class="btn1">重置</view>
						<view @click.stop="submit()" class="btn2">确认</view>
					</view>
				</view>
			</view>
		</view>
		<view class="select_box">
			<view class="box flex-center-between">
				<view class="item">{{select_style[select_style_type]}}</view>
				<view class="item">
					{{select_scale_label?select_scale_label:'全部'}}
					{{select_risk[select_risk_type-1]}}
				</view>
				<view class="item">{{select_money_label?select_money_label:'全部'}}</view>
			</view>
		</view>
		<view class="title">
			<view class="box flex-center-between">
				<view>基金名称</view>
				<view @click="orderClick('qtje')" class="flex-center-start">
					<image v-if="grj_type == 'asc'" class="icon" src="../../static/product/down.png"></image>
					<image v-if="grj_type != 'asc'" class="icon" src="../../static/product/up.png"></image>
					<view style="margin-left: 10rpx;">购入价</view>
				</view>
				<view @click="orderClick('jyrsy')" class="flex-center-start">
					<view style="margin-right: 10rpx;">日收益</view>
					<image v-if="rsy_type == 'asc'" class="icon" src="../../static/product/down.png"></image>
					<image v-if="rsy_type != 'asc'" class="icon" src="../../static/product/up.png"></image>
				</view>
			</view>
		</view>
		<view class="content">
			<view @click="jump('/pages/product/info?id=' + row.id)" class="item flex-center-between" v-for="(row,i) in list " :key="i">
				<view style="width:120rpx;">
					<view class="text1">{{row.title}}</view>
					<!-- <view class="text2">{{row.genre}}{{row.risk_level}}</view> -->
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
				select_style_type:0,//类型
				select_style:[],//类型
				select_scale_type:0,//总规模
				select_scale_label:'',//规模文字
				select_scale:[//总规模
					{id:1,tab:'5亿以下'},
					{id:2,tab:'5-10亿'},
					{id:3,tab:'10-30亿'},
					{id:4,tab:'30-100亿'},
					{id:5,tab:'100亿以上'},
				],
				select_state_type:0,//交易状态
				select_state:[//交易状态
					{id:0,tab:'可购买'},
					{id:1,tab:'不可购买'},
				],
				select_risk_type:0,//风险等级
				select_risk:[//风险等级
					{id:1,tab:'低风险'},
					{id:2,tab:'中低风险'},
					{id:3,tab:'中风险'},
					{id:4,tab:'中高风险'},
					{id:5,tab:'高风险'},
				],
				select_money_type:0,//个人起头金额
				select_money_label:'',//起头文字
				select_money:[//个人起头金额
					{id:1,tab:'0.01-10元'},
					{id:2,tab:'10-100元'},
					{id:3,tab:'100-1000元'},
					{id:4,tab:'1000-500万元'},
					{id:5,tab:'500万元以上'},
				],
				choose1:false,
				choose2:false,
				choose3:false,
				list:[],
				page:0,
				last_page:1,
				search_name:'',
				order:'qtje',//购入价qtje  日收益jyrsy  热门排行 isrm
				sort:'asc', //asc 正序  desc倒序,
				grj_type:'asc',//asc 正序  desc倒序,
				rsy_type:'asc'//asc 正序  desc倒序,
		    }
		},
		onLoad (e) {
			if(e){
				this.search_name = e.search_name;
			}
			this.helper.post('index/getCondition',{},(res) => {
				this.select_style = res.data.genre;
				this.select_risk = res.data.risk_level;
			})
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
			jump (e) {
				uni.navigateTo({
					url:e
				})
			},
			loadData () {
				this.page ++ 
				if (this.page > this.last_page) {
					return;
				}
				let data = {
					page : this.page,
					genre : this.select_style_type == 0?'':this.select_style_type,//类型
					tzzt : this.select_state_type,//交易状态
					risk_level : this.select_risk_type,//风险等级
					xmgm : this.select_scale_type, //规模
					qtje : this.select_money_type, //起投金额
					search_name:this.search_name?this.search_name:'',
					sort:this.sort,
					order:this.order
				}
				this.helper.post('projects/13',data,(res) => {
					this.list.push(...res.data.products.data)
					this.last_page = res.data.products.last_page;
				})
			},
			Reset () {
				if (this.choose1) {//类型
					this.select_style_type = 0;
				}
				if (this.choose2) {//状态
					this.select_scale_type = 0;
					this.select_state_type = 0;
					this.select_risk_type = 0;
				}
				if (this.choose3) {//其他
					this.select_money_type = 0;
				}
			},
			submit () {
				this.list = [];
				this.page = 0;
				this.last_page = 1;
				this.loadData();
				this.choose1 = false;
				this.choose2 = false;
				this.choose3 = false;
				
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
		.head{
			height: 73rpx;
			padding: 0 96rpx;
			position: relative;
			.box{
				height: 100%;
				font-size: 30rpx;
				font-weight: 400;
				color: #000000;
				.icon{
					width: 20rpx;
					height: 11rpx;
					margin-left: 12rpx;
				}
			}
			.mask_box{
				width: 100%;
				height: 100vh;
				position: absolute;
				left: 0;
				top: 70rpx;
				z-index: 10;
				background-color: rgba(0,0,0,0.4);
				.box1{
					width: 100%;
					background: #EAEAEA;
					overflow: hidden;
					.box1_title{
						font-size: 28rpx;
						font-weight: 400;
						color: #666666;
						margin-left: 27rpx;
						margin-top: 23rpx;
					}
					.box1_content{
						flex-wrap: wrap;
						padding: 0 43rpx;
						margin-top: 30rpx;
						.item{
							width: 193rpx;
							height: 60rpx;
							background: #FFFFFF;
							border: 2rpx solid #B5B5B5;
							border-radius: 6rpx;
							font-size: 24rpx;
							font-weight: 400;
							color: #666666;
							line-height: 60rpx;
							text-align: center;
							margin-bottom: 29rpx;
						}
						.choose_item{
							border: 2rpx solid #004299;
							color: #004299;
						}
					}
					.btn_box{
						padding: 0 108rpx;
						margin-top: 40rpx;
						margin-bottom: 31rpx;
						.btn1{
							width: 220rpx;
							height: 60rpx;
							background: #EAEAEA;
							border: 2rpx solid #004299;
							border-radius: 10rpx;
							font-size: 32rpx;
							font-weight: 400;
							color: #004EA3;
							text-align: center;
							line-height: 60rpx;
						}
						.btn2{
							width: 220rpx;
							height: 60rpx;
							background: #004EA3;
							border-radius: 10rpx;
							font-size: 32rpx;
							font-weight: 400;
							color: #FFFFFF;
							text-align: center;
							line-height: 60rpx;
						}
					}
				}
			}
		}
		.select_box{
			width: 100%;
			height: 89rpx;
			background: #EBEBEB;
			.box{
				height: 100%;
				padding: 0 63rpx;
				.item{
					width: 147rpx;
					height: 50rpx;
					background: #FFFFFF;
					border: 2rpx solid #B5B5B5;
					border-radius: 6rpx;
					font-size: 24rpx;
					font-weight: 400;
					color: #999999;
					text-align: center;
					line-height: 50rpx;
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
			}
		}
		
		.title{
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