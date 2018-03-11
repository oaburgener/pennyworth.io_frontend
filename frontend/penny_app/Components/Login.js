<<<<<<< HEAD
import React, { Component } from 'react'
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
=======
import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, secureTextEntry,autoCorrect, autoCapitalize} from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions/auth'

>>>>>>> 38ff251190d9acae4544ec9d40ee11b8566cb601

class Login extends Component {
  constructor(props) {
    super(props)
  }

  onEmailChange(text) {
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  onButtonPress() {
    const { email, password } = this.props

    this.props.loginUser({ email, password })
  }

  renderError() {
    if (this.props.error) {
      return (
        <View>
          <Text style={ styles.errorTextStyle }>
            { this.props.error }
          </Text>
        </View>
      )
    }
  }

  renderButton() {
    return (
      <TouchableOpacity style={styles.loginButtonStyle} onPress={ this.onButtonPress.bind(this)}>
        <Text style={styles.loginTextStyles}>Login</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const { viewStyles, textInputStyles, emailTextStyles, passwordTextStyles, loginTextStyles,
            submitTextStyles, loginButtonStyle, submitButtonStyle } = styles

    return (
      <View style={viewStyles}>
<<<<<<< HEAD
        <Image style={{width: '75%', height: 100, resizeMode: 'center'}} source={require('../assets/pw_logo.png')}/>
          <Text style={emailTextStyles}>Email</Text>
        <TextInput style={textInputStyles} placeholder='example@gmail.com'/>
          <Text style={passwordTextStyles}>Password</Text>
        <TextInput style={textInputStyles} placeholder='password'/>
        <TouchableOpacity style={styles.loginButtonStyle} onPress={()=> Actions.services()}>
=======
        <Image style={{width: '75%', height: 100, resizeMode: 'center', marginTop:25}} source={require('../assets/pw_logo.png')}/>
        <Text style={emailTextStyles}>Email</Text>
        <TextInput
          style={textInputStyles}
          placeholder='example@email.com'
          autoCapitalize="none"
          autoCorrect={ false }
          onChangeText={ this.onEmailChange.bind(this) }
          value={ this.props.email}/>
        <Text style={passwordTextStyles}>Password</Text>
        <TextInput style={textInputStyles}
          secureTextEntry
          placeholder='password'
          autoCorrect={ false }
          autoCapitalize="none"
          onChangeText={ this.onPasswordChange.bind(this) }
          value={ this.props.password }
        />
        { this.renderError() }
        { this.renderButton()}
        {/* <TouchableOpacity style={styles.loginButtonStyle}>
>>>>>>> 38ff251190d9acae4544ec9d40ee11b8566cb601
          <Text style={styles.loginTextStyles}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButtonStyle}>
          <Text style={styles.submitTextStyles}>Sign Up</Text>
        </TouchableOpacity> */}
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

<<<<<<< HEAD
export default Login
=======
const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Login)


// export default Login
>>>>>>> 38ff251190d9acae4544ec9d40ee11b8566cb601
