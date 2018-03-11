import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
<<<<<<< HEAD
import Router from './Router'
=======
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Card from './Components/Card'
import Schedule from './Components/Schedule'
import ServiceContainer from './Components/ServiceContainer'
>>>>>>> 38ff251190d9acae4544ec9d40ee11b8566cb601


export default class App extends Component {
<<<<<<< HEAD
=======
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAjvY8NfSXL8a2bM9lysxnVv302NYz9ERU",
      authDomain: "pennyworth-2270a.firebaseapp.com",
      databaseURL: "https://pennyworth-2270a.firebaseio.com",
      projectId: "pennyworth-2270a",
      storageBucket: "pennyworth-2270a.appspot.com",
      messagingSenderId: "848174528111"
    });
  }
>>>>>>> 38ff251190d9acae4544ec9d40ee11b8566cb601

  render() {
    console.disableYellowBox = true
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
<<<<<<< HEAD
      <Router />
    )
=======
      <Provider store={ store }>
        <SignUp></SignUp>
      </Provider>
    );
>>>>>>> 38ff251190d9acae4544ec9d40ee11b8566cb601
  }
}
