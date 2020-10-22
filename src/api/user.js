import request from '@/utils/request'
// 登录
export function login(data) {
  console.log('data: ', data)
  return request.post('/user/login', data)
}

// 获取用户信息
export function getInfo(token) {
  return request.post('/user/getInfo', token)
}
