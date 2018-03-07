import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Chore extends Component {
  constructor(props){
    super(props)
    this.state = {
      chore: '',
      notes: ''
    }
  }

render () {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.choreStyle}>{"Tidy-up"}</Text>
        <Text style={styles.noteStyle}>{"Tidy-up"}</Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  choreStyle: {
    color: '#A1A1A5',
    fontSize: 15,
    padding: 5,
  },
  noteStyle: {
    color: '#A1A1A5',
    fontSize: 15,
    padding: 5,
    marginLeft: 160,
  },
}

export default Chore
