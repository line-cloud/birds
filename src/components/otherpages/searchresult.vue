<template>
	<div id="searchresult">
		<div>
		     <!-- 搜索头部 -->
			 <searchr></searchr>
		</div>
		<div>
			 <div class="sh_Newsnav">
			 	  <p class="sh_Navnews pt_fontSizeTwo">新闻</p>
			 	  <i class="sh_Rectangle"></i>
			 </div>
			 <!-- 新闻主体内容组件 -->
			 <div class="sh_sctextbg">
			 	<div class="sh_newscontent">
			 	  <p class="sh_searnewst pt_fontSizeThree">丝绸之路国际汽车拉力赛：阿莫斯首夺赛啊段阿莫斯首夺赛啊段</p>
			 	  <div class="sh_Pictext">
			 	  	   <img src="../../assets/image/specialbg.jpg" class="sh_Newspic">
			 	  	   <p class="sh_Newstext pt_fontSizeOne">2017年丝绸之路国际汽车拉力赛18日迎来第十赛段、同时也是中国境内第三赛段的比拼，两驱竞技车队的阿莫斯拿下汽车组赛段冠军MINI车队双雄阿拉吉、孟席斯分获亚军、季军....</p>
			 	  	   <div style="clear:both"></div>
			 	  </div>
                  <div class="sh_Newsinfor pt_fontSizeOne">新华网体育  2017-07-19 08:15:21  13.3万浏览量  401条评价</div>
			    </div>
			    <div class="sh_newscontent">
			 	  <p class="sh_searnewst pt_fontSizeThree">丝绸之路国际汽车拉力赛：阿莫斯首夺赛啊段阿莫斯首夺赛啊段</p>
			 	  <div class="sh_Pictext">
			 	  	   <img src="../../assets/image/specialbg.jpg" class="sh_Newspic">
			 	  	   <p class="sh_Newstext pt_fontSizeOne">2017年丝绸之路国际汽车拉力赛18日迎来第十赛段、同时也是中国境内第三赛段的比拼，两驱竞技车队的阿莫斯拿下汽车组赛段冠军MINI车队双雄阿拉吉、孟席斯分获亚军、季军....</p>
			 	  	   <div style="clear:both"></div>
			 	  </div>
                  <div class="sh_Newsinfor pt_fontSizeOne">新华网体育  2017-07-19 08:15:21  13.3万浏览量  401条评价</div>
			    </div>
			    <div class="sh_newscontent">
			 	  <p class="sh_searnewst pt_fontSizeThree">丝绸之路国际汽车拉力赛：阿莫斯首夺赛啊段阿莫斯首夺赛啊段</p>
			 	  <div class="sh_Pictext">
			 	  	   <img src="../../assets/image/specialbg.jpg" class="sh_Newspic">
			 	  	   <p class="sh_Newstext pt_fontSizeOne">2017年丝绸之路国际汽车拉力赛18日迎来第十赛段、同时也是中国境内第三赛段的比拼，两驱竞技车队的阿莫斯拿下汽车组赛段冠军MINI车队双雄阿拉吉、孟席斯分获亚军、季军....</p>
			 	  	   <div style="clear:both"></div>
			 	  </div>
                  <div class="sh_Newsinfor pt_fontSizeOne">新华网体育  2017-07-19 08:15:21  13.3万浏览量  401条评价</div>
			    </div>
			 </div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import searchr from '../common/searchheader'
	export default{
		name:'searchheader',
		components:{
			'searchr':searchr,
		}
	}
</script>
<style scoped>
    .sh_Newsnav{
    	height:0.3rem;
    	line-height: 0.3rem;
    	position: relative;
    	width: 3.35rem;
    	margin: 0.02rem auto;
    }
    .sh_Navnews{
    	color: #0061E3;
        letter-spacing: 0.17px;
    }
	.sh_Rectangle{
		display: inline-block;
		width: 0.34rem;
		height: 0.04rem;
	   background: url('../../assets/image/rectangle.png') no-repeat;
		background-size: cover;
		position: absolute;
		bottom: 0;
	}
	/*新闻主体内容*/
	.sh_sctextbg{
		background: #F2F2F2;
	}
	.sh_newscontent{
         width: 100%;
         /*height: 1.43rem;*/
         background: #FFFFFF;
         margin-top: 0.1rem;
	}
	.sh_searnewst{
		width: 3.35rem;
        margin: 0 auto;
	    white-space: nowrap;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    color: #0061E3;
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
	}
	.sh_Newstext{
		width: 2.05rem;
		color: #454545;
		height: 0.75rem;
		overflow: hidden;
		letter-spacing: -0.11px;
		line-height: 0.15rem;
		float: left;
		margin-left: 0.1rem;
		position: relative;
		top: -0.02rem;
	}
	.sh_Newsinfor{
		 color: #828282;
         letter-spacing: 0;
         line-height:0.15rem;
         width: 3.35rem;
         /*margin: 0.1rem auto;*/
         margin: 0 auto;
         /*padding-bottom: 0.1rem;*/
	}
</style>