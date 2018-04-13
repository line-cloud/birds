<template>
           <!-- 平潭交通 -->
	<div id="trafficdetail">
	  <div class="lg_Loadmorediv  pt_fontSizeTwo">
          <!-- 上拉刷新下拉加载控件 -->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
	    <div class="td_Traffic pt_fontSizeThree" v-for="(item,index) in trafficdata" @click="jumpfun(item.url)">
	    	<div>• {{item.title}}</div>
	    	<div class="td_Wavylines" v-if="index>0&&(index+1)%5==0"></div>
	    </div>
	     <!-- 没有数据时显示提示用户 -->
         <div class="lg_Nodata" v-show="nodata">没有更多数据了</div>
          </mt-loadmore>
        </div>
	</div>
</template>
<script type="text/javascript">
import api from '../../api/api.js'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
	export default{
		name:'trafficdetail',
		components:{
		},
		data(){
			return{
				trafficdata:[],
        index:1,
        totalpages:'',
        nodata:false,
        reset:false,
        allLoaded:false,
        loadBott:false,
			}
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
             var home=document.getElementById('trafficdetail')
             var homeheadercon=document.getElementsByClassName('homeheadercon')[0]
             homeheadercon.style.height=document.documentElement.clientWidth/375*90+'px'
             home.style.height=document.documentElement.clientHeight-parseInt(homeheadercon.style.height)+'px'
          },
          jumpfun:function(url){
              window.location.href=url+'?lan='+this.$cookies.get('tabstyle');
          },
			 // 获得交通列表
			gettrafficlist:async function(reset){
                      if(reset){
                        this.trafficdata=[]
                   }
                  let params = {paramJson:{},page:this.index,length:10} 
                  const response = await api.get('api/home/Api/trafficInfo', params)
                  let data = response.data;
                  if (data.code == 200 && data.success == true) {
                      this.totalpages=data.result.totalPages
		                  for(var i=0;i<data.result.list.length;i++){
		                   this.trafficdata.push(data.result.list[i])
		                 }
                        if(this.loadBott){
                            this.$refs.loadmore.onBottomLoaded();
                       }
                  }
			},
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
                     this.gettrafficlist(this.reset)
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
                  this.gettrafficlist(this.reset)
                  this.$refs.loadmore.onTopLoaded();
              }, 1500);
            },
		},
		mounted:function(){
			this.gettrafficlist(this.reset)
      this.getheadhight()
		}
	}
</script>
<style scoped>
	.td_Traffic{
		letter-spacing: 0;
		color: #333333;
		line-height: 0.22rem;
		width: 3.55rem;
		margin: 0.2rem auto 0 auto;
	}
	.td_Wavylines{
		width: 3.55rem;
		border-top: 0.01rem dashed #D5D5D5;
		margin-top: 0.2rem;
	}
	.lg_Nodata{
        text-align: center;
        height: 0.40rem;  
        line-height: 0.40rem;
    }
 .lg_Loadmorediv{
       height: 5.75rem;
       overflow-y: auto;
       max-height: 637px;
}
</style>