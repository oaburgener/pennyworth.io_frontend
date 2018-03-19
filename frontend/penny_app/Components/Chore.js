import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Chore extends Component {
  componentDidMount() {
    this.props.getUserServices()
  }

render () {
    return (
      <View>
        {this.props.userServices && this.props.chores.map(chore => {
          return(
            <View style={styles.containerStyle}>
              <Text style={styles.choreStyle}>{chore.label}</Text>
              <Text style={styles.noteStyle}>{chore.notes}</Text>
            </View>
          )}
        )}
      </View>
    )
  }
}

const styles = {
  choreStyle: {
    color: '#A1A1A5',
    fontSize: 15,
    padding: 5,
    fontWeight: 'bold',
  },
  noteStyle: {
    color: '#A1A1A5',
    fontSize: 15,
    padding: 10,
    marginLeft: 50,
  },
}

export default Chore
