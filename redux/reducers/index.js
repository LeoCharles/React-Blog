import { combineReducers } from 'redux'
import app from './app'
import user from './user'
import article from './article'

export default combineReducers({
  app,
  user,
  article
})