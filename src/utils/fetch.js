import axios from 'axios';
import {JS__tokenError} from './../assets/methods/index'
// import config from './config';
// const {
//     BASE_DEV,
//     BASE_PRO
// } = config;
// let baseURL = process.env.NODE_ENV === 'development' ? BASE_DEV : BASE_PRO;
// console.log(process.env.NODE_ENV);
function getQueryVariable(variable) {
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++) {
    var pair = vars[i].split("=");
    if(pair[0] == variable){return pair[1];}
}
return(false);
}
let pos = getQueryVariable('pos');
const baseURL_test = 'http://47.93.241.33:9103/api/v1/notice/';
const baseURL_cn = 'https://api.ono.chat/api/v1/notice/';
const baseURL_en = 'https://api.joinono.com/api/v1/notice/';
const baseURL = /^http:/.test(window.location.href) ? baseURL_test : (pos ? (pos === 'cn' ? baseURL_cn : baseURL_en) : (baseURL_cn));

const fetch = axios.create({
    baseURL,
    timeout: 5 * 1000,
});
// 请求拦截
fetch.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error);
});

// 访问拦截
fetch.interceptors.response.use(response => {
    if(response.data.status.code === 403) {
        JS__tokenError();
    } else {
        return response;
    }
}, error => {
    return Promise.reject(error);
});

export default fetch;