<template>
          <!-- 物价详情 -->
	<div id="pricedetail">
	      <!-- 物价详情头部 -->
		   <div class="pd_pconhead">
		   	  <div class="pd_Pdhead pt_fontSizeOne">
			 	  <img src="../../assets/image/callback.png" class="ad_Callback" @click="callback">
			 	  <button class="pf_Debutton bdsharebuttonbox"><img src="../../assets/image/point.png"  class="pd_Point"  data-cmd="more"></button>
			 	  <div style="clear:both"></div>
		      </div>
			  <div class="pd_Headtext pt_fontSizeSix">平潭{{getday}}主要商品价格行情</div>
			  <div class="pd_Release pt_fontSizeOne">发布时间 : {{releaseday}}</div>
		     </div>
           <!-- 物价详情主体内容 -->
		 <div class="pd_Pcontent pt_fontSizeOne">
		 	  <table class="pd_Table">
		 	  	  <tbody>
		 	  	  	   <tr class="pt_fontSizeTwo pd_Thead">
		 	  	  	   	   <td class="pd_Sorts">品种</td>
		 	  	  	   	   <td class="pd_Specifica">规格</td>
		 	  	  	   	   <td class="pd_Measurement">计量单位</td>
		 	  	  	   	   <td class="pd_Price">价格</td>
		 	  	  	   </tr>
		 	  	  	   <tr class="pt_fontSizeOne" v-for="item in getprice">
		 	  	  	   	   <td class="pd_Sorts">{{item.name}}</td>
		 	  	  	   	   <td class="pd_Specifica">{{item.spec}}</td>
		 	  	  	   	   <td class="pd_Measurement">{{item.unit}}</td>
		 	  	  	   	   <td class="pd_Price">{{item.price}}</td>
		 	  	  	   </tr>
		 	  	  </tbody>
		 	  </table>
		 	  <!-- <div class="pd_Editor pt_fontSizeOne">责任编辑: 王彬羽</div> -->
		 </div>
		<!--  <div class="pd_Related pt_fontSizeThree">相关推荐</div>
         <div>
             <spehorizontal :data="spehorizon"></spehorizontal> 	   
         </div> -->
	</div>
</template>
<script type="text/javascript">
	import api from '../../api/api.js'
	import spehorizontal from '../../components/common/spehorizontalGraphic'
	import {toChinese} from '../../assets/js/tablanguage'
	import {toSimpleChinese} from '../../assets/js/tablanguage'
	export default{ 
		data(){
			return{
                  getprice:[],
                  getday:'',
                  releaseday:'', 
                  spehorizon:[],
                  allLoaded:false,
			}
		},
		 updated:function(){
             this.tablanguage()
             this.$share.share()
        }, 
		components:{
            'spehorizontal':spehorizontal
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
	        getpricelist:async function(){
        	   let params = {paramJson:{"time":this.$route.query.day},page:this.index,length:5};
		          const response = await api.get('api/home/Api/priceDetails', params)
		          let data = response.data; 
		          if (data.code == 200 && data.success == true) {
		          	     this.getprice=data.result
		          }
	        },
	        getspehorizon:async function(){
                 let params = {paramJson:{"catid":"","sectionid":"","way":1},page:1,length:5};
		          const response = await api.get('api/home/Api/getRelatedRecommend', params)
		          let data = response.data; 
		          if (data.code == 200 && data.success == true) {
		          	     this.spehorizon=data.result.list
		          }
	        },
	        getdata:function(){
	        	var getsplit=this.$route.query.day.split('-')
	        	this.releaseday=getsplit[0]+'年'+getsplit[1]+'月'+getsplit[2]+'日'
                this.getday=getsplit[1]+'月'+getsplit[2]+'日'
	        },
	        callback:function(){
	        	 this.$router.go(-1)
	        }
		},
			mounted:function() {
	            this.getpricelist()
	            this.getdata()
	            this.getspehorizon()
			}
	}
</script>
<style scoped>
    #pricedetail{
    	height: 100%;
    	overflow-y: auto;
    	overflow-x: hidden;
    }
    .pd_pconhead{
        background: #FFFFFF;
        padding-bottom: 0.15rem;
        border-bottom: 0.01rem solid #B2B2B2;; 
  }
	.pd_Pdhead{
		height: 0.2rem;
		line-height: 0.2rem;
		margin-top: 0.14rem;
	}
	.ad_Callback{
		 width: 0.13rem;
		 height: 0.21rem;
		 margin-left: 0.1rem;
		 vertical-align: middle;
	}
	.pd_Point{
		 width: 0.25rem;
		 height: 0.06rem;
		 margin-top: 0.08rem;
		 float: right;
		 
	}
	.pd_Headtext{
		 width: 100%;
		 color: #000000;
         letter-spacing: 0;
         font-weight: bold;
         margin-left: 0.2rem;
         margin-top: 0.1rem;
	}
	.pd_Release{
		color: #454545;
		letter-spacing: 0;
		margin-top: 0.2rem;
		margin-left: 0.2rem;
	}
	.pd_Pcontent{
		width: 100%;
		display: inline-block;
		height: auto;
		background: #F9F9F9;
		margin-top: 0.15rem auto;
	}
	.pd_Thead{
		color: #333333;
        letter-spacing: 0; 
        background:#F2F2F2;
	}
	.pd_Sorts{
		width: 1.1rem;
		height: 0.26rem;
		line-height: 0.20rem;
		text-align: center;
		border: 0.01rem solid #979797;
	}
	.pd_Specifica{
		width: 0.8rem;
		text-align: center;
		border: 0.01rem solid #979797;
	}
	.pd_Measurement{
		width: 0.8rem;
		text-align: center;
		border: 0.01rem solid #979797;
	}
	.pd_Price{
		width: 0.68rem;
		text-align: center;
		border: 0.01rem solid #979797;
	}
	.pd_Table{
		width: 3.35rem;
		margin: 0.2rem auto;
        border-collapse:collapse;
	}
	.pd_Editor{
		width: 3.35rem;
		margin: 0.3rem auto ;
		color: #828282;
        letter-spacing: 0;
	}
	.pd_Related{
		color: #0061E3;
        letter-spacing: 0;  
        width: 3.35rem;
        margin: 0 auto;
        padding: 0.01rem 0 0.01rem 0.1rem ;
        border-left: 0.02rem solid #0061E3;
        height: 0.16rem;
        line-height: 0.16rem;
        margin-top: 0.1rem;
	}
	.pf_Debutton{
     width:0.54rem;
      height: 0.14rem;
      border: none;
      background: none;
      outline: none;
      border-radius: 0;
      float: right;
      margin-right: 0.1rem;
}
</style>