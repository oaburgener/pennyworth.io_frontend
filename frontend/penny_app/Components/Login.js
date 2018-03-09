import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }
  render() {
    const { viewStyles, textInputStyles, emailTextStyles, passwordTextStyles, loginTextStyles,
            submitTextStyles, loginButtonStyle, submitButtonStyle } = styles

    return (
      <View style={viewStyles}>
        <Image style={{width: '75%', height: 100, resizeMode: 'center'}} source={require('../assets/pw_logo.png')}/>
          <Text style={emailTextStyles}>Email</Text>
        <TextInput style={textInputStyles} placeholder='example@gmail.com'/>
          <Text style={passwordTextStyles}>Password</Text>
        <TextInput style={textInputStyles} placeholder='password'/>
        <TouchableOpacity style={styles.loginButtonStyle} onPress={()=> Actions.services()}>
          <Text style={styles.loginTextStyles}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButtonStyle}>
          <Text style={styles.submitTextStyles}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textInputStyles: {
    height: 60,
    alignSelf: 'stretch',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#982D37'
  },
  emailTextStyles: {
    alignSelf: 'flex-start',
    marginTop: 50,
    marginLeft: 40,
    color: '#982D37',
    fontSize: 16,
    fontWeight: '600'
  },
  passwordTextStyles: {
    alignSelf: 'flex-start',
    marginTop: 20,
    marginLeft: 40,
    color: '#982D37',
    fontSize: 16,
    fontWeight: '600',
  },
  loginTextStyles: {
    alignSelf: 'center',
    color: '#982D37',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15
  },
  submitTextStyles: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15
  },
  loginButtonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 7,
    borderWidth: 1.5,
    borderColor: '#982D37',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 50
  },
  submitButtonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#982D37',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#982D37',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
  }
}

export default Login
