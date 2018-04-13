<template>
    <!-- 专题总览页面 -->
	  <div id="specialFirst">
		  	   <div class="lg_Loadmorediv  pt_fontSizeTwo">
	          <!-- 上拉刷新下拉加载控件 -->
	            <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :autoFill="false"> 
	        <div>
		  	  <div class="sw_Specialover" v-for="(item,index) in spacialdata" @click="jumpspecial(item.template_id,item.specialid,item.title,item.url)" >
		  	  	  <div class="sw_Specialbgdiv">
		  	  	  	   <img v-lazy="item.img" class="sw_Specialbgimg">
		  	  	  	   <span class="sw_Specialtime">{{item.time|gettime}}</span>
		  	  	  </div>
		  	  	  <p class="sw_Spetitle pt_fontSizeTwo">{{item.title}}</p>
		  	  	  <p class="sw_Spetext pt_fontSizeOne">{{item.desc}}</p>
		  	  </div>
		  	  <div style="clear:both"></div>
		 </div>
		  <!-- 没有数据时显示提示用户 -->
	             <div class="lg_Nodata" v-show="nodata">没有更多数据了</div>
	          </mt-loadmore>
	         </div>
	  </div>
</template>
<script type="text/javascript">
import api from '../../api/api.js'
import homeheader from '../common/homeheader'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
import {formatDate} from '../../assets/js/turnTimes.js'
	export default{
		name:'specialoverview',
		components:{
			'homeheader':homeheader
		},
		data(){
			return{
				spacialdata:[],
				index:1,
                totalpages:'',
                nodata:false,
                reset:false,
                allLoaded:false,
                loadBott:false,
			}
		},
		// 过滤新闻发布日期函数
		filters:{
			// 过滤日期函数
              gettime:function(timer){
              	  return formatDate(timer,2)
              }   
		},
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
          jumpfun:function(url){
                window.location.href=url;
          },
			    // 跳转专题详情
				jumpspecial:function(templateid,specialid,title,url) {
					var templateid=parseInt(templateid)
					switch(templateid){
					   case 0:window.location.href=url;break;
                       case 1:this.$router.push({path:'/detailspage/specialFirst',query:{templateid:templateid,specialid:specialid,title:title
                  }});break;
                      case 2:this.$router.push({path:'/detailspage/specialSecond',query:{templateid:templateid,specialid:specialid,title:title
                  }});break;
                       case 3:this.$router.push({path:'/detailspage/specialThird',query:{templateid:templateid,specialid:specialid,title:title
                  }});break;
                       case 4:this.$router.push({path:'/detailspage/specialFour',query:{templateid:templateid,specialid:specialid,title:title
                  }});break;
                       case 5:this.$router.push({path:'/detailspage/specialFive',query:{templateid:templateid,specialid:specialid,title:title
                  }});break;
					}
				},
				// 获取专题列表
				getspecialist:async function(reset){
					           if(reset){
	                        this.spacialdata=[]
	                   }
					  let params = {paramJson:{},page:this.index,length:6};
				          const response = await api.get('api/home/Api/getSpecial', params)
				          let data = response.data; 
				          if (data.code == 200 && data.success == true) {
				          	    this.totalpages=data.result.totalPages
				                  for(var i=0;i<data.result.list.length;i++){
				                   this.spacialdata.push(data.result.list[i])
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
		                     this.getspecialist(this.reset)
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
	                  this.getspecialist(this.reset)
	                  this.$refs.loadmore.onTopLoaded();
	              }, 1500);
	            },
			},
			mounted:function(){
				this.getspecialist(this.reset)
				this.getheadhight()
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
  .sw_Specialover{
     margin-top: 0.3rem;
     display: inline-block;
     float: left;
}
.sw_Specialover:nth-child(1){
	  margin-top: 0.2rem;
}
.sw_Specialover:nth-child(2){
	  margin-top: 0.2rem;
}
.sw_Specialover:nth-child(2n+1){
	  margin-left: 0.1rem;
	  margin-right: 0.1rem;
}
.sw_Specialbgdiv{
	font-size: 0;
	position: relative;
}
.sw_Specialbgimg{
	 width: 1.72rem;
	 height: 0.9rem;
	 border-radius: 0.05rem;
}
.sw_Spetitle{
	width: 1.62rem;
	line-height: 0.16rem;
	min-height: 0.32rem;
	color: #333333;
    letter-spacing: 0;
    margin-top: 0.1rem;
    margin-bottom: 0.05rem;
    display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
}
.sw_Spetext{
	color: #666666;
	letter-spacing: 0;
	line-height: 16px;
	width: 1.62rem;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
}
.sw_Specialtime{
     display: inline-block;
	 background: rgba(0,0,0,0.4);
	 border-radius: 0.02rem;
	 width: 0.66rem;
	 height: 0.15rem;
	 line-height: 0.17rem;
	 font-size: 10px;
     color: #FFFFFF;
     letter-spacing: 0;
     position: absolute;
     left: 0.05rem;
     bottom: 0.05rem;
     text-align: center;
}
.lg_Nodata{
        text-align: center;
        height: 0.40rem;  
        line-height: 0.40rem;
    }
</style>