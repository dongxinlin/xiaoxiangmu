import Vue from 'vue'
import axios from 'axios'
import config from './config'

// 将axios挂载到Vue中
Vue.prototype.$axios=axios
// axios.defaults.baseURL = config.baseURL;
for(const key in config ){
    axios.defaults[key]=config[key]
}
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  // console.log(error)
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  response=response.data
  return response;
}, function (error) {
  // 对响应错误做点什么
  Vue.prototype.$message({
    showClose: true,
    message:error.response.data.errMsg,
    type: 'error'
    });
  return Promise.reject(error);
});