import firebase from 'firebase'

export const FIRSTNAME_CHANGED = 'firstName_changed'
export const LASTNAME_CHANGED = 'lastName_changed'
export const ADDRESS_CHANGED = 'address_changed'
export const EMAIL_CHANGED = 'email_changed'
export const PASSWORD_CHANGED = 'password_changed'
export const LOGIN_USER_SUCCESS = 'login_user_success'
export const LOGIN_USER_FAIL = 'login_user_fail'
export const LOGIN_USER = 'login_user'

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

// return (dispatch) is from thunk
export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log('action/index error', error)

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch))
      })
  }
}

export const signUpUser = ({ first_name, last_name, email, token, address }) => {

  let body = JSON.stringify({ first_name:first_name, last_name:last_name, email:email, token:token, address:address })

  return async (dispatch) => {
    dispatch({ type: LOGIN_USER })

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log('action/index error', error)

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch))
      })

      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Accept': 'application/json'
        },
        body:body
      })
  }
}
// // return (dispatch) is from thunk
// export const loginUser = ({ email, password }) => {
//   return (dispatch) => {
//     dispatch({ type: LOGIN_USER })
//
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then(user => loginUserSuccess(dispatch, user))
//       .catch((error) => {
//         console.log('action/index error', error)
//       })
//   }
// }
//
// export const signUpUser = ({firstName, lastName, email, password, address}) => {
//   return (dispatch) => {
//     dispatch({ type: SIGNUP_USER})
//
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//
//     .catch(function(error) {
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // ...
//     });
//   }
// }

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  })
}
