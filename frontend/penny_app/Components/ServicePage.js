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

class ServicePage extends Component {

 render() {
   return (
     <View style={styles.viewContainer}>
       <ScrollView>
         <ServiceContainer />
       </ScrollView>
       <View style={styles.buttonContainer}>
         <TouchableOpacity style={styles.submitButtonStyle}>
           <Text style={styles.submitTextStyles}>Update</Text>
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
   submitButtonStyle: {
     alignSelf: 'stretch',
     backgroundColor: '#982D37',
     borderRadius: 7,
     borderWidth: 1,
     borderColor: '#982D37',
     marginLeft: 40,
     marginRight: 40,
     marginBottom: 20,
   },
   submitTextStyles: {
     alignSelf: 'center',
     color: '#fff',
     fontSize: 16,
     fontWeight: '600',
     paddingTop: 15,
     paddingBottom: 15
   },
   buttonContainer: {
     paddingTop: 20,
     backgroundColor: '#efefef',
   },
})

export default ServicePage
