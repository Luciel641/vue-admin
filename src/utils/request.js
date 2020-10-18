// 封装 axios
import axios from 'axios'

// 创建一个axios实例
const request = axios.create({
  // 基础url，会在请求url中自动添加前置链接
  baseURL: process.env.VUE_APP_BASE_API,
  // 设置超时时间
  timeout: 5000
})

export default request
