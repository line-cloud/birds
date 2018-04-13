<template>
           <!--美景栏目页 -->
    <div id="specialFirst">
    <div class="lg_Loadmorediv  pt_fontSizeTwo">
        <!-- 上拉加载下拉刷新控件 -->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
            <div id="columntravel" >
              <!-- 三个一组的新闻列表 -->
               <horizontal :data="newlist1"></horizontal>
            </div>
              <!-- 没有数据时显示提示用户 -->
         <div class="lg_Nodata" v-show="nodata">没有更多数据了</div>
        </mt-loadmore>
   </div>
    </div>
</template>
<script type="text/javascript">
import api from '../../api/api.js'
import horizontal from '../common/spehorizontal'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
    export default{
        name:'specialFirst',
        components:{
            'horizontal':horizontal,
        },
        data(){
            return{
                index:1,
                totalpages:'',
                newlist1:[],
                nodata:false,
                reset:false,
                datalength:6,
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
            // 获得列表数据
        getinfolist:async function(reset){
            if(reset){
                this.newlist1=[]
            }
          let params = {paramJson:{"elementid":'ts_spns_list'},page:this.index,length:this.datalength};
          const response = await api.get('api/home/Api/webInfo', params)
          let data = response.data;
          if (data.code == 200 && data.success == true) {
                  this.totalpages=data.result.totalPages
                  for(var i=0;i<data.result.list.length;i++){
                       this.newlist1.push(data.result.list[i])
                       // if(data.result.list.length<this.datalength){
                       //      if(data.result.list.length<3||this.datalength-i<4){
                       //         break;  
                       //      }else{
                       //         this.newlist1.push(data.result.list[i])
                       //      } 
                       // }else{
                       //     this.newlist1.push(data.result.list[i])
                       // }
                     }
                      if(this.loadBott){
                           this.$refs.loadmore.onBottomLoaded();
                         }
                 }
        },
         // 上拉加载控件函数
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
                  this.getinfolist(this.reset)
                  this.$refs.loadmore.onTopLoaded();
              }, 1500);
            },
        }
    }
</script>
<style scoped>
.mint-loadmore-bottom {
    margin-bottom: -0.5rem;
}
.mint-loadmore-top, .mint-loadmore-bottom {
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
}
/*fenge*/
 .horizontalGraphic{
       width: 3.35rem;
       margin: 0.2rem auto;
       padding-bottom: 0.2rem;
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
  }
  #specialFirst{
    height: 86.5%;
}
    .lg_Loadmorediv{
       height: 100%;
       overflow-y: auto;
    }
  .hg_Specialtext{
     color: #000000;
     width: 2.15rem;
     letter-spacing: -0.09px;
     line-height: 0.22rem;
     margin-left: 0.1rem;
      display: -webkit-box;
     -webkit-box-orient: vertical;
     -webkit-line-clamp: 2;
     overflow: hidden;
  }
  .hg_Newstime{
    margin-top: 0.15rem;
    margin-left: 0.1rem;
    color: #B2B2B2;
    height: 0.12rem;
    line-height: 0.12rem;
    position: relative;
    color: #A0A0A0;
  }
  .hg_Vertical{
    display: inline-block;
    border-right: 0.01rem solid #A0A0A0;
    width: 0.01rem;
    height: 0.15rem;
    position: absolute;
    top: -0.01rem;
    margin-left: 0.1rem;
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
    margin-left: 0.22rem;
    float: left;
  }
  .columntravel{
    width: 3.35rem;
    height: 1.37rem;
    position: relative;
    margin: 0.15rem auto;
  }
  .ct_Cotravel{
    width: 100%;
    height:100%;
  }
  .ct_Speimgtext{
    width: 100%;
    height:100%;
    border-radius: 0.05rem;
  }
  .ct_Spetitlediv{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .ct_Spetitle{
         color: #FFFFFF;
         letter-spacing: 0.2px;
         width: 100%;
         height: 0.2rem;
         line-height: 0.2rem;
         text-align: center;
         margin-top: 0.5rem;
  }
   .lg_Nodata{
        text-align: center;
        height: 0.40rem;  
        line-height: 0.40rem;
    }
</style>