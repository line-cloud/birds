<template>
       <!-- 要闻顶部新闻列表组件 -->
	 <div>
	   <div class="horizontalGraphic" v-for="item in data" @click="jumpfun(item.url)">
	 	  <div class="hg_Specimgdiv pt_fontSizeTwo">
	 	  	   <img v-lazy="item.headurlone" class="hg_Specimg">
	 	  </div>
	 	  <div class="hg_Spetext">
	 	  	  <p class="hg_Specialtext pt_fontSizeFours">{{item.title}}</p>
	 	  	  <div class="hg_Newstime pt_fontSizeOnes">
		 	  	  <span class="hg_Content">{{item.copyfrom}}</span> 
	               <i class="hg_Vertical"></i>
		 	  	  <span class="hg_Timer">{{item.pubtime|gettime}}</span>
		 	  	  <div style="clear:both"></div>
              </div>
	 	  </div>
	 	  <div style="clear:both"></div>
	   </div>
	 </div>
</template>
<script type="text/javascript">
import {gettimebefore} from '../../assets/js/turnTimes.js'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
	 export default{
	 	props:['data'],
	 	data(){
           return{
               
           }
	 	},
	 	// 过滤日期函数
	 	filters:{
            gettime:function(timer){
            	 return gettimebefore(timer)
            }  
	 	},
	 	methods: {
	 		 jumpfun:function(url){
              if(this.$cookies.get('tabstyle')==1){
                  window.location.href=url+'?lan=1'
              }else if(this.$cookies.get('tabstyle')==2){
                   window.location.href=url+'?lan=2'
              }
            }
	 	},
	 }
</script>
<style scoped>
   .horizontalGraphic{
       width: 3.55rem;
       margin: 0.15rem auto 0 auto;
       padding-bottom: 0.15rem;
       border-bottom: 1px solid #F4F5F6; 
  }
   .hg_Specimgdiv{
        width: 1.1rem;
		height: 0.78rem;
        float: left;
   }
   .hg_Spetext{
   	   float: left;
   }
	.hg_Specimg{
		 width: 100%;
		 height: 100%;
		 border-radius: 0.05rem;
	}
	.hg_Specialtext{
		 color: #000000;
		 width: 2.35rem;
         letter-spacing: -0.09px;
         line-height: 0.20rem;
         margin-left: 0.1rem;
         min-height: 0.4rem;
	}
	.hg_Newstime{
		margin-top: 0.25rem;
		margin-left: 0.1rem;
		color: #B2B2B2;
		height: 0.12rem;
		line-height: 0.12rem;
		position: relative;
		color: #A0A0A0;
	}
	.hg_Vertical{
		display: inline-block;
		border-right: 0.01rem solid #D7D7D7;;
		width: 0.01rem;
		height: 0.07rem;
		position: absolute;
		top: 0.02rem;
		margin-left: 0.05rem;
		float: left;
	}
	.hg_Content{
		display: inline-block;
		height: 0.12rem;
		line-height: 0.12rem;
		float: left;
	}
	.hg_Timer{
		display: inline-block;
		height: 0.12rem;
		line-height: 0.12rem;
		margin-left: 0.12rem;
		float: left;
	}
</style>