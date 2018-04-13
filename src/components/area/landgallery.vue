<template>
           <!-- 图库 -->
<div class="pt_fontSizeTwo Loadmorediv" id="specialFirst">
  <div class="lg_Loadmorediv">
      <!-- 下拉刷新上拉加载控件 -->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
        <div>
            <!-- 图片列表 -->
          <div v-for="(item,index) in getlanddata">
             <div class="pf_Panovideo">
                  <img v-lazy="item.img" class="pf_SpecialTwo" @click="jumpfun(item.url)">
                   <div class="pf_Landbackdiv" @click="jumpfun(item.url)">
                      <p class="pf_Panotitle pt_fontSizeFour">
                        <span class="itemtitle">{{item.title}}</span>
                      </p>
                     <p class="pf_Release pt_fontSizeTwo">
                        <span class="pf_Releasetime">{{item.pubtime|gettime}}</span>
                        <span class="pf_Panomount">{{item.imgtotal}}张图</span>
                     </p>
                   </div>
             </div>
             <div class="pt_fontSizeTwo">
                  <div class="pf_Panotext">
                       <p class="pf_Panotextp" @click="jumpfun(item.url)">{{item.desc}}</p>
                  </div>
                  <div class="pf_Commeninfo">
                      <button class="pf_Debutton bdsharebuttonbox"><img src="../../assets/image/shares.png"  class="pf_Share"  data-cmd="more" ></button>
                       <i class="pf_Direction box" @click="direction(index)"></i>
                       <div style="clear:both"></div>
                  </div>
                  <div class="pf_Panobottom"></div>
             </div>
          </div>
       </div>
                <!-- 没有数据时显示提示用户 -->
         <div class="lg_Nodata" v-show="nodata">没有更多数据了</div>
     </mt-loadmore>
  </div>
</div>
</template>
<script type="text/babel">
import api from '../../api/api.js'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
import {gettimebefore} from '../../assets/js/turnTimes.js'
  export default {
    data() {
      return {
         nodata:false,
         reset:false,
         index:1,
         totalpages:'',
         getlanddata:[], //存储图库列表数据
         allLoaded:false,
         loadBott:false,
      };
    },
    filters:{ 
              // 过滤日期函数
              gettime:function(timer){
                  return gettimebefore(timer)
              }
    },
    // 数据填充完毕后执行
    updated:function(){
             this.tablanguage()
             // 分享函数
             this.$share.share()
        },
    methods: {
      // 判断当前简繁状态执行不同函数
          tablanguage:function(){
              if(this.$cookies.get('tabstyle')==1){
                  toSimpleChinese()
              }else if(this.$cookies.get('tabstyle')==2){
                   toChinese()
              }
          },
          getheadhight:function(){
             var home=document.getElementById('specialFirst')
             var homeheadercon=document.getElementsByClassName('homeheadercon')[0]
             homeheadercon.style.height=document.documentElement.clientWidth/375*90+'px'
             home.style.height=document.documentElement.clientHeight-parseInt(homeheadercon.style.height)+'px'
          },
           jumpfun:function(url){
               if(this.$cookies.get('tabstyle')==1){
                  window.location.href=url+'?lan=1'
              }else if(this.$cookies.get('tabstyle')==2){
                   window.location.href=url+'?lan=2'
              }
          },
//       lazyload:function(){
//          var num = document.getElementsByTagName('img').length;
//           var img = document.getElementsByTagName("img");
//           var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
//           lazyload(); //页面载入完毕加载可是区域内的图片
//           window.onscroll = lazyload;
//           function lazyload() { //监听页面滚动事件
//           var seeHeight = document.documentElement.clientHeight; //可见区域高度
//           var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
//           for (var i = n; i < num; i++) {
//           if (img[i].offsetTop < seeHeight + scrollTop) {
//           if (img[i].getAttribute("src") == "") {
//           img[i].src = img[i].getAttribute("data-src");
//           }
//           n = i + 1;
//         }
//     }
// }
//       },
             // 图片下概述隐藏与显示的实现
      direction:function(index){
          var panotext=document.getElementsByClassName('pf_Panotext')
           var direction=document.getElementsByClassName('box')
           for(var i=0;i<panotext.length;i++){
                 if(i==index){
                     if(panotext[i].className=='pf_Panotext'){
                          panotext[i].className='pf_Panotext panoactive'
                           direction[i].className='pf_Directions box'
                     }else{
                         panotext[i].className='pf_Panotext'
                          direction[i].className='pf_Direction box'
                     }
                 }
           }
      },
      // way:3 图库       获得图库列表
      getlandlist:async function(reset){
                if(reset){
                this.getlanddata=[]
            }
            let params = {paramJson:{"way":"3","catid":'',"sectionid":''},page:this.index,length:5};
                  const response = await api.get('api/home/Api/getRelatedRecommend', params)
                  let data = response.data; 
                  if (data.code == 200 && data.success == true) { 
                        this.totalpages=data.result.totalPages
                      for(var i=0;i<data.result.list.length;i++){
                          this.getlanddata.push(data.result.list[i])
                      }
                          if(this.loadBott){
                           this.$refs.loadmore.onBottomLoaded();
                         }
                  }
        },
       // 上拉加载数据控件函数
          loadBottom() {
            this.loadBott=true
            this.reset=false;
             setTimeout(() => {
                 if(this.index>=this.totalpages){
                      this.nodata=true;
                      this.allLoaded=true;
                      this.$refs.loadmore.onBottomLoaded();
                  }else{
                     this.index=this.index+1
                     this.getlandlist(this.reset)
                     this.$share.share()
                 }
        }, 500);
      },
      // 下拉刷新控件函数
      loadTop() {
        this.loadBott=false,
        this.nodata=false;
        this.allLoaded=false;
        this.reset=true;
        setTimeout(() => {
            this.index=1
            this.getlandlist(this.reset)
            this.$refs.loadmore.onTopLoaded();
            this.$share.share()
        }, 1500);
      },
},
    mounted:function() {
        this.getlandlist(this.reset)
         this.getheadhight()
    }
  }
</script>
<style scoped>
.Loadmorediv{
    height: 86.5%;
}
.phone_share{position: absolute;right: 0px;top: -4px;width: 40px;height: 40px;}
.lg_Loadmorediv{
   height: 100%;
   overflow-y: auto;
}
.pf_Panovideo{
    position: relative;
}
.pf_SpecialTwo{
    width: 100%;
    height: 2.1rem;
    vertical-align: middle;
}
.pf_Panologo{
    position: absolute;
    z-index: 10;
    width: 0.39rem;
    height: 0.22rem;
    top: 0.2rem;
    left: 0.2rem;
}
.mint-loadmore{
     overflow-x: auto;
     overflow-y: hidden;  
}
.pf_Panotitle{
    width: 100%;
    text-align: center;
    z-index: 10;
    top: 1.65rem;
    color: #FFFFFF;
    margin-bottom: 0.1rem;
}
.itemtitle{
    display: inline-block;
    width: 3.55rem;
}
.pf_Release{
    width: 100%;
    height: 0.14rem;
    line-height: 0.14rem;
    z-index: 10;
    text-align: center;
    color: #CACACA;
    letter-spacing: 0;
    margin-bottom: 0.1rem;
}
.pf_Releasetime{
     margin-right: 0.15rem;
}
.lg_Nodata{
        text-align: center;
        height: 0.40rem;  
        line-height: 0.40rem;
    }
.pf_Panotext{
    width: 3.55rem;
    /*height: 0rem;*/
    display: none;
    margin: 0 auto;
    color: #666666;
    letter-spacing: 0;
    line-height: 0.2rem;
    transition: all 0.2s linear;
    text-align: justify;
}
.pf_Panotextp{
    margin-top: 0.1rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
}
.pf_Commeninfo{
     line-height: 0.35rem;
}
.pf_Share{
    width: 0.14rem;
    height: 0.14rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    position: relative;
    top: 0.02rem;
}
.pf_Debutton{
     width:0.34rem;
      height: 0.34rem;
      border: none;
      background: none;
      outline: none;
      border-radius: 0;
}
.pf_Direction{
    display: inline-block;
    width: 0.11rem;
    height: 0.07rem;
    background: url('../../assets/image/direups.png') no-repeat;
    background-size: cover;
    position: relative;
    top: 0.13rem;
    float: right;
    right: 0.1rem;
}
.pf_Directions{
    display: inline-block;
    width: 0.11rem;
    height: 0.07rem;
    background: url('../../assets/image/diredowns.png') no-repeat;
    background-size: cover;
    position: relative;
    top: 0.13rem;
    float: right;
    right: 0.1rem;
}
.pf_Panobottom{
     background: #F2F2F2;
     width: 100%;
     height: 0.05rem;
}
.panoactive{
    transition: all 0.2s linear;
    /*height: 0.9rem;*/
    display: block;
}
/*上拉下拉样式*/
.loading-background, .mint-loadmore-top span {
    -webkit-transition: .2s linear;
    transition: .2s linear
}
.mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle
}

.mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle
}

.page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px
}

.page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
    border-bottom: 1px solid #eee
}

.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
}

.page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
}

.page-loadmore-wrapper {
    overflow: scroll
}

.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}

.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}
.pf_Landbackimg{
    position: absolute;
    bottom: 0.1rem;
    width: 100%;
    height: 100%;
}
.pf_Landbackdiv{
    width: 100%;
    position: absolute;
    bottom: -0.02rem;
    background-image: linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, #000000 100%);
}
</style>