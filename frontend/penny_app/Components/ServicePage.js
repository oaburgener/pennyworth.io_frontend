import React, { Component } from 'react'
import {
 View,
 StyleSheet,
 Text,
 TouchableOpacity,
 Switch,
 ScrollView,
} from 'react-native'
import ServiceContainer from '../Containers/ServiceContainer'
import { Actions } from 'react-native-router-flux'

class ServicePage extends Component {

 render() {
   return (
     <View style={styles.viewContainer}>
       <ScrollView>
         <TouchableOpacity style={styles.customButtonStyle}>
           <Text style={styles.customTextStyles}>Custom Services</Text>
         </TouchableOpacity>
         <ServiceContainer />
       </ScrollView>
       <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.updateButtonStyle} onPress={()=> Actions.card()}>
           <Text style={styles.updateTextStyles}>Update</Text>
         </TouchableOpacity>
       </View>
     </View>
   )
 }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  customTextStyles: {
    alignSelf: 'center',
    color: '#982D37',
    fontSize: 12,
    fontWeight: '600',
    paddingTop: 5,
    paddingBottom: 5
  },
  customButtonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#982D37',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 10
  },
  updateButtonStyle: {
    alignSelf: 'stretch',
    backgroundColor: '#982D37',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#982D37',
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  updateTextStyles: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 15,
    paddingBottom: 15
  },
  buttonContainer: {
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    paddingTop: 20,
    backgroundColor: '#efefef',
  },
})

export default ServicePage
