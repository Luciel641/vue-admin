'use strict'
import axios from 'axios'
import { Message } from 'element-ui'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5 * 1000 // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}
console.log('env:', process.env)
console.log('baseUrl:', config.baseURL)

const request = axios.create(config)

// 请求拦截器
request.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
// 响应拦截器
// Add a response interceptor
request.interceptors.response.use(
  function(response) {
    console.log('response:', response)
    // 获取后台返回的数据，如果需要获取http头部和状态信息，直接返回response
    const res = response.data
    // 当前项目定义code为0表示请求成功
    if (res.code !== 0) {
      Message({
        message: res.msg || 'Error',
        type: 'error'
      })
      return Promise.reject(new Error(res.msg || 'Error'))
    }
    return res
  },
  function(error) {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default request
