import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from 'firebase'
import Router from './Router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'

export default class App extends Component {

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

  render() {
    console.disableYellowBox = true
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={ store }>
        <Router />
      </Provider>
    )
  }
}
