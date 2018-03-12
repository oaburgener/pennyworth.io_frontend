import {
  GET_SERVICES,
} from '../actions/services'

let initialState = {
  services: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
    return {
      ...state,
      services: action.data
    }
    default: return state
  }
}
