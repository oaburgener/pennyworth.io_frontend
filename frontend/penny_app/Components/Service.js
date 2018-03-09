import React, { Component } from 'react'
import {
 View,
 StyleSheet,
 Text,
 TouchableOpacity,
 Switch,
 ScrollView,
} from 'react-native'

class Service extends Component {
 constructor(props) {
   super(props)
   this.state = {
     service: '',
     notes: '',
   }
 }

 render() {
   return (
     <View>
       <View style={styles.serviceContainer}>
         <Text style={styles.serviceStyle}>{"Tidy-up"}</Text>
         <Switch style={styles.toggle}
           onTintColor = '#982D37'
          />
        </View>
        <View style={styles.notesContainer}>
          <Text style={styles.notes}>{"Notes"}</Text>
          <Text style={styles.notesText}>{"Dust living room, check plants, clean mirror, sort mail"}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  serviceContainer: {
    flexDirection: 'row',
    marginTop: 40,
    marginLeft: 9,
    marginBottom: 12,
  },
  serviceStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
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
  toggle: {
    marginLeft: 180,
  },
   submitButtonStyle: {
     alignSelf: 'stretch',
     backgroundColor: '#982D37',
     borderRadius: 7,
     borderWidth: 1,
     borderColor: '#982D37',
     marginLeft: 40,
     marginRight: 40,
     marginTop: 350,
   },
   submitTextStyles: {
     alignSelf: 'center',
     color: '#fff',
     fontSize: 16,
     fontWeight: '600',
     paddingTop: 15,
     paddingBottom: 15
   },
})

export default Service
