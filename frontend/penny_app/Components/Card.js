import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Chore from './Chore'

class Card extends Component {
  constructor(props){
    super(props)
    this.state = {
      date: 'Tuesday, March 6',
      name: 'Nate'
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
        <Chore></Chore>
        <Text style={styles.editDetails}>{"Edit Details"}</Text>
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    height: 'auto',
    borderColor: '#F4F4F4',
    borderWidth: 1,
    borderRadius: 15,
    margin: 20,
    paddingLeft: 20,
    paddingTop: 5,
  },
  headerStyle: {
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
    padding: 5,
  },
  paragraphStyle: {
    color: '#A1A1A5',
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
  pennyworkerStyle: {
    marginLeft: 7,
    color: '#982D37',
    fontSize: 16,
    padding: 5,
  },
  editDetails: {
    color: '#982D37',
    fontSize: 16,
    padding: 5,
    alignSelf: 'center',
    marginBottom: 9,
  },
  pennyworkerImage: {
    height: 35,
    width: 35,
    borderRadius: 18,
  },
  pennyworkerContainer:{
    flexDirection: 'row',
    marginTop: 9,
    marginLeft: 9,
    marginBottom: 12,
  }
}

export default Card
