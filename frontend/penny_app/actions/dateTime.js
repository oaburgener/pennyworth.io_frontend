export const UPDATE_DATE_TIME = 'UPDATE_DATE_TIME'
export const UPDATE_SERVICE_ID = 'UPDATE_SERVICE_ID'
export const UPDATE_NOTES = 'UPDATE_NOTES'
export const GET_USER_ID = 'GET_USER_ID'

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

export const getUserId = () => {
  return async (dispatch) => {

    const idToken = await firebase.auth().currentUser.getIdToken(true)
    const response = await fetch(`http://localhost:3001/users_services/${idToken}`)
    const json = await response.json()

     dispatch({
       type: GET_USER_ID,
       data: json,
     })
  }
}
