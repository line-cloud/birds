import axios from 'axios'
import qs from 'qs'
import md5 from 'js-md5'
import store from '../store'

axios.interceptors.request.use(config =>{
    if (config.params) {
        // .noloading
        //不显示loading插件
        if (config.params.noloading) {
        } else {
            store.dispatch('showloader');
        }
    } else {
        // console.log(1);
        store.dispatch('showloader');
    }
    return config
}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
    if (store.getters['showLoading'] == true) {
        store.dispatch('hideloader');
    }
    if (response.status === 200 || response.status === 304) {
        return response;
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: response.statusText,
        }
    }
}

function checkCode(res) {
    //不是正确的code,可能是token过期之类或参数不正确
    if (res.data.code == '1002') {
        // token过期
        if (localStorage.token) {
            var r=confirm("登录已超时，请重新登录");
            if (r==true){
                localStorage.removeItem('token');
                window.location.href = ""
            }
        }
    }
    return res
}

function getTheAuthsig(params) {
    var decodeURIStr = '';
    if (params.codeType == '0') {
        decodeURIStr = unescape(qs.stringify(params));
    } else {
        decodeURIStr = decodeURI(qs.stringify(params));
    }
    var paramsMd5 = md5(decodeURIStr);
    var timaps = Date.parse(new Date());
    timaps = Math.floor(timaps/100);
    var sig = paramsMd5+timaps+'ptnet';
    sig = md5(sig);
    return sig;
}

export default {
    post(url, data) {
        return axios({
            method: 'post',
            url,
            data: data,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authsig': getTheAuthsig(''),
                'Currstamp': Date.parse(new Date()),
                'Lan':'zh-cn'
            }
        }).then(checkStatus).then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: 30000,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Authsig': getTheAuthsig(params),
                'Currstamp': Date.parse(new Date()),
                'Lan':'zh-cn'
            }
        }).then(checkStatus).then(checkCode)
    }
}