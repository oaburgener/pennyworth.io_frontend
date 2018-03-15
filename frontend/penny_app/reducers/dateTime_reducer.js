import {
  GET_DATETIME,
} from '../actions/dateTime'

let initialState = {
  date: '',
  time: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATETIME:
    return {
      ...state,
      date: action.data.date,
      time: action.data.time
    }
    default: return state
  }
}
