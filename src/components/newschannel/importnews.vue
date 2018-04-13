<template>
            <!-- 要闻 -->
	 <div id="home">
   <div class="lg_Loadmorediv  pt_fontSizeTwo">
     <!-- 下拉刷新上拉加载控件 -->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
          <!-- 大头条新闻 -->
        <div class="he_Postopdiv" v-show="postop">
             <horGraphic :data="getheadlines"></horGraphic>
             <!-- <span class="he_Postop pt_fontSizeOne">置顶</span> -->
        </div>
        <!-- 置顶下的新闻 --> 
	 	    <div >
             <horGraphic :data="getbighlsub"></horGraphic>
        </div>
              <!-- 滚动新闻 -->
        <!-- <div id="he_Scrollnews" class="pt_fontSizeOne" @click="looknews"> -->
          <!-- <i class="he_Loudspeaker"></i> -->
         <!--  <div class="he_Newsscdiv1">
              <p class="he_Newsscroll" v-for="(item,index) in newsdata">{{item.title}} </p>
          </div> -->
         <!--  <div class="he_Newsscdiv2">
              <p class="he_Newsscroll" v-for="(item,index) in newsdata">{{item.title}} </p>
          </div> -->
        <!-- </div> -->
        <div v-show="showCarousel">
            <!-- 要闻轮播 组件-->
            <transition>
                 <panoramic :data="getbigimg"></panoramic>
            </transition>  
        </div>
             <!-- 头部 专题 -->
        <div class="he_Scontain" v-show="specialshow">
             <ul class="he_Specialul">
                 <li class="he_Specialli" v-bind:class="specialone?'he_Specialone':''"  @click="jumpfun(item.url)"  v-for="item in gettopic">
                    <img v-lazy="item.img" class="he_Specialimg">
                 </li>
             </ul>
        </div>
        <!-- 要闻新闻列表 数据-->
        <div>
             <newslist :data="newslist"></newslist>
        </div>
          <!-- 没有数据时显示提示用户 -->
         <div class="lg_Nodata" v-show="nodata">没有更多数据了</div>
              </mt-loadmore>
     </div>
	 </div>
</template>
<script type="text/javascript">
      // 设置html字体,使页面在手机端正常显示
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
import api from '../../api/api.js'
import newslist from '../common/newslist'
import horGraphic from '../common/spehorizontalGraphic'
import panoramic from '../common/spepanoramic'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
  export default{
      name:'home',
      components:{
         'panoramic':panoramic,
         'newslist':newslist,
         'horGraphic':horGraphic,
      },
      data(){
         return{
              newsdata:[], //存储滚动新闻数组
              getclass:'',  
              getclass2:'',
              getclass3:'',
              hiddenheight:'',
              datalength:'',
              datamargintop1:'',
              datamargintop2:'',
              timer:'',
              num1:'',
              num2:'',
              mounts:'',
              specialone:false,
              getheadlines:[],  //存储置顶新闻数据
              getbighlsub:[],   //存储置顶下的新闻数据
              getbigimg:[],     //存储大图轮播数据
              gettopic:[],      //存储专题数据
              newslist:[],      //存储瀑布流数据
              index:1,          //通过请求次数累加判断是否有数据
              totalpages:'',    //存储数据共有多少页
              control:'',       
              switch:true,
              nodata:false,     //当上拉没有数据时通过nodata值来显示与隐藏
              reset:false,       //下拉刷新通过reset值重置存储数据的数组
              showCarousel:true,
              postop:true,
              specialshow:true,
              allLoaded:false,
              loadBott:false,
         }
      },
      mounted:function() {
         // this.getscrolllist();
         this.getheadlineslist()
         this.getbighlsublist()
         this.getbigimglist()
         this.gettopiclist()
         this.getnewslist(this.reset)
         this.getheadhight()
      },
      // 当数据填充完毕后执行此函数
      updated:function(){
             this.tablanguage()
        },
      methods:{
        // 判断当前简繁状态执行不同函数
        tablanguage:function(){
              if(this.$cookies.get('tabstyle')==1){
                  toSimpleChinese()
              }else if(this.$cookies.get('tabstyle')==2){
                   toChinese()
              }
          },
          jumpfun:function(url){
               window.location.href=url;           
          },
             // 获取大头条数据   
        getheadlineslist:async function(){
          let params = {paramJson:{"elementid":'in_big_headlines'},page:1,length:1};
          const response = await api.get('api/home/Api/webInfo', params)
          let data = response.data; 
            this.getheadlines=[]
          if (data.code == 200 && data.success == true) {
                // if(data.result.list[0].sort>100&&data.result.list[0].sort<=105){
                //           this.postop=true;
                // }else{
                //     this.postop=false;
                // } 
                this.getheadlines=data.result.list
          }
        },
             // 获取大头条下新闻
        getbighlsublist:async function(){
           this.getbighlsub=[]
          let params = {paramJson:{},page:1,length:4};
          const response = await api.get('api/home/Api/phoneTop', params)
          let data = response.data; 
          if (data.code == 200 && data.success == true) {
                  this.getbighlsub=data.result.list
          }
        },
        // 获取头部高度
        getheadhight:function(){
             var home=document.getElementById('home')
             var homeheadercon=document.getElementsByClassName('homeheadercon')[0]
             homeheadercon.style.height=document.documentElement.clientWidth/375*90+'px'
             home.style.height=document.documentElement.clientHeight-parseInt(homeheadercon.style.height)+'px'
          },
            // 获取滚动新闻列表
        //  getscrolllist:async function(){
        //   let params = {paramJson:{"elementid":'in_scroll_list'},page:1,length:5};
        //   const response = await api.get('api/home/Api/webInfo', params)
        //   let data = response.data; 
        //   if (data.code == 200 && data.success == true) {
        //              this.newsdata=data.result.list
        //              this.control=25*parseInt(data.result.numPerPage)+'px'
        //              if(this.switch){
        //                 // this.scrollnews()
        //                 // this.autoplay()
        //              }
        //   }
        // },
            // 获得大图轮播数据
         getbigimglist:async function(reset){
           if(reset){
                this.getbigimg=[]
            }
          let params = {paramJson:{"elementid":'in_bigimg_list'},page:1,length:5};
          const response = await api.get('api/home/Api/webInfo', params)
          let data = response.data; 

           if(data.result.list.length==0){
               this.showCarousel=false
               return
          }
          if (data.code == 200 && data.success == true) {
                   this.getbigimg=data.result.list
          }
        },
             // 获取专题数据
        gettopiclist:async function(){
           this.gettopic=[];
          let params = {paramJson:{"elementid":'in_topic_list'},page:1,length:4};
          const response = await api.get('api/home/Api/advertInfo', params)
          let data = response.data;
           if(data.result.list.length==0){
                 this.specialshow=false;
           }
           if(data.result.list.length==1){
                this.specialone=true;
           }else{
                this.specialone=false;
           }
          if (data.code == 200 && data.success == true) {
                this.gettopic=data.result.list
          }
        },
              // 获取瀑布流新闻列表 
        getnewslist:async function(reset){
              // 上拉加载数据不重置newlist数组
                if(reset){
                this.newslist=[]
            }
          let params = {paramJson:{"elementid":'in_sns_one',"is_wap":"1"},page:this.index,length:5};
          const response = await api.get('api/home/Api/webInfo', params)
          let data = response.data;
          if (data.code == 200 && data.success == true) {
               this.totalpages=data.result.totalPages
                for(var i=0;i<data.result.list.length;i++){
                    this.newslist.push(data.result.list[i])
                }
                if(this.loadBott){
                    this.$refs.loadmore.onBottomLoaded();
                 }
          }
        },
          // 控制滚动新闻函数
          // scrollnews:function(){
          //   this.getclass=document.getElementsByClassName('he_Newsscdiv1')[0]
          //   this.getclass2=document.getElementsByClassName('he_Newsscdiv2')[0]
          //   this.getclass3=document.getElementById('he_Scrollnews')
          //        this.datamargintop1=this.getclass.style.marginTop=0+'px'
          //        this.datamargintop2=this.control
          //        this.datalength=this.control
          //        this.hiddenheight=window.getComputedStyle(this.getclass3, null).height
          //        this.num1=parseInt(this.datamargintop1);
          //        this.num2=parseInt(this.datamargintop2);
          // },
          // 控制自动播放函数
          // autoplay:function(){
          //  var mounts=2*parseInt(this.datalength)-parseInt(this.hiddenheight);
          //    var that=this;
          //          that.timer=setInterval(function(){
          //           that.backnum1=that.num1
          //           that.num1=(that.num1*10-1)/10
          //           that.num2=(that.num2*10-1)/10
          //                if(that.num1%25==0){
          //                   clearTimeout(that.timer)
          //                   setTimeout(function(){
          //                        that.autoplay()
          //                   },2000)
          //                   }
          //               that.getclass.style.marginTop=that.num1+'px'
          //               that.getclass2.style.marginTop=that.num2+'px'
          //         if(that.num1+mounts<0){
          //              that.num1=parseInt(that.hiddenheight)
          //         }
          //         if(that.num2+mounts<0){
          //              that.num2=parseInt(that.hiddenheight)
          //       }
          //      },3)
          // },
            // 上拉加载
          loadBottom() {
            this.loadBott=true;
            this.reset=false;
             setTimeout(() => {
                 if(this.index>=this.totalpages){
                      this.nodata=true;
                      this.allLoaded=true;
                      this.$refs.loadmore.onBottomLoaded();
                  }else{
                     this.index=this.index+1
                     this.getnewslist(this.reset)
                 }
                   
        },500);
      },
            // 下拉刷新
      loadTop() {
        this.loadBott=false,
        this.nodata=false;
        this.allLoaded=false;
        this.reset=true;
        setTimeout(() => {
          this.index=1
          this.switch=false;
          this.getheadlineslist()
          this.getbighlsublist()
          this.getbigimglist(this.reset)
          this.gettopiclist()
          this.getnewslist(this.reset)
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
      }

  }
</script>
<style scoped>
  /*控制元素不显示滚动条*/
 .he_Specialul::-webkit-scrollbar {
      display: none;
}
 .lg_Loadmorediv{
       height: 100%;
       overflow-y: auto;
}
    #home{
      width: 100%;
      overflow-x: hidden;
    }
    .he_Specialimg{
         width: 100%;
         height: 100%;
         border-radius: 0.05rem;
    }
    .he_Scontain{
        position: relative;
        width: 100%;
        height: 0.9rem;
        background:#F3F3F3;
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
     width: 1.9rem;
     height: 0.7rem;
     margin-right: 0.1rem;
     position: relative;
  }
  .he_Specialone{
      width: 3.55rem;
  }
  .he_Spacialtitle{
      color: #FFFFFF;
      width: 100%;
      height: 0.2rem;
      line-height: 0.2rem;
      display: inline-block;
      text-align: center;
      letter-spacing: 0;
      text-shadow: 0 2px 4px rgba(0,0,0,0.50);
      position: absolute;
      top: 0.25rem;
      left:0;
      z-index: 10;
      font-weight: bold;
  }
  .he_Postopdiv{
      position: relative;
  }
  .he_Postop{
     color: #0061E3;
     position: absolute;
     bottom: 0.18rem;
     right: 0.2rem;
     letter-spacing: 0;
  }
  #he_Scrollnews{
      background: #EDFAFF;
      width: 100%;
      height: 0.25rem;
      line-height: 0.25rem;
      overflow: hidden;
      position: relative;
  }
  .he_Loudspeaker{
      display: inline-block;
      width: 0.16rem;
      height: 0.16rem;
      background: url('../../assets/image/loudspeakers.png') no-repeat;
      background-size: cover;
      position: absolute;
      top: 0.04rem;
      margin-left: 0.2rem;
  }
  .he_Newsscdiv1{
     display: inline-block;
     position: absolute;
     margin-left: 0.5rem;
     margin-top: 0;
  }
  .he_Newsscdiv2{
     display: inline-block;
     position: absolute;
     margin-left: 0.5rem;
  }
  .he_Newsscroll{
    color: #666666;
    letter-spacing: 0;
    width: 3.05rem;
    height: 25px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /*position: absolute;*/
    /*top: 0.04rem;*/
  }
  .lg_Nodata{
        text-align: center;
        height: 0.40rem;  
        line-height: 0.40rem;
    }
</style>