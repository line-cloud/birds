<template>
	<div id="panoSecond">
		<homeheader></homeheader>
		<div class="page-loadmore-wrapper pt_fontSizeTwo" ref="wrapper" :style="{ height: wrapperHeight + 'px' }"> 
      <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" @bottom-status-change="handleBottomChange" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">
      <div>
			 <img src="../../assets/image/attraicon.jpg" class="ps_Attraicon">
		</div>
		<!-- 全景组件 -->
        <div class="ps_Panodiv">
             <div class="ps_Panocontain" v-for="item in panodata">
             <div class="ps_Specimgdiv">
			 	  <img src="../../assets/image/specimg.jpg" class="ps_Specimg">
			 	  <span class="ps_Evelook">
			 	  	    <i class="ps_Eyeicon"></i>
			 	  	    <span class="ps_Evemount">16.7w</span>
			 	  </span>
			 </div>
			 <div class="ps_Panotitle">
			 	  <p class="ps_Panotext">英国王室出访波兰 小王子娇羞样惹人爱波兰 小王子娇羞样</p>
			 	  <div class="ps_Boardinfo">
			 	  	  <span class="ps_Boardorgin">新闻板块-变奏曲</span>
			 	  	  <span class="ps_Datetime">2017-12-21</span>
			 	  	  <div style="clear:both"></div>
			 	  </div>
			 </div>
             </div>
			 <div style="clear:both"></div>
		</div>
		<!-- <ul class="page-loadmore-list pt_fontSizeTwo">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul> -->
       <div slot="top" class="mint-loadmore-top pt_fontSizeTwo">
        <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">刷新中
          </span>
        </div>    
        <div slot="bottom" class="mint-loadmore-bottom pt_fontSizeTwo">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">加载中
          </span>
        </div>
      </mt-loadmore>
    </div>
    
	</div>
</template>
<script type="text/javascript">
 import homeheader from '../common/homeheader'
	export default{
       components:{
       	   'homeheader':homeheader
       },
       data(){
       	  return{
       	  	list:[1,2,4,5,6,7,8,9,1,11,2,4,5,6,7,8,9,1,1],
       	  	panodata:[
                  {

                  },
                  {

                  },
            
       	  	 ],
            allLoaded: false,
            bottomStatus: '',
            wrapperHeight: 0,
            topStatus: '',
            translate: 0,
            moveTranslate: 0,
            arr:{},
       	  }
       },
        methods: {
		      handleBottomChange(status) {
		        this.bottomStatus = status;
      },
      loadBottom() {
        setTimeout(() => {
          // let lastValue = this.list[this.list.length - 1];
          // if (lastValue < 40) {
          //   for (let i = 1; i <= 10; i++) {
          //     this.list.push(lastValue + i);
          //   }
          // } else {
          //   this.allLoaded = true;数据加载完毕，不在加载
          // }
          for(var i=0;i<4;i++){
          	  this.panodata.push(this.arr)
          }
          this.$refs.loadmore.onBottomLoaded();
        }, 1500);
      },     
      handleTopChange(status) {
        this.moveTranslate = 1;
        this.topStatus = status;
      },
      handleBottomChange(status){
         this.moveTranslate = 1; 
         this.bottomStatus = status;
      },
      translateChange(translate) {
        const translateNum = +translate;
        this.translate = translateNum.toFixed(2);
        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
      },
      loadTop() {
        setTimeout(() => {
        // this.$router.go(0)
          this.$refs.loadmore.onTopLoaded();
        }, 1500);
      },
},
    mounted() {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        // alert(this.wrapperHeight)
        }
	}
</script>
<style scoped>
   .ps_Attraicon{
       width: 100%;
       height: 1.85rem;
       vertical-align: middle; 
	}
	.ps_Panocontain{
		display: inline-block;
		margin:0.1rem 0 0 0.1rem;
	}
	.ps_Specimg{
       width: 1.73rem;
       height: 1.6rem;
       vertical-align: middle; 
	}
	.ps_Specimgdiv{
		position: relative;  
	}
	.ps_Evelook{
		position: absolute;
		width: 0.48rem;
		height: 0.16rem;
		line-height: 0.16rem;
        background: rgba(0,0,0,0.4);
        border-radius: 100px;
        top: 0.1rem;
        left: 0.1rem;
        font-size: 9px;
        color: #FFFFFF;
        letter-spacing: -0.09px;
	}
	.ps_Evemount{
		 height: 0.16rem;
		line-height: 0.16rem;
		display: inline-block;
	}
	.ps_Eyeicon{
		display: inline-block;
		width: 0.1rem;
		height: 0.07rem;
		background: url('../../assets/image/eyesmount.png') no-repeat;
		background-size: cover;
		margin-left: 0.06rem;
	}
	.ps_Panotitle{
		width: 1.73rem;
	}
	.ps_Panotext{
		color: #000000;
        letter-spacing: 0;
        line-height: 14px;
        width: 1.63rem;
        margin: 0 auto;
        font-size: 0.1rem;
	}
	.ps_Boardinfo{
		width: 1.63rem;
		height: 0.08rem;
		line-height: 0.08rem;
		margin: 0.1rem auto 0.05rem auto;
		font-size: 8px;
	}
	.ps_Boardorgin{
		color: #828282;
		letter-spacing: 0.07px;
		float: left;
	}
	.ps_Datetime{
		color: #828282;
		letter-spacing: 0.07px;
		float: right;
	}




	.loading-background, .mint-loadmore-top span {
    -webkit-transition: .2s linear;
    transition: .2s linear
}
.mint-loadmore-top span {
    display: inline-block;
    vertical-align: middle
}

.mint-loadmore-top span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}

.page-loadmore .mint-spinner {
    display: inline-block;
    vertical-align: middle
}

.page-loadmore-desc {
    text-align: center;
    color: #666;
    padding-bottom: 5px
}

.page-loadmore-desc:last-of-type,
.page-loadmore-listitem {
    border-bottom: 1px solid #eee
}

.page-loadmore-listitem {
    height: 50px;
    line-height: 50px;
    text-align: center
}

.page-loadmore-listitem:first-child {
    border-top: 1px solid #eee
}

.page-loadmore-wrapper {
    overflow: scroll
}

.mint-loadmore-bottom span {
    display: inline-block;
    -webkit-transition: .2s linear;
    transition: .2s linear;
    vertical-align: middle
}

.mint-loadmore-bottom span.is-rotate {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg)
}
</style>