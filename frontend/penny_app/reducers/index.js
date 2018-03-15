import { combineReducers } from 'redux'
import AuthReducer from './auth_reducer'
import ServiceReducer from './service_reducer'

export default combineReducers({
  auth: AuthReducer,
  ServiceReducer,
})
