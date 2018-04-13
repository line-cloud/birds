<template>
           <!-- 平潭物价 -->
	<div id="pricedetail">
	 <div class="lg_Loadmorediv  pt_fontSizeTwo">
          <!-- 上拉刷新下拉加载控件 -->
      <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false">
		<div class="pt_fontSizeThree pd_Pricetext" v-for="(item,index) in pricedata"  @click="pricedetail(item.time)">
			 <div class="pd_Priceintr">• {{item.title}}</div>
			 <div class="pd_Pricetime" >{{item.time}}</div>
			 <div style="clear:both"></div>
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
		data(){
			return{
            pricedata:[],
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
             var home=document.getElementById('pricedetail')
             var homeheadercon=document.getElementsByClassName('homeheadercon')[0]
             homeheadercon.style.height=document.documentElement.clientWidth/375*90+'px'
             home.style.height=document.documentElement.clientHeight-parseInt(homeheadercon.style.height)+'px'
          },
			// 获得价格列表
			getpricelist:async function(reset){
					 if(reset){
	                this.pricedata=[]
	            }
                 let params = {paramJson:{},page:this.index,length:10}
                  const response = await api.get('api/home/Api/priceInfo', params)
                  let data = response.data;
                  if (data.code == 200 && data.success == true) {
                       this.totalpages=data.result.totalPages
		                  for(var i=0;i<data.result.list.length;i++){
		                   this.pricedata.push(data.result.list[i])
		                 }
                       if(this.loadBott){
                          this.$refs.loadmore.onBottomLoaded();
                    }
                  }
			    },
			    pricedetail:function(date){
			    	this.$router.push({path:'/detailspage/pricedetail',query:{day:date
                  }})
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
                     this.getpricelist(this.reset)
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
                  this.getpricelist(this.reset)
                  this.$refs.loadmore.onTopLoaded();
              }, 1500);
            },
			},
			mounted:function(){
				this.getpricelist(this.reset)
        this.getheadhight()
			}
		}
</script>
<style scoped>
  #pricedetail{
      height: 86.5%;    
  }
	.pd_Pricetext{
         width: 3.55rem;
         margin: 0.2rem auto 0 auto;
         line-height: 0.22rem;
         color: rgba(0,0,0,0.87);
	}
	.pd_Priceintr{
         width: 2.55rem;
         display: inline-block;
         float: left;
         white-space: nowrap;
         overflow: hidden;
	}
	.pd_Pricetime{
         display: inline-block;
         float: right;
	}
	.td_Wavylines{
		width: 3.55rem;
		border-top: 0.01rem dashed #D5D5D5;
		margin-top: 0.2rem;
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