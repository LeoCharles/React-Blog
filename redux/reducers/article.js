import * as TYPES from '../types'

const defaultState = {
  tagList: []
}

// reducer
export const articleReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.ARTICLE_GET_TAG_LIST:
      return
    default:
      return state
  }
}

export default articleReducer