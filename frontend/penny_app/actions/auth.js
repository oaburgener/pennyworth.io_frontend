import firebase from 'firebase'

export const FIRSTNAME_CHANGED = 'firstName_changed'
export const LASTNAME_CHANGED = 'lastName_changed'
export const ADDRESS_CHANGED = 'address_changed'
export const EMAIL_CHANGED = 'email_changed'
export const PASSWORD_CHANGED = 'password_changed'
export const LOGIN_USER_SUCCESS = 'login_user_success'
export const LOGIN_USER_FAIL = 'login_user_fail'
export const LOGIN_USER = 'login_user'
export const SIGNUP = 'signup'

export const firstNameChanged = (text) => {
  return {
    type: FIRSTNAME_CHANGED,
    payload: text
  }
}

export const lastNameChanged = (text) => {
  return {
    type: LASTNAME_CHANGED,
    payload: text
  }
}

export const addressChanged = (text) => {
  return {
    type: ADDRESS_CHANGED,
    payload: text
  }
}

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))

        firebase.auth().currentUser.getIdToken(true)
        .then(function(idToken) {
        fetch(`http://localhost:3001/users_services/${idToken}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        })
    })
  }
}


export const signUpUser = ({ first_name, last_name, email, password, address }) => {

  let body = {
    first_name: first_name,
    last_name: last_name,
    email: email,
    password: '',
    address: address
  }

  return async (dispatch) => {

        await firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              body.password = user.uid

              fetch('http://localhost:3001/users/', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                },
              })
            }
          })
    dispatch({ type: SIGNUP })
  }
}

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
}
