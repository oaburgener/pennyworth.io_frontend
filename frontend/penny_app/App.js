/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import Login from './Components/Login';


export default class App extends Component{
  // componentDidMount(){
  //   firebase.initializeApp({
  //     apiKey: "AIzaSyAjvY8NfSXL8a2bM9lysxnVv302NYz9ERU",
  //     authDomain: "pennyworth-2270a.firebaseapp.com",
  //     databaseURL: "https://pennyworth-2270a.firebaseio.com",
  //     projectId: "pennyworth-2270a",
  //     storageBucket: "pennyworth-2270a.appspot.com",
  //     messagingSenderId: "848174528111"
  //   });
  // }

  render() {
    return (
      <View>
        <Login></Login>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
