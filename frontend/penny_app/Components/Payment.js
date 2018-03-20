import React, { Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, secureTextEntry,autoCorrect, autoCapitalize} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

class Payment extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { viewStyles, textInputStyles, view1Styles, textStyle } = styles;

    return (
    <View style={view1Styles}>
      <View style={viewStyles}>
        <Text style={{marginLeft:20, fontWeight:'bold'}}>Total:</Text>
        <TextInput
          style={textInputStyles}
          autoCapitalize="none"
          autoCorrect={ false }
          value='$99.00'
        />

        <TextInput
          style={textInputStyles}
          placeholder='1234-1234-1234-1234'
          autoCapitalize="none"
          autoCorrect={ false }
          />

        <TextInput
          style={textInputStyles}
          placeholder='01/01/2020'
          autoCapitalize="none"
          autoCorrect={ false }
          />
      </View>
      <Text style={textStyle}>Update Payment Method</Text>
    </View>
    )
  }
}

const styles = {
  view1Styles: {
    flex: 1,
  },
  viewStyles: {
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 15,
    margin: 20,
    paddingTop: 15,
    backgroundColor:'white',
    paddingBottom: 20,

  },
  textInputStyles: {
    height: 60,
    alignSelf: 'stretch',
    marginTop: 1,
    marginLeft: 20,
    marginRight: 20,
    paddingLeft: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#5f6063',
    alignItems: 'center',
    marginTop: 5
  },
  textStyle: {
    alignSelf: 'center',
    paddingTop: 7,
    fontSize: 20,
    color: '#5f6063',
    fontWeight: 'bold'
  }

}

export default Payment
