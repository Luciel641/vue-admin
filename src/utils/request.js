'use strict'
import axios from 'axios'
import store from '@/store'
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

const request = axios.create(config)

// 请求拦截器
request.interceptors.request.use(
  config => {
    // Do something before request is sent
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = token // 请求头部添加token
    }
    return config
  },
  error => {
    // Do something with request error
    return Promise.reject(error)
  }
)
// 响应拦截器
// Add a response interceptor
request.interceptors.response.use(
  response => {
    console.log('response:', response)
    // 获取后台返回的数据，如果需要获取http头部和状态信息，直接返回response
    const res = response.data
    // 当前项目定义code为0表示请求成功
    if (res.code !== 0) {
      if (res.msg) {
        Message.error({
          message: res.msg || 'Error'
        })
      }
      return Promise.reject(new Error(res.msg || 'Error'))
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message.error({
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default request
