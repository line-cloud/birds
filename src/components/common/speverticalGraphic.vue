<template>
     <!-- 专题上下图文 -->
	 <div class ="verticalGraphic">
	 	  <div>
	 	  	   <p class="vg_Vertitle pt_fontSizeFour">环青海湖自行车赛鸣枪 围观全明星阵容</p>
	 	  </div>
	 	  <div class="vg_Specontain">
	 	  	   <img src="../../assets/image/specialOne.png" class="vg_Graphic">
	 	  	   <img src="../../assets/image/specialOne.png" class="vg_Graphic">
	 	  	   <img src="../../assets/image/specialOne.png" class="vg_Graphic">
	 	  </div>
	 	  <div>
               <p class="vg_Newstimer pt_fontSizeOne">腾讯新闻 06-24 03:21</p>
	 	  </div>
	 </div>
</template>
<style scoped>
   .verticalGraphic{
      width: 3.36rem;
      margin: 0 auto;
      border-bottom:0.01rem solid #F4F5F6;
}
/*#F4F5F6;*/
	.vg_Graphic{
	  width: 1.1rem;
      height: 0.78rem;
      margin-top: 0.15rem;
      margin-right: 0.03rem;
	}
	.vg_Graphic:nth-child(3){
		 margin-right: 0;
	}
	.vg_Vertitle{
		 color: #000000;
		 line-height: 0.18rem;
		 margin-top: 0.15rem;
	}
	.vg_Specontain{
		 font-size: 0;
	}
	.vg_Newstimer{
		color: #B2B2B2;
        letter-spacing: 0;
        height: 0.14rem;
        line-height: 0.14rem;
        padding-bottom: 0.15rem;
        margin-top: 0.15rem;
	}
</style>