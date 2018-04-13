<template>
      <!-- 浮层页 -->
	 <div id="popups">
	     <!-- 关闭按钮 -->
	 	 <div class="ps_Shutdowndiv pt_fontSizeTwo">
	 	 	 <img src="../../assets/image/shutdowns.png" class="ps_Shutdown" @click="shutdown">
	 	 </div>
	 	 <!-- 多种频道之新闻 -->
	 	 <div class="ps_ChannelALL pt_fontSizeTwo">
	 	      <div class="ps_Channel pt_fontSizeFour">新闻频道</div>
	 	 	  <span class="ps_Channeltion" @click="backpage('/importnews')" :class="actmount==0?'active':'' ">要闻</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/newschannel/pingtannews')" :class="actmount==1?'active':'' ">平潭新闻</span>
              <span class="ps_Channeltion" @click="backpage('/newschannel/mainland')" :class="actmount==2?'active':'' ">大陆新闻</span>
              <span class="ps_Channeltion" @click="backpage('/newschannel/commonhome')" :class="actmount==3?'active':'' ">共同家园</span>
              <span class="ps_Channeltion" @click="backpage('/newschannel/globals')" :class="actmount==4?'active':'' ">环球新闻</span>
              <span class="ps_Channeltion" @click="backpage('/newschannel/lanhaicomment')" :class="actmount==5?'active':'' ">岚海网评</span>
              <span class="ps_Channeltion" @click="backpage('/newschannel/entertainment')" :class="actmount==6?'active':'' ">体娱新闻</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/newschannel/newlandmark')" :class="actmount==7?'active':'' ">新地标</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/newschannel/readingpolicy')" :class="actmount==8?'active':'' ">读政策</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/newschannel/variations')" :class="actmount==9?'active':'' ">变奏曲</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/newschannel/lookfuture')" :class="actmount==10?'active':'' ">看未来</span>
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 	  <!-- 多种频道之城市-->
	 	 <div class="ps_ChannelALL pt_fontSizeTwo">
	 	      <div class="ps_Channel pt_fontSizeFour">城市频道</div>
	 	 	  <span class="ps_Channeltion" @click="backpage('/citychannel/overview')" :class="actmount==11?'active':'' ">概览</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/citychannel/traffic')" :class="actmount==12?'active':'' ">交通</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/citychannel/humanities')" :class="actmount==13?'active':'' ">人文</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/citychannel/activity')" :class="actmount==14?'active':'' ">活动</span>
	 	 	  <span class="ps_Channeltion" @click="backpages" :class="actmount==15?'active':'' ">城市名片</span>
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 	  <!-- 多种频道之畅游 -->
	 	 <div class="ps_ChannelALL pt_fontSizeTwo">
	 	      <div class="ps_Channel pt_fontSizeFour">畅游频道</div>
	 	 	  <span class="ps_Channeltion" @click="backpage('/tourchannel/gensituation')" :class="actmount==16?'active':'' ">概况</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/tourchannel/beaufood')" :class="actmount==17?'active':'' ">美食</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/tourchannel/viewpoint')" :class="actmount==18?'active':'' ">美景</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/tourchannel/raiders')" :class="actmount==19?'active':'' ">攻略</span>
	 	 	  <div style="clear:both"></div>
	 	 </div> 
	 	 <!-- 多种频道之嗨玩 -->
	 	  <div class="ps_ChannelALL pt_fontSizeTwo">
	 	      <div class="ps_Channel pt_fontSizeFour">嗨玩频道</div>
	 	 	  <span class="ps_Channeltion" @click="backpage('/hiplaychannel/sailboat')" :class="actmount==20?'active':'' ">帆船</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/hiplaychannel/softball')" :class="actmount==21?'active':'' ">垒球</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/hiplaychannel/swimming')" :class="actmount==22?'active':'' ">游泳</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/hiplaychannel/cycling')" :class="actmount==23?'active':'' ">自行车</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/hiplaychannel/marathon')" :class="actmount==24?'active':'' ">马拉松</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/hiplaychannel/kitesurfing')" :class="actmount==25?'active':'' ">风筝冲浪</span>
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 	 <!-- 多种频道之专区-->
	 	  <div class="ps_ChannelALL pt_fontSizeTwo">
	 	      <div class="ps_Channel pt_fontSizeFour">专区</div>
	 	      <span class="ps_Channeltion" @click="backpage('/area/panoramarea')" :class="actmount==26?'active':'' ">全景</span>
	 	      <span class="ps_Channeltion" @click="backpage('/area/landgallery')" :class="actmount==27?'active':'' ">图库</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/area/videoarea')" :class="actmount==28?'active':'' ">视频</span>
	 	 	   
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 	  <!-- 多种频道之其他频道-->
	 	 <div class="ps_ChannelALL pt_fontSizeTwo">
	 	      <div class="ps_Channel pt_fontSizeFour">其他频道</div>
	 	 	  <span class="ps_Channeltion" @click="backpage('/otherchannel/electricity')" :class="actmount==29?'active':'' ">电力</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/otherchannel/pingtanprices')" :class="actmount==30?'active':'' ">平潭物价</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/otherchannel/pingtantraffic')" :class="actmount==31?'active':'' ">平潭交通</span>
	 	 	  <span class="ps_Channeltion" @click="backpage('/otherchannel/special')" :class="actmount==32?'active':'' ">专题</span>
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 	 <div class="ps_Bottom"></div>
	 </div>
</template>
<script type="text/javascript">
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
	export default{
		data(){
			return{
                actmount:'',
			}
		},
		mounted:function() {
			this.tablanguage()
            this.defaultfun() 
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
			   // 返回上一页
			shutdown:function(){ 
				this.$router.go(-1)
			},
			  // 点击跳转到相应页面
			backpage:function(url){
				this.$router.push(url)
			},
			backpages:function(){
				window.location.href='http://mob.visualbusiness.cn/pingtan_app/app.html?appId=1275'
			},
			// 通过判断跳转前的url给相应的字段加样式
			defaultfun:function(){
                switch(this.$route.query.url){
                    case 'importnews':this.actmount=0; break;
                    case 'pingtannews': this.actmount=1;break;
                    case 'mainland': this.actmount=2;break;
                    case 'commonhome': this.actmount=3;break;
                    case 'globals': this.actmount=4;break;
                    case 'lanhaicomment': this.actmount=5;break;
                    case 'entertainment': this.actmount=6;break;
                    case 'newlandmark': this.actmount=7;break;
                    case 'readingpolicy':this.actmount=8; break;
                    case 'variations':this.actmount=9;break;
                    case 'lookfuture':this.actmount=10; break;
                    case 'overview':this.actmount=11; break;
                    case 'traffic':this.actmount=12;break;
                    case 'humanities':this.actmount=13; break;
                    case 'activity':this.actmount=14; break;
                    case 'citycard':this.actmount=15; break;
                    case 'gensituation':this.actmount=16; break;
                    case 'beaufood':this.actmount=17; break;
                    case 'viewpoint':this.actmount=18; break;
                    case 'raiders':this.actmount=19; break;
                    case 'sailboat':this.actmount=20; break;
                    case 'softball':this.actmount=21; break;
                    case 'swimming':this.actmount=22; break;
                    case 'cycling':this.actmount=23; break;
                    case 'marathon':this.actmount=24; break;
                    case 'kitesurfing':this.actmount=25; break;
                    case 'panoramarea':this.actmount=26; break;
                    case 'landgallery':this.actmount=27; break;
                    case 'videoarea':this.actmount=28; break;
                    case 'electricity':this.actmount=29; break;
                    case 'pingtanprices':this.actmount=30; break;
                    case 'pingtantraffic':this.actmount=31; break;
                    case 'special':this.actmount=32; break;
                 } 
			},
		}
	}
</script>
<style scoped>
	#popups{
	  background: #ffffff;	
	  height: 100%;
	  overflow-y:auto;
	}
	.ps_Shutdowndiv{
	  height: 0.2rem;
	  margin-top: 0.15rem;
	  margin-left: 0.15rem;
	}
	.ps_Shutdown{
       width: 0.2rem;
       height: 0.2rem;
	}
	/*多种频道*/
	.ps_ChannelALL:nth-child(2){
		  margin-top: 0.2rem;
	}
	.ps_ChannelALL{
         margin-top: 0.4rem;
	}
	.ps_Channel{
		color: #000000;
        letter-spacing: 1px;
        margin-left: 0.15rem;
	}
	.ps_Channeltion{
		 display: inline-block;
         width: 0.8rem;
         height: 0.4rem;
         color: #000000;
         line-height: 0.4rem;
         text-align: center;
         cursor: pointer;
         float: left;
         margin-left: 0.04rem;
         margin-right: 0.04rem;
         background: #F2F2F2;
         border-radius: 4px;
         margin-top: 0.15rem;
         letter-spacing: 0.78px;
	}
	.ps_Channeltion:nth-child(4n+2){
		 margin-left: 0.15rem;
	}
	.ps_Bottom{
		width: 100%;
		height: 0.74rem;
	}
	.active{
		color: #A9A9A9;
		background: #E6E6E6;
	}
</style>