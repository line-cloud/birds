import Vue from 'vue'
import Router from 'vue-router'

import importnews from '@/components/newschannel/importnews'
import entertainment from '@/components/newschannel/entertainment'
// import lanhaicomment from '@/components/vue/delete.vue'
import globals from '@/components/newschannel/global'
import lanhaicomment from '@/components/newschannel/lanhaicomment'
import mainland from '@/components/newschannel/mainland'
import pingtannews from '@/components/newschannel/pingtannews'
import commonhome from '@/components/newschannel/commonhome'
import lookfuture from '@/components/newschannel/lookfuture'
import newlandmark from '@/components/newschannel/newlandmark'
import readingpolicy from '@/components/newschannel/readingpolicy'
import variations from '@/components/newschannel/variations'

import activity from '@/components/citychannel/activity'
import citycard from '@/components/citychannel/citycard'
import humanities from '@/components/citychannel/humanities'
import overview from '@/components/citychannel/overview'
import traffic from '@/components/citychannel/traffic'

import beaufood from '@/components/tourchannel/beaufood'
import gensituation from '@/components/tourchannel/gensituation'
import raiders from '@/components/tourchannel/raiders'
import viewpoint from '@/components/tourchannel/viewpoint'

import cycling from '@/components/hiplaychannel/cycling'
import kitesurfing  from '@/components/hiplaychannel/kitesurfing'
import marathon from '@/components/hiplaychannel/marathon'
import sailboat from '@/components/hiplaychannel/sailboat'
import softball from '@/components/hiplaychannel/softball'
import swimming from '@/components/hiplaychannel/swimming'
import vrarea from '@/components/hiplaychannel/vrarea'

import panoramarea from '@/components/area/panoramarea'
import landgallery from '@/components/area/landgallery'
import videoarea from '@/components/area/videoarea'

import electricity from '@/components/otherchannel/electricity'
import pingtanprices from '@/components/otherchannel/pingtanprices'
import pingtantraffic from '@/components/otherchannel/pingtantraffic'
import special from '@/components/otherchannel/special'

import specialFirst from '@/components/detailspage/specialFirst'
import specialSecond from '@/components/detailspage/specialSecond'
import specialThird from '@/components/detailspage/specialThird'
import specialFour from '@/components/detailspage/specialFour'
import specialFive from '@/components/detailspage/specialFive'
import pricedetail from '@/components/detailspage/pricedetail'

import homeheader from '@/components/common/homeheader'
import searchheader from '@/components/common/searchheader'


import popups from '@/components/otherpages/popups'

Vue.use(Router)

export default new Router({
  routes: [
     // 要闻
    {
      path: '/',
      name: 'homeheader',
      redirect:'/importnews',
      component: homeheader,
      children:[
          {
             // 要闻
          path: '/importnews',
          name: 'importnews',
          component: importnews,
          },
          {
             // 体娱
          path: '/newschannel/entertainment',
          name: 'entertainment',
          component: entertainment,
          },
          {
             // 环球
          path: '/newschannel/globals',
          name: 'globals',
          component: globals,
          },
          {
             // 岚海网评
          path: '/newschannel/lanhaicomment',
          name: 'lanhaicomment',
          component: lanhaicomment,
          },
          {
             // 大陆
          path: '/newschannel/mainland',
          name: 'mainland',
          component: mainland,
          },
          {
             // 平潭新闻
          path: '/newschannel/pingtannews',
          name: 'pingtannews',
          component: pingtannews,
          },
          {
             // 共同家园
          path: '/newschannel/commonhome',
          name: 'commonhome',
          component: commonhome,
          },
          {
             // 看未来
          path: '/newschannel/lookfuture',
          name: 'lookfuture',
          component: lookfuture,
          },
          {
             // 新地标
          path: '/newschannel/newlandmark',
          name: 'newlandmark',
          component: newlandmark,
          },
          {
             // 读政策
          path: '/newschannel/readingpolicy',
          name: 'readingpolicy',
          component: readingpolicy,
          },
          {
             // 变奏曲
          path: '/newschannel/variations',
          name: 'variations',
          component: variations,
          },
          {
             // 概览
          path: '/citychannel/overview',
          name: 'overview',
          component: overview,
          },
          {
             // 交通
          path: '/citychannel/traffic',
          name: 'traffic',
          component: traffic,
          },
          {
             // 人文
          path: '/citychannel/humanities',
          name: 'humanities',
          component: humanities,
          },
          {
              // 活动
          path: '/citychannel/activity',
          name: 'activity',
          component: activity,
          },
          {
              // 城市名片
          path: '/citychannel/citycard',
          name: 'citycard',
          component: citycard,
          },
          {
               // 概况  
          path: '/tourchannel/gensituation',
          name: 'gensituation',
          component: gensituation,
          },
          {
              // 美食
          path: '/tourchannel/beaufood',
          name: 'beaufood',
          component: beaufood,
          },
          {
              // 景点
          path: '/tourchannel/viewpoint',
          name: 'viewpoint',
          component: viewpoint,
          },
          {
              // 攻略
          path: '/tourchannel/raiders',
          name: 'raiders',
          component: raiders,
          },
          {
              // 帆船
          path: '/hiplaychannel/sailboat',
          name: 'sailboat',
          component: sailboat,
          },
          {
              // 垒球
          path: '/hiplaychannel/softball',
          name: 'softball',
          component: softball,
          },
          {
              // 游泳
          path: '/hiplaychannel/swimming',
          name: 'swimming',
          component: swimming,
          },
          {
              // 自行车
          path: '/hiplaychannel/cycling',
          name: 'cycling',
          component: cycling,
          },
          {
              // vr专区
          path: '/hiplaychannel/vrarea',
          name: 'vrarea',
          component: vrarea,
          },
          {
              // 马拉松
          path: '/hiplaychannel/marathon',
          name: 'marathon',
          component: marathon,
          },
          {
              // 风筝冲浪
          path: '/hiplaychannel/kitesurfing',
          name: 'kitesurfing',
          component: kitesurfing,
          },
          {
              // 全景
          path: '/area/panoramarea',
          name: 'panoramarea',
          component: panoramarea,
          },
          {
              // 图库
          path: '/area/landgallery',
          name: 'landgallery',
          component: landgallery,
          },
          {
              // 视频
          path: '/area/videoarea',
          name: 'videoarea',
          component: videoarea,
          },
          {
             //电力
          path: '/otherchannel/electricity',
          name: 'electricity',
          component: electricity,
          },
          {
             //平潭物价
          path: '/otherchannel/pingtanprices',
          name: 'pingtanprices',
          component: pingtanprices,
          },
          {
             //平潭交通
          path: '/otherchannel/pingtantraffic',
          name: 'pingtantraffic',
          component: pingtantraffic,
          },
          {
             //专题
          path: '/otherchannel/special',
          name: 'special',
          component: special,
          },
      ]
    },
      //专题详情一
    {
      path: '/detailspage/specialFirst',
      name: 'specialFirst',
      component: specialFirst,
    },
     //专题详情二
     {
      path: '/detailspage/specialSecond',
      name: 'specialSecond',
      component: specialSecond,
    },
     //专题详情三
     {
      path: '/detailspage/specialThird',
      name: 'specialThird',
      component: specialThird,
    },
     //专题详情四
     {
      path: '/detailspage/specialFour',
      name: 'specialFour',
      component: specialFour,
    },
     //专题详情五
     {
      path: '/detailspage/specialFive',
      name: 'specialFive',
      component: specialFive,
    },
     {
       //物价详情
      path: '/detailspage/pricedetail',
      name: 'pricedetail',
      component: pricedetail,
    },
    {
        //搜索结果
      path: '/common/searchheader',
      name: 'searchheader',
      component: searchheader,
    },

    // 浮层 
    {
      path: '/otherpages/popups',
      name: 'popups',
      component: popups,
    },
  ]
})
