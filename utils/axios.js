import axios from 'axios'
import { message } from 'adntd'
import store from '../redux/store'

const BASE_URL = ''

// 创建 axios 实例
const service = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})

let timer

// 请求拦截
service.interceptors.request.use(
  config => {

  },
  error => {
    message.error('bad request')
    Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // 200 毫秒内重复报错只提示一次
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (error.response) {
        const { status, data} = error.response

        switch (status) {
          case 401:
            // 登录信息过期 退出登录
            message.error(data.message || '登录信息过期或未授权，请重新登录！')
            break

          default:
            message.error(data.message || `错误连接 ${status}!`)
        }
      } else {
        message.error(error.message)
      }
    }, 200)
  }
)

export default service