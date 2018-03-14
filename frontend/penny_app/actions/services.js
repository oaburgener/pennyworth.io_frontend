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
  return async (dispatch) => {

  firebase.auth().currentUser.getIdToken(true)
    .then(function(idToken) {
      fetch(`http://localhost:3001/users_services/${idToken}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      })
      .then(response => console.log(response))
      .then(json => {
        dispatch({
          type: GET_USER_SERVICES,
          data: json,
        })
      })
    })
  }
}
