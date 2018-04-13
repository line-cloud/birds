<template>
<div>
    <!-- 专题头部 -->  
	<div id="specialheader" class="pt_fontSizeThree" >
		  <img src="../../assets/image/goback.png" class="sh_Backchevron"  @click="callback">
		  <div class="sh_Pointse" >···</div>
	</div>
	<div class="sr_Specialbgdiv">
		 <img src="../../assets/image/specialbg.jpg" class="sr_Specialbg">
	</div>
</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			// 返回上一页面事件
			callback:function(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
	#specialheader{
		width: 100%;
		height: 0.45rem;
        box-shadow: 0 0 0 0 #B2B2B2;
        position: relative;
        text-align: center;
	}
	.sh_Backchevron{
		 width: 0.13rem;
		 height: 0.21rem;
		 left: 0.1rem;
		 top: 0.13rem;
		 position: absolute;
		 transform: rotate(90deg);
	}
	.sh_Pointse{
		 text-align: center;
         font-size: 20px;
         line-height: 0.4rem;
         width: 0.4rem;
         height: 0.4rem;
         font-weight: bold;
         float: right;
	}
	.sr_Specialbgdiv{
		 height: 1.17rem;
         padding-bottom: 0.1rem;
	}
	.sr_Specialbg{
		width: 100%;
        height: 100%;
	}
</style>