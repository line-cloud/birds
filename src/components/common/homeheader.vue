<template>
           <!-- 页面公共头部 -->
<div class="ssh_homeheader">
         <!-- 首页头部 -->
   <div class="homeheadercon">
	 <div id="homeheader">
	 	 <div class="sh_Header pt_fontSizeTwo">
      	   <img src="../../assets/image/pinlogo.png" class="sh_Headerlogo" @click="headerlogo"><span class="hd_Jumppc pt_fontSizeOnes" @click="jumppc">电脑版</span><span class="sh_Searchp">
      	    <img class="sh_Hicon" src="../../assets/image/search.png">
            <span class="sh_Search pt_fontSizeOne"  @click="searchresult">搜索</span>
            <span class="sh_Tablanguage pt_fontSizeOne"  @click="simple(1)" :class="active==1?'activeclass':''">简</span><span class="sh_Tablanguage pt_fontSizeOne"  @click="comflex(2)" :class="active==2?'activeclass':''">繁</span><span class="sh_Tablanguage pt_fontSizeOne" @click="jumpen">EN</span>
           </span>
      </div>
               <!-- 头部中的导航 -->
      <div class="sh_Navheader pt_fontSizeTwo" id="Navheader">
           <ul>
      	   	   <li class="sh_Navli" @click="moun(0)">
               <router-link to="/importnews">要闻</router-link>
               <i class="he_Icon" v-if="mount==0"></i></li>

               <li class="sh_Navli" @click="moun(1)">
               <router-link to="/newschannel/pingtannews">平潭新闻</router-link><i class="he_Icon" v-if="mount==1" ></i></li>

               <li class="sh_Navli" @click="moun(2)">
               <router-link to="/newschannel/mainland">大陆新闻</router-link><i class="he_Icon" v-if="mount==2" ></i></li>

               <li class="sh_Navli" @click="moun(3)">
               <router-link to="/newschannel/commonhome">共同家园</router-link><i class="he_Icon" v-if="mount==3" ></i></li>

               <li class="sh_Navli" @click="moun(4)">
               <router-link to="/newschannel/globals">环球新闻</router-link><i class="he_Icon" v-if="mount==4" ></i></li>

               <li class="sh_Navli" @click="moun(5)">
               <router-link to="/newschannel/lanhaicomment">岚海网评</router-link><i class="he_Icon" v-if="mount==5" ></i></li>

               <li class="sh_Navli" @click="moun(6)">
               <router-link to="/newschannel/entertainment">体娱新闻</router-link><i class="he_Icon" v-if="mount==6" ></i></li>

      	   	   <li class="sh_Navli"  @click="moun(7)">
               <router-link to="/newschannel/newlandmark">新地标</router-link><i class="he_Icon" v-if="mount==7" ></i></li>
 
      	   	   <li class="sh_Navli" @click="moun(8)">
               <router-link to="/newschannel/readingpolicy">读政策</router-link><i class="he_Icon" v-if="mount==8"></i></li>

      	   	   <li class="sh_Navli" @click="moun(9)">
               <router-link to="/newschannel/variations">变奏曲</router-link><i class="he_Icon" v-if="mount==9"></i></li>

               <li class="sh_Navli" @click="moun(10)">
               <router-link to="/newschannel/lookfuture">看未来</router-link><i class="he_Icon" v-if="mount==10"></i></li>

               <li class="sh_Navli" @click="moun(11)">
               <router-link to="/citychannel/overview">概览</router-link><i class="he_Icon" v-if="mount==11" ></i></li>

                <li class="sh_Navli" @click="moun(12)">
               <router-link to="/citychannel/traffic">交通</router-link><i class="he_Icon" v-if="mount==12" ></i></li>

                <li class="sh_Navli" @click="moun(13)">
               <router-link to="/citychannel/humanities">人文</router-link><i class="he_Icon" v-if="mount==13" ></i></li>

                <li class="sh_Navli" @click="moun(14)">
               <router-link to="/citychannel/activity">活动</router-link><i class="he_Icon" v-if="mount==14" ></i></li>

                <li class="sh_Navli" >
               <a href="http://mob.visualbusiness.cn/pingtan_app/app.html?appId=1275">城市名片</a><i class="he_Icon" v-if="mount==15" ></i></li>

                <li class="sh_Navli" @click="moun(16)">
               <router-link to="/tourchannel/gensituation">概况</router-link><i class="he_Icon" v-if="mount==16" ></i></li> 

                <li class="sh_Navli" @click="moun(17)">
               <router-link to="/tourchannel/beaufood">美食</router-link><i class="he_Icon" v-if="mount==17" ></i></li>

                <li class="sh_Navli" @click="moun(18)">
               <router-link to="/tourchannel/viewpoint">美景</router-link><i class="he_Icon" v-if="mount==18" ></i></li>

                <li class="sh_Navli" @click="moun(19)">
               <router-link to="/tourchannel/raiders">攻略</router-link><i class="he_Icon" v-if="mount==19" ></i></li>

                <li class="sh_Navli" @click="moun(20)">
               <router-link to="/hiplaychannel/sailboat">帆船</router-link><i class="he_Icon" v-if="mount==20" ></i></li>

                <li class="sh_Navli" @click="moun(21)">
               <router-link to="/hiplaychannel/softball">垒球</router-link><i class="he_Icon" v-if="mount==21" ></i></li>

                <li class="sh_Navli" @click="moun(22)">
               <router-link to="/hiplaychannel/swimming">游泳</router-link><i class="he_Icon" v-if="mount==22" ></i></li>

                <li class="sh_Navli" @click="moun(23)">
               <router-link to="/hiplaychannel/cycling">自行车</router-link><i class="he_Icon" v-if="mount==23" ></i></li>

                <li class="sh_Navli" @click="moun(24)">
               <router-link to="/hiplaychannel/marathon">马拉松</router-link><i class="he_Icon" v-if="mount==24" ></i></li>

                <li class="sh_Navli" @click="moun(25)">
               <router-link to="/hiplaychannel/kitesurfing">风筝冲浪</router-link><i class="he_Icon" v-if="mount==25" ></i></li>
               
                <li class="sh_Navli" @click="moun(26)">
               <router-link to="/area/panoramarea">全景</router-link><i class="he_Icon" v-if="mount==26" ></i></li>

                <li class="sh_Navli" @click="moun(27)">
               <router-link to="/area/landgallery">图库</router-link><i class="he_Icon" v-if="mount==27"></i></li>

               <li class="sh_Navli" @click="moun(28)">
               <router-link to="/area/videoarea">视频</router-link><i class="he_Icon" v-if="mount==28" ></i></li>
              
               <li class="sh_Navli" @click="moun(29)">
               <router-link to="/otherchannel/electricity">电力</router-link><i class="he_Icon" v-if="mount==29" ></i></li>

               <li class="sh_Navli" @click="moun(30)">
               <router-link to="/otherchannel/pingtanprices">平潭物价</router-link><i class="he_Icon" v-if="mount==30" ></i></li>
                
               <li class="sh_Navli" @click="moun(31)">
               <router-link to="/otherchannel/pingtantraffic">平潭交通</router-link><i class="he_Icon" v-if="mount==31" ></i></li>

               <li class="sh_Navli" @click="moun(32)">
               <router-link to="/otherchannel/special">专题</router-link><i class="he_Icon" v-if="mount==32" ></i></li>
               
               <li class="sh_Navli sh_Navlis"></li>
      	</ul>
           <div class="sh_Points"></div>
           <div class="sh_Point" @click="showpopups">
                <img src="../../assets/image/headpoint.png" class="sh_Headpoint">
           </div>
      </div>
   </div>
   </div>
      <router-view></router-view>
</div> 
</template>
<script type="text/javascript">
import {toChinese} from '../../assets/js/tablanguage'
import {toSimpleChinese} from '../../assets/js/tablanguage'
import api from '../../api/api.js'
     export default{
         name:'homeheader',
          data(){
            return{
                mount:0,
                scrolldata:'',
                diffval:0,
                language:1,
                active:this.$cookies.get('tabstyle')||1,
                actives:'',
               }
             },
          // 监测路由变化调用初始化default函数
        watch:{
                // "$route" (to,from){
                //       console.log(from)
                // }
                  "$route":"default",
               },
        updated:function(){
             // this.tablanguage()
        },
       methods:{
          // 设定头部高度
          setheadhight:function(){
             var homeheadercon=document.getElementsByClassName('homeheadercon')[0]
             homeheadercon.style.height=document.documentElement.clientWidth/375*90+'px'
              // document.documentElement.clientWidth
          },
          jumppc:function(){
              window.location.href="http://pingtan.visualbusiness.cn?from=m&lan="+this.$cookies.get('tabstyle')
          },
          jumpen:function(){                                  
              window.location.href="http://m.pingtan-en.visualbusiness.cn"
              // window.location.href="http://10.168.5.99:8081/#/home"
          },
             // 通过default函数获取this.scrolllen的值进行导航重定位
         scroll:function(event){
               var navheader=document.getElementById('Navheader')
               navheader.scrollLeft=this.scrolllen
        },
            // 跳转进入导航浮层并携带跳转前的url
         showpopups: function () {
              var datalth=window.location.href.split('/').length
              var fromurl=window.location.href.split('/')[datalth-1]
                this.$router.push({path:'/otherpages/popups',query:{url:fromurl
                }})
             },
             // 切换为简体
        simple:function(index){
               this.active=index
               toSimpleChinese()
                this.$cookies.set('tabstyle',1)
        },
            // 切换为繁体
        comflex:function(index){
            this.active=index
            toChinese() 
            this.$cookies.set('tabstyle',2)
        },
         tabdefault:function(){
             if(window.location.href.split('?')[1]=='lan=2'){
                     this.active=2
                     this.$cookies.set('tabstyle',2)
                }else if(window.location.href.split('?')[1]=='lan=1'){
                     this.active=1
                     this.$cookies.set('tabstyle',1)
              }else{
                   this.$cookies.set('tabstyle',this.active)
              }
         },
             // 跳转进入搜索页面
          searchresult: function () {
                  this.$router.push('/common/searchheader')
                  this.$cookies.set('searchvalue',1)
             },
              // 头部导航样式切换函数
          moun: function (index) {
                  this.mount=index
             },
             // 头部logo跳转要闻点击事件
             headerlogo:function(){
                var navheader=document.getElementById('Navheader')
                 navheader.scrollLeft=0
                 this.$router.push('/importnews')
                 // this.$ajax({
                 //   url:'http://localhost:8080/api/home/Api/webInfo?paramJson=%7B%22elementid%22:%22ns_tbn_ns%22%7D&page=1&length=5',
                 //   method:'post',
                 //   data:{

                 //   }
                 // }).then(function(success){
                 //        console.log(success)
                 // })
                 this.$store.dispatch('savefrom')
             },
             // 头部导航样式切换以及重新定位函数须和scroll函数配合
          default: function() {
              this.diffval=document.documentElement.clientWidth/375;
                var datalth=window.location.href.split('/').length
                var datval=window.location.href.split('/')[datalth-1]
                var navheader=document.getElementsByClassName('sh_Navheader')[0]
                 switch(datval){
                    case 'importnews':this.mount=0; break;
                    case 'pingtannews':this.mount=1; break;
                    case 'mainland':this.mount=2; break;
                    case 'commonhome':this.mount=3;this.scrolllen=45*this.diffval; break;
                    case 'globals':this.mount=4;this.scrolllen=110*this.diffval; break;
                    case 'lanhaicomment':this.mount=5;this.scrolllen=180*this.diffval; break;
                    case 'entertainment':this.mount=6;this.scrolllen=250*this.diffval; break;
                    case 'newlandmark':this.mount=7;this.scrolllen=310*this.diffval;break;
                    case 'readingpolicy':this.mount=8;this.scrolllen=365*this.diffval;break;
                    case 'variations':this.mount=9;this.scrolllen=420*this.diffval;break;
                    case 'lookfuture':this.mount=10;this.scrolllen=475*this.diffval; break;
                    case 'overview':this.mount=11; this.scrolllen=520*this.diffval;break;
                    case 'traffic':this.mount=12;this.scrolllen=575*this.diffval; break;
                    case 'humanities':this.mount=13;this.scrolllen=630*this.diffval; break;
                    case 'activity':this.mount=14;this.scrolllen=685*this.diffval; break;
                    case 'citycard':this.mount=15;this.scrolllen=740*this.diffval; break;
                    case 'gensituation':this.mount=16;this.scrolllen=810*this.diffval; break;
                    case 'beaufood':this.mount=17;this.scrolllen=860*this.diffval; break;
                    case 'viewpoint':this.mount=18;this.scrolllen=915*this.diffval; break;
                    case 'raiders':this.mount=19;this.scrolllen=970*this.diffval; break;
                    case 'sailboat':this.mount=20;this.scrolllen=1025*this.diffval; break;
                    case 'softball':this.mount=21;this.scrolllen=1080*this.diffval; break;
                    case 'swimming':this.mount=22;this.scrolllen=1130*this.diffval; break;
                    case 'cycling':this.mount=23;this.scrolllen=1195*this.diffval; break;
                    case 'marathon':this.mount=24;this.scrolllen=1255*this.diffval;break;
                    case 'kitesurfing':this.mount=25;this.scrolllen=1325*this.diffval;break;
                    case 'panoramarea':this.mount=26;this.scrolllen=1370*this.diffval; break;
                    case 'landgallery':this.mount=27;this.scrolllen=1425*this.diffval; break;
                    case 'videoarea':this.mount=28;this.scrolllen=1480*this.diffval; break;
                    case 'electricity':this.mount=29;this.scrolllen=1530*this.diffval; break;
                    case 'pingtanprices':this.mount=30;this.scrolllen=1610*this.diffval;break;
                    case 'pingtantraffic':this.mount=31;this.scrolllen=1680*this.diffval; break;
                    case 'special':this.mount=32;this.scrolllen=1720; break;
                 }
             }
         },
         mounted:function() {
             this.tabdefault()
             this.default()
             this.scroll()
             this.setheadhight()
         }
     }
</script>
