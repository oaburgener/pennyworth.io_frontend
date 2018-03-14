import {
  GET_SERVICES,
  GET_USER_SERVICES,
} from '../actions/services'

let initialState = {
  services: [],
  userServices: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
    return {
      ...state,
      services: action.data
    }
    case GET_USER_SERVICES:
    return {
      ...state,
      userServices: action.data
    }
    default: return state
  }
}
