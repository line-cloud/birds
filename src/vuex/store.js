import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const stores = new Vuex.Store({
  // 定义状态
  state: {
    author: 'Wise Wrong'
  },
  actions:{
     savefrom(context){
        axios({
        url:'http://localhost:8080/api/home/Api/webInfo?paramJson=%7B%22elementid%22:%22ns_tbn_ns%22%7D',
        method:"post",
        data:{
        	page:1,
        	length:5
        }
        }).then(function(success){
              console.log(this.state.author)
        }.bind(this))
     }
  },
  mutations:{
  	newauthor(state,msg){
       state.author=msg
  	}
  }
})

export default stores