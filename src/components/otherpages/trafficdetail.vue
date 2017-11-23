<template>
	<div id="trafficdetail">
		<homeheader></homeheader>
		<div class="td_Traffic pt_fontSizeThree">• 2017年8月7日11时36分37秒 闽AP055P 车主 王某凡 西航万北北向电警 不按导向 </div>
	</div>
</template>
<script type="text/javascript">
 import homeheader from '../common/homeheader'
	export default{
		name:'trafficdetail',
		components:{
           'homeheader':homeheader,
		}
	}
</script>
<style scoped>
	.td_Traffic{
		color: #000000;
		letter-spacing: 0;
		line-height: 27px;
		width: 3.35rem;
		margin: 0.2rem auto;
	}
</style>