import Axios from 'axios'
import { Toast } from 'vant'

const axios = Axios.create({
  baseURL: '',
  timeout: 10000
})

axios.interceptors.request.use(
  config => {
    // token
    return config
  }, error => {
    return Promise.error(error)
  }
)

axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 404:
          Toast({
            message: '网络请求不存在',
            duration: 1500,
            forbidClick: true
          })
          break
        case 400:
          Toast({
            message: '服务器繁忙',
            duration: 1500,
            forbidClick: true
          })
          break
        default:
          Toast({
            message: '请求失败',
            duration: 1500,
            forbidClick: true
          })
      }
      return Promise.reject(error.response)
    }
  }
)

export function get (url, params = '') {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, {
      params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

export default axios
