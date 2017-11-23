import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'

import specialoverview from '@/components/special/specialoverview'
import specialFirst from '@/components/special/specialFirst'

import columntravel from '@/components/column/columntravel'
import columnUniversal from '@/components/column/columnUniversal'

import homeheader from '@/components/common/homeheader'

import popups from '@/components/otherpages/popups'
import comment from '@/components/otherpages/comment'
import searchresult from '@/components/otherpages/searchresult'
import trafficdetail from '@/components/otherpages/trafficdetail'

import gallery from '@/components/galleryvideo/gallery'
import lookpicture from '@/components/galleryvideo/lookpicture'
import videodetail from '@/components/galleryvideo/videodetail'

import panoFirst from '@/components/panoramic/panoFirst'
import panoSecond from '@/components/panoramic/panoSecond'
Vue.use(Router)

export default new Router({
  routes: [
     // 首页
    {
      path: '/',
      name: 'homeheader',
      redirect:'/home',
      component: homeheader,
      children:[
          {
          path: '/home',
          name: 'home',
          component: home,
          },
          {
          path: '/column/columntravel',
          name: 'home',
          component: columntravel,
          },
          {
          path: '/galleryvideo/gallery',
          name: 'home',
          component: gallery,
          },
          {
          path: '/galleryvideo/videodetail',
          name: 'home',
          component: columntravel,
          },
      ]
    },
    // 专题总览
    {
      path: '/special/specialoverview',
      name: 'specialoverview',
      component: specialoverview,
    },
    // 旅游专题页
    {
      path: '/special/specialFirst',
      name: 'specialFirst',
      component: specialFirst,
    },
    // 旅游栏目
     {
      path: '/column/columntravel',
      name: 'columntravel',
      component: columntravel,
    },
    // 通用栏目页
    {
      path: '/column/columnUniversal',
      name: 'columnUniversal',
      component: columnUniversal,
    },
    // 浮层
    {
      path: '/otherpages/popups',
      name: 'popups',
      component: popups,
    },
    // 搜索结果
    {
      path: '/otherpages/searchresult',
      name: 'searchresult',
      component: searchresult,
    },
    // 交通详情
    {
      path: '/otherpages/trafficdetail',
      name: 'trafficdetail',
      component: trafficdetail,
    },
    // 图库
    {
      path: '/galleryvideo/gallery',
      name: 'gallery',
      component: gallery,
    },
    // 查看图片
    {
      path: '/galleryvideo/lookpicture',
      name: 'lookpicture',
      component: lookpicture,
    },
    // 评论页
    {
      path: '/otherpages/comment',
      name: 'comment',
      component:comment,
    },
    // 视频详情页
    {
      path: '/galleryvideo/videodetail',
      name: 'videodetail',
      component: videodetail,
    },
    //全景
    {
      path: '/panoramic/panoFirst',
      name: 'panoFirst',
      component:panoFirst,
    },
    {
      path: '/panoramic/panoSecond',
      name: 'panoSecond',
      component:panoSecond,
    },
  ]
})
