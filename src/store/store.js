import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from './rootReducers'
import { loadState, saveState } from './localStorage'

const persistedStore = loadState()

const middleware = [thunk]

const store = createStore(
  rootReducers,
  persistedStore,
  composeWithDevTools(applyMiddleware(...middleware))
)
store.subscribe(() => {
  saveState(store.getState())
})

export default store
