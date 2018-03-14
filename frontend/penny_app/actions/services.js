import firebase from 'firebase'

export const GET_SERVICES = 'GET_SERVICES'
export const GET_USER_SERVICES = 'GET_USER_SERVICES'

export const getServices = () => {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3001/services/')
    const json = await response.json()

    dispatch({
      type: GET_SERVICES,
      data: json,
    })
  }
}

export const getUserServices = () => {
  return async(dispatch) => {

    const idToken = await firebase.auth().currentUser.getIdToken(true)
    const response = await fetch(`http://localhost:3001/users_services/${idToken}`)
    const json = await response.json()

     dispatch({
       type: GET_USER_SERVICES,
       data: json,
     })
  }
}
