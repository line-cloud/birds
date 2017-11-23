<template>
          <!-- 搜索头部组件 -->
	<div id="searchheader" class="pt_fontSizeTwo">
		<div class="sh_Searchpar">
			 <input type="text" name="" placeholder="请搜索你要的新闻" class="sh_Searchtext">
			 <i class="sh_Searchicon"></i>
			 <i class="sh_Searchdown" @click="searchdown"></i>
		</div>
		<div class="pt_fontSizeTwo sh_Cancel">取消</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		methods:{
			searchdown:function () {
				this.$router.push('/home')
			}
		}
	}
</script>
<style scoped>
	#searchheader{
		width: 100%;
		height: 0.64rem;
		background: rgba(255,255,255,0.90);
        box-shadow: 0 0 0 0 #B2B2B2;
        border-bottom: 0.01rem solid #B2B2B2;
        position: relative;
	}
	.sh_Searchtext{
		display: inline-block;
		width: 100%;
		height: 100%;
		line-height: 0.26rem;
	    background: rgba(3,3,3,0.09);
	     border-radius: 5px;
	     padding-left: 0.31rem;
	     box-sizing: border-box;
	     outline: none;
	     border: none;
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
		margin-top: 0.3rem;
		margin-left: 0.2rem;
		display: inline-block;
	}
	.sh_Searchdown{
        width: 0.14rem;
        height: 0.14rem;
        display: inline-block;
        background: url('../../assets/image/shutdown.png') no-repeat;
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
    }
    /*修改input中placeholder的默认样式*/
	 .sh_Searchtext::-webkit-input-placeholder { /* WebKit browsers */
	    font-size: 14px;color: #7A797B;letter-spacing: -0.15px;
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
</style>