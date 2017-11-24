<template>
      <!-- 浮层页 -->
	 <div id="popups">
	     <!-- 关闭按钮 -->
	 	 <div class="ps_Shutdowndiv pt_fontSizeTwo">
	 	 	 <img src="../../assets/image/shutdown.png" class="ps_Shutdown" @click="shutdown">
	 	 </div>
	 	 <!-- 中英文切换 -->
	 	 <div class="pt_fontSizeTwo ps_Tablanguage">
	 	 	  <span class="ps_Language">中文</span>
	 	 	  <span class="ps_Language">英文</span>
	 	 	  <span class="ps_Language">繁体</span>
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 	 <!-- 多种频道之新闻 -->
	 	 <div class="ps_ChannelALL">
	 	      <div class="ps_Channel pt_fontSizeFour">新闻频道</div>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo" @click="backindex">首页</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">新地标</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">读政策</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">变奏曲</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">看未来</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo" @click="newdi">全资讯</span>
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 	  <!-- 多种频道之城市-->
	 	 <div class="ps_ChannelALL">
	 	      <div class="ps_Channel pt_fontSizeFour">城市频道</div>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">首页</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">新地标</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">读政策</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">变奏曲</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">看未来</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">全资讯</span>
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 	  <!-- 多种频道之畅游 -->
	 	 <div class="ps_ChannelALL">
	 	      <div class="ps_Channel pt_fontSizeFour">畅游频道</div>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">首页</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">新地标</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">读政策</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo" @click="panosecond">全景2</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo">物价</span>
	 	 	  <span class="ps_Channeltion pt_fontSizeTwo" @click="traffic">交通</span>
	 	 	  <div style="clear:both"></div>
	 	 </div>
	 </div>
</template>
<script type="text/javascript">
	export default{
		components:{
		},
		methods:{
			traffic:function(){
				this.$router.push('/otherpages/trafficdetail')
			},
			panosecond:function(){
                this.$router.push('/panoramic/panoSecond')
			},
			shutdown:function(){
				this.$router.push('/home')
			},
			backindex:function(){
				this.$router.push('/home')
			},
			newdi:function(){
				this.$router.push('/column/columntravel')
			}
		}
	}
</script>
<style scoped>
	#popups{
	    background: #ffffff;	
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
	/*切换网页语言*/
	.ps_Tablanguage{
		 color: #000000;
         letter-spacing: 0.78px;
         margin-top: 0.2rem;
	}
	.ps_Language:nth-child(1){
		color: #0061E3;
		background: #D6D6D6;
		margin-left: 0.15rem;
		margin-right: 0.09rem;
	}
	.ps_Language:nth-child(3){
         margin-left: 0.09rem;
		 margin-right: 0.15rem;
	}
	.ps_Language{
		display: inline-block;
		width: 1.09rem;
		height: 0.4rem;
		text-align: center;
		line-height: 0.4rem;
		/*background: #F2F2F2;*/
        border-radius: 4px;
        background: #F2F2F2;
        float: left;
	}
	/*多种频道*/
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
         line-height: 0.4rem;
         text-align: center;
         cursor: pointer;
         float: left;
         margin-left: 0.04rem;
         margin-right: 0.04rem;
         background: #F2F2F2;
         border-radius: 4px;
         margin-top: 0.15rem;
	}
	.ps_Channeltion:nth-child(2){
		 color: #0061E3;
		 background: #D5D5D5;
	}
	.ps_Channeltion:nth-child(4n+2){
		 margin-left: 0.15rem;
	}
</style>