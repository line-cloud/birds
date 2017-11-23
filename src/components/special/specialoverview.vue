<template>
    <!-- 专题总览页面 -->
	  <div class="pt_fontSizeThree">
	       <!-- 首页头部 -->
	  	   <homeheader></homeheader>
	  	    <!-- 专题组件  -->
	  	   <div class="so_Specialcon" v-for="item in specialdata">
	  	   	    <div class="so_Specialbgdiv">
	  	   	    	 <img src="../../assets/image/specialbg.jpg" class="so_Specialbg">
	  	   	    	 <span class="so_Timedate pt_fontSizeOne">2017-12-21</span>
	  	   	    </div>
	  	   	    <div>
	  	   	    	<p class="so_Ptitle pt_fontSizeTwo">我和一群扛着红旗的社会主义分子，与3K党街头</p>
	  	   	    </div>
	  	   	    <div class="so_Specialnews">
	  	   	    	 <i class="so_Lookeye"></i>
	  	   	    	 <span class="so_Lookeyemount pt_fontSizeOne">14400</span>
	  	   	    	 <i class="so_Share"></i>
	  	   	    	 <span class="so_Sharemount pt_fontSizeOne">14400</span>
	  	   	    </div>
	  	   </div>
	  </div>
</template>
<script type="text/javascript">
   import  homeheader from '../common/homeheader'
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
	export default{
		name:'specialoverview',
		components:{
			'homeheader':homeheader,
		},
		data(){
			return{
				specialdata:[
                    {},{},{},{},{},{},{},{},{},{}
				]
			}
		}
	}
</script>
<style scoped>
     /*专题组件*/
	.so_Specialcon:nth-child(2n){
		width: 1.6rem;
		margin-top: 0.2rem;
		display: inline-block;
		margin-left: 0.2rem;
		margin-right: 0.15rem;
	}
	.so_Specialcon:nth-child(2n+1){
		width: 1.6rem;
		margin-top: 0.2rem;
		display: inline-block;
		margin-right: 0.2rem;
	}
	.so_Timedate{
		 color: #FFFFFF;
         letter-spacing: 0;
         position: absolute;
         top: 0.1rem;
         left: 0.1rem;
         display: inline-block;
         width: 0.75rem;
         height: 0.15rem;
         background: rgba(0,0,0,0.40);
         border-radius: 100px;
         text-align: center;
         line-height: 0.15rem;
	}
	.so_Specialbgdiv{
		 position: relative;
         
	}
	.so_Specialbg{
		width: 100%;
		height: 0.97rem;
		vertical-align: middle;
	}
	.so_Ptitle{
		color: #000000;
        letter-spacing: 0.5px;
        line-height: 0.17rem;
        margin-top: 0.05rem;
	}
	.so_Lookeye{
		 display: inline-block;
		 width: 0.13rem;
		 height: 0.13rem;
		 background: url('../../assets/image/comments.png') no-repeat;
		 background-size: cover;
	}
	.so_Share{
		 display: inline-block;
		 width: 0.13rem;
		 height: 0.13rem;
		 background: url('../../assets/image/comments.png') no-repeat;
		 background-size: cover;
	}
	.so_Lookeyemount{
         color: #9B9B9B;
		 vertical-align: top;
         position: relative;
         top: -0.01rem;
	}
	.so_Sharemount{
        color: #9B9B9B;
        vertical-align: top;
         position: relative;
         top: -0.01rem;
	}
	.so_Specialnews{
		 height: 0.14rem;
		 line-height: 0.14rem;
		 margin-top: 0.1rem;
	}
</style>