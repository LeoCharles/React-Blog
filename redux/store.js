import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const bindMiddleWare = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    const { logger } = require('redux-logger')
    middleware.push(logger)
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const makeStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    bindMiddleWare([thunk])
  )
}

export default makeStore
