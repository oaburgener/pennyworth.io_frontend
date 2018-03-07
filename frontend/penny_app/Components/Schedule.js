import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Chore from './Chore'

class Schedule extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

render () {
    return (
      <View style={styles.containerStyle}>
        <Text style={styles.paragraphStyle}>{"Upcoming"}</Text>
        <Text style={styles.headerStyle}>{this.state.date}</Text>
        <View style={styles.pennyworkerContainer}>
          <Image style={styles.pennyworkerImage} source={require('../assets/nate.jpg')} />
          <Text style={styles.pennyworkerStyle}>{this.state.name}</Text>
        </View>
        <Text style={styles.editDetails}>{"Edit Details"}</Text>
      </View>
    )
  }
}

const styles = {

}

export default Schedule
