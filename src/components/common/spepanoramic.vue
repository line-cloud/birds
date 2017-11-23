<template>
    <!-- 专题全景加标题 -->
	<div class="sf_Ptext">
          <img src="../../assets/image/specialbg.jpg" class="sf_specialbg" @click="panofirst">
          <p class="sf_Title pt_fontSizeThree">夏季最热闹的十大景点</p>
    </div>
</template>
<script type="text/javascript">
    export default{
       name:'panoramic',
       methods:{
         panofirst:function(){
             this.$router.replace('/panoramic/panoFirst')  
         }
       }
    }
</script>
<style scoped>
	.sf_Ptext{
        position: relative;
        width: 3.75rem;
        height: 1.85rem;
    }
     .sf_specialbg{
        width: 100%;
        height: 100%;
    }
     .sf_Title{
        color: #FFFFFF;
        letter-spacing: 0;
        position: absolute;
        bottom: 0.1rem;
        left: 0.2rem;
    }
</style>