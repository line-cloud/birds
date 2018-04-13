<template>
        <!-- 搜索页 -->
<div id="sh_searchheader">
    <div class="sh_searchheader">
    	      <!-- 搜索头部组件 -->
	<div id="searchheader" class="pt_fontSizeTwo">
		<div class="sh_Searchpar">
			 <input type="text" name="" placeholder="请搜索你要的新闻" autofocus="autofocus" class="sh_Searchtext pt_fontSizeTwo" v-model="value" @keypress="onkeyup($event)">
			 <i class="sh_Searchicon" @click="searchconfun"></i>  <!-- 搜索图标 -->
			 <i class="sh_Searchdown" @click="searchdown"></i>
		</div>
		<div class="pt_fontSizeTwo sh_Cancel" @click="cancel">取消</div>
	</div>
	     <!-- 搜索导航 -->
	<div class="sh_Newsnav">
	      <ul  class="pt_fontSizeTwo">
	      	  <li class="sh_Newsnavli" @click="chooseboard('')" :class="active==''?'activecolor':'' ">全部
                  <i class="sh_Rectangle" v-show="active==''"></i>
	      	  </li>
	      	  <li class="sh_Newsnavli" @click="chooseboard(1)" :class="active==1?'activecolor':'' ">新闻
	      	  <i class="sh_Rectangle" v-show="active==1" ></i></li>

	      	  <li class="sh_Newsnavli" @click="chooseboard(2)" :class="active==2?'activecolor':'' ">城市
	      	  <i class="sh_Rectangle" v-show="active==2"></i></li>

	      	  <li class="sh_Newsnavli" @click="chooseboard(3)" :class="active==3?'activecolor':'' ">畅游
	      	  <i class="sh_Rectangle" v-show="active==3"></i></li>

	      	  <li class="sh_Newsnavli" @click="chooseboard(4)" :class="active==4?'activecolor':'' ">嗨玩
	      	  <i class="sh_Rectangle" v-show="active==4"></i></li>
	      	  <div style="clear:both"></div>
	      </ul>
	</div>
    </div>

    <!-- 加载logo -->
    <div class="sh_Loadingdiv" v-show="loading">
		<img src="../../assets/image/loading.gif" class="sh_Loading">
	</div>

	 <!-- 暂无所此搜索结果 -->
	<div class="ssh_Search pt_fontSizeFour" v-show="relative">
		 暂无相关搜索内容
	</div>

	<!-- 搜索内容不能为空 -->
	<div class="ssh_Searchnull pt_fontSizeFour" v-show="searchnull">
	     搜索内容不能为空
	</div> 

	<!-- 搜索结果 -->
	<div id="searchresult">
		<div class="lg_Loadmorediv  pt_fontSizeTwo">
	<mt-loadmore  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded"  ref="loadmore" :autoFill="false" >
			 <!-- 新闻主体内容组件 -->
			 <div class="sh_sctextbg">
			 	<div class="sh_newscontent" v-for="item in searchcon"  @click="jumpdetail(item.url)">
			 	       <div v-if="item.headurlone!=''">
                    <p class="sh_searnewst pt_fontSizeThree" v-html="item.title"></p>
                    <div class="sh_Pictext">
                        <img v-lazy="item.headurlone" class="sh_Newspic">
                        <p class="sh_Newstext pt_fontSizeOne"  v-html="item.news_des"></p>
                        <div style="clear:both"></div>
                     </div>
                      <div class="sh_Newsinfor">
                          <span>{{item.copyfrom}}</span><span class="sh_pubtime">{{item.pubtime|getcurrent}}</span>
                     </div>   
               </div>
               <div  v-if="item.headurlone==''">
                         <p class="cu_Nopicture pt_fontSizeFours" v-html="item.title"></p>
                         <p class="cu_Nopictures pt_fontSizeOne" v-html="item.news_des"></p>
                         <p class="vd_Pasttime  pt_fontSizeOnes">
                             <span class="vd_Copyfrom">{{item.copyfrom}}</span>
                             <span class="vd_Pubtime">{{item.pubtime|getcurrent}}</span>
                             <div style="clear:both"></div>
                        </p>
           </div>
			    </div>
			 </div>
			  <!-- 没有数据时显示提示用户 -->
         <div class="lg_Nodata" v-show="nodata">没有更多数据了</div>
	 </mt-loadmore>
		</div>
	</div>
</div>
</template>
<script type="text/javascript">
import api from '../../api/api.js'
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
import {formatDate} from '../../assets/js/turnTimes.js'
	export default{
		data(){
           return{
           	   active:'',
           	   value:'',
           	   index:1,
           	   searchcon:[],
               totalpages:'',
               nodata:false,
               reset:false,
               loading:false,
               relative:false,
               searchnull:false,
               checkval:false,
               allLoaded:false,
               loadBott:false,
           }
		},
		 updated:function(){
             this.tablanguage()
        },
            // 获得发布时间
        filters:{
              getcurrent:function(timer){
                return formatDate(timer,1)
          },
        },
       watch:{
         value(newval,oldval){
              this.searchnull=false
              this.relative=false   
         },
      },
      mounted:function(){
        this.tablanguage()
         if(this.$cookies.get('searchvalue')==1||this.$cookies.get('searchvalue')==null){
            this.$cookies.set('searchvalue','')
         }else{
          this.value=this.$cookies.get('searchvalue');
          this.getsearchdata() 
         }
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
                   // 获取头部高度
        getheadhight:function(){
             var home=document.getElementById('searchresult')
             var sh_searchheader=document.getElementsByClassName('sh_searchheader')[0]
             sh_searchheader.style.height=document.documentElement.clientWidth/375*86+'px'
             home.style.height=document.documentElement.clientHeight-parseInt(sh_searchheader.style.height)+'px'
          },
          jumpdetail:function(url){
                if(this.$cookies.get('tabstyle')==1){
                  window.location.href=url+'?lan=1'
              }else if(this.$cookies.get('tabstyle')==2){
                   window.location.href=url+'?lan=2'
              }
          },
			// 清空input里的内容
    			searchdown:function () {
    				    this.value=""
                this.relative=false;
                this.nodata=false;
                this.$cookies.set('searchvalue','')
                },
            // 控制切换样式并搜索
            chooseboard:function(index){
               this.$cookies.set('searchvalue', this.value)
            	 this.active=index
            	if(this.value==''){
                this.searchcon=[]
                this.searchnull=true;
                this.relative=false
            		return 
            	}
                this.searchnull=false;
                this.nodata=false;
                this.allLoaded=false;
                this.loading=true
		            this.relative=false
                this.reset=true
                this.index=1
                setTimeout(() => {
	                this.getsearchdata(this.reset)
		        }, 500);
            },
            // 返回上一页面
           cancel:function(){
           	  this.$router.go(-1)
           },
           // 手机回车事件
           onkeyup:function(event){
           	if(event.keyCode!=13){
                     return
           	    }
           	  if(this.value==''){
                this.searchcon=[]
                this.searchnull=true;
                this.relative=false
            		return 
            	}
                this.$cookies.set('searchvalue', this.value)
                this.nodata=false;
                this.allLoaded=false;
         	      this.searchnull=false;
         	    	this.relative=false
         	      this.loading=true
                this.reset=true
                this.index=1
         	    	setTimeout(() => {
                   this.getsearchdata(this.reset)
	        }, 500);
           },
           // 搜索logo事件函数
           searchconfun:function(){
           	 if(this.value==''){
                this.searchcon=[]
           	   	this.searchnull=true;
                this.relative=false
           	 	 return
           	 }
           	     this.searchnull=false;
                 this.nodata=false;
                 this.allLoaded=false;
       	         this.reset=true
       	         this.relative=false
       	         this.loading=true
		             this.index=1
                 setTimeout(() => {
		             this.getsearchdata(this.reset)
		        }, 500);
           },
           // 获取搜索结果内容函数
           getsearchdata:async function(reset){
           	 if(reset){
                this.searchcon=[]
            }
                  let params = {paramJson:{search:this.value,'section_id':this.active,'type':1},page:this.index,length:5};
		          const response = await api.get('/api/home/Api/searchInfo', params)
		          let data = response.data; 

		          if (data.code == 200 && data.success == true) {
		          	this.totalpages=data.result.totalPages;
		            for(var i=0;i<data.result.list.length;i++){
		                this.searchcon.push(data.result.list[i])
		            }   
                    if(this.loadBott){
                       this.$refs.loadmore.onBottomLoaded();
                 }
		                this.searchnull=false;
		                this.loading=false;
		                this.relative=false;
		          }else{
		          	 setTimeout(() => {  
		          	 	  this.searchnull=false;
                    this.loading=false;
		          	 	  this.relative=true;
		          }, 1500);
		          }
           },
               // 上拉加载数据控件函数
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
                       this.getsearchdata(this.reset)
                 }     
        },500);
      },
		      // 下拉刷新控件函数
		      // loadTop() { 
		             //this.loadBott=false,
                // this.nodata=false;
                // this.allLoaded=false;
                // this.reset=true;
		      //   setTimeout(() => {
		      //       this.index=1
		      //       this.getsearchdata(this.reset)
		      //       this.$refs.loadmore.onTopLoaded();
		      //   }, 1500);
		      // },   
		}
	}
</script>
<style scoped>
#sh_searchheader{
    height: 100%;
}
.sh_searchheader{
    height: 0.86rem
}

	#searchheader{
		width: 100%;
		height: 0.50rem;
		background: rgba(255,255,255,0.90);
    box-shadow: 0 0 0 0 #B2B2B2;
    border-bottom: 0.01rem solid #F2F2F2;
    position: relative;
	}
	.sh_Searchtext{
		display: inline-block;
		width: 100%;
		height: 100%;
		line-height: 0.27rem;
	    background: rgba(3,3,3,0.09);
	     border-radius: 5px;
	     padding-left: 0.31rem;
	     box-sizing: border-box;
	     outline: none;
	     border: none;
	}
	.ssh_Search{
		 width: 100%;
         height: 5.67rem;
         vertical-align: middle;
         position: absolute;
         top: 0.9rem;
         color: #A0A0A0;
         text-align: center;
         box-sizing: border-box;
         padding-top: 1.45rem;
	}
	.ssh_Searchnull{
		 width: 100%;
         height: 5.67rem;
         vertical-align: middle;
         position: absolute;
         top: 0.9rem;
         color: #A0A0A0;
         text-align: center;
         box-sizing: border-box;
         padding-top: 1.45rem;
	}
	.sh_Loadingdiv{
         width: 100%;
         height: 5.67rem;
         vertical-align: middle;
         position: absolute;
         top: 0.9rem;
	} 
	.sh_Loading{
		width: 100%;
		height: 50%;
	}
	.sh_Searchicon{
		width: 0.13rem;
		height: 0.13rem;
		display: inline-block;
		background: url('../../assets/image/search.png') no-repeat;
		background-size: cover;
		position: absolute;
		top: 0.06rem;
		left: 0.1rem;
	}
	.sh_Searchpar{
		position: relative;
		width: 2.9rem;
		height: 0.26rem;
		margin-top: 0.15rem;
		margin-left: 0.2rem;
		display: inline-block;
	}
	.sh_Searchdown{
        width: 0.15rem;
        height: 0.14rem;
        display: inline-block;
        background: url('../../assets/image/shutdo.png') no-repeat;
        background-size: cover;
        position: absolute;
        top: 0.06rem;
        right: 0.1rem;
	}
    .sh_Cancel{
    	color: #7A797B;
        letter-spacing: -0.15px;
        display: inline-block;
        margin-left: 0.14rem;
        position: relative;
    }
    .sh_pubtime{
    	position: relative;
    	top: 0.01rem; 
    	margin-left: 0.05rem;
    }
    /*修改input中placeholder的默认样式*/
	 .sh_Searchtext::-webkit-input-placeholder { /* WebKit browsers */
	    font-size: 14px;color: #7A797B;letter-spacing: -0.15px;
	    margin-top: 0.02
     }
   .sh_Searchtext:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        font-size: 14px;color: #7A797B;letter-spacing: -0.15px;
    }
   .sh_Searchtext::-moz-placeholder { /* Mozilla Firefox 19+ */
       font-size: 14px;color: #7A797B;letter-spacing: -0.15px;
    }
    .sh_Searchtext:-ms-input-placeholder { /* Internet Explorer 10+ */
	  font-size: 14px;color: #7A797B;letter-spacing: -0.15px;
   }
   /*搜索导航*/
    .sh_Newsnav{
    	height:0.35rem;
    	line-height: 0.35rem;
    	position: relative;
    	border-bottom: 1px solid #F4F5F6;
    	z-index: 100;
    }
    .sh_Newsnavli {
    	 display: inline-block;
    	 margin-left: 0.2rem;
    	 color: #666666;
    	 float: left;
    	 position: relative;
    }
	.sh_Rectangle{
	    width: 0.20rem;
	    height: 0.02rem;
	    display: block;
	    position: absolute;
	    top: 0.34rem;
	    left: 0.05rem;
	    background: #0061E3;
	}
    .activecolor{
    	color:#0061E3;
    }
    /*搜索结果样式*/
	/*新闻主体内容*/
	.sh_sctextbg{
		background: #F2F2F2;
	}
	.sh_newscontent{
         width: 100%;
         background: #FFFFFF;
         margin-top: 0.1rem;
	}
	.sh_searnewst{
		    width: 3.35rem;
        margin: 0 auto;
        display: -webkit-box;
    		-webkit-box-orient: vertical;
    		-webkit-line-clamp: 2;
    		overflow: hidden;
    	  color: #333333;
        letter-spacing: -0.07px;
        padding-top: 0.1rem;
        box-sizing: border-box;
	}
	.sh_newscontent:nth-child(1){
          margin-top: 0;
	}
	.sh_Pictext{
		width: 3.35rem;
		margin: 0.1rem auto;
	}
	.sh_Newspic{
		 width: 1.2rem;
		 height: 0.72rem;
		 float: left;
		 border-radius: 0.05rem;
	}
	.sh_Newstext{
		width: 2.05rem;
		letter-spacing: -0.11px;
		line-height: 0.15rem;
		color: #666666;
		float: left;
		margin-left: 0.1rem;
		position: relative;
		top: -0.02rem;
    text-align: justify;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 5;
		overflow: hidden;
	}
	.sh_Newsinfor{
		 color: #A0A0A0;
         letter-spacing: 0;
         line-height:0.15rem;
         width: 3.35rem;
         font-size: 10px;
         margin: 0 auto ;
         padding-bottom: 0.1rem;
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
    .cu_Nopicture{
        width: 3.35rem;
        margin: 0rem auto  0.1rem auto;
        color: #000000;
        letter-spacing: 0;
        line-height: 0.2rem;
        padding-top: 0.1rem;
    }
    .cu_Nopictures{
       width: 3.35rem;
       margin: 0.1rem auto;
        letter-spacing: -0.11px;
        line-height: 0.15rem;
        color: #666666;
        text-align: justify;
    }
    .vd_Pasttime{
        position: relative;
        color: #A0A0A0;
        letter-spacing: 0;
        height: 0.12rem;
        line-height: 0.12rem;
        width: 3.35rem;
        margin-left: auto;
        margin-right: auto;
        padding-bottom: 0.1rem;
    }
    .vd_Copyfrom{
        float: left;
    }
    .hg_Vertical{
        border-right: 0.01rem solid #D7D7D7;
        width: 0.01rem;
        height: 0.07rem;
        position: absolute;
        top: 0.01rem;
        margin-left: 0.05rem;
        float: left;
  }
  .vd_Pubtime{
      float: left;
      margin-left: 0.08rem;
    }
</style>