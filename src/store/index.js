import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions.js' 
import mutations from './mutations.js'

// 告诉vue将要使用vuex
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// env里去获取当前的环境是否需要开启严格模式
// 在发布环境开启严格模式会造成性能上不必要的损失

export default new Vuex.Store({
	modules:{
		mutations
	},
	actions,
	strict:debug
	// 是否开启严格模式
})
