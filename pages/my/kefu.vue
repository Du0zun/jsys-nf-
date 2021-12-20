<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="link"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
		    return {
				link:''
		    }
		},
		onLoad (e) {
			this.link = e.link;
		},
		methods:{
			
		}
	}
</script>

<style lang="scss" scoped>
</style>
