// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import store from './vuex/store'
// import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/common.css'

  // 分享全局注册
import  share from'./assets/js/share.js'
Vue.prototype.$share = share

// cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

// 图片懒加载
import VueLazyload from 'vue-lazyload'
// Vue.use(VueLazyload)

// 或者这样配置
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://pingtan-1254965293.cosgz.myqcloud.com/public/ptnet.png',
  loading: 'http://pingtan-1254965293.cosgz.myqcloud.com/public/ptnet.png',
  attempt: 3
})

// 轮播
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

  // 栏目左右侧滑
import { TabContainer, TabContainerItem,Cell } from 'mint-ui';
Vue.component(TabContainer.name, TabContainer);
Vue.component(Cell.name, Cell);
Vue.component(TabContainerItem.name, TabContainerItem);


// 上拉刷新
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

Vue.prototype.$ajax = axios
// axios.defaults.withCredentials=true

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
