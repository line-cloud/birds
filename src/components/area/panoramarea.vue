<template>
               <!-- 全景 -->
  <div class="pt_fontSizeTwo Loadmorediv" id="specialFirst">
  <div class="lg_Loadmorediv">
       <!-- 上拉刷新下拉加载控件 -->
  <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
       <div>     
          <div v-for="(item,index) in panodata">
             <div class="pf_Panovideo">
                  <img v-lazy="item.img" class="pf_SpecialTwo" @click="jumpfun(item.url)">
                   <img src="../../assets/image/panologo.png" class="pf_Panologo">
                   <p class="pf_Panotitle pt_fontSizeThree">{{item.title}}</p>
                   <p class="pf_Release pt_fontSizeTwo">
                      <span >{{item.pubtime|gettime}}</span>
                   </p>
             </div>
             <div class="pt_fontSizeTwo">
                  <div class="pf_Panotext">
                       <p class="pf_Panotextp" @click="jumpfun(item.url)">{{item.desc}}</p>
                  </div>
                  <div class="pf_Commeninfo">
                      <button class="pf_Debutton bdsharebuttonbox"><img src="../../assets/image/shares.png"  class="pf_Share"  data-cmd="more"></button>
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
         panodata:[],
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
      getpanolist:async function(reset){
                if(reset){
                this.panodata=[]
            }
            let params = {paramJson:{"way":"4","catid":'',"sectionid":''},page:this.index,length:5};
                  const response = await api.get('api/home/Api/getRelatedRecommend', params)
                  let data = response.data;
                  if (data.code == 200 && data.success == true) { 
                        this.totalpages=data.result.totalPages
                      for(var i=0;i<data.result.list.length;i++){
                          this.panodata.push(data.result.list[i])
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
                     this.getpanolist(this.reset)
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
            this.getpanolist(this.reset)
            this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
},
    mounted:function() {
      this.getpanolist(this.reset)
       this.getheadhight()
    }
  };
</script>
<style scoped>
.Loadmorediv{
    height: 86.5%;
}
.lg_Loadmorediv{
    height: 100%;
   overflow-y: auto;
}
.pf_Panovideo{
    position: relative;
    /*width: 100%;
    height: 2.1rem;*/
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
    height: 0.16rem;
    line-height: 0.16rem;
    text-align: center;
    position: absolute;
    z-index: 10;
    top: 1.65rem;
    color: #FFFFFF;
    letter-spacing: 0;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis
}
.lg_Nodata{
        text-align: center;
        height: 0.40rem;  
        line-height: 0.40rem;
    }
.pf_Release{
    width: 100%;
    height: 0.14rem;
    line-height: 0.14rem;
    position: absolute;
    z-index: 10;
    text-align: center;
    color: #CACACA;
    letter-spacing: 0;
    bottom: 0.08rem;
}
.pf_Releasetime{
     margin-right: 0.15rem;
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
     /*width: 100%;
     height: 0.35rem;*/
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
    background: url('../../assets/image/direup.png') no-repeat;
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
    background: url('../../assets/image/diredown.png') no-repeat;
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
    display: block;
    /*height: 0.9rem;*/
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

</style>