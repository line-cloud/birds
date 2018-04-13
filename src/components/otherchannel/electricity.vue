<template>
           <!--电力栏目页 -->
  <div id="specialFirst">
    <div class="lg_Loadmorediv  pt_fontSizeTwo">
          <!-- 上拉刷新下拉加载控件 -->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
         <div>
             <!-- 头图  轮播-->
             <panoramic :data="gettimgdata"></panoramic>       
         </div>
         <!-- 电力公告   值班电话   电力营业厅 -->
         <div class="electricity pt_fontSizeThree">
              <div class="ey_electricity" @click="alertfun(1)">电力公告</div>
              <div class="ey_electricity" @click="alertfun(2)">值班电话</div>
              <div class="ey_electricity" @click="alertfun(3)">电力营业厅</div>
              <div style="clear:both"></div>
         </div>
         <!-- 电力公告 -->
             
              <!-- 新闻列表 -->
         <div>
             <newslist :data="newslistdata"></newslist>
         </div>
            <!-- 没有数据时显示提示用户 -->
         <div class="lg_Nodata" v-show="nodata">没有更多数据了</div>
        </mt-loadmore>
    </div>
   <div  :class="common?'ey_Background':''"></div>
         <!-- 电力公告弹窗 -->
   <div  :class="anment?'ey_Anment':'ey_Anmentsd'" class="pt_fontSizeThree">
           <p class="ey_Atitle pt_fontSizeFours">电力公告</p>
           <div class="ey_Anmentextdiv">
               <p class="ey_Anmentext pt_fontSizeOne">关于“北京大兴11·18火灾”一事，请各网站及新媒体平台按照以下要求调控： 1.除北京当地权威部门发布新的信息外，各网站、各平台不再跟进报道；不做评论报道。对新发布的权威信息，要客观准确适度报道。网站及新媒体平台按照以下要求调控： 1.除北京当地权威部门发布新的信息外，各网站、各平台不再跟进报道；不做评论报道。对新发布的权威信息，要客观准确适度报道。</p>
           </div>
           <span class="ey_Sureyes pt_fontSizeThree" @click="makesure(1)">确定</span>
    </div>
         <!-- 供电值班电话弹窗 -->
     <div  :class="dutycall?'ey_Anment':'ey_Anmentsd'" class="pt_fontSizeThree">
           <div>
               <p class="ey_dtitle pt_fontSizeFours">供电值班电话</p>
               <p class="ey_Elecell pt_fontSizeOne">电网电话：95598</p>
           </div>
           <div class="ey_Concell">
                <div class="ey_cellcontent pt_fontSizeOne">
                    <p class="ey_content">城关地区运维电话</p>
                    <p class="ey_cell">电话1：62888001   电话2：62888002</p>
                </div>
               <div class="ey_cellcontent pt_fontSizeOne">
                    <p class="ey_content">南区：敖东 北厝 东澳 金井</p>
                    <p class="ey_cell">电话1：0591-24412578</p>
               </div>
               <div class="ey_cellcontent pt_fontSizeOne">
                    <p class="ey_content">北区：苏澳 平原 白青</p>
                    <p class="ey_cell">电话1：0591-62888012</p>
               </div>
               <div class="ey_cellcontent pt_fontSizeOne ">
                    <p class="ey_content">东区：流水 中楼 岚城</p>
                    <p class="ey_cell">电话1：0591-24346697</p>
               </div>
               </div>
           <span class="ey_Sureyes pt_fontSizeThree" @click="makesure(2)">确定</span>
    </div>
           <!-- 电力营业厅弹窗 -->
    <div  :class="business?'ey_Anment':'ey_Anmentsd'" class="pt_fontSizeThree">
           <p class="ey_Atitle pt_fontSizeFours">电力营业厅</p>
           <div class="ey_Electimgdiv">
               <img src="../../assets/image/electimg.png" class="ey_Electimg">
           </div>
           <span class="ey_Sureyes pt_fontSizeThree" @click="makesure(3)">确定</span>
    </div>
  </div>
</template>
<script type="text/javascript">
import api from '../../api/api.js'
import panoramic from '../common/spepanoramic'
import newslist from '../common/newslist'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
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
                anment:false,
                dutycall:false,
                business:false,
                common:false,
                allLoaded:false,
                loadBott:false,
            }
        },
        // 当数据填充完毕后执行此函数
        updated:function(){
             this.tablanguage()
        },
        mounted:function(){
              this.getinfolist(this.reset)
              this.gettimglist()
               this.getheadhight()
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
            // 弹窗函数
          alertfun:function(index){
                if(index==1){
                    this.anment=true;
                }else if(index==2){
                    this.dutycall=true;
                }else if(index==3){
                    this.business=true;
                }
                this.common=true;
          },
             // 确定按钮
          makesure:function(index){
              if(index==1){
                    this.anment=false;
                }else if(index==2){
                    this.dutycall=false;
                }else if(index==3){
                    this.business=false;
                }
              this.common=false;
          },
          // 获得新闻列表数据
        getinfolist:async function(reset){
            if(reset){
                this.newslistdata=[]
            }
          let params = {paramJson:{"elementid":'ep_list'},page:this.index,length:5};
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
        gettimglist:async function(reset){
           if(reset){
                this.gettimgdata=[]
            }
          let params = {paramJson:{"elementid":'ns_tbn_ns'},page:this.index,length:5};
          const response = await api.get('api/home/Api/webInfo', params)
          let data = response.data; 
          if (data.code = 200 && data.success == true) {
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
  .sf_Speciovideo{
        margin-top: 0.15rem;
    }
    .cu_Nopicture{
        width: 3.35rem;
        margin: 0.2rem auto;
        color: #000000;
        letter-spacing: 0;
        line-height: 0.22rem;
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
    .electricity{
         width: 3.55rem;
         margin: 0 auto;
         border-bottom: 0.01rem solid #F4F5F6;
    }
    .ey_electricity{
         width: 1.1rem;
         height: 0.4rem;
         line-height: 0.4rem;
         text-align: center;
         background: #F2F2F2;
          box-shadow: 0 2px 4px 0 rgba(255,255,255,0.50);
          border-radius: 0.05rem;
          float: left;
          margin-right: 0.12rem;
          margin-top: 0.15rem;
          margin-bottom: 0.15rem;
          color: #333333;
          letter-spacing: 0;
    }
     .ey_electricity:nth-child(3){
         margin-right: 0;
     }
    #specialFirst .ey_Anment{
         width: 2.6rem;
         height: 3.2rem;
         position: fixed;
         display: block;
         left:15.2%;
         top: 0.83rem;
         z-index: 1200;
         background: #FFFFFF;
         border-radius: 0.1rem;
         visibility: hidden;opacity: 0;transition: all .6s;opacity: 1;visibility: visible;
     }
     .ey_Anmentsd{
         display: none;
     }
     .ey_Atitle{
         width: 2.22rem;
         height: 0.47rem;
         line-height: 0.47rem;
         margin: 0 auto;
         text-align: center;
         color: #000000;
         letter-spacing: 0;
         font-weight: bold;
         border-bottom: 0.01rem solid #EEEEEE;
     }
     .ey_Electimg{
         width: 100%;
         height: 100%;
     }
     .ey_Electimgdiv{
        width: 2.22rem;
        height: 1.3rem;
        margin: 0.5rem auto 0 auto;
        padding-bottom: 0.5rem;
        border-bottom: 0.01rem solid #E9E9E9;
     }
     .ey_dtitle{
         width: 2.22rem;
         height: 0.17rem;
         line-height: 0.17rem;
         margin: 0 auto;
         text-align: center;
         color: #000000;
         letter-spacing: 0;
         font-weight: bold;
         margin-top: 0.15rem;
     }
     .ey_Concell{
         width:2.22rem;
         margin: 0 auto;
         padding-bottom: 0.2rem;
         border-bottom: 0.01rem solid #E9E9E9;
     }
     .ey_Elecell{
          width: 2.22rem;
          height: 0.12rem;
          line-height: 0.12rem;
          margin: 0.1rem auto 0rem auto;
          text-align: center;
          color: #666666;
          letter-spacing: 0;
          padding-bottom: 0.05rem;
          border-bottom: 0.01rem solid #EEEEEE;
     }
     .ey_cellcontent{
         margin: 0.1rem auto 0 auto;
     }
     .ey_content{
          color: #666666;
          letter-spacing: 0;
          line-height: 0.2rem;
     }
     .ey_cell{
          color: #666666;
          letter-spacing: 0;
          line-height:0.2rem;
     }
     .ey_Anmentext{
          color: #666666;
          letter-spacing: 0;
          line-height: 0.2rem;
          width: 2.22rem;
          margin: 0.1rem auto 0 auto;
          text-align: justify;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10;
          overflow: hidden;
     }
     .ey_Anmentextdiv{
          padding-bottom: 0.2rem;
          border-bottom: 0.01rem solid #E9E9E9;
     }
     .ey_Sureyes{
         text-align: center;
         width: 100%;
         height: 0.4rem;
         line-height: 0.4rem;
         display: inline-block;
         color: #0061E3;
         letter-spacing: 0;
     }
     .ey_Background{
          width: 100%;
          height: 100%;
          background:rgba(0,0,0,0.3);
          position: fixed;
          z-index: 200;
          top: 0;
          content: "";position: fixed;visibility: hidden;top: 0;left: 0;right: 0;bottom: 0;z-index: 1000;opacity: 0;background: rgba(0, 0, 0, 0.5);transition: all .6s;opacity: 1;visibility: visible;
     }
</style>