import request from '@/utils/request'
// 登录
export function login(data) {
  return request.get('/user/login', data)
}

// 获取用户信息
export function getInfo(token) {}
