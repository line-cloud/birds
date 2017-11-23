<template>
    <!-- 专题头部 -->
	<div id="specialheader" class="pt_fontSizeThree" >
		  <img src="../../assets/image/backchevron.png" class="sh_Backchevron"  @click="box">
		  <!-- <span class="sh_Backchevron" @click="box">返回</span> -->
		  <span class="sh_Spepage">专题页</span>
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			box:function(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
	#specialheader{
		width: 3.75rem;
		height: 0.64rem;
		background: #0061E3;
        box-shadow: 0 0 0 0 #B2B2B2;
        position: relative;
        text-align: center;
	}
	.sh_Backchevron{
		 width: 0.13rem;
		 height: 0.21rem;
		 left: 0.1rem;
		 top: 0.3rem;
		 position: absolute;
	}
	.sh_Spepage{
		color: #FFFFFF;
        letter-spacing: -0.41px;
        height: 0.18rem;
        line-height: 0.18rem;
        display: inline-block;
        margin-top: 0.3rem;
	}
</style>