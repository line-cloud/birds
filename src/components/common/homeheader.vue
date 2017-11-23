<template>
         <!-- 首页头部 -->
	 <div id="homeheader">
	 	 <div class="sh_Header pt_fontSizeTwo">
      	   <img src="../../assets/image/whiteLogo.png" class="sh_Headerlogo"><span class="sh_Searchp">
      	     <i class="sh_Hicon"></i>
             <input type="text" name="" placeholder="搜索你想要的" class="sh_Search pt_fontSizeOne" @click="searchresult">
           </span>
      </div>
               <!-- 头部中的导航 -->
      <div class="sh_Navheader pt_fontSizeTwo">
      	   <ul>
      	   	   <li class="sh_Navli" @click="moun(0)">
               <router-link to="/home">首页</router-link>
                <i class="he_Icon" v-if="mount==0" ></i></li>
      	   	   <li class="sh_Navli" @click="moun(1)">
               <router-link to="/column/columntravel">全资讯</router-link><i class="he_Icon" v-if="mount==1"></i></li>
      	   	   <li class="sh_Navli" @click="moun(2)">
               <router-link to="/galleryvideo/gallery">新地标</router-link><i class="he_Icon" v-if="mount==2"></i></li>
      	   	   <li class="sh_Navli" @click="moun(3)">
               <router-link to="/galleryvideo/videodetail">读政策</router-link><i class="he_Icon" v-if="mount==3"></i></li>
      	   	   <li class="sh_Navli">
               <router-link to="/column/columnUniversal">变奏曲</router-link></li>
      	   	   <li class="sh_Navli">变奏曲</li>
               <li class="sh_Navli">变奏曲</li>
               <li class="sh_Navli">变奏曲</li>
               <li class="sh_Navli">变奏曲</li>
               <li class="sh_Navli">变奏曲</li>
               <li class="sh_Navli">变奏曲</li>
               <li class="sh_Navli">变奏曲</li>
      	   </ul>
           <!-- <div class="sh_Rectangdiv">
                <img src="../../assets/image/rectangle.png" class="sh_Rectangle">
           </div> -->
           <div class="sh_Point" @click="showpopups">...</div>
      </div>
         <router-view></router-view>
	 </div>
</template>
<script type="text/javascript">
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
</script>
<script type="text/javascript">
     export default{
         name:'homeheader',
         data(){
           return{
              mount:0,
           }
         },
         methods:{
             showpopups:function(){
                  this.$router.push('/otherpages/popups')
             },
             searchresult:function(){
                   this.$router.push('/otherpages/searchresult')
             },
             moun:function(index){
                 this.mount=index
             }
         }
     }
</script>