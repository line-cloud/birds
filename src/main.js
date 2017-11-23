// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
import './assets/css/common.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
// 上拉刷新
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);

// 下拉加载更多

// import { InfiniteScroll } from 'mint-ui';
// Vue.use(InfiniteScroll);
// import { Swipe, SwipeItem } from 'mint-ui'
// Vue.use(Mint);
 // Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
