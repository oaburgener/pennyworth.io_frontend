import React, { Component } from 'react'
import {
 View,
 StyleSheet,
 Text,
 TouchableOpacity,
 Switch,
 ScrollView,
} from 'react-native'

class Note extends Component {
  componentDidMount(){
    this.props.getServices()
    this.props.getNotes()
  }

  renderServices() {
    return this.props.notes.map(ele => {
      return ele.services
    })
  }

 render() {
   return (
     <View>
       {this.renderServices().map(ele => {

         return(
           <ScrollView>
              <View style={styles.notesContainer}>
                <Text style={styles.notes}>{"Notes"}</Text>
                <Text style={styles.notesText}>{"Dust living room, check plants, clean mirror, sort mail"}</Text>
              </View>
           </ScrollView>
          )
       })}
     </View>
   )
 }
}

const styles = StyleSheet.create({
  notesContainer: {
    marginTop: 20,
    flexDirection: 'row',
    width: '70%',
  },
  notes: {
    color: '#A1A1A5',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 50,
  },
  notesText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 15,
  },
})

export default Note
