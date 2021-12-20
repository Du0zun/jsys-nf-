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
