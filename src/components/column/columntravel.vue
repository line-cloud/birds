<template>
	<div id="columntravel">
	    <!-- 头部搜索加导航 -->
	 <!--    <homeheader></homeheader> -->
	     <!-- 大图文 -->
		<cotravel></cotravel>
		 <!-- 左右图文 -->
		<horizontal></horizontal>
	</div>
</template>
<script type="text/javascript">
   import homeheader from '../common/homeheader' 
   import cotravel from  '../common/coltravel'
   import horizontal from '../common/spehorizontalGraphic'
	export default{
		name:'coltravel',
		components:{
            'cotravel':cotravel,
            'homeheader':homeheader,
            'horizontal':horizontal,
		}
	}
</script>