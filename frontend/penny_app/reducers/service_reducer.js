import {
  GET_SERVICES,
  GET_USER_SERVICES,
  GET_PW
} from '../actions/services'

let initialState = {
  services: [],
  userServices: [],
  userPennyworker:[]
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
    case GET_PW:
    return {
      ...state,
      userPennyworker: action.data
    }
    default: return state
  }
}
