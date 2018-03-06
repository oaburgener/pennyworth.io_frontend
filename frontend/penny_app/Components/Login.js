import React, { Component } from 'react';
import { View, TextInput } from 'react-native'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: 'example@gmail.com',
      password: ''
    }
  }
  render() {

    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
      </View>


    )
  }
}



export default Login
