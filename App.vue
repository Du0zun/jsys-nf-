<script>
// 热更新

	export default {
		onLaunch: function() {
			console.log('App Launch')

			//#ifdef APP-PLUS
			
			//修改默认的 ‘再按一次退出应用’ 改为退出到后台
			let main = plus.android.runtimeMainActivity();
				plus.runtime.quit = function(){
				main.moveTaskToBack(false);
			};
			plus.nativeUI.toast = (function(str){
				if(str == '再按一次退出应用'){
					main.moveTaskToBack(false);
					return false;
				}else{
					uni.showToast({
						title: 'Press again to exit the application',
						icon:'none',
					})
				}
			});
			//#endif
			//获取线路
			let lock = true;
			let lock2 = true;
			uni.request({
				url: 'http://sysad.51wgx.com/api/getapilink',
				method: 'POST',
				data: {},
				header:{
				"content-type":'application/x-www-form-urlencoded'
				},
				success: res => {
					console.log('获取路线',res)
					if (!lock){return;}
					lock = false;
					let ShareUrl = res.data.ShareUrl
					let url_data = res.data.data;
					// let url_data = this.helper.api_url;
					// url_data.push(...data)
					for (let k in url_data) {
						uni.request({
							url: url_data[k].api_link+'/api/index',
							method: 'POST',
							data: {},
							header:{
							"content-type":'application/x-www-form-urlencoded'
							},
							success: res => {
								if (res.statusCode == 200) {
									if (!lock2){return;}
									console.log('成功的',url_data[k].api_link)
									lock2 = false;
									let apiRootUrl = url_data[k].api_link + '/api/';
									let invite = ShareUrl;
									let uploadUrl = url_data[k].api_link;
									this.helper.apiRootUrl = apiRootUrl;
									this.helper.invite = invite;
									this.helper.uploadUrl = uploadUrl;
									this.helper.set_api_upload_Url(apiRootUrl,invite,uploadUrl);
									this.$isResolve();
									// this.helper.line_data.push(url_data[k].api_link);
								}
							},

						});
					}
				},
			});
			
		},
		onShow: function() {
			console.log('App Show') 
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
	
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import "colorui/icon.css";
	/*每个页面公共css */
	
	rich-text{
		image{
			width: 100%;
		}
	}
	uni-page{
		font-size: 28upx;
		color: #333333;
	}
</style>
