<template>
    <!-- 查看图片 -->
	<div class="lookpicture">
	     <div>
		      <returnh></returnh>
	     </div>
	     <div>
           <!-- 图片文章区域 -->
	     	  <div class="lp_Attraicondiv">
		 	       <img src="../../assets/image/attraicon.jpg" class="lp_Attraicon">
		       </div>
		       <p class="lp_Picdesprite pt_fontSizeTwo">1/8  6月27日，受持续强降雨影响，田坝岭隧道出口栅栏外发生山体溜坍，约9000立方米坍体形成3股泥石流冲向线路。跟着巡检人员的脚步，记者一行冒着蒙蒙细雨，深一脚浅一脚地爬上山。远处，两道由泥石流冲刷而成的深壑最深处近3米，里面是大小不一的石头，最大的两个人手拉手也抱不过来。</p>
	     </div>
         <!-- 评论区 -->
	     <div class="lp_Commentarea pt_fontSizeTwo">
	     	  <input type="text" name="" placeholder="写评论..." class="lp_Writefont" @click="comment"><i class="lp_Writeview"></i><i class="lp_Comment"></i><i class="lp_Share"></i>
	     </div>
	</div>
</template>
<script type="text/javascript">
import  returnh from '../common/returnheader'
	export default{
		name:'returnheader',
		components:{
			'returnh':returnh,
		},
        methods:{
            comment:function(){
                this.$router.push('/otherpages/comment')
            }
        }
	}
</script>
<style scoped>
	.lookpicture{
		background: #000000;
		height: 6.67rem;
	}
	.lp_Attraicondiv{
		 width: 100%;
		 height: 2.4rem;
		 margin-top: 1.50rem;
	}
	.lp_Attraicon{
		 width: 100%;
		 height: 100%;
		 vertical-align: middle;
	}
    .lp_Picdesprite{
    	color: #FFFFFF;
        letter-spacing: 0;
        line-height: 0.2rem;
        width: 3.35rem;
        height: 1.2rem;
        overflow: hidden;
        margin-top: 0.4rem;
        margin-left: auto;
        margin-right: auto;
    }
    .lp_Commentarea{
    	margin-top: 0.15rem;
        position: relative;
    }
    .lp_Writefont{
    	background: #2C2C2C;
        border-radius: 1rem;
        outline: none;
        padding-left: 0.36rem;
        display: inline-block;
        width: 2.35rem;
        height: 0.28rem;
        line-height: 0.28rem;
        box-sizing: border-box;
        border: none;
        margin-left: 0.2rem;
        position: relative;
    }
    .lp_Writeview{
        display: inline-block;
        width: 0.15rem;
        height: 0.15rem;
        background: url('../../assets/image/writereview.png') no-repeat;
        background-size: cover;
        position: absolute;
        left: 0.3rem;
        top: 0.06rem;
    }
    .lp_Comment{
    	display: inline-block;
    	width: 0.22rem;
    	height: 0.18rem;
    	background: url('../../assets/image/comments.png') no-repeat;
    	background-size: cover;
    	position: relative;
    	top:0.04rem; 
    	margin-left: 0.28rem;
    }
    .lp_Share{
    	display: inline-block;
    	width: 0.22rem;
    	height: 0.18rem;
    	background: url('../../assets/image/share.png') no-repeat;
    	background-size: cover;
    	position: relative;
    	top:0.04rem; 
    	margin-left: 0.28rem;
    	background: #ffffff;
    }
    ::-webkit-input-placeholder { /* WebKit browsers */
    color: #FFFFFF;
     }
   :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color: #FFFFFF;
    }
   ::-moz-placeholder { /* Mozilla Firefox 19+ */
    color: #FFFFFF;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
	color: #FFFFFF;
   }
</style>