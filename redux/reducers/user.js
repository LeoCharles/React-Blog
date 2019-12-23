import * as TYPES from '../types'
import { ROLE_TYPE } from '../../utils/config'

const defaultState = {
  username: '',
  role: ROLE_TYPE['2'],
  userId: 0,
  github: null
}

// reducer
export const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.USER_LOGIN:
      return
    case TYPES.USER_LOGOUT:
      return
    default:
      return state
  }
}

export default userReducer