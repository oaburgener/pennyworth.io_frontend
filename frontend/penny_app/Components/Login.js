import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, secureTextEntry,autoCorrect, autoCapitalize} from 'react-native'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions/auth'


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
    if (this.props.loading) {
      return <Spinner size="large" />
    }
    return (
      <TouchableOpacity style={styles.loginButtonStyle}>
        <Text style={styles.loginTextStyles}>Login</Text>
      </TouchableOpacity>
    )
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
        <TextInput style={textInputStyles}
          secureTextEntry={ this.props.secureTextEntry }
          autoCorrect={ false }
          autoCapitalize="none"
          value={ this.props.value }
          onChangeText={ this.props.onChangeText }
          placeholder='password'
        />
        <TouchableOpacity style={styles.submitButtonStyle}>
          <Text style={styles.submitTextStyles}>Sign Up</Text>
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

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth
  return { email, password, error, loading }
}

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(Login)


// export default Login
