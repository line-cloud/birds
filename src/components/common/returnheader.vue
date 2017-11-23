<template>
        <!-- 返回上一级头部 -->
	<div id="returnheader">
		 <div class="pt_fontSizeTwo rh_Backchediv">
		 	  <img src="../../assets/image/backchevron.png" class="rh_Backchevron" @click="backchevron">
			 <img src="../../assets/image/more.png" class="rh_More">
			 <div style="clear:both"></div>
		 </div>
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			backchevron:function (){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
   .rh_Backchediv{
	    height: 0.64rem;	
	    background: black; 
	}
	.rh_Backchevron{
		width: 0.13rem;
		height: 0.21rem;
		float: left;
		margin-left: 0.1rem;
		margin-top: 0.30rem;
	}
	.rh_More{
		 width: 0.23rem;
		 height: 0.05rem;
		 float: right;
		 margin-top: 0.38rem;
		 margin-right: 0.1rem;
	}
	
</style>