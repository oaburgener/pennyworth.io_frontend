import {
  UPDATE_DATE_TIME,
} from '../actions/dateTime'

let initialState = {
  reservation: {
    date: '',
    time: '',
    label: '',
    notes: '',
    id: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATE_TIME:
      return {
        ...state,
        reservationDate: action.data.date,
        reservationTime: action.data.time
      }
    default: return state
  }
}
