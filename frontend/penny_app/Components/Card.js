import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import ChoreContainer from '../Containers/ChoreContainer'

class Card extends Component {
  componentDidMount() {
    this.props.getUserServices()
  }

  formatMonth(date) {
    let month = ['Jan.', 'Feb.', 'March', 'Apr.', 'May', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
    for (var i = 0; i < month.length; i++) {
      if (date.slice(5, 7) == i) {
      return `${month[i -1]}, ${date.slice(8, 10)}`
      }
    }
  }

  render () {

    return (
      <ScrollView>
        {this.props.userServices && this.props.userServices.map(service => {

          return(
            <View key={service.id} style={styles.containerStyle}>
              <Text style={styles.paragraphStyle}>{"Upcoming"}</Text>
              <Text style={styles.headerStyle}>{this.formatMonth(service.date)}</Text>
              <View style={styles.pennyworkerContainer}>
                <Image style={styles.pennyworkerImage} source={require('../assets/nate.jpg')} />
                <Text style={styles.pennyworkerStyle}>{"name"}</Text>
              </View>
                <ChoreContainer />
                {/* <Text style={styles.editDetails}>{"Edit Details"}</Text> */}
            </View>
          )}
        )}
      </ScrollView>
    )
  }
}

const styles = {
  containerStyle: {
    backgroundColor: 'white',
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
    paddingBottom: 10,
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
  },
}

export default Card
