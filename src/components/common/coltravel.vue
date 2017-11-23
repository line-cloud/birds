<template>
        <!-- 旅游栏目页 -->
	<div class="columntravel">
		  <div class="ct_Cotravel">
		  	   <img src="../../assets/image/specialOne.png" class="ct_Speimgtext">
		  </div>
		  <div class="ct_Spetitlediv">
		      <P class="ct_Spetitle pt_fontSizeFive">北岗文创村</P>
		  	  <div class="ct_Comment pt_fontSizeOne">
			  	   <i class="ct_Eyemount"></i>
			  	   <span class="ct_Number">14400</span>
			  	   <i class="ct_Share"></i>
			  	   <span class="ct_Sharenumbers">13300</span>
		       </div>
		  </div>
		  
	</div>
</template>
<style scoped>
	.columntravel{
		width: 3.35rem;
		height: 1.37rem;
		position: relative;
		margin: 0.15rem auto;
	}
	.ct_Cotravel{
		width: 100%;
		height:100%;
	}
	.ct_Speimgtext{
		width: 100%;
		height:100%;
	}
	.ct_Spetitlediv{
		position: absolute;
		top: 0;
		width: 100%;
		height: 100%;
	}
	.ct_Spetitle{
         color: #FFFFFF;
         letter-spacing: 0.2px;
         width: 100%;
         height: 0.2rem;
         line-height: 0.2rem;
         text-align: center;
         margin-top: 0.5rem;
	}
	.ct_Comment{
		text-align: center;
		height: 0.14rem;
		line-height: 0.14rem;
		margin-top: 0.22rem;
	}
	.ct_Number{
        color: #FFFFFF;
        letter-spacing: 0.07px;
        margin-right: 0.1rem;
        display: inline-block;
	}
	.ct_Sharenumbers{
		 color: #FFFFFF;
        letter-spacing: 0.07px;
        display: inline-block;
	}
	.ct_Eyemount{
		display: inline-block;
		width: 0.14rem;
		height: 0.09rem;
		background: url('../../assets/image/eyesmount.png') no-repeat;
		background-size: cover;
	}
	.ct_Share{
        display: inline-block;
		width: 0.14rem;
		height: 0.09rem;
		background: url('../../assets/image/eyesmount.png') no-repeat;
		background-size: cover;
	}
</style>