<template>
      <!-- 栏目页中新闻列表组件 -->
  <div id="newslist">
	  <div v-for="item in data" @click="jumpfun(item.url)">
		       <!-- 多图部分 -->
		<div class ="verticalGraphic" v-if="item.way==3">
	 	  <div>
	 	  	  <p class="vg_Vertitle pt_fontSizeFours">{{item.title}}</p>
	 	  </div>
	 	  <div class="vg_Specontain">
	 	  	   <img v-lazy="item.headurlone" class="vg_Graphic">
	 	  	   <img v-lazy="item.headurltwo" class="vg_Graphic">
	 	  	   <img v-lazy="item.headurlthree" class="vg_Graphic">
	 	  </div>
           <div class="hg_Newstimes pt_fontSizeOnes">
	 	  	  <span class="hg_Content">{{item.copyfrom}}</span> 
               <i class="hg_Vertical"></i>
	 	  	  <span class="hg_Timer">{{item.pubtime|gettime}}</span>
	 	  	  <div style="clear:both"></div>
          </div>
	    </div>
             <!-- 多图部分结束 -->
              <!-- 无图 -->
           <div  v-if="item.headurlone==''&&item.way==1 ">
              <p class="cu_Nopicture pt_fontSizeFours" >{{item.title}}</p>
               <p class="vd_Pasttime  pt_fontSizeOnes">
                   <span class="vd_Copyfrom">{{item.copyfrom}}</span>
                   <i class="hg_Vertical"></i> 
                  <span class="vd_Pubtime">{{item.pubtime|gettime}}</span>
                  <div style="clear:both"></div>
                  </p>
           </div>
              <!-- 无图结束 -->

              <!-- 视频部分 -->
            <div class="nt_Video" v-if="item.way==2">
            	<p class="nt_Title pt_fontSizeFours">{{item.title}}</p>
            	<div class="nt_Videoimgdiv">
            	   <img v-lazy="item.headurlone" class="nt_Videoimg">
                   <img src="../../assets/image/videologos.png" class="nt_Videologos" @click="jumpfun(item.url)">
            	</div>
            	 <div class="hg_Newstimes pt_fontSizeOnes">
			 	  	  <span class="hg_Content">{{item.copyfrom}}</span> 
		               <i class="hg_Vertical"></i>
			 	  	  <span class="hg_Timer">{{item.pubtime|gettime}}</span>
			 	  	  <div style="clear:both"></div>
                 </div>
            </div>
              <!-- 视频部分结束 -->

             <!-- 图文 -->
         <div class="horizontalGraphic" v-if="item.headurlone!=''&&item.way==1 ">
	 	  <div class="hg_Specimgdiv pt_fontSizeTwo">
	 	  	   <img v-lazy="item.headurlone" class="hg_Specimg">
	 	  </div>
	 	  <div class="hg_Spetext">
	 	  	  <p class="hg_Specialtext pt_fontSizeFours">
	 	  	  	  {{item.title}}
	 	  	  </p>
	 	  	  <div class="hg_Newstime pt_fontSizeOnes">
		 	  	  <span class="hg_Content">{{item.copyfrom}}</span> 
	               <i class="hg_Vertical"></i>
		 	  	  <span class="hg_Timer">{{item.pubtime|gettime}}</span>
		 	  	  <div style="clear:both"></div>
              </div>
	 	  </div>
	 	  <div style="clear:both"></div>
	   </div>
	        <!-- 图文结束 -->
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
		updated:function(){
           
		},
		mounted:function(){
		},
		// 过滤新闻发布日期函数
		filters:{
			// 过滤日期函数
              gettime:function(timer){
              	  return gettimebefore(timer)
              }
		},
		methods:{
			jumpfun:function(url){
				if(this.$cookies.get('tabstyle')==1){
                  window.location.href=url+'?lan=1'
              }else if(this.$cookies.get('tabstyle')==2){
                   window.location.href=url+'?lan=2'
              }
			}
		}
	}
</script>
<style scoped>
		#newslist{
			height: auto;
		}
	 .verticalGraphic{
      width: 3.55rem;
      margin: 0 auto;
      border-bottom:0.01rem solid #F4F5F6;
      padding-bottom: 0.15rem;
}
	.vg_Graphic{
	  width: 1.15rem;
      height: 0.78rem;
      margin-top: 0.15rem;
      margin-right: 0.05rem;
      border-radius: 0.05rem;
	}
	.vg_Graphic:nth-child(3){
		 margin-right: 0;
	}
	.vg_Vertitle{
		 color: #000000;
		 line-height: 0.22rem;
		 margin-top: 0.15rem;
	}
	.vg_Specontain{
		 font-size: 0;
	}
	.hg_Vertical{
		border-right: 0.01rem solid #D7D7D7;
		width: 0.01rem;
		height: 0.07rem;
		position: absolute;
		top: 0.01rem;
		margin-left: 0.05rem;
		float: left;
	}
	.vd_Vertical{
    	 position: absolute;
         width: 0.01rem;
         border-right: 0.01rem solid #D7D7D7;
         height: 0.07rem;
         margin-left: 0.05rem;
         top: 0.01rem;
         float: left;
    }
	.hg_Content{
		display: inline-block;
		float: left;
		position: relative;	
		top: -0.01rem;
	}
	.hg_Timer{
		display: inline-block;
		margin-left: 0.12rem;
		position: relative;
		top: -0.01rem;
		float: left;
	}
	.vd_Pubtime{
    	float: left;
    	margin-left: 0.12rem;
    }
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
         line-height: 0.2rem;
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
	.hg_Newstimes{
		margin-top: 0.1rem;
		color: #B2B2B2;
		height: 0.12rem;
		line-height: 0.12rem;
		position: relative;
		color: #A0A0A0;
	}
	.nt_Video{
		width: 3.55rem;
		margin: 0 auto;
		padding-bottom: 0.1rem ;
		border-bottom: 0.01rem solid #F4F5F6;
	}
	.nt_Title{
		color: #000000;
		letter-spacing: 0;
		line-height: 0.2rem;
		width: 3.55rem;
		margin: 0.15rem auto 0.1rem auto;
	}
	.nt_Videoimg{
        width: 100%;
        height: 100%;
        border-radius: 0.05rem;
	}
	.nt_Videoimgdiv{
		width: 3.55rem;
		height: 1.9rem;
		margin: 0 auto;
		position: relative;
	}
	.nt_Videologos{
		width: 0.4rem;
		height: 0.4rem;
		position: absolute;
		top: 0.75rem;
        left:1.6rem; 
	}
	/*无图*/
	.cu_Nopicture{
        width: 3.55rem;
        margin: 0.15rem auto  0.1rem auto;
        color: #000000;
        letter-spacing: 0;
        line-height: 0.2rem;
    }
    .vd_Pasttime{
    	position: relative;
        color: #A0A0A0;
        letter-spacing: 0;
        height: 0.12rem;
        line-height: 0.12rem;
        width: 3.55rem;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 0.15rem;
        border-bottom: 0.01rem solid #F4F5F6;
    }
    .vd_Copyfrom{
        float: left;
    }
    
</style>