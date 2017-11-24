<template>
   <div id="home">
     <div>
              <!-- 首页头部 -->
             <!-- <homeheader></homeheader>  -->
        </div>
        <div>
            <!-- 全景加标题 -->
            <panoramic></panoramic>
        </div>
             <!-- 头部专题 -->
        <div class="he_Scontain" >
             <ul class="he_Specialul">
                 <li class="he_Specialli">
                    <img src="../../assets/image/specialTwo.png" class="he_Specialimg" @click="specialover">
                 </li>
                 <li class="he_Specialli">
                    <img src="../../assets/image/specialOne.png" class="he_Specialimg" @click="specialpage">
                 </li>
                 <li class="he_Specialli">
                    <img src="../../assets/image/specialTwo.png" class="he_Specialimg" @click="picture">
                 </li>
                 <li class="he_Specialli">
                    <img src="../../assets/image/specialOne.png" class="he_Specialimg">
                 </li>
             </ul>
        </div>
        <div>
             <!-- 专题左右图文 -->  
             <horGraphic></horGraphic>
             <horGraphic></horGraphic>
        </div>
        <div>
             <!-- 专题上下图文 -->
             <vertical></vertical>
        </div>
        
        <!-- <div> -->
        <!-- 专题左右图文 -->
             <!-- <horGraphic></horGraphic>
             <horGraphic></horGraphic> -->
        <!-- </div> -->
   </div>
</template>
<script type="text/javascript">
import homeheader from '../common/homeheader'
import horGraphic from '../common/spehorizontalGraphic'
import vertical from '../common/speverticalGraphic'
import panoramic from '../common/spepanoramic'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

  document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
  export default{
      name:'home',
      components:{
         'homeheader':homeheader,
         'horGraphic':horGraphic,
         'vertical':vertical,
         'panoramic':panoramic,
           swiper,
           swiperSlide,
      },
      data(){
         return{
               swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
              // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
              // notNextTick: true,
              // autoplay: 3000,
              // grabCursor : true,
              // setWrapperSize :true,
              // autoHeight: true,
              // autoplay:3000,
              // setWrapperSize:true,
              // grabCursor:true,
              // autoHeight:true,
              slidesPerView:3,
              // freeMode : true,
              resistanceRatio : 0,
             // loop : true,
             // slidesPerView : 'auto',
             // loopedSlides :8,
              // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
              debugger: true,
        }
         }
      },
      mounted(){
        // var mySwiper = new Swiper('.swiper-container',{ 
        //       // width:120.5, 
        //       // height : 300 
        //       }); 
      },
      methods:{
           specialover:function(){
               this.$router.push('/special/specialoverview')
           },
           specialpage:function(){
               this.$router.push('/special/specialFirst')
           },
           picture:function(){
              this.$router.push('/galleryvideo/lookpicture')
           },
           box:function(event){
           }
      }

  }
</script>
<style scoped>
 .he_Specialul::-webkit-scrollbar {
    display: none;
}
    #home{
      width: 3.75rem;
      overflow-x: hidden;
    }
    .he_Specialimg{
         width: 100%;
         height: 100%;
    }
    .he_Scontain{
        position: relative;
        width: 3.75rem;
        height: 0.9rem;
        background:#F4F4F4;
        overflow-x: hidden;
    }
    .he_Specialul{
        font-size: 0;
        margin-top: 0.1rem;
         white-space: nowrap;
        font-size: 0;
        overflow-x: scroll;
    }
    .he_Specialli:nth-child(1){
         margin-left: 0.1rem;
    }
  .he_Specialli{
     display: inline-block;
     width: 1.15rem;
     height: 0.7rem;
     margin-right: 0.05rem;
  }
  .he_minuui{
      width: 3.75rem;
      height: 1.3rem;
      /*border: 0.01rem solid black;*/
      display: inline-block;
  }
  .asd{
    width: 5rem;
  }
  .swiper-slide{
    display: inline-block;
    height: 0.5rem;
    width: 1.15rem!important;
    /*margin-right: 0.05rem;*/
    /*border: 0.01rem solid black;*/
  }
  .pox{
     display: inline-block;
     width: 1.2rem;
     height: 0.2rem;
     border: 0.01rem solid black;
     /*float:left;*/
  }
  .qwe{
    width: 5rem;
  }
</style>