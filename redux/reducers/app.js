import * as TYPES from '../types'

// app 通用状态
const defaultState = {
  // 登录 / 注册模态框状态
  signModal: {
    visible: false,
    type: 'login'
  }
}

export const appReducer = (state = defaultState, action) => {
  const { type, payload } = action

  switch(type) {
    case TYPES.APP_SWITCH_SIGN_MODAL:
      return {...state, signModal: payload}

    default:
      return state
  }
}

export default appReducer