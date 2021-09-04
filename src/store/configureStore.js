import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import prices from './reducers/prices'
import options from './reducers/options'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  // Setup middleware
  const middlewares = [thunk]

  const store = createStore(
    combineReducers({
      prices,
      options
    }),
    composeEnhancers(applyMiddleware(...middlewares))
  )

  return store
}
