export const UPDATE_DATE_TIME = 'UPDATE_DATE_TIME'
export const UPDATE_SERVICE_ID = 'UPDATE_SERVICE_ID'
export const UPDATE_NOTES = 'UPDATE_NOTES'

export const getDateTime = (date) => {

  return async (dispatch) => {
    dispatch({
      type: UPDATE_DATE_TIME,
      date: date,
    })
  }
}

export const getServiceId = (id) => {

  return async (dispatch) => {
    dispatch({
      type: UPDATE_SERVICE_ID,
      service_id: service_id
    })
  }
}

export const getNotes = (notes) => {

  return async (dispatch) => {
    dispatch({
      type: UPDATE_NOTES,
      notes: notes
    })
  }
}
