<template>
           <!-- 专题三 -->
  <div id="specialFirst">
                <!-- 专题头部 -->
      <div id="articleheader" class="pt_fontSizeOne">
            <img src="../../assets/image/callback.png" class="ah_Comments" @click="callback">
            <div class="sd_Header pt_fontSizeFive">{{this.specialtitle}}</div>
           <div style="clear:both"></div>
      </div>
    <div class="lg_Loadmorediv  pt_fontSizeTwo">
          <!-- 上拉刷新下拉加载控件 -->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
         <div v-show="showCarousel">
             <!-- 头图  轮播-->
             <panoramic :data="gettimgdata"></panoramic>       
         </div>
              <!-- 新闻列表 -->
         <div>
             <newslist :data="newslistdata"></newslist>
         </div>
            <!-- 没有数据时显示提示用户 -->
         <div class="lg_Nodata" v-show="nodata">没有更多数据了</div>
        </mt-loadmore>
   </div>
  </div>
</template>
<script type="text/javascript">
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
import api from '../../api/api.js'
import panoramic from '../common/spepanoramic'
import newslist from '../common/newslist'
  export default{
        name:'specialFirst',
        components:{
            'panoramic':panoramic,
            'newslist':newslist,
        },
        data(){
            return{
                newslistdata:[],
                index:1,
                totalpages:'',
                gettimgdata:[],
                nodata:false,
                reset:false,
                showCarousel:true,
                specialtitle:this.$route.query.title,
                allLoaded:false,
                loadBott:false,
            }
        },
        mounted:function(){
              this.getinfolist(this.reset)
              this.gettimglist()
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
           // 返回上一级页面
          callback:function(){
               this.$router.go(-1)
          },
          // 获得新闻列表数据
        getinfolist:async function(reset){
            if(reset){
                this.newslistdata=[]
            }
          let params = {paramJson:{"elementid":'tpthr_dyn_ns',"specialid":this.$route.query.specialid,"templateid":this.$route.query.templateid}};
          const response = await api.get('api/home/Api/specialInfo', params)
          let data = response.data; 
          if (data.code = 200 && data.success == true) {
            this.totalpages=data.result.totalPages
            for(var i=0;i<data.result.list.length;i++){
                this.newslistdata.push(data.result.list[i])
            }
                if(this.loadBott){
                    this.$refs.loadmore.onBottomLoaded();
                 }
          }
        },
        // 获得头图 轮播列表
        gettimglist:async function(reset){
          if(reset){
                this.gettimgdata=[]
            }
          let params = {paramJson:{"elementid":'tpthr_imgText_ns',"specialid":this.$route.query.specialid,"templateid":this.$route.query.templateid}};
          const response = await api.get('api/home/Api/specialInfo', params)
          let data = response.data; 
            if(data.result.list.length==0){
                     this.showCarousel=false
                     return
                }
          if (data.code == 200 && data.success == true) {
                this.gettimgdata=data.result.list
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
                     this.getinfolist(this.reset)
                 }
                   
        }, 1500);
      },
      // 下拉刷新控件函数
      loadTop() {
        this.loadBott=false,
        this.nodata=false;
        this.allLoaded=false;
        this.reset=true;
        setTimeout(() => {
            this.index=1
            this.gettimglist(this.reset)
            this.getinfolist(this.reset)
            this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
   }

  }
</script>
<style scoped>
  .sf_Speciovideo{
        margin-top: 0.15rem;
    }
    .cu_Nopicture{
        width: 3.35rem;
        margin: 0.2rem auto;
        color: #000000;
        letter-spacing: 0;
        line-height: 22px;
    }
    .vd_Pasttime{
        color: #A0A0A0;
        letter-spacing: 0;
        height: 0.12rem;
        line-height: 0.12rem;
        width: 3.35rem;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 0.2rem;
        border-bottom: 0.01rem solid #F4F5F6;
    }
    .vd_Vertial{
         width: 0.01rem;
         border-right: 0.01rem solid #A0A0A0;
         height: 0.15rem;
         margin-left: 0.1rem;
         margin-right: 0.1rem;
    }
     #specialFirst{
        height: 100%;
    }
    .lg_Loadmorediv{
       height: 93%;
       overflow-y: auto;
}
    .mint-loadmore-bottom {
        margin-bottom: -0.5rem;
    }
    .mint-loadmore-top, .mint-loadmore-bottom {
        text-align: center;
        height: 0.5rem;
        line-height: 0.5rem;
    }
    .lg_Nodata{
        text-align: center;
        height: 0.40rem;  
        line-height: 0.40rem;
    }
     #articleheader{
      height: 0.45rem;
      width: 100%;
      line-height: 0.45rem;
    }
   .ah_Comments{
        width: 0.13rem;
        height: 0.21rem;
        /*margin-left: 0.1rem;*/
        /*margin-top: 0.16rem;*/
        /*float: left;*/
        position: absolute;
        top: 0.1rem;
        left: 0.1rem;
  }
  .sd_Header{
      color: #000000;
      font-weight: bold;
      text-align: center;
  }
</style>
  
  