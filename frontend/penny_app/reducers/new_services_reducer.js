import {
  UPDATE_DATE_TIME,
  UPDATE_SERVICE_ID,
  UPDATE_NOTES
} from '../actions/dateTime'

let initialState = {
  reservation: {
    date: '',
    time: '',
    label: '',
    notes: '',
    user_id: 0,
    service_id: 0
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DATE_TIME:
      return {
        ...state,
        reservationDate: action.data.date,
      }
    case UPDATE_SERVICE_ID:
      return {
        ...state,
        reservationServiceId: action.data.service_id
      }
    case UPDATE_NOTES:
      return {
        ...state,
        reservationNotes: action.data.notes
      }
    default: return state
  }
}
