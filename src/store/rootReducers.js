import { combineReducers } from 'redux'
import { authReducer } from './AuthContext/authReducer'
import myteamReducer from './MyteamContext/myteamReducer'
import searchReducer from './SearchContext/SearchReducers'

const rootReducers = combineReducers({
  myTeamRootReducer: myteamReducer,
  heroesRootReducer: searchReducer,
  authRootReducer: authReducer,
})

export default rootReducers
