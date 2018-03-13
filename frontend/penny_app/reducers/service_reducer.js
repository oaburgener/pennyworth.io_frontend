import {
  GET_SERVICES,
  GET_NOTES,
} from '../actions/services'

let initialState = {
  services: [],
  notes: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICES:
    return {
      ...state,
      services: action.data
    }
    case GET_NOTES:
    return {
      ...state,
      notes: action.data
    }
    default: return state
  }
}
