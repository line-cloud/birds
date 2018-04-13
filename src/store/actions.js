import * as types from './types.js'  
  
export default{  
    showloader:({ commit }) => {  
        commit( types.SHOWLOADING )  
    },  
    hideloader:({ commit }) => {  
        commit( types.HIDELOADING )  
    },  
} 