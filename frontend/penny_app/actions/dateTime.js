import firebase from 'firebase'

export const UPDATE_DATE_TIME = 'UPDATE_DATE_TIME'
export const UPDATE_SERVICE_ID = 'UPDATE_SERVICE_ID'
export const UPDATE_NOTES = 'UPDATE_NOTES'
export const GET_USER_ID = 'GET_USER_ID'

export const getDateTime = (date) => {

  let newDate = JSON.stringify(date)

  return async (dispatch) => {
    dispatch({
      type: UPDATE_DATE_TIME,
      date: newDate.replace(/\"/g, ""),
    })
  }
}

export const getServiceId = (id) => {

  return async (dispatch) => {
    dispatch({
      type: UPDATE_SERVICE_ID,
      service_id: id
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
       user_id: json.id,
     })
  }
}


export const postService = (body) => {
  let newBody = JSON.stringify(body)

  console.log(newBody);

  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/users_services/',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept': 'application/json'
      },
      body: newBody
    })

    //   dispatch({
    //    type: POST_SERVICE,
    //    data: true
    // })
  }
}
