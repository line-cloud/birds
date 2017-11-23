<template>
       <!-- 专题公告部分 -->
		 <div class="sf_Announcement">
        	 <div class="sf_Newsannoudiv pt_fontSizeThree">
        	 	 <img src="../../assets/image/newsannou.png" class="sf_Newsannou">
        	 </div>
             <div class="sf_Eletextdiv pt_fontSizeTwo">
                  <p class="sf_Eletext">停电公告：10月20日06:00—18:30停电，请转告其他人</p>
                  <p class="sf_Elecell">供电值班电话：城关地区运维电话 6228123456789</p>
             </div>
             <div style="clear:both"></div>
        </div>
</template>
<style scoped>
	.sf_Announcement{
    	width: 3.35rem;
    	height: 0.6rem;
    	border: 0.01rem solid rgba(197,197,197,0.50);
    	margin: 0.2rem auto;
    }
     .sf_Newsannoudiv{
     	width: 0.4rem;
    	height: 0.4rem;
    	margin: 0.1rem;
        float: left;
     }
    .sf_Newsannou{
    	width: 100%;
    	height: 100%;
    }
    .sf_Eletextdiv{
          width: 2.7rem;
          float: left;
    }
    .sf_Eletext{
        height: 0.15rem;
        line-height: 0.15rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.1rem;
    }
    .sf_Elecell{
        height: 0.15rem;
        line-height: 0.15rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 0.1rem;
    }
</style>