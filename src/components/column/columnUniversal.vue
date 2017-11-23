<template>
           <!-- 通用栏目页 -->
	<div id="specialFirst">
           <!--头部 -->
		 <!-- <homeheader></homeheader> -->
		 <div>
             <!-- 专题全景加标题 -->
             <panoramic></panoramic>       
         </div>
        <div>
              <!-- 专题左右图文 -->
             <horizontal></horizontal>
        </div>
         <div>
             <!-- 专题上下图文 -->
             <verticalGraphic></verticalGraphic>
         </div>
         <div class="sf_Speciovideo">
              <!-- 专题视频 -->
              <specialvideo></specialvideo>
         </div>
	</div>
</template>
<script type="text/javascript">
import  homeheader from '../common/homeheader'
import horizontal from '../common/spehorizontalGraphic'
import panoramic from '../common/spepanoramic'
import verticalGraphic from '../common/speverticalGraphic'
import specialvideo from '../common/specialvideo'
	export default{
        name:'specialFirst',
        components:{
            'homeheader':homeheader,
            'horizontal':horizontal,
            'panoramic':panoramic,
            'verticalGraphic':verticalGraphic,
        	'specialvideo':specialvideo,
        }
	}
</script>
<style scoped>
	.sf_Speciovideo{
        margin-top: 0.15rem;
    }
    
</style>