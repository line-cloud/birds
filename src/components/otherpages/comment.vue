<template>
    <!-- 评论 -->
	<div id="comment">
	        <!-- 评论头部 -->
		  <div class="pt_fontSizeTwo rh_Backchediv">
		 	 <img src="../../assets/image/share.png" class="rh_Backchevron">
		 	  <span class="ct_Comment pt_fontSizeThree">评论</span>
			 <img src="../../assets/image/shutdown.png" class="rh_More">
			 <div style="clear:both"></div>
		 </div>
		 <!-- 评论主体内容 -->
		 <div class="pt_fontSizeTwo ct_Concoment" >
		 	  <div>
		 	  	   <span class="ct_Cicle"></span><span class="pt_fontSizeTwo ct_Pinternet">平潭网</span>
		 	  </div>
		 	  <div class="ct_Content pt_fontSizeThree">隧道出口线路安然无恙，巡检职工脸上充满了</div>
              <div>
              	   <span class="ct_Comtime pt_fontSizeOne">6-24  14：23</span>
              	   <i class="ct_Zan"></i>
              	   <span class="ct_Zanmount pt_fontSizeOne">0</span>
              	   <i class="ct_Commnet"></i>
              	   <span class="ct_Zanmount pt_fontSizeOne">0</span>
              </div>
		 </div>
		 <div class="pt_fontSizeTwo ct_Concoment" >
		 	  <div>
		 	  	   <span class="ct_Cicle"></span><span class="pt_fontSizeTwo ct_Pinternet">平潭网</span>
		 	  </div>
		 	  <div class="ct_Content pt_fontSizeThree">隧道出口线路安然无恙，巡检职工脸上充满了</div>
              <div>
              	   <span class="ct_Comtime pt_fontSizeOne">6-24  14：23</span>
              	   <i class="ct_Zan"></i>
              	   <span class="ct_Zanmount pt_fontSizeOne">0</span>
              	   <i class="ct_Commnet"></i>
              	   <span class="ct_Zanmount pt_fontSizeOne">0</span>
              </div>
		 </div>
		 <div class="pt_fontSizeTwo ct_Concoment" >
		 	  <div>
		 	  	   <span class="ct_Cicle"></span><span class="pt_fontSizeTwo ct_Pinternet">平潭网</span>
		 	  </div>
		 	  <div class="ct_Content pt_fontSizeThree">隧道出口线路安然无恙，巡检职工脸上充满了</div>
              <div>
              	   <span class="ct_Comtime pt_fontSizeOne">6-24  14：23</span>
              	   <i class="ct_Zan"></i>
              	   <span class="ct_Zanmount pt_fontSizeOne">0</span>
              	   <i class="ct_Commnet"></i>
              	   <span class="ct_Zanmount pt_fontSizeOne">0</span>
              </div>
		 </div>
		 <div class="pt_fontSizeTwo ct_Concoment" >
		 	  <div>
		 	  	   <span class="ct_Cicle"></span><span class="pt_fontSizeTwo ct_Pinternet">平潭网</span>
		 	  </div>
		 	  <div class="ct_Content pt_fontSizeThree">隧道出口线路安然无恙，巡检职工脸上充满了</div>
              <div>
              	   <span class="ct_Comtime pt_fontSizeOne">6-24  14：23</span>
              	   <i class="ct_Zan"></i>
              	   <span class="ct_Zanmount pt_fontSizeOne">0</span>
              	   <i class="ct_Commnet"></i>
              	   <span class="ct_Zanmount pt_fontSizeOne">0</span>
              </div>
		 </div>
		   <!-- 尾部写评论 -->
		 <div class="ct_Writecommon pt_fontSizeOne">
		 	  <input type="text" name="" placeholder="写评论..." class="ct_Writecn">
		 	  <i class="ct_Writeview"></i>
		 	  <i class="ct_Share"></i>
		 </div>
	</div>
</template>
<style scoped>
/*评论头部*/
	.rh_Backchediv{
	    height: 0.64rem;	 
	    box-shadow: 0rem 0.01rem 0.07rem lightgray;
	}
	.rh_Backchevron{
		width: 0.21rem;
		height: 0.21rem;
		float: left;
		margin-left: 0.1rem;
		margin-top: 0.30rem;
	}
	.rh_More{
		 width: 0.23rem;
		 height: 0.05rem;
		 float: right;
		 margin-top: 0.38rem;
		 margin-right: 0.1rem;
	}
	.ct_Comment{
		float: left;
		margin-top: 0.28rem;
		color: #000000;
        letter-spacing: -0.41px;
        margin-left: 1.4rem;
	}
/*评论主体内容 */
  .ct_Concoment{
       width: 3.35rem;
       margin: 0.2rem auto;
       border-bottom:0.01rem solid #F9F9F9;
       padding-bottom: 0.2rem;
	}
	.ct_Cicle{
		border: 1px solid #DFDFDF;
		display: inline-block;
		width: 0.36rem;
		height: 0.36rem;
		border-radius: 50%;
		margin-right: 0.13rem;
	}
	.ct_Pinternet{
		color: #828282;
        letter-spacing: 0;
        font-weight: bold;
		height: 0.14rem;
		line-height: 0.14rem;
        vertical-align:top;
        position: relative;
        top: 0.11rem;
        display: inline-block;
	}
    .ct_Content{
    	color: #000000;
        letter-spacing: 0;
        line-height: 0.19rem;
        width: 3.35rem;
        margin-top: 0.1rem;
    }
	.ct_Comtime{
		 color: #9B9B9B;
         letter-spacing: 0;
         height: 0.12rem;
         display: inline-block;
         line-height: 0.12rem;
         margin-top: 0.15rem;
	}
	.ct_Zan{
		display: inline-block;
		width: 0.14rem;
		height: 0.14rem;
		background: url('../../assets/image/thumbsup.png') no-repeat;
		background-size: cover;
		margin-left: 1.58rem;
		position: relative;
		top: 0.02rem;
	}
	.ct_Commnet{
		display: inline-block;
		width: 0.16rem;
		height: 0.14rem;
		background: url('../../assets/image/comments.png') no-repeat;
		background-size: cover;
		position: relative;
		top: 0.02rem;
		margin-left: 0.2rem;
	}
	.ct_Zanmount{
		color: #9B9B9B;
        letter-spacing: 0;
	}
	/*尾部写评论部分*/
	.ct_Writecommon{
		position: absolute;
		bottom: 0.1rem;
		left: 0.2rem;
		width: 100%;
	}
	.ct_Writecn{
		display: inline-block;
		background: #F2F2F2;
        border-radius: 4px;
        width: 2.8rem;
        height: 0.36rem;
        line-height: 0.36rem;
        padding-left: 0.45rem;
        box-sizing: border-box;
        outline: none;
        border: none;
        position: relative;
	}
	.ct_Writeview{
		position: absolute;
		display: inline-block;
		width: 0.2rem;
		height: 0.2rem;
		background: url('../../assets/image/writereview.png') no-repeat;
        background-size: cover;
        top: 0.08rem;
        left: 0.15rem;
	}
    .ct_Share{
    	position: absolute;
		display: inline-block;
		width: 0.26rem;
		height: 0.26rem;
		background: url('../../assets/image/share.png') no-repeat;
		background-size: cover;
		top: 0.04rem;
		right: 0.4rem;
    }


	 ::-webkit-input-placeholder { /* WebKit browsers */
    color: #000000;
     }
   :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #000000;
    }
   ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #000000;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
	color: #000000;
   }
</style>