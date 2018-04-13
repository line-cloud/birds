<template>
           <!--概览栏目页 -->
  <div id="specialFirst">
    <div class="lg_Loadmorediv  pt_fontSizeTwo">
          <!-- 上拉刷新下拉加载控件 -->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
         <div >
             <!-- 头图  轮播-->
             <panoramic :data="gettimgdata"></panoramic>       
         </div>
              <!-- 新闻列表 -->
         <div>
             <newslist :data="newslistdata"></newslist>
         </div>
            <!-- 没有数据时显示提示用户 -->
          <!-- <div></div>   -->
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
                gettimgdata:[],
                nodata:false,
                reset:false,
                allLoaded:false,
                loadBott:false,
            }
        },
        mounted:function(){
          this.gettimglist()
          this.getinfolist(this.reset)
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
          getheadhight:function(){
             var home=document.getElementById('specialFirst')
             var homeheadercon=document.getElementsByClassName('homeheadercon')[0]
             homeheadercon.style.height=document.documentElement.clientWidth/375*90+'px'
             home.style.height=document.documentElement.clientHeight-parseInt(homeheadercon.style.height)+'px'
          },
          // 获得新闻列表数据
        getinfolist:async function(reset){
            if(reset){
                this.newslistdata=[]
            }
          let params = {paramJson:{"elementid":'cs_ov_list'},page:this.index,length:5};
          const response = await api.get('api/home/Api/webInfo', params)
          let data = response.data; 
          if (data.code == 200 && data.success == true) {
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
        gettimglist :async function(reset){
            if(reset){
                this.gettimgdata=[]
            }
          let params = {paramJson:{"elementid":'cs_ov_timglist'},page:1,length:5};
          const response = await api.get('api/home/Api/webInfo', params)
          let data = response.data; 
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
                     this.getinfolist()
                 }
        },500);
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
#specialFirst{
    height: 86.5%;
}
    .lg_Loadmorediv{
       height: 100%;
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
</style>