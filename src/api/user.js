import request from '../utils/request'

/**
 * 获取验证码
 */
export function sendSmsCode (mobile) {
  return request({
    method: 'GET',
    url: `/app/v1_0/sms/codes/${mobile}`
  })
}

export function login (data) {
  return request({
    method: 'POST',
    url: '/app/v1_0/authorizations',
    data
  })
}
