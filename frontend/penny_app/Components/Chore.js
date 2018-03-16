import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class Chore extends Component {
  componentDidMount() {
    this.props.getUserServices()
  }

render () {
    return (
      <View>
        {this.props.userServices && this.props.userServices.map(service => {
          return(
            <View style={styles.containerStyle}>
              <Text style={styles.choreStyle}>{service.label}</Text>
              <Text style={styles.noteStyle}>{service.notes}</Text>
            </View>
          )}
        )}
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    // flexDirection: 'row',
  },
  choreStyle: {
    color: '#A1A1A5',
    fontSize: 15,
    padding: 5,
    marginTop: 10,
  },
  noteStyle: {
    color: '#A1A1A5',
    fontSize: 15,
    padding: 5,
    marginLeft: 50,
  },
}

export default Chore
