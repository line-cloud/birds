<template>
   <!-- 图库 -->
	<div id="gallery">
		<!-- <homeheader></homeheader> -->
		<!-- 图库组件 -->
		<div class="gy_Pictext">
		   <img src="../../assets/image/specialbg.jpg" class="gy_Specialbg">
			 <div class="gy_Descripte">
			 	  <p class="gy_Title pt_fontSizeThree">致敬这个平潭人,一份工作,干了四十几年我们很多人的儿时回忆！</p>
                  <div class="pt_fontSizeOne gy_Numtain">
                  	  <span class="gy_Looknum">16万次浏览</span><span class="gy_Picnum">18张图</span>
                  </div>
                  <div class="gy_CwhiteLogo">
                  	   <img src="../../assets/image/whiteLogo.png" class="gy_WhiteLogo">
                  </div>
			 </div>
		</div>
	</div>
</template>
<script type="text/javascript">
import homeheader from '../common/homeheader'
	export default{
		components:{
        'homeheader':homeheader,
		}
	}
</script>
<style scoped>
	.gy_Pictext{
	    width:100%;
	    height: 2.27rem;
	    position: relative;
	}
	.gy_Specialbg{
		width: 100%;
		height: 100%;
	}
	.gy_Descripte{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
	}
	.gy_Title{
		color: #FFFFFF;
        letter-spacing: 0;
        line-height: 0.24rem;
        margin: 0.04rem auto;
        width: 3.30rem;
	}
	.gy_Numtain{
		margin-top: 0.1rem;
		height: 0.12rem;
		line-height: 0.12rem;
	}
	.gy_Looknum{
		 color: #FFFFFF;
         letter-spacing: 0;
         display: inline-block;
         margin-right: 0.1rem;
         margin-left: 0.2rem;
	}
	.gy_Picnum{
		color: #FFFFFF;
        letter-spacing: 0;
        display: inline-block;
	}
	.gy_CwhiteLogo{
		width: 0.78rem;
		height: 0.26rem;
		position: absolute;
		bottom: 0.1rem;
		right: 0.2rem;
	}
	.gy_WhiteLogo{
		width: 100%;
		height: 100%;
		position: absolute;
	}
</style>