import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    const { viewStyles, textInputStyles, emailTextStyles, passwordTextStyles, loginTextStyles,
            submitTextStyles, loginButtonStyle, submitButtonStyle } = styles;

    return (
      <View style={viewStyles}>
        <Image style={{width: '75%', height: 100, resizeMode: 'center', marginTop:25}} source={require('../assets/pw_logo.png')}/>
        <Text style={emailTextStyles}>Email</Text>
        <TextInput style={textInputStyles} placeholder='example@gmail.com'/>
        <Text style={passwordTextStyles}>Password</Text>
        <TextInput style={textInputStyles} placeholder='password'/>
        <TouchableOpacity style={styles.loginButtonStyle}>
          <Text style={styles.loginTextStyles}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButtonStyle}>
          <Text style={styles.submitTextStyles}>Submit</Text>
        </TouchableOpacity>
      </View>


    )
  }
}

const styles = {
  viewStyles: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputStyles: {
    height: 60,
    alignSelf: 'stretch',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#982D37'
  },
  emailTextStyles: {
    alignSelf: 'flex-start',
    marginTop: 50,
    marginLeft: 10,
    color: '#982D37',
    fontSize: 16,
    fontWeight: '600'
  },
  passwordTextStyles: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 10,
    color: '#982D37',
    fontSize: 16,
    fontWeight: '600'
  },
  loginTextStyles: {
    alignSelf: 'center',
    color: '#982D37',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  submitTextStyles: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  loginButtonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#982D37',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50
  },
  submitButtonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#982D37',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#982D37',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  }
}



export default Login
