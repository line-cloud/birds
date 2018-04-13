<template>
    <!-- 栏目页头部 轮播组件-->
	<div class="sf_Ptext">
           <div  class="sf_specialbgdiv">
            <mt-swipe :auto="3000" ref="swipe" >
               <mt-swipe-item v-for="(item,index) in data"  :key ="index" >
                 <img v-lazy="item.headurlone" class="sf_0specialbg" @click="jumpfun(item.url)">
                 <div class="sf_Titlediv"> 
                     <img src="../../assets/image/backimg.png" class="sf_Backimg">
                     <p class="sf_Title pt_fontSizeThree">{{item.title}}</p>
                 </div>
                </mt-swipe-item>
             </mt-swipe>
           </div>
    </div>
</template>
<script type="text/javascript">
import api from '../../api/api.js'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
    export default{
       name:'panoramic',
       props:['data'],
       data(){
          return{

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
       },
       watch: {
        // 深度检测传递的data值,初始化swipe函数
           data:{
              handler:function(){
                this.$refs.swipe.initTimer()
              },
              deep:true,
           }
          },
    }
</script>
<style scoped>
	.sf_Ptext{
        width: 3.75rem;
        height:2.1rem;
    }
    .sf_specialbgdiv{
         height: 2.1rem;
         width: 100%;
    }
     .sf_specialbg{
        width: 100%;
        height: 100%;
        /*opacity: 0;*/
    }
    .sf_Titlediv{
        color: #FFFFFF;
        letter-spacing: 0;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 0.36rem;
        line-height: 0.36rem;
        box-sizing: border-box;
    }
     .sf_Title{
        width: 2.8rem;
        height: 0.36rem;
        line-height: 0.36rem;
        white-space: nowrap;
        overflow: hidden;
        margin-left: 0.1rem;
        text-overflow: ellipsis;
        position: absolute;
        top: 0;
        z-index: 10;
       }
       .fade-enter-active, .fade-leave-active {
             transition: opacity 2s
      }
      .fade-enter, .fade-leave-active {
             opacity: 0
      }
      .sp_Roundul{
          position: absolute;
          z-index: 100;
          bottom: 0.1rem;
          right: 0.2rem;
          font-size: 12px;
      }
      .sp_Round{
          width: 0.05rem;
          height: 0.05rem;
          display: inline-block;
          border-radius: 50%;
          background:#ffffff;
      }
      .sf_ractive{
          background: red;
      }
      .sf_Backimg{
          position: absolute;
          width: 100%;
          height: 0.36rem;
          top: 0;
          z-index: 5;
      }
      .mint-swipe-indicators{
          position: absolute;
          bottom: 0.1rem;
          right: 0.2rem!important;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
      }
      .mint-swipe-indicators{
         position: absolute;
          bottom: 0.1rem;
          left: 80%;
          -webkit-transform: translateX(-50%);
          transform: translateX(-50%);
      }
      .mint-swipe-indicator{
           background: red;
      }
</style>