import * as TYPES from '../types'

// 切换登录/注册模态框
export const switchSignModal = (type, visible) => ({
  type: TYPES.APP_SWITCH_SIGN_MODAL,
  payload: {
    type,
    visible
  }
})